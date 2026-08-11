let angle = fxrandRange(0.01, 0.1, 0.001);
let size = fxrandRange(4, 15, 1);
let numberT = fxrandRange(70, 100, 1);
let backColor = generateRandomColor(); //"#F10531"
let rD = fxrandRange(20, 200, 10);
let gD = fxrandRange(20, 200, 10);
let bD = fxrandRange(20, 200, 10);
let zoom = 2200;
let scaler = +0.0001;

//let dLightColor = (rD, gD, bD);
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // let x = map(mouseX, 0, windowWidth, -200, 0);
  // camera(x, 0, windowHeight / 2, tan(PI / 6), camX, 0, 0, 1, 0);
  // let dx = mouseX - windowWidth / 2;
  // let dy = mouseX - windowHeight / 2;
  // let v = createVector(dx, dy, 0);
  // v.normalize();
  //perspective(0, 0, 1, 100);
  camera(0, 0, zoom + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  rectMode(CENTER);
  background(20);
  // noStroke();
  directionalLight(rD, gD, bD, windowWidth / 2, windowHeight / 2, 0);
  // noStroke();
  // translate(mouseX - width / 2, mouseY - width / 2);
  //translate(0, 0, mouseX);
  // fill(29, 100, 100);
  //normalMaterial();
  //ambientLight(50, 50, 50);
  //ambientLight(255, 255, 255);
  pointLight(100, 0, 0, 0, 0, 0);
  // pointLight(10, 100, 0, 0, 110, 110);
  // pointLight(100, 50, 25, 0, 220, 0);
  pointLight(25, 25, 25, mouseX - 200, mouseY - 200, 0);
  //ambientMaterial(255);
  ambientMaterial(255);
  // noStroke();
  //rect(0, 0, 150, 150);
  // box();
  var numberCircle = numberT;
  var lengthT = map(numberT, 70, 100, 8, 3);
  for (i = 0; i < numberCircle; i++) {
    torus((i * numberCircle) / lengthT, size, 72, 72);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
  }
  //torus(30, 10);
  push();
  ambientMaterial(255, 0, 0, 100);
  //noFill();

  noStroke();
  specularMaterial(255);
  sphere(numberT, 72, 72);
  pop();
  angle = angle + scaler;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function fxrandRange(min, max, step) {
  value = Math.round((fxrand() * (max - min)) / step);
  return value * step + min;
}
function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function keyPressed() {
//   if (keyCode === "a") {
//     zoom = zoom + 100;
//     if (zoom > 4200) {
//       zoom = 4200;
//     }
//   } else if (keyCode === "w") {
//     zoom = zoom - 100;
//     if (zoom < 400) {
//       zoom = 400;
//     }
//   } else if (keyCode === "s") {
//     noLoop();
//   }
// }
