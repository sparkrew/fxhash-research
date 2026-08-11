/**************************
 * fxhash-Works
 * NAILS
 * by E.C.H (Eiichi Ishii)
 **************************/

let w, g;
let fxSeed;

function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w, WEBGL);
  fxSeed=int(fxrand() * 100000000); 
  randomSeed(fxSeed);
  angleMode(DEGREES);
  noLoop();
  g = w / 8;
}

function draw() {
  background(0);
  push();
  translate(0, 0, -w / 4);

  ambientLight(30);
  const v = createVector(1, 1, -1);
  directionalLight(255, 255, 255, v);
  ambientMaterial(255, 255, 255);
  specularMaterial(255);
  rotateX(60);
  rotateZ(45);

  for (let x = -w * 2; x <= w * 2; x += g) {
    for (let y = -w * 2; y <= w * 2; y += g) {
      push();
      let long = random(w / 8, w / 3);
      translate(x + random(-g / 4, g / 4), y + random(-g / 4, g / 4));
      rotateX(random(-5, 5));
      rotateY(random(-5, 5));

      rotateX(90);
      push();
      translate(0, long / 2);
      fill(255);
      noStroke();
      cylinder(g / 20, long);

      let bt = g / 20;
      translate(0, long / 2 + bt / 2);
      cylinder(g / 8, g / 20);
      pop();

      pop();
    }
  }
  pop();
}

function windowResized() {
    w = min(windowWidth, windowHeight);
    resizeCanvas(w, w);
}
