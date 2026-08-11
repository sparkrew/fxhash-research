palette = [
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
  ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
  ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
  ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"],
  ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
  ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"],
  ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2"],
  ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951"],
  ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5"],
  ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"],
  ["#d9ceb2", "#948c75", "#d5ded9", "#7a6a53", "#99b2b7"],
  ["#ffffff", "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
  ["#efffcd", "#dce9be", "#555152", "#2e2633", "#99173c"],
  ["#343838", "#005f6b", "#008c9e", "#00b4cc", "#00dffc"],
  ["#413e4a", "#73626e", "#b38184", "#f0b49e", "#f7e4be"],
  ["#ff4e50", "#fc913a", "#f9d423", "#ede574", "#e1f5c4"],
  ["#99b898", "#fecea8", "#ff847c", "#e84a5f", "#2a363b"],
  ["#655643", "#80bca3", "#f6f7bd", "#e6ac27", "#bf4d28"],
  ["#00a8c6", "#40c0cb", "#f9f2e7", "#aee239", "#8fbe00"],
];

function render(points) {
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape();
}

function noiseOfCircle(radius, segments, e) {
  const vals = [];
  for (let angle = 0; angle < TAU; angle += HALF_PI / segments) {
    const x = cos(angle) * radius;
    const y = sin(angle) * radius;
    vals.push(noise(x * e, y * e));
  }
  return vals;
}

function pointsOfCircle(radius, segments) {
  const offsets = noiseOfCircle(radius, segments, 0.0035);
  const points = [];
  let index = 0;
  for (let angle = 0; angle < TAU; angle += TAU / segments) {
    const x = cos(angle) * radius * offsets[index];
    const y = sin(angle) * radius * offsets[index];
    points.push(createVector(x, y));
    index++;
  }
  return points;
}

function stack(initial, minimum, len) {
  for (let radius = initial; radius > minimum; radius -= len) {
    fill(
      colors[floor(noise(radius * 0.009, frameCount * 0.07) * colors.length)]
    );
    render(pointsOfCircle(radius, 15));
  }
}

function setup() {
  createCanvas(1280, 1280);
  let hashGen = fxrand() * 1000;
  randomSeed(hashGen);
  noiseSeed(hashGen);
  colors = random(palette);
  background(random(colors));
}

function draw() {
  const gridSize = 6000;

  for (let x = 0; x <= width; x += gridSize) {
    for (let y = 0; y <= height; y += gridSize) {
      push();
      translate(x, y);
      strokeWeight(0.2);
      stack(gridSize, 6, 12);
      pop();
    }
    fxpreview();
    //noLoop();
  }

  function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height / 2) {
      let fs = fullscreen();
      fullscreen(!fs);
    }
  }

  function keyPressed() {
    if (keyCode == "S" || key == "s") {
      saveCanvas("tectonic", "png");
    }
  }
}
