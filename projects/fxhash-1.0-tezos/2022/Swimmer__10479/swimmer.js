// //Diego de los Campos, Fpolis, sc, Brazil, 2022.

// I am interested in the eye getting caught in an ambiguous shape that can remind you a fish or a jellyfish, a buffalo or a crazy hairy dog, a mollusk or a protozoan, a dragon or an entity from another dimension.
// I am interested in your eye going through the figure, riding with it, and having fun in the reverie of possibilities that travels to nowhere.
// The code, made in P5js, has random factors that define the texture of the background, the vertical amplitude of the movement, the length of the hair or the colors, that can be on black and white, pastel range, variable colors or variable colors with stripes.

let a, n=0, b=0, c=0, r1, r2,r3, rr, gg, bb;
let v=0,k=0, t, rw, hc, rc;
let vrr;
let vgg;
let vbb;

function setup(){
createCanvas(windowWidth, windowHeight);
 background(0);
 seed=int(fxrand() * 100000000); // FXHASH seed rand
 randomSeed(seed);
noiseSeed(int(random(500)));
smooth();
 noStroke();
r1=random(1,50);
r2=random(1,50);
r3=random(2,200);
rr=int(random(50));
gg=int(random(50));
bb=int(random(50));
rw=random(10,30); //amplitude
hc=random(7,18);
rc=int(random(4));
vrr=255-rr;
vgg=255-gg;
vbb=255-bb;

 window.$fxhashFeatures = {
"Amplitude": round(r1,1),
"Frequency": round(r2,1),
"Color": gimmiColor(rc),
"Hair length": 'WindowHeight/' + round(hc,1)
}
}
function gimmiColor(rc){
  if(rc==0){return 'B&W';}
  if(rc==1){return 'Variable';}
  if(rc==2){return 'rgb: ' + vrr + ',' + vgg + ',' + vbb;}
  if(rc==3){return 'Variable with stripes';}

}
function draw(){

noStroke();
//b=b+0.1*noise(c);
c=c+0.006;
a=c; n=c;
for(i=0;i<width; i+=width/40){  n=n+0.01;
a=0;
for(ii=0;ii<width*1.8; ii+=width/70+20*noise(c)){
a=a+0.1;
let mt=map(ii,0,height,height/10,0);
if(rc==0){fill(255*noise(a,n+c)-mt);}else{
fill((255-rr)*noise(a,n+c)-mt, (255-gg)*noise(a,n+c)-mt, (255-bb)*noise(a,n+c)-mt);}

rect(i,ii,width/40+10*noise(c),width/70+20*noise(c));}}

let bunda =width/4.2;
let cabeza= width/4.2;//width-width/4.2;
let topo  =height/2.8;
let barri =height/2.8;//height/1.8;
push();
translate(width/2-10*noise(c*1.72), height/2);

scale(0.5+(noise(c))/1.5);

for( i=-width/2+bunda; i<width/2; i+=width/100){
  v+=0.00137;
for( ii=-height/2+topo; ii<height/2-barri; ii+=height/100){
k+=0.000001;

let m  =map(ii,height/2-barri,-height/2+topo,0,255);
let mrr=map(ii,height/2-barri,-height/2+topo,0,255-rr);
let mgg=map(ii,height/2-barri,-height/2+topo,0,255-gg);
let mbb=map(ii,height/2-barri,-height/2+topo,0,255-bb);

let ms=map(i,-width/2,width/2,height/1800,height/200);
if(rc==0){stroke(m);}
if(rc==1){stroke(mbb+i/10*sin(v+n),mrr,mgg-ms*10);}
if(rc==2){stroke(mbb,mrr,mgg-ms*10);}
if(rc==3){stroke(m*sin(n/gg*10+i/20),m*sin(v/rr*5),m*cos(n/bb*70));}

let vb= map(i,0,width, height/20,0);
strokeWeight(ms);
let mp=map(i, 0,width, height/7,height/20);
//if(dist(i,ii,cabeza,(topo+barri)/2)<=(barri-topo)/2 || i<= cabeza){
  if(dist(i,ii,width/2-cabeza, 0)<=height/2-barri || i<= width/2-cabeza ){
let wv=height/rw;
let am=height/hc;
line(i,ii+(wv+vb)*sin(v+i/r3), -mp+i+am*sin(v+ii/r1),ii+am*cos(k+i/r2)+(wv+vb)*sin(v+i/r3)); }
}}
pop();
fxpreview();
}
function windowResized(){createCanvas(windowWidth, windowHeight);}
