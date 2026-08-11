/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const canvasWidth = 2550;
const canvasHeight = 3260;
const PAD = 130
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const image1 = new Image(2100, 2738);
image1.onload = drawImageActualSize1;
image1.src = setup1();
const image2 = new Image(2550, 3260);
image2.onload = drawImageActualSize2;
image2.src = setup2();

function setup1() {
  let myArray1 = ["./images/a.png", "./images/b.png", "./images/b.png", "./images/c.png", "./images/c.png", "./images/c.png", "./images/d.png", "./images/d.png", "./images/d.png", "./images/d.png", "./images/e.png", "./images/e.png", "./images/e.png", "./images/e.png", "./images/e.png", "./images/f.png", "./images/f.png", "./images/f.png", "./images/f.png", "./images/f.png", "./images/f.png"];
  return myArray1[Math.floor($fx.rand() * myArray1.length)];
}

function setup2() {
  let myArray2 = ["./images/aa.png", "./images/bb.png", "./images/cc.png", "./images/dd.png", "./images/ee.png", "./images/ee.png", "./images/ee.png", "./images/ff.png", "./images/ff.png", "./images/ff.png", "./images/gg.png", "./images/gg.png", "./images/gg.png", "./images/gg.png", "./images/gg.png", "./images/hh.png", "./images/hh.png", "./images/hh.png", "./images/hh.png", "./images/hh.png", "./images/ii.png", "./images/ii.png", "./images/ii.png", "./images/ii.png", "./images/ii.png"];  
  return myArray2[Math.floor($fx.rand() * myArray2.length)];
}

function drawImageActualSize1() {
  ctx.drawImage(image1, 121, 124, 2100, 2738);  
}

function drawImageActualSize2() {
  ctx.drawImage(image2, 0, 0, 2550, 3260);  
}

function getRandomNum(min, max) {
  return $fx.rand() * (max - min) + min;
}

let aiim = 0
let part1 = 0
    if (image1.getAttribute("src") === "./images/a.png") {
    part1 = 100/21
    aiim = "image 1"
    }
    if (image1.getAttribute("src") === "./images/b.png") {
    part1 = 200/21
    aiim = "image 2"
    }
    if (image1.getAttribute("src") === "./images/c.png") {
    part1 = 300/21
    aiim = "image 3"
    }
    if (image1.getAttribute("src") === "./images/d.png") {
    part1 = 400/21
    aiim = "image 4"
    }
    if (image1.getAttribute("src") === "./images/e.png") {
    part1 = 500/21
    aiim = "image 5"
    }
    if (image1.getAttribute("src") === "./images/f.png") {
    part1 = 600/21
    aiim = "image 6"
    }
let clr = 0    
let part2 = 0
    if (image2.getAttribute("src") === "./images/aa.png") {
    part2 = 100/25
    clr = "#6a4910"
    }
    if (image2.getAttribute("src") === "./images/bb.png") {
    part2 = 100/25
    clr = "#e4cb9e"
    }
    if (image2.getAttribute("src") === "./images/cc.png") {
    part2 = 100/25
    clr = "#d2aa4d"
    }
    if (image2.getAttribute("src") === "./images/dd.png") {
    part2 = 100/25
    clr = "#a79469"
    }
    if (image2.getAttribute("src") === "./images/ee.png") {
    part2 = 300/25
    clr = "#fb40aa"
    }
    if (image2.getAttribute("src") === "./images/ff.png") {
    part2 = 300/25
    clr = "#33c9d4"
    }   
    if (image2.getAttribute("src") === "./images/gg.png") {
    part2 = 500/25
    clr = "#e43c47"
    }
    if (image2.getAttribute("src") === "./images/hh.png") {
    part2 = 500/25
    clr = "#7eb69c"
    }
    if (image2.getAttribute("src") === "./images/ii.png") {
    part2 = 500/25
    clr = "#9d9793"
    }
    
let percent = 0
    let perc1 = (part1 * part2)/100   
    percent = perc1.toFixed(1)

let airarity = 0
    airarity = part1.toFixed(2)
    
let framerarity = 0
    if (part2 == 4){
    framerarity = "super rare"
    }
    if (part2 == 12){
    framerarity = "rare"
    }
    if (part2 == 20){
    framerarity = "common"
    }  
    
let bar = []

for(let n = 0; n < 300; n++){
  let randY = getRandomNum(PAD, 0.91 * (canvasHeight-PAD))
  bar.push({y: randY})
}

for(let i = 0; i < bar.length; i++){
  let c = bar[i]
  let d = getRandomNum(1, 15)
  ctx.fillStyle = clr;
  ctx.rect(2250, c.y, 155, d)
  ctx.fill()
  ctx.font = "bold 80px sans";
  ctx.fillText(percent, 0.885 * canvasWidth, 0.96 * (canvasHeight-PAD));
  ctx.fillText("%", 0.897 * canvasWidth, 0.986 * (canvasHeight-PAD));
}

const resizeCanvas = function(event) {
  var containerWidth = window.innerWidth;
  var containerHeight = window.innerHeight;
  var ratio = containerWidth / canvasWidth;
  if(canvasHeight * ratio > containerHeight) {
    ratio = containerHeight / canvasHeight;
  }
  canvas.style.width = canvasWidth * ratio+10;
  canvas.style.height = canvasHeight * ratio+10;
}

window.addEventListener('resize', resizeCanvas, true);
resizeCanvas()

document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
	exportCanvasAsPNG(canvas);
  }
});

function exportCanvasAsPNG(canvas) {
  const link = document.createElement('a');
  const dataURL = canvas.toDataURL('image/png');
  link.href = dataURL;
  link.download = 'canvas-export.png';
  link.click();
}

$fx.features({
  'Frame color': clr,
  'Frame rarity': framerarity,
  'AI image': aiim,
  'AI image rarity (%)': airarity,
  'Mintage chance (%)': percent,
})


/******/ })()
;