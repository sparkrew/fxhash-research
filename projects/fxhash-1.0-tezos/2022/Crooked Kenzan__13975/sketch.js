//crooked,s color,s width
let s,w,c,w1,w2;
//let sw=8;

function setup() {
  createCanvas(880, 880);

}

/*
    function getColor(value){
	  if(value <0.1){
		  c=1;
		 return "Black and White"
	  }else if (value <0.4){
		  c=2;
		 return "Bluish"
	  }  else if(value <0.7){
		  c=3;
		 return "Greenish"
	  } else {
		  c=4;
	  	return "Reddish"
	  }
	 }
     
     */
    function getS(value){
	  if(value <0.03){
		  c=1;
		 return "White"
	  }else if (value <0.13){
		  c=2;
		 return "Grayscale"
	  }else if (value <0.23){
		  c=3;
		 return "Colorful"
	  }  else if(value <0.33){
		  c=4;
		 return "Red"
	  }else if(value <0.43){
		  c=5;
		 return "Green"
	  }else if(value <0.58){
		  c=6;
		 return "Blue"
	  }else if(value <0.72){
		  c=7;
		 return "Red+Green"
	  }else if(value <0.87){
		  c=8;
		 return "Red+Blue"
	  } else {
		  c=9;
	  	return "Green+Blue"
	  }
	 }
	 
	     function getW(value){
	  if(value <0.09){
		  w1=2;
		 return "2"
	  }else if (value <0.18){
		  w1=3;
		 return "3"
	  }else if (value <0.27){
		  w1=4;
		 return "4"
	  }  else if(value <0.36){
		  w1=5;
		 return "5"
	  }else if(value <0.45){
		  w1=6;
		 return "6"
	  }else if(value <0.54){
		  w1=7;
		 return "7"
	  }else if(value <0.63){
		  w1=8;
		 return "8"
	  }else if(value <0.72){
		  w1=9;
		 return "9"
	  } else if(value <0.81){
		  w1=10;
		 return "10"
	  } else if(value <1.1){
		  w1=11;
	  	return "Various"
	  } else {
		  w1=12;
	 }
		 }
     	 


 window.$fxhashFeatures = {	
 "Color" : getS(fxrand()),
 "Width": getW(fxrand())
 }





/*
  window.$fxhashFeatures = {	
  	  "Size" : b1%22+3,
	  "Distance" : 	 b2%20+4,
      "Color" : getColor(fxrand()),
	  "Background" : getBack(fxrand()),
	  "Stroke" : getSt(fxrand()),
  
  }*/



function draw() {
  background(0);
    randomSeed(20);
  

  for( let x=2; x<20; x++){
    for (let y=1;y<22; y++){
		    w2=(random()*8+2);
		     if( c==1) {
stroke(255);	 
             }else if(c==2) {
stroke(fxrand()*255);	
             }else if(c==3){
stroke(fxrand()*255,fxrand()*255,fxrand()*255);	
             } else if(c==4) {
stroke(fxrand()*255,0,0);		
             }else if(c==5){
stroke(0,fxrand()*255,0);	
             }else if(c==6) {
stroke(0,0,fxrand()*255);	
             }else if(c==7){
stroke(fxrand()*255,fxrand()*255,0);	
             }else if(c==8) {
stroke(fxrand()*255,0,fxrand()*255);	
             }else if(c==9){
stroke(0,fxrand()*255,fxrand()*255);	
             }else {
      fill(0);
             }
			 
			 if( w1==2) {
strokeWeight(2);	 
             }else if(w1==3) {
strokeWeight(3);	
             }else if(w1==4){
strokeWeight(4);
             } else if(w1==5) {
strokeWeight(5);	
             }else if(w1==6){
strokeWeight(6);	
             }else if(w1==7) {
strokeWeight(7);	
             }else if(w1==8){
strokeWeight(8);	
             }else if(w1==9) {
strokeWeight(9);	
             }else if(w1==10){
strokeWeight(10);
             }else if(w1==11){
strokeWeight(w2);
             }
			 else {
      fill(0);
             }
			 
		 line( (x*10+30*y+00), x*40, y*4, (y*40)+00);


     // stroke(random()*255,0,random()*255)
    //  stroke(0,random()*255,0);
   //  stroke(random()*255);
     //     stroke(255);
    //  strokeWeight(random(2,10));
  // strokeWeight(2+sw);
   strokeCap(SQUARE);
      
    }
  }
  noLoop();
}