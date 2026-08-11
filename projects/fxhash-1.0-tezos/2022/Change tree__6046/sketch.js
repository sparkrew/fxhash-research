// GLOBAl VARIABLES
let angle = 0;
let cloudA = 60;
let cloudB = 100;
let velocityX = 4;
let velocityY = 0.8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  //noLoop();
}

function draw(){
  background(random(100,255), random(100,255), random(100,255));
  sun();
  grass();
  birds();
  clouds();
  //grass
 // noStroke();
 // fill (11, 138, 32);
 // ellipse (309, 450, 405, 40);
  translate(width/2, height/2 +200);
  //
  
  branch(100);

 
     
}
function sun(){
  noStroke();
  fill(255, 234, 94);
  circle(mouseX,180,50);
  
}


function grass(){
  
  noStroke();
  fill (11, 138, 32);
  ellipse (mouseX, 450, 405, 40);
}

function birds() {
  push();

  translate(width/2, height/2 +200);
  rotate(angle);

  
  noStroke();
  fill(240, 34, 19);
  noStroke();
  ellipse(mouseX, 145, 25, 4);
  stroke(0);
  strokeWeight(2);
  line(mouseX + 4, 145, mouseX - 8, 135);
  noStroke();
  ellipse(mouseX - 45, 170, 15, 4);
  stroke(0);
  strokeWeight(2);
  fill(0);
  line(mouseX - 45, 170, mouseX - 55, 163);
  angle -= 3;

  pop();
  
}

function clouds(){
 noStroke();
  fill(255);
  ellipse(cloudA+50, cloudB-40, 80, 10);
  ellipse(cloudA-50, cloudB-30, 60, 30);
  ellipse(cloudA+50,cloudB-10, 70, 20);
  fill(247, 255, 5);
  circle(200,200,15);
  circle(300,180, 10);
  circle(160, 180, 15);
  circle(600, 200, 10);
  circle(100,40,15);
 
  cloudA += velocityX;
  cloudB += velocityY;

  if (cloudA > 400 || cloudA < -70) {
    velocityX = -velocityX;
  }
  if (cloudB > 300 || cloudB < -80) {
    velocityY = -velocityY;
  }

  
}

// tree
function branch(len){
  push();
  
  if(len > 10) {
    strokeWeight(map(len,10,100,1,15));
    stroke(70,40,20);
    line(0,0,0,-len);
    translate(0,-len);
    rotate(random(-20,-30));
    branch(len * random(0.7,0.9)); 
    rotate(random(50,60));
    branch(len * random(0.7,0.9));
  } else{
    var r = 80 + random(100,150);
    var g = 120 + random(-20,50);
    var b = 40 + random(-20,80);
    fill(r,g,b, 150);
    noStroke();
    
    
    beginShape();
    for(var i =45; i <135; i++ ){
      var rad =15;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x,y);
       
    }
    
    for(var i =135; i >40; i-- ){
      var rad =15;
      var x = rad * cos(i);
      var y = rad * sin(-i)+20;
      vertex(x,y);
    
    }
    
    endShape(CLOSE);
    //ellipse(0,0,10);
      
  }
  pop();  
  
}
 

    // https://youtu.be/-3HwUKsovBE

  
    
	