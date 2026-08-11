var a = -1.3;
var b = -1.1;
var c = 3.14;
var d = -1.7;
var reps = 50000;
var scaler = 66;
var yscaler = 1;

function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
noLoop();
  //blendMode(DIFFERENCE);
}

function draw() {
  // noprotect
  var x = 0.1;
  var y = 0.1;
  a+=random(0.05,0.99);
  
  background(0);
  
  translate(width/2, height/2);
  background(0);
  //noFill();
  stroke(255);
  strokeWeight(1.5);
  for (var i = 0; i < reps; i++) {
    var dx = sin(a*y) + c*cos(a*x);
    var dy = (sin(b*x) + d*cos(b*y))*yscaler;
    x = dx;
    y = dy;
    point(x*scaler*random(1.5), y*scaler);
  }
}