/// <reference path="libraries/TSDef/p5.global-mode.d.ts" />

//"use strict";

// The title of your piece goes here (not visible on hicetnunc)
document.title = "boxes_OUTLINED";

// Default size of your canvas (windowScale = 1.0)
const referenceSize = 1440;

// if true, then the canvas cannot be larger than the reference size
const hasMaxSize = false;

// if true the canvas will be vertically and horizontally centered inside the window
const isCentered = true;

// **************************
// *    GLOBAL VARIABLES    *
// **************************

let canvasSize;
var windowScale;
var fullScreen;
var cubes = [], cubes_out = [], cubePattern = [], bs, cam;

let COLS;
let PALETTE;

let palette = [];

palette[0] = ["#f8f9fa","#ced4da","#495057","#212529"];
palette[1] = ["#005f73","#e9d8a6","#bb3e03","#f5f3f4"];
palette[2] = ["#f72585","#7209b7","#4895ef","#f5f3f4"];
palette[3] = ["#10468c","#b8fbfa","#a4569f","#2e2250"];
palette[4] = ["#161a1d","#ba181b","#f5f3f4","#495057"];
palette[5] = ["#e63946","#f1faee","#a8dadc","#1d3557"];
palette[6] = ["#780000","#fdf0d5","#003049","#669bbc"];
palette[7] = ["#353535","#3c6e71","#ffffff","#d9d9d9"];
palette[8] = ["#eb300f","#fe7688","#fff566","#212121", "#306e42","#0d3b66"];
palette[9] = ["#f72585","#b5179e","#7209b7","#560bad","#480ca8","#3a0ca3","#3f37c9","#4361ee","#4895ef","#4cc9f0"];

let outline = true, animate = false, mx = 45, my = 45;
let flatImg, outlineImg, tdImg, tdoImg, final, render, bgImage, print, bgImageC;
let bg, rx, ry, rs, outlineCol, strokeCol, sameSize,blackOutline, chaotic;

function setup() {
  setDimensions();
  canvasSize = min(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);
  centerCanvas();

  tdImg = createGraphics(referenceSize, referenceSize, WEBGL);
  tdoImg = createGraphics(referenceSize, referenceSize, WEBGL);
  bgImage = createGraphics(referenceSize,referenceSize);

  initializeStuff();
  createStuff();
  showBG();
  showCubes();
  render = get();
  fxpreview();

}

function draw() {
  
}

function showBG() {
  let rez = floor(randomRange(1,10))*5;
  let mirror = false;
  if (rez>14) {
    mirror = true;
    rez = floor(rez/2);
  }
  let BGsize = (mirror) ? referenceSize/2 : referenceSize;
  bgImage.resizeCanvas(BGsize, BGsize);
  let cellW = BGsize/rez;
  let cellH = cellW;
  PALETTE = fxshuffle(COLS, true);
	bgImage.background(PALETTE[0]);
	PALETTE = PALETTE.slice(0, 3);
  for (let x=0; x<BGsize; x+=cellW) {
    for (let y=0; y<BGsize; y+=cellH) {
      createBGPattern(x,y,cellW, cellH);
    }
  }
  bgImage.filter(GRAY);
  bgImage.filter(ERODE);
  let f = blackOutline && fxrand()>.5 ? 255 : 0 ;
  let a = blackOutline ? 150 : 150 ;
  bgImage.fill(f,a);
  bgImage.rect(0,0,BGsize, BGsize);
  imageMode(CENTER);
  if (mirror) {
    image(bgImage,width*.25, height*.25,width/2, height/2);

    push();
    translate(width*.25, height*.75);
    rotate(PI/2);
    image(bgImage,0,0,width/2, height/2);
    pop();

    push();
    translate(width*.75, height*.25);
    rotate(PI);
    image(bgImage,0,0,width/2, height/2);
    pop();
    
    push();
    translate(width*.75, height*.75);
    rotate(PI*1.5);
    image(bgImage,0,0,width/2, height/2);
    pop();
    
  } else {
    image(bgImage,width/2, height/2,width, height);
  }

  bgImageC = get();
  
}

function initializeStuff() {

  flatImg = createImage(referenceSize, referenceSize);
  outlineImg = createImage(referenceSize, referenceSize);
  
  tdImg.camera(0, 0, (referenceSize/3) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  tdoImg.camera(0, 0, (referenceSize/3) / tan(PI/6), 0, 0, 0, 0, 1, 0)

  fxrand = sfc32(...hashes);
  rs = fxrand()*10000;
  randomSeed(rs);
  noiseSeed(rs);

  let rC = floor(fxrand()*palette.length);
  COLS = palette[rC];
  PALETTE = fxshuffle(COLS, true);
  bg = color('black');//  PALETTE[0];
  document.body.style.backgroundColor = bg;
  blackOutline = fxrand()>.5 ? true : false;
  outlineCol = blackOutline ? color(34) : color(238);
  strokeCol = blackOutline ? color(238) : color(34);

  outline = (fxrand()>0.5) ? true : false;
  sameSize = (fxrand()>0.5) ? true : false;
  chaotic = (fxrand()>0.5) ? true : false;
  rx = PI;
  ry = PI;

}

function createStuff() {

  let nc = 70 + floor(fxrand()*60);
  createCubes(nc);

  background(bg);
  tdImg.lights();
  
  tdImg.rotateX(rx);
  tdImg.rotateY(ry);
  tdImg.rotateZ(0);

  for (let i=0; i<cubes.length; i++){
    cubes[i].showCubes();
  }
  flatImg.copy(tdImg,-referenceSize/2,-referenceSize/2,referenceSize,referenceSize,0,0,referenceSize, referenceSize);
  
  tdoImg.rotateX(rx);
  tdoImg.rotateY(ry);
  tdoImg.rotateZ(0);
 
  for (let i=0; i<cubes.length; i++){
    cubes[i].showOutline(outlineCol);
  }
  outlineImg.copy(tdoImg,-referenceSize/2,-referenceSize/2,referenceSize,referenceSize,0,0,referenceSize, referenceSize);

}

function showCubes(){
  let s = 1.05;
  imageMode(CENTER);
  translate(canvasSize/2, canvasSize/2);
  scale(s);
  image(outlineImg,0,0, canvasSize, canvasSize);
  scale(1/s);
  image(flatImg,0,0, canvasSize, canvasSize);

}

function createCubes(n) { 
 
  let sz = map(n,70,130,20,30);
  for (let i=0; i<n; i++) {
    let x,y,z, sz2;
    if (chaotic) {
      let s = referenceSize/sz*3;
      sz2 = map(n,70,130,10,30);
      x = map(noise(i),0,1,-s,s);
      y = map(noise(i+1000),0,1,-s,s);
      z = map(noise(i+5000),0,1,-s/2,s/2);
    } else {
      let s = referenceSize/sz;
      sz2 = map(n,70,130,10,30);
      x = floor(randomRange(-4,4))*s;
      y = floor(randomRange(-4,4))*s;
      z = floor(randomRange(-2,2))*s;
    }

    if (sameSize) {
      bs = referenceSize/sz2;
    } else {
      let rs = 10 + floor(fxrand()*20);
      bs = referenceSize/rs;
    }

    cubePattern[i] = createGraphics(bs*2,bs*2, P2D);
    createCubePattern(i,bs); 
        
    cubes.push(new Cube(x,y,z,i,bs));
  }

}

function createCubePattern(i, dr) {
  PALETTE = fxshuffle(COLS, true);
	cubePattern[i].background(PALETTE[0]);
	PALETTE = PALETTE.slice(0, 3);

  const d = dr;
	cubePattern[i].pattern(randPattern(d));
  cubePattern[i].patternColors(fxshuffle(PALETTE));
  cubePattern[i].patternAngle(int(fxrand()*4) * PI / 4);
  cubePattern[i].rectPattern(0,0,cubePattern[i].width, cubePattern[i].height);

}

function createBGPattern(x,y,cellW,cellH) {
 
  const d = cellW;
	bgImage.pattern(randPattern(d));
  bgImage.patternColors(fxshuffle(PALETTE));
  bgImage.patternAngle(int(fxrand()*4) * PI / 4);
  bgImage.rectPattern(x,y,cellW, cellH);

}

function createCols(url)
{
	let slaIndex = url.lastIndexOf("/");
	let colStr = url.slice(slaIndex + 1);
	let colArr = colStr.split("-");
	for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
	return colArr;
}

function randPattern(t)
{
	const ptArr = [
		PTN.noiseGrad(0.4),
		PTN.stripe(t / int(randomRange(6, 12))),
		PTN.stripeCircle(t / int(randomRange(6, 12))),
		PTN.stripePolygon(int(randomRange(3, 7)),  int(randomRange(6, 12))),
		PTN.stripeRadial(TAU /  int(randomRange(6, 30))),
		PTN.wave(t / int(randomRange(1, 3)), t / int(randomRange(10, 20)), t / 5, t / 10),
		PTN.dot(t / 10, t / 10 * randomRange(0.2, 1)),
		PTN.checked(t / int(randomRange(5, 20)), t / int(randomRange(5, 20))),
		PTN.cross(t / int(randomRange(10, 20)), t / int(randomRange(20, 40))),
		PTN.triangle(t / int(randomRange(5, 20)), t / int(randomRange(5, 20)))
	]
  let r = floor(fxrand()*ptArr.length);
  return ptArr[r];
}

function windowResized() {
  let oldCS = canvasSize;
  setDimensions();
    if (isCentered) {
    centerCanvas();
  }
  canvasSize = min(windowWidth, windowHeight);
  let ratio = oldCS/canvasSize;
  resizeCanvas(canvasSize, canvasSize);
  translate(width/2, height/2);
  scale(ratio);
  image(render,0,0,canvasSize,canvasSize);
}

function keyPressed() {
  if (key == 's') save(render, floor(random(9999))+".png");
  if (key == 'h') {
    print = createGraphics(referenceSize*3, referenceSize*3);
    print.scale(3);
    print.image(bgImageC,0,0,print.width/3, print.height/3);
    print.image(tdoImg,0,0,print.width/3, print.height/3);
    print.image(tdImg,0,0,print.widt/3, print.height/3);
    save(print,"hires-" + fxhash + ".png");
  }
}

class Cube {

  constructor(x,y,z,i,bs) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.i = i;
    this.bs = bs;
    this. r = 1;
  }

  showCubes() {
    tdImg.push();
    tdImg.translate(this.x, this.y, this.z);
    tdImg.texture(cubePattern[this.i]);
    tdImg.strokeWeight(1.5);
    tdImg.stroke(strokeCol);
    let r = this.r;
    tdImg.box(this.bs*r, this.bs*r, this.bs*r);
    tdImg.pop();
  }

  showOutline() {
    tdoImg.push();
    tdoImg.translate(this.x, this.y, this.z);
    tdoImg.fill(outlineCol);
    tdoImg.noStroke();
    let r = this.r;
    tdoImg.box(this.bs*r, this.bs*r, this.bs*r);
    tdoImg.pop();
  }
}

// MIT http://rem.mit-license.org
/*
function trim(c) {
  var ctx = c.getContext('2d'),
    copy = document.createElement('canvas').getContext('2d'),
    pixels = ctx.getImageData(0, 0, c.width, c.height),
    l = pixels.data.length,
    i,
    bound = {
      top: null,
      left: null,
      right: null,
      bottom: null
    },
    x, y;

  for (i = 0; i < l; i += 4) {
    if (pixels.data[i+3] !== 0) {
      x = (i / 4) % c.width;
      y = ~~((i / 4) / c.width);
  
      if (bound.top === null) {
        bound.top = y;
      }
      
      if (bound.left === null) {
        bound.left = x; 
      } else if (x < bound.left) {
        bound.left = x;
      }
      
      if (bound.right === null) {
        bound.right = x; 
      } else if (bound.right < x) {
        bound.right = x;
      }
      
      if (bound.bottom === null) {
        bound.bottom = y;
      } else if (bound.bottom < y) {
        bound.bottom = y;
      }
    }
  }
    
  var trimHeight = bound.bottom - bound.top,
      trimWidth = bound.right - bound.left,
      trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);
  
  copy.canvas.width = trimWidth;
  copy.canvas.height = trimHeight;
  copy.putImageData(trimmed, 0, 0);
  
  // open new window with trimmed image:
  return copy.canvas;
}
*/