const ANIM_SPEED = 50;

let cnv;
let minSide;
let maxSide;
let canvasSize;
let canvasArea;
let seed;
let initialized;
let noiseShader;
let pd;

// LAYERS
let layers;
let shaderGraphics;
let mainLayer;
let lineLayer;

// SHADER PARAMS
let shaderSeed;
let amplitudeMult;
let stMult;
let uMult;
let vMult;

// GLOBALS
let strokeW;
let drawSpeed;
let isDrawn;
let elements;
let elementIndex;
let grain;

// FEATURES
let angleNoiseMult;
const PALETTE = initPalette();

window.$fxhashFeatures = {
    "Colors": PALETTE.name,
}


function keyPressed() {
    if (keyCode === 83) { // [S]
        if (isDrawn) {
            save("Let_Me_Paint.png");
        }
    }
}


function preload() {
    noiseShader = loadShader('shaders/shader.vert', 'shaders/shader.frag');
}


function setupLayers() {
    layers = [
        mainLayer,
        lineLayer
    ];

    layers.forEach(layer => {
        layer.clear();
        layer.pixelDensity(pd);
        layer.randomSeed(seed);
        layer.noiseSeed(seed);
        layer.colorMode(HSB);
        layer.angleMode(RADIANS);
        layer.rectMode(CENTER);
    });
}

function setup() {
    seed = int(fxrand() * 1024 * 1024 * 2032);

    randomSeed(seed);
    noiseSeed(seed);

    minSide = 1e3;

    let windowSize;
    let params = getURLParams();

    grain = !(params.grain !== undefined && params.grain == "false");

    if (params.size !== undefined && params.size >= 800) {
        windowSize = int(params.size);
    } else {
        windowSize = max(min(windowWidth, windowHeight) * 2, 2000);
    }
    windowSize = min(windowSize, 6400);

    canvasSize = initFormat();
    cnv = createCanvas(canvasSize[0], canvasSize[1]);
    mainLayer = createGraphics(width, height);
    lineLayer = createGraphics(width, height);

    pixelDensity(fl(windowSize / minSide));
    pd = pixelDensity();

    setupLayers();
    colorMode(HSB);
    rectMode(CENTER);
    initialized = false;
    initFeatures();
}


function updateSeed() {
    randomSeed(seed);
    noiseSeed(seed);

    mainLayer.randomSeed(seed);
    mainLayer.noiseSeed(seed);
}


function initParams() {
    drawSpeed = 35;
    isDrawn = false;
    updateSeed();
    setupLayers();

    minSide = min(width, height);
    maxSide = max(width, height);
    canvasArea = width * height;
    strokeW = fl(minSide * 0.01);

    shaderGraphics = createGraphics(int(canvasSize[0] * pd),
        int(canvasSize[1] * pd), WEBGL);
    shaderGraphics.pixelDensity(1);
    shaderGraphics.shader(noiseShader);

    mainLayer.background(PALETTE.back);
    background(PALETTE.back);

    noStroke();

    elements = [];
    elementIndex = 0;
    initElements();

    for (let i = 0; i < 3; i++) {
        if (random() > 0.5) {
            addPlane();
        }
    }
    addCircles();
}

function draw() {
    if (!initialized) {
        initParams();
        initialized = true;
    }
    drawFrame();
}

function drawFrame() {
    if (frameCount < 60) {
        drawSpeed = int(map(lerp(frameCount, 60, 0.02),
            0, 60, 1, ANIM_SPEED));
    }

    if (isDrawn) {
        addRects();
        addLines();
        addNoise();
        noLoop();
        fxpreview();
    }

    for (let i = 0; i < drawSpeed; i++) {
        push();
        mainLayer.push();
        if (elementIndex < elements.length) {
            elements[elementIndex].drawPoints();
        } else {
            isDrawn = true;
            mainLayer.pop();
            pop();
            break;
        }

        if (elements[elementIndex].isDrawn()) {
            if (elements[elementIndex].useShader()) {
                addBlot();
                addDots();
                addNoise();
            }
            elementIndex++;
        }
        mainLayer.pop();
        pop();
    }
}

function addNoise() {
    push();

    initFeatures(isDrawn);
    noiseShader.setUniform("u_res", [width, height]);
    noiseShader.setUniform("u_isDrawn", isDrawn);
    noiseShader.setUniform("u_lineLayer", lineLayer);
    noiseShader.setUniform("u_mainLayer", mainLayer);
    noiseShader.setUniform("u_seed", fl(shaderSeed));
    noiseShader.setUniform("u_amplitudeMult", fl(amplitudeMult));
    noiseShader.setUniform("u_stMult", fl(stMult));
    noiseShader.setUniform("u_uMult", fl(uMult));
    noiseShader.setUniform("u_vMult", fl(vMult));
    noiseShader.setUniform("u_grain", grain);

    shaderGraphics.rectMode(CORNER);
    shaderGraphics.fill("rgb(255,255,255)");
    shaderGraphics.rect(0, 0, width, height);

    image(shaderGraphics.get(), 0, 0,
        width, height);

    mainLayer.image(shaderGraphics.get(), 0, 0,
        width, height);

    lineLayer.clear();
    pop();
}
