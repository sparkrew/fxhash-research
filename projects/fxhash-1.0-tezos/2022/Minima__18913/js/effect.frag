precision highp float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform vec2 resolution;
uniform float u_time;
uniform bool goopy;
uniform float noiseMult;
vec3 colors[10];
// uniform float mag;

float random(in vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 st){
    vec2 i=floor(st);
    vec2 f=fract(st);
    
    // Four corners in 2D of a tile
    float a=random(i);
    float b=random(i+vec2(1.,0.));
    float c=random(i+vec2(0.,1.));
    float d=random(i+vec2(1.,1.));
    
    vec2 u=f*f*(3.-2.*f);
    
    return mix(a,b,u.x)+
    (c-a)*u.y*(1.-u.x)+
    (d-b)*u.x*u.y;
}

#define OCTAVES 6
float fbm(in vec2 st){
    // Initial values
    float value=0.;
    float amplitude=.5;
    float frequency=0.;
    //
    // Loop of octaves
    for(int i=0;i<OCTAVES;i++){
        value+=amplitude*noise(st);
        st*=2.;
        amplitude*=.5;
    }
    return value;
}

void main(){
    colors[0]=vec3(67./255.,75./255.,246./255.);
    colors[1]=vec3(50./255.,52./255.,251./255.);
    colors[2]=vec3(81./255.,87./255.,208./255.);
    colors[3]=vec3(130./255.,134./255.,255./255.);
    colors[4]=vec3(181./255.,150./255.,241./255.);
    colors[5]=vec3(248./255.,122./255.,192./255.);
    colors[6]=vec3(251./255.,202./255.,177./255.);
    colors[7]=vec3(252./255.,184./255.,149./255.);
    colors[8]=vec3(252./255.,195./255.,141./255.);
    colors[9]=vec3(253./255.,231./255.,215./255.);
    
    vec2 uv=vTexCoord;
    // the texture is loaded upside down and backwards by default so lets flip it
    uv.y=1.-uv.y;
    
    // for border, only uncomment when using padding border
    // vec2 originalUv = vec2(uv.x,uv.y);
    
    // dotted shader
    vec2 oldUv=vec2(uv.x,uv.y);
    float mag=.01;// set to uniform if you want to change it on the fly
    if(goopy)mag=uv.y-.2;
    uv+=vec2(fbm(uv*2.+u_time*.01)*mag-mag/2.);
    uv+=vec2(fbm((1.-uv))*mag-mag/2.);
    // mag=.0005;
    // uv+=vec2(random(vec2(uv.x))*mag-mag/2.,random(vec2(uv.y))*mag-mag/2.);
    
    vec4 tex=texture2D(tex0,uv);
    
    // recombine the three texures into a single one for output
    vec3 color=vec3(tex.r,tex.g,tex.b);
    float brightness=(color.r+color.g+color.b)/3.;
    
    // combine dotted texture with original to create sharp yet soft edges
    // only uncomment when you are using dotted shader
    vec4 oldTex=texture2D(tex0,oldUv);
    color=mix(
        color,
        vec3(oldTex.r,oldTex.g,oldTex.b),
        .8
    );
    
    color-=random(oldUv)*.12;
    
    // float padding=.05;
    // if(originalUv.x<padding||originalUv.x>1.-padding||originalUv.y<padding||originalUv.y>1.-padding)color=vec3(1.);
    
    gl_FragColor=vec4(color,1.);
}