let rectWidth;
let rectHeight;

const rectNumber = numberOfRects(fxrand());
const layers = numberOfLayers(fxrand());
const orientation = getOrientation(fxrand());
const palette = getPalette(fxrand());
let rectColorValues = [];

window.$fxhashFeatures = {
  "Layers": layers,
  "Color Palette": palette,
  "Number of Rectangles": rectNumber * layers,
  "Orientation": orientation
}

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 15);
    noLoop();
    for (let i = 0; i < rectNumber; i++) {
        let pushColors = [];
        for (let j = 0; j < layers; j++) {
            pushColors.push(getRectFillColor(fxrand(), palette));
        }
        rectColorValues.push(pushColors)
    }
}

function draw() {
    renderRects();
}

function renderRects() {
    for (let i = 0; i < rectNumber; i++) {
        for (let j = 0; j < layers; j++) {

            fill(rectColorValues[i][j]);

            if (orientation == 'x-axis') {
                rectWidth = ((windowWidth - 15) / rectNumber);
                rectHeight = ((windowHeight - 15) / layers);
                rect(((i * rectWidth)), ((j * rectHeight)), rectWidth, rectHeight);
            } else {
                rectWidth = ((windowWidth - 15) / layers);
                rectHeight = ((windowHeight - 15) / rectNumber);
                rect(((j * rectWidth)), ((i * rectHeight)), rectWidth, rectHeight);
            }
        }
    }
}

function windowResized() {
    noLoop();
    resizeCanvas(windowWidth - 15, windowHeight - 15);
}

function getOrientation(rand) {
    if (rand >= 0.8) {
        return 'y-axis';
    } else {
        return 'x-axis';
    }
}

function numberOfRects(rand) {
    if (rand >= 0.975) {
        return 4;
    } else if (rand <= 0.01) {
        return 2;
    } else if (rand <= 0.25) {
        return 8;
    } else if (rand <= 0.55) {
        return 10;
    } else {
        return 15;
    }
}

function numberOfLayers(rand) {
    if (rand >= 0.975) {
        return 1;
    } else if (rand <= 0.05) {
        return 3;
    } else if (rand <= 0.25) {
        return 4;
    } else {
        return 2;
    }
}

function getPalette(rand) {
    if (rand >= 0.8) {
        return 'Palette 1';
    } else if (rand <= 0.475) {
        return 'Palette 2';
    } else {
        return 'Palette 3';
    }
}

function getRectFillColor(rand, palette) {
    if (palette == 'Palette 1') {
        if (rand >= 0.975) {
            return '#3772FF';
        } else if (rand <= 0.01) {
            return '#DF2935';
        } else if (rand <= 0.25) {
            return '#E6E8E6';
        } else if (rand <= 0.55) {
            return '#FDCA40';
        } else {
            return '#080708';
        }
    } else if (palette == 'Palette 2') {
        if (rand >= 0.975) {
            return '#941C2F';
        } else if (rand <= 0.01) {
            return '#59F8E8';
        } else if (rand <= 0.25) {
            return '#C1CFDA';
        } else if (rand <= 0.55) {
            return '#20A4F3';
        } else {
            return '#03191E';
        }
    } else {
        if (rand >= 0.975) {
            return '#FB4D3D';
        } else if (rand <= 0.01) {
            return '#E40066';
        } else if (rand <= 0.25) {
            return '#03CEA4';
        } else if (rand <= 0.55) {
            return '#EAC435';
        } else {
            return '#345995';
        }
    }
}
