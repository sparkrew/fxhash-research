//Non-Alignment Pact ~ ArtikGenerative.xyz

p5.disableFriendlyErrors = true;

function preload() {
  img = loadImage("structural.jpg");
}

function setup() {
  m = min(windowWidth, windowHeight);
  createCanvas(m, m);
  rectMode(CENTER);
  angleMode(DEGREES);
  scale(0.75);
  recRect(m / 2, m / 2, m * 0.9, m * 0.9);
  noLoop();
  blendMode(DIFFERENCE);
}

function draw() {
  background(255)
  push();
  rotate(fxrand() * 330 + 10);
  image(img, 0, 0);
  pop();
}

function scatter() {
  t = m / 4;

  patternColors([
    color(0, 0),
    color(fxrand() * 249 + 15),
    color(fxrand() * 249 + 15),
  ]);
  pattern(PTN.checked((t / fxrand()) * 12 + 10));
  rectPattern(
    fxrand() * m + 100 + -100,
    fxrand() * m + 100 + -100,
    (fxrand() * m) / 12 + 10,
    (fxrand() * m) / 12 + 10
  );

  push();
  patternAngle(90);
  rectPattern(
    fxrand() * m + 100 + -100,
    fxrand() * m + 100 + -100,
    (fxrand() * m) / 12 + 10,
    (fxrand() * m) / 12 + 10
  );
  pop();

  push();
  patternColors([
    color(0, 0),
    color(fxrand() * 249 + 15),
    color(fxrand() * 249 + 15),
  ]);
  patternAngle(12);
  pattern(PTN.checked((t / fxrand()) * 12 + 10));
  rectPattern(
    fxrand() * m + 100 + -100,
    fxrand() * m + 100 + -100,
    (fxrand() * m) / 12 + 10,
    (fxrand() * m) / 12 + 10
  );
  pop();
}

function recRect(x, y, w, h) {
  fill(fxrand() * 249 + 15);
  noStroke();
  rect(x, y, w, h);

  var recDupW = fxrand() * 1 > 0.5;
  var recDloc = fxrand() * 0.8 + 0.3;

  if (recDupW && w > m / 10) {
    recRect(x, y, w * recDloc, h);
    recRect(x + w * recDloc, y, w * (1 - recDloc), h);
  } else if (h > m / 10) {
    recRect(x, y, w, h * recDloc);
    recRect(x, y + h * recDloc, w, h * (1 - recDloc));
  
  push();
  blendMode(OVERLAY);
  t = m / 4;
  patternColors([
    color(0, 0),
    color(fxrand() * 249 + 15),
    color(fxrand() * 249 + 15),
  ]);
  pattern(PTN.checked((t / fxrand()) * 12 + 10));
  rectPattern(
    fxrand() * m + 100 + -100,
    fxrand() * m + 100 + -100,
    (fxrand() * m) / 10 + 6,
    (fxrand() * m) / 10 + 6
  );
  pop();
  }
}