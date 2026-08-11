//Diego de los Campos - Fpolis - 2022
//         0    1      2     3     4    5      6     7     8     9    10    11    12    13    14   15    16    17     18    19    20    21     22    23    24
var im= ['a1', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4', 'e1', 'e2', 'e3', 'e4', 'f1', 'f2', 'f3', 'f4', 'g1', 'g2',  'g3', 'g4'];
let      rb, rc, rd, re, rf, rg, rv;
let  a,  b ,  c,  d,  e,  f,  g;
let px, v=0, sv, x;
let w=1000; //comprimento das png (quadradas)

function preload(){
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  rb= int(random( 1,4  )); //detalhe b
  rc= int(random( 5,9 )); //detalhe c
  rd= int(random(9,13 )); //detalhe c
  re= int(random(13,17 )); //detalhe c
  rf= int(random(17,21 )); //detalhe c
  rg= int(random(21,25 )); //detalhe c
  rv= random(0.005, 0.07);

  a = loadImage('./data/'+im[0] + '.png');
  b = loadImage('./data/'+im[rb] + '.png');
  c = loadImage('./data/'+im[rc] + '.png');
  d = loadImage('./data/'+im[rd] + '.png');
  e = loadImage('./data/'+im[re] + '.png');
  f = loadImage('./data/'+im[rf] + '.png');
  g = loadImage('./data/'+im[rg] + '.png');

window.$fxhashFeatures = {
"Red back" :   rb+'/3',
"Gas":         rc-4+'/4',
"Black":       rd-8+'/3',
"Red front":   re-12+'/2',
"Lines front": rf-16+'/4',
"Velocity":   round(rv,5)}

 }

function setup() {
  createCanvas(windowHeight, windowHeight);
   imageMode(CENTER);
  background(255);
  noStroke();
}
function draw(){
    background(0);
   translate(width/2, height/2);
  let ff=1000/height;

px=map(mouseX, -width/2,width/2,15,-15);
v=v+rv;
 sv=15*sin(v);
 x=px+sv;
blendMode(NORMAL);
 image( a, -x*0.3,0, a.width/ff, a.height/ff);
 image( b, x*0.2,0,w/ff, w/ff);
 image( c, x*0.4,0,w/ff, w/ff);
 image( d, x*0.5,0,w/ff, w/ff);
 image( e, x*0.6,0,w/ff, w/ff);
 blendMode(SUBTRACT);
 image( g, x*2,0,w/ff, w/ff);
 blendMode(NORMAL);
  image( f, x*1.1,0,w/ff, w/ff);

fxpreview();
//noLoop();
}
function windowResized() {  resizeCanvas(windowHeight, windowHeight); }
