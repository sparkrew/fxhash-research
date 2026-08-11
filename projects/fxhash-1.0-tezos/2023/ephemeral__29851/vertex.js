const vertexShader = /* glsl */ `

// precision lowp float;
precision mediump float;
precision highp int;

uniform float u_intensity;
uniform float u_time;
uniform float scale;
uniform float randX;
uniform float randY;
uniform float noiseHeight;

uniform float windowSizeW;
uniform float windowSizeH;
uniform float uvRange;

uniform float isRect;

varying vec2 vUv;
varying vec3 vVertex;
varying float vDisplacement;
varying vec3 vPosition;


float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

// https://www.generativehut.com/post/generative-terrain-nfts-for-fxhash-in-three-js
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

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main() {
    vUv = uv;
    vec3 p = position;
    vec2 mUv = uv;
    vec2 nUv = round(uv * 10.0);
    
    float uvRangeAdd = (uvRange/5.0);
    float uvRange_tmp = u_time * uvRangeAdd;
    if(uvRange_tmp > uvRange)
        uvRange_tmp = uvRange;

    float noiseHeightAdd = noiseHeight/5.0;
    float noiseHeight_tmp = u_time * noiseHeightAdd;
    if(noiseHeight_tmp > noiseHeight)
        noiseHeight_tmp = noiseHeight;

    vec3 floorP = vec3(floor(p.x), floor(p.y), floor(p.z));

    mUv.x += randX;
    mUv.y += randY;
    
    // 四角プラス
    if(p.x < windowSizeW/2. && p.x > -windowSizeW/2. && p.y < windowSizeH/2. && p.y > -windowSizeH/2.) {
        float f;
        float rand = noise(nUv);

        if(isRect>0.5 && rand < isRect*0.25) {
            f = fBm(nUv*uvRange + vec2(nUv.x, nUv.y), 5,2.0, 0.4);
            f = fBm(vec2(sqrt(pow(nUv.x, 2.0) + pow(nUv.y, 2.0)))*2.0*f, 1, 1.0, 2.);
        }else{
            f = fBm(mUv*uvRange + vec2(mUv.x, mUv.y), 5,2.0, 0.4);
            f = fBm(vec2(sqrt(pow(mUv.x, 2.0) + pow(mUv.y, 2.0)))*4.0*f, 1, 1.0, 2.);
        }
        p.z = f * noiseHeight*scale*0.5;
    }

    vPosition = p;
    vVertex = (modelViewMatrix * vec4(p, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

export default vertexShader;
