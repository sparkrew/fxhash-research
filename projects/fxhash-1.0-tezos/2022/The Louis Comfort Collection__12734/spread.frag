#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float time;
uniform float height;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float brightness(vec4 color){
    return (color.r+color.g+color.b)/3.0;
}

float PI = 3.1415;

void main() {
    vec2 uv = vTexCoord;
    uv.y = 1.0 - uv.y;
    uv.y -= height;
    vec4 col = vec4(0.0,0.0,0.0,0.0);
    
    float spread = abs(uv.x-0.5)/2.0;
    spread = smoothstep(0.0,1.0,spread);
    float yspread = (spread+0.2)/2.0;
    if (uv.y > 0.5-yspread && uv.y<0.5+yspread){
        float ty = map(uv.y,0.5-yspread,0.5+yspread,0.1,1.0);
        float angle = uv.x*PI*0.8 + (1.0-spread)/2.0 - time/15.0 ;
        float radius = ty/2.0;
        vec2 texPos = vec2(cos(angle)*radius+0.5, sin(angle)*radius+0.5);
        col = texture2D(tex0, texPos);
        if (brightness(col) < 0.1) col.a = 0.0;
        col *= 2.0;
        col.a *= map(yspread,0.0,0.15,0.4,0.0);
    }    
    // col = vec4(spread,0.0,0.0,1.0);
    col = vec4(1.0,0.0,0.0,1.0);
    gl_FragColor = col;
}
