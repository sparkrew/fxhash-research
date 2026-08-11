//Variables for webGL
var gl;
var canvas;

var windowSize;

//Textures
var tTriangleIndex;
var tCorners;
var tRead;
var tMarching;
var tResult;
var tRender;
var tRayMarch;
var tPos2D;
var tPrint;


//Framebuffers
var fbRead = {};
var fbMarching = {};
var fbTriangleIndex = {};
var fbRender = {};
var fbRayMarch = {};
var fbCorners = {};
var fbPos2D = {};
var fbResult = {};
var fbPrint = {};

//Vertex Buffers
var vbIndex = {};
var vb2048 = {};
var vb1024 = {};
var vb64 = {};
var vbTriangleIndex = {};

//Textures and Buffers for the histopyramid
var pyramidTextureStack = [];
var pyramidBufferStack = [];
var activeCells = 0.;

//Camera variables
var alpha = 1.130973355292326;
var beta = 5.951572749300665;
var _alpha = alpha;
var _beta = beta;
var pMatrix = mat4.create();
var init = true;

//Centers of the spheres.
var center0;
var center1;
var center2;
var center3;
var center4;
var center5;
var center6;
var tempo = 1.8;

//Triangle indexes (Paul Bourke tables)
var ti4 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,9,-1,-1,-1,-1,-1,-1,10,1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,0,1,2,10,-1,-1,-1,-1,-1,-1,9,0,2,9,2,10,-1,-1,-1,-1,-1,-1,3,2,8,2,10,8,8,10,9,-1,-1,-1,11,2,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,2,0,11,0,8,-1,-1,-1,-1,-1,-1,11,2,3,0,1,9,-1,-1,-1,-1,-1,-1,2,1,11,1,9,11,11,9,8,-1,-1,-1,10,1,3,10,3,11,-1,-1,-1,-1,-1,-1,1,0,10,0,8,10,10,8,11,-1,-1,-1,0,3,9,3,11,9,9,11,10,-1,-1,-1,8,10,9,8,11,10,-1,-1,-1,-1,-1,-1,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,4,3,4,7,-1,-1,-1,-1,-1,-1,1,9,0,8,4,7,-1,-1,-1,-1,-1,-1,9,4,1,4,7,1,1,7,3,-1,-1,-1,10,1,2,8,4,7,-1,-1,-1,-1,-1,-1,2,10,1,0,4,7,0,7,3,-1,-1,-1,4,7,8,0,2,10,0,10,9,-1,-1,-1,2,7,3,2,9,7,7,9,4,2,10,9,2,3,11,7,8,4,-1,-1,-1,-1,-1,-1,7,11,4,11,2,4,4,2,0,-1,-1,-1,3,11,2,4,7,8,9,0,1,-1,-1,-1,2,7,11,2,1,7,1,4,7,1,9,4,8,4,7,11,10,1,11,1,3,-1,-1,-1,11,4,7,1,4,11,1,11,10,1,0,4,3,8,0,7,11,4,11,9,4,11,10,9,7,11,4,4,11,9,11,10,9,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,4,9,5,-1,-1,-1,-1,-1,-1,5,4,0,5,0,1,-1,-1,-1,-1,-1,-1,4,8,5,8,3,5,5,3,1,-1,-1,-1,2,10,1,9,5,4,-1,-1,-1,-1,-1,-1,0,8,3,5,4,9,10,1,2,-1,-1,-1,10,5,2,5,4,2,2,4,0,-1,-1,-1,3,4,8,3,2,4,2,5,4,2,10,5,11,2,3,9,5,4,-1,-1,-1,-1,-1,-1,9,5,4,8,11,2,8,2,0,-1,-1,-1,3,11,2,1,5,4,1,4,0,-1,-1,-1,8,5,4,2,5,8,2,8,11,2,1,5,5,4,9,1,3,11,1,11,10,-1,-1,-1,0,9,1,4,8,5,8,10,5,8,11,10,3,4,0,3,10,4,4,10,5,3,11,10,4,8,5,5,8,10,8,11,10,-1,-1,-1,9,5,7,9,7,8,-1,-1,-1,-1,-1,-1,0,9,3,9,5,3,3,5,7,-1,-1,-1,8,0,7,0,1,7,7,1,5,-1,-1,-1,1,7,3,1,5,7,-1,-1,-1,-1,-1,-1,1,2,10,5,7,8,5,8,9,-1,-1,-1,9,1,0,10,5,2,5,3,2,5,7,3,5,2,10,8,2,5,8,5,7,8,0,2,10,5,2,2,5,3,5,7,3,-1,-1,-1,11,2,3,8,9,5,8,5,7,-1,-1,-1,9,2,0,9,7,2,2,7,11,9,5,7,0,3,8,2,1,11,1,7,11,1,5,7,2,1,11,11,1,7,1,5,7,-1,-1,-1,3,9,1,3,8,9,7,11,10,7,10,5,9,1,0,10,7,11,10,5,7,-1,-1,-1,3,8,0,7,10,5,7,11,10,-1,-1,-1,11,5,7,11,10,5,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,0,10,6,5,-1,-1,-1,-1,-1,-1,0,1,9,5,10,6,-1,-1,-1,-1,-1,-1,10,6,5,9,8,3,9,3,1,-1,-1,-1,1,2,6,1,6,5,-1,-1,-1,-1,-1,-1,0,8,3,2,6,5,2,5,1,-1,-1,-1,5,9,6,9,0,6,6,0,2,-1,-1,-1,9,6,5,3,6,9,3,9,8,3,2,6,3,11,2,10,6,5,-1,-1,-1,-1,-1,-1,6,5,10,2,0,8,2,8,11,-1,-1,-1,1,9,0,6,5,10,11,2,3,-1,-1,-1,1,10,2,5,9,6,9,11,6,9,8,11,11,6,3,6,5,3,3,5,1,-1,-1,-1,0,5,1,0,11,5,5,11,6,0,8,11,0,5,9,0,3,5,3,6,5,3,11,6,5,9,6,6,9,11,9,8,11,-1,-1,-1,10,6,5,4,7,8,-1,-1,-1,-1,-1,-1,5,10,6,7,3,0,7,0,4,-1,-1,-1,5,10,6,0,1,9,8,4,7,-1,-1,-1,4,5,9,6,7,10,7,1,10,7,3,1,7,8,4,5,1,2,5,2,6,-1,-1,-1,4,1,0,4,5,1,6,7,3,6,3,2,9,4,5,8,0,7,0,6,7,0,2,6,4,5,9,6,3,2,6,7,3,-1,-1,-1,7,8,4,2,3,11,10,6,5,-1,-1,-1,11,6,7,10,2,5,2,4,5,2,0,4,11,6,7,8,0,3,1,10,2,9,4,5,6,7,11,1,10,2,9,4,5,-1,-1,-1,6,7,11,4,5,8,5,3,8,5,1,3,6,7,11,4,1,0,4,5,1,-1,-1,-1,4,5,9,3,8,0,11,6,7,-1,-1,-1,9,4,5,7,11,6,-1,-1,-1,-1,-1,-1,10,6,4,10,4,9,-1,-1,-1,-1,-1,-1,8,3,0,9,10,6,9,6,4,-1,-1,-1,1,10,0,10,6,0,0,6,4,-1,-1,-1,8,6,4,8,1,6,6,1,10,8,3,1,9,1,4,1,2,4,4,2,6,-1,-1,-1,1,0,9,3,2,8,2,4,8,2,6,4,2,4,0,2,6,4,-1,-1,-1,-1,-1,-1,3,2,8,8,2,4,2,6,4,-1,-1,-1,2,3,11,6,4,9,6,9,10,-1,-1,-1,0,10,2,0,9,10,4,8,11,4,11,6,10,2,1,11,6,3,6,0,3,6,4,0,10,2,1,11,4,8,11,6,4,-1,-1,-1,1,4,9,11,4,1,11,1,3,11,6,4,0,9,1,4,11,6,4,8,11,-1,-1,-1,11,6,3,3,6,0,6,4,0,-1,-1,-1,8,6,4,8,11,6,-1,-1,-1,-1,-1,-1,6,7,10,7,8,10,10,8,9,-1,-1,-1,9,3,0,6,3,9,6,9,10,6,7,3,6,1,10,6,7,1,7,0,1,7,8,0,6,7,10,10,7,1,7,3,1,-1,-1,-1,7,2,6,7,9,2,2,9,1,7,8,9,1,0,9,3,6,7,3,2,6,-1,-1,-1,8,0,7,7,0,6,0,2,6,-1,-1,-1,2,7,3,2,6,7,-1,-1,-1,-1,-1,-1,7,11,6,3,8,2,8,10,2,8,9,10,11,6,7,10,0,9,10,2,0,-1,-1,-1,2,1,10,7,11,6,8,0,3,-1,-1,-1,1,10,2,6,7,11,-1,-1,-1,-1,-1,-1,7,11,6,3,9,1,3,8,9,-1,-1,-1,9,1,0,11,6,7,-1,-1,-1,-1,-1,-1,0,3,8,11,6,7,-1,-1,-1,-1,-1,-1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,11,7,6,-1,-1,-1,-1,-1,-1,9,0,1,11,7,6,-1,-1,-1,-1,-1,-1,7,6,11,3,1,9,3,9,8,-1,-1,-1,1,2,10,6,11,7,-1,-1,-1,-1,-1,-1,2,10,1,7,6,11,8,3,0,-1,-1,-1,11,7,6,10,9,0,10,0,2,-1,-1,-1,7,6,11,3,2,8,8,2,10,8,10,9,2,3,7,2,7,6,-1,-1,-1,-1,-1,-1,8,7,0,7,6,0,0,6,2,-1,-1,-1,1,9,0,3,7,6,3,6,2,-1,-1,-1,7,6,2,7,2,9,2,1,9,7,9,8,6,10,7,10,1,7,7,1,3,-1,-1,-1,6,10,1,6,1,7,7,1,0,7,0,8,9,0,3,6,9,3,6,10,9,6,3,7,6,10,7,7,10,8,10,9,8,-1,-1,-1,8,4,6,8,6,11,-1,-1,-1,-1,-1,-1,11,3,6,3,0,6,6,0,4,-1,-1,-1,0,1,9,4,6,11,4,11,8,-1,-1,-1,1,9,4,11,1,4,11,3,1,11,4,6,10,1,2,11,8,4,11,4,6,-1,-1,-1,10,1,2,11,3,6,6,3,0,6,0,4,0,2,10,0,10,9,4,11,8,4,6,11,2,11,3,6,9,4,6,10,9,-1,-1,-1,3,8,2,8,4,2,2,4,6,-1,-1,-1,2,0,4,2,4,6,-1,-1,-1,-1,-1,-1,1,9,0,3,8,2,2,8,4,2,4,6,9,4,1,1,4,2,4,6,2,-1,-1,-1,8,4,6,8,6,1,6,10,1,8,1,3,1,0,10,10,0,6,0,4,6,-1,-1,-1,8,0,3,9,6,10,9,4,6,-1,-1,-1,10,4,6,10,9,4,-1,-1,-1,-1,-1,-1,9,5,4,7,6,11,-1,-1,-1,-1,-1,-1,4,9,5,3,0,8,11,7,6,-1,-1,-1,6,11,7,4,0,1,4,1,5,-1,-1,-1,6,11,7,4,8,5,5,8,3,5,3,1,6,11,7,1,2,10,9,5,4,-1,-1,-1,11,7,6,8,3,0,1,2,10,9,5,4,11,7,6,10,5,2,2,5,4,2,4,0,7,4,8,2,11,3,10,5,6,-1,-1,-1,4,9,5,6,2,3,6,3,7,-1,-1,-1,9,5,4,8,7,0,0,7,6,0,6,2,4,0,1,4,1,5,6,3,7,6,2,3,7,4,8,5,2,1,5,6,2,-1,-1,-1,4,9,5,6,10,7,7,10,1,7,1,3,5,6,10,0,9,1,8,7,4,-1,-1,-1,5,6,10,7,0,3,7,4,0,-1,-1,-1,10,5,6,4,8,7,-1,-1,-1,-1,-1,-1,5,6,9,6,11,9,9,11,8,-1,-1,-1,0,9,5,0,5,3,3,5,6,3,6,11,0,1,5,0,5,11,5,6,11,0,11,8,11,3,6,6,3,5,3,1,5,-1,-1,-1,1,2,10,5,6,9,9,6,11,9,11,8,1,0,9,6,10,5,11,3,2,-1,-1,-1,6,10,5,2,8,0,2,11,8,-1,-1,-1,3,2,11,10,5,6,-1,-1,-1,-1,-1,-1,9,5,6,3,9,6,3,8,9,3,6,2,5,6,9,9,6,0,6,2,0,-1,-1,-1,0,3,8,2,5,6,2,1,5,-1,-1,-1,1,6,2,1,5,6,-1,-1,-1,-1,-1,-1,10,5,6,9,3,8,9,1,3,-1,-1,-1,0,9,1,5,6,10,-1,-1,-1,-1,-1,-1,8,0,3,10,5,6,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,7,5,11,5,10,-1,-1,-1,-1,-1,-1,3,0,8,7,5,10,7,10,11,-1,-1,-1,9,0,1,10,11,7,10,7,5,-1,-1,-1,3,1,9,3,9,8,7,10,11,7,5,10,2,11,1,11,7,1,1,7,5,-1,-1,-1,0,8,3,2,11,1,1,11,7,1,7,5,9,0,2,9,2,7,2,11,7,9,7,5,11,3,2,8,5,9,8,7,5,-1,-1,-1,10,2,5,2,3,5,5,3,7,-1,-1,-1,5,10,2,8,5,2,8,7,5,8,2,0,9,0,1,10,2,5,5,2,3,5,3,7,1,10,2,5,8,7,5,9,8,-1,-1,-1,1,3,7,1,7,5,-1,-1,-1,-1,-1,-1,8,7,0,0,7,1,7,5,1,-1,-1,-1,0,3,9,9,3,5,3,7,5,-1,-1,-1,9,7,5,9,8,7,-1,-1,-1,-1,-1,-1,4,5,8,5,10,8,8,10,11,-1,-1,-1,3,0,4,3,4,10,4,5,10,3,10,11,0,1,9,4,5,8,8,5,10,8,10,11,5,9,4,1,11,3,1,10,11,-1,-1,-1,8,4,5,2,8,5,2,11,8,2,5,1,3,2,11,1,4,5,1,0,4,-1,-1,-1,9,4,5,8,2,11,8,0,2,-1,-1,-1,11,3,2,9,4,5,-1,-1,-1,-1,-1,-1,3,8,4,3,4,2,2,4,5,2,5,10,10,2,5,5,2,4,2,0,4,-1,-1,-1,0,3,8,5,9,4,10,2,1,-1,-1,-1,2,1,10,9,4,5,-1,-1,-1,-1,-1,-1,4,5,8,8,5,3,5,1,3,-1,-1,-1,5,0,4,5,1,0,-1,-1,-1,-1,-1,-1,3,8,0,4,5,9,-1,-1,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,4,11,4,9,11,11,9,10,-1,-1,-1,3,0,8,7,4,11,11,4,9,11,9,10,11,7,4,1,11,4,1,10,11,1,4,0,8,7,4,11,1,10,11,3,1,-1,-1,-1,2,11,7,2,7,1,1,7,4,1,4,9,3,2,11,4,8,7,9,1,0,-1,-1,-1,7,4,11,11,4,2,4,0,2,-1,-1,-1,2,11,3,7,4,8,-1,-1,-1,-1,-1,-1,2,3,7,2,7,9,7,4,9,2,9,10,4,8,7,0,10,2,0,9,10,-1,-1,-1,2,1,10,0,7,4,0,3,7,-1,-1,-1,10,2,1,8,7,4,-1,-1,-1,-1,-1,-1,9,1,4,4,1,7,1,3,7,-1,-1,-1,1,0,9,8,7,4,-1,-1,-1,-1,-1,-1,3,4,0,3,7,4,-1,-1,-1,-1,-1,-1,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,9,10,8,10,11,-1,-1,-1,-1,-1,-1,0,9,3,3,9,11,9,10,11,-1,-1,-1,1,10,0,0,10,8,10,11,8,-1,-1,-1,10,3,1,10,11,3,-1,-1,-1,-1,-1,-1,2,11,1,1,11,9,11,8,9,-1,-1,-1,11,3,2,0,9,1,-1,-1,-1,-1,-1,-1,11,0,2,11,8,0,-1,-1,-1,-1,-1,-1,11,3,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,2,2,8,10,8,9,10,-1,-1,-1,9,2,0,9,10,2,-1,-1,-1,-1,-1,-1,8,0,3,1,10,2,-1,-1,-1,-1,-1,-1,10,2,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,9,1,-1,-1,-1,-1,-1,-1,9,1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,0,3,-1,-1,-1,-1,-1,-1,-1,-1,-1];

function setup( gl ) {

    windowSize = window.innerHeight * window.devicePixelRatio / window.innerWidth * window.devicePixelRatio < 1 ? window.innerHeight * window.devicePixelRatio : window.innerWidth * window.devicePixelRatio;

    initGL(gl);

    tCorners = createTexture(2048., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tMarching = createTexture(2048., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tResult = createTexture(2048., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tRender = createTexture(1024., gl.RGBA, gl.LINEAR, gl.LINEAR, gl.UNSIGNED_BYTE, true);
    tRayMarch = createTexture(1024., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tPos2D = createTexture(1024., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tTriangleIndex = createTexture(64., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);
    tRead = createTexture(1., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.UNSIGNED_BYTE, true);
    tPrint = createTexture(1024., gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true);

    fbRead = setFramebuffer(tRead);
    fbMarching = setFramebuffer(tMarching);
    fbTriangleIndex = setFramebuffer(tTriangleIndex);
    fbResult = setFramebuffer(tResult);
    fbRender = setFramebuffer(tRender);
    fbRayMarch = setFramebuffer(tRayMarch);
    fbCorners = setFramebuffer(tCorners);
    fbPos2D = setFramebuffer(tPos2D);
    fbPrint = setFramebuffer( tPrint );

    var i;
    for (i = 0; i < 11; i++) {
        pyramidTextureStack.push(createTexture(Math.pow(2, i), gl.RGBA, gl.NEAREST, gl.NEAREST, gl.FLOAT, true));
        pyramidBufferStack.push(setFramebuffer(pyramidTextureStack[i]));
    }

    initShaders();
    initCamera(true);
    initBuffers();
    updateValue(fbTriangleIndex.buffer, 7, ti4.length, 64, true);
    render();
}

//Resize function
function resize(e) {
    windowSize = window.innerHeight * window.devicePixelRatio / window.innerWidth * window.devicePixelRatio < 1 ? window.innerHeight * window.devicePixelRatio : window.innerWidth * window.devicePixelRatio;;
}


//Buffer init...
function initBuffers() {

    var arrayBuffer = [];
    var max = 4194304;
    var i;

    for (i = 0; i < max; i++) arrayBuffer.push(i);
    vbIndex = createBuffer(arrayBuffer);
    arrayBuffer.length = 0;
    var div = 1 / 2048;
    for (i = 0; i < max; i++) arrayBuffer.push(2. * div * ((i % 2048) + 0.5) - 1, 2. * div * (Math.floor(i * div) + 0.5) - 1);
    vb2048 = createBuffer(arrayBuffer);
    arrayBuffer.length = 0;
    var div = 1 / 1024;
    for (i = 0; i < max; i++) arrayBuffer.push(2. * div * ((i % 1024) + 0.5) - 1, 2. * div * (Math.floor(i * div) + 0.5) - 1);
    vb1024 = createBuffer(arrayBuffer);
    arrayBuffer.length = 0;
    div = 1 / 64.;
    for(i = 0; i < 4096; i++) arrayBuffer.push(2. * div * ((i % 64) + 0.5) - 1, 2. * div * (Math.floor(i * div) + 0.5) - 1);
    vb64 = createBuffer(arrayBuffer);
    arrayBuffer.length = 0;
    vbTriangleIndex = createBuffer(ti4);

    animateCenters();
}
var inited = false;
function render() {

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.DITHER);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
    gl.disable(gl.SCISSOR_TEST);
    gl.disable(gl.STENCIL_TEST);
//    requestAnimFrame(render);
    gl.blendFunc( gl.ONE, gl.ONE );
    gl.disable( gl.BLEND );

    animateCenters();

    drawQuad(fbCorners.buffer, 1, 2048);
    createPyramid(tCorners);
    readTotalCells();

    setShader(4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbMarching.buffer);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, 2048, 2048);
    gl.drawArrays(gl.POINTS, 0, activeCells);


    updateValue(fbResult.buffer, 5, activeCells * 12, 2048, true);

    inited = true;

//    gl.enable( gl.DEPTH_TEST );
//    gl.depthMask( true );
    evalTexture(tResult);


}

function createPyramid(initialTexture) {
    var levels = Math.ceil(Math.log(initialTexture.size) / Math.log(2));
    for (var i = 0; i < levels; i++) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, pyramidBufferStack[levels - i - 1].buffer);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, Math.pow(2, levels - 1 - i), Math.pow(2, levels - 1 - i));

        setPyramid(i == 0 ? initialTexture : pyramidTextureStack[levels - i], i, initialTexture.size);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}

function drawQuad(buffer, shaderNumber, size) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
    setShader(shaderNumber);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, size, size);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function evalTexture(texture, data) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, data);
    setTextureToEval(texture);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.viewport(0, 0, windowSize, windowSize);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function readTotalCells() {
    drawQuad(fbRead.buffer, 3, 1);
    var pixels = new Uint8Array(4);
    gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    activeCells = pixels[0] * 256 * 256 + pixels[1] * 256 + pixels[2];
    activeCells *= 1.01;
    activeCells = Math.floor(activeCells);
}

function updateValue(buffer, shaderNumber, numVertex, size, clear) {
    setShader(shaderNumber);
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
    if (clear) {
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    gl.viewport(0, 0, size, size);
    gl.drawArrays(gl.POINTS, 0, numVertex);
}

function animateCenters() {
    center0 = [cos(tempo, 0.3),  sin(tempo * 0.3, 0.25), cos(0.4 * tempo, 0.34)];
    center1 = [sin(tempo, 0.4),  sin(tempo * 1.2, 0.35), cos(1.5 * tempo, 0.14)];
    center2 = [cos(tempo * 0.1, 0.3), cos(tempo * 2, 0.36), cos(3 * tempo, 0.35)];
    center3 = [cos(tempo * 2, 0.13), sin(0.8  * tempo, 0.4), sin(0.1 * tempo, 0.21)];
    center4 = [sin(tempo * 4, 0.34), cos(tempo * 3, 0.28), sin(tempo * 3, 0.23)];
    center5 = [cos(tempo * 2, 0.32), cos(tempo * 4, 0.34), cos(tempo * 0.5, 0.25)];
    center6 = [sin(tempo * 0.3, 0.28), sin(tempo * 0.5, 0.23), sin(tempo * 0.9, 0.34)];
    tempo += 0.01;
}

function sin(v, amp) {
    return 0.5 * (1 + Math.sin(v)) * (1 - 2 * amp) + amp;
}

function cos(v, amp) {
    return 0.5 * (1 + Math.cos(v)) * (1 - 2 * amp) + amp;
}
