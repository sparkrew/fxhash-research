let drawers = [];
let canv;
let bgc = Math.floor(fxrand()*30);
let N = 15, M;

function setup() {
  let canvasSize = 3000;
  canv = createCanvas(canvasSize, canvasSize);
  rectMode(CENTER);
  W = width/3;
  M = fxrand()*35 + 5;
  H = int(height/M);
  HPAD = H / 10;
  MAXDEPTH = height/6;
  MINDEPTH = MAXDEPTH/2;
  let px = width/2; let py = 0
  for(let i = 1; i < M-3; i++){
    //drawers.push(new Drawer(px,py,fxrand()-0.5,fxrand()-0.5,10));    
    drawers.push(new Block(px+((fxrand()-0.5)*px/2.5),py + i*H+HPAD,fxrand()*W+W/5,H,fxrand()*MAXDEPTH+MINDEPTH, int(fxrand()*90)));    
  }
  frameRate(60);
  smooth();
}

let amm = fxrand()+0.3;

function draw() {
  background(bgc);
  noStroke();
  fill(255,180,0,50);
  drawers.forEach(dr => {
    dr.update();
    dr.displayShadow();
  });

  drawers.forEach(dr => {
    dr.displaySolid();
  })

  if(millis() > 1000){
    noLoop();
    loadPixels();
    for (let i = 0; i < pixels.length; i+=3) {
      if((pixels[i] > 15 && pixels[i+1] > 15)||(pixels[i+1] > 15 && pixels[i+2] > 15)||(pixels[i] > 15 && pixels[i+2] > 15)){
        pixels[i] = pixels[i]+pixels[i]*(fxrand()-0.5)*amm;
        pixels[i+1] = pixels[i+1]+pixels[i+1]*(fxrand()-0.5)*amm;
        pixels[i+2] = pixels[i+2]+pixels[i+2]*(fxrand()-0.5)*amm;
      }
    }
    updatePixels();
    fxpreview();
  }

}
