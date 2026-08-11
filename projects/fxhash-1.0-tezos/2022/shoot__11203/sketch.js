let size;
let t = 0, x = 0, gridSize = 0;
let b = 0, speed = 0, weight = 0;

function setup() {
  size = min(windowWidth, windowHeight)
  gridSize = size / 10;
  createCanvas(size, size);
  background(0);
}

function draw() {
  filter(ERODE);
  
  b = map(fxhash.charCodeAt(50), 0, 122, 0, 200);
  speed = map(fxhash.charCodeAt(20), 0, 122, 0, 10);
  weight = map(speed, 0, 10, 0, 3);
  
  strokeWeight(weight);
  x += speed;
  
  //print(size, b, speed, weight);
  
  for (let gx = gridSize; gx <= size - gridSize; gx += gridSize) {
    for (let gy = gridSize; gy <= size - gridSize; gy += gridSize) {
      fill(255);
      stroke(0, 0, b, 5);
      line(gx, gy, x, size/2);
    }
  }
  
  for (let gx = gridSize; gx <= size - gridSize; gx += gridSize) {
    for (let gy = gridSize; gy <= size - gridSize; gy += gridSize) {
      fill(255);
      stroke(255, 5);
      line(gx, gy, x, size/2);
    }
  }
  
  if (x > size) {
    x = 0;
  }
  
  if (x > size / 2 && x < size / 1.8) {
    fxpreview();
    print("meet")
  }
}