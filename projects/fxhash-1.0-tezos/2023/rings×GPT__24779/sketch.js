function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = int(fxrand() * 987654321);
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(10);

  w = 70;
  rows = 800 / w;
  cols = 800 / w;
  grid = [];

  for (var i = 0; i < rows * w; i++) {
    grid[i] = [];
  }
}

function draw() {
  background(0);
  stroke(255);

  strokeWeight(10);

  noFill();

  stroke(rc());

  for (var i = -100; i < rows; i++) {
    for (var j = -100; j < cols; j++) {
      let x = w * i + w / 2;
      let y = w * j + w / 2;
      let a = noise(1000, 1000) * PI * 2;

      let x_vel = cos(a);
      let y_vel = sin(a);

      circle(x, y, 35);
      stroke(rc());
      circle(x + x_vel * 35, y + y_vel * 35, 35);
    }
  }

  let curveL = 200;

  noLoop();
}

function rc() {
  return color(random(255), random(255), random(255));
}
