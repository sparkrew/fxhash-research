let shader1;
let size;
let colour1,colour2,colour3,colour4;


let phi1 = rand(0,1000);
let phi2 = rand(0,1000);
let phi3 = rand(0,1000);
let phi4 = rand(0,1000);
let t1v =  rand(10,30)*100;
let t1w =  rand(10,30)*100;
let t2v =  rand(10,30)*100;
let t2w =  rand(10,30)*100;
let t3v =  rand(10,30)*100;
let t3w =  rand(10,30)*100;
let t4v =  rand(10,30)*100;
let t4w =  rand(10,30)*100;
let dScale = rand(30,100);

let vWave, wWave;


let numShapes;

function setup() {
  blendMode(MULTIPLY);
 c=createCanvas (windowWidth, windowHeight,WEBGL);
 background(0);
 gl=this.canvas.getContext('webgl');

 size = min(windowWidth,windowHeight)/2;
  colorMode(HSB, 255);
  colour1 = color(rand(0,255),rand(60,255),rand(100,255));
  colour2 = color(rand(0,255),rand(60,255),rand(100,255));
  colour3 = color(rand(0,255),rand(60,255),rand(100,255));
  colour4 = color(rand(0,255),rand(60,255),rand(100,255));
}


function draw() {

  if (windowWidth < 1000) {   numShapes = 20;}
  else  { numShapes = 40;}
  ambientLight(200);
  pointLight(255,255,255,0,0,100);
  background(63);
  stroke(0);
  strokeWeight(2);
  x = 0.5;
  //line(x,0,x,windowHeight/2)
  //noStroke(); 
  translate(-windowWidth/2,0);
  for (i=0;i<numShapes;i++){
    push();
    vWave = (windowHeight/4)*sin(phi1 + i/50*millis()/t1v);
    wWave = dScale*sin(phi1 - i/50 + millis()/t1w);
    ambientMaterial(colour1);
    translate((i*windowWidth/numShapes)  -10,-(windowHeight/2)+vWave);
    box(3,windowHeight,wWave);
    pop();
  }
  for (i=0;i<numShapes;i++){
    push();
    vWave = (windowHeight/4)*sin(phi2 + i/50*millis()/t2v);
    wWave = dScale*sin(phi2 - i/50 + millis()/t2w);
    ambientMaterial(colour2);
    translate((i*windowWidth/numShapes)  +0,(windowHeight/2)+vWave);
    box(3,windowHeight,wWave);
    pop();
  }

  for (i=0;i<numShapes;i++){
    push();
    vWave = (windowHeight/4)*sin(phi3 - i/50*millis()/t3v);
    wWave = dScale*sin(phi3 + i/50 + millis()/t3w);
    ambientMaterial(colour3);
    translate((i*windowWidth/numShapes)  +10,-(windowHeight/2)+vWave);
    box(3,windowHeight,wWave);
    pop();
  }
  for (i=0;i<numShapes;i++){
    push();
    vWave = (windowHeight/4)*sin(phi4 - i/50*millis()/t4v);
    wWave = dScale*sin(phi3 + i/50 + millis()/t4w);
    ambientMaterial(colour4);
    translate((i*windowWidth/numShapes)  +20,(windowHeight/2)+vWave);
    box(3,windowHeight,wWave);
    pop();
  }
}

// Handy Helpers

function rand(min,max){
  return (fxrand() * (max-min))+min;
}

function getUniform(color){
  return [color._getRed(),color._getGreen(),color._getBlue()]
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = min(windowWidth,windowHeight);
  loop();
}