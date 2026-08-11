let noiseGra;
let palette = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 200, 20, 200);
  angleMode(DEGREES);
  noSmooth();

  noiseGra = createGraphics(width, height);
  noiseGra.noStroke();
  noiseGra.fill(0, 0, 0, (15 / 50) * 255);
  for (let i = 0; i < width * height * 0.05; i++) {
    let x = random(width);
    let y = random(height);
    let dia = (noise(x * 0.01, y * 0.01) * 1) / 2 + 1 / 2;
    noiseGra.ellipse(x, y, dia, dia);
  }
}

function draw() {
  while (palette.length < 5) {
    palette = shuffle(chromotome.get().colors);
  }

  drawGradientShape(width / 2, height / 2, width, true);

  let w = sqrt(width * width + height * height);

  push();
  translate(width / 2, height / 2);
  rotate(45);
  translate(-w / 2, -w / 2);
  let offset = width / 15;
  let x = -offset;
  let y = -offset;
  let d = w + offset * 2;
  let minD = d / 5;
  separateGrid(x, y, d, minD);
  pop();

  image(noiseGra, 0, 0);
  noLoop();
}

function separateGrid(x, y, d, minD) {
  let sep = int(random(1, 5));
  let w = d / sep;

  for (let j = 0; j < sep; j++) {
    for (let i = 0; i < sep; i++) {
      let nx = x + i * w;
      let ny = y + j * w;

      if (random() < 0.9 && w > minD) {
        separateGrid(nx, ny, w, minD);
      } else {
        if (random() > 500) {
          drawStaggeredLines(nx, ny, w);
        } else {
          push();
          translate(nx + w / 2, ny + w / 2);
          fill(0, 0, 100, 0);
          noStroke();
          rectMode(CENTER);
          rect(0, 0, w, w);
          drawingContext.clip();
          rotate(45);
          let nw = sqrt(sq(w) * 2);
          drawStaggeredLines(-nw / 2, -nw / 2, nw);
          pop();
        }
      }
    }
  }
}

function drawStaggeredLines(x, y, w) {
  let num = int(random(2, 1));
  let _offset = w / (num + 1) / 2 / 2;
  let d = (w - _offset * 2) / num;

  push();
  translate(x, y);
  let xArr = [];
  let yArr = [];
  for (let i = 0; i <= num; i++) {
    let n = _offset + i * d;
    let xObj = {
      x1: n,
      y1: _offset,
      x2: n,
      y2: w - _offset,
    };
    let yObj = {
      x1: _offset,
      y1: n,
      x2: w - _offset,
      y2: n,
    };
    xArr.push(xObj);
    yArr.push(yObj);
  }

  shuffle(xArr, true);
  shuffle(yArr, true);
  drawingContext.shadowColor = color(0, 0, 0, 33);
  drawingContext.shadowBlur = d / 5;

  // blendMode(BURN);

  for (let i = 0; i < xArr.length; i++) {
    let xObj = xArr[i];
    let yObj = yArr[i];
    let colors = shuffle(palette.concat(), true);
    strokeCap(PROJECT);
    strokeWeight(d / 2);
    stroke(palette[0]);
    let gradient = drawingContext.createLinearGradient(
      yObj.x1,
      yObj.y1,
      yObj.x2,
      yObj.y2
    );
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(random(), colors[3]);
    gradient.addColorStop(1, colors[1]);
    drawingContext.strokeStyle = gradient;

    strokeWeight(d / 2);
    strokeCap(PROJECT);

    line(yObj.x1, yObj.y1, yObj.x2, yObj.y2);
    gradient = drawingContext.createLinearGradient(
      xObj.x1,
      xObj.y1,
      xObj.x2,
      xObj.y2
    );
    gradient.addColorStop(0, colors[2]);
    gradient.addColorStop(random(), colors[0]);
    gradient.addColorStop(1, colors[3]);
    drawingContext.strokeStyle = gradient;

    line(xObj.x1, xObj.y1, xObj.x2, xObj.y2);
  }
  pop();
}

function drawGradientShape(x, y, d, bool = false) {
  rectMode(CENTER);
  noStroke();
  push();
  translate(x, y);
  if (bool) {
    fill(0, 0, 100, 50);
    rect(0, 0, d, d);
  }
  drawingContext.shadowColor = color(0, 0, 0, 33);
  drawingContext.shadowBlur = d / 5;
  let c = color(random(palette));
  // c.setAlpha(50);
  // translate(d/2,d/2);
  rotate((int(random(4)) * 360) / 4);
  translate(-d / 2, -d / 2);
  fill(c);
  if (bool) {
  } else {
    arc(0, 0, d * 2, d * 2, 0, 90);
  }
  drawingContext.shadowColor = color(0, 0, 100, 0);
  drawingContext.clip();
  translate(d / 2, d / 2);
  let colors = shuffle(palette.concat());

  blendMode(BURN);

  for (let i = 0; i < 4; i++) {
    rotate(90);
    let gradient = drawingContext.createRadialGradient(
      -d / 2,
      -d / 2,
      0,
      -d / 2,
      -d / 2,
      d * 5
    );
    gradient.addColorStop(0, colors[i % colors.length]);
    gradient.addColorStop(1 / 5, color(0, 0, 100, 0));
    noStroke();
    fill(0, 0, 100, 0);
    drawingContext.fillStyle = gradient;
    circle(-d / 2, -d / 2, d * 2);
  }
  blendMode(BLEND);
  pop();
}
