// effet de trame pour overlay final
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265

varying vec2 vTexCoord;
uniform sampler2D texture;
uniform vec2 u_resolution;
uniform float level;
uniform float pixelDensity;
uniform float seed;

//see
//https://www.shadertoy.com/view/4djSRW
float random(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

mat2 rotate(float angle){
    return mat2( cos(angle), -sin(angle),
               	sin(angle),cos(angle));
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float sdSegment( in vec2 p, in vec2 a, in vec2 b)
{
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1. );
    return length( pa - ba*h );
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st *= 250./pixelDensity; //250
    st += noise(st*0.08);
    st +=vec2(0.,0.2*noise(floor(st)));
    
    if (random(floor(st))>0.5)
        st = rotate(PI/2.)*st;
    
    vec2 a1,b1,a2,b2;
      
    a1 = vec2(0.5,0.33);
    b1 = vec2(0.5,0.67);

    vec3 color;
	float dp =  0.05*noise(st*15.); 
    float d = sdSegment(fract(st),a1,b1)-0.25;
    d+=dp;
    
    float dp2 = 0.05*noise(st*33.);
    float d2 =  sdSegment(fract(st-vec2(-0.2,0.)),a1+vec2(0.03,0.),b1+vec2(0.03,0.)) - 0.25;
    d2+=dp2;
    
    float df = max(d,-d2);

	color -= vec3(1.0-smoothstep(.0,0.015,df))*level;  
    color += vec3(1.0-smoothstep(.0,0.015,d))*level/2.;  

    vec2 uv = vTexCoord;
    uv.y = 1.0 - uv.y;
    vec3 col = texture2D(texture, uv ).xyz;

    col += color; 
    gl_FragColor = vec4(col,1.);
}
