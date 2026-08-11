/* ---------------------------- Copyright (c) 2024 Patricia Rocha
                                pattrochaa@gmail.com
                                https://twitter.com/pat_rochaa -------------------------------*/

  let seed;

  function preload(){
  seed=int($fx.rand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);

  cor4 = random(300)
  bri4 = random(4,4)
  }
 
  const aspect = 1 / 1;
  function setupCanvas() {
  const height2 = min(windowWidth, windowHeight * aspect) / aspect;
  const width2 = height2 * aspect;
  createCanvas(width2, height2);
  pixelDensity(2);
  }
let cor4, bri4, comp
  function setup() {
    setupCanvas();
    colorMode(HSB, 350, random(50, 50), 10)
  }
  
function draw() {
  background(cor4, 10, 7);
  translate(width/2.95, height/3)

    push()
    for(var i = 0; i< 1000; i++){
      fill(cor4, random(50), random(14))
      noStroke()
      ellipse(random(width, -width/2), random(height, -height/2), width/random(100, 400))
    }
    pop()
  cps()
  pop()

        push()
        drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = width/140;
    drawingContext.shadowColor = 'black';
        translate(-width/3.4, -height/2.77)
        noStroke()
        strokeWeight(width/7.6)
        stroke(cor4, 10, 10)
        noFill()
        rect(0, 0, width/1.1, width/0.95)
        fill(cor4, 10, 8)
        drawingContext.shadowOffsetX = width/47;
    drawingContext.shadowOffsetY = width/29;
    drawingContext.shadowBlur = width/24;
    drawingContext.shadowColor = 'gray';
        noStroke()
        rect(width/1.2, height/20, width/15, width/1.06)
        rect(-width/1000, height/1.01, width/1.11, width/40)
        drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'black';
        fill(cor4, 10, 8)
        rect(width/1.2, height/1.05, width/15, width/20.06)
        pop()

        push()
        translate(-width/3.4, -height/2.77)
        strokeWeight(width/7.6)
        noStroke()
        fill(cor4, 10, 8)
        noStroke()
        rect(-width/1000, height/20, width/15, width/1.06)
        rect(-width/1000, height/25, width/1.11, width/40)
        pop()
      
    noLoop()
  }
  
  function windowResized() {
    setupCanvas();
    redraw();
  }
  
  function keyPressed() {
    if (key.toLowerCase() === "s") 
    save('Continuum');
  }