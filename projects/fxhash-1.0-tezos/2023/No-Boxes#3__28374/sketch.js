var r1 =rnd(-15,15)
var r2 =rnd(-15,15)
var r3 =rnd(-15,15)
var r4 =rnd(-15,15)
var r5 =rnd(5,8)
var v =rnd(-2,2)
var f1 =rnd(5,9)
var f2 =rnd(5,9)
var x=rnd(-25,25)
var z=rnd(0,100)
var y=rnd(-3,3)
var b =rnd(0,100)
var rr=rnd(0,80)
var col =rnd(40,100)
var s1 =rnd(70,140)
var s2 =rnd(70,140)
var s3 =rnd(70,140)
var rt =rnd(0,360)
var b3=rnd(1990,2700)
function setup() {
  createCanvas(2000, 2000,WEBGL);
 
  angleMode(DEGREES)
  
  background(rnd(0,30),rnd(0,30),rnd(0,30))
  // frameRate(120)
}

function draw() {
   angleMode(DEGREES)
  rotate(rt)
  // translate(-width/2,-height/2)
  if(rr<20){
    var g2 =100
    }
if(rr>20&rr<40){
   var g2 =140
   }
  
   if(rr>40&rr<60){
 var g2 =120
 }
if(rr>60&rr<80){
var g2 =130

}

  
    rectMode(CENTER)

  // noStroke()
  
  
        var l = rnd(0,g2)
      
    
     if(col>40&col<60){
      
      
     
        if(l<10){
     
       fill("#FFEA20")
     }
       if(l>10&l<20){
        fill("#FF6D60")
       }
          if(l>20&l<30){ 
         fill("#F3E99F")
          }
       if(l>30&l<40){
            fill("#FDA769")
       }
       if(l>40&l<50){
     fill("#98D8AA")
       }
       if(l>50&l<60){
       fill("#F45050")
       }
       if(l>60&l<70){
       fill("#D14D72")
       }
       if(l>70&l<80){
       fill("#3C486B")
       }
     if(l>80){
       fill("#FFF2CC")
     }
      
    }
 
       if(col>60&col<80){
      
      
        if(l<10){
     
       fill("#539165")
     }
       if(l>10&l<20){
        fill("#3F497F")
       }
          if(l>20&l<30){ 
         fill("#F7C04A")
          }
       if(l>30&l<40){
            fill("#E7B10A")
       }
       if(l>40&l<50){
     fill("#898121")
       }
       if(l>50&l<60){
       fill("#4C4B16")
       }
       if(l>60&l<70){
       fill("#183A1D")
       }
       if(l>70&l<80){
       fill("#5D9C59")
       }
     if(l>80){
       fill("#FFF2CC")
     }
      
      
    } 
  
       if(col>80&col<100){
      
      
        if(l<10){
     
       fill("#D61355")
     }
       if(l>10&l<20){
        fill("#F94A29")
       }
          if(l>20&l<30){ 
         fill("#FCE22A")
          }
       if(l>30&l<40){
            fill("#30E3DF")
       }
       if(l>40&l<50){
     fill("#F99417")
       }
       if(l>50&l<60){
       fill("#5D3891")
       }
       if(l>60&l<70){
       fill("#00425A")
       }
       if(l>70&l<80){
       fill("#1F8A70")
       }
     if(l>80){
       fill("#FFF2CC")
     }
      
      
    } 
  
  
  for(i=0;i<200;i++){
  translate(x+frameCount/f2,y)
  rotate(frameCount/r5)
  translate(-x-frameCount/f1,y*v)
  rotateX(frameCount/r1)
    rotateY(frameCount/r2)
    rotateX(frameCount/r3)
    rotateY(frameCount/r4)
    stroke(255)
   strokeWeight(0.2)
    // stroke(25)
    
  drawCube(20,x,y,2)
    strokeWeight(0.01)
    stroke(s1,s2,s3)
  line(x,y,width,y)
  }
  
  
  
  if(frameCount>b3){
    noLoop()
fxpreview();
  }
}

function rnd(min,max){
  return fxrand()*(max-min) + min;
}
function drawCube(size, x11, y11, z) {
  let halfSize = size / 2;
var u =180/PI

  push();
  translate(x11, y11 + halfSize, z);
  rotateX(HALF_PI*u);
  rect(-halfSize, -halfSize, size, size);
  pop();

  push();
  translate(x11, y11 - halfSize, z);
  rotateX(-HALF_PI*u);
  rect(-halfSize, -halfSize, size, size);
  pop();

  push();
  translate(x11, y11, z + halfSize);
  rect(-halfSize, -halfSize, size, size);
  pop();

  push();
  translate(x11, y11, z - halfSize);
  rotateY(PI*u);
  rect(-halfSize, -halfSize, size, size);
  pop();

  push();
  translate(x11 + halfSize, y11, z);
  rotateY(HALF_PI*u);
  rect(-halfSize, -halfSize, size, size);
  pop();

  push();
  translate(x11 - halfSize, y11, z);
  rotateY(-HALF_PI*u);
  rect(-halfSize, -halfSize, size, size);
  pop();
}