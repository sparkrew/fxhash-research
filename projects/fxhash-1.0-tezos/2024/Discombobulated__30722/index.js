/**
 * For those who find the distance between stability and turmoil may not be as
 * far as they'd like.
 */


const sp = new URLSearchParams(window.location.search)


$fx.features({})

function setup() {
  createCanvas(2400, 3200);
  noLoop();
  const seed = $fx.rand() * 100_000;
  randomSeed(seed);
  noiseSeed(seed);
  noiseDetail(1);
}
window.setup = setup;

const noiseScale = 3;
// For some reason, noiseDetail appears to give values in range(0, 0.5)
const unoise = (x, y) => noise(x * noiseScale / width, y * noiseScale / height) * 2;
  

function draw() {
  const rng = random;
  const paletteString = sample(rng, [
    'aeba98-33441e-f2e8cf-d7c485-ce536c',
    'cd6e57-f3ebce-bb603c-8591ae-776151',
    '433938-d1d5d3-f1d38d-be7349-262125',
    '4f648d-aeba98-e0a838-b2b599-e7e1ca',
    '4a475c-ede6d0-c76c4b-6f89b0-242021',

    '613a36-eecfc0-f4e9cb-7995b6-70b5a9',
    'bb603c-f3dba7-729ca3-6e3b31-33441e',
    'f4e9cb-9d9e9a-6d6d95-bb603c-eac49e',
    'c76c4b-523f33-b2b599-eac49e-8d7570',
    '262125-4f648d-f2e8cf-b54a3b-b2b599-3a334b-463c32',
  ]);
  const palette = shuffle(splitPalette(paletteString));

  const l1 = layer1(palette);
  const l2 = layer2(l1);
  
  image(l2, 0, 0);
  
  $fx.preview();
}
window.draw = draw;

function layer3() {
  const gfx = createGraphics(width, height);
  const ctx = gfx.drawingContext;
  const gap = 10;
  let small = 10;
  let big = -10;
  for (let x = 0; x < width; x+= gap) {
    for (let y = 0 ;y < height; y+= gap) {
      const n = unoise(x, y);
      small = min(small, n);
      big = max(big, n);
      const val = ~~(n * 255);
      ctx.fillStyle = `rgb(${val},${val},${val})`;
      ctx.fillRect(x, y, gap, gap);
    }
  }
  console.log(small, big);
  return gfx;
}

function layer1(palette) {
  const rng = random;
  const gfx = createGraphics(width, height);
  const ctx = gfx.drawingContext;

  
  const outerPad = width * 0;
  let rects = [
    {
      x: outerPad,
      y: outerPad,
      w: width - outerPad * 2,
      h: height - outerPad * 2,
    },
  ];
  const numDivisions = 12;
  for (let i = 0; i < numDivisions; i++) {
    rects = rects.map((r) => divide(r, 0.15)).flat();
  }

  const s = 1;
  
  rects.forEach((rect) => {
    const { x, y, w, h } = rect;
    const col = sample(rng, palette);
    ctx.fillStyle = col;
    
    
    const randPoint = () => [x + rng() * w*s, y + rng() * h*s];

    ctx.save();
    ctx.globalAlpha = 0.4;
    for (let j = 0; j < 15; j++) {
      ctx.fillStyle = adjustOklch(
        col,
        [lerp(-0.2, 0.2, rng()), 0, 0],
        
      );

      let points = Array.from({ length: 10 }, randPoint);
      for (let i = 0; i < 6; i++) {
        points = smoothen(points);
      }
      ctx.fill(pointsToPath(points, true));
    }
    ctx.restore();
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
    ${hsvTools}
    ${rotate}

    float noise(vec2 uv) {
      return snoise(uv + rv);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_res;

      vec3 tex = texture2D(u_buffer, uv).rgb;

      vec2 uv2 = uv;

      vec2 uvr = uv + fbm(uv*3., 3) * 0.25;
      float a2 = (PI*0.65) * noise(uv*3.  +4123.1);
      uv2 = clamp(
        rotate(uv2, uvr, a2), 
        vec2(0.),
        vec2(1.)
      );
      uv2 = fract(uv2);

      vec3 tex2 = texture2D(u_buffer, uv2).rgb;
      tex2 = adjust_value(tex2, fbm(uv*1., 4)*0.4);

      float n = min(1., (snoise(uv* 5. + 41.1) + 1.) * 0.5);
      n = smoothstep(0.25, 0.6, n);
      n = mix(0.1, 0.8, n);
      tex = mix(tex, tex2, n);
      
      gl_FragColor = vec4(tex, 1.);
    }`;

  const gfx = createGraphics(width, height, WEBGL);
  // gfx.setAttributes('alpha', true);
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

function sample(rng, rg) {
  return random(rg);
}

function alphad(col, alpha) {
  return col + ('00' + Math.floor(alpha * 0xff).toString(16)).slice(-2);
}

function gauss(rng, sd) { return randomGaussian(0, sd);}

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
float fbm (in vec2 st, float dst, float damp, int num_octaves) {
  st += rv;
  // Initial values
  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;
  //
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
    if (i < num_octaves) {
      value += amplitude * snoise(st);
      st *= dst;
      amplitude *= damp;
    }
  }
  return value;
}

float fbm (in vec2 st, int num_octaves) {
  return fbm(st, 2., 0.5, num_octaves);
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

function adjustOklch(col, adjust, alpha = 1) {
  const color = new Color(col).to('oklch');
  color.oklch.l = constrain(color.oklch.l + adjust[0], 0, 1);
  color.oklch.c = constrain(color.oklch.c + adjust[1], 0, 1);
  color.oklch.h = (color.oklch.h + adjust[2]) % 360;
  color.alpha = alpha;
  return color.to('srgb').toString({ format: 'hex' });
}

function divide(rect, skipPct = 0) {
  const rng = random;
  const jitter = (amt) => lerp(-1, 1, rng()) * amt;
  
  if (rng() < skipPct) {
    return [rect];
  }
  const { x, y, w, h } = rect;
  // let horzLine = h > w || (w === h && rng() < 0.5);

  const h2 = h + jitter(h * 0.4);
  const w2 = w + jitter(w * 0.4);
  const horzLine = h2 > w2 || (w2 === h2 && rng() < 0.5);

  const pct = unoise(x + w / 2, y + h / 2);

  if (horzLine) {
    const h1 = ~~(h * pct);
    const h2 = h - h1;
    return [
      { x, y, w, h: h1 },
      { x, y: y + h1, w, h: h2 },
    ];
  } else {
    const w1 = ~~(w * pct);
    const w2 = w - w1;
    return [
      {
        x,
        y,
        w: w1,
        h,
      },
      {
        x: x + w1,
        y,
        w: w2,
        h,
      },
    ];
  }
}

function pointsToPath(points, closePath = true) {
  const path = new Path2D();
  path.moveTo(...points[0]);
  points.slice(1).forEach((p) => path.lineTo(...p));
  if (closePath) {
    path.closePath();
  }
  return path;
}

function smoothen(points, smoothingFactor = 0.25) {
  const nextPoints = [];
  for (let i = 0; i < points.length; i++) {
    const prev = points[mod(i - 1, points.length)];
    const cur = points[i];
    const next = points[mod(i + 1, points.length)];

    nextPoints.push(lerpPoint(prev, cur, 1 - smoothingFactor));
    nextPoints.push(lerpPoint(cur, next, smoothingFactor));
  }

  return nextPoints;
}

function mod(num, modulo) {
  return (((num + modulo) % modulo) + modulo) % modulo;
}

function lerpPoint(start, end, amt) {
  return [
    lerp(start[0], end[0], amt),
     lerp(start[1], end[1], amt),
  ]
}
