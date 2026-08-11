const useBGShader = false;
const debug = false;

const renderer = new THREE.WebGLRenderer({premultipliedAlpha:false,antialias:true});
let aspectRatio = window.innerWidth/window.innerHeight;
let height = window.innerHeight;
let width = window.innerWidth;
renderer.setPixelRatio( window.devicePixelRatio );
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

var d = 20;
let camera = new THREE.OrthographicCamera( - d * aspectRatio, d * aspectRatio, d, - d, 1, 1000 );
//let camera = new THREE.OrthographicCamera( width/ -d, width / d, height/d, height/-d, 1, 1000 );
camera.rotation.order = 'YXZ';
camera.rotation.y = - Math.PI / 4;
camera.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ) );
camera.zoom = 0.34
camera.updateProjectionMatrix()
camera.position.set(100, 0, 0)

let cameraPositions  = [
    {a:0, p:0},
    {a:Math.PI/4, p:0},
    {a:-Math.PI/4, p:Math.PI/4},
    {a:Math.PI/2, p:0.2},
    {a:0, p:Math.PI/2},
    {a:Math.PI/4, p:-Math.PI/4},
    {a:-Math.PI/2, p:0},
    //{a:Math.PI/2, p:-0.2},
    {a:Math.PI/2+0.2, p:Math.PI/2},
    {a:-0.2, p:Math.PI/2},
    {a:0, p:Math.PI/2+0.2},
    {a:0, p:Math.PI/4},
    {a:-Math.PI/4, p:0.955315},
    {a:Math.PI/4, p:0.955315},
];

let currCamera = Math.floor(fxrand()*cameraPositions.length);
let pos = cameraPositions[currCamera];


let gui;
let uniFolder;
if (debug) {
    gui = new dat.GUI();
    uniFolder = gui.addFolder('Uniforms')
    const axesHelper = new THREE.AxesHelper( 40 );
    scene.add( axesHelper );
}
CameraControls.install( { THREE: THREE } )
const controls = new CameraControls(camera, renderer.domElement);
controls.rotateTo(pos.a, pos.p);


let x = fxrand();
x = x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
let side = 3 + Math.floor(x * 27)
var geom = Math.floor(fxrand()*4);
var geometry = [new THREE.TetrahedronGeometry( 1, 0 ), new THREE.OctahedronGeometry( 1, 0 ), new THREE.BoxGeometry(1,1,1,1,1,1), new THREE.IcosahedronGeometry(1,0)][geom];
var geo = ["Tetrahedron", "Octahedron", "Cube", "Icosahedron"][geom];
var mode = Math.floor(fxrand() * 3);
var animation = fxrand();
var colorscheme = Math.floor(fxrand()*2.1);
window.$fxhashFeatures = {
    "Color scheme": ["Tri", "Duo", "BW"][colorscheme],
    "Geometries": geo,
    "Shape": mode,
    "Animation": Math.floor(animation*10),
    "Side size": side
}

//controls.addEventListener( 'change', () => renderer.render( scene, camera ));
//controls.enableZoom = true; //false;
//controls.enablePan = false;

window.addEventListener('resize', () => { 
    aspectRatio = window.innerWidth/window.innerHeight;
    width = window.innerWidth;
    height = window.innerHeight;
	camera.left = -d * aspectRatio;
	camera.right = d * aspectRatio;
	camera.top = d;
	camera.bottom = -d;
	camera.updateProjectionMatrix();
    renderer.setSize( width, height ) 
});

let pause = false;
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.7 );
scene.add( ambientLight );

const spotLight = new THREE.SpotLight( 0xffffff, 1 );
scene.add( spotLight );
spotLight.position.x = 155
spotLight.position.y = 155
spotLight.position.z = 155


if (debug) {
    var geometry = new THREE.PlaneBufferGeometry( 100, 100, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, opacity: 0.5, transparent: true } );
    var grid = new THREE.Mesh( geometry, material );
    grid.rotation.order = 'YXZ';
    grid.rotation.y = - Math.PI / 2;
    grid.rotation.x = - Math.PI / 2;
    scene.add( grid );
}

let maincolor = fxrand();
let bg = (maincolor * 360 + 180) % 360;
scene.background = new THREE.Color(`hsl(${bg}, 140%, 50%)`);
const onBeforeCompile = (material) => {
    return (shader, renderer) => {
        shader.uniforms.time = {value: 0}
        shader.uniforms.color_mode = {value: colorscheme}
        shader.uniforms.rm = {value: animation}
        shader.uniforms.rtime = {value: 0}
        shader.uniforms.tex = {value: null}
        shader.uniforms.npoints = {value: n}
        shader.uniforms.side = {value: side}
        shader.uniforms.mode = {value: mode}
        shader.uniforms.zoom = {value: fxrand()*0}
        shader.uniforms.maincolor = {value: maincolor}
        let unfrms = ''
        let uniforms = {'amp': [0,10,10]}
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

var capture = new URLSearchParams(window.location.search).get('capture') === "1"
var capturer;

if (capture) {
    capturer = new CCapture( { format: 'webm', timeLimit: 60, autoSaveTime: 60, verbose: true, framerate: 30} );
    capturer.start();
}

let mouse = new THREE.Vector2()
let n = side*side*side;
//var geometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );

var material = new THREE.MeshLambertMaterial({color: 0x00ff00});
material.side = THREE.FrontSide;
material.onBeforeCompile = onBeforeCompile(material)
var mesh = new THREE.InstancedMesh( geometry, material, n);
const idx = new Float32Array(n);
var dummy = new THREE.Object3D();
for ( let i = 0; i < n; i ++ ) {
    idx[i] = i;
    mesh.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
}
geometry.setAttribute( 'idx', new THREE.InstancedBufferAttribute( idx, 1 ) );

scene.add( mesh );
let time = 0;
let rtime = 0;
let pausetime = 0;
let pausertime = 0;
let rtimeFactor = choose([0.5,0.625,0.75,1,1.25,1.5,2,3])
const animate = function (delta) {
    if (pause) {
        pausetime = delta - time;
    } else {
        time += 45; //delta - pausetime;
        rtime += (60*rtimeFactor);
    }
    
    if (material) {
        if (material.userData.shader) {
        	material.userData.shader.uniforms.time.value = time;
        	material.userData.shader.uniforms.rtime.value = rtime;
        }
    }

	spotLight.position.set(camera.position.x + 40, camera.position.y+10, camera.position.z+20)
	requestAnimationFrame(animate)
    let u = controls.update(0.04)
    renderer.render(scene, camera);
    
    if (material && material.userData.shader && isFxpreview && fxrand() < 0.02) {
        pause = true;
        fxpreview()
    }
    if (capture) capturer.capture( renderer.domElement );
};
animate(0)
