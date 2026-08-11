//Diego de los Campos - Leandro Lopes de Souza  - Fpolis - 2022
//         0    1      2     3     4      5      6      7      8     9    10     11     12      13   14   15   16    17     18    19    20    21     22    23   24   25     26     27   28    29    30    31    32    33
var im= ['A1', 'A2', 'A3', 'A4', 'ab1', 'ab2', 'ab3', 'ab4', 'B1', 'B2', 'B3', 'bg1', 'bg2', 'C1', 'C2', 'C3', 'h1', 'h2', 'h3', 'h4', 't1', 't2', 't3', 'w1', 'w2', 'w3', 'w4', 'w5'];
let rA, rab, rB, rbg, rC, rh, rt, rw;
let  aA, ab, bB,  bg, cC,  h,  t,  ww;
let w=1000; //comprimento das png (quadradas)

function preload(){
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  rA= int(random( 0 ,4 )); //detalhe a
  rab= int(random( 4,8  )); //detalhe b
  rB= int(random( 8,11 )); //detalhe c
  rbg= int(random(11,13 )); //detalhe c
  rC= int(random(13,16 )); //detalhe c
   rh= int(random(16,20 )); //detalhe c
   rt= int(random(20,23 )); //detalhe c
   rw= int(random(23,27 )); //detalhe c

aA = loadImage('./data/'+im[rA]+ '.png'); //leg1
ab = loadImage('./data/'+im[rab] + '.png'); //abdomem
bB = loadImage('./data/'+im[rB] + '.png'); //leg2
bg = loadImage('./data/'+im[rbg] + '.jpg'); //backgound
cC = loadImage('./data/'+im[rC] + '.png'); //leg3
h = loadImage('./data/'+im[rh] + '.png');   //head
t = loadImage('./data/'+im[rt] + '.png');  //torax
 ww = loadImage('./data/'+im[rw] + '.png'); //assas

window.$fxhashFeatures = {
"Background" :rbg-10+'/2',
"Head": rh-15+'/4',
"Leg A": rA+1+'/4',
"Leg B": rB-7+'/3',
"Leg C": rC-12+'/3',
"Thorax": rt-19+'/3',
"Abdomen": rab-3+'/4',
"Wings":   rw-22+'/5'}

}



function setup() {
  createCanvas(windowWidth, windowHeight);
   imageMode(CENTER);

  noStroke();
}
function draw(){
    background(130);
   translate(width/2, height/2);
  let ff=1000/height;
 blendMode(NORMAL);
 image( bg, 0,0,w/ff, w/ff);
 image( t, 0,0,w/ff, w/ff);
 image( ab, 0,0,w/ff, w/ff);
 image( aA, 0,0,w/ff, w/ff);
 image( bB, 0,0,w/ff, w/ff);
 image( cC, 0,0,w/ff, w/ff);
 image( h, 0,0,w/ff, w/ff);
 blendMode(MULTIPLY);
 image( ww, 0,0,w/ff, w/ff);



fxpreview();
noLoop();
}
function windowResized() {  resizeCanvas(windowWidth, windowHeight); }
