/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// A well ordered grid of rows and columns.

const sp = new URLSearchParams(window.location.search)

const pad = 0.2;

$fx.features({})

function setup() {
  createCanvas(2000, 3200);
  noLoop();
  const seed = $fx.rand() * 10_000;
  randomSeed(seed);
}
window.setup = setup;

function draw() {
  const paletteString = sample([
    '711518-5b5c62-6f89b0-e2dec7-bb603c',
    'a63a50-f0e7d8-ab9b96-04151f-212738'
  ]);
  const palette = shuffle(splitPalette(paletteString));

  const l1 = layer1(palette);
  const l2 = layer2(l1);
  const l3 = layer3(l2);
  image(l3, 0, 0);

  $fx.preview();
  
}
window.draw = draw;

function layer1(palette) {
  const gfx = createGraphics(width, height);
  const ctx = gfx.drawingContext;
  const rng = random;

  const [back, ...fore] = palette;

  ctx.fillStyle = back;
  ctx.fillRect(0, 0, width, height);

  [0.25, 0.4, 0.6, 0.75].forEach((pctY, i) => {
    if (rng() < 0.2) {
      return;
    }
    const y = lerp(pad, 1 - pad, pctY) * height;
    const grad = ctx.createLinearGradient(
      width / 2,
      height,
      width / 2,
      y
    );
    const color = fore[i % fore.length];
    const numSteps = 100;
    for (let i = 0; i < numSteps; i++) {
      const pct = i / (numSteps - 1);
      grad.addColorStop(pct, alphad(color, 1 - pow(pct, 3)));
    }
    ctx.fillStyle = grad;

    ctx.fillRect(0, y, width, height);
  });
  
  return gfx;
}

function layer2(input) {
  const glSeed = random() * 100;
  const frag = /*glsl*/`
    precision highp float;
    uniform sampler2D u_buffer;
    uniform vec2 u_res;
    
    #define PI 3.141592653589793
    #define TAU 6.283185307179586

    #define rv ${glSeed}
    ${simplexNoise}
    ${fbm(8)}
    ${rotate}
    ${hsvTools}
    ${rand}

    void main() {
      vec2 uv = gl_FragCoord.xy / u_res;
      vec2 aspect = vec2(1., 1.6);

      vec2 uvr = uv + fbm(uv*5., 2., 0.8) * ${lerp(0.01, 0.06, random())};

      float rotAngle = PI/2. + PI*0.25 + mix(-1., 1., rand(uv))*PI*0.1;
      uv = clamp(
        rotate(uv, uvr, rotAngle * ${random(['-1.', '1.'])}), 
        vec2(0.),
        vec2(1.)
      );
      
      vec3 tex = texture2D(u_buffer, uv).rgb;

      tex = adjust_value(tex, fbm(uv*0.5) * 0.5);
      tex = adjust_hue(tex, fbm(uv*5. + 3. * rv) * 0.05);

      gl_FragColor = vec4(tex, 1.);
    }`;

  const gfx = createGraphics(width, height, WEBGL);
  gfx.setAttributes('alpha', true);
  const shader = gfx.createShader(vert, frag);
  gfx.shader(shader);
  checkShaderError(shader, frag);

  const pd = pixelDensity();
  drawShader(gfx, shader, {
    u_res: [width * pd, height * pd],
    u_buffer: input
  });
  return gfx;
}

function layer3(input) {
  const glSeed = random() * 100;
  const frag = /*glsl*/`
    precision highp float;
    uniform sampler2D u_buffer;
    uniform vec2 u_res;
    
    #define PI 3.141592653589793
    #define TAU 6.283185307179586

    #define rv ${glSeed}
    ${simplexNoise}
    ${fbm(8)}
    ${rotate}
    ${hsvTools}
    ${rand}

    void main() {
      vec2 uv = gl_FragCoord.xy / u_res;
      vec2 aspect = vec2(1., 1.6);

      float pad = ${pad};

      uv.x = mix(pad, 1.-pad, uv.x);
      uv.y = mix(pad, 1.-pad, uv.y);      
      
      uv.y += min(pad, fbm(uv*.1) * 0.4);
      uv.x += min(pad, fbm(uv*.2 + 1.23) * 0.25);
      uv = clamp(uv, vec2(0.), vec2(1.));
      
      vec3 tex = texture2D(u_buffer, uv).rgb;

      tex = adjust_value(tex, fbm(uv*0.25 + 8.21) * 0.2);

      gl_FragColor = vec4(tex, 1.);
    }`;

  const gfx = createGraphics(width, height, WEBGL);
  gfx.setAttributes('alpha', true);
  const shader = gfx.createShader(vert, frag);
  gfx.shader(shader);
  checkShaderError(shader, frag);

  const pd = pixelDensity();
  drawShader(gfx, shader, {
    u_res: [width * pd, height * pd],
    u_buffer: input
  });
  return gfx;
}

function drawShader(gfx, shader, uniforms) {
  Object.entries(uniforms).forEach(([key, value]) =>
    shader.setUniform(key, value)
  );
  
  gfx.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  
}

const vert = /*glsl*/ `
  precision highp float;
  attribute vec3 aPosition;
  void main(){
    gl_Position= vec4(aPosition,1.0);;
}`;

function splitPalette(str) {
  return str.split('-').map((x) => '#' + x);
}

function sample(rg) {
  return random(rg);
}

function alphad(col, alpha) {
  return col + ('00' + Math.floor(alpha * 0xff).toString(16)).slice(-2);
}

function gauss(sd) { return randomGaussian(0, sd);}

function ellipseCtx(ctx, center, radiusX = 1, radiusY = 1, rot=0) {
  ctx.beginPath();
  ctx.ellipse(...center, radiusX, radiusY, rot, 0, 2 * Math.PI);
  ctx.fill();
}


  const simplexNoise = /*glsl*/`
  // Description : Array and textureless GLSL 2D simplex noise function.
  //      Author : Ian McEwan, Ashima Arts.
  //  Maintainer : ijm
  //     Lastmod : 20110822 (ijm)
  //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
  //               Distributed under the MIT License. See LICENSE file.
  //               https://github.com/ashima/webgl-noise
  //

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}`;

const hsvTools = /*glsl*/ `
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 adjust_hue(vec3 rgb, float amt) {
  vec3 hsv = rgb2hsv(rgb);
  
  hsv.x += amt;
  hsv.x = fract(hsv.x);
  return hsv2rgb(hsv);
}

vec3 adjust_sat(vec3 rgb, float amt) {
  vec3 hsv = rgb2hsv(rgb);
  
  hsv.y += amt;
  hsv.y = clamp(hsv.y, 0., 1.);
  return hsv2rgb(hsv);
}

vec3 adjust_value(vec3 rgb, float amt) {
  vec3 hsv = rgb2hsv(rgb);
  
  hsv.z += amt;
  hsv.z = clamp(hsv.z, 0., 1.);
  return hsv2rgb(hsv);
}`;

const fbm = (octaves=6) => /*glsl*/ `#define OCTAVES ${octaves}
float fbm (in vec2 st, float dst, float damp) {
  st += rv;
  // Initial values
  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;
  //
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * snoise(st);
    st *= dst;
    amplitude *= damp;
  }
  return value;
}

float fbm (in vec2 st) {
  return fbm(st, 2., 0.5);
}`;

const rotate = /*glsl*/ `
vec2 rotate(vec2 point, vec2 center, float angle) {
  float s = sin(angle);
  float c = cos(angle);

  mat2 m2 = mat2(
    c, -s,
    s, c
  );

  return m2 * (point - center) + center;
}`;

const rand = /*glsl*/ `
float rand(vec2 st) {
  return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
} 
`;

function sincos(point, angle, mag) {
  return [point[0] + Math.cos(angle) * mag, point[1] + Math.sin(angle) * mag];
}

function checkShaderError(shaderObj, shaderText) {
  const gl = shaderObj._renderer.GL
  const glFragShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(glFragShader, shaderText)
  gl.compileShader(glFragShader)
  if (!gl.getShaderParameter(glFragShader, gl.COMPILE_STATUS)) {
    const info =  gl.getShaderInfoLog(glFragShader)
    console.log(info);
  }
}
/******/ })()
;