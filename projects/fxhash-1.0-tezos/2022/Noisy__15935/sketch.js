let t = 0;
let under = 0;
let over = 0;
let numRuns = 10000;

function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(random(255)+80,random(255)+80,random(255)+70);
}

function draw() {
  noiseSeed();
  background(random(255)-120,random(255)-120,random(255)-120);
  
  for (let i = 0; i < numRuns; i++){
    let n = noise(t);
  
    if (n < 0.5) under++;
    else over++;
    
    let y = map(n, 0, 1, 0, height);
    let x = map(i, 0, numRuns, 0, width);
    ellipse(x, y, random(.5,5), random(.5,5));
    
    t+= 0.01;
  }
  
  let result = "under";
  if (over > under) result = "over"
  
  console.log(under, over, result);

  noLoop();
}