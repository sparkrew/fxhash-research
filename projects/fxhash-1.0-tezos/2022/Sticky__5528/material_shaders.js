var axis =fxrand()*4; // fxrand()*3;
var distaxis = fxrand()*4;
function createVertexShader(vertexShader) { 
    let retVertexShader = `
    attribute float idx;
    uniform float time;
    uniform float npoints;
    
    varying float index;
    varying vec3 pos;
	varying vec2 vUv;
    varying vec3 realpos;
    ${shader_noise}
    ${shader_utils}
    ${shader_draw}
    ` + vertexShader;
    return retVertexShader.replace(
        '#include <project_vertex>',
        `
        index = idx;
        //float offset = time*0.0001;//*random(idx+1203.);
        //vec3 offset = vec3(time*0.0001);
        vec3 sins = vec3(sin(time*0.001), cos(time*0.001), 0.0); //snoise(vec3(time*0.0002,0.,0.)));
        vec3 offset = vec3(0.);//vec3(cos(time*0.0001), sin(time*0.0001), cos(time*0.0001*0.5))*0.5 + 0.5;
        pos = position;
        float timeoff = time*0.0001;
        //timeoff = pow(timeoff, random(index)*0.6+0.4);
        timeoff = clamp(timeoff, 0.0, 1.0);
        float p = 2.0 * timeoff * timeoff;
        timeoff = timeoff < 0.5 ? p : -p + (4.0 * timeoff) - 1.0;
        timeoff = clamp(timeoff, 0.0, 1.0);
        ` + (
            distaxis >= 1 ? `pos.x = (pos.x+0.5)*timeoff - 0.5;` :
                            `pos.x = (pos.x)*timeoff;`
        ) + `
        
        //pos.x = clamp(pos.x, -0.5, 0.5);
        vec3 initp;
        initp = ` + (
            axis >= 3 ? `vec3(sin(idx/npoints*PI2)*(pos.x+0.5)/2., cos(idx/npoints*PI2)*(pos.x+0.5)/2., random(idx)-0.5);` : 
            axis >= 2 ? `vec3(random(idx+1023.)-0.5, pos.x, random(idx+1023123.)-0.5);`:
            axis >= 1 ? `vec3(pos.x, random(idx+1023.)-0.5, random(idx+1023123.)-0.5);` :
                        `vec3(random(idx+1023.)-0.5, random(idx+1023123.)-0.5, pos.x);`
        ) + `

        float distaxis = transformed.` + (
            distaxis >= 3 ? `x + 0.5;` : 
            distaxis >= 2 ? `y + 0.5;` :
            distaxis >= 1 ? `z + 0.5;` :
                            `x;distaxis=0.;`
        ) + `
        transformed = initp;
        ` + ( fxrand() > 0.5 ? `
        transformed.x += snoise(10.+transformed*${fxrand()*4})*random(index)*(distaxis)*0.25;
        transformed.y += snoise(10.+transformed.zxy*${fxrand()*4})*random(index)*(distaxis)*0.25;
        transformed.z += snoise(10.+transformed.yzx*${fxrand()*4})*random(index)*(distaxis)*0.25;
        ` : `
        transformed.x += snoise(10.+transformed*${fxrand()*4})*snoise(vec3(index*0.01))*(distaxis)*0.25;
        transformed.y += snoise(10.+transformed.zxy*${fxrand()*4})*snoise(vec3(index*0.01))*(distaxis)*0.25;
        transformed.z += snoise(10.+transformed.yzx*${fxrand()*4})*snoise(vec3(index*0.01))*(distaxis)*0.25;
        `) + `
        realpos = transformed;

        vec4 mvPosition = vec4( transformed*amp, 1.0 );
        vUv = uv;
        mvPosition = modelViewMatrix * mvPosition;
        gl_PointSize = random(index+position.x)*30.;
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
        varying vec3 realpos;
    ` + fragmentShader;
    return retFragmentShader.replace(
        '#include <color_fragment>',
        `
        float hue = 0.8*snoise(vec3(index*${fxrand()*0.0001})) + snoise(vec3(pos.x*${fxrand()},index*0.1,0.0)*${fxrand()})*0.2;
        vec3 col = hsv2rgb(vec3(hue, snoise(vec3(index*0.0001)+123120.), snoise(vec3(index*0.0001)+10239.)));
        diffuseColor = vec4(col,1.0) - random(realpos)*0.2;
        `
    );
}
