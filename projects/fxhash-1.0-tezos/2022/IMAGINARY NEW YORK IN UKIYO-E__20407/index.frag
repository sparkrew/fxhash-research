
precision lowp float;

varying vec2 vTexCoord;
uniform sampler2D cactiTex;

uniform vec2 resolution;
uniform float time;
uniform float hue;
uniform float saturation;
uniform float luminance;
uniform float xdir;
uniform float ydir;

#ifndef PI
#define PI 3.141592653589793
#endif

#define NUM_OCTAVES 10

vec3 rgb2hsb( in vec3 c ){
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsb2rgb( in vec3 c ){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb*rgb*(3.0-2.0*rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

float random(in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 4.3 * n_xy;
}

float fbm(in vec2 st)
{
	float v = 0.0;
  float a = 0.5;
    
  for (int i = 0; i < NUM_OCTAVES; i++) {
    v += a * cnoise(st);
    st = st * 2.0;
    a *= 0.5;
  }
  
  return v;
}

float cubicInOut(float t) {
  return t < 0.5 ? 4.0 * t * t * t : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

float rand(vec2 co) {
  float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;
  float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));
  float t = fract(s * 43758.5453);
  return t;
}

void main(void) {
    
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  
  float mosaicStep = 1024.0;
  vec2 center = floor(uv * mosaicStep) / mosaicStep;
  float fluct = cubicInOut((1.0 + sin(time * 0.0015)) * 0.5) + cos(time * 0.00015 + 0.02) * 0.3;
  fluct = sineInOut(fluct);
  uv.x += fbm(center + time * 0.0001 * xdir + vec2(0.0)) * fluct;
  uv.y += fbm(center + time * 0.0001 * ydir + vec2(1.0)) * fluct;

  vec3 color  = texture2D(cactiTex, uv).rgb;
  
  vec3 hsl = hsb2rgb(color);

  hsl.x += hue;
  if (hsl.x > 1.0) { hsl.x = hsl.x - 1.0; }
  
  hsl.y += saturation;
  if (hsl.y > 1.0) { hsl.y = hsl.y - 1.0; }
  
  hsl.z += luminance;
  if (hsl.z > 1.0) { hsl.z = hsl.z - 1.0; }
  
  color = rgb2hsb(hsl);  

  gl_FragColor = vec4(color, 1.0);    
}