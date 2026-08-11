
let num = 300;

var actRandomSeed = fxrand() * 3713;
let cp = ["#292328", "#333A40", "#937A27", "#66B312", "#C2DB7B"];
let w, pg;

function setup() {
  randomSeed(actRandomSeed);
  w = min(windowWidth, windowHeight);
 	  createCanvas(700, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  randomSeed(actRandomSeed);
  background(0);
  translate(206, 60);
  blendMode(HARD_LIGHT);

  for (let i = 0; i < num; i++) {
    push();
    let mr = random(w);
    let angle = random(360);
    translate(w / 2 + (mr / 2) * cos(angle), w / 2 + (mr / 2) * sin(angle));

    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = random(10, 100);
    drawingContext.shadowColor = random([color(0), color(255), random(cp)]);
    rotate(random(360));
    scale(random([-1, 1]), 1);

    let r = random(w / 20, w / 8);
    let ran = random(360);
    let ada1 = random(-180, 180);
    let ada2 = random(-180, 180);

    stroke(random(cp));
    strokeWeight(random(1, r / 30));
    noFill();
    bezier(
      0,
      0,
      r * 2 * cos(ran + ada1),
      r * 2 * sin(ran + ada1),
      r * 5 * cos(ran + ada2),
      r * 5 * sin(ran + ada2),
      r * 8 * cos(ran),
      r * 8 * sin(ran)
    );
    fill(random(cp));
    noStroke();

    beginShape();
    vertex(-r / 2, 0);
    vertex(-r / 2, r / 2);
    vertex(0, r / 2);
    vertex(r / 4, 0);
    vertex(r / 2, 0);
    vertex(r / 2, -r / 2);
    vertex(0, -r / 2);
    vertex(-r / 4, 0);
    endShape(CLOSE);

    fill(random(cp));

    beginShape();
    vertex(-r / 2, -r / 2);
    vertex(-r / 2, -r / 6);
    vertex(-r / 6, -r / 2);
    endShape(CLOSE);

    beginShape();
    vertex(r / 2, r / 2);
    vertex(r / 6, r / 2);
    vertex(r / 2, r / 6);
    endShape(CLOSE);

    pop();
  }

  pg = createGraphics(w, w);

  for (let j = 0; j < num * 4; j++) {
    let pc = color(random(cp));
    pc.setAlpha(100);
    if (int(random(2)) == 0) {
      pg.stroke(pc);
    } else {
      pg.stroke(255, 100);
    }
    pg.strokeWeight(random(1, w / 50));
    pg.point(random(w), random(w));
  }

  pg.filter(BLUR, 4);

  blendMode(ADD);
  image(pg, 0, 0, w, w);
	
	blendMode(BLEND);
	
	let rw = w/10;
	//rakkan(rw/2.5, w-rw/1.25, rw);
}

function rakkan(posx, posy, r) {
  push();
  translate(posx, posy);
  let nr = r / 2.5;
  let lr = r / 20;

  fill("#e2041b");
  noStroke();
	rectMode(CENTER);
  rect(0, 0, r / 1.4, r * 1.5, r / 5);

  stroke(255);
  strokeWeight(lr / 1.5);
  noFill();

  push();
  translate(0, -nr);
  beginShape();
  vertex(nr / 2, -nr / 2);
  vertex(0, -nr / 2);
  vertex(-nr / 2, 0);
  vertex(0, nr / 2);
  vertex(nr / 2, nr / 2);
  endShape();

  line(-nr / 2, 0, nr / 2, 0);
  pop();

  push();
  translate(0, 0);
  beginShape();
  vertex(nr / 2, -nr / 2);
  vertex(0, -nr / 2);
  vertex(-nr / 2, 0);
  vertex(0, nr / 2);
  vertex(nr / 2, nr / 2);
  endShape();

  strokeWeight(lr / 3);
  line(nr / 2, -nr / 2, -nr / 2, nr / 2);
  pop();

  push();
  translate(0, nr);
  line(-nr / 2, -nr / 2, -nr / 2, nr / 2);
  line(nr / 2, -nr / 2, nr / 2, nr / 2);
  line(-nr / 2, 0, nr / 2, 0);

  strokeWeight(lr / 3);
  line(nr / 2, -nr / 2, -nr / 2, nr / 2);
  pop();
  pop();
}

function keyPressed() {
  blendMode(BLEND);
  redraw();
}
