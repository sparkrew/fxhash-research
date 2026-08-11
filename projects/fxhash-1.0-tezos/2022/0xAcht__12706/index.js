let cs = 2000;
let is;
let pg, pg2, pg3;
let grainShader;

let frequency;
let amplitude;
let alpha
function preload() {
    // load the shader
    grainShader = loadShader("shader.vert", "shader.frag");
}

console.log(fxhash)

let boxSplit
function setup() {
    num = fxhash.split("").reduce((acc, cur) => acc * cur.charCodeAt(0), 1);
    num = num / 10 ** 90;
    randomSeed(num);
    noiseSeed(num);

    
    pg = createGraphics(cs, cs);
    pg2 = createGraphics(cs, cs, WEBGL);
    pg.pixelDensity(2);
    pg2.pixelDensity(2);
    pg.colorMode(HSB);

    baseHue = (fxrand() * 190 + 170) % 360;
    //baseHue = fxrand() * 360;

    let hueStepConfig = {
        40: [0.02, 0.2, 0.03, 0.06],
        60:[0.02, 0.17, 0.03, 0.05],
        80:[0.02, 0.1, 0.01, 0.03],
        //150:[0.01, 0.08, 0.04, 0.06],
    }
    boxSplit = random(Object.keys(hueStepConfig))

    let c = hueStepConfig[boxSplit]
    alpha = map(fxrand(), 0, 1, c[2], c[3])
    hueStep = map(fxrand(), 0, 1, c[0], c[1])

    frequency = 0.03 * fxrand();
    amplitude = 0.01 * fxrand();

    pg.background(37, 4, 97);
    pg.background(baseHue, 50, 100);
    makeBackground(baseHue);

    let margin = 0;
    let bb = new Box(
        margin * cs,
        margin * cs,
        cs * (1 - 2 * margin),
        cs * (1 - 2 * margin),
    );
    let b = new Box(bb.xc(0.125), bb.yc(0.125), bb.w * 0.5, bb.h * 0.5);
    while (b.tr.x <= bb.xc(0.876)) {
        splitBox(b, 1);
        b = new Box(b.x + b.w / boxSplit, b.y + b.h / boxSplit, b.w, b.h);
    }
    flipAndRotate();
}

function flipAndRotate() {
    img = pg.get();
    pg.push();
    if (fxrand() < 0.5) {
        pg.scale(-1, 1);
        pg.translate(-cs, 0);
    }
    if (fxrand() < 0.5) {
        pg.translate(cs * 0.5, cs * 0.5);
        pg.rotate(PI);
        pg.translate(-cs * 0.5, -cs * 0.5);
    }
    pg.clear();
    pg.image(img, 0, 0, cs, cs);
    pg.pop();
}

function makeBackground(baseHue) {
    pg.push();
    let steps = [
        pg.color(baseHue, 30, 100),
        pg.color((baseHue + map(fxrand(), 0, 1, 20, 30)) % 360, 50, 100),
    ];
    let gradient = getGradient(cs, cs, 0, 0, steps);
    fillGradient(gradient);
    pg.noStroke();
    pg.rect(0, 0, cs, cs);
    pg.pop();
}


function linesAround(b) {
    let nf = 0.003;
    let numLines = Math.ceil(noise(b.x * nf, b.y * nf) * 4 + 1);
    pg.push();
    if (baseHue > 70 && baseHue < 150) baseHue = 160
    baseHue = (baseHue + hueStep) % 360;

    let hueShift = (fxrand() * fxrand() * 100 + 50) / numLines;

    pg.noStroke();

    let colorSteps = [];

    for (let i = 0; i < numLines; i++) {
        let h = (baseHue + i * hueShift) % 360;

        colorSteps.push(pg.color(h, 100, 100, alpha));
    }

    colorSteps = colorSteps;
    let gradient = getGradient(b.x, b.y, b.tr.x, b.tr.y, colorSteps);
    fillGradient(gradient);
    pg.strokeWeight(0.0001 * cs);
    pg.stroke(100)
    pg.strokeWeight(0);
    pg.rect(b.xc(0.1), b.xc(0.1), b.w * 0.8, b.h * 0.8);
    pg.pop();
}

let maxDepth = 4;
let latestDepth = 0;
function splitBox(b, depth) {
    if (
        (fxrand() < 0.1 + depth ** 1.3 * 0.05 + latestDepth * 0.05 ||
        depth > maxDepth)
    ) {
        //shiftBox(b)

        //linesInBox(b, Math.ceil(fxrand() * 4 + 1));
        linesAround(b);

        latestDepth = depth;
        return;
    }

    let grid = b.gridify(2, 2);
    grid.forEach((row) => row.forEach((b) => splitBox(b, depth + 1)));
}

function linesInBox(b, numLines) {
    baseHue = (baseHue + hueStep) % 360;

    let hueShift = (fxrand() * fxrand() * 100 + 50) / numLines;

    pg.noStroke();

    let bg = pg.color(37, 4, 97);

    let colorSteps = [];

    let cstep = 25 / numLines;
    for (let i = 0; i < numLines - 1; i++) {
        let h = (baseHue + i * hueShift) % 360;
        let s = 75 + (i + 1) * cstep;
        let b = 75 + (i + 1) * cstep ** 1.3;
        console.log(i, numLines, s, b);
        colorSteps.push(pg.color(h, s, b));
    }

    colorSteps = [bg].concat(colorSteps).concat(bg);
    let lineStep = 1 / (numLines + 1);

    let margin = 0.1;
    let [x1, y1] = b.coords(margin, margin);
    let subBox = new Box(
        x1,
        y1,
        b.w * (1 - 2 * margin),
        b.h * (1 - 2 * margin)
    );

    let w = subBox.h / numLines;
    for (let i = 0; i < numLines; i++) {
        steps = colorSteps.slice(i, i + 2);
        let y = lineStep * (i + 1);
        lineInBoxWithGradient(subBox, 0.2, y, 0.8, y, w, steps);
    }
}

function setImage() {
    clear();
    is = min(windowHeight, windowWidth);
    createCanvas(is, is);
    img = pg2.get();
    image(img, 0, 0, is, is);
}

function lineInBoxWithGradient(b, x1r, y1r, x2r, y2r, w, steps) {
    let gradient = getBoxGradient(b, x1r, y1r, x2r, y2r, steps);
    fillGradient(gradient);
    lineInBox(b, x1r, y1r, x2r, y2r, w);
}

let edges = 0.25 + fxrand() * 0.75;
function lineInBox(b, x1r, y1r, x2r, y2r, w) {
    let [x1, y1] = b.coords(x1r, y1r);
    let [x2, y2] = b.coords(x2r, y2r);

    // this only works with horizontal lines and is a nasty hack
    pg.rect(x1, y1 - 0.5 * w, x2 - x1, w, w * edges);
}

function getBoxGradient(b, x1r, y1r, x2r, y2r, steps) {
    let [x1, y1] = b.coords(x1r, y1r);
    let [x2, y2] = b.coords(x2r, y2r);
    return getGradient(x1, y1, x2, y2, steps);
}

function draw() {
    if (frameCount > 2) noLoop();
    grainShader.setUniform("u_resolution", [cs, cs]);
    grainShader.setUniform("u_background", pg);
    pg2.shader(grainShader);

    pg2.rect(0, 0, cs, cs);

    setImage();
    //if (frameCount > 2) save()
    if (frameCount > 2) fxpreview()
}

function getGradient(x1, y1, x2, y2, steps) {
    gradient = pg.drawingContext.createLinearGradient(x1, y1, x2, y2);

    s = 1 / (steps.length - 1);
    for (let i = 0; i < steps.length; i++) {
        gradient.addColorStop(i * s, steps[i]);
    }

    return gradient;
}

function fillGradient(g) {
    pg.drawingContext.fillStyle = g;
}

function strokeGradient(g) {
    pg.drawingContext.strokeStyle = g;
}

Box = class {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = createVector(x + w * 0.5, y + h * 0.5);
        this.tl = createVector(x, y);
        this.tr = createVector(x + w, y);
        this.br = createVector(x + w, y + h);
        this.bl = createVector(x, y + h);
        this.tc = createVector(x + w * 0.5, y);
        this.rc = createVector(x + w, y + h * 0.5);
        this.bc = createVector(x + w * 0.5, y + h);
        this.lc = createVector(x, y + h * 0.5);
    }
    gridify(gridWidth, gridHeight) {
        let grid = [];
        let boxWidth = this.w / gridWidth;
        let boxHeight = this.h / gridHeight;

        for (let i = 0; i < gridHeight; i++) {
            grid.push([]);
            for (let j = 0; j < gridWidth; j++) {
                grid[i].push(
                    new Box(
                        this.x + boxWidth * j,
                        this.y + boxHeight * i,
                        boxWidth,
                        boxHeight
                    )
                );
            }
        }
        return grid;
    }
    randomPoint() {
        return createVector(
            this.x + fxrand() * this.w,
            this.y + fxrand() * this.h
        );
    }

    coords(xRatio, yRatio) {
        return [this.xc(xRatio), this.yc(yRatio)];
    }

    xc(ratio) {
        return this.x + this.w * ratio;
    }

    yc(ratio) {
        return this.y + this.h * ratio;
    }
};

function shiftVertex(v) {
    v.y += sin(v.x * frequency) * cs * amplitude; //noise(v.y * 0.01, v.x * 0.01) * 0.1
}

function shiftBox(box) {
    shiftVertex(box);
    shiftVertex(box.c);
    shiftVertex(box.tl);
    shiftVertex(box.tr);
    shiftVertex(box.br);
    shiftVertex(box.bl);
    shiftVertex(box.tc);
    shiftVertex(box.rc);
    shiftVertex(box.bc);
    shiftVertex(box.lc);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        pg2.save(`${fxhash}.png`);
    }
}

function windowResized() {
    setImage()
}
