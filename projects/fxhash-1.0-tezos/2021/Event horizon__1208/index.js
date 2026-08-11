function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input;
}

function map(current, in_min, in_max, out_min, out_max) {
  const mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

const a = [map(fxrand(),0.,1.,0.,.4),
           map(fxrand(),0.,1.,0.,.4),
           map(fxrand(),0.,1.,0.,.4)],
      b = [fxrand(),fxrand(),fxrand()],
      c = [fxrand(),fxrand(),fxrand()],
      d = [fxrand(),fxrand(),fxrand()]

const thickness = [map(fxrand(),0.,1.,0.2,1.),
                   map(fxrand(),0.,1.,0.2,1.),
                   map(fxrand(),0.,1.,0.2,1.),
                   map(fxrand(),0.,1.,0.2,1.)]

const wordList = ['hyper','fabulous','far-out','neat','nifty','chic','deep','excellent','fantastic','great','hip','rad','sensational','splendid','super','swell','trendy','unorthodox','way-out','wild']

function getGrooviness() {
  let rand = fxrand()
  let out = wordList[Math.floor(rand*(wordList.length-1))]
  console.log(Math.floor(rand*(wordList.length-1)),rand,out)
  return out
}

function getThickness() {
  return `${thickness[0].toFixed(2)} - ${thickness[1].toFixed(2)} - ${thickness[2].toFixed(2)} - ${thickness[3].toFixed(2)}`
}

window.$fxhashFeatures = {
  'Thiccness': getThickness(),
  'Aura': getGrooviness()
}

const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'webgl');

document.body.appendChild(canvas)

const gl = canvas.getContext('webgl', {preserveDrawingBuffer:true})

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resize()

window.addEventListener('resize', resize)

const mouse = { x: 0, y: 0 }

document.body.addEventListener('pointermove', function (e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
})

const vertexShaderSource = `attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}`

var fragmentShaderSource = `
#ifdef GL_ES
precision highp float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float uTime;
uniform vec2 uResolution;

uniform vec3 uA,uB,uC,uD;
uniform vec4 uThickness;

#define PI 3.14159
#define TAU 6.28318

// Palette tool from https://www.shadertoy.com/view/ll2GD3 - IQ

vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

mat2 rot(float a) {
    return mat2(cos(a),sin(a),-sin(a),cos(a));
}

float ss(float shape, float size) {
    float w = fwidth(shape);
    return smoothstep(size+w,size-w,shape);
}

float concentricCircles(vec2 uv, vec2 center, float thickness, float phase) {
    return ss(cos((distance(uv, vec2(center))/(thickness)*5.)+phase),thickness);
}

vec2 cartPol(vec2 uv) {
    return vec2(log(length(uv)),atan(uv.y,uv.x));
}

float lineMask(vec2 uv) {
    return cos(5.*uv.x-uTime);
}

float gridMask(vec2 uv) {
    float hLine = cos(20.*uv.y);
    hLine -= mix(hLine, 0.,.9);
    uv *= rot(PI);
    uv = abs(uv);
    float vLine = cos(10.*uv.x+uTime);
    return hLine-vLine;
}

void main() {
  vec2 uv = (2.*gl_FragCoord.xy - uResolution)/uResolution.y;
  
  uv *= rot(PI*.5);

  uv = cartPol(uv);

  vec2 puv = cartPol(uv);

  vec3 col = pal(puv.x-uTime, uA, uB, uC, uD);

  col *= vec3(concentricCircles(uv,vec2(0.),uThickness.x,uTime));
  col += vec3(concentricCircles(uv,vec2(0.),uThickness.y,uTime+PI))*0.25;
  col += mix(vec3(concentricCircles(uv,vec2(0.),uThickness.z,uTime+TAU)),
             vec3(concentricCircles(uv,vec2(0.),uThickness.w,uTime+PI)),0.5)*.5;

  col += mix(vec3(gridMask(puv*rot(PI*.5)))*0.2,
             vec3(gridMask(puv*rot(PI*.5)))*0.5,uv.x)*.5;

  col -= lineMask(uv)*0.2*col;

  gl_FragColor = vec4(col,1.);
}`

gl.getExtension('OES_standard_derivatives');

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

const vertices = new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1])

const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

const itemSize = 2
const numItems = vertices.length / itemSize

program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition')
gl.enableVertexAttribArray(program.aVertexPosition)
gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0)

gl.useProgram(program)

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(1, 1, 1, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  program.uTime = gl.getUniformLocation(program, 'uTime')
  gl.uniform1f(program.uTime, 0.001 * performance.now())

  program.uResolution = gl.getUniformLocation(program, 'uResolution')
  gl.uniform2fv(program.uResolution, [window.innerWidth,window.innerHeight])

  program.uA = gl.getUniformLocation(program, 'uA')
  gl.uniform3fv(program.uA, [a[0],a[1],a[2]])

  program.uB = gl.getUniformLocation(program, 'uB')
  gl.uniform3fv(program.uB, [b[0],b[1],b[2]])

  program.uC = gl.getUniformLocation(program, 'uC')
  gl.uniform3fv(program.uC, [c[0],c[1],c[2]])

  program.uD = gl.getUniformLocation(program, 'uD')
  gl.uniform3fv(program.uD, [d[0],d[1],d[2]])

  program.uThickness = gl.getUniformLocation(program, 'uThickness')
  gl.uniform4fv(program.uThickness, [thickness[0],thickness[1],thickness[2],thickness[3]])




  gl.drawArrays(gl.TRIANGLES, 0, numItems)

  requestAnimationFrame(render)
}

render()
