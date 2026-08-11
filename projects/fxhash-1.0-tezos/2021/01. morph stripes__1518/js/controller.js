
var shader = [];

//This is used for the dat.gui.js
function sVars() {
    this.range = 0.032;
    this.quad1Z = -1;
    this.quad2Z = 0;
    this.quad3Z = 1;

    this.cameraTargetZ = 0;
}

var vars = new sVars();

//Shader parser
function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function initShaders() {

    var programs = [
        ["vs-simplePlane", "fs-setTexture"],
        ["vs-simplePlane", "fs-isoSurface"],
        ["vs-simplePlane", "fs-pyramid"],
        ["vs-simplePlane", "fs-pack"],
        ["vs-index2DGrid", "fs-parsePyramid"],
        ["vs-index2DGrid", "fs-triangleCreator"],
        ["vs-renderTriangles", "fs-renderTriangles"],
        ["vs-triangleIndexes", "fs-simpleColor"]
    ];

    for(var i = 0; i  < programs.length; i++) {
        var fragmentShader = getShader(gl, programs[i][0]);
        var vertexShader = getShader(gl, programs[i][1]);

        shader[i] = gl.createProgram();
        gl.attachShader(shader[i], vertexShader);
        gl.attachShader(shader[i], fragmentShader);
        gl.linkProgram(shader[i]);

        if (!gl.getProgramParameter(shader[i], gl.LINK_STATUS)) {
            alert("Could not init shaders in the program number: " + String(i));
        }
    }

    for(var i = 0; i < programs.length; i++) initShader(i);

    setupMenu();
}

function initShader(k) {
    switch(k) {
        case 0:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].dataTexture = gl.getUniformLocation(shader[k], "uDT");
            break;
        case 1:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].range = gl.getUniformLocation(shader[k], "uRange");
            shader[k].center0 = gl.getUniformLocation(shader[k], "uC0");
            shader[k].center1 = gl.getUniformLocation(shader[k], "uC1");
            shader[k].center2 = gl.getUniformLocation(shader[k], "uC2");
            shader[k].center3 = gl.getUniformLocation(shader[k], "uC3");
            shader[k].center4 = gl.getUniformLocation(shader[k], "uC4");
            shader[k].center5 = gl.getUniformLocation(shader[k], "uC5");
            shader[k].center6 = gl.getUniformLocation(shader[k], "uC6");
            break;
        case 2:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].potentialTexture = gl.getUniformLocation(shader[k], "uPyT");
            shader[k].size = gl.getUniformLocation(shader[k], "uSize");
            break;
        case 3:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].readPixelTexture = gl.getUniformLocation(shader[k], "uPyT");
            break;
        case 4:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].vertex2D = gl.getAttribLocation(shader[k], "aV2I");
            gl.enableVertexAttribArray(shader[k].vertex2D);
            shader[k].level0 = gl.getUniformLocation(shader[k], "uLev0");
            shader[k].level1 = gl.getUniformLocation(shader[k], "uLev1");
            shader[k].level2 = gl.getUniformLocation(shader[k], "uLev2");
            shader[k].level3 = gl.getUniformLocation(shader[k], "uLev3");
            shader[k].level4 = gl.getUniformLocation(shader[k], "uLev4");
            shader[k].level5 = gl.getUniformLocation(shader[k], "uLev5");
            shader[k].level6 = gl.getUniformLocation(shader[k], "uLev6");
            shader[k].level7 = gl.getUniformLocation(shader[k], "uLev7");
            shader[k].level8 = gl.getUniformLocation(shader[k], "uLev8");
            shader[k].level9 = gl.getUniformLocation(shader[k], "uLev9");
            shader[k].level10 = gl.getUniformLocation(shader[k], "uLev10");
            break;
        case 5:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].vertex2D = gl.getAttribLocation(shader[k], "aV2I");
            gl.enableVertexAttribArray(shader[k].vertex2D);
            shader[k].marchingTexture = gl.getUniformLocation(shader[k], "marchTex");
            shader[k].tiTexture = gl.getUniformLocation(shader[k], "uTI");
            shader[k].range = gl.getUniformLocation(shader[k], "uRange");
            shader[k].corners = gl.getUniformLocation(shader[k], "uPot");
            break;
        case 6:
            shader[k].vertex2D = gl.getAttribLocation(shader[k], "aV2I");
            gl.enableVertexAttribArray(shader[k].vertex2D);
            shader[k].cameraMatrix = gl.getUniformLocation(shader[k], "uCameraMatrix");
            shader[k].pMatrix = gl.getUniformLocation(shader[k], "uPMatrix");
            shader[k].positionTexture = gl.getUniformLocation(shader[k], "uPT");
            shader[k].case = gl.getUniformLocation(shader[k], "uCase");
            shader[k].eyeVector = gl.getUniformLocation(shader[k], "uEye");
            shader[k].center0 = gl.getUniformLocation(shader[k], "uC0");
            shader[k].center1 = gl.getUniformLocation(shader[k], "uC1");
            shader[k].center2 = gl.getUniformLocation(shader[k], "uC2");
            shader[k].center3 = gl.getUniformLocation(shader[k], "uC3");
            shader[k].center4 = gl.getUniformLocation(shader[k], "uC4");
            shader[k].center5 = gl.getUniformLocation(shader[k], "uC5");
            shader[k].center6 = gl.getUniformLocation(shader[k], "uC6");
            break;
        case 7:
            shader[k].vertexIndex = gl.getAttribLocation(shader[k], "aVI");
            gl.enableVertexAttribArray(shader[k].vertexIndex);
            shader[k].vertex2D = gl.getAttribLocation(shader[k], "aV2I");
            gl.enableVertexAttribArray(shader[k].vertex2D);
            break;

    }
}

function setShader(k) {
    gl.useProgram(shader[k]);
    switch(k) {
        case 1:
            gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
            gl.vertexAttribPointer(shader[k].vertexIndex, 1, gl.FLOAT, false, 0, 0);
            gl.uniform1f(shader[k].range, vars.range);
            gl.uniform3fv(shader[k].center0, center0);
            gl.uniform3fv(shader[k].center1, center1);
            gl.uniform3fv(shader[k].center2, center2);
            gl.uniform3fv(shader[k].center3, center3);
            gl.uniform3fv(shader[k].center4, center4);
            gl.uniform3fv(shader[k].center5, center5);
            gl.uniform3fv(shader[k].center6, center6);
            break;
        case 3:
            gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
            gl.vertexAttribPointer(shader[k].vertexIndex, 1, gl.FLOAT, false, 0, 0);
            bindTexture(shader[k].readPixelTexture, pyramidTextureStack[0], 0);
            break;
        case 4:
            gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
            gl.vertexAttribPointer(shader[k].vertexIndex, 1, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, vb2048);
            gl.vertexAttribPointer(shader[k].vertex2D, 2, gl.FLOAT, false, 0, 0);
            bindTexture(shader[k].level0, pyramidTextureStack[1], 0);
            bindTexture(shader[k].level1, pyramidTextureStack[2], 1);
            bindTexture(shader[k].level2, pyramidTextureStack[3], 2);
            bindTexture(shader[k].level3, pyramidTextureStack[4], 3);
            bindTexture(shader[k].level4, pyramidTextureStack[5], 4);
            bindTexture(shader[k].level5, pyramidTextureStack[6], 5);
            bindTexture(shader[k].level6, pyramidTextureStack[7], 6);
            bindTexture(shader[k].level7, pyramidTextureStack[8], 7);
            bindTexture(shader[k].level8, pyramidTextureStack[9], 8);
            bindTexture(shader[k].level9, pyramidTextureStack[10], 9);
            bindTexture(shader[k].level10, tCorners, 10);
            break;
        case 5:
            gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
            gl.vertexAttribPointer(shader[k].vertexIndex, 1, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, vb2048);
            gl.vertexAttribPointer(shader[k].vertex2D, 2, gl.FLOAT, false, 0, 0);
            gl.uniform1f(shader[k].range, vars.range);
            bindTexture(shader[k].marchingTexture, tMarching, 0);
            bindTexture(shader[k].tiTexture, tTriangleIndex, 1);
            bindTexture(shader[k].corners, tCorners, 2);
            break;
        case 6:
            gl.bindBuffer(gl.ARRAY_BUFFER, vb2048);
            gl.vertexAttribPointer(shader[k].vertex2D, 2, gl.FLOAT, false, 0, 0);
            gl.uniformMatrix4fv(shader[k].cameraMatrix, false, cameraTransformMatrix);
            gl.uniformMatrix4fv(shader[k].pMatrix, false, pMatrix);
            gl.uniform1f(shader[k].case, vars.useRayMarching ? 0 : 1);
            gl.uniform3fv(shader[k].eyeVector, [camera.target[0] - camera.position[0], camera.target[1] - camera.position[1], camera.target[2] - camera.position[2]]);
            gl.uniform3fv(shader[k].center0, center0);
            gl.uniform3fv(shader[k].center1, center1);
            gl.uniform3fv(shader[k].center2, center2);
            gl.uniform3fv(shader[k].center3, center3);
            gl.uniform3fv(shader[k].center4, center4);
            gl.uniform3fv(shader[k].center5, center5);
            gl.uniform3fv(shader[k].center6, center6);
            bindTexture(shader[k].positionTexture, tResult, 0);
            break;
        case 7:
            gl.bindBuffer(gl.ARRAY_BUFFER, vbTriangleIndex);
            gl.vertexAttribPointer(shader[k].vertexIndex, 1, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, vb64);
            gl.vertexAttribPointer(shader[k].vertex2D, 2, gl.FLOAT, false, 0, 0);
            break;

    }
}

function setTextureToEval(texture) {
    gl.useProgram(shader[0]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
    gl.vertexAttribPointer(shader[0].vertexIndex, 1, gl.FLOAT, false, 0, 0);
    bindTexture(shader[0].dataTexture, texture, 9);
}

function setPyramid(texture, level, initialSize) {
    if(level == 0) {
        gl.useProgram(shader[2]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vbIndex);
        gl.vertexAttribPointer(shader[2].vertexIndex, 1, gl.FLOAT, false, 0, 0);
    }
    var size = Math.pow(2, level + 1) / initialSize;
    gl.uniform1f(shader[2].size, size);
    bindTexture(shader[2].potentialTexture, texture, 0);
}

function setupMenu() {
//    gui = new DAT.GUI(vars);
//    gui.add(vars, "quad1Z", -100, 100, 0.5);
//    gui.add(vars, "quad2Z", -100, 100, 0.5);
//    gui.add(vars, "quad3Z", -100, 100, 0.5);
//
//    gui.add(vars, "cameraTargetZ", -10, 10, 0.5);
//    gui.toggle();
//    gui.toggle();
}

function bindTexture(programData, texture, texturePos) {
    var textures = [gl.TEXTURE0, gl.TEXTURE1, gl.TEXTURE2, gl.TEXTURE3, gl.TEXTURE4, gl.TEXTURE5, gl.TEXTURE6, gl.TEXTURE7, gl.TEXTURE8, gl.TEXTURE9, gl.TEXTURE10, gl.TEXTURE11, gl.TEXTURE12, gl.TEXTURE13, gl.TEXTURE14];
    gl.activeTexture(textures[texturePos]);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(programData, texturePos);
}
