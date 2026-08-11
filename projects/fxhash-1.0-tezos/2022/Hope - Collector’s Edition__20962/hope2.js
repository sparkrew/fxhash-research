// HOPE-COLLECTOR’S EDITION by fauxjebus & Dave Siegel
// fxhash project 006.1 - Gift for holders of 5 or more Hopes

let  backgroundName, waveName, blendRand, pxd2;

  function keyPressed(){
if(key ==="s"){save('Hope.png')}
if(key ==="2"){storeItem('pxd2', 2);}
if(key ==="4"){storeItem('pxd2', 4);}
if(key ==="6"){storeItem('pxd2', 6);}
if(key ==="8"){storeItem('pxd2', 8);}
if(key ==="0"){storeItem('pxd2', 10);}
if (key ==="f"){let f=fullscreen();fullscreen(!f)}
               }

  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999); // Thank you Sableraph

function setup() {

    pxd2 = getItem('pxd2');

    if (pxd2 == null){
storeItem('pxd2',2);
  }

colorMode(HSB);
pixelDensity(pxd2);

    canvasOrientation = int(random(2));
//Portrait canvas
  if (canvasOrientation == 0) {
    createCanvas(1200 / 1.3, 1200);
    canvasType = "Portrait";
  }
//Landscape canvas
  if (canvasOrientation == 1) {
    createCanvas(1200, 1200 / 1.3);
    canvasType = "Landscape";
  }


// VARIABLES //

  shiftPick = random(20);
  gappy = random(10);
  bgPick = int(random(4));
  sameY = random(height);
  sameY2 = random(height);
  blendPick = MULTIPLY;
  waveType = int(random(4));
  loopA = [1,1,1,1,1,1,1,1,1,2,2,3,4,5,20];
  loopB = loopA[int(random(15))];
  moveBumps = random(-0.6, 0.5);
  movex1 = random(-1, 1);
  movex2 = random(-1, 1);
  movey1 = random(-1, 1);
  movey2 = random(-1, 1);
  numberofBumps = int(random(3,8));

bumpyPoint1y = random(height*(2/10),height*(8/10));
bumpyPoint2y = random(height*(2/10),height*(8/10));
bumpyPoint3y = random(height*(2/10),height*(8/10));
bumpyPoint4y = random(height*(2/10),height*(8/10));
bumpyPoint5y = random(height*(2/10),height*(8/10));
bumpyPoint6y = random(height*(2/10),height*(8/10));
bumpyPoint7y = random(height*(2/10),height*(8/10));
bumpyPoint8y = random(height*(2/10),height*(8/10));
bumpyPoint9y = random(height*(2/10),height*(8/10));
bumpyPoint10y = random(height*(2/10),height*(8/10));
bumpyPoint11y = random(height*(2/10),height*(8/10));
bumpyPoint12y = random(height*(2/10),height*(8/10));
bumpyPoint13y = random(height*(2/10),height*(8/10));

  // Reroll y points if they are too close to the previous one
  minSpace = height/(numberofBumps*5);

  for (p = 0; p < 10; p++) {
if (bumpyPoint1y <= bumpyPoint2y+minSpace && bumpyPoint1y >= bumpyPoint2y-minSpace){
    bumpyPoint1y = random(height*(2/10),height*(8/10));}
if (bumpyPoint2y <= bumpyPoint1y+minSpace && bumpyPoint2y >= bumpyPoint1y-minSpace){
    bumpyPoint2y = random(height*(2/10),height*(8/10));}
if (bumpyPoint3y <= bumpyPoint2y+minSpace && bumpyPoint3y >= bumpyPoint2y-minSpace){
    bumpyPoint3y = random(height*(2/10),height*(8/10));}
if (bumpyPoint4y <= bumpyPoint3y+minSpace && bumpyPoint4y >= bumpyPoint3y-minSpace){
    bumpyPoint4y = random(height*(2/10),height*(8/10));}
if (bumpyPoint5y <= bumpyPoint4y+minSpace && bumpyPoint5y >= bumpyPoint4y-minSpace){
    bumpyPoint5y = random(height*(2/10),height*(8/10));}
if (bumpyPoint6y <= bumpyPoint5y+minSpace && bumpyPoint6y >= bumpyPoint5y-minSpace){
    bumpyPoint6y = random(height*(2/10),height*(8/10));}
if (bumpyPoint7y <= bumpyPoint6y+minSpace && bumpyPoint7y >= bumpyPoint6y-minSpace){
    bumpyPoint7y = random(height*(2/10),height*(8/10));}
if (bumpyPoint8y <= bumpyPoint7y+minSpace && bumpyPoint8y >= bumpyPoint7y-minSpace){
    bumpyPoint8y = random(height*(2/10),height*(8/10));}
if (bumpyPoint9y <= bumpyPoint8y+minSpace && bumpyPoint9y >= bumpyPoint8y-minSpace){
    bumpyPoint9y = random(height*(2/10),height*(8/10));}
if (bumpyPoint10y <= bumpyPoint9y+minSpace && bumpyPoint10y >= bumpyPoint9y-minSpace){
    bumpyPoint10y = random(height*(2/10),height*(8/10));}
if (bumpyPoint11y <= bumpyPoint10y+minSpace && bumpyPoint11y >= bumpyPoint10y-minSpace){
    bumpyPoint11y = random(height*(2/10),height*(8/10));}
if (bumpyPoint12y <= bumpyPoint11y+minSpace && bumpyPoint12y >= bumpyPoint11y-minSpace){
    bumpyPoint12y = random(height*(2/10),height*(8/10));}
if (bumpyPoint13y <= bumpyPoint12y+minSpace && bumpyPoint13y >= bumpyPoint12y-minSpace){
    bumpyPoint13y = random(height*(2/10),height*(8/10));}
  }

  if (canvasOrientation == 0) {
numberofBumps = int(random(3,6));
    }

  point1y = random(height/100, height-(height/100));
  point2y = random(height/100, height-(height/100));

  point1x = random(width / 100, width / 10);
  point2x = random(width / 10, width / 5);

  handle1x = random(0,width);
  handle1y = random(height/100, height-(height/100));
  handle2x = random(0,width);
  handle2y = random(height/100, height-(height/100));

// avoid flat bezier curves
    for (y = 0; y < 5; y++) {
    if (point1y >= point2y-50 && point1y <= point2y+50){
      if (handle1y >= point2y-50 && handle1y <= point2y+50){
         if (handle2y >= point2y-50 && handle2y <= point2y+50){
           handle1y = random(0,height);
           handle2y = random(0,height);
    }
  }
}
}


///// COLOURS /////

Rainbow = [[0,90,74], [28,90,90], [45,65,99], [120,70,60], [190,80,85], [220,80,60]];
palettes = [Rainbow];
paletteNames = ["Rainbow"];
  palette = palettes[Rainbow];

  colourX = random(palettes);


/////// BACKGROUND ///////

// CREAM BACKGROUND
  if (bgPick <= 1) {
    background(40, 5, 95);
    backgroundName = "Cream";
  }

// CHARCOAL BACKGROUND
  if (bgPick >= 2) {
    background(0, 0, 7);
    backgroundName = "Charcoal";
  }


// FEATURES & LOG //

        if(waveType<=2){
        console.log("Bezier curve");
          waveName = "Bezier curve";}
        if(waveType==3){
        console.log("Bumpy wave");
        waveName = "Bumpy wave";}


window.$fxhashFeatures = {
  "Wave Type": waveName,
  "Background Colour": backgroundName,
  "Orientation": canvasType,
  "Number of Rainbows": loopB,
};

}



function draw() {

// // NOISE TEXTURE //
  blendMode(BLEND);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let x = random(width);
      let y = random(height);
      stroke(0, 0, random(100), 0.07);
      point(i, j);
    }
  }


///// FUNCTIONS ///////

function drawBezierCurve() {
    let x1 = width/-66; //placement of point 1
    let y1 = point1y;

    let x2 = handle1x; // placement of handles 1
    let y2 = handle1y;

    let x3 = handle2x; // placement of handles 2
    let y3 = handle2y;

    let x4 = width + (width/66); // placement of point 2
    let y4 = point2y;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

function drawBumpyWave() {

        beginShape();
        curveVertex(width/-20, bumpyPoint1y); // handle1x, handle1y
        curveVertex(width/-200,bumpyPoint1y); // point 1x, point1y

        curveVertex(width*(1/numberofBumps),bumpyPoint2y); // 2
        if(numberofBumps>=3){
        curveVertex(width*(2/numberofBumps),bumpyPoint3y);} // 3
        if(numberofBumps>=4){
        curveVertex(width*(3/numberofBumps),bumpyPoint4y);} // 4
        if(numberofBumps>=5){
        curveVertex(width*(4/numberofBumps),bumpyPoint5y);} // 5
        if(numberofBumps>=6){
        curveVertex(width*(5/numberofBumps),bumpyPoint6y);} // 6
        if(numberofBumps>=7){
        curveVertex(width*(6/numberofBumps),bumpyPoint7y);} // 7
        if(numberofBumps>=8){
        curveVertex(width*(7/numberofBumps),bumpyPoint8y);} // 8
        if(numberofBumps>=9){
        curveVertex(width*(8/numberofBumps),bumpyPoint9y);} // 9

        curveVertex(width+(width/200), bumpyPoint10y); // endPointx,endPointy
        curveVertex(width+(width/20),bumpyPoint10y); // handle2x, handle2y
        endShape();

  }

function rollGap() {
    // 30% Chance for brushstrokes to separate
    if (gappy <= 2) {
      point1y = point1y + random(height/-20,height/20);
      point2y = point2y + random(height/-20,height/20);
      handle1y = handle1y + random(height/-20,height/20);
      handle2y = handle2y + random(height/-20,height/20);
    }
  }

function changeCurve() {
    // 30% Chance for anchor points to change
    if (shiftPick <= 2) {
      point1y = random(height/-100, height-(height/100));
      point2y = random(height/-100, height-(height/100));
    }

    // 20% Chance for first anchor points to all be the same
    if (shiftPick <= 1) {
      point1y = sameY;
    }

    // 20% Chance for second anchor points to all be the same
    if (shiftPick >=1 && shiftPick <=2) {
      point2y = sameY2;
    }

    // 10% chance to change bezier handles
    if (shiftPick >= 18) {
      handle1x = random(0, width);
      handle1y = random(0, height);
      handle2x = random(0, height);
      handle2y = random(0, width);
    }
  }

function tweakLines() {
    // slightly move the anchor points and bezier handles each loop

    point1y = point1y + random(movex1, movex2);
    point2y = point2y + random(movey1, movey2);
    handle1y = handle1y + random(movex1, movex2);
    handle2y = handle2y + random(movey1, movey2);

       bumpyPoint1y = bumpyPoint1y + random(movex1, movex2);
       bumpyPoint2y = bumpyPoint2y + random(movex1, movex2);
       bumpyPoint3y = bumpyPoint3y + random(movex1, movex2);
       bumpyPoint4y = bumpyPoint4y + random(movex1, movex2);
       bumpyPoint5y = bumpyPoint5y + random(movex1, movex2);
       bumpyPoint6y = bumpyPoint6y + random(movex1, movex2);
       bumpyPoint7y = bumpyPoint7y + random(movex1, movex2);
       bumpyPoint8y = bumpyPoint8y + random(movex1, movex2);
       bumpyPoint9y = bumpyPoint9y + random(movex1, movex2);
       bumpyPoint10y = bumpyPoint10y + random(movex1, movex2);

    // randomize stroke width of each line
    strokeWeight(random(0.3, 3));
  }




function changePoints(){

      point1y = random(height/100, height-(height/100));
      point2y = random(height/100, height-(height/100));
      handle1x = random(height/-20, width * 1.2);
      handle1y = random(height/-20, height * 1.2);
      handle2x = random(height/-20, height * 1.2);
      handle2y = random(height/-20, width * 1.2);

bumpyPoint1y = random(height*(2/10),height*(8/10));
bumpyPoint2y = random(height*(2/10),height*(8/10));
bumpyPoint3y = random(height*(2/10),height*(8/10));
bumpyPoint4y = random(height*(2/10),height*(8/10));
bumpyPoint5y = random(height*(2/10),height*(8/10));
bumpyPoint6y = random(height*(2/10),height*(8/10));
bumpyPoint7y = random(height*(2/10),height*(8/10));
bumpyPoint8y = random(height*(2/10),height*(8/10));
bumpyPoint9y = random(height*(2/10),height*(8/10));
bumpyPoint10y = random(height*(2/10),height*(8/10));
numberofBumps = int(random(4,10));

  }


function changeBlend(){
    // randomly change each line’s blend mode between Multiply and Screen

    blendRand = int(random(0, 12));
    if (blendRand <= 6) {
      blendPick = MULTIPLY;
    } else {
      blendPick = SCREEN;
    }
    blendMode(blendPick);

  }

  noFill(); // We only want the line please


/////// PAINTED LINES ///////


     for (a = 0; a < loopB ; a++) {
      for (h = 0; h < [Rainbow.length] ; h++) {
        rollGap();
        changeCurve();

    stroke (Rainbow[h]);

    // stroke (Rainbow[int(random(Rainbow.length))]);

      for (p = 0; p < random(100,900); p++) {

        tweakLines();
        changeBlend();

        if(waveType<=2){
        drawBezierCurve();}
        if(waveType==3){
        drawBumpyWave();}

      }
  }
}

  noLoop();
}
