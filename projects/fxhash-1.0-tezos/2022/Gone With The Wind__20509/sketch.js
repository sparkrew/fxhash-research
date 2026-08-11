
//1019 puzzzzzzzzzzle
//let  x1=40;
rx=0.04-fxrand()*0.15
v1=80+fxrand()*20 //93
v2=70+fxrand()*20//81
v3=63+fxrand()*20//73
v4=79+fxrand()*20//89
v5=80+fxrand()*20//100
v6=77+fxrand()*20//97
v7=63+fxrand()*20//83
v8=87+fxrand()*20//107


function setup() {

      if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);
  cs=canvasSize

 //  noStroke();

  background(0)
//frameRate(30)

}

	 window.$fxhashFeatures = {	
"Rotation Variable":rx,

"Variable 1":v1,
"Variable 2":v2,
"Variable 3":v3,
"Variable 4":v4,
"Variable 5":v5,
"Variable 6":v6,
"Variable 7":v7,
"Variable 8":v8,
   
 }

function draw() {
  a=fxrand()*205+80
 
  rotateX((frameCount*rx*fxrand()))
  
//stroke(255,)
//strokeWeight(random()*cs/1000)
noStroke()
 
  cav=cs/4
  
 
 //h1
 fill(0,)


 rect(cos(frameCount/v1*fxrand())*cs,-cs/2,cav,cav)//v1
//    rect(cos(frameCount/x1)*width,-height/2,cav,cav)
 
    //v1 test
     fill(255,a)
rect(-width/2,sin(frameCount/v2*fxrand())*height,cav,cav)//v2
//   rect(-width/2,sin(frameCount/x1)*height,cav,cav)
 
  //h2
     fill(0)

 rect(tan(frameCount/v3*-0.1*fxrand())*width,-height/4,cav,cav)  //v3
//   rect(sin(frameCount/x1)*width,-height/4,cav,cav)
 
    //v2 test
 
    fill(255,a)
  rect(-cs/4,sin(frameCount/v4*fxrand()*0.1)*cs,cav,cav)//v4
//    rect(-width/4,cos(frameCount/x1)*height,cav,cav)
 
 
//h3  
  fill(0)

  rect(cos(frameCount/v5*fxrand())*cs-cs/8,0,cav,cav)//v5
  
 // rect(sin(frameCount/x1)*(width)-width/8,0,cav,cav)
  
   //v3
 fill(255,a)
  rect(0,tan(frameCount/v6*0.1*fxrand())*cs,cav,cav)//v6
//    rect(0,cos(frameCount/x1)*height,cav,cav)
 
  //h4
 fill(0)

 rect(tan(frameCount/v7*fxrand())*cs,cs/4,cav,cav)//v7
//    rect(sin(frameCount/x1)*width,height/4,cav,cav) 
 
 //v4
  fill(255,a)
  rect(cs/4,cos(frameCount/v8)*fxrand()*cs,cav,cav) //v8
 //   rect(width/4,cos(frameCount/x1)*height,cav,cav) 
  
  if(frameCount>=850){
fxpreview()
  }
    
       
}