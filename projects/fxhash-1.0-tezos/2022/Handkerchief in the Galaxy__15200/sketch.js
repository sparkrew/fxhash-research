let data,fc,fc1,st;

//0619 NeverEnd
function setup() {
  createCanvas(1000, 1000,WEBGL);//
  background(0);
  frameRate(4);

}
  data = fxhash;
  d1=data.charCodeAt(3);
  d2=data.charCodeAt(13);
  d3=data.charCodeAt(20);
  d4=((d1*d2*d3)%35)/700//a


    function getSt(value){
	  if (value<0.3 ) {
		  st=0;
		  return "Black"	
	  }else if (value<0.6 ) {
		  st=1;
		  return "Random"
	  }else {
		  st=2;
		  return "No Stroke"
	  }
  }

  window.$fxhashFeatures = {	

"Stroke":getSt(fxrand()) ,
"Turning Speed":d4

 }


function draw() {
background(0);

  //  if(frameCount<= d4){

  rotateZ(frameCount * d4); //0.02
  rotateX(frameCount * d4);
  rotateY(frameCount * d4);


if (st==0){
	
}else if(st==1){
	stroke(255*fxrand(),255*fxrand(),255*fxrand());
}	else{
	noStroke();	
	}
	
	

 // stroke(255*random(),255*random(),255*random());
//noStroke();
    for ( let j = 1; j < width/2; j+=10 ) { //k+=10
      for(let k=1;k<height/2;k+=10){
   box(600*sin(2*PI*(fxrand())),600*tan(2*PI*(fxrand())),600*sin(2*PI*(fxrand())))   ;  
           box(600*cos(2*PI*(fxrand())),600*tan(2*PI*(fxrand())),600*sin(2*PI*(fxrand())))   ; 
		    box(600*sin(2*PI*(fxrand())),600*tan(2*PI*(fxrand())),600*tan(2*PI*(fxrand())))   ; 
         fill(255*(fxrand()),255*(fxrand()),255*(fxrand()));

    }
    }
//}

}