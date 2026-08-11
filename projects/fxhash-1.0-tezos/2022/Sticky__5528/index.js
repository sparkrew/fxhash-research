const useBGShader = true;
const debug =false;

const renderer = new THREE.WebGLRenderer({preserveDrawingRenderer:true,premultipliedAlpha:false,antialias:true});
renderer.setPixelRatio( window.devicePixelRatio );
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


let gui;
let uniFolder;
if (debug) {
    gui = new dat.GUI();
    uniFolder = gui.addFolder('Uniforms')
}
const scene = new THREE.Scene();
if (!useBGShader) scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 55, width / height, 0.01, 4000 );
const control = new THREE.OrbitControls(camera, renderer.domElement);


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

//let pos = cameraPositions[choose([0,1,2,3,4,5])];
let pos = cameraPositions[2];
camera.position.set(pos.x, pos.y, pos.z);

let currCamera = 0;
let pause = false;

const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

const squareamt = Math.pow(fxrand(),1.5)
const npoints = 4000+Math.floor(25000*(1-squareamt)); 
const segments = 5+76*squareamt;

class CustomCurve extends THREE.Curve {
	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {
		return optionalTarget.set( t, t, t ).multiplyScalar( this.scale );
	}
}
const path = new CustomCurve( 1 );
let geometry = new THREE.InstancedBufferGeometry()
geometry.instanceCount = npoints;
let uniforms = {
    'amp': [1,100,55],
    'distaxis': [0,4, distaxis],
    'axis': [0, 4, axis],
    'npoint':[0,100000,npoints],
    'segments':[0,80,segments],
}


window.$fxhashFeatures = {
    'axis': ["Z", "Y", "X", "Polar"][Math.floor(axis)],
    'distaxis': ["Z", "Y", "X", "No"][Math.floor(distaxis)],
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

const material = new THREE.LineBasicMaterial( {color: 0xff3322 } );
material.side = THREE.DoubleSide;
material.onBeforeCompile = onBeforeCompile(material);
//const model = new THREE.InstancedMesh(geometry, material, npoints);
const model = new THREE.Line(geometry, material);

const idx = new Float32Array(npoints);
var dummy = new THREE.Object3D();
for ( let i = 0; i < npoints; i ++ ) {
    idx[i] = i;
    //model.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
}
geometry.setAttribute( 'idx', new THREE.InstancedBufferAttribute( idx, 1 ) );
const positions = [];
for (let i=0; i<segments; i++) {
	positions.push( i/segments - 0.5, 0, 0 );
}
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
scene.add( model );

let bgscene, bgcamera, bgcolor, bgmaterial;
if (useBGShader) {
    bgscene = new THREE.Scene();
    bgcamera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    bgcolor = new THREE.Color();
    bgmaterial = new THREE.ShaderMaterial({
      uniforms: {
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            gl_Position = vec4( position, 1.0 );    
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        ${pal}
        ${shader_noise}
        ${shader_utils}
         
        void main() {
            gl_FragColor = vec4(1., 1., 1., 1.0) - random(vUv)*0.05;
        }
      `
    });

    if(debug) {
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
