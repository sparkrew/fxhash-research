/****
 *
 * playground
 * by pekko
 *
 * june 2022
 * fxhash.xyz
 *
 * twitter: @pekko_art
 *
 * license:
 * CC BY-NC 4.0 / https://creativecommons.org/licenses/by-nc/4.0/
 *
 * made with p5js /
 * https://p5js.org/
 *
 ****/

const WIDTH = fxrand() > 0.5 ? 3000 : fxrand() > 0.5 ? 6000 : 4000;
const HEIGHT = fxrand() > 0.5 ? 3000 : fxrand() > 0.5 ? 6000 : 4000;
const SQUARE = Math.min(WIDTH, HEIGHT);
let seed = Math.floor(fxrand() * 101010101010101);
let layers = [],
  gridWidth,
  gridHeight,
  cellWidth,
  gap,
  startX,
  startY,
  noise1X,
  noise1Y,
  noise2X,
  noise2Y,
  noiseOffsetX,
  noiseOffsetY,
  randomHue,
  randomSat,
  randomBri,
  colorAmount,
  paletteIndex1,
  paletteIndex2,
  palette1,
  palette2,
  backgroundColor,
  strokeColor,
  preview = false,
  density = 1;

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  layers = []
  gridWidth = WIDTH - SQUARE * 0.25;
  gridHeight = HEIGHT - SQUARE * 0.25;
  cellWidth = floor(random(1, 5)) * 100;
  gap = floor(random(1, 5)) * 10;
  startX = (WIDTH - floor(gridWidth / cellWidth) * cellWidth) / 2;
  startY = (HEIGHT - floor(gridHeight / cellWidth) * cellWidth) / 2;
  noise1X = floor(random(1, 10)) * 1000;
  noise1Y = random() > 0.8 ? floor(random(1, 10)) * 1000 : noise1X;
  noise2X = floor(random(1, 10)) * 1000;
  noise2Y = random() > 0.8 ? floor(random(1, 10)) * 1000 : noise2X;
  noiseOffsetX = floor(random(1, 10)) * 1000;
  noiseOffsetY = floor(random(1, 10)) * 1000;
  animationSpeed = floor(random(1, 10)) * 50;
  randomHue = floor(random(7)) * 60;
  randomSat = floor(random(5, 9)) * 10;
  randomBri = floor(random(7, 11)) * 10;
  colorAmount = floor(random(3, 11));
  paletteIndex1 = floor(random(5));
  paletteIndex2 = floor(random(5));
  palette1 = palette(paletteIndex1);
  palette2 = palette(paletteIndex2);
  backgroundColor = palette1.pop();
  palette2.pop();
  strokeColor = palette1[palette1.length - 1];
  window.$fxhashFeatures = {
    Dimensions: WIDTH + " x " + HEIGHT + " px",
    Colors: colorAmount,
    Hue: randomHue,
    Saturation: randomSat,
    Brightness: randomBri,
    Palette: paletteIndex1 + "" + paletteIndex2,
  };
  pixelDensity(density);
  createCanvas(WIDTH, HEIGHT);
  colorMode(HSB);
  randomSeed(seed);
  background(backgroundColor);
  drawBack(layers[1], 0, 0, WIDTH, HEIGHT, cellWidth);
}
function drawBack(canvas, startX, startY, gridWidth, gridHeight, cellWidth) {
  let mode = random() > 0.5
  for (let i = 0; i <= floor(gridWidth / cellWidth); i++) {
    for (let j = 0; j <= floor(gridHeight / cellWidth); j++) {
      let x = startX + i * cellWidth - cellWidth / 2;
      let y = startY + j * cellWidth - cellWidth / 2;
      let n1 =
        noise((x - noiseOffsetX) / noise1X, (y - noiseOffsetY) / noise1Y) * 10;
      n1 = n1 - parseInt(n1);
      let randomSize = random() > 0.5 ? 10 : random() > 0.5 ? 2 : 5;
      let size = floor(cellWidth / randomSize);
      let sx = x;
      let sy = y;
      let ex = x + cellWidth;
      let ey = y + cellWidth;
      noStroke();
      if (i > 2 && i < floor(gridWidth / cellWidth) - 2 && j > 2 && j < floor(gridHeight / cellWidth) - 2) {  
      for (let x1 = sx; x1 < ex; x1 += size) {
        for (let y1 = sy; y1 < ey; y1 += size) {
          let p = palette1;
            if (mode && x1 > sx + cellWidth / 10 && x1 < ex - cellWidth / 10) {
              let fillColor = p[floor(random(p.length))];
              fill(fillColor);
              rect(x1, y1, size, size);
            } else if (!mode && y1 > sy + cellWidth / 10 && y1 < ey - cellWidth / 10) {
              let fillColor = p[floor(random(p.length))];
              fill(fillColor);
              rect(x1, y1, size, size);
            } else {
              fill(backgroundColor);
              rect(x1, y1, size, size);
            }
        }
      }
    } else if (i > 1 && i < floor(gridWidth / cellWidth) - 1 && j > 1 && j < floor(gridHeight / cellWidth) - 1) {      
      for (let x1 = sx; x1 < ex; x1 += size) {
        for (let y1 = sy; y1 < ey; y1 += size) {
              fill(backgroundColor);
            rect(x1, y1, size, size);
        }
      }
    } else {
      for (let x1 = sx; x1 < ex; x1 += size) {
        for (let y1 = sy; y1 < ey; y1 += size) {
          let p = palette1;
          if (x1 + size < cellWidth - cellWidth / 4 || x1 > WIDTH - cellWidth + cellWidth / 4 || y1 + size < cellWidth - cellWidth/4 || y1 > HEIGHT - cellWidth + cellWidth/4) {
            fill(p[floor(random(p.length))]);
            rect(x1, y1, size, size);
          } else {
            fill(strokeColor);
            rect(x1, y1, size, size);
          }
        }
      }
    }
    }
  }
}

function palette(index) {
  let palette = [];
  if (index === 0) {
    let c = random() > 0.5 ? 100 : 0;
    for (let i = 0; i < colorAmount; i++)
      i % 2 == 0
        ? palette.push([randomHue, 0, c])
        : palette.push([randomHue, 0, abs(100 - c)]);
  } else if (index === 1) {
    let c = random() > 0.5 ? 100 : 0;
    for (let i = 0; i < colorAmount; i++)
      i == colorAmount - 1
        ? palette.push([randomHue, 5, c])
        : i % 2 == 0
        ? palette.push([
            randomHue,
            5,
            random() > 0.5 ? floor(random(abs(100 - c))) : 95,
          ])
        : palette.push([
            randomHue,
            floor(random(randomSat, 101)),
            floor(random(randomBri, 101)),
          ]);
  } else if (index === 2) {
    let c = random() > 0.5 ? 95 : 5;
    for (let i = 0; i < colorAmount; i++)
      i == colorAmount - 1
        ? palette.push([randomHue, 20, random() > 0.5 ? c : abs(100 - c)])
        : i % 2 == 0 && random() > 0.5
        ? palette.push([
            randomHue > 180 ? randomHue - 180 : randomHue - 180 + 360,
            floor(random(randomSat, 101)),
            floor(random(randomBri, 101)),
          ])
        : palette.push([
            randomHue,
            floor(random(randomSat, 101)),
            floor(random(randomBri, 101)),
          ]);
  } else if (index === 3) {
    let c = random() > 0.5 ? 95 : 5;
    for (let i = 0; i < colorAmount; i++)
      i == colorAmount - 1
        ? palette.push([randomHue, 5, random() > 0.5 ? c : abs(100 - c)])
        : i % 2 == 0 && random() > 0.5
        ? palette.push([
            randomHue,
            floor(random(randomSat, 101)),
            floor(random(randomBri, 101)),
          ])
        : random() > 0.5
        ? palette.push([
            randomHue > 120 ? randomHue - 120 : randomHue - 120 + 360,
            floor(random(randomSat, 91)),
            floor(random(randomBri, 81)),
          ])
        : palette.push([
            randomHue < 240 ? randomHue + 120 : randomHue + 120 - 360,
            floor(random(randomSat, 91)),
            floor(random(randomBri, 81)),
          ]);
  } else if (index === 4) {
    let c = random() > 0.5 ? 95 : 5;
    for (let i = 0; i < colorAmount; i++)
      i == colorAmount - 1
        ? palette.push([randomHue, 5, random() > 0.5 ? c : abs(100 - c)])
        : i % 2 == 0 && random() > 0.5
        ? palette.push([
            randomHue,
            floor(random(randomSat, 101)),
            floor(random(randomBri, 101)),
          ])
        : random() > 0.5
        ? palette.push([
            randomHue > 30 ? randomHue - 30 : randomHue - 30 + 360,
            floor(random(randomSat, 91)),
            floor(random(randomBri, 81)),
          ])
        : palette.push([
            randomHue < 330 ? randomHue + 30 : randomHue + 30 - 360,
            floor(random(randomSat, 91)),
            floor(random(randomBri, 81)),
          ]);
  }
  return palette;
}

function draw() {
  noLoop();
  if (!preview) {
    fxpreview();
    preview = true;
    p5_loading.remove();
  }
}

function keyPressed() {
  if (key === "s") save(fxhash + ".jpg");
  else if (key === "1") {
    density = 1
    pixelDensity(density)
    setup()
    loop()
    console.log(density)
  } else if (key === "4") {
    density = 4
    pixelDensity(density)
    setup()
    loop()
    console.log(density)
  } else if (key === "2") {
    density = 2
    pixelDensity(density)
    setup()
    loop()
    console.log(density)
  }
}
