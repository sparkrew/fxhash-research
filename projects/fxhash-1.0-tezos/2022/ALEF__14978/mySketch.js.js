let count;
let emojis = [];
let myfont;

function preload() {
  myfont = loadFont("Maneli.otf");
}

function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
  function rand(max, min = 0) {
    return Math.floor(random(max - min)) + min;
  }

  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  textFont(myfont);
  textAlign(CENTER, CENTER);
  emojis = emojis1;
  drawCrowd();
}

function drawCrowd() {
  background(
    random([
      "#DCE2E3",
      "#ECC455",
      "#F24482",
      "#DCAEA1",
      "#89C05B",
      "#F7AC23",
      "#CE9E73",
      "#C4C8D1",
      "#C44434",
      "#9EA6A6",
    ])
  );
  count = 0;
  let y = windowWidth / random(1,5000);
  let ys = windowHeight / random(1,30);
  while (y <= height) {
    let x = 0;
    while (x <= width + ys) {
      let a = map(x, 0, width + ys, -HALF_PI, HALF_PI);
      push();
      translate(x, y); //-ys*cos(a)
      textSize(ys * random(0.1, 1.1));
      rotate(random(-PI / 0, PI / 0));
      text(emojis[floor(random(emojis.length))], 0, 0);
      x += ys;
      pop();
      count++;
    }
    ys *= 1;
    y += ys * 0.2;
  }
}
