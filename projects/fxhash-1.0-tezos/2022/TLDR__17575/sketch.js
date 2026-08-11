/// TLDR
/// by Ed Cavett
/// August 2022

/// fxhash Compliant NFT

let asterField = [];
let countMax;
let sum;
let ave;
let maxLen;
let rotCanvas;
let colSelect;
let shadeSelect;

function setup() {
  createCanvas(1990,
               1990);
  let hashGen = fxrand() * 10000;
  randomSeed(hashGen);
  noiseSeed(hashGen);
  strokeCap(SQUARE);
  background(255,255);
  let quant = floor(random(16,60));
  for (let n = 0; n < quant; n++) {
    asterField.push(new fieldMaker());
  }
  countMax = width*0.12;
  sum = 0;
  ave = 0;
  maxLen = 25;
  rotCanvas = random(-PI,PI);
  colSelect = floor(random(20));
  shadeSelect = floor(random(8));
  push();
  noStroke();
  setFill(colSelect,shadeSelect,64);
  rect(0,0,width,height);
  pop();
}

function draw() {
  translate(width*0.5,height*0.5);
  rotate(HALF_PI+rotCanvas);
  translate(-height*0.5,0);
  sum = 0;
  ave = 0;
  for (let i = 0; i < asterField.length; i++) {
    asterField[i].update();
    let v1 = asterField[i].pos;
    let v2 = sum;
    sum = p5.Vector.add(v1,v2);
  }
  sum.div(asterField.length);
  for (let i = 0; i < asterField.length; i++) {
  let range = asterField[i].size;
  push();
  let jLine = asterField[i].pos;
  strokeWeight(1);
  stroke(255,32);
  if (sum.x < jLine.x) {
    startY = sum.y;
    endY = jLine.y;
  } else {
    startY = jLine.y;
    endY = sum.y;
  }
  push();
  for (let yLine = startY; yLine < endY; yLine +=range*0.1) {
    let xLine = map(noise(frameCount*0.05,
                          i*0.05,
                          yLine*0.01),0,1,
                    -range,range);
    push();
    translate(xLine+sum.x,yLine+sum.y);
    if (random() <0.1) {
      rotate(HALF_PI);
    }
    stroke(0,255);
    strokeWeight(range*0.05+random(2,4));
    line(0,-range*0.1,0,range*0.1);
    shadeSelect = floor(random(8));
    setStroke(colSelect,shadeSelect,255);
    strokeWeight(range*0.05);
    line(0,-range*0.1,0,range*0.1);
    pop();
    if (noise(yLine*0.5,xLine*0.05) < 0.2) {
      push();
      translate(xLine+sum.x,yLine+sum.y);
      rotate(-rotCanvas);
      if (random() < 0.05) {
        push();
        rotate(random(-PI*0.1,PI*0.1));
        strokeWeight(range*0.1);
        setStroke(colSelect,shadeSelect,255);
        line(0,0,-range*3,0);
        pop();
      }
      maxLen = range*0.2;
      grassMaker(maxLen);
      grassMaker(maxLen);
      grassMaker(maxLen);
      pop();
    }
  }  
  stroke(255,125);
  strokeWeight(3);
    noFill();
  pop();
}
  if (frameCount > countMax) {
    fxpreview();
    noLoop();
  }
}


function grassMaker(len) {
  push();
  translate(0,0);
  let rot = random(-PI*0.15,PI*0.15);
  rotate(rot);
  let sw = map(len,maxLen*0.1,maxLen,1,maxLen*0.2);
  strokeWeight(sw+2);
  setStroke(colSelect+1,shadeSelect,255);
  line(0,0,-len,0);
  strokeWeight(sw);
  stroke(0,255);
  line(0,0,-len,0);
  translate(-len,0);
  if (len > 3) {
    grassMaker(len*0.8);
  }
  pop();
}


function fieldMaker() {
  this.pos = createVector(width*0.2,0);
  this.rot = 0;
  this.size = 1;
  this.count = 0;
  this.vel = createVector(0,0);
  this.off = random(1000);
  
  this.update = function() {
    this.count += 1;

    this.size = map(this.count,30,countMax,10,height*0.1);
    this.mag = map(this.count,30,countMax,1,height*0.01);
    let turnRate = map(this.count,30,countMax,0.1,2);
    if (sin(this.count*0.1) < 0) {
      this.rot = map(noise(this.off,frameCount*0.05),0,1,
                     -PI*turnRate,PI*turnRate);
    }
    this.vel = p5.Vector.fromAngle(this.rot);
    this.vel.mult(this.mag);
    this.pos.add(this.vel);
  }
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    saveCanvas("ed_cavett_TLDR", "png");
  }
}



function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}