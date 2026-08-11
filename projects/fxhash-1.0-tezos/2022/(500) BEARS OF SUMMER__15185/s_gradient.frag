// https://github.com/aferriss/p5jsShaderExamples
precision mediump float;
varying vec2 vTexCoord;
uniform vec3 color_1;
uniform vec3 color_2;

void main() {
  vec2 coord = vTexCoord;
  vec3 color1 = vec3(color_1.x, color_1.y, color_1.z);
  vec3 color2 = vec3(color_2.x, color_2.y, color_2.z);
  float mask = coord.x;
  vec3 gradient = mix(color1, color2, mask);
  gl_FragColor = vec4(gradient, 1.0);
}