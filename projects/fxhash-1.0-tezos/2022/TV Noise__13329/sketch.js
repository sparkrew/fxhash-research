
const pallete = ["#29fe16",
  "#000",
  "#eb01ff",
  "#5200fb",
  "#ffff1e",
  "#2ef7f7"
];

function setup() {
    // vars
  randomSeed(fxrand() * 10e12 || 123);
  function rand(max, min = 0) {
    return Math.floor(random(max - min)) + min;
  }
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220);
	let num = 0;
  for (let y = 0; y < height; y += height / 50) {
    let x0 = 0;
    let h = height / 20;
    while (x0 < width) {
      let w0 = random(width / 10, width / 10);
      let n = floor(random(1, 200));
      for (let i = 0; i < n; i++) {
        let x = x0 + w0 / n * i;
        let w = w0 / n;
        let c = num%(pallete.length);
        noStroke();
        fill(pallete[c]);
        rect(x, y, w, h);
        num++;
      }
      x0 += w0;
    }
  }
  noLoop();
}