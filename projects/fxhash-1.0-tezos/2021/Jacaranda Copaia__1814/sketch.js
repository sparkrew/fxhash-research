console.log(fxhash);
console.log(fxrand());
 let img;

var v1;
var v2;

 function preload() {
  img = loadImage('marca.png');
 }
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES);
  
  
  
  //function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
//function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
//function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


  
  
 v1 =v1 + 0.00000000000001
  //v1 = v1.toFixed(2)
 // v2 = v2.toFixed(2)
  
 
  
  //v1 = fxrand(0.7, 0.9) 
  //v1 = (1-v1)*
  console.log('v1' ,v1);
  
 // v2 = fxrand() 
 // v2 = (1-v2)
  console.log('v2' ,v2);
  
 // while (v1< 0.7 || v1> 0.9) {
 // v1 = fxrand() 
 // v1 = (1-v1)
 // console.log('v1 while' ,v1);
  
//}

 
  
  
  
  noLoop();
}

function draw() {
  background(242, 245, 254);

  image(img,0, 649, 200, 200);
  translate(width / 2, height / 1);
  
  branch(130);
}
    
function branch(len) {
  push();
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    
    stroke(70, 40, 20);   
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(20);
    
    
    
    
    
    
     function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
    
    
    v2=rnd_btw(0.7, 0.9)
    v1=rnd_btw(0.780, 0.829)
    
    branch(len * v1);
    rotate(-40);
    
    
    branch(len * v2 );
    
  } else {
    var r = 71;
    var g =93;
    var b = 58;
    fill(r, g, b);
    noStroke();

    beginShape();
    for (var i = 45; i < 135; i++) {
      var rad = 16;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }

    endShape(CLOSE);
  }
  pop();
}
