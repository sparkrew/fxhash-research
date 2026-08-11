let bg_col, colors;
let ditherType = 'floydsteinberg';
let layer3_Riso;
let mode;
let r=5;
let rRandom;
let borderSize;

function getBorderSize(borderSize) {
  if (borderSize < 40) return "WIDE" 
  if (borderSize < 90) return "NARROW"
  else return "NONE"
}
function getTheme(themeSelector) {
  if (themeSelector < 8) return "1" 
  if (themeSelector < 20) return "2"
  if (themeSelector < 33) return "3"
  if (themeSelector < 45) return "4"
  if (themeSelector < 60) return "5"
  if (themeSelector < 80) return "6"
  if (themeSelector < 82) return "7"
  else return "8"
}
function getColor(mode) {
  if (mode == 0) return "WINE"
  if (mode == 1) return "STEEL" 
  if (mode == 2) return "SLATE"
  if (mode == 3) return "CHARCOAL"
  if (mode == 4) return "GRANITE"
  if (mode == 5) return "BURGUNDY"
  if (mode == 6) return "FEDERALBLUE"
  if (mode == 7) return "BLACK"
  if (mode == 8) return "INDIGO"
  if (mode == 9) return "MIDNIGHT"
  if (mode == 10) return "SPRUCE"
  if (mode == 11) return "PLUM"
  if (mode == 12) return "DARKMAUVE"
  if (mode == 13) return "SEABLUE"
}

function randn_bm() {
  let u = 0, v = 0;
  while(u === 0) u = fxrand(); //Converting [0,1) to (0,1)
  while(v === 0) v = fxrand();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  return num
}

function spiralRand(min, max) {
  return fxrand() * (max - min) + min;
}
function spiralRand2(min, max) {
  return fxrand() * (max - min) + min;
}
function offsetRand(min, max) {
  return fxrand() * (max - min) + min;
}
function offsetRand2(min, max) {
  return fxrand() * (max - min) + min;
}
function offsetRand3(min, max) {
  return fxrand() * (max - min) + min;
}
function outreachRand(min, max) {
  return fxrand() * (max - min) + min;
}
function outreachRand2(min, max) {
  return fxrand() * (max - min) + min;
}
function pointRand(min, max) {
  return fxrand() * (max - min) + min;
}
function pointRand2(min, max) {
  return fxrand() * (max - min) + min;
}
function pointRand3(min, max) {
  return fxrand() * (max - min) + min;
}

function setup() {

  createCanvas(1000, 1000);

  noLoop();

  borderSize = (fxrand() * 100);
  themeSelector = (fxrand() * 100);
  modeSelector=(fxrand() * 100);

  if (modeSelector < 1){
    mode=0; 
  } else if (modeSelector < 3){
    mode=1; 
  } else if (modeSelector < 7){
    mode=2; 
  } else if (modeSelector < 8){
    mode=3; 
  } else if (modeSelector < 10){
    mode=4; 
  } else if (modeSelector < 20){
    mode=5; 
  } else if (modeSelector < 30){
    mode=6; 
  } else if (modeSelector < 50){
    mode=7; 
  } else if (modeSelector < 70){
    mode=8; 
  } else if (modeSelector < 80){
    mode=9; 
  } else if (modeSelector < 90){
    mode=10; 
  } else if (modeSelector < 95){
    mode=11; 
  } else if (modeSelector < 99){
    mode=12; 
  } else {
    mode=13; 
  } 

  window.$fxhashFeatures={
    "Border": getBorderSize(borderSize),
    "Theme": getTheme(themeSelector),
    "Color": getColor(mode),
  }

  col=[
       ['WINE'],
       ['STEEL'], 
       ['SLATE'], 
       ['CHARCOAL'],
       ['GRANITE'],
       ['BURGUNDY'],
       ['RISOFEDERALBLUE'],
       ['BLACK'],
       ['INDIGO'],
       ['MIDNIGHT'],
       ['SPRUCE'],
       ['RAISIN'],
       ['DARKMAUVE'],
       ['SEABLUE']]
       ;
  theLayer3=createGraphics(1000, 1000);
  colors=[];
  colors.push(color(0))
}

function layer3(){

   theLayer3.background(255);

   drawCurledEllipse_3();

   if (borderSize < 40){
   theLayer3.fill(bg_col);
   theLayer3.noStroke();
   theLayer3.rect(0, 0, 50, height);
   theLayer3.rect(0, 0, width, 50);
   theLayer3.rect (width-50, 0, 50, height);
   theLayer3.rect(0, height-50, width, 50)
  } else if (borderSize < 90){
   theLayer3.fill(bg_col);
   theLayer3.noStroke();
   theLayer3.rect(0, 0, 20, height);
   theLayer3.rect(0, 0, width, 20);
   theLayer3.rect (width-20, 0, 20, height);
   theLayer3.rect(0, height-20, width, 20)
  } else {
   theLayer3.fill(bg_col);
  }
 
}

function drawCurledEllipse_3(){

  theLayer3.push();
  theLayer3.rectMode(CENTER)
  theLayer3.noFill();

 
  theLayer3.translate(500, 500);

  let spiral=int(spiralRand(4,6));
  let spiral2=spiralRand(1,2);

  let offset=int(offsetRand(90, 200));
  let offset2=int(offsetRand2(180, 190));
  let offset3=int(offsetRand3(90, 100));

  let outreach=int(outreachRand(2, 10));
  let outreach2=int(outreachRand2(10,20));

  let pointRandom=pointRand(7.5,8);
  let pointRandom2=pointRand2(3,8);
  let pointRandom3=pointRand3(1,2);

//////////////////////////THEME 1

  if (themeSelector < 8) {
  for (let j=0; j<offset; j+=PI/spiral){
  theLayer3.push();
  theLayer3.rotate(j+offset);
  theLayer3.translate(offset, j);
  for (let i=0; i<offset/outreach*PI; i+=radians(1)){
  let y=tan(i)* spiral;
  theLayer3.point(y*j, i+i);  
  }
  theLayer3.pop();
  } 
  theLayer3.pop();
  
//////////////////////////THEME 2

}    
else if (themeSelector < 20) {

  for (let j=0; j<offset2; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset2);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset2/outreach2*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(i*y, y-i); 
  }
  theLayer3.pop();
  }
  theLayer3.pop();

//////////////////////////THEME 3

}   
 else if (themeSelector < 33) {

  for (let j=0; j<offset2; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset2);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset2/outreach2*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(i*y, y*pointRandom2); 
  }
  theLayer3.pop();
  }
  theLayer3.pop();

}  

//////////////////////////THEME 4 

else if (themeSelector < 45) {

  for (let j=0; j<offset2; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset2);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset2/outreach*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(y* i, y*pointRandom3);
  }
  theLayer3.pop();
  }
  theLayer3.pop();
}  

//////////////////////////THEME 5

else if (themeSelector < 60) {

  for (let j=0; j<offset2; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset2);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset2/outreach*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(y*i, pointRandom+y); //11
  theLayer3.point(i*i, y); 
  }
  theLayer3.pop();
  }
  theLayer3.pop();
}  

//////////////////////////THEME 6

else if (themeSelector < 80) {

  for (let j=0; j<offset2; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset3/outreach*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(y*i, (offset*outreach*PI)-y); //11
  theLayer3.point(y*i, y* j); //nice
  }
  theLayer3.pop();
  }
  theLayer3.pop();
}  

//////////////////////////THEME 7

else if (themeSelector <82) {

  for (let j=0; j<offset3+pointRandom; j+=PI/spiral){
  theLayer3.push();
  theLayer3.rotate(j+offset);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset3/outreach*PI; i+=radians(1)){
  let y=tan(i)* spiral2;
  theLayer3.point(i*y, y-i); //nice
  }
  theLayer3.pop();
  }
  theLayer3.pop();
}  

//////////////////////////THEME 8

else if (themeSelector <= 100) {
  for (let j=0; j<offset; j+=PI/spiral2){
  theLayer3.push();
  theLayer3.rotate(j+offset2);
  theLayer3.translate(offset2, j);
  for (let i=0; i<offset3*PI; i+=radians(1)){
  let y=sin(i)* spiral;
  theLayer3.point(y, i* spiral); 
  theLayer3.point(i*y, y-i);
  }
  theLayer3.pop();
  }
  theLayer3.pop();
}  

}


function draw() {

  bg_col="#e3dfd7";
  layer3_Riso=new Riso(col[mode][0]);
  background(bg_col);
  clearRiso();
  layer3();
  let dithered3 = ditherImage(theLayer3, ditherType, 100);
  layer3_Riso.image(dithered3, 0, 0);
  drawRiso();

}
