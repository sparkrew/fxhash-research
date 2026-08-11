precision mediump float;

varying vec2 vuv;

uniform float rand[64];

uniform float time;

uniform vec2 iResolution;

float lpnorm(vec3 p, float s) {
    return pow(
        (
         pow(abs(p.x),s)+
         pow(abs(p.y),s)+
         pow(abs(p.z),s)), 
        1.0/s);
}

float R(void){
	return 1.0;
}

void main() {
	vec2 uv = vuv;
	uv -= 0.5;
	uv *= 5.0+15.0*R();
	uv.x *= (iResolution.x / iResolution.y);

	float r1 = R()*3.14159265*0.5;
	float r2 = R()*3.14159265*0.5;
	float r3 = R()*3.14159265*0.5;
	float r4 = R()*3.14159265*0.5;
	float r5 = R()*3.14159265*0.5;

	mat2 m1 = mat2(cos(r1), -sin(r1), sin(r1), cos(r1));
	mat2 m2 = mat2(cos(r2), -sin(r2), sin(r2), cos(r2));
	mat2 m3 = mat2(cos(r3), -sin(r3), sin(r3), cos(r3));
	mat2 m4 = mat2(cos(r4), -sin(r4), sin(r4), cos(r4));
	mat2 m5 = mat2(cos(r5), -sin(r5), sin(r5), cos(r5));

	float d1 = lpnorm(vec3(m1*uv*(vec2(R(), R())+0.5) + vec2(R(), R())*2.0-1.0, R()*0.5), 0.3+R()*2.0)-R();
	float d2 = lpnorm(vec3(m2*uv*(vec2(R(), R())+0.5) + vec2(R(), R())*2.0-1.0, R()*0.5), 0.3+R()*2.0)-R();
	float d3 = lpnorm(vec3(m3*uv*(vec2(R(), R())+0.5) + vec2(R(), R())*2.0-1.0, R()*0.5), 0.3+R()*2.0)-R();
	float d4 = lpnorm(vec3(m4*uv*(vec2(R(), R())+0.5) + vec2(R(), R())*2.0-1.0, R()*0.5), 0.3+R()*2.0)-R();
	float d5 = lpnorm(vec3(m5*uv*(vec2(R(), R())+0.5) + vec2(R(), R())*2.0-1.0, R()*0.5), 0.3+R()*2.0)-R();

	float d = min(d1, min(d2, min(d3,min(d4, d5)))) - 0.2*R();

	float t = cos(d * 10.0 * R()-time*(1.0+4.0*R()))*0.5 + 0.5;
	t = t*t;
	float t2 = cos(d * 50.0 * R()+time*(1.0+4.0*R()))*0.5 + 0.5;
	t2 = t2;

	vec3 col_1 = vec3(R(), R(), R());
	vec3 col_2 = vec3(R(), R(), R());
	vec3 col_3 = vec3(R(), R(), R());

	vec3 col = mix(col_1, vec3(R()>0.5?0.0:1.0), t);
	col = mix(col, mix(col_2, col_3, t2), d*d);
	col = mix(col, R()>0.5?vec3(0.0):vec3(1.0), clamp((d>0.0)?d*0.3:0.0, 0.0, 1.0));

	gl_FragColor = vec4(col.rgb, 1.0);
}

