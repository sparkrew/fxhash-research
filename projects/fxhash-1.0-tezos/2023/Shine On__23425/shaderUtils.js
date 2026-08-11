const shapeFunctions = {
    'box': 'box(relativePosition, scale)',
    'sphere': 'sphere(relativePosition, scale.x)',
    'cylinder': 'cylinder(relativePosition, scale.x, scale.y)',
    'circle': 'circle(relativePosition, scale.x)',
    'rect': 'rect(relativePosition, scale)',
    'arch' : 'arch(relativePosition, scale)',
}

const sdfFuncs = `
float box( vec3 p, vec3 b ){
    vec3 q = abs(p) - b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sphere( vec3 p, float s ){
    return length(p)-s;
}

float cylinder( vec3 p, float r, float h){
    vec2 d = abs(vec2(length(p.xz),p.y)) - vec2(r,h);
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}
float plane( vec3 p, vec3 n, float h ){
  return dot(p,n) + h;
}

// 2D SDF
vec2 relative2D(vec2 p, vec2 center, float angle){
    vec2 q = p - center;
    float c = cos(angle);
    float s = sin(angle);
    mat2 m = mat2(c, -s, s, c);
    return m * q;
}
float circle( vec2 p, float r ){
    return length(p)-r;
}
float rect( vec2 p, vec2 r ){
    vec2 d = abs(p) - r;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}
float arch(in vec2 p, in vec2 s){
    float val = map(p.y, -s.y, s.y);
    val = ss(val);
    val = lerp(s.x,0.0,val);
    return rect(p,vec2(val, s.y));
}
`

const opFuncs = `
float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h);
}
float opSmoothSubtraction( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
    return mix( d2, -d1, h ) + k*h*(1.0-h);
}
float opSmoothIntersection( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) + k*h*(1.0-h);
}
float opSubtraction( float d1, float d2 ) { return max(-d2,d1); }
float opBorder( float d, float w ) { return abs(d)-w; }
`

const deformationFuncs = `
float map( float val, float minv, float maxV){
    return (val - minv) / (maxV - minv);
}
float lerp(float a, float b, float t){
    return a + (b - a) * t;
}
float ss(float x){
    return x*x*x*(x*(x*6.0-15.0)+10.0);
}
`

const sdfTools = `

float dot2( in vec2 v ) { return dot(v,v); }
float dot2( in vec3 v ) { return dot(v,v); }
float ndot( in vec2 a, in vec2 b ) { return a.x*b.x - a.y*b.y; }

mat3 rotate_x(float a){float sa = sin(a); float ca = cos(a); return mat3(vec3(1.,.0,.0),    vec3(.0,ca,sa),   vec3(.0,-sa,ca));}
mat3 rotate_y(float a){float sa = sin(a); float ca = cos(a); return mat3(vec3(ca,.0,sa),    vec3(.0,1.,.0),   vec3(-sa,.0,ca));}
mat3 rotate_z(float a){float sa = sin(a); float ca = cos(a); return mat3(vec3(ca,sa,.0),    vec3(-sa,ca,.0),  vec3(.0,.0,1.));}

vec3 lookAt( vec3 ro, vec3 ta, float cr ){
    vec3 ww = normalize(ta-ro);
    vec3 uu = normalize(cross(ww,vec3(sin(cr),cos(cr),0.0)));
    vec3 vv = normalize(cross(uu,ww));
    return vec3( dot(uu,ro), dot(vv,ro), dot(ww,ro) );
}

vec3 opTx( vec3 p, vec3 t, vec3 r ){
    p = p - t;
    p = rotate_x(r.x) * p;
    p = rotate_y(r.y) * p;
    p = rotate_z(r.z) * p;
    return p;
}
vec3 relativeToPlane(vec3 p, vec3 n, float h){
    return p - n * (dot(p, n) + h);
}

vec3 cam_ro= vec3(0.0), cam_ta = vec3(0.0), cam_ww, cam_uu, cam_vv;

void initCamera(){
    cam_ww = normalize(cam_ta - cam_ro);
    cam_uu = normalize(cross(cam_ww, vec3(0.0, 1.0, 0.0)));
    cam_vv = normalize(cross(cam_uu, cam_ww));
}
vec3 getCameraRay(vec2 q){
    return normalize(2.0 * cam_ww + q.x * cam_uu + q.y * cam_vv);
}

float maxInVec(vec3 v){
    return max(max(v.x, v.y), v.z);
}
`

const shaderNoise = `
float hash( float n ) { return fract(sin(n)*43758.5453123); }
float noise( in vec2 x ){
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}
float worley( in vec2 x ){
    vec2 p = floor(x);
    vec2 f = fract(x);
    float res = 8.0;
    for( int j=-1; j<=1; j++ )
    for( int i=-1; i<=1; i++ ){
        vec2 b = vec2(i,j);
        vec2 r = vec2(b) - f + noise( p + b );
        res = min( res, dot(r,r) );
    }
    return sqrt(res);
}
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
`