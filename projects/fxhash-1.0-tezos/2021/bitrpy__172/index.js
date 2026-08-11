// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.domElement.id = 'cvs';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

const composer = new EffectComposer( renderer );
const copyPass = new THREE.ShaderPass(THREE.CopyShaderBg);
composer.addPass( copyPass );

const composerfb = new EffectComposer( renderer, renderTarget );
const copyPassFb = new THREE.ShaderPass(THREE.CopyShaderBgBit);
composerfb.renderToScreen = false;
composerfb.addPass( copyPassFb );

window.addEventListener('resize', () => { 
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight ) 
    renderTarget.setSize(window.innerWidth, window.innerHeight);
});

const canvas_tex = new THREE.CanvasTexture(document.querySelector("canvas"))
copyPassFb.material.uniforms.canvas.value = canvas_tex;
    
copyPass.material.uniforms.actualTex.value = renderTarget.texture;
renderer.autoClear = false;
var itime = fxrand()*100000.0;
const animate = function (delta) {
    requestAnimationFrame( animate );
    var time = delta + itime;
    copyPassFb.material.uniforms.time.value = time;
    copyPassFb.material.uniforms.rtime.value = delta;
    composer.render()
    canvas_tex.needsUpdate = true;
    composerfb.render();
};
animate()
