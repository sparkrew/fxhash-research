//Title: Arraigos, estudios 2
//Author: Luz Amelia Santana Oliveros, 2023
//@All rights reserved


let multiplier;
let W, H, canvas, canvasIndex;
let seed;
let rotation, rotationIndex;
let layer1;
let pd;

let numCols, numRows;
let fW, fH;
let randomW, randomH;
let xy = [];
let xy_frames = [];
let xy_fH = [];

let walkers = [];
let sampling, m, initIndex, initIndexinner;
let initIndexes = [];


function setup(){
  multiplier = 100;      
  colorMode(HSL); 
  pd = 1;
  pixelDensity(pd);
  canvasSetup();
}

function canvasSetup(){
  seed = fxrand() * 99999999;
  randomSeed(seed);
  noiseSeed(seed);

  rotation = [1,2];
  rotationIndex = Math.floor(fxrand() * rotation.length);

  W = [8,8,10,7,7];
  H = [10,12,14,11,13];
  canvasIndex = Math.floor(fxrand() * W.length);

  if(rotationIndex === 0){
    canvas = createCanvas(W[canvasIndex] * multiplier, H[canvasIndex] * multiplier);
    layer1 = createGraphics(W[canvasIndex] * multiplier, H[canvasIndex] * multiplier);
  }

  if(rotationIndex === 1){
    canvas = createCanvas(H[canvasIndex] * multiplier, W[canvasIndex] * multiplier);
    layer1 = createGraphics(H[canvasIndex] * multiplier, W[canvasIndex] * multiplier);
  }

  canvasholderTag = document.querySelector('div.canvas-holder');
  canvas.parent(canvasholderTag);
  layers();
  mydraw();
  }

  function layers(){
    layer1.colorMode(HSL);
    layer1.background(50,100,100);
    layer1.stroke(fxrand() * 360, 50, 50, 0.6);
    layer1.strokeWeight(multiplier/200);
    for(let x = 0; x < width + 1; x = x + 20){
      for(let y = 0; y < height + 1; y = y + 20){
        layer1.rect(x,y,20,20);
      }
    }
    image(layer1, 0, 0);
}

function mydraw(){

  numCols = Math.floor(fxrand() * 8) + 2;
  numRows = Math.floor(fxrand() * 8) + 2;

  randomW = Math.floor(fxrand() * numCols) + 2;
  randomH = Math.floor(fxrand() * numRows) + 2;
  fW = width/randomW;
  fH = height/randomH;

  for(let x = 0; x < width; x += width/randomW){
      for(let y = 0; y < height; y += height/randomH){
          let v = createVector(x, y);
          xy.push(v);
          
          let w = createVector(fW, fH);
          xy_frames.push(w);
      }
      randomH = Math.floor(fxrand() * numRows) + 2;
      fH = height/randomH;
  }
  grid();
  lines();
}

function grid(){

  for(let i = 0; i < xy.length; i++){
    noFill();
    noStroke();
    rect(xy[i].x, xy[i].y, xy_frames[i].x, xy_frames[i].y);
    translate(xy[i].x, xy[i].y);
  } 
}

function lines(){

  initIndex = Math.floor(fxrand() * 4);
  let colorHueIndex = Math.floor(fxrand() * colorHue.length);

  for(let i = 0; i < xy.length; i++){  
    let colMult = 10;
    let colorHueInnerindex =Math.floor(fxrand() * 3) ;
    let colHue = colorHue[colorHueIndex][colorHueInnerindex];
    
    m = 15;

    if(randomW > 3 || randomH > 3){
      m = 10;
    }

    let threadCount = 550 + Math.floor(fxrand() * 200);
  
    for (let b = 0; b < threadCount; b++) {
      
      let x = [
        [ xy[i].x + m + fxrand() * (xy_frames[i].x - 2 * m), xy[i].x + m + fxrand() * m],
        [ xy[i].x + m + fxrand() * (xy_frames[i].x - 2 * m), xy[i].x + xy_frames[i].x - m - fxrand() * m],
        [ xy[i].x + m + fxrand() * (xy_frames[i].x - 2 * m), xy[i].x + m + fxrand() * (xy_frames[i].x - 2 * m)],
        [ xy[i].x + m + fxrand() * m, xy[i].x + m + fxrand() * m],   
      ];
      
      let y = [
        [ xy[i].y + m + fxrand() * m, xy[i].y + m + fxrand() * (xy_frames[i].y - 2 * m)],
        [ xy[i].y + m + fxrand() * m, xy[i].y + m + fxrand() * (xy_frames[i].y - 2 * m)],
        [ xy[i].y + m + fxrand() * m, xy[i].y + m + fxrand() * m],
        [ xy[i].y + m + fxrand() * (xy_frames[i].y - 2 * m),  xy[i].y + m + fxrand() * (xy_frames[i].y - 2 * m)],
      ];
      
      initIndexes.push(initIndex);
      initIndexinner = Math.floor(fxrand() * 2);

      let speedX = -1 + fxrand() * 2.1;
      let speedY = -1 + fxrand() * 2.1;
      let stopX = xy[i].x;
      let stopY = xy[i].y;
      let frameW = xy_frames[i].x + xy[i].x;
      let frameH = xy_frames[i].y + xy[i].y;
      let h = colHue * colMult + fxrand() * 11 ;
      let s = fxrand() * 30 + 30;
      let l = fxrand() * 10 + 30;
      if (colHue == 0){
        s = fxrand() * 20;
        l = fxrand() * 20;
      }
  
      if (colHue == 34 || colHue == 35 || colHue == 36){
        s = 80;
      }
      let a = 0.3 + fxrand() * 0.8 ;
      let w = 0.3 + fxrand() * 0.5 ;

      sampling = 0.005;
      walkers.push(new Walker(x[initIndex][initIndexinner], y[initIndex][initIndexinner], speedX, speedY, stopX, stopY, frameW, frameH, h, s, l, a, w));
    }
  }
}

function draw(){
  drawlines();
}

function drawlines(){
  for(let i = 0; i < xy.length; i++){
    for(let b = 0; b < walkers.length; b++){
      if (!walkers[b].space()) {
          if(initIndexes[b] == 0){
              walkers[b].velocity();
          
            } else if (initIndexes[b] == 1){
              walkers[b].velocityb();
            
            } else if (initIndexes[b] == 2){
              walkers[b].velocityc();
        
            } else if (initIndexes[b] == 3){
            walkers[b].velocityd();

            }
          
          walkers[b].color();
          walkers[b].weightW();
          walkers[b].move();
          walkers[b].draw();
       }  
    }
  }
}

function keyPressed(){
  if(key === "s" || key === "S"){
    saveCanvas("Arraigos2-" + width * pd + "x" + height * pd, "png");
  }
  if(key ==="1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7"){
    clear();
    xy.length = 0;
    pd = 1 * key;
    pixelDensity(pd);
    fxrand = sfc32(
      ...fxhashTrunc
        .match(new RegExp(".{" + ((fxhash.length / 4) | 0) + "}", "g"))
        .map((h) => b58dec(h))
    );
    canvasSetup();
  }
}

