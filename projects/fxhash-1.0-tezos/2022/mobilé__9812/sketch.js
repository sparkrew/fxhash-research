function getFeatureColor(value) {
  if (value < 0.05) {
    bot = { r: 230, g: 230, b: 255 };
    return "white";
  }
  if (value < 0.1) {
    bot = { r: 0, g: 255, b: 255 };
    return "aqua";
  }
  if (value < 0.15) {

    bot = { r: 128, g: 0, b: 0 }; 
    return "maroon";
  }
  if (value < 0.2) {
    bot = { r: 178, g: 34, b: 34 };
    return "blood";
  }
  if (value < 0.25) {
    bot = { r: 85, g: 107, b: 47 };  
    return "dark olive green";
  }
  if (value < 0.3) {
    bot = { r: 25, g: 25, b: 112 };
    return "midnight blue";
  }
   if (value < 0.35) {
   bot = { r: 47, g: 79, b: 79 };  
    return "dark slate gray";
  }
  if (value < 0.4) {
    bot = { r: 218, g: 165, b: 32 };
    return "gold";
  }
  if (value < 0.45) {
    bot = { r: 127, g: 255, b: 212 };
    return "aquamarine";
  }
  if (value < 0.5) {
    bot = { r: 0, g: 255, b: 127 }; 
    return "spring green";
  }
  if (value < 0.55) {
    bot = { r: 245, g: 222, b: 179 };
    return "wheat";
  }
  if (value < 0.6) {
    bot = { r: 139, g: 69, b: 19 };
    return "saddle brown";
  }
  if (value < 0.65) {
    bot = { r: 112, g: 128, b: 144 };
    return "slate gray";
  }
  if (value < 0.7) {
    bot = { r: 0, g: 139, b: 139 }; 
    return "dark cyan";
  }
  if (value < 0.75) {
    bot = { r: 70, g: 130, b: 180 };
    return "steel blue";
  }
  if (value < 0.8) {
    bot = { r: 46, g: 139, b: 87 };
    return "sea green";
  }
  if (value < 0.85) {
    bot = { r: 255, g: 140, b: 0 };
    return "dark orange";
  }
  if (value < 0.90) {
    bot = { r: 128, g: 128, b: 0 };
    return "olive";
  }
  if (value < 0.95) {
    bot = { r: 0, g: 191, b: 255 };
    return "deep sky blue";
  }
  if (value < 1) {
    bot = { r: 255, g: 182, b: 193 };
    return "light pink";
  }
}

function getFeaturefux(value) {
  if (value < 0.05) {
   fux = { r: 178, g: 34, b: 34 };
    return "firebrick";
  }
    if (value < 0.10) {
   fux = { r: 255, g: 127, b: 80 };
    return "coral";
  }
    if (value < 0.15) {
   fux = { r: 240, g: 128, b: 228 };
    return "light coral";
  }
    if (value < 0.20) {
   fux = { r: 250, g: 128, b: 114 };
    return "salmon";
  }
    if (value < 0.25) {
   fux = { r: 218, g: 165, b: 32 };
    return "golden rod";
  }
    if (value < 0.30) {
   fux = { r: 107, g: 142, b: 35 };
    return "olive drab";
  }
    if (value < 0.35) {
   fux = { r: 0, g: 128, b: 0 };
    return "green";
  }
    if (value < 0.40) {
   fux = { r: 0, g: 128, b: 128 };
    return "teal";
  }
    if (value < 0.45) {
   fux = { r: 143, g: 188, b: 143 };
    return "dark sea green";
  }
    if (value < 0.50) {
   fux = { r: 64, g: 224, b: 208 };
    return "turquoise";
  }
    if (value < 0.55) {
   fux = { r: 100, g: 149, b: 237 };
    return "corn flower blue";
  }
    if (value < 0.60) {
   fux = { r: 135, g: 206, b: 235 };
    return "sky blue";
  }
    if (value < 0.65) {
   fux = { r: 138, g: 43, b: 226 };
    return "blue violet";
  }
    if (value < 0.70) {
   fux = { r: 147, g: 112, b: 219 };
    return "medium purple";
  }
    if (value < 0.75) {
   fux = { r: 186, g: 85, b: 211 };
    return "medium orchid";
  }
      if (value < 0.80) {
   fux = { r: 219, g: 112, b: 147 };
    return "pale violet red";
  }
      if (value < 0.85) {
   fux = { r: 245, g: 222, b: 179};
    return "wheat";
  }
      if (value < 0.90) {
   fux = { r: 210, g: 105, b: 30 };
    return "chocolate";
  }
      if (value < 0.95) {
   fux = { r: 112, g: 128, b: 144 };
    return "slate gray";
  }
       if (value < 1) {
   fux = { r: 192, g: 192, b: 192 };
    return "silver";
  }
  
}

function getFeatureback(value) {
  if (value < 0.07) {
   back = { r: 65, g: 105, b: 225 };
    return "royal blue";
  }
    if (value < 0.14) {
   back = { r: 123, g: 104, b: 238 };
    return "medium slate blue";
  }
    if (value < 0.21) {
   back = { r: 255, g: 99, b: 71 };
    return "tomato";
  }
    if (value < 0.28) {
   back = { r: 255, g: 165, b: 0 };
    return "orange";
  }
      if (value < 0.35) {
   back = { r: 238, g: 232, b: 170 };
    return "pale golden rod";
  }
      if (value < 0.42) {
   back = { r: 154, g: 205, b: 50 };
    return "yellow green";
  }
      if (value < 0.49) {
   back = { r: 144, g: 238, b: 144 };
    return "light green";
  }
      if (value < 0.56) {
   back = { r: 102, g: 205, b: 170 };
    return "medium aqua marine";
  }
      if (value < 0.63) {
   back = { r: 204, g: 255, b: 255 };
    return "light cyan";
  }
      if (value < 0.7) {
   back = { r: 216, g: 191, b: 216 };
    return "thistle";
  }
      if (value < 0.77) {
   back = { r: 255, g: 192, b: 203 };
    return "pink";
  }
      if (value < 0.84) {
   back = { r: 222, g: 184, b: 135 };
    return "burly wood";
  }
      if (value < 0.91) {
   back = { r: 245, g: 255, b: 250 };
    return "mint cream";
  }
      if (value < 1) {
   back = { r: 169, g: 169, b: 169 };
    return "dark grey";
  }
}

function getFeatureLeft(value) {
  if (value < 0.05) {
   left = { r: 178, g: 34, b: 34 };
    return "firebrick";
  }
    if (value < 0.10) {
   left = { r: 255, g: 127, b: 80 };
    return "coral";
  }
    if (value < 0.15) {
   left = { r: 240, g: 128, b: 228 };
    return "light coral";
  }
    if (value < 0.20) {
   left = { r: 250, g: 128, b: 114 };
    return "salmon";
  }
    if (value < 0.25) {
   left = { r: 218, g: 165, b: 32 };
    return "golden rod";
  }
    if (value < 0.30) {
   left = { r: 107, g: 142, b: 35 };
    return "olive drab";
  }
    if (value < 0.35) {
   left = { r: 0, g: 128, b: 0 };
    return "green";
  }
    if (value < 0.40) {
   left = { r: 0, g: 128, b: 128 };
    return "teal";
  }
    if (value < 0.45) {
   left = { r: 143, g: 188, b: 143 };
    return "dark sea green";
  }
    if (value < 0.50) {
   left = { r: 64, g: 224, b: 208 };
    return "turquoise";
  }
    if (value < 0.55) {
   left = { r: 100, g: 149, b: 237 };
    return "corn flower blue";
  }
    if (value < 0.60) {
   left = { r: 135, g: 206, b: 235 };
    return "sky blue";
  }
    if (value < 0.65) {
   left = { r: 138, g: 43, b: 226 };
    return "blue violet";
  }
    if (value < 0.70) {
   left = { r: 147, g: 112, b: 219 };
    return "medium purple";
  }
    if (value < 0.75) {
   left = { r: 186, g: 85, b: 211 };
    return "medium orchid";
  }
      if (value < 0.80) {
   left = { r: 219, g: 112, b: 147 };
    return "pale violet red";
  }
      if (value < 0.85) {
   left = { r: 245, g: 222, b: 179};
    return "wheat";
  }
      if (value < 0.90) {
   left = { r: 210, g: 105, b: 30 };
    return "chocolate";
  }
      if (value < 0.95) {
   left = { r: 112, g: 128, b: 144 };
    return "slate gray";
  }
       if (value < 1) {
   left = { r: 192, g: 192, b: 192 };
    return "silver";
  }
  
}
function getFeatureRight(value) {
  if (value < 0.05) {
   right = { r: 178, g: 34, b: 34 };
    return "firebrick";
  }
    if (value < 0.10) {
   right = { r: 255, g: 127, b: 80 };
    return "coral";
  }
    if (value < 0.15) {
   right = { r: 240, g: 128, b: 228 };
    return "light coral";
  }
    if (value < 0.20) {
   right = { r: 250, g: 128, b: 114 };
    return "salmon";
  }
    if (value < 0.25) {
   right = { r: 218, g: 165, b: 32 };
    return "golden rod";
  }
    if (value < 0.30) {
   right = { r: 107, g: 142, b: 35 };
    return "olive drab";
  }
    if (value < 0.35) {
   right = { r: 0, g: 128, b: 0 };
    return "green";
  }
    if (value < 0.40) {
   right = { r: 0, g: 128, b: 128 };
    return "teal";
  }
    if (value < 0.45) {
   right = { r: 143, g: 188, b: 143 };
    return "dark sea green";
  }
    if (value < 0.50) {
   right = { r: 64, g: 224, b: 208 };
    return "turquoise";
  }
    if (value < 0.55) {
   right = { r: 100, g: 149, b: 237 };
    return "corn flower blue";
  }
    if (value < 0.60) {
   right = { r: 135, g: 206, b: 235 };
    return "sky blue";
  }
    if (value < 0.65) {
   right = { r: 138, g: 43, b: 226 };
    return "blue violet";
  }
    if (value < 0.70) {
   right = { r: 147, g: 112, b: 219 };
    return "medium purple";
  }
    if (value < 0.75) {
   right = { r: 186, g: 85, b: 211 };
    return "medium orchid";
  }
      if (value < 0.80) {
   right = { r: 219, g: 112, b: 147 };
    return "pale violet red";
  }
      if (value < 0.85) {
   right = { r: 245, g: 222, b: 179};
    return "wheat";
  }
      if (value < 0.90) {
   right = { r: 210, g: 105, b: 30 };
    return "chocolate";
  }
      if (value < 0.95) {
   right = { r: 112, g: 128, b: 144 };
    return "slate gray";
  }
       if (value < 1) {
   right = { r: 192, g: 192, b: 192 };
    return "silver";
  }
  
}

function getFeaturewtf(value) {
  if (value < 0.05) {
   wtf = { r: 178, g: 34, b: 34 };
    return "firebrick";
  }
    if (value < 0.10) {
   wtf = { r: 255, g: 127, b: 80 };
    return "coral";
  }
    if (value < 0.15) {
   wtf = { r: 240, g: 128, b: 228 };
    return "light coral";
  }
    if (value < 0.20) {
   wtf = { r: 250, g: 128, b: 114 };
    return "salmon";
  }
    if (value < 0.25) {
   wtf = { r: 218, g: 165, b: 32 };
    return "golden rod";
  }
    if (value < 0.30) {
   wtf = { r: 107, g: 142, b: 35 };
    return "olive drab";
  }
    if (value < 0.35) {
   wtf = { r: 0, g: 128, b: 0 };
    return "green";
  }
    if (value < 0.40) {
   wtf = { r: 0, g: 128, b: 128 };
    return "teal";
  }
    if (value < 0.45) {
   wtf = { r: 143, g: 188, b: 143 };
    return "dark sea green";
  }
    if (value < 0.50) {
   wtf = { r: 64, g: 224, b: 208 };
    return "turquoise";
  }
    if (value < 0.55) {
   wtf = { r: 100, g: 149, b: 237 };
    return "corn flower blue";
  }
    if (value < 0.60) {
   wtf = { r: 135, g: 206, b: 235 };
    return "sky blue";
  }
    if (value < 0.65) {
   wtf = { r: 138, g: 43, b: 226 };
    return "blue violet";
  }
    if (value < 0.70) {
   wtf = { r: 147, g: 112, b: 219 };
    return "medium purple";
  }
    if (value < 0.75) {
   wtf = { r: 186, g: 85, b: 211 };
    return "medium orchid";
  }
      if (value < 0.80) {
   wtf = { r: 219, g: 112, b: 147 };
    return "pale violet red";
  }
      if (value < 0.85) {
   wtf = { r: 245, g: 222, b: 179};
    return "wheat";
  }
      if (value < 0.90) {
   wtf = { r: 210, g: 105, b: 30 };
    return "chocolate";
  }
      if (value < 0.95) {
   wtf = { r: 112, g: 128, b: 144 };
    return "slate gray";
  }
       if (value < 1) {
   wtf = { r: 192, g: 192, b: 192 };
    return "silver";
  }
  
}


window.$fxhashFeatures = {
  balls: getFeatureColor(fxrand()),
  ceiling : getFeaturefux(fxrand()),
  background : getFeatureback(fxrand()),
  wallLeft : getFeatureLeft(fxrand()),
  wallRight: getFeatureRight(fxrand()),
  floor : getFeaturewtf(fxrand()),
  
};

var wtf;
var right;
var left;
var back;
var fux;
var bot;
var lineA=40;
var lineY=40;
var lineX=40;
var lineB=40;
var lineC=40;
var lineD=40;
var lineE=40;
var lineF=40;
var lineG=40;
var lineH=40;
var lineU=40;
var lineP=40;
var lineL=40;
var lineW=40;
var lineT=40;
var lineR=40;
var lineO=40;
var lineS=40;
var lineJ=40;
var lineM=40;
var lineX2=40;
var lineX3=40;
var lineX4=40;
var lineX5=40;
var lineX6=40;
var lineX7=40;
var lineX8=40;
var lineX9=40;
var lineX10=40;
var lineX11=40;
var lineX12=40;
var lineX13=40;
var lineX14=40;
var lineX15=40;
var speedX15=0.4;
var lineX16=40;
var speedX16=0.85;
var speedX14=0.5;
var speedX13=0.75;
var speedX12=0.39;
var speedX11=0.4;
var speedX10=0.9;
var speedX9=0.66
var speedX8=0.9
var speedX7=0.5;
var speedX6=0.8;
var speedX5=1;
var speedX4=0.7;
var speedX3=1;
var speedX2=1.5;
var speedM=1.39;
var speedJ=1.6;
var speedS=0.85;
var speedO=0.39;
var speedR=0.69;
var speedT=0.99;
var speedW=0.38;
var speedL=0.55;
var speedP=0.7;
var speedU=1;
var speedH=0.31;
var speedB=0.15;
var speedG=0.60;
var speedE=0.68;
var speedD=1.1;
var speed=1;
var speedA=0.5;
var speedC=0.4;
var speedF=0.7;




function preload() {
  img = loadImage("back.png");
}

function setup() {
  createCanvas(800,800);
  randomSeed(fxrand() * 1000);
  k = random();

  
 
}

function draw() {
  
  background(back.r,back.g,back.b);
  
  frameRate(30);
  
  
//___________________ lines
push();
noStroke(); //LEFT 
push();
beginShape();
fill(left.r,left.g,left.b);
vertex(0, 0);
vertex(173, 173);
vertex(173,627)
vertex(0,800);
endShape(CLOSE);
pop();

push();  
strokeWeight(2); //top
beginShape();
fill(fux.r,fux.g,fux.b)
vertex(627, 173);
vertex(800, 0);
vertex(0, 0);
vertex(173, 173);
endShape(CLOSE);
pop();

push();
strokeWeight(2); //BOT
beginShape();
fill(wtf.r,wtf.g,wtf.b)
vertex(173, 627);
vertex(627, 627);
vertex(800, 800);
vertex(0, 800);
endShape(CLOSE);
pop();
  
push();  
noStroke();  //right
beginShape();
fill(right.r,right.g,right.b);
vertex(627, 627);
vertex(800, 800);
vertex(800, 0);
vertex(627, 173);
endShape(CLOSE);
pop();

  
   //BALLS  BALLS  BALLS
  //_______________________________________________________
  //speedA + lineY
  
  

  
  
  push();
    print("lineY=",lineY);
    print ("speed=",speed);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b);
    line(200, lineY-100, 200, lineY+200);
  noStroke();
    ellipse(200,lineY+200,50,50)
  
      lineY = lineY + speedA;
    if (lineY > 100) {
      speedA = -(speedA);
    } else if (lineY + 1 < 0) {
      speedA = 0.5;
    }
  pop();
  
        push();
         // hole 1
  noStroke();
  fill(fux.r,fux.g,fux.b)
  rect(195,50,10,30);
  fill(0);
  ellipse(200,80,7,5);
  pop();
  
  
  //speed + lineA
   push();
    print("lineA=",lineA);
    print ("speed=",speed);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b)
    line(230, lineA-100, 230, lineA+220);
   noStroke();
    ellipse(230,lineA+245,50,50)
  
      lineA = lineA + speed;
    if (lineA > 100) {
      speed = -(speed);
    } else if (lineA + 1 < 0) {
      speed = 1;
    }
  pop();
  
    push();
  noStroke();         // hole 2
  fill(fux.r,fux.g,fux.b)
  rect(210,59.5,30,30);
  fill(0);
  ellipse(230,90,7,5);
  pop();
  
  //speedB + lineB
  push();
    print("lineB=",lineB);
    print ("speedB=",speedB);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b)
    line(265, lineB-100, 265, lineB+170);
   noStroke();
    ellipse(265,lineB+170,50,50)
  
      lineB = lineB + speedB;
    if (lineB > 100) {
      speedB = -(speedB);
    } else if (lineB + 1 < 0) {
      speedB = 1;
    }
  pop();
  
     push();
  noStroke();         // hole 4
  fill(fux.r, fux.g, fux.b);
  rect(260,59.5,10,60);
  fill(0);
  ellipse(265,120,7,5);
  pop();
  
  
   push();
    print("lineC=",lineC);
    print ("speedC=",speedC);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b);
    line(250, lineC-100, 250, lineC+100);
   noStroke();
    ellipse(250,lineC+100,50,50)
  
      lineC = lineC + speedC;
    if (lineC > 100) {
      speedC = -(speedC);
    } else if (lineC + 1 < 0) {
      speedC = 1;
    }
  pop();
  
  push();
  noStroke();         // hole 3
  fill(fux.r, fux.g, fux.b);
  rect(245,59.5,10,10);
  fill(0);
  ellipse(250,70,7,5);
  pop();
  
  
  push();
    print("lineD=",lineD);
    print ("speedD=",speedD);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b);
    line(278, lineD-100, 278, lineD+100);
   noStroke();
    ellipse(278,lineD+120,50,50)
  
      lineD = lineD + speedD;
    if (lineD > 100) {
      speedD = -(speedD);
    } else if (lineD + 1 < 0) {
      speedD = 1;
    }
  pop();
  
  push();
 
  noStroke();         // hole 5
  fill(fux.r, fux.g, fux.b);
  rect(275,59.5,5,13);
  fill(0);
  ellipse(278,75,7,5);
  pop();
  
  
  push();
    print("lineE=",lineE);
    print ("speedE=",speedE);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b);
    line(284, lineE-100, 284, lineE+210);
   noStroke();
    ellipse(284,lineE+235,50,50)
  
      lineE = lineE + speedE;
    if (lineE > 100) {
      speedE = -(speedE);
    } else if (lineE + 1 < 0) {
      speedE = 1;
    }
  pop();
  
  
  push();
         // hole 6
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(283,50,5,35);
  fill(0);
  ellipse(284,84,7,5);
  pop();
  
   push();
    print("lineF=",lineF);
    print ("speedF=",speedF);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b);
    line(297, lineF-100, 297, lineF+160);
   noStroke();
    ellipse(297,lineF+180,50,50)
  
      lineF = lineF + speedF;
    if (lineF > 100) {
      speedF = -(speedF);
    } else if (lineF + 1 < 0) {
      speedF = 1;
    }
  pop();
  
 
  
    push();
    print("lineG=",lineG);
    print ("speedG=",speedG);
    strokeWeight(1);
    stroke(0);
  fill(bot.r, bot.g, bot.b);
    line(297, lineG-100, 297, lineG+160);
   noStroke();
    ellipse(297,lineG+180,50,50)
  
      lineG = lineG + speedG;
    if (lineG > 100) {
      speedG = -(speedG);
    } else if (lineG + 1 < 0) {
      speedG = 1;
    }
  pop();
  
  push();
         // hole 6
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(294,50,5,44);
  fill(0);
  ellipse(297,94,7,5);
  pop();
  
   push();
    print("lineH=",lineH);
    print ("speedH=",speedH);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b);
    line(310, lineH-100, 310, lineH+270);
   noStroke();
    ellipse(310,lineH+295,50,50)
  
      lineH = lineH + speedH;
    if (lineH > 100) {
      speedH = -(speedH);
    } else if (lineH + 1 < 0) {
      speedH = 0;
    }
  pop();
  
    push();
         // hole 7
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(306,50,5,24);
  fill(0);
  ellipse(310,76,7,5);
   noStroke();
  pop();
  
  
    push();
    print("lineU=",lineU);
    print ("speedU=",speedU);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(330, lineU-100, 330, lineU+230);
   noStroke();
    ellipse(330,lineU+255,50,50)
  
      lineU = lineU + speedU;
    if (lineU > 100) {
      speedU = -(speedU);
    } else if (lineU + 1 < 0) {
      speedU = 1;
    }
  pop();
  
   push();
         // hole 8
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(327,50,5,66);
  fill(0);
  ellipse(330,118,7,5);
  pop();
  

  
    push();
    print("lineL=",lineL);
    print ("speedL=",speedL);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b);
    line(357, lineL-100, 357, lineL+180);
   noStroke();
    ellipse(357,lineL+205,50,50)
  
      lineL = lineL + speedL;
    if (lineL > 100) {
      speedL = -(speedL);
    } else if (lineL + 1 < 0) {
      speedL = 1;
    }
  pop();
  
   push();
         // hole 10
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(355,50,5,86);
  fill(0);
  ellipse(357,138,7,5);
  pop();
  
  
  push();
    print("lineW=",lineW);
    print ("speedW=",speedW);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(364, lineW-100, 364, lineW+290);
   noStroke();
    ellipse(364,lineW+316,50,50)
  
      lineW = lineW + speedW;
    if (lineW > 100) {
      speedW = -(speedW);
    } else if (lineW + 1 < 0) {
      speedW = 1;
    }
  pop();
  
   push();
         // hole 10
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(362,50,5,56);
  fill(0);
  ellipse(364,108,7,5);
  pop();
  
   push();
    print("lineP=",lineP);
    print ("speedP=",speedP);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b);
    line(350, lineP-100, 350, lineP+120);
   noStroke();
    ellipse(350,lineP+125,50,50)
  
      lineP = lineP + speedP;
    if (lineP > 100) {
      speedP = -(speedP);
    } else if (lineP + 1 < 0) {
      speedP = 1;
    }
  pop();
  
   push();
         // hole 9
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(347,50,5,35);
  fill(0);
  ellipse(350,87,7,5);
  pop();
  
  push();
    print("lineT=",lineT);
    print ("speedT=",speedT);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(427, lineT-100, 427, lineT+230);
   noStroke();
    ellipse(427,lineT+250,50,50)
  
      lineT = lineT + speedT;
    if (lineT > 100) {
      speedT = -(speedT);
    } else if (lineT + 1 < 0) {
      speedT = 1;
    }
  pop();
  
         push();
         // hole 15
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(426,50,5,71);
  fill(0);
  ellipse(427,123,7,5);
  pop();
  
   
  
   push();
    print("lineR=",lineR);
    print ("speedR=",speedR);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(390, lineR-100, 390, lineR+230);
   noStroke();
    ellipse(390,lineR+255,50,50)
  
      lineR = lineR + speedR;
    if (lineR > 100) {
      speedR = -(speedR);
    } else if (lineR + 1 < 0) {
      speedR = 1;
    }
  pop();
  
   push();
         // hole 11
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(387,50,5,80);
  fill(0);
  ellipse(390,132,7,5);
  pop();
  
  
   push();
    print("lineO=",lineO);
    print ("speedO=",speedO);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(397, lineO-100, 397, lineO+165);
   noStroke();
    
    ellipse(397,lineO+179,50,50)
  
      lineO = lineO + speedO;
    if (lineO > 100) {
      speedO = -(speedO);
    } else if (lineO + 1 < 0) {
      speedO = 1;
    }
  pop();
  
   push();
         // hole 12
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(395,50,5,61);
  fill(0);
  ellipse(397,113,7,5);
  pop();
  
   
   push();
    print("lineS=",lineS);
    print ("speedS=",speedS);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(405, lineS-100, 405, lineS+100);
   noStroke();
    ellipse(405,lineS+119,50,50)
  
      lineS = lineS + speedS;
    if (lineS > 100) {
      speedS = -(speedS);
    } else if (lineS + 1 < 0) {
      speedS = 1;
    }
  pop();
  
   push();
         // hole 13
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(404,50,5,31);
  fill(0);
  ellipse(405,83,7,5);
  pop();
  
    push();
    print("lineJ=",lineJ);
    print ("speedJ=",speedJ);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(420, lineJ-100, 420, lineJ+300);
   noStroke();
    ellipse(420,lineJ+310,50,50)
  
      lineJ = lineJ + speedJ;
    if (lineJ > 100) {
      speedJ = -(speedJ);
    } else if (lineJ + 1 < 0) {
      speedJ = 1;
    }
  pop();
  
    push();
         // hole 14
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(417,50,5,21);
  fill(0);
  ellipse(420,73,7,5);
  pop();
  
     push();
    print("lineM=",lineM);
    print ("speedM=",speedM);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
      line(438, lineM-100, 438, lineM+170);
   noStroke();
    ellipse(438,lineM+195,50,50)
  
      lineM = lineM + speedM;
    if (lineM > 100) {
      speedM = -(speedM);
    } else if (lineM + 1 < 0) {
      speedM = 1;
    }
  pop();
  
          push();
         // hole 15
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(436,50,5,41);
  fill(0);
  ellipse(438,93,7,5);
  pop();
  

  
   push();
    print("lineX3=",lineX3);
    print ("speedX3=",speedX3);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(459, lineX3-100, 459, lineX3+140);
   noStroke();
    ellipse(459,lineX3+165,50,50)
  
      lineX3 = lineX3 + speedX3;
    if (lineX3 > 100) {
      speedX3 = -(speedX3);
    } else if (lineX3 + 1 < 0) {
      speedX3 = 1;
    }
  pop();
  
  
            push();
         // hole 17
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(456,50,5,81);
  fill(0);
  ellipse(459,133,7,5);
  pop();
  
  
  
   push();
    print("lineX4=",lineX4);
    print ("speedX4=",speedX4);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
     
    line(464, lineX4-100, 464, lineX4+270);
   noStroke();
    ellipse(464,lineX4+290,50,50)
  
      lineX4 = lineX4 + speedX4;
    if (lineX4 > 100) {
      speedX4 = -(speedX4);
    } else if (lineX4 + 1 < 0) {
      speedX4 = 1;
    }
  pop();
  
  
              push();
         // hole 18
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(460, 50,5,55);
  fill(0);
  ellipse(464,105,7,5);
  pop();
  
     push();
    print("lineX5=",lineX5);
    print ("speedX5=",speedX5);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
     
    line(470, lineX5-100, 470, lineX5+220);
   noStroke();
    ellipse(470,lineX5+240,50,50)
  
  
      lineX5 = lineX5 + speedX5;
    if (lineX5 > 100) {
      speedX5 = -(speedX5);
    } else if (lineX5 + 1 < 0) {
      speedX5 = 1;
    }
  pop();
  
                push();
         // hole 19
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(468, 50,5,35);
  fill(0);
  ellipse(470,87,7,5);
  pop();
  
    push();
    print("lineX6=",lineX6);
    print ("speedX6=",speedX6);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
     
    line(490, lineX6-100, 490, lineX6+220);
   noStroke();
    ellipse(490,lineX6+200,50,50)
  
  
      lineX6 = lineX6 + speedX6;
    if (lineX6 > 100) {
      speedX6 = -(speedX6);
    } else if (lineX6 + 1 < 0) {
      speedX6 = 1;
    }
  pop();
  
                  push();
         // hole 20
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(488, 50,5,65);
  fill(0);
  ellipse(490,116,7,5);
  pop();
  
  
     push();
    print("lineX2=",lineX2);
    print ("speedX2=",speedX2);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
    line(450, lineX2-100, 450, lineX2+80);
   noStroke();
    ellipse(450,lineX2+100,50,50)
  
      lineX2 = lineX2 + speedX2;
    if (lineX2 > 100) {
      speedX2 = -(speedX2);
    } else if (lineX2 + 1 < 0) {
      speedX2 = 1;
    }
  pop();
  
         push();
         // hole 16
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(448,50,5,11);
  fill(0);
  ellipse(450,63,7,5);
  pop();
  
  
  
  
  
   push();
    print("lineX7=",lineX7);
    print ("speedX7=",speedX7);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
     
    line(497, lineX7-100, 497, lineX7+100);
   noStroke();
    
    ellipse(497,lineX7+125,50,50)
  
  
      lineX7 = lineX7 + speedX7;
    if (lineX7 > 100) {
      speedX7 = -(speedX7);
    } else if (lineX7 + 1 < 0) {
      speedX7 = 1;
    }
  pop();
  

           push();
         // hole 21
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(494,50,5,45);
  fill(0);
  ellipse(497,96,7,5);
  pop();
  

  

   push();
    print("lineX9=",lineX9);
    print ("speedX9=",speedX9);
    strokeWeight(1);
    stroke(0);
   fill(bot.r, bot.g, bot.b)
  
    line(515, lineX5-100, 515, lineX5+250);
   noStroke();
    ellipse(515,lineX5+270,50,50)
  
  
      lineX9 = lineX9 + speedX9;
    if (lineX9 > 100) {
      speedX9 = -(speedX9);
    } else if (lineX9 + 1 < 0) {
      speedX9 = 1;
    }
  pop();
  
             push();
         // hole 22
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(513,50,3,40);
  fill(0);
  ellipse(515,92,7,5);
  pop();
  
  
  
   push();
    print("lineX10=",lineX10);
    print ("speedX10=",speedX10);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
  
    line(525, lineX10-100, 525, lineX10+180);
  fill(bot.r, bot.g, bot.b);
   noStroke();
    ellipse(525,lineX10+198,50,50)
  
  
      lineX10 = lineX10 + speedX10;
    if (lineX10 > 100) {
      speedX10 = -(speedX10);
    } else if (lineX10 + 1 < 0) {
      speedX10 = 1;
    }
  pop();
  
               push();
         // hole 23
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(524,50,3,80);
  fill(0);
  ellipse(525,132,7,5);
  pop();

  
   push();
    print("lineX9=",lineX9);
    print ("speedX9=",speedX9);
    strokeWeight(1);
    stroke(0);
    fill(bot.r, bot.g, bot.b)
     
    line(510, lineX9-100, 510, lineX9+300);
  fill(bot.r, bot.g, bot.b);
   noStroke();
    ellipse(510,lineX9+325,50,50)
  
  
      lineX9 = lineX9 + speedX9;
    if (lineX9 > 100) {
      speedX9 = -(speedX9);
    } else if (lineX9 + 1 < 0) {
      speedX9 = 1;
    }
  pop();
    
             push();
         // hole 24
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(507,50,5,25);
  fill(0);
  ellipse(510,75,7,5);
  pop();
  
   push();
    print("lineX13=",lineX13);
    print ("speedX13=",speedX13);
    strokeWeight(1);
    stroke(0);
   fill(bot.r, bot.g, bot.b)
    line(557, lineX13-100, 557, lineX13+240);
   noStroke();
    ellipse(557,lineX13+250,50,50)
    lineX13 = lineX13 + speedX13;
    if (lineX13 > 100) {
      speedX13 = -(speedX13);
    } else if (lineX13 + 1 < 0) {
      speedX13 = 1;
    }
  pop();

  
  push();
    print("lineX14=",lineX14);
    print ("speedX14=",speedX14);
    strokeWeight(1);
    stroke(0);
   fill(bot.r, bot.g, bot.b)
    line(570, lineX14-100, 570, lineX14+190);
   noStroke();
    ellipse(570,lineX14+210,50,50)
  
    lineX14 = lineX14 + speedX14;
    if (lineX14 > 100) {
      speedX14 = -(speedX14);
    } else if (lineX14 + 1 < 0) {
      speedX14 = 1;
    }
  pop();
  
                 push();
         // hole 26
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(555,50,5,37);
  fill(0);
  ellipse(557,85,7,5);
  pop();
  
     push();
    print("lineX15=",lineX15);
    print ("speedX15=",speedX15);
    strokeWeight(1);
    stroke(0);
   fill(bot.r, bot.g, bot.b)
    line(600, lineX15-100, 600, lineX15+290);
   noStroke();
    ellipse(600,lineX15+315,50,50)
  
    lineX15 = lineX15 + speedX15;
    if (lineX15 > 100) {
      speedX15 = -(speedX15);
    } else if (lineX15 + 1 < 0) {
      speedX15 = 1;
    }
  pop();
  
                   push();
         // hole 26
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(567,50,5,27);
  fill(0);
  ellipse(570,75,7,5);
  pop();
  
    push();
    print("lineX16=",lineX16);
    print ("speedX16=",speedX16);
    strokeWeight(1);
    stroke(0);
 fill(bot.r, bot.g, bot.b)
    line(610, lineX16-100, 610, lineX16+140);
   noStroke();
    ellipse(610,lineX16+165,50,50)
  
    lineX16 = lineX16 + speedX16;
    if (lineX16 > 100) {
      speedX16 = -(speedX16);
    } else if (lineX16 + 1 < 0) {
      speedX16 = 1;
    }
  pop();
  
                     push();
         // hole 26
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(607,50,5,37);
  fill(0);
  ellipse(610,85,7,5);
  pop();
  
   push();
           // hole 26
  noStroke();
  fill(fux.r, fux.g, fux.b);
  rect(597,50,5,67);
  fill(0);
  ellipse(600,115,7,5);
  pop();
  
 

   push();
  //________________outside
 stroke(bot.r, bot.g, bot.b)
 strokeWeight(119)
 noFill();
 rect(0,0,800,800)
  pop();
  push();
  


   tint(255, 28); //grain
  image(img, 0, 0, width, height);
}