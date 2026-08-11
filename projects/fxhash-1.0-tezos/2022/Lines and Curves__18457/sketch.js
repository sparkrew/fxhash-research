//0822 lines and curves

offset=0
function setup() {

  createCanvas(960, 960,WEBGL);
    background(0);
}

		function getRo2(value){
	  if (value<0.33){
		  ro2=0.02;
		  return "0.02"
	  }else if (value<0.67){
		  ro2=0.03;
		  return "0.03"	  

	  }else {
		  ro2=0.04;
		  return "0.04"
	  }
	}
	
	function getX11(value){
	  if (value<0.35){
		  x11=0.003;
		  return "0.003"
	  }else if (value<0.69){
		  x11=0.006;
		  return "0.006"	  

	  }else {
		  x11=0.009;
		  return "0.009"
	  }
	}
	
	function getSt2(value){
	  if (value<0.22){
		  st2=5;
		  return "1"
	  }else if (value<0.5){
		  st2=10;
		  return "2"	
	  }else if (value<0.78){
		  st2=15;
		  return "3"		  
	  }else {
		  st2=20;
		  return "4"
	  }
	}
	
		function getY12(value){
	  if (value<0.1){
		  y12=1;
		  return "1"
	  }else if (value<0.3){
		  y12=2;
		  return "2"	
	  }else if (value<0.4){
		  y12=3;
		  return "3"
	  }else if (value<0.5){
		  y12=4;
		  return "4"	
	  }else if (value<0.6){
		  y12=5;
		  return "5"
	  }else if (value<0.7){
		  y12=6;
		  return "6"
	  }else if (value<0.8){
		  y12=7;
		  return "7"	
	  }else if (value<0.9){
		  y12=8;
		  return "8"		  
	  }else {
		  y12=9;
		  return "9"
	  }
	}



 window.$fxhashFeatures = {	

 
  "Rotation Speed": getRo2(fxrand()), 
    "strokeWeight": getSt2(fxrand()), 
	    "X ": getX11(fxrand()), 
		    "Y ": getY12(fxrand()), 
 	   
 }

function draw() {
	scale(windowHeight/960)
 ro=ro2 // 0.02 0.03 0.04
  sw=st2 //  5 11 16 20
 // x11=0.009 //  0.003 0.006 0.009
  y11=x11*y12 //(23456789
 rotateX(sin(frameCount*ro)) //sin cos
  rotateY(sin(frameCount*ro))
  rotateZ(sin(frameCount*ro)) 

     stroke(0,100)
  strokeWeight(sw)
  noFill()
  translate(-width/2,-height/2,0)
    beginShape();
  vertex(0, height);
  for(var x = 0; x < 960; x++){
    var y = map(cos(frameCount*y11+0.1*y11*x+offset), -1, 1, 0, height);
    vertex(x, y);
  }
  vertex(width, height);
  endShape() 

     beginShape();
  vertex(-width/2, -height/2);
  stroke(255,100)
  noFill()
  for(var x = 0; x < width; x++){

    var y = map(cos(frameCount*x11+x11/10*x+offset), -1, 1, 0, height);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  offset +=0.02;//0.01 0.02 0.03
  
  if(frameCount>600){noLoop()}
    
}