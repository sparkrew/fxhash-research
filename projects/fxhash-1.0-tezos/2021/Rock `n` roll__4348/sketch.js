let fundo;
let canhoto = rnd_int(1,2);
let barba = [];
let cabelo = [];
let calca = [];
let camisa = [];
let corpo = [];
let guitarra = [];
let mao = [];
let rosto = [];
let corpoEspecial;
let maoEspecial;
let bar, cab, cal, cam, cor, gui, hand, ros;
let isSpecial;
let isCabelo;
let r1, g1, b1;

function preload(){
  
  fundo = loadImage(`img${canhoto}/fundo.png`);
  
  for (let i = 0; i < 4; i++) {
    cabelo[i] = loadImage(`img${canhoto}/cabelo${(i+1)}.png`);
  }
  
  for (let i = 0; i < 5; i++) {
    calca[i] = loadImage(`img${canhoto}/calca${(i+1)}.png`);
  }
  
  for (let i = 0; i < 6; i++) {
    camisa[i] = loadImage(`img${canhoto}/camisa${(i+1)}.png`);
  }
  
  for (let i = 0; i < 4; i++) {
    corpo[i] = loadImage(`img${canhoto}/corpo${(i+1)}.png`);
  }
  corpoEspecial = loadImage(`img${canhoto}/corpo5.png`);
  
  for (let i = 0; i < 3; i++) {
    guitarra[i] = loadImage(`img${canhoto}/guitarra${(i+1)}.png`);
  }
  
  for (let i = 0; i < 4; i++) {
    mao[i] = loadImage(`img${canhoto}/mao${(i+1)}.png`);
  }
  maoEspecial = loadImage(`img${canhoto}/mao5.png`);
  
  
}


function setup() {
  createCanvas(windowHeight, windowHeight);
  
  bar = rnd_int(0,4);
  cab = rnd_int(0,3);
  cal = rnd_int(0,4);
  cam = rnd_int(0,5);
  cor = rnd_int(0,3);
  gui = rnd_int(0,2);
  ros = rnd_int(0,3);
  isCabelo = rnd_int(0,10)
  isSpecial = rnd_int(0,10);
  r1 = rnd_int(0,255);
  g1 = rnd_int(0,255);
  b1 = rnd_int(0,255);
}


function draw() {
  background(255);
  background(r1, g1, b1, 60);
  if(isSpecial > 9){
    image(fundo, 0, 0, windowHeight, windowHeight);
    image(corpoEspecial, 0, 0, windowHeight, windowHeight);
    image(calca[cal], 0, 0, windowHeight, windowHeight);
    image(camisa[cam], 0, 0, windowHeight, windowHeight);
    image(guitarra[gui], 0, 0, windowHeight, windowHeight);
    image(maoEspecial, 0, 0, windowHeight, windowHeight);}   else{
    image(fundo, 0, 0, windowHeight, windowHeight);
    image(corpo[cor], 0, 0, windowHeight, windowHeight);
    image(calca[cal], 0, 0, windowHeight, windowHeight);
    image(camisa[cam], 0, 0, windowHeight, windowHeight);
    if(isCabelo > 6){
      image(cabelo[cab], 0, 0, windowHeight, windowHeight);
    }  
    image(guitarra[gui], 0, 0, windowHeight, windowHeight);
    image(mao[cor], 0, 0, windowHeight, windowHeight);
  }
  
}