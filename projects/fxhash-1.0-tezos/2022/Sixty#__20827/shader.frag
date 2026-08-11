#ifdef GL_ES
precision highp float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;

//textures and uniforms from p5
uniform sampler2D p;
uniform vec2 u_resolution;
uniform float seed;
uniform vec3 bgc;
uniform float marg;
uniform vec3 frameCol;
uniform bool mono;

float map(float value, float inMin, float inMax, float outMin, float outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}



float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vTexCoord*u_resolution;
  vec2 st = vTexCoord;
  vec2 stB = vTexCoord;
  bool mode = true;

  //flip the upside down image
  st.y = 1.0 - st.y;

  //form noise
  st.xy += (random(st.xy)*0.001)-0.0005;
  float warp = map(noise(seed+st.xy*100.0), 0.0, 1.0, -0.005, 0.005);
  float detWarp = map(noise(seed+st.xy*200.0), 0.0, 1.0, -0.002, 0.002);
  st.xy += warp;
  st.xy += detWarp;
  st.xy += detWarp;

  vec4 texP = texture2D(p, st);

  //color noise
  float noiseGray = random(st.xy)*0.25;

  vec3 color = vec3(0.0);
  vec3 final = vec3(0.0);
  color = vec3(texP.r, texP.g, texP.b);



  //Create grid texture
  float sz = 1.0/800.0;
  float modX = map(sin(stB.y*sz), -1.0, 1.0, 0.0, sz);
  float sinX = sin(stB.x*800.0);
  float sinY = sin(stB.y*800.0);

  float alph = map(seed+noise(stB.xy*8.0), 0.0, 1.0, 0.0, 0.01);
  float gridR = mix(color.r, frameCol.r, alph);
  float gridG = mix(color.g, frameCol.g, alph);
  float gridB = mix(color.b, frameCol.b, alph);
  float xThresh = map(noise(st.xy*10.0), 0.0, 1.0, 0.2, 1.0);
  float yThresh = map(noise(st.xy*10.0), 0.0, 1.0, 0.2, 1.0);
  if(sinX > xThresh && sinY > yThresh) {
    final = vec3(gridR, gridG, gridB);
  } else {
    final = vec3(color.rgb);
  }



  //Monochrome conditional
  float avg = map((final.r+final.g+final.b)/3.0, 0.2, 0.8, 0.0, 1.0);
  vec3 realAvg = vec3(avg);
  if(mono == true) {
    final = vec3(realAvg);
  }

  //Draw margin
  float margX = marg;
  float margY = margX*0.8;
  if(stB.x < margX || stB.x > 1.0-margX || stB.y < margY || stB.y > 1.0-margY) {
    final = vec3(bgc.r, bgc.g, bgc.b);
  }

  gl_FragColor = vec4(final+noiseGray, 1.0);
}
