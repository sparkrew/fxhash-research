let objs = [];
let N, isMutant;
let canv;
let canvasSize = 3000;
let pad, padPercent = 15, duration = 8;
const DURATION_SCALE = 30, POPULATION_SCALE = 10;
let col,bgc;

function preload(){
  fxParse();
  if(!isMutant){
    col = color(255);
    bgc = 30;
  }else{
    col = color(207, 7, 99);
    bgc = 255;
  }
}

function setup() {
  canv = createCanvas(canvasSize, canvasSize);
  pad = canvasSize * padPercent/100;
  colorMode(HSB, 360, 100, 100, 100);
  loadObjArr();
  pixelDensity(1);
  frameRate(120);
  noFill();
  background(bgc);
}

let r,fr;

function loadObjArr(){
  r = width/200;
  fr = 1.02;
    for(let i = 0; i<N; i++){
      objs.push(new Mass(pad + fxrand()*(width-pad*2),
                         pad + fxrand()*(height-pad*2),
                         (width/200)*N/30,
                         color(map(i,0,N,255,90),100,100),
                         r,fr));
    }
}

function draw() {
  if(frameCount < duration){
    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = col;
    //background(30);
    for(let i = 0; i<objs.length; i++){
      objs[i].move(objs.filter((value, index) => i !== index));
      objs[i].display();
    }
  }else{
    noLoop();
    fxpreview();
  }
} // draw end

function myBackground(cr,cg,cb,a){
    for(let i = 0; i < width; i+=1){
        stroke(
          (fxrand()+0.5)*cr,
          (fxrand()+0.5)*cg,
          (fxrand()+0.5)*cb,
          a);
        line(i,0,i,height);
      };
}

function fxParse(){
  N = window.$fxhashFeatures["Population"] * POPULATION_SCALE;
  padPercent = window.$fxhashFeatures["Pad"];
  duration = window.$fxhashFeatures["Duration"] * DURATION_SCALE;
  isMutant = window.$fxhashFeatures["Mutant"];
  console.log("Population: ",N," pad: ",padPercent," Duration: ",duration," Mutant: ",isMutant);
}

function keyTyped() {
  if (key === 's') {
    save(canv,'Grey Fungi Wisdom.jpg');
  }
}
