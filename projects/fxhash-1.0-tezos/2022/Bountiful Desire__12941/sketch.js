let shiftFactor = 1;
let sF = 360 / shiftFactor;
let canv, col, col2, huey, dec, pos, n;
let alpha = 5;
let factor = 0;
let rez = 0.02;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  
    // vars
  randomSeed(fxrand() * 10e12 || 123);
  function rand(max, min = 0) {
    return Math.floor(random(max - min)) + min;
  }
  
  canv = createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  noLoop();
}

function draw() {
  background(0);
  palette = floor(random(676));
  //colorMode(HSB, 360, 128, 100, 255);
  drawShapes();
  replaceColors();
}

function drawShapes() {
  factor += 1000;
  for (i = 0; i < width; i += 1) {
    for (j = 0; j < height; j += 1) {
      n1 = round(noise(i * rez + factor, j * rez + factor));
      n2 = round(noise(i * rez + factor + 10000, j * rez + factor + 10000));
      n3 = round(noise(i * rez + factor + 20000, j * rez + factor + 20000));
      n4 = round(noise(i * rez + factor + 30000, j * rez + factor + 30000));
      n5 = round(noise(i * rez + factor + 40000, j * rez + factor + 40000));
      n6 = round(noise(i * rez + factor + 50000, j * rez + factor + 50000));
      fill(
        ((n1 + n4 + n5) * 255) / 6,
        ((n2 + n5 + n6) * 255) / 6,
        ((n3 + n4 + n6) * 255) / 6,
        alpha
      );
      rect(i, j, 3);
    }
  }
}

function replaceColors() {
  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      col = get(x, y);
      pos = (x + y * width) * 4;
      huey = hue(col);
      dec = huey / sF - floor(huey / sF);
      if (dec < 0.2) {
        col2 = 0;
      } else if (dec < 0.4) {
        col2 = 1;
      } else if (dec < 0.6) {
        col2 = 2;
      } else if (dec < 0.8) {
        col2 = 3;
      } else {
        col2 = 4;
      }
      pixels[pos + 0] = table.get(palette, col2 * 3);
      pixels[pos + 1] = table.get(palette, col2 * 3 + 1);
      pixels[pos + 2] = table.get(palette, col2 * 3 + 2);
    }
  }
  updatePixels();
  //filter(BLUR,10);
  filter(POSTERIZE, 2);
}
