var letters = [
  "?*",
  "?@",
  "?1",
  "?9",
  "q+",
  "?=",
  "g?",
  "?<",
  "?^",
  "j$",
  "?!",
  "l~",
  "?_",
  "?:",
  "o&",
  "p/",
  "qV",
  "rC",
  "#D",
  "t&",
  "u+",
  "v$",
  "w%",
  "/y",
  "y7",
  "z5",
  "#*",
  "&F",
];

let g;
let seed = fxrand() * 100000;
let points = [];
let pointsNumber = 1000;
let noiseScale = 0.05;

function setup() {
  createCanvas(1500, 1500);
  t = createGraphics(1500, 1500);
  randomSeed(seed);
  noiseSeed(seed);
  r = random(100, 200);
  g = random(100, 225);
  b = random(125, 200);
  a = random(225, 255);

  angleMode(DEGREES);

  t.textSize(1600);
  t.rotate(random(1));
  t.text(random(letters), width / 2.4, height / 1.5);
  t.textSize(1490);
  t.rotate(random(-1));
  t.text(random(letters), width / 2.1, height / 1.7);
  t.textSize(1450);
  t.rotate(random(2));
  t.text(random(letters), width / 2.3, height / 1.6);
  background("black");

  noStroke();
  fill(r, g, b, a);
  for (let i = 0; i < pointsNumber; i++) {
    points[i] = resetPoint();
  }
}

function draw() {
  for (let i = 0; i < pointsNumber; i++) {
    circle(points[i].x, points[i].y, 0.1);

    points[i].x +=
      2 *
      (noise(points[i].x * noiseScale, points[i].y * noiseScale, 0) * 2 - 1);
    points[i].y +=
      2 *
      (noise(points[i].x * noiseScale, points[i].y * noiseScale, 9) * 2 - 1);

    if (random() < 0.01) {
      points[i] = resetPoint();
    }
    if (frameCount == 5000) fxpreview();
  }
}

function resetPoint() {
  let x, y;
  do {
    x = floor(random(1500));
    y = floor(random(1500));
  } while (t.get(x, y)[3] == 0);
  return {
    x: x,
    y: y,
  };
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    saveCanvas("ROOTS", "png");
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}