let particles = [];
const numb = 15000;
const noiseScale = 0.004;
var loops = 0;
var speed = 0;
var loopsAmnt = 0;
var div = 1;
let w = 1000;
////SETUP
function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  let tempcan = createCanvas(w, w);
  tempcan.parent("fullscreen");
  speed = random(6);
  loopsAmnt = 120;
  loops = 1;
  sx = random(75, 250);
  sy = 1000 - sx;
  for (let i = 0; i < numb; i++) {
    particles.push(createVector(random(sx, sy), random(sx, sy)));
  }
  stroke(255);
  strokeWeight(2);
//BackgroundsPalette
  softwhite = color(240, 235, 225);
  softred = color(237, 213, 213);
  grey = color(15,15,15);
  blue1 = color(190, 206, 246);
  cream = color(241, 233, 215);
  gold = color(206, 209, 175);
  bgcolors = [grey];
//StrokesPalette
  blue1 = color(26, 118, 170, 20);
  green1 = color(35, 108, 27, 20);
  red1 = color(170, 26, 26, 20);
  purple = color(60, 34, 167, 20);
  black3 = color(74, 74, 74, 20);
  yellow1 = color(149, 162, 34, 20);
  palette = [blue1, green1, red1, purple, black3];
  Colors = random(palette);
  div = [1, 1, 14, 20];
  divide1 = random(div);
  background(random(bgcolors));
}////CLOSE SETUP
////DRAW
function draw() {
  stroke(Colors);
  if (loops < loopsAmnt) {
    if (loops > 70) {
      Colors = random(palette);
    }
    loops = loops + 1;
    for (let i = 0; i < numb; i++) {
      let p = particles[i];
      point(p.x, p.y);
      let n = noise(p.x * noiseScale, p.y * noiseScale);
      let a = TAU * n;
      p.x += cos(a * speed);
      p.y += sin(a / divide1);
    }
  } else {
    noLoop();
  }
} 