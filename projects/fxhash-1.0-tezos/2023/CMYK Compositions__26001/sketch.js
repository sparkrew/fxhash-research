



var bg = "blue";
var bg2 = '#fbf2e3';

var dotSize = 1;
var circleImageCanvas;
var minCR = 0.3;
var spaceRatio = 1.5;
var circleSizeRatio = 4;
var offset = 0.96;
var rectSW = 54;
var noiseOffset = 60;
var circleColorAlpha = 220
var backgroundColor;
var fillColor;
var arrayColor;
var transparentColors;
var strokeSize = 2;
var offset2 = 1;
var space;
var minSX;
var maxSX;
var minSY;
var maxSY;
var pointsArray = [];
var centerArray = [];
var linePercentage = 0.01;
var cols = 6;
var rows = 6;
var tiles = [];
var board = [];
var shuffleArray = [];
var borderSize = 4;
var palletes = [
  ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"]],
  ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"]],
  ["#f3f0e9", "#000000", ["#f3f0e9", "#f3f0e9", "#f3f0e9", "#eadccf", "#349563", "#5280b9", "#eac240", "#b94847", "#2a2a2a", "#349563"]],
  ["#dad2c5", "#000000", ["#dad2c5", "#dad2c5", "#dad2c5", "#fe3195", "#f8d835", "#247fb7", "#331d84", "#ff2f12"]],
  ["#f2ece7", "#000000", ["#f2ece7", "#f2ece7", "#f2ece7", "#317675", "#3b9e98", "#8bd5d8", "#d17b8d", "#df5878", "#ac6935", "#71709d", "#f26179"]],
  ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d4e0e9", "#77b7d3", "#0096b6", "#0285a3", "#01444a", "#002f1d", "#004428", "#025d3a", "#018d4b", "#67ad57", "#dae0cf"]],
  ["#fcede6", "#000000", ["#fcede6", "#fcede6", "#fcede6", "#244db6", "#1c1d3c", "#ff5420", "#f7abcb", "#1c1d3c"]],
  ["#ffffff", "#000000", ["#ffffff", "#ffffff", "#ffffff", "#3f85f4", "#33a953", "#fcbc05", "#fcbc05", "#ea4235", "#ea4235"]],
  ["#fcfcfa", "#000000", ["#fcfcfa", "#fcfcfa", "#fcfcfa", "#c7db00", "#337aae", "#19405f", "maroon", 'cobalt']]
];
var numberPalletes = [
  [5, 5, 3, 4, 12],
  [23, 23, 4, 6, 12],
  [5, 5, 4, 7, 18],
  [5, 5, 1.5, 7, 18],
  [5, 5, 3, 12, 18],
  [5, 5, 5, 6, 18],
];
var cols = 6;
var rows = 6
var canvasDensity = 2;

function shape_rect(x, y, s) {
  push();
  strokeWeight(strokeSize);
  stroke(fillColor);
  noFill();
  var s = s / 2;
  minSX = s / 1.6;
  maxSX = s * 0.8;
  minSY = minSX;
  maxSY = maxSX;
  translate(x, y);
  var pt1x = -1 * rnd(minSX, maxSX);
  var pt1y = -1 * rnd(minSY, maxSY);
  var pt2x = rnd(minSX, maxSX);
  var pt2y = -1 * rnd(minSY, maxSY);
  var pt3x = rnd(minSX, maxSX);
  var pt3y = rnd(minSY, maxSY);
  var pt4x = -1 * rnd(minSX, maxSX);
  var pt4y = rnd(minSY, maxSY);
  append(pointsArray, [
    [pt1x, pt1y],
    [pt2x, pt2y],
    [pt3x, pt3y],
    [pt4x, pt4y]
  ]);
  var rectCount = rnd(5, 9);
  for (var i = 0; i < rectCount; i++) {
    strokeWeight((strokeSize - i * (strokeSize / rectCount)));
    fill(choose(arrayColor));
    beginShape();
    vertex(pt1x * (1 - i * (1 / rectCount)), pt1y * (1 - i * (1 / rectCount)));
    vertex(pt2x * (1 - i * (1 / rectCount)), pt2y * (1 - i * (1 / rectCount)));
    vertex(pt3x * (1 - i * (1 / rectCount)), pt3y * (1 - i * (1 / rectCount)));
    vertex(pt4x * (1 - i * (1 / rectCount)), pt4y * (1 - i * (1 / rectCount)));
    endShape(CLOSE);
  }

  pop();
}

function shape_circle(x, y, s) {
  push();
  strokeWeight(strokeSize);
  stroke(fillColor);
  noFill();
  var s = s / 2;
  minR = s * 1.2;
  maxR = s * 1.8;
  translate(x, y);
  var radius = rnd(minR, maxR);
  var rectCount = rnd(5, 9);
  for (var i = 0; i < rectCount; i++) {
    translate(rnd(-height / 600, height / 600), rnd(-height / 600, height / 600));
    strokeWeight((strokeSize - i * (strokeSize / rectCount)));
    fill(choose(arrayColor));
    circle(0, 0, radius * (1 - i * (1 / rectCount)));
  }
  pop();
}


function setup() {
  let urlParams = getURLParams();
  canvasDensity = 2;
  if(urlParams.density){
    canvasDensity = int(urlParams.density);
  }
  canvas = createCanvas(620, 620);
  pixelDensity(canvasDensity);
  noiseSeed(round(rnd(10, 10000)));
  randomSeed(round(rnd(10, 10000)));
  canvas.addClass("saveCSS");
  angleMode(DEGREES);
  frameRate(12);
  var colors = choose(palletes);
  var numbers = choose(numberPalletes);
  backgroundColor = colors[0];
  fillColor = colors[1];
  arrayColor = colors[2];

  cols = numbers[0];
  rows = numbers[1];
  space = height / numbers[2];
  strokeSize = numbers[3];
  borderSize = numbers[4];
  var randomX = rnd(width * (1 - offset2), width * offset2);
  var randomY = rnd(height * (1 - offset2), height * offset2);
  background("#ffffff");
  for (var i = 0; i < width * offset2 + 20; i += space) {
    if (i > -1) {
      for (var j = 0; j < height * offset2 + 20; j += space) {
        if (j > -1) {
          var dist = pow(pow(i - randomX, 2) + pow(j - randomY, 2), 0.5);
          var dMax = (width * offset2 - width * (1 - offset2)) * 1.4142;
          if (rnd(0, 1.5) < 1) {
            dist = map(dist, 0, dMax, 1.5, 1.8)
            shape_rect(i, j, space * dist);
          } else {
            dist = map(dist, 0, dMax, 1.6, 2.2)
            shape_circle(i, j, space * dist);
          }

        }

      }
    }

  }

  let imageCanvas = createImage(width * 2, height * 2);
  imageCanvas.copy(canvas, 0, 0, width, height, 0, 0, width * 1, height * 1);
  let imgSize = choose([1200, 1600, 1800, 1600, 1800, 1600, 1600, 2000]);
  image(imageCanvas, 0, 0, imgSize, imgSize);

  circleImageCanvas = createImage(width * 2, height * 2);
  circleImageCanvas.copy(canvas, 0, 0, width, height, 0, 0, width * 1, height * 1);
  background("#ffffff");
  push();
  noFill();
  stroke(bg2);
  strokeWeight(rectSW);
  rect(0, 0, width, height);
  pop();

  dotMatrix2(dotSize, [105, 75, 90, 45], color('black'), 1);



  fxpreview();
}

function draw() {

  noLoop();
}


function rgbToCmyk(rgbArray) {
  let r = map(rgbArray[0], 0, 255, 0.1, 1);
  let g = map(rgbArray[1], 0, 255, 0.1, 1);
  let b = map(rgbArray[2], 0, 255, 0.1, 1);
  let c = 1 - r;
  let m = 1 - g;
  let y = 1 - b;
  let k = min(c, m, y);
  c = (c - k) / (1 - k);
  m = (m - k) / (1 - k);
  y = (y - k) / (1 - k);
  cmykArray = [c * 100, m * 100, y * 100, k * 100];
  return cmykArray;
}

function dotMatrix2(dotSize, angles, matrixColor, sizeRatio) {
  push();


  let index1 = 0;
  for (var j = -height * 0.2; j < height * 1.2; j += dotSize) {
    let index2 = 0;
    for (var i = -width * 0.2; i < width * 1.2; i += dotSize) {
      index2++;
      push();
      if ((index2) % spaceRatio == 0 && (index1) % spaceRatio == 0) {
        rectMode(CENTER);
        let circleColor = color('cyan');
        circleColor.setAlpha(circleColorAlpha);
        fill(circleColor);
        strokeWeight(0);
        let xy = rotateMatrix(i, j, angles[0], width / 2, height / 2);
        let x = xy[0];
        let y = xy[1];
        let c = circleImageCanvas.get(x, y);
        c = rgbToCmyk(c);
        let nX = map(noise(x / noiseOffset), 0, 1, -1, 1) * dotSize;
        let nY = map(noise(y / noiseOffset), 0, 1, -1, 1) * dotSize;
        if (c != null) {
          let cR = c[0] / 100;
          cR = map(cR, 0, 1, minCR, 1);
          x = x + dotSize / 2 + nX;
          y = y + dotSize / 2 + nY;
          if (x > width * (1 - offset) && x < width * offset) {
            if (y > height * (1 - offset) && y < height * offset) {
              circle(x, y, cR * dotSize * circleSizeRatio);
            }
          }
        }
      }
      pop();
    }
    index1++;
  }
  pop();

  push();
  index1 = 0;
  for (var j = -height * 0.2; j < height * 1.2; j += dotSize) {
    index2 = 0;
    for (var i = -width * 0.2; i < width * 1.2; i += dotSize) {
      index2++;
      push();
      if ((index2) % spaceRatio == 0 && (index1) % spaceRatio == 0) {
        rectMode(CENTER);
        let circleColor = color('magenta');
        circleColor.setAlpha(circleColorAlpha);
        fill(circleColor);
        strokeWeight(0);
        let xy = rotateMatrix(i, j, angles[1], width / 2, height / 2);
        let x = xy[0];
        let y = xy[1];
        let c = circleImageCanvas.get(x, y);
        c = rgbToCmyk(c);
        let nX = map(noise(x / noiseOffset), 0, 1, -1, 1) * dotSize;
        let nY = map(noise(y / noiseOffset), 0, 1, -1, 1) * dotSize;
        if (c != null) {
          let cR = c[1] / 100;
          cR = map(cR, 0, 1, minCR, 1);
          x = x + dotSize / 2 + nX;
          y = y + dotSize / 2 + nY;
          if (x > width * (1 - offset) && x < width * offset) {
            if (y > height * (1 - offset) && y < height * offset) {
              circle(x, y, cR * dotSize * circleSizeRatio);
            }
          }
        }
      }
      pop();
    }
    index1++;
  }
  pop();

  push();
  index1 = 0;
  for (var j = -height * 0.2; j < height * 1.2; j += dotSize) {
    index2 = 0;
    for (var i = -width * 0.2; i < width * 1.2; i += dotSize) {
      index2++;
      push();
      if ((index2) % spaceRatio == 0 && (index1) % spaceRatio == 0) {
        rectMode(CENTER);
        let circleColor = color('yellow');
        circleColor.setAlpha(circleColorAlpha);
        fill(circleColor);
        strokeWeight(0);
        let xy = rotateMatrix(i, j, angles[2], width / 2, height / 2);
        let x = xy[0];
        let y = xy[1];
        let c = circleImageCanvas.get(x, y);
        c = rgbToCmyk(c);
        let nX = map(noise(x / noiseOffset), 0, 1, -1, 1) * dotSize;
        let nY = map(noise(y / noiseOffset), 0, 1, -1, 1) * dotSize;
        if (c != null) {
          let cR = c[2] / 100;
          cR = map(cR, 0, 1, minCR, 1);
          x = x + dotSize / 2 + nX;
          y = y + dotSize / 2 + nY;
          if (x > width * (1 - offset) && x < width * offset) {
            if (y > height * (1 - offset) && y < height * offset) {
              circle(x, y, cR * dotSize * circleSizeRatio);
            }
          }
        }
      }
      pop();
    }
    index1++;
  }
  pop();

  push();
  index1 = 0;
  for (var j = -height * 0.2; j < height * 1.2; j += dotSize) {
    index2 = 0;
    for (var i = -width * 0.2; i < width * 1.2; i += dotSize) {
      index2++;
      push();
      if ((index2) % spaceRatio == 0 && (index1) % spaceRatio == 0) {
        rectMode(CENTER);
        let circleColor = color('black');
        circleColor.setAlpha(circleColorAlpha);
        fill(circleColor);
        strokeWeight(0);
        let xy = rotateMatrix(i, j, angles[3], width / 2, height / 2);
        let x = xy[0];
        let y = xy[1];
        let c = circleImageCanvas.get(x, y);
        c = rgbToCmyk(c);
        let nX = map(noise(x / noiseOffset), 0, 1, -1, 1) * dotSize;
        let nY = map(noise(y / noiseOffset), 0, 1, -1, 1) * dotSize;
        if (c != null) {
          let cR = c[3] / 100;
          cR = map(cR, 0, 1, minCR, 1);
          x = x + dotSize / 2 + nX;
          y = y + dotSize / 2 + nY;
          if (x > width * (1 - offset) && x < width * offset) {
            if (y > height * (1 - offset) && y < height * offset) {
              circle(x, y, cR * dotSize * circleSizeRatio / 1.1);
            }
          }
        }
      }
      pop();
    }
    index1++;
  }
  pop();

}

function rotateMatrix(x, y, theta, xO, yO) {
  theta = theta * Math.PI / 180;

  x -= xO;
  y -= yO;

  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const rotatedX = x * cosTheta - y * sinTheta + xO;
  const rotatedY = x * sinTheta + y * cosTheta + yO;

  return [rotatedX, rotatedY];
}

function gradientBackground(color1, color2, color3, color4) {
  noFill();
  let rndDirection = choose([1, 2]);
  noFill();
  for (let i = 0; i < width; i++) {
    let inter = lerpColor(color(color1), color(color2), i / width);
    stroke(inter);
    if (rndDirection == 1) {
      line(i, 0, i, height);
    } else {
      line(0, i, width, i);

    }
  }
}

  function keyTyped() {
    if (key === 's') {
      saveCanvas(fxhash);
    } }

function rnd(min, max) {
  return map(fxrand(), 0, 1, min, max)
}

function choose(array) {
  return array[round(fxrand() * (array.length - 1))];
}
