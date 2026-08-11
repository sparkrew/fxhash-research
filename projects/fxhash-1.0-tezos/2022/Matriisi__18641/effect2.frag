precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D tex0;

uniform float amt;
uniform float amt2;
uniform float sel;

void main() {

  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  //easy random funkkari
  float kikkare = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  float kakkare = 1.0;
  
  //bufferi p5js sisaan
  vec4 tex = texture2D(tex0, uv);
  
  vec4 test = vec4(kakkare);
  
  //uus textuuri mihin lisaa noisea
  

   vec4 col = tex.rgba;
   
  
  gl_FragColor = vec4(col.rgb,(col.a-((1.0-col.a)*(kikkare+amt)))*amt2  );
}