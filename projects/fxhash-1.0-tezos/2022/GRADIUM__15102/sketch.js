function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noLoop();
}

function draw() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  background(random(255), random(255), random(255));
    drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = 'rgba(255,255,255,0.09)';
  const columns = random(windowWidth / random(10,45));
  const rows = random(windowWidth / random(10,45));
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth;
      const y = r * cellHeight;
      noFill();
      blendMode(SUBTRACT );

      stroke(random(255), random(255), random(255));
      noStroke();
      rect(x, y, cellWidth, cellHeight);

      drawNani(x, y, random(100, 200));
    }
  }
}

function drawNani(x, y, size) {
  const bodySize = size / random(1, 400);
  const spacing = bodySize / random(1, 400);

  fill(random(255), random(255), random(255));
  rect(x - spacing, y - spacing, random(1, 400));
  fill(random(255), random(255), random(255));
  rect(x, y, 25, 25);
}
