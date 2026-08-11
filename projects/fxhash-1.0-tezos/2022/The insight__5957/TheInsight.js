//Diego de los Campos (c) - Florianópolis - Jan - 2022

let nf = 7; //number of frames
let cf = 0; //current frame
let im= [];
let ox=0; // coordenadas dos olhos
let oy=0;
let ox1=0;
let oy1=0;
let a=0;
let rox=0;  //comportamento dos olhos
let roy=0;
let rox1=0;
let roy1=0;
let cara;
let costa;
let t=0;    //movimento do ceu
let g=0;    //transparência do ceu
let xoff=0; //defasagem de cada linha de montanha
let inc = 0.01;
let fh=0;
let seed=fxrand();

function preload(){
seed=int(seed*10000);  randomSeed(seed);
noiseSeed(seed*100);
rox =random(0.5,4);
roy =random(0.5,4);
rox1=random(0.5,4);
roy1=random(0.5,4);
fh =random(0.4,1);
a  =random(PI);
window.$fxhashFeatures = {
  "Eye1 in X" :round(rox,2 ), "Eye1 in Y" :round(roy,2 ),
  "Eye2 in X" :round(rox1,2), "Eye2 in Y" :round(roy1,2),
"Topo-factor" :round(fh,2)}

  for(i=0;i<7;i++){ im[i] = loadImage('./data/o'+i+'.png');}
  cara =loadImage('./data/cara.png' );
  costa=loadImage('./data/costa.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseSeed(random(50));
  frameRate(9);

  imageMode(CENTER);
}

function draw() {
  background(200);  translate(width/2, height/2);
 let f=1000/height;
 sky();
 noStroke();
 clouds();
 horizon1();
 horizon2();
 horizon3();
 horizon4();
  image(costa,height/50,0,costa.width/f, costa.height/f);  //pare de atras da cabeça
  //animação dos olhos
  cf = (cf+1) % nf;  // Use % to cycle through frames
  a+=0.3;
  oy= height/15*sin(a/roy )-height/30;
  ox= height/10*cos(a/rox );
  oy1=height/15*sin(a/roy1)-height/30;
  ox1=height/10*cos(a/rox1);
  let d1=im[(cf)%nf].height*height/1500+height/60*sin(a);
  let d2=im[(cf)%nf].height*height/1500+height/60*cos(a);

  if(d1<d2){push();  translate( ox, oy ); rotate( a/2); image(im[(cf  )%nf], 0,0, d1,d1); pop();
            push();  translate(-ox1,oy1); rotate(-a/2); image(im[(cf+2)%nf], 0,0, d2,d2); pop(); //o +2 é para que a animaç~~ao dos olhos comece 2 frames defasada daoutra

  }  else  {push();  translate(-ox1,oy1); rotate(-a/2); image(im[(cf+2)%nf], 0,0, d2,d2); pop();
            push();  translate( ox, oy ); rotate( a/2); image(im[(cf  )%nf], 0,0, d1,d1); pop();}

    image(cara,height/50,0,costa.width/f, cara.height/f);  //parte de frente da cabeça
    fxpreview();
}
function windowResized() {  resizeCanvas(windowWidth, windowHeight); }

function clouds() {
for(i = -width/2 ; i  <= width/2 ;   i+=7){  //nuvens
for(ii = -height/3.5; ii <height/2;  ii+=7 ){  //nuvens começo de cima < final de baixo
     var n = noise(i*0.005+t,ii*0.005);// var n = noise(i*0.005 + t,j*0.005+t);
     g =map(ii, -height/5, 0, 0,100);
     fill( 55 + n*200, g);
     rect(i,ii,7,7);
    }}
t+=0.005;
}

function horizon1( ){
  fill(185,100);
  beginShape();
  vertex(-width/2,height/2);
  xoff = 1;
  for ( x = -width/2; x < width/2+100; x+=1) {
  let yy1 = height/3-noise(xoff) * height/8*fh;
  vertex(x, yy1);
  xoff += inc;
  }
  vertex(width/2,height/2);
  endShape();
}
function horizon2( ){
  fill(160,200);
  beginShape();
  vertex(-width/2,height/2);
  xoff = 2;
  for ( x = -width/2; x < width/2+100; x+=2) {
  let yy2 = height/2.8-noise(xoff) * height/4*fh;
  vertex(x, yy2);
  xoff += inc;
  }
  vertex(width/2,height/2);
  endShape();
}
function horizon3( ){
  fill(150,240);
  beginShape();
  vertex(-width/2,height/2);
  xoff = 3;
  for (x = -width/2; x < width/2+100; x+=4) {
  let yy3 = height/2.4-noise(xoff) * height/3*fh;
  vertex(x, yy3);
  xoff += inc;
  }
  vertex(width/2,height/2);
  endShape();
}

function horizon4( ){
  fill(140,240);
  beginShape();
  vertex(-width/2,height/2);
  xoff = 4;
  for ( x = -width/2; x < width/2+100; x+=6) {
  let yy4 = height/2-noise(xoff) * height/2.8*fh;
  vertex(x, yy4);
  xoff += inc;
  }
  vertex(width/2,height/2);
  endShape();
}
function sky(){
  for(i=-height/2; i<height/3; i+=3){
    let c=map(i, -height/2,0,80,160);
    strokeWeight(3);
    stroke(c);
    line(-width/2, i, width/2, i);
  }
  }
