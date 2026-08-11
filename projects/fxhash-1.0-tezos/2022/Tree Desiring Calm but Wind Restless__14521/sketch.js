const creator = new URLSearchParams(window.location.search).get("creator");
const viewer = new URLSearchParams(window.location.search).get("viewer");
let wallet = fxhash;

let img1_1,img1_2,img2_1,img2_2,img3_1,img3_2,img4_1,img4_2,img5_1,img5_2;
var angle = 0;
let c1, c2;
let temp = (wallet[11].charCodeAt()-48) * 3;
let temp2 = (wallet[12].charCodeAt()-48) * 3;

function preload(){
  img1_1 = loadImage('leaf1.png');
  img1_2 = loadImage('house1.png');
  img2_1 = loadImage('leaf2.png');
  img2_2 = loadImage('house2.png');
  img3_1 = loadImage('leaf3.png');
  img3_2 = loadImage('house3.png');
  img4_1 = loadImage('leaf4.png');
  img4_2 = loadImage('house4.png');
  img5_1 = loadImage('leaf5.png');
  img5_2 = loadImage('house5.png');
}

function setup() {
  if (wallet == "false") {
    wallet = "tz1d41q9NR6GcUEMrDki1bsUS7josNnFMUo2";
  }
  createCanvas(600, 600);
  frameRate(30);  
  angleMode(DEGREES);
  noCursor();
}

function draw() {
  if (wallet[11].charCodeAt() >= 48 && wallet[11].charCodeAt() < 67) 
  {
   c1 = color(255, 120, 0);
   c2 = color(63, 191, 191, 80);
   for(let y = 0; y < height; y++)
   {
     n = map(y, 0, height, 0, 1);
     let newc = lerpColor(c1, c2, n);
     stroke(newc);
     line(0, y, width, y);
   }
   image(img1_2, 0, -100);
   push();
   translate(width/2, height/3);
   rotate(frameCount*100);
   imageMode(CENTER);
   image(img1_1, 0, 0);
   angle++;
   pop();
  } 
  if (wallet[11].charCodeAt() >= 67 && wallet[11].charCodeAt() < 79) 
  {
   c1 = color(77, 118, 14);
   c2 = color(236, 154, 60, 80);
   for(let y = 0; y < height; y++)
   {
     n = map(y, 0, height, 0, 1);
     let newc = lerpColor(c1, c2, n);
     stroke(newc);
     line(0, y, width, y);
   }
   image(img2_2, 0, -100);
   push();
   translate(width/2, height/3);
   rotate(frameCount*100);
   imageMode(CENTER);
   image(img2_1, 0, 0);
   angle++;
   pop();
  }
  if (wallet[11].charCodeAt() >= 79 && wallet[11].charCodeAt() < 91) 
  {
   c1 = color(14, 49, 118);
   c2 = color(63, 191, 191, 80);
   for(let y = 0; y < height; y++)
   {
     n = map(y, 0, height, 0, 1);
     let newc = lerpColor(c1, c2, n);
     stroke(newc);
     line(0, y, width, y);
   }
   image(img3_2, 0, -100);
   push();
   translate(width/2, height/3);
   rotate(frameCount*100);
   imageMode(CENTER);
   image(img3_1, 0, 0);
   angle++;
   pop();
  }        
  if (wallet[11].charCodeAt() >= 97 && wallet[11].charCodeAt() < 109) 
  {
   c1 = color(152, 243, 246);
   c2 = color(236, 45, 236, 80);
   for(let y = 0; y < height; y++)
   {
     n = map(y, 0, height, 0, 1);
     let newc = lerpColor(c1, c2, n);
     stroke(newc);
     line(0, y, width, y);
   }
   image(img4_2, 0, -100);
   push();
   translate(width/2, height/3);
   rotate(frameCount*100);
   imageMode(CENTER);
   image(img4_1, 0, 0);
   angle++;
   pop();
  }
  if (wallet[11].charCodeAt() >= 109 && wallet[11].charCodeAt() <= 122) 
  {
   c1 = color(236, 211, 45);
   c2 = color(238, 164, 230, 80);
   for(let y = 0; y < height; y++)
   {
     n = map(y, 0, height, 0, 1);
     let newc = lerpColor(c1, c2, n);
     stroke(newc);
     line(0, y, width, y);
   }
   image(img5_2, 0, -70);
   push();
   translate(width/2, height/3);
   rotate(frameCount*100);
   imageMode(CENTER);
   image(img5_1, 0, 0);
   angle++;
   pop();
  }
  
  push();
  translate(width/2, height/3);
  rotate(frameCount * 100);
  noFill();
  stroke(255,50);
  strokeWeight(random(0,3));
  ellipse(0, 0, random(80,100),random(60,80));
  ellipse(0, 0, random(320,340),random(340,360));
  ellipse(0, 0, random(420,440),random(440,460));
  pop();
  
  push();
  noStroke();
  fill(temp*2+40,temp2+50,temp+10);
  ellipse(width/2,height+100,800,400);
  fill(149,181,63);
  ellipse(width/2,height+100,700,350);
  fill(118,144,48);
  ellipse(width/2,height+100,600,300);
  pop();
  
  push();
  translate(width/2, height*29/30);
  branch(30);
  pop();
  push();
  translate(width/3, height*29/30);
  branch(30);
  pop();
  push();
  translate(width*2/3, height*28/30);
  branch(30);
  pop();
  push();
  translate(width*3/4, height*30/31);
  branch(30);
  pop();
  push();
  translate(width*2/5, height*30/32);
  branch(25);
  pop();
  push();
  translate(width*1/10, height*30/32);
  branch(30);
  pop();
  push();
  translate(width*3/10, height*34/35);
  branch(30);
  pop();
  push();
  translate(width*2/15, height*39/40);
  branch(25);
  pop();
  push();
  translate(width*14/15, height*39/40);
  branch(25);
  pop();
  push();
  translate(width*6/10, height*34/35);
  branch(35);
  pop();
  push();
  translate(width*1/5, height*30/32);
  branch(50);
  pop();
  push();
  translate(width*4/5, height*30/32);
  branch(40);
  pop();
  push();
  translate(width*2/3, height*49/50+25);
  branch(20);
  pop();
  push();
  translate(width/3-180, height*49/50+25);
  branch(20);
  pop();
  push();
  translate(width/3+50, height*49/50+5);
  branch(20);
  pop(); 
  
  push();
  translate(width/2 ,height/3);
  rotate(frameCount*100);
  WindGo(40);
  pop();
}

function branch (len){
  push();
  if (len > 10){
  strokeWeight(map(len,10,100,1,15));
  stroke(118, 87, 14);
  line(0, 0, 0, -len);
  translate(0, -len);
  
  rotate(random(20,30));
  branch(len*random(0.8,0.9));
  rotate(random(-40,-60));
  branch(len*random(0.75,0.8));
  
  var r = 80 + random(-30, 30) + temp2;
  var g = 140 + temp + random(-10,10);  
  var b = 30 + temp2*2; 
  fill(r,g,b);
  noStroke();
  ellipse(random(0,5),random(0,5),random(10));
  }
  pop();
}

function WindGo (winG){
  stroke(255,50);
  strokeWeight(random(0,10));
  rotate(winG);
  beginShape();
  curveVertex(0,40);
  curveVertex(400,160);
  curveVertex(100,60);
  curveVertex(300,90);
  endShape(); 
}
