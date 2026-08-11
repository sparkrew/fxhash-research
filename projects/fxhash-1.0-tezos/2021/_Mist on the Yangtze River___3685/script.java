

// Where is the circle
let x, y;
let c4, c8, c1, c2;
function setup() {
  c1 = color (randomcolornumberr(),randomcolornumberr(),randomcolornumberr())
  c2 = color (randomcolornumberrr(),randomcolornumberrr(),randomcolornumberr())
  c3 = color (randomcolornumber(),randomcolornumber(),randomcolornumberrr())
  c4 = color (randomcolornumberrr(),randomcolornumberrr(),randomcolornumber())
  c5 = color (randomcolornumberr(),randomcolornumber(),randomcolornumberrr())
  c6 = color (randomcolornumberr(),randomcolornumberr(),randomcolornumber())
  
  createCanvas(windowWidth, windowHeight);
  // Starts in the middle
  x = width / 2;
  y = height;
 

  l1 = locate()
  l2 = locate()
  l3 = locate()
  l4 = locate()
  l5 = locate()
  l6 = locate()
l7 = locate2()
 
}
 
 

function draw() {

  stroke(777);
  fill(111);
  strokeWeight(1); 
  triangle(y-1,y+l2,l3+l2,225+x-l1);
  

  stroke(001);
  fill(011);
  strokeWeight(c3); 
  triangle(y-22,y+l3,l1+y,15+y-l4);


stroke(777);
fill(111);
strokeWeight(1); 
triangle(y+l1,y+l2,l4+y+l2,15+x-23);

stroke(003);
fill(011);
strokeWeight(1); 
triangle(x+22,y+l3,l1-x,15+x-l4);

  // Jiggling randomly on the horizontal axis
  x = x + random(1, -2);
  // Moving up at a constant speed
  y = y -5;
  
  // Reset to the bottom
  if (y <-420) {
    y = height;
  }
}

function locate() {return Math.floor(fxrand()*680)}
function randomcolornumber() {return Math.floor(fxrand()*001)}
function randomcolornumberr() {return Math.floor(fxrand()*001)}
function randomcolornumberrr() {return Math.floor(fxrand()*006)}
function locate2() {return Math.floor(fxrand()*25)}

