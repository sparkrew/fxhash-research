let tsveta;
let palitra;
let hole1;
let rndL2, rndL3, rndCr, rndm;
      
function setup() {
  createCanvas(800, 800);
  seed = int (fxrand() * 999999999);
  randomSeed (seed);
  noLoop();
  hole1 = int(random(4));
  rndL2 = int(random(2));
  rndL3 = int(random(2));
  rndCr = int(random(5));
  rndMN = int(random(4));
  rndm  = int(random(2));
  rndclr = int(random(5));
  rndRStar = int(random(5));
  //console.log(rndclr)
  switch (rndclr) {
      case 0:
   tsveta = ["#f1faee","#a8dadc","#457b9d","#1d3557","#E8FCC2","#2AF5FF"];
      break;
      case 1:
   tsveta = ["#cdb4db","#ffc8dd","#ffafcc","#bde0fe","#08415C","#a2d2ff"];
      break;
      case 2:
   tsveta = ["#114b5f","#028090","#e4fde1","#456990","#f45b69","#00FDDC"];
      break;
      case 3:
   tsveta = ["#022b3a","#1f7a8c","#bfdbf7","#ffffff","#e1e5f2","#FF5A5F"];
      break;
      case 4:
   tsveta = ["#1e0075","#6f59d5","#ff94e4","#ffabee","#f952a4","#704bcc"];
      break;
  }
}

function draw() {
  palitra = shuffle(tsveta, true);
  palitra = palitra.slice(0,6);
 background(palitra [4]);
  
 //tree 
 translate(width / 2, height / 2+160);
  tree(45);
  //layers
 translate(0, height / 2-560); 
   angleMode (RADIANS);
fill(palitra[0]);
  layer3();
   if (rndL2==1){fill(palitra[1]); layer2(); }
  if (rndL3==0){fill (palitra[5]); layer4();}
  fill (palitra[3]);
  stroke(palitra[3]);
  strokeWeight(3); 
  if (rndCr==1) { line(100,-400,100,-120); noStroke(); ellipse(100,-150,100,100) }
  if (rndCr==2){
  push()
  line(110,-400,110,-200); line(21,-400,21,-175);
  noStroke();
  translate (30,-230)
  crescent(); 
  pop()
  push()
     translate (-34,-278)
    star();
  pop() 
    
   if (rndRStar==4)
     {
  push()
  line(200,-400,200,-150);
  translate (145,-255)
    star();
  pop()
     }
  }
  
  layer1();
  
}
function crescent(){
  beginShape();
   vertex(30, 20);
   bezierVertex(150, 0, 150, 135, 30, 135);
   bezierVertex(110, 80, 80, 25, 30, 20);
   endShape();  
}

function layer1(){
  //noFill();
  noiseSeed(random(500));
  beginShape();
  noStroke();
  //fill('orange');
  vertex(-450,-450);
  vertex(-450, 450);
  vertex(450,450);
  vertex(450,-450);
  
  beginContour()
    drawingContext.shadowBlur = 20
	drawingContext.shadowColor = color(40,195)
    drawingContext.shadowOffsetX = 10
    drawingContext.shadowOffsetY = -10
    for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+25;
      let ysm = sin(z)+75;
      let radius = map(noise(ysm,xsm), 0, 1, 280, 390);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x,y);
    }
  endContour()
  //little shape
  if (hole1==2){
  beginContour()
     for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+19;
      let ysm = sin(z)+1;
      let radius = map(noise(ysm,xsm), 0, 1, 30, 60);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x-300,y+300);
    }
  endContour()
  }
  if (hole1==3){
  beginContour()
     for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+12;
      let ysm = sin(z)+5;
      let radius = map(noise(ysm,xsm), 0, 1, 30, 60);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x+300,y+300);
    }
  endContour()
  }
  endShape(CLOSE);
  
}

function layer2(){
  noiseSeed(random(400));
  beginShape();
  noStroke();
  vertex(-400,-400);
  vertex(-400, 400);
  vertex(400,400);
  vertex(400,-400);
  
  beginContour()
    drawingContext.shadowBlur = 20
	drawingContext.shadowColor = color(40,185)
    drawingContext.shadowOffsetX = 10
    drawingContext.shadowOffsetY = -5
    for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+0.5;
      let ysm = sin(z)+35;
      let radius = map(noise(xsm,ysm), 0, 1, 150, 280);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x,y);
    }
    
  
  endContour()
  endShape(CLOSE);  
}

function layer3(){
  noiseSeed(random(600));
  beginShape();
  noStroke();
  vertex(-400,-400);
  vertex(-400, 400);
  vertex(400,400);
  vertex(400,-400);
  
  beginContour()
    drawingContext.shadowBlur = 15
	drawingContext.shadowColor = color(40,185)
    drawingContext.shadowOffsetX = 5
    drawingContext.shadowOffsetY = 5
    for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+85;
      let ysm = sin(z)+35;
      let radius = map(noise(xsm,ysm), 0, 1, 100, 170);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x,y);
    }
    
  
  endContour()
  endShape(CLOSE);  
}

function layer4(){
  noiseSeed(random(200));
  beginShape();
  noStroke();
  vertex(-400,-400);
  vertex(-400, 400);
  vertex(400,400);
  vertex(400,-400);
  
  beginContour()
    drawingContext.shadowBlur = 20
	drawingContext.shadowColor = color(40,185)
    drawingContext.shadowOffsetX = 10
    drawingContext.shadowOffsetY = -10
    for (let z=0; z<TWO_PI; z+=0.05)
    {
      let xsm = cos(z)+85;
      let ysm = sin(z)+35;
      let radius = map(noise(xsm,ysm), 0, 1, 240, 320);
      let x = radius*cos(z);
      let y = radius*sin(z);
      vertex (x,y);
    }
    
  
  endContour()
  endShape(CLOSE);  
}

function tree(size) {
    angleMode (DEGREES);
   
	push()
 // translate(width / 2, height / 2+90);
if (size>int(random(10,20))){
	stroke(palitra[2]);
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = color(15,175);
	drawingContext.shadowOffsetX = 4;
	drawingContext.shadowOffsetY = 4;
	strokeWeight(map(size,10,100,1,15))
	line (0,0,0, -size);
	translate (0, -size);
	rotate (random(-20,-25));
    tree(size*random(0.8,0.85));
	rotate (random(20,60));
	tree(size*random(0.7,0.9));
}
	else {
		noStroke();
		fill(palitra[2]);
		ellipse (0,0,10);}
	pop()
}
function star(){
  noStroke();
  beginShape();
  vertex(30,150)
  vertex(55,100)
  vertex(80,150)
  vertex(20,120)
  vertex(90,120)
  endShape(CLOSE);
  
  
}

