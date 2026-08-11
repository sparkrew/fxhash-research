function preload() {
  font = loadFont("./beatstreet.ttf");
}

function setup() {
  createCanvas(800, 800);
  noLoop();
  textFont(font);
  background(255);
  strokeWeight(0);
}

function draw() {
  for (let y = 0; y < height; y += fxrand() * 75) {
    drawText();
  }
}

function drawText() {
  const spacing = fxrand() * 75;
  const ink = [0, fxrand() * 255];
  const color = [ink[int(fxrand() * 2)], ink[int(fxrand() * 2)], ink[int(fxrand() * 2)]];
  
  for (let x = spacing; x <= width; x += spacing) {
    stroke(color);
    fill(color);
    textSize(fxrand() * 150);
    text(String.fromCharCode(40 + fxrand() * 64, 40 + fxrand() * 64, 40 + fxrand() * 64), fxrand() * width, fxrand() * height);
  }
}
