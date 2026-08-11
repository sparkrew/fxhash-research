////////////////INFO & FEATURES
let myTitle = "Blurry Dots";
let present = '<h2>' + myTitle + '</h2><p>by</p><h3>smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.07"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "Palette": palette.name,
  "Background": bg.name,
  "columns": myGrid.name,
  "Margin": myMargin.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
// let globalW = window.innerWidth;
// let globalH = window.innerHeight;
let globalSize = 1024;
let cnv;
let pD = 1;
let mg = myMargin.val;
let scl = 1 + Math.floor(fxrand() * 10)
let gen;
let g1;
let g = []

function preload() {
  randomSeed(seed);
  noiseSeed(seed);
}

function setup() {
  cnv = createCanvas(globalSize, globalSize)
  cnv.parent('fullScreen');
  pixelDensity(pD);
  rectMode(CENTER)
  imageMode(CENTER)
  angleMode(DEGREES);
  background(0);
  gen = new myObj();
  gen.back();
  push()
  if (fxrand() < 0.5) {
    translate(width, height)
    rotate(-180)
    gen.show();
    print('180')
  }
  else {
    rotate(0)
    translate(0, 0)
    gen.show()
  }
  pop()
  gen.postprod();
}

function draw() {
}