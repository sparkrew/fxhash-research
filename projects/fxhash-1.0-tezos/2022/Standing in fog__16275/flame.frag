#ifdef GL_ES

precision mediump float;

#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;  
uniform float u_r;
uniform float u_g;
uniform float u_b;

const mat2 m2 = mat2(.8,.6,-.6,.8);

float noise(in vec2 p){

    float res=0.;
    float f=1.;
	for( int i=0; i< 2; i++ ) 
	{		
        p=m2*p*f+.6;     
        f*=1.2;
        res+=sin(p.x+sin(2.*p.y));
	}        	
	return abs(res/4.);
}

float fbm(in vec2 p){
	
    float res=0.;
    float f=1.;
	for( int i=0; i< 7; i++ ) 
	{
        res+=noise(f*p)/f;
        f*=2.;
	}        	
	return res;
}


void main() {


	vec2 p = gl_FragCoord.xy / u_resolution.xx;
    float t = u_time/2000.0;
	float q = fbm(p - fbm(p + fbm(p + t * u_r)));
	vec2 r = vec2(fbm(q - p.yx + t * u_r ), fbm(p + q - fbm(p + t * u_g)));
    float s = fbm(tan(p) - fbm(sin(p) - r));
	vec3 c = clamp(vec3(u_r+s*.7+r.x-.7*r.y, r.x-r.y, 0.)*(u_r+u_b+2.) + u_g,0.,1.);
	gl_FragColor = vec4(c * cos(1.57*u_g*u_b * gl_FragCoord.y / u_resolution.y), 1.0);
  
  
}
