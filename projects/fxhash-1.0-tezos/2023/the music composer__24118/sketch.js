let faceI, leftI, rightI, handI;
let xTrack, yTrack, xSpeed, lineCount, lineSpacing,penOffset;
let staffPI;
let staveCount,staveCurrent;
let staveColl = [];
 let staffSelect = 0;
    let lineSelect = 0;
    let tempPG;
let newNote = false;
let xSelect;

function preload() {
faceI = loadImage("FaceWxEyes.png");
  leftI = loadImage("LeftEye.png");
  rightI = loadImage("RightEye.png");
  handI = loadImage("CenterHandWithPen.png");
}

function setup() {
  let seed=floor(999999*fxrand());
  randomSeed(seed);
  noiseSeed(seed);
  createCanvas(windowWidth, windowHeight);
  staveCurrent = 0;
  staveCount = 4;
  lineCount = 5;
  lineSpacing = 12;
  xTrack=width+handI.width;
  yTrack = 6*lineSpacing;
  xSpeed= 38;
 
  penOffset = handI.width/2;//when using half height of the orig image
  imageMode(CORNER);
  
  for (let j = 0;j<staveCount;j++)
    staveColl.push(new staffO(j));
  
  staffSelect = floor(random(staveCount));
     lineSelect = floor(random(1,15))*lineSpacing/2;
     tempPG = staveColl[staffSelect].staffPI;
}

function draw() {
  background("#FCE6C7");
 for (let j = 0;j<staveCount;j++)
  image(staveColl[j].staffPI,0,staveColl[j].yTop);
  
  image(faceI,width/2,40,132,162);
  
  push();//Lefteye
  translate(width/2,10);
  let angle = map(xTrack,0,width,0.55,-0.55);
  rotate(angle);
  image(leftI,0,40,40,21);
  pop();
  push();
  translate(width/2+90,10);
   angle = map(xTrack,0,width,0.55,-0.55);
  rotate(angle);
  image(rightI,0,40,40,21);
  pop();
  
   if (staveCurrent < staveCount) {
  if (lineCount > 0) {
    strokeWeight(2);
    stroke(90);
   let handY = staveColl[staveCurrent].yTop+yTrack-196;
  image(handI,xTrack-penOffset/2,handY,107,196);  
    line(xTrack, staveColl[staveCurrent].yTop+yTrack,width,staveColl[staveCurrent].yTop+yTrack);
  
    xTrack-=xSpeed;
  if (xTrack < -penOffset) {//finish the line and draw it to the PG
     staveColl[staveCurrent].render(yTrack);
    xTrack = width;
  lineCount --;
    yTrack-=lineSpacing;
  }//end finish a line
  }// end sequence of lines in a staff
     else {
       lineCount = 5;
       staveCurrent++;
        yTrack = 6*lineSpacing;
       }//if linecount = 0
}//end draw all staves
  else {//now draw notes
    if (random(100)<5) {    
       staffSelect = floor(random(staveCount));
     lineSelect = floor(random(1,15))*lineSpacing/2;
     tempPG = staveColl[staffSelect].staffPI;
       xTrack = random(width);
      
      tempPG.noStroke();
      tempPG.fill(0);
      tempPG.ellipse(xTrack,lineSelect,15,10);
    }//5 % chance of new note
     image(handI,xTrack-penOffset/2,staveColl[staffSelect].yTop+lineSelect-196,107,196);  
  }// draw notes
}//end draw

class staffO {
constructor(count) {
  this.count = count;
  this.yTop = (count+1)*height*0.2;
  this.staffPI = createGraphics(width,lineSpacing*8);
}
  render(Y) {
   this.staffPI.strokeWeight(2);
    this.staffPI.stroke(90);
     this.staffPI.line(0, Y,width,Y);
  }
}

function keyTyped() {
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);  }}

