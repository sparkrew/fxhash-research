// GLSL noise implementations from
// https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83

const shader_noise = `

// A single iteration of Bob Jenkins' One-At-A-Time hashing algorithm.
uint hash( uint x ) {
    x += ( x << 10u );
    x ^= ( x >>  6u );
    x += ( x <<  3u );
    x ^= ( x >> 11u );
    x += ( x << 15u );
    return x;
}



// Compound versions of the hashing algorithm I whipped together.
uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }



// Construct a float with half-open range [0:1] using low 23 bits.
// All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
float floatConstruct( uint m ) {
    const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
    const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32

    m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
    m |= ieeeOne;                          // Add fractional part to 1.0

    float  f = uintBitsToFloat( m );       // Range [1:2]
    return f - 1.0;                        // Range [0:1]
}



// Pseudo-random value in half-open range [0:1].
float random( float x ) { return floatConstruct(hash(floatBitsToUint(x+${fxrand()*1000}))); }
float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v+${fxrand()*1000}))); }
float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v+${fxrand()*1000}))); }
float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v+${fxrand()*1000}))); }



//	Simplex 3D Noise 
//	by Ian McEwan, Ashima Arts
//
float rand(float co) { return fract(sin(co*(${fxrand()*91.3458})) * ${fxrand() * 47453.5453}); }
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 vs){
  vec3 v = vs + ${fxrand()}*1300.0; // seed
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`

const shader_utils = `
#define PI 3.141592653589793
#define PI2 6.283185307179586

mat4 rotX(float angle) {
	mat4  rotation = mat4(
		vec4( 1.0,       0.0,                0.0,  0.0 ),
		vec4( 0.0,       cos(angle),         -sin(angle),  0.0 ),
		vec4( 0.0,       sin(angle),         cos(angle),  0.0 ),
		vec4( 0.0,       0.0,                0.0,  1.0 ) );
	return rotation;
}

mat4 rotY(float angle) {
	mat4  rotation = mat4(
		vec4( cos(angle),0.0,               -sin(angle),  0.0 ),
		vec4( 0.0,       1.0,                0.0,  0.0 ),
		vec4( sin(angle),0.0,                cos(angle),  0.0 ),
		vec4( 0.0,       0.0,                0.0,  1.0 ) );
	return rotation;
}

mat4 rotZ(float angle) {
	mat4  rotation = mat4(
		vec4( cos(angle),-sin(angle),        0.0,  0.0 ),
		vec4( sin(angle),         cos(angle),0.0,  0.0 ),
		vec4( 0.0,       0.0,                1.0,  0.0 ),
		vec4( 0.0,       0.0,                0.0,  1.0 ) );
	return rotation;
}

mat4 scaleMat(vec3 amount) {
	return mat4 (
		vec4( amount.x, 0, 			0, 			0),
		vec4( 0, 		amount.y, 	0, 			0),
		vec4( 0, 		0, 			amount.z, 	0),
		vec4( 0, 		0, 			0, 			1)
	);
}

mat4 transMat(vec3 amount) {
    return mat4(
        vec4(1.0,0.0,0.0,0.0),
        vec4(0.0,1.0,0.0,0.0),
        vec4(0.0,0.0,1.0,0.0),
        vec4(amount.x,amount.y,amount.z,1.0));
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`

const shader_draw = `
vec3 sphere(float radius, float i) {
    float t = random(i) * PI2;
    float v = random(i+1230.0);
    float phi = acos((2.*v)-1.);
    float u = (1.-snoise(vec3(200.+floor(i*${fxrand()*0.5})))) + (1.-snoise(vec3(random(10100.+floor(i*${0.3*fxrand()})))));
    float r = u > 1. ? 2.-u : u;
    r = pow(r, 0.1);
    float x = r*radius*sin(phi) * cos(t);
    float y = r*radius*sin(phi) * sin(t);
    float z = r*radius*cos(phi);
    return vec3(x, y, z);
}

vec3 cube(float side, float i) {
    float face = floor(random(321.+i) * 3.);
    float facesign = sign(random(421.+i)-0.5);
    float x = face == 0. ? side * facesign : side*(random(5123.+i)*2.-1.);
    float y = face == 1. ? side * facesign : side*(random(7123.+i)*2.-1.);
    float z = face == 2. ? side * facesign : side*(random(9123.+i)*2.-1.);
    return vec3(x,y,z);
}

vec3 pyramid(float side, float i) {
    float face = floor(random(321.+i) * 3.);
    float facesign = sign(random(421.+i)-0.5);

    float y = face == 1. ? -side : -side + side*(random(7123.+i)*2.);
    float amount = 1.-((y/side)+1.)/2.;
    float x = face == 0. ? side * facesign : side*(random(5123.+i)*2.-1.);
    float z = face == 2. ? side * facesign : side*(random(9123.+i)*2.-1.);
    x*=amount;
    z*=amount;
    return vec3(x,y,z);
}

vec3 dcube(float side, float i) {
    float face = floor(random(321.+i) * 3.);
    float facesign = sign(random(421.+i)-0.5);
    float x = face == 0. ? side * facesign : (random(5123.+i)*2.-1.);
    float y = face == 1. ? side * facesign : (random(7123.+i)*2.-1.);
    float z = face == 2. ? side * facesign : (random(9123.+i)*2.-1.);
    return vec3(x,y,z);
}

vec3 rect(float side, float i) {
    float x = side * sign(random(333.+i)-0.5);
    float y = side * sign(random(999.+i)-0.5);
    float z = side * sign(random(1919.+i)-0.5);
    return vec3(x, y, z);
}

vec3 points(float side, float seed) {
    float x = side*(pow(random(333.+seed)*2.-1.,1.0));
    float y = side*(pow(random(999.+seed)*2.-1.,1.0));
    float z = side*(pow(random(1919.+seed)*2.-1.,1.0));
    return vec3(x, y, z);
}

vec3 noisepoints(float side, float seed) {
    float x = side*(pow(snoise(vec3(333.+seed*10.))*2.-1.,1.0));
    float y = side*(pow(snoise(vec3(999.+seed*10.))*2.-1.,1.0));
    float z = side*(pow(snoise(vec3(1919.+seed*10.))*2.-1.,1.0));
    return vec3(x, y, z);
}

vec3 waves(float width, float height, float i) {
    float n = 6.;
    float x = (random(300.+i)*2.-1.)*width;
    float y = sin(x*10.)*height;
    return vec3(x, y, 0.0);
}
`
