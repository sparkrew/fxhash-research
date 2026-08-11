
/*
deformations type glitchs
*/
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.141592654

varying vec2 vTexCoord;
uniform sampler2D texture;
uniform vec2 u_resolution;
uniform float level;
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
mat2 rotate(float angle){
    return mat2( cos(angle), -sin(angle),
               	sin(angle),cos(angle));
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
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
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  vec3 orig = texture2D(texture,uv).xyz;

  float fact = map(seed,0.,1., 15.,25.);

  if (noise((uv*fact)) > 0.5){
  
    #define MAXLOOP  4*500 //4*500

    for(int i = 0; i < MAXLOOP; i++){

      float pos = random(vec2(seed)*float(i));
      uv -= 0.5;
      uv = rotate(PI/2.) * uv;
      uv = deform(uv,pos,0.0005,0.01);
      uv += 0.5;

    }
    
  }
    vec3 col = texture2D(texture,uv).xyz;
    gl_FragColor = vec4(col,1.);
}

