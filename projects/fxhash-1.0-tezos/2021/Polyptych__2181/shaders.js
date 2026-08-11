// GLSL noise implementations from
// https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83

const shader_noise = `
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
`






const vShader = `
attribute float instance_idx;
attribute float instance_id;
uniform float frame;
uniform float time;
uniform float n_instances;
uniform float amplitude;
uniform float vert_mode_a;
uniform float vert_mode_b;
uniform float vert_mode_mix;
uniform float tex_mode;
uniform float photo_ratio;

varying vec2 uUv;
varying float idx;
varying float id;
varying float x;
varying float y;
varying float w;
varying float h;

${shader_utils}
${shader_noise}

vec3 ball(float n_points, float radius) {
    if (radius > 0.) { 
        float phi = acos(-1. + (2. * idx) / n_points);
        float theta = sqrt(n_points * 3.141592653589793) * phi;
        return vec3(
            radius * cos(theta) * sin(phi),
            radius * sin(theta) * sin(phi) + radius - radius/2.,
            radius * cos(phi)
            );
    }
    return vec3(0,0,0);
}

vec3 cube(float n_points, float width) {
    if (width > 0.) {
        float sep = 2.5;
        float rect = width * width;
        float left_over = (n_points - rect) / rect;
        return vec3(
            (mod(idx, width) - width/2.) * sep,
            (floor(mod(idx / width, width)) - width/2.) * sep,
            (floor(idx / (width * width)) - left_over/2.) * sep
        );
    }
    return vec3(0,0,0);
}

vec3 plane(float width, float height) {
    return vec3(
        (mod(idx, width) - width/2.),
        0,
        (floor(idx / width) - height/2.)
    );
}

vec4 get_pos_and_scale(float mode) {
    vec3 pos;
    float scale = 1.;
    if (mode == 0. || mode == 3.) {
        pos = plane(w,h);
        if (mode == 0. && amplitude > 0.) {
            pos.y = snoise(vec3(pos.x*0.004, pos.z*0.006, frame*0.005)) * amplitude;
            scale = pow((pos.y + amplitude) / 2. / amplitude, 4.) * 5.;
        }
    } else if (mode == 1.) {
        pos = cube(n_instances, amplitude);
    } else if (mode == 2.) {
        pos = ball(n_instances, amplitude);
    } else if (mode == 4. || mode == 5.) {
        if (mode == 4.) {
            pos = cube(n_instances, amplitude);
        } else {
            pos = ball(n_instances, amplitude);
        }
        pos = vec3(
                snoise(vec3(pos.x*0.004, pos.y*0.06, frame*0.0001*0.1)) * amplitude,
                snoise(vec3(pos.y*0.03, pos.z*0.007, frame*0.0002*0.1)) * amplitude,
                snoise(vec3(pos.z*0.06, pos.x*0.002, frame*0.00015*0.1)) * amplitude
                );
        scale = pow((pos.y) / amplitude * ((sin(frame*0.01) + 2.) /1.5), 1.);
        //scale = pow(amplitude - (pos.y) / amplitude, 1.);
    }
    return vec4(pos, scale);
}

void main() {
    /*float square = pow(n_instances, 0.5);
	idx = instance_index;	
    id = instance_id;
    w = square * photo_ratio;
    h = square / photo_ratio;
    x = mod(idx, w) / w;
	y = (idx / w) / h;
	uUv = uv;
    
    vec4 pos_and_scale_a;
    vec4 pos_and_scale_b;
    vec3 newpos;
    vec3 scale = vec3(1);

    pos_and_scale_a = get_pos_and_scale(vert_mode_a);
    
    if (vert_mode_a == vert_mode_b) {
        newpos = pos_and_scale_a.xyz;
        scale = vec3(pos_and_scale_a.w);
    } else {
        pos_and_scale_b = get_pos_and_scale(vert_mode_b);
        vec4 pos_and_scale = mix(pos_and_scale_a, pos_and_scale_b, vert_mode_mix);
        newpos = pos_and_scale.xyz;
        scale = vec3(pos_and_scale.w);
    }
    //newpos.y *= snoise(vec3(newpos.x*0.1, newpos.z*0.1, frame*0.005)) ;
	float angle = 3.141592653589793 / 2.0;
	if (amplitude > 0.0) {
		angle += (-newpos.y/amplitude) * (3.141592653589793) * 2.;
	}
	mat4 rotatedInstanceMatrix = instanceMatrix;
    rotatedInstanceMatrix *= transMat(newpos);
	rotatedInstanceMatrix *= rotX(angle);
    rotatedInstanceMatrix *= scaleMat(scale); */
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position + sin(position.x+time*0.01), 1.0);
}`



const fShader = `
precision highp float;
precision highp int;
precision highp sampler2DArray;

uniform float frame;
uniform float n_instances;
uniform float n_tex;
uniform float tex_mode;
uniform float tex_mode_a;
uniform float tex_mode_b;
uniform float tex_mode_mix;
uniform float photo_mix;
uniform sampler2DArray textures;
uniform sampler2D photo_texture;
uniform sampler2D photo_texture_transition;

varying vec2 uUv;
varying float idx;
varying float id;

varying float x;
varying float y;
varying float w;
varying float h;


vec4 get_color_for_mode(float mode, float rx, float ry) {
    vec4 color;
    if (mode == 0.) {
        // Show thumbnails big
        float curr_tex = mod(frame *0.1 + idx * ((cos(frame*0.01) + 1.) / 2. * 0.0003), n_tex);
    	color = texture2D(textures, vec3(rx, ry, curr_tex));
	} else if (mode == 1.) {
        // Show thumbnails small in each plane
		rx = uUv.x;
		ry = uUv.y;
        float curr_tex = mod(frame *0.03 + id * (1./n_instances * (((sin(frame*0.0013) + 1.) / 2.) * 15. + 2.)), n_tex);
    	color = texture2D(textures, vec3(rx, ry, curr_tex));
    } else if (mode == 2.) {
        // Gets texture from photo, transitions between two photos
        if (photo_mix == 0.) {
    	    color = texture2D(photo_texture, vec2(rx, ry));
        } else if (photo_mix == 1.) {
    	    color = texture2D(photo_texture_transition, vec2(rx, ry));
        } else {
    	    color = mix(
                    texture2D(photo_texture, vec2(rx, ry)),
                    texture2D(photo_texture_transition, vec2(rx, ry)),
                    photo_mix);
        }
    } else if (mode == 3.) {
        // Gets texture from photo, transitions between two photos, but small (for every plane)
        rx = uUv.x;
        ry = uUv.y;
        if (photo_mix == 0.) {
    	    color = texture2D(photo_texture, vec2(rx, ry));
        } else if (photo_mix == 1.) {
    	    color = texture2D(photo_texture_transition, vec2(rx, ry));
        } else {
    	    color = mix(
                    texture2D(photo_texture, vec2(rx, ry)),
                    texture2D(photo_texture_transition, vec2(rx, ry)),
                    photo_mix);
        }
    }
    return color;
}

void main() {
    /*float rx = x;
    float ry = y;
	
    rx = rx + uUv.x / w;
    ry = ry - uUv.y / h;

    vec4 color_a = get_color_for_mode(tex_mode_a, rx, ry);
    
    vec4 color = color_a;
    vec4 color_b = color_a;

    if (tex_mode_b != tex_mode_a) {
        color_b = get_color_for_mode(tex_mode_b, rx, ry);
        color = mix(color_a, color_b, tex_mode_mix);
    }*/

	gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
`

const vsh = `
${shader_noise}
attribute float size;
attribute vec3 color;

attribute float idx1;
attribute float idx;
attribute float idx3;
uniform float time;
uniform float npoints;
uniform float ratio;
uniform float multi;
uniform float detun;
uniform float grid_x;
uniform float grid_y;
varying vec3 vColor;
varying float md;
varying float index;
varying float index1;
varying float w;
varying float gx;
varying float gy;
varying float h;
varying vec2 uUv;
varying float even;
varying float col;
varying float lin;
varying vec3 norm;

#define PI 3.141592653589793
#define PI2 6.283185307179586

// from http://connorbell.ca/2017/09/09/Generating-Looping-Noise.html
float perfect_loop_noise(float loop_size, float transition, float global_time, float noise_x, float noise_y) {
    float ttime = mod(global_time, loop_size);
    float v1 = snoise(vec3(noise_x, noise_y, ttime));
    float v2 = snoise(vec3(noise_x, noise_y, ttime - loop_size));
    float transition_progress = (ttime-transition)/(loop_size-transition);
    float progress = clamp(transition_progress, 0., 1.);
    return  mix(v1, v2, progress);
}

float perfect_loop(float loop_size, float transition, float global_time) {
    float ttime = mod(global_time, loop_size);
    float v1 = ttime/loop_size;
    float v2 = abs(ttime - loop_size)/loop_size;
    float transition_progress = (ttime-transition)/(loop_size-transition);
    float progress = clamp(transition_progress, 0., 1.);
    return  mix(v1, v2, progress);
}

vec3 ball(float index, float n_points, float radius) {
    if (radius > 0.) { 
        float phi = acos(-1. + (2. * index) / n_points);
        float theta = sqrt(n_points * 3.141592653589793) * phi;
        return vec3(
            radius * cos(theta) * sin(phi),
            radius * sin(theta) * sin(phi) + radius - radius/2.,
            radius * cos(phi)
            );
    }
    return vec3(0,0,0);
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

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

void main() {
	vColor = color;
    uUv = uv;
    even = floor(mod(idx, 2.));
    index = idx;
    float id = floor(index/2.); //,idx1,ratio);
    float lado = sqrt(npoints/2.);
    float coluna = floor((mod(id, lado)-lado/2.))/lado;
    float linha = (floor(id / lado)-lado/2.)/lado;
    float dir_x = (floor(rand(10.+coluna)*2.)*2.-1.);
    float dir_y = (floor(rand(10.+linha)*2.)*2.-1.);
    norm = normal;
    gx = 15.0+rand(grid_x)*15.; 
    gy = 15.0+rand(grid_y)*15.;
 
    vec2 sq = vec2(mod(coluna, 1.0)-0.5, mod(linha, 1.0)-0.5);
    //sq.x = (sq.x + (rand(floor((mod(sq.x,1.0)-0.5)*(gx/5.)))-0.5)*time*0.000002*even, 1.0)-0.5;
    //sq.y = (sq.y + (rand(floor((mod(sq.y,1.0)-0.5)*(gy/5.)))-0.5)*time*0.000002*(1.-even), 1.0)-0.5;
    //sq.x = mod(sq.x + time*0.00001*${fxrand()}*even, 1.0)-0.5;
    //sq.y = mod(sq.y + time*0.00001*${fxrand()}*(1.-even), 1.0)-0.5;
    sq.x = mod(sq.x + (time)*0.000001*${fxrand()+0.1}*even, 1.0)-0.50;
    sq.y = mod(sq.y + (time)*0.000001*${fxrand()+0.1}*(1.-even), 1.0)-0.50;
    col = floor((mod(sq.x,1.0)-0.5)*gx);
    lin = floor((mod(sq.y,1.0)-0.5)*gy);
    
    float zx = snoise(vec3((0.5+sq.y)*3.2*${fxrand()+0.1}, floor(1.0+(gx+col)/(1.+40.*${fxrand()})), time*0.0000001*rand(col)))*(1.-even);
    float zy = snoise(vec3((0.5+sq.x)*3.2*${fxrand()+0.1}, floor(1.0+(gy+lin)/(1.+40.*${fxrand()})), time*0.0000001*rand(lin)))*even;
    vec3 pos = vec3(sq.x, sq.y, (zx+zy)/(1.5+${fxrand()}*3.0)) * 7.5;//(abs(sq.x) + abs(sq.y))/4.)*7.5;
    mat4 rotatedInstanceMatrix = instanceMatrix;
    rotatedInstanceMatrix *= transMat(pos*75.);
    rotatedInstanceMatrix *= rotY(-(pos.z)*PI2*(5.+5.*${fxrand()})*((1.-even)));
    rotatedInstanceMatrix *= rotX(-(pos.z)*PI2*(5.+5.*${fxrand()})*(even));
    rotatedInstanceMatrix *= scaleMat(vec3(1.0)); 
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * rotatedInstanceMatrix * vec4(position, 1.0); //mvPosition;
}
`

const fsh = `
${shader_noise}
${pal}

uniform float pallete;
uniform float time;
uniform float cor;

varying float even;
varying vec3 vColor;
varying float index;
varying float index1;
varying float md;
varying float w;
varying float h;
varying vec2 uUv;
varying float gx;
varying float gy;
varying float col;
varying float lin;
varying vec3 norm;

vec3 get_col(float pal, float n) {
    if (n < 1./4.) {
        return vec3(255., 115., 0.) / 255.;
    } else if (n < 2./4.) {
        return vec3(255., 155., 74.) / 255.;
    } else if (n < 3./4.) {
        return vec3(102., 233., 255.) / 255.;
    } else {
        return vec3(0., 218., 255.) / 255.;
    }
}

void main() {
	//vec4 color = texture2D( pointTexture, gl_PointCoord );
    //vec4 color = vec4(get_color(pallete, snoise(vec3(floor(index*0.00005)))), 1.0);
    //vec4 color = vec4(get_col(pallete, snoise(vec3(col*10.*(1.-even),lin*10.*(even),0.0))), 1.0);
    //vec4 color = vec4(col,col,col,1.0);//
    //sn
    vec4 color = vec4(0.,0.,0.,1.);
	gl_FragColor = color;
}
`
