let numPoints = Math.floor((fxrand() * 200 + 50) / 2); // number of points on each line
let angleStep = (fxrand() * 20 + 5) / (fxrand() * 60); // angle step between each point
let radiusStep = (fxrand() * 10 + 1) / 3; // radius step between each point
let lineWidth = (fxrand() * 30 + 2) / 1; // width of the lines
let distortion = fxrand() * 2; // amount of distortion
let spiralSpeed = fxrand() * 3 + 0.1/2; // speed of spiral rotation
let numSpirals = Math.floor(fxrand() *  10 + 1); // number of spirals

let colors = [
  '#D69C2F', '#94618E', '#33638D', '#2F4B7C', '#F6AE2D', // Van Gogh
  '#9A031E', '#FB8B24', '#D90368', '#2E294E', '#6A0574', // Matisse
  '#004B87', '#679436', '#BCBABE', '#A1C181', '#D9BF77', // Picasso
  '#F0C808', '#5B9EAD', '#F34213', '#3E8914', '#1982BC', // Monet
];

function setup() {
    let seed = fxrand() * 999999;
  randomSeed(seed);
  noiseSeed(seed);
  fxpreview();
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  blendMode(DIFFERENCE)
  strokeWeight(lineWidth);
  strokeCap(ROUND);
  angleMode(DEGREES);
    drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = random(5,10);
  drawingContext.shadowColor = 'rgba(255,255,255,0.25)';
}

function draw() {
  noLoop();
  let r_var1 = fxrand() * 4 + 2;
  let r_var2 = fxrand() * (r_var1 - 1) + 1;

  translate(width / 2, height / 2);
  for (let j = 0; j < numSpirals; j++) {
    let radius = 0;
    let angle = 0;
    let c = color(colors[j % colors.length]);
    stroke(c);
    console.log(angle)

    console.log(numPoints / r_var1, numPoints / r_var2, numPoints)

    beginShape();

    for (let i = 0; i < numPoints / r_var1; i++) {
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      curveVertex(x, y);
      angle = angle + fxrand() * 40 + 10 * angleStep;
      radius = radius + fxrand() * 10 + radiusStep;
    }

    for (let i = numPoints / r_var1; i < numPoints / r_var2; i++) {
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      curveVertex(x, y);
      angle = angle + fxrand() * 40 + 10 * angleStep;
      radius = radius + fxrand() * 10 + radiusStep;
    }

    for (let i = numPoints / r_var2; i < numPoints; i++) {
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      curveVertex(x, y);
      angle = angle + fxrand() * 40 + 10 * angleStep;
      radius = radius + fxrand() * 10 + radiusStep;
    }

    endShape();
    rotate(spiralSpeed);
  }
}
