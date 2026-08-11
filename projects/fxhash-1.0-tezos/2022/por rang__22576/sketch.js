let x, y, preX, preY;
function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	background(0, 0, 0);
	 for (let idraw = 0; idraw < 500; idraw++) {
    if (int(random(0, 3)) > 1) {
      dir = true;
    } else {
      dir = false;
    }
    let h;
    if (int(random(0, 100)) > 10) {
      h = random(140, 250);
    } else {
      h = random(0, 20);
    }
    drawRect(random(width), random(50, 350), h, dir);
  }

  x = width / 2;
  y = height / 2;
  preX = x;
  preY = y;
}

function drawRect(strtX, strtY, h, dir) {
  let rectWidth = random(2, 12);
  let rectHeight = random(50, 120);
  let s;
  if (dir == true) {
    s = 0;
  } else {
    s = 100;
  }
  noStroke();
  for (let iY = 0; iY < rectHeight; iY++) {
    if (dir == true) {
      s += 300 / rectHeight;
    } else {
      s -= 99 / rectHeight;
    }
    for (let iX = 0; iX < rectWidth; iX++) {
      fill(h, s, 100, 100);
      if (int(random(0, 5)) > 3) {
        ellipse(strtX + iX, strtY + iY, 2);
      }
    }
  }
}

function draw() {
	stroke(0, 0, 0);
  strokeWeight(5);
  line(preX, preY, x, y);
  preX = x;
  preY = y;
  if (int(random(0, 3)) > 1) {
    if (int(random(0, 3)) > 1) {
      x += 20;
    } else {
      x -= 20;
    }
  } else {
    if (int(random(0, 3)) > 1) {
      y += 20;
    } else {
      y -= 20;
    }
  }
  if (x < 0 || x > width) {
    x = width / 2;
  }
  if (y < 0 || y > height) {
    y = height / 2;
  }
}