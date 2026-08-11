let pd = 1;
let mainCanvas, Seed;
function setup() {
  let Seed = $fx.rand() * 999999;
  randomSeed(Seed);
  
  noiseSeed(Seed);
  maxCanv = max(windowWidth, windowHeight);
  mainCanvas = createCanvas(windowWidth, (windowWidth / 3) * 4); //naming it mainCanvas for the grain shader
  if (height > windowHeight) {
    resizeCanvas((windowHeight / 4) * 3, windowHeight);
  }
  noLoop(); // Prevent draw() from looping
  noFill();
  strokeWeight(2);
}

function draw() {
  background(255);
  let numCircles = 10;
  let minRadius = 25;
  let maxRadius = 125;

  for (let i = 0; i < numCircles; i++) {
    let radius = random(minRadius, maxRadius);
    let x = windowWidth /2.5;
    let y = windowHeight /2.5;
    let r = random(255);
    let g = random(255);
    let b = random(255);
    stroke(r, g, b);
    ellipse(x, y, radius * 2, radius * 2);
  }
}
