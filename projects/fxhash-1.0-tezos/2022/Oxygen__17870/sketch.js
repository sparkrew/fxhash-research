// Generating all random numbers we're ever going to need right here in the beginning.
const randS = new RandomSequence(10000000);
const randO = new RandomSequence(10000000);

const debug = false;

let Config;

let MAX_DIMENSION = 1000;

let P_WIDTH;
let P_HEIGHT;
let buffer;

const PADDING_prc = 0.02;

let P_EDGE_LEFT;
let P_EDGE_RIGHT;
let P_EDGE_TOP;
let P_EDGE_BOTTOM;

const GROWTH_MASK_RESOLUTION = 2500;
let GROWTH_MASK_WIDTH;
let GROWTH_MASK_HEIGHT;

const DOTS_MULT = 1;
const DOTS_OPACITY = 0.2;

let myFont;

let GX_TO_SX;
let GY_TO_SY;

let LayOut;

let canvasWidth, canvasHeight;
let backgroundLayer;

let printGraphics;

console.log("Hello!");

window.$fxhashFeatures = {};

function preload() {
    myFont = loadFont("./Poppins-ExtraBold.ttf");
}

function setup() {
    createCanvas(500, 700);
    pixelDensity(2);
    frameRate(100);
    noSmooth();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const size = urlParams.get("size");
    if (size) {
        MAX_DIMENSION = size;
    }

    init();
}

function initSize() {
    const ratio = Config.aspectRatio / 5;

    canvasHeight = Math.floor(Math.min(windowHeight, windowWidth * ratio));
    canvasWidth = Math.floor(canvasHeight / ratio);
    resizeCanvas(canvasWidth, canvasHeight);

    P_HEIGHT = Math.floor(MAX_DIMENSION);
    P_WIDTH = Math.floor(P_HEIGHT / ratio);

    GROWTH_MASK_HEIGHT = GROWTH_MASK_RESOLUTION;
    GROWTH_MASK_WIDTH = Math.floor(GROWTH_MASK_HEIGHT / ratio);

    GX_TO_SX = P_WIDTH / GROWTH_MASK_WIDTH;
    GY_TO_SY = P_HEIGHT / GROWTH_MASK_HEIGHT;
}

function windowResized() {
    initSize();
}

function getRandomFunction() {
    let tree;

    while (true) {
        tree = createRandomFunctionTree(randO);
        const treeFuncExpr = new Function("x", "y", "return " + tree.expr());

        let maxval = -999999;
        let minval = 999999;
        let c = 0;
        let csum = 0;

        for (let angle = 0; angle < 2 * PI; angle += 0.01) {
            const x = cos(angle) * 2;
            const y = sin(angle) * 2;
            const val = treeFuncExpr(x, y);
            c = c + 1;
            csum = csum + val;
            if (val > maxval) maxval = val;
            if (val < minval) minval = val;
        }

        tree.minval = minval;
        tree.maxval = maxval;

        if (maxval > minval && maxval < 100 && maxval - minval > 0.2) {
            break;
        }
    }

    return tree;
}

function keyTyped() {
    if (key === "s") {
        save(printGraphics, "Oxygen-" + fxhash + ".png");
    }
    if (key === "r") {
        init();
    }

    if (key === "p") {
        MAX_DIMENSION = 850;
        init();
    }

    if (key === "m") {
        MAX_DIMENSION = 2000;
        init();
    }

    if (key === "l") {
        MAX_DIMENSION = 3500;
        init();
    }

    if (key === "x") {
        MAX_DIMENSION = 5000;
        init();
    }
}

/** ******************************************************************

			INIT!

******************************************************************** */

let growthMask;

let marbleRenderer;

let balls;

let distortField;

let vineBaseHue;
let vineBaseSaturation;
let vineBaseBrightness;

let sparkleBaseHue;
let sparkleBaseSaturation;
let sparkleBaseBrightness;
let mainAnim;

let leafs = [];
let nodes = [];

const step = 0;

class Node {
    constructor(x, y, parent = null) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.angle = -PI / 2;
        this.parent = parent;
        this.count = 1;
    }
}

let growthLengthBase;
let growthFrameCount = 0;
let bgAnimPreviousStep = 0;
let backgroundReady = false;
let stepsOnCurrentAnim = 0;
let signatureDrawn = false;

function init() {
    noLoop();
    running = false;
    randO.reset();
    randS.reset();

    growthFrameCount = 0;
    bgAnimPreviousStep = 0;
    backgroundReady = false;
    stepsOnCurrentAnim = 0;
    signatureDrawn = false;

    noiseSeed(Math.floor(randO.next() * 100000));

    Config = GenerateConfig(JSON.parse(JSON.stringify(Options)));

    initSize();

    mainAnim = new AnimationController();

    distortField = new Float32Array(P_WIDTH * P_HEIGHT * 2);

    const bgDistortPh1 = randO.next() * 20;
    const bgDistortPh2 = randO.next() * 20;

    const bgDistortFreq1 = randO.next() * 10 + 25;
    const bgDistortFreq2 = randO.next() * 10 + 5;
    const bgDistortFreq3 = randO.next() * 10 + 25;
    const bgDistortFreq4 = randO.next() * 10 + 15;

    const distBaseXPhase = randO.next();
    const distBaseXFreq = randO.next();
    const distBaseXAmp = randO.next();

    const distBaseYPhase = randO.next();
    const distBaseYFreq = randO.next();
    const distBaseYAmp = randO.next();

    for (let x = 0; x < P_WIDTH; x++) {
        for (let y = 0; y < P_HEIGHT; y++) {
            const xRel = x / P_WIDTH;
            const yRel = y / P_HEIGHT;

            distortField[(y * P_WIDTH + x) * 2] =
                sin(yRel * 20 * distBaseXFreq + distBaseXPhase * 10) *
                10 *
                distBaseXAmp;

            distortField[(y * P_WIDTH + x) * 2 + 1] =
                cos(xRel * 20 * distBaseYFreq + distBaseYPhase) *
                    10 *
                    distBaseYAmp -
                noise(xRel * bgDistortFreq4, yRel * bgDistortFreq4) *
                    100 *
                    Math.pow(
                        Math.max(sin(yRel * bgDistortFreq1 + bgDistortPh1), 0),
                        20
                    ) *
                    cos(xRel * bgDistortFreq2 + bgDistortPh1) *
                    sin(yRel * bgDistortFreq3 + bgDistortPh2);
        }
    }

    growthMask = [];
    for (let i = 0; i < GROWTH_MASK_HEIGHT * GROWTH_MASK_WIDTH; i++) {
        growthMask[i] = 0;
    }

    // TOP
    for (let gx = 0; gx < GROWTH_MASK_WIDTH; gx++) {
        for (let gy = 0; gy < GROWTH_MASK_HEIGHT * PADDING_prc; gy++) {
            const gmCoord = Math.floor(gy * GROWTH_MASK_WIDTH + gx);
            growthMask[gmCoord] = 1;
        }
    }

    // BOTTOM
    for (let gx = 0; gx < GROWTH_MASK_WIDTH; gx++) {
        for (
            let gy = GROWTH_MASK_HEIGHT * (1 - PADDING_prc);
            gy < GROWTH_MASK_HEIGHT;
            gy++
        ) {
            const gmCoord = Math.floor(gy * GROWTH_MASK_WIDTH + gx);
            growthMask[gmCoord] = 1;
        }
    }

    // LEFT
    for (let gx = 0; gx < GROWTH_MASK_WIDTH * PADDING_prc; gx++) {
        for (let gy = 0; gy < GROWTH_MASK_HEIGHT; gy++) {
            const gmCoord = Math.floor(gy * GROWTH_MASK_WIDTH + gx);
            growthMask[gmCoord] = 1;
        }
    }

    // RIGHT
    for (
        let gx = GROWTH_MASK_WIDTH * (1 - PADDING_prc);
        gx < GROWTH_MASK_WIDTH;
        gx++
    ) {
        for (let gy = 0; gy < GROWTH_MASK_HEIGHT; gy++) {
            const gmCoord = Math.floor(gy * GROWTH_MASK_WIDTH + gx);
            growthMask[gmCoord] = 1;
        }
    }

    printGraphics = createGraphics(P_WIDTH / 2, P_HEIGHT / 2);
    printGraphics.pixelDensity = 2;
    printGraphics.colorMode(HSB, 360, 100, 100, 100);

    P_EDGE_LEFT = floor(P_WIDTH * PADDING_prc); // (P_WIDTH - P_HEIGHT/sqrt(2))/2;
    P_EDGE_RIGHT = floor(P_WIDTH * (1 - PADDING_prc)); // P_WIDTH - (P_WIDTH - P_HEIGHT/sqrt(2))/2;
    P_EDGE_TOP = floor(P_HEIGHT * PADDING_prc); // 0;
    P_EDGE_BOTTOM = floor(P_HEIGHT * (1 - PADDING_prc)); // P_HEIGHT;

    BP = new BufferPainter(P_WIDTH, P_HEIGHT, DOTS_MULT, DOTS_OPACITY, randS);
    BP.setMargins(P_EDGE_LEFT, P_EDGE_TOP, P_EDGE_RIGHT, P_EDGE_BOTTOM);

    const bgCol = getColor("background");
    const bgColRGB = [red(bgCol), green(bgCol), blue(bgCol)];
    const marginColRGB = bgColRGB;

    const phase1 = randO.next() * PI * 10 - 5;
    const phase2 = randO.next() * PI * 10 - 5;

    const backgroundPainter = BP.bumpMapBgWithMargins(
        bgColRGB,
        marginColRGB,
        phase1,
        phase2
    ).stepSize(0.1);

    mainAnim.push(backgroundPainter);

    BP.DOTS_MULT = 40;
    BP.DOTS_OPACITY = 0.01;

    const bgCircleCol = color(getColor("backgroundShapeColor"));

    if (Config.background.shapeMode == "rectangle") {
        mainAnim.push(
            BP.drawRectBuf(
                P_WIDTH / 10,
                P_HEIGHT / 10,
                (P_WIDTH / 10) * 8,
                (P_HEIGHT / 10) * 8,
                Config.background.shapeThickness * P_WIDTH,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(40)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
    } else if (Config.background.shapeMode == "sphere") {
        mainAnim.push(
            BP.drawCircleBuf(
                P_WIDTH / 2,
                P_HEIGHT / 2,
                P_WIDTH / 2.2,
                1.0,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.4 * P_HEIGHT) / 2000
            )
                .setOpacity(0.01)
                .setDotsMult(40)
                .stepSize(0.05)
        );
    } else if (Config.background.shapeMode == "horizontalColumns") {
        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 10,
                P_HEIGHT / 4,
                (P_WIDTH / 10) * 9,
                P_HEIGHT / 4,
                Config.background.shapeThickness * P_WIDTH * 2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 10,
                P_HEIGHT / 2,
                (P_WIDTH / 10) * 9,
                P_HEIGHT / 2,
                Config.background.shapeThickness * P_WIDTH * 2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 10,
                (P_HEIGHT / 4) * 3,
                (P_WIDTH / 10) * 9,
                (P_HEIGHT / 4) * 3,
                Config.background.shapeThickness * P_WIDTH * 2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
    } else if (Config.background.shapeMode == "verticalColumns") {

        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 4,
                P_HEIGHT / 10,
                P_WIDTH / 4,
                (P_HEIGHT / 10) * 9,
                Config.background.shapeThickness * P_WIDTH * 1.2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 2,
                P_HEIGHT / 10,
                P_WIDTH / 2,
                (P_HEIGHT / 10) * 9,
                Config.background.shapeThickness * P_WIDTH * 1.2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
        mainAnim.push(
            BP.drawLineBuf(
                (P_WIDTH / 4) * 3,
                P_HEIGHT / 10,
                (P_WIDTH / 4) * 3,
                (P_HEIGHT / 10) * 9,
                Config.background.shapeThickness * P_WIDTH * 1.2,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(10)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
    } else if (Config.background.shapeMode == "singleVerticalColumn") {
        mainAnim.push(
            BP.drawLineBuf(
                P_WIDTH / 2,
                P_HEIGHT / 10,
                P_WIDTH / 2,
                (P_HEIGHT / 10) * 9,
                Config.background.shapeThickness * P_WIDTH * 4,
                [
                    red(bgCircleCol) / 255,
                    green(bgCircleCol) / 255,
                    blue(bgCircleCol) / 255,
                ],
                distortField,
                (0.8 * P_HEIGHT) / 2000
            )
                .setDotsMult(20)
                .setOpacity(0.01)
                .stepSize(0.01)
        );
    }

    LayOut = new Packer(GROWTH_MASK_WIDTH, GROWTH_MASK_HEIGHT, randO);

    balls = [];
    let spaceFound;

    for (let i = 0; i < Config.blobs.amount; i++) {
        let x = 0;
        let y = 0;
        let radius = 0;
        spaceFound = true;
        try {
            [x, y, radius] = LayOut.findSpaceForCircle(
                [GROWTH_MASK_WIDTH / 4, GROWTH_MASK_WIDTH * 0.41], // rad range
                [
                    Config.blobs.upperMargin * GROWTH_MASK_HEIGHT, // bounds: top
                    GROWTH_MASK_WIDTH -
                        Config.blobs.rightMargin * GROWTH_MASK_WIDTH, // right
                    GROWTH_MASK_HEIGHT -
                        Config.blobs.bottomMargin * GROWTH_MASK_HEIGHT, // bottom
                    Config.blobs.leftMargin * GROWTH_MASK_WIDTH,
                ], // left						],
                true, // dodge lines
                true, // dodge circles
                0, // margin
                true, // allow shrinking of radius
                0.0001 * GROWTH_MASK_WIDTH
            ); // allow shrinking of the radius until correct size is found
        } catch (Error) {
            spaceFound = false;
        }

        if (spaceFound) {
            LayOut.addCircle(new CircleSpacer(x, y, radius));

            balls.push({
                x: (x / GROWTH_MASK_WIDTH) * P_WIDTH,
                y: (y / GROWTH_MASK_HEIGHT) * P_HEIGHT,
                radius: ((radius * 0.8) / GROWTH_MASK_WIDTH) * P_WIDTH,
            });

            const blockRad = radius * 0.7;

            for (let gx = x - blockRad; gx < x + blockRad; gx++) {
                for (let gy = y - blockRad; gy < y + blockRad; gy++) {
                    if (
                        (gx - x) * (gx - x) + (gy - y) * (gy - y) <
                        blockRad * blockRad
                    ) {
                        growthMask[
                            Math.floor(gy) * GROWTH_MASK_WIDTH + Math.floor(gx)
                        ] = 1;
                    }
                }
            }
        }
    }

    leafs = [];
    nodes = [];

    for (let i = 0; i < 5; i++) {
        let x = 0;
        let y = 0;
        let radius = 0;
        spaceFound = true;
        try {
            [x, y, radius] = LayOut.findSpaceForCircle(
                [GROWTH_MASK_HEIGHT * 0.04, GROWTH_MASK_HEIGHT * 0.05], // rad range
                [
                    0.5 * GROWTH_MASK_HEIGHT, // bounds: top
                    GROWTH_MASK_WIDTH -
                        Config.roots.rightMargin * GROWTH_MASK_WIDTH, // right
                    GROWTH_MASK_HEIGHT -
                        Config.roots.bottomMargin * GROWTH_MASK_HEIGHT, // bottom
                    Config.roots.leftMargin * GROWTH_MASK_WIDTH,
                ], // left						],
                true, // dodge lines
                true, // dodge circles
                0, // margin
                true, // allow shrinking of radius
                0.0001 * GROWTH_MASK_HEIGHT
            ); // allow shrinking of the radius until correct size is found
        } catch (Error) {
            spaceFound = false;
        }

        if (spaceFound) {
            LayOut.addCircle(new CircleSpacer(x, y, radius));

            const rootNode = new Node(x, y);

            rootNode.angle = randO.next() * 2 * PI;
            rootNode.radius = growthLengthBase;
            leafs.push(rootNode);
            nodes.push(rootNode);
        }
    }

    const colorMap = [];

    colorMode(HSB);

    const from = color(getColor("marbleFromColor"));
    const to = color(getColor("marbleToColor"));

    for (let i = 0; i < 1000; i++) {
        colorMap[i] = lerpColor(from, to, i / 1000);
    }

    const glowColor = getColor("marbleCenterGlow");
    const glowColorR = red(glowColor);
    const glowColorG = green(glowColor);
    const glowColorB = blue(glowColor);

    for (let b = 0; b < balls.length; b++) {
        BP.DOTS_MULT = 5;
        BP.DOTS_OPACITY = 0.05;

        marbleRenderer = new MarbleRenderer(getRandomFunction(), colorMap);

        marbleRenderer.init(
            Math.floor(balls[b].x - balls[b].radius),
            Math.floor(balls[b].y - balls[b].radius),
            Math.floor(balls[b].radius * 2),
            Math.floor(balls[b].radius * 2)
        );

        mainAnim.push(
            marbleRenderer
                .draw(BP.buffer, distortField, (1.0 * P_HEIGHT) / 2000)
                .stepSize(0.1)
        );

        mainAnim.push(
            BP.drawRoundGlowBuf(
                balls[b].x + (randO.next() - 0.5) * balls[b].radius * 0.3,
                balls[b].y + (randO.next() - 0.5) * balls[b].radius * 0.3,
                balls[b].radius * (randO.next() * 0.5 + 0.5),
                [glowColorR / 255, glowColorG / 255, glowColorB / 255]
            )
                .setDotsMult(5)
                .setOpacity(0.05)
                .stepSize(0.5)
        );

        mainAnim.push(
            BP.drawCircleBuf(
                balls[b].x,
                balls[b].y,
                balls[b].radius,
                1.0,
                [1, 1, 1],
                distortField,
                (1.0 * P_HEIGHT) / 2000
            )
                .setDotsMult(5)
                .setOpacity(0.05)
                .stepSize(0.5)
        );
        mainAnim.push(
            BP.drawCircleBuf(
                balls[b].x,
                balls[b].y,
                balls[b].radius,
                1.0 + Math.PI,
                [1, 1, 1],
                distortField,
                (1.0 * P_HEIGHT) / 2000
            )
                .setDotsMult(5)
                .setOpacity(0.05)
                .stepSize(0.5)
        );
    }

    growthLengthBase = 3;

    backgroundLayer = createGraphics(P_WIDTH / 2, P_HEIGHT / 2);
    backgroundLayer.pixelDensity(2);
    backgroundLayer.background(0);

    const vineColor = color(getColor("vineBaseColor"));
    vineBaseBrightness = brightness(vineColor);
    vineBaseHue = hue(vineColor);
    vineBaseSaturation = saturation(vineColor);

    const sparkleColor = color(getColor("sparkleBaseColor"));
    sparkleBaseBrightness = brightness(sparkleColor);
    sparkleBaseHue = hue(sparkleColor);
    sparkleBaseSaturation = saturation(sparkleColor);

    loop();

    running = true;
}

/** ******************************************************************

DRAW!

******************************************************************** */

function draw() {
    if (!running) {
        return;
    }

    if (!backgroundReady) {
        backgroundReady = mainAnim.step();

        if (
            backgroundReady ||
            (mainAnim.currentStep > 0 && mainAnim.stepCount % 20 == 0) ||
            mainAnim.currentStep > bgAnimPreviousStep
        ) {
            backgroundLayer.loadPixels();

            let row;
            let dloc;
            let sloc;

            for (let dx = 0; dx < P_WIDTH; dx++) {
                for (let dy = 0; dy < P_HEIGHT; dy++) {
                    row = dy * P_WIDTH + dx;
                    sloc = row * 3;
                    dloc = row * 4;

                    backgroundLayer.pixels[dloc] = BP.buffer[sloc] * 255;
                    backgroundLayer.pixels[dloc + 1] =
                        BP.buffer[sloc + 1] * 255;
                    backgroundLayer.pixels[dloc + 2] =
                        BP.buffer[sloc + 2] * 255;
                    backgroundLayer.pixels[dloc + 3] = 255;
                }
            }

            backgroundLayer.updatePixels();
            printGraphics.drawingContext.putImageData(
                backgroundLayer.drawingContext.getImageData(
                    0,
                    0,
                    P_WIDTH,
                    P_HEIGHT
                ),
                0,
                0
            );

            tint(255, 0.2);
            image(backgroundLayer, 0, 0, canvasWidth, canvasHeight);
        }

        if (mainAnim.currentStep > bgAnimPreviousStep) {
            stepsOnCurrentAnim = 0;
            bgAnimPreviousStep = mainAnim.currentStep;
        }

        stepsOnCurrentAnim = stepsOnCurrentAnim + 1;

        noStroke();
        fill(255);
        rect(0, mainAnim.currentStep * 5, stepsOnCurrentAnim * 2, 3);

        return;
    }

    noTint();

    if (growthFrameCount < Config.growth.iterations && leafs.length > 0) {
        for (let batch = 0; batch < 1; batch++) {
            const leafIndicesToBeRemoved = Array();

            const nLeafs = leafs.length;

            for (let i = 0; i < nLeafs; i++) {
                const l = leafs[i];

                if (l.count < 1000) {
                    let newAngle = l.angle + 0.1 * (randO.next() - 0.5);

                    if (newAngle > 1.5 * PI) {
                        newAngle = newAngle - 2 * PI;
                    }

                    newAngle = newAngle + 0.005;

                    if (newAngle < -PI / 2 && newAngle >= -1.5 * PI) {
                        newAngle = newAngle + 0.01;
                    }

                    if (newAngle > -PI / 2 && newAngle <= PI / 2) {
                        newAngle = newAngle - 0.01;
                    }

                    if (newAngle > PI / 2) {
                        newAngle = newAngle + 0.01;
                    }

                    const growthLength = growthLengthBase; // + GROWTH_MASK_RESOLUTION/2000 * (noise(l.x/P_WIDTH*5, l.y/P_HEIGHT*5) - 0.3);

                    const newX = l.x + cos(newAngle) * growthLength;
                    const newY = l.y + sin(newAngle) * growthLength;

                    const probeX = l.x + cos(newAngle) * growthLength;
                    const probeY = l.y + sin(newAngle) * growthLength;

                    let fits = true;

                    const gmCoord = Math.floor(
                        Math.floor(probeY) * GROWTH_MASK_WIDTH +
                            Math.floor(probeX)
                    );

                    fits = growthMask[gmCoord] == 0;

                    if (fits) {
                        const n = new Node(newX, newY, l);

                        n.radius = growthLength;
                        n.angle = newAngle;
                        n.count = l.count + 1;

                        leafIndicesToBeRemoved.push(i);
                        nodes.push(n);
                        leafs.push(n);

                        growthMask[gmCoord - 1 - GROWTH_MASK_WIDTH] = 1;
                        growthMask[gmCoord - GROWTH_MASK_WIDTH] = 1;
                        growthMask[gmCoord + 1 - GROWTH_MASK_WIDTH] = 1;

                        growthMask[gmCoord - 1] = 1;
                        growthMask[gmCoord] = 1;
                        growthMask[gmCoord + 1] = 1;

                        growthMask[gmCoord - 1 + GROWTH_MASK_WIDTH] = 1;
                        growthMask[gmCoord + GROWTH_MASK_WIDTH] = 1;
                        growthMask[gmCoord + 1 + GROWTH_MASK_WIDTH] = 1;
                    } else {
                        leafIndicesToBeRemoved.push(i);

                        let distFac = 0;

                        for (let b = 0; b < balls.length; b++) {
                            const dx = leafs[i].x * GX_TO_SX - balls[b].x;
                            const dy = leafs[i].y * GY_TO_SY - balls[b].y;
                            const dd = dx * dx + dy * dy;
                            const d = max(
                                ((sqrt(dd) - balls[b].radius) / P_HEIGHT) *
                                    1000,
                                0
                            );

                            distFac = max(distFac, 1 / (1 + d));
                        }

                        printGraphics.noStroke();
                        printGraphics.fill(
                            sparkleBaseHue + sin(step / 80) * 5,
                            sparkleBaseSaturation,
                            sparkleBaseBrightness,
                            1 + 200 * sqrt(distFac)
                        );
                        printGraphics.circle(
                            (probeX / 2) * GX_TO_SX,
                            (probeY / 2) * GY_TO_SY,
                            P_WIDTH / 1000 + (randO.next() * P_WIDTH) / 800
                        );
                    }
                } else {
                    leafIndicesToBeRemoved.push(i);
                }

                if (randO.next() > 0.92) {
                    let newAngle =
                        ((Math.round(randO.next()) ? -1 : 1) * PI) / 3 +
                        l.angle +
                        0.8 * (randO.next() - 0.5);

                    newAngle = newAngle % (2 * PI);
                    if (newAngle > 1.5 * PI) {
                        newAngle = newAngle - 2 * PI;
                    }

                    if (newAngle < PI / 4 && newAngle > -1.25 * PI) {
                        const growthLength = growthLengthBase;

                        const newX = l.x + cos(newAngle) * growthLength;
                        const newY = l.y + sin(newAngle) * growthLength;

                        const probeX = l.x + cos(newAngle) * growthLength;
                        const probeY = l.y + sin(newAngle) * growthLength;

                        let fits = true;

                        const gmCoord = Math.floor(
                            Math.floor(probeY) * GROWTH_MASK_WIDTH +
                                Math.floor(probeX)
                        );

                        fits = growthMask[gmCoord] == 0;

                        if (fits) {
                            const n = new Node(newX, newY, l);
                            n.angle = newAngle;
                            n.count = l.count + 10;
                            n.radius = growthLength;
                            nodes.push(n);
                            leafs.push(n);

                            growthMask[gmCoord - 1 - GROWTH_MASK_WIDTH] = 1;
                            growthMask[gmCoord - GROWTH_MASK_WIDTH] = 1;
                            growthMask[gmCoord + 1 - GROWTH_MASK_WIDTH] = 1;

                            growthMask[gmCoord - 1] = 1;
                            growthMask[gmCoord] = 1;
                            growthMask[gmCoord + 1] = 1;

                            growthMask[gmCoord - 1 + GROWTH_MASK_WIDTH] = 1;
                            growthMask[gmCoord + GROWTH_MASK_WIDTH] = 1;
                            growthMask[gmCoord + 1 + GROWTH_MASK_WIDTH] = 1;
                        }
                    }
                }
            }

            for (let i = leafIndicesToBeRemoved.length - 1; i >= 0; i--) {
                leafs.splice(leafIndicesToBeRemoved[i], 1);
            }

            for (let i = 0; i < leafs.length; i++) {
                if (leafs[i].parent) {
                    let distFac = 0;

                    for (let b = 0; b < balls.length; b++) {
                        const dx = leafs[i].x * GX_TO_SX - balls[b].x;
                        const dy = leafs[i].y * GY_TO_SY - balls[b].y;
                        const dd = dx * dx + dy * dy;
                        const d = max(
                            ((sqrt(dd) - balls[b].radius) / P_HEIGHT) * 1000,
                            0
                        );

                        distFac = max(distFac, 1 / (1 + d));
                    }

                    printGraphics.strokeCap(SQUARE);

                    printGraphics.stroke(
                        vineBaseHue + sin(step / 80) * 5,
                        vineBaseSaturation,
                        vineBaseBrightness,
                        10 + 200 * sqrt(distFac)
                    );

                    printGraphics.strokeWeight(
                        ((1 + sin(step / 40) * 0) / 3000) * P_HEIGHT
                    );
                    printGraphics.line(
                        0.5 * leafs[i].x * GX_TO_SX,
                        0.5 * leafs[i].y * GY_TO_SY,
                        0.5 * leafs[i].parent.x * GX_TO_SX,
                        0.5 * leafs[i].parent.y * GY_TO_SY
                    );
                }
            }
        }

        image(printGraphics, 0, 0, canvasWidth, canvasHeight);
        noStroke();
        growthFrameCount = growthFrameCount + 1;
    } else {
        if (!signatureDrawn) drawSignature(printGraphics);
        image(printGraphics, 0, 0, canvasWidth, canvasHeight);
        fxpreview();
        noLoop();
    }
}

function drawSignature(G) {
    const textS = (P_HEIGHT * 6) / 2400;
    const lineH = ((P_HEIGHT * 10) / 2400) * 1.5;

    G.colorMode(RGB);
    G.blendMode(SCREEN);
    G.noStroke();
    G.textAlign(LEFT);
    G.textFont(myFont);
    G.textSize(textS);
    G.fill(200, 200, 200);
    G.text(
        "O X Y G E N",
        (P_EDGE_LEFT * 1.5) / 2,
        0.5 * (P_HEIGHT - (P_HEIGHT - P_EDGE_BOTTOM) * 1.3 - lineH)
    );
    G.text(
        fxhash,
        0.5 * P_EDGE_LEFT * 1.5,
        0.5 * (P_HEIGHT - (P_HEIGHT - P_EDGE_BOTTOM) * 1.3)
    );
    G.textAlign(RIGHT);
    G.text(
        "E C K E R _ O _",
        0.5 * (P_WIDTH - (P_WIDTH - P_EDGE_RIGHT) * 1.5),
        0.5 * (P_HEIGHT - (P_HEIGHT - P_EDGE_BOTTOM) * 1.3)
    );
    G.blendMode(BLEND);
    signatureDrawn = true;
}
