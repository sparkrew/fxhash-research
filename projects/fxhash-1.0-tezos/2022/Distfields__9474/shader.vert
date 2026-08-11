precision mediump float;

// From https://itp-xstory.github.io/p5js-shaders/#/./docs/how-to-write-a-shader?id=content-of-a-shadervert-file

attribute vec3 aPosition;
varying vec2 vuv;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0); // Copy the position data into a vec4, adding 1.0 as the w parameter

  positionVec4.xy = positionVec4.xy * 2.0 - 1.0; // Scale to make the output fit the canvas. 
  vuv = positionVec4.xy * 0.5 + 0.5;

  gl_Position = positionVec4;
}
