/// <reference path="libraries/TSDef/p5.global-mode.d.ts" />

"use strict";

// RESPONSIVE SQUARE TEMPLATE

// This template shows a combination of three useful tricks:
//
//   1. draw a square canvas that fits in the current window
//   2. scale the content based on the canvas size
//   3. center the canvas within the page
//
// Try resizing your sketch window to see the effect

// p5.js template for minting on Hic et Nunc
// Made for Processing's 20th anniversary Fundraiser
// By Raphaël de Courville (@sableraph)
// Find the latest version at https://github.com/SableRaf/HicEtNunc-p5js-templates

// 🤓 Note: replace thumbnail.png with your own thumbnail (512×512 pixels is best)

// **************************
// *       PARAMETERS       *
// **************************

// Set this to true when minting
p5.disableFriendlyErrors = false;

// The title of your piece goes here (not visible on hicetnunc)
document.title = "My beautiful p5.js sketch";

// Default size of your canvas (windowScale = 1.0)
const referenceSize = 1440;

// if true, then the canvas cannot be larger than the reference size
const hasMaxSize = false;

// if true the canvas will be vertically and horizontally centered inside the window
const isCentered = true;

// **************************
// *    GLOBAL VARIABLES    *
// **************************

var canvasSize;
var windowScale;
var fullScreen;

let cs, tiles = [], rRot, render, grainImg, grain;

let start, end, topp, bottom;
let scaleX, scaleY, m, col, row, factor;

let COLS;
let PALETTE;

let palette = [];
palette[0] = ["#f8f9fa","#ced4da","#495057","#212529"];
palette[1] = ["#005f73","#e9d8a6","#bb3e03"];
palette[2] = ["#f72585","#7209b7","#4895ef","#f5f3f4"];
palette[3] = ["#10468c","#b8fbfa","#a4569f","#2e2250"];
palette[4] = ["#161a1d","#ba181b","#f5f3f4"];
palette[5] = ["#e63946","#f1faee","#a8dadc","#1d3557"];
palette[6] = ["#780000","#fdf0d5","#003049","#669bbc"];
palette[7] = ["#353535","#3c6e71","#ffffff","#d9d9d9"];

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  grainImg = loadImage("./grain.jpg");
}

// **************************
// *          SETUP         *
// **************************


function setup() {
  setDimensions();
    if (isCentered) {
    centerCanvas();
  }
  cs = canvasSize*.95;
  createCanvas(cs, cs);
  render = createGraphics(referenceSize,referenceSize);
  noiseSeed(fxrand()*10000);
  randomSeed(fxhash);

  document.body.style.backgroundColor = color(238);

  rRot = (fxrand() > .7) ? true : false;
  grain = (fxrand()>.9) ? true : false;

  render.rectMode(CENTER);

  initValues();
 
  for (let i=0; i<tiles.length; i++) {
    tiles[i].createTile();
  }
  let tempImg = createImage(render.width, render.height);
  
  if (grain) {
    blendMode(HARD_LIGHT);
    image(grainImg,0,0,width, height);
  }
  tempImg = render.get();
  tempImg.resize(cs, cs);

  image(tempImg,0,0);
  //dither();
 
}

function draw() {
  
}

function initValues() {

  m = render.height*.03;
	factor = floor(randomRange(10,22));
  //factor = 4;
  col = ( render.width-2*m)/factor;
	row = ( render.height-2*m)/factor;
	scaleX =  col/2;
	scaleY = row/2;
	
	start = -scaleX+m;
	end = -start;
	topp = -scaleY+m;
	bottom = -topp;

  let rC = floor(fxrand()*palette.length-1)+1;
  COLS = palette[rC];

  PALETTE = fxshuffle(COLS, true);
  render.background(23);
  PALETTE = PALETTE.slice(0, 3);
  let nx = 0; 
  for (let x = scaleX+m; x<render.width-m; x+=col) {
    let ny = 0;
    nx += .2;
		for (let y = scaleY+m; y<render.height-m; y+=row) {
      ny += .2;
		  tiles.push(new Tile(x,y,nx,ny));
		}
	}

}
class Tile {

  constructor(x,y,nx, ny) {
    this.x = x;
    this.y = y;
    this.nx = nx;
    this.ny = ny;
    this.size = col;
    this.r = map(noise(this.nx*70,this.ny*25),0.1,0.6,0,90);
    this.s = map(noise(this.nx*5,this.ny*4),0.1,0.8,.4,.9);
    this.d = col * this.s;
    this.angle = int(fxrand()*4);
  }

  createTile() {
    render.pattern(randPattern(this.d));
    render.patternColors(fxshuffle(PALETTE));
    render.patternAngle( this.angle * PI / 4);
    render.push();
    render.translate(this.x, this.y);
    if (rRot) render.rotate(this.r);
    if (noise(this.nx,this.ny)>0.35) render.rectPattern(0,0,this.size*this.s,this.size*this.s); // .35 is a good value
    render.pop();
  }

}


function windowResized() {
  setDimensions();
  cs = canvasSize*.9;
  resizeCanvas(cs, cs);
  image(render,0,0,canvasSize,canvasSize);
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

function keyPressed() {
  if (key == 's') save(floor(random(9999))+".png");
}