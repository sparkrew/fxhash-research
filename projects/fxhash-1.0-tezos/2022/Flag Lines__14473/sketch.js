const dots = [];
const dots2 = [];
const dots3 = [];
const dots4 = [];
const dots5 = [];
const dots6 = [];
let factor = [0.01];
const count = 8;
const size = 6000;

const radius = size;

function setup() {
  lineColor = 1 + fxrand() * (360 - 1);
  tonalseed = 1 + fxrand() * (9999 - 1);
  noiseSeed(tonalseed);
  randomSeed(tonalseed);
  createCanvas(size, size);

  noiseDetail(0.1);
  colorMode(HSB, 100);
  background('#cab893');
  factor1 = factor[floor(fxrand() * factor.length)];
  for (let i = 0; i < count; i++) {
    dots.push(new Dot(radius, [lineColor, lineColor], 80, 25));
    dots4.push(new Dot4(radius, [lineColor, lineColor], 80, 25));
    dots5.push(new Dot5(radius, [lineColor, lineColor], 60, 5));
    dots6.push(new Dot6(radius, [lineColor, lineColor], 60, 25));

    dots2.push(new Dot2(radius, [lineColor, lineColor], 80, 55));
    dots3.push(new Dot3(radius, [lineColor, lineColor], 50, 55));
  }
}

function draw() {
  if (frameCount > 1200) {
    noLoop();
  }
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    n = noise(dot.pos.x * factor1, dot.pos.y * factor1);
    dot.update(n);
    dot.draw();
  }
  for (let i = 0; i < dots2.length; i++) {
    const dot2 = dots2[i];
    n = noise(dot2.pos.x * factor1, dot2.pos.y * factor1);
    dot2.update(n);
    dot2.draw();
  }
  for (let i = 0; i < dots3.length; i++) {
    const dot3 = dots3[i];
    n = noise(dot3.pos.x * factor1, dot3.pos.y * factor1);
    dot3.update(n);
    dot3.draw();
  }
  for (let i = 0; i < dots4.length; i++) {
    const dot4 = dots4[i];
    n = noise(dot4.pos.x * factor1, dot4.pos.y * factor1);
    dot4.update(n);
    dot4.draw();
  }
  for (let i = 0; i < dots5.length; i++) {
    const dot5 = dots5[i];
    n = noise(dot5.pos.x * factor1, dot5.pos.y * factor1);
    dot5.update(n);
    dot5.draw();
  }
  for (let i = 0; i < dots6.length; i++) {
    const dot6 = dots6[i];
    n = noise((dot6.pos.x * factor1) / 2, (dot6.pos.y * factor1) / 2);
    dot6.update(n);
    dot6.draw();
  }
}

class Dot {
  constructor(radius, colorRange, brightness, alpha) {
    const r = fxrand();
    const x = width / 2 + sin(r) * radius;
    const y = height / 2 + cos(r) * radius;
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(255);
    this.deadCount = 10 + fxrand() * (100 - 10);
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * TWO_PI + this.deadCount * PI);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(width, height, this.pos.x, this.pos.y) > this.radius + 2) {
      this.deadCount++;
    }
  }

  draw() {
    if (
      dist(width / 2, height / 20, this.pos.x, this.pos.y) > this.radius ||
      dist(width / 2, height / 20, this.prev.x, this.prev.y) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x / 2, this.prev.y / 2, this.pos.x / 2, this.pos.y / 25);
  }
}

class Dot2 {
  constructor(radius, colorRange, brightness, alpha) {
    const r = fxrand();
    const x = width + sin(r) * radius;
    const y = height + cos(r) * radius;
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(300);
    this.deadCount = 10;
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * 0.08 + this.deadCount * 180);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(width, height, this.pos.x, this.pos.y) > this.radius * 20) {
      this.deadCount++;
    }
  }

  draw() {
    if (
      dist(width, height, this.pos.x, this.pos.y) > this.radius ||
      dist(width, height, this.prev.x, this.prev.y) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
  }
}
class Dot3 {
  constructor(radius, colorRange, brightness, alpha) {
    const r = random(TWO_PI);
    const x = width + sin(r) * radius;
    const y = height + cos(r) * radius;
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(300);
    this.deadCount = 10;
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * 0.08 + this.deadCount * PI);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(width, height, this.pos.x, this.pos.y) > this.radius * 20) {
      this.deadCount++;
    }
  }

  draw() {
    if (
      dist(width, height, this.pos.x, this.pos.y) > this.radius ||
      dist(width, height, this.prev.x, this.prev.y) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
  }
}
class Dot4 {
  constructor(radius, colorRange, brightness, alpha) {
    const r = random(110);
    const x = width / 4 + sin(r) * radius;
    const y = height / 4 + cos(r) * radius;
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(360);
    this.deadCount = 100;
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * TWO_PI + this.deadCount * PI);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(width, height / 2, this.pos.x, this.pos.y / 2) > this.radius + 2) {
      this.deadCount++;
    }
  }

  draw() {
    if (
      dist(width / 2, height / 2, this.pos.x, this.pos.y) > this.radius ||
      dist(width * 2, height / 2, this.prev.x * 20, this.prev.y * 20) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x, this.prev.y / 5, this.pos.x, this.pos.y / 7);
  }
}

class Dot5 {
  constructor(radius, colorRange, brightness, alpha) {
    const r = random(300);
    const x = 2000 / 2 + sin(r);
    const y = height / 2 + cos(r);
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(360);
    this.deadCount = 500;
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * TWO_PI + this.deadCount * PI);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(width, height, this.pos.x, this.pos.y) > this.radius + 2) {
      this.deadCount++;
    }
  }

  draw() {
    if (
      dist(width / 2, height / 2, this.pos.x * 2, this.pos.y) > this.radius ||
      dist(width / 2, height / 2, this.prev.x * 2, this.prev.y) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x / 2, this.prev.y / 1.2, this.pos.x / 2, this.pos.y / 2);
  }
}

class Dot6 {
  constructor(radius, colorRange, brightness, alpha) {
    const r = random(TWO_PI);
    const x = width + sin(r) * radius;
    const y = -(height / 2 + cos(r) * radius);
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.color = color(255);
    this.deadCount = random(10, 100);
    this.radius = radius;
    this.colorRange = colorRange;
    this.alpha = alpha;
    this.brightness = brightness;
  }

  update(noize) {
    this.v = p5.Vector.fromAngle(noize * TWO_PI + this.deadCount / PI);
    this.v.setMag(12);
    this.color = color(map(noize, 0, 1, ...this.colorRange), 100, this.brightness, this.alpha);
    this.prev = this.pos.copy();
    this.pos = this.pos.add(this.v);

    if (dist(-width, -height, -this.pos.x, -this.pos.y) > this.radius + 2) {
      this.deadCount++;
    }
  }

  draw() {
    translate(1000, 1500);
    if (
      dist(width / 2, height / 20, this.pos.x, this.pos.y) > this.radius ||
      dist(width / 2, height / 20, this.prev.x, this.prev.y) > this.radius
    ) {
      return;
    }

    strokeWeight(10);
    stroke(this.color);
    line(this.prev.x / 2, this.prev.y / 2, this.pos.x / 52, this.pos.y / 55);
  }
}
