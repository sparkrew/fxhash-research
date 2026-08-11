let colors = [
  [0, 0, 0],
  [15, 8, 0],
  [28, 0, 0],
  [56, 18, 33],
  [91, 27, 39],
  [117, 44, 22],
  [141, 71, 38],
  [158, 94, 56],
  [197, 150, 125],
  [222, 165, 132],
  [255, 182, 100],
  [255, 224, 178],
  [255, 255, 255],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  seed = int(fxrand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);

  blendMode(DIFFERENCE);
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = random(100);
  drawingContext.shadowColor = "rgb(255,143,143)";
}

function draw() {
  background(255);
  for (let i = 0; i < 5; i++) {
    let color = random(colors);
    fill(color);
    rect(random(width), random(height), random(width), random(height));
  }
  randomMondrianGrid();
}

function randomMondrianGrid() {
  let xGap = random(50, 100);
  let yGap = random(50, 100);
  let color = random(colors);

  for (let x = 0; x < width; x += xGap) {
    for (let y = 0; y < height; y += yGap) {
      stroke(random(colors));
      noFill();
      rect(x, y, xGap, yGap);
    }
  }
}
