/// <reference path="lib/TSDef/p5.global-mode.d.ts" />

"use strict";

let bg, ns, canvasSize, render,referenceSize, unit;

function setup() {
  canvasSize = min(window.innerWidth, window.innerHeight);
  createCanvas(canvasSize, canvasSize);
  referenceSize = 1080;
  unit = 1.0/canvasSize;
  render = createGraphics(canvasSize, canvasSize);
  centerCanvas();
  pixelDensity(1);


  bg = color(19);
  document.body.style.backgroundColor = bg;
  createStuff();

  noLoop();  
}

function conv(u) {
  return u/unit;
}

function draw() {
  background(bg);
  image(render,0,0,canvasSize, canvasSize);
  }

function createStuff() {
  //fxrand = sfc32(...hashes);
  ns = fxrand()*1000000;
  unit = 1.0/canvasSize;
  noiseSeed(ns);
  render.background(19);
  let step = randomRange(.001,.0001);
  let a = randomRange(150,255);
  let black = fxrand()>.75 && step>.0005 ? true : false;
  for (let y= .2; y<1.2; y+=step) {
    let x = .5; 
    let h = map(noise(y*100),0,1,.15,.025) ;
    let scl = map(y,0,1,3,.75);
    let w = map(noise(y*20),0,1,.05,.25*scl) ;
    a = map(noise(y*50),0,1,255,0) ;
    if (black) a = 255;
    let f = map(noise(y*15),0,1,50,255);
    
    render.fill(f);

    render.stroke(0,a);
    render.strokeWeight(conv(.001));
    render.ellipse(conv(x),conv(y),conv(w),conv(h));
  }
  render.fill(200);
  render.stroke(bg);
  render.strokeWeight(conv(.004));
  let sz = randomRange(conv(.05),conv(.1));
  let rh = randomRange(.25,.35);
  let rw = randomRange(.30,.4);
  render.ellipse(render.width*rw, render.height*rh,sz,sz);
  render.ellipse(render.width*(1-rw), render.height*rh,sz,sz);

  render.fill(bg);
  let rsz = randomRange(.25,.55);
  sz *= rsz;
  render.ellipse(render.width*rw, render.height*rh,sz,sz);
  render.ellipse(render.width*(1-rw), render.height*rh,sz,sz);
}

function centerCanvas() {
  var s = document.body.style;
  s.display = "flex";
  s.overflow = "hidden";
  s.height = "100vh";
  s.alignItems = "center";
  s.justifyContent = "center";
}

function keyPressed() {
  if (key == 's') save(fxhash+".png");  
}

function windowResized() {
  background(bg);
  canvasSize = min(window.innerWidth, window.innerHeight);
  resizeCanvas(canvasSize,canvasSize);
  centerCanvas();
  //createStuff();
  redraw();
}