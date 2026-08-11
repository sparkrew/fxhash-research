// Coded by Eduxdux, designed by Gora

// Setar um array das imagens

let cor = [];
let bege = [];
let rdCor, rdSize, xdux, rdBege, rdrd, angulo, canto;
let fundo;

function preload(){
  fundo = loadImage("img/du.jpg")
}

function setup() {
  //cor = ["#0466c8","#0353a4","#023e7d","#002855","#001845","#001233","#33415c","#5c677d","#7d8597","#979dac"]
  cor = [
    "#004733",
    "#2b6a4d",
    "#568d66",
    "#a5c1ae",
    "#f3f4f6",
    "#dcdfe5",
    "#df8080",
    "#cb0b0a",
    "#ad080f",
    "#8e0413",
  ];
  bege = ["#001219","#005f73","#0a9396","#94d2bd","#1d3557","#1d3557","#ca6702","#bb3e03","#ae2012","#9b2226"];
  createCanvas(windowWidth, windowHeight);

  angulo = rnd_btw(1, 15);
  rdBege = rnd_int(0, 9);
  rdSize = rnd_btw(30, 80);
  xdux = rnd_btw(-30, 90);
  rdrd = rnd_btw(80, 150);
  console.log(rdSize);
  console.log(rdrd);

  frameRate(5);
  noStroke();
  noLoop();
  blendMode(BLEND);
  
  background(bege[rdBege]);
  console.log(rdBege)
}

function draw() {
  blendMode(ADD);
  noLoop();
  push();
  translate(width / 2, height / 2);
  rotate(angulo);
  cria(0, 0, 180);
  pop();

  granulate(30);
}

function cria(px, py, tamain) {
  let x = px;
  let y = py;
  let radius = tamain;

  canto = rnd_btw(0, 15);
  rdCor = rnd_int(0, 9);
  fill(cor[rdCor]);

  //image(fundo,x,y,radius)
  rect(x, y + x, radius - 15,canto/2);
  rect(y , x , radius , radius , canto);
   //circle(x*xdux,y+xdux,radius/rdrd)
 // rect(y+xdux, x-xdux*2, radius);

  if (radius > rdSize) {
    cria(x + radius / 2, y, radius / xdux);
    cria(x - radius / 2, y, radius / 2);
    cria(x, y + radius / 2, radius / 2);
    cria(x + y, y - radius / 2, radius / 2);
  }
}

function keyTyped(s) {
  save("rnd_forms.png");
}

function granulate(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 4) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + gA;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }
  updatePixels();
}
