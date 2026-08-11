precision highp float;

uniform float iTime;
uniform vec2 Resolution;
uniform float HASH;
uniform float vFix;
uniform float Gc;

#define iResolution vec3(Resolution, 1.)

#define BOX_ID 1.
#define BAR_ID 2.
#define SPHERE_ID 3.

#define EPS 1e-3


mat2 rotate2D(float r){
    float c = cos(r);
    float s = sin(r);
    return mat2(c, s, -s, c);
}

float hash(float p){
    p = fract(p * 0.1234);
    p *= p + 34.3;
    return fract(p*p);
}
float hash21(vec2 p){
    vec3 p3 = fract(vec3(p.xyx) * 1.013);
    p3 += dot(p3, p3.yzx + 19.19) * 13.7;
    return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p){
	vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx+33.43);
    return fract((p3.xx+p3.yz)*p3.zy);
}

vec3 hsv(float h, float s, float v){
    vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
    return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}

float box(vec3 p, vec3 w){
    vec3 q = abs(p) - w;
    return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float bar(vec3 p, float r){
    return length(p.xz) - r;
}

float sphere(vec3 p, float r){
    return length(p) - r;
}

float plane(vec3 p, float offset){
    return dot(p, vec3(0,1,0)) + offset;
}

vec2 upU(vec2 d1, vec2 d2) {
    return (d1.x < d2.x) ? d1: d2;
}

//Voronoi edge approximation
//https://iquilezles.org/articles/voronoilines/
vec3 voronoi(vec2 p, vec3 c, float z, float lid){
    vec2 q = p*rotate2D(0.7854);
    float m = .7 - lid*.2;
    vec2 bx = fract(q*m+100.) - .5;
    vec2 id = floor(q*m+100.);

    float mn = 9.;
    vec2 mn2 = vec2(9);

    vec2 mid;
    for(int i=-1;i<=1;++i){
        for(int j=-1;j<=1;++j){
            vec2 g = vec2(i,j);
            vec2 v = hash22(id+g);
            vec2 q = g + sin(v*5.+iTime+lid+HASH)*.5;
            float d = max(abs(bx.x - q.x), abs(bx.y - q.y));

            if(d < mn) {
                mn = d;
                mid = id + g;
            }
            if(d < mn2.x){
                mn2.y = mn2.x;
                mn2.x = d;
            }
            else if(d < mn2.y){
                mn2.y = d;
            }
        }
    }
    vec3 col = vec3(0);


    mn2 = sqrt(mn2);

    col = z * hsv(hash21(mid*5.+3.+lid+HASH), 1., abs(sin(iTime+hash21(mid*5.+1.+lid+HASH)*4.+3.))*.02/(mn*mn));
    col += c * (1. - smoothstep(.0, .05, mn2.y - mn2.x));
    col *= smoothstep(.0, .05, mn2.y - mn2.x);

    return col;
}

vec3 layer(vec2 p, vec3 c, float z, float n){
    vec3 col = vec3(0);
    for(float i=0.;i<=2.1;i+=1.){
        col += voronoi(p, c*pow(3., i), z*pow(2., i), i);
    }
    return col;
}

mat3 setCamera(vec3 ro, vec3 tg, float cr){
	vec3 cw = normalize(tg-ro);
	vec3 cu = normalize(cross(cw,vec3(sin(cr), cos(cr), 0.0)));
	vec3 cv = cross(cu,cw);
    return mat3(cu, cv, cw);
}

void main(){
    float t = iTime;
    
    vec2 uv = 2.0 * (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);
    vec3 col = vec3(0);
    //---------------------------------------------------------------//

    vec3 ro, tg;
    if (vFix < .4){
        ro = vec3(0, 0, 0);
        tg = vec3(cos(t*.2), 0, sin(t*.2))*.5;
    }
    else{
        ro = vec3(0, 0, -1.);
        tg = vec3(0);
    }

    mat3 ca = setCamera(ro, tg, 0.);
    vec3 rd = ca * normalize(vec3(uv, 1.));

    vec3 p;
    vec2 d;
    float td;
    
    float box_size = 8.;

    float sel_p = hash(HASH*5.+1.);
    for(int i=0;i<50;++i){
        p = ro + td * rd;
        vec3 q = p;
        if(sel_p < 0.5){
            q.z = mod(q.z, 10.) - 5.;
            d = vec2(sphere(q, 1.5), SPHERE_ID);
        }
        else{
            q.xz = mod(q.xz, 5.) - 2.5;
            d = vec2(bar(q, .4), BAR_ID);
        }
        d = upU(d, vec2(-box(p, vec3(box_size,box_size,20.)), BOX_ID));
        td += d.x;
        if(d.x < EPS) break;
    }

    vec3 c = vec3(0);
    float m = hash(HASH*10.+1.);

    // if(m < 0.17) c.r = .8;
    // else if(m < 0.33) c.g = .8;
    // else if(m < 0.5) c.b = .8;
    // else if(m < 0.67) c.rg = vec2(.8);
    // else if(m < 0.83) c.rb = vec2(.8);
    // else c.gb = vec2(.8);

    if(m < 0.125) c.r = .8;
    else if(m < 0.25) c.g = .8;
    else if(m < 0.375) c.b = .8;
    else if(m < 0.5) c.rg = vec2(.8);
    else if(m < 0.625) c.rb = vec2(.8);
    else if(m < 0.75) c.gb = vec2(.8);
    else if(m < 0.875) c = vec3(.2);
    else c = vec3(1);

    vec3 c2 = 1. - c;
    
    if(hash(HASH * 15. + 1.) > .5){
        vec3 tmp = c;
        c = c2;
        c2 = tmp;
    }

    float nid = 2.;
    if(d.x < EPS){
        if(d.y <= BOX_ID){
            if(abs(p.z) >= 20. - EPS) {
                col += layer(p.xy*1.5, c, smoothstep(-box_size, box_size, p.y), nid);
            }
            else if(p.y >= box_size - EPS) {
                col += layer(p.xz*1.5, c, 1., nid);
            }
            else if(p.y <= -box_size + EPS){
                col += layer(p.xz*1.5, c, .1, nid);
            }
            else {
                col += layer(p.yz*1.5, c, smoothstep(-box_size, box_size, p.y), nid);
            }
            col *= smoothstep(.0, 8.0, length(uv)*.1+(5.+sin(t*.2-1.571)*5.));
        }
        else if(d.y <= BAR_ID){
            col += voronoi(p.xy * 8., c2, smoothstep(-box_size*.5, box_size, p.y)+.1, nid);
        }
        else {
            col += layer(p.xy * 8., c2, smoothstep(0., box_size*.5, p.y)+.1, nid);
        }
        
    }
    //---------------------------------------------------------------//
    
    
    if(Gc >= 0.4){
        col = pow(col, vec3(0.4545));
    }

    gl_FragColor = vec4(col, 1);
}