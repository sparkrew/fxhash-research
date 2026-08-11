//"Helios Graphene by Marc Barbero"

const SQRT = Math.sqrt(2);
let radius = 0;
let speedX = 1;
let speedY = 1;
let accX = 4;
let accY = 4;
xoff = 0;
count = 0;

let colors = [
  "#4464a1",
  "#df5f50",
  "#467745",
  "#5a3034",
  "#f5b800",
  "#ffcc4d",
  "#ee726b",
  "#56a1c4",
];

function setup() {
  createCanvas(600 * SQRT + 2, 602);
  let Seed = fxrand() * 100000;
  randomSeed(Seed);
  noiseSeed(Seed);
  x = 400 * random(0.8, 1);
  y = 400 * random(-0.2, -0.1);
  xP = random(-0.3, 0.3);
  yP = random(1, 2);
  stk = random(colors);
  stk2 = random(colors);
  pixelDensity(6);
  blendMode(MULTIPLY);
  frameRate(60);
}

function draw() {
  xoff = xoff + 0.001;
  n = noise(xoff) * 1.5;

  background(255, 3);
  x = x + xP * speedX * accX * n;
  y = y + yP * speedY * accY * n;
  if (x > width - radius || x < radius) {
    speedX = -speedX;
  }
  if (y > height - radius || y < radius) {
    speedY = -speedY;
    stk = random(colors);
  }

  push();
  translate(x, y);
  for (let angle = 0; angle < TAU; angle += TAU / 180) {
    rotate(random(HALF_PI));
    stroke(stk);
    point(sin(angle) * radius, cos(angle) * radius);
    point(sin(angle) * radius, cos(angle) * radius);
    stroke(stk2);
    strokeWeight(random(0.3, 1.5));
    point(atan(angle) * radius, atan(angle) * radius);
  }
  pop();

  radius = (cos(frameCount / 300) * 350);
  if (frameCount >= 2300 - x) {
    noLoop();
    fxpreview();
  }
}
function keyPressed() {
  if (keyCode == "S" || key == "s") {
    saveCanvas("Helios Graphene", "png");
  }
}
