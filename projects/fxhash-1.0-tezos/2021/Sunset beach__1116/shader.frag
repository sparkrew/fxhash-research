#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec2 q = uv - vec2(0.65, 0.65);

    //vec3 col = mix(vec3(0.1, 0.6, 0.3), vec3(1.0, 0.9, 0.4), sqrt(uv.y));
    vec3 col = mix(vec3(0.7, 0.1, 0.75), vec3(1.0, 1.0, 0.1), sqrt(uv.y));

    // palm leafs
    float r = 0.2 + 0.1 * cos(atan(q.y, q.x) * 10.0 + (25.0 + sin(u_time / 10.0)) * sin(q.x) + 0.001);
    col *= smoothstep( r, r + 0.02, length(q) );

    // palm root
    r = 0.015;
    r += 0.001 * sin(100.0 * q.y);
    r += exp(-80.0 * uv.y);
    col *= 1.0 - (1.0 - smoothstep( r, r + 0.002, abs(q.x + 0.25 * sin(2.0 * q.y)) )) * (1.0 - smoothstep(0.0, 0.1, q.y));

    // sun
    vec2 s = uv - vec2(-0.05, 0.975);
    r = 0.15;
    r += 0.01 * sin(120.0 * q.y);
    col *= mix(vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), smoothstep(r, r + 0.25, length(s)));

    // Output
    gl_FragColor = vec4(col, 1.0);
}
