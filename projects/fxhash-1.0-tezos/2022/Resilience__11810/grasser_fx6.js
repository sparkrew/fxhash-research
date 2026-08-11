////////////////////////////////////////////////////////////////////////////////////////////
// Resilience
// by Grasser Alexander. 2022 @grasser_alex

let sW, sH;
let asciiDiv;
let pos = [];
let valu=[];
let val = [];
let runC=false;

let pOA = [];
let maxA;
let maxB=6;

let pOA2 = [];
let maxA02;
let maxA02B=8;

let runCo=true;
let runCI=10;
let runCLSet=[0.05,0.05,0.1,0.1,0.2,0.2,0.2,0.3,0.4];
let runCL;

let center;
let posCent;
let posCent2;

let bg; 
let tCol;

let grow=0.02;///0.005 0.01
let fade=0.0004;//0.0002 0.0005

let sGrid=false;

let speedSet=[10,10,10,10,10,20,20,20,20,25];
let speed; 

let nVrun=true;  
let nVSet=[0.0,0.0,0.0,0.0,0.0,0.1,0.4,0.6,0.7,0.8];
let nV;

let sFset =[2,2,2,2,2,2,2,2,2,3,3];
let sF;
let sFOG;

let colPxl=true;
let pcON=false;
let pcONset;
let pON=false;
let pBW=false;

let p01 = ["#D90452","#730237","#F241A3","#6B71F2","#2E4BF2"];
let p02 = ["#03A66A","#02734A","#2C2C2C","#C0D904","#D9A3A3"];
let p03 = ["#D9042B","#F0F0F2","#F2BF27","#558204","#2C2C2C"];
let p04 = ["#F2F2F2","#A68B05","#D9BD30","#F6DBD5","#D9A7A3"];
let p05 = ["#E0E0E0","#FF0000","#008000","#0000FF"];
let p06 = ["#2C2C2C","#F2A81D","#F29829","#F2C8C4","#D98484"];
let p07 = ["#303130","#04D9D9","#04D9B2","#04BF68","#D5D5D5"];
let p08 = ["#010326","#141A8C","#293CA6","#E4EAF2","#1A1A1A"];
let p09 = ["#2C2C2C","#C3B6F2","#7292F2","#4F5E8C","#F2B4AE"];
let p10 = ["#F2274C","#F0F2F2","#FFE126","#F27405","#005497"];
let p11 = ["#2C2C2C","#F20519","#F20544","#F20587","#F205B3","#05F29B"];
let p12 = ["#CE7ED9","#BE5BD9","#8C1AD9","#BDF24B","#F2D22E"];
let p13 = ["#010326","#F2274C","#F0F2F2","#FFE126","#F27405","#005497"];
let p14 = ["#9E9E9E"];

let pSet=[p01,p02,p02,p03,p03,p04,p05,p06,p07,p08,p09,p10,p10,p10,p11,p12,p13,p14];
let pSel;

let a01 ='░▒▓█▄╢╖╕•○☺☼•▓▄'; 
let a02 ='─▐│┌┐▄└┘▌├┤▄┬┼┴█'; 
let a03 ='→▐↑\▲A♥A▼/↓▌←';  
let a04 ='┼▌▄•№€$☺☻♥█▓▒░▀▌'; 
let a05 ='█┐▄▌▀├█┬┼┴─┴┼┬█┤▀▐▄┌';
let a06 ='─╟═┐╙╫│╓├╤╪╧┤╖│╫╜┌═╢';
let a07='▄▐▀⌂≡½☺¼≡⌂▀▌▄';
let a08='░▒▓█♥A+A♥█▓▒░';
let a09='‹▐[|■=▪=■|]▌›';

let aSet =[a01,a01,a02,a02,a02,a03,a04,a04,a05,a05,a05,a06,a07,a07,a07,a08,a09,a09];
let aSel;

function setup() {
   
let seed= int(fxrand() * 100000000)
randomSeed(seed); 
noiseSeed(seed);

  
  aSel=aSet[floor(map(random(),0,1,0,aSet.length))];

  let pSelInt=floor(random(0,pSet.length));
  pSel=pSet[pSelInt];
  
  if(pSelInt==pSet.length-1){ pcON=true; pON=false; pBW=false; }else{
    pcON=false; pON=true; pBW=false;     
  }

  

  sF=sFset[floor(random(0,sFset.length))]-0.8;
  nV=nVSet[floor(random(0,nVSet.length))];
  pcONset=int(random(0,1));  
  speed=speedSet[floor(random(0,speedSet.length))];

  runCL=runCLSet[floor(map(random(),0,1,0,runCLSet.length))];

  
  if(random(0,1)<0.5){bg=255; }else{bg=0;}

  if(bg==0)tCol = "#FFFFFF";
  if(bg==255)tCol = "#000000";
  if(colPxl)bg=tCol;
  

  
  w = windowWidth;
  h = windowHeight; 
  sFOG=sF;
  if (h<800){
    sF=sF;
    grow=0.02;
   fade=0.0004; 
  }
  
  createCanvas(w, h);
  background(bg);
  noSmooth();


  sW = 8 * sF;
  sH = 16 * sF;
  posCent=(w-(int((w-sW)/sW)*sW))/2;
  posCent2=(h-(int((h-sH)/sH)*sH))/2;
  
  maxA=int(random(1,maxB));
  maxA02=int(random(1,maxA02B));

  asciiDiv = createDiv();
  asciiDiv.style("font-size", `${sW * 1.25}pt`);
  asciiDiv.style("line-height", `${sH * 0.75}pt`);
  document.body.style.color = tCol;
  document.body.style.backgroundColor = bg;


  for (let j = posCent2; j < h - sH * 1.5; j = j + sH) {
    for (let i = posCent; i < w - sW * 1.5; i = i + sW) {
      pos.push(new createVector(i, j));
      valu.push(0);
    }
  }
  
    
for (let j = 0; j <maxA; j++) {
      let xt=random((w*0.1),(w*0.9));
      let yt=random((h*0.1),(h*0.9));
      let rt=random(1,4); //1 4
      let pR=int(random(-0.4,3.4)); 
      let rIv=int(random(5,100)); 
        pOA[j]=new OA(xt,yt,rt,pR,rIv);
    }  
  
for (let j = 0; j <maxA02; j++) {
       let xt=random((w*0.1),(w*0.9));
       let yt=random((h*0.1),(h*0.9));
       let rt=random(0,1); //0 1
       let pR=int(random(-0.4,3.4)); 
       let rIv=int(random(20,100)); 
         pOA2[j]=new OA(xt,yt,rt,pR,rIv);
    }  
    
}

class OA {
  constructor(_xt, _yt, _rt,_pR,_rIv) {
    this.x = _xt;
    this.y = _yt;
    this.rnd = _rt;
    this.pickDir=_pR;
    this.rIv=_rIv;
  }
  
  move() {   
    
if (frameCount % this.rIv == 0){ 
  this.pickDir=int(random(-0.4,4.4)); }
  
let run=frameCount/frameCount + speed;  
    
switch (this.pickDir) {
case 0:this.x += run;
       if(this.x>w*0.85){this.x=w*0.15;} 
 break;
case 1:this.x -= run;
    if(this.x<w*0.14){this.x=w*0.84;}    
 break;
case 2: this.y += run;
    if(this.y>h*0.85){this.y=h*0.15;}
 break;
case 3:   this.y -= run;
    if(this.y<h*0.14){this.y=h*0.84;}
 break;    
case 4:   this.y =this.y;
     this.x =this.x;    
break;
}       

}  
 
  trace(){    
          for (let j = 0; j < pos.length; j++) {
            let tV= createVector(this.x, this.y);
             let c = p5.Vector.sub(pos[j], tV);
             let length = c.mag();
            if(length<sH * this.rnd){
              if(valu[j]<0.98)valu[j]+=grow; 
              if(valu[j]>=1)valu[j]=1;}
            else {
              if(valu[j]>0.01)valu[j]-=fade; 
              if(valu[j]<=0)valu[j]=0;}            
          }         
         }
  
   trace2(){ 
          for (let j = 0; j < pos.length; j++) {
            let tV= createVector(this.x, this.y);
             let c = p5.Vector.sub(pos[j], tV);
             let length = c.mag();
            if(length<sH * this.rnd){
              if(valu[j]<0.98)valu[j]+=0.01; 
              if(valu[j]>=1)valu[j]=1;}
            else {
              if(valu[j]>0.01)valu[j]-=0.00001; 
              if(valu[j]<=0)valu[j]=0;}            
          }         
         } 
  
  cycle(){
       for (let j = 0; j < pos.length; j++) {
         if(valu[j]!=0){
           if(valu[j]>0.01){
         valu[j]+=0.003;
         if(valu[j]>=0.98) valu[j] =0.05;
         }        }   
      }    
  }  
}


function draw() {
  noSmooth();
   frameRate(30);
  background(bg);
  let asciiC = "";

  asciiDiv.position(posCent, posCent2);
    
  if (frameCount % runCI == 0){  
        if(runCo){
        runC=false;
        runCI=int(random(10,60));
        let r=random();  
        if(r<runCL){
        runC=!runC;}}}
  
  for (let j = 0; j <maxA; j++) {
    pOA[j].move();
    pOA[j].trace(); 
    if(runC)pOA[j].cycle(); 
  } 
    for (let j = 0; j <maxA02; j++) {
    pOA2[j].move();
    pOA2[j].trace2();     
  } 

  
let co = 0;
for (let j = posCent2; j < h - sH * 1.5; j = j + sH) {
 for (let i = posCent; i < w - sW * 1.5; i = i + sW) {
      
      let n = (noise(0.0001*i,0.0001/j, frameCount*0.001));      
      let up= (n*nV);
      if(!nVrun)up=0;
      let mix = valu[co]+up;     
   
      push();
if(colPxl){
     let col;
     noStroke();
 if(sGrid)stroke(255);      
  
     if(pcON){
       if(pcONset==0)col = int(map(mix, 0, 1+up, 30,230));
       if(pcONset==1)col = int(map(mix, 0, 1+up, 230,30));
        fill(col);}
            
     if(pON){
       col = int(map(mix, 0, 1+up, 0, pSel.length));
      fill(pSel[col]);} 
 
  if(pBW){
   if(bg=="#FFFFFF")fill("#000000");
  if(bg== "#000000")fill("#FFFFFF");
  }
  
  
      rect(i,j,sW,sH);
    }     
   pop();
      
     const charIndex = int(map(mix, 0, 1+up, 0, aSel.length));
     const c = aSel.charAt(charIndex);

      asciiC += c;
      co++;
    }
    asciiC += "<br/>";
  }

 asciiDiv.html(asciiC);

if(frameCount==200)fxpreview()
  
}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  background(bg);
  w = windowWidth;
  h = windowHeight;  
  
  if (h<800){
    sF=sF;
    grow=0.02;
   fade=0.0004;
  }else{sF=sFOG;};
  
    if (w>=1600){
      sF=sFOG+1.5;
    }
  
  sW = 8 * sF;
  sH = 16 * sF;  
  
  asciiDiv.style("font-size", `${sW * 1.25}pt`);
  asciiDiv.style("line-height", `${sH * 0.75}pt`);
  
  posCent=(w-(int((w-sW)/sW)*sW))/2;
  posCent2=(h-(int((h-sH)/sH)*sH))/2;
  
  pos=[];
 if(frameCount>222)valu=[];
  
  for (let j = posCent2; j < h - sH * 1.5; j = j + sH) {
    for (let i = posCent; i < w - sW * 1.5; i = i + sW) {
      pos.push(new createVector(i, j));
    valu.push(0);
    }
  }    
  
}


function keyTyped() {
  if (key === 'b')   pBW=!pBW;
}

function mouseClicked() {
   let fs = fullscreen();
   fullscreen(!fs); 
}


// made wiht P5js
// The Content CopyRight of all the minted artworks of this generative token remains with Grasser Alexander 2022 @grasser_alex. 