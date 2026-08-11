/* DrawFlower 3  |  Christine Jaschek - BLIXXUM  2023,  p5js coding:  Holger Lippmann   copyright cc 4.0 BY-NC-ND  |  made with p5js */
var png, path;
let seed = 0;
var SVG, path;
let bilder = [];
let bilderLin = [];
let bilderFill = [];
let numbilder = 14;
let dauer;
let diam1;
let ran,ra, rr;
let mycol;
function preload() {
    
  let bild1 = loadImage('SVGs/01.svg'); 
  let bild2 = loadImage('SVGs/02.svg');
  let bild3 = loadImage('SVGs/03.svg');
  let bild4 = loadImage('SVGs/04.svg');
  let bild5 = loadImage('SVGs/05.svg');
  let bild6 = loadImage('SVGs/06.svg');
  let bild7 = loadImage('SVGs/07.svg');
  let bild8 = loadImage('SVGs/08.svg');
  let bild9 = loadImage('SVGs/09.svg');
  let bild10 = loadImage('SVGs/10.svg');
  let bild11 = loadImage('SVGs/11.svg');
  let bild12 = loadImage('SVGs/012.svg');
  let bild13 = loadImage('SVGs/022.svg');
  let bild14 = loadImage('SVGs/092.svg');
  
  bilder = [bild1,bild2,bild3,bild4,bild4,bild5,bild6,bild7,bild8,bild8,bild9];
  bilderLin = [bild1,bild2,bild3,bild4,bild4,bild5,bild6,bild7,bild8,bild8,bild10,bild11]; //nur linienbilder
  bilderFill = [bild12,bild13,bild14];
}

function setup() {
  pixelDensity(5);//5
  randomSeed(999999*fxrand()); 
  noiseSeed(999999*fxrand());
  wi = 1080;
  he = 1920;
  p = createCanvas(wi,he);
  dauer=int(random(200,500));
  frameCount=0;
  smooth();
  colorMode(HSB, 255,255,255,255);
  mycol=color(random(255),random(12),random(222,255),4);
  background(255);
  Math.random = fxrand; 
  //frameRate(2);
  //noLoop();
}

function draw() {
  if (frameCount<dauer/2){
    noStroke();
fill(mycol); // blende als HSBA color
rect(0,0,width,height);
  }
  let randImg = random(bilder); 
  let randImgLin = random(bilderLin); 
  let randImgFill = random(bilderFill);

  push();
  translate(-300,-300);
  rotate(radians(random(-350,350)));
  ran=random(100);
  if(ran<20){
    diam1=random(150,1200); //-frameCount*8
  }else{
    diam1=random(250,800);
  }
     
  if(frameCount>dauer-2){
    image(randImgFill, random(width), random(height), diam1, diam1);
    image(randImgFill, random(width), random(height), diam1, diam1);
    randImgFill = random(bilderFill);
    image(randImgFill, random(width), random(height), diam1, diam1);
    image(randImgFill, random(width), random(height), diam1, diam1);
    randImgFill = random(bilderFill);
    image(randImgFill, random(width), random(height), diam1, diam1);
    image(randImgFill, random(width), random(height), diam1, diam1);
  }else{
  image(randImg, random(width), random(height), diam1, diam1);
  }
  
  pop();
  if(frameCount>=dauer){
    noLoop();
    fxpreview();
  }
}

document.addEventListener('keyup', event => {
  if(frameCount >= 1){ 
    if (event.keyCode  === 83) { //s
    let f = pixelDensity();
    fill(255),
    noStroke(),
    rectMode(CORNER),
    rect(0, height - 10, width, 11),
    rect(0, 0, width, 10),
    rect(0, 0, 9, height),
    rect(width - 9, 0, 9, height), 
    textFont("Arial", 9),
    fill("#C6C6C6");
    text ("DrawFlower_03" + "    Christine Jaschek    www.blixxum.io  " + "     /      " + "fxhash: " + fxhash,10,height-1),
    (g = createImage(width * f, height * f)),
    g.copy(p, 0, 0, width, height, 0, 0, width * f, height * f);
    g.save(fxhash+'_DrawFlower_03.png') //dateS+
    }
  }
})