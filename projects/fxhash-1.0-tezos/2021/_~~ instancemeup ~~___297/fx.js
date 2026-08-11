const frag = `
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSamplerFB;
uniform float time;
void main(void)
{
    //float shift = sin(vTextureCoord.x*5.0 + (time * 0.03)) * 0.3;
    gl_FragColor = texture2D(uSamplerFB, vTextureCoord);
}
`

const sortFrag = `
#define THRESHOLD 0.2

varying vec2 vTextureCoord;
uniform vec4 inputPixel;
uniform vec2 resolution;
uniform sampler2D uSampler;
uniform float time;
uniform float frame;

float gscale(vec3 color) 
{
    return (color.r + color.g + color.b) / 3.0;
}

void main (void)
{
    //gl_FragColor = texture2D(uSampler, vTextureCoord + (sin(time*0.04) + 1.0)/2.0 *0.3);
	// uvs
	//vec2 uv = fragCoord.xy / iResolution.xy;
    vec4 fragColor;
    vec2 uv = vTextureCoord.xy; // / inputPixel.xy;	
	//if (iFrame < 10) {
	//	fragColor = texture(iChannel0, uv);
    //    //fragColor = vec4(sin(uv.x*10.0), sin(uv.y*7.0), 1.0, 1.0);
	//	return;
	//}
	
	// the frame number parity, -1 is odd 1 is even
	float fParity = mod(float(frame), 2.) * 2. - 1.;
    
    // we differentiate every 1/2 pixel on the horizontal axis, will be -1 or 1
    //float vp = mod(floor(uv.x * iResolution.x), 2.0) * 2. - 1.;
    float vp = mod(floor(vTextureCoord.x * inputPixel.x), 2.0) * 2. - 1.;
    vec2 dir = vec2(1.0, 0.0);
    //vec2 dir = vec2(floor(sin(frame*0.01) * 1.99), floor(sin(frame*0.013) * 1.99));
    //vec2 dir = vec2(floor(abs(sin(frame*0.01))*2.), floor(abs(cos(frame*0.013))*2.));
    dir*= fParity * vp;
	dir/= inputPixel.xy * 1.0;

	// we sort
	vec4 curr = texture2D(uSampler, uv + sin(uv.x + frame*0.1) * 0.001);
    vec2 multiplier = vec2(1,1);
    float osc = 1.0;//sin(frame*0.02);
    if (vTextureCoord.x < 0.5) {
        if (osc >= 0.0) {
            multiplier.x = 1.001;
        } else {
            multiplier.x = 0.999;
        }
    } else if (vTextureCoord.x > 0.5) {
        if (osc >= 0.0) {
            multiplier.x = 0.999;
        } else {
            multiplier.x = 1.001;
        }
    }; 
     if (vTextureCoord.y < 0.5) {
        if (osc >= 0.0) {
            multiplier.y = 1.001;
        } else {
            multiplier.y = 0.999;
        }
    } else if (vTextureCoord.y > 0.5) {
        if (osc >= 0.0) {
            multiplier.y = 0.999;
        } else {
            multiplier.y = 1.001;
        }
    };
    fragColor = texture2D(uSampler, uv * multiplier); // + (curr - vec4(0.4,0.4,0.4,0.0));
    float fb = 0.05;
    fragColor = (curr - vec4(0.0,0.0,0.0,fb)) + (fragColor + vec4(0.0,0.0,0.0,fb)); //vec4(1.0,0.0,0.0,1.0);
    fragColor = fragColor/ 2.0;
    gl_FragColor = fragColor;
}
`
