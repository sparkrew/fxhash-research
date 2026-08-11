//crashers by galo canizares (b. 1989)
//raw js/WEBGL

//init canvas and WEBGL
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//preserveDrawingBuffer:true is required for screenshotting
const gl = canvas.getContext('webgl', {antialias: false, preserveDrawingBuffer: true});
let basev, basef, noisef, ditherf, ppgm;

const drawctx = document.createElement('canvas');
document.body.appendChild(drawctx);
drawctx.width = window.innerWidth;
drawctx.height = window.innerHeight;
let ctx = drawctx.getContext('2d', {alpha: true});

const isRare = fxrand() < 0.2;
const dotLottery = parseInt(fxrand()*4);
const flowLottery = parseInt(fxrand()*3);
const xLottery = parseInt(fxrand()*5);
const yLottery = parseInt(fxrand()*5);
const colorPalette = parseInt(fxrand()*8);
const seed = fxrand()*10000;

window.$fxhashFeatures = {
  "pixelSize": [2.0, 4.0, 8.0, 16.0][dotLottery],
  "flowVariation": [2.0, 3.0, 4.0][flowLottery],
  "colorPalette": ["cake", "taco", "noodle", "desktop", "notebook", "pencil", "backpack", "beanie"][colorPalette]
};

let dot = window.$fxhashFeatures.pixelSize;
let flowVariation = window.$fxhashFeatures.flowVariation;
let solid = isRare ? 1.0 : 0.0;
let xGrid = [6, 8, 16, 48, 64][xLottery];
let yGrid = [6, 8, 10, 12, 16][yLottery];
let lut = ["05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png"][colorPalette];
let time = seed*0.001;

document.addEventListener('keydown', screenshot);

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  resetCtx();
});

//method to translate stored settings into shader uniforms
const updateU = function(){
	gl.useProgram(baseSlab.pgm);
  gl.uniform2fv(gl.getUniformLocation(baseSlab.pgm,"uResolution"), [canvas.width, canvas.height]);
}

//init shader
const basevs = `
attribute vec3 pos;
attribute vec4 color;
attribute vec2 texcoord;
varying vec4 vColor;
varying vec2 tc;
varying vec2 vUv;
void main() {
  gl_Position = vec4(pos, 1.0);
  tc = texcoord;
  vColor = color;
  vUv = 0.5 * (pos.xy + 1.0);
}`

const basefs = `
#ifdef GL_ES
precision mediump float;
precision mediump sampler2D;
#endif
uniform sampler2D tex0;
uniform vec2 uResolution;
varying vec4 vColor;
varying vec2 tc;
varying vec2 vUv;

void main() {
  vec2 uv = tc;
  //uv.y = 1.0-uv.y;
  //uv.y += 0.5;
  vec4 c = texture2D(tex0, vUv);
  //gl_FragColor = vec4(uv.x, c.g, uv.y, 1.0);
  gl_FragColor = c;
}`

const testfs = `
#ifdef GL_ES
precision mediump float;
precision mediump sampler2D;
#endif
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform vec2 uResolution;
varying vec4 vColor;
varying vec2 tc;
varying vec2 vUv;

void main() {
  vec2 uv = tc;
  float aspect = uResolution.x / uResolution.y;
  vec2 newRes = vec2(512.0);
  newRes.x *= aspect;
  vec2 vuv = floor( uv * newRes ) / newRes;
  //uv.y = 1.0-uv.y;
  //uv.y += 0.5;
  vec4 c = texture2D(tex1, vuv);
  gl_FragColor = vec4(uv.x, c.g, uv.y, 1.0);
  //gl_FragColor = c;
}`

const noisefs = `
#ifdef GL_ES
precision mediump float;
precision mediump sampler2D;
#endif
uniform float uTime;
uniform vec2 uResolution;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D tex2;
uniform float dotSize;
uniform float flowVar;
uniform float solid;
varying vec4 vColor;
varying vec2 tc;
varying vec2 vUv;

float box(vec2 coord, vec2 offset, vec2 dimensions) {
  vec2 shaper = vec2(step(offset.x, coord.x), step(offset.y, coord.y));
  shaper *= vec2(step(coord.x, offset.x + dimensions.x), step(coord.y, offset.y + dimensions.y));

  return shaper.x * shaper.y;
}

// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

//glsl-lut
vec4 lookup(in vec4 textureColor, in sampler2D lookupTable) {

    mediump float blueColor = textureColor.b * 63.0;
    mediump vec2 quad1;
    quad1.y = floor(floor(blueColor) / 8.0);
    quad1.x = floor(blueColor) - (quad1.y * 8.0);
    mediump vec2 quad2;
    quad2.y = floor(ceil(blueColor) / 8.0);
    quad2.x = ceil(blueColor) - (quad2.y * 8.0);
    highp vec2 texPos1;
    texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);
    highp vec2 texPos2;
    texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);
    lowp vec4 newColor1 = texture2D(lookupTable, texPos1);
    lowp vec4 newColor2 = texture2D(lookupTable, texPos2);
    lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
    return newColor;
}

float intensity(vec2 pixel) {
    const float a1 = 0.75487766624669276;
    const float a2 = 0.569840290998;
    return fract(a1 * pixel.x + a2 * pixel.y);
}

float dither(vec2 coords, float gray, float ng) {
    float noised = (2.0/ng) * intensity(coords) + gray - (1.0/ng);
    float levels = clamp(floor(ng * noised) / (ng-1.0), 0.0, 1.0);
    return levels;
}

void main() {

  vec2 uv = tc;

  //pixel region number using the texture coordinates
  vec2 pixelBin = gl_FragCoord.xy / dotSize;

  //add step to incolor to downscale pixelate uvs (bin)
  vec2 tiles = uResolution.xy / dotSize;
  vec2 uvBin = floor(pixelBin) / tiles;
  float aspect = uResolution.y / uResolution.x;

  // get the image as a vec4 using texture2D and plug in our distored uv's
  vec3 incolor = texture2D(tex1, uvBin).rgb;
  if (box(uvBin, vec2(aspect * 0.05, 0.05), vec2(1.0-(2.0 * aspect * 0.05), 0.9)) >= 1.0) {
    float x = snoise(vec3(uvBin.x*2.0, uvBin.y*flowVar, sin(uTime))) / uResolution.x;
    float y = snoise(vec3(uvBin.x*-flowVar, uvBin.y*-1.0, cos(uTime))) / uResolution.y;
    vec2 flow = vec2(x*20.0*aspect, y*20.0);
    incolor = texture2D(tex0, uvBin - flow).rgb;
  }
  vec4 tex = pow(vec4(incolor, 1.0), vec4(2.2));

  float greyLvl = 8.0; // Number of gray levels to use
  vec2 xyPos = floor(pixelBin.xy);
  vec3 col = vec3(dither(xyPos, tex.r, greyLvl), dither(xyPos, tex.g, greyLvl), dither(xyPos, tex.b, greyLvl));
  col.rgb = pow(col, vec3(1.0/2.2));

  vec4 final = lookup(vec4(col, 1.0), tex2);

  if (solid == 1.0) {
    final = lookup(vec4(incolor, 1.0), tex2);
  }

  gl_FragColor = final;
}`

const initGL = () => {
  gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
	gl.disable(gl.BLEND);
	gl.disable(gl.DEPTH_TEST);
	gl.clearColor(1.0,0.0,0.0,1.0);
	gl.viewport(0,0,canvas.width,canvas.height);

}

const initSlabs = () => {
  //generate shaders
  basev = pxShader(basevs, gl.VERTEX_SHADER);
  basef = pxShader(basefs, gl.FRAGMENT_SHADER);
  noisef = pxShader(noisefs, gl.FRAGMENT_SHADER);

  ppgm = pxProgram(basev, basef);

  //create Slab - essentially an FBO with a shader program
  baseSlab = new pxSlab(basev, noisef);
  baseSlab.allocate(canvas.width, canvas.height);

  //create blank FBO
  feedback = new pxFBO();
  feedback.allocate(canvas.width, canvas.height);

  gl.useProgram(baseSlab.pgm);
  gl.uniform1f(gl.getUniformLocation(baseSlab.pgm,"dotSize"), dot);
  gl.uniform1f(gl.getUniformLocation(baseSlab.pgm,"flowVar"), flowVariation);
  gl.uniform1f(gl.getUniformLocation(baseSlab.pgm,"solid"), solid);
  gl.uniform2fv(gl.getUniformLocation(baseSlab.pgm,"uResolution"), [canvas.width, canvas.height]);
}
//initialize an image or texture; this is where you would begin draw
const lookup = gl.createTexture();
const initImg = () => {
  let img = new Image();
      img.onload = function() {
          gl.bindTexture(gl.TEXTURE_2D, lookup);
          //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
          //gl.generateMipmap(gl.TEXTURE_2D);
          //render();
          initDrawCtx();
      };
      img.onerror = function() {
          console.log("Sorry, could not load texture.")
      };
      img.src = lut;
}
const gridImg = gl.createTexture();
const initDrawCtx = () => {
  for (let i = 0; i < canvas.width; i += canvas.width/xGrid) {
    for ( let j = 0; j < canvas.height; j += canvas.height/yGrid) {
      ctx.fillStyle = ["#e6e6e6","#b5b5b5","#808080","#4a4a4a","#1f1f1f","#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"][parseInt(fxrand()*10)];
      ctx.fillRect (i, j, canvas.width/xGrid, canvas.height/yGrid);
    }
  }
  gridImg.image = drawctx;
  gl.bindTexture(gl.TEXTURE_2D, gridImg);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, drawctx);
  render();
  console.log("crashers by galo canizares (b. 1989)");
}

const resetCtx = () => {
  for (let i = 0; i < canvas.width; i += canvas.width/xGrid) {
    for ( let j = 0; j < canvas.height; j += canvas.height/yGrid) {
      ctx.fillStyle = ["#e6e6e6","#b5b5b5","#808080","#4a4a4a","#1f1f1f","#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"][parseInt(fxrand()*10)];
      ctx.fillRect (i, j, canvas.width/xGrid, canvas.height/yGrid);
    }
  }
  gridImg.image = drawctx;
  gl.bindTexture(gl.TEXTURE_2D, gridImg);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, drawctx);
}


//render and update every frame
const render = () => {
  time += 0.001;

	updateU();

  gl.useProgram(baseSlab.pgm);
	gl.uniform1f(gl.getUniformLocation(baseSlab.pgm,"uTime"), time);
  gl.uniform2fv(gl.getUniformLocation(baseSlab.pgm,"uResolution"), [canvas.width, canvas.height]);

  //clear the frame
	gl.clear(gl.COLOR_BUFFER_BIT);
  //bind the "base" slab
	baseSlab.start();

  gl.clear(gl.COLOR_BUFFER_BIT);
  //draw the "feedback" image base buffer, using the baseSlab shader
	feedback.draw3(baseSlab.pgm, gridImg, lookup);
  //bind the feedback slab
	feedback.start();

	//clear the color buffer
	gl.clear(gl.COLOR_BUFFER_BIT);
	//draw the baseSlab buffer image into the feedback buffer, using a very simple, passthru shader
	baseSlab.draw(ppgm);

	//unbind the framebuffer so that we draw to screen
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//draw the base buffer to screen
	baseSlab.draw(ppgm);
  //gl.bindTexture(gl.TEXTURE_2D, gridImg);
  //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, drawctx);

  requestAnimationFrame(render);
}

function screenshot(e) {
  if (e.key === 's') {
    saveAsImage();
  }
}

function saveAsImage() {
  let imgData, imgNode;
  try {
      let str = "image/png";
      imgData = canvas.toDataURL(str, 1.0);
      saveFile(imgData.replace(str, 'image/octet-stream'), "crashers.png");
  } catch (e) {
      console.log(e);
      return;
  }
}

const saveFile = function (strData, filename) {
  let link = document.createElement('a');
  if (typeof link.download === 'string') {
      document.body.appendChild(link); //Firefox requires the link to be in the body
      link.download = filename;
      link.href = strData;
      link.click();
      document.body.removeChild(link); //remove the link when done
  } else {
      location.replace(uri);
  }
}
//init functions
initGL();
initSlabs();
initImg();
