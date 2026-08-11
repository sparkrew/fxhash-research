precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float pix;

void main() {
  
  vec2 st = gl_FragCoord.xy/800.0;

  float y = st.y;

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;
  
  vec4 tex = texture2D(tex0, uv);

  vec4 lines = vec4(tex.rgb*vec3(abs(sin(y*30.0*pix))+1.8)/3.0,tex.a);

  gl_FragColor = vec4(lines);
}