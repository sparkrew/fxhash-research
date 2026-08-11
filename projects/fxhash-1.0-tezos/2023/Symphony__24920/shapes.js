function newRectH(x, y, w, h) {
  push();
  translate(-w / 2, -h / 2);
  rectMode(CORNER);
  let num = int(random(2, 15));
  let s = h / num;
  for (let i = 0; i < num; i++) {
    const nx = s * i;
    let c = random(colors);
    fill(c);
    stroke(c);
    strokeWeight(0.5);
    rect(nx, 0, s, h);
  }
  pop();
}

function newRectV(x, y, w, h) {
  push();
  translate(-w / 2, -h / 2);
  rectMode(CORNER);
  let num = int(random(2, 15));
  let s = h / num;
  for (let i = 0; i < num; i++) {
    const ny = s * i;
    let c = random(colors);
    fill(c);
    stroke(c);
    strokeWeight(0.5);
    rect(0, ny, w, s);
  }
  pop();
}

function addTriangle(x, y, w, h) {
  push();
  let ran = int(random(1, 12));
  translate(x - w / 2, y - h / 2);
  if (ran == 1) triangle(0, 0, w, 0, 0, h);
  else if (ran == 2) triangle(w, 0, w, h, 0, h);
  else if (ran == 3) triangle(0, 0, w, 0, w, h);
  else if (ran == 4) triangle(0, 0, w, h, 0, h);
  else if (ran == 5) triangle(0, 0, w / 2, h / 2, 0, h);
  else if (ran == 6) triangle(w / 2, h / 2, w, 0, w, h);
  else if (ran == 7) triangle(0, 0, w, 0, w / 2, h / 2);
  else if (ran == 8) triangle(0, h, w / 2, h / 2, w, h);
  else if (ran == 9) {
    triangle(0, 0, w / 2, h / 2, 0, h);
    triangle(w / 2, h / 2, w, 0, w, h);
  } else if (ran == 10) {
    triangle(0, 0, w, 0, w / 2, h / 2);
    triangle(0, h, w / 2, h / 2, w, h);
  } else if (ran == 11) quad(w / 2, 0, w, h / 2, w / 2, h, 0, h / 2);

  pop();
}
