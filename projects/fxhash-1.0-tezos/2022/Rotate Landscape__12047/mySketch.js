// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

var sticks=[];
var fromColor;
var toColor;
var stickR;
var canvasH;
var rDenominator = 40;
var rRatio = 1/rDenominator;
var xRatio = 1/400;
var yRatio = 1/400;
var isEnd = false; 
var topHeight;

var sun;
var winds=[];

const fr = 60;

function setup() {
	if( windowWidth>windowHeight ){
		canvasH = windowHeight;
	}else{
		canvasH = windowHeight;
	}		
	createCanvas(canvasH, canvasH);
	
	topHeight = 3*canvasH/16;
	
  frameRate(fr);
	pixelDensity(2);
	background(255);
	angleMode(DEGREES); // Change the mode to DEGREES	
	
	var rr = getNoiseC(0,200);
	var bb = getNoiseC(0,200);
	var gg = getNoiseC(0,200);
	
	fromColor = color(rr,gg,bb);
	toColor = color(200-rr,200-gg,200-bb);
	
	stickR = canvasH*rRatio;
	genSticks();
  genSun();
  genWinds();
}

function reset(){
	background(255);
}

function draw() {
  strokeWeight(height/1200);
	drawSun();
	drawWinds();
	drawSticks();
	noStroke();
	
	rect(0, 0, width, topHeight);
	rect(0, height-topHeight, width, topHeight);

	if(isEnd){
	  noLoop();
		fxpreview();
	}
}

function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot
	//if (key === " ") reset(); //to generate variations
}

function getNoiseC(min,max){
	return int(min+fxrand()*(max-min));
}

// stick
class Stick{
  constructor(r,x,y,a,c) {
		this.r = r; // length
		this.x = x; // posX
		this.y = y; // posY
		this.a = a; // angle
		this.c = c; // change color percentage
	}
	move(){
		this.y -= height*yRatio*fxrand();
    var tanValue = tan(frameCount/PI);
    isEnd = tanValue > -0.4 && tanValue <0;
    this.x += (height/1200)*(tanValue - sin(frameCount/PI));
		this.a += 10*fxrand();
		this.c += 0.003*fxrand();
	}
}
function genSticks(){
	for(var j=0;j<rDenominator*1.5;j++){
			stick = new Stick(stickR,j*stickR,height+topHeight/3,0,0);
			sticks.push(stick);
	}
}
function drawSticks(){
	//console.log(sticks);
	for(j=0;j<sticks.length;j++){
		stick = sticks[j];		
		stick.move();
		sticks[j] = stick;
		var interColor = lerpColor(fromColor, toColor, stick.c);
		stroke(interColor);
		push();
			translate(stick.x,stick.y);	
			rotate(stick.a);
			line(0,0,stick.r,0);
			line(0,0,-stick.r,0);	
		pop();
	}
}


// sun
class Sun{
  constructor(r,x,y,a,c) {
		this.r = r; // length
		this.x = x; // posX
		this.y = y; // posY
		this.a = a; // angle
		this.c = c; // change color percentage
	}
	move(){      
    this.x += (height/1200)*sin(frameCount/360);
    this.r += (height/1200)*(20*sin(frameCount/360)+fxrand()-0.5);
		this.a += 10*fxrand();
		this.c += 0.005*fxrand();
	}
}
function genSun(){
  sun = new Sun(stickR*6,width*0.95,height*0.03+topHeight,0,0);
}
function drawSun(){
  	sun.move();
		var interColor = lerpColor(fromColor, toColor, stick.c);
		stroke(interColor);
		push();
      translate(sun.x,sun.y);
			rotate(sun.a);
			line(0,0,sun.r,0);
			line(0,0,-sun.r,0);	
		pop(); 
}


//wind
class Wind{
  constructor(r,x,y,a,c) {
		this.r = r; // length
		this.x = x; // posX
		this.y = y; // posY
		this.a = a; // angle
		this.c = c; // change color percentage
	}
	move(){
    var tanValue = tan(fr*15+frameCount/PI);
		this.x += height*yRatio*(fxrand()+fxrand())/2;
    this.y += (height/1200)*2.25*(sin(frameCount/PI)+0.1*fxrand());
		this.a += 15*fxrand();
		this.c += 0.0031*fxrand();
	}  
}
function genWinds(){
	for(j=0;j<rDenominator*0.97;j++){
    wind = new Wind(stickR,stickR*j-width*0.9,-height*0.4+topHeight/3,0,0);
		winds.push(wind);
	}  
}
function drawWinds(){
	for(j=0;j<winds.length;j++){
		wind = winds[j];		
		wind.move();
		winds[j] = wind;
		var interColor = lerpColor(fromColor,toColor, wind.c);
		stroke(interColor);
		push();
			translate(wind.x,wind.y);	
			rotate(wind.a);
			line(0,0,wind.r,0);
			line(0,0,-wind.r,0);	
		pop();
	}  
}