/// Ross-style Landscape Generator
/// Version 2 - NFT Version 
////////////////////////////////// fxhash Version
/// Generative Art by Ed Cavett
/// December 2021

//// Day: 75%
//// Sunset: 25%

//// Contains an Authenticator Number, title, and
//// artist/creator signature.

let rareOrient;
let rareLight;
let disp = 0;

///Mountain background
let waver;
let posy;
let ydrag = 0.25;

///Pine Tree foreground
let tree = [];
let dense = 25;
let xloc;
let frameGen = 0;
let idn = 0;

function rnd2(n1,n2){
  return n1+(fxrand() * (n2-n1));
}

function setup() {
  rareOrient = fxrand();
    createCanvas(1280,640);
  let hashGen = fxrand();
  randomSeed(hashGen);
  noiseSeed(hashGen);
  ///Mountain setup
  waver = new waveMaker();
  background(0, 200, 255, 255);
  posy = height * 0.35;
  makeback();

  ///Tree setup
  xloc = width * 0.25;
  for (let i = 0; i < dense; i++) {
    tree.push(new treeMaker());
  }
  generatrix();
}


function generatrix(){
  for (let drawRun = 0;
       drawRun < height*1.21;
       drawRun++) {
    frameGen += 1;
    ydrag += 0.15;
    posy += ydrag;
    if (frameGen% 30 === 0) {
      background(32, 2);
    }
    push();
    translate(width / 2, posy);
    waver.update();
    pop();
  } 
    let hi = -0.1;
    background(64, 4);
    for (let treenum = 0; treenum < 5; treenum++) {
      xloc = rnd2(width * 0.1, width * 0.5);
      hi += 0.15;
      for (let i = 0; i < dense; i++) {
        tree[i].update(hi);
      }
    }
    idn = int(fxrand()*1000000);
    console.log('AN-'+idn+' Ross Generator  by  Ed Cavett');
}

function draw() {
  
}


function makeback() {
  background(0, 255);
  noFill();
  rareLight = fxrand();
  let dimXY = width;
  if (height > width) {
    dimXY = height;
  }
  for (let i = 0; i < dimXY * 1.5; i++) {
    let scol = map(i, 0, dimXY * 1.5, -600, 325);
    strokeWeight(1);
    stroke(0, 200 - scol, 325 - scol, 255);
    if (rareLight < 0.25) {
      stroke(325 - scol, 200 - scol, 25, 255);
    }
    circle(dimXY / 2, dimXY / 2, i);
  }
  for (let p = 0; p < 3; p++) {
    let xoff = fxrand()*1000;

    beginShape();
    vertex(0, dimXY * 0.75);
    let y = 0;
    for (let x = 0; x < dimXY; x += dimXY * 0.02) {
      y = map(
        noise(xoff, frameGen * 0.05),
        0,
        1,
        dimXY * 0.65,
        dimXY * 0.05-(p*0.2)
      );
      vertex(x, y+(p*(dimXY*0.05)));
      xoff += 0.075;
    }
    vertex(dimXY,y);
    vertex(dimXY, dimXY * 0.75);
    noStroke();
    fill(96-(p*25), 255);
    endShape(CLOSE);
  }
}

function waveMaker() {
  this.xoff = 0;
  this.yoff = 0;
  this.yend = 0;
  this.ymod = -height / 4;
  this.dense = width / 2;
  this.px = 0;
  this.py = 0;
  this.size = 0;
  this.shrubs = 1;

  this.update = function () {
    //// First Layer Wave
    push();

    beginShape();
    vertex(
      -width / 2,
      map(noise(0, this.yoff), 0, 1, -height * 0.25, height * 0.25)
    );
    this.xoff = 0;
    this.dense = map(posy, 0, height, 15, 25);

    for (let x = -width / 2; x < width / 2; x += this.dense) {
      let xmod = map(noise(this.yoff, x), 0, 1, -this.dense, this.dense);

      let y = map(noise(this.xoff, this.yoff), 0, 1, 0, height * 0.75);

      let sw = map(noise(this.xoff, this.yoff), 0, 1, 2, 12);
      this.size = map(posy, 0, height, 2, 32);
      vertex(x + xmod, y);
      stroke(0, 128, 0, 128);
      strokeWeight(this.size);
      if (fxrand() < this.shrubs) {
        this.madrone(x + xmod, y);
      }


      let tree = rnd2(this.size * 0.025, this.size * 0.05);
      let rndobj = fxrand();
      if (rndobj < this.shrubs * 0.8) {
        push();
        translate(x + xmod, y);
        rotate(rnd2(-PI * 0.02, PI * 0.02));
        if (fxrand() < 0.5) {
          let qp = HALF_PI;
          if (fxrand() < 0.75) {
            qp = -HALF_PI;
          }
          rotate(qp + rnd2(-PI * 0.02, PI * 0.02));
        }

        stroke(25, rnd2(25, 75), 15, 255);
        strokeWeight(this.size * 0.15);
        line(0, 0, 0, -this.size * 2);
        pop();
      }

      if (rndobj < this.shrubs * 0.6 && fxrand() < 0.3) {
        /// chance of green trees
        push();
        stroke(0, rnd2(50, 125), 25, 255);
        if (fxrand() < 0.25) {
          /// chance of brown trees
          stroke(rnd2(75, 125), 50, 10, 255);
        }
        translate(x + xmod, y - this.size * 0.5);
        triangle(
          0,
          rnd2(-this.size * 0.01, 0) - tree,
          -tree * 0.25,
          tree * 0.25,
          tree * 0.25,
          tree * 0.25
        );
        pop();
      }

      this.xoff += 0.05;
      this.yend = y;
    }

    vertex(width / 2, this.yend);

    for (let x = width / 2; x > -width / 2; x -= this.dense) {
      let rndobj = fxrand();
      let xmod = map(noise(this.yoff, x), 0, 1, -this.dense, this.dense);
      let y = map(noise(this.xoff, this.yoff), 0, 1, 0, height * 0.75);
      let sw = map(noise(this.xoff, this.yoff), 0, 1, 2, 12);
      let shapesize = map(posy, 0, height, 2, 25);
      stroke(0, 255 - fxrand(128), 0, 255);
      strokeWeight(this.size);
      vertex(x + xmod, y);

      if (fxrand() < this.shrubs * 0.5) {
        this.madrone(x + xmod, y);
      }
      let tree = rnd2(this.size * 0.1, this.size * 0.5);
      // if (posy > height*0.5) {
      //   this.house(x+xmod,y,tree);
      // }
      
      if (rndobj < this.shrubs * 0.8 && fxrand() < 0.8) {
        /// chance of green trees
        push();
        stroke(0, rnd2(50, 125), 25, 255);
        if (fxrand() < 0.25) {
          /// chance of brown trees
          stroke(rnd2(75, 125), 50, 10, 255);
        }
        translate(x + xmod, y - this.size * 0.5);
        triangle(
          0,
          rnd2(-this.size * 0.01, 0) - tree,
          -tree * 0.25,
          tree * 0.25,
          tree * 0.25,
          tree * 0.25
        );
        pop(); 
      } 
      this.xoff += 0.05;
      this.yend = y;
    }

    stroke(0, 64, 0, 128);
    strokeWeight(2);

    if (frameGen % 32 === 0) {
      strokeWeight(8);
    }

    let rsub = fxrand()*128;
    fill(255 - rsub, 200 - rsub, 75 - rsub, 175);
    vertex(-width / 2, this.yend);
    endShape(CLOSE);

    /// Control the width between terrain lines.
    /// Higher values offer greater distances.
    /// Lower values offer narrow distances.
    let yoffn = map(noise(frameGen * 0.01), 0, 1, 0.005, 0.075);
    this.yoff += yoffn;
    pop();
  };

  this.house = function (tx, ty, tree) {
    if (fxrand() < 0.25) {
      /// chance of green tree
      push();
      strokeWeight(1);
      stroke(10, 10, 10, 255);
      translate(tx, ty - this.size);
      let rcol = rnd2(222, 255);
      fill(rcol, rcol, rnd2(75, 225), 255);
      rect(-this.size, 0, this.size, this.size * 1.1);
      fill(200, 50, 10, 255);
      rect(-this.size, 0, this.size, this.size * 0.2);
      strokeCap(SQUARE);
      strokeWeight(this.size * 0.25);
      stroke(50, 50, 40, 255);
      rect(rnd2(-this.size, -1), this.size * 0.5, this.size * 0.005);
      pop();
    }
  };

  this.madrone = function (tx, ty) {
    /// shrubs,bushes, trees and flowers
    push();
    translate(tx, ty);
    for (let q = 0; q < 6; q++) {
      /// density of cluster
      this.px = fxrand()*this.size * 0.5; /// range
      rotate(fxrand()*TWO_PI); /// radial location
      strokeWeight(this.size * rnd2(0.1, 0.5));
      stroke(rnd2(0, 128), rnd2(50, 255), 0, 255);
      this.py = rnd2(-this.size * 0.25, this.size * 0.25);
      point(this.px, this.py);
    }
    pop();
  };
}


function treeMaker() {
  this.ytrg = height * 0.1;
  this.yobj = height * 1.3;
  this.tall = 0;

  this.update = function (hi) {
    this.yobj = height;
    this.tall = hi;
    this.ytrg = height * this.tall;
    push();
    translate(xloc, 0);
    for (let y = height; y > height * this.tall; y--) {
      let colr = map(noise(xloc, y, frameGen * 0.1), 0, 1, 25, 96);
      this.yobj = lerp(this.yobj, this.ytrg, 0.1);
      let sw = map(this.yobj, height, height * this.tall, 8, 1);
      strokeWeight(sw * 2);
      stroke(75, 50, 25, 255);
      if (fxrand() < 0.05) {
        line(0, this.yobj, 0, this.yobj + sw * 5);
      }
      strokeWeight(sw);
      stroke(0, colr, colr - 128, 200);
      let d = dist(this.yobj, 0, this.ytrg, 0);
      if (d > 2) {
        this.branch(d);
      }
    }

    pop();
  };

  this.branch = function (len) {
    push();
    translate(0, this.yobj);
    push();
    rotate(PI * fxrand()*0.25);
    let modR = rnd2(0.1, 0.2);
    let modY = rnd2((-len * modR) / 2, (len * modR) / 2);
    if (fxrand() < 0.1) {
      stroke(0, 75, 0, 128);
      // strokeWeight(2);
      modR *= 0.75;
    }
    line(0, modY, len * modR, modY);
    pop();

    push();
    rotate(-PI * fxrand()*0.25);
    let modL = rnd2(0.1, 0.2);
    modY = rnd2((-len * modL) / 2, (len * modL) / 2);
    if (fxrand() < 0.1) {
      stroke(0, 75, 0, 128);
      // strokeWeight(2);
      modL *= 0.75;
    }
    line(0, modY, -len * modL, modY);
    pop();

    pop();
  };
}

