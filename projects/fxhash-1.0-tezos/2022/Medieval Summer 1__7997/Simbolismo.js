//Diego de los Campos - Leandro Lopes de Souza  - Fpolis - 2022
//         0    1      2     3     4    5      6     7     8     9    10    11      12    13    14   15    16    17     18    19    20   21     22    23   24   25     26     27   28    29    30    31    32    33
var im= ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'c5',  'd1', 'd2', 'd3', 'e1', 'e2', 'e3', 'p1', 'bg1', 'bg2'];
let ra, rb, rc, rd, re, rbg, rp;
let  a,  b , c, d, e,    bg,  p;
let w=1000; //comprimento das png (quadradas)

function preload(){
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  ra= int(random( 0 ,3 )); //detalhe a
  rb= int(random( 3,7  )); //detalhe b
  rc= int(random( 7,12 )); //detalhe c
  rd= int(random(12,15 )); //detalhe c
  re= int(random(15,18 )); //detalhe c
  rbg= int(random(19,21)); //detalhe c
  rp= int(random(10 )); //detalhe c



bg = loadImage('./data/'+im[rbg]+ '.png');

  a = loadImage('./data/'+im[ra] + '.png');
  b = loadImage('./data/'+im[rb] + '.png');
  c = loadImage('./data/'+im[rc] + '.png');
  d = loadImage('./data/'+im[rd] + '.png');
  e = loadImage('./data/'+im[re] + '.png');
  p = loadImage('./data/'+im[18] + '.png');





  window.$fxhashFeatures = {
  "Wings" :ra+1 +'/3',
  "Body":  rb-2 +'/4',
  "Girl":  rc-6 +'/5',
  "Hand":  rd-11+'/3',
  "Object":re-14+'/3',
  "Background": rbg-18+'/2',
  "KL": getKL(rp)}

  }
   function getKL(rp) { if(rp<2){return 'Yes'; }else{ return 'No';}}



function setup() {
  createCanvas(windowWidth, windowHeight);
   imageMode(CENTER);
  background(200);
  noStroke();
}
function draw(){
  background(0);
   translate(width/2, height/2);
  let ff=1000/height;

 image(bg, 0,0,w/ff, w/ff);
 image( a, 0,0,w/ff, w/ff);
 image( b, 0,0,w/ff, w/ff);
 image( d, 0,0,w/ff, w/ff);
 image( c, 0,0,w/ff, w/ff);
 image( e, 0,0,w/ff, w/ff);
if(rp<2){
 image( p, 0,0,w/ff, w/ff);}

fxpreview();
noLoop();
}
function windowResized() {  resizeCanvas(windowWidth, windowHeight); }
