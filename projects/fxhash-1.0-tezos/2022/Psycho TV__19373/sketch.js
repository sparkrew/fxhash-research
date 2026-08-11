//0914 6w
let ns=fxrand()*123455678

  yo=0
yo2=0
yo3=0

function setup() {
     if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);
  

    background(255)


cs=canvasSize


  noiseSeed(ns);
  
}

	function getSw3(value){
	  if (value<0.3){
		  sw3=250;
		  return "250"
	  }	else  if (value<0.7){
		  sw3=300;
		  return "300"	  
	  }else{
		  sw3=350;
		  return "350"	  
	  }
	} 
	
		function getF3(value){
	  if (value<0.2){
		  f3=1;
		  return "Red"
	  }else{
		  f3=2;
		  return "White"	  
	  }
	} 

 window.$fxhashFeatures = {	
 "Seed":ns,

"Stroke Weight Variable":getSw3(fxrand()),
"Fill":getF3(fxrand()),
//"Pattern":getPn3(fxrand()),
 }

function draw() {
  scale(1.5)

 
  translate(-cs/2,-cs/2*cos(frameCount*0.006)) //0.005

  strokeWeight(cs/sw3) // 250 300 350



//  noFill()
  if(f3==1){
 fill(255,0,0,)
  }else{
  fill(255)
  }


  //----------------------------------------------------------------
 
  stroke(0,)
  beginShape();

  let xo2= 0; 

  for (let x2= 0; x2<= width+20; x2+= 10.2){ //10.1
   let y2= map(noise(xo2, yo2), 0, 1, 0, cs*0.01);//cs/4 cs/12
    vertex(x2, y2);
        vertex(x2, y2*1.5);
    xo2 += 0.03
  }
  yo2+= 0.015 //0.011
  endShape();
  
  
  //----------------------------------------------------------------------------

  if(cos(frameCount*0.006)<-0.99){
    noLoop()
  }

print(cos(frameCount*0.006))
}
  

