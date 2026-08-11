// paste to your sketch.js
let originalWidth = 600;
let originalHeight = 800;
let densityRatio = 1.0;

function setupDensity () {
  let originalRatio = originalWidth / originalHeight;
  let windowRatio = windowWidth / windowHeight;

  if (windowRatio > originalRatio) {
    densityRatio = windowHeight / originalHeight;
  } else {
    densityRatio = windowWidth / originalWidth;
  }

  densityRatio = max(1.0, densityRatio);
  console.log("densityRatio: " + densityRatio);
}

function keyPressed (e) {
  if(e.key == 's' || e.key == 'S')
  {
    let fileName = 'CubicleRipples-' + $fx.hash + '.png';
    save(fileName);
  }
}
// paste to your sketch.js
let angleX = 0;
let angleY = 0;
let sideLength = 100;

let rotationSpeedX;
let rotationSpeedY;

let circles = [];


async function setup() {
  console.log($fx.hash);
  randomSeed($fx.rand() *10000000);
  noiseSeed($fx.rand() *10000000);

  originalWidth = 800;
  originalHeight = 1000;
  setupDensity();
  createCanvas(originalWidth, originalHeight, WEBGL);
  pixelDensity(densityRatio);

  flex();

  fill(0, 0, 0, 6);
  rect(-0.5 * width, -0.5 * height, width, height);

  
  initializeRotationSpeed();

  // 初始化圓環軌跡
  for (let i = 1; i <= 4; i++) {
    let color = getRandomColor(); // 取得隨機顏色
    circles.push(new Circle(i * 45, color));
  }
}


function draw() {
  //background(0, 0, 0, 255);
  fill(0, 0, 0, 6);
  rect(-0.5 * width, -0.5 * height, width, height);

  // 旋转立方体
  angleX += rotationSpeedX;
  angleY += rotationSpeedY;

  // 设置相机
  camera();
  rotateX(angleX);
  rotateY(angleY);

  // 绘制空心立方体
  drawHollowCube();

  // 绘制圓環軌跡
  for (let circle of circles) {
    circle.display();
  }
}

function drawHollowCube() {
  noFill();
  stroke(255);
  scale(3);
  box(sideLength);
}

function initializeRotationSpeed() {
  // 設置初始的 rotationSpeed 值為隨機數值
  rotationSpeedX = random(-0.08, 0.08);
  rotationSpeedY = random(-0.08, 0.08);
}

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.angle = 0;
    this.color = color;
  }

  display() {
    push();
    stroke(this.color);
    noFill();
    rotateX(this.angle);
    rotateY(this.angle);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    this.angle += 0.02;
    pop();
  }
}

// 取得隨機顏色
function getRandomColor() {
  return color(random(255), random(255), random(255));
  
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
