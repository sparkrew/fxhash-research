//1112 grow v3

let _canvas;
let _canvasWidth = 4000;
a11=0.7+0.2*fxrand()
a12=13*fxrand()

	function getC1(value){
	  if (value<0.47){
		  c1=1;

		  return "Light"		  
	  }	 else{
		  c1=2;

		  return "Dark"
	  }    
			}
			
				function getA13(value){
	  if (value<0.26){
		  a13=1;

		  return "Yes"		  
	  }	 else{
		  a13=2;

		  return "No"
	  }    
			}

function setup() {

        if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);
    _canvasWidth = canvasSize;
  
_canvasWidth = 4000;  
  _canvas = createGraphics(_canvasWidth, _canvasWidth, WEBGL);

  cs=_canvasWidth
  
  if(c1==1){
  _canvas.background(255)
  }else{
  _canvas.background(0)//2
  }
	
frameRate(30)


  _canvas.noStroke()
  
 if(c1==1){
    _canvas.fill(0,100*fxrand(),120*fxrand(),80)

 }else{
    _canvas.fill(0,100*fxrand(),120*fxrand(),100)//100 //2
 }
		  _canvas.scale(0.9)
 _canvas.rect(-cs/2,-cs/2,cs)
}

	 window.$fxhashFeatures = {	

	 "Color":getC1(fxrand()),
	 	 "Variable 1":a11,
		 "Variable 2":a12,
		  "Has Red":getA13(fxrand()),
 }




function draw() {
	  _canvas.push();
	//  _canvas.smooth()
	  
	
  _canvas.translate(-cs/4-cs/16,cs/16,) //sq

  _canvas.strokeWeight(cs/850)
  
  if(c1==1){
   _canvas.stroke(0,); //255100
  }else{
  _canvas.stroke(200,200,255)//2
  }
  
  

 let a =100*(29.95017932055716) //6 love square 31 29.95017932055716

  theta = a; 
//_canvas.stroke(255,0,255)
  _canvas.line(0,0,0,-cs/4*fxrand());
  
  _canvas.translate(0,-cs/4,0);
 
 br(cs*fxrand()*fxrand()*a11);//ff 2 fxrand()
     image(_canvas, -width/2, -height/2, width, height);

//  print(frameCount,a11)
  if(frameCount>(91+a12)){ //sq31 t2 50
    noLoop()
	fxpreview()
  }
 
     _canvas.pop();
}

function br(h) {


  h *= fxrand(); //f 1 0.5 0.8
  if(a13==1){
  if(h<20){
	   _canvas.stroke(195,0,0,200)
  }
}
  

  if (h > 8) { //2
    _canvas.push();    
    _canvas.rotate(theta/4);   //ff 2 3 

    _canvas.line(0, 0, 0, -h); 
    _canvas.translate(0, -h,0); //
    br(h);       
    _canvas.pop();    

    _canvas.push();
    _canvas.rotate(-theta);
    _canvas.line(0, 0, 0, -h);
    _canvas.translate(0, -h);
    br(h);
    _canvas.pop();
  } 
	  

}
