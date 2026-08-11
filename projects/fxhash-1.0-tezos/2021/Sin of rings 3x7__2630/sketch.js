

var r;
var g;
var b;

var r1;
var g1;
var b1;

var v1;
var v2;



console.log(fxhash);
console.log(fxrand());

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  
  r = fxrand() 
  r = parseInt((1-r)*255)
  console.log(r);
  
  g = fxrand() 
  g = parseInt((1-g)*255)
  console.log(g);
  
  b = fxrand() 
  b = parseInt((1-b)*255)
  console.log(b);
   
   r1 = fxrand() 
  r1 = parseInt((1-r1)*255)
  console.log(r1);
  
  g1 = fxrand() 
  g1 = parseInt((1-g1)*255)
  console.log(g1);
  
  b1 = fxrand() 
  b1 = parseInt((1-b1)*255)
  console.log(b1);
  
}

function draw() {
  
  rotateY(frameCount * 0.00);
  
   background(r1,g1,b1);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        tan(frameCount * 0.004 + j) * 100,
        tan(frameCount * 0.003 + j) * 100,
        tan(frameCount * 0.005 + j) * 100,
       
        
        i * 0.09
      );
      rotateZ(frameCount * 0.002);
      rotateY(frameCount * 0.002);
      push();
      fill(r,g,b)
    //torus(10, 3,10,10);
      torus(40, 12,10,10);
      
      
      pop();
    }
    pop();
  }
  
  
   for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        tan(frameCount * 0.004 + j) * 100,
        tan(frameCount * 0.005 + j) * 100,
       
        
        i * 0.09
      );
      rotateZ(frameCount * -0.006);
      rotateY(frameCount * -0.002);
      push();
      fill(r,g,b)
   torus(20, 6,10,10);
    
      
      
      pop();
    }
    pop();
  }
  
   for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        cos(frameCount * 0.005 + j) * 100,
        tan(frameCount * 0.005 + j) * 100,
        sin(frameCount * 0.005 + j) * 100,
       
        
        i * 0.09
      );
      rotateZ(frameCount * -0.004);
      rotateY(frameCount * -0.004);
      push();
      fill(r,g,b)
     torus(40, 12,10,10);
      
      
      pop();
    }
    pop();
  }
  
}
