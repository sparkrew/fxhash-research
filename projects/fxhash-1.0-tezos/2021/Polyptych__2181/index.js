// these are the variables you can use as inputs to your algorithms

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
/*const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
document.body.prepend(container)*/
/*let oscws = new WebSocket("ws://localhost:8765")

const transition = async function (uniform, to, duration, easing=TWEEN.Easing.Quadratic.In) {
    let object = material.uniforms[uniform];
    return new Promise(resolve => {
            new TWEEN.Tween(object)
                .to({value:to}, duration)
                .easing(easing)
                .onComplete(resolve)
                .onStop(resolve)
                .start()
    });
}


oscws.onmessage = function (ev) { 
    if (material.uniforms == null) { return }
    var data = JSON.parse(ev.data);
    var idx = data[0];
    var sample = data[1];
    var pos = data[2];
    var rate = data[3];
    var pan = data[4];
    var spd = data[5];
    //transition(`form_${idx.toFixed(0)}`, fxrand(), 0.1);
    material.uniforms[`form_${idx.toFixed(0)}`].value = idx/100;
    material.uniforms[`trig_${idx.toFixed(0)}`].value = 1;
    //material.uniforms.ndiv.value = 4;
    //transition(`trig_${idx.toFixed(0)}`, 0, 0);
}*/

preview = false;
//if (window.innerWidth == 1093 && window.innerHeight == 1093) {
//    preview = true;
//};
const renderer = new THREE.WebGLRenderer({preserveDrawingRenderer:true,premultipliedAlpha:false,antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
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
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const control = new THREE.OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.zoomSpeed = 1.0;
control.rotateSpeed = 0.25;
control.autoRotate = false;
control.autoRotateSpeed = 0.1;

window.addEventListener('resize', () => { 
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight ) 
});


let cameraPositions  = [
    {x: fxrand()*900 - 450, y: fxrand() * 900 - 450, z: fxrand() * 900 - 450},
    {x: 0, y:0, z: 600},
    {x:0, y:600,z:0},
    {x:600, y: 0, z: 0},
];

let pos = cameraPositions[0];
camera.position.set(pos.x, pos.y, pos.z);

let currCamera = 0;
let pause = false;

const printCanvas = document.createElement('canvas');
printCanvas.style.visibility = 'hidden';
document.body.appendChild(printCanvas);

const printRenderer = new THREE.WebGLRenderer({preserveDrawingRenderer:true,premultipliedAlpha:false,antialias: true, canvas: printCanvas})
const printCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

function generatePrint(force) {
    let resolution;
    if (!force) {
        resolution = prompt("The print is in square format, what should be the size? (eg. 3000)");
        console.log("test")
        if (resolution == null) { return true }
            if (isNaN(resolution) || resolution < 50) { 
            alert("Wrong value, enter a valid number larger than 50px"); 
            return true;
        }
    } else {
        resolution = 5000;
    }
    renderer.setSize(resolution, resolution);
    camera.aspect = 1
	camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    const link = document.createElement('a');
    link.download = `canvas_${fxhash}_${camera.position.x.toFixed(0)}_${camera.position.y.toFixed(0)}_${camera.position.z.toFixed(0)}.png`;
    link.href = renderer.domElement.toDataURL();
    link.click();
    link.delete;
	
    camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight ) 
    return true;
};

window.onkeydown = (ev) => {
    if (ev.key == 'c' || ev.key == 'C') {
        currCamera = (currCamera + 1) % cameraPositions.length;
        let pos = cameraPositions[currCamera];
        camera.position.set(pos.x, pos.y, pos.z);
    };
    if (ev.keyCode == 32) {
        pause = !pause;
    }
    if (ev.key == 'p' || ev.key == 'P') {
        was_paused = pause;
        if (!pause) { pause = true; }
        if (!generatePrint(false)) { generatePrint(true) };
        if (!was_paused) { pause = false; };
    };
}

const ambientLight = new THREE.AmbientLight( 0xffffff);
scene.add( ambientLight );

var inverted = false;
var col = 0.0;
scene.background = new THREE.Color(0xffffff);
//scene.background = new THREE.Color(0xD6FF00);
/*if (fxrand() > 0.9) {
    inverted = true;
    scene.background = new THREE.Color(0x000000);
    col = 1.0;
}*/


let npoints_mult = 700 + 100*fxrand()
if (preview) {
    npoints_mult = 100;
    camera.position.z = 2
}
const npoints = Math.pow(Math.floor(npoints_mult), 2);
const grid_x = 0.05 + Math.pow(fxrand(), 2);
const grid_y = 0.05 + Math.pow(fxrand(), 2);
window.$fxhashFeatures = {
    "Number of planes": npoints,
}


var model;
var rotx = fxrand()-0.5;
if (rotx < 0) {
    rotx = Math.pow(-rotx, 1.4) * -1;
} else {
    rotx = Math.pow(rotx, 1.4);
}
var wavy = fxrand()
var pxdens = fxrand()
const vertices = new Float32Array(npoints*3);
const colors = new Float32Array(npoints*3);
const ids = [];
const idx = new Float32Array(npoints);
const idx1 = new Float32Array(npoints);
const idx2 = [];
const idx3 = [];
var dummy = new THREE.Object3D();
let j = 0;
const geometry = new THREE.PlaneGeometry();

const material = new THREE.ShaderMaterial({
                side: THREE.DoubleSide,
                uniforms: {
                    pallete:{value:fxrand()},
                    col: {value: col},
                    grid_x: {value: grid_x},
                    grid_y: {value: grid_y},
                    time: {value:0},
                    npoints: {value: npoints},
                },
                vertexShader: vsh,
                fragmentShader: fsh,
            })
//model = new THREE.Points(geometry, material);
//let mat = new THREE.MeshBasicMaterial({color:0x00ff00});
model = new THREE.InstancedMesh(geometry, material, npoints);

for ( let i = 0; i < npoints; i ++ ) {
    j = i*3;
    const x = fxrand(); 
    const y = fxrand();
    const z = fxrand();
    vertices[j] = fxrand();
    vertices[j+1] = fxrand();
    vertices[j+2] = fxrand();

    colors[j] = fxrand();
    colors[j+1] = fxrand();
    colors[j+2] = fxrand();

    idx[i] = i;
    idx1[i] = fxrand()*npoints;
    //idx2.push(fxrand()*npoints);
    //idx3.push(fxrand()*npoints);
    model.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
}

geometry.setAttribute( 'idx', new THREE.InstancedBufferAttribute( idx, 1 ) );
//geometry.setAttribute( 'idx1', new THREE.InstancedBufferAttribute( idx1, 1 ) );

scene.add( model );

var itime = 0;
if (preview) {
    itime = 10000
}

let pausetime = 0;
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
        
        if (material.uniforms.time) {
            material.uniforms.time.value = time;
        }
    }
    control.update(time)
    renderer.render(scene, camera);
};
animate(0)
