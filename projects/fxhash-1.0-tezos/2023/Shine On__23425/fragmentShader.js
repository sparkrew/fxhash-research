function prepare(el) {
    el.rotation.toRadians()
    el.rotation.toStrings()
    el.position.toStrings()
    el.scale.toStrings()
    return el;
}

function getElementSdfCode(el, varName) {
    if (varName) varName = `float ${varName} = `
    else varName = `newVal = `
    return `
            // --- ${el.type} ---
            relativePosition = opTx(pos, vec3(${el.position.x}, ${el.position.y}, ${el.position.z}), vec3(${el.rotation.x}, ${el.rotation.y}, ${el.rotation.z}));
            scale = vec3(${el.scale.x}, ${el.scale.y}, ${el.scale.z});
            ${varName}${shapeFunctions[el.type]};
            `
}

function elementsShaderCode() {
    let res = ` vec3 result = vec3(1000.0, 0.0, 0.0);
                float newVal;
                float is_window = 0.0;
                vec3 position, rotation, relativePosition, scale;`

    groups.forEach((group, groupIndex) => {
        const boundingBox = group.boundingBox()
        res += `
            // --- Bounding Box ---
            ${getElementSdfCode(boundingBox, `boundingBox${groupIndex}`)}
            if (boundingBox${groupIndex} < result.x) {
        `

        res += `float val${groupIndex} = 1000.0;`
        group.elements.forEach(el => {
            res += getElementSdfCode(prepare(el))

            if (el.data.includes('round')) res += `newVal = newVal - 2.0;`

            if (el.data.includes('subtract')) res += `val${groupIndex} = opSubtraction(val${groupIndex}, newVal);`
            else if (el.data.includes('smoothUnion')) res += `val${groupIndex} = opSmoothUnion(val${groupIndex}, newVal, maxInVec(scale));`
            else if (el.data.includes('smoothSubtract')) res += `val${groupIndex} = opSmoothSubtraction(val${groupIndex}, newVal, maxInVec(scale));`
            else res += `val${groupIndex} = min(val${groupIndex}, newVal);`
        })
        res += `
            result = min_x(result, vec3(val${groupIndex}, ${group.data == 'window' ? '1.0' : '0.0'}, 0.0));
        }`
    })

    res += '// --- Room ---'
    room.forEach((roomPlane, roomPlaneIndex) => {
        roomPlane.normal.normalize().toStrings()
        roomPlane.distance = roomPlane.distance.toFixed(2)
        res += `
            newVal = plane(pos, vec3(${roomPlane.normal.x}, ${roomPlane.normal.y}, ${roomPlane.normal.z}), ${roomPlane.distance});
            result = min_x(result, vec3(newVal,${roomPlaneIndex == 0 ? '1.0' : '0.0'},0.0));
        `
    })

    res += `return result;`
    return res
}

function windowsSdfCode() {
    let res = `float res = 1000.0;
               float newVal;
               vec2 relativePosition, scale;
               pos += noise(pos * ${windowsDeform[0].toFixed(2)}) * ${windowsDeform[1].toFixed(2)};
               pos += noise(pos * ${windowsGrain[0].toFixed(2)}) * ${windowsGrain[1].toFixed(2)};
    `
    windows.forEach(window => {
        window.position.toStrings()
        window.rotation.toStrings()
        window.scale.toStrings()
        res += ` relativePosition = relative2D(pos, vec2(${window.position.x}, ${window.position.y}), ${window.rotation.z});
                 scale = vec2(${window.scale.x}, ${window.scale.y}); 
                 newVal = ${shapeFunctions[window.type]};`
        if (window.data.includes('border')) res += `newVal = opBorder(newVal, 3.0);`
        if (window.data.includes('smoothUnion')) res += `res = opSmoothUnion(res, newVal, 15.0);`
        if (window.data.includes('subtract')) res += `res = opSubtraction(res, newVal);`
        if (window.data.includes('union')) res += `res = min(res, newVal);`
    })
    res += 'return -1. * res;'
    return res
}


function getFragmentShader() {
    cameraPosition.toStrings()
    cameraTarget.toStrings()
    const fragmentShader = `
        precision mediump float;

        varying vec2 uv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;

        ${deformationFuncs}
        ${sdfTools}
        ${sdfFuncs}
        ${opFuncs}
        ${shaderNoise}

        const float tmax = 1550.0;

        vec3 min_x(vec3 a, vec3 b) {
            if (a.x < b.x) return a;
            return b;
        }

        vec3 scene( in vec3 pos){
            ${elementsShaderCode()}
        }

        float windowSdf(vec2 pos){
            ${windowsSdfCode()}
        }

        vec3 rayMarch( in vec3 ro, in vec3 rd){
            vec3 res = vec3(0.0);
            float accumulativeLight = 0.0;
            for( int i=0; i<500; i++ ){
                vec3 pos = ro + res.x*rd;
                vec3 h = scene(pos);
                res.y = h.y;
                if( h.x<0.0001 || res.x>tmax ) break;
                res.x += h.x;
            }
            if (res.y == 1.0){
                vec3 pos = ro + res.x*rd;
                vec2 pos2d = vec2(pos.z, pos.y);
                float hitWindow = windowSdf(pos2d);
                res.z = hitWindow;
            }
            return res;
        }

        vec3 sunPos = vec3(0.0, 0.0, 0.0);
        float rayMarchToLight(vec3 pos ){
            vec3 lightDir = normalize(sunPos - pos);
            lightDir = normalize(sunPos);
            vec3 rc = rayMarch(pos + 0.001 * lightDir, lightDir);

            if (rc.y == 1.0) return rc.z;
            return 0.0;
        }

        vec3 clr1 = vec3(${clr2.x}, ${clr2.y}, ${clr2.z});
        vec3 clr2 = vec3(${clr1.x}, ${clr1.y}, ${clr1.z});

       
        void main(){
            cam_ro = vec3(${cameraPosition.x}, ${cameraPosition.y}, ${cameraPosition.z});
            cam_ta = vec3(${cameraTarget.x}, ${cameraTarget.y}, ${cameraTarget.z});
            initCamera();

            sunPos = vec3(${roomWidth / 2 + lightDistance}, 30.0+uMouse.x*200.0, 400.0 - uMouse.y * 1200.);

            vec2 p = uv * vec2(1.0,1.0);
            p += noise(p*${imageDeform[0].toFixed(2)}) * ${imageDeform[1].toFixed(2)};
            vec3 rd = getCameraRay(p);
    
            vec3 rc = rayMarch(cam_ro,rd);

            vec3 col = vec3(0.0);
            ${coloringType == 'mono' || coloringType == 'duo' ? `col = clr1;` : ''}

            vec3 pos = cam_ro + rc.x*rd;
            
            if (rc.y == 1.0) {
                if (rc.z > 0.0)
                    ${coloringType == 'bw' || coloringType == 'mono' ? `col = vec3(1.0);` : ''}
                    ${coloringType == 'duo' ? `col = clr2;` : ''}
            } else {
                float toLight = rayMarchToLight(pos);
                if (toLight > 0.0)
                ${coloringType == 'bw' || coloringType == 'mono' ? `col = vec3(1.0);` : ''}
                ${coloringType == 'duo' ? `col = clr2;` : ''}
            }

            ${coloringType == 'mono' ? `col *= normalize(clr2);` : ''}
            ${coloringType == 'duo' ? `col += rc.x * 0.0005 * clr2;` : ''}
            ${coloringType == 'bw' || coloringType == 'mono' ? `col += rc.x * 0.0005;` : ''}

            gl_FragColor = vec4( col, 1.0 );
        }
    `;
    return fragmentShader
}