const frag = `
	precision highp float;

	uniform vec2 u_resolution;
	uniform vec2 u_mouse;
	uniform float u_time;
	uniform vec3 u_lightDir;
	uniform vec3 u_col;
	uniform mat3 uNormalMatrix;
	uniform float u_pixelDensity;
	uniform sampler2D u_tex;
	uniform sampler2D u_tex2;

	//attributes, in
	varying vec4 var_centerGlPosition;
	varying vec3 var_vertNormal;
	varying vec2 var_vertTexCoord;

	${frag_functions_default}

	void main(){
		vec2 st = var_vertTexCoord.xy /u_resolution.xy;
		vec2 distorted_st = st; 
		vec2 distorted_st2 = st; 
		// color*=1.-d;
		distorted_st.x+= rand(st)*0.01+ cnoise(vec3(0.1,distorted_st*200.))*0.05;
		distorted_st.y+= rand(st)*0.01+cnoise(vec3(0.1,distorted_st*20.))*0.05;
		 
		distorted_st.x+= cnoise(vec3(0.1,distorted_st*400.))*0.04;
		distorted_st.y+= cnoise(vec3(0.1,distorted_st*400.))*0.04;
		distorted_st.x+= cnoise(vec3(0.1,distorted_st*100.))*0.02;
		distorted_st.y+= cnoise(vec3(0.1,distorted_st*300.))*0.02;
		distorted_st.x+= cnoise(vec3(0.1,distorted_st*50.))*0.03;
		distorted_st.y+= cnoise(vec3(0.1,distorted_st*20.))*0.03;
		distorted_st.x+= cnoise(vec3(0.1,distorted_st*3.))*0.05;
		distorted_st.y+= cnoise(vec3(0.1,distorted_st*1.))*0.05;
		
		distorted_st2.x+= cnoise(vec3(0.1,distorted_st2*400.))*0.01;
		distorted_st2.y+= cnoise(vec3(0.1,distorted_st2*400.))*0.01;
		
		
		vec4 color1 = texture2D(u_tex,distorted_st );
		color1.r =  texture2D(u_tex,distorted_st ).r;
		color1.g =  texture2D(u_tex,distorted_st*vec2(1.02,1.) ).g;
		color1.b =  texture2D(u_tex,distorted_st*vec2(1.04,1.) ).b;
		vec4 color2 = texture2D(u_tex2,distorted_st2);
		
		color1*=cnoise(vec3(0.1,distorted_st*500.))*0.01+0.99;
		color2*=cnoise(vec3(0.1,distorted_st*500.))*0.01+0.99;
		gl_FragColor= vec4(color1+color2);
	}
`



