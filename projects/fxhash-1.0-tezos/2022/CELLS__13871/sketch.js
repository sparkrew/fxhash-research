/**************************
 * fxhash-Works
 * CELLS
 * by E.C.H (Eiichi Ishii)
 **************************/

let w, g;
let fxSeed;

function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  fxSeed = int(fxrand() * 100000000);
  randomSeed(fxSeed);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  g = w / 5;
}

function draw() {
  background(255);

  for (let x = g / 2; x <= w - g / 2; x += g) {
    for (let y = g / 2; y <= w - g / 2; y += g) {
      push();
      translate(x, y);
      rotate(random([0, 90, -90, 180]));
      scale(random([-1, 1]), 1);
      let r = g / 1.2;
      let lr = g / 10;

      stroke(0);
      strokeWeight(lr);

      line(-r / 2 + lr / 2, r / 2 - lr / 2, r / 2 - lr / 2, -r / 2 + lr / 2);
      line(-r / 2 + lr / 2, 0, 0, r / 2 - lr / 2);
      line(-r / 4 + lr / 2, -r / 2 + lr / 2, r / 2 - lr / 2, r / 4 - lr / 2);

      line(lr * 1.5, r / 2, r / 2, r / 2 + random([0, random(-lr * 1.5)]));
      line(-r / 2 + random([0, random(lr * 1.5)]), -r / 2, -r / 2, -lr * 1.5);

      fill(0);
      noStroke();
      let krl = r / 4;
      let krs = r / 6;

      push();
      translate(-r / 5, -r / 8);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krl);
      } else {
        ellipse(0, 0, krl, krl);
      }
      pop();

      push();
      translate(r / 8, r / 5);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krl);
      } else {
        ellipse(0, 0, krl, krl);
      }
      pop();

      push();
      translate(r / 8, -r / 2.5);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krs);
      } else {
        ellipse(0, 0, krs, krs);
      }
      pop();

      push();
      translate(r / 2.5, -r / 8);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krs);
      } else {
        ellipse(0, 0, krs, krs);
      }
      pop();

      push();
      translate(-r / 2, r / 5);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krs);
      } else {
        ellipse(0, 0, krs, krs);
      }
      pop();

      push();
      translate(-r / 5, r / 2);
      if (int(random(2)) == 0) {
        scale(1.3);
        rotate(random(360));
        drawStar(krs);
      } else {
        ellipse(0, 0, krs, krs);
      }
      pop();
      pop();
    }
  }
}

function drawStar(kr) {
  if (int(random(2)) == 0) {
    beginShape();
    vertex(0, -kr / 2);
    bezierVertex(0, -kr / 2, 0, 0, -kr / 2, 0);
    vertex(-kr / 2, 0);
    bezierVertex(-kr / 2, 0, 0, 0, 0, kr / 2);
    vertex(0, kr / 2);
    bezierVertex(0, kr / 2, 0, 0, kr / 2, 0);
    vertex(kr / 2, 0);
    bezierVertex(kr / 2, 0, 0, 0, 0, -kr / 2);
    vertex(0, -kr / 2);
    endShape();
  }
}

function keyPressed() {
    save("export.PNG");
  }