
// Cluster of Lines from left to right
// Verse 2022 UpOnlyFan

// Starting coordinates
let x, y;
// Speed of Lines
let speedX;
// Lenght of Line
let linesLength;
// Amount of Lines
let linesAmount;
// Thickness of Lines
let linesThickness;
// Gap between Lines
let linesGap;
// Border Color
let borderColor;
// Ballsizer
let ballSizer;
//let colorsArray = [];
let alpha;
let blendModes = [];
let chooseBlendMode;
let blendModeOn;

let paletteColor;

let verticalPoints;
let pointStrokeWeight;

let bgLines;
let bgLinesLeftSide;
let bgLinesRightSide;
let bgLinesTopBottom;
let bgLinesStrokeWeight;

let ballColor;
let ballAlpha;
let lineColor;
let hasBalls;
let lotsOfBalls;
let lines;

let linesGapPlus;
let linesLengthPlus;
let linesGapMinus;
let linesLengthMinus;

let roff = 0.0;
let goff = 20.0;
let boff = 50.0;
let lroff = 80.0;
let lgoff = 40.0;
let lboff = 10.0;
let proff = 10.0;
let pgoff = 30.0;
let pboff = 60.0;
let rgb = [];
let chooseRGB;
let canv;

let linesCounter = 0;
let lineColor1;
let lineColor2;
let inter12;

let randmInt;
let randmInt1;
let randmInt2;
let randmInt3;
let randmInt4;

let backgroundLinesAmount;

let legacy;
  
function mousePressed() {
    noLoop();
}

function getRandomInt(max) {
    return Math.floor(fxrand() * max);
}

function keyTyped() {
    if (key === 's') {
      saveCanvas("Verse_" + fxhash, 'jpg');
    }
}

function setup() {
    colorMode(RGB);

    pixelDensity(2);
    frameRate(30);

    Math.random = fxrand;
    randomSeed(fxrand()*999999);
    noiseSeed(fxrand()*999999);

    getColors();
    drawColors();

    paletteColor = getRandomInt(colorArrays.length);
    paletteBackgroundColor = getRandomInt(colorArrays.length);
    
    canv = getRandomInt(3);
    if(canv === 0){
        createCanvas(1500, 1500);
        //createCanvas(3000, 3000);
    }else if(canv === 1){
        createCanvas(1500, 1000);
        //createCanvas(3000, 2000);
    }else{
        createCanvas(1000, 1500);
        //createCanvas(2000, 3000);
    }
    borderColor = getRandomInt(255);
    background(borderColor);

    rgb.push(65);
    rgb.push(130);
    rgb.push(255);

    x = width/30;
    y = height/30;

    speedX = random(2,7);
    linesLength = random(10,40);
    linesGap = random(3,40);
    linesThickness = random(3,30);
    if(linesThickness > 14){
        alpha = random(80,120);
    }else{
        alpha = random(110,150);
    }
    ballAlpha = alpha/3;
    lotsOfBalls = getRandomInt(2);
    
    lines = getRandomInt(4);
    //lines = 3;

    legacy = getRandomInt(3);
    //legacy = 0;

    if(legacy <= 1){
        randmInt = 2;
        randmInt1 = 3;
        randmInt2 = 5;
        randmInt3 = 10;
        randmInt4 = 7;
    }else{
        randmInt = getRandomInt(9)+2;
        randmInt1 = getRandomInt(9)+2;
        randmInt2 = getRandomInt(9)+2;
        randmInt3 = getRandomInt(9)+2;
        randmInt4 = getRandomInt(9)+2;
    }

    if(lotsOfBalls === 1){
        randmInt4 = 2;
    }

    if(lines < 2){
        linesAmount = getRandomInt(5)+8;
    }else{
        linesAmount = getRandomInt(8)+5;
    }

    bgLines = getRandomInt(4);
    bgLinesStrokeWeight = random(1);

    verticalPoints = getRandomInt(2);
    pointStrokeWeight = random(0,1);

    linesGapPlus = random(0.1,0.5);
    linesLengthPlus = random(0.3,0.6);
    linesGapMinus = random(0.1,0.5);
    linesLengthMinus = random(0.1,0.4);
    //linesGapMinus = linesGapPlus;
    //linesLengthMinus = linesLengthPlus;

    ballColor = getRandomInt(3);
    lineColor = getRandomInt(3);
    hasBalls = getRandomInt(4);
    ballSizer = getRandomInt(8)+3;
    chooseRGB = getRandomInt(3);

    blendModeOn = getRandomInt(3);
    chooseBlendMode = getRandomInt(6);
    
    //Blendmode
    blendModes.push(BLEND);
    //blendModes.push(ADD);   //too light
    blendModes.push(DIFFERENCE);
    blendModes.push(MULTIPLY);  //dark
    blendModes.push(OVERLAY);
    blendModes.push(HARD_LIGHT);
    blendModes.push(SOFT_LIGHT);
    //blendModes.push(DODGE);
    //blendModes.push(BURN);

    if(getRandomInt(2) === 0){
        strokeCap(SQUARE);
    }else{
        strokeCap(ROUND);
    }

    /*
    speedX = 1;
    linesAmount = 5;
    linesLength = 3;
    linesGap = 3;
    linesThickness = 3;
    alpha = 100;
    lines = 0;

    //bgLines = 0;
    bgLinesLeftSide = 1;
    bgLinesRightSide = 0;
    bgLinesTopBottom = 0;
    bgLinesStrokeWeight = 0.1;

    verticalPoints = 0;
    pointStrokeWeight = 0.1;

    linesGapPlus = 0.2;
    linesLengthPlus = 0.2;
    linesGapMinus = linesGapPlus;
    linesLengthMinus = linesLengthPlus;

    //ballColor = 0;
    //lineColor = 0;
    hasBalls = 0;
    chooseRGB = 0;
*/

    bgLinesLeftSideTop = getRandomInt(2);
    bgLinesLeftSideMiddle = getRandomInt(2);
    bgLinesLeftSideBottom = getRandomInt(2);
    bgLinesRightSideTop = getRandomInt(2);
    bgLinesRightSideMiddle = getRandomInt(2);
    bgLinesRightSideBotttom = getRandomInt(2);
    bgLinesTopBottomTop = getRandomInt(2);
    bgLinesTopBottomBottom = getRandomInt(2);
        
    if(blendModeOn === 1){
        blendMode(blendModes[chooseBlendMode]);
        //blendMode(blendModes[6]);
    }
    backgroundLinesAmount = 1;
    print("backgroundLinesAmount",backgroundLinesAmount);

    print("randmInt",randmInt);
    print("randmInt1",randmInt1);
    print("randmInt2",randmInt2);
    print("randmInt3",randmInt3);
    print("randmInt4",randmInt4);
    print("legacy",legacy);
    print("speedX",speedX);
    print("lines",lines);
    print("linesAmount",linesAmount);
    print("linesLength",linesLength);
    print("linesGap",linesGap);
    print("linesThickness",linesThickness);
    print("alpha",alpha);
    print("borderColor",borderColor);
    print("bgLines",bgLines);
    print("bgLinesStrokeWeight",bgLinesStrokeWeight);
    print("verticalPoints",verticalPoints);
    print("pointStrokeWeight",pointStrokeWeight);
    print("ballColor",ballColor);
    print("ballSizer",ballSizer);
    print("lotsOfBalls",lotsOfBalls);
    print("lineColor",lineColor);
    print("hasBalls",hasBalls);
    print("chooseRGB",chooseRGB);
    print("linesGapPlus",linesGapPlus);
    print("linesLengthPlus",linesLengthPlus);
    print("linesGapMinus",linesGapMinus);
    print("linesLengthMinus",linesLengthMinus);
    print("blendModeOn",blendModeOn);
    print("chooseBlendMode",chooseBlendMode);
    print("blendModes",blendModes[chooseBlendMode]);

    for(let k=0; k<width; k++){
        lroff = lroff + 0.03;
        lgoff = lgoff + 0.02;
        lboff = lboff + 0.01;
        let lr = noise(lroff) * rgb[chooseRGB];;
        let lg = noise(lgoff) * rgb[chooseRGB];;
        let lb = noise(lboff) * rgb[chooseRGB];;
        strokeWeight(bgLinesStrokeWeight);
        
        if(borderColor < 125){
            if(bgLines === 0){
                stroke(random(200,245), random(200,245), random(200,245));  // Light
            }else if(bgLines === 2){
                stroke(random(255), random(255), random(255));  // random colors
            }else if(bgLines === 3){
                stroke(random(125,255));    // random grayscale
            }else{
                stroke(colorArrays[paletteBackgroundColor][getRandomInt(colorArrays[paletteBackgroundColor].length)]);  // palette colors
            }
        }else{
            if(bgLines === 1){
                stroke(random(0,45), random(0,45), random(0,45)); // dark
            }else if(bgLines === 2){
                stroke(random(255), random(255), random(255));  // random colors
            }else if(bgLines === 3){
                stroke(random(130));    // random grayscale
            }else{
                stroke(colorArrays[paletteBackgroundColor][getRandomInt(colorArrays[paletteBackgroundColor].length)]);  // palette colors
            }
        }
        
        let backgroundLines = 0;
        if(bgLinesLeftSideTop === 1 && backgroundLines < backgroundLinesAmount){
            line(width/30,height/30,random(width),random(height)); //left side top
            backgroundLines++;
        }
        if(bgLinesLeftSideMiddle === 1 && backgroundLines < backgroundLinesAmount){
            line(width/30,height/2,random(width),random(height));   //left side middle
            backgroundLines++;
        }
        if(bgLinesLeftSideBottom === 1 && backgroundLines < backgroundLinesAmount){
            line(width/30,height-(height/30),random(width),random(height)); //left side bottom
            backgroundLines++;
        }
        if(bgLinesRightSideMiddle === 1 && backgroundLines < backgroundLinesAmount){
            line(width-width/30,height/2,random(width),random(height)); //right side middle
            backgroundLines++;
        }
    }
    noLoop;
}

function draw() {
    if(x <= width-width/30){
        for(let j=0; j<height; j++){
            strokeWeight(pointStrokeWeight);
            if(verticalPoints === 0){
                stroke(random(255));    // grayscale
            }else{
                stroke(random(255),random(255),random(255));    // random colors
            }
            point(x,j); 
        }
        
        for(let i=0; i<linesAmount ; i++){
            roff = roff + 0.01;
            goff = goff + 0.02;
            boff = boff + 0.03;
            let r = noise(roff) * rgb[chooseRGB];
            let g = noise(goff) * rgb[chooseRGB];
            let b = noise(boff) * rgb[chooseRGB];

            

            if(ceil(x) % randmInt === 0){
                if(legacy === 1){
                    linesLength += 0.15;
                }else{
                    linesLength += linesLengthPlus;
                }
            }
            //else 
            if(ceil(x) % randmInt1 === 0){
                if(legacy === 1){
                    linesLength -= 0.15;
                    linesGap += 0.2;;
                }else{
                    linesLength -= linesLengthMinus;
                    linesGap += linesGapPlus;
                }
            }
            //else 
            if(ceil(x) % randmInt2 === 0){
                if(legacy === 1){
                    linesLength += 0.20;
                    linesGap += 0.15;
                }else{
                    linesLength += linesLengthPlus;
                    linesGap += linesGapPlus;
                }
            }
            //else 
            if(ceil(x) % randmInt3 === 0){
                if(legacy === 1){
                    linesGap -= 0.5;
                }else{
                    linesGap -= linesGapMinus;
                }
            }
            //else{
            //else 
            if(ceil(x) % randmInt4 === 0){
                //noStroke();
                strokeWeight(pointStrokeWeight);
                if(ballColor === 0){
                    stroke(random(0,55),random(0,55),random(0,55),alpha);       // dark
                    fill(random(210,255),random(210,255),random(210,255),ballAlpha);  // light
                }else if(ballColor === 1){
                    stroke(random(210,255),random(210,255),random(210,255),alpha);  // light
                    fill(random(0,55),random(0,55),random(0,55),ballAlpha);       // dark
                }else if(ballColor === 2){
                    stroke(random(255),random(255),random(255),alpha); 
                    let ballPaletteColor = color(colorArrays[paletteColor][getRandomInt(colorArrays[paletteColor].length)]);
                    ballPaletteColor.setAlpha(ballAlpha);
                    fill(ballPaletteColor);                         // palette colors
                }
                let ballSize = linesLength/3;
                if(hasBalls === 0){
                    // no balls
                }else if(hasBalls === 1){
                    if(lines === 0 || lines === 2){
                        while(ballSize > 1){
                            circle(x, y+(i*linesLength)+(i*linesGap), ballSize);
                            ballSize-=ballSizer;
                        }
                    } 
                    ballSize = linesLength/3;
                    if(lines === 1 || lines === 2){
                        while(ballSize > 1){
                            circle(x, (height-height/30)-(i*linesLength)-(i*linesGap), ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                    ballSize = linesLength/3;
                    if(lines === 3){
                        while(ballSize > 1){
                            circle(x, height/2+(i*linesLength)+(i*linesGap), ballSize);
                            circle(x, (height/2)-(i*linesLength)-(i*linesGap), ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                }else if(hasBalls === 2){
                    if(lines === 0 || lines === 2){
                        while(ballSize > 1){
                            circle(x, y+(i*linesLength)+(i*linesGap)+linesLength/2, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                    ballSize = linesLength/3;
                    if(lines === 1 || lines === 2){
                        while(ballSize > 1){
                            circle(x, (height-height/30)-(i*linesLength)-(i*linesGap)-linesLength/2, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                    ballSize = linesLength/3;
                    if(lines === 3){
                        while(ballSize > 1){
                            circle(x, height/2+(i*linesLength)+(i*linesGap)+linesLength/2, ballSize);
                            circle(x, (height/2)-(i*linesLength)-(i*linesGap)-linesLength/2, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                }else{
                    if(lines === 0 || lines === 2){
                        while(ballSize > 1){
                            circle(x, y+(i*linesLength)+(i*linesGap), ballSize);
                            circle(x, y+(i*linesLength)+(i*linesGap)+linesLength, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                    ballSize = linesLength/3;
                    if(lines === 1 || lines === 2){
                        while(ballSize > 1){
                            circle(x, (height-height/30)-(i*linesLength)-(i*linesGap), ballSize);
                            circle(x, (height-height/30)-(i*linesLength)-(i*linesGap)-linesLength, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                    ballSize = linesLength/3;
                    if(lines === 3){
                        while(ballSize > 1){
                            circle(x, height/2+(i*linesLength)+(i*linesGap), ballSize);
                            circle(x, height/2+(i*linesLength)+(i*linesGap)+linesLength, ballSize);
                            circle(x, (height/2)-(i*linesLength)-(i*linesGap), ballSize);
                            circle(x, (height/2)-(i*linesLength)-(i*linesGap)-linesLength, ballSize);
                            ballSize-=ballSizer;
                        }
                    }
                }
            }

            strokeWeight(linesThickness);
            
            if(bgLines === 0 ){
                if(lineColor === 0){
                    stroke(random(0,55), random(0,55), random(0,55), alpha);      // dark
                }else if(lineColor === 1){
                    if(linesCounter%4 === 0){
                        lineColor1 = getRandomInt(colorArrays[paletteColor].length);
                        lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        while(lineColor2 === lineColor1){
                            lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        }
                        inter1 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.33);
                        inter2 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.66);
                        lineStrokeColor1 = color(colorArrays[paletteColor][lineColor1]);
                        lineStrokeColor2 = color(colorArrays[paletteColor][lineColor2]);
                        lineStrokeColor1.setAlpha(alpha);
                        inter1.setAlpha(alpha);
                        inter2.setAlpha(alpha);
                        lineStrokeColor2.setAlpha(alpha);
                        stroke(lineStrokeColor1);  // palette colors
                    }else if(linesCounter%4 === 1){
                        stroke(inter1);  // palette colors
                    }else if(linesCounter%4 === 2){
                        stroke(inter2);  // palette colors
                    }else if(linesCounter%4 === 3){
                        stroke(lineStrokeColor2);  // palette colors
                    }
                }else if(lineColor === 2){
                    stroke(r,g,b, alpha);                                   // noise color
                }
            }else if(bgLines === 1 ){
                if(lineColor === 0){
                    stroke(random(220,255), random(225,255), random(225,255), alpha);  // light
                }else if(lineColor === 1){
                    stroke(random(255), random(255), random(255), alpha);  // random
                }else{
                    if(linesCounter%4 === 0){
                        lineColor1 = getRandomInt(colorArrays[paletteColor].length);
                        lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        while(lineColor2 === lineColor1){
                            lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        }
                        inter1 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.33);
                        inter2 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.66);
                        lineStrokeColor1 = color(colorArrays[paletteColor][lineColor1]);
                        lineStrokeColor2 = color(colorArrays[paletteColor][lineColor2]);
                        lineStrokeColor1.setAlpha(alpha);
                        inter1.setAlpha(alpha);
                        inter2.setAlpha(alpha);
                        lineStrokeColor2.setAlpha(alpha);
                        stroke(lineStrokeColor1);  // palette colors
                    }else if(linesCounter%4 === 1){
                        stroke(inter1);  // palette colors
                    }else if(linesCounter%4 === 2){
                        stroke(inter2);  // palette colors
                    }else if(linesCounter%4 === 3){
                        stroke(lineStrokeColor2);  // palette colors
                    }
                }
            }else if(bgLines === 3){
                if(lineColor === 0){
                    stroke(random(255), random(255), random(255), alpha);  // random
                }else if(lineColor === 1){
                    if(linesCounter%4 === 0){
                        lineColor1 = getRandomInt(colorArrays[paletteColor].length);
                        lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        while(lineColor2 === lineColor1){
                            lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        }
                        inter1 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.33);
                        inter2 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.66);
                        lineStrokeColor1 = color(colorArrays[paletteColor][lineColor1]);
                        lineStrokeColor2 = color(colorArrays[paletteColor][lineColor2]);
                        lineStrokeColor1.setAlpha(alpha);
                        inter1.setAlpha(alpha);
                        inter2.setAlpha(alpha);
                        lineStrokeColor2.setAlpha(alpha);
                        stroke(lineStrokeColor1);  // palette colors
                    }else if(linesCounter%4 === 1){
                        stroke(inter1);  // palette colors
                    }else if(linesCounter%4 === 2){
                        stroke(inter2);  // palette colors
                    }else if(linesCounter%4 === 3){
                        stroke(lineStrokeColor2);  // palette colors
                    }
                }else{
                    stroke(r,g,b, alpha);                                   // noise color
                }
            }else{
                if(lineColor === 0){
                    stroke(random(255), alpha);                                      // grayscale
                }else if(lineColor === 1){
                    if(linesCounter%4 === 0){
                        lineColor1 = getRandomInt(colorArrays[paletteColor].length);
                        lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        while(lineColor2 === lineColor1){
                            lineColor2 = getRandomInt(colorArrays[paletteColor].length);
                        }
                        inter1 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.33);
                        inter2 = lerpColor(colorArrays[paletteColor][lineColor1], colorArrays[paletteColor][lineColor2], 0.66);
                        lineStrokeColor1 = color(colorArrays[paletteColor][lineColor1]);
                        lineStrokeColor2 = color(colorArrays[paletteColor][lineColor2]);
                        lineStrokeColor1.setAlpha(alpha);
                        inter1.setAlpha(alpha);
                        inter2.setAlpha(alpha);
                        lineStrokeColor2.setAlpha(alpha);
                        stroke(lineStrokeColor1);  // palette colors
                    }else if(linesCounter%4 === 1){
                        stroke(inter1);  // palette colors
                    }else if(linesCounter%4 === 2){
                        stroke(inter2);  // palette colors
                    }else if(linesCounter%4 === 3){
                        stroke(lineStrokeColor2);  // palette colors
                    }
                }else{
                    stroke(r, alpha);                                        // noise grayscale
                }
            }
            
            if(lines === 0 || lines === 2){
                line(x,y+(i*linesLength)+(i*linesGap),x,y+(i*linesLength)+(i*linesGap)+linesLength);
            }
            if(lines === 1 || lines === 2){
                line(x,(height-height/30)-(i*linesLength)-(i*linesGap),x,(height-height/30)-(i*linesLength)-(i*linesGap)-linesLength);
            }
            if(lines === 3){
                line(x,(height/2)-(i*linesLength)-(i*linesGap),x,height/2-(i*linesLength)-(i*linesGap)-linesLength);
                line(x,height/2+(i*linesLength)+(i*linesGap),x,height/2+(i*linesLength)+(i*linesGap)+linesLength);
            }
        }
        //print("frameRate",frameRate());
        linesCounter++;
        x = x + speedX;
    }
    else{
        blendMode(blendModes[0]);
        noStroke();
        fill(borderColor);
        rect(0,0,width-(width/30),height/30);
        rect(0,0,width/30,height);
        rect(width-(width/30),0,width,height);
        rect(0,height-(height/30),width,height);

        stroke(0);
        strokeWeight(1);
        line(0+((width/30)),0+((height/30)),width-((width/30)),0+((height/30)));
        line(0+((width/30)),0+((height/30)),0+((width/30)),height-((height/30)));
        line(0+((width/30)),height-((height/30)),width-((width/30)),height-((height/30)));
        line(width-((width/30)),0+((height/30)),width-((width/30)),height-((height/30)));

        noLoop();
        fxpreview();  
    }
}

