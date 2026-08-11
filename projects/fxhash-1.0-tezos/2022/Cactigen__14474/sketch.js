let nc = 0;
let lcx, lcy;
let cfd, cfb, cfn, cff;
let desT;
let tbflt;
let cactcl = 0;
let svd = fxrand() * 2000000;
let lws, lhs;
let flsz;
function setup() {
  createCanvas(627.5, 753);
  randomSeed(svd);
  noiseSeed(svd);
  cactcl = flr(0, grcol.length);
  nc = flr(5, 12);
  cfd = flr(0, flowerDColor.length);
  cfb = flr(0, flbColor.length);
  cff = flr(0, flcl.length);
  flsz = width * 0.02;
  desT = random(1) > 0.25 ? (random(1) > 0.5 ? "day" : "night") : "solid";
  tbflt = random(["flB", "flN", "fl1"]);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100, 100);
}

function draw() {
  noLoop();
  desert(width, height);
  stroke(0);
  if (random(1) > 0.4) {
    seCr(width, height);
  } else {
    coer(10);
  }
}
