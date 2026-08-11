////////////////INFO & FEATURES
let myTitle = "Punks On Acid";
let punk = Math.floor(1 + fxrand() * 76.9999)
let mode = Math.floor(1 + fxrand() * 7.99);
let sclArray = [4, 6, 8]
let scl = sclArray[Math.floor(fxrand() * ((sclArray.length - 1) - 0 + 1))];
// let scl = 5;
let present = '<h2>' + myTitle + '</h2><h3>by smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.10"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
    "Punk N°": punk,
    "Mode": mode,
    "Scale": scl,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let globalW = window.innerWidth;
let globalH = window.innerHeight;
let globalSize = 2048 / 2;
let cnv;
let pD = 1;
let gen;
// let mode = 2;
let xOff = 0.1;
let yOff = 0.1;

function preload() {
    img = loadImage('assets/punks/' + punk + '.jpg')
}

function setup() {
    pixelDensity(pD)
    randomSeed(seed);
    noiseSeed(seed);
    cnv = createCanvas(globalSize, globalSize, SVG);
    cnv.parent('fullScreen');
    img.resize(width / scl, height / scl)
    rectMode(CENTER)
    imageMode(CENTER)
    background(255)
    stroke(0);

    img.loadPixels();
    loadPixels();
    let factor = 1.5;

    switch (mode) {
        case 1:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let posX = x * scl;
                    let posY = y * scl
                    let c = color(img.get(x, y));
                    // greyscale conversion
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let mapper = map(greyscale, 0, 200, scl * factor, 0.5);
                    noFill()
                    if (greyscale == 255) {
                        for (let i = scl; i > 0; i--) {
                            rect(posX, posY, tileWidth, tileHeight)
                        }
                    } else if (greyscale == 0) {
                        point(posX + tileWidth / 2, posY + tileHeight / 2)
                    } else {
                        for (let i = mapper; i > 0; i--) {
                            if (fxrand() < 0.15) {
                                line(posX, posY + i, posX + scl, posY + i + scl)
                            } else {
                                line(posX + scl, posY + i, posX, posY + i + scl)
                            }
                        }
                    }
                }
            }
            break;
        case 2:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl
                    let c = color(img.get(x, y));
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 8, 1));
                    strokeWeight(w)
                    point(posX, posY)
                }
            }
            break;
        case 3:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl
                    let c = color(img.get(x, y));
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let mapper = floor(map(greyscale, 0, 200, 10, 1));
                    let a = alpha(c);
                    fill(red(c), green(c), blue(c))
                    if (greyscale == 255) {} else {
                        ellipse(posX, posY, mapper)
                    }
                }
            }
            break;

        case 4:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl;
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let c = color(img.get(x, y));
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 5, 1));
                    strokeWeight(w)
                    if (fxrand() < 0.5) {
                        line(posX, posY, posX + tileWidth, posY + tileHeight)
                    } else {
                        line(posX + tileWidth, posY, posX, posY + tileHeight)
                    }
                }
            }
            break;

        case 5:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl;
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let c = color(img.get(x, y));
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 8, 1));
                    strokeWeight(w)
                    line(posX, posY, posX + tileWidth, posY + tileHeight)
                }
            }
            break;

        case 6:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl;
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let c = color(img.get(x, y));
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 4, 1));
                    strokeWeight(w)
                    // noFill()
                    fill(red(c), green(c), blue(c))
                    push()
                    triangle(posX + tileWidth / 2, posY, posX + tileWidth, posY + tileHeight, posX, posY + tileHeight)
                    pop()
                }
            }
            break;

        case 7:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl;
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let c = color(img.get(x, y));
                    // greyscale conversion
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 3, 1));
                    let h = map(greyscale, 0, 255, -1, 1);
                    strokeWeight(w)
                    noFill()
                    if (greyscale == 255 || greyscale == 0) {

                    } else {
                        push()
                        beginShape()
                        curveVertex(posX, posY + tileHeight / 2)
                        curveVertex(posX, posY + tileHeight / 2)
                        curveVertex(posX + tileWidth * 0.33, posY - tileHeight * h)
                        curveVertex(posX + tileWidth * 0.5, posY + tileHeight * h)
                        curveVertex(posX + tileWidth * 0.66, posY + tileHeight * h)
                        curveVertex(posX + tileWidth, posY + tileHeight / 2)
                        curveVertex(posX + tileWidth, posY + tileHeight / 2)
                        endShape()
                        pop()
                    }
                }
            }
            break;

        case 8:
            for (let x = -scl; x < img.width + scl; x++) {
                for (let y = -scl; y < img.height + scl; y++) {
                    let posX = x * scl;
                    let posY = y * scl;
                    let tileWidth = width / img.width;
                    let tileHeight = height / img.height;
                    let c = color(img.get(x, y));
                    // greyscale conversion
                    let greyscale = round(red(c) + green(c) + blue(c)) / 3;
                    let w = floor(map(greyscale, 0, 255, 3, 1));
                    let h = map(greyscale, 0, 255, -1, 1);
                    strokeWeight(w)
                    noFill()
                    if (greyscale == 255 || greyscale == 0) {

                    } else {
                        push()
                        beginShape()
                        curveVertex(posX, posY + tileHeight / 2)
                        curveVertex(posX, posY + tileHeight / 2)

                        curveVertex(posX + tileWidth * 0.5, posY + tileHeight * h)

                        curveVertex(posX + tileWidth, posY + tileHeight / 2)
                        curveVertex(posX + tileWidth, posY + tileHeight / 2)
                        endShape()
                        pop()
                    }
                }
            }
            break;
    }

    myFrame(width / 2, height / 2, 25, width, height, 0)
    
    timer()
    // saver()
}

function draw() {}