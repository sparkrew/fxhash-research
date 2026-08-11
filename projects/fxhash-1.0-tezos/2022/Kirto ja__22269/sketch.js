function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw_(x, y, w, h, positions) {

  stroke(100)

  let rotation = 0;
  
  for (let i = 0; i < positions.length; i++) {
    const p = positions[i];
    
    if (rotation == 0) {
      rotation = (random() * PI) / 5;
    }
    
    push();
    translate(x + w / 2, y + h / 2);
    rotate(rotation);
    line(p*w, 0, p*w, h);
    pop();
    
  }
  
}

function draw() {
  background(255);

  strokeWeight(2);
  strokeCap(ROUND);

  const size = 800;
  const step = 20;
  const heightThird = size / 3;

  for (var y = step; y < size - 2*step; y += step) {
    for (var x = step; x < size - 2*step; x += step) {
      if (y < heightThird) {
        draw_(x, y, step, step, [0.5]);
      } else if (y < 2 * heightThird) {
        draw_(x, y, step, step, [0.2, 0.8]);
      } else {
        draw_(x, y, step, step, [0.1, 0.5, 0.9]);
      }
    }
  }
}
