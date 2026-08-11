new p5();
const seed = fxrand() * 9999999999;
randomSeed(seed);
noiseSeed(seed);
var c1 = ["#ffacfc", "#f148fb", "#7122fa", "#560a86"];
var c2 = ["#75d5fd", "#b76cfd", "#ff2281", "#011ffd"];
var c3 = ["#00feca", "#fdf200", "#ff85ea", "#7b61f8"];
var c4 = ["#ffd300", "#de38c8", "#652ec7", "#33135c"];
var c5 = ["#3b27ba", "#e847ae", "#13ca91", "#ff9472"];
var c6 = ["#08f7fe", "#09fbd3", "#fe53bb", "#f5d300"];
var c7 = ["#000000", "#09fbd3", "#fe53bb", "#ffffff"];
var c8 = ["#ffdef3", "#ff61be", "#3b55ce", "#35212a"];
var c9 = ["#ce96fb", "#ff8fcf", "#00c2ba", "#037a90"];
var c10 = ["#ffffff1a", "#ebf875", "#28cf75", "#fe6b35"];
var c11 = ["#8af7ef", "#fdcbfc", "#c6bdea", "#48adf1"];
var c12 = ["#000000", "#0000001a", "#ffffff1a", "#ffffff"];

var colorAS = [
  c1,
  c1,
  c1,
  c2,
  c2,
  c2,
  c3,
  c3,
  c3,
  c4,
  c4,
  c4,
  c5,
  c5,
  c5,
  c6,
  c6,
  c6,
  c7,
  c7,
  c7,
  c8,
  c8,
  c8,
  c9,
  c9,
  c9,
  c10,
  c10,
  c10,
  c11,
  c11,
  c11,
  c12,
];

let dash = 0,
  colP,
  colP2,
  colPB,
  thickness,
  tiles,
  colorShuffle,
  blkwht,
  strokeAlpha,
  strokeSize,
  strokeRand;

var w = 450; ///12 slots, eleven 3s one 4, eleven 4s,one 3
var wx = random([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]);
var hx = random([3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
const colorASP = int(random(colorAS.length));

function setup() {
  print("Created by @devgenart, 2022");

  let cartel = createCanvas(w * wx, w * hx);
  cartel.parent("fullscreen");

  for (let i = 0; i < c1.length; i++) {
    colP = color(colorAS[colorASP][int(random(c1.length))]);
    colP2 = color(colorAS[colorASP][int(random(c1.length))]);
  }

  blkwht = random([color(0), color(240)]);
  noLoop();
}
function draw() {
  background(colP);
  rectMode(CENTER);
  strokeCap(SQUARE);
  colP.setAlpha(200);

  //loop one - base

  let squareSize = width / random(10, 200);
  for (
    let x = -squareSize;
    x < width + squareSize;
    x += random([10, 30, 50, 80])
  ) {
    for (let i = 0; i < c1.length; i++) {
      colP = color(colorAS[colorASP][int(random(c1.length))]);
      colP2 = color(colorAS[colorASP][int(random(c1.length))]);
    }

    for (let y = 0; y < width + squareSize; y += squareSize * 0.125) {
      squareSize = random(width / 20, width / 40);
      dash = width * 0.025;
      drawingContext.setLineDash([random(dash), random(dash)]);

      strokeSize = random(2, 20);
      strokeWeight(strokeSize);
      thickness = 8;

      strokeRand = random([0.03375, 0.0675, 0.125, 0.25, 0.375, 0.5, 1, 2]);

      strokeSize = int(thickness * strokeRand);

      let x1 = map(sin(x), -1, 1, 0, width);
      let y1 = map(cos(y), -1, 1, 0, height);

      stroke(colP2);
      fill(colP);
      strokeWeight(strokeSize);

      strokeAlpha = random(90);
      colP.setAlpha(strokeAlpha);
      colP2.setAlpha(strokeAlpha);
      random([
        rect(
          x1 + random(-10, 10),
          y1 + random(-1, 1),
          squareSize,
          squareSize * random(20)
        ),
        rect(
          x1 + random(-1, 1),
          y1 + random(-1, 100),
          squareSize,
          squareSize * random(2)
        ),
      ]);
    }
  }

  //loop two

  push();
  for (
    let x = -squareSize;
    x < width + squareSize;
    x += random([10, 30, 50, 80])
  ) {
    colP = color(colorAS[colorASP][int(random(c1.length))]);
    colP2 = color(colorAS[colorASP][int(random(c1.length))]);

    for (let y = 0; y < width + squareSize; y += squareSize * 0.125) {
      squareSize = random(width / 20, width / 40);

      dash = width * 0.025;
      drawingContext.setLineDash([random(dash), random(dash)]);

      strokeSize = random(2, 20);
      strokeWeight(strokeSize);
      thickness = 8;

      strokeRand = random([0.03375, 0.0675, 0.125, 0.25, 0.375, 0.5, 1, 2]);

      strokeSize = int(thickness * strokeRand);

      let x1 = map(sin(x), -1, 1, 0, width);
      let y1 = map(cos(y), -1, 1, 0, height * 200);

      strokeWeight(strokeSize);
      stroke(colP2);
      fill(colP2);

      strokeAlpha = random(50, 90);
      colP.setAlpha(strokeAlpha);
      colP2.setAlpha(strokeAlpha);

      random([
        rect(
          x1 + random(-10, 10),
          y1 + random(-1, 1),
          squareSize,
          squareSize * random(20)
        ),
        rect(
          x1 + random(-1, 1),
          y1 + random(-1, 100),
          squareSize,
          squareSize * random(2)
        ),
      ]);
    }
  }
  pop();

  pixelate0(12);
  pixelate1(12);
  pixelate2(6);

  fxpreview();
}

function mousePressed() {
  save(document.title + "_" + seed + ".png");
}

function pixelate0(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let j = 0; j < halfImage; j += random([12, 20])) {
    grainAmount = random(-gA, gA);
    pixels[j] = pixels[j] + grainAmount;
    pixels[j + 1] = pixels[j + 1] + grainAmount;
    pixels[j + 2] = pixels[j + 2] + grainAmount;
    pixels[j + 3] = pixels[j + 3] + grainAmount;
  }
  updatePixels();
}
function pixelate1(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage * 10; i += 10) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + gA;
    pixels[i + 1] = pixels[i + 1] + gA;
    pixels[i + 2] = pixels[i + 2] + gA;
    pixels[i + 3] = pixels[i + 3] + gA * 0.5;
  }

  updatePixels();
}
function pixelate2(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i++) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }

  updatePixels();
}

function getColor(value) {
  if (value <= 2) {
    return "purle haze";
  }
  if (value <= 5) {
    return "mixed berries";
  }
  if (value <= 8) {
    return "80s tracksuit";
  }
  if (value <= 11) {
    return "purple bees";
  }
  if (value <= 14) {
    return "off kilter";
  }
  if (value <= 17) {
    return "80s swimsuit";
  }
  if (value <= 20) {
    return "neon nights";
  }
  if (value <= 23) {
    return "bluepink";
  }
  if (value <= 26) {
    return "faded on greens";
  }
  if (value <= 29) {
    return "lightweight rasta";
  }
  if (value <= 32) {
    return "pastelitos";
  }
  if (value <= 33) {
    return "monochromia";
  }
}

function getRatio(w, h) {
  if (w === h) {
    return "1:1";
  } else {
    return w + ":" + h;
  }
}

window.$fxhashFeatures = {
  palette: getColor(colorASP),
  "aspect ratio": getRatio(wx, hx),
};
