
const maps = {};

const getNormalMap = () => {
    maps.normalMap.anisotropy = 2;
    return maps.normalMap;
};

const getLampMap = () => {
    return maps.softLight;
};

const loadTextures = (callback) => {
    const keys = ['softLight', 'normalMap'];
    const urls = [
        './m/soft-light.jpeg',
        './m/normalmap.png'
    ];
    let k = 0;
    for (let i = 0; i < urls.length; i++) {
        maps[keys[i]] = new THREE.TextureLoader().load(urls[i], ()=> {
            if (++k === urls.length) callback();
        });
        maps[keys[i]].flipY = false;
        maps[keys[i]].wrapS = THREE.RepeatWrapping;
        maps[keys[i]].wrapT = THREE.RepeatWrapping;
    }
}

class SoftLightArray extends THREE.Group {
    constructor() {
        super();
        let v = new THREE.Vector3();
        let m = new THREE.Matrix4();
        let softLights = [];
        const w = 26;
        const h = 10;
        const geometry = new THREE.PlaneGeometry( w, h );
        const material = new THREE.MeshBasicMaterial( {
            map: getLampMap(),
            color: 0xFFFFFF,
            side: THREE.BackSide
        } );
        for (let i = 0; i < 3; i++) {
            const rectLight = new THREE.RectAreaLight( 0xffffff, [0.7, 0.3, 0.8][i], w, h );
            v.set(0, 20, 0);
            const euler = new THREE.Euler(0, 0, Math.PI * 2 * i / 3, 'XYZ');
            m.makeRotationFromEuler(euler);
            v.applyMatrix4(m);
            v.z = -10;
            rectLight.position.copy(v);
            rectLight.rotateZ(Math.PI * 2 * i / 3);
            rectLight.rotateX(- Math.PI / 2 - .4);
            this.add( rectLight );
            const plane = new THREE.Mesh( geometry, material );
            softLights.push( plane );
            rectLight.add( plane );
        }
        this.show = () => {
            softLights.forEach(opj => {
                opj.visible = true;
            })
        }
        this.hide = () => {
            softLights.forEach(opj => {
                opj.visible = false;
            })
        }
    }
}

class Mirror extends THREE.Mesh {
    constructor(width, height, uv) {
        const ray = new THREE.Ray();
        const reflectorPlane = new THREE.Plane();
        const renderTarget = new THREE.WebGLRenderTarget( 512, 512, {
            type: THREE.HalfFloatType,
            depthBuffer: true,
            side: THREE.FrontSide
        } );
        let material = new THREE.ShaderMaterial( {
            uniforms: {
                uNormalMap: { value: getNormalMap() },
                uColorTexture: { value: renderTarget.texture },
                uResolution: {value: new THREE.Vector2(width, height)},
                uProjectionMatrix: {value: new THREE.Matrix4()},
                uViewMatrix: {value: new THREE.Matrix4()},
                uVisible: {value: 0.0}
            },
            vertexShader: getMirrorVertexShadder(),
            fragmentShader: getMirrorFragmentShader()
        } );
        // material.side = THREE.DoubleSide;
        const geometry = new THREE.PlaneGeometry( width, height );
        if (uv) geometry.setAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( uv ), 2 ) );
        const d = Math.sqrt(width * width + height * height);
        const virtualCamera = new THREE.OrthographicCamera( -d/2, d/2, d/2, -d/2, 5, 60 );
        
        super (geometry, material);
        this.castShadow = true;
        const lookAtPosition = new THREE.Vector3();
        const p0 = new THREE.Vector3();
        const p1 = new THREE.Vector3();
        const p2 = new THREE.Vector3();
        const normal = new THREE.Vector3();
        const cameraNormal = new THREE.Vector3();
        const reflectorWorldPosition = new THREE.Vector3();
        const cameraWorldPosition = new THREE.Vector3();
        const rotationMatrix = new THREE.Matrix4();
        const cameraRotationMatrix = new THREE.Matrix4();
        const projectionMatrix = new THREE.Matrix4();
        const clipPlane = new THREE.Vector4();
        const q = new THREE.Vector4();

        this.onBeforeRenderManual = (renderer, scene, camera) => {
            this.updateWorldMatrix();
            this.updateMatrix();
            
            reflectorWorldPosition.setFromMatrixPosition( this.matrixWorld );
            cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );
            rotationMatrix.extractRotation( this.matrixWorld );
            cameraRotationMatrix.extractRotation( camera.matrixWorld );
            normal.set( 0, 0, 1 ).applyMatrix4( rotationMatrix );
            cameraNormal.set( 0, 0, -1 ).applyMatrix4( cameraRotationMatrix );
            
            material.uniforms.uVisible.value = cameraNormal.dot( normal );
            if ( material.uniforms.uVisible.value > 0 ) return;
            p0.set(1,1,0).applyMatrix4(this.matrixWorld);
            p1.set(-1,1,0).applyMatrix4(this.matrixWorld);
            p2.set(0,-1,0).applyMatrix4(this.matrixWorld);
            reflectorPlane.setFromCoplanarPoints(p0,p1,p2);
            ray.origin.copy(cameraWorldPosition);
            ray.direction.copy(cameraNormal);
            ray.intersectPlane(reflectorPlane, lookAtPosition);
            p0.subVectors(reflectorWorldPosition, lookAtPosition);
            p1.subVectors(reflectorWorldPosition, cameraWorldPosition).reflect( normal ).negate().add(reflectorWorldPosition).add(p0);
            lookAtPosition.add(p0);

            virtualCamera.far = camera.far;
            virtualCamera.position.copy( p1 );
            virtualCamera.up.set( 0, 1, 0 ).applyMatrix4( rotationMatrix ).reflect( normal );
            virtualCamera.lookAt( lookAtPosition );
            virtualCamera.updateWorldMatrix();
            
            virtualCamera.updateMatrixWorld();
            virtualCamera.projectionMatrix.copy( camera.projectionMatrix );
            reflectorPlane.applyMatrix4( virtualCamera.matrixWorldInverse );
            clipPlane.set( reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant );
            projectionMatrix.copy(virtualCamera.projectionMatrix);
            projectionMatrix.invert();
            q.x = Math.sign(clipPlane.x);
            q.y = Math.sign(clipPlane.y);
            q.z = 1.0;
            q.w = 1.0;
            q.applyMatrix4(projectionMatrix);
            clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );
            virtualCamera.projectionMatrix.elements[2] = clipPlane.x;
            virtualCamera.projectionMatrix.elements[6] = clipPlane.y;
            virtualCamera.projectionMatrix.elements[10] = clipPlane.z;
            virtualCamera.projectionMatrix.elements[14] = clipPlane.w - 1.;

            const currentRenderTarget = renderer.getRenderTarget();
			const currentXrEnabled = renderer.xr.enabled;
			const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
			const currentOutputEncoding = renderer.outputEncoding;
			const currentToneMapping = renderer.toneMapping;
            const currentBackground = scene.background;
			renderer.xr.enabled = false;
			renderer.shadowMap.autoUpdate = false;
			renderer.outputEncoding = THREE.LinearEncoding;
			renderer.toneMapping = THREE.NoToneMapping;
            scene.background = new THREE.Color(0x454545);
            renderer.setRenderTarget( renderTarget );
            renderer.state.buffers.depth.setMask( true );
			if ( renderer.autoClear === false ) renderer.clear();
            renderer.render( scene, virtualCamera );
            renderer.xr.enabled = currentXrEnabled;
			renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
			renderer.outputEncoding = currentOutputEncoding;
			renderer.toneMapping = currentToneMapping;
            scene.background = currentBackground;
            renderer.setRenderTarget( currentRenderTarget );

            material.uniforms.uProjectionMatrix.value = virtualCamera.projectionMatrix;
            material.uniforms.uViewMatrix.value = virtualCamera.matrixWorldInverse;
        }
    }
}

const getMirrorVertexShadder = () => {
    return `
    uniform vec2 uResolution;
    uniform mat4 uProjectionMatrix;
    uniform mat4 uViewMatrix;
    varying vec2 vUv;
    varying vec2 vRealUv;
    varying vec3 vN;
    void main()	{
        vec4 v = uProjectionMatrix * uViewMatrix * modelMatrix * vec4( position, 1.0 );
        vUv = vec2(.5 + v.x * .5, .5 + v.y * .5 );
        vRealUv = uv;
        vN = normalMatrix * normalize(normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`;
}
const getMirrorFragmentShader = () => {
    return `
        vec4 adjustContrast(vec4 color, float value) {
            return .5 + value * (color - .5);
        }
        #define PI 3.1415926538
        varying vec2 vUv;
        varying vec2 vRealUv;
        uniform float uVisible;
        uniform sampler2D uColorTexture;
        uniform sampler2D uNormalMap;
        varying vec3 vN;
        void main()
        {
            if (uVisible > 0.) {
                discard;
            } else {
                vec4 diffusion = texture2D( uNormalMap, vRealUv * 3. );
                vec2 uv = vUv + (.5 - diffusion.xy) * .08;
                vec4 reflection = texture2D( uColorTexture, uv );
                reflection.x *= (1.4 + .2 * max(.5, vN.x) + .2 * (1. - vN.y));
                reflection.y *= (1.1 + .2 * (1. - vN.x) + .2 * max(.5, vN.y));
                reflection.x += max(.5, vN.x) * 0.25;
                reflection.y += max(.5, vN.y) * 0.05;
                vec4 color = vec4(0.15, 0.15, 0.15, 1.);
                color.x *= (1.4 + .2 * max(.5, vN.x) + .2 * (1. - vN.y));
                color.y *= (1.1 + .2 * (1. - vN.x) + .2 * max(.5, vN.y));
                gl_FragColor = adjustContrast(mix(reflection, color, 0.3), 1.4);
            }
        }
    `;
}

class Group extends THREE.Group {
    p0; p1; box; offset; static; iteration; roll;
    constructor() {
        super();
    }
    update (progress) {
        this.position.lerpVectors(this.p0, this.p1, progress);
    }
}

class Box extends THREE.Mesh {
    p0; p1; box; offset; static; iteration; roll; rollAxis; rollCount; rollPass;
    constructor(geometry, material) {
        super(geometry, material);
        // geometry.computeTangents ();
        // geometry.computeVertexNormals ();
        this.castShadow = true;
        this.receiveShadow = true;
    }
    update (progress) {
        this.position.lerpVectors(this.p0, this.p1, progress);
    }
}


class MirrorBox extends THREE.Mesh {
    p0; p1; box; offset; static; iteration; roll; updateReflection;
    constructor(size, uv) {
        super();
        let mirror;
        mirror = new Mirror(size.x, size.y, uv.slice(4 * 8, 4 * 8 + 8));
        mirror.position.z = size.z / 2;
        this.add(mirror);
        mirror = new Mirror(size.x, size.y, uv.slice(5 * 8, 5 * 8 + 8));
        mirror.position.z = -size.z / 2;
        mirror.rotateY(Math.PI);
        this.add(mirror);
        mirror = new Mirror(size.z, size.y, uv.slice(0 * 8, 0 * 8 + 8));
        mirror.position.x = size.x / 2;
        mirror.rotateY(Math.PI/2);
        this.add(mirror);        
        mirror = new Mirror(size.z, size.y, uv.slice(1 * 8, 1 * 8 + 8));
        mirror.position.x = -size.x / 2;
        mirror.rotateY(- Math.PI / 2);
        this.add(mirror);
        mirror = new Mirror(size.x, size.z, uv.slice(3 * 8, 3 * 8 + 8));
        mirror.position.y = -size.y / 2;
        mirror.rotateX(Math.PI/2);
        this.add(mirror);        
        mirror = new Mirror(size.x, size.z, uv.slice(2 * 8, 2 * 8 + 8));
        mirror.position.y = size.y / 2;
        mirror.rotateX(-Math.PI/2);
        this.add(mirror);
        let initialRender = true;
        this.onBeforeRender = (renderer, scene, camera) => {
            if (!this.updateReflection && !initialRender) return;
            initialRender = true;
            softLightArray.show();
            this.visible = false;
            this.children.forEach(child => {
                child.onBeforeRenderManual(renderer, scene, camera);
            })
            this.visible = true;
            softLightArray.hide();
        }
    }
    update (progress) {
        this.position.lerpVectors(this.p0, this.p1, progress);
    }
}

class Material {
    static normalMap;
    static get = () => {
        const material = new THREE.MeshPhysicalMaterial( {
            reflectivity: .2 + Math.floor(fxrand() * 4)/3 * .5,
            roughness: .05 + .2 * fxrand(),
            metalness: 0,
            color: Palette.getColor(),
            normalMap: getNormalMap(),
            normalScale: new THREE.Vector2(0.2, 0.2),
            side: THREE.FrontSide,
            shadowSide: THREE.FrontSide
        } );
        return material;
    }
}

class Palette {
    static source = [
        ['0D1A32','DBB2DE','B54031','FE5E14','5C3E6F','2D2139','EC6464','322069','5F354A','B7C4CA'],
        ['DC2900','87D190','56B98E','3A6792','1B161B','373AA0','1F0F22','B1E3A7','2C4347','438FCC'],
        ['43444C','994C43','617483','E95B4B','6A3C3A','283C48','277BA1','483336','264B5B','E9886F'],
        ["828B3D","1A1D1D","356544","282D2E","447559","06A75B","254847","5CA550","C7AF2A","AFC8BA"],
        ["9B2935","E7361B","494F58","B55F44","89B7C7","29252A","5E7A86","E6D4C7","433F3D","CF9A76"],
        ["738490","273C94","B28D6E","A0403B","76382D","230D12","5F4244","51221F","C2A5A9","DBCCC4"],
        ["DADADB","FBFBFB","E4DCD7","495658","4B3125","FBBD81","778B91","1D1D18","BC6C25","9F9C9B"],
        ["909E8E","363B30","D7D8D3","2F1E1A","192439","6F241F","42503B","CCBBB1","B87454","A13C35"],
        ["51331A","EDEDEC","597647","66A690","577D76","8A441B","C7BDAC","1F4329","206D30","262D2A"],
        ["B84D0B","836746","7D9BB1","30261B","767060","E1CCBA","CF9558","484C4E","C4B5BF","737C79"],
        ["5C6461","ACA473","EE4B0E","093252","156130","25A2CC","2A5964","B4641D","3A3942","B7BFBD"],
        ["202726","5F7169","3F4945","7D9488","DAC648","E1DCD7","CDC7BC","313538","B8B9BD","2E3032"],
        ["6C625D","99B1B9","E55017","B6A797","5F8391","EEC52A","151617","3C97B0","3B444B","1F6E94"],
        ["A7861E","3B221A","636979","0C0704","47383B","D5D4C1","7B530F","616776","44352B","EAE0A4"],
        ["384751","A5896B","C7B44C","41575F","A67728","869DA4","8A6D35","2D2623","788A95","1355A6"],
        ["924A67","C86A61","A39C9C","5E425B","D5C9C6","693F30","D64438","3C2A25","954E3C","BEB5B5"],
        ["2F1915","B9B2A8","D18060","9B3A1E","302D2A","5C1E0F","BA5934","E3653D","E8E3D9","CFC9BC"],
        ["D7D9D7","B7BDB5","DBDAD9","EF6521","7F8980","252621","593E35","AB3D11","C8C7C1","EBECE7"],
    ];
    static monochrome = [
        ["383230","232221","3c3c3b","191614","dddddd","8f8c88","161414","2a2929","bebdbc","6c6865"],
        ["a9a6a4","8f8c88","343330","e4e4e4","232221","bebdbc","e2e2e2","292624","cecdcc","e8e8e8"]
    ];
    static pallete;
    static selectedPaletteId;
    static init = (size) => {
        const palettes = window.$fxhashFeatures['Monochrome'] ? Palette.monochrome : Palette.source;
        const p = Palette.selectedPaletteId != undefined ? Palette.selectedPaletteId : Math.floor(fxrand() * palettes.length);
        const a = palettes[p].slice();
        for (let i = a.length; i < size; i++) {
            a.push(palettes[p][Math.floor(fxrand() * palettes[p].length)]);
        };
        Palette.pallete = [];
        for (let i = 0; i < size; i++) {
            Palette.pallete.push(a.splice(Math.floor(fxrand() * a.length), 1)[0]);
        };
    }
    static getRandom = () => {
        // const colorString = '#'+Palette.pallete[Math.floor(fxrand() * Palette.pallete.length)];
        // const color = new THREE.Color (colorString);
        // const obj = {};
        // color.getHSL(obj)
        // console.log(obj, colorString);
        // return colorString;
        return '#'+Palette.pallete[Math.floor(fxrand() * Palette.pallete.length)]
    }
    static getColor = () => {
        return new THREE.Color ('#'+Palette.pallete.splice(0, 1)[0]);
    }
}