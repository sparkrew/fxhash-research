var colors = ["#a90014", "#62191f", "#41140a", "#111111", "#f4e3d5"];

var weights = [1, 0.5, 1, 1, 1];
var myScale = 10;
var nAgents = 1000;
let agent = [];
var direction = -1;
var par = 100;
let border = 100;

function setup() {
  minHW = min([windowWidth, windowHeight]);
  createCanvas(windowWidth, windowHeight);
  randomSeed(fxrand() * 1000);
  colorMode(HSB, 999, 999, 999, 100);
  strokeCap(PROJECT);
  background(100);
  pixelDensity(2);
  for (let i = 0; i < nAgents; i++) {
    agent.push(new Agent());
  }
}

function draw() {
  if (frameCount > 50) {
    noLoop();
    smooth();
  }
  for (let i = 0; i < agent.length; i++) {
    agent[i].update();
    let iP = agent[i].getPartner();
    strokeWeight(0.001);
    line(
      agent[i].getP().x,
      agent[i].getP().y,
      agent[iP].getP().x,
      agent[iP].getP().y
    );
    noFill();
    arc(
      agent[i].getP().x,
      agent[i].getP().y,
      agent[iP].getP().x,
      agent[iP].getP().y,
      0,
      2 * PI,
      OPEN
    );
  }
}

// painting agent
class Agent {
  constructor() {
    this.p = createVector(
      random(border, width - border),
      random(border, height - border)
    );
    this.pOld = createVector(this.p.x, this.p.y);
    this.step = 3;
    this.color = generateColor();
    this.partner = floor(random(1, nAgents));
    this.strokeWidth = random(2);
  }
  getPartner() {
    return this.partner;
  }
  getP() {
    return this.p;
  }

  update() {
    this.p.x += direction * vector_field(this.p.x, this.p.y).x * this.step;
    this.p.y += direction * vector_field(this.p.x, this.p.y).y * this.step;
    strokeWeight(this.strokeWidth);
    stroke(this.color);
    line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);
  }
}

function vector_field(x, y) {
  x = map(x, 0, width, -myScale, myScale);
  y = map(y, 0, height, -myScale, myScale);
  let k1 = 100;
  let k2 = 100;
  let u = sin(k1 * y) + cos(k2 * y);
  let v = sin(k2 * x) - cos(k1 * x);
  return createVector(u, v);
}

function generateColor() {
  let temp = myRandom(colors, weights);
  myColor = color(
    hue(temp) + randomGaussian() * 10,
    saturation(temp) + randomGaussian() * 10,
    brightness(temp) * 10,
    random(900)
  );
  return myColor;
}

function myRandom(colors, weights) {
  let sum = 0;
  for (let i = 0; i < colors.length; i++) {
    sum += weights[i];
  }
  let rr = random(0, sum);
  for (let j = 0; j < weights.length; j++) {
    if (weights[j] >= rr) {
      return colors[j];
    }
    rr -= weights[j];
  }
}

let lapse = 0;
function mousePressed() {
  if (millis() - lapse > 400) {
    save(
      "img_" +
        month() +
        "-" +
        day() +
        "_" +
        hour() +
        "-" +
        minute() +
        "-" +
        second() +
        ".jpg"
    );
    lapse = millis();
  }
}
