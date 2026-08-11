let camx,camy,stopro;
let state,grade;
let zz,gheart,starf;
let name,writename,bc;
let ro;
let sum_case,num,beforenum;
function preload() {
}
function setup() {
  zz=loadImage('kingsleep.png');
  gheart=loadImage('kingbird.png');
  starf=loadImage('kingwow.png');
  name=loadImage('kingmouse.png');
  writename=loadImage('mywv2.png');
  bc=loadImage('name.png');
  createCanvas(750, 1000, WEBGL);
  state=1;
  ro=1;
  grade=3;
  // print(fxhash);
  // print(isFxpreview);
  for(let i = 0; i < fxhash.length; i=i+1)
     {       
       sum_case=fxhash.charCodeAt(i)+beforenum;
       beforenum=fxhash.charCodeAt(i);
     }
  print(sum_case);
  if(sum_case%6==0||sum_case%6==1||sum_case%6==2){
    grade=1;
  }
  if(sum_case%6==3||sum_case%6==4){
    grade=2;
  }
  if(sum_case%6==5){
    grade=3;
  }
}

function draw() {
  camera(camx, camy, 380, 0, 0, 0, 0, 1, 0);
  
  if(state==1){
    camx=0;
    camy=0;
  }
  if(state==2){
    camx=200-mouseX/1.8;
    camy=150-mouseY/4.5;
  }
  if(state==3){
    camx=0;
    camy=0;
    rotateY(ro * 0.015);
    ro++;
  }
  if(state==4){
    rotateY(ro * 0.015);
  }
  if(state==5){
    camx=0;
    camy=0;
    rotateY(ro * 0.015);
    ro--;
  }
  background(173, 173, 173);
  ///////////////卡////////////////
  fill(255, 121, 97);
  stroke(255);
  box(200,280,5);
  noStroke();
  fill(255,255,255);
  box(190,270,2);
  
  ////////////////上排燈籠/////////////////
  noStroke();
  fill(255, 180, 143);
  
  translate(-90,-170,0);
  // cylinder(10, 20);
  box(15,15,5);
  translate(90,170,0);
  
  translate(-30,-170,0);
  box(15,15,5);
  translate(30,170,0);
  
  translate(30,-170,0);
  box(15,15,5);
  translate(-30,170,0);
  
  translate(90,-170,0);
  box(15,15,5);
  translate(-90,170,0);
  
  /////////////////下排燈籠//////////////////////
  noStroke();
  fill(255, 180, 143);
  
  translate(-90,170,0);
  box(15,15,5);
  translate(90,-170,0);
  
  translate(-30,170,0);
  box(15,15,5);
  translate(30,-170,0);
  
  translate(30,170,0);
  box(15,15,5);
  translate(-30,-170,0);
  
  translate(90,170,0);
  box(15,15,5);
  translate(-90,-170,0);
  
  //////////////燈籠ㄉ燈////////////////
  // spotLight()
 
  /////////////////卡面///////////////
  // fill(255, 255,255, 200);
  fill(255, 176, 158);
  noStroke();
  translate(0,-30,2);
  box(140,140,1.1);
  translate(0,0,2.51);
  stroke(255);
  noFill();
  if(grade==1)
  {
    texture(gheart);
  }
  if(grade==2)
  {
    texture(zz);
  }
  if(grade==3)
  {
    texture(starf);
  }
  plane(130,130,2,2);
  
  // fill(212, 212, 212);
  fill(255,255,255);
  noStroke();
  translate(0,-85,-2.5);
  box(100,12,1.1);
  translate(0,85,2.5);
  translate(0,-85,-1.5);
  texture(name);
  plane(100,12);
  translate(0,85,1.5);
  fill(255,255,255);
  translate(-50,-85,-2.5);
  rotateX(radians(90));
  cylinder(6, 2);
  rotateX(radians(-90));
  translate(50,85,2.5);
  translate(50,-85,-2.5);
  rotateX(radians(90));
  cylinder(6, 2);
  rotateX(radians(-90));
  translate(-50,85,2.5);
  
  // fill(148, 148, 148);
  fill(255,255,255);
  noStroke();
  translate(0,157,-2.5);
  box(100,2,4);
  translate(0,-157,2.5);
  translate(-50,157,-2.5);
  rotateX(radians(90));
  cylinder(1, 4);
  rotateX(radians(-90));
  translate(50,-157,2.5);
  translate(50,157,-2.5);
  rotateX(radians(90));
  cylinder(1, 4);
  rotateX(radians(-90));
  translate(-50,-157,2.5);
  
  ///////////螺絲/////////////
  noStroke();
  // fill(15, 29, 41,30);
  fill(255,255,255,230);
  translate(-87,-97,-1.5);
  rotateX(radians(90));
  cylinder(3, 2);
  rotateX(radians(-90));
  translate(87,97,1.5);

  translate(87,-97,-1.5);
  rotateX(radians(90));
  cylinder(3, 2);
  rotateX(radians(-90));
  translate(-87,97,1.5);
  
  translate(87,156,-1.5);
  rotateX(radians(90));
  cylinder(3, 2);
  rotateX(radians(-90));
  translate(-87,-156,1.5);
  
  translate(-87,156,-1.5);
  rotateX(radians(90));
  cylinder(3, 2);
  rotateX(radians(-90));
  translate(87,-156,1.5);
  
  
  noStroke();
  // fill(240, 245, 250,180);
  fill(255,255,255,250);
  translate(-87,-97,-0.5);
  rotateZ(radians(60));
  box(1, 4,0.5);
  rotateZ(radians(-60));
  translate(87,97,0);

  translate(87,-97,0);
  rotateZ(radians(143));
  box(1, 4,0.5);
  rotateZ(radians(-143));
  translate(-87,97,0);
  
  translate(87,156,0);
  rotateZ(radians(-128));
  box(1, 4,0.5);
  rotateZ(radians(128));
  translate(-87,-156,0);
  
  translate(-87,156,0);
  rotateZ(radians(-74));
  box(1, 4,0.5);
  rotateZ(radians(74));
  translate(87,-156,0);
  
  ////////////星級////////////////
  noStroke();
  fill(255, 255,255,250);
  translate(-50,110,0);
  rotateX(radians(90));
  cylinder(15, 2);
  rotateX(radians(-90));
  translate(0,0,2);
  push();
  fill(255, 128, 140);
  heart(0, -4.5, 13);
  pop();
  translate(0,0,-2);
  translate(50,-110,0);
  
  if(grade==2||grade==3){
  translate(0,110,0);
  rotateX(radians(90));
  cylinder(15, 2);
  rotateX(radians(-90));
  translate(0,0,2);
  push();
  fill(255, 150, 46);
  heart(0, -4.5, 13);
  pop();
  translate(0,0,-2);
  translate(0,-110,0);
  }
  
  if(grade==3){
  translate(50,110,0);
  rotateX(radians(90));
  cylinder(15, 2);
  rotateX(radians(-90));
  translate(0,0,2);
  push();
  fill(255, 237, 71);
  heart(0, -4.5, 13);
  pop();
  translate(0,0,-2);
  translate(-50,-110,0);}
  
  ///////////////卡背////////////////
  fill(255, 199, 199);
  noStroke();
  translate(0,20,-8);
  texture(writename);
  rotateY(radians(180));
  plane(60,60);
  rotateY(radians(-180));
  translate(0,-20,8);
  /////////////地球自轉//////////////
  noFill();
  noStroke();
  // fill(191, 226, 237,230);
  fill(255, 208, 143,250);
  texture(bc);
  rotateY(-millis() / 10000);
  sphere(500,10,7);
  
}

function keyPressed(){
  if(keyIsPressed&&key=='w'){
    state=1;
    ro=0;
  }
  if(keyIsPressed&&key=='s'){
    state=2;
    ro=0;
  }
  if(keyIsPressed&&key=='d'){
    state=3;
  }
  if(keyIsPressed&&key=='a'){
    state=5;
  }
  if(keyIsPressed&&key=='f'){
    state=4;
    stopro=ro;
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}













































