// Copyright (c) 2022 Alex Stonn << alexzstonnn@gmail.com >>
var im= ['m3',  'm4',   'm6',   'm7',  'm8',  'm9',  'm10',  'm111',  'm12',  'm13',  'm14',  'm15',  'm16',  'm17', 'm18'];
var im2= ['m31', 'm41', 'm61', 'm71', 'm81', 'm91', 'm101', 'm1111', 'm121', 'm131', 'm141', 'm151', 'm161', 'm171', 'm181'];
let rd, rdd, rdm;
let seed;
let ww, hh;
let m1, m11;

function preload(){
  seed=int(fxrand() * 100000000);
  randomSeed(seed);

  rd  = int(random(1));
  rde  = int(random(2));
  rdm  = int(random(0, 15));
  rdd  = int(random(1));

  m1 = loadImage('./data/'+im[rdm] + '.png');
  m11 = loadImage('./data/'+im2[rdm] + '.png');
}

function setup() {
  ww=windowWidth; hh= windowHeight;
  if(ww>=hh){ww=hh;} else{hh=ww;}
  createCanvas(ww,hh);
  pixelDensity(1);
  colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);

}

function draw() {
  background(0);

  push();
  translate(width/1.8, height/8);
  camada1(30, random(0.2, 7), 20.1, 150);
  camada1(40, random(0.2, 2), 20.1, 150);
  linhas(random(5,15), 2, 15.1, 50);
  camada1(random(10,30), 1.3, 15, 150);
  pop();

  tint(0);
  if(rde == 0){
    image( m1,   0,0,width, height);
    push();
    rotate(PI*20);
    translate(0, -height/2);
    camada2(random(4, 8), 1.3, 15, 50);
    pop();

    image( m11,   0,0,width, height);
}

  if(rde == 1){
    push();
    scale(-1, 1);
    image( m1,   -width,0,width, height);
    pop();
    push();
    rotate(-PI*20);
    translate(0, height/2);
    camada2(random(4, 8), 1.3, 15, 50);
    pop();
    scale(-1, 1);
    image( m11,   -width,0,width, height);
  }

  noLoop();
  fxpreview();
}

function camada1(num, num2, diam, alfa){
  var rd;
  var rt = int(random(4));
  var tm = diam;
  var tmr = random(0.3, 2.5);
  stroke(0, alfa);
  var color = int(random(6));
  var r  = random(100, 200);
  var g  = random(100, 200);
  var b  = random(100, 200);

  noFill();
  for(var i = 0; i<num*1.5; i++){
    if(color ==0){stroke(r, g , b);}
    if(color ==1){stroke(random(100,250), random(100,250) , random(100, 250));}
    if(color ==2){stroke(random(50), random(100,250) , random(100, 250));}
    if(color ==3){stroke(0, random(100,250) ,random(200,250));}
    if(color ==4){stroke(random(250, 300), random(50, 150) ,random(200, 300));}
    if(color ==5){stroke(random(50), random(40) ,200);}
    strokeWeight(random(0.8, 2.5));
    rd= random(height/num2);
    ellipse(0, rd, width/5*tm, height/55*tm);
  }
}

function camada2(num, num2, diam, alfa){
  var rd;
  var rt = int(random(4));
  var tm = diam;
  var tmr = random(0.3, 2.5);
  stroke(0, alfa);
  var color = int(random(5));
  var r  = random(100, 200);
  var g  = random(100, 200);
  var b  = random(100, 200);

  noFill();
  for(var i = 0; i<num*1.5; i++){
    if(color ==0){stroke(r, g , b);}
    if(color ==1){stroke(random(100,250), random(100,250) , random(100, 250));}
    if(color ==2){stroke(random(50), random(100,250) , random(100, 250));}
    if(color ==3){stroke(0, random(100,250) ,random(200,250));}
    if(color ==4){stroke(random(50), random(40) ,200);}
    strokeWeight(random(0.5));
    rd= random(height/num2);
    ellipse(0, rd, width/5*tm, height/55*tm);
  }
}

function linhas(num, num2, diam, alfa){
  var rd;
  var rt = int(random(5, 10));
  var tm = diam;
  var tmr = random(0.3, 0.5);
  stroke(255, 30);
  noFill();

  for(var i = 0; i<num*1.5; i++){
    strokeWeight(random(1));
    rd= random(height/2);
    rotate(PI);
    ellipse(0, rd, width/12*tm, height/55*tm);
  }
}

function windowResized(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh, WEBGL);

}
