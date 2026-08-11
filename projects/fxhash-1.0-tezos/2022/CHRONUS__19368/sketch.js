let seed = fxrand() * 1e999;

r = fxrand();
p = fxrand();
q = fxrand();

paleta0 = ["#0D0D0D",  "#3A3F47",  "#3E3E3E",  "#B2301D"]; //VASCAI 10 %
paleta1 = ["#222222",  "#5E82A3",  "#A5A5A5",  "#234758"]; //SHADOW SKY 10%
paleta2 = ["#0A0909",  "#AD781C",  "#DEA039",  "#333333"]; //BURNT GOLDEN 10%  
paleta3 = ["#B81F1F",  "#222222",  "#55693E",  "#427929"]; //LUSHTEMPLE 10%
paleta4 = ["#222222",  "#6f4518",  "#252321",  "#B86F04"]; //BRONZE 10%
paleta5 = ["#415926",  "#ABB240",  "#575D14",  "#97BB0C"]; //LEMONADE 10%
paleta6 = ["#1B1919",  "#7A0909",  "#474444",  "#53432E"]; //RED BROWNED 10%
paleta7 = ["#222222",  "#A5670B",  "#607D8B",  "#1A586E"]; //REC 8.5%
paleta8 = ["#024D57",  "#55A7A3",  "#0D0D0D",  "#217268"]; //TIF 10% 
paleta9 = ["#747B5E",  "#519A54",  "#252120",  "#64523C"]; //SOLDIER 10%
paleta10 = ["#ED3900", "#06675E",  "#185382",  "#6C0000"]; //80'S 2.5%
paleta11 = ["#B8AE33", "#5E8F26",  "#ACA70C",  "#195F9C"]; //BR 2.5%
paleta12 = ["#222222", "#FFFFFF",  "#292929",  "#E4E4E4"]; //BW 1.5%


paleta = [paleta0, paleta1, paleta2, paleta3, paleta4, paleta5,  paleta6, paleta7,paleta8,paleta9,  paleta10, paleta11,paleta12];

ddorn = fxrand();
dorn = ddorn > 0.875 ? 0 : ddorn > 0.75 ? 1 : ddorn > 0.65 ? 2 : ddorn > 0.6 ? 3 : ddorn > 0.475 ? 4 : ddorn > 0.39 ? 5 : ddorn > 0.315 ? 6 : ddorn > 0.24 ? 7 : ddorn > 0.165 ? 8 : ddorn > 0.09 ? 9 : ddorn > 0.04 ? 10 : ddorn > 0.015 ? 11 : 12;

pad = fxrand();
padroes = pad > 0.25 ? 0 : pad > 0.05 ? 1 : 2;

cor = paleta[dorn];

cor1 = rnd_int(0,3)
if (cor1 == 0){cor2 = 1;cor3 = 2; cor4 = 3} 
if (cor1 == 1){cor2 = 2;cor3 = 3; cor4 = 0}
if (cor1 == 2){cor2 = 3;cor3 = 0; cor4 = 1}
if (cor1 == 3){cor2 = 0;cor3 = 1; cor4 = 2}

long = fxrand()

dstop = long > 0.7 ? rnd_int(200, 250) : long > 0.2 ? rnd_int(150, 200) : rnd_int(100, 150);
dstop1 = long > 0.7 ? 0 : long > 0.2 ? 1 : 2;


fragA = rnd_int(200,150);
fragB = rnd_int(150,200); 

fre = fragA > 200 ? 2 : fragA > 100 ? 1 : 0

gradrot = rnd_int(0,5)

inv = fxrand()

sat1 = fxrand();
sat = sat1 > 0.75 ? 0 : sat1 > 0.25 ? 1 : 2;

let x1 = 0; x2 = 0; y1 = 0; y2 = 0;

blur = fxrand();
bblur = blur > 0.75 ? 15 : 10;

can2 = fxrand();
can1 = can2 > 0.75 ? 1.25 : can2 > 0.25 ? 1.5 : 1.75;


if (can1 == 1.25) {
  formato = 0;
}
if (can1 == 1.5) {
  formato = 1;
}
if (can1 == 1.75)  {
  formato = 2;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  let can = 1080;
  createCanvas(can / can1, can);

  xx = width;
  yy = height;
  colorMode(HSB,360,100,100,100)
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  randomSeed(seed);
  noiseSeed(seed);
  // frameRate(60)
  
  push(); 
  switch(gradrot){
  case 0:
  x1 = 0; y1 = 0; x2 = xx; y2 = yy;
  break;
  case 1:
  x1 = xx; y1 = yy; x2 = 0; y2 = 0;
  break;
    case 2:
  x1 = 0; y1 = yy/2; x2 = xx; y2 = yy/2;
  break;
  case 3:
  x1 = xx; y1 = yy/2; x2 = 0; y2 = yy/2;
  break;
  case 4:
  x1 = 0; y1 = yy; x2 = xx; y2 = 0;
  break;
  case 5:
  x1 = xx; y1 = 0; x2 = 0; y2 = yy;
  break;
  default:
  }
      
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  
  if (frameCount > dstop - dstop && frameCount < dstop) {
    push();
    noStroke()
    fill("#1F1F1F");
    blendMode(DIFFERENCE);
    molho();
    fill(250);
    molho1();
    pop();
  }
  
  if (frameCount < dstop-7) {drawingContext.filter = 'blur(5px)'}
  else {drawingContext.filter = 'blur(3px)'}
  

  if (frameCount == dstop) {
    push();
    
   if (sat == 0){drawingContext.filter = 'saturate(100%)'}
   else if (sat == 1){drawingContext.filter = 'saturate(150%)'}
    else (drawingContext.filter = 'saturate(200%)')
    
    if (dorn == 12) {blendMode(DIFFERENCE)}
    else {blendMode(OVERLAY)}
    
    filter(GRAY);
    COR();
    pop();
      } 
 
  if (frameCount == dstop + 1) {
   fxpreview(); noLoop();
  }
}

window.$fxhashFeatures = {
  CANVAS: getFORMATO(formato),
  COLOR_ZONE: getZONE(dorn),
  RUN: getRun(dstop1),
  TEXTURE: getTexture(padroes),
  SATURATION: getSaturation(sat),

};

function getFORMATO(formato) {
  if (formato == 0) return "4x5"; //
  if (formato == 1) return "2x3"; //
  if (formato == 2) return "4x7";
}

function getZONE(dorn) {
  if (dorn == 0) return "VASCAI";
  if (dorn == 1) return "SHADOW SKY";
  if (dorn == 2) return "BURNT GOLDEN";
  if (dorn == 3) return "LUSHTEMPLE";
  if (dorn == 4) return "BRONZE";
  if (dorn == 5) return "LEMONADE";
  if (dorn == 6) return "RED BROWNED";
  if (dorn == 7) return "REC";
  if (dorn == 8) return "TIF";
  if (dorn == 9) return "SOLDIER";
  if (dorn == 10) return "80's";
  if (dorn == 11) return "BR";
  if (dorn == 12) return "STEEL";
}

function getRun(dstop1) {
  if (dstop1 == 0) return "🕑🕑🕑";
  if (dstop1 == 1) return "🕑🕑";
  if (dstop1 == 2) return "🕑";
}

function getTexture(padroes) {
  if (padroes == 0) return "⏺️";
  if (padroes == 1) return "➡️";
  if (padroes == 2) return "⬆️";
}

function getSaturation(sat) {
  if (sat == 0) return "100%";
  if (sat == 1) return "150%";
  if (sat == 2) return "200%";
}



console.log({gradrot, dstop, dorn})

// Um salve para comunidade BRxHash.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
