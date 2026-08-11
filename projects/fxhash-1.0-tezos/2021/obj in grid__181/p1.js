class objectss {
  constructor(xrect,yrect,coolr,rrran){
    this.xrec = int(xrect) ;
    this.yrec = int(yrect) ; 
    this.gridx = 0;
    this.gridy = 0 ;
    this.gridxbagi = 0;
    this.gridybagi = 0 ;
    this.numforx = 0;
    this.numfory = 0;
    this.colorr = coolr;
    this.rancirr = rrran;
    this.time = 0;
    
  }
    
  
  show() {
    
    rect(this.xrec ,this.yrec ,30,30 , 50, 50, 50, 50);
    //fill(this.colorr,200,100);
    strokeWeight(2);
    noFill();
    
    }
    
    show1(){
    this.time++;
    if( this.time >= 0 &&  this.time < 90 ){
      if(this.time % 20 >= 0 && this.time % 20 <= 5){
    line(this.xrec ,this.yrec, this.xrec + 30 ,this.yrec + 30 );
      
    line(this.xrec+ 30  ,this.yrec, this.xrec ,this.yrec + 30 );  
    }
    } else if(this.time  >= 90  ){
    line(this.xrec ,this.yrec, this.xrec + 30 ,this.yrec + 30 );
      
    line(this.xrec+ 30  ,this.yrec, this.xrec ,this.yrec + 30 );  
    }
    }
    
  move(){
    
    this.gridx = this.xrec % 30;
    this.gridy = this.yrec % 30;
    if(this.numforx < 80){
    this.xrec  -=  this.gridx/20 ;
    this.numforx++;
    }
    
    if(this.numfory < 80){
    this.yrec  -=  this.gridy/20 ;
    this.numfory++;
    }
    
  

  }
  
  

}

function setup() {
  c = createCanvas(1080,1080);
  
  background(this.colorr,200,100);
  x = -100;
  y = -100;
  //noCursor();
}

let rancir = 0 ;
let ranb = 1;
let collcr = 0;
let x = 100;
let y = 100;
let i = 0 ;
let ix = 0 ;
let obj = [];
function draw() {
  background(200);
  collcr += 1;
  if ( collcr >250){
    collcr = 0;
  }

   for(let linx =0 ; linx <1080 ; linx +=30){
     line(linx,0,linx,1080);
     stroke(0);
     strokeWeight(2);
   }

     for(let liny =0 ; liny <1080 ; liny +=30){
     line(0,liny,1080,liny);
     stroke(0);
     strokeWeight(2);
   }
  obj[i] = new objectss(x,y,collcr,rancir);
  rancir += 1 * ranb;
  if(rancir > 15){
    ranb = -0.1;
  }else if(rancir < 0.1){
    ranb = +0.1;
  }
   
  for( let p of obj){
    p.show();
    p.show1();
    p.move();
  }
 ix++ ;

 if (ix <= 1100 ){
     x = random(30,1050);
     y = random(30,1050);
     i += 1;
  } else if (ix >= 1300 ){
    noLoop();
    
  }

}



//function mouseMoved() {
//  x = mouseX-25;
//  y = mouseY-25;
//  
  
//}
