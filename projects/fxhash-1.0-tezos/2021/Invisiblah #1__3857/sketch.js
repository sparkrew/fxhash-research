
let visibla;
function preload(){
  
   fundo = loadImage(`img/invi1.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}

function draw(){
  background(255)
  
  image(fundo,0,0,windowWidth, windowHeight)
  
  
  noLoop()
}
  
  