let angle = 360;
let num = 500;
let a = fxrand() * 5;
let b = fxrand() * 10;
let c = fxrand() * 15;
let d = fxrand() * 20;
let e = fxrand() * 25;
let f = fxrand() * 30;
let g = fxrand() * 50;
let h = fxrand() * 75;

let j = fxrand() * 125;
let k = fxrand() * 150;
let l = fxrand() * 175;
let m = fxrand() * 200;
let n = fxrand() * 2.5;

let o = fxrand() * (150, 255);
let p = fxrand() * (150, 255);
let q = fxrand() * (150, 255);

let r = fxrand() * (150, 255);
let s = fxrand() * (150, 255);
let t = fxrand() * (150, 255);

let u = fxrand() * (150, 255);
let v = fxrand() * (150, 255);
let x = fxrand() * (150, 255);

let z = fxrand() * (150, 255);
let w = fxrand() * (150, 255);
let y = fxrand() * (150, 255);

function setup() {
  //createCanvas(800, 1080);
  createCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
}

function draw() {
  clear();
  background(0);
  translate(width / 2, height / 2);
  colorMode(RGB, 255);
  blendMode(SCREEN);
  {
    for (var i = 1; i < num; i++) {
      scale(0.98);

      push();

      {
        rotate(radians(i) * angle);

        {
          fill(255, 255, 255, random(200));

          rect(200, 50, 2.5, 2.5);
          rect(200, 100, 2.5, 2.5);
          rect(200, 125, 5, 5);
          rect(200, 175, 5, 5);
          rect(200, 200, 2.5, 2.5);
          rect(200, 250, 2.5, 2.5);
          rect(200 - a / 2, 275, a, 5);
          rect(200 - g / 2, 325, g, 2.5);
          rect(200, 350, 5, 5);
          rect(200 - a / 2, 400, a, a);

          fill(150, 150, 150, random(200));
          rect(-2.5 / 2, 200, n, n);
          rect(50 - 2.5 / 2, 250, n, n);
          rect(100 - 2.5 / 2, 300, n, n);
          rect(150 - 2.5 / 2, 350, n, n);
          rect(200 - 2.5 / 2, 400, n, n);
          rect(250 - 2.5 / 2, 450, n, n);

          fill(t, w, o, random(255));
          rect(200, 375, 2.5, f);

          fill(s, x, q, random(255));
          rect(200 - f / 2, 425, f, 5);

          fill(o, p, q, random(255));
          rect(200 - b / 2, 75, b, e);

          fill(r, s, t, random(255));
          rect(200 - 10 / 2, 225, 10, c);

          fill(u, v, x, random(255));
          rect(200 - j / 2, 300, j, a);

          fill(z, w, y, random(255));
          ellipse(200, 2, 150, a, g);
        }
      }
      pop();
    }
  }
  angle += 0.175;
}
function windowResized() {
  resizeCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
}
