precision highp float; 
#define PI 3.141592

varying vec2 vPos;

uniform vec2 iResolution;

uniform sampler2D bb;
uniform sampler2D txt;

uniform vec3 color_1;
uniform vec3 color_2;
uniform float beat;

uniform float offset;

void main() {
    vec2 uv = vPos * 0.5 + 0.5;
    uv = vec2(uv.x, 1.0 - uv.y);
    vec2 uv_c = uv * 2.0 - 1.0;
    
    vec3 c = vec3(0.0, 0.0, 0.0);
    
    vec2 uv_txt = vec2(uv.x, uv.y);
    vec3 txt_col = texture2D(txt, uv_txt).rgb;
    
    vec2 uv_bb = uv;
    vec2 uv_bb_off = - length(uv) * sign(uv_c) * (1.0 + 0.5 * 0.5 * sin(beat / 4.0 * 2.0 * PI))  *offset / iResolution.xy;
    uv_bb_off.y += 0.25 * offset / iResolution.y;
    uv_bb_off.y += cos((uv_bb.x * 5.0 - 4.0 * sin(beat / 64.0 * 2.0 * PI) - beat / 8.0) * 2.0 * PI) / iResolution.y;

	uv_bb += uv_bb_off;
    
    vec3 glow_color = mix(color_1, color_2, 0.75 + 0.25 *abs(fract((uv.x -uv.y) * 1.0 + beat / 32.0) * 2.0 - 1.0));
    vec3 bb_col = texture2D(bb, uv_bb).rgb;
    bb_col = (1.0 - fract(bb_col - color_2));
    //bb_col = fract(bb_col + abs(fract(beat / 16.0) * 2.0 - 1.0));
    
    
    c = bb_col;//mix(bb_col, txt_col, max(txt_col.r, max(txt_col.g, txt_col.b)));
    gl_FragColor = vec4(c, 1.0);
}
