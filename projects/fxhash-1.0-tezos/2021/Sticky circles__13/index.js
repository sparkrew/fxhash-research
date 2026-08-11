// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// Variables

let canvasSize;        // canvas size
let Size = 1000;       // size of drawing area (before scale)
let W = 800;           // Diameter
let angle;             // Rotation angle
let thr;               // Threshold for recursive function f
let col1, col2;        // Colours for fill
let COL = [];          // Colours for redraw
let circleIndex;       // Current circle being drawn
let firstDraw = true;  // First time being drawn

let isDark;            // Dark / Light
let fillType;          // None / Transparent / Solid
let s;                 // Controls chaos
let px;                // Controls radius decay

// Defining features

// Theme
isDark = fxrand() < 0.5;

function getFeatureTheme(isDark) {
  if (isDark) return "Dark"
  else return "Light"
}

// Fill
fillType = fxrand() < 0.9 ? ( fxrand() < 0.5 ? 1 : 2 ) : 0;

function getFeatureFillType(fillType) {
  if (fillType == 0) return "None"
  if (fillType == 1) return "Transparent"
  else return "Solid"
}

// Stroke
strokeType = Math.floor(rnd(0,3));

function getFeatureStrokeType(strokeType) {
  if (strokeType == 0) return "Solid"
  if (strokeType == 1) return "Big dashes"
  else return "Small dashes"
}

// Chaos
s = fxrand() < 0.3 ? rnd(0,1) : rnd(0.5,10);

function getChaos(s) {
  if (s < 0.5) return "Low"
  if (s < 1.5) return "Medium"
  else return "High"
}

// Radius decay
px = rnd(0.3,1);

function getRadiusDecay(px) {
  if (px < 0.56) return "Low"
  if (px < 0.78) return "Medium"
  else return "High"
}

window.$fxhashFeatures = {
  "Theme": getFeatureTheme(isDark),
  "Fill": getFeatureFillType(fillType),
  "Stroke": getFeatureStrokeType(strokeType),
  "Chaos level": getChaos(s),
  "Radius decay": getRadiusDecay(px)
}

// Setup

function setup() {
  canvasSize = min(window.innerWidth,window.innerHeight);
  createCanvas(canvasSize,canvasSize);
  smooth();
  setEverything();
}

// Draw

function draw() {

  if (isDark){
    background(0);
    stroke(255);
  } else {
    background(255);
    stroke(0);
  }
  noFill();

  translate(width/2,height/2);
  rotate(angle);
  scale(width/Size);

  circleIndex = 0
  f(1.0);

  firstDraw = false;
  noLoop();

}

// Main

function f(x){
  if (x < thr){
    return;
  } else {
    DRAW(x);
    f(0.25*x);
    f(0.5*x);
    f(0.75*x);
  }
}

function DRAW(x){
  let u = pow(x,px);
  let r = map(u,0,1,0,W);
  let a = s/x;

  push();
  if (fillType == 1){
    fill(lerpColor(col1, col2, u));
  }
  if (fillType == 2){
    if (firstDraw){
      COL[circleIndex] = fxrand() < 0.2 ? col1 : col2;
    }
    fill(COL[circleIndex]);
  }

  rotate(a);
  ellipse(W/2-r/2,0,r,r);
  pop();

  circleIndex++;
}

// Setup functions

function setEverything(){
  thr = rnd(0.01,0.1);
  angle = rnd(0,TWO_PI);
  setBackground();
  setStrokeType();
  setFill();
}

function setBackground(){
  if (isDark){
    document.body.classList.toggle("dark");
  }
}

function setStrokeType(){
  strokeWeight(2);
  if (strokeType == 1){
    setLineDash([30, 10]);
  }
  if (strokeType == 2){
    setLineDash([10, 10]);
  }
}

function setFill(){
  if (fillType == 1){
    let alp = rnd(5,50);
    col1 = color(isDark ? 255 : 0,alp);
    col2 = color(isDark ? 0 : 255,alp);
  }
  if (fillType == 2){
    col1 = color(isDark ? 255 : 0);
    col2 = color(isDark ? 0 : 255);
  }
}

// Window resize

function resize() {
  canvasSize = min(window.innerWidth,window.innerHeight);
  resizeCanvas(canvasSize,canvasSize);
  setStrokeType();
  loop();
}

var doit;
window.addEventListener('resize', function(){
  clearTimeout(doit);
  doit = setTimeout(resize, 100);
});

// Helper functions

function rnd(vmin,vmax){
  return (vmax - vmin)*fxrand() + vmin;
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
