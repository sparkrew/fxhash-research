let wdW, wdH,picW,picH;
var color1, color2, sc, _w, paint, prand,v1,v2,v3,car;
var sum=0;
var gnote, gcarpet, gpic, value;
function preload() {
}
function setup() {
  createCanvas(windowHeight, windowHeight, WEBGL);
  for(let i = 0; i < fxhash.length; i=i+1){
    sum = fxhash.charCodeAt(i)+sum;
    noStroke();
    fill(fxhash.charCodeAt(i));
    rect(i*5,100,5,100);
  }
  print(sum);
  colorswitch();
  wdW=map(fxrand(),0,1,50,100);//130-50 
  wdH=map(fxrand(),0,1,50,100);//100-50
  picW=map(fxrand(),0,1,8,20);
  picH=map(fxrand(),0,1,8,20);
  paint=map(fxrand(),0,1,5,30);
  prand=map(fxrand(),0,1,0,1.5);
  car=map(fxrand(),0,1,50,70);
  sc = sum%2;
  print(gcarpet);
  print(gnote);
  print(gpic);
}

function draw() {
  background(color1,50,50);
  push();
  rotateY(frameCount*0.01);
  mywall();
  if(sc == 0){
    _w = -1;
    mywindow();
    swplace();
    wallnote();
}
  if(sc == 1){
    _w = 1;
  push();
  translate(-10,0,0);
  rotateY(-PI/2);//-PI/2
  swplace();
  pop();
  
  push();
  rotateY(PI/2);//-PI/2
  mywindow();
  wallnote();
  pop();
     }
  pop();
}

function generatePic(value){
  if(fxrand()>=0.7){
    gpic = true;
    return "You have a cute picture.";
  }
  else { gpic = false;return "You have a space.";}
  
}

function generateCarpet(value){
  if(fxrand()>=0.5){
    gcarpet = true;
    return "You have a small carpet.";
  }
  else { gcarpet = false;return "You have a space.";}
}

function generateNote(value){
  if(fxrand()>=0.3){
    gnote = true;
    return "You have my notes.";
  }
  else{ gnote = false;return "You have a space.";}
}

window.$fxhashFeatures = {
  "Carpet" : generateCarpet(fxrand()),
  "Note" : generateNote(fxrand()),
  "Picture" : generatePic(fxrand()),
}

function swplace(){
  if(sum % 6 ==0){
    v1=0;
    v2=0;
    v3=0;
  }
  if(sum % 6 ==1){
    v1=0;
    v2=-70;
    v3=60;
  }
  if(sum % 6 ==2){
    v1=-70;
    v2=-70;
    v3=120;
  }
  if(sum % 6 ==3){
    v1=-130;
    v2=-10;
    v3=120;
  }
  if(sum % 6 ==4){
    v1=-60;
    v2=60;
    v3=0;
  }
  if(sum % 6 ==5){
    v1=-130;
    v2=60;
    v3=60;
  }
  push();
  translate(0,0,v1);
  mybed();
  pop();
  
  push();
  translate(0,0,v2);
  mytable();
  pop();
  
  push();
  translate(0,0,v3);
  mycloset();
  pop();
  
}

function colorswitch(){
     colorMode(HSB, 360,50,50);//360,50,50
     c=100;
     color1 = map(fxrand(),0,1,0,360);
     color2 = (color1+180)%360;
     color3 = (color2,100,100);
     noFill();
     stroke(color2,100,100);
}

function wallnote(){
  if(gnote == true){
  push();//pic1
  translate((wdW/2+25)*_w,0,90);
  fill(color2,100,100);
  rect(0,0,picW,picH);
  pop();
  
  push();//pic2
  translate((wdW/2+15)*_w,20,90);
  fill(color2,100,100);
  rect(0,0,picH,picW);
  pop();
  
  push();//pic3
  translate((wdW/2+30)*_w,30,90);
  fill(color2,100,100);
  rect(0,0,picH*0.6,picH*0.6);
  pop();
     }
} //

function mycloset(){
  if(gcarpet ==true){
   push();//floor
   translate(-40,100,-65);
   rotateX(PI/2);
   fill(color2,100,100);
   ellipse(0,0,car);
   pop(); 
  }
  
  push();//plane
  translate(70,45,-65);
  rotateX(PI/2);
  box(40,70,110);
  pop();
  
  push();//plane1
  translate(70,90,-65);
  rotateX(PI/2);
  box(40,70,20);
  pop();
  
  push();//plane2
  translate(70,70,-65);
  rotateX(PI/2);
  box(40,70,20);
  pop();
  
  push();//plane3
  translate(70,25,-47.5);
  rotateX(PI/2);
  box(40,35,70);
  pop();
  
  push();//circle1
  translate(50,30,-50);
  rotateY(PI/2);
  ellipse(0,0,5);
  pop();
  
  push();//circle2
  translate(50,30,-80);
  rotateY(PI/2);
  ellipse(0,0,5);
  pop();
  
}//

function mytable(){
  push();//window
  rotateY(PI/2);
  translate(-20,0,90);
  for(var a = 0;a<=40;a+=5){
    for(var b = 0;b<=40;b+=5){
        rect(0,0,a,b);
    }
  }
  pop();
  
  push();//plane
  translate(70,60);
  rotateX(PI/2);
  box(40,60,10);
  pop();
  
  push();//left
  translate(70,82.5,-25);
  rotateX(PI/2);
  box(40,10,35);
  pop();
  
  push();//left
  translate(70,82.5,25);
  rotateX(PI/2);
  box(40,10,35);
  pop();
  
  //chair
  push();//plane
  translate(30,90);
  rotateX(PI/2);
  box(20,30,25);
  pop();
  
}

function mybed(){
  if(gpic == true){
  push();//paint
  rotateY(PI/2);
  rotateX(PI);
  fill(color2,100,100);
  translate(-80,-20,-90);
  rect(0,0,40,50);
  fill(color1,100,100);
  noStroke();
  translate(-10,1,0.1);
  ellipse(paint+10,paint*1.5-1,10);
  for(let i = 0;i<=prand;i+=0.5){
  translate(10,0,0.1);
  triangle(0, 0, 10, 5+paint*0.5, 20, 0);
  }
  pop();
     
     }
  
  push();//broad
  translate(85,70,60);//z
  rotateY(PI/2);
  box(60,60,10);//x
  pop();
  
  push();//bed
  translate(40,85,60);//z
  rotateX(PI/2);
  box(100,60,30);//y
  pop();
  
  push();//pillow
  translate(70,65,60);
  rotateX(PI/2);
  box(20,40,10);
  pop();
  
}//

function mywindow(){
  push();//window
  translate(0,-30,95);
  box(wdW,wdH,10);
  box(10,wdH,10);
  box(wdW,10,10);
  pop();
  
}

function mywall(){
  push();//floor
  translate(0,105);
  rotateX(PI/2);
  box(200,200,10);
  pop();
  
  push();//right
  translate(0,0,95);
  box(200,200,10);
  pop();
  
  push();//left
  translate(95,0,0);
  rotateY(PI/2);
  box(200,200,10);
  pop();
}