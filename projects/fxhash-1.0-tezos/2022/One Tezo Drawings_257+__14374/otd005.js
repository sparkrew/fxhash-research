// One Tezo Drawings_+ - otd005.js
// was created by Diego de los Campos <deloscampos@gmail.com>
// on 05 2022
var im =[];
var im2=[];
var imm =[];
var imm2=[];
let n1;
let h;

let r=[];
let pg;
let seed;

function preload(){
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

    for(i=0; i<29; i++){
    r[i] =random(40);
      im[i]=loadImage('./'+i+'.png');
      }

    shuffle(im , true);
    im2= shuffle(im,true);
    ni =int(random(7,12));
    mono =loadFont ('./LiberationSansNarrow-Regular.ttf');


  }
function setup() {
if(windowHeight<=windowWidth){
createCanvas(windowHeight,windowHeight);}else{
createCanvas(windowWidth,windowWidth);}

}
function draw() {
pg=createGraphics(1500,1500);
pg.pixelDensity(1);
pixelDensity(1);
pg.imageMode(CENTER);
imageMode(CENTER);
pg.translate(pg.width/2,pg.height/2);
translate(width/2,height/2);
pg.background(160);
for(i=0; i<ni; i++){
  pg.scale(-1,1);
  pg.image(im2[i], 0,0);
    pg.scale(-1,1);
  if(r[i]<34){
  pg.image(im[i], 0,0);}
}
pg.textFont(mono);
pg.textAlign(RIGHT);
pg.textSize(22);
pg.fill(0);
pg.text('One Tezo Drawings_257+  Diego de los Campos - 2022',pg.width/2.1+1, pg.height/2.1+1);
pg.textSize(19);
pg.text( fxhash,pg.width/2.1+1, pg.height/2.04+1);
pg.fill(220);
pg.textSize(22);
pg.text('One Tezo Drawings_257+  Diego de los Campos - 2022',pg.width/2.1, pg.height/2.1);
pg.textSize(19);
pg.text(fxhash,pg.width/2.1, pg.height/2.04);
image(pg,0,0,width,height);
fxpreview();
noLoop();
}
function windowResized(){
if(windowHeight<=windowWidth){
createCanvas(windowHeight,windowHeight);}else{
createCanvas(windowWidth,windowWidth);}

loop();}
function keyTyped() {
       if (key === 'p' || key === 'P') { pg.save('OneTezoDrawing03.png');}
  else if (key === 'j' || key === 'J') { pg.save('OneTezoDrawing03.jpg');}
}
