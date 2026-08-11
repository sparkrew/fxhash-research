let grid;
let resolution;
let num = [50,100,40,70,90];

function setup() {
  createCanvas(1000, 1000);
    let seed = fxrand() * 999999;
  randomSeed(seed);
  noiseSeed(seed);
  fxpreview();
    resolution = floor(random(num));

  grid = make2DArray(floor(width / resolution), floor(height / resolution));
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  noLoop();
  blendMode(DIFFERENCE);
    colorMode(HSB);
}

function draw() {
  background(random(255),random(255),random(255));
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid[i].length - 1; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let a = createVector(x + resolution * 0.5, y);
      let b = createVector(x + resolution, y + resolution * 0.5);
      let c = createVector(x + resolution * 0.5, y + resolution);
      let d = createVector(x, y + resolution * 0.5);
      let state = getState(grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]);
      drawLine(a, b, c, d, state);
    }
    
  }
    
  loadPixels();
for (let i = 0; i < pixels.length; i+=20) {
  pixels[i] -= random(120);
  pixels[i+1] -= random(80);
  pixels[i+2] -= random(120);
  pixels[i+3] -= random(0, 60);
}
updatePixels();
}
function drawLine(a, b, c, d, state) {
  strokeWeight(random(5, 40));
  colorMode(HSB); // Set color mode to HSB
  stroke(random(360), 100, 100); // Generate random hue, set saturation and brightness to maximum

  switch (state) {
    case 1:
      line(c.x, c.y, d.x, d.y);
      break;
    case 2:
      line(b.x, b.y, c.x, c.y);
      break;
    case 3:
      line(b.x, b.y, d.x, d.y);
      break;
    case 4:
      line(a.x, a.y, b.x, b.y);
      break;
    case 5:
      line(a.x, a.y, d.x, d.y);
      line(b.x, b.y, c.x, c.y);
      break;
    case 6:
      line(a.x, a.y, c.x, c.y);
      break;
    case 7:
      line(a.x, a.y, d.x, d.y);
      break;
    case 8:
      line(a.x, a.y, d.x, d.y);
      break;
    case 9:
      line(a.x, a.y, c.x, c.y);
      break;
    case 10:
      line(a.x, a.y, b.x, b.y);
      line(c.x, c.y, d.x, d.y);
      break;
    case 11:
      line(a.x, a.y, b.x, b.y);
      break;
    case 12:
      line(b.x, b.y, d.x, d.y);
      break;
    case 13:
      line(b.x, b.y, c.x, c.y);
      break;
    case 14:
      line(c.x, c.y, d.x, d.y);
      break;
  }
  
  colorMode(RGB); 
}


function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d;
  
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

