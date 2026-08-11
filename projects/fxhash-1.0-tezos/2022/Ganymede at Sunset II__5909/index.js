/**
 * Author:    Generalissimo
 * Created:   12.19.2021
 * 
 * (c) CC-BY-4.0
 **/

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw() {
    cg.ellipse(this.x, this.y, this.r);
  }
}

let granularity = 1200, cols, rows, threshold = 3, flag = 0, clr1, clr2, clr3, clrPt, clrBg, maxRad, scale, uniSize;

let rarity = 0.5;

let scale2, scale3;

let balls = [];

let tg, cg;

let clrs = [{light: '#F2E205', mid: '#D9601A', dark: '#731459'},
            {light: '#63F25E', mid: '#70BF63', dark: '#F2309B'},
            {light: '#BB9D8B', mid: '#AF5773', dark: '#73293D'},
            {light: '#05F2AF', mid: '#EF4BF2', dark: '#7B3CA6'},
            {light: '#F20C1F', mid: '#F2B705', dark: '#A6037A'},
            {light: '#F2EB85', mid: '#F2A25C', dark: '#F26699'},
            {light: '#9305F2', mid: '#48038C', dark: '#F29F05'},
            {light: '#F22E76', mid: '#59124D', dark: '#05C7F2'},
            {light: '#F2B705', mid: '#F29F05', dark: '#D9309E'},
            {light: '#62BF04', mid: '#274016', dark: '#F2BD1D'},
            {light: '#BF4996', mid: '#3C2140', dark: '#D2D904'},
            {light: '#660B8C', mid: '#F25D07', dark: '#F2CB05'},
            {light: '#0064DC', mid: '#2902B6', dark: '#0BAADB'},];

function easeInQuad(x) {
  return x * x * x * x;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  rarity = fxrand();

  pixelDensity(1);

  if(width <= height){
    uniSize = width;
    maxRad = width * 0.8;
    scale = width / 400000;
  } else {
    uniSize = height;
    maxRad = height * 0.8;
    scale = height / 400000;
  }

  scale2 = constrain(map(uniSize, 200, 800, 0.4, 0.1), 0.1, 0.4);
  scale3 = constrain(map(uniSize, 200, 800, 0.004, 0.001), 0.001, 0.004);

  tg = createGraphics(width, height);
  cg = createGraphics(width, height);

  tg.noiseDetail(4, 0.8);

  noiseSeed(fxrand() * (100000));
  tg.noiseSeed(fxrand() * (100000));

  tg.angleMode(DEGREES);

  tg.background(255);
  cg.background(255);

  clrPt = floor(fxrand() * clrs.length);

  loadBalls();
}

function loadBalls() {
  balls = [];
  cg.background(255);
  cg.push();

  cg.noStroke();
  cg.fill(0);

  let temp = floor(50 - fxrand() * 25);

  let t = new Ball(width/2, height/2, maxRad);
  balls.push(t);

  while(balls.length < temp){
    let b = new Ball(fxrand() * (width), fxrand() * (height), fxrand() * (maxRad));

    let flag = true;

    if(b.x - b.r < 0 || b.x + b.r > width || b.y - b.r < 0 || b.y + b.r > height){
      flag = false;
    }

    balls.forEach(function (ball){
      let d = dist(b.x, b.y, ball.x, ball.y);

      if(d < (b.r + ball.r) / 2){
        flag = false;
      }
    });

    if(flag){
      balls.push(b);
    }
  }

  balls.forEach(function (ball){
    ball.draw();
  });

  cg.pop();
}

function draw() {
  background(2);
  tg.background(2);

  tg.loadPixels();
  cg.loadPixels();

  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let f = dist(x, y, width / 2, height / 2);

      let c = color(2);
      let index = (x + y * width) * 4;

      let m = pow(noise(x * scale, y * scale) , 3) * sin((x + y) * scale2 * noise(x * scale3, y * scale3));

      if(cg.pixels[index] == 0){
        if (m < 0.1){
          c = clrs[clrPt].light;
        } else if (m < 0.3){
          c = clrs[clrPt].mid;
        } else if (m < 0.5){
            c = clrs[clrPt].dark;
          } else {
          c = color(255);
        }
      } else {

        if (m < 0.1){
          c = (rarity > 0.1) ? color(220, 220, 220) : color(20, 20, 20);
        } else if (m < 0.3){
          c = (rarity > 0.1) ? color(160, 160, 160) : color(120, 120, 120);
        } else if (m < 0.5){
            c = clrs[clrPt].dark;
          } else {
          c = (rarity > 0.1) ? color(255) : color(2);
        }
      }

      tg.pixels[index + 0] = red(c);
      tg.pixels[index + 1] = green(c);
      tg.pixels[index + 2] = blue(c);
      tg.pixels[index + 3] = 255;
    }
  }

  tg.updatePixels();

  let rg = createGraphics(width, height);

  rg.image(tg, 0, 0);
  rg.filter(BLUR, 16);

  image(tg, 0, 0);

  push();
  blendMode(OVERLAY);
  image(rg, 0, 0);
  pop();

  grainify();

  noLoop();
}

function mouseClicked() {
  background(255);
  noiseSeed(fxrand() * (100000));
  clrPt = floor(fxrand() * clrs.length);
  draw();
}

function keyPressed() {
  if (keyCode === 83) {
    saveCanvas('Ganymede at Sunset', 'jpg');
  }
}

function grainify() {

  let tg = createGraphics(width, height);

  tg.loadPixels();

  push();
  noiseDetail(5, 0.5);

  let nx = 0;

  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let m;
      m = map(fxrand(), 0, 1, 0, 200);
      let ind = (y * width + x) * 4;
      tg.pixels[ind] = tg.pixels[ind + 1] = tg.pixels[ind + 2] = m;
      tg.pixels[ind + 3] = 80;
      nx += 0.05;
    }
  }

  tg.updatePixels();

  blendMode(OVERLAY);
  image(tg, 0, 0);
  pop();
}

function windowResized() {
  mouseClicked();
}