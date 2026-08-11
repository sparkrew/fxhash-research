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

#define PI 3.14159265359
#define TWO_PI 6.28318530718

vec2 st;

float plot(vec2 st, float y, float cntr){
  return smoothstep(y-0.2, y, st.y);
}
  
float circleit (vec2 position, float radius){
  float dirPI = mod(u_x, 2.) * PI - mod(u_y, u_x) * PI;
  return step(radius-0.12+sin(st.x*st.y+u_time/50.)*(cos(st.x*PI*st.y))*(cos(dirPI*st.y))*(sin(PI*st.y))/1., length(position)) - step(radius-.15+sin(st.x*st.y-u_time/50.)*(cos(dirPI*st.x/st.y))*(cos(dirPI*st.y))*(sin(dirPI/st.y))/2., dot(st,position));
}

vec3 shape1(){
  vec3 color = vec3(0.0);
  float d = 0.0;
  float N = clamp(floor(fract( u_x + u_y)), 4., 6.);
  float a = atan(st.x,st.y)+PI;
  float r = TWO_PI/float(N);
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color = (vec3(1.0-smoothstep(.6,.61,d)) - 
           vec3(1.0-smoothstep(.6,.61,d-.05))
          ) * vec3(0., 1., 1.);

  a = atan(st.x,st.y)+PI*.95;
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color += (vec3(1.0-smoothstep(.5,.51,d))  - 
            vec3(1.0-smoothstep(.5,.51,d-.05)) 
            )* vec3(0.5, 0.5, 0.5);
  

  a = atan(st.x,st.y)+PI*.9;
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color += (vec3(1.0-smoothstep(.4,.41,d)) - 
            vec3(1.0-smoothstep(.4,.41,d-.05)) 
            )* vec3(1., 1., 0.);

  a = atan(st.x,st.y)+PI*.85;
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color += (vec3(1.0-smoothstep(.3,.31,d)) - 
            vec3(1.0-smoothstep(.3,.31,d-.05)) 
            )* vec3(0., 1., 0.);

  a = atan(st.x,st.y)+PI*.8;
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color += (vec3(1.0-smoothstep(.2,.21,d)) - 
            vec3(1.0-smoothstep(.2,.21,d-.05)) 
            )* vec3(0.3, 0.3, 1.);

  a = atan(st.x,st.y)+PI*.75;
  d = cos(floor(.5+a/r)*r-a)*length(st);
  color += (vec3(1.0-smoothstep(.1,.11,d)) - 
            vec3(1.0-smoothstep(.1,.11,d-.05)) 
            ) * vec3(1., 0.5, 0.5);
  return color;  
}

vec3 shape2(float type1){
  vec3 color = vec3(0.0);
  float d = 0.0;
  float N = clamp(floor(fract( u_x + u_y)), 4., 6.);
  float a = atan(st.x,st.y)+PI*u_y/(4.*u_x);
  float r = TWO_PI/float(N);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.035));
  color = (vec3(1.0-smoothstep(.99,1.,d)) - 
           vec3(1.0-smoothstep(.99,1.,d-.05))
          ) * vec3(.3, .5, .9);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.035));
  color += (vec3(1.0-smoothstep(.9,.91,d)) - 
           vec3(1.0-smoothstep(.9,.91,d-.05))
          ) * vec3(1., 1., 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.025));
  color += (vec3(1.0-smoothstep(.8,.81,d)) - 
           vec3(1.0-smoothstep(.8,.81,d-.05))
          ) * vec3(0.5, .3, .1);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.05));
  color += (vec3(1.0-smoothstep(.7,.71,d)) - 
           vec3(1.0-smoothstep(.7,.71,d-.05))
          ) * vec3(0.2, .4, .6);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.1));
  color += (vec3(1.0-smoothstep(.6,.61,d)) - 
           vec3(1.0-smoothstep(.6,.61,d-.05))
          ) * vec3(0., 1., 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.15));
  color += (vec3(1.0-smoothstep(.5,.51,d))  - 
            vec3(1.0-smoothstep(.5,.51,d-.05)) 
            )* vec3(0.5, 0.5, 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.2));
  color += (vec3(1.0-smoothstep(.4,.41,d)) - 
            vec3(1.0-smoothstep(.4,.41,d-.05)) 
            )* vec3(1., 1., 0.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.25));
  color += (vec3(1.0-smoothstep(.3,.31,d)) - 
            vec3(1.0-smoothstep(.3,.31,d-.05)) 
            );
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.3));
  color += (vec3(1.0-smoothstep(.2,.21,d))* vec3(0.3, 0.3, 1.) - 
            vec3(1.0-smoothstep(.2,.21,d-.05)) 
            )* vec3(0.3, 0.3, 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.35));
  color += (vec3(1.0-smoothstep(.1,.11,d)) - 
            vec3(1.0-smoothstep(.1,.11,d-.05)) 
            ) * vec3(1., 0.5, 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.4));
  color += (vec3(1.0-smoothstep(.05,.06,d)) - 
            vec3(1.0-smoothstep(.05,.06,d-.05)) 
            ) * vec3(.5, 1., 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-type1*vec2(.45));
  color += (vec3(1.0-smoothstep(.008,.009,d)) - 
            vec3(1.0-smoothstep(.008,.009,d-.06)) 
            ) * vec3(.2, .5, 1.);
  return color;  
}

vec3 shape3(vec2 pos){
  vec3 color = vec3(0.0);
  float d = 0.0;
  float N = clamp(floor(fract( u_x + u_y)), 4., 6.);
  float a = atan(st.x,st.y)+PI;
  float r = TWO_PI/float(N);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color = (vec3(1.0-smoothstep(.99,1.,d)) - 
           vec3(1.0-smoothstep(.99,1.,d-.05))
          ) * vec3(.3, .5, .9);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.9,.91,d)) - 
           vec3(1.0-smoothstep(.9,.91,d-.05))
          ) * vec3(1., 1., 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.8,.81,d)) - 
           vec3(1.0-smoothstep(.8,.81,d-.05))
          ) * vec3(0.5, .3, .1);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.7,.71,d)) - 
           vec3(1.0-smoothstep(.7,.71,d-.05))
          ) * vec3(0.2, .4, .6);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.6,.61,d)) - 
           vec3(1.0-smoothstep(.6,.61,d-.05))
          ) * vec3(0., 1., 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.5,.51,d))  - 
            vec3(1.0-smoothstep(.5,.51,d-.05)) 
            )* vec3(0.5, 0.5, 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.4,.41,d)) - 
            vec3(1.0-smoothstep(.4,.41,d-.05)) 
            )* vec3(1., 1., 0.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.3,.31,d)) - 
            vec3(1.0-smoothstep(.3,.31,d-.05)) 
            );
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.2,.21,d))* vec3(0.3, 0.3, 1.) - 
            vec3(1.0-smoothstep(.2,.21,d-.05)) 
            )* vec3(0.3, 0.3, 1.);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.1,.11,d)) - 
            vec3(1.0-smoothstep(.1,.11,d-.05)) 
            ) * vec3(1., 0.5, 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.05,.06,d)) - 
            vec3(1.0-smoothstep(.05,.06,d-.05)) 
            ) * vec3(.5, 1., 0.5);
  d = cos(floor(.5+a/r)*r-a)*length(st.xy-(pos));
  color += (vec3(1.0-smoothstep(.008,.009,d)) - 
            vec3(1.0-smoothstep(.008,.009,d-.06)) 
            ) * vec3(.2, .5, 1.);
  return color;  
}
mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    st = gl_FragCoord.xy / u_resolution.xy*u_thickness;
    st.xy = st.xy*.95 - 1.0;
    vec3 color = vec3(0.0);
    if (u_colorMode == 1.)
      color =  vec3(1., 1., 1.);
    else if (u_colorMode == 2.)
      color =  1. - vec3(0.3, 0.3, 0.3);
    else
      color = vec3(max(.3, sin(u_x+u_thickness)*cos(u_y+u_thickness)), max(.3, cos(u_x+u_thickness)), max(.3, sin(u_y+u_thickness)));
  
    st = rotate2d( sin(u_x/250.)*cos(u_y/350.)*((sin(u_x)-cos(u_y) ) * PI) ) * st;
  
    if (floor(mod(u_x+u_y, 5.)) == 0.){
      color += shape3(vec2(.8, -0.8));
      color += shape3(vec2(-.8 ,.8));
    }
    else if (floor(mod(u_x+u_y, 5.)) == 1.)
      color += shape3(vec2(.5));
    else if (floor(mod(u_x+u_y, 5.)) == 2.)
      color += shape3(vec2(-.5));
    else if (floor(mod(u_x+u_y, 5.)) == 3.){
      color += shape3(vec2(-.8));
      color += shape3(vec2(.8));
    }
    else if (floor(mod(u_x+u_y, 5.)) == 4.){
      color += shape3(vec2(1., -1.));
      color += shape3(vec2(1., 1.0));
      color += shape3(vec2(-1., -1.));
      color += shape3(vec2(-1., 1.0));
    }
    else
      color += shape2(floor(mod(u_x+u_y, 2.)));
    //color = vec3(clamp(sin(u_time*PI/100.), .2, .3)) + vec3(circleit(st, .5))*vec3(sin(u_x/u_y)*fract(st.y*st.x), cos(u_x), sin(u_y)); // + vec3(p);

    gl_FragColor = vec4(color, 1.0);

}