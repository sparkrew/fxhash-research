
//Variables for the camera
var camera = {};
var cameraTransformMatrix = mat4.create();
var down = false;

var eyeVector = vec3.create();
var upVector = vec3.create();
var rightVector = vec3.create();
var normalVector = vec3.create();
var yVector = vec3.create();

var prevMouseX = 0;
var prevMouseY = 0;
var currentMouseX = 0;
var currentMouseY = 0;

yVector[0] = 0;
yVector[1] = 1;
yVector[2] = 0;

//Init the canvas
function initGL(_gl) {
    try {
        gl = _gl;
//        gl.viewportWidth = canvas.width;
//        gl.viewportHeight = canvas.height;
    } catch (e) {
    }
    if (!gl) {
        alert("Sad world :(");
    }
}

//Camera events
function initCamera(interactive) {
    camera.position = vec3.create();
    camera.target = vec3.create(0.0, 0.0, 0.0);
//    if(interactive) {
//        document.addEventListener('mousemove', onMouseMove, false);
//        document.addEventListener('mousedown', onMouseDown, false);
//        document.addEventListener('mouseup', onMouseUp, false);
//    }
}

//Function that control de movement of the camera
function onMouseDown(event) {
    event.preventDefault();
    down = true;
}

function onMouseUp(event) {
    event.preventDefault();
    down = false;
}

function onMouseMove(event) {
    event.preventDefault();
    currentMouseX = event.clientX;
    currentMouseY = event.clientY;
}

function setFramebuffer(texture) {
    var frameData = {};
    frameData.buffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameData.buffer);
    frameData.buffer.width = texture.size;
    frameData.buffer.height = texture.size;
    var renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, texture.size, texture.size);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return frameData;
}

function createTexture(_textureSize, format, maxFilter, minFilter, type, unBind) {

    var texture = gl.createTexture();
    texture.size = _textureSize;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, format, _textureSize, _textureSize, 0, format, type, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, maxFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (unBind) gl.bindTexture(gl.TEXTURE_2D, null);
    return texture;
}

function createBuffer(data) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return buffer;
}

function defineTransformMatrix(objectVector, targetVector) {
    var matrix = mat4.create();
    vec3.subtract(objectVector, targetVector, eyeVector);
    vec3.normalize(eyeVector, normalVector);
    var reference = vec3.dot(normalVector, yVector);
    var reference2 = vec3.create;
    vec3.scale(normalVector, reference, reference2);
    vec3.subtract(yVector, reference2, upVector);
    vec3.normalize(upVector, upVector);
    vec3.cross(normalVector, upVector, rightVector);
    matrix[0] = rightVector[0];
    matrix[1] = upVector[0];
    matrix[2] = normalVector[0];
    matrix[3] = 0;
    matrix[4] = rightVector[1];
    matrix[5] = upVector[1];
    matrix[6] = normalVector[1];
    matrix[7] = 0;
    matrix[8] = rightVector[2];
    matrix[9] = upVector[2];
    matrix[10] = normalVector[2];
    matrix[11] = 0;
    matrix[12] = -vec3.dot(objectVector, rightVector);
    matrix[13] = -vec3.dot(objectVector, upVector);
    matrix[14] = -vec3.dot(objectVector, normalVector);
    matrix[15] = 1;
    return matrix;
}
