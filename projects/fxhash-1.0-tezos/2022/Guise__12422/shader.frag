//Udit Mahajan - 2022 - uditmahajan.com

#ifdef GL_ES
precision highp float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;

uniform float fxrand1;
uniform float fxrand2;
uniform float fxrand3;
uniform float fxrand4;
uniform float fxrand5;
uniform float fxrand6;
uniform float fxrand7;
uniform float fxrand8;
uniform float fxrand9;
uniform float fxrand10;
uniform float fxrand11;
uniform float fxrand12;
uniform float fxrand13;
uniform float fxrand14;
uniform float fxrand15;


// Arc by Inigo Quilez - iq/2019
// https://www.shadertoy.com/view/wl23RK
float arc( in vec2 p, in vec2 sc, in float ra, float rb )
{
    p.x = abs(p.x);
    return ((sc.y*p.x>sc.x*p.y) ? length(p-sc*ra) : 
                                  abs(length(p)-ra)) - rb;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

void main() {
    vec2 st = vTexCoord;

    st = .5 + (vTexCoord * u_resolution.xy - .5* u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    st*= 3. + (4.*fxrand1);
    st -= 1.5 + (2.*fxrand1); 
    
    float tb = PI*(0.5+0.5*cos(PI));
    vec2  sc = vec2(sin(tb),cos(tb));

    float d, d1, d2, d3, d4, dr;
    
    dr = distance(st,vec2(.5));
    
    st = rotate2d(dr*TWO_PI*(fxrand2*.2)+(u_time*.05*(fxrand11*2.-1.)))*st;
    
    d1 = arc(st,sc,((u_time*.025)), .2+fxrand12);
    d2 = arc(st,sc,((u_time*.025)), .2+fxrand13);
    
    d = fract((min(d1,d2)*(10.*fxrand3)-(u_time*.25)))*(sin(st.x*(7.*fxrand4))+cos(st.y*(7.*fxrand5)));  
    d *= sin(mod(d,2.5)*TWO_PI)/cos(mod(d,2.5)*TWO_PI);
    
    st = rotate2d(d*TWO_PI*1.5-(u_time*.1))*st;
    
    d3 = arc(st,sc,((0.)), .2+fxrand14);
    d4 = arc(st,sc,((0.)), .2+fxrand15);
    
    d += fract((min(d3,d4)*50.))*(sin(st.x*(7.*fxrand6))+cos(st.y*(7.*fxrand7)));
    d -= min(d3,d4);
    
    vec3 col = sign(d)*vec3(fxrand8,fxrand9,fxrand10);
    col += vec3(smoothstep(0.75,1.0,abs(d)));

    gl_FragColor = vec4(col,1.0);
}