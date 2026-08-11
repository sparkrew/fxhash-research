const useBGShader = false;
const debug = true;

const renderer = new THREE.WebGLRenderer({preserveDrawingRenderer:true,premultipliedAlpha:false,antialias:true});
let aspectRatio = window.innerHeight/window.innerWidth;
let height = window.innerHeight;
let width = height/aspectRatio;
renderer.setSize( width, height );

document.body.appendChild( renderer.domElement );
let gl = renderer.domElement.getContext( 'webgl2', { antialias: false } );
let isWebGL2 = !!gl;
if(!isWebGL2) {
    document.body.innerHTML = `
<p>WebGL 2 is not available.
See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">
How to get a WebGL 2 implementation</a></p>`;
    throw 'No WebGL 2 available.';
}


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 55, width / height, 0.01, 4000 );

const control = new THREE.OrbitControls(camera, renderer.domElement);
let gui;
let uniFolder;
if (debug) {
    gui = new dat.GUI();
    uniFolder = gui.addFolder('Uniforms')
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
    const gridHelper = new THREE.GridHelper( 10, 10);
    scene.add( gridHelper );
}

control.enableDamping = true;
control.zoomSpeed = 0.3;
control.rotateSpeed = 0.255;
control.autoRotate = false;
control.autoRotateSpeed = 0.1;

window.addEventListener('resize', () => { 
    aspectRatio = window.innerHeight/window.innerWidth;
    height = window.innerHeight;
    width = height/aspectRatio;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
    renderer.setSize( width, height ) 
});

let zoom = 100;

let cameraPositions  = [
    {x:0, y:zoom,z:0},
    {x:0, y:-zoom,z:0},
    {x: 0, y:0, z: zoom},
    {x: 0, y:0, z: -zoom},
    {x:zoom, y: 0, z: 0},
    {x:-zoom, y: 0, z: 0},
    {x:zoom*1.5*fxrand(), y: zoom*1.5*fxrand(), z: zoom*1.5*fxrand()},
];

let pos = cameraPositions[2];
//camera.position.set(pos.x, pos.y, pos.z);

let currCamera = 0;
let pause = true;

const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

const npoints = 210000; 
let geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);

let uniforms = {
    'amp': [1,100,10],
}


window.$fxhashFeatures = {
}

const onBeforeCompile = (material) => {
    return (shader, renderer) => {
        shader.uniforms.time = {value: 0}
        shader.uniforms.tex = {value: null}
        shader.uniforms.npoints = {value: npoints}
        let unfrms = ''
        Object.keys(uniforms).forEach((uni) => {
            shader.uniforms[uni] = {value: uniforms[uni][2]};
            let type = 'float';
            if (typeof uniforms[uni][2] == "boolean") type = 'bool';
            unfrms += `uniform ${type} ${uni};\n`
            if(debug) uniFolder.add(shader.uniforms[uni], 'value', uniforms[uni][0], uniforms[uni][1]).name(uni)
        });
        if(debug) uniFolder.open()
        shader.vertexShader = unfrms + createVertexShader(shader.vertexShader);
        shader.fragmentShader = unfrms + createFragmentShader(shader.fragmentShader);
        material.userData.shader = shader;
    };
};

const material = new THREE.MeshBasicMaterial( {color: 0xff3322 } );
material.side = THREE.DoubleSide;
material.onBeforeCompile = onBeforeCompile(material);
const model = new THREE.InstancedMesh(geometry, material, npoints);

const idx = new Float32Array(npoints);
var dummy = new THREE.Object3D();
for ( let i = 0; i < npoints; i ++ ) {
    idx[i] = i;
    model.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
}
geometry.setAttribute( 'idx', new THREE.InstancedBufferAttribute( idx, 1 ) );
//scene.add( model );

let bgscene, bgcamera, bgcolor, bgmaterial;
if (useBGShader) {
    bgscene = new THREE.Scene();
    bgcamera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    bgcolor = new THREE.Color();
    bgmaterial = new THREE.ShaderMaterial({
      uniforms: {
        fbdispl: {value: 0.9+fxrand()*0.1},
        rgb: {value: true},
        monochrome: {value: ismonochrome},
        time: {value: 0},
        camx: {value: 0},
        camy: {value: 0},
        camz: {value: 0},
        fb: {value: false},
          bgcolor: {value: new THREE.Vector3(bgcolor.r, bgcolor.g, bgcolor.b) },
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            gl_Position = vec4( position, 1.0 );    
        }
      `,
      fragmentShader: `
        uniform vec3 bgcolor;
        uniform float rgb;
        uniform bool monochrome;
        uniform bool bit;
        uniform bool fb;
        uniform float fbdispl;
        uniform float pa;
        uniform float time;
        uniform float camx;
        uniform float camy;
        uniform float camz;
        varying vec2 vUv;

        ${pal}
        ${shader_noise}
        ${shader_utils}
         
        void main() {
            float b = 0.06 *(1.-rgb);
            vec2 modal_sh = vec2(step(0.0125, vUv.x), step(0.0125, vUv.y));
            modal_sh *= vec2(step(vUv.x, 0.0125 + 0.975), step(vUv.y, 0.0125+0.975));
            float modal = modal_sh.x * modal_sh.y;
            //gl_FragColor = (modal+random(vUv)) * vec4(1., 1., 0.92+b, 1.0) - random(vUv)*0.05*rgb;
            //float vign = (1.4-distance(vUv, vec2(0.5,0.5)+snoise(vec3(vUv.x, vUv.y, 0.0)*3.)*0.05))+random(vUv)*0.35;
            float vign = random(vUv);
            //gl_FragColor = (vign*rgb+(1.-rgb))*vec4(1., 1., 0.92+b, 1.0) - random(vUv)*0.05*rgb;// - (vign*random(vUv));
            gl_FragColor = vec4(1., 1., 0.92+b, 1.0) - random(vUv)*0.05*rgb;// - (vign*random(vUv));
        }
      `
    });

    if(debug) {
        uniFolder.add(bgmaterial.uniforms.rgb, 'value', 0, 1).name("rgb")
        uniFolder.add(bgmaterial.uniforms.monochrome, 'value', 0, 1).name("monochrome")
    }
    bgmaterial.depthWrite = false;
    const quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2, 1, 1 ), bgmaterial );
    bgscene.add( quad );
}

let pausetime = 0;
let time = 0;
renderer.autoClear = false;
const animate = function (delta) {
    requestAnimationFrame( animate );
    
    if(pause) {
        pausetime = delta - time;
    } else {
        time = delta - pausetime;
    }
    if (material) {
        if (material.userData.shader) {
            material.userData.shader.uniforms.time.value = time;
        } 
        
        if (material.uniforms && material.uniforms.time) {
            material.uniforms.time.value = time;
        }
    }
    control.update(time)
    renderer.setRenderTarget(null);
	renderer.clear()
    if (useBGShader) {
    	renderer.render(bgscene, bgcamera);
    }
    renderer.render(scene, camera);
};
animate(0)
