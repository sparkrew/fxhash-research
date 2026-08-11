//canvas=1200*1200

  data = fxhash;
  d1=data.charCodeAt(3);
  d2=data.charCodeAt(5);
  d21=data.charCodeAt(15);
  d11=(d1*d2*d21)%239+16;
  
  d3=data.charCodeAt(7);
  d4=data.charCodeAt(11);
  d22=data.charCodeAt(21);
  d12=(d3*d4*d22)%239+16;
  
  d5=data.charCodeAt(17);
  d6=data.charCodeAt(13);
  d23=data.charCodeAt(30);
  d13=(d5*d6*d23)%239+16;



function setup() {
  createCanvas(900, 900);
  background(d11,d12,d13)

}

 window.$fxhashFeatures = {	
 "Background R": d11,  
 "Background G": d12,  
  "Background B": d13, 	   
 } 

function draw() {
  smooth()

    y=(frameCount) //5

//  y=1900729253+1110210
  textSize(40)
  textAlign(LEFT, CENTER);
    fill(0)
  text("The circle will become so large,",80,200)
  text("you won't be able to see its curve!!",80,250)

  text("Diameter of the circle = "+y,80,400) 

  text("I put a stop at 1901839464,  ",80,550)
  text("before it drew strange lines.",80,600)
  
 


    fill(255,50)
 // translate(width/2,height/2+(y-1200)/2+200)
  translate(width/2+(y-900)/2,height/2)
//  background(255,50);

  circle(0,0,y)
  if(frameCount>1901839463){ //1901839463
    noLoop()
  }

}