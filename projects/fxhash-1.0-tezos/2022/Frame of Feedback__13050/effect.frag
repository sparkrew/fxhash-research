//precision lowp float;
precision mediump float;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

// grab texcoords from vert shader
varying vec2 vTexCoord;

// our textures coming from p5
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform float stgW;
uniform float stgH;
uniform float mouseDown;
uniform float time;
uniform vec4 rand;
uniform vec4 rand2;


////median!!!







vec3 rgb2hsb(vec3 c){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
    vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsb2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}


vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

// Gradient Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/XdXGW8
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}


void sort2(inout vec4 a0, inout vec4 a1) {
    vec4 b0 = min(a0, a1);
    vec4 b1 = max(a0, a1);
    a0 = b0;
    a1 = b1;
}

void sort(inout vec4 a0, inout vec4 a1, inout vec4 a2, inout vec4 a3, inout vec4 a4) {
    sort2(a0, a1);
    sort2(a3, a4);
    sort2(a0, a2);
    sort2(a1, a2);
    sort2(a0, a3);
    sort2(a2, a3);
    sort2(a1, a4);
    sort2(a1, a2);
    sort2(a3, a4);
}

vec4 rgb_to_xyz(vec4 c) {
    mat3 conv = mat3(0.49, 0.17697, 0.0,
                     0.31, 0.81240, 0.01,
                     0.20, 0.01063, 0.99) * (1.0 / 0.17697);
    c.xyz = conv * c.rgb;
    return c;
}

vec4 xyz_to_rgb(vec4 c) {
    mat3 conv = mat3(0.41847, -0.091169, 0.00092090,
                     -0.15866, 0.25243, -0.0025498,
                     -0.082835, 0.015708, 0.17860);
    c.rgb = conv * c.xyz;
    return c;
}


void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;

  vec2 feedbackUv = uv;
  feedbackUv = uv * 2.0 - 1.0;
 
  float rad = atan(uv.y-0.5,uv.x-0.5);
  float aa = length(uv.xy-vec2(0.5,0.5));
  //feedbackUv *= 1.04;//+aa*0.04;//*sin(rad*9.0 + 9.3*time);
  feedbackUv = feedbackUv * 0.5 + 0.5;
  //feedbackUv.y -= 0.02;
  // get the webcam
  //aa = min(1.0,aa);
  //aa = 1.0 - aa;
  vec2 puv = vec2(aa,rad);

  float amp = 0.015;// * noise( uv.xy*4.0 + time*3.0);// + 0.01+rand.x;
  float detail = 2.0+3.0 * rand.w;// * noise( uv.yx*2.0 + time*3.0 );
  vec2 offset = vec2(
    //amp * noise( uv.xy*4.0 ),
    //amp * noise( uv.yx*4.0 )
    amp*cos(sign(rand2.x)*(uv.y-0.5)*detail+time*rand.x*2.0),
    amp*sin(sign(rand2.y)*(uv.x-0.5)*detail+time*rand.x*2.0)
  );
  offset.x += amp*cos(sign(rand2.z)*2.0*(uv.y-0.5)*detail+time*rand.y*2.0);
  offset.y += amp*sin(sign(rand2.w)*2.0*(uv.x-0.5)*detail+time*rand.y*2.0);
  
  offset.x += 0.5*amp*cos(4.0*(uv.y-0.5)*detail+time*rand.z*2.0);
  offset.y += 0.5*amp*sin(4.0*(uv.x-0.5)*detail+time*rand.z*2.0);  

  //offset.x += 0.25*amp*cos(8.0*(uv.y-0.5)*detail+time*rand.w);
  //offset.y += 0.25*amp*sin(8.0*(uv.x-0.5)*detail+time*rand.w); 
  //offset.x += amp*sin(uv.y*3.0+time*2.0);
  //offset.y += amp*sin(uv.y*3.0+time*2.0);
  


  vec2 texel = vec2(1.0/stgW,1.0/stgH);
  vec2 texelSize = vec2(stgW,stgH);
  
  //offset.x = texel.x * sign(floor( 2.0 * (sin(uv.x*15.0+time*3.3) )));
  //offset.y = texel.y * sign(floor( 16.0 * (0.5+0.5*sin(uv.x*20.0+time*3.3) )));
  //offset.y += - texel.y * floor( 3.0 * (0.5+0.5*sin(uv.y*20.0+time*4.3) ));

  vec4 cam = texture2D(tex0, uv );

    vec4 c0 = texture2D(tex1, feedbackUv+offset);
    vec4 c1 = texture2D(tex1, feedbackUv+offset + vec2(texel.x, 0.0));
    vec4 c2 = texture2D(tex1, feedbackUv+offset + vec2(0.0, texel.y));
    vec4 c3 = texture2D(tex1, feedbackUv+offset - vec2(texel.x, 0.0));
    vec4 c4 = texture2D(tex1, feedbackUv+offset - vec2(0.0, texel.y));
    //vec4 c5 = texture2D(tex1, feedbackUv+offset + vec2(texel.x, -texel.y));
    //vec4 c6 = texture2D(tex1, feedbackUv+offset + vec2(-texel.x, texel.y));
    //vec4 c7 = texture2D(tex1, feedbackUv+offset - vec2(texel.x, -texel.y));
    //vec4 c8 = texture2D(tex1, feedbackUv+offset - vec2(-texel.x, texel.y));
    //c0 = rgb_to_xyz(c0);
    //c1 = rgb_to_xyz(c1);
    //c2 = rgb_to_xyz(c2);
    //c3 = rgb_to_xyz(c3);
    //c4 = rgb_to_xyz(c4);
    //sort(c0, c1, c2, c3, c4);
    //sort(c5, c6, c2, c7, c8);

  cam = mix(
    c2,//texture2D(tex1, feedbackUv+offset ),
    cam,
    cam.a
  );
  cam.a = 1.0;

  // make a copy of the camera
  vec4 tex = cam;
  
  // if the mouse isn't clicked we'll run the feedback loop

  /*
  if(mouseDown == 0.0){

    // calculate an angle from the hue
    // we will use these to offset the texture coordinates just a little bit
    vec3 hsb = rgb2hsb(cam.rgb);
    float angleX = cos(hsb.r*TWO_PI);
    float angleY = sin(hsb.r * TWO_PI);

    // add those angles to the tex coords and sample the feed back texture
    tex = texture2D(tex1, feedbackUv + vec2(angleX, angleY)*0.001);

    // add some camera from the screen
    tex.rgb += cam.rgb*0.8;

    // if tex.r > 1.0, invert the texture and swizzle the color channels around
    tex.rgb = mix(tex.rgb, 1.0-tex.rgb, tex.r );

  }*/
  
  // render the output

  //tex.rgb = floor(tex.rgb*32.0)/32.0;

  gl_FragColor = tex;
}