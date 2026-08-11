let grid;
let gridFactor;
let palette = [];
let palette2;
const colors = [
  ['#cee5cb', '#f9c61f', '#b9111e', '#015f9f', '#08070f'],
  ['#fef7ee', '#fef000', '#fb0002', '#1c82eb', '#190c28'],
  ['#ffda32', '#ea2768', '#4174b3', '#5a4d88', '#534856'],
  ['#114b5f', '#028090', '#e4fde1', '#456990', '#f45b69'],
  ['#663f8c', '#038c4c', '#f29727', '#f25f29', '#bf2626'],
  ['#8a00d4', '#d527b7', '#f782c2', '#f9c46b', '#e3e3e3'],
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  ['#64379f', '#9854cb', '#ddacf5', '#75e8e7', '#27104e'],
  ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8", "#023e8a"]
];
const pics = [
  "./pic/pic1.png",
  "./pic/pic2.png",
  "./pic/pic3.png",
  "./pic/pic4.png",
  "./pic/pic5.png",
  "./pic/pic6.png",
  "./pic/pic7.png",
  "./pic/pic8.png",
  "./pic/pic9.png"
];
let img;
let chars = [
  ["#", "%", "=", "@", "◎", "❄", "☠"],
  ["$", "&", "+", "?", "☺", "❤"],
  ["❤", "♡", "♥", "*", "✵", "☯"],
  ["☞", "☜", "☣", "☘"],
  ["∞", "♡", "☆"],
  ["♡", "☺", "♥"],
  ["⚛", "⚘", "⚙"]
];
let chars2 = [
  ["W", "A", "G", "M", "I"],
  ["w", "a", "g", "m", "i"],
  ["F", "X", "(", "H", "A", "S", "H", ")"],
  ["f", "x", "(", "h", "a", "s", "h", ")"],
  ["l", "0", "0", "k", "s", "r", "a", "r", "e"],
  ["L", "0", "V", "E", "A", "R", "T"]
];
let paused = true;
let bg;

function preload() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
  img = random(pics);
  img = loadImage(img);
  myFont = loadFont('./font/DejaVuSansMono.ttf');
}

function setup() {
  if (random() > 0.9) select('canvas').addClass('dark');
  palette2 = random(colors);
  palette2 = shuffle(palette2);
  chars = random(chars);
  chars = shuffle(chars);
  chars2 = random(chars2);
  gridFactor = floor(random(45, 65));
  const shortSide = min(windowHeight, windowWidth);
  grid = floor((shortSide * 0.9) / gridFactor);
  createCanvas(grid * gridFactor, grid * gridFactor);
  img.resize(width / grid, height / grid);
  img.loadPixels();
  for (i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    let a = img.pixels[i + 3];
    let c = color(r, g, b);
    let hueC = hue(c);
    if (hueC < 5) {
      palette.push(color(palette2[0]));
    } else if (hueC > 10 && hueC < 100) {
      palette.push(color(palette2[1]));
    } else if (hueC > 100 && hueC < 240) {
      palette.push(color(palette2[2]));
    } else {
      palette.push(color(palette2[3]));
    }
  }
  frameRate(6);
  noStroke();
  textFont(myFont);
  textSize(grid);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  bg = color(palette2[4]);
  bg.setAlpha(random(0, 20));
  noLoop();
}

function draw() {
  blendMode(BLEND);
  background(0);
  background(bg);
  blendMode(SCREEN);
  let num = 0;
  let num2 = floor(random(0, 10));
  for (let y = 0; y < width; y += grid) {
    for (let x = 0; x < width; x += grid) {
      push();
      translate(x + grid / 2, y + grid / 2);
      let c = palette[num];
      if (c) fill(c);
      if (random() > 0.8) {
        text(random(chars), 0, 0);
      } else {
        text(chars2[(num2) % chars2.length], 0, 0);
      }
      pop();
      num++;
      num2++;
    }
  }
}

function keyPressed() {
  if (key === " ") {
    if (paused) {
      loop();
      paused = false;
    } else {
      noLoop();
      paused = true;
    }
  }
}
function mousePressed() {
  if (paused) {
    loop();
    paused = false;
  } else {
    noLoop();
    paused = true;
  }
}

