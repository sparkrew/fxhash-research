// Code by loackme
// Twitter: @loackme_
// Instagram: @loackme
// https://www.fxhash.xyz/u/loackme

//////////////////////////////////////////////////////////
//  Create canvas
//////////////////////////////////////////////////////////

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const gl = canvas.getContext('webgl')

//////////////////////////////////////////////////////////
//  Window resize
//////////////////////////////////////////////////////////

function resize() {
  let sc = Math.min(window.devicePixelRatio || 1,2)
  canvas.width  = Math.floor(sc*window.innerWidth)
  canvas.height = Math.floor(sc*window.innerHeight)
  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = window.innerHeight + 'px'
  requestAnimationFrame(render)
}

let doit
window.addEventListener('resize', function(){
  clearTimeout(doit)
  doit = setTimeout(resize, 100)
})

//////////////////////////////////////////////////////////
//  Parameters
//////////////////////////////////////////////////////////

let pi = Math.PI

let parameters = {
  N: fxrand() < 0.8 ? Math.floor(10*Math.pow(fxrand(),1.5) + 3.0) : fxrand() < 0.7 ? Math.floor(rnd(13,30)) : Math.floor(rnd(30,60)),
  seed: rnd(0.2,0.8),
  grooves: fxrand() < 0.8 ? 14*Math.pow(fxrand(),2.0) + 1 : rnd(150,600),
  f_p0: rnd(1.2,2.5),
  f_floor: fxrand() < 0.5 ? Math.floor(rnd(1,25)) : Math.floor(rnd(100,200)),
  noiseZoom: rnd(0.2,0.8),
  isDark: fxrand() < 0.5,
  angle: rnd(-pi,pi/2),
  frameType: fxrand() < 0.2 ? 0 : fxrand() < 0.5 ? 1 : 2,
  frameRadius: rnd(0.05,0.45),
  isSplit: fxrand() < 0.5,
  splitAngle: rnd(-pi,pi),
  smoothingLevel: rnd(0.04,0.09)
}

parameters.r1 = rnd(0.12,0.15)
parameters.r2 = rnd(parameters.r1 + 0.05,0.35)

// Snap bisecting angle to horizontal/vertical if it's too close to either
let snapAngleThreshold = pi/50
let snapAngles = [0,pi/2,-pi/2,pi,-pi]
snapAngles.forEach(function(a){
    if (Math.abs(a - parameters.splitAngle) < snapAngleThreshold) parameters.splitAngle = a
})

if (parameters.isDark) document.body.style.backgroundColor = "#000000"

//////////////////////////////////////////////////////////
//  Features
//////////////////////////////////////////////////////////

function getPalette(parameters) {
  if (parameters.isDark) return "Pitch Black & Dirty White"
  else return "Pure White & Washed-out Black"
}

function getCenterShape(parameters) {
  let shape = parameters.frameType
  if (shape == 1) return "Square"
  if (shape == 2) return "Circle"
  else return "None"
}

function getFequencey(parameters){
  let N = parameters.N
  if (N < 5) return "Very low"
  if (N < 13) return "Low"
  if (N < 30) return "Medium"
  else return "High"
}

function getGrooves(parameters){
  return parameters.grooves > 50
}

function getAngularResolution(parameters){
  let f = parameters.f_floor
  if (f < 10) return "Low"
  if (f < 50) return "Medium"
  else return "High"
}

window.$fxhashFeatures = {
  "Palette": getPalette(parameters),
  "Center shape": getCenterShape(parameters),
  "Bisected": parameters.isSplit,
  "Base frequency": getFequencey(parameters),
  "Grooves": getGrooves(parameters),
  "Angular resolution": getAngularResolution(parameters)
}

//////////////////////////////////////////////////////////
//  Vertex shader
//////////////////////////////////////////////////////////

const vertexShaderSource = `attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}`

//////////////////////////////////////////////////////////
//  Fragment shader
//////////////////////////////////////////////////////////

var fragmentShaderSource = `#ifdef GL_ES
precision highp float;
#endif

uniform vec2 uResolution;
uniform vec2 uZoom;

#define PI 3.1415926538

${getStringFromParameters(parameters)}

// Gold Noise ©2015 dcerisano@standard3d.com
const float PHI = 1.61803398874989484820459;  // Φ = Golden Ratio
  float gold_noise(in vec2 xy, in float seed){
  return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}

float atan2(in float y, in float x){
  float s = abs(x) > abs(y) ? 1.0 : 0.0;
  return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}

vec2 rotate2d(vec2 p,float _angle){
  return vec2(cos(_angle)*p.x - sin(_angle)*p.y,
              sin(_angle)*p.x + cos(_angle)*p.y);
}

float getColor(vec2 p){
  float d = length(p);
  float a = atan2(p.y,p.x) + angle;

  float r = r1*sin(N*a) + r2;
  vec2 p0 = vec2(r*cos(a),r*sin(a));
  p0 += 2.0;
  p0 *= f_p0;
  p0 = floor(f_floor*p0)/f_floor;
  r += noiseZoom*gold_noise(p0,seed);
  r *= 1.0 - (1.0 - r)*(sin(grooves*d*PI) + 1.0)/2.0;

  float col = 0.7*smoothstep(r - smoothingLevel,r + smoothingLevel,d) + 0.3;

  // Square center shape
  if (frameType == 1.) {
    col = mix(col,1.0 - col + 0.3,1.0 - step(0.0,frameRadius - abs(p.x))*step(0.0,frameRadius - abs(p.y)));
  };
  // Circular center shape
  if (frameType == 2.) {
    float thr = step(0.0,length(p) - frameRadius);
    col = mix(col,1.0 - col + 0.3,thr);
  };
  // Bisected
  if (isSplit){
    col = mix(col,1.0 - col + 0.3,step(0.0,rotate2d(p,splitAngle).x));
  }
  // Texture
  if (col != 1.0){
    float u = gold_noise(floor(uResolution*(p+1.0)),seed);
    col *= clamp(1.0 - u*(1.0 - col),0.0,1.0);
  }
  // Palette

  return col;
}

const vec2 H2=vec2(.5698402909980532,.7548776662466927);
const float aa=1.5, ns=40.;

void main() {
	vec2 p = (gl_FragCoord.xy - 0.5)/(uResolution);
  p -= 0.5;
  p *= uZoom;

  // Thank you Piter Pasma for the anti-alising routine
  float col = 0.0;
  for(float i = 0.; i < ns; i += 1.0){
    vec2 d = fract(H2*i + 0.5) - 0.5;
    col += getColor(p + d*aa/uResolution.y);}
  col/=ns;

	gl_FragColor = vec4(vec3(col),1.0);
}`

//////////////////////////////////////////////////////////
//  Setting shader and renderer
//////////////////////////////////////////////////////////

const vertexShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertexShader, vertexShaderSource)
gl.compileShader(vertexShader)

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, fragmentShaderSource)
gl.compileShader(fragmentShader)

const program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
gl.linkProgram(program)

const vertices = Float32Array.of(-1, 1, -1, -1, 1, 1, 1, -1);

const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition')
gl.enableVertexAttribArray(program.aVertexPosition)
gl.vertexAttribPointer(program.aVertexPosition, 2, gl.FLOAT, false, 0, 0)

gl.useProgram(program)

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(1, 1, 1, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  program.uResolution = gl.getUniformLocation(program, 'uResolution')
  gl.uniform2fv(program.uResolution, [canvas.width,canvas.height])

  var minWidthHeight = Math.min(canvas.width,canvas.height)
  program.uZoom = gl.getUniformLocation(program, 'uZoom')
  gl.uniform2fv(program.uZoom, [canvas.width/minWidthHeight,canvas.height/minWidthHeight])

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

// Resize canvas and request one frame
resize()

//////////////////////////////////////////////////
//  Mouse & Keyboard
//////////////////////////////////////////////////

document.body.style.cursor = "none"

window.onkeydown = function(e) {
  if (e.keyCode == 70){
    fullscreenHandling()
  }
}

function fullscreenHandling(){
  if (screenfull.isEnabled) {
		screenfull.toggle()
	}
}

//////////////////////////////////////////////////////////
//  Helper functions
//////////////////////////////////////////////////////////

function rnd(vmin,vmax){
  return (vmax - vmin)*fxrand() + vmin
}

function getStringFromParameters(parameters){
  let finalString = ""
  for (var key in parameters) {
    finalString += getStringConst(key,parameters[key]) + "\n"
  }
  return finalString
}

function getStringConst(name,val){
  let finalString = "const "

  if (typeof(val) == "boolean"){
    finalString += `bool ${name} = ${val ? "true;" : "false;"}`
  };

  if (typeof(val) == "number"){
    finalString += `float ${name} = ${val.toFixed(5)};`
  };

  if (Array.isArray(val)){
    if (val.length > 4 || val.length == 0) {
      console.log("Invalid length for values")
      return
    } else {
      let typeVar = "vec" + val.length
      finalString += `${typeVar} ${name} = ${typeVar}(`
      for (let i = 0; i < val.length; i++) {
        finalString += val[i].toFixed(5)
        if (i < val.length - 1)   finalString += ","
      }
      finalString += ");"
    }
  }

  return finalString
}

function help(){
  console.log("\n\
  Keys\n\
  'f' to toggle fullscreen\n\
  ")
}

function license(){
  console.log("\n\
  Flare\n\
  Released on fx(hash) on December 9, 2021\n\
  (c) loackme; all rights reserved\n\
  See LICENSE.md for more information\n\
  ")
}
