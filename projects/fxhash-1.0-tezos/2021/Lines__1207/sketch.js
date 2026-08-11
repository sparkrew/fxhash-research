let g;
let cp = ["#5391AE", "#85B464", "#E2D269", "#EA915E", "#BC677B", "#7A4E8A", "#182879", "#3C62A6", "#ECB030", "#D34F3E"];

function setup() {
  createCanvas((w = windowHeight), w);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();

  g = w / 12.5;
}

function draw() {
  background(25);
  translate(w / 2, w / 2);

  rotate(random([0, 90, -90, 180]));
  scale(random([-50, 50]), 1);

  translate(-w / 2, -w / 2);

  for (let x = g / 2; x <= w - g / 2; x += g) {
    for (let y = g / 2; y <= w - g / 2; y += g) {
      push();
      translate(x, y);
      rotate(random([0, 90, -90, 180]));
      scale(random([-50, 50]), 1);

      fill(cp[int(random(cp.length))]);
      noStroke();
      let er = random([g / 2, g]);
      ellipse(g / 4, -g / 4, er, er);

      stroke(1);
      strokeWeight(g / 20);
      noFill();

      beginShape();
      vertex(-g / 2, g / 2);
      vertex(0, 0);
      vertex(g / 2, 0);
      endShape();

      beginShape();
      vertex(1, g / 2);
      vertex(g / 4, g / 4);
      vertex(g / 2, g / 4);
      endShape();

      beginShape();
      vertex(-g / 2, 0);
      vertex(-g / 4, -g / 4);
      vertex(g / 2, -g / 4);
      endShape();

      line(-g / 4, -g / 4, 0, -g / 2);
      line(-g / 2.7, -g / 2, -g / 2.7, -g / 7);
      line(g / 2, g / 3, g / 2, g / 2);

      let lx = random([0, g / 4]);
      line(lx, -g / 4, lx, 0);
      let lx2 = random([g / 4, g / 2.7]);
      line(lx2, g / 4, lx2, 0);

      if (int(random(2)) == 0) {
        line(-g / 4, g / 2, 0, g / 4);
      }
      if (int(random(2)) == 0) {
        line(0, -g / 4, -g / 2, g / 4);
      }
      pop();
    }
  }
}

function keyPressed() {
  redraw();
}
