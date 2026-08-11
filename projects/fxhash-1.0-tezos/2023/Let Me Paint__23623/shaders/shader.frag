#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_res;
uniform sampler2D u_mainLayer;
uniform sampler2D u_lineLayer;
uniform float u_seed;

uniform bool u_isDrawn;
uniform bool u_grain;

uniform float u_amplitudeMult;
uniform float u_stMult;

uniform float u_uMult;
uniform float u_vMult;

// UTILS
float fl(float x) {
    float n = 10000.;
    return floor(x * n) / n;
}

vec2 random2(vec2 st){
    st = vec2(dot(st, vec2(1.21, 3.17)),
    dot(st, vec2(2.65, 1.83)));
    return -1.0 + 2.0 * fract(sin(st) * u_seed);
}

// Gradient Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/XdXGW8
// The MIT License
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(dot(random2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
    dot(random2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(random2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
    dot(random2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

// amplitude base = 0.25
float fbm(in vec2 st, float amplitude) {
    const int OCTAVES = 6;

    float value = 0.0;
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= u_stMult;
        amplitude *= u_amplitudeMult;
    }
    return value;
}
// ********************************

void main() {
    vec2 uv = vTexCoord;
    uv.y = 1.0 - uv.y;

    float xMult = u_res.x/u_res.y;

    float shiftAmt = fbm(uv * 7.4, 0.2) * 0.05;
    shiftAmt += fbm(uv * 70., 0.35) * 0.025;
    shiftAmt += fbm(uv * 100., 0.15) * 0.01;

    vec2 u = vec2(shiftAmt * u_uMult, 0.);
    vec2 v = vec2(shiftAmt * 0., shiftAmt * u_vMult);

    vec4 tex = texture2D(u_lineLayer, uv - v * noise(uv * 30.) - u * noise(uv * 35. + vec2(2., 3.)));

    vec4 lineColor = tex.rgba;

    lineColor.rgb -= fbm(uv * 1.3, 0.2)*.12;
    lineColor.rgb -= fbm(uv * 100.3, 0.1)*.1;

    vec4 mainColor = texture2D(u_mainLayer, uv).rgba;

    vec4 color = vec4((lineColor.a) * lineColor.rgb + (mainColor.a - lineColor.a) * mainColor.rgb, 1.);

    if (u_isDrawn) {
        color.rgb += fbm(uv * 3., 0.15)*.1;

        if (u_grain) {
            color.rgb -= fbm(random2(uv * 200.), 0.35)*.12;
            color.rgb -= random2(uv * 100.).y*.015;
            color.rgb += random2(uv * 160.).x*.015;
        }
    }

    gl_FragColor = vec4(color);
}
