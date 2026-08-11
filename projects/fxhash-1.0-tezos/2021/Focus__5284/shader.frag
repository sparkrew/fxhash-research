precision mediump float;

uniform vec2 u_resolution; 
varying vec2 vTexCoord;
const float EPSILON = 1e-10;

uniform float FOCUS_FREQ_X;
uniform float FOCUS_FREQ_Y;
uniform float FOCUS_A_X;
uniform float FOCUS_A_Y;
uniform float FOCUS_BASE;
uniform float R_FREQ;
uniform float G_FREQ;
uniform float B_FREQ;
uniform float R_BASE;
uniform float G_BASE;
uniform float B_BASE;

uniform sampler2D u_agents;
uniform float u_time;

float TWO_PI = 6.28318530718;

const int N_AGENTS = 20;

vec3 rgb2hsv(vec3 c){
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 getColor(float x){  

  x = mod(x, 1.);

  float r, g, b;
    
  float A = 1.; // Amplitude
  float M = A/2.; // Center point
  float P = TWO_PI/1.; // Period
  
  r=M+M*sin(R_BASE+x*P*R_FREQ);
  g=M+M*sin(G_BASE+x*P*G_FREQ);
  b=M+M*sin(B_BASE+x*P*B_FREQ);

  r = min(r, 1.);
  g = min(g, 1.);
  b = min(b, 1.);

  r = max(r, 0.);
  g = max(g, 0.);
  b = max(b, 0.);
  
  return vec3(r, g, b);
}

void main() {
  
  vec2 st = vTexCoord; 
  st.x *= u_resolution.x/u_resolution.y;
  st -= vec2(0.5*u_resolution.x/u_resolution.y, .5);

  float focus = FOCUS_BASE-sin(st.x*FOCUS_FREQ_X)*FOCUS_A_X-sin(st.y*FOCUS_FREQ_Y)*FOCUS_A_Y;
  vec3 bnw = vec3(0.);

  float size = min(u_resolution.x, u_resolution.y);

  for(int i=0; i<N_AGENTS; i++){
    vec4 a = texture2D(u_agents, vec2(0, float(i)/float(N_AGENTS)));

    vec2 agent = vec2(
      (a.x - .5) * 1., 
      (a.y - .5) * 1.
    );
    float hue = a.z;

    float d = distance(agent, st)*float(i)/focus;    
    vec3 agentC = hsv2rgb(vec3(hue, 1., 1.));
    bnw = mix(bnw, agentC, d);
  }

  bnw.r = clamp(bnw.r, 0., 1.);
  bnw.g = clamp(bnw.g, 0., 1.);
  bnw.b = clamp(bnw.b, 0., 1.);

  vec3 hsbColor = rgb2hsv(bnw);
  
  float hue = hsbColor.r;
  float bri = hsbColor.b;

  vec3 color = vec3(hue);
  vec3 chroma = getColor(hue/1.);
  color = mix(color, chroma, 0.6-abs(hue-0.5));
  
  gl_FragColor = vec4(color, 1.0); 

}