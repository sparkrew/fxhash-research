let j,k,A,B,C,D;
let ribon;
let h;
let inheight;
let ribth;
let rndness;
let ystretch;
let ribthickness;
let inneryscale;
let innerxscale;
let innerwobble;
let curvedir;
let innerpop;

let xshift;
let yheight;
let yheightabs;
  
let iTotal;
let yheightabsScale;
let hshift;
  
//features
let xscale;
let topscale;
let bottomscale;
let floretroundness;
let backboneshiftfactor; 
let floretcurviness;
let grail;


  //colors
  let r1;//green on stripe
  let r2;
  let r3; //green 140 240
  let r4;
  let r5; //red
  
  let a1;
  let a2;
  let a3;
  let stripetype;

  let bluespeed;
  let veinthickness;
  let linethickness;



function windowResized() {
  resizeCanvas(min(window.innerWidth,window.innerHeight),min(window.innerWidth,window.innerHeight));
  
  //will have to regen artwork
  background(10,10,50);
  generate();
}

function setup() {
  createCanvas(min(window.innerWidth,window.innerHeight),min(window.innerWidth,window.innerHeight));
  pixelDensity(2);
  
  //console.log(fxrand())
  noiseSeed(random_int(0,1000));

  j = 0;
  A = width/2.5;
  B = 0.1;
  C = 100;
  D = 0;
  h=0;
  
  
  xshift=0;
  yheight=0;
  yheightabs = 0;
  
  iTotal = 3400;
  yheightabsScale = 1;
  hshift =0;
  
  //features
  xscale = random_num(0.9,1);
  topscale = random_num(0.8,1);
  bottomscale = random_num(0.8,1.1);
  floretroundness =random_num(0.4,1.2);//was 0.5,0.7
  backboneshiftfactor = random_num(-2,2); //1 for straight
  floretcurviness = random_num(-20,60);//d40, 10-50 - big changer
  
  ribth = random_num(0.5,1.5);
  rndness = random_num(20,60);
  ystretch = random_num(1.1,2);
  ribthickness = random_num(1,16);
  inneryscale = random_num(0.05,0.28);
  innerxscale = random_num(0.08,0.1);
  innerwobble = random_num(0.8,1.3);
  
  grail = random_num(0,1000);
  
  innerpop = random_num(height/8*-1,height/3);
  
  if(fxrand()>0.5){
    curvedir = random_num(50,200);
  }else{
    curvedir = random_num(-100,-50);
  }
  
  let inverse = "false";
  if(fxrand()>0.05){
    floretcurviness = random_num(20,60);
  }else{
    floretcurviness = random_num(-15,-10);
    inverse = "true";
  }
  
  inheight= random_num(-height/5,height/5);
  
  ribon = fxrand();
  
  
    //colors
  r1 = random_int(110,255);//green on stripe
  r2 = random_int(90,250);
  r3 = random_int(50,180); //green 140 240
  r4 = random_int(140,240);
  r5 = random_int(60,240); //red
  
  a1 = random_int(20,80);
  a2 = random_int(20,80);
  a3 = random_int(20,50);
  stripetype = 1;
  
  let st;
  let dice = fxrand();
  if(dice>=0.2){
    stripetype = 1;
    st = "normal";
    //1,2,3.01,3.14, 5  
  }else if(dice>=0.15 && dice<0.2){
    stripetype = 5;
    st = "extra stripy";
  }else{
    stripetype = 3.01;
    st = "triple stripy";
  }
  
  bluespeed = 3;
  if(fxrand()>0.5){bluespeed = 2;}
  veinthickness= random_num(0.1,0.98);
  linethickness = random_num(0.8,0.92);
  
  
  
  if(floretcurviness>40){
    linethickness = 0.92;
  }
  
  //feature categorisation
  let biggie = "mid bloom";
  if(floretcurviness>35 && xscale>0.88 && floretroundness>0.82){
    biggie = "good bloom";
  }
  if(floretcurviness>27 && xscale>0.88 && floretroundness>0.95){
    biggie = "good bloom";
  }
  if(floretcurviness>50 && xscale>0.95 && floretroundness>0.7){
    biggie = "good bloom";
  }
//   console.log(floretcurviness);
//   console.log(xscale);
//   console.log(floretroundness);
  
  if(floretcurviness>45 && xscale>0.91 && floretroundness>0.84){
    biggie = "big bloom";
  }
  if(floretcurviness>39 && xscale>0.9 && floretroundness>0.9){
    biggie = "big bloom";
  }
  
  if(floretcurviness>45 && xscale>0.92 && floretroundness>0.9){
    biggie = "huge bloom";
  }
  
  if(floretcurviness>54 && xscale>0.95 && floretroundness>0.98){
    biggie = "epic bloom";
  }
  let center = "centered";
  if(inheight<-height/8){
    center = "high";
    //console.log('high');
  }
  if(inheight>height/8){
    center = "low";
  }
  
  let pleats = "mid pleat";
  if(ribthickness<2){
    pleats = "smooth";
  }
  if(ribthickness>10){
    pleats = "detailed";
  }
  if(ribthickness>14){
    pleats = "extra detailed";
  }
  if(ribthickness>15.5){
    pleats = "extra detailed";
  }
  
  let redgrail = "no";
  if(grail>996){
    redgrail = "yes";
  }
  // console.log(ribthickness);
  


  
  // console.log(floretcurviness);
  // console.log(xscale);
  // console.log(floretroundness);
  
  
  
  background(10,10,50);
  angleMode(DEGREES);
  noLoop();
  
  
   let features = {
    "Stripe":st,
     "Bloom":biggie,
     "Center":center,
     "Pleats":pleats,
     "Inverse":inverse,
     "Red Grail":redgrail
  }
  
  console.log(features);
  window.$fxhashFeatures = features;
}

function draw() {
  
  generate();
}

function generate(){
  
  push();
  
  translate(width/2,height/2);
  rotate(random_num(-2,2));
 
  // loop
  for(let i=0; i<=iTotal;i++){
    
  //circle j,k coordinates  
  j = A*sin(B*(i + C)) + D;
  k = A*cos(B*(i + C)) + D;
    
  // xheight 
  yheight = (i-iTotal/2);
  yheightabs = Math.abs(i-iTotal/2);
    
  yheightabsScale = map(yheightabs,0,iTotal/2,topscale,bottomscale); 
    
  // xshift
  xshift = (sin(yheight*1)*-floretcurviness)*floretroundness; //0-0.7
  hshift = sin((map(k,0,height,-2,2))*(height/5))*backboneshiftfactor;
  //hshift= 1;
  //point(hshift,k); //debug

    
  //colouring algo
  strokeWeight(linethickness); //0.2 - 0.8
  //1,2,3.01,3.14, 5  
  if(100*sin(i*stripetype)>veinthickness){
    //stripe
    stroke(250,r1, map(sin(i),-1,1,20,r2), 70);
  }
  else{
      //main
    stroke(map(cos(i*2),-1,1,0,r5),r3, map(sin(i*bluespeed),-1,1,50,r4), 120);  //120
  } 
    
    if(grail>996){
      stroke(200,5, map(sin(i*bluespeed),-1,1,0,90),100);
    }
    
  //line algo
    fill(a1,a2,a3,30);
    greenleafnew(i);
  }
    
  pop();
  
}



function greenleafnew(i){
  
  let desym=5;//5;
  
  let ribs = 0;//Math.abs(cos(i*10)*2);//freq 4-10, scale 2-8
  if(ribon>0.1){
    ribs =Math.abs(cos(i*ribth)*4);
  }
  
  let rubs = map(Math.abs(cos(i*ribthickness)),0,1,1,1.015);
  let p1 = { x: j*innerxscale*(1+sin(i*innerwobble)*0.1)+hshift, //0.5, 1.2 
            y: k*inneryscale+inheight };//inner circle
  
 let p2 = { x: (rubs*j+xshift+(noise(i*0.01)*10))*xscale*yheightabsScale+hshift, 
       y:(rubs*k+(noise(i*0.01)*rndness*(ystretch*sin(i*0.5)))*cos(i*0.5)+desym*cos(i*0.01))+ribs };//outercircle
    
  let p3 = { x: j*1.2, y: (k*1.3)+curvedir }; //-100 -200
  

  if(i<1700){
  curve(p1.x, p1.y-innerpop, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y-height/3);
  }else{
    curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y+height/3);//150
  }
  
}



function random_num(a, b) {
    return a+(b-a)*fxrand()
  }

function random_int(a, b) {
  return Math.floor(random_num(a, b+1))
}
