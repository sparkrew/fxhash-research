/// <reference path="lib/TSDef/p5.global-mode.d.ts" />

"use strict";

let d, theta = 0, maxFC = 0, rot = 0, frms = 90, fc=0, rBG, marginX, marginY, cnv, render;
let sheep = [], sheepCopy = [], specVelo = [], rY = [], c = [], vel=[];
let strokeAlpha, grain;

let ww, unit, incr, bg, pal;

let palette = [];
palette[0] = ["#0d1b2a","#1b263b","#415a77","#778da9","#e0e1dd"];
palette[1] = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
palette[2] = ["#f72585","#b5179e","#7209b7","#480ca8","#4cc9f0"];
palette[3] = ["#2b2d42","#8d99ae","#edf2f4","#ef233c","#d90429"];
palette[4] = ["#003049","#d62828","#f77f00","#fcbf49","#eae2b7"];
palette[5] = ["#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"];
palette[6] = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
palette[7] = ["#ff9f1c","#ffbf69","#ffffff","#cbf3f0","#2ec4b6"];
function setup() {
  ww = Math.min(window.innerWidth, window.innerHeight)*.95;
  createCanvas(ww, ww);
  centerCanvas();

  colorMode(HSB,360,100,100,1.0);
  rectMode(CENTER);

  let cols = floor(randomRange(20,250));
  if (fxrand()>.8) cols = floor(randomRange(6,2));
  incr = 1.0/cols; // randomRange(.001,.05); 

  initValues();

  let i=0; 
  for (let x=0; x<1.0; x += incr) {
    rY[i] = fxrand();
    c[i] = floor(fxrand()*palette[pal].length);
    vel[i] = randomRange(-.0025,.0025);
    i++;
  }
   
  document.body.style.backgroundColor=bg;
  background(bg);
  
  createSheep();
 
  

}

function draw() {
  push();
  translate(conv(.5), conv(.5));
  push();
    rotate(rot);
    push();
      translate(-conv(.5), -conv(.5));
      if (fc<maxFC) {
        updateVelocity();
        drawStuff();
      }
    pop();
  pop();

  pop();

  fc++;

}

function keyPressed() {
  if (key == 's') save(floor(random(999999))+".png");  
}

function windowResized() {
  fxrand = sfc32(...hashes);
  background(bg);
  fc = 0;
  ww = Math.min(window.innerWidth, window.innerHeight)*.95;
  unit = 1.0 / ww;
  resizeCanvas(ww,ww);
  centerCanvas();

  document.body.style.backgroundColor = bg;
  specVelo = [];

  createSheep();
  updateVelocity();
}

function initValues() {
 
  ww = Math.min(window.innerWidth, window.innerHeight)*.95;
  unit = 1.0 / ww;
  pal = floor(fxrand()*palette.length);
  maxFC = randomRange(75,300);
  strokeAlpha = map(maxFC,100,400,.0005,.00025);
  rot = floor(randomRange(0,3))*radians(90);
  if (incr<.01) {
  (fxrand()>.5) ? strokeCap(SQUARE) : strokeCap(ROUND);
  } else {
    strokeCap(SQUARE);
  }
  bg = color(0,0,0);
  d = incr;

}

function centerCanvas() {
  var s = document.body.style;
  s.display = "flex";
  s.overflow = "hidden";
  s.height = "100vh";
  s.alignItems = "center";
  s.justifyContent = "center";
}

function conv(u) {
  return u/unit;
}

function createSheep() {
  fxrand = sfc32(...hashes);
  sheep = [];
  let i = 0;
  for (let x = 0; x<1.0; x += incr) {
    sheep[i] = new Sheep(x,rY[i], c[i],vel[i]);
    i++;
  }
  
}

function updateVelocity() {
  specVelo[0] = sheep[0].vel.copy();
  for (let i=1; i<sheep.length; i++) {
    specVelo[i] = specVelo[i-1].add(sheep[i].vel);
    sheep[i].sVel = specVelo[i].copy();
  }
}

function drawStuff() {
  for (let i=0; i<sheep.length; i++){
    sheep[i].move();
    sheep[i].display();
  }
}

class Sheep {

  constructor(x,y,c,vel) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.v1 = createVector(x, y);
    this.vel = createVector(0,.0001);
    this.sVel = createVector(0,0);
    this.yVel = vel;
    this.col = color(palette[pal][this.c]);
  }

  move() {
    let margin = 0; //.2;

    this.v1.y += this.sVel.y;
    this.vel.y += randomRange(-.0025,.0025);
    this.vel.y = constrain(this.vel.y, -.075,.075);
    
    if (this.v1.y < margin) this.v1.mult(-1);
    if (this.v1.y > 1-margin) this.v1.mult(-1);
  }

  display() {
      colorMode(HSB,360,100,100,1);
      let c = this.col;
      c.setAlpha(conv(strokeAlpha));
      stroke(c); 
      strokeWeight(conv(d));
      line(conv(this.v1.x), conv(this.v1.y),conv(this.v1.x), conv(this.v1.y)+conv(this.sVel.y));
  }
}
