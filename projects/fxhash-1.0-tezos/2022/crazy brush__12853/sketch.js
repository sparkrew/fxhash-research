var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var canvasSize = Math.min(screenWidth, screenHeight);

var baseSize,
  childs = [];

var colorSet = [
  "#EF5350",
  "#AB47BC",
  "#5C6BC0",
  "#29B6F6",
  "#26C6DA",
  "#26A69A",
  "#9CCC65",
  "#FFEE58",
  "#FFA726",
  "#FF7043",
];

function deg2rad(deg) {
  return (deg * PI) / 180;
}

function loc(deg, x, y, r) {
  return [x + cos(deg2rad(deg)) * r, y - sin(deg2rad(deg)) * r];
}

function createBrush() {
  childs.push({
    lastX: random((canvasSize / 3) * 2) + canvasSize / 6,
    lastY: random((canvasSize / 3) * 2) + canvasSize / 6,
    lastR: random(90),
    color: random(colorSet),
    size: random([1, 1.5, 2]),
    lineCount: random([3, 4, 5]),
  });
}

function moveBrush(idx) {
  child = childs[idx];
  var size = child.size * baseSize;
  childs[idx].lastX = Math.min(
    canvasSize,
    Math.max(0, child.lastX + ((random(300) - 150) / 100) * size)
  );
  childs[idx].lastY = Math.min(
    canvasSize,
    Math.max(0, child.lastY + ((random(300) - 150) / 100) * size)
  );
  childs[idx].lastR = child.lastR + random(30) - 15;
}

function drawBrushs() {
  for (var i = 0; i < childs.length; i++) {
    child = childs[i];
    var weight = child.size * baseSize;
    stroke(child.color);
    strokeWeight(weight);

    for (var j = 0; j < child.lineCount; j++) {
      var x = child.lastX;
      var y = child.lastY;
      var addLoc = loc(child.lastR - 90, x, y, j * 1.25 * weight);
      x += addLoc[0];
      y += addLoc[1];
      line(x, y, ...loc(child.lastR, x, y, weight * 4));
    }
  }
}

function setup() {
  randomSeed(fxrand() * 10e12 || 123);
  createCanvas(canvasSize, canvasSize);

  background("#ECEFF1");

  baseSize = canvasSize / 200;
  var brushCount = random(20) + 10;
  for (var i = 0; i < brushCount; i++) {
    createBrush();
  }

  drawBrushs();

  frameRate(100);
}
var loopCount = 0;
var maxLoop = 1000;
var isStop = false;
function draw() {
  if (loopCount <= maxLoop) {
    for (var i = 0; i < childs.length; i++) {
      moveBrush(i);
      drawBrushs();
    }
    loopCount++;
  } else {
    if (!isStop) {
      fxpreview();
      isStop = true;
    }
  }
}
