/// <reference path="lib/TSDef/p5.global-mode.d.ts" />

"use strict";

let ww, bg, f, palette = [], links = [];
let side, num, pg, canvasSize, render, renderSize;
let cam;

function setup() {
  canvasSize = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(canvasSize, canvasSize, WEBGL);
  centerCanvas();
  pixelDensity(2);

  links[0] = "https://coolors.co/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1";
  links[1] = "https://coolors.co/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226";
  links[2] = "https://coolors.co/590d22-800f2f-a4133c-c9184a-ff4d6d-ff758f-ff8fa3-ffb3c1-ffccd5-fff0f3";

  renderSize = 1500;
  render = createGraphics(renderSize, renderSize, WEBGL);
  render.pixelDensity(2);
  render.camera(0, 0, (renderSize*1.1) / tan(PI/6), 0, 0, 0, 0, 1, 0);

  randomSeed(fxhash);
  bg = color('black');
  num = floor(randomRange(2,20));
  side = renderSize/num;

  palette = createCols(links[floor(fxrand()*links.length)]);

  f = palette[floor(fxrand()*palette.length)];
  bg = color(238);
  document.body.style.backgroundColor = bg;
  background(bg);

  background(238);
  lights();
  specularMaterial(250);
  translate(-canvasSize/2, -canvasSize/2,0);
  createGrid();
  push();
  
  image(render,0,0, canvasSize, canvasSize);
  pop();
  
}

function draw() {

}

function createGrid() {
  render.background(bg);
  render.push();
  render.translate(-renderSize/2, -renderSize/2);
  //render.image(pg,0,0,renderSize*2, renderSize*2);
  render.pop();
  let chaos = fxrand()>.25 ? true : false;
  for (let x = -renderSize/2; x<=renderSize/2; x+= side) {
    for (let y = -renderSize/2; y<=renderSize/2; y += side) {

      let offSet = fxrand(TWO_PI);
      let r = fxrand()*.5;
      let s = map2(sin(offSet), -1, 1, r, 1, LINEAR, EASE_IN_OUT);
      if (!chaos && fxrand()>.75) s = 1;
      let dx = map(s, r, 1, r*side, 0);
      if (!chaos) dx = 0;
     
      render.push();
      render.translate(x+dx,y-dx,0);
      render.strokeWeight(randomRange(side/25,side/100));
      render.stroke(0);
      render.fill(f);
      render.box(side*s);

      if (fxrand()>.5) {
        render.push();
        render.translate(randomRange(-10,10), randomRange(-10,10));
        render.fill(238);
        render.box(side*s/2, side*s/2, side*s);
        render.pop();
        if (fxrand()>.5) {
          render.push();
          render.translate(randomRange(-10,10), randomRange(-10,10));
          render.fill(f);
          render.box(side*s/3, side*s/3, side*s);
          render.pop();
        }
      }
      render.noFill();
      render.stroke(0); 
      render.strokeWeight(side/40);
      render.box(side);
      render.pop();
      //render.pop();
    }
  }
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
  if (key == 's') save(floor(random(999999))+".png");  
}

function windowResized() {
  //fxrand = sfc32(...hashes);
  let sizeNew = Math.min(window.innerWidth, window.innerHeight);
  resizeCanvas(sizeNew,sizeNew);
  centerCanvas();
  document.body.style.backgroundColor = bg;
  background(bg);
  translate(-sizeNew/2, -sizeNew/2, 0);
  image(render,0,0, sizeNew, sizeNew);
}

function createCols(url)
{
	let slaIndex = url.lastIndexOf("/");
	let colStr = url.slice(slaIndex + 1);
	let colArr = colStr.split("-");
	for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
  return colArr;
}

function setShadow(x,y,b,c) {
  drawingContext.shadowBlur = b;
  drawingContext.shadowColor = c;
  drawingContext.shadowOffsetX = x;
  drawingContext.shadowOffSetY = y;
}