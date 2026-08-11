function createVertexShader(vertexShader) { 
    let retVertexShader = `
    attribute float idx;
    uniform float time;
    uniform float npoints;
    
    varying float index;
    varying vec3 pos;
	varying vec2 vUv;
    ${shader_noise}
    ${shader_utils}
    ${shader_draw}
    ` + vertexShader;
    return retVertexShader.replace(
        '#include <project_vertex>',
        `

        vec4 mvPosition = vec4( transformed, 1.0 );
        mat4 rotIM = instanceMatrix;
        vUv = uv;
       
        index = idx;
        pos = vec3((random(index)-0.5) * 2., (random(index+10000.)-0.5) * 2., (random(index+100000.)-0.5) * 2.) ;
        //pos += snoise(pos)*0.3;
        rotIM *= transMat(pos*amp);
        mvPosition.x = snoise(pos*10.+mvPosition.y*0.05)*4.; 
        mvPosition.y = snoise(pos*10.+mvPosition.x*0.05)*60.;
        //mvPosition.z = 0.2; // snoise(pos*10.+mvPosition.z*0.3);
        //mvPosition.w = 0.1;
        mvPosition = rotIM * mvPosition;
        mvPosition = modelViewMatrix * mvPosition;
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
        uniform float npoints;
        varying float index;
        varying vec3 pos;
        varying vec2 vUv;
    ` + fragmentShader;
    return retFragmentShader.replace(
        '#include <color_fragment>',
        `
        float hue = 0.8*random(pos) + snoise(vec3(vUv, 1.0)*${fxrand()})*0.2;
        vec3 col = hsv2rgb(vec3(hue, 1.0, 1.0));
        diffuseColor = vec4(col,1.0);
        `
    );
}
