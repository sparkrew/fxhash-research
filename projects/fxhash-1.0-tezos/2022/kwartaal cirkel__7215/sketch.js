let c1 = ["#001E19"];
let c2 = ["#CFC6BA"];

let w;
let h;

function setup() {
  randomSeed(fxrand()*100000)
  createCanvas(900, 450);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  background(20);

  let cols = int(10);
  let cokk = random(c1)
  let rows = cols / 2;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {

      let x = i * cellW;
      let y = j * cellH;
      let rotate_num = int(random(4)) * 360 / 4;

      push();
      translate(x + cellW / 2, y + cellH / 2);
      rotate(rotate_num);

      if (random(100) < 50) {
        noStroke();
        fill(c1);
        rect(-cellW / 2, -cellH / 2, cellW, cellH);
        noStroke();
        fill(c2);
        arc(-cellW / 2, -cellH / 2, cellW * 2, cellW * 2, 0, 45);

        stroke(c2);
        noFill();
        for (let n = 0; n < cellW / 3; n = n + cellW / 20) {
          arc(-cellW / 2, -cellH / 2 - n, cellW * 2 - n, cellW * 2, 45, random(60, 90));
        }
      } else {
        noStroke();
        fill(c2);
        rect(-cellW / 2, -cellH / 2, cellW, cellH);

        for (let n = 0; n < cellW / 3; n = n + cellW / 10) {
          noFill();
          stroke(c1);
          arc(-cellW / 2, -cellH / 2, cellW * 2 - n, cellW * 2 - n, 0, random(45, 80));
        }
      }

      w = cellW;
      h = cellH;

      for (let n = 0; n < 2000; n++) {
        let nx = random(w) + random(w) + random(w);
        let ny = random(h) + random(h) + random(h);

        nx = nx / 2.5;
        ny = ny / 2.5;

        stroke(c1);
        point(nx - cellW, ny - cellH);
      }
      pop();
    }
  }
}