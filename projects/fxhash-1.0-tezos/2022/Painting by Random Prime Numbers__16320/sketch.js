//center50

var xPos, yPos,a,b,

  data = fxhash;
  d1=data.charCodeAt(3);
  d2=data.charCodeAt(13);
    d8=data.charCodeAt(26);
  d3=(d1*d2*d8)%3+1;//21
  
  d4=data.charCodeAt(30);
  d5=data.charCodeAt(33);
  d6=data.charCodeAt(36);
    d9=data.charCodeAt(16);
  d7=((d4*d5)+d6+d9)%4;//21
  

let x=1;

function isPr(x) {
  if (x == 1) return false;
  for (let i = 2; i <= x/2; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
  


function setup() {

	  createCanvas(1200, 1200, ); //WEBGL     rect(0,0,windowHeight*0.5625, windowHeight, ); //WEBGL
	// createCanvas(windowHeight*0.8, windowHeight, ); //WEBGL     rect(0,0,windowHeight*0.5625, windowHeight, ); //WEBGL
	b=windowHeight;

  fill(249, 251, 255); //51

  xPos = 0;  //-10
  yPos=0;
  a=0;

    rect(0,0,1200, 1200, ); //WEBGL

  frameRate(120);
 
}

  function getColor(value){
	  if (value<0.33 ) {
		  c1=0;
		  return "Red"
	  }else if (value<0.66 ) {
		  c1=1;
		  return "Black"
	  }else	 {
		  c1=2;
		  return "Gray"
	  }
  }  

  window.$fxhashFeatures = {	
 // "0 fxhash" :fxhash,
  "Color":getColor(fxrand()),
  "Position X":d3,
  "Position Y":d7+1,
//  "fxrand":fxrand(),
//  "b": b,
//  "Stroke Weight *":b4,

 }


function draw() {
    x=int(fxrand()*10000000+1);

	xPos += fxrand()*d3*10*fxrand();//fxrand()100


	if(xPos >= 1200){ //windowWidth

		xPos = 30*fxrand(); //100
        //a=a+20;
        yPos = yPos+((10+d7*1)*fxrand());   
	}
   if (isPr(x)) {	
if (c1==0){
	fill(255*fxrand(),0,0,255);
		 text(x,xPos,yPos) ;
}else if (c1==1) {
    fill(0,255);//co,gre
		 text(x,xPos,yPos) ;
}else{
	fill(255*fxrand(),255);
		 text(x,xPos,yPos) ;
}
   }
//	ellipse(xPos, yPos, 20, 20); 

   
          
if(yPos>b-2){
	// fxPreview();
  noLoop();
 
}

}
/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/
