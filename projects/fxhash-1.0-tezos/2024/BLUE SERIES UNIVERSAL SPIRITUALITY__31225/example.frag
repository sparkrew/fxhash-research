#ifdef GL_ES
precision mediump float;
#endif

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;
uniform sampler2D tex0;
uniform float     uPal1;
uniform float     uPal2;
uniform float     uPal3;
uniform float     uLun1;
uniform float     uLun2;
uniform float     uDes1;
uniform float     uVis1;
uniform float     uVis2;
uniform float     uVis3;
uniform float     uVis4;
uniform float     uSpeed1;
uniform float     uSpeed2;
uniform float     uSpeed3;
uniform float     uLgh1;
uniform float     uLgh2;
uniform float     uLgh3;
uniform float     uLgh4;
uniform float     uLgh5;
uniform float     uLgh6;


#define resolution iResolution

#define MAP_OCTAVE 15

vec2 coord;

//#define font_size 10. 
#define font_spacing .07
vec2 caret_origin = vec2(0.3, .8);
vec2 caret;

#define STROKEWIDTH 0.05
#define PI 3.14159265359

#define A_ vec2(0.,0.)
#define B_ vec2(1.3,0.)
#define C_ vec2(3.5,0.5)

//#define D_ vec2(0.,1.)
#define E_ vec2(1.9,1.)
#define F_ vec2(2.,1.)

#define G_ vec2(0.4,1.8)
#define H_ vec2(1.8,2.)
#define I_ vec2(2.,2.)

#define J_ vec2(0.,3.)
//#define K_ vec2(1.,3.)
#define L_ vec2(1.7,3.3)

#define M_ vec2(0.2,4.)
#define N_ vec2(1.5,4.)
#define O_ vec2(2.,4.)

//#define P_ vec2(0.,5.)
//#define Q_ vec2(1.,5.)
//#define R_ vec2(1.,5.)

#define S_ vec2(0.,5.8)
//#define T_ vec2(1.,6.)
#define U_ vec2(2.3,6.)

#define A(p) t(G_,I_,p) + t(I_,O_,p) + t(O_,M_, p) + t(M_,J_,p) + t(J_,L_,p);caret.x += 1.0;
#define B(p) t(A_,M_,p) + t(M_,O_,p) + t(O_,I_, p) + t(I_,G_,p);caret.x += 1.0;
#define C(p) t(I_,G_,p) + t(G_,M_,p) + t(M_,O_,p);caret.x += 1.0;
#define D(p) t(C_,O_,p) + t(O_,M_,p) + t(M_,G_,p) + t(G_,I_,p);caret.x += 1.0;
#define E(p) t(O_,M_,p) + t(M_,G_,p) + t(G_,I_,p) + t(I_,L_,p) + t(L_,J_,p);caret.x += 0.4; caret.y -= .2;
#define F(p) t(C_,B_,p) + t(B_,N_,p) + t(G_,I_,p);caret.x += 3.0;caret.y -= .1;
#define G(p) t(O_,M_,p) + t(M_,G_,p) + t(G_,I_,p) + t(I_,U_,p) + t(U_,S_,p);caret.x += 1.4;
#define H(p) t(A_,M_,p) + t(G_,I_,p) + t(I_,O_,p);caret.x += 1.4;
#define I(p) t(E_,E_,p) + t(H_,N_,p);caret.x += 1.3;
#define J(p) t(E_,E_,p) + t(H_,T_,p) + t(T_,S_,p);caret.x += 1.0;
#define K(p) t(A_,M_,p) + t(M_,I_,p) + t(K_,O_,p);caret.x += 1.0;
#define L(p) t(B_,N_,p);caret.x += 1.0;
#define M(p) t(M_,G_,p) + t(G_,I_,p) + t(H_,N_,p) + t(I_,O_,p);caret.x += 1.0;
#define N(p) t(M_,G_,p) + t(G_,I_,p) + t(I_,O_,p);caret.x += 0.5; caret.y -= .2;
#define O(p) t(G_,I_,p) + t(I_,O_,p) + t(O_,M_, p) + t(M_,G_,p);caret.x += 1.0;
#define P(p) t(S_,G_,p) + t(G_,I_,p) + t(I_,O_,p) + t(O_,M_, p);caret.x += 1.0;
#define Q(p) t(U_,I_,p) + t(I_,G_,p) + t(G_,M_,p) + t(M_,O_, p);caret.x += 1.0;
#define R(p) t(M_,G_,p) + t(G_,I_,p);caret.x += .8;
#define S(p) t(I_,G_,p) + t(G_,J_,p) + t(J_,L_,p) + t(L_,O_,p) + t(O_,M_,p);caret.x += 1.0;
#define T(p) t(B_,N_,p) + t(N_,O_,p) + t(G_,I_,p);caret.x += 1.4;
#define U(p) t(G_,M_,p) + t(M_,O_,p) + t(O_,I_,p);caret.x += 1.0;
#define V(p) t(G_,J_,p) + t(J_,N_,p) + t(N_,L_,p) + t(L_,I_,p);caret.x += 1.0;
#define W(p) t(G_,M_,p) + t(M_,O_,p) + t(N_,H_,p) + t(O_,I_,p);caret.x += 1.0;
#define X(p) t(G_,O_,p) + t(I_,M_,p);caret.x += 1.0;
#define Y(p) t(G_,M_,p) + t(M_,O_,p) + t(I_,U_,p) + t(U_,S_,p);caret.x += 1.0;
#define Z(p) t(G_,I_,p) + t(I_,M_,p) + t(M_,O_,p);caret.x += 1.0;
#define STOP(p) t(N_,N_,p);caret.x += 1.0;


//-----------------------------------------------------------------------------------
float minimum_distance(vec2 v, vec2 w, vec2 p)
{	// Return minimum distance between line segment vw and point p
  	float l2 = (v.x - w.x)*(v.x - w.x) + (v.y - w.y)*(v.y - w.y); //length_squared(v, w);  // i.e. |w-v|^2 -  avoid a sqrt
  	if (l2 == 0.0) {
		return distance(p, v);   // v == w case
	}
	
	// Consider the line extending the segment, parameterized as v + t (w - v).
  	// We find projection of point p onto the line.  It falls where t = [(p-v) . (w-v)] / |w-v|^2
  	float t = dot(p - v, w - v) / l2;
  	if(t < 0.0) {
		// Beyond the 'v' end of the segment
		return distance(p, v);
	} else if (t > 1.0) {
		return distance(p, w);  // Beyond the 'w' end of the segment
	}
  	vec2 projection = v + t * (w - v);  // Projection falls on the segment
	return distance(p, projection);
}

//-----------------------------------------------------------------------------------
float textColor(vec2 from, vec2 to, vec2 p)
{
    if(iTime > 39.00) {
    // Define the font size animation
    float fontSize = 50.0;
    float animTime = (iTime - 39.00) * 8.0; // adjust the animation speed
    fontSize -= animTime;
    fontSize = clamp(fontSize, 10.0, 50.0);
    
    // Add a wave distortion to the text
    float waveAmplitude = .007;
    float waveFrequency = 4.0;
    float waveSpeed = 4.0;
    vec2 waveOffset = vec2(sin(iTime * waveSpeed + p.x * 30.1) * waveAmplitude, cos(iTime * waveSpeed + p.y * 30.1) * waveAmplitude);
    p += waveOffset;
    
	p *= fontSize;
	float inkNess = 0., nearLine, corner;
	nearLine = minimum_distance(from,to,p); // basic distance from segment, thanks http://glsl.heroku.com/e#6140.0
	inkNess += smoothstep(0., 1., 1.- 12.*(nearLine - STROKEWIDTH)); // ugly still
	inkNess += smoothstep(0., 2.5, 1.- (nearLine  + 7. * STROKEWIDTH)); // glow
	return inkNess;
    }
}

//-----------------------------------------------------------------------------------
vec2 grid(vec2 letterspace) 
{
	return ( vec2( (letterspace.x / 2.) * .65 , 1.0-((letterspace.y / 2.) * .95) ));
}

//-----------------------------------------------------------------------------------
float count = 0.0;
float gtime;
float t(vec2 from, vec2 to, vec2 p) 
{
	count++;
	if (count > gtime*9.0) return 0.0;
	return textColor(grid(from), grid(to), p);
}

//-----------------------------------------------------------------------------------
vec2 ru()
{
	vec2 pos = gl_FragCoord.xy/iResolution.xy;
	pos.y -= caret.y;
	pos.x -= font_spacing*caret.x;
	return pos;
}

//-----------------------------------------------------------------------------------
void _()
{
	caret.x += 1.2;
}

//-----------------------------------------------------------------------------------
void newline()
{
	caret.x = caret_origin.x;
	caret.y -= .18;
}

vec3 v01 = vec3(0.0, 0.0, 0.4);

vec4 egg = vec4(0, 0., 70., 9.);

vec2 csqr( vec2 a )  { return vec2( a.x*a.x - a.y*a.y, 2.*a.x*a.y ); }

float sphere(vec3 point, vec3 p, float r) {
    return distance(point, p) - r;
}

float noise(vec2 p) {
    return 0.1 + 1.5*cos(atan(p.x, p.y)*0.1 + 0.1*p.y + 0.5);
}

float map(vec3 point) {
    vec3 op = point.xyz;
    point.y += 4.;

    vec3 p1 = point.xyz;

    if (p1.y > egg.y) {
        p1.y /= 1.9;
    }
    
    if (iTime >= 39.0) {
        return 1000.0;
    }
    
    float result = sphere(p1, egg.xyz, egg.w);

    return result;
}

float mapp0(in vec3 p) {
    float res = 0.35;
    vec3 c = p;
    for (int i = 0; i < MAP_OCTAVE; ++i)
    {
        p =uDes1*abs(p)/dot(p,p) -.65;
        //p =(sin(iTime*0.35432)*2.7+1.5)*abs(p)/dot(p,p) -0.4 + sin(iTime*0.2443)*.3;
        p.yz += csqr(p.yz);
        p=p.zxy;
        res += exp(-6.0 * abs(dot(p,c)));
    }
    return res/2.;
}

vec3 raymarch( in vec3 ro, vec3 rd, vec2 tminmax )
{
    float t = tminmax.x;
    //float dt = .01;
    float dt = .07 - 0.200 *cos(iTime*2.8);//animated
    vec3 col= vec3(0.);
    float c = 0.;
    for( int i=0; i<64; i++ )
	{
        t+=dt*exp(-7.*c);
        if(t>tminmax.y)break;
                
        c = mapp0(ro+t*rd);               
        
        col = 1.*col + .08*vec3(c*0.85, c*.16, c*.02);//orange	
        //col = .99*col+ .08*vec3(c*c*c, c*c, c);//blue
    }    
    return col;
}

float rand(vec2 uv) {
 
    float a = dot(uv, vec2(52., 40.));
    float b = dot(uv, vec2(61., 22.));
    
    float x = sin(a) + cos(b) * 0.;
    return fract(x);
    
}

// Aggiungi una scia luminosa allo sfondo
float trailLength = 100.0; // lunghezza della scia
float trailSpeed = 5.0; // velocità della scia
vec3 trailColor = vec3(0.0, 0.0, 0.0); // colore della scia

vec2 thingPosition(float t, float aspect) {
    float tx = t / aspect;
    vec2 p = vec2(sin(uVis1 * tx) - cos(1.4 * tx), cos(uVis2 * t) + sin(-1.9 * t));
    p.y *= 14.2;
    p.x *= 35.4;
 	return p;
}

vec2 thingPosition1(float t, float aspect) {
    float tx = t / aspect;
    vec2 p = vec2(sin(5.2 * tx) - cos(uVis3 * tx), cos(0.3 * t) + sin(-uVis4 * t));
    p.y *= 14.2;
    p.x *= 35.4;
 	return p;
}

void main()
{
    // Sfondo
    vec2 p = 5.*(( gl_FragCoord.xy-.5* iResolution.xy )/iResolution.y)-.5 ;
    vec2 i = p;
    float c = 0.0;
    float r = length(p+vec2(sin(iTime),sin(iTime*.222+1.))*0.1);
    float d = length(p);
    float rot = d+iTime+p.x*.07; 
    for (float n = 0.0; n < 4.0; n++) {
        p *= mat2(cos(rot-sin(iTime/1.)), sin(rot), -sin(cos(rot)-iTime), cos(rot))*-0.15;
        float t = r-iTime/(n+1.0); //IMPOSTA VELOCITà SFONDO
        i -= p + vec2(cos(t - i.x-r) + sin(t + i.y),sin(t - i.y) + cos(t + i.x)+r);
        c += 1.0/length(vec2((sin(i.x+t)/.20), (cos(i.y+t)/.15)));
    }
    c /= 3.0;
    // INDACO
    //vec3 coloreSfondo = vec3(c) * vec3(3.0, 2., 7.) - 0.35;
    // BLU
    vec3 coloreSfondo = vec3(c) * vec3(0.0, 1.5, 7.5) - 0.01;
  
    if (iTime > 39.00) {
        float time = (iTime - 39.00);
        gtime = time;

        float du = .0;
	
        caret = caret_origin;

        // IN THE RIGHT
        du += I(ru()); du += N(ru()); _();
        du += T(ru()); du += H(ru()); du += E(ru()); _();
        du += R(ru()); du += I(ru()); du += G(ru()); du += H(ru()); du += T(ru());
        du = clamp(du* (1.3+sin(gl_FragCoord.x*PI*0.85-time*2.5)*1.), 0.0, 1.0);
    
        vec3 textColor = vec3(du*0.0, du*0.7, du*0.1);
    
        coloreSfondo += textColor;
    }
    
    // Calculate the distance from the center of the trail effect
    float dist = length(p);

    // Check if the current pixel is within the desired area for the trail effect
    if (dist < 0.2) {
        if (iTime > 10.00 && iTime < 38.50) {
        // Scia 1
        float trailRadius1 = 0.0001 + (sin(iTime * 0.1) + 2.0) * uLgh1;
        vec2 trailPos1 = vec2(sin(iTime * 5.), cos(iTime * 5.)) * trailRadius1;
        float trailDist1 = length(p - trailPos1); // distance from trail position
        float trailIntensity1 = smoothstep(uLgh6, 0.0002, trailDist1); // trail intensity
        float t1 = fract(sin(iTime * 0.00001) * 43758.5453);
        vec3 trailColor1 = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), t1); // blu-viola
        trailColor1 = mix(trailColor1, vec3(1.0, 0.0, 1.0), t1);

        // Scia 2
        float trailRadius2 = 0.0002 + (sin(iTime * 0.2) + 1.5) * uLgh3;
        vec2 trailPos2 = vec2(sin(iTime * 3.), cos(iTime * 3.)) * trailRadius2;
        float trailDist2 = length(p - trailPos2); // distance from trail position
        float trailIntensity2 = smoothstep(uLgh4, 0.0002, trailDist2); // trail intensity
        float t2 = fract(sin(iTime * 0.00002) * 43758.5453);
        vec3 trailColor2 = mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 1.0, 0.0), t2); // verde-blu
        trailColor2 = mix(trailColor2, vec3(uPal2, uPal1, uPal3), t2);

        // Scia 3
        float trailRadius3 = 0.0003 + (sin(iTime * 0.3) + 1.0) * uLgh3;
        vec2 trailPos3 = vec2(sin(iTime * 2.), cos(iTime * 2.)) * trailRadius3;
        float trailDist3 = length(p - trailPos3); // distance from trail position
        float trailIntensity3 = smoothstep(uLgh2, 0.0002, trailDist3); // trail intensity
        float t3 = fract(sin(iTime * 0.00003) * 43758.5453);
        vec3 trailColor3 = mix(vec3(1.0, uPal3, 0.0), vec3(uPal1, uPal2, 0.0), t3); // giallo-arancione
        trailColor3 = mix(trailColor3, vec3(uPal2, 0.0, 0.0), t3);

        // Scia 4
        float trailRadius4 = 0.0004 + (sin(iTime * 0.4) + 0.6) * uLgh5;
        vec2 trailPos4 = vec2(sin(iTime * 4.), cos(iTime * 4.)) * trailRadius4;
        float trailDist4 = length(p - trailPos4); // distance from trail position
        float trailIntensity4 = smoothstep(uLgh2, 0.0002, trailDist4); // trail intensity
        float t4 = fract(sin(iTime * 0.00004) * 43758.5453);
        vec3 trailColor4 = mix(vec3(uPal1, uPal2, 0.0), vec3(1.0, uPal3, uPal2), t4); // giallo
        trailColor4 = mix(trailColor4, vec3(1.0, 1.0, 0.0), t4);

        vec2 uv = 40.*(( gl_FragCoord.xy-.5* iResolution.xy )/iResolution.y)-.5;
        float aspect = iResolution.x / iResolution.y;
        uv.x *= aspect;
        vec3 cFinal = vec3(0.0);
    
        vec3 color1 = vec3(uPal1, 5.0, uPal3);
        vec3 color2 = vec3(0.8, uPal2, 8.2);
        const float radius = 0.002;
        float tailLength = uLun1;
        const float edgeWidth = 0.503;
        for (int j = 0; j < 3; j++) {
            float thisRadius = radius + sin(float(j) * 2.7 + iTime * 1.2) * .102;
            float dMin = 5.0;
            const int iMax = 10;
            for (int i = 0; i < iMax; i++) {
                float iPct = float(i) / float(iMax);
                float segmentDistance = length(thingPosition(iTime * uSpeed2 + float(j) * 1.5 - iPct * tailLength, aspect) - uv);
                dMin = min(dMin, segmentDistance + pow(iPct, 0.8) * (thisRadius + edgeWidth));
            }
            cFinal += 5.0 * (1.0 - smoothstep(thisRadius, thisRadius + edgeWidth, dMin)) * mix(color1, color2, mod(float(j), 2.0));
        }
        
        vec3 cFinal1 = vec3(0.0);
    
        vec3 color3 = vec3(uPal2, uPal2, 0.);
        vec3 color4 = vec3(uPal3, 5.8, 2.2);
        const float radius1 = 0.002;
        float tailLength1 = 0.5;
        const float edgeWidth1 = 1.5;
        for (int j = 0; j < 3; j++) {
            float thisRadius1 = radius1 + sin(float(j) * 2.7 + iTime * 1.2) * .902;
            float dMin1 = 10.0;
            const int iMax1 = 20;
            for (int i = 0; i < iMax1; i++) {
                float iPct1 = float(i) / float(iMax1);
                float segmentDistance1 = length(thingPosition1(iTime * uSpeed3 + float(j) * 1.5 - iPct1 * tailLength1, aspect) - uv);
                dMin1 = min(dMin1, segmentDistance1 + pow(iPct1, 0.8) * (thisRadius1 + edgeWidth1));
            }
            cFinal1 += 5.0 * (1.0 - smoothstep(thisRadius1, thisRadius1 + edgeWidth1, dMin1)) * mix(color4, color3, mod(float(j), 2.0));
        }

        coloreSfondo += trailIntensity1 * trailColor1;
        coloreSfondo += trailIntensity2 * trailColor2;
        coloreSfondo += trailIntensity3 * trailColor3;
        coloreSfondo += trailIntensity4 * trailColor4;
        coloreSfondo += cFinal;
        coloreSfondo += cFinal1;
    }
    }
    
    if(iTime > 8.00) {
    vec2 uv = (2.*vec2(gl_FragCoord.x, gl_FragCoord.y) - iResolution.xy) / iResolution.x;
      
    // Aggiungi una traslazione casuale all'uovo
    vec3 eggOffset = vec3(
        sin(iTime * 0.3) * 25.0,
        cos(iTime * 0.3) * 5.0,
        sin(iTime * 0.3) * 3.0
    );
    vec4 egg = vec4(0, 0, 70, 9) + vec4(eggOffset, 0);
    //vec4 egg = vec4(0, 0, 70., 7.);

    // Aggiungi una rotazione casuale intorno all'asse Y
    float eggAngleY = iTime * 0.5;
    mat3 eggRotY = mat3(
        cos(eggAngleY), 0.0, sin(eggAngleY),
        0.0, 0.5, 0.0,
        -sin(eggAngleY), 0.0, cos(eggAngleY)
    );

    // Angoli di rotazione (in radianti)
    //float angleX = sin(iTime * 0.8) * 0.8; // regola la velocità di rotazione intorno all'asse X
    float angleX = iTime * uSpeed1;
    float angleY = iTime * uSpeed1; // regola la velocità di rotazione intorno all'asse Y

    // Matrice di rotazione intorno all'asse X
    mat3 rotX = mat3(
        1.0, 0.0, 0.0,
        0.0, cos(angleX), -sin(angleX),
        0.0, sin(angleX), cos(angleX)
    );

    // Matrice di rotazione intorno all'asse Y
    mat3 rotY = mat3(
        cos(angleY), 0.0, sin(angleY),
        0.0, 1.0, 0.0,
        -sin(angleY), 0.0, cos(angleY)
    );

    // Combinazione delle matrici di rotazione
    mat3 rotXY = rotY * rotX;

    vec3 rayD = normalize(vec3(uv, 1.3));
    

    float marched = 0.01, di, far = distance(egg.xyz, vec3(1, 0, -1)) + egg.w*2.;
    vec3 pi;

    for (int i = 0; i < 50; ++i) {
        pi = vec3(1, 0, 0) + rayD*marched;
        // Applica la rotazione al punto p
        pi = rotXY * (pi - egg.xyz) + egg.xyz;
        di = map(pi);
        marched += di;

        if (abs(di) < 0.1 || di > far) break;
    }

    if (marched < far) {
    vec3 normal = normalize(vec3(
        map(pi + v01.zxx),
        map(pi + v01.xzx),
        map(pi + v01.xxz)
    ));
    
    // Calculate color using raymarch
    vec3 ro = pi;
    vec3 rd = normalize(v01);
    vec2 tminmax = vec2(0.0, 10.0);
    vec3 eggColor = raymarch(ro, rd, tminmax) + 0.1;
      
    vec3 diss = eggColor;
    
    if (iTime > 32.0) {
    
    vec3 heightmap = texture2D(tex0, uv).rrr;
    
    float g = fract(-iTime*.1);
    vec3 erosion = smoothstep(g-.3, g, heightmap);
    
    vec3 border = smoothstep(0., .1, erosion) - smoothstep(.1, 1., erosion);
    
    diss = (1.-erosion)*eggColor + erosion*coloreSfondo;
    
    vec3 leadcol = vec3(1., .5, .1);
    vec3 trailcol = vec3(0.2, .4, 1.);
    vec3 fire = mix(leadcol, trailcol, smoothstep(0.8, 1., border))*2.;
    
    diss += border*fire;
    }
      
      // Add subtle white light effect on the right side
    vec3 lightDir = normalize(vec3(1.0, 0.1, 0.0)); // light direction (from the right)
    float lightAmount = max(0.0, dot(lightDir, normal)); // light amount
    float gradient = smoothstep(0.8, 1.0, lightAmount); // gradient along the right edge
    diss += gradient * vec3(1.0) * 0.5;
    
    // Add subtle white light effect on the right side
    vec3 lightDir1 = normalize(vec3(-1.0, 0.1, 0.0)); // light direction (from the right)
    float lightAmount1 = max(0.0, dot(lightDir1, normal)); // light amount
    float gradient1 = smoothstep(0.6, 1.0, lightAmount1); // gradient along the right edge
    diss += gradient1 * vec3(1.0) * 0.5;

    // Output final color with transparency
    gl_FragColor = vec4(diss, 1.0);
    } else {
        gl_FragColor = vec4(coloreSfondo, 1.0);
    }
    } else {
        gl_FragColor = vec4(coloreSfondo, 1.0);
    }
}