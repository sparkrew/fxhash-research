//// Version 1.0 - fxhash-compliant
//// February 2022

//// Press DOWN to save any frame
//// as an image file.

palettes = [
  ["#8a00d4", "#d527b7", "#f782c2", "#f9c46b", "#e3e3e3"],
  ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"],
  ["#454d66", "#309975", "#58b368", "#dad873", "#efeeb4"],
  ["#272643", "#ffffff", "#e3f6f5", "#bae8e8", "#2c698d"],
  ["#361d32", "#543c52", "#f55951", "#edd2cb", "#f1e8e6"],
  ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"],
  ["#12492f", "#0a2f35", "#f56038", "#f7a325", "#ffca7a"],
  ["#122c91", "#2a6fdb", "#48d6d2", "#81e9e6", "#fefcbf"],
  ["#27104e", "#64379f", "#9854cb", "#ddacf5", "#75e8e7"],
  ["#f7a400", "#3a9efd", "#3e4491", "#292a73", "#1a1b4b"],
  ["#343090", "#5f59f7", "#6592fd", "#44c2fd", "#8c61ff"],
  ["#1f306e", "#553772", "#8f3b76", "#c7417b", "#f5487f"],
  ["#e0f0ea", "#95adbe", "#574f7d", "#503a65", "#3c2a4d"],
  ["#f9b4ab", "#fdebd3", "#264e70", "#679186", "#bbd4ce"],
  ["#492b7c", "#301551", "#ed8a0a", "#f6d912", "#fff29c"],
  ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6", "#dee0e6"],
];

let img = [];
let mntx = [];
let mnt = [];
let stn = [];
let stnx = [];
let rck = [];
let rckx = [];

let frameGen = 0;
let pg = [];
let pickImg = 0;
let num;
let bg;
let bpick = 0;
let bstyle = 0;
let sig = 0;
let bigfoot = 0;
let viewAsset = 0;
let viewok = 0;

function preload() {
  mnt.push(loadImage("gen00.png"));
  mnt.push(loadImage("gen01.png"));
  mnt.push(loadImage("gen02.png"));
  mnt.push(loadImage("gen03.png"));

  stn.push(loadImage("gen04.png"));
  stn.push(loadImage("gen05.png"));
  stn.push(loadImage("gen06.png"));
  stn.push(loadImage("gen07.png"));
  stn.push(loadImage("gen08.png"));

  rck.push(loadImage("gen09.png"));
  rck.push(loadImage("gen10.png"));
  rck.push(loadImage("gen11.png"));
  rck.push(loadImage("gen12.png"));

  img.push(loadImage("gen13.png"));
  img.push(loadImage("gen14.png"));
  img.push(loadImage("gen15.png"));
  img.push(loadImage("gen16.png"));
  img.push(loadImage("gen17.png"));
  img.push(loadImage("gen18.png"));
  img.push(loadImage("gen19.png"));
  img.push(loadImage("gen20.png"));
  img.push(loadImage("gen21.png"));
  img.push(loadImage("gen22.png"));
  img.push(loadImage("gen23.png"));
}

let tree = [];
let term;

function rnd2(n1, n2) {
  let nhold = n2;
  if (n1 > n2) {
    n2 = n1;
    n1 = nhold;
  }
  return n1 + fxrand() * (n2 - n1);
}
function p5VRandom() {
  return createVector(rnd2(-1, 1), rnd2(-1, 1));
}

function setup() {
  w = min(960, 960);
  wx = w;
  wy = w;
  createCanvas(wx, wy);
  //createCanvas(960, 960);
  bg = createGraphics(width, height);
  //bg.background(0, 100, 100, 255);
  rectMode(CENTER);
  textAlign(LEFT);
  textSize(12);
  noFill();
  frameRate(10);
  for (let i = 0; i < img.length; i++) {
    pg.push(createGraphics(img[i].width, img[i].height));
    tree.push(new generatrix(i, -img[i].width));
  }
  let hashGen = fxrand() * 1000;
  randomSeed(hashGen);
  noiseSeed(hashGen);
  term = floor(rnd2(10, 100));
  colors = random(palettes);

  bkColIndex = floor(fxrand(colors.length));
  bkcol = colors.splice(bkColIndex, 1);

  ///background
  /*
  let y = 0;
  let fpick = fxrand();
  bstyle = 0;
  if (fxrand() < 0.2) {
    bstyle = 1;
  }
  if (fxrand() < 0.3) {
    bstyle = 2;
  }

  for (let n = 0; n < 25; n++) {
    y = rnd2(0, height);
    bg.push();
    bg.noStroke();
    let colr = fxrand() * 255;
    /*
    if (bpick === 0) {
      bg.fill(colr, colr - 75, 0, 255);
    }
    if (bpick === 1) {
      bg.fill(colr, colr - 75, 0, 255);
    }
    if (bpick === 2) {
      bg.fill(colr, colr - 75, 0, 255);
    } 
    if (fpick < 0.1) {
      bg.background(colr, 255);
    }
    if (fpick < 0.2 && fpick > 0.1) {
      bg.background(colr, 255);
    }
    if (fpick < 0.3 && fpick > 0.2) {
      bg.background(colr, 255);
    } 
    if (fpick < 0.4) {
      bg.background(colr, 255);
      background(colr, 255);
      bgstyle = 0;
      sig += 1;
    }
    if (fpick < 0.5) {
      background(255, 255);
      bg.background(255, 255);
      bgstyle = 0;
      sig += 1;
    } 
    bg.translate(0, y);
    bg.rect(0, 0, width, fxrand() * 100);
    bg.pop();
  } 
  image(bg, 0, 0);
  if (bstyle === 2) {
    back1();
  } else {
    if (fxrand() < 0.1) {
      let xw = img[0].width;
      image(img[0], rnd2(-xw / 2, width - xw / 2), 75);
    }
  } */

  mntx.push(rnd2(-width * 1.75, width * 0.2));
  mntx.push(rnd2(-width * 1.75, width * 0.2));
  mntx.push(rnd2(-width * 1.75, width * 0.2));
  mntx.push(rnd2(-width * 1.75, width * 0.2));

  stnx.push(rnd2(-width * 0.25, width * 0.25));
  stnx.push(rnd2(-width * 0.25, width * 0.25));
  stnx.push(rnd2(-width * 0.25, width * 0.25));
  stnx.push(rnd2(-width * 0.25, width * 0.25));
  stnx.push(rnd2(-width * 0.25, width * 0.25));

  rckx.push(rnd2(-width * 1.25, width * 0));
  rckx.push(rnd2(-width * 1.25, width * 0));
  rckx.push(rnd2(-width * 1.25, width * 0));
  rckx.push(rnd2(-width * 1.25, width * 0));
}

function generatrix(i, x) {
  this.x = rnd2(-width * 0.25, 0);
  if (i < 5) {
    this.x = (width / 2.5) * (i * 0.1);
  }
  this.y = 50;
  this.vel = rnd2(1, 2);

  this.update = function (i) {
    this.x += (i + 2) * 0.1;
    let y = 0;
    if (i < 5) {
      y = 5 + i * 2;
    } else {
      this.x += (i + 1) * 0.2;
    }
    if (i === 0) {
      y = 0;
    }
    if (this.x > width + img[i].width) {
      this.x = -img[i].width;
      this.vel = rnd2(1, 2);
    }

    push();
    image(img[i], this.x, y);
    if (i > 0.5 && i < 5) {
      image(stn[0], stnx[1] + this.x * 1.25, height * 0.2);
      image(stn[1], stnx[2] + this.x * 1.25, height * 0.3);
      image(stn[2], stnx[3] + this.x * 1.25, height * 0.4);
      image(stn[3], stnx[4] + this.x * 1.25, height * 0.5);
      image(stn[4], stnx[5] + this.x * 1.25, height * 0.6);

      image(rck[0], rckx[1] + this.x * 1.75, height * 0.6);
      image(rck[1], rckx[2] + this.x * 1.75, height * 0.7);
      image(rck[2], rckx[3] + this.x * 2, height * 0.7);
      image(rck[3], rckx[3] + this.x * 2, height * 0.75);
    }
    pop();
  };
}

let squatch = 0;

function draw() {
  if (frameCount < term) {
    background(bkcol);
    //background(random(colors));
    for (n = 0; n < 300; n++) {
      strokeWeight(random(5));
      stroke(random(colors));
      point(random(wx), random(wy));
    }
    //image(bg, 0, 0);
    push();
    rectMode(CENTER);
    image(mnt[0], (width / mntx[0]) * 2, random(95 * 0.1));
    image(mnt[1], (width / mntx[1]), random(110 * 0.1));
    image(mnt[2], (width / mntx[2]) * 1.5, random(50 * 0.1));
    image(mnt[3], (width / mntx[3]), -5);
    pop();

    for (let i = 0; i < tree.length; i++) {
      tree[i].update(i);
    }
  } else {
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(10);
    stroke(25, 255);
    rect(width / 2, height / 2, width - 10, height - 10);
    pop();
    fxpreview();
    noLoop();
  }
}
/*
function back1() {
  push();
  translate(fxrand() * width, height * 0.4);
  for (let rot = 0; rot < 360; rot++) {
    rotate(rot);
    if (fxrand() < 0.25) {
      stroke(255, 96);
      strokeWeight(5);
      line(0, 0, width, 0);
      stroke(0, 0, 0, 96);
      strokeWeight(2);
      line(0, 0, width, 0);
    }
  }
  noStroke();
  fill(255, 175);
  circle(0, 0, 50);
  pop();
}
*/
function keyPressed() {
  if ((mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height / 2)) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function keyPressed() {
  if (keyCode == "S" || key == "s") {
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(20);
    stroke(25, 255);
    rect(width / 2, height / 2, width - 10, height - 10);
    pop();
    saveCanvas("Vitamin Sea", "png");
  }
}
