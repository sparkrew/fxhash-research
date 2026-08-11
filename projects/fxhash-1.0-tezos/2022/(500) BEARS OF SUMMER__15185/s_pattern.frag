// https://github.com/aferriss/p5jsShaderExamples
precision mediump float;
varying vec2 vTexCoord;
uniform vec2 resolution;
uniform vec2 val_1;
uniform vec2 val_2;
uniform int p_color;

void main() {
    vec2 coord = vTexCoord;
    coord.x *= resolution.x / resolution.y;
    float tiles = val_1.x;
    float col = floor(coord.x * tiles) + floor(coord.y * tiles);
    col = mod(col, val_2.x);
    if (p_color == 4) {
        gl_FragColor = vec4(col, col, col, 1.0);
    }
    if (p_color == 1) {
        gl_FragColor = vec4(p_color, col, col, 1.0);
    }
    else if (p_color == 2) {
        gl_FragColor = vec4(col, p_color, col, 1.0);
    }
    else if (p_color == 3) {
        gl_FragColor = vec4(col, col, p_color, 1.0);
    }
}
