
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265

varying vec2 vTexCoord;
uniform sampler2D texture;
uniform vec2 u_resolution;
uniform float noiseVal;
uniform float pixelDensity;
uniform float seed;

//see
//https://www.shadertoy.com/view/4djSRW
float random(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

// matrice de rotation 2d
mat2 rotate(float angle){
    return mat2( cos(angle), -sin(angle),
               	sin(angle),cos(angle));
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

  vec2 deform(vec2 uv, float pos, float level1,float level2){
    
    float ymap = map(uv.y,pos-level1,pos+level1,-1.,1.);
    if (abs(uv.y-pos)<level1)
      uv.x += (1.- (sin(PI*ymap/2.0))*(sin(PI*ymap/2.0)))*level2;
    return uv;
  }


void main() {
  
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
  float color = 0.;

  vec3 uv = vec3(0.);
  uv.xy = vTexCoord;
  uv.y = 1.0 - uv.y;
  uv.z = seed;

  #define MAXLOOP  220*40 
  float fact = map(seed,0.,1., 15.,25.);

  if (noise((uv*vec3(vec2(fact),seed))) <0.5){  
  
    for(int i = 0; i < MAXLOOP; i++){

      float pos = random(vec2(seed)*float(i));
      uv.xy = deform(uv.xy,pos,0.005,0.0005); // 0.0025
      uv.xy -= 0.5;
      uv.xy = rotate(PI/20.) * uv.xy;
      uv.xy += 0.5;

    }
  
  }

vec3 col = texture2D(texture,uv.xy).xyz;
gl_FragColor = vec4(col,1.);
}
/*

*/