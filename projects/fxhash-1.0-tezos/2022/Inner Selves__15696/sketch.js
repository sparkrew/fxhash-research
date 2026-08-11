function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(random(255)/3.14 + 10, random(255)/8 + 10, random(255)/2 + 10);
  circleRec(width / 2, height / 2, random(250,650), 150);
  smooth();
}

function circleRec(x, y, d, min) {
  let rnd = random(1);
  //stroke(0);
  //strokeWeight(random(0.5, 1));
  fill(random(255) + 50, random(255) + 50, random(255) + 50);
  noStroke();
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 170;
  drawingContext.shadowColor = "rgba(219,195,195,0.25)";
  ellipse(x, y, d, d);
  if (d > min) {
    let r = d / 2;
    let d1 = random(0.1, 0.9) * d;
    let d2 = d - d1;
    let a1 = random(TAU);
    let a2 = a1 + PI;
    let r1 = r - d1 / 2;
    let r2 = r - d2 / 2;
    circleRec(x + r1 * cos(a1), y + r1 * sin(a1), d1, min);
    circleRec(x + r2 * cos(a2), y + r2 * sin(a2), d2, min);
  }
}
