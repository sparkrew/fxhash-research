precision highp float;

attribute vec2 aPosition;

varying vec4 v_position;

void main() {
    vec2 position = aPosition * 2.0 - vec2(1.0, 1.0);
    gl_Position = vec4(position, 0, 1);
    v_position = gl_Position;
}