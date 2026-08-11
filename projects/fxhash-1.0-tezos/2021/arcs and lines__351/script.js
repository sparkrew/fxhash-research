var r=0
var cl=[]
function setup() {
  createCanvas(800,800);
    background(255);

  angleMode(DEGREES)
  cst1=5*(fxrand()+1)+fxrand()
  
  noLoop()
  noFill()
  cst2=255*fxrand()
  cst3=255*fxrand()
  cst4=255*fxrand()
  cl[0]=color(cst2,cst3,cst4)
  cl[1]=color(cst4,cst2,cst3)
  cl[2]=color(cst3,cst4,cst2)
  
 
}

function draw() {
  translate(width/2,height/2)
  
  for(var i=0;i<1000;++i){
    stroke(cl[int(random(0,3))])
    t1=random(0,360)
    t2=random(0,360)
    strokeWeight(2)
    
    line((r/2)*cos(t1),(r/2)*sin(t1),((r/2)+cst1/2)*cos(t1),((r/2)+cst1/2)*sin(t1))
   
    line((r/2)*cos(t2),(r/2)*sin(t2),((r/2)+cst1/2)*cos(t2),((r/2)+cst1/2)*sin(t2))
    
  for(var j=0;j<15;++j){
    t3=random(max(t1,t2),min(t1,t2))
    line((r/2)*cos(t3),(r/2)*sin(t3),((r/2)+cst1/2)*cos(t3),((r/2)+cst1/2)*sin(t3))
  }
    arc(0,0,r,r,t1,t2)
    
    r=r+cst1
    
  }
 
}