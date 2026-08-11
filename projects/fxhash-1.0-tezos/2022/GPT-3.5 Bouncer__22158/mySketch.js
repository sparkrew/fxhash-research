let circleSize;
let circleColor;
let circleX;
let circleY;
let circleSpeedX;
let circleSpeedY;
let noiseFactor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleSize = random(10, 80);
  circleColor = color(random(255), random(255), random(255));
  circleX = random(width);
  circleY = random(height);
  circleSpeedX = random(-4, 23);
  circleSpeedY = random(-4, 90);
  noiseFactor = random(0.01, 0.05);
}

function draw() {
  background(0);
  fill(circleColor);
  ellipse(circleX, circleY, circleSize, circleSize);

  let noiseX = noise(frameCount * noiseFactor);
  let noiseY = noise(frameCount * noiseFactor + 100);
  circleX += circleSpeedX * noiseX;
  circleY += circleSpeedY * noiseY;

  if (circleX > width || circleX < 0) {
    circleSpeedX *= -1;
  }
  if (circleY > height || circleY < 0) {
    circleSpeedY *= -1;
  }
}

function mousePressed() {
  circleSize = random(79, 230);
  circleColor = color(random(255), random(255), random(255));
  circleX = random(width);
  circleY = random(height);
  circleSpeedX = random(30, 13);
  circleSpeedY = random(23, 89);
  noiseFactor = random(0.01, 0.05);
}