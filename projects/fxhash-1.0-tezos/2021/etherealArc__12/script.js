'use strict'

let r, v, rd, fc, maxfc;

const randomRange = (min, max) => {
  let v = fxrand() * (max-min) + min;
  return v;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height* (fxrand() * (.3-.2) + .2);
  v = height* (fxrand() * (.15-.05) + .05);
  randomSeed(fxhash);
  rd = fxrand() * (1-0.33) + 0.33;
  background(245);
  stroke(20, 20);
  fc = 0;
}

function draw() {
  randomSeed(fxhash);

  if (fc < 1300) {
    for (var i=0; i<8; i++) {
      drawStuff(i);
    }
  }
  fc ++;
  //print(fc);
}

function windowResized() {
  fc = 0;
  resizeCanvas(windowHeight, windowHeight);
  background(245);
  for (var i=0; i<5; i++) {
    drawStuff(i);
  }
}

function drawStuff(i) {

   for (var i=0; i<500; i++) {
    let radius = fxrand() * (r+v -(r-v)) + (r-v);
    let a1 = fxrand() * TWO_PI;
    var angle = (fxrand() * a1 )* rd;
    var x = width/2 + sin(angle)* radius;
    var y = height/2 + cos(angle) * radius;
    strokeWeight(0.9);
    point(x, y);
   }
}

function keyPressed() {
  if (key == 's') {
    save("arc_" + frameCount + ".png");
  }
}
