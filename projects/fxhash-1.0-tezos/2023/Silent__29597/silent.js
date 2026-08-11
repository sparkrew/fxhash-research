// Alex Stonn   2023 - alexzstonnn@gmail.com
var xoff1 = 0;
var xoff2 = 2000;
let rdPort;
let cor, sat, bri;
sat = 380;
bri = 20;
let rdPaleta, cp, rdLago, rdT;
var xoff = 0;
let seed;
let tt = 1


function preload(){
  seed=int($fx.rand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);

    rdPort = int(random(4))
    cor = random(0, 300)
    rdPaleta = int(random(1,4)) // fazer a paleta 2
    rdLago = 1
    rdT = int(random(2))
  }

function setup() {
  ww=windowWidth; hh= windowHeight;
  if(ww>=hh){ww=hh;} else{hh=ww;}
  createCanvas(ww,hh, WEBGL);
  colorMode(HSB, 300, sat, 30, 1)
  pixelDensity(1)
  imageMode(CENTER);
}

function draw() {
  if(rdPaleta == 0){background(random(20, 30), 200, random(9, 10));}
  if(rdPaleta == 1){background(0, random(200, 150), 10);}
  if(rdPaleta == 2){background(0, 0, random(3, 3));}
  if(rdPaleta == 3){background(0, 0, random(2, 5));}
  background(0, 0, 4)
  directionalLight(160, 0, 60, 0, 0, -1);
	ambientLight(10);

  translate(-width/4, -height/4, -20)

  push()
noStroke()
translate(0, -height/8, -width/10)
if(rdPaleta == 0){fill(250, random(150, 190), 150, 0.85)}
if(rdPaleta == 1){fill(150, random(210, 150), 200, 1)}
if(rdPaleta == 2 || rdPaleta == 3){fill(150, 0, 210, 0.8)}
ellipse(random(width/2), random(height/3, -height/6), width/random(2,4))
pop()

var corPV = random(40, 200)


  for(var i =0; i<3; i++){
  push()
  translate(random(-width/1.5, width), height/random(1.5, 3.2), width/13.4)
  rotate(random(2.9, 3.1))
  vasoDF(width/20, corPV, corPV-(random(20)), 315, 6, 7)
  pop()
}


for(var i =0; i<3; i++){
push()
translate(random(-width/1.5, width), height/random(4.5, 3.2), width/13.4)
rotate(random(2.9, 3.1))
vasoDF(width/20, corPV, corPV-(random(20)), 315, 7, 5)
pop()
}

for(var i =0; i<3; i++){
push()
translate(random(-width/1.5, width), height/random(1.5, 3.2), width/11.34)
rotate(random(2.9, 3.1))
vasoDF(width/20, corPV, corPV-(random(20)), 315, 7, 5)
pop()
}

  for(var i =0; i<2; i++){
  push()
  scale(1.2)
  rotateX(-0.4)
  translate(width/random(3, 0.9), height/random(3.5, 6.2), width/9.8)
  rotate(random(2.9, 3.1))
  vasoDF(width/20, corPV, corPV-(random(20)), 315, 7, 5)
  pop()
  }
  //
  for(var i =0; i<10; i++){
  push()
  translate(random(-width/1.5, width/4.5), height/3, width/13.4)
  vasoDF2(width/random(21, 30), corPV, corPV-(random(20)), 150, 10, 10)
  pop()
}


// ramos vermelhos
var cor = random(150, 250)

for(var i =0; i<100; i++){
  push()
  translate(random(-width/1.5, width), random(height/5.5, height/1), 0);
  if(rdPaleta == 0){ramo(width/random(30, 10), 10, 10, 10, 8)}
  if(rdPaleta == 1){ramo(width/random(30, 10), 0, 0, 0, 2)}
  if(rdPaleta == 2){ramo(width/random(30, 10), 150, 150, 1, 1)}
  if(rdPaleta == 3){ramo(width/random(30, 10), cor, cor, 1, 1)}
  pop()
}

for(var i =0; i<30; i++){
  push()
  translate(random(-width/1.5, width), random(height/5.5, height/1), 0);
  if(rdPaleta == 0){ramo(width/random(30, 10), 18, 18, 30, 20)}
  if(rdPaleta == 1){ramo(width/random(30, 10), 10, 15, 0, 2)}
  if(rdPaleta == 2){ramo(width/random(30, 10), 240, 240, 2, 2)}
  if(rdPaleta == 3){ramo(width/random(30, 10), 111, 111, 2, 2)}
  pop()
}


//----------------------
var corplanta = random(0, 100)

var rdC = 70;
for(var i =0; i<56; i++){
  push()
  translate(random(-width/2, width), height/1.3, width/13.4);
  if(rdPaleta == 0 || rdPaleta == 1 ){ramoFlores(width/random(25, 60), corplanta, corplanta+20, 315, 6, 6, width/3500)}
  if(rdPaleta == 3){ramoFlores(width/random(25, 60), 120, 120, 215, 5, 6, width/3500)}
  if(rdPaleta == 2){ramoFlores(width/random(25, 20), 220, 220, 110, 4, 4, width/random(8000, 6500))}

  pop()
}
var cor = random(180, 240)

for(var i =0; i<46; i++){
  push()
  translate(random(-width/5, width/1.5), height/random(1.1, 1.2), width/18.4);
  if(rdPaleta == 0){ramoFlores(width/random(25, 30), 220, 220, 215, 4, 4, width/3500)}
  if(rdPaleta == 1){ramoFlores(width/random(15, 30), corplanta, corplanta+20, 315, 3, 3, width/4500)}
  if(rdPaleta == 2){ramoFlores(width/random(25, 30), 220, 220, 315, 4, 3, width/3500)}
  if(rdPaleta == 3){ramoFlores(width/random(25, 30), 90, 90, 315, 2, 3, width/3500)}
  pop()
}
for(var i =0; i<26; i++){
  push()
  translate(random(-width/5, width/1.5), height/random(1.2, 1.5), width/11.34);
  if(rdPaleta == 0){ramoFlores(width/random(25, 40), 210, 220, 215, 8, 7, width/3500)}
  if(rdPaleta == 1){ramoFlores(width/random(25, 40), corplanta, corplanta+20, 315, 8, 11, width/3500)}
  pop()
  push()
  translate(random(-width/5, width/1.5), height/random(1.2, 1.5), width/16.4);
  if(rdPaleta == 3){ramoFlores(width/random(25, 40), 60, 60, 315, 2, 3, width/3500)}
  pop()
  push()
  translate(random(-width/5, width/1.5), height/random(1.2, 1.5), width/16.4);
  if(rdPaleta == 2){ramoFlores(width/random(25, 40), 60, 60, 315, 0, 0, width/3500)}
  pop()
}

for(var i =0; i<16; i++){
  push()
  translate(random(-width/5, width/1.5), height/random(1.2, 1.9), width/9.8);
  ramoFlores(width/random(95, 70), 180, 180, 150, 8, 11, width/3500)
  pop()
}




for(var i =0; i<5; i++){
  push()
  var rdcf = int(random(2))
  if(rdcf==0){var cf = 0}
  if(rdcf==1){var cf = 1}
  translate(random(-width/5.5, width/1.5), random(-width/5, width/3), 0)
  vasoEM(width/random(20, 30), cf, 180, 180, random(10), 1, 2);
  pop()
}



 // fxpreview();
  noLoop();
}

function windowResized(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh, WEBGL);

}
