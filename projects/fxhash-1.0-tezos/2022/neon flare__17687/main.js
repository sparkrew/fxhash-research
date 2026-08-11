//mll91
//
//------------
//
//mll91
function fxr(min, max){
  return Math.round(fxrand() * (max-min) + min);
}
function fxrdouble(min, max){
  return fxrand() * (max-min) + min;
}
const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};



let clr3 = fxr (0,80);
let clr2 = fxr(210, 290);
let clr4 = fxr(150, 190);
let rgb4 = HSLToRGB(fxr(0,360), 40, 60);
let rgb5 =  HSLToRGB(fxr(0,360), 40, 40);

let cl1 = fxr(25, 45);
let cl2 = fxr(25, 45);
let rgb6 = HSLToRGB(fxr(0,360), cl1, 20);
let rgb7 = HSLToRGB(fxr(0,360), cl2, 20);

let clrr = HSLToRGB(fxr(0,360), 20, 60);

let t = 5000;
let frm = fxr(30,38);
let vecLocation =[];
let vecVelocity =[];
const NUM=60;
var z;
let pallete = [rgb6, rgb7]
function setup(){
  createCanvas(800,600,P2D);
  frameRate(frm);
  for(let i = 0; i < NUM; i++){
    vecLocation[i] = createVector(width/2, height/2);
    vecVelocity[i] = createVector(fxrdouble(-4.001,4),fxrdouble(-4.001,4));
  }
  setTimeout(disable, t);
}

function disable(){
  enabled = false;
}
let enabled = true;

function draw(){
  if (enabled){
  background(0);
  blendMode(ADD);
  noStroke();
  fill(pallete[Math.floor(fxrand()*pallete.length)]);
  for(let i = 0; i < NUM; i++){
    ellipse(vecLocation[i].x, vecLocation[i].y,fxrdouble(2,5));
    vecLocation[i].add(vecVelocity[i]);
    if(vecLocation[i].x>width || vecLocation[i].x <0){
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }
    if(vecLocation[i].y>400 || vecLocation[i].y <200){
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}
}
