function preload() {
  font = loadFont("./conviva.ttf");
}

function setup() {
  createCanvas(800, 800);
  noLoop();
  textFont(font);
  background(0);
  strokeWeight(0);
}

function draw() {
  for (let y = 0; y < height; y += 15 + fxrand() * 135) {
    drawText();
  }
}

function drawText() {
  const spacing = 15 + fxrand() * 105;
  const ink = [0, fxrand() * 255];
  const color = [ink[int(fxrand() * 2)], ink[int(fxrand() * 2)], ink[int(fxrand() * 2)]];
  
  for (let x = spacing; x <= width; x += spacing) {
    stroke(color);
    fill(color);
    textSize(10 + fxrand() * 140);
    text(String.fromCharCode(40 + fxrand() * 64, 40 + fxrand() * 64, 40 + fxrand() * 64), fxrand() * width, fxrand() * height);
  }
}
