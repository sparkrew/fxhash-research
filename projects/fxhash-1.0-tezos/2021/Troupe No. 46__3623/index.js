/**
 * Author:    Generalissimo
 * Created:   12.13.2021
 * 
 * (c) CC-BY-4.0
 **/

let noOfFrames = 240, z = 0.1, nx = 0, nz = 0;

let granularity = 1200, cols, rows, threshold = 3, flag = 0, clr1, clr2, clrPt, rarity, limit = 2;

let base = ['#0477BF', '#F250B9', '#F2C230', '#F2A81D', '#D94848', '#26B0BF'];
let add = ['#F23005', '#04BF55', '#7C038C', '#22734D', '#4F8C4D', '#F29422'];

let rg, tg;

function easeInQuad(x) {
  return x * x * x * x;
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  rg = createGraphics(innerWidth, innerHeight);
  tg = createGraphics(innerWidth, innerHeight);

  rarity = fxrand();

  threshold = floor(map(fxrand(), 0, 1, 2, 4));

  if(rarity < 0.1)
    limit = 3;

  noiseDetail(8, 0.7);

  clrPt = floor(fxrand() * (base.length));

  clr1 = base[clrPt];
  clr2 = add[clrPt];

  if(width <= height){
    granularity = width * 0.9;
  } else {
    granularity = height * 0.9;
  }

  cols = 1;
  rows = 1;

  angleMode(DEGREES);
  rg.rectMode(CENTER);
  rg.angleMode(DEGREES);
  rg.ellipseMode(CORNER);

  background(255);
}

function draw() {
  let t = ((frameCount - 1) % noOfFrames) / noOfFrames;
  st = sin(easeInQuad(t) * 180);

  if(flag < limit){
    rg.push();
    rg.translate(width/2 - granularity/2, height/2 - granularity/2);
    rg.noStroke();
    chart();
    rg.pop();
    flag++;
  }

  push();
  drawToMainCanvas();
  pop();

  if(flag == limit){
    grainify();
    noLoop();
  }
}

function chart(){
  if(flag == 0)
      if(rarity < 0.1)
        rg.background(6);
      else
        rg.background("#F2E3D5");
  else
    rg.clear();

  if(flag == 0){
      rg.fill(clr1);
      rg.stroke(clr1);
      rg.strokeWeight(floor(map(fxrand(), 0, 1, 2, 4)));
  } else {
      rg.fill(clr2);
      rg.stroke(clr2);
      rg.strokeWeight(floor(map(fxrand(), 0, 1, 2, 4)));
  }

  if(rarity < 0.1){
    let spClrs = ['#3DD954', '#F2055C', 'dodgerblue'];

    rg.fill(spClrs[flag]);
    rg.stroke(spClrs[flag]);
    rg.strokeWeight(floor(map(fxrand(), 0, 1, 2, 4)));
  }

  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      rg.push();
      rg.noFill();
      rg.stroke(255);
      rg.pop();

      drawSomething((i) * granularity, (j) * granularity, 0, granularity);
    }
  }
}

function drawSomething(c, r, level, size) {

  let s = size / 2;
  let l = level + 1;

  if(fxrand() < 0.3 || level >= threshold){
    if(fxrand() < 0.4)
      null;
    else{
      drawShape(c, r, size / 2);
    }
  } else { 
    drawSomething(c, r, l, s);
  }

  if(fxrand() < 0.3 || level >= threshold){
    if(fxrand() < 0.4)
      null;
    else{
      drawShape(c + size / 2, r, size / 2);
    }
  } else { 
    drawSomething(c + size / 2, r, l, s);
  }

  if(fxrand() < 0.3 || level >= threshold){
    if(fxrand() < 0.4)
      null;
    else{
      drawShape(c, r + size / 2, size / 2);
    }
  } else { 
    drawSomething(c, r + size / 2, l, s);
  }

  if(fxrand() < 0.3 || level >= threshold){
    if(fxrand() < 0.4)
      null;
    else{
      drawShape(c + size / 2, r + size / 2, size / 2);
    }
  } else { 
    drawSomething(c + size / 2, r + size / 2, l, s);
  }
  
}

function drawShape(x, y, s){

  let r = fxrand();

  rg.push();

  rg.rectMode(CORNER);
  rg.ellipseMode(CORNER);
  rg.angleMode(DEGREES);

  if(fxrand() < 0.5)
    rg.noStroke();
  else
    rg.noFill();

  if(r < -0.5){
    rg.ellipse(x, y, s);
  } else if (r < -0.5) {
    rg.rect(x, y, s, s);
  } else {
    let temp = 360 / (floor(map(fxrand(), 0, 1, 2, 4)) * 2);

    if(fxrand() < 0.5){
      rg.push();
      rg.translate(x + s/2, y + s/2);
      rg.beginShape();
      if(fxrand() < 0.45)
        for(let h = 0; h <= 360; h += 1){
          rg.vertex(s/2 * sin(h * temp), s/2 * cos(h));
        }
      else
        for(let h = 0; h <= 360; h += 1){
          rg.vertex(s/2 * sin(h), s/2 * cos(h * temp));
        }
      rg.endShape(CLOSE);
      rg.pop();
    } else {
      rg.push();
      rg.translate(x + s/2, y + s/2);
      rg.beginShape();
      for(let h = 0; h <= 360; h += temp){
        rg.vertex(s/2 * sin(h), s/2 * cos(h));
      }
      rg.endShape(CLOSE);
      rg.pop();
    }
  }

  rg.pop();
}

function drawToMainCanvas() {
  if(flag == 1){
    rg.loadPixels();
    loadPixels();

    nx = nz;

    for(let y = 0; y < height; y++){
      let m = floor(map(noise(nx), 0, 1, -0, 0));
      for(let x = 0; x < width; x++){
        let ind = (y * width + x) * 4;
        let dest = (y * width + ((x + m) % width) ) * 4;
        pixels[ind] = rg.pixels[dest];
        pixels[ind + 1] = rg.pixels[dest + 1];
        pixels[ind + 2] = rg.pixels[dest + 2];
        pixels[ind + 3] = rg.pixels[dest + 3];
      }
      nx += 1;
    }

    updatePixels();
  } else {
    push();
    if(rarity < 0.1)
      blendMode(SCREEN);
    else
      blendMode(MULTIPLY);
    image(rg, 0, 0);
    pop();
  }

  nz += 5;
}

function grainify() {
  tg.loadPixels();

  push();
  noiseDetail(5, 0.5);

  let nx = 0;

  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let m;

      if(rarity < 0.1)
        m = map(fxrand(), 0, 1, 0, 40);
      else
        m = map(fxrand(), 0, 1, 120, 200);
      let ind = (y * width + x) * 4;
      tg.pixels[ind] = tg.pixels[ind + 1] = tg.pixels[ind + 2] = m;
      tg.pixels[ind + 3] = 120;
      nx += 0.05;
    }
  }

  tg.updatePixels();

  if(rarity < 0.1)
    blendMode(ADD);
  else
    blendMode(OVERLAY);
  image(tg, 0, 0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}