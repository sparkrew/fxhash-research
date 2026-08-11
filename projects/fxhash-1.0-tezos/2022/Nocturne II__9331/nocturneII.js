//Patricia Rocha  - Fpolis - 2022
//        0    1     2     3     4     5      6     7      8       9    10     11      12    13     14    15    16    17    18    19    20    21    22    23      24     25     26     27     28   29    30    31    32  ¨ 33     34   35    36     37     38      39   40     41     42    43    44    45    46    47    48    49    50    51    52      53    54      55
var im1= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13'];
var im2= ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13'];
var im3= ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13'];
var im4= ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13'];
//var im5= ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12', 'e13', 'e14'];
var a=[];
var b=[];
var c=[];
var d=[];
//var e=[];
let h;
let cf=0;
let an;
let fr=30;
let img1, img2, img3, img4, img5;
let w=1000; //altura das png
let seed;

function preload(){
    seed=int(fxrand() * 100000000); // FXHASH seed randl8
randomSeed(seed);

an= int(random(4    ));

window.$fxhashFeatures = {
  "Animation": an +1 + ' of 4'

  }

  if(an==0){for(i=0; i< 13; i++){ a[i]=loadImage('./data/'+im1[0+i]  + '.png');}}
  if(an==1){for(i=0; i< 13; i++){ b[i]=loadImage('./data/'+im2[0+i]  + '.png');}}
  if(an==2){for(i=0; i< 13; i++){ c[i]=loadImage('./data/'+im3[0+i]  + '.png');}}
  if(an==3){for(i=0; i< 13; i++){ d[i]=loadImage('./data/'+im4[0+i]  + '.png');}}
//  if(an==4){for(i=0; i< 14; i++){ e[i]=loadImage('./data/'+im5[0+i]  + '.png');}}

}
function setup() {
createCanvas(windowWidth, windowHeight);
imageMode(CENTER);
background(0);
frameRate(fr);
background(0);
}

function draw(){
  translate(width/2, height/2);
//   fill(255);
// rect(0,0,100,100);
 let fff=w/height;
 let fzi=1000/1000;
 let fzc=height/width;

 ww=1000/fff; hh=1000/fff;


 if (an==0){
   if (cf>13){image(a[13], 0,0,ww,hh); noLoop();}
   image(a[cf], 0,0,ww,hh); cf=(cf+1)%15; fxpreview();
 fr = 1;
 frameRate(fr);
}

else if (an==1){
  if  (cf>13){image(b[13], 0,0,ww,hh);  noLoop();}
  image(b[cf], 0,0,ww,hh); cf=(cf+1)%14; fxpreview();
fr = 1;
frameRate(fr);
}

else if (an==2){
  if (cf>13){image(c[13], 0,0,ww,hh);  noLoop();}
  image(c[cf], 0,0,ww,hh); cf=(cf+1)%14; fxpreview();
fr = 1;
frameRate(fr);
}

else if (an==3){
  if (cf>13){image(d[13], 0,0,ww,hh);  noLoop();}
  image(d[cf], 0,0,ww,hh); cf=(cf+1)%14; fxpreview();
fr = 1;
frameRate(fr);
}

//else if (an==4){
//  if (cf>14){image(e[13], 0,0,ww,hh); noLoop();}
//  image(e[cf], 0,0,ww,hh); cf=(cf+1)%15;
//fr = 1;
//frameRate(fr);
//}

//else{  fxpreview(); noLoop();}
}

     function windowResized() {  resizeCanvas(windowWidth, windowHeight); }
