let teyebrow = fxrand();
teye = fxrand();
tbody = fxrand();
tmouth = fxrand();
tACESP = fxrand();
tACESPB = fxrand();
tACESPC = fxrand();
tACESSHEAD = fxrand();
ttipobg = fxrand();
tACESSSPECIAL = fxrand();

neyebrow = teyebrow > 0.8 ? 1 : teyebrow > 0.6 ? 2 : teyebrow > 0.3 ? 3 : teyebrow > 0.05 ? 4 : 5;  

neye = teye > 0.9 ? 1 : teye > 0.75 ? 2 : teye > 0.55 ? 3 : teye > 0.25 ? 4 : teye > 0.15 ? 5 : 6; 

nbody = tbody > 0.95 ? 4 : tbody > 0.88 ? 3 : tbody > 0.78 ? 2 : tbody > 0.68 ? 6 : tbody > 0.55 ? 5 : 1;

nmouth = tmouth > 0.86 ? 1 : tmouth > 0.76 ? 2 : tmouth > 0.61 ? 3 : tmouth > 0.41 ? 4 : tmouth > 0.16 ? 5 : tmouth > 0.8 ? 6 : 7;   

nACESP = tACESP > 0.97 ? 1 : tACESP > 0.94 ? 2 : tACESP > 0.91 ? 3 : tACESP > 0.88 ? 4 : tACESP > 0.86 ? 5 : tACESP > 0.85 ? 6 : tACESP > 0.84 ? 7 : tACESP > 0.83 ? 8 : tACESP > 0.82 ? 9 : tACESP > 0.77 ? 10 : tACESP > 0.74 ? 11 : tACESP > 0.71 ? 12 : tACESP > 0.69 ? 13 : tACESP > 0.67 ? 14 : tACESP > 0.65 ? 15 : tACESP > 0.63 ? 16 : tACESP > 0.61 ? 17 : tACESP > 0.59 ? 18 : tACESP > 0.55 ? 19 : tACESP > 0.51 ? 20 : tACESP > 0.47 ? 21 : tACESP > 0.45 ? 22 : tACESP > 0.43 ? 23 : tACESP > 0.42 ? 24 : tACESP > 0.41 ? 25 : tACESP > 0.39 ? 26 : tACESP > 0.38 ? 27 : tACESP > 0.36 ? 28 : tACESP > 0.34 ? 29 : tACESP > 0.32 ? 30 : tACESP > 0.3 ? 31 : tACESP > 0.25 ? 32 : tACESP > 0.23 ? 33 : tACESP > 0.22 ? 34 : tACESP > 0.19 ? 35 : tACESP > 0.17 ? 36 : tACESP > 0.14 ? 37 : tACESP > 0.12 ? 38 : tACESP > 0.1 ? 39 : tACESP > 0.08 ? 40 : tACESP > 0.06 ? 41 : tACESP > 0.04 ? 42 : tACESP > 0.02 ? 43 : 44;

nACESPB = tACESPB < 0.05 ? 1 : 0;

nACESPC = 0;

mACESPC = nACESPC == 0 ? 0 :nACESPC == 1 ? 1 : nACESPC == 2 ? 2 : nACESPC == 3 ? 3 : nACESPC == 4 ? 4 : nACESPC == 5 ? 5 : nACESPC == 6 ? 6 : nACESPC == 7 ? 7 : nACESPC == 8 ? 8 : nACESPC == 9 ? 9 : nACESPC ==10 ? 10 : nACESPC == 11 ? 11 : nACESPC == 12 ? 12 : nACESPC == 13 ? 13 : nACESPC == 14 ? 14 : nACESPC == 15 ? 15 : nACESPC == 16 ? 16 : nACESPC == 17 ? 17 : nACESPC == 18 ? 18 : nACESPC == 19 ? 19 : nACESPC ==20 ? 20 : nACESPC == 21 ? 21 : nACESPC == 22 ? 22 : nACESPC == 23 ? 23 : nACESPC == 24 ? 24 : nACESPC == 25 ? 25 : nACESPC == 26 ? 26 : nACESPC == 27 ? 27 : nACESPC == 28 ? 28 : nACESPC == 29 ? 29 : nACESPC ==30 ? 30 : nACESPC == 31 ? 31 : nACESPC == 32 ? 32 : 33;

nACESSHEAD = tACESSHEAD > 0.92 ? 13 : tACESSHEAD > 0.84 ? 10 : tACESSHEAD > 0.76 ? 12 : tACESSHEAD > 0.68 ? 11 : tACESSHEAD > 0.63 ? 14 : tACESSHEAD > 0.59 ? 3 : tACESSHEAD > 0.55 ? 2 : tACESSHEAD > 0.51 ? 1 : tACESSHEAD > 0.47 ? 4 : tACESSHEAD > 0.43 ? 5 : tACESSHEAD > 0.38 ? 7 : tACESSHEAD > 0.33 ? 8 : tACESSHEAD > 0.28 ? 9 : tACESSHEAD > 0.23 ? 6 : tACESSHEAD > 0.20 ? 15 : 0; 

tipobg = ttipobg > 0.95 ? 4 : ttipobg > 0.85 ? 3 : ttipobg > 0.7 ? 2 :ttipobg > 0.4 ? 1 : 0;

gra = rnd_int(0,2);

nACESSSPECIAL = tACESSSPECIAL > 0.95 ? 1 : tACESSSPECIAL > 0.92 ? 2 : 0; 

A = fxrand();
B = rnd_int(0,28)
ACESPn1 = [6,7,8,9,14,15,16,17,18,22,23,24,25,26,28,29,32,33,34,35,36,37,38,39,40,41,42,43,44]
C = rnd_int(0,26)
ACESPn2 = [6,7,8,9,10,11,12,13,14,15,16,22,23,25,26,27,28,33,36,37,38,39,40,41,42,43,44]
D = rnd_int(0,28)
ACESPn3 = [1,2,3,4,5,10,11,12,13,19,20,21,22,23,25,26,27,29,31,33,35,36,38,39,40,41,42,43,44]
E = rnd_int(0,14)
ACESHEADn1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
F = fxrand();
if (nmouth == 7) {nACESP = ACESPn3[D]};
if (nACESPB == 1) {nACESP = rnd_int(38,44)};

if (nACESP >= 38 && nACESP <= 44) {nACESSHEAD = 0};

if (nACESP == 24 || nACESP == 32 || nACESP == 34) {nACESSHEAD = 0};
if (nACESP == 24) {nmouth = rnd_int(1,6)};
if (nbody == 4) {nACESP = ACESPn1[B]; nACESSHEAD = 0}
if (nACESP >= 6 && nACESP <= 9) {neye = 0; nmouth = 0; neyebrow = 0}
if (nACESP == 28) {neye = 0; nmouth = 0; neyebrow = 0}
if (nACESSSPECIAL == 2) {nACESP = ACESPn2[C]; neye = rnd_int(1,6);neyebrow = rnd_int(1,5);nmouth = rnd_int(1,7);}

if (nACESSSPECIAL == 2) {nACESP != 1 || nACESP != 2 || nACESP != 3 || nACESP != 4 || nACESP != 5 || nACESP != 19 || nACESP != 20 || nACESP != 21 || nACESP != 30 || nACESP != 31 || nACESP != 34 || nACESP != 35}

if (nACESP == 6 || nACESP == 7 || nACESP == 8 || nACESP == 9 || nACESP == 24  || nACESP == 28 || nACESP == 32 || nACESP == 34 ) {nmouth = rnd_int(1,6)}

if (nACESP == 14 || nACESP == 15 || nACESP == 16) {nmouth = 0}
if (nACESP == 26) {nACESHEAD = ACESHEADn1[E]; nACESSSPECIAL = 0}
if (nACESP == 35) {neye = 0}
if (nACESSHEAD == 0) {nACESPB = 0};
if ((nACESSHEAD >= 1 && nACESSHEAD <= 14 && tACESSHEAD > 0.95) || (nACESP >= 38 && nACESP <= 44 && tACESPB > 0.95)) {nACESPB = 1};

if (nACESSHEAD >= 1 && nACESSHEAD <= 15){nACESP != 24;nACESP != 32; nACESP != 34; nACESP != 38; nACESP != 39; nACESP != 40; nACESP != 41; nACESP != 42; nACESP != 43; nACESP != 44}

if (nACESSSPECIAL == 1) {nACESP != 30; nACESP != 31; nACESP != 32; nACESP != 34};

if (nACESSSPECIAL == 1) {nACESP != 1; nACESP != 2; nACESP != 3; nACESP != 4; nACESP != 5; nACESP != 6; nACESP != 19 || nACESP != 20; nACESP != 21};

if (nmouth == 7 || nACESSHEAD == 7 || nACESSHEAD == 8 || nACESSHEAD == 9 || nACESSHEAD == 15 || nACESSSPECIAL == 1 || nACESSSPECIAL == 2 || neyebrow == 3 || neyebrow == 4) {nACESP != 30};

if (nACESP == 30) {nmouth != 7; nACESSHEAD != 15; nACESSSPECIAL != 1; nACESSSPECIAL != 2; nACESSHEAD != 7; nACESSHEAD != 8; nACESSHEAD != 9 }

if ((nACESP >= 1 && nACESP <= 5) || (nACESP >= 19 && nACESP <= 21) || (nACESP >= 30 && nACESP <= 32) || (nACESP >= 34 && nACESP <= 35)) {nACESSSPECIAL = 0};

if (neyebrow == 4 || neyebrow == 3 || neyebrow == 1){nACESP != 30}
if (nACESP == 30) {neyebrow = 2}

if (nACESP >= 38 && nACESP <= 44 && F > 0.5) {nACESPC = rnd_int(1,33), nmouth != 7 };

if (nACESSSPECIAL == 2 || nACESSSPECIAL == 1 ) {nACESPC = 0; nACESP = 0 }

if (nACESSSPECIAL == 2 || nACESSSPECIAL == 1 ) {nmouth = tmouth > 0.86 ? 1 : tmouth > 0.76 ? 2 : tmouth > 0.61 ? 3 : tmouth > 0.41 ? 4 : tmouth > 0.16 ? 5 : tmouth > 0.8 ? 6 : 7 }

if (nmouth == 7 ) {nACESPC = 0}


if (nACESP == 38 || nACESP == 39 || nACESP == 40 || nACESP == 41 || nACESP == 42 || nACESP == 43 || nACESP == 44) {nACESSHEAD != 1; nACESSHEAD != 2; nACESSHEAD != 3; nACESSHEAD != 4; nACESSHEAD != 5; nACESSHEAD != 6; nACESSHEAD != 7; nACESSHEAD != 8; nACESSHEAD != 9; nACESSHEAD != 10; nACESSHEAD != 11; nACESSHEAD != 12; nACESSHEAD != 13; nACESSHEAD != 14; nACESSHEAD != 15};

if (nACESSHEAD == 1 || nACESSHEAD == 2 || nACESSHEAD == 3 || nACESSHEAD == 4 || nACESSHEAD == 5 || nACESSHEAD == 6 || nACESSHEAD == 7 || nACESSHEAD == 8 || nACESSHEAD == 9 || nACESSHEAD == 10 || nACESSHEAD == 11 || nACESSHEAD == 12 || nACESSHEAD == 13 || nACESSHEAD == 14 || nACESSHEAD == 15) {nACESP != 38; nACESP != 39; nACESP != 40; nACESP != 41; nACESP != 42; nACESP != 43; nACESP != 44}

bgcor = ["#705046","#a98b5a","#fdaf2f","#3d2852","#683973","#d11aff","#64007e","#7e0053","#ff00a9","#e180c0","#bf80e1","#a600ff","#53007f","#7f0c00","#ff1800","#f18377","#f1ad77","#ff6f00","#7d3600","#7d6900","#ffd600","#fae680","#ddfa80","#c3ff00","#93bf05","#05bf1d","#82ff93","#82e4ff","#00c7ff","#000dff","#4876cb","#87904d","#A73B19"]

corx = rnd_int(0,32)
cory = rnd_int(0,32)

function preload() {
eyebrow = loadImage("image/eyebrow0.png");
eye = loadImage("image/eye0.png");
body = loadImage("image/body0.png");  
mouth = loadImage("image/mouth0.PNG");  
ACESP = loadImage("image/ACESP0.PNG"); 
ACESPB = loadImage("image/ACESPB0.PNG"); 
ACESPC = loadImage("image/ACESPC0.PNG"); 
ACESSHEAD = loadImage("image/ACESSHEAD0.PNG");
ACESSSPECIAL = loadImage("image/ACESSSPECIAL0.PNG");
  
eyebrow = loadImage(`image/eyebrow${neyebrow}.png`);
eye = loadImage(`image/eye${neye}.png`);
body = loadImage(`image/body${nbody}.png`);  
mouth = loadImage(`image/mouth${nmouth}.PNG`);  
ACESP = loadImage(`image/ACESP${nACESP}.PNG`); 
ACESPB = loadImage(`image/ACESPB${nACESPB}.PNG`); 
ACESPC = loadImage(`image/ACESPC${nACESPC}.PNG`); 
ACESSHEAD = loadImage(`image/ACESSHEAD${nACESSHEAD}.PNG`);
ACESSSPECIAL = loadImage(`image/ACESSSPECIAL${nACESSSPECIAL}.PNG`);
  }

grada = fxrand() * 360;
gradb = fxrand() * 360;
r1 = fxrand() * 200;
r2 = fxrand() * 200;
r3 = fxrand() * 200;
r4 = fxrand() * 200;

function setup() {
  let canvas = createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth);
  yy = windowWidth > windowHeight ? windowHeight : windowWidth
  colorMode(HSB,360,100,100,100)
  background(0)
  }

function draw() {
  if (frameCount == 1){
  noStroke()
  fill(bgcor[corx])
  if (tipobg == 1){Rgradient()}
  if (tipobg == 2){Lgradient()}
  rect(0,0,width, height)
  if (tipobg == 3){
    push()
    for (var i = 0; i < yy; i += 20){
    for (var j = 0; j < yy; j += 20){
      fill(bgcor[cory])
      ellipse(i,j,7,7)
    }
  }
    pop()
  }
    if (tipobg == 4){
    push()
    for (var i = 0; i < yy; i += 20){
    for (var j = 0; j < yy; j += 20){
      fill(bgcor[cory])
      rect(i,j,50,2)
    }
  }
    pop()
  }
}

if (frameCount == 2){filter(BLUR,3)}

if (frameCount == 3){
  image(ACESSSPECIAL, 0, 0, yy, yy)
  image(ACESSHEAD, 0, 0, yy, yy);
  image(body, 0, 0, yy, yy);
  image(eye, 0, 0, yy, yy);
  image(mouth, 0, 0, yy, yy);
  image(eyebrow, 0, 0, yy, yy);
  image(ACESP, 0, 0, yy, yy)
  image(ACESPB, 0, 0, yy, yy)
  image(ACESPC, 0, 0, yy, yy)
}
if (frameCount == 4){fxpreview(); noLoop()}
}

function windowResized() {
  resizeCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
}

function rnd_btw(a, b) {return fxrand() * (b - a) + a;}
function rnd_btwexp(a, b) {return fxrand() ** 2 * (b - a) + a;}
function rnd_int(a, b) {return ((a = Math.ceil(a)),(b = Math.floor(b)),Math.floor(fxrand() * (b - a + 1)) + a);}

function Lgradient (){
 let gradient = drawingContext.createLinearGradient(width/2-200,height/2-200,width/2+200,height/2+200);
  gradient.addColorStop(0,color(bgcor[corx]));
  gradient.addColorStop(1,color(bgcor[cory]));
  drawingContext.fillStyle = gradient;
}

function Rgradient (){
 let gradient = drawingContext.createRadialGradient(width/2,height/2,0,width/2,height/2,360);
  gradient.addColorStop(0,color(360));
  gradient.addColorStop(0.4,color(360));
  gradient.addColorStop(1,color(bgcor[corx]));
  drawingContext.fillStyle = gradient;
}

function Cgradient (){
 let gradient = drawingContext.createConicGradient(0,width/2,height/2);
  gradient.addColorStop(0,color(bgcor[corx]));
  gradient.addColorStop(0.5,color(bgcor[cory]));
   gradient.addColorStop(1,color(bgcor[corx]));
  drawingContext.fillStyle = gradient;
 }

window.$fxhashFeatures = {BODY:getBODY(nbody), TOP_HAIR:getACESSHEAD(nACESSHEAD), SPECIAL:getACESSSPECIAL(nACESSSPECIAL), EYES:getEYE(neye), MOUTH:getmouth(nmouth), EYEBROW:geteyebrow(neyebrow), FILING:getFILING(nACESP), FILING_1:getFILING1(nACESPB), FILING_2:getFILING2(nACESPC), BG:getTIPOBG(tipobg)}

function getBODY(nbody) {
  if (nbody == 1) return "STANDARD";
  if (nbody == 2) return "SILVER";
  if (nbody == 3) return "GOLD";
  if (nbody == 4) return "ZUMBI";
  if (nbody == 5) return "BLUE";
  if (nbody == 6) return "RED";
}

function getACESSHEAD(nACESSHEAD) {
if (nACESSHEAD == 13) return 'CHOCOLAT';
if (nACESSHEAD == 10) return 'DOLCE DI LATTE';
if (nACESSHEAD == 12) return 'LEMON';
if (nACESSHEAD == 11) return 'SILVER';
if (nACESSHEAD == 14) return 'CHILI';
if (nACESSHEAD == 3) return 'HAT GREEN';
if (nACESSHEAD == 2) return 'HAT BLUE';
if (nACESSHEAD == 1) return 'HAT PURPLE';
if (nACESSHEAD == 4) return 'HAT SILVER';
if (nACESSHEAD == 5) return 'HAT CARAMEL';
if (nACESSHEAD == 7) return 'WIG GREEN';
if (nACESSHEAD == 8) return 'WIG SILVER';
if (nACESSHEAD == 9) return 'WIG BLUE';
if (nACESSHEAD == 6) return 'GOKU';
if (nACESSHEAD == 15) return 'BUNNY';
if (nACESSHEAD == 0) return 'NONE';
}

function getACESSSPECIAL(nACESSSPECIAL) {
if (nACESSSPECIAL == 1) return 'PIKACHU';
if (nACESSSPECIAL == 2) return 'MORCEGO';
if (nACESSSPECIAL == 0) return 'NONE';
}

function getEYE(neye) {
if (neye == 0) return 'NONE';
if (neye == 1) return 'CRY';
if (neye == 2) return 'BORED';
if (neye == 3) return 'STANDARD';
if (neye == 4) return 'SAD';
if (neye == 5) return 'ORIGINAL';
if (neye == 6) return 'ADDICTED';
}

function getmouth(nmouth) {
if (nmouth == 0) return "NONE";  
if (nmouth == 1) return "SCARED";
if (nmouth == 2) return "BORED";
if (nmouth == 3) return "AMAZEMENT";
if (nmouth == 4) return "STANDARD";
if (nmouth == 5) return "HAPPY";
if (nmouth == 6) return "PIZZA";
if (nmouth == 7) return "CIGAR";
  
}

function geteyebrow(neyebrow) {
if (neyebrow == 0) return 'NONE';
if (neyebrow == 1) return 'I';
if (neyebrow == 2) return 'II';
if (neyebrow == 3) return 'III';
if (neyebrow == 4) return 'IV';
if (neyebrow == 5) return 'V';
}

function getFILING(nACESP) {
if (nACESP == 0) return 'NONE';
if (nACESP == 1) return 'SCARF YELLOW';
if (nACESP == 2) return 'SCARF BLUE';
if (nACESP == 3) return 'SCARF SILVER';
if (nACESP == 4) return 'SCARF RED';
if (nACESP == 5) return 'SNAKE PURPLE';
if (nACESP == 6) return 'SAD MASK GREEN';
if (nACESP == 7) return 'SAD MASK YELLOW';
if (nACESP == 8) return 'SAD MASK PINK';
if (nACESP == 9) return 'SAD MASK BLUE';
if (nACESP == 10) return 'SUIT PURPLE';
if (nACESP == 11) return 'SUIT RED';
if (nACESP == 12) return 'SUIT BROWN';
if (nACESP == 13) return 'SUIT GREEN';
if (nACESP == 14) return 'BANDANA RED';
if (nACESP == 15) return 'BANDANA GREEN';
if (nACESP == 16) return 'BANDANA PURPLE';
if (nACESP == 17) return 'SNAKE GREEN';
if (nACESP == 18) return 'SNAKE PURPLE';
if (nACESP == 19) return 'COVER YELLOW';
if (nACESP == 20) return 'COVER BLUE';
if (nACESP == 21) return 'COVER RED';
if (nACESP == 22) return 'SUNGLASSES';
if (nACESP == 23) return 'SUNGLASSES PURPLE';
if (nACESP == 24) return 'AQUARIUM';
if (nACESP == 25) return 'ARROW';
if (nACESP == 26) return 'FLAG';
if (nACESP == 27) return 'NARUTO';
if (nACESP == 28) return 'ANONYMOUS';
if (nACESP == 29) return 'ARM';
if (nACESP == 30) return 'EAR';
if (nACESP == 31) return 'MONEY BELT';
if (nACESP == 32) return 'LIFEBOLT';
if (nACESP == 33) return 'EYE COVER';
if (nACESP == 34) return 'TV';
if (nACESP == 35) return 'COVERED';
if (nACESP == 36) return 'NECKLACE';
if (nACESP == 37) return 'STREET MASK';
if (nACESP == 38) return 'TOPPER BLUE';
if (nACESP == 39) return 'TOPPER GREEN';
if (nACESP == 40) return 'TOPPER PURPLE';
if (nACESP == 41) return 'TOPPER RED';
if (nACESP == 42) return 'TOPPER BROWN';
if (nACESP == 43) return 'TOPPER ORANGE';
if (nACESP == 44) return 'TOPPER SILVER';
  
}

function getFILING2(mACESPC) {
if (mACESPC== 0) return 'NONE';  
if (mACESPC == 1) return 'SCARF YELLOW';
if (mACESPC == 2) return 'SCARF BLUE';
if (mACESPC == 3) return 'SCARF SILVER';
if (mACESPC == 4) return 'SCARF RED';
if (mACESPC == 5) return 'SNAKE PURPLE';
if (mACESPC == 6) return 'SAD MASK GREEN';
if (mACESPC == 7) return 'SAD MASK YELLOW';
if (mACESPC == 8) return 'SAD MASK PINK';
if (mACESPC == 9) return 'SAD MASK BLUE';
if (mACESPC == 10) return 'SUIT PURPLE';
if (mACESPC == 11) return 'SUIT RED';
if (mACESPC == 12) return 'SUIT BROWN';
if (mACESPC == 13) return 'SUIT GREEN';
if (mACESPC == 14) return 'BANDANA RED';
if (mACESPC == 15) return 'BANDANA GREEN';
if (mACESPC == 16) return 'BANDANA PURPLE';
if (mACESPC == 17) return 'SNAKE GREEN';
if (mACESPC == 18) return 'SNAKE PURPLE';
if (mACESPC == 19) return 'COVER YELLOW';
if (mACESPC == 20) return 'COVER BLUE';
if (mACESPC == 21) return 'COVER RED';
if (mACESPC == 22) return 'SUNGLASSES';
if (mACESPC == 23) return 'SUNGLASSES PURPLE';
if (mACESPC == 24) return 'MONEY BELT';
if (mACESPC == 25) return 'ARROW';
if (mACESPC == 26) return 'FLAG';
if (mACESPC == 27) return 'NARUTO';
if (mACESPC == 28) return 'ANONYMOUS';
if (mACESPC == 29) return 'ARM';
if (mACESPC == 30) return 'STREET MASK';
if (mACESPC == 31) return 'NECKLACE';
if (mACESPC == 32) return 'COVERED';
if (mACESPC == 33) return 'EYE COVER';
}

function getFILING1(nACESPB) {
if (nACESPB == 0) return 'NONE';
if (nACESPB == 1) return 'STRAWBERRY';
}

function getTIPOBG(tipobg){
if (tipobg == 0) return 'SOLID';
if (tipobg == 1) return 'LIGHT';
if (tipobg == 2) return 'GRADIENT';
if (tipobg == 3) return 'POÁ';
if (tipobg == 4) return 'LINE';
}

console.log ({neyebrow, neye, nbody}) 
console.log ({nmouth, nACESP, nACESPB}) 
console.log ({nACESSHEAD, gra, tipobg})
console.log ({fxhash})