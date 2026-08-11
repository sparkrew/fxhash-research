var x = 0;
var y = 200;

var W = 544;
var B = 168;
var A = 1;
var C = 1;

//±¥ºÍ¶È
var a = Math.ceil(fxrand()*200+50);
var b = Math.ceil(fxrand()*200+50);

//RGB
var d = Math.ceil(fxrand()*200);
var e = Math.ceil(fxrand()*200);
var f = Math.ceil(fxrand()*200);
var g = Math.ceil(fxrand()*200);
var h = Math.ceil(fxrand()*200);
var i = Math.ceil(fxrand()*200);

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if(a<80){
	  a=255;
	  b=255;
	  d=0;
	  e=0;
	  f=0;
	  g=255;
	  h=255;
	  i=255;
  }
  
  x += 1;
  y = y;
  
  B = B+A;
  W = W+C;
  background(200);

  for (let a = 0; a <= 800; a += 1) {
    fill(255);
    stroke(255);
    line(a, 0, a, 800 - a);
  }

  for (let a = 800; a >= 0; a -= 1) {
    fill(0);
    stroke(0);
    line(a, 800, a, 800 - a);
  }
  push();
  noStroke();
  fill(d,e,f,b);
  textSize(460);
  textAlign(CENTER,CENTER);
  text("B", B, 450);
  pop();
  
  push();
  noStroke();
  fill(g,h,i,a);
  textSize(460);
  textAlign(CENTER,CENTER);
  text("W", W, 450);
  pop();
  
  if(B>=168){
     A=-1;
     }else if(B<=0){
              A=1
              }
  if(W>=800){
     C=-1;
     }else if(W<=544){
              C=1;
              }
  
  
}
