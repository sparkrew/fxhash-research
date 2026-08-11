let WIDTH;
let HEIGHT;

let s = 10;
let ss = s * 6;
let g = 100;

let pal = [
  "#ECAA9C",
  "#B1D1C6",
  "#2E5B8B",
  "#F2CA60",
  "#d4c7a3",
  "#DE7830",
  "#513C2C",
  "#1F3858",
  "#C9292E",
  "#bfb8a3",
];

function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
  function rand(max, min = 0) {
    return Math.floor(random(max - min)) + min;
  }
      WIDTH = windowWidth;
  HEIGHT = windowHeight;
  createCanvas(WIDTH, HEIGHT);
  noLoop();
  smooth();
  colorMode(HSB, 360, 100, 100, 100);
  strokeCap(SQUARE);
}

function getDir() {
  var dir = random();

  if (dir < 0.25) {
    return 0;
  } else if (dir < 0.5) {
    return PI / 4;
  } else if (dir < 0.75) {
    return PI / 2;
  } else {
    return (PI * 3) / 4;
  }
  randomSeed(seed);
}

function draw() {
  rectMode(CORNER);
  shuffle(pal, false);

  background(220);
  drawGrids();

  var nx, ny;

  var len = s * 4;

  var gridX = (WIDTH - len * 4) / len + 1;
  var gridY = (HEIGHT - len * 4) / len + 1;

  push();

  translate(ss + s, ss + s);

  var cx,
    cy,
    index = 0;
  var pArr = [];
  var pp;

  for (let j = 0; j < gridY; j++) {
    for (let i = 0; i < gridX; i++) {
      cx = i * len;
      cy = j * len;

      var xr = random(-s, s);
      var yr = random(-s / 2, s / 2);
      if (i == 0 || i == floor(gridX)) {
        xr = 0;
      }
      if (j == 0 || j == floor(gridY)) {
        yr = 0;
      }
      pp = [cx + xr, cy + yr];
      pArr[index] = pp;

      index++;
    }
  }

  index = 0;
  var p1, p2, p3, p4;
  var e = ceil(gridX) * ceil(gridY) - 1;
  for (let j = 0; j < gridY; j++) {
    for (let i = 0; i < gridX; i++) {
      var bo = index < e - gridX;
      if (!bo) {
        index++;
        continue;
      }

      p1 = pArr[index];
      p2 = pArr[index + 1];
      p3 = pArr[index + ceil(gridX) + 1];
      p4 = pArr[index + ceil(gridX)];

      if (abs(p1[1] - p2[1]) < s / 1.5) {
        push();
        var cc = color(getColor());
        cc.setAlpha(80);
        fill(cc);
        noStroke();
        quad(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]);
        pop();

        drawUniqueLine(p1[0], p1[1], p2[0], p2[1]);
        drawUniqueLine(p2[0], p2[1], p3[0], p3[1]);
        drawUniqueLine(p3[0], p3[1], p4[0], p4[1]);
        drawUniqueLine(p4[0], p4[1], p1[0], p1[1]);
      }

      index++;
    }
  }

  pop();
  drawFrame();
}

// ------------------------------------- //
// ------------------------------------- //
// ------------------------------------- //

function drawUniqueLine(x1, y1, x2, y2) {
  var cx = (x1 + x2) / 2;
  var cy = (y1 + y2) / 2;
  var px1 = random(cx - s, cx);
  var py1 = random(cy - s, cy);
  var px2 = random(cx, cx + s);
  var py2 = random(cy, cy + s);

  bezier(x1, y1, px1, py1, px2, py2, x2, y2);
}

// ------------------------------------- //
// ------------------------------------- //
// ------------------------------------- //

function drawGrids() {
  stroke(0, 0, 10, 100);
  strokeWeight(1.5);
  noFill();
  var tx = int(WIDTH / s);
  var ty = int(HEIGHT / s);
  for (let i = 0; i < ty; i++) {
    cy = i * s;
    for (let j = 0; j < tx; j++) {
      cx = j * s;
      point(cx, cy);
    }
  }
}

function drawFrame() {
  var s = 10;
  rectMode(CENTER);
  noStroke();
  fill(220);

  rect(s * 2 - 1, HEIGHT / 2, s * 4, HEIGHT);
  rect(WIDTH - s * 2 + 1, HEIGHT / 2, s * 4, HEIGHT);

  rect(WIDTH / 2, s * 2 - 1, WIDTH, s * 4);
  rect(WIDTH / 2, HEIGHT - s * 2 + 1, WIDTH, s * 4);
}

function getColor() {
  var l = pal.length;
  var cc = random();
  shuffle(pal, false);

  if (cc < 1 / l) {
    return pal[0];
  } else if (cc < 2 / l + 0.05) {
    return pal[1];
  } else if (cc < 3 / l - 0.03) {
    return pal[2];
  } else if (cc < 4 / l + 0.05) {
    return pal[3];
  } else if (cc < 5 / l - 0.02) {
    return pal[4];
  } else if (cc < 6 / l + 0.06) {
    return pal[5];
  } else if (cc < 7 / l + 0.02) {
    return pal[6];
  } else if (cc < 8 / l - 0.01) {
    return pal[7];
  } else if (cc < 9 / l + 0.02) {
    return pal[8];
  } else {
    return pal[9];
  }
}
