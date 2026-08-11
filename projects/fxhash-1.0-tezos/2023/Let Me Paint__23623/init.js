function getAngle(x, y, mult = 0.01) {
    let noiseMult = 0.002 * mult;
    return map(noise(x * noiseMult, y * noiseMult), 0, 1, 0, TWO_PI);
}

function initBorders(margin) {
    let lineColor = PALETTE.outlineColor;
    let pointWeight = 0.12;
    let points = [
        {x: margin, y: margin}, // left-top
        {x: 1 - margin, y: margin}, // right-top
        {x: 1 - margin, y: 1 - margin}, // right-bottom
        {x: margin, y: 1 - margin}, // left-bottom
    ];
    let l = new InkLine(width * points[0].x, height * points[0].y,
        width * points[1].x, height * points[1].y, lineColor, pointWeight);
    elements.push(l);
    l = new InkLine(width * points[1].x, height * points[1].y,
        width * points[2].x, height * points[2].y, lineColor, pointWeight);
    elements.push(l);
    l = new InkLine(width * points[2].x, height * points[2].y,
        width * points[3].x, height * points[3].y, lineColor, pointWeight);
    elements.push(l);
    l = new InkLine(width * points[3].x, height * points[3].y,
        width * points[0].x, height * points[0].y, lineColor, pointWeight);
    elements.push(l);
}

function initElements() {
    let colors = shuffle(PALETTE.elementColors);
    let c = random(colors);
    let margin = fl(random(0.01, 0.09), 1000);

    let numOfRects = int(random(4));
    for (let i = 0; i < numOfRects; i++) {
        let x = width * random(0.05, 0.95);
        let y = height * random(0.05, 0.95);
        let angle = getAngle(x, y, random(0.15));
        pushAll();
        translateAll(x, y);
        rotateAll(angle);

        c = color(random(PALETTE.elementColors));
        let w = minSide * random(0.05, 0.25);
        let h = random([w, minSide * random(0.03, 0.25)]);

        c = color(hue(c), saturation(c) * random(0.65, 1),
            brightness(c) * random(0.9, 1.05), 0.2);
        fillAll(c);
        noStrokeAll();
        rect(0, 0, w, h, minSide * 0.006);
        mainLayer.rect(0, 0, w, h, minSide * 0.006);

        popAll();
    }
    if (random() > 0.5) {
        initBorders(margin);
    }

    let maxLineWidth = fl(random(0.04, 0.09));
    let numOfLines = int(random(20, 43));

    c = random(colors);
    for (let l = 0; l < numOfLines; l++) {
        let type = random([0, 1]);
        c = random(colors);
        let lineWidth = fl(random(0.012, maxLineWidth));

        elements.push(new RandomLine(c, lineWidth, type));
    }

    numOfLines = int(random(0, 14));
    for (let l = 0; l < numOfLines; l++) {
        let type = random([0, 1]);
        c = random(colors);
        let lineWidth = fl(random(0.0001, 0.001));
        elements.push(new RandomLine(c, lineWidth, type));
    }

    numOfLines = int(random(0, 4));
    for (let i = 0; i < numOfLines; i++) {
        initLine();
    }
    elements = shuffle(elements);

    numOfLines = int(random(8));
    for (let l = 0; l < numOfLines; l++) {
        let type = random([0, 1]);
        c = random(colors);
        let lineWidth = fl(random(0.008, 0.012));
        elements.push(new RandomLine(c, lineWidth, type));
    }
}


function initLine() {
    let x0 = random() * width;
    let y0 = -0.05 * height;

    let numOfLines = int(random(5, 18));

    for (let i = 0; i < numOfLines; i++) {
        let x1 = random() * width;
        let y1 = height / numOfLines * (i + 1);
        elements.push(new InkLine(x0, y0, x1, y1, PALETTE.outlineColor, 0.1));
        x0 = x1;
        y0 = y1;
    }
}