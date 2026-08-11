function randfx(min, max){
  return Math.round($fx.rand() * (max-min) + min);
}

function fxdouble(min, max){
  return $fx.rand() * (max-min) + min;
}

let coinflipcol = randfx(0,3);
let coinflipcol1 = randfx(0,3);
let coindeth = randfx(0,4);
let coinp = randfx(0,4);

let colorMain, accentColor, accentSecond, colorMain2, accentForth;
colorMain = HSLToHEX(randfx(0, 360), randfx(30, 40), randfx(55, 70));
accentColor = tinycolor(colorMain).spin(-10).toString();
accentSecond = tinycolor(accentColor).spin(-10).toString();
colorMain2 = tinycolor(colorMain).complement().toHexString();
accentForth = tinycolor(colorMain2).spin(-10).toHexString();
accentFifth = tinycolor(accentForth).spin(-40).toHexString();

let pal2 = [colorMain, accentColor, accentSecond];
let pal1 = [colorMain2, accentForth, accentFifth];
let pallette = [colorMain, 0];
palette = [colorMain2, colorMain, 255];
let c2hsl = HEXToHSL(colorMain2);

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

function HEXToRGB(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgb(${r},${g},${b})`;
}

function addAlphaToHSL(hslColor, alpha) {
  let hslaColor = hslColor.replace('hsl', 'hsla').replace(')', `, ${alpha})`);
  return hslaColor;
}

function addAlphaToHex(hex, alpha) {
  alpha = Math.floor(alpha);
  if (alpha < 0) alpha = 0;
  if (alpha > 255) alpha = 255;

  let alphaHex = alpha.toString(16);
  alphaHex = alphaHex.length == 1 ? '0' + alphaHex : alphaHex;

  return hex + alphaHex;
}

function HEXToHSL(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsl(${h},${s}%,${l}%)`;
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

const noiseScale = 0.01;
let nscl = 1000;
let movers = [];
let colrf = palette[Math.floor($fx.rand()*palette.length)];
let enabled = true;
let t = 10000;
let t1 = 20000;
let mg = 0;


let ratio = 0.66;
let cells, cols, rows;
let offset, margin;
let cellW, cellH;
let depthMax = 2;
let bg;

function setup() {

  createCanvas(450, 720);
  randomSeed(randfx(0,1000));
  noiseSeed(randfx(0, 1000));
  pixelDensity(7);
  angleMode(DEGREES);



  bg = createGraphics(width, height);
  bg.colorMode(HSB, 360, 100, 100, 100);
  bg.fill(addAlphaToHex(colorMain,50));
  bg.noStroke();
  for (let i = 0; i < width * height * 20 / 100; i++) {
    let radius = sqrt(sq(width / 2) + sq(height / 2));
    let angle = randfx(0, 360);
    let r = 1 - (fxdouble(0, fxdouble(0, fxdouble(0, 1))));
    let x = width / 2 + r * radius * cos(angle);
    let y = height / 2 + r * radius * sin(angle);
    let w = randfx(0, 3);
    let h = randfx(0, 3);
    bg.ellipse(x, y, w, h);
  }
  setTimeout(disabled, t)
}
function disabled(){
  enabled = false;
}
function draw() {
  background(0);
  cells = 1;
  int(randfx(3, 10));
  cols = cells;
  rows = cells;
  offset = width / 10;
  margin = offset / 5;

  cellW = (width - offset * 2 - margin * (cols - 1)) / cols;
  cellH = (height - offset * 2 - margin * (rows - 1)) / rows;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let x = offset + i * (cellW + margin)+randfx(-100,100);
      let y = offset + j * (cellH + margin)+randfx(-300,300);
      let cx = x + cellW / 2;
      let cy = y + cellH / 2;
      push();
      translate(cx, cy);
      let l = cellW / 0.8;
      let depth = int(randfx(3, 6));
      //scale(2.5);
      tree(depth, l);
      pop();
    }
  }
  image(bg, 0, 0);

  noLoop();
}



function tree(depth, l) {
  let len = randfx(260, 460);
  if (depth > 0) {
    let n = int(randfx(3, 10));
    for (let angle = 0; angle < 360; angle += 360 / n) {
      push();
      rotate(angle);
      stroke(palette[Math.floor($fx.rand()*palette.length)]);
      noFill();
      let sw = map(l, 0, len, 0, depthMax);
      strokeWeight(sw);
      if (randfx(0, 100) > 50) {
        bezier(0, 0, l / 2, l / 2, l / 2, -l / 2, l, 0);
      } else {
        bezier(0, 0, l / 2, -l / 2, l / 2, l / 2, l, 0);
      }
      translate(l, 0);
      rotate(randfx(0, 360));
      tree(depth - 1, l * fxdouble(0.2, 0.7));
      pop();
    }
  }
}


function thirs() {
  if (enabled) {

    //translate(-140, height-140);
    rotate(-HALF_PI);
    mg = sin(frameCount * 0.5) * 0.1;
    for (let m of movers) {
      m.display();
      m.update();
    }
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
    this.angle = map(n, 0, 1, -200, 360);
    this.mag = 8 / 5;
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
