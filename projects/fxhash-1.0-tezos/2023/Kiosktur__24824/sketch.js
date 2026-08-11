let pal = [
  "#69d2e7",
  "#a7dbd8",
  "#e0e4cc",
  "#f38630",
  "#fa6900",
  "#fe4365",
  "#fc9d9a",
  "#f9cdad",
  "#c8c8a9",
  "#83af9b",
  "#ecd078",
  "#d95b43",
  "#c02942",
  "#542437",
  "#53777a",
  "#556270",
  "#4ecdc4",
  "#c7f464",
  "#ff6b6b",
  "#c44d58",
  "#774f38",
  "#e08e79",
  "#f1d4af",
  "#ece5ce",
  "#c5e0dc",
  "#e8ddcb",
  "#cdb380",
  "#036564",
  "#033649",
  "#031634",
  "#490a3d",
  "#bd1550",
  "#e97f02",
  "#f8ca00",
  "#8a9b0f",
];

function setup() {
  createCanvas(400, 400);
seed = int(fxrand() * 987654321);
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(20);
}

function draw() {
  background(0);

  for (var i = 0; i < 10; i++) {
    x = random(400);
    y = random(400);
    push();
    translate(x, y);
    stroke(rc());
    a = 0;
    for (var j = 0; j < 50; j++) {
      rotate(a);
      a += PI / 25;
      l = 100;

      line(-l, 2 * j, l, 2 * j);
    }
    pop();
  }

  noLoop();
}

function rc() {
  return color(random(pal));
}
