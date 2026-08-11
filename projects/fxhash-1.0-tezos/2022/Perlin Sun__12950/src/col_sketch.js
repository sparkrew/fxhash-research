p5.disableFriendlyErrors = true;

// let palettes;
// function preload() {
//   palettes = loadJSON("./json/palettes.json");
// }

//*******************************************************/
// birds

//*******************************************************/
// brush
let brush;
let nStrokes = 15;

//*******************************************************//
// noise
let size = 800;

let noiseCount;
let noiseTotal;

let cx;
let cy;

let ZOOM_RATE = size / 3.5;
let num_points = Math.round(size / 5);
let points = Array(num_points).fill([])
//*******************************************************//
// colours 
let sunCol1, sunCol2, bgCol1, bgCol2, grndCol, perlCol;

let colors = [];
//*******************************************************//
let cnvs, ctx;


let haze;
// let sunRad = Math.floor(fxrandBetween(50, 175));
let sunRad = Math.floor(fxrandBetween(size/12, size/4));

let lumens = Math.floor(fxrandBetween(4, 8));
let shad = 20;
let shadCol;
let shadBlur = 0;

if (sunRad < 75) {
    sunSize = "small";
} else if (sunRad < 110) {
    sunSize = "medium";
} else {
    sunSize = "big";
}

palette = "Purple Haze"

let seed = Math.floor(999999 * fxrand());

function setup() {
    createCanvas(size, size);
    // createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 1);
    smooth();

    haze= fxrandBetween(0,10);
    if (haze <= 8){
        haze = true;
    } else {
        haze = false;
    }

    noiseSeed(seed);
    randomSeed(seed);
    noiseCount = 0;
    noiseTotal = fxrandBetween(width /2, width);

    frameRate(100);

    cx = fxrandBetween(50, width - 50);
    cy = fxrandBetween(50, height - height / 2);

    cnvs = document.getElementById("defaultCanvas0");
    ctx = cnvs.getContext("2d");
    ctx.save();

    noStroke();
    smooth();
    //*******************************************************//
    // colours
    // sun colour
    c1 = color(255, 100, 100, 1);
    c2 = color(360, 100, 100, 1);

    // ground colour
    grndCol = color(69, 50, 67, 0.5);
    grndCol = color(119, 78.2, 39.6, 0.5);
    // grndCol = color(82, 28, 36, 0.5);
    // grndCol = color(72, 42, 51, 0.5);

    // background colours
    // Azure
    bgCol1 = color(233, 90, 31, 1);
    bgCol2 = color(211, 83, 86, 1);

    // Desert Days
    bgCol1 = color(60, 50, 85, 1);
    bgCol2 = color(30, 65, 40, 1);

    // Purple Haze
    bgCol1 = color(160, 100, 68, 1);
    bgCol2 = color(209, 100, 80, 1);

    // Arctic Twilight
    bgCol1 = color(143, 100, 62, 1);
    bgCol2 = color(209, 100, 80, 1);

    perlCol = color(25, 100, 100, 0.5);

    colors = [
        color(29, 63, 40, 0.5),
        color(61, 49, 86, 0.5),
        color(100, 100, 150, 0.5),
    ];

    //*******************************************************//
    brush = new Brush();
    //*******************************************************//
    // for (i = 0; i < bird.length; i=i+1) {
    //     bird[i] = new Bird();
    //   }
    //*******************************************************//
    bg = new bg_c();

    ctx.restore();

    points = points.map(rng_point)
    points.map((item) => point(item.x, item.y));
    //*******************************************************//
}

function draw() {
    // bg.draw();
    // background(bg);
    noiseCount++
    if (noiseCount < 50) {
        ground();
    } else if (noiseCount >= 50 && noiseCount <= noiseTotal) {
        noisy();
    } else if (noiseCount <= noiseTotal + 20) {
        // birds();
    } else if (noiseCount <= noiseTotal + 21) {
        fxpreview();
        print("Complete");
        noLoop();
    }
}

function bg_c() {

    setGradient(0, 0, width, height, bgCol1, bgCol2);

    // loop through multiple times to increase shadow intensity
    // unless haze = false
    print("Sun Rad " + sunRad);
    print("lumens " + lumens);
    print("haze " + haze);

    if (haze == false) {
    lumens = 0;
    // ctx.restore();
    } else if (sunRad <= 100 && lumens <= 6) {
        print("It brightened up a bit");
        lumens = 7;
        shad = 100;
        shadCol=c2;
        shadBlur = (100 * sunRad) / width*8;
        ctx.shadowBlur = shadBlur;
        ctx.shadowColor = shadCol;
    } else {
        shad = 200;
        shadCol=c2;
        shadBlur = (100 * sunRad) / width*10;
        ctx.shadowBlur = shadBlur;
        ctx.shadowColor = shadCol;
    }

    for (loopShad = 0; loopShad <= lumens; loopShad++) {

        let n = 100;
        let inc = TWO_PI / n;

        fill(lerpColor(c1, c2, 1));
        stroke(c2);
        beginShape();
        for (let i = 0; i < TWO_PI; i += inc) {
            let x = cos(i + sin(i * 0.1) * 150) * sunRad;
            let y = sin(i + sin(i * 0.1) * 150) * sunRad;
            vertex(x + cx, y + cy);
        }
        endShape();
    }
}

function setGradient(x, y, w, h, bgCol1, bgCol2) {
    noFill();
    for (i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        c = lerpColor(bgCol1, bgCol2, inter);
        d = lerpColor(bgCol1, bgCol2, 0.1);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function fxrandBetween(a, b) {
    return a + (b - a) * fxrand();
}

function rng_point() {
    let r = (sunRad+(shadBlur)) * sqrt(fxrand());
    let theta = 2 * PI * fxrand();
    let x = cx + r * cos(theta);
    let y = cy + r * sin(theta);
    return {
        'x': x,
        'y': y,
        'dir': fxrandBetween(-1,1),
        'length': 0
    };
}

function noisy() {

    points = points.map((item) => {
        let x = item.x;
        let y = item.y;
        let length = item.length;

        let r = sqrt(pow(item.x - cx, 2) + pow(item.y - cy, 2));
        stroke(perlCol);
        strokeWeight(1);
        let dir = item.dir;

        if (in_circle(x, y) && dir !== 0) {
            n = noise(x / ZOOM_RATE, y / ZOOM_RATE, sqrt(pow(x / ZOOM_RATE, 2) + pow(y / ZOOM_RATE, 2)));
            x += .5 * sin(2 * PI * n) * dir;
            y += .5 * cos(2 * PI * n) * dir;

            let d = dist(x, y, cx, c2);

            if(d <= sunRad/2){
                perlCol.setAlpha(0.5);
            } else if (d <= sunRad/3){
                perlCol.setAlpha(0.3);
            } else if (d <= sunRad/4){
                perlCol.setAlpha(0.1);
            } else {
                perlCol.setAlpha(0.08);
            }

            length += 2;
            point(x, y);
        }

        if (fxrand() > (sunRad + lumens) / length) {
            dir = 0;
            return rng_point();
        }

        return {
            'x': x,
            'y': y,
            'dir': dir,
            'length': length
        };
    })
}

function in_circle(x, y) {
    // print(shad);
    let rndX = fxrandBetween(x, x + shad/6);
    let rndY = fxrandBetween(y, y + shad/6);
    // return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, 2);
    // return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, lumens);
    if(haze==false){
        return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, 2);
    } else {
        // return pow(cx - rndX, 2) + pow(cy - rndY, 2) < pow(sunRad,2);
        return pow(cx - rndX, 2) + pow(cy - rndY, 2) < pow(sunRad+(shadBlur*lumens), 2);
    }
    
}

function ground() {
    let length = fxrandBetween(100, 400);
    let x0 = fxrandBetween(0 - length, width + length);
    let y0 = fxrandBetween(height - 50, height);
    push();
    translate(x0, y0);
    rotate(0);
    brush.strokeWeight(50);
    brush.color(grndCol);
    brush.draw(length);
    pop();
}

class Brush {
    constructor() {
        this.col = color(0, 0.5);
        this.weight = 30;
    }

    color(col) {
        this.col = col;
    }
    strokeWeight(pixels) {
        this.thickness = pixels;
    }
    draw(length) {
        const curve = this.buildCurve(this.thickness, length);
        const nStrokes = this.evaluateNStrokes(this.thickness);

        for (let i = 0; i < nStrokes; i++) {
            const points = this.randomizeCurve(curve, this.thickness);
            const c = this.randomizeColor(this.col);
            const weight = this.randomizeStrokeWeight(this.thickness);

            noFill();
            stroke(c);
            strokeWeight(weight);

            beginShape();
            for (let point of points) {
                curveVertex(point.x, point.y);
            }
            endShape();
        }
    }

    buildCurve(thickness, length) {
        const nPoints = length;
        const points = [];
        const direction = random([-1, 1]);
        for (let i = 0; i <= nPoints; i++) {
            points.push({
                x: lerp(0, length, float(i) / nPoints),
                y: lerp(0, thickness / 4.0, direction * pow(float(i) / nPoints, 3)),
            });
        }
        return points;
    }

    evaluateNStrokes(thickness) {
        const {
            minWeight,
            maxWeight
        } = this.minMaxStrokeWeight(thickness);
        const averageThickness = 0.5 * (minWeight + maxWeight);
        const nStrokes = (4 * thickness) / averageThickness;
        return nStrokes;
    }

    randomizeCurve(curve, thickness) {
        const w = thickness;
        const length = max(curve.map((point) => point.x));

        // STEP 1: find begin and end of original curve;
        const deltaY = random(-w / 2, w / 2);
        const begin = random(0, 10);
        const end =
            curve.length -
            w * pow(deltaY / w, 2) -
            (w / 3.0) * (0.7 - noise((3 * deltaY) / w)) -
            random(0, 10.0);
        let points = curve.slice(begin, end);

        // STEP 2: randomize position of points
        points = points.map((point) => {
            const newY =
                point.y +
                deltaY +
                (deltaY / 3.0) *
                pow(point.x / float(length), 2) *
                noise(point.x / 100.0, point.y / 100.0);
            return {
                x: point.x,
                y: newY,
            };
        });
        return points;
    }

    randomizeColor(col) {
        const cMode = colorMode();
        colorMode(HSB);
        const newColor = color(
            hue(col) + random(0, 10),
            saturation(col) + random(-10, 10),
            brightness(col) + random(-10, 10),
            alpha(col)
        );
        colorMode(cMode);
        return newColor;
    }

    minMaxStrokeWeight(thickness) {
        const maxWeight = min(thickness / 10.0, 3);
        const minWeight = maxWeight / 10.0;
        return {
            minWeight,
            maxWeight
        };
    }

    randomizeStrokeWeight(thickness) {
        const {
            minWeight,
            maxWeight
        } = this.minMaxStrokeWeight(thickness);
        return random(minWeight, maxWeight);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, [noRedraw]);
}

// function bird() {
//     let length = fxrandBetween(100, 400);
//     let x0 = fxrandBetween(0 - length, width + length);
//     let y0 = fxrandBetween(height - 50, height);
//     push();
//     translate(x0, y0);
//     rotate(0);
//     brush.strokeWeight(50);
//     brush.color(grndCol);
//     brush.draw(length);
//     pop();
// }


// function mouseClicked() {
//   loop();
// }