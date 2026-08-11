let seed = 0; //seed Hash
function setup() {
  createCanvas(1080, 1080);
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  rectMode(CENTER);
   noLoop();
}
function draw() {
  background(0);
  for(let i=100; i < width-99; i+=110){
    for(let j=100; j < height-99; j+=110)
    {
      fill(0);
      noStroke();
      strokeWeight(2);
      shapes(i, j);
    }
  }
}
function shapes(a, b){
  let x = a; 
  let y = b;
  let y1 = y-50;
  let x1 = x-50;
  while(y1 < (y+50)){
  let r = random(0,255);
  let g = random(0,255);
  let b = random(0,255);
  stroke(r, g, b);
  let n = random(1, 50);
  line(x-n, y1, x+n, y1);
  line(x1, y-n, x1, y+n);
  ellipse(x-n, y1, 5, 5);
  ellipse(x+n, y1, 5, 5);
  ellipse(x1, y-n, 5, 5);
  ellipse(x1, y+n, 5, 5);
  y1+=7;
  x1+=7;
  }
}


