var seed;
var x;
function setup() {
    Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  x = random(5,60)
  seed = random(10000000);
  randomSeed(seed);
  console.log(seed);
  rectMode(CENTER);
  blendMode(DIFFERENCE);
  //pixelDensity(20)
}

function draw() {
  background(0);

  fill(rc());
  // fill(color(0,0,0,0))
  stroke(rc());
  //strokeWeight(200)
  noStroke();
  circle(windowWidth , windowHeight , x);
  circle(windowWidth  - x, windowHeight , x);
  circle(x, windowHeight , -x);
  circle(windowWidth , x, -x);
  circle(windowWidth , windowHeight  - x, x);

  circle(x, x, x);
  circle(windowWidth  - x, x, x);
  circle(x, windowHeight  - x, x);
  circle(windowWidth  - x, windowHeight  - x, x);

  x += random(10, 17);

  if (x > 600) {
    noLoop();
  }
  frameRate(random(3, 10));
}

function rc() {
  return color(random(200, 255), random(200, 255), random(200, 255));
}
