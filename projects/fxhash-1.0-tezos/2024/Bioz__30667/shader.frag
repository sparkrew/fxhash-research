//Udit Mahajan - 2024 - uditmahajan.com

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
uniform float fxrand16;
uniform float fxrand17;
uniform float fxrand18;
uniform float fxrand19;
uniform float fxrand20;
uniform float fxrand21;
uniform float fxrand22;
uniform float fxrand23;
uniform float fxrand24;
uniform float fxrand25;
uniform float fxrand26;
uniform float fxrand27;
uniform float fxrand28;
uniform float fxrand29;
uniform float fxrand30;
uniform float fxrand31;
uniform float fxrand32;

uniform float et;
uniform float ti;
uniform float speed;

float r(float x) {
    return fract(sin(x * 1346.72) * 4321.);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

// Simplex 2D noise by [Stefan Gustavson, Ian McEwan]
// https://github.com/stegu/webgl-noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Arc, segment, wave and cubic bezier SDF from Inigo Quilez
// https://iquilezles.org/articles/distfunctions2d/
float sdArc( in vec2 p, in vec2 sc, in float ra, float rb )
{
    p.x = abs(p.x);
    return (sc.y*p.x > sc.x*p.y) ? length(p - ra*sc) - rb : abs(length(p) - ra) - rb;
}

float randomSign(float r) {
    return (r < 0.5) ? -1.0 : 1.0;
}

// Color palette function from Inigo Quilez
// https://iquilezles.org/articles/palettes/
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
    
    vec2 st = vTexCoord;

    st = (vTexCoord * u_resolution.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    st *= (1.5+(fxrand1*1.5));

    vec3 color = vec3(0.0);
    color = vec3(.5*fxrand2,.5*fxrand3,.5*fxrand4);
    vec3 arcColor = vec3(0.0);

    float time = (0.075+(0.025*fxrand5))*et*ti;

    st *= speed*rotate2d(TWO_PI+(randomSign(fxrand6)*time*fxrand7*2.0));
    
    float ripple = cos(randomSign(fxrand8) * time * 10. - length(st) * (1.0+(5.0*fxrand9))) * (0.05+0.05*fxrand10);
    st += st*ripple;
    
    float tunnelRadius = length(st);
    float tunnelAngle = atan(st.y, st.x);
    float tunnelDistortion = sin(tunnelRadius * 1.0) * fxrand11;
    if(fxrand20<0.5){
        st = vec2(cos(tunnelAngle + tunnelDistortion), sin(tunnelAngle + tunnelDistortion)) * tunnelRadius;
    } else {
        st = vec2(cos(tunnelAngle - tunnelDistortion), sin(tunnelAngle - tunnelDistortion)) * tunnelRadius;
    }
    
    st.x += sin((time * 15.0 * fxrand13) + (st.y * 10.0 * fxrand14)) * 0.1;
    st.y += cos((time * 15.0 * fxrand15) + (st.x * 10.0 * fxrand16)) * 0.1;
    
    float liquidDistortion = snoise(vec2((st.xy * (0.5+(1.0*fxrand17))) + (time*1.5*fxrand18)));
    st += liquidDistortion * (0.5 + (1.0*fxrand19));

    float d = distance(st, vec2(0.0));
    color += 0.02 / vec3(d);
    
    float tb = PI*(.5+.5*cos(TWO_PI*0.2));
    float rb = (.5+.5*cos(TWO_PI*0.5));
    vec2 sc = vec2(sin(tb),cos(tb));
    float d2 = sdArc(st, sc, .75, rb);

    for (float i = 0.0; i < 1.0; i+=(1./50.)) {

        arcColor = palette(d2+time, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), 0.25*vec3(fxrand21,fxrand22,fxrand23));
        
        st *= (rotate2d(TWO_PI*r(i+7.)+(randomSign(fxrand24)*time*(0.01+(fxrand25*0.25)))));
        
        tb = fxrand26*PI*(.5+.5*cos(TWO_PI*(r(i+3.)*.4)));
        sc = vec2(sin(tb),cos(tb));
        d2 = sdArc(st, sc, (.25+(0.5*fxrand27))*r(i+1.), rb);
        color += .00001/vec3(d2);
        
        d = distance(st, vec2(r(i-5.)));
        color += (.01/vec3(d));

        if(fxrand29<0.5){
            d = distance(fract(st*2.), vec2(.5));    
            color += (.0005/vec3(d));    
        } 

        color -= ((0.015 + (0.015*fxrand28)) / vec3(d2)) * arcColor;

    }

    if(fxrand30<.2){
        color = 0.1/color;
    }

    gl_FragColor = vec4(color, 1.0);

}