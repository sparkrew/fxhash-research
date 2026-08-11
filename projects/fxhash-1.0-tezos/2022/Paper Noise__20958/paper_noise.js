// PAPER NOISE

var seed = 0;
var denistySeed = fxrand()*100
var SIZE = 0;

var palette = [];
var totalLines = 32;
var lineSpace = 30;

var themes = ["Roses","Leaves","Rain","Snow","Thunder"];
var signs = ["Druid","Cleric","Sorcerer"];
var curTheme = "Roses";
var curSign = "Druid";

var side;
var sides = ["Front","Back"]
var density;

var frameSize;
var pageWidth;
const period = fxrand();

function preload(){
  seed=Math.floor(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); // randomize the seed
  noiseSeed(seed);  // randomize the noise

  side = getSide();
  curTheme = getTheme();
  density = getDensity();
  console.log("Palette: " + curTheme);
  console.log("Side: " + side);
  console.log("Density " + density);
}

function setup() {
  pixelDensity(1);
  noLoop();
  generateRandomData();
  drawWindow();
}

function drawMoon(i) {
  stroke(color(red(palette[2]),green(palette[2]),blue(palette[2]),randomData[i][3]*200));
  if(randomData[8][0] > 0.4){
    stroke(color(randomData[i][0]*255,randomData[i][1]*255,randomData[i][2]*255,randomData[i][3]*200));
  }
  strokeWeight(4);
  noFill();
  let x = map(randomData[i][0],0,1,width/3,width-width/3);
  let y = randomData[i][1]*height;
  let r = randomData[i][2] * width/3+width/3;
  ellipse(x, y, r, r);
}

function drawTriangle(i){
  stroke(color(red(palette[2]),green(palette[2]),blue(palette[2]),randomData[i][3]*200));
  if(randomData[8][0] > 0.4){
    stroke(color(randomData[i][1]*255,randomData[i][1]*255,randomData[i][2]*255,randomData[i][3]*200));
  }
  strokeWeight(4);
  noFill();
  let x = map(randomData[i][0],0,1,width/3,width-width/3);
  let y = randomData[i][1]*height;
  let r = randomData[i][2] * width/3+width/3;
  triangle(x, y, x+(r/2),y+r,x-(r/2),y+r);
}

function drawSquare(i){
  let sqc =  color(red(palette[2]),green(palette[2]),blue(palette[2]),randomData[i][3]*200);
  if(randomData[9][0] > 0.4){
    sqc = color(randomData[i][2]*255,randomData[i][1]*255,randomData[i][2]*255,randomData[i][3]*255);
  }
  stroke(sqc);
  strokeWeight(4);
  noFill();
  let x = map(randomData[i][0],0,1,width/3,width-width/3);
  let y = map(randomData[i][0],0,1,height/3,height-height/3);
  let r = randomData[i][2] * width/3+width/3;
  rect(x, y, r, r);
  drawingContext.shadowBlur = 0;
}

function mixColors(){

  // color scheme roses
  let peach = color(226,170,170);
  let rose = color(220,83,82);

  // color scheme rain
  let purple = color(186,143,173);
  let hotPink = color(255,127,162);
  let teal = color(175,187,185,100);

  //color scheme leaves
  let paleYellow = color(249,215,161);
  let limeGreen = color(268,190,132);
  let hunterBlue = color(124,148,181);

  // thunder
  let marble = color(166,188,183);
  let skyBlue = color(166,188,183);
  let charcoal = color(60,60,60);

  //rando
  let color1 = color(randomData[0][0]*255,randomData[0][1]*255,randomData[0][2]*255);
  let color2 = color(randomData[1][0]*255,randomData[1][1]*255,randomData[1][2]*255);
  let color3 = color(randomData[2][0]*255,randomData[2][1]*255,randomData[2][2]*255);

  palette[0] = peach;
  palette[1] = rose;
  palette[2] = teal;
  palette[3] = purple;
  palette[4] = paleYellow;
  palette[5] = limeGreen;
  palette[6] = skyBlue;
  palette[7] = charcoal;
  palette[8] = marble;
  palette[9] = hunterBlue;
  palette[10] = color1;
  palette[11] = color2;
  palette[12] = color3;
}

function paint(){

  if (curTheme === "Roses"){
    c1 = palette[0];
    c2 = palette[1];
  } else if (curTheme === "Leaves"){
    c1 = palette[5];
    c2 = palette[4];
  } else if (curTheme === "Rain"){
    c1 = palette[2];
    c2 = palette[3];
  } else if (curTheme === "Snow"){
    c1 = palette[6];
    c2 = palette[7];
  } else if (curTheme === "Thunder"){
    c1 = palette[8];
    c2 = palette[9];
  } else if (curTheme === "Chaos"){
    c1 = palette[10];
    c2 = palette[11];
  }

  setGradient(SIZE/6, 0, width-(SIZE/3), height, c1, c2, Y_AXIS);

  addPaperLines();

  //texture
  let textureAmount = map(randomData[7][0],0,1,100,500);
  for(let i=0; i<textureAmount; i++){
    noFill();
    stroke(0);
    strokeWeight(SIZE/100);
    let x1 = map(randomData[i][0],0,1,0,100);
    let y1 = map(randomData[i][1],0,1,0,100);
    let x2 = map(randomData[i][2],0,1,0,100);
    let y2 = map(randomData[i][3],0,1,0,100);
    line(x1*SIZE,y1*SIZE,x2*SIZE,y2*SIZE);
  }


  if(randomData[0][1] > 0.1){
    addTexture();
  }
  
  if(randomData[0][0] > 0.9){
    createNoise(90,120);
  } 

  if(randomData[0][2] > 0.1){
    createStatic(map(randomData[0][0],0,1,1,200));
  }

  createStatic(map(randomData[0][0],0,1,100,200));


  let totalFields = map(randomData[1][0],0,1,6,9);
  let maxd = 500;
  let mind = 200;
  if(density === "Medium"){
    maxd = 300;
    mind = 250;
    totalFields = map(randomData[1][0],0,1,3,6);
  } else if (density === "Low"){
    maxd = 250;
    mind = 100;
    totalFields = map(randomData[1][0],0,1,1,3);
  }

  for (let i = 0; i < totalFields; i++){
    let startX = randomData[i][0] * 300;
    let startY = randomData[i][1] * 300;
    let fieldWidth = map(randomData[i][2],0,1,mind,maxd);
    let fieldHeight = map(randomData[i][3],0,1,mind,maxd);
    push()
    rotate(map(randomData[i][0],0,1,-.40,0.25));
    paintField(startX,startY,fieldWidth,fieldHeight,i);
    pop();
  }

  lineArt();

  fill(0);
  noStroke();

  if(randomData[77][0] > 0.5){
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(255);
  }

  drawMoon(10);
  if(randomData[0][1]<0.2){
    drawMoon(11);
  }

  let totalSqr = map(randomData2[9][0],0,1,1,5);
  for(let i=0;i<totalSqr;i++){
    drawSquare(99+i);
  }
 
  drawTriangle(13);

  drawingContext.shadowBlur = 0;
 
  drawDashedLine();

  for(let i=0;i<50;i++){
    if(randomData2[i][0]>0.45){
      squiggles(i);
    }
  }
  squiggles(0);


  fill(0);
  noStroke();
  rect(0,0,SIZE/6,height);
  rect(width-SIZE/6,0,SIZE/6,height);

  addHoles();


  for(let i=0;i<20;i++){
    noiseTexture(1, "RGBA(0,0,0,0.05)");
    noiseTexture(1, "RGBA(255,255,255,0.1)");
  }

  fxpreview();
}

function noiseTexture(weight, c){
  stroke(c);
  strokeCap(PROJECT);
  strokeWeight(weight);
  for(let x = 0; x < width; x += 20){
    for (let y = 0; y < height; y += 20){
      point(x - random(-50,50), y + random(-50,50));
    }
  }
}

function squiggles(k=0){
  let segments;
  let length;
  let x;
  let y;

  length = width;
  segments = map(randomData[k][2],0,1,2,6);
  x = randomData[k][3]*width/3;
  y = map(randomData[k][0],0,1,0,height);

  beginShape();
  noFill();
  strokeWeight(width/200);
  strokeCap(ROUND);
  curveVertex(x,y);

let points = [{x: x, y: y}]

for (let i=0;i<segments;i++){
  let lineColor = color(randomData[i+k][0]*255,randomData[i+k][1]*255,randomData[i+k][2]*255,randomData[i+k][3]*50);
  stroke(lineColor);
  yRand = map(randomData[i+k][0],0,1,0,height/4);
  curveVertex(x += length / segments, y += yRand);
  points.push({x: x, y: y})
}

endShape();

}

function addTexture(){
  let totalLines = randomData[4][0]*1000;
  strokeWeight(width/800);
  for(let i = 0; i < totalLines; i++){
    let sc = color(randomData[i][0]*255,randomData[i][1]*255,randomData[i][2]*255,randomData[i][3]*100);
    stroke(sc);
    line(randomData[i][0]*width,randomData[i][1]*width,randomData[i][2]*height,randomData[i][3]*height);
  }
}

function addPaperLines(){
  stroke(palette[2]);
  strokeWeight(SIZE/200);
  if(side === "Front"){
    line(frameSize + pageWidth/6,0,frameSize + pageWidth/6,height);
  } else{
    line(width-frameSize-pageWidth/6,0,width-frameSize-pageWidth/6,height);
  }

  for(let i = 0; i < totalLines; i++){
    line(0,SIZE/9+i*lineSpace,width,SIZE/9+i*lineSpace);
  }
}

function addHoles(){
  noStroke();
  let x = width/5;
  let holeSize = SIZE/25;
  if(side === "Back"){
    x = width - width/5;
  }
  for(let i = 0; i < 3; i++){
    ellipse(x,height/9+i*height/2.5,holeSize,holeSize);
  }
}

function createNoise(lower=18,upper=20){
  noStroke();

  let r = map(randomData[0][0],0,1,SIZE/500,SIZE/100);
  let z = map(randomData[0][1],0,1,SIZE/300,SIZE/200);
  for(let i = 0; i < height; i+=3){
    for(let j = 0; j < width; j+=3){
      var offset = 0.005;
      var n = noiseData[i*TOTAL_DATA+j];
      let v = n*255;
      fill(color(v,v,v,map(randomData[i][0],0,1,lower,upper)));
      rect(i*r,j*r,z);
    }
  }
}

function lineArt(){
  if (randomData[0][0] < 0.7){
    stroke(0,100);
  } else {
    stroke(palette[2]);
  }
  strokeWeight(SIZE/200);
  for(let i = 0; i < randomData[99][0]*3; i++){
    let x1 = randomData[1][0]*width;
    let y1 = randomData[1][1]*height;
    let x2 = randomData[1][2]*width;
    let y2 = randomData[1][3]*height;
    line(x1,y1,x2,y2);
  }
}

function drawDashedLine(){
  let x1 = 0;
  let y1 = randomData[2][0]*SIZE;
  let x2 = randomData[2][1]*SIZE;
  let y2 = randomData[2][2]*SIZE;

  stroke(0);
  strokeWeight(4);

  setLineDash([SIZE/50, SIZE/20, SIZE/5, SIZE/20]); //another dashed line pattern
  line(x1, y1, x2, y2);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function paintField(startX,startY,fieldWidth,fieldHeight,iter){

  let fc = c2;
  if(randomData[0][0] < 0.4){
    fc = color(map(randomData[iter][1],0,1,0,40),map(randomData[iter][2],0,1,200,255));
  } 

  fill(fc);
  let r = map(randomData[iter][0],0,1,SIZE/600,SIZE/100);
  let z = map(randomData[iter][1],0,1,SIZE/300,SIZE/200);
  for(let i = startY; i < startY+fieldHeight; i+=2){
    for(let j = startX; j < startX+fieldWidth; j+=2){
      let n = randomData[int(i)][0] + randomData2[int(j)][0];
      let v = n/2*255;
      if(n>0.75){
        rect(j*r,i*r,z);
      }
    }
  }
}

function createStatic(threshold){
  noStroke();
  let r = map(randomData[0][0],0,1,SIZE/200,SIZE/100);
  let z = map(randomData[0][1],0,1,SIZE/20,SIZE/10);
  for(let i = 0; i < 300; i+=3){
    for(let j = 0; j < 200; j+=3){
      let n = noiseData[i*TOTAL_DATA+j];
      let v = n*255;
      if(v>threshold){
        fill(n*50,n*50);
        rect(j*r,i*r,SIZE/20);
      }
    }
  }
}

function drawWindow(){
  SIZE = window.innerWidth;

  if (window.innerHeight < window.innerWidth){
    SIZE = window.innerHeight;
  } 

  lineSpace = SIZE/totalLines;
  frameSize = SIZE/6;
  pageWidth = SIZE-(frameSize*2);

  createCanvas(SIZE, SIZE);
  strokeWeight(SIZE/400);
  paintBackground();
  mixColors();
  paint();
}

function paintBackground(){
  fill(0);
  rect(0,0,width,height);
  noStroke();
  let c1 = color("white");
  let c2 = color("black");

  setGradient(0, 0, width, height, c1, c2, Y_AXIS);
}

window.addEventListener('resize',  windowResized);

function windowResized() {
  drawWindow();
}

function getSide(){
  let num = 0;
  for (let i = 0; i < 8; i++){
    if (parseInt(fxhash[i])){
      num += fxhash[i];
    }
  }
  if (num%2 === 0){
    return sides[0];
  } else return sides[1];
}

function getDensity(){
  if(denistySeed > 70){
    return "High";
  } else if (denistySeed > 50){
    return "Medium";
  } else return "Low";
}

function getTheme(){
  let num = 0;
  for (let i = 0; i < 16; i++){
    if (parseInt(fxhash[i])){
      num += fxhash[i];
    }
  }

  if (num > 5000){
    return "Roses";
  } else if (num > 200){
    return "Leaves";
  } else if (num > 80){
    return "Snow";
  } else if (num > 50){
    return "Thunder";
  } else if (num > 20){
    return "Rain";
  } else {
    return "Chaos";
  }
}

window.$fxhashFeatures = {
  "Palette": getTheme(),
  "Side": getSide(),
  "Density": getDensity(),
}