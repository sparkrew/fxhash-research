const canvasSize = 1000;
const center = .5 * canvasSize;
const particleCount = 1000;
const hueBase = fxrand() * 150;
const hueRange = fxrand() * 1000;
const fadeInOut = (t, m) => {
  let hm = 0.5 * m;
  return abs((t + hm) % m - hm) / hm;
};
const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);

let buffer;
let particles;
let dOffset;
let dOffset2;

class AttributeArray {
  constructor(count, attrs) {
    this.count = count;
    this.attrs = attrs;
    this.spread = attrs.length;
    this.values = new Float32Array(count * this.spread);
  }

  get length() {
    return this.values.length;
  }

  set(a, i, normalize = false) {
    normalize && (i *= this.spread);

    this.values.set(a, i);
  }

  get(i, normalize = false) {
    normalize && (i *= this.spread);

    return this.values.slice(i, i + this.spread);
  }

  forEach(cb) {
    let i = 0;
    let j = 0;

    for (; i < this.length; i += this.spread, j++) {
      cb(this.get(i), j, this);
    }
  }

  map(cb) {
    let i = 0;
    let j = 0;

    for (; i < this.length; i += this.spread, j++) {
      this.set(cb(this.get(i), j, this), i);
    }
  }

  reverseMap(cb) {
    let i = this.length - this.spread;
    let j = this.count - 1;

    for (; i >= 0; i -= this.spread, j--) {
      this.set(cb(this.get(i), j, this), i);
    }
  }
}


function resetParticle(_, i) {
  let x, y, vx, vy, d, s, w, h, l, ttl;

  x = center + fxrand() * 500;
  y = center + fxrand() * 500;
  d = angle(x, y, center, center) - QUARTER_PI;
  h = (hueBase + (fxrand() * hueRange)) % 180;
  s = fxrand() * 10;
  w = fxrand() * 4;
  vx = fxrand() * cos(d) * s;
  vy = fxrand() * sin(d) * s;
  l = 0;
  ttl = fxrand() * 600;

  return [x, y, vx, vy, d, s, w, h, l, ttl];
}

function createParticles() {
  noiseSeed(fxrand() * 2048);
  particles = new AttributeArray(particleCount, ['x', 'y', 'vx', 'vy', 'd', 's', 'w', 'h', 'l', 'ttl']);
  particles.map(resetParticle);
  particles.map(([x, y, vx, vy, d, s, w, h, l, ttl]) => {
    l = fxrand() * 1000;

    return [x, y, vx, vy, d, s, w, h, l, ttl];
  });
}

function drawParticles() {
  let dl, a, t, tx, ty;

  buffer.noFill();

  particles.map(([x, y, vx, vy, d, s, w, h, l, ttl], i) => {
    if (l >= ttl) return resetParticle();

    dl = fadeInOut(l, ttl);
    a = 0.65 * dl;
    d = angle(x, y, center, center) +
      (dOffset - noise(x * 0.005, y * 0.005, frameCount * 0.005) * dOffset2) * .25 -
      QUARTER_PI;
    s *= 1.0015;
    vx = lerp(vx, cos(d) * s, 0.035);
    vy = lerp(vy, sin(d) * s, 0.035);
    tx = x + vx;
    ty = y + vy;
    l++;

    buffer.strokeWeight(fxrand() * 5 * w * (dist(x, y, center, center) / canvasSize) + 1);
    buffer.stroke(fxrand() * h, fxrand() * 1000, fxrand() * 1000, a);
    buffer.line(x, y, tx, ty);

    return [tx, ty, vx, vy, d, s, w, h, l, ttl];
  });
}

function drawImage() {
  push();
  drawingContext.globalCompositeOperation = 'lighter';
  image(buffer, 0, 0);
  pop();
}

function drawGlow() {
  push();
  drawingContext.filter = 'blur(8px) brightness(200%)';
  image(buffer, 0, 0);
  pop();
}

function setup() {
  const c = createCanvas(canvasSize, canvasSize);

  c.addClass('canvas');
  c.mouseClicked(() => noiseSeed(fxrand() * 2048));

  buffer = createGraphics(canvasSize, canvasSize);
  buffer.colorMode(HSB);

  dOffset = 2 * TAU;
  dOffset2 = 2 * dOffset;

  noiseDetail(fxrand() * 10, fxrand() * 0.5);
  createParticles();
}

function draw() {
  try {
    buffer.background(0, 0, 0, 0.65);
    drawParticles();
    drawGlow();
    drawImage();
  } catch (e) {
    console.error(e);
    noLoop();
  }
}