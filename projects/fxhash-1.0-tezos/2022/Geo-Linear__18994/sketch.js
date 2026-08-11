/**
 * color pallet
 */
// let pal = ["#555233","#DF921D","#878937","#CFC52A","#DC2A41"];
// let pal = ["#071e22","#1d7874","#679289","#f4c095","#ee2e31"];
// let pal = ["#0e7c7b","#17bebb","#d4f4dd","#d62246","#4b1d3f"];
//let pal = ["#eef4d4","#daefb3","#ea9e8d","#d64550","#1c2826"];
let curl = "https://coolors.co/476a6f-519e8a-7eb09b-c5c9a4-ecbeb4-0fa3b1-d9e5d6-eddea4-f7a072-ff9b42-dd7373-3b3561-ead94c-d1d1d1-51a3a3-1b998b-ed217c-2d3047-fffd82-ff9b71-171219-225560-edf060-f0803c-310d20-d7263d-f46036-2e294e-1b998b-c5d86d-555233-df921d-878937-cfc52A-dc2a4";

let bgColor;
let seed, noiseArg;

function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  // colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  background(255);
  noLoop();
  // frameRate(240);

	pal = createPallete(curl);
  let cid = int(random(pal.length));
  bgColor = pal[cid];
  pal.splice(cid, 1);
  pal = shuffle(pal);

  seed = random(1e+4);
  noiseArg = random(1e+4);

  background(bgColor);
 effect();  // noise effect
}

function draw() {
  randomSeed(seed);
  background(bgColor);
  
  let cid = int(frameCount / 200) % 4;
  let c11 = color(pal[(cid+0)%4]);
  let c12 = color(pal[(cid+1)%4]);
  let c21 = color(pal[(cid+1)%4]);
  let c22 = color(pal[(cid+2)%4]);
  let c1 = lerpColor(c11, c12, map(frameCount % 200, 0, 200-1, 0, 1));
  let c2 = lerpColor(c21, c22, map(frameCount % 200, 0, 200-1, 0, 1));
  drawNoiseField(c1, c2);
  
  // filter(BLUR, 1);
  filter(ERODE);
  //filter(DILATE);
  // filter(POSTERIZE, 4);
  //filter(INVERT);
  
  noiseArg+=4e-3;
  
  effect();
  drawWindow();
}

function drawNoiseField(c1, c2) {
  let bUnder = false;
  let num = random(150,350);
  for (let j = 0; j < num; j++) {
    let c = lerpColor(c1, c2, map(j, 0, num-1, 0, 1));
    let w = map(j, 0, num-1, 1, 3);
    noFill();  strokeWeight(w);  stroke(c);
    beginShape();
    let res = 150;
    for (let i = 0; i < res; i++) {
      let x = map(i, 0, res-1, windowWidth, 0);
      let y = map(j, 0, num-1, windowHeight, 0);
      // let n = map(noise(noiseArg, y*8e-3, x*8e-3), 0, 1, -100, 100);
      // let n = map(noise(y*6e-3 + frameCount*4e-3, x*6e-3), 0, 1, -100, 100);
      let n = map(noise(y*6e-3 + frameCount*4e-3, x*8e-3 + y*8e-3), 0, 1, -150, 150);
      let t = map(i, 0, res-1, -3, 3);
      let a = normDist(t);
      n *= a * 3.5;
      if (y + n <= y) {
        if (bUnder) { beginShape();  bUnder = false; }
        vertex(x, y + n);
      } else {
        if (!bUnder) { endShape();   bUnder = true; }
      }
    }
    endShape();
  }
}

function normDist(x) {
  let mu = 0;
  let sigma = 1;
  return exp(-pow(x - mu, 2) / (2 * pow(sigma, 2))) / (sqrt(2 * PI) * sigma);
}

function easeIn(){}

function keyPressed() {
  if (keyCode == ENTER) { save('WISEMAN.png'); }
}

function effect() {
  strokeWeight(1);
  for (let i = 0; i < width * height * 5 / 100; i++) {
    stroke(0, 0, 0, 10);
    let px = random(width);
    let py = random(height);
    point(px, py);
  }
}

function drawWindow() {
  w = width / 30;
  noStroke();
  fill(255);
  rect(0, 0, width, w);
  rect(0, height - w, width, w);
  rect(0, 0, w, height);
  rect(width - w, 0, w, height);
}

function createPallete(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}