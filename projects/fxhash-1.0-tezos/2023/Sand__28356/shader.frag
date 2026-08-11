#version 300 es
precision highp float;
uniform sampler2D tx;
uniform sampler2D txRnd;
uniform sampler2D txRnd2;
uniform sampler2D txRnd3;
uniform float txRndRes;
uniform float frame;
uniform float shapeMode;
uniform float groundShapeMode;
uniform float colorMode;
uniform float groundSlopeMode;
uniform vec3 colorOffset;
uniform vec2 res;
uniform vec2 mouse;
uniform float mouseSand;
uniform vec2 resCanvas;

out vec4 o;

#define PI 3.141592653
#define tex(i,j) texture(tx,fract((gl_FragCoord.xy+vec2(i,j))/res))
#define texa(i,j) tex(i,j).a
#define isGround(v) (abs(v-.5)<.2) 
#define isSand(v) (abs(v-1.)<.1)
#define isEmpty(v) (v<.1)
#define col(c) (cos((c + colorOffset) * 2. * PI) * .5 + .5)

/* #define DEBUG */

// 0.0 is empty
// 0.5 is ground
// 1.0 is sand

int rnd(int x){
	ivec4 t = ivec4(texelFetch(txRnd,ivec2(x,x/int(txRndRes))%int(txRndRes),0)*255.);
	return t.x+t.y*256;
}

float rnd2D(vec2 uv){
	return texture(txRnd,uv).r;
}

// rule
vec2 rule(float l, float c, float r, float bl, float b, float br, int dy){
	bool windL= (rnd2D(vec2(frame*PI,(gl_FragCoord.y+float(dy))/res))<.3);
	bool windR= (rnd2D(vec2(frame*PI,(gl_FragCoord.y+float(dy))/res))>.7);
	/* bool windL = int(mod(frame+gl_FragCoord.y+float(dy),3.))==0; */
	/* bool windR = int(mod(frame+gl_FragCoord.y+float(dy),3.))==1; */
	bool leftIsCooler = mod(frame,4.) < 2.;
	bool rightIsCooler = mod(frame,4.) >= 2.;
	
	if(c<1.) return vec2(0);
	if(!windL && !windR) {
		if(b==0.) return vec2(0,-1);
		else return vec2(0);
	}
	else if(windR){
		if(b==0.){
			if(l==1. && leftIsCooler && bl > 0.) return vec2(0);
			else return vec2(0,-1);
		}
		else{
			if(br>0.) return vec2(0);
			else {
				if(r==1. && rightIsCooler) return vec2(0);
				else return vec2(1,-1);
			}
		}
	}
	else { // windL
		if(b==0.){
			if(r==1. && rightIsCooler && br > 0.) return vec2(0);
			else return vec2(0,-1);
		}
		else{
			if(bl>0.) return vec2(0);
			else {
				if(l==1. && leftIsCooler) return vec2(0);
				else return vec2(-1,-1);
			}
		}
	}
}


void main(){
	vec2 uv = gl_FragCoord.xy/res;

	// convert mouse from canvas space to texture space
	vec2 mouseTx = mouse;
	float resCanvasMin = min(resCanvas.y,resCanvas.x);
	mouseTx*=resCanvas/resCanvasMin;
	mouseTx-=resCanvas/resCanvasMin/2.-.5;
	mouseTx=fract(mouseTx);

	// ground
	if(isEmpty(texa(0,0)) || isGround(texa(0,0))){
		float g;
		vec4 grnd = texture(txRnd,vec2(0));
		vec2 guv = uv;
		if(groundSlopeMode==0.)guv.x+=guv.y;
		else if(groundSlopeMode==2.)guv.x-=guv.y;
		switch(int(groundShapeMode)){
			case 0:
				g = (
						texture(txRnd,guv).x*grnd.x*.2 +
						texture(txRnd2,guv).x*(1.-grnd.x*.2)
						);
				break;
			case 1:
				g = (
						texture(txRnd2,guv).x*(grnd.x*.5+.25) +
						texture(txRnd3,guv).x*(1.-(grnd.x*.5+.25))
						);
				break;
		}
		g=(g-.6)/.2;
		if(g > grnd.w){
			o.a=.4;
			if((g-grnd.w)/(1.-grnd.w)>2.2) // 2.66 max
				o.a=.6;
			return;
		}
	}

	// spawn grains if init frames or under pressed mouse)
	bool isUnderMouse = length(mouseTx-uv)<.04; // spawn spot size
	if(frame<2. || (mouseSand == 1. && isUnderMouse && isEmpty(texa(0,0)))){
		float sandShape;
		switch(int(shapeMode)){
			case 0: // circles
				sandShape = texture(txRnd,vec2(1,distance(uv,vec2(.5))*.1)).w*.1;
				break;
			case 1: // noise
				sandShape = texture(txRnd,uv*.2).w*.1;
				break;
			case 2: // vertical stripe
				sandShape = abs(uv.x-.5)*texture(txRnd,uv*.2).w*1.;
				break;
		}

		// .05 is level under which sand is spawned
		if(sandShape<.05 || (mouseSand == 1. && isUnderMouse)){
			o.a = 1.; // make sand
			// set color
			switch(int(colorMode)){
				case 0: // noise
					o.rgb = floor(texture(txRnd2,uv).rgb*8.)/8.;
					break;
				case 1: // horizontal monochrome
					o.rgb = vec3(floor(texture(txRnd3,uv.yy).r*8.)/8.);
					break;
				case 2: // horizontal colorful
					o.rgb = texture(txRnd,uv.yy*.2).rgb;
					break;
				case 3: // cosine color gradient
					o.rgb = col(uv.y);
					break;
			}
#ifdef DEBUG
			o.rgb = texture(txRnd,uv).rgb;
			o=step(.9999,o)*.8+.2;
#endif
			// add gems
			o.rgb=pow(o.rgb,vec3(.75));
			if(texture(txRnd,uv).a>.99)o.rgb = vec3(1);
		}
		return;
	}

	// remove sand
	if(isUnderMouse && mouseSand==-1.){
		return;
	}

	if(isSand(texa(0,0))){
		o=tex(0,0);
		float l = texa(-1,0);
		float c = texa(0,0);
		float r = texa(1,0);
		float bl = texa(-1,-1);
		float b = texa(0,-1);
		float br = texa(1,-1);
		vec2 v = rule(l,c,r,bl,b,br,0);
		if(v.x!=0. || v.y!=0.){
			o*=0.;
			return;
		}
	}
	else{
		for(int dx = -1; dx <= 1; dx++){
			int dy = 1;
			float l = texa(-1+dx,0+dy);
			float c = texa(0+dx,0+dy);
			float r = texa(1+dx,0+dy);
			float bl = texa(-1+dx,-1+dy);
			float b = texa(0+dx,-1+dy);
			float br = texa(1+dx,-1+dy);
			vec2 v = rule(l,c,r,bl,b,br,dy);
			if(int(v.x)+dx==0 && int(v.y)+dy==0){
				o=tex(dx,dy);
				return;
			}
		}
	}
}
