"use strict";
// types of obstacles
// initial shapes
// colors
// ENOUGH

import {loadText} from './shdr/loadText.js'
import {Gl} from './shdr/gl.js'
import {Pr} from './shdr/pr.js'
import {Tx} from './shdr/tx.js'
import {rsz} from './shdr/rsz.js'

let playSpeed = 1
let groundSlopeMode = fxrand()*3|0
let colorMode = fxrand()**2*4|0
let shapeMode = fxrand()**2*3|0
let groundShapeMode = fxrand()**2*2|0
let colorOffset = [fxrand(),fxrand(),fxrand()]
let rndSz = fxrand()
let size =
	rndSz < 0.02 ? 64 :
	rndSz < 0.1 ? 128 :
	256


$fx.features({
  'Ground slope': groundSlopeMode==0?'Right':groundSlopeMode==1?'No slope':'Left',
	'Resolution': size,
  'Colors': colorMode==0?'Noise':colorMode==1?'Monochrome':colorMode==2?'Horizontal':'Gradient',
	'Initial sand shape': shapeMode==0?'Circles':shapeMode==1?'Noise':'Stripe',
	'Ground shape': groundShapeMode==0?'Detailed':'Sleek',
})
console.log($fx.getFeatures())


let gl = new Gl('canvas')
let pr = new Pr(gl,loadText('./shader.frag'))
gl.canvas.width = size
gl.canvas.height = size
gl.canvas.style.imageRendering = 'pixelated'

let prDr = new Pr(gl,`#version 300 es
			precision highp float;
			uniform sampler2D tx;
			uniform sampler2D txBlur;
			uniform float modeGroundSlope;
			uniform vec2 res;
			out vec4 o;
			#define isGround(v) (abs(v-.5)<.2) 
			void main(){
				float resMin = min(res.y,res.x);
				vec2 uv = gl_FragCoord.xy/resMin;
				uv-=res/resMin/2.-.5;
				uv=fract(uv);

				vec4 mainColor = texture(tx,fract(uv));
				mainColor.rgb=pow(mainColor.rgb,vec3(1./2.2));
				// Ground
				if(isGround(mainColor.a)){
					mainColor.rgb=vec3(mainColor.a<.5?.2:.4);
				}

				vec4 bloomColor = texture(txBlur,fract(uv))*2.;

				// apply screen blending mode
				vec4 blendedColor = 1.- (1.- mainColor) * (1.- bloomColor);

				// output the blended color
				o = blendedColor;
				o.a=1.;
			}`)

let prBlur = new Pr(gl,`#version 300 es
			precision highp float;
			uniform sampler2D tx;
			uniform vec2 res;
			uniform float dir;
			uniform float frame;
			out vec4 o;
			#define R 20.
			#define rnd2D(X) fract(1e5*sin(dot(mod(X,3.1415),vec2(9.,3.1415))+.1))
			#define rnd(x) fract(1.1e4*sin(mod(111.1*(x),3.14)+.1))
			void main(){
				o=vec4(0,0,0,1);
				for(float i=-R;i<=R;i+=1.){
					vec2 d = vec2(i,0.);
					if(dir==1.)d = d.yx; // if dir==1. blur along y
					vec2 uv = (gl_FragCoord.xy+d)/res;
					vec4 col = texture(tx,fract(uv));
					// if a gem
					if(dir==0. && col.r + col.g + col.b + col.a < 4.) continue;
					float lightness = 1.;
					// blinking
					if(dir==0.) lightness = rnd(floor(rnd2D(uv)*100.+frame/40.));
					o += .2/(abs(i) + .1) * col * lightness * smoothstep(R,R-7.,abs(i));
				}
				o=clamp(o,0.,1.);
			}`)
let txBlur1 = new Tx(gl, {w:size,h:size,loc:2})
let txBlur2 = new Tx(gl, {w:size,h:size,loc:3})

let u_tx=[0,0].map((_,i)=>new Tx(gl, {w:size,h:size,loc:i}))


function makeTxRnd(w,h,loc){
	let pixels = [...Array(w*h*4)].map(_=>Math.floor(fxrand()*256))
	let tx = new Tx(gl, {w, h, filter:gl.LINEAR, loc, bits: 8, pixels})
	return tx
}

let getRndTxRes = () => 2**Math.floor(fxrand()*5+3) * (size / 256) // last multiplier to make random textures dependent on the size of the canvas

let txRndRes = 256
let txRnd = makeTxRnd(txRndRes,txRndRes,4)
let txRnd2 = makeTxRnd(getRndTxRes(), getRndTxRes(),5)
let txRnd3 = makeTxRnd(getRndTxRes(), getRndTxRes(),6)

window.addEventListener('resize',resize, true)
window.dispatchEvent(new Event('resize'))

window.addEventListener('mousemove', e=>{
	mouse = [e.clientX/innerWidth, 1-e.clientY/innerHeight]
	// if the key is pressed
	mouseSand = (e.buttons==1) ? 1 : 0;
	// erasing
	if (event.buttons === 1 && event.shiftKey) {
		mouseSand = -1
  }
})

// spawn of erase sand
window.addEventListener('mousedown', e=>{
	mouse = [e.clientX/innerWidth, 1-e.clientY/innerHeight]
	mouseSand = 1
	// erasing
	if (event.buttons === 1 && event.shiftKey) {
		mouseSand = -1
  }
})
window.addEventListener('mouseup', e=>{
	mouseSand = 0
})

document.addEventListener('touchstart', handleTouchStart, {passive:false});
document.addEventListener('touchend', handleTouchEnd, {passive:false});
document.addEventListener('touchmove', handleTouchStart, {passive:false});
function handleTouchStart(event) {
  event.preventDefault();
	const touch = event.touches[0];
	mouse = [touch.clientX/innerWidth, 1-touch.clientY/innerHeight]
	mouseSand = 1
}
function handleTouchEnd(event) {
  event.preventDefault();
	mouseSand = 0
}

let isPlaying = true
let mouse = [-999,-999];
let u_frame=0
let mouseSand = 0


function frame() {
	if(isPlaying && u_tx.length > 0){
		for(let i=0;i<playSpeed;i++){
			pr.uf({
				'res': [u_tx[0].w,u_tx[0].h],
				'resCanvas': [gl.canvas.width,gl.canvas.height],
				'tx': u_tx[0],
				'txRnd': txRnd,
				'txRnd2': txRnd2,
				'txRnd3': txRnd3,
				'txRndRes': txRndRes,
				'frame': u_frame<8?u_frame:(u_frame % 1009 + 8),
				'colorMode': colorMode,
				'shapeMode': shapeMode,
				'groundSlopeMode': groundSlopeMode,
				'groundShapeMode': groundShapeMode,
				'colorOffset': colorOffset,
				'mouse': mouse,
				'mouseSand': mouseSand,
			})
			pr.draw(u_tx[1])
			u_tx.reverse()
			u_frame++
		}

		prBlur.uf({
			'res': [size,size],
			'dir': 0,
			'frame': u_frame % 1009,
			'tx': u_tx[0],
		})
		prBlur.draw(txBlur1)
		prBlur.uf({
			'res': [size,size],
			'dir': 1,
			'tx': txBlur1,
		})
		prBlur.draw(txBlur2)
		prDr.uf({
			'res': [gl.canvas.width,gl.canvas.height],
			'tx': u_tx[0],
			'txBlur': txBlur2,
			'groundSlopeMode': groundSlopeMode,
			'txRnd2': txRnd2,
			'txRnd3': txRnd3,
		})
		prDr.draw()
	}
	if(u_frame==100) fxpreview()
	requestAnimationFrame(frame)
}
frame()

document.addEventListener('keydown', (event) => {
	console.log(event.code)
	if (event.code === 'Space') {
		isPlaying=!isPlaying
		return
	}
	if (event.code === 'Digit0') {
		isPlaying=false
		return
	}
	if (event.code.startsWith('Digit')) {
		isPlaying = true;
		const digit = parseInt(event.code[5]);
		playSpeed = 2 ** (digit - 1);
		return;
	}
	if (event.code === 'KeyR') {
		isPlaying=true
		u_frame=0
		return
	}
}, false)

function resize(){
	let winW = window.innerWidth
	let winH = window.innerHeight
	let canvasW = size
	let canvasH = size
	if(winW>winH){
		canvasW = size * winW / winH | 0
	}
	else{
		canvasH = size * winH / winW | 0
	}

	rsz(gl, canvasW, canvasH)

	prDr.uf({
		'res': [canvasW, canvasH],
	})
}

function saveImage() {
  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', `${fxhash}.png`);
  let canvas = document.querySelector('canvas');
  
  // Create an off-screen canvas for drawing the upscaled image
  let offScreenCanvas = document.createElement('canvas');
  let offScreenCtx = offScreenCanvas.getContext('2d');
  
  // Set the dimensions of the upscaled canvas
  let scale = 2048/size; // Upscaling factor
  let newWidth = canvas.width * scale;
  let newHeight = canvas.height * scale;
  offScreenCanvas.width = newWidth;
  offScreenCanvas.height = newHeight;
  
  // Upscale the image using closest neighbor interpolation
  offScreenCtx.imageSmoothingEnabled = false;
  offScreenCtx.drawImage(canvas, 0, 0, newWidth, newHeight);
  
  // Convert the upscaled image to a blob
  offScreenCanvas.toBlob(function(blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  });
}

// save only if key S is pressed
document.addEventListener('keydown', e=>e.code=='KeyS'?saveImage():0)
