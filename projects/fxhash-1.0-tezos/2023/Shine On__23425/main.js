let canvas, canvasWidth, canvasHeight
let gl, buffers, shader
let attributeLocations = {}, uniformLocations = {}

function main() {
    canvas = document.querySelector("#glCanvas");
    console.log(canvas)
    canvasWidth = canvas.getBoundingClientRect().width
    canvasHeight = canvas.getBoundingClientRect().height
    var devicePixelRatio = window.devicePixelRatio || 1;
    canvas.height = Math.round(canvasWidth * devicePixelRatio)
    canvas.width = Math.round(canvas.height * 1.37);
    // canvas.height = canvasWidth > 1000 ? 2048 : 1024
    // canvas.width = canvas.height * 2

    gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
    if (!gl) {
        console.log('Unable to initialize WebGL. Your browser or machine may not support it.');
    }

    shader = initShaderProgram(gl, vertexShader, getFragmentShader());
    attributeLocations["aVertexPosition"] = gl.getAttribLocation(shader, "aVertexPosition");
    uniformLocations["uTime"] = gl.getUniformLocation(shader, "uTime");
    uniformLocations["uResolution"] = gl.getUniformLocation(shader, "uResolution");
    uniformLocations["uMouse"] = gl.getUniformLocation(shader, "uMouse");

    buffers = initBuffers();
    initRender()
}

function initBuffers() {
    const positions = [1, 1, -1, 1, 1, -1, -1, -1];
    const positionBuffer = makeBuffer(gl, positions);

    return {
        position: positionBuffer,
    };
}

function makeBuffer(gl, array, type = gl.ARRAY_BUFFER, usage = gl.STATIC_DRAW) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(type, buffer);
    const dataType = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bufferData(type, new dataType(array), usage);
    return buffer;
}

function setAttribute(buffer, locationName, numComponents, type = gl.FLOAT, normalize = false, stride = 0, offset = 0) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const location = attributeLocations[locationName] || gl.getAttribLocation(shader, locationName);
    gl.vertexAttribPointer(location, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(location);
}

function initRender() {
    gl.useProgram(shader);
    setAttribute(buffers.position, "aVertexPosition", 2);
    gl.uniform2f(uniformLocations["uResolution"], gl.canvas.width, gl.canvas.height);

    requestAnimationFrame(render);
}

savedPreview = false
function render(){
    if (mouseMoved) {
        gl.uniform2f(uniformLocations["uMouse"], mouseX, mouseY);
        gl.uniform1f(uniformLocations["uTime"], performance.now() / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        mouseMoved = false

        if (!savedPreview) {
            fxpreview()
            savedPreview = true
        }
    }

    requestAnimationFrame(render);
}

window.onload = main;

let mouseX = .4
let mouseY = .4
let mouseMoved = true
window.addEventListener("mousemove", e => {
    if (!gl) return
    mouseMoved = true
    mouseX = e.clientX / canvasWidth;
    mouseY = e.clientY / canvasHeight;
})