/**************************
 * fxhash-Works
 * RELATION
 * by E.C.H (Eiichi Ishii)
 **************************/

let w, g;
let cp = ["#E52576", "#F01D55", "#1D3440", "#19AD8E", "#CAEED1"];
let fxSeed;

function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  fxSeed = int(fxrand() * 100000000);
  randomSeed(fxSeed);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();

  g = w / 8;
}

function draw() {
  background(0);

  for (let x = g / 2; x <= w - g / 2; x += g) {
    for (let y = g / 2; y <= w - g / 2; y += g) {
      push();
      translate(x, y);
      fill(random(cp));
      noStroke();
      if (int(random(2)) == 0) {
        rect(0, 0, g, g);
      } else {
        ellipse(0, 0, g, g);
      }
      rotate(random([0, 90, -90, 180]));
      scale(random([-1, 1]), 1);
      scale(0.88);

      fill(0);
      noStroke();
      arc(-g / 2, -g / 2, g * 2, g, 0, 90);
      arc(g / 2, g / 2, g / 2, g, 180, 270);
      let va = random([1, 1.5]);
      arc(-g / 2, g / 2, g * va, g, 270, 360);

      let ex, ey;

      if (va == 1) {
        arc(g / 8, g / 2, g / 4, g / 2, 180, 360);
        ex = g / 8;
        ey = g / 15;
      } else {
        ex = g / 5;
        ey = g / 20;
      }
      ellipse(ex, ey, g / 5, g / 5);

      arc(g / 2, -g / 6, g / 3.4, g / 3.4, 90, 270);

      fill(random(cp));
      arc(-g / 2, -g / 2, g * random(0.5, 1.8), g, 0, 90);

      stroke(random(cp));
      strokeWeight(g / 60);
      line(-g / 2, g / 2, ex, ey);
      line(g / 2, g / 2, ex, ey);
      line(ex, ey, g / 2, -g / 6);
      strokeWeight(g / 16);
      point(ex, ey);
      strokeWeight(g / 8);
      point(g / 2, -g / 6);
      point(-g / 2, g / 2);
      point(g / 2, g / 2);

      stroke(0);
      point(-g / 2, -g / 2);
      pop();
    }
  }
}

function keyPressed() {
  save("export.PNG");
}

