/**************************
 * fxhash-Works
 * RIBBON SPHERE
 * by E.C.H (Eiichi Ishii)
 **************************/

let w;
let num = 100;
let cp = ["#C11850", "#D14432", "#D0B049", "#F2DE8F", "#809C79"];
let fxSeed;

function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  fxSeed=int(fxrand() * 100000000); 
  randomSeed(fxSeed);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);

  let yr = w;

  for (let i = 0; i < num; i++) {
    push();
    if (int(random(2)) == 0) {
      translate(
        w / 2 + random(-w / 10, w / 10),
        w / 2 + random(-w / 10, w / 10)
      );
    } else {
      translate(w / 2, w / 2);
    }

    scale(0.9);
    drawingContext.shadowOffsetX = random(-w / 30, w / 30);
    drawingContext.shadowOffsetY = random(-w / 30, w / 30);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = "black";
    rotate(random(360));

    let xr = random(1, w / 10);

    if (int(random(3)) == 0) {
      let zx = random(-w, w);
      let zy = random(-w, w);

      fill(cp[int(random(cp.length))]);
      noStroke();

      beginShape();
      vertex(-xr / 2, -yr / 2);
      bezierVertex(-xr / 2, -yr / 2, zx, zy, -xr / 2, yr / 2);
      vertex(-xr / 2, yr / 2);
      vertex(xr / 2, yr / 2);
      bezierVertex(xr / 2, yr / 2, zx, zy, xr / 2, -yr / 2);
      vertex(xr / 2, -yr / 2);
      endShape();

      if (int(random(2)) == 0) {
        let an1 = random(360);
        let an2 = random(360);
        let an3 = random(360);
        let an4 = random(360);
        stroke(random([255, cp[int(random(cp.length))]]));
        strokeWeight(2);
        noFill();
        bezier(
          (yr / 2) * cos(an1),
          (yr / 2) * sin(an1),
          (yr / 2) * cos(an2),
          (yr / 2) * sin(an2),
          (yr / 2) * cos(an3),
          (yr / 2) * sin(an3),
          (yr / 2) * cos(an4),
          (yr / 2) * sin(an4)
        );
      }
    } else {
      let mr = random(w / 3, w);
      let angle = random(360);
      push();
      translate((mr / 2) * cos(angle), (mr / 2) * sin(angle));
      rotate(random(360));

      scale(1.5);
      if (int(random(2)) == 0) {
        fill(cp[int(random(cp.length))]);
        noStroke();
        beginShape();
        vertex(0, -xr / 2);
        bezierVertex(0, -xr / 2, 0, 0, -xr / 2, 0);
        vertex(-xr / 2, 0);
        bezierVertex(-xr / 2, 0, 0, 0, 0, xr / 2);
        vertex(0, xr / 2);
        bezierVertex(0, xr / 2, 0, 0, xr / 2, 0);
        vertex(xr / 2, 0);
        bezierVertex(xr / 2, 0, 0, 0, 0, -xr / 2);
        endShape(CLOSE);
      } else {
        stroke(cp[int(random(cp.length))]);
        strokeWeight(xr / 30);
        noFill();

        for (let j = 0; j < 30; j++) {
          let nan1 = random(360);
          let nan2 = random(360);
          let nan3 = random(360);
          let nan4 = random(360);
          bezier(
            (xr / 2) * cos(nan1),
            (xr / 2) * sin(nan1),
            (xr / 2) * cos(nan2),
            (xr / 2) * sin(nan2),
            (xr / 2) * cos(nan3),
            (xr / 2) * sin(nan3),
            (xr / 2) * cos(nan4),
            (xr / 2) * sin(nan4)
          );
        }
      }
      pop();
    }
    pop();
  }
}

function windowResized() {
    w = min(windowWidth, windowHeight);
    resizeCanvas(w, w);
}

