var currentX = 0;
var currentY = 0;
var lineSize = 0;
var lineValid;

let circleSet = [];
let shuffleCircleSet = [];

var grid;
var lineCount = 0;

function setup() {
  
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
	background(255, 234, 230);
	strokeWeight(1);
	var lineSizes = [(height/12),(height/6),(height/3)];
  if(floor(random(1,6))==1){grid="true"} else{grid="false"}
  
  while(currentY<height){
    
      lineSize = lineSizes[Math.floor(Math.random()*lineSizes.length)];
      
			// if is to reset if we go past boundary
			if(lineSize>height-currentY){
        lineSize = 0 ;
        lineValid = "false";
      } 
			// else is to make a regualar line
      else{
        lineValid = "true";
        while(currentX<width){
          
					// if creates the grid in some instances
          if(grid=="true"){
          	fill(255, 234, 230);
          	square(currentX,currentY,lineSize);
          }
          
					// if documents the circles positions and adds the object to the array in some instances but doesnt actually create them
          if(int(random(0,4))==1){
            circleSet.push(new Circle(currentX+lineSize/2, (currentY+lineSize/2), lineSize*.75));
          }
          currentX=currentX+lineSize;
      }}
    
    if(lineValid == "true") {lineCount++;}
    currentY=currentY+lineSize;
    currentX=0;
  }
	
  // circle shuffle and line creation with subset of circle set 
	shuffleCircleSet = shuffle(circleSet);
	for(i=0;i<int(random(1,circleSet.length));i++){
		circleSet=shuffle(circleSet);
		circleSet.pop();
	}
  for(i=0;i<circleSet.length-1;i++){
    line(circleSet[i].x,circleSet[i].y, circleSet[i+1].x, circleSet[i+1].y);
  }
  
  for(i=0;i<shuffleCircleSet.length;i++){
    circleColorInt = int(random(0,6));
    if(circleColorInt==1){ fill(255,90,90); }
    else if (circleColorInt==2){ fill(90,90,255); }
    else { fill(0,0,0);}
    circle(shuffleCircleSet[i].x,shuffleCircleSet[i].y, shuffleCircleSet[i].size);
  }

  console.log("Circle Count : " + shuffleCircleSet.length);
  console.log("Grid Lines : " + lineCount);
  console.log("Grid Visible : " + grid);
}

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
}