#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_noise;
uniform float u_pallet;
uniform float u_x;
uniform float u_y;
uniform float u_thickness;
uniform float u_colorMode;
uniform float u_cnt;
uniform float u_wwg;
uniform float u_r;
uniform float u_g;
uniform float u_b;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

vec2 st;

vec2 mirrorTile(vec2 _st, float _zoom){
    _st *= 150. * gl_FragCoord.x/st.y + _zoom/6.0  ;
    if (fract(_st.y * 0.5) >= 0.5){
        _st.x = _st.x-0.5;
        _st.y = 1. - _st.y;
        _st.y += -1. - _st.y;
        _st.y += -_st.y;
    }
    return fract(_st);
}

float fillY(vec2 _st, float _pct,float _antia){
  return  smoothstep( _pct-_antia, _pct, _st.y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}
vec2 tile(vec2 _st, float _zoom){
    _st *= _zoom;
    return fract(_st);
}
vec2 rotate2D(vec2 _st, float _angle){
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}
float circle(in vec2 _st, in float _radius, vec2 pos){
    _st = _st + pos;
    float _radius2;
    float c;
    vec2 dist = _st - vec2(0.5);
    for(float i=0.; i<=10.; i+=.3){
      _radius2 = i - .15;
	  c += smoothstep(i-(i*0.01),
                         i+(i*0.01),
                         dot(dist,dist)*4.0) -
          smoothstep(_radius2-(_radius2*0.01),
                         _radius2+(_radius2*0.01),
                         dot(dist,dist)*4.0);
    }
  return c;
}

vec2 arrow1(vec2 _st){
  // _st.y = smoothstep(0.5, 1.0, abs(st.y + st.x)) - smoothstep(0.0, .5, abs(st.y - st.x));
  // _st.x = smoothstep(0.5, 1.0, abs(st.y - st.x));
  _st = _st*2. - 1.;
  return _st;
}

void main() {
    vec2 st0;
    st = gl_FragCoord.xy / u_resolution.xy*u_thickness;
    st0 = st;
    if (mod(u_cnt, 2.) == 0.)
      st.x = 20000.*tan(st.x) - u_time/(u_cnt*500.)*abs(sin(u_cnt));
    else
      st.x =  100000.*atan(st.x) + u_time/(u_cnt*500.)*abs(tan(u_cnt));
    vec3 color = vec3(0.0);
  
    //st = rotate2D(st, PI/2.);
    if (mod(u_cnt, 2.) == 0.)
      st = arrow1(st * vec2(1., 1.));
      // st = mirrorTile(st, .5);
    else{
      st = arrow1(st * vec2(1., 1.));
      // st = mirrorTile(st * vec2(1., 10.), -.5);
    }

  
    // float x = (st.x) * 50.;
    // float a = floor(1.+sin(x*PI));
    // float b = floor(1.+sin((x+1.)*PI));
    // float f = fract(x);
  
    float ut =  u_time/200.;
    float _cnt = u_cnt + 2.;

    color = vec3(st, 1.); //vec3( fillY(st,mix(a,b,f),-0.41) ) +
    color *= vec3(sin(st.x + st.y + ut),
         sin(st.x + st.y - ut),
         cos(st.x + st.y + ut)
        );
    //color = vec3(clamp(sin(u_time*PI/100.), .2, .3)) + vec3(circleit(st, .5)) // + vec3(p);

    gl_FragColor = vec4(color, 1.0);

}