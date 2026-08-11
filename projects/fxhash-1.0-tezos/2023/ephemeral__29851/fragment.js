const fragmentShader = /* glsl */ `
// precision lowp float;
precision mediump float;

varying vec2 vUv;
varying vec3 vVertex;
varying vec3 vPosition;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform float scale;
uniform float noiseHeight;

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float hash(uvec2 x) {
    uvec2 q = 1103515245U * ((x>>1U)^(x.yx));
    uint n = 1103515245U * ((q.x)^(q.y>>3U));
    return float(n) * (1.0 / float(0xffffffffU));
}

float noise( vec2 p ){
    uvec2 ip = uvec2( floor( p ) );
    vec2 u = fract( p );
    u = u * u * ( 3.0 - 2.0 * u );
	
    float res = mix(
		mix( hash( ip ), hash( ip + uvec2( 1, 0 ) ), u.x ),
		mix( hash( ip + uvec2( 0, 1 ) ), hash( ip + uvec2( 1,1 ) ), u.x ), u.y );
    return res * res;
}

float fBm( vec2 p, int octaves, float lacunarity, float gain ) {
    float freq = 1.0;
    float amp = 0.5;
    float sum = 0.;
    for( int i = 0; i < octaves; i++ ) {
        sum += noise( p * freq ) * amp;
        freq *= lacunarity;
        amp *= gain;
    }
    return sum;
}


void main() {
    float fill = vPosition.z / (noiseHeight/2.0*scale/5.5); //横
    // float fill = vPosition.z / (noiseHeight/2.0*scale/5.0); //横

    vec3 c0;
    vec3 c12 = mix(color1, color2, fill);
    vec3 c13 = mix(color1, color3, fill);
    vec3 c14 = mix(color1, color4, fill);

    // if(fBm(vPosition.zz, 10, 0.001, 0.1) < 0.01){
    // if(false){
    if(noise((vPosition.zz)) > 0.5){
        if(rand(vPosition.xy) > 0.85){
            c12 = color1;
            c13 = color1;
            c14 = color1;
        }
    }
    c0 = mix(c12, c13, noise(vUv*10.0)*.4);
    c0 = mix(c0, c14, noise(vUv*5.0)*.4);

    gl_FragColor = vec4(c0, 1.0);
}`;

export default fragmentShader;
