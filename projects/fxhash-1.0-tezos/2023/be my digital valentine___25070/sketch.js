//heart
//a13 stroke

	   a11=fxrand()*0.01+0.001
	   	   a12=fxrand()*0.01+0.0013
  a15=200*fxrand()
   a16=200*fxrand()
    a17=200*fxrand()
	 a18=250*fxrand()
	  a19=250*fxrand()
	   a20=250*fxrand()
	   



 //   a11=random()*(0.01)+0.001
 // a12=random()*(0.01)+0.002

function setup() {
     if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL)
  

  
    background(a18,a19,a20,100)
  


cs=canvasSize
  cs2=canvasSize
  scale(0.85)
  fill(a15,a16,a17,100)
  
    rect(-cs/2,-cs/2,cs,cs)
  

  
  
}

	    function getA13(value){
	  if (value<0.43){
		 a13=1;
		  return "white"	
	  }else{
		 a13=2;
		  return "black"		
	  }
		}

window.$fxhashFeatures = {
 "Stroke":getA13(fxrand()),
 "Sin Variable": a11,
 "Cos Variable": a12,
 "Background Red": a15,
  "Background Green": a16,
   "Background Blue": a17,
    "Frame Red": a18,
  "Frame Green": a19,
   "Frame Blue": a20,
 
}

function draw(){
 //background(55,0,0,)
  
  b11=0.9*sin(frameCount*a11)*cos(frameCount*a12)
  
 scale(b11)
  
  //scale 1.6

 // 2 0.01


 fill(255,0,0,150)
//  noFill()
  strokeWeight(cs/400)


if(a13==1){
  stroke(255,250)
}else{
  stroke(0,100)
}

  
  push()
 // scale(1.1)
//  rotate(frameCount*0.001)
  translate(-cs/11*0.03125*0.125,-cs/11*1*sin(frameCount*0.1)-cs/11)
  
          rect(-cs/11*5.5,cs/11*-0.5,cs/11,)
          rect(cs/11*4.5,cs/11*-0.5,cs/11)
  
           rect(-cs/11*5.5,cs/11*-1.5,cs/11)
          rect(cs/11*4.5,cs/11*-1.5,cs/11)
  
          rect(-cs/11*4.5,cs/11*-2.5,cs/11)
          rect(cs/11*3.5,cs/11*-2.5,cs/11)
  
            rect(-cs/11*3.5,cs/11*-3.5,cs/11)
          rect(cs/11*2.5,cs/11*-3.5,cs/11)
  
              rect(-cs/11*2.5,cs/11*-3.5,cs/11)
          rect(cs/11*1.5,cs/11*-3.5,cs/11)
  
                rect(-cs/11*1.5,cs/11*-2.5,cs/11)
          rect(cs/11*0.5,cs/11*-2.5,cs/11)
  

            rect(cs/11*-0.5,cs/11*-1.5,cs/11,)
  
      rect(-cs/11*0.5,cs/11*4.5,cs/11,cs/11)
  rect(-cs/11*1.5,cs/11*3.5,cs/11)
    rect(cs/11*0.5,cs/11*3.5,cs/11)
    rect(-cs/11*2.5,cs/11*2.5,cs/11)
    rect(cs/11*1.5,cs/11*2.5,cs/11)
      rect(-cs/11*3.5,cs/11*1.5,cs/11)
    rect(cs/11*2.5,cs/11*1.5,cs/11)
        rect(-cs/11*4.5,cs/11*0.5,cs/11)
    rect(cs/11*3.5,cs/11*0.5,cs/11)
  pop()

//  console.log(frameCount,b11)

  
  if(frameCount>600 && b11>0.33){
  
  noLoop()
  fxpreview()
  }
}


  

