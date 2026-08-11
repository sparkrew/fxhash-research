let vw = 1400;
let vh = 1980;
let noiseScale2 = 0.07;
let fxrandArr = [];
let steps;
let steps2;
let noiseScale;
let colorsssss = ['#252D40', '#78C4C6', '#FF5733', '#581845', '#900C3F', '#0000ff', '#ff00ff', '#0ff0ff', '#ff000f', '#000f3f', '#4f4f4f', '#8d47b3', '#40318d', '#d0dc71', '#5a86ba', '#e15d3f', '#222022', '#3b7e4a', '#eec51b', '#C7395F', '#DED4E8', '#E8BA40', '#EDCBD2', '#80C4B7', '#E3856B', '#3B5BA5', '#E87A5D', '#F3B941', '#678CEC', '#D49BAE', '#8d47b3', '#BBCB50', '#fff', '#4AAFD5', '#91B187', '#E7A339', '#E26274', '#FBEAE7', '#EDF4F2', '#7C8363', '#31473A', '#CADCFC', '#8AB6F9', '#D3CAE2', '#E6C17A', '#F6EDE3', '#D5CAE4', '#E1E5EB', '#E59462', '#81CAD6', '#fff', '#EDCD44', '#DC3E26', '#F2EC9B', '#96FFBD', '#1803A5', '#68A4A5', '#4C8055', '#DF3C5F', '#224193', '#6F9BD1', '#E17888', '#AE3B8B', '#DD671E', '#9EE8E1', '#0C0D0D', '#96FFBD', '#962E2A', '#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#814141', '#00FFFF', '#7FFFD4', '#454B1B', '#AAFF00', '#FFBF00', '#CC5500', '#FF10F0', ];
let colorssss = ['#252D40', '#78C4C6', '#FF5733', '#581845', '#900C3F', '#0000ff', '#ff00ff', '#0ff0ff', '#ff000f', '#000f3f', '#4f4f4f', '#8d47b3', '#40318d', '#d0dc71'];
let myTypeR;
let scaleFactor = 1;
let j = ["+", "-"];
let p = [0, 1, "•", "§", "∞", "¢", "£"];
let z = [0, 1, "•", "§", "∞", "¢", "£"];
let q = ["•"];
let yo = [6, 9];
let yoyo = [01, 22, 1];
let arrays = [j, p, z, q, yo, yoyo];
let showText = false;
let colorPalette = ['#252D40', '#78C4C6', '#FF5733', '#581845', '#900C3F', '#0000ff', '#ff00ff', '#0ff0ff', '#ff000f', '#000f3f', '#4f4f4f', '#8d47b3', '#40318d', '#d0dc71'];
let colorPalettes = [
    ['#252D40', '#78C4C6', '#FF5733', '#581845', '#900C3F', '#0000ff', '#ff00ff', '#0ff0ff', '#ff000f', '#000f3f', '#4f4f4f', '#8d47b3', '#40318d', '#d0dc71', '#5a86ba', '#e15d3f', '#222022', '#3b7e4a', '#eec51b', '#C7395F', '#DED4E8', '#E8BA40', '#EDCBD2', '#80C4B7', '#E3856B', '#3B5BA5', '#E87A5D', '#F3B941', '#678CEC', '#D49BAE', '#8d47b3', '#BBCB50', '#fff', '#4AAFD5', '#91B187', '#E7A339', '#E26274', '#FBEAE7', '#EDF4F2', '#7C8363', '#31473A', '#CADCFC', '#8AB6F9', '#D3CAE2', '#E6C17A', '#F6EDE3', '#D5CAE4', '#E1E5EB', '#E59462', '#81CAD6', '#fff', '#EDCD44', '#DC3E26', '#F2EC9B', '#96FFBD', '#1803A5', '#68A4A5', '#4C8055', '#DF3C5F', '#224193', '#6F9BD1', '#E17888', '#AE3B8B', '#DD671E', '#9EE8E1', '#0C0D0D', '#96FFBD', '#962E2A', '#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#814141', '#00FFFF', '#7FFFD4', '#454B1B', '#AAFF00', '#FFBF00', '#CC5500', '#FF10F0'],
    ["#ffff", "#1B1B1B"]
];

//* Random OA, THX BRO!
function r(i) {
    return fxrandArr[round(abs(i)) % fxrandArr.length];
}

function random2(arg1, arg2, seed) {
    let rand;
    if (seed == null) {
        rand = fxrand();
    } else {
        rand = seed;
    }
    if (Array.isArray(arg1)) {
        return arg1[round(random2(0, arg1.length - 1, seed))]
    } else { return rand * (arg2 - arg1) + arg1 }
}

let img;

function setup() {
    noSmooth();
    colorMode(RGB);
    createCanvas(vw, vh);
    ctx = canvas.getContext("2d");
    grainG = createGraphics(width, height, WEBGL);
    rectMode(CENTER);
    ellipseMode(CENTER);
    steps = getGradientColors();
    steps2 = getGradientColors();
    // noLoop()
    let img = createImage(100, 100);
    img.loadPixels();
    for (let i = 0; i < img.pixels.length; i += 4) {
        img.pixels[i] = 255; // R value
        img.pixels[i + 1] = 0; // G value
        img.pixels[i + 2] = 0; // B value
        img.pixels[i + 3] = 255; // Alpha value
    }
    img.updatePixels();
    image(img, 0, 0);
    pixelDensity(3);


}
let factor = colorPalettes[0].length;

function draw() {

    //* seed composition

    var seed = Math.floor(999999 * fxrand());
    randomSeed(seed);
    print(seed);
    var seed1 = Math.floor(999999 * fxrand());
    noiseSeed(seed1);
    print(seed1);

    //* Console

    console.log(fxhash); // the 64 chars hex number fed to your algorithm
    console.log(fxrand()); // deterministic PRNG function, use it instead of
    console.time('loadTime');
    push()

    background("#1B1B1B")
    push()
    let buffer = createGraphics(vw * 2, vh * 2);
    buffer.noStroke();

    let x = 0,
        i = 0;
    let randD99 = int(random2(0, 1, r(1)));
    // let randD10 = 0;
    switch (randD99) {
        case 0:
            push()
            while (x < 2 * width) {
                let colors = colorPalettes[(i++) % colorPalettes.length];
                let j = floor(random(colors.length));
                let n = ~~random(1, 5) + random([0, 1]);
                let m = (j % 2 == 0) ? 3 : 0;
                let rectHeight = height / pow(2, n + m);
                let rectWidth = pow(2, n);
                let y = 0;
                while (y < 55 * height) {
                    buffer.fill(colors[(j++) % colors.length]);
                    buffer.rect(x, y, rectWidth, rectHeight);
                    y += rectHeight;
                }
                x += rectWidth;
            }

            let maxOffset = 32;
            let offsetRed = random([0, maxOffset]);
            let offsetGreen = random([0, maxOffset]);
            let offsetBlue = random([0, maxOffset]);
            buffer.loadPixels();
            let pixelDensity = buffer.pixelDensity();
            let maxNoise = 32;
            let n = 4 * (buffer.width * pixelDensity) * (buffer.height * pixelDensity);
            for (let i = 0; i < n; i += 12) {
                if (random() < 0.000001) {
                    offsetRed = random([0, maxOffset]);
                    offsetGreen = random([0, maxOffset]);
                    offsetBlue = random([0, maxOffset]);
                }
                buffer.pixels[i] = buffer.pixels[i + offsetRed] + random(-1, 1) * maxNoise;
                buffer.pixels[i + 1] = buffer.pixels[i + 1 + offsetGreen] + random(-1, 1) * maxNoise;
                buffer.pixels[i + 2] = buffer.pixels[i + 2 + offsetBlue] + random(-1, 1) * maxNoise;
            }
            buffer.updatePixels();
            pop()
            break;

        case 1:
            push()
            while (x < 2 * width) {
                let colors = colorPalettes[(i++) % colorPalettes.length];
                let j = floor(random(colors.length));
                let shapeType = random(['rect', 'ellipse', 'point']);
                let n = ~~random(1, 5) + random([0, 1]);
                let m = (j % 2 == 0) ? 3 : 0;
                let rectHeight = height / pow(2, n + m);
                let rectWidth = pow(2, n);
                let y = 0;
                while (y < 55 * height) {
                    buffer.fill(colors[(j++) % colors.length]);
                    if (shapeType == 'rect') {
                        buffer.rect(x, y, rectWidth, rectHeight);
                    } else if (shapeType == 'ellipse') {
                        buffer.ellipse(x + rectWidth / 2, y + rectHeight / 2, rectWidth, rectHeight);
                    } else if (shapeType == 'point') {
                        buffer.point(x + rectWidth / 2, y + rectHeight / 2);
                    }
                    y += rectHeight;
                }
                x += rectWidth;
            }

            while (x < 2 * width) {
                let colors = colorPalettes[(i++) % colorPalettes.length];
                let j = floor(random(colors.length));
                let shapeType = random(['rect', 'ellipse', 'point']);
                let n = ~~random(1, 5) + random([0, 1]);
                let m = (j % 2 == 0) ? 3 : 0;
                let rectHeight = height / pow(2, n + m);
                let rectWidth = pow(2, n);
                let y = 0;
                while (y < 55 * height) {
                    buffer.fill(colors[(j++) % colors.length]);
                    if (shapeType == 'rect') {
                        buffer.rect(x, y, rectWidth, rectHeight);
                    } else if (shapeType == 'ellipse') {
                        buffer.ellipse(x + rectWidth / 2, y + rectHeight / 2, rectWidth, rectHeight);
                    } else if (shapeType == 'point') {
                        buffer.point(x + rectWidth / 2, y + rectHeight / 2);
                    }
                    y += rectHeight;
                }
                x += rectWidth;
            }

            pop()
            break;
        default:
            break;
    }

    push()
    imageMode(CENTER);
    translate(width / 2, height / 2);
    image(buffer, 0, 0);
    pop()
    push()
    textMatrix()
    pop()
    strokeWeight(8);
    push()

    strokeGradient('linear', {
        from: [0, 600],
        to: [width / 2, height / 8],
        steps: [color("#020D07"), color("#073B1B"), color("#035DC9"), color("#E790C0"), color("#FC4B39"), color("#F9B527"), color("#FFFAEC")]
    });
    fillGradient('linear', {
        from: [0, 600],
        to: [width / 2, height / 8.3],
        steps: [color("#FFFAEC"), color("#F9B527"), color("#FC4B39"), color("#E790C0"), color("#035DC9"), color("#073B1B"), color("#020D07")]
    });
    ellipse(vw / 2, vh / 2, 800)
    pop()


    push()
    translate(vw / 2, vh / 2);
    angleMode(RADIANS);
    rotate(PI / random2(0, 6, r(1)));
    strokeGradient('linear', {
        from: [0, 600],
        to: [width / 2, height / 7],
        steps: [color("#FFFAEC"), color("#F9B527"), color("#FC4B39"), color("#E790C0"), color("#035DC9"), color("#073B1B"), color("#020D07")]
    });
    //* art composition
    fillGradient('linear', {
        from: [0, 300],
        to: [width / 5.1, height / 50],
        steps: [color("#020D07"), color("#073B1B"), color("#035DC9"), color("#E790C0"), color("#FC4B39"), color("#F9B527"), color("#FFFAEC")]
    });
    ellipse(0, 0, 600)
    pop()

    push()
    translate(vw / 2, vh / 2);
    angleMode(RADIANS);
    rotate(PI / random2(0, 6, r(1)));
    strokeGradient('linear', {
        from: [0, 200],
        to: [width / 5.3, height / 80],
        steps: [color("#020D07"), color("#073B1B"), color("#035DC9"), color("#E790C0"), color("#FC4B39"), color("#F9B527"), color("#FFFAEC")]
    });
    fillGradient('linear', {
        from: [0, 200],
        to: [width / 5.3, height / 80],
        steps: [color("#FFFAEC"), color("#F9B527"), color("#FC4B39"), color("#E790C0"), color("#035DC9"), color("#073B1B"), color("#020D07")]
    });
    //* art composition

    ellipse(0, 0, 400)
    pop()


    push();

    strokeGradient('linear', {
        from: [0, 200],
        to: [width / 5.3, height / 80],
        steps: [color("#FFFAEC"), color("#F9B527"), color("#FC4B39"), color("#E790C0"), color("#035DC9"), color("#073B1B"), color("#020D07")]
    });
    //* art composition
    fillGradient('linear', {
        from: [0, 200],
        to: [width / 5.3, height / 80],
        steps: [color("#020D07"), color("#073B1B"), color("#035DC9"), color("#E790C0"), color("#FC4B39"), color("#F9B527"), color("#FFFAEC")]
    });
    ellipse(vw / 2, vh / 2, 200)

    translate(vw / 2, vh / 2)
    drawText()
    pop()
    noLoop()
    colorPost();
    grain(0.5, 0.9);
    borderL()

    //* preview

    fxpreview();

    //* Console

    console.timeEnd('loadTime')
    pop()
}

function borderL() {
    stroke("#FBFBF4");
    strokeWeight(80);
    noFill();
    rect(width / 2, height / 2, width, height)



}



function generatePerlinNoiseTexture(vw, vh, detail, colorMode, colorPalette) {
    push()
    noiseDetail(detail);
    let noiseArray = [];
    for (let x = 0; x < vw; x++) {
        noiseArray[x] = [];
        for (let y = 0; y < vh; y++) {
            let n = noise(x * 0.001, y * 0.001);
            noiseArray[x][y] = n;
        }
    }

    loadPixels();
    for (let x = 0; x < vw; x++) {
        for (let y = 0; y < vh; y++) {
            let n = noiseArray[x][y];
            let brightness = map(n, 0, 1, 0, 255);
            let r, g, b;
            switch (colorMode) {
                case "grayscale":
                    r = brightness;
                    g = brightness;
                    b = brightness;
                    break;
                case "palette":
                    let paletteIndex = floor(map(n, 0, 1, 0, colorPalette.length));
                    let colorValue = colorPalette[paletteIndex];
                    r = red(colorValue);
                    g = green(colorValue);
                    b = blue(colorValue);
                    break;
                default:
                    r = 0;
                    g = 0;
                    b = 0;
                    break;
            }
            let pixelIndex = (x + y * width) * 4;
            pixels[pixelIndex] = r;
            pixels[pixelIndex + 1] = g;
            pixels[pixelIndex + 2] = b;
            pixels[pixelIndex + 3] = 255;
        }
    }
    updatePixels();
    pop()
}


function drawText() {
    if (showText) {
        noStroke();
        textSize(32);

        fill(255);
        rect(0, 0, 320, 100);
        fill(0);
        textAlign(CENTER, CENTER);
        text("TROOP:LOAD!", 0, 0);


    }
}




function colorPost() {
    // BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
    push()
        // let randD99 = int(random2(0, 1, r(1)));

    blendMode(DIFFERENCE)
    fill(random2(colorsssss))
    rect(width / 2, height / 2, width, height)

    pop()
}


function gridCanvo() {

    push()
    strokeWeight(1)
    noFill();
    rect(width / 2, height / 2, width, height);
    stroke(225, 30);
    for (let i = 0; i < width * 2; i++) {
        rect(i * 10, 0, i * 20, height * 2);
    }
    for (let i = 0; i < height * 2; i++) {
        rect(0, i * 10, width * 2, i * 20);
    }
    pop()

    push()
    strokeWeight(1)
    noFill();
    rect(width / 2, height / 2, width, height);
    stroke(225, 90);
    for (let i = 0; i < width * 2; i++) {
        rect(i * 10, 0, i * 60, height * 2);
    }
    for (let i = 0; i < height * 2; i++) {
        rect(0, i * 10, width * 2, i * 60);
    }
    pop()
}


// fillGradient function definition
function fillGradient(type, options) {
    const { from, to, steps } = options;

    // Create gradient object
    const gradient = drawingContext.createLinearGradient(from[0], from[1], to[0], to[1]);

    // Add color stops to gradient object
    steps.forEach((step, i) => gradient.addColorStop(i / (steps.length - 1), step.toString()));

    // Set gradient as fill style
    drawingContext.fillStyle = gradient;

    // Return the steps array
    return steps;
}

// getGradientColors function definition



function getGradientColors() {
    const colors = [
        '#252D40', '#78C4C6', '#FF5733', '#581845', '#900C3F',
        '#0000ff', '#ff00ff', '#0ff0ff', '#ff000f', '#000f3f',
        '#4f4f4f', '#8d47b3', '#40318d', '#d0dc71', '#5a86ba',
        '#e15d3f', '#222022', '#3b7e4a', '#eec51b', '#C7395F',
        '#E8BA40', '#E3856B', '#3B5BA5', '#E87A5D', '#F3B941',
        '#678CEC', '#D49BAE', '#8d47b3', '#BBCB50', '#fff',
        '#4AAFD5', '#91B187', '#E7A339', '#E26274', '#7C8363',
        '#31473A', '#8AB6F9', '#E59462', '#81CAD6', '#EDCD44',
        '#DC3E26', '#96FFBD', '#1803A5', '#68A4A5', '#4C8055',
        '#DF3C5F', '#224193', '#6F9BD1', '#E17888', '#AE3B8B',
        '#DD671E', '#9EE8E1', '#0C0D0D', '#96FFBD', '#962E2A'
    ];

    let numSquares, numColors;
    const steps = [];
    const randD99 = int(random2(0, 4, r(1)));

    switch (randD99) {
        case 0:
            numSquares = 22;
            numColors = numSquares;
            for (let i = 0; i < numSquares; i++) {
                const randomIndex = Math.floor(random2(0, 1) * colors.length);
                steps.push(color(colors[randomIndex]));
            }
            break;

        case 1:
            numSquares = 8;
            numColors = numSquares;
            for (let i = 0; i < numSquares; i++) {
                const randomIndex = Math.floor(random2(0, 1) * colors.length);
                steps.push(color(colors[randomIndex]));
            }
            break;

        case 2:
            numSquares = 9;
            numColors = numSquares;
            for (let i = 0; i < numSquares; i++) {
                const randomIndex = Math.floor(random2(0, 1) * colors.length);
                steps.push(color(colors[randomIndex]));
            }
            break;

        case 3:
            numSquares = 16;
            numColors = numSquares;
            for (let i = 0; i < numSquares; i++) {
                const randomIndex = Math.floor(random2(0, 1) * colors.length);
                steps.push(color(colors[randomIndex]));
            }
            break;
        default:
            break;
    }





    return steps;
}





function getGradientColorsNoise() {
    const colors2 = ['#DF3C5F', '#224193', '#6F9BD1', '#E17888', '#AE3B8B', '#DD671E', '#9EE8E1', '#0C0D0D', '#96FFBD', '#962E2A'];
    const steps2 = [];
    const stepCount = floor(random2(10, 30));
    let stepRandomCount = stepCount;
    for (let i = 0; i < stepRandomCount; i++) {
        const c1 = color(colors2[Math.floor(random2(0, colors2.length))]);
        const c2 = color(colors2[Math.floor(random2(0, colors2.length))]);
        const c = lerpColor(c1, c2, 0.5);
        steps.push(c);
    }
    return steps2;
}


// .............................................
// save

function keyTyped() {
    if (key === "s" || key === "S") {
        noLoop();
        saveCanvas("TERRA:load", "png");
    }
}



function textMatrix() {
    let typeR = Math.floor(random2(0, 6, r(1)));
    let arr = arrays[typeR];
    let textSpace = floor(random2([16, 18, 21, 32, 40]));
    push()
    let randD99 = int(random2(0, 8, r(1)));
    // let randD99 = 9;
    switch (randD99) {
        case 0:
            textSize(18);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 200); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 6, width / 9); x += textSpace) {
                for (let y = 0; y <= random2(50, 100); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.35 + x, 100 + y);
                }
            }


            break;

        case 1:
            textSize(21);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(100, 400); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.4 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(30, 350); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, vh / 1.3 + y);
                }
            }

            break;
        case 2:
            textSize(24);
            fill(255)
            for (let x = 0; x <= vw / 1.65; x += textSpace) {
                for (let y = 0; y <= vw / 1.6; y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 5.2 + x, vw / 4 + y);
                }
            }
            break;
        case 3:
            textSize(24);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 400); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, 100 + y);
                }
            }


            break;
        case 4:
            textSize(21);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 400); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 6, width / 9); x += textSpace) {
                for (let y = 0; y <= random2(10, 500); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.4 + x, 100 + y);
                }
            }


            break;

        case 5:
            textSize(21);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(100, 300); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.4 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(10, 200); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.4 + x, vh / 1.2 + y);
                }
            }
            break;
        case 6:
            textSize(21);
            fill(255)
            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 300); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length)
                    let value = arr[index];
                    text(value, vw / 1.49 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 250); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length)
                    let value = arr[index];
                    text(value, 100 + x, vh / 1.3 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 300); y += 16) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 250); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.49 + x, vh / 1.3 + y);
                }
            }
            break;
        case 7:
            textSize(21);
            fill(255)


            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(100, 400); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 100 + x, 100 + y);
                }
            }

            for (let x = 0; x <= random2(width / 5, width / 6); x += textSpace) {
                for (let y = 0; y <= random2(50, 150); y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 1.4 + x, vh / 1.3 + y);
                }
            }
            break;
        case 8:
            textSize(21);
            fill(255)

            for (let x = 0; x <= vw / 2; x += textSpace) {
                for (let y = 0; y <= vw / 2; y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, vw / 4 + x, vw / 1.25 + y);
                }
            }

            break;
        case 9:
            textSize(48);
            fill(255)

            for (let x = 0; x <= vw * 2; x += textSpace) {
                for (let y = 0; y <= vh * 2; y += textSpace) {
                    let index = Math.floor(random2(0, 1) * arr.length);
                    let value = arr[index];
                    text(value, 0 + x, 0 + y);
                }
            }

            break;
        default:
            break;
    }



    pop()
    textSize(21);
    fill(255)
    return textSpace;


}




function resizeCanvas(factor) {
    const oldCanvas = canvas.canvas;
    const newCanvas = document.createElement('canvas');
    const w = oldCanvas.width * factor;
    const h = oldCanvas.height * factor;
    newCanvas.width = w;
    newCanvas.height = h;
    newCanvas.getContext('2d').drawImage(oldCanvas, 0, 0, w, h);
    canvas.canvas = newCanvas;
    pixelDensity(8);
}