
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())

let ceu = [];
let numceu = 2;

let bioma = [];
let numbioma = 2;

let estrada = [];
let numestrada = 2;

let home = [];
let numhome = 2;

let fumaca = [];
let numfumaca = 1;

c = rnd_int(0,2)
b = rnd_int(0,2)
e = rnd_int(0,2)
h = rnd_int(0,2)
f = rnd_int(0,1)

function preload() {
  
  let ceu1 = loadImage('ceu1.png');
  let ceu2 = loadImage('ceu2.png');
  let ceu3 = loadImage('ceu3.png');
  ceus= [ceu1,ceu2,ceu3];
  
  let bioma1 = loadImage('bioma1.png');
  let bioma2 = loadImage('bioma2.png');
  let bioma3 = loadImage('bioma3.png');
  biomas = [bioma1,bioma2,bioma3];
  
  let estrada1 = loadImage('estrada1.png');
  let estrada2 = loadImage('estrada2.png');
  let estrada3 = loadImage('estrada3.png');
  estradas = [estrada1,estrada2,estrada3];
  
  let home1 = loadImage('home1.png');
  let home2 = loadImage('home2.png');
  let home3 = loadImage('home3.png');
  homes = [home1,home2,home3];
  
  let fumaca1 = loadImage('fumaca1.gif');
  fumacas = [fumaca1];
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background (225);
  imageMode(CENTER); 
}

function draw(){
  image(ceus[c],width / 2, height / 2)
  image(biomas[b],width / 2, height / 2);
  image(estradas[e],width / 2, height/ 2);
  image(homes[h],width / 2, height / 2);
  image(fumacas[f],width / 2, height / 2);
  
}