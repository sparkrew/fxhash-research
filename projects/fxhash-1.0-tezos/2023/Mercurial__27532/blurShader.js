const vert = `
    precision highp float;
    attribute vec3 aPosition;
	attribute vec2 aTexCoord;
	varying vec2 vTexCoord;
	void main() {
		vTexCoord = aTexCoord;
		vec4 positionVec4 = vec4(aPosition, 1.0);
		positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
		gl_Position = positionVec4;
	}
`;
const frag = `
	// #ifdef GL_ES
	precision highp float;
	// #endif

varying vec2 vTexCoord;
uniform sampler2D originalImg;
uniform vec2 u_resolution;
uniform vec2 dir;

//BEAUTIFUL WITH CORNERS
// const float rad = 24.*1.8;
// // const float rad = 18.*1.8;
// const float LOD = 1.*1.8;
// const float dev = 24.*1.8;

const float rad = 48.*1.8;
// const float rad = 18.*1.8;
float LOD = 1.8/u_resolution.x;
const float dev = 18.*1.8;

const float m = 0.398942280401/dev;

float gau(float x) {return m*exp(-x*x*0.5/(dev*dev));}

void main() {    
    vec4 sum = vec4(0.);
    for(float i=-rad;i<=rad;i++) sum += gau(i)*texture2D(originalImg,(vTexCoord+vec2(i*LOD,i*LOD)*dir));
    
    gl_FragColor = vec4(sum.rgb/sum.a,1.);
    // gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
`;