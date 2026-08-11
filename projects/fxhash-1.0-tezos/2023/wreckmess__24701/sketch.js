var x = 0 
var y = 0
 var f2 = rnd(0,180)
var va = rnd(0,100)
      var rr =rnd(0,80)
 var mm = rnd(0,100)
 var a= rnd(0,160)
function setup() {
  
  createCanvas(1000, 1000);
  background(250)
  frameRate(20)
  
  if(a<20){
   h=BLUR
  }
  if(a>20&a<40){
 h=INVERT
  }
  if(a>40&a<60){
 h=POSTERIZE
  }
  if(a>60&a<80){
    h=OPAQUE

  }
  if(a>80&a<100){
  h=POSTERIZE

  }
  if(a>100&a<120){
  h=GRAY
  }
  if(a>120&a<140){
    h=DILATE

  }
  if(a>140&a<160){
  h=ERODE
  }
 
   

  
  
  
  
  
  
  
  
  
  
}

function draw() {
 // ground(220);
      var p =rnd(10,40)
  var ll =rnd(0,100)
  
  if(ll<20){
    var xx=rnd(-4,4)
    }
  else{
    var xx =p
  }
  
    var r = floor(rnd(0,4))
    strokeWeight(0.2)
  
  
  
  
  if(rr<20){
    var g =200
    }
if(rr>20&rr<40){
   var g =1250
   }
  
   if(rr>40&rr<60){
 var g =300
 }
if(rr>60&rr<80){
var g =500
}
  
  
  
  
  
  
  
  
  switch(r) {
  case 0:
      
    x=x-0
    break;
  case 1:
   x=x+rnd(-frameCount/10,50)
    break;
    case 2:
   y=y+0
    break;
  case 3:
   y=y-rnd(5,15)
       break;
}
  if(f2>0&f2<20){
     var c=width-40
  var v=height-40
  }
  
   if(f2>20&f2<40){
   var c=width-40
  var v=height/2
  } 
 
     if(f2>40&f2<60){
   var c=width-40
  var v=0+40
  }
   if(f2>60&f2<80){
   var c=width/2
  var v=height/2
  }
   if(f2>80&f2<100){
     var c=width/2
  var v=height/2
  }
 if(f2>100&f2<120){
 var c=0+40
  var v=height-40
  }
  if(f2>120&f2<140){
   var c=0+40
  var v=0+40
  }
   if(f2>140&f2<160){
   var c=0+40
  var v=height/2
  }
   if(f2>160&f2<180){
   var c=0+40
  var v=height-40
  }
 
  push()
  

  translate(c,v)
   for(i=0 ; i<2000 ; i++){
     // fi;;()
  
  rotate(PI/12+frameCount*rnd(0.5,10))
     
     var l = rnd(0,g)
     if(mm>50){
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
     
     }
     
     
     if(mm<50){
     if(l<10){
     
       fill("#D61355")
     }
       if(l>10&l<20){
        fill("#FFE15D")
       }
          if(l>20&l<30){ 
         fill("#CF4DCE")
          }
       if(l>30&l<40){
            fill("#31E1F7")
       }
       if(l>40&l<50){
     fill("#10A19D")
       }
       if(l>50&l<60){
       fill("#001E6C")
       }
       if(l>60&l<70){
       fill("#FF1E1E")
       }
       if(l>70&l<80){
       fill("#367E18")
       }
     if(l>80){
       fill(255)
     }
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    if(va<50){
       rect(x,y,900,10)
    }
      else{
         ellipse(x,y,900,10)
      }
       if(frameCount<50){
     strokeWeight(0.1)
     }
     else{
       strokeWeight(0.02)
     }
     line(x,y,height/2,width/2)
   }

  
  pop()
  if(frameCount>300){
    filter(POSTERIZE,2)
  fxpreview()
    
    noLoop()
  }
}
function rnd(min,max){
  return fxrand()*(max-min) + min;
}