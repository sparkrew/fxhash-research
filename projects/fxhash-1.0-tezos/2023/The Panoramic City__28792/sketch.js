var offset = 0.96;
var index1;
var index2;
var colorSpace = 0;
var framePreview = 26;
var colorIndex = 0;

function setup() {
  Math.random = fxrand;
  noiseSeed(fxrand() * 99999);
  randomSeed(fxrand() * 99999);
  canvas = createCanvas(600, 600, WEBGL);
  canvas.addClass("saveClass");

  pixelDensity(2);
  background(220);
  angleMode(DEGREES);
  colorSpace = random([0, 50, 0, 50, 100, 150, 200, 250, 300, 350, 350]);

  index1 = random(360);
  index2 = random(360);


  while (abs(index2 - index1) < colorSpace) {
    index1 = random(360);
    index2 = random(360);
  }


  colorIndex = random([0, 5]);
}

function draw() {
  if (frameCount < framePreview) {

    push();
    translate(width / 2, height / 2);


    rotateX(-140 + 2 * frameCount);
    translate(-width / 2, -height / 2);

    createUnevenGrid(width * (1 - offset) - random(width * 2.5, 2.5 * width), height * (1 - offset), width * 8 * offset - (width * (1 - offset)), height * 6 * offset - (height * (1 - offset)), 123, 22, 22);
    pop();
  }

  if (frameCount > framePreview) {
    colorMode(RGB);
    stroke(235, 235, 235);
    strokeWeight(22);
    noFill();
    rect(-width / 2, -height / 2, width, height);

  }

  if (frameCount > framePreview + 12) {
    fxpreview();
    noLoop();

  }
}

function createUnevenGrid(x, y, w, h, numRectangles, minWidth, minHeight) {
  noFill();
  colorMode(HSB);
  let boxColor = color(random(index1, index2), random(12, 100), random(77, 100));
  if (random(0, 100) < colorIndex * map(frameCount, 0, framePreview, 4, 1)) {
    boxColor = color(360, random(0, 0), random(100, 100));
  }

  if (numRectangles === 1) {

    rect(x, y, w, h);
  } else {


    let divideHorizontally = random() > 0.5;

    if (divideHorizontally) {



      let split = random(0.2, 0.8);
      let splitPoint = y + split * h;


      let upperRectHeight = splitPoint - y;
      let lowerRectHeight = h - upperRectHeight;
      if (upperRectHeight >= minHeight) {
        createUnevenGrid(x, y, w, upperRectHeight, numRectangles - 1, minWidth, minHeight);
      } else {
        rectBox(x - width / 2, y - height / 2, w, upperRectHeight, boxColor);
      }
      if (lowerRectHeight >= minHeight) {
        createUnevenGrid(x, splitPoint, w, lowerRectHeight, numRectangles - 1, minWidth, minHeight);
      } else {
        rectBox(x - width / 2, splitPoint - height / 2, w, lowerRectHeight, boxColor);
      }
    } else {



      let split = random(0.2, 0.8);
      let splitPoint = x + split * w;


      let leftRectWidth = splitPoint - x;
      let rightRectWidth = w - leftRectWidth;
      if (leftRectWidth >= minWidth) {
        createUnevenGrid(x, y, leftRectWidth, h, numRectangles - 1, minWidth, minHeight);
      } else {
        rectBox(x - width / 2, y - height / 2, leftRectWidth, h, boxColor);
      }
      if (rightRectWidth >= minWidth) {
        createUnevenGrid(splitPoint, y, rightRectWidth, h, numRectangles - 1, minWidth, minHeight);
      } else {
        rectBox(splitPoint - width / 2, y - height / 2, rightRectWidth, h, boxColor);
      }
    }
  }
}

function rectBox(xB, zB, wB, hB, cB) {
  push();
  translate(xB, zB + random(-2, 2), random(0, 25));

  strokeWeight(1.2);
  fill(cB);

  box(wB * 0.7 * map(frameCount, 0, framePreview, 1.5, 1.6), hB * 1.6 * map(frameCount, 0, framePreview, 1, 0.8), random(noise(xB / 24, zB / 24) * map(frameCount, 0, framePreview, 2, 250)));
  pop();
}
