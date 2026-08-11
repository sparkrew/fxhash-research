let rote;
let div = 22;
let angle = 360 / div;
let a=10;
let b=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0,8);
  stroke(255,255,255);
  rote=map(a,0,250,0,90);
  if(b==0){
    if(a<360){
      a++
    }else{
      b=1;
    }
  }else{
    if(a>=10){
      a--;
    }else{
      b=0;
    }
  }

  for(i=0;i<360;i+=angle){
    push();
    translate(width/2,height/2);
    rotate(i);
    branch(60);
    pop();
  }

}

function branch(num){
  
  line(0,0,0,num);
  translate(0,num*2);
  if(num > 24){
    push();
    rotate(a);
    branch(num * 0.6);
    pop();
    
    push();
    rotate(-rote);
    branch(num * 0.7);
    pop();
    
  }
  
}