let sphR;
let fameLimit;
let xPos, yPos;
let dLR, dLG, dLB;
let dLX, dLY, dLZ;
let amLR, amLG, amLB;
let rPick, gPick, bPick;
let ranSpC, ranSpCMAX, ranSpM, ranSpMMAX, ranSpY, ranSpYMAX, ranSpK, ranSpKMAX;
let colBG;
let offsetX, offsetY;
let p5seed = 0;
let spotCol;

function setup() {
  createCanvas(2048, 2048, WEBGL);
  p5Seed = $fx.rand() * 999999;
  randomSeed(p5Seed);
  spotCol = color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
  colBG = color(int(random(0, 96)), int(random(0, 96)), int(random(0, 96)));
  background(colBG);
  spR = int(random(width / 50, width / 15));
  offsetX = (width - (width - spR)) / 1.5;
  offsetY = (width - (width - spR)) / 1.5;
  xPos = offsetX + 2 * spR;
  yPos = offsetY + 2 * spR;
  dLR = int(random(224, 255));
  dLG = int(random(224, 255));
  dLB = int(random(224, 255));
  dLX = int(random(-width / 2, width));
  dLY = int(random(-height / 2, height));
  dLZ = int(random(8, 64));
  amLR = int(random(128, 256));
  amLG = int(random(128, 256));
  amLB = int(random(128, 256));
  ranSpCMAX = abs(int((width / (2 * spR)) * floor(height / (2 * spR) / 5)));
  ranSpMMAX = abs(int(ranSpCMAX * 1.9));
  ranSpYMAX = abs(int(ranSpCMAX * 2.7));
  ranSpKMAX = abs(int(ranSpCMAX * 3.9));
  ranSpC = int(random(1, ranSpCMAX));
  ranSpM = int(random(ranSpCMAX + 1, ranSpMMAX));
  ranSpY = int(random(ranSpMMAX + 1, ranSpYMAX));
  ranSpK = int(random(ranSpYMAX + 1, ranSpKMAX));
  push();
  translate(0,0,0);
  ambientLight(255, 255, 255);
  directionalLight(255, 255, 255, random(-width/2, width/2), random(-height/2, height/2), int(random(-50,-200)));
  fill(spotCol);
  sphere(width*0.55, 124,124);
  pop();
  fill(int(random(240, 256)), int(random(240, 256)), int(random(240, 256)));
}

function draw() {
  push();
  translate(-width / 2 + xPos, -(height / 2) + yPos, 0);
  ambientLight(amLR, amLG, amLB);
  directionalLight(dLR, dLG, dLB, dLX, dLY, dLZ);
  strokeWeight(spR * 0.05);
  stroke(colBG);
  box(spR, spR, spR, 4, 4);
  pop();

  if (frameCount == ranSpC) {
    push();
    translate(-width / 2 + xPos, -(height / 2) + yPos, 0);
    ambientLight(0,255, 255);
    directionalLight(dLR, dLG, dLB, dLX, dLY, dLZ);
    sphere(spR, 120, 124);
    pop();
  }

  if (frameCount == ranSpM) {
    push();
    translate(-width / 2 + xPos, -(height / 2) + yPos, 0);
    ambientLight(255, 0, 255);
    directionalLight(dLR, dLG, dLB, dLX, dLY, dLZ);
    sphere(spR, 120, 124);
    pop();
  }

  if (frameCount == ranSpY) {
    push();
    translate(-width / 2 + xPos, -(height / 2) + yPos, 0);
    ambientLight(255, 255, 0);
    directionalLight(dLR, dLG, dLB, dLX, dLY, dLZ);
    sphere(spR, 120, 124);
    pop();
  }

  if (frameCount == ranSpK) {
    push();
    translate(-width / 2 + xPos, -(height / 2) + yPos, 0);
    ambientLight(0, 0, 0);
    directionalLight(dLR, dLG, dLB, dLX, dLY, dLZ);
    sphere(spR, 120, 124);
    pop();
  }

  xPos += 2 * spR;
  if (xPos >= width - 2 * spR) {
    xPos = offsetX + 2 * spR;
    yPos += 2 * spR;
  }
  if (yPos >= height - 2 * spR) {
    $fx.preview();
    noLoop();
  }
}
