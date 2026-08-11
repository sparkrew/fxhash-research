/**********************************
 * fxhash-Work
 * FACING
 * by E.C.H (Eiichi Ishii)
 **********************************/

let w, g;
let fxSeed;
let cp = ["#464444", "#F7272A", "#EEB246", "#6AC2B0", "#237281"];

function setup() {
	w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  fxSeed = fxrand() * 100000;
  randomSeed(fxSeed);
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeCap(SQUARE);
  noLoop();

  g = w / 8;
}

function draw() {
  background(0);
  push();
  translate(w / 2, w / 2);

  rotate(45);
  translate(-w, -w);

  for (let x = g / 2; x <= w * 2 - g / 2; x += g) {
    for (let y = g / 2; y <= w * 2 - g / 2; y += g) {
      push();
      translate(x, y);
      rotate(random([0, 90, -90, 180]));
      scale(random([-1, 1]), 1);
      let scl = random([0.8, 1]);

      if (scl == 0.8) {
        noFill();

        let rr = g / 1.1;
        if (int(random(2)) == 0) {
          stroke(random(cp));
          strokeWeight(random(1, g / 20));
          beginShape();
          vertex(0, -rr / 2);
          vertex(-rr / 2, -rr / 2);
          vertex(-rr / 2, rr / 2);
          vertex(0, rr / 2);
          endShape();
        }
        if (int(random(2)) == 0) {
          stroke(random(cp));
          strokeWeight(random(1, g / 20));
          beginShape();
          vertex(0, -rr / 2);
          vertex(rr / 2, -rr / 2);
          vertex(rr / 2, rr / 2);
          vertex(0, rr / 2);
          endShape();
        }
      }
      scale(scl);

      noStroke();

      fill(random(cp));
      beginShape();
      vertex(-g / 4, -g / 2);
      vertex(0, g / 2);
      vertex(-g / 2, 0);
      vertex(-g / 2, -g / 4);
      endShape(CLOSE);

      fill(random(cp));
      beginShape();
      vertex(0, -g / 2);
      vertex(g / 2, -g / 4);
      vertex(g / 2, 0);
      vertex(0, 0);
      endShape(CLOSE);

      fill(random(cp));
      arc(-g / 8, -g / 2, g / 4, g / 4, 0, 180);

      fill(random(cp));
      beginShape();
      vertex(0, g / 6);
      vertex(0, g / 2);
      vertex(g / 4, g / 2);
      vertex(g / 4, g / 6);
      endShape(CLOSE);

      arc(g / 8, g / 5.5, g / 4, g / 4, 180, 360);

      fill(random(cp));
      beginShape();
      vertex(-g / 2, g / 4);
      vertex(0, g / 2);
      vertex(-g / 2, g / 2);
      endShape(CLOSE);

      fill(random(cp));
      beginShape();
      vertex(g / 3.5, g / 8);
      vertex(g / 2, 0);
      vertex(g / 2, g / 4);
      endShape();

      strokeWeight(g / 30);
      stroke(random(cp));
      line(-g / 2, g / 8, 0, g / 2);
      stroke(random(cp));
      line(-g / 9, -g / 2.7, 0, g / 2);
      stroke(random(cp));
      line(g / 3.5, g / 8, g / 2, g / 2);

      fill(random([0, 255]));
      noStroke();
      if (int(random(2)) == 0) {
        let er = g / 4;
        ellipse(er / 1.5, -er / 1.5, er, er);
      }
      pop();
    }
  }
  pop();
}

function keyPressed(){
    save("export.PNG");
}