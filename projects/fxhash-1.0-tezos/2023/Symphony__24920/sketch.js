// Symphony BY Praveen Prajapati
// twitter: https://twitter.com/iamPraveenIN
// created using p5js: http://p5js.org/

let p, HH, WW;
let num = 2;
let pd;
let grids = 6 * num;
let colors, bg, bgBrightness;

// checking if url contains scale para
check(
  (scaleFromUrl = new URLSearchParams(window.location.search).get("scale"))
);

// render image in high quality
function check(url) {
  if (url == "2") {
    num = 2;
  } else if (url == "3") {
    num = 3;
  } else {
    num = 1;
  }
}

function setup() {
  // fxhash seed
  seed = int(fxrand() * 1e5);
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(num);

  // canvas size, position and resolution
  colors = random(palettes);
  W = min(windowWidth, windowHeight);
  rt = 1;
  C = createCanvas(W, W);
  C.parent("canvas");
  C.position((windowWidth - width) * 0.5, (windowHeight - height) * 0.5);
  angleMode(DEGREES);
  colors = random(palettes);

  WW = width;
  HH = height;
}

function draw() {
  bg = random(colors);
  bgBrightness = brightness(bg);
  background(bg);

  let m = WW / 8;
  let w = WW - m * 2;
  let h = HH - m * 2;
  let n = int(random([3, 4, 5, 6, 7, 8]));
  noStroke();
  let sW = width * 0.009;
  if (bgBrightness < 40) stroke(235);
  else stroke(30);
  strokeWeight(sW);
  rect(m, m, w, h);
  noStroke();
  layer(m, m, w, h, n);
  addT(0, 0, width, height);
  paper(30);
  fxpreview();
  console.log(fxhash);
  noLoop();
}

function layer(xx, yy, ww, hh, num) {
  push();
  translate(xx, yy);
  strokeJoin(BEVEL);
  // noStroke()

  let n = num; //int(random(1,6));
  let w = ww;
  let h = hh;
  let s = w / n;
  let rt2 = [0.2, 0.3, 0.4, 0.5];
  let rt3 = [0.8, 0.7, 0.6, 0.5];
  let rt1 = int(random(0, rt2.length));
  let sm = s * rt2[rt1];
  let sl = s * rt3[rt1];
  let tran = fxrand();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let ss = s / 2;
      let x = i * s;
      let y = j * s;

      let ran = fxrand();
      push();
      translate(x, y);
      let c = random(colors);
      fill(c);
      stroke(c);
      strokeWeight(0.5);
      rect(0, 0, s, s);
      pop();

      if (tran < 1 / 10) {
        t6(x, y, sm, sl, s, ss);
      } else if (tran < 2 / 10) {
        if (fxrand() < 9 / 10) t6(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 3 / 10) {
        if (ran < 6 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t4(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 4 / 10) {
        if (ran < 7 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t3(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 5 / 10) {
        if (ran < 7 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t2(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 6 / 10) {
        if (ran < 7 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t1(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 7 / 10) {
        if (ran < 5 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 7 / 10) t2(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t5(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 8 / 10) {
        if (ran < 5 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 7 / 10) t4(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t5(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 9 / 10) {
        if (ran < 5 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 7 / 10) t3(x, y, sm, sl, s, ss);
        else if (ran < 9 / 10) t5(x, y, sm, sl, s, ss);
        else t5(x, y, sm, sl, s, ss);
      } else if (tran < 10 / 10) {
        if (ran < 5 / 10) t6(x, y, sm, sl, s, ss);
        else if (ran < 10 / 10) t1(x, y, sm, sl, s, ss);
      }
    }
  }
  pop();
}
function t6(x, y, sm, sl, s, ss) {
  push();
  let ran = fxrand();
  if (ran < 1 / 7) {
    makeTile(x, y, ss, ss);
    makeTile(x + ss, y, ss, ss);
    makeTile(x, y + ss, ss, ss);
    makeTile(x + ss, y + ss, ss, ss);
  } else if (ran < 2 / 7) {
    makeTile(x, y, ss, s);
    makeTile(x + ss, y, ss, s);
  } else if (ran < 3 / 7) {
    makeTile(x, y, s, ss);
    makeTile(x, y + ss, s, ss);
  } else if (ran < 4 / 7) {
    makeTile(x, y, ss, s);
    makeTile(x + ss, y, ss, ss);
    makeTile(x + ss, y + ss, ss, ss);
  } else if (ran < 5 / 7) {
    makeTile(x, y, s, ss);
    makeTile(x, y + ss, ss, ss);
    makeTile(x + ss, y + ss, ss, ss);
  } else if (ran < 6 / 7) {
    makeTile(x, y, ss, ss);
    makeTile(x, y + ss, ss, ss);
    makeTile(x + ss, y, ss, s);
  } else if (ran < 7 / 7) {
    makeTile(x, y, ss, ss);
    makeTile(x + ss, y, ss, ss);
    makeTile(x, y + ss, s, ss);
  }
  pop();
}

function t5(x, y, sm, sl, s, ss) {
  push();
  makeTile(x, y, s, s);
  pop();
}

function t4(x, y, sm, sl, s, ss) {
  push();
  let ran = fxrand();
  if (ran < 1 / 4) {
    makeTile(x, y, sl, s);
    makeTile(x + sl, y, sm, s);
  } else if (ran < 2 / 4) {
    makeTile(x, y, s, sl);
    makeTile(x, y + sl, s, sm);
  } else if (ran < 3 / 4) {
    makeTile(x, y, sm, s);
    makeTile(x + sm, y, sl, s);
  } else if (ran < 4 / 4) {
    makeTile(x, y, s, sm);
    makeTile(x, y + sm, s, sl);
  }
  pop();
}

function t3(x, y, sm, sl, s, ss) {
  push();
  let ran = fxrand();
  if (ran < 1 / 4) {
    makeTile(x, y, sl, s);
    makeTile(x + sl, y, sm, sl);
    makeTile(x + sl, y + sl, sm, sm);
  } else if (ran < 2 / 4) {
    makeTile(x, y, s, sl);
    makeTile(x + sm, y + sl, sl, sm);
    makeTile(x, y + sl, sm, sm);
  } else if (ran < 14 / 4) {
    makeTile(x, y, sm, sl);
    makeTile(x + sm, y, sl, s);
    makeTile(x, y + sl, sm, sm);
  } else if (ran < 4 / 4) {
    makeTile(x, y, sl, sm);
    makeTile(x, y + sm, s, sl);
    makeTile(x + sl, y, sm, sm);
  }
  pop();
}

function t2(x, y, sm, sl, s, ss) {
  push();
  let ran = fxrand();
  if (ran < 1 / 4) {
    makeTile(x, y, sl, sl);
    makeTile(x + sl, y, sm, sl);
    makeTile(x + sl, y + sl, sm, sm);
    makeTile(x, y + sl, sl, sm);
  } else if (ran < 2 / 4) {
    makeTile(x, y, sm, sm);
    makeTile(x + sm, y, sl, sm);
    makeTile(x + sm, y + sm, sl, sl);
    makeTile(x, y + sm, sm, sl);
  } else if (ran < 3 / 4) {
    makeTile(x, y, sl, sm);
    makeTile(x + sl, y, sm, sm);
    makeTile(x + sl, y + sm, sm, sl);
    makeTile(x, y + sm, sl, sl);
  } else if (ran < 4 / 4) {
    makeTile(x, y, sm, sl);
    makeTile(x + sm, y, sl, sl);
    makeTile(x, y + sl, sm, sm);
    makeTile(x + sm, y + sl, sl, sm);
  }
  pop();
}

function t1(x, y, sm, sl, s, ss) {
  push();
  makeTile(x, y, sm, sm);
  makeTile(x + sm, y, sl - sm, sm);
  makeTile(x + sl, y, sm, sm);
  makeTile(x, y + sm, sm, sl - sm);
  makeTile(x + sm, y + sm, sl - sm, sl - sm);
  makeTile(x + sl, y + sm, sm, sl - sm);
  makeTile(x, y + sl, sm, sm);
  makeTile(x + sm, y + sl, sl - sm, sm);
  makeTile(x + sl, y + sl, sm, sm);
  pop();
}

function makeTile(x, y, w, h) {
  push();
  translate(x, y);
  let c = random(colors);
  fill(c);
  // noFill()
  // stroke(0)
  stroke(c);
  strokeWeight(0.5);
  addS1(0, 0, w, h);
  pop();
}

function addS1(x, y, w, h) {
  push();
  rectMode(CENTER);
  translate(x + w / 2, y + h / 2);
  let ran = fxrand();
  let ran2 = fxrand();
  // rotate(40)
  if (w == h) {
    if (ran < 1 / 3) {
      if (fxrand() < 1 / 2) {
        ellipse(0, 0, w, h);
      } else {
        ellipse(0, 0, w, h);
        fill(random(colors));
        ellipse(0, 0, w / 2, h / 2);
      }
    } else if (ran < 2 / 3) rect(0, 0, w, h);
    else if (ran < 3 / 3) {
      push();
      translate(-w / 2, -h / 2);
      let r = random([0, 90, 180, 270]);
      if (r == 90) translate(w, 0);
      if (r == 180) translate(w, h);
      if (r == 270) translate(0, h);
      if (r == 0) translate(0, 0);
      rotate(r);
      let rr = fxrand();
      if (rr < 1 / 3) arc(0, 0, w * 2, h * 2, 0, 90, PIE);
      else if (rr < 2 / 3) {
        arc(0, h / 2, w, h, 270, 90, PIE);
        arc(w, h / 2, w, h, 90, 270, PIE);
      } else {
        arc(0, h / 2, w, h, 270, 90, PIE);
        arc(w / 2, h / 2, w, h, 270, 90, PIE);
      }
      pop();
    }
  } else if (h > w) {
    if (fxrand() < 1 / 2) {
      if (fxrand() < 1 / 2) newRectV(0, 0, w, h);
    } else {
      if (ran < 1 / 3) rect(0, 0, w, h);
      else if (ran < 2 / 3) {
        if (fxrand() < 1 / 2) arc(-w / 2, 0, w * 2, h, 270, 90, PIE);
        else addTriangle(0, 0, w, h);
      } else if (ran < 3 / 3) {
        if (ran2 < 1 / 2) arc(w / 2, 0, w * 2, h, 90, 270, PIE);
        else addTriangle(0, 0, w, h);
      }
    }
  } else if (w > h) {
    if (fxrand() < 1 / 2) {
      if (fxrand() < 1 / 2) newRectH(0, 0, w, h);
      else addTriangle(0, 0, w, h);
    } else {
      if (ran < 1 / 3) rect(0, 0, w, h);
      else if (ran < 2 / 3) {
        if (ran2 < 1 / 2) arc(0, -h / 2, w, h * 2, 0, 180, PIE);
        else addTriangle(0, 0, w, h);
      } else if (ran < 3 / 3) {
        if (ran2 < 1 / 2) arc(0, h / 2, w, h * 2, 180, 0, PIE);
        else addTriangle(0, 0, w, h);
      }
    }
  }

  pop();
}

function keyPressed() {
  if (key === "s" || key === "S") save(`Symphony_${seed}_${fxhash}.jpg`);
  else if (key === "p" || key === "P") save(`Symphony_${seed}_${fxhash}.png`);
}
