function fl(x, n = 1000000) {
    return Math.floor(x * n) / n;
}

function initFormat() {
    let ratio = 16 / 20; // width / height
    return [int(minSide * ratio), int(minSide)];
}

function addBlot() {
    pushAll();

    let x = random(0.05, 0.95) * width;
    let y = random(0.05, 0.95) * height;
    let w = random(0.02, 0.08) * minSide;
    let h = random(0.02, 0.08) * minSide;
    let c = color(random(PALETTE.elementColors));
    c = color(hue(c), saturation(c) * random(0.2, 0.8),
        brightness(c) * random(0.8, 1), 0.04);

    fillAll(c);
    noStrokeAll();
    lineLayer.ellipse(x, y, w, h);
    ellipse(x, y, w, h);

    popAll();
}


function addLines() {
    pushAll();
    strokeWeight(strokeW * 0.01);
    mainLayer.strokeWeight(strokeW * 0.01);
    let numOfLines = 400;
    let stepSize = width / numOfLines;
    let col = PALETTE.outlineColor;

    for (let i = 0; i < numOfLines; i++) {
        let stMult = random(0.012);
        let c = color(hue(col), saturation(col), brightness(col), fl(random(0.03, 0.07)));
        strokeAll(c);
        strokeWeightAll(strokeW * stMult);

        line(stepSize * i, 0, stepSize * i, height);
        mainLayer.line(stepSize * i, 0, stepSize * i, height);
    }
    pop();
    mainLayer.pop();
}


function addPlane() {
    pushAll();
    strokeWeightAll(strokeW * 0.4);
    strokeCapAll(PROJECT);

    PALETTE.elementColors = shuffle(PALETTE.elementColors);
    let c = PALETTE.elementColors.pop();

    c = color(c);
    c = color(hue(c), saturation(c) * 0.35, brightness(c), 0.08);

    strokeAll(c);
    if (random() > 0.2) {
        noStrokeAll();
        fillAll(c);
    } else {
        noFill();
        mainLayer.noFill();
    }

    let x = 0;
    let y = 0;
    let side = int(random(4));
    let numOfVerts = 1;
    beginShape();
    mainLayer.beginShape();

    for (let i = 0; i < numOfVerts; i++) {
        x = random(0.1, 0.9) * width;
        y = random(0.1, 0.9) * height;
        vertex(x, y);
        mainLayer.vertex(x, y);
    }

    switch (side) {
        case 0: { // top
            x = random(-0.05, 0.3) * width;
            vertex(x, -height * 0.02);
            mainLayer.vertex(x, -height * 0.02);

            x = random(0.5, 1.05) * width;
            vertex(x, -height * 0.02);
            mainLayer.vertex(x, -height * 0.02);
            break;
        }
        case 1: { // right
            y = random(-0.05, 0.3) * height;
            vertex(width * 1.02, y);
            mainLayer.vertex(width * 1.02, y);

            y = random(0.5, 1.05) * height;
            vertex(width * 1.02, y);
            mainLayer.vertex(width * 1.02, y);

            break;
        }
        case 2: { // bottom
            x = random(-0.05, 0.3) * width;
            vertex(x, height * 1.02);
            mainLayer.vertex(x, height * 1.02);

            x = random(0.5, 1.05) * width;
            vertex(x, height * 1.02);
            mainLayer.vertex(x, height * 1.02);
            break;
        }
        case 3: { // left
            y = random(-0.05, 0.3) * height;
            vertex(-width * 0.02, y);
            mainLayer.vertex(-width * 0.02, y);

            y = random(0.5, 1.05) * height;
            vertex(-width * 0.02, y);
            mainLayer.vertex(-width * 0.02, y);
            break;
        }
    }
    endShape(CLOSE);
    mainLayer.endShape(CLOSE);

    popAll();
}


function addCircles() {
    pushAll();
    strokeWeightAll(strokeW * 0.4);
    strokeCapAll(PROJECT);

    let numOfCircles = int(random(0, 4));
    for (let i = 0; i < numOfCircles; i++) {
        let x = random(0.05, 0.95) * width;
        let y = random(0.05, 0.95) * height;
        let size = random(0.02, 0.06) * minSide;
        let c = random(PALETTE.elementColors);

        strokeAll(c);

        if (random() > 0.2) {
            noStrokeAll();
            fillAll(c);
        } else {
            noFill();
            mainLayer.noFill();
        }

        circle(x, y, size);
        mainLayer.circle(x, y, size);
    }
    popAll();
}


function addRects() {
    let rects = [];

    pushAll();
    strokeWeightAll(strokeW * 0.4);
    strokeCapAll(PROJECT);

    rectMode(CENTER);
    mainLayer.rectMode(CENTER);

    let numOfRects = int(random(3, 7));
    for (let i = 0; i < numOfRects; i++) {
        let c = random(PALETTE.elementColors);
        noStrokeAll();

        if (random() > 0.2) {
            fillAll(c);
        } else {
            noFill();
            mainLayer.noFill();
        }

        let x = random(0.08, 0.92) * width;
        let y = random(0.08, 0.92) * height;

        let size = minSide * random([random(0.02, 0.06), random(0.02, 0.06),
            random(0.02, 0.08), random(0.02, 0.14)]);

        let skip = false;

        if (rects.length === 0) {
            rects.push({x, y, size});
        } else {
            for (let j = 0; j < rects.length; j++) {
                if ((abs(x - rects[j].x) < (abs(size + rects[j].size) / 2) * 1.2)
                    || (abs(y - rects[j].y) < (abs(size + rects[j].size) / 2) * 1.2)) {
                    skip = true;
                    break;
                }
            }
        }
        if (skip) {
            i--;
            continue;
        }
        rects.push({x, y, size});

        c = PALETTE.outlineColor;

        pushAll();
        if (random() > 0.5) {
            if (random() > 0.5) {
                new InkLine(0, y, width, y, c).drawWholeLine();
            } else {
                let sign = random([-1, 1]);
                new InkLine(x, y, width * sign, y, c).drawWholeLine();
            }
        }
        if (random() > 0.5) {
            if (random() > 0.5) {
                new InkLine(x, 0, x, height, c).drawWholeLine();
            } else {
                let sign = random([-1, 1]);
                new InkLine(x, y, x, height * sign, c).drawWholeLine();
            }
        }
        popAll();

        square(x, y, size);
        mainLayer.square(x, y, size);

        /// outlines
        for (let i = 0; i < 2; i++) {
            new InkLine(x - size / 2, y - size / 2, x + size / 2, y - size / 2, c).drawWholeLine();
            new InkLine(x + size / 2, y - size / 2, x + size / 2, y + size / 2, c).drawWholeLine();
            new InkLine(x + size / 2, y + size / 2, x - size / 2, y + size / 2, c).drawWholeLine();
            new InkLine(x - size / 2, y + size / 2, x - size / 2, y - size / 2, c).drawWholeLine();
        }
        ///
    }
    popAll();
}

function addDots() {
    pushAll();
    let numOfDots = int(random(20, 80));
    let c = color(hue(PALETTE.back), saturation(PALETTE.back), brightness(PALETTE.back), 0.6);

    for (let i = 0; i < numOfDots; i++) {
        let x = random() * width;
        let y = random() * height;

        let size = random(0.001, 0.002) * minSide;
        strokeWeightAll(size);
        strokeAll(c);

        lineLayer.point(x, y);
        point(x, y);
    }
    popAll();
}

function getSpeed(currentStep, maxSteps, minSpeed = 1, maxSpeed = 12) {
    let speed;

    if (currentStep < 0.5 * maxSteps) {
        speed = int(map(lerp(currentStep, maxSteps, 0.05),
            0, maxSteps, minSpeed, maxSpeed));
    } else {
        speed = int(map(lerp(currentStep, maxSteps, 0.05),
            0, maxSteps, maxSpeed, minSpeed));
    }
    return max(speed, 1);
}

function pushAll() {
    push();
    layers.forEach(l => l.push());
}

function popAll() {
    pop();
    layers.forEach(l => l.pop());
}

function translateAll(x, y) {
    translate(x, y);
    layers.forEach(l => l.translate(x, y));
}

function rotateAll(angle) {
    rotate(angle);
    layers.forEach(l => l.rotate(angle));
}

function fillAll(c) {
    fill(c);
    layers.forEach(l => l.fill(c));
}

function noFillAll() {
    noFill();
    layers.forEach(l => l.noFill());
}

function strokeAll(c) {
    stroke(c);
    layers.forEach(l => l.stroke(c));
}

function strokeCapAll(cap) {
    strokeCap(cap);
    layers.forEach(l => l.strokeCap(cap));
}

function noStrokeAll() {
    noStroke();
    layers.forEach(l => l.noStroke());
}

function strokeWeightAll(w) {
    strokeWeight(w);
    layers.forEach(l => l.strokeWeight(w));
}