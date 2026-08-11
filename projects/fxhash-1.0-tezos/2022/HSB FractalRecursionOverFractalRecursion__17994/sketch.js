//0812  HSB Fractal Recursion Over Fractal Recursion

	function getD2(value){
	  if (value<0.5){
		  d2=15;
		  return "15"
/*	  }else if (value<0.66)	{             
		  d2=15;
		  return "15"*/
	  }else 	{
		  d2=20;
		  return "20"
	  }
		  }	
w1=1200;
//k=3; //1 2 3 4
//d2=15 //10 15 20 
 

function setup() {
  createCanvas(w1, windowHeight, WEBGL);
colorMode(HSB,)
// background(255)
  frameRate(1);
}

///////////////////////////////////
//k shape(3),d2 element size(6), c1 fill(no grey, green)

  /*  function getSt(value){
	  if (value<0.5){
		  st=1;
		  return "Yes"
	  }else 	{
		  st=2;
		  return "No"
	  }
		  }	*/
		  
	function getC2(value){
	  if (value<0.1){
		  c2=0;
		  return "1"
      }else if (value<0.2){
		  c2=36;
		  return "2"	
      }else if (value<0.3){
		  c2=72;
		  return "3"
      }else if (value<0.4){
		  c2=108;
		  return "4"		  
	  }else if (value<0.5){
		  c2=144;
		  return "5"	
      }else if (value<0.6){
		  c2=180;
		  return "6"
      }else if (value<0.7){
		  c2=216;
		  return "7"
      }else if (value<0.8){
		  c2=252;
		  return "8"
      }else if (value<0.9){
		  c2=288;
		  return "9"			  
	  }else 	{
		  c2=324;
		  return "10"
	  }
		  }		

	function getM2(value){
	  if (value<0.2){
		  m2=2.2;
		  return "2.2"
      }else if (value<0.4){
		  m2=2.4;
		  return "2.4"	
      }else if (value<0.6){
		  m2=2.7;
		  return "2.7"
      }else if (value<0.8){
		  m2=3.2;
		  return "3.2"		  
	  }else 	{
		  m2=3.9;
		  return "3.9"
	  }
		  }		

	function getK(value){
	  if (value<0.25){
		  k=1;
		  return "1"
      }else if (value<0.5){
		  k=2;
		  return "2"	
      }else if (value<0.75){
		  k=3;
		  return "3"		  
	  }else 	{
		  k=4;
		  return "4"
	  }
		  }			  


 window.$fxhashFeatures = {	
 
     "Second Pattern Set": getK(fxrand()),
	   "2nd Distance Devided By": getM2(fxrand()), 
	   "Color Set": getC2(fxrand()),  	   
	   "Minimal Ellipse >":getD2(fxrand()),
 //  "Has Stroke": getSt(fxrand()),                
 } 



function draw() {

rotate(PI/4)  
drawCircle(0,0,1600);
      if(frameCount>1){ // 20 40
      noLoop();
    }
}               


function drawCircle(x,y,d){


  ellipse(x,y,d,d);
//rect(x,y,d,d)

  
  if(d>d2){ 
    
    
  // if (st==1){ 
  stroke(fxrand()*360,100,100,)   
  // }else{  
  //  noStroke()
  // }
    
 fill(fxrand()*90+c2,100,100,)
//     fill(random()*255,)
 // noFill()
      drawCircle(x+d/2,y,d/2);
  drawCircle(x-d/2,y,d/2);
    drawCircle(x,y+d/2,d/2);
  drawCircle(x,y-d/2,d/2);

if(k==1){

 drawCircle(x-d/m2,y,d/m2);//42
 drawCircle(x,y+d/m2,d/m2); //43


}else if(k==2){
 drawCircle(x+d/m2,y,d/m2);//41
 drawCircle(x,y+d/m2,d/m2); //43


}else if(k==3){

 drawCircle(x-d/m2,y,d/m2);//42
}else{


 drawCircle(x+d/m2,y,d/m2);//41
}


    
      

}
}



