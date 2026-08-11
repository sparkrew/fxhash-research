console.log(fxhash)
console.log(fxrand())

let f7;
let b7;
let cab9;
let cor5;
let n4;
let o7;
let p6;
let r6;



let fundo = []
let boca = []
let cabelo= []
let corpo = []
let nariz = []
let olho = []
let pesc = []
let orelha = []

function preload(){
  
 for (let i = 0; i < 10; i++) {
   fundo[i] = loadImage(`img/bg${(i+1)}.png`);
}
  for (let i = 0; i < 7; i++) {
   boca[i] = loadImage(`img/boca${(i+1)}.png`);
  }
  
  for (let i = 0; i < 10; i++) {
   cabelo[i] = loadImage(`img/c${(i+1)}.png`);
  }
  
  for (let i = 0; i < 6; i++) {
   corpo[i] = loadImage(`img/corpo${(i+1)}.png`);
  }
   for (let i = 0; i < 6; i++) {
   nariz[i] = loadImage(`img/n${(i+1)}.png`);
  }
  for (let i = 0; i < 9; i++) {
   olho[i] = loadImage(`img/o${(i+1)}.png`);
  }
  for (let i = 0; i < 7; i++) {
   pesc[i] = loadImage(`img/p${(i+1)}.png`);
  }
   for (let i = 0; i < 5; i++) {
   orelha[i] = loadImage(`img/rel${(i+1)}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  

    function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
    
  f7=parseInt(rnd_btw(0,10))
  b7=parseInt(rnd_btw(0,7))
  cab9=parseInt(rnd_btw(0,10))
  cor5=parseInt(rnd_btw(0,6))
  n4=parseInt(rnd_btw(0,6))
  o7=parseInt(rnd_btw(0,9))
  p6=parseInt(rnd_btw(0,7))
  r6=parseInt(rnd_btw(0,5))
  
  
}

function draw(){
  background(255)
  
  image(fundo[f7],0,0,windowWidth, windowHeight)
  image(corpo[cor5],0,0,windowWidth, windowHeight)
  image(cabelo[cab9],0,0,windowWidth, windowHeight)
  image(orelha[r6],0,0,windowWidth, windowHeight)
  image(boca[b7],0,0,windowWidth, windowHeight)   
  image(nariz[n4],0,0,windowWidth, windowHeight)
  image(olho[o7],0,0,windowWidth, windowHeight)
  image(pesc[p6],0,0,windowWidth, windowHeight)
  
  
  noLoop()
}