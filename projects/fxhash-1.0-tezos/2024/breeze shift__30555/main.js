
function randfx(min, max){
  return Math.round($fx.rand() * (max-min) + min);
}
function fxdouble(min, max){
  return $fx.rand() * (max-min) + min;
}

let colorMain, accentColor, accentSecond, colorMain2, accentForth,palette;
colorMain = HSLToHEX(randfx(0, 360), randfx(30, 70), randfx(30, 50));
accentColor = tinycolor(colorMain).spin(-10).toString();
accentSecond = tinycolor(accentColor).spin(-10).toString();
colorMain2 = tinycolor(colorMain).complement().toHexString();
accentForth = tinycolor(colorMain2).spin(-10).toHexString();
accentFifth = tinycolor(accentForth).spin(-40).toHexString();
palette = [colorMain2, 0];

function HSLToHEX(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

//
//

let nscl = 300;
let movers = [];
let colrf = palette[Math.floor($fx.rand()*palette.length)];

let mg = 0;

function setup() {
  createCanvas(450, 700);
  noiseSeed(randfx(0, 1000));
  randomSeed(randfx(0,1000));
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  blendMode(ADD);
  let y = height / 2;
  for (let x = 0; x < width; x += .3) {
    movers.push(new Mover(x, y + sin(x * mg) * 150));
  }
  background(0);
}

function draw() {
  background(0, 0, 10, 0.1);
  mg = sin(frameCount * 0.1) * 0.5;
  for (let m of movers) {
    m.display();
    m.update();
  }
}

class Mover {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.prev_pos = this.pos.copy();
    this.noiseScale = nscl;
    this.updateAngleAndVelocity();
    this.life = 20;
    this.color = palette[floor(random(palette.length))];
  }
  updateAngleAndVelocity() {
    let n = noise(this.pos.x / this.noiseScale, this.pos.y / this.noiseScale, frameCount / this.noiseScale);
    this.angle = map(n, 0, 1, -360, 360);
    this.mag = random(5, 8) / 5;
    this.vel = createVector(cos(this.angle) * this.mag, sin(this.angle) * this.mag);
  }
  update() {
    this.prev_pos = this.pos.copy();
    this.updateAngleAndVelocity();
    let acc = createVector(cos(this.angle), sin(this.angle));
    acc.mult(0.01);
    this.vel.add(acc);
    this.pos.add(this.vel);
    this.life -= 0.0001;
    this.life = constrain(this.life, 0, 3);
    this.color = palette[floor(noise(this.pos.x, this.pos.y) * palette.length)];
  }
  display() {
    let sw = random(0.05,0.2);
    stroke(this.color);
    strokeWeight(sw);
    line(this.pos.x, this.pos.y, this.prev_pos.x, this.prev_pos.y);
  }
}
