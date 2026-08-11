precision highp float;
varying vec2 vTexCoord;
uniform sampler2D t0;
uniform vec2 resot;
uniform float randomi;
uniform float randomi2;

const float frand = 0.99;

const vec2 lum = vec2(0.15, 0.75);
const vec4 lumcoeff = vec4(0.299,0.587,0.114,0.);

float rand(vec2 co) {
			  return fract(sin(dot(co.xy ,vec2(frand * 13.456, frand * 94.321))) * frand*5001.123);
      }

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  vec2 fbuv = uv;

  vec2 lod2 = vec2(1129.0, 1124.0); // tähän esim 24 numeroks
  uv += (rand(floor(uv*lod2)/lod2)*2.0-1.)*randomi;

  vec4 tex = texture2D(t0, uv);

  // ab luma gen
  float luminance = dot(tex,lumcoeff);
  float clo = step(lum.x,luminance);
  float chi = step(luminance,lum.y);
  float amask = clo * chi;

  gl_FragColor = vec4(tex.rgb, amask);

}