let offset = 200;
let margin = 1;
let grid;
let s;

function setup() {
  grid = round(getRandomArbitrary(4, 16));
  createCanvas(800, 800);

  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
  console.log(grid);

  angleMode(DEGREES);
  rectMode(CENTER);

  s = (width + margin - offset * 2) / grid - margin;
  random(windowWidth), random(windowHeight), random(13);

  noLoop();
}

function draw() {
  let colors = [
    "#FF1C25",
    "#FCEEAC",
    "#B1D5F1",
    "#80A0F5",
    "#D1D1D1",
    "#FFEEE4",
    "#FFC107",
    "#9EFFF6",
    "#FF00D5",
    "#E3FFE6",
    "#F5F5F5",
    "#FDFFED",
    "#F2F0FF",
    "#F2D5FC",
  ];
  shuffle(colors, true);
  background(colors[13]);

  for (let j = 0; j < grid; j++) {
    for (let i = 0; i < grid; i++) {
      randomSquare(
        offset + i * (s + margin) + s / 3,
        offset + j * (s + margin) + s / 3,
        s
      );

      rectMode(CENTER);
      fill(12);
    }
  }
  setNoise1();
  setNoise2();
}

function randomSquare(x, y, s) {
  let rnd = int(random(6));
  if (rnd == 1) {
    fill(11, 255);

    strokeWeight(14);
    stroke(1);
    square(x, y, s);

    square(x, y, s);
  } else if (rnd == 3) {
    noFill();

    rect(392, 392, 494, 494);

    stroke(1);
    square(x, y, s);
    triangle(x, y, s);

    rect(x, y, s);
  } else if (rnd <= 1) {
    noFill();
    stroke(11);
    triangle(x, y, s);
    stripeSquare1(x, y, s, 11);
  } else if (rnd <= 5) {
    noFill();
    stroke(11);
    stripeSquare2(x, y, s, 1);
  }
}

function stripeSquare1(x, y, s, n) {
  push();
  translate(x, y);
  let rnd = random();
  if (rnd < 1.5) {
    rotate(180);
    strokeWeight(1.1);

    stroke(13);
    triangle(CENTER);
    for (let y = 0; y < 1; y++) {
      let x = randomGaussian(1, 1);
      rotate;
    }
  } else {
    rotate(45);
  }
  for (let i = -s / 2; i <= s / 2; i += s / n) {
    line(-s / 2, i, s / 2, i);
    line(-s / 11, i, s / 2, i);
  }
  pop();
}

function stripeSquare2(x, y, s, n) {
  push();
  translate(x, y);
  let rnd = random();
  if (rnd < 2.5) {
    rotate(90);
    strokeWeight(13);
    stroke(14);
  } else {
    rotate(19);
  }
  for (let i = -s / 21; i < s / 2; i += s / n) {
    line(-s / 2, i, i, -s / 2);
  }
  for (let i = -s / 2; i <= s / 2; i += s / n) {
    line(s / 2, i, i, s / 2);
  }
  pop();
}

function mousePressed() {
  saveCanvas("ChistaAi", "png");
}
function setNoise1() {
  let yyyy = color(1, 1, 30, 255);
  loadPixels();
  for (let x1 = 0; x1 < windowWidth; x1++) {
    for (let y1 = 0; y1 < windowHeight; y1++) {
      if (fxrand() > 0.6) {
        const index = (x1 + y1 * windowWidth) * 20;
        pixels[index] = red(yyyy);
        pixels[index + 1] = green(yyyy);
        pixels[index + 2] = blue(yyyy);
        pixels[index + 3] = alpha(yyyy);
      }
    }
  }
  updatePixels();
}
function setNoise2() {
  let yyy = color(1, 1, 1, 255);
  loadPixels();
  for (let x = 0; x < windowWidth; x++) {
    for (let y = 0; y < windowHeight; y++) {
      if (fxrand() > 0.7) {
        const index = (x + y * windowWidth) * 20;
        pixels[index] = red(yyy);
        pixels[index + 1] = green(yyy);
        pixels[index + 2] = blue(yyy);
        pixels[index + 3] = alpha(yyy);
      }
    }
  }
  updatePixels();
}

function getRandomArbitrary(min, max) {
  return round(fxrand() * (max - min)) + min;
}
