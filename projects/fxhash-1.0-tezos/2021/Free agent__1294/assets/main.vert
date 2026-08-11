precision highp float; 
varying vec2 vPos;

attribute vec3 aPosition;

void main() {
   gl_Position = vec4(aPosition,1.0);
   vPos = gl_Position.xy;
}

