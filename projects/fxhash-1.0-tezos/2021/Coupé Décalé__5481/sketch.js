let seed = fxrand() * 989134521188571;

let canvasSize = Math.min(window.innerWidth, window.innerHeight);
let frameWidth = canvasSize / 10;

let palettes = [];
palettes.push(["#fffcf2", "#ccc5b9", "#403d39", "#252422", "#eb5e28"]);
palettes.push(["#0c0f0a", "#ff206e", "#fbff12", "#41ead4", "#ffffff"]);
palettes.push(["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"]);
palettes.push(["#f8f9fa", "#dee2e6", "#adb5bd", "#495057", "#212529"]);
palettes.push(["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"]);

let paletteNum = Math.floor(fxrand() * palettes.length);
let paletteName = ["Tangerine", "Disco", "Playful", "Monochrome", "Vintage"][
  paletteNum
];

let palette = palettes[paletteNum];

let linesQty = Math.floor(fxrand() * 11 + 10);
let copySectionsQty = Math.floor(fxrand() * 5 + 4);
let linesDensity = 35 - linesQty + Math.floor(fxrand() * 11);
let rot = [0, 0, 45, 90, 90][Math.floor(fxrand() * 5)];
if (rot == 45) frameWidth *= 2;
rot *= fxrand() < 0.5 ? 1 : -1;

let lines = [];
let copySections = [];
let bgColor;
let g;
let pd;
let anim;
let grain;

let features = {};
features.Palette = paletteName;
features.Line_Groups = linesQty;
features.Lines_Density = linesDensity;
features.Bands = copySectionsQty;
features.Bands_Rotation = rot.toString() + "°";

// console.log(features);

window.$fxhashFeatures = features;

function windowResized() {
  resetRandom();
  canvasSize = min(window.innerWidth, window.innerHeight);
  frameWidth = canvasSize / 10;
  resizeCanvas(canvasSize, canvasSize);
}

function setup() {
  resetRandom();
  createCanvas(canvasSize, canvasSize);
  pd = pixelDensity();
  g = createGraphics(canvasSize * pd, canvasSize * pd);
  g.strokeWeight(canvasSize / 600);
  shuffle(palette, true);

  bgColor = palette.shift();

  let sections = [frameWidth];
  for (let i = 0; i < linesQty - 1; i++) {
    sections.push(random(frameWidth, canvasSize - frameWidth));
  }
  sections.push(height - frameWidth);
  sort(sections);

  for (let i = 0; i < linesQty; i++) {
    if (random() < 0.5) {
      lines.push({
        y: sections[i],
        start: sections[i],
        end: sections[i + 1],
        color: color(random(palette)),
      });
    } else {
      lines.push({
        y: sections[i + 1],
        start: sections[i + 1],
        end: sections[i],
        color: color(random(palette)),
      });
    }
  }

  sections = [-0.1];
  for (let i = 1; i < copySectionsQty; i++) {
    sections.push(
      i / copySectionsQty +
        random(-0.4 / copySectionsQty, 0.4 / copySectionsQty)
    );
  }
  sections.push(1.1);
  sort(sections);

  for (let i = 0; i < copySectionsQty; i++) {
    copySections.push({
      x: sections[i],
      w: sections[i + 1] - sections[i],
      yd: random(-0.75, 0.75),
    });
  }

  shuffle(lines, true);

  shuffle(copySections, true);

  anim = gsap
    .from(copySections, {
      yd: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
    })
    .pause()
    .eventCallback("onComplete", fxpreview);

  rot = (rot * TWO_PI) / 360;
  grain = genGrain(30);
}

function draw() {
  blendMode(BLEND);
  updateLines();
  background(bgColor);
  resetMatrix();
  translate(canvasSize / 2, canvasSize / 2);
  rotate(rot);
  translate(-canvasSize / 2, -canvasSize / 2);
  for (let l of lines) {
    g.stroke(l.color);
    g.line(frameWidth, l.y, width - frameWidth, l.y);
  }
  image(g, 0, 0, canvasSize * pd, canvasSize * pd);
  for (let s of copySections) {
    let a = canvasSize - 2 * frameWidth;
    copy(
      frameWidth + s.x * a,
      0,
      s.w * a,
      canvasSize,
      frameWidth + s.x * a,
      s.yd * frameWidth,
      s.w * a,
      canvasSize
    );
  }
  blendMode(HARD_LIGHT);
  resetMatrix();
  image(grain, 0, 0, canvasSize, canvasSize);
}

function updateLines() {
  if (frameCount <= linesDensity) {
    for (let l of lines) {
      l.y = lerp(l.start, l.end, easeInOutQuad(frameCount / linesDensity));
    }
  } else {
    anim.play();
  }
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
}

function resetRandom() {
  randomSeed(seed);
  noiseSeed(seed);
}

function genGrain(v = 60) {
  let g = createImage(canvasSize * pd, canvasSize * pd);
  g.loadPixels();
  for (let i = 0; i < g.pixels.length; i += 4) {
    let r = fxrand() * v - v / 2;
    g.pixels[i] = 127 + r;
    g.pixels[i + 1] = 127 + r;
    g.pixels[i + 2] = 127 + r;
    g.pixels[i + 3] = 255;
  }
  g.updatePixels();
  return g;
}
