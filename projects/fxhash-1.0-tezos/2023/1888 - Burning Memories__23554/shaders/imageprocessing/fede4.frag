precision mediump float ;

uniform vec2 resolution ;
uniform float time ;
uniform vec2 mouse ;

uniform sampler2D tx ;
uniform sampler2D tx2 ;

uniform sampler2D feedback ;

varying vec2 vTexCoord;

uniform float dprom ;
uniform float freq ;
uniform float seed ;


uniform vec2 tp1 ;
uniform vec2 tp2 ;
uniform vec2 tp3 ;
uniform vec2 tp4 ;
uniform vec2 tp5 ;
uniform float lerpm ;
uniform int touchesCount ;
uniform int mousePressed ;
const int maxtouches = 5;


bool respectaspectradio = true;
bool quadvignette = true;

float rdm(float p){
    p*=1234.56;
    p = fract(p * .1031);
    p *= p + 33.33;
    return fract(2.*p*p);
}
 
float mapr(float _value,float _low2,float _high2) {
	float val = _low2 + (_high2 - _low2) * (_value - 0.) / (1.0 - 0.);
    //float val = 0.1;
	return val;
}
// Some useful functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float ridge2(float h, float offset) {
    h = abs(h);     // create creases
    h = offset - h; // invert so creases are at top
    h = h * h;      // sharpen creases
    return h;
}
float snoise2(vec2 v) {

    // Precompute values for skewed triangular grid
    const vec4 C = vec4(0.211324865405187,
                        // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,
                        // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,
                        // -1.0 + 2.0 * C.x
                        0.024390243902439);
                        // 1.0 / 41.0

    // First corner (x0)
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);

    // Other two corners (x1, x2)
    vec2 i1 = vec2(0.0);
    i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
    vec2 x1 = x0.xy + C.xx - i1;
    vec2 x2 = x0.xy + C.zz;

    // Do some permutations to avoid
    // truncation effects in permutation
    i = mod289(i);
    vec3 p = permute(
            permute( i.y + vec3(0.0, i1.y, 1.0))
                + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(
                        dot(x0,x0),
                        dot(x1,x1),
                        dot(x2,x2)
                        ), 0.0);
    m = m*m ;
    m = m*m ;

    // Gradients:
    //  The ring size 17*17 = 289 is close to a multiple
    //      of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt(a0*a0 + h*h);
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);

    // Compute final noise value at P
    vec3 g = vec3(0.0);
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
    return 130.0 * dot(m, g);
}

#define OCTAVES 8
float ridgedMF2(vec2 p) {
    float lacunarity = 2.0;
    float gain = 0.5;
    float offset = 0.9;

    float sum = 0.0;
    float freq = 1.0, amp = 0.5;
    float prev = 1.0;
    for(int i=0; i < OCTAVES; i++) {
        float n = ridge2(snoise2(p*freq), offset);
        sum += n*amp;
        sum += n*amp*prev;  // scale by previous octave
        prev = n;
        freq *= lacunarity;
        amp *= gain;
    }
    return sum;
}

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}
float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.56222123);
}
float random2 (in vec2 _st,float _time) {
    return fract(sin(dot(floor(_st.xy),
                         vec2(12.9898,78.233)))*
        43000.3+_time);
}
float noise (in vec2 st,float fase) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float fase2 = fase;
    // Four corners in 2D of a tile
    float a = sin(random(i)*fase2);
    float b =  sin(random(i + vec2(1.0, 0.0))*fase2);
    float c =  sin(random(i + vec2(0.0, 1.0))*fase2);
    float d =  sin(random(i + vec2(1.0, 1.0))*fase2);

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float fbm (in vec2 uv,in float _time) {
    // Initial values
    float value = 0.5;
    float amplitude = 0.5;
    float frequency = 0.;
    vec2 shift = vec2(100);
    mat2 rot2 = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    // Loop of octaves
    for (int i = 0; i < 16; i++) {
        value += amplitude * noise(uv,_time);
        uv = rot2 * uv * 2.0 + shift;
        amplitude *= .5;
    }
    return value;
}
vec3 touchesDraw2(vec2 uv , float dif, float siz){
	vec3 dib = vec3(0.0);
	float fx = resolution.x/resolution.y;


	vec2 p_tp1 = vec2(tp1.x*fx,1.-tp1.y) -uv;
	float r_tp1 = length(p_tp1);
	float e_tp1 = smoothstep(0.1,0.0,r_tp1);

	vec2 p_tp2 = vec2(tp2.x*fx,1.-tp2.y) -uv;
	float r_tp2 = length(p_tp2);
	float e_tp2 = smoothstep(0.1,0.0,r_tp2);

	vec2 p_tp3 = vec2(tp3.x*fx,1.-tp3.y) -uv;
	float r_tp3 = length(p_tp3);
	float e_tp3 = smoothstep(0.1,0.0,r_tp3);

	vec2 p_tp4 = vec2(tp4.x*fx,1.-tp4.y) -uv;
	float r_tp4 = length(p_tp4);
	float e_tp4 = smoothstep(0.1,0.0,r_tp4);

	vec2 p_tp5 = vec2(tp5.x*fx,1.-tp5.y) -uv;
	float r_tp5 = length(p_tp5);
	float e_tp5 = smoothstep(0.1,0.0,r_tp5);


	if(touchesCount > 0){
		dib+= e_tp1;
	}
	if(touchesCount > 1){
		dib+= e_tp2;
	}
	if(touchesCount > 2){
		dib+= e_tp3;
	}
	if(touchesCount > 3){
		dib+= e_tp4;
	}
	if(touchesCount > 4){
		dib+= e_tp5;
	}
	/*for(int i=0; i<maxtouches; i++){
		if(i == touchesCount){
			break;
		}
		vec2 tp = vec2(touchesPos[i].x*fx,1.-touchesPos[i].y);
		vec2 p2 = tp-uv;
		float r2 = length(p2);
		
		float e2 = 1.-smoothstep(siz,siz+dif,r2);
		
		dib+=e2;		
	}*/
	return dib;
}

vec3 mouseDraw(vec2 uv , float dif, float siz){
	 float fx = resolution.x/resolution.y;
	vec3 dib = vec3(0.0);
	vec2 mp = vec2(mouse.x*fx,1.-mouse.y) ;
	vec2 p = mp-uv;
	float r = length(p);
	float e = 1.-smoothstep(siz,siz+dif,r);
	
	dib+=vec3(e);
	
	return dib;
	
}
void main(){
	
	vec2 uv = gl_FragCoord.xy / resolution;
		 uv = vTexCoord ;
	
	vec4 t1 =  texture2D(tx, vec2(uv.x,1.0-uv.y));
    
    vec2 uvm = vTexCoord ;
    float fx = resolution.x/resolution.y;

    uvm.x*=fx;
    vec3 md = vec3(0.0);
   // if(mousePressed == 1){

    	float f4 = fbm(vec2(uv.x*200.,uv.y*200.),time);
	
    
    md = fract(mouseDraw(uvm,0.8,0.0)*5.+time)*mouseDraw(uvm,0.8,0.0)*lerpm*2.;
    //}
     if(rdm(seed+514852.) > .5){
        md*=f4;
     }


	vec2 uv2 = uv;
	vec2 uv3 = uv;
	
	float prom1 = (t1.r+t1.g+t1.b)/3.;
	float limit = sin(length(t1)*10.+time)*.5+.5;
	
	float f1 = fbm(vec2(uv.x*25.,uv.y*25.),time);
	vec3 nafta = sin(t1.rgb*10.+f1+time)*.5+.5;
	t1.rgb = mix(t1.rgb,nafta,0.5);
    	
	vec3 fin =  t1.rgb;	
    //fin = t1.rgb;



    if(rdm(seed+64213.) > .85){
        fin = sin(t1.rgb*5.+time)*.5+.5;	

    }
    if(rdm(seed+514852.) > .85){
        fin = sin(t1.rgb*50.+time)*.5+.5;
    }

	vec2 puv = vec2(uv.x,1.0-uv.y);
	
	puv-=vec2(0.5);

    float scr = mapr(rdm(seed*10.0+56832.),0.97,1.02);
	puv*=scale(vec2(scr-md.r*50.));
    puv+=vec2(0.5);
	
	vec4 p1 =  texture2D(feedback, puv);
	
    if(fin.r > limit && fin.g > limit && fin.b > limit ){	
		    fin = p1.rgb;
	}
	
	
	vec4 t3 =  texture2D(tx, vec2(uv.x,1.0-uv.y));
	
	if(rdm(seed+5124.) > .78){
		fin = mix(fin,t3.rgb,mapr(rdm(seed+5152.),0.3,1.8));
	}

    float limit3 = rdm(seed+8745952.);
    if(rdm(seed+5421.) > .56){
        if(fin.r > limit3 && fin.g > limit3 && fin.b > limit3 ){	
            //float f2 = fbm(vec2(uv.x*10.+prom1*10.,uv.y*10.+prom1*10.),time+rdm(seed+222.));
             float f2 = fbm(vec2(uv.x*10.+prom1*10.-md.r*10.,uv.y*10.+prom1*10.-md.r*10.),time+rdm(seed+222.));
           
			fin.rgb*= vec3(f2)*(vec3(1.0)-t3.rgb);
        }
    }
	if(rdm(seed+15042.) > .75){
		fin.rgb = mix(fin.rgb,t3.rgb,.5);	
	}



    fin*=1.-md.r;
	gl_FragColor = vec4(fin,1.0);
    
}












