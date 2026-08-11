const w = 800;
const h = 800;
const gridXPoints = 110;
const gridYPoints = 110;
const windowMargin = w / 40;
let shapeSize = w / 60;
// let colors = ['#002357', '#024D8C', '#FFD802', '#F78A8F', '#F3F7FA']
// let colors = ['#E88846', '#FDCF73', '#DED9D4', '#6B434C']
let colors = [
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
  "#e9d8a6",
  "#001219",
];

// let colors = ['#90A3A7', '#AECFD8', '#FFDE6B', '#9D9042', '#E9EDEA']

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
  createCanvas(windowWidth, windowHeight);
  background(colors.pop());

  const grid = createGrid(gridXPoints, gridYPoints);
  // const randomGrid = grid.filter(() => random() < 0.5)

  let prevY = grid[0][1];
  let randomCut = 1;
  const randomPointList = [];

  grid.forEach((points) => {
    const [x, y] = points;
    const shapeSize = (noise(x, y) * w) / 70;

    if (prevY != y) {
      randomCut = randomCut - 1 / gridYPoints;
      const randomPoint = random(grid);
      const ellipseSize = (noise(x, y) * w) / 9;
      if (random() < 0.25) {
        push();
        const shapeFill = random(colors);
        // drawingContext.shadowBlur = w / 200
        // drawingContext.shadowColor = shapeFill
        noStroke();
        fill(shapeFill);
        ellipse(
          map(randomPoint[0], 0, w, windowMargin, w - windowMargin),
          map(randomPoint[1], 0, h, windowMargin, h - windowMargin),
          ellipseSize
        );
        pop();
      }
      if (random() < 0.2) {
        strokeWeight(noise(x, y) + w / 160);
        stroke(random(colors));
        line(
          randomPoint[0],
          randomPoint[1] - ellipseSize / 2,
          randomPoint[0],
          0 + windowMargin
        );
      }

      randomPointList.push(randomPoint);
    }
    if (random() < randomCut) {
      renderShape(x - shapeSize / 2, y - shapeSize / 2, shapeSize);
    }
    prevY = y;
  });
  // push()
  // noFill()

  // strokeWeight(w / 1000)
  // randomPointList.forEach((point, idx) => {
  //   stroke(random(colors))
  //   if (random() < 0.3 && randomPointList[idx + 1]) {
  //     line(...point, ...randomPointList[idx + 1])
  //   }
  // })
  // pop()

  ///////////////

  function renderShape(x, y, shapeSize) {
    push();
    noStroke();
    fill(random(colors));
    rect(x, y, shapeSize);
    pop();
  }

  function createGrid(xCount, yCount) {
    const defaultCount = 10;

    if (!xCount) xCount = defaultCount;
    if (!yCount) yCount = xCount;

    const points = [];

    for (let y = 0; y < yCount; y++) {
      for (let x = 0; x < xCount; x++) {
        const u = xCount <= 1 ? 0.5 : x / (xCount - 1);
        const v = yCount <= 1 ? 0.5 : y / (yCount - 1);
        const px = lerp(windowMargin, width - windowMargin, u);
        const py = lerp(windowMargin, height - windowMargin, v);
        points.push([px, py]);
      }
    }
    return points;
  }
}

function draw() {}
