function createVertexShader(vertexShader) { 
    let retVertexShader = `
    attribute float idx;
    uniform float time;
    uniform float rtime;
    uniform int npoints;
    uniform int side;
    uniform int mode;
    uniform float rm;
    uniform float zoom;
    
    varying float index;
    varying vec3 pos;
    varying vec3 opos;
	varying vec2 vUv;
    varying vec3 oNormal;
    varying vec3 vNormal;
    ${shader_noise}
    ${shader_utils}
    ${shader_draw}
    ` + vertexShader;
    retVertexShader = retVertexShader.replace('#include <defaultnormal_vertex>', '')
    retVertexShader = retVertexShader.replace('#include <normal_vertex>', '')
    return retVertexShader.replace(
        '#include <project_vertex>',
        `
        vec4 mvPosition = vec4( transformed, 1.0 );
        mat4 rotIM = instanceMatrix;
        vUv = uv;
        float a = 70.;
        index = idx;
        int indx = int(idx);
        if (mode == 0) {
            int x = indx % side;
            int y = (indx / side) %  side;
            int z = (indx / (side*side));
            float size = (a/float(side));
            pos = vec3(x,z,y)/float(side);
            opos = pos;
            pos *= a;
            pos -= a/2. -  size/2.;
        } else if (mode == 1) {
            float r = 1.-(abs(((idx/float(npoints)))-0.5) * 2.);
            float fr = ${fxrand()*100+10};
            pos = vec3(
                (sin(idx/float(npoints)*PI2*fr)*0.5 + 0.5)*r + (1.-r)/2.,
                (cos(idx/float(npoints)*PI2*fr)*0.5 + 0.5)*r + (1.-r)/2.,
                idx/float(npoints)
            );
            float grd = ${fxrand()*10+2.0};
            float dif = a - a/grd;
            pos = floor(pos*(a/grd))/(a/grd);
            pos += (1./(a/grd))/2.;
            opos = pos;
            pos *= a;
            pos -= a/2.;//  - (a/grd)/2.;
        } else if (mode == 2) {
            int x = indx % side;
            int y = (indx / side) %  side;
            int z = (indx / (side*side));
            float size = (a/float(side));
            pos = vec3(
                snoise(vec3(x,y,z)*${fxrand()})*0.5+0.5,
                snoise(vec3(z,x,y)*${fxrand()})*0.5+0.5,
                snoise(vec3(y,z,x)*${fxrand()})*0.5+0.5
            );
            pos = floor(pos*(float(side)/1.5))/(float(side)/1.5);
            opos = pos;
            pos *= a;
            pos -= a/2.;
        }
        float movement = 1. + zoom * abs(snoise(floor(pos*${Math.pow(fxrand(),10)*100})));
        float rotPeriod = sin(time*0.001/2.);
		vec3 oposf = floor(opos/(${Math.pow(fxrand(),10)*12.})); 
        
        float scaleMotion;
        //float rm = float(${fxrand()});
        float gn = ${fxrand()*100};
        float oposg;
        float rtimem = rtime*0.0001;
        float nm = 10.;
        //rm = 1.;
        if (rm <= 1./nm)
            scaleMotion = (abs(snoise(opos*${fxrand()*10}+rtimem))*0.8+0.2);
        else if (rm <= 2./nm) 
            scaleMotion = abs(sin(rtimem*(1.+random(opos+100.)*0.2)))*0.9;
        else if (rm <= 3./nm) {
            scaleMotion = (abs(snoise(floor(opos*${fxrand()*30.})*${fxrand()*10}+rtimem))*0.8+0.2);
        } else if (rm <= 4./nm) {
            oposg = floor(index/float(npoints) * gn)/gn;
            scaleMotion = sin(rtimem - (abs((oposg-0.5)*${fxrand()*20.})))*0.5 + 0.5;
        } else if (rm <= 5./nm) {
            oposg = floor(random(index) * gn)/gn;
            scaleMotion = sin(rtimem - (abs((oposg-0.5)*${fxrand()*20.})))*0.5 + 0.5;
        } else if (rm <= 6./nm) 
            scaleMotion = sin(rtimem - (abs(opos.x+opos.y+opos.z)/3.-0.5)*${fxrand()*20.})*0.5 + 0.5;
        else if (rm <= 7./nm) 
            scaleMotion = sin(rtimem - (abs(snoise(opos*${fxrand()*0.5}+rtimem*0.1)*0.5))*${fxrand()*20.})*0.5 + 0.5;
        else if (rm <= 8./nm) 
            scaleMotion = pow(mod(rtimem+(1.-distance(opos-vec3(${1-fxrand()}, ${1-fxrand()}, ${1-fxrand()}), vec3(0.0))), 1.), ${fxrand()*1.3});
        else if (rm <= 9./nm) 
            scaleMotion = 1.-mod(rtimem+abs(((opos.x+opos.y+opos.z)/3. - 0.5) * 2. ), 1.0);
        else if (rm <= 10./nm) 
            scaleMotion = (abs(((opos.x+opos.y+opos.z)/3.-0.5)*0.5 + sin(rtimem)*0.5));
        
        float scale = pow((0.5+0.5*(sin(time*0.008*(random(index)*0.1))*0.5 + 0.5)), ${fxrand()})*scaleMotion;

        rotIM *= transMat(pos*movement); 
        rotIM *= scaleMat(((a*0.8)/vec3(float(side))) * scale);

        float mwait = 16000.;
        float trot = mwait/8.;
		float turn = clamp(mod(time+trot*3., mwait)/trot, 0., 1.);
		float turny = clamp(mod(time+trot, mwait)/trot, 0., 1.);
		float turnt = floor((time+trot*3.) / mwait);
		float turnyt = floor((time+trot) / mwait);
	    rotIM *= rotX(PI/pow(floor(random(index)*2.+1.), 2.) * ((pow(turn, snoise(opos*1.)*0.5+1.95))+turnt)); 
	    rotIM *= rotZ(PI/pow(floor(random(index+100.)*2.+1.), 2.) * ((pow(turny, snoise(opos*1.)*0.5+1.95))+turnyt)); 
        
        mvPosition = rotIM * mvPosition;
        mvPosition = modelViewMatrix * mvPosition;
	    
        mat3 m = mat3( rotIM );
        vec3 transformedNormal = objectNormal;
    	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	    transformedNormal = m * transformedNormal;
	    transformedNormal = normalMatrix * transformedNormal;

	    vNormal = normalize( transformedNormal );
        oNormal = normalize(objectNormal);
        gl_Position = projectionMatrix * mvPosition;
        `
    );
}

function createFragmentShader(fragmentShader) {
    let retFragmentShader = `
        ${shader_noise}
        ${shader_utils}
        ${pal}
        uniform float time;
        uniform int npoints;
        uniform int color_mode;
        uniform float maincolor;
        varying float index;
        varying vec3 pos;
        varying vec3 opos;
        varying vec2 vUv;
        varying vec3 oNormal;
		uniform float zoom;
    ` + fragmentShader;
    return retFragmentShader.replace(
        '#include <color_fragment>',
        `
        float hue = abs(maincolor+0.00003);//*distance(pos.xz, vec2(0)));
        float r = 10.;//random(opos.xyz)*0.8;
        float rr = random(vec3(10.,30.,50.)+opos.xyz);
		vec2 uuv = vUv*zoom;
        float sat = 1. - random(300.+index)*0.5;
        float bri = 1.;
		//int mode = ${Math.floor(fxrand()*2.1)};
		if (color_mode == 0) {
       		if (rr <= 1./3.)
				hue = mod(hue * 360. + 90., 360.) / 360.; 
	       	else if (rr <= 2./3.)
		        hue = mod(hue * 360. - 90., 360.) / 360.; 
		} else if (color_mode == 1) {
				if (rr <= 1./2.) hue = mod(hue * 360. + 180. + 120., 360.) / 360.;
				else hue = mod(hue * 360. + 180. - 120., 360.) / 360.;
		} else if (color_mode == 2) {
                sat = 0.;
                if (rr <= 1./2.) bri = 0.12;
        }
        float rrr = random(1000.+opos.xz);
        vec3 col = hsv2rgb(vec3(hue, sat, bri)); // - random(vec3(vUv,0.)+index)*0.03;
        diffuseColor = vec4(col,1.0);
        `
    );
}
