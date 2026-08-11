const w = 600;
const h = 600;
const gridFraction = w / 75;
const gridXPoints = w / gridFraction;
const gridYPoints = h / gridFraction;
const grid = createGrid(gridXPoints, gridYPoints);
const windowMargin = -w / 30;
const sizeRange = { min: w / 500, max: w / 35 };
const backgroundColor = 250;
const randomCutoff = 0.2;
const rotationRange = { min: 0, max: 0.5 };
// let colors = ['#cff27e', '#f2dd6e', '#e5b25d', '#b87d4b', '#523a34']
// let colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff']
let colors = [
  "#000814",
  "#001d3d",
  "#003566",
  "#ffc300",
  "#ffd60a",
  "#F5DF99",
  "#5FD068",
  "#4B8673",
];
let colors2 = ["#F5DF99", "#5FD068", "#4B8673"];

function createGrid(xCount, yCount) {
  const defaultCount = 10;

  if (!xCount) xCount = defaultCount;
  if (!yCount) yCount = xCount;

  const points = [];

  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      const u = xCount <= 1 ? 0.5 : x / (xCount - 1);
      const v = yCount <= 1 ? 0.5 : y / (yCount - 1);
      points.push([u, v]);
    }
  }
  return points;
}

function setup() {
  randomSeed(fxrand() * 1000);
  createCanvas(windowWidth, windowHeight);
  background(random(colors));

  const randomGrid = grid.filter(() => random() < randomCutoff);
  const shapeList = randomGrid.map((point) => {
    return createShape(point);
  });

  shapeList.forEach((shape) => {
    renderShape(shape);
    renderShape2(shape);
  });

  function createShape(point) {
    const [u, v] = point;
    const x = lerp(windowMargin, w - windowMargin, u);
    const y = lerp(windowMargin, h - windowMargin, v);
    const rotation = lerp(rotationRange.min, rotationRange.max, noise(u, v));
    const size = lerp(sizeRange.min, sizeRange.max, noise(u, v, random(w)));
    const fillColor = random(colors);

    return {
      position: [x, y],
      size,
      fillColor,
      rotation,
    };
  }

  function renderShape({ position, fillColor, size, rotation }) {
    const [x, y] = position;
    const shapeOff = size * random(10);
    push();
    // strokeWeight(random(w / 300))
    stroke(random(colors));
    fill(fillColor);
    translate(x, y);
    rotate(rotation * random([-1, 1]));
    beginShape();
    vertex(random(shapeOff), random(shapeOff));
    vertex(size + random(shapeOff), random(shapeOff));
    vertex(size + random(shapeOff), size + random(shapeOff));
    vertex(random(shapeOff), size + random(shapeOff));
    endShape(CLOSE);

    pop();
  }

  function renderShape2({ position, size, rotation }) {
    if (random() < 0.3) {
      const [x, y] = position;
      size = size * random(10, 20);
      const shapeOff = size;

      push();
      drawingContext.shadowBlur = w / 30;
      drawingContext.shadowColor = color(random(255), random(255), random(255));
      strokeWeight(random(w / 60));
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255));
      translate(x, y);
      rotate(rotation * random([-1, 1]));
      beginShape();
      vertex(random(shapeOff), random(shapeOff));
      vertex(size + random(shapeOff), random(shapeOff));
      vertex(size + random(shapeOff), size + random(shapeOff));
      vertex(random(shapeOff), size + random(shapeOff));
      endShape(CLOSE);
      pop();
    }
  }
}
