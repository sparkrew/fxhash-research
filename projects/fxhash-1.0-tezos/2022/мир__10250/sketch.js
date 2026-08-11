//мир is a generative project derivate from alchemy by mehno published previously on fxhash. It's a tribute to the country Ukraine that has faced war and invasion by Russian army
//All benefits from it will be send to tezos wallet managed by fxhash to donate money to ukraine organizations. Thanks to all for support.

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color



let xb, yb, hb, wb, rb, gb, bb, opab, bbb;
let xb2, yb2, hb2, wb2, rb2, gb2, bb2, opab2, bbb2;
let x1, y1, h1, w1, r1, g1, b1, radius1, opa1, aleat1;
let x2, y2, h2, w2, r2, g2, b2, radius2, opa2, aleat2;
let x3, y3, h3, w3, r3, g3, b3, radius3, opa3, aleat3;
let x4, y4, h4, w4, r4, g4, b4, radius4, opa4, aleat4;
let x5, y5, h5, w5, r5, g5, b5, radius5, opa5, aleat5;
let x6, y6, h6, w6, r6, g6, b6, radius6, opa6, aleat6;
let x7, y7, h7, w7, r7, g7, b7, radius7, opa7, aleat7;
let x8, y8, h8, w8, r8, g8, b8, radius8, opa8, aleat8;
let x9, y9, h9, w9, r9, g9, b9, radius9, opa9, aleat9;
let x10, y10, h10, w10, r10, g10, b10, radius10, opa10, aleat10;
let x11, y11, h11, w11, r11, g11, b11, radius11, opa11, 
aleat11;
let x12, y12, h12, w12, r12, g12, b12, radius12, opa12,
aleat12;
let x13, y13, h13, w13, r13, g13, b13, radius13, opa13, aleat13;
let x14, y14, h14, w14, r14, g14, b14, radius14, opa14, aleat14;
let x15, y15, h15, w15, r15, g15, b15, radius15, opa15, 
aleat15;
let x16, y16, h16, w16, r16, g16, b16, radius16, opa16,
aleat16;
let x17, y17, h17, w17, r17, g17, b17, radius17, opa17, aleat17;
let x18, y18, h18, w18, r18, g18, b18, radius18, opa18, aleat18;
let x19, y19, h19, w19, r19, g19, b19, radius19, opa19, aleat19;
let x20, y20, h20, w20, r20, g20, b20, radius20, opa20, aleat20;
let x21, y21, h21, w21, r21, g21, b21, radius21, opa21, 
aleat21;
let x22, y22, h22, w22, r22, g22, b22, radius22, opa22,
aleat22;
let x23, y23, h23, w23, r23, g23, b23, radius23, opa23, aleat23;
let x24, y24, h24, w24, r24, g24, b24, radius24, opa24, aleat24;



function setup() {
  createCanvas(windowWidth, windowHeight);

  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  
  //rect background - rectb --- fondo
xb = 0;
yb = 0;
wb = windowWidth;
hb = windowHeight*0.55;
rb = random(50);
gb = random(50);
bb = random(100, 255);
opab = 50;
  
  xb2 = 0;
yb2 = windowHeight*0.45;
wb2 = windowWidth;
hb2 = windowHeight*0.55;
rb2 = random(200,255);
gb2 = random(220, 255);
bb2 = random(10);
opab2 = 50;
  
  bbb= random(150,255);

  // 24 oblasts (12 arriba, 12 abajo)
  //rect1 --- arriba
x1 = 0;
y1 = random(windowHeight*-0.2, windowHeight*0.2);
w1 = windowWidth;
h1 = random(windowHeight*0.3,windowHeight*0.4);
radius1 = random(0);
r1 = random(60);
g1 = random(150);
b1 = random(150, 255);
opa1 = random(30,100);
aleat1 = random(windowHeight*0.4,windowHeight*0.6);

  //rect2 --- arriba
x2 = 0;
y2 = random(windowHeight*-0.1, windowHeight*0.1);
w2 = windowWidth;
h2 = random(windowHeight*0.3,windowHeight*0.6);
radius2 = random(0);
r2 = random(70);
g2 = random(150);
b2 = random(150,255);
opa2 = random(30,100);
aleat2 = random(windowHeight*0.4,windowHeight*0.6);

  
  //rect3 -- arriba
x3 = 0;
y3 = random(windowHeight*-0.1, windowHeight*0.2);
w3 = windowWidth;
h3 = random(windowHeight*0.3,windowHeight*0.6);
radius3 = random(50);
r3 = random(50);
g3 = random(150);
b3 = random(150,255);
opa3 = random(30,100);
aleat3 = random(windowHeight*0.4,windowHeight*0.6)
  
  //rect4 --- arriba
x4 = 0;
y4 = random(windowHeight*0.05, windowHeight*0.2);
w4 = windowWidth;
h4 = random(windowHeight*0.3,windowHeight*0.6);
radius4 = random(30);
r4 = random(40);
g4 = random(150);
b4 = random(150,255);
opa4 = random(50,100);
aleat4 = random(windowHeight*0.4,windowHeight*0.6)
  
  //rect5 --- arriba
x5 = 0;
y5 = random(windowHeight*0.1, windowHeight*0.3);
w5 = windowWidth;
h5 = random(windowHeight*0.3,windowHeight*0.6);
radius5 = random(50);
r5 = random(50);
g5 = random(150);
b5 = random(150, 255);
opa5 = random(50,100);
aleat5 = random(windowHeight*0.4,windowHeight*0.7)
  
  //rect6 --- arriba
x6 = 0;
y6 = random(windowHeight*0.1);
w6 = windowWidth;
h6 = random(windowHeight*0.2,windowHeight*0.4);
radius6 = random(50);
r6 = random(50);
g6 = random(150);
b6 = random(100,255);
opa6 = random(10,100);
aleat6 = random(windowHeight*0.4,windowHeight*0.65);
  
  //rect7 --- arriba
x7 = 0;
y7 = random(windowHeight*0.2, windowHeight*0.3);
w7 = windowWidth;
h7 = random(windowHeight*0.1,windowHeight*0.4);
radius7 = random(50);
r7 = random(50);
g7 = random(150);
b7 = random(120, 255);
opa7 = random(10,100);
aleat7 = random(windowHeight*0.1);
  
  //rect8 --- arriba
x8 = 0;
y8 = random(windowHeight*0.1, windowHeight*0.3);
w8 = windowWidth;
h8 = random(windowHeight*0.2,windowHeight*0.5);
radius8 = random(50);
r8 = random(50);
g8 = random(150);
b8 = random(100, 255);
opa8 = random(10,50);
aleat8 = random(windowHeight*0.2);

  //rect9 --- arriba
x9 = 0;
y9 = random(windowHeight*0.2, windowHeight*0.4);
w9 = windowWidth;
h9 = random(windowHeight*0.25,windowHeight*0.35);
radius9 = random(50);
r9 = random(50);
g9 = random(150);
b9 = random(100, 255);
opa9 = random(10,50);
aleat9 = random(windowHeight*-0.2, windowHeight*0.2);


  //rect10
x10 = 0;
y10 = random(windowHeight*0.2, windowHeight*0.4);
w10 = windowWidth;
h10 = random(windowHeight*0.1,windowHeight*0.2);
radius10 = random(50);
r10 = random(50);
g10 = random(150);
b10 = random(100, 255);
opa10 = random(10,50);
aleat10 = random(windowHeight*-0.2, windowHeight*0.2)
  
  //rect11 -- arriba
x11 = 0;
y11 = random(windowHeight*0.2, windowHeight*0.35);
w11 = windowWidth;
h11 = random(windowHeight*0.3,windowHeight*0.4);
radius11 = random(50);
r11 = random(50);
g11 = random(150);
b11 = random(100, 255);
opa11 = random(10,50);
aleat11 = random(windowHeight*-0.2, windowHeight*0.2)
  
  //rect12 --- arriba
x12 = 0;
y12 = random(windowHeight*0.1, windowHeight*0.3);
w12 = windowWidth;
h12 = random(windowHeight*0.2,windowHeight*0.4);
radius12 = random(50);
r12 = random(50);
g12 = random(150);
b12 = random(100,255);
opa12 = random(10,50);
aleat12 = random(windowHeight*-0.2, windowHeight*0.2);
  
  //rect13 -- abajo
x13 = 0;
y13 = random(windowHeight*0.4, windowHeight*0.65);
w13 = windowWidth;
h13 = random(windowHeight*0.2, windowHeight*0.3);
radius13 = random(50);
r13 = random(200, 255);
g13 = random(200, 255);
b13 = random(50);
opa13 = random(10,50);
aleat13 = random(windowHeight*0.8, windowHeight*1.1);
  
  //rect14 ... abajo
x14 = 0;
y14 =  random(windowHeight*0.4, windowHeight*0.6);
w14  = windowWidth;
h14 = random(windowHeight*0.3, windowHeight*0.4);
radius14 = random(50);
r14 = random(200, 255);
g14 = random(200, 255);
b14 = random(100);
opa14 = random(10,50);
aleat14 = random(windowHeight*0.9, windowHeight*1.2)
  
  //rect15 -- abajo
x15 = 0;
y15 = random(windowHeight*0.4, windowHeight*0.65);
w15 = windowWidth;
h15 = random(windowHeight*0.2, windowHeight*0.3);
radius15 = random(50);
r15 = random(200, 255);
g15 = random(200, 255);
b15 = random(50);
opa15 = random(10,50);
aleat15 = random(windowHeight*0.8, windowHeight*1.1);
  
  //rect16 ... abajo
x16 = 0;
y16 =  random(windowHeight*0.4, windowHeight*0.6);
w16  = windowWidth;
h16 = random(windowHeight*0.3, windowHeight*0.4);
radius16 = random(50);
r16 = random(200, 255);
g16 = random(200, 255);
b16 = random(100);
opa16 = random(10,50);
aleat16 = random(windowHeight*0.9, windowHeight*1.2)
  
  //rect17 -- abajo
x17 = 0;
y17 = random(windowHeight*0.4, windowHeight*0.65);
w17 = windowWidth;
h17 = random(windowHeight*0.2, windowHeight*0.3);
radius17 = random(50);
r17 = random(200, 255);
g17 = random(200, 255);
b17 = random(50);
opa17 = random(10,50);
aleat17 = random(windowHeight*0.8, windowHeight*1.1);
  
  //rect18 ... abajo
x18 = 0;
y18 =  random(windowHeight*0.4, windowHeight*0.6);
w18  = windowWidth;
h18 = random(windowHeight*0.3, windowHeight*0.4);
radius18 = random(50);
r18 = random(200, 255);
g18 = random(200, 255);
b18 = random(100);
opa18 = random(10,50);
aleat18 = random(windowHeight*0.9, windowHeight*1.2)
  
  //rect19 -- abajo
x19 = 0;
y19 = random(windowHeight*0.6, windowHeight*0.8);
w19 = windowWidth;
h19 = random(windowHeight*0.2, windowHeight*0.5);
radius19 = random(50);
r19 = random(200, 255);
g19 = random(200, 255);
b19 = random(50);
opa19 = random(10,50);
aleat19 = random(windowHeight*0.4, windowHeight*6);
  
  //rect20 ... abajo
x20 = 0;
y20 =  random(windowHeight*0.6, windowHeight*0.8);
w20  = windowWidth;
h20 = random(windowHeight*0.3, windowHeight*0.4);
radius20 = random(50);
r20 = random(200, 255);
g20 = random(200, 255);
b20 = random(100);
opa20 = random(10,50);
aleat20 = random(windowHeight*0.4, windowHeight*6)
  
  //rect21 -- abajo
x21 = 0;
y21 = random(windowHeight*0.7, windowHeight*0.9);
w21 = windowWidth;
h21 = random(windowHeight*0.2, windowHeight*0.5);
radius21 = random(50);
r21 = random(200, 255);
g21 = random(200, 255);
b21 = random(50);
opa21 = random(10,50);
aleat21 = random(windowHeight*0.45, windowHeight*0.65);
  
  //rect22 ... abajo
x22 = 0;
y22 =  random(windowHeight*0.6, windowHeight*0.9);
w22  = windowWidth;
h22 = random(windowHeight*0.3, windowHeight*0.4);
radius22 = random(50);
r22 = random(200, 255);
g22 = random(200, 255);
b22 = random(100);
opa22 = random(10,50);
aleat22 = random(windowHeight*0.5, windowHeight*6)
  
  //rect23 -- abajo
x23 = 0;
y23 = random(windowHeight*0.7, windowHeight*0.95);
w23 = windowWidth;
h23 = random(windowHeight*0.2, windowHeight*0.5);
radius23 = random(0);
r23 = random(200, 255);
g23 = random(200, 255);
b23 = random(50);
opa23 = random(10,50);
aleat23 = random(windowHeight*0.6, windowHeight*7);
  
  //rect24 ... abajo
x24 = 0;
y24 =  random(windowHeight*0.6, windowHeight*0.85);
w24  = windowWidth;
h24 = random(windowHeight*0.3, windowHeight*0.4);
radius24 = random(0);
r24 = random(200, 255);
g24 = random(200, 255);
b24 = random(50);
opa24 = random(10,50);
aleat24 = random(windowHeight*0.6, windowHeight*0.7)
  
  
  
  
}

function draw() {
  background(bbb);

  noStroke()
  //rectbackground
  fill(rb, gb, bb, opab)
  rect(xb, yb, wb, hb);
  
  fill(rb2, gb2, bb2, opab2)
  rect(xb2, yb2, wb2, hb2);
  
  //rect1
  fill(r1,g1, b1, opa1);
  rect(x1, y1, w1, h1, radius1);
  y1 = y1 + windowHeight*0.00005
  if (y1 > aleat1) {
    y1 = y1 -windowHeight*0.00005
  }
  
  //rect2
  fill(r2, g2, b2, opa2)
  rect(x2, y2, w2, h2, radius2);
  y2 = y2 +windowHeight*0.00005
  if (y2 > aleat2) {
    y2 = y2 -windowHeight*0.00005
  }
  
  //rect3
  fill(r3, g3, b3, opa3)
  rect(x3, y3, w3, h3, radius3);
  y3 = y3 +windowHeight*0.00005
  if (y3 > aleat3) {
    y3 = y3 -windowHeight*0.00005
  }
  
  //rect4
  fill(r4, g4, b4, opa4)
  rect(x4, y4, w4, h4, radius4);
  y4 = y4 +windowHeight*0.00005
  if (y4 < aleat4) {
    y4 = y4 - windowHeight*0.00005
  }
  
  //rect5
  fill(r5, g5, b5, opa5)
  rect(x5, y5, w5, h5, radius5);
  y5 = y5 + windowHeight*0.00005
  if (y5 < aleat5) {
    y5 = y5 - windowHeight*0.00005
  }
  
  //rect6
  fill(r6, g6, b6, opa6)
  rect(x6, y6, w6, h6, radius6);
  y6 = y6 +windowHeight*0.00005
  if (y6 > aleat6) {
    y6 = y6 -windowHeight*0.00005
  }
  
  //rect7
  fill(r7, g7, b7, opa7)
  rect(x7, y7, w7, h7, radius7);
  y7 = y7 - windowHeight*0.00005
  if (y7 < aleat7) {
    y7 = y7 + windowHeight*0.00005
  }
  
  //rect8
  fill(r8,g8, b8, opa8);
  rect(x8, y8, w8, h8, radius8);
  y8 = y8 - windowHeight*0.00005
  if (y8 < aleat8) {
    y8 = y8 + windowHeight*0.00005
  }
  
  //rect9
  fill(r9, g9, b9, opa9)
  rect(x9, y9, w9, h9, radius9);
  y9 = y9 - windowHeight*0.00005
  if (y9 > aleat9) {
    y9 = y9 + windowHeight*0.00005
  }
  
  
  //rect10
  fill(r10, g10, b10, opa10)
  rect(x10, y10, w10, h10, radius10);
  y10 = y10 - windowHeight*0.00005
  if (y10 > aleat10) {
    y10 = y10 + windowHeight*0.00005
  }
  
  //rect11
  fill(r11, g11, b11, opa11)
  rect(x11, y11, w11, h11, radius11);
  y11 = y11 - windowHeight*0.00005
  if (y11 < aleat11) {
    y11 = y11 + windowHeight*0.00005
  }
  
  //rect12
  fill(r12, g12, b12, opa12)
  rect(x12, y12, w12, h12, radius12);
  y12 = y12 - windowHeight*0.00005
  if (y12 < aleat12) {
    y12 = y12 + windowHeight*0.00005
  }
  
  //rect13
  fill(r13, g13, b13, opa13)
  rect(x13, y13, w13, h13, radius13);
  y13 = y13 + windowHeight*0.00005
  if (y13 > aleat13) {
    y13 = y13 - windowHeight*0.00005
  }
  
  //rect14
  fill(r14, g14, b14, opa14)
  rect(x14, y14, w14, h14, radius14);
 y14 = y14 + windowHeight*0.00005
  if (y14 > aleat14) {
    y14 = y14 - windowHeight*0.00005
  }
  
  //rect15
  fill(r15, g15, b15, opa15)
  rect(x15, y15, w15, h15, radius15);
  y15 = y15 + windowHeight*0.00005
  if (y15 > aleat15) {
    y15 = y15 - windowHeight*0.00005
  }
  
  //rect16
  fill(r16, g16, b16, opa16)
  rect(x16, y16, w16, h16, radius16);
 y16 = y16 + windowHeight*0.00005
  if (y16 > aleat16) {
    y16 = y16 - windowHeight*0.00005
  }
  
  //rect17
  fill(r17, g17, b17, opa17)
  rect(x17, y17, w17, h17, radius17);
  y17 = y17 + windowHeight*0.00005
  if (y17 > aleat17) {
    y17 = y17 - windowHeight*0.00005
  }
  
  //rect18
  fill(r18, g18, b18, opa18)
  rect(x18, y18, w18, h18, radius18);
 y18 = y18 + windowHeight*0.00005
  if (y18 > aleat18) {
    y18 = y18 - windowHeight*0.00005
  }
  
  //rect19
  fill(r19, g19, b19, opa19)
  rect(x19, y19, w19, h19, radius19);
  y19 = y19 - windowHeight*0.00005
  if (y19 > aleat19) {
    y19 = y19 +windowHeight*0.00005
  }
  
  //rect20
  fill(r20, g20, b20, opa20)
  rect(x20, y20, w20, h20, radius20);
 y20 = y20 - windowHeight*0.00005
  if (y20 > aleat20) {
    y20 = y20 + windowHeight*0.00005
  }
  
  //rect21
  fill(r21, g21, b21, opa21)
  rect(x21, y21, w21, h21, radius21);
  y21 = y21 - windowHeight*0.00005
  if (y21 > aleat21) {
    y21 = y21 + windowHeight*0.00005
  }
  
  //rect22
  fill(r22, g22, b22, opa22)
  rect(x22, y22, w22, h22, radius22);
 y22 = y22 - windowHeight*0.00005
  if (y22 > aleat22) {
    y22 = y22 + windowHeight*0.00005
  }
  
  //rect23
  fill(r23, g23, b23, opa23)
  rect(x23, y23, w23, h23, radius23);
  y23 = y23 - windowHeight*0.00005
  if (y23 > aleat23) {
    y23 = y23 + windowHeight*0.00005
  }
  
  //rect24
  fill(r24, g24, b24, opa24)
  rect(x24, y24, w24, h24, radius24);
 y24 = y24 - windowHeight*0.00005
  if (y24 > aleat24) {
    y24 = y24 + windowHeight*0.00005
  }
  

  
  
  
}






  //FX Features
  // window.$fxhashFeatures = {
  //   "Size": "something",
  //   "Color": "somecolor",
  // };







