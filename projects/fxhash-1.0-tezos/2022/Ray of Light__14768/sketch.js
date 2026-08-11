
//0613
let a,b,c,d,e,f,g,t,sh;


function setup() {
createCanvas(1000, 1000,WEBGL); 
frameRate(30);//30
background(0);//0,255 a

}

  data = fxhash;
  d1=data.charCodeAt(3);
  d2=data.charCodeAt(5);
  d3=(d1*d2)%5;//a
  
  d4=data.charCodeAt(7);
  d5=data.charCodeAt(9);
  d6=(d4*d5)%5;//b
  
  if (d3==0){
	a = 1; //3
}else if (d3==1){
	a = 2; //80
}else if (d3==2){
	a=3;
}else if (d3==3){
	a=4;
}else  {
	a=5;
}

  if (d6==0){
	b = 1; //3
}else if (d6==1){
	b = 2; //80
}else if (d6==2){
	b=3;
}else if (d6==3){
	b=4;
}else {
	b=5;
}
  
  function getSh(value){
	  if (value<0.4 ) {
		  sh=0;
		  t=152;
		  return "Boxes"	
	  }else  {
		  sh=1;
		  t=130;
		  return "Cylinders"
	  }
  } 
    function getSt(value){
	  if (value<0.4 ) {
		  st=0;
		  return "White"	
	  }else  {
		  st=1;
		  return "Random"
	  }
  }

  
  
  window.$fxhashFeatures = {	


  "Shape" :getSh(fxrand()) ,
  "Size a" : a,
  "Size b" : b,
  "Stroke" :getSt(fxrand()) ,

 }

function draw() {

 if(frameCount<t){	

  translate(50, 50, 1 );
    normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

if(st==0){
	stroke(255);
}else{
	  stroke(255*fxrand(),255*fxrand(),255*fxrand());
}


			  
	if (sh==1){		  
  box(500+100*a, 500+100*b, 2); //100
	}else{
  cylinder(700+100*a,700+100*b, 2);
	}
       
  pop();

      }
	}
    

