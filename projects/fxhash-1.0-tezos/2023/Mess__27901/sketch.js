var x
var y
var x1
var y1 


var rx =rnd(2,5)
var ry =rnd(2,5)
var rt =rnd(0,360)
var tr =rnd(50,200)
var g =rnd(0,80)
  var rr =rnd(0,80)

  var az =rnd(0,80)

function setup() {
  createCanvas(1000, 1000,WEBGL);
  x=rnd(-width/2,width/2)
y=rnd(-height/2,height/2)
  if(az<20){background("#001C30")}
  
   if(az>20&az<40){background(0)}
  
  if(az>40&az<60){background("#212A3E")}
  
  if(az>60&az<80){background("#263A29")}
  // background(0);
  angleMode(DEGREES)

}

function draw() {
  
  
  
  if(rr<20){
    var gg =100
    }
if(rr>20&rr<40){
   var gg =125
   }
  
   if(rr>40&rr<60){
 var gg =200
 }
if(rr>60&rr<80){
var gg =300
}
  
  
  
  
  
    var l = rnd(0,gg)
     if(l<10){
     
       fill("#FFD32D")
     }
       if(l>10&l<20){
        fill("#FF8B13")
       }
          if(l>20&l<30){ 
         fill("#DA1212")
          }
       if(l>30&l<40){
            fill("#733C3C")
       }
       if(l>40&l<50){
     fill("#10A19D")
       }
       if(l>50&l<60){
       fill("#001E6C")
       }
       if(l>60&l<70){
       fill("#367E18")
       }
       if(l>70&l<80){
       fill("#990000")
       }
     if(l>80){
       fill(255)
     }
    
  rotate(rt)
  for(i=0 ;i<120;i++){
    
if(g<20){
  rotateX(frameCount/rx)
  rotateY(frameCount/(1*ry))
}
    if(g>20&g<40){
        rotateX(frameCount/rx)
  rotate(frameCount/(1.5*ry))
    }
       if(g>40&g<60){
        rotate(frameCount/rx)
         rotate(-frameCount/(3.5*ry))
       stroke(0)
         box(10,10)
    }
    
       if(g>60&g<80){
           rotateX(frameCount/(4.5*ry))
           rotate(-frameCount/(2.5*ry))
         strokeWeight(1)
         stroke(0)
         box(10,10)
    }
    
    translate(tr,0)
    stroke(0)
    // rectMode(CENTER)
    strokeWeight(2)
    stroke(0)
  rect(0,0,rnd(10,20))
    strokeWeight(0.02)
    stroke(255)
    
    line(0,0,520,520)
  }
  
  
  if(frameCount>1400){
noLoop()
}
}
function rnd(min,max){
  return fxrand()*(max-min) + min;
}