let seed = fxrand() * 1000000; //seed Hash

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    randomSeed(seed);
    noiseSeed(seed);
    let dim = min(window.innerWidth, window.innerHeight);
    createCanvas(dim, dim);
    let paletteNumber = int(random(0, 10));
    palette = colorScheme[paletteNumber];
    background(random(palette));
    noLoop();
    window.$fxhashFeatures = {
        palette: schemeNames[paletteNumber],
    };
    console.log(schemeNames[paletteNumber]);
    drawS();
}


let globalRatio = 1;
let mainSquare;
let unitWidth;
let unitHeight;
let startPosX;
let startPosY;

function m_col(_url) {
    let slash_index = _url.lastIndexOf("/");
    let palette_str = _url.slice(slash_index + 1);
    let arr = palette_str.split("-");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "#" + arr[i];
    }
    return arr;
}

// function drawBorder(borderThickness){
//     push();
//     strokeWeight(width/borderThickness);
//     stroke('#ECE3D0');
//     noFill();
//     rect(0,0,width,height);
//     pop();
//     }

const colorScheme = [
    m_col("ece3d0-1d1d1b"), // “Shirokuro"
    m_col("ece3d0-e51531-1d1d1b"), // "Edo"
    m_col("ece3d0-e51531-1d1d1b-f8c1c1"), // "Edogawa"
    m_col("ece3d0-e51531-1d1d1b-bd9c75"), // "Ginza"
    m_col("ece3d0-fab515-d7312e-2a71af-1d1d1b"), // "Dessau"
    m_col("ece3d0-f8c1c1-2c52a0-c5c8ba-cac3b3-1d1d1b"), // "Akihabara"
    m_col("ece3d0-1d1d1b-224870-d83715-f7f8e6"), // "Brubeck"
    m_col("d2b0a3-efd1ae-f39b00-ec6907-1d1d1b-ece3d0"), // "Toucan"
    m_col("d2b0a3-ffd200-e51f23-e6007b-005aa7-5ec5ee-ece3d0-1d1d1b"), // "Shibuya"
    m_col("D7312E-ECE3D0-F0AC00-0C7E45-2c52a0-f7bab6-5ec5ee-1D1D1B"), // "Tutti"
];

const schemeNames = ["Shirokuro", "Edo", "Edogawa", "Ginza", "Dessau", "Akihabara", "Brubeck", "Toucan", "Shibuya", "Tutti"];

let palette;

function setup() {
    randomSeed(seed);
    noiseSeed(seed);
    let dim = min(window.innerWidth, window.innerHeight);
    //createCanvas(dim, dim);
    createCanvas(dim, dim);
    let paletteNumber = int(random(0, 10));
    palette = colorScheme[paletteNumber];
    background(random(palette));
    noLoop();
    window.$fxhashFeatures = {
        "Palette" : schemeNames[paletteNumber],
    };
    console.log(schemeNames[paletteNumber]);
    drawS();
}

function drawS() {
    angleMode(DEGREES);

    let gridRows = int(random(60,120));
    let gridColumns = int(random(5,150));  

    mainSquare = height / globalRatio;
    unitWidth = mainSquare / gridColumns;
    unitHeight = mainSquare / gridRows;
    startPosX = (height - mainSquare) / 2;
    startPosY = (height - mainSquare) / 2;

    rectMode(CENTER);
    stroke(random(palette));
    fill(random(palette));
    (tosslim1 = 4), (tosslim2 = int(random(8,64)));
    rect(height / 2, height / 2, mainSquare, mainSquare);
    rectMode(CORNER);
    noStroke();

    let extentx = [],
        effectStartx = [],
        effectStarty = [],
        effectx = [],
        effectcolx = [],
        indx = 0;
    let extenty = [],
        effectStartyx = [],
        effectStartyy = [],
        effecty = [],
        effectcoly = [],
        indy = 0,
        isEffect = [];

push();
    for (let i = 0; i < gridColumns; i++) {
        for (let j = 0; j < gridRows; j++) {
            if (j > 2) {
                let toss = int(random(0, tosslim1));
                if (random() < 0.5) {
                    extenty[indy] = min(int(random(2, 2)), gridRows - j);
                    effectStartyy[indy] = startPosY + unitHeight * j;
                    effectStartyx[indy] = startPosX + unitWidth * i;
                    effectcoly[indy] = random(palette);
                    effecty[indy] = int(random(0, tosslim2));
                    indy++;
                }
                if (toss == 4 || (toss == 5 && random() < 0.2)) {
                    effectStartx[indx] = startPosX + unitWidth * i;
                    effectStarty[indx] = startPosY + unitHeight * j;
                    extentx[indx] = int(random(2, 4));
                    extentx[indx] = min(extentx[indx], gridColumns - i);
                    effectx[indx] = toss;
                    effectcolx[indx] = random(palette);
                    indx++;
                }
                noStroke();
                fill(random(palette));
                push();
                rect(
                    startPosX + unitWidth * i,
                    startPosY + unitHeight * j,
                    unitWidth,
                    unitHeight
                );
                // stroke(random(palette));
                fill(random(palette));
                if (random() < 0.8)
                    effects(
                        startPosX + unitWidth * i,
                        startPosY + unitHeight * j,
                        unitWidth,
                        unitHeight,
                        toss
                    );
            } else {
                toss = int(random(4, tosslim2));
                noStroke();
                noFill();
                rect(
                    startPosX + unitWidth * i,
                    startPosY,
                    unitWidth,
                    unitHeight
                );
                stroke(random(palette));
                fill(random(palette));
                effects(
                    startPosX + unitWidth * i,
                    startPosY,
                    unitWidth,
                    unitHeight,
                    toss
                );
            }
        }
    }
    for (let i = 0; i < indx; i++) {
        noStroke();
        fill(effectcolx[i]);
        effects(
            effectStartx[i],
            effectStarty[i],
            int(random(-2,2)) * unitWidth * extentx[i],
            int(random(-2,2)) * unitHeight,
            effectx[i]
        );
    }
    for (let i = 0; i < indy; i++) {
        noStroke();
        fill(effectcoly[i]);
        effects(
            effectStartyx[i],
            effectStartyy[i],
            int(random(-8,8)) * unitWidth,
            int(random(-2,16)) * unitHeight * extenty[i],
            effecty[i]
        );
    }

pop();

// draw dots
for(i = 0; i <=750; i++){
    push();
    translate(0,0);
    strokeWeight(width / random(300, 600));
    stroke(random(palette));
    point(random(width), random(height));
    pop();
}

    fxpreview();
}

function drawBorder(borderThickness){
    push();
    translate(0, 0);
    strokeWeight(width/borderThickness);
    stroke('#1d1d1b');
    noFill();
    rect(0,0,width,height);
    pop();
    }

function effects(x, y, w, h, t) {
    rectMode(CORNER);
    let space;
    noStroke();
    switch (t) {

        case 1:
            stroke(random(palette));
            space = w / 16;
            push();
            for (let i = 0; i < 12; i++) {
                line(x + space * i, y, x + space * i, y + h);
            }
            pop();
            break;

        case 2:
            stroke(random(palette));
            space = w / 16;
            push();
            for (let i = 0; i < 200; i++) {
            line(x + space * i, y, x + space * i, y + h); 
            }
            pop();
            break;

        case 3:
            space = w / 2;
                    for (let i = 0; i < 32; i += 2) {
                          rotate(random(i ++));
                        rect(x + space * i, y , space, h);
            }
            break;

        case 4:
            space = h / 64;
            for (let i = 0; i < 32; i += 2) {
                push();
                translate(random(width), random(height));
                rect(x, y + space / i, w, space);
                pop();
            }
            break;

        case 5:
            rect(x, y, w , h );
            break;
    }
    noStroke();
}


function keyPressed() {

    resizeCanvas(6000, 6000);
    randomSeed(seed);
    noiseSeed(seed);
    let dim = 6000;
    createCanvas(dim, dim);
    let paletteNumber = int(random(0, 10));
    palette = colorScheme[paletteNumber];
    background(random(palette));
    noLoop();
    window.$fxhashFeatures = {
        palette: schemeNames[paletteNumber],
    };
    console.log(schemeNames[paletteNumber]);
    drawS();

    if (key == 's') {
      save("Your " + schemeNames[paletteNumber] + " Palette Crosswalk Monsoon by Studio Yorktown" + ".png");
    }

    windowResized();
  }