const THvert = `#version 300 es
	in vec3 aPosition;
	in vec2 aTexCoord;
	out vec2 vTexCoord;
	void main() {
		vTexCoord = aTexCoord;
		vec4 positionVec4 = vec4(aPosition, 1.0);
		positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
		gl_Position = positionVec4;
	}
`;
const THfrag = `#version 300 es

precision highp float;

in vec2 vTexCoord;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D originalImg;

uniform float mixFinish;
uniform int palLength;
uniform int thLength;
uniform vec4 myPal[6];
uniform float th[5];
vec2 u;

#define hash(p) (2. * fract(sin((p)*mat2(127.1, 311.7, 269.5, 183.3)) * 43758.5453123) - 1.)
#define func(C) perlin(.5*(C))
#define grad(x, y) dot(hash(i + vec2(x, y)), f - vec2(x, y))

float noise(vec2 p){
    vec2 i = floor(p);
		vec2 f = fract(p);
		// u = f*f*(3. - 2.*f);
		u = f*f*f*( 10. +f*(6.*f-15.));
    return mix(mix(grad(0., 0.), grad(1., 0.), u.x),
               mix(grad(0., 1.), grad(1., 1.), u.x), u.y);
}

float perlin(vec2 U) {
  float v = 0., s = .005;
  mat2 m = mat2(1.8, 1.6, -1.6, 1.8);
	for( int i=0; i<2; i++ )
			s /= 2.;
			U *= m;
      v += s * noise( U ); 
  return v;
}

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

float cellular(vec2 p) {
    vec2 i_st = floor(p);
    vec2 f_st = fract(p);
    float m_dist = 10.;
    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = random2(i_st + neighbor);
            point = (1.-0.999) * 10. + 0.5*sin(6.2831*point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            if( dist < m_dist ) {
                m_dist = dist;
            }
        }
    }
    return m_dist;
}

out vec4 finalColor;
void main() {
	  vec2 vFlipCoord = vTexCoord;
	  vFlipCoord.y = 1.0 - vFlipCoord.y;

    vec4 thresC = vec4(0.);
    vec4 origBrightness = texture(originalImg, vFlipCoord);
    float bri = origBrightness.r;

    vec4 c1  = myPal[0];
    vec4 c2  = myPal[1];
    float thr = 0.0;
    int myTh = 0;
    float minn = (th[0] + th[1])/2.0;
    float maxx = (th[1] + th[2])/2.0;
    if(bri<minn){
    	thr = th[0];
    	c1 = myPal[0]; c2 = myPal[1];
    } 
    else {
      for( int i=1; i<4; i++ ){
      	minn = (th[i-1] + th[i])/2.0;
      	maxx = (th[i] + th[i+1])/2.0;
      	if(bri>=minn && bri<maxx){
      		thr = th[i];
      		c1 = myPal[i]; c2 = myPal[i+1];
          myTh = i;
      	}
      }
    } 
    if(bri>=maxx){
    	thr = th[4];
    	c1 = myPal[4]; c2 = myPal[5];
      myTh = 4;
    }

    float aa = fwidth(bri);
    float mixAmount = smoothstep(thr - aa, thr + aa, bri);
    thresC = mix(c1, c2, mixAmount);

  vec2 R = u_resolution.xy,
  U = gl_FragCoord.xy / R.y;
     
vec2 C = vec2(0.0);
C = 0.65 * U - vec2(420.*(1.+bri*thr*0.15), 30.5);
if(bri<th[1] && bri>th[0]){C = 7. * (U - vec2(42.*(1.-bri), 3.));}
else if(bri<=th[0]){C *= u_time;}
if(mixFinish == 0.2 && bri>th[0]) {
  C = 0.25 * U - 11.*vec2(0.1*bri+(.2*thr),bri*.4);
}

    float l, dl, f = func(C), df;
    l = 99.5;
dl = fract(log2(1./22./fwidth(f)));
vec4 cNoise = vec4(0.);
cNoise = vec4(.05+.075*  mix( sin(602.*l*f) , 0.5*sin(10.*l*f), dl ) );
if(mixFinish == 0.2 && bri>th[0]) {
  cNoise = vec4(.05+.0375*  mix( sin(92.*l*f) , 0.5*sin(200.*l*f), dl ) );
}
if(mixFinish == 0.3 && bri>th[0]) {
  cNoise = vec4(.05+.095*  mix( sin(602.*l*f) , 0.5*sin(10.*l*f), dl ) );
}

     vec2 A = vec2(0.0);
    A = 2. * U - vec2(300.*u_time, 0.1);

    vec4 aNoise = vec4(0.);

    float lq, dlq, fq = func(A), dfq;
    lq = exp2(floor(log2(1./22./fwidth(fq))));
    lq = (lq * 13.);

    dlq = fract(log2(1./22./fwidth(fq)));
    aNoise = vec4(.05+.075*  mix( sin(950.*lq*fq) , sin(950.*lq*fq), dlq ) );

    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y; 
    
    float f_bri = bri*5.2;
    float f_thr = (1.5-thr)*.75;
    vec2   f_st = st*2.5*thr;
    vec2 stB;
    stB = (.33*f_bri)+(.33*f_thr)+(.33*f_st);
    if(bri<=th[0]){stB = st/3.;}

    st *= 350.0;
    float v = (cellular(st) - cellular(st - vec2(-0.1, 1.197))) * 1.630;
    vec4 cell = vec4(vec3(v), 0.1);
    
    float vB = (cellular(stB) - cellular(stB - vec2(bri, 0.197))) * .630;
    if(bri<=th[0]){
      float k = 500.;
      // vB = (cellular(stB) - cellular(stB - 2.*vec2(.212*u_time, .632*u_time))) * .630;
      vB = (cellular(stB) - cellular(stB - vec2(bri+u_time, bri+u_time))) * .2630 *0.;
    }
 
    vec4 cellB = vec4(vec3(vB), 0.1);
    if(bri<=th[0]){
      // cellB.w = .18;
    }
    
vec4 mixNoise = vec4(1.0);

if(bri<=th[0]){
  mixNoise = mix(cNoise,aNoise,.85);
  mixNoise = mix(mixNoise,cellB,.6);
  mixNoise += thresC;
} else { 
  if(mixFinish == 0.1) {
    mixNoise = cNoise;
  } else {
    mixNoise = mix(cNoise,cell,.30);
    mixNoise = mix(mixNoise,cellB,.92);
    if(mixFinish == 0.2){
      mixNoise = mix(cNoise,aNoise,.6);
      mixNoise = mix(mixNoise,cell,.3);
    }
  }
    mixNoise += thresC;
}
  	
	mixNoise = sqrt(mixNoise);
	
	finalColor = mixNoise;	
}
`;