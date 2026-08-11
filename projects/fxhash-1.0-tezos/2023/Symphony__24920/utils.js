function addT(x, y, w, h) {
  push();
  translate(x, y);
  strokeWeight(1.5);
  let r = 35; // 20 to 40
  let s = h / r;
  let g = 0;
  let sA;
  if (bgBrightness < 40) sA = width * 0.00375;
  else sA = width * 0.005;

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < r; j++) {
      const ny = j * s;

      // for light colors 10/15 stroke opacity
      // for dark colors 4/6 stroke opacity
      stroke(255, random(sA));
      inc = random(-15, 15);
      inc2 = random(-15, 15);
      inc3 = random(-15, 15);
      inc4 = random(-15, 15);
      line(i + inc, ny + inc2, i + inc3, ny + s - g + inc4);
    }
  }
  pop();
}

function paper(in_val) {
  noStroke();
  for (let i = 0; i < width - 1; i += 2) {
    for (let j = 0; j < height - 1; j += 2) {
      fill(random(235 - 40, 235 + 30), in_val);
      rect(i, j, 2, 2);
    }
  }

  for (let i = 0; i < 30; i++) {
    fill(random(60, 170), random(in_val * 2.5, in_val * 3));
    rect(
      random(0, width - 2),
      random(0, height - 2),
      random(1, 3),
      random(1, 3)
    );
  }
}
