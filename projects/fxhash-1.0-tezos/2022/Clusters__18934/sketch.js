//0903 cluster
let theta = 55; //0 15 60
  ra3=0.75+fxrand() //0.75
  n3=1+fxrand() 

function setup() {
     if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);

background(16);
cs=canvasSize
 // ra3=0.75+random()
//2 1 1+random()  
}

	function getC31(value){
	  if (value<0.33){
		  c31=1;
		  return "1"
	  }	else  if (value<0.64){
		  c31=2;
		  return "2"	  
	  }else{
		  c31=3;
		  return "3"	  
	  }
	} 
	
		function getC32(value){
	  if (value<0.29){
		  c32=1;
		  return "1"  
	}else if(value<0.72){
		  c32=2;
		  return "2"		  
	  }else{
		  c32=3;
		  return "3"	  
	  }
	} 
	
		function getC33(value){
	  if (value<0.55){
		  c33=1;
		  return "1"  
	  }else{
		  c33=2;
		  return "2"	  
	  }
	} 
	
		function getC34(value){
	  if (value<0.35){
		  c34=1;
		  return "1"
	  }	else  if (value<0.7){
		  c34=2;
		  return "2"	  
	  }else{
		  c34=3;
		  return "3"	  
	  }
	} 

 window.$fxhashFeatures = {	
 "Interval":n3,
 "Radius Multiplier": ra3,
 "Stroke 1 Color": getC31(fxrand()), 
  "Ellipse Color": getC32(fxrand()), 
    "Box Color": getC33(fxrand()), 
  "Stroke 2 Color": getC34(fxrand()),  
 } 


function draw() {
  
//rotate(frameCount*0.1) 
//rotate(frameCount*0.5)
rotate((frameCount*0.5*fxrand()))//0.5 0.1

 turn=0.01 //B 0.1 0.01 0.005
  rotateX(frameCount*turn);
 // rotateY(frameCount*turn);
 // rotateZ(frameCount*turn);
  
   turn2=0.002 //B 0.1 0.01 0.005
  rotateX(frameCount*turn2);
//  rotateY(frameCount*turn2);
//  rotateZ(frameCount*turn2);

  translate(-150,+160,0)

  let x = 0;
  let y = 0;
  for (let i = 0; i < 50; i++) { //100

    let n = i * n3 + 1; //n=i*1+1,i*2+1

    let radius = cs*(ra3) / (n * PI);
    let prevx = x;
    let prevy = y;

    x += radius * cos(n * theta);
    y += radius * sin(n * theta);

   // stroke(255, 50);//A1
    
      strokeWeight(1);//A
     //   stroke(0,128,0,50)//AA1
    
	if(c31==1){
        stroke(64,164,113,50)//AA2 A3
	}else if(c31==2){
   stroke(71,31,85,50)//A2
	}else{
     stroke(0,50)//A4
	}

    //stroke(0);//A main circle
    noFill();//A1
    ellipse(prevx, prevy, radius * 1.5); //A


  //  stroke(255);//B1

  //strokeWeight(1); //B1
    noStroke()//BB1
        //stroke(255);//
   // stroke(71,31,85)//B2
  //  stroke(64,164,113)//B3
  //  stroke(0,108,93)//B4
  // stroke(0);//255 outer joint
  //     fill(154,88,0) //B3
   // fill(227,109,74) //B4
  //fill(0);//B1
  if(c32==1){  
    fill(255,223,0) //0904A
  }else if(c32==2){
		fill(244,170,41)
  }else{
  fill(255)//0904B
  }

   ellipse(x, y, 6); //5 9
    push()
    translate(x,y+10)
	if(c33=1){
     fill(220,0,0) //0904A
	}else{
    fill(200*fxrand())//0904B
	}
    box(1.5)
    pop()
  //  square(x, y, 5+5*random()); //9
   

  //C  
    


  //  stroke(255,0,0)//C1
  //  stroke(197,0,63)//C2

    strokeWeight(0.2) //0 10
	if(c34==1){
     stroke(128,234,154)//C3 yellow heavy
	}else if(c34==2){
  stroke(0,103.119)//C4 green
	}else{
        stroke(0,128,0) //3dark green
	}
    line(prevx, prevy, x, y); //C radius line
   

  }
 theta -= 0.04; //0.02
// theta -= 0.02*random(); //DD 0829 -0.02 -0.01

 // 
 //   print(frameCount);
  if(frameCount>1079){//940
    noLoop();
  }
  }
  

