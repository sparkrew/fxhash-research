let drawingContext;


let strokeW;
let minSide;
let moonRadius;
let radiusDiv;
let numberOfWaves;
let waveness;
let numOfStars;
let numOfClouds;
let numberOfLayers;
let clouds;
let wavesType;
let waves;
let stars;

let c;


function setup() {
    minSide = 824;
    createCanvas(minSide, minSide);
    colorMode(HSB);
    drawingContext = canvas.getContext('2d');
    randomSeed(int(fxrand() * 1024 * 42));
    initRands();
    initFeatures();
    strokeWeight(strokeW);

    c = getRandomColor();
    addGrain(c);

    noLoop();
}


function drawArcs(radius, arcWidth, stepMultiplier = 10,
                  start = -PI * 1.25, stop = PI / 4,
                  randomStepBound,
                  randomWidthBound) {

    push();
    let step = strokeW * stepMultiplier;
    noFill();

    while (radius < arcWidth) {
        arcWidth -= step;
        for (let j = 0; j < 70; j++) {
            arc(random(-randomStepBound, randomStepBound),
                random(-randomStepBound, randomStepBound),
                arcWidth + random(-randomWidthBound, randomWidthBound),
                arcWidth + random(-randomWidthBound, randomWidthBound),
                start + random(-PI / 4, PI / 4),
                stop + random(-PI / 4, PI / 4)
            );
        }
    }
    pop();
}


function drawCloud(arcWidth, cloudWidth, numOfSteps = 5) {
    let step = cloudWidth / numOfSteps;
    let x = -cloudWidth;

    for (let currentStep = 1; currentStep <= numOfSteps; currentStep++) {
        let density = 1;
        let y = 0;
        if ((currentStep > 1) && (currentStep < numOfSteps)) {
            density = int(random(2, 4));
        }

        for (let i = 0; i < density; i++) {
            if (density > 1) {
                y = random(-height / 50, height / 50);
            }
            push();
            translate(x, y);
            drawArcs(0, arcWidth, 80, -PI, PI,
                arcWidth / 7, arcWidth / 10);
            pop();
        }
        x += step;
    }
}


function drawClouds() {
    let arcWidth = height / 30;
    let cloudWidth = width / 15;
    let x = 0;
    let y;
    if (numberOfLayers === 1) {
        y = height / random(9, 20);
    } else {
        y = height / 20;
    }
    let layerStep = (height / 3) / numberOfLayers;

    for (let i = 0; i < numberOfLayers; i++) {
        push();
        translate(x, y + layerStep * i);

        let hueVal = hue(c);
        let brightnessVal = brightness(c);
        stroke(hueVal, 88, brightnessVal * 0.55, 0.9);

        let step = (width + cloudWidth) / numOfClouds;

        for (let i = 0; i < numOfClouds; i++) {
            let randX = ((randomGaussian(0, width / 30)) + step * i);

            let cloudPoint = {
                x: randX,
                y: randomGaussian(0, height / 35)
            }
            push();
            translate(cloudPoint.x, cloudPoint.y);
            drawCloud(arcWidth, cloudWidth, int(random(4, 8)));
            pop();
        }
        pop();
    }
}


function drawWaves(numOfWaves, waveness, shift) {
    let j;
    let i;
    const stepY = (height - shift) / numOfWaves;
    const stepX = width / waveness;
    const lines = [];
    let waveWeight = strokeW * 8;
    strokeWeight(waveWeight);
    stroke(c);

    for (i = shift; i <= height; i += stepY) {
        const line = [];
        for (j = 0; j <= width + stepX; j += stepX) {
            const randY = random(stepY / 2);
            const point = {x: j, y: i + randY};
            line.push(point);
        }
        lines.push(line);
    }

    switch (wavesType) {
        case "Jagged": {
            for (i = 0; i < lines.length; i++) {

                drawingContext.beginPath();
                drawingContext.moveTo(lines[i][0].x, lines[i][0].y);

                for (j = 0; j < lines[i].length; j++) {
                    drawingContext.lineTo(lines[i][j].x, lines[i][j].y);
                }
                drawingContext.stroke();
            }
            break;
        }

        case "Still": {
            for (i = 0; i < lines.length; i++) {
                for (j = 0; j < lines[i].length; j++) {
                    if (random() > 0.8) {
                        line(lines[i][j].x, lines[i][j].y,
                            lines[i][j].x + randomGaussian(stepX * 3, stepX),
                            lines[i][j].y);
                        j += 4;
                    }
                }
            }
            break;
        }

        case "Smooth": {
            for (i = 0; i < lines.length; i++) {
                drawingContext.beginPath();
                drawingContext.moveTo(lines[i][0].x, lines[i][0].y);

                for (j = 0; j < lines[i].length - 2; j++) {
                    const xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
                    const yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
                    drawingContext.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
                }

                drawingContext.quadraticCurveTo(lines[i][j].x, lines[i][j].y,
                    lines[i][j + 1].x, lines[i][j + 1].y);
                drawingContext.stroke();
            }
        }
    }
}


function drawStarReflection(x, y) {
    push();
    strokeWeight(strokeW * randomGaussian(25, 10));
    let hueVal = hue(c);
    let brightnessVal = brightness(c);
    stroke(hueVal, 80, brightnessVal * 0.5, 0.8);
    point(x, y + height / 2 + randomGaussian(0, height / 5));
    pop();
}

function drawStars(numOfStars) {
    push();
    translate(0, height / 10);
    let hueVal = hue(c);
    let brightnessVal = brightness(c);
    stroke(hueVal, 95, brightnessVal * 0.95, 1);
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = c;

    let step = width / numOfStars;

    for (let i = 0; i < numOfStars; i++) {
        let randX = ((randomGaussian(0, width / 10)) + step * i);

        let starPoint = {
            x: randX,
            y: randomGaussian(0, height / 20)
        }
        if ((starPoint.x >= width / 2 - moonRadius / 2) &&
            (starPoint.x <= width / 2 + moonRadius / 2)) {
            starPoint.y -= moonRadius / 1.5;
        }
        strokeWeight(strokeW * random(2, 4));
        line(starPoint.x - 3, starPoint.y, starPoint.x + 3, starPoint.y);

        // star
        let starSize = strokeW * randomGaussian(40, 25);
        strokeWeight(starSize);
        point(starPoint.x, starPoint.y);

        // rays
        strokeWeight(starSize / 24);
        let rayHalfLength = starSize * 1.2;
        let rayRandY = random(-rayHalfLength, rayHalfLength);
        line(starPoint.x - rayHalfLength, starPoint.y - rayRandY,
            starPoint.x, starPoint.y);
        line(starPoint.x, starPoint.y,
            starPoint.x + rayHalfLength, starPoint.y + rayRandY);

        if (random() > 0.35) {
            drawStarReflection(starPoint.x, starPoint.y);
        }
    }
    pop();
}

function draw() {
    push();
    translate(width / 2, height / 6);
    let arcWidth = minSide * 2;

    let radiusShift = new Map();
    radiusShift.set(4, 1.12);
    radiusShift.set(5, 1.3);
    radiusShift.set(6, 1.45);
    radiusShift.set(7, 1.62);
    radiusShift.set(8, 1.77);

    drawArcs(moonRadius, arcWidth, 10,
        -PI * 1.25, PI / 4,
        height / 300, arcWidth / 300);
    pop();
    if (clouds) {
        drawClouds();
    }
    if (waves) {
        drawWaves(numberOfWaves, waveness,
            moonRadius * radiusShift.get(radiusDiv));
    }
    if (stars) {
        drawStars(numOfStars);
    }
}