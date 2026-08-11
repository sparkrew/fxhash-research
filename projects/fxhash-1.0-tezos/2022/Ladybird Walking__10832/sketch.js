var h=[];
var id=[];
var g = [];
var e=[];
var f=[];
var k=[];
var bdia=[];
var x1,y1,x2,y2,x3,y3,x1c,y1c,x2c,y2c,x2c2,y2c2,x3c,y3c,rpx1,rpx2,rpx3,rpx4,rpy1,rpy2,rpy3,rpy4,rcyout,rcyin,rcxleft,rcxright,rcx1,rcx2,stc1,stc2,rix1,rix2,rix3,rix4,riy1,riy2,riy3,riy4,csh,csha,cc,cch1,cch2,cpk,cpkha,cdpk,cddpk,cdpka,cdpet,cpetha,cpeta,cring,cst,cstpet,cornshadow,ccol,ccold,ccolh,dark,light,mid,darka,midn,a, r, fc,fbi, fbj,li,lj,dex,dey,ay,lx,ly,la,legs,dcentrex,dcentrey,sewn,bstart,dstart,d1start;
function myRandom(low, high) {
  let r = fxrand();
  let t = map(r, 0, 1, low, high);
  return t;}
function myRandomA(i) {
  let t = i.length * fxrand();
  return i[Math.floor(t)];}
function setup() {
  cs=min(windowWidth, windowHeight);
  createCanvas(cs, cs); 
  frameRate(myRandom(10,20));
  noiseSeed(myRandom(0,10000));
  pg=createGraphics(cs,cs);
  for (let i = 0; i < 10000; i++) {
    h.push(i * cs * 0.0011);
  } 
  for (let i = 0; i < 10000; i++) {
    g.push(i * h[900] * 0.0007);
  }
  for (let i = 0; i < 10000; i++) {
    e.push(i * h[900] * 0.0009);
  }
  for (let i = 0; i < 10000; i++) {
    k.push(i * h[900] * 0.0005);
  }
  let lpch1=int(myRandom(1,13));legs=0;frameRate(myRandom(10,20));
  if (lpch1==1){lx=-h[70]/9; ly=myRandom(h[0]/9,h[700]/9); la=myRandom(PI/18,PI/3);}
    if (lpch1==2){lx=-h[70]/9; ly=myRandom(h[300]/9,h[1000]/9); la=myRandom(-PI*2/9,PI*2/9);}
    if (lpch1==3){lx=-h[70]/9; ly=myRandom(h[200]/9,h[800]/9); la=myRandom(-PI/18,-PI/3);}
    if (lpch1==4){lx=h[1070]/9; ly=myRandom(h[0]/9,h[700]/9); la=myRandom(PI*2/3,PI*17/18);}
    if (lpch1==5){lx=h[1070]/9; ly=myRandom(h[300]/9,h[1000]/9); la=myRandom(PI*7/9,PI*11/9);}
    if (lpch1==6){lx=h[1070]/9; ly=myRandom(h[200]/9,h[800]/9); la=myRandom(PI*19/18,PI*4/3);}
    if (lpch1==7){lx=myRandom(h[0]/9,h[700]/9); ly=-h[70]/9; la=myRandom(PI*4/9,PI*5/18);}
    if (lpch1==8){lx=myRandom(h[300]/9,h[1000]/9); ly=-h[70]/9; la=myRandom(PI*5/9,PI*13/18);}
    if (lpch1==9){lx=myRandom(h[200]/9,h[800]/9); ly=-h[70]/9; la=myRandom(PI/3,PI*2/3);}
    if (lpch1==10){lx=myRandom(h[0]/9,h[700]/9); ly=h[1070]/9; la=myRandom(PI*14/9,PI*31/18);}
    if (lpch1==11){lx=myRandom(h[300]/9,h[1000]/9); ly=h[1070]/9; la=myRandom(PI*23/18,PI*13/9);}
    if (lpch1==12){lx=myRandom(h[200]/9,h[800]/9); ly=h[1070]/9; la=myRandom(PI*4/3,PI*5/3);}
  pgwood();
  design();
}
function draw(){
  clear();
  noiseSeed(myRandom(0,10000));
  image(pg,0,0);
  translate(lx*8,ly*8);
  rotate(la);
  ladybird=new Ladybird(0,0,h[60],legs);
  ladybird.draw();
  lx+=(h[1]*cos(la));
  ly+=(h[1]*sin(la));
  la+=map(noise(0,1),0,1,-0.07,0.07);
  legs+=1;
  if (lx>h[1800]/9 || lx<-h[800]/9 || ly>h[1800]/9 || ly<-h[800]/9){ 
  let lpch=int(myRandom(1,13));legs=0;frameRate(myRandom(10,20));
  if (lpch==1){lx=-h[70]/9; ly=myRandom(h[0]/9,h[700]/9); la=myRandom(PI/18,PI/3);}
  if (lpch==2){lx=-h[70]/9; ly=myRandom(h[300]/9,h[1000]/9); la=myRandom(-PI*2/9,PI*2/9);}
  if (lpch==3){lx=-h[70]/9; ly=myRandom(h[200]/9,h[800]/9); la=myRandom(-PI/18,-PI/3);}
  if (lpch==4){lx=h[1070]/9; ly=myRandom(h[0]/9,h[700]/9); la=myRandom(PI*2/3,PI*17/18);}
  if (lpch==5){lx=h[1070]/9; ly=myRandom(h[300]/9,h[1000]/9); la=myRandom(PI*7/9,PI*11/9);}
  if (lpch==6){lx=h[1070]/9; ly=myRandom(h[200]/9,h[800]/9); la=myRandom(PI*19/18,PI*4/3);}
  if (lpch==7){lx=myRandom(h[0]/9,h[700]/9); ly=-h[70]/9; la=myRandom(PI*4/9,PI*5/18);}
  if (lpch==8){lx=myRandom(h[300]/9,h[1000]/9); ly=-h[70]/9; la=myRandom(PI*5/9,PI*13/18);}
  if (lpch==9){lx=myRandom(h[200]/9,h[800]/9); ly=-h[70]/9; la=myRandom(PI/3,PI*2/3);}
  if (lpch==10){lx=myRandom(h[0]/9,h[700]/9); ly=h[1070]/9; la=myRandom(PI*14/9,PI*31/18);}
  if (lpch==11){lx=myRandom(h[300]/9,h[1000]/9); ly=h[1070]/9; la=myRandom(PI*23/18,PI*13/9);}
  if (lpch==12){lx=myRandom(h[200]/9,h[800]/9); ly=h[1070]/9; la=myRandom(PI*4/3,PI*5/3);}
}
}