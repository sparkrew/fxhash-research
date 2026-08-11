precision mediump float;

varying vec2 pos;
uniform sampler2D tex0; //colorCanvas
uniform sampler2D tex1; //composition/texture canvas
//uniform vec2 resolution;

vec3 gammaCorrection (vec3 colour, float gamma) {
  return pow(colour, vec3(1. / gamma));
}

void main(){
  
  vec2 uv = vec2(pos.x,pos.y); //pos
  vec4 tx = texture2D(tex0, uv); //color can
  vec4 tx1 = texture2D(tex1, uv); //texture can

  vec2 lum = vec2(pos.x, tx1.y);
  vec4 colVal = texture2D(tex0, lum); //gets colour from gradient using texture pos
  
  vec4 color = colVal.rgba; //vec4 of colour
  vec3 col = colVal.rgb; //color minus alpha
  float alp = colVal.a;  //just the alpha
  
  vec4 newCol = vec4(gammaCorrection(col, 2.2), 1.);//gamma corrected then adding the original alpha back in
  
  gl_FragColor = newCol;
  
  
  
}