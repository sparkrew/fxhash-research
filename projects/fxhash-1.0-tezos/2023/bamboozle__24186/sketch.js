//bamboozle by pixelwank
//finished in 2023 for fxhash

let pal = [
  ["#d24b2b", "#385d32", "#392b42", "#fab511", "#f9f0de"],
  ["#bfb7af", "#d8ccc0", "#f2e2d5", "#a59f9b", "#f2d7cd"],
  ["#4b7ba6", "#4e5925", "#f2b138", "#f2e8dc", "#f25749"],
  ["#f5b000", "#ffe4ac", "#eabd75", "#f9f0de"],
  [
    "#1d1d1b",
    "#d2b0a3",
    "#ffd200",
    "#e51f23",
    "#e6007b",
    "#005aa7",
    "#53c5ee",
    "#f9f0de",
  ],
  ["#2b292b", "#786e66", "#3f3e3a", "#cac6c3", "#afa69e"],
  ["#cd2525", "#c04483", "#2d8579", "#1a1921", "#ddd8d4"],
  ["#06c2ec", "#f0d10b", "#be9820", "#f15a38", "#f1f1f0"],
  [
    "#d7312e",
    "#f9f0de",
    "#f0ac00",
    "#0c7e45",
    "#2c52a0",
    "#f7bab6",
    "#5ec5ee",
    "#1d1d1b",
  ],
  [
    "#348796",
    "#c19447",
    "#b6102f",
    "#19262e",
    "#ede0c3",
    "#111414",
    "#3e95a4",
    "#80232b",
    "#c3a08b",
  ],
  [
    "#c8c9c6",
    "#1b1717",
    "#9c4e68",
    "#999695",
    "#275817",
    "#b0da8e",
    "#6c1c38",
    "#544f4f",
    "#edeceb",
  ],
  [
    "#f9f9f5",
    "#191917",
    "#f9f9f5",
    "#191917",
    "#f9f9f5",
    "#191917",
    "#f9f9f5",
    "#191917",
    "#f9f9f5",
    "#191917",
  ],
  [
    "#8ac0ea",
    "#fcf9f2",
    "#fac3bf",
    "#312f2b",
    "#dce87c",
    "#464d4e",
    "#5d91b6",
    "#768448",
    "#dbecf2",
    "#312f2b",
  ],
  [
    "#0a0a0a",
    "#f7f3f2",
    "#0077e1",
    "#f5d216",
    "#fc3503",
    "#0a0a0a",
    "#f7f3f2",
    "#0077e1",
    "#f5d216",
    "#fc3503",
  ],
  [
    "#4F3C2D",
    "#305E90",
    "#DB4E54",
    "#389894",
    "#C7E3D4",
    "#FFBB12",
    "#4F3C2D",
    "#305E90",
    "#DB4E54",
    "#389894",
  ],
  [
    "#efdec4",
    "#f8ab51",
    "#ee8927",
    "#6dbdc4",
    "#151829",
    "#080705",
    "#f9f4e4",
    "#eebb4e",
    "#ad7432",
    "#0a203f",
  ],
  [
    "#e4d4c7",
    "#f65b45",
    "#34312d",
    "#afc7f3",
    "#9daa5d",
    "#d24c49",
    "#6e7478",
    "#c6e0fb",
    "#702d27",
    "#9daa5d",
  ],
  [
    "#dacdb2",
    "#b6c38f",
    "#424335",
    "#e27e7f",
    "#cdc2b2",
    "#232420",
    "#9fbac3",
    "#85856c",
    "#e8dfc4",
    "#dacdb2",
  ],
  [
    "#f24358",
    "#f2a643",
    "#f2e343",
    "#43f278",
    "#43a0f2",
    "#c343f2",
    "#f24358",
    "#f2a643",
    "#f2e343",
    "#43f278",
  ],
  ["blue", "yellow", "cyan", "magenta"],
  [
    "#f9f9f5",
    "#191917",
    "#9dd2ba",
    "#333436",
    "#c8c8c7",
    "#968378",
    "#0d0f0c",
    "#e2e2e0",
    "#595c5b",
    "#9dd2ba",
  ],
  [
    "#474b4e",
    "#1e1a18",
    "#faf4eb",
    "#908f55",
    "#bb9d7f",
    "#68653f",
    "#100e0e",
    "#e6dcce",
    "#776a61",
  ],
  ["#d1d2aa", "#5c7346", "#eeaf24", "#d9771e", "#d7481e"],
  ["#c3bda7", "#f3eedd", "#d4ab63", "#3e3f6f", "#c9c182", "#dde3e9", "#a99866"],
  ["#6b052e", "#d2d2cb", "#deba7c", "#9eadb7"],
  [
    "#a99866",
    "#c2c3c1",
    "#3c3f67",
    "#d4ab63",
    "#aa544b",
    "#f1eee0",
    "#464853",
    "#8da4b0",
    "#e3d4ab",
  ],
  ["#edebde", "#92bb8b", "#edebde", "#92bb8b"],
  ["#edebde", "#3e3f6f", "#edebde", "#3e3f6f"],
  ["#96a5c0", "#aa544b", "#96a5c0", "#aa544b"],
];

let palNames = [
  "ihatehate",
  "reflections",
  "take five",
  "gershwin",
  "starfruits",
  "2006",
  "mellow",
  "department store",
  "seattle",
  "hobbledehoy",
  "save ferris",
  "the revolution will not be televised",
  "tennis kit",
  "mondy",
  "playschool",
  "rather ripped",
  "inflatable pool",
  "brunch at the bodega",
  "rainbow",
  "CMYK",
  "alien",
  "fields",
  "mums favourite",
  "werner",
  "bender",
  "dougie",
  "monoGreen",
  "monoBlue",
  "redVsblue",
];

let bgpal = ["#d4ab63", "#f0d10b", "#858899", "#9cc2c9", "#92bb8b", "#a74744"];

let abun = [
  20,
  24,
  30,
  36,
  40,
  48,
  54,
  60,
  66,
  72,
  78,
  80,
  88,
  90,
  96,
  100,
  108,
  120,
];

let m, nf;
let w = 1200;
let t = 0;
let f = 0;
let ty;
let spacing;
let p;
let c;
let count = 0;
let mainCount = 0;

let chc = [
  [0, 1, 2, 3],
  [3, 2, 1, 0],
  [1, 3, 2, 0],
  [2, 1, 3, 0],
  [1, 0, 2, 3],
  [0, 2, 3, 1],
  [2, 0, 3, 1],
];

let col1 = ["#050505", "#0f0f0f", "#101010", "#0d0d0d"];
let col2 = ["#f5f5f5", "#f8f8f8"];

let pixelDensityFactor = 1;

function setup() {
  pixelDensityFactor = int(1);

  seed = Math.trunc(fxrand() * 9999999999);
  seedNoise = Math.trunc(fxrand() * 9999999999);

  tempcan = createCanvas(w * 0.75, w);
  tempcan.parent("fulllscreen");
  rectMode(CENTER);
  pixelDensity(1);

  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);
  imageMode(CENTER);
  preDraw(1);
}

function preDraw(pxDens) {
  randomSeed(seed);
  noiseSeed(seedNoise);
  //init settings
  palC = 0;
  palName = 0;
  b1 = 0;
  backGChoice = 0;
  bgC = 0;
  choice = 0;
  marginChoice = 0;
  m = 0;
  ty = 0;
  nf = 0;
  noiseLevel = 0;
  noisefx = 0;
  noisefy = 0;
  rot = 0;
  ww = 0;
  hh = 0;
  w1 = 0;
  h1 = 0;
  showDiv = 0;
  show = 0;
  cutter = 0;
  excuts = 0;
  offset = 0;
  offsetChange = 0;
  verti = 0;
  jump = 0;
  dep = 0;
  colAmt = 0;
  sCAmt = 0;
  sC = 0;
  sz = 0;
  sz1 = 0;
  mode = 0;
  fin = 0;
  size = 0;
  dashed = 0;
  cutChoice = 0;
  cutStyle = 0;
  cMask = 0;
  broken = 0;
  n = 0;
  n1 = 0;
  n2 = 0;
  n3 = 0;
  n4 = 0;
  qnum = 0;
  mainCut = 0;
  cut = 0;
  iShift = 0;
  xspac = 0;
  yspac = 0;
  delta = 0;
  lineAmount = 0;
  xspac1 = 0;
  dasher = 0;
  cala = 0;
  cS = 0;
  factor = 0;
  thresh = 0;
  gSize = 0;
  t = 0;
  f = 0;
  spacing = 0;
  len = 0;
  fact = 0;
  tInc = 0;
  fInc = 0;
  bSize = 0;
  drawnCircles = [];
  main = 0;
  k = 0;
  fin = 0;
  z = 0;
  cm = 0;
  hp = 0;
  gA = 0;
  fNum = 0;
  sw1 = 0;
  xw = 0;
  yh = 0;
  xsp = 0;
  ysp = 0;
  cH1 = 0;
  nH = 0;
  cHL = 0;
  count = 0;
  mainCount = 0;
  destroyed = 0;
  squ = 0;

  //bamboozle by pixelwank
  //finished in 2023 for fxhash

  pixelDensityFactor = int(pxDens);

  palC = round(random(28));
  PalName = palNames[palC];
  b1 = random(bgpal);
  backGChoice = random();
  if (backGChoice < 0.85) {
    bgC = random(["#faf9f6", "#efe5d5"]);
  } else if (backGChoice < 0.95) {
    bgC = "#28282B";
  } else {
    bgC = b1;
  }

  choice = random(chc);
  marginChoice = random();
  if (marginChoice < 0.88) {
    m = w / random([15, 18, 20, 40]);
  } else if (marginChoice < 0.95) {
    m = w / 10;
  } else {
    m = 0;
  }

  ty = m;

  nf = random(0.002, 0.2);
  noiseLevel = random();
  if (noiseLevel < 0.1) {
    noisefx = random(0.00069, 0.002);
    noisefy = random(0.00069, 0.002);
  } else if (noiseLevel < 0.85) {
    noisefx = random(0.001, 0.0042);
    noisefy = random(0.001, 0.0042);
  } else {
    noisefx = random(0.004, 0.01);
    noisefy = random(0.004, 0.01);
  }

  rot = random(TAU);
  ww = width / 2;
  hh = height / 2;
  w1 = ww;
  h1 = hh;
  showDiv = random([7, 8, 10, 11, 15, 22]);
  show = round((height - 2 * m) / showDiv);
  cutter = round(show / 5);
  exCuts = random();
  offset = random(abun) * 11;
  verti = random();
  offsetChange = random();

  jump = random(42);
  dep = random([0.5, 0.6, 0.7, 0.8, 0.9, 1]);

  colAmt = random([0.33, 0.42, 0.55, 0.69]);
  sCAmt = random([0.34, 0.42, 0.69]);
  sC = random();
  sz = random(1.8, 2.5);
  sz1 = sz * 2;
  mode = random([0, 1, 2, 1, 2, 1]);
  fin = random();
  size = random([100, 200]);
  dashed = random();
  cutChoice = random();
  if (cutChoice < 0.48) {
    cutStyle = 0;
  } else if (cutChoice < 0.96) {
    cutStyle = 1;
  } else {
    cutStyle = 2;
  }
  cMask = random();

  rectMode(CENTER);
  pixelDensity(pixelDensityFactor);
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);

  imageMode(CENTER);
  main = createGraphics(width, height);
  main.rectMode(CENTER);
  main.colorMode(HSL);
  main.imageMode(CENTER);

  k = createGraphics(width, height);
  k.imageMode(CENTER);

  fin = createGraphics(width, height);
  fin.imageMode(CENTER);

  z = createGraphics(width, height);
  z.background(bgC);
  z.imageMode(CENTER);
  z.rectMode(CENTER);

  cm = createGraphics(width, height);
  cm.background(bgC);
  cm.imageMode(CENTER);
  cm.rectMode(CENTER);

  hp = createGraphics(width, height);
  hp.imageMode(CENTER);
  hp.rectMode(CENTER);
  hp.colorMode(HSL);
  broken = random();

  mainCut = random();

  if (mainCut < 0.01) {
    cut = false;
  } else {
    cut = true;
  }

  xspac = (width - 2 * m) / random([50, 100, 200]);
  yspac = (height - 2 * m) / random([50, 100, 200]);

  delta = random([5, 11, 22, 34, 42, 69]);
  lineAmount = random([0.05, 0.11, 0.22, 0.34]);
  xspac1 = width / random([20, 40, 50, 100]);
  dasher = random();
  cS = random(pal[palC]);
  factor = random([1.1, 2.2, 4.2, 6.9]);
  thresh = random();
  gSize = random();
  gA = random([0.11, 0.22, 0.42, 0.69, 0.91]);
  inc = 0;
  destroyed = random();
  squ = random();

  fNum = round(random(5, 22));
  sw1 = random([11, 20, 42, 69]);

  spacing = random([0.8, 0.9, 1]);
  len = random([3, 5, 8, 11]);

  fact = random(1.75, 2);
  tInc = random(0.00001, 0.00042);
  fInc = random(0.00001, 0.00042);
  bSize = 10;
  background(bgC);

  drawnCircles = [];
  //bamboozle by pixelwank
  //finished in 2023 for fxhash
  
  //Features
  window.$fxhashFeatures = {
    Palette: PalName,
  }
  
  loop();
}

function draw() {
  if (mainCount === 0) {
    main.noStroke();
    main.noFill();

    noisePoints();

    ty = ty + spacing;
    count += 1;

    if (exCuts < 0.05) {
      if (count % cutter === 0) {
        if (random() < 0.5) {
          slicer(
            random(width),
            random(height),
            (random() * width) / 10,
            random() * height
          );
          slicer(
            random(width),
            random(height),
            (random() * width) / 20,
            random() * height
          );
          slicer(
            random(width),
            random(height),
            (random() * width) / 30,
            random() * height
          );
        } else {
          slicer(
            random() * width,
            random() * height,
            random() * width,
            (random() * height) / 10
          );
          slicer(
            random() * width,
            random() * height,
            random() * width,
            (random() * height) / 20
          );
          slicer(
            random() * width,
            random() * height,
            random() * width,
            (random() * height) / 30
          );
        }

        main.image(k, ww, hh);
      }
    }

    if (count % show === 0) {
      background(bgC);
      push();
      translate(ww, hh);
      if (verti < 0.05) {
        rotate(HALF_PI);
        image(main, 0, 0, height, width);
      } else {
        image(main, 0, 0);
      }
      pop();

      cS = random(pal[palC]);

      if (offsetChange <= 0.07) {
        offset = random(abun) * 11;
      }
      count = 0;
    }

    t += random(-0.0042, 0.0042);
    f += random(-0.0042, 0.0042);

    if (ty < height - m) {
      push();
      stroke(cS);
      strokeWeight(5);
      fill("#f3eddd");
      translate(ww, hh);

      rect(0, 0, ww * 0.5, hh / 5, 11);
      pop();

      let cH1 = [0, 1, 2];
      let nH = noise(ww, hh, frameCount / 111);
      let cHL = round(nH * cH1.length);
      push();
      translate(ww, hh);
      textFont("Arial");
      textAlign(CENTER);
      textSize(30);
      fill(0);
      if (cHL === 0) {
        text("LOADING.", 0, 0);
        textSize(22);
        text("<3 <3 <3", 0, 34);
      } else if (cHL === 1) {
        text("LOADING..", 0, 0);
        textSize(22);
        text("<3 <3", 0, 34);
      } else {
        text("LOADING...", 0, 0);
        textSize(22);
        text("<3", 0, 34);
      }

      pop();
    }

    if (ty >= height - m) {
      background(bgC);
      push();
      translate(ww, hh);
      if (verti < 0.05) {
        rotate(HALF_PI);
        image(main, 0, 0, height, width);
      } else {
        image(main, 0, 0);
      }
      pop();

      if (cut === true) {
        z.push();
        z.translate(ww, hh);
        z.rotate(PI);
        z.image(this, 0, 0);
        z.pop();

        if (cutStyle < 2 && broken > 0.8 && broken < 0.91) {
          haphazard();
          image(hp, ww, hh);
        }

        if (cutStyle === 0) {
          a = 1;
          ifs(0, 0, width, height, 0);
          image(z, ww, hh);
        } else if (cutStyle === 1) {
          regGridCut();
          image(z, ww, hh);
        } else if (cutStyle === 2) {
          haphazard();
          image(hp, ww, hh);
        }

        if (cMask > 0.7 && cMask < 0.88) {
          cMCutShape();
          image(cm, ww, hh);
        } else if (cMask >= 0.88) {
          cMCut();
          image(cm, ww, hh);
        }

        if (cutStyle < 2 && broken > 0.91) {
          haphazard();
          image(hp, ww, hh);
        }

        mainCount = 1;
      }
    }
  }

  if (destroyed < 0.008) {
    filter(THRESHOLD);
  }

  if (mainCount === 1) {
    noLoop();
    fxpreview();
  }
}

function haphazard() {
  // fNum = round(random(5,22));
  // print('shaps '+fNum)
  // sw1 = random([11,20, 42, 69]);
  for (let i = 0; i < fNum; i++) {
    let r = random(w / 10, w / 4);
    let x = random(m, width - m);
    let y = random(m, height - m);
    let n = noise(x * noisefx, y * noisefy, i);

    let hap = createGraphics(width, height);
    hap.rectMode(CENTER);
    hap.colorMode(HSL);
    hap.imageMode(CENTER);

    hap.noStroke();
    hap.fill(bgC);

    hap.push();
    hap.translate(x, y);
    hap.rotate(round(n * rot * i));
    //hap.strokeWeight(sz1);

    inc = random(0.1, 0.42);
    hap.beginShape();
    noiseMax = random(0.11, 11);
    for (let a = 0; a < TWO_PI; a += inc) {
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let rr = map(noise(xoff, yoff), 0, 1, 5, r);
      let x = rr * cos(a);
      let y = rr * 3 * sin(a);
      if (random() < 1) {
        hap.vertex(x, y);
      } else {
        hap.curveVertex(x, y);
      }
    }
    hap.endShape(CLOSE);
    hap.pop();
    // p = round(n*mag.length)
    // mc = mag[p]
    ctx = hap.canvas.getContext("2d");

    ctx.clip();

    xw = random(-ww / 5, ww / 5);
    yh = random(-ww / 5, ww / 5);

    hap.push();
    hap.translate(x, y);
    hap.rotate(n * rot);
    hap.image(this, xw, yh);
    hap.pop();
    if (thresh < 0.11 && random() < 0.11) {
      hap.filter(THRESHOLD);
    }
    hp.image(hap, ww, hh);
  }
}
//bamboozle by pixelwank
//finished in 2023 for fxhash
function cMCutShape() {
  cm.push();
  cm.translate(ww, hh);
  cm.rotate(PI);
  cm.image(this, 0, 0);
  cm.pop();

  cm.erase();
  cmEraseShape();
  cm.noErase();
}

function cmEraseShape() {
  cm.fill(bgC);
  cm.noStroke();
  cm.beginShape();
  for (let i = 0; i < 420; i++) {
    let radius = random(5, 222);

    rC = {
      x: random(m, width - m),
      y: random(m, height - m),
      radius: radius,
    };

    let drawTheCircle = true;

    for (let j = 0; j < drawnCircles.length; j++) {
      let circleToTest = drawnCircles[j];

      if (
        dist(rC.x, rC.y, circleToTest.x, circleToTest.y) <
        rC.radius + circleToTest.radius
      ) {
        drawTheCircle = false;
        break;
      }
    }

    if (drawTheCircle) {
      cm.curveVertex(rC.x, rC.y);
      drawnCircles.push(rC);
    }
  }
  cm.endShape();
}
//bamboozle by pixelwank
//finished in 2023 for fxhash
function cMCut() {
  cm.push();
  cm.translate(ww, hh);
  cm.rotate(PI);
  cm.image(this, 0, 0);
  cm.pop();

  cm.erase();
  cmEraseCircles();
  cm.noErase();
}

function cmEraseCircles() {
  cm.noStroke();
  cm.fill(0);
  for (let i = 0; i < 10000; i++) {
    let radius = random(5, 222);
    rC = {
      x: random(m + radius, width - m - radius),
      y: random(m + radius, height - m - radius),
      radius: radius,
    };
    // }

    let n = noise(rC.x * nf, rC.y * nf, i);

    let drawTheCircle = true;

    for (let j = 0; j < drawnCircles.length; j++) {
      let circleToTest = drawnCircles[j];

      if (
        dist(rC.x, rC.y, circleToTest.x, circleToTest.y) <
        rC.radius + circleToTest.radius
      ) {
        drawTheCircle = false;
        break;
      }
    }

    if (drawTheCircle) {
      cm.circle(rC.x, rC.y, rC.radius * 2);

      drawnCircles.push(rC);
    }
  }
}

function regGridCut() {
  bgC1 = color(hue(bgC), saturation(bgC), brightness(bgC), gA);
  if (gSize < 0.8) {
    divG = random([5, 7, 10, 15, 20]);
  } else {
    divG = random([3, 4, 30, 40, 50]);
  }
  xsp = (width - 2 * m) / divG;
  ysp = (height - 2 * m) / divG;
  z.rectMode(CORNER);
  z.stroke(bgC1);
  z.strokeWeight(sz1);
  z.noFill();

  for (let x = m; x < width - m; x += xsp) {
    for (let y = m; y < height - m; y += ysp) {
      let n = noise(x * noisefx, y * noisefx);

      if (random() < 0.5) {
        z.push();
        z.fill(bgC);
        z.erase();
        z.rect(x, y, xsp, ysp);
        z.noErase();
        z.pop();
      }

      z.rect(x, y, xsp, ysp);
    }
  }
}
//bamboozle by pixelwank
//finished in 2023 for fxhash
function noisePoints() {
  for (let tx = m; tx <= width - m; tx += spacing) {
    if (offsetChange > 0.07 && offsetChange <= 0.14) {
      offset = random(abun) * 11;
    } else if (offsetChange > 0.14 && offsetChange < 0.25) {
      offset = random(abun) * factor;
    }

    n1 = noise(tx * noisefx, ty * noisefx);
    n2 = noise(tx * noisefy, ty * noisefy);
    n3 = noise((tx + offset * n1) * noisefx, (ty + offset * n2) * noisefy, f);
    n4 = noise(
      (tx + offset * n3) * noisefx,
      (ty + t + offset * n3) * noisefy,
      f
    );
    n = noise(
      (tx + offset * n4) * noisefx,
      (ty + t + offset * n4) * noisefy,
      f
    );

    let p = round(n * pal[palC].length);
    let c = color(pal[palC][p]);

    let c1 = color(
      hue(c),
      saturation(c) - n * 10,
      brightness(c) + n * 11,
      n * 1
    );

    let c2 = color(
      hue(c),
      saturation(c) - n * 10,
      brightness(c) - n * 11,
      n * colAmt
    );

    main.strokeWeight(n * spacing * sz * 2);

    let nn = round(n * 10);
    let nn1 = round(n4 * 10);

    qnum = round(random(2, 4));

    if (nn < nn1 || nn > nn1) {
      main.stroke(c2);
      if (squ<0.5){
      main.circle(tx, ty, n * spacing * random(4.2));
      } else {
      main.square(tx, ty, n * spacing * random(4.2));  
      }
    } else {
      main.stroke(c1);
      if (random() < sCAmt) {
        let tt = random();
        main.push();
        main.translate(tx, ty);
        for (let q = 0; q < qnum; q++) {
          main.strokeWeight(random());
          let xx = random(-spacing, spacing);
          let yy = random(-spacing, spacing);
          main.point(xx, yy);
        }
        main.pop();
      }
    }
  }
}

function slicer(x, y, w, h) {
  k.push();
  k.image(main.get(x, y, x + w, y + h), x, y, w, h);
  k.pop();
}
//bamboozle by pixelwank
//finished in 2023 for fxhash
function draw_box(x, y, d_x, d_y) {
  bgC1 = color(hue(bgC), saturation(bgC), brightness(bgC), gA);
  offset = random(abun);
  n1 = noise(x * noisefx, y * noisefx);
  n2 = noise(x * noisefy, y * noisefy);
  n3 = noise((x + offset * n1) * noisefx, (y + offset * n2) * noisefy, f);
  n4 = noise((x + offset * n3) * noisefx, (y + t + offset * n3) * noisefy, f);
  n = noise((x + offset * n4) * noisefx, (y + t + offset * n4) * noisefy, f);

  z.strokeWeight(sz1);

  let rr = random();
  if (rr < 0.5) {
    z.erase();
    z.push();
    z.noStroke(0);
    z.fill(0);
    z.translate(x + d_x / 2, y + d_y / 2);
    z.rect(0, 0, d_x, d_y);
    z.pop();
    z.noErase();
  }

  z.push();

  z.stroke(bgC1);
  z.strokeWeight(sz1);
  z.noFill();
  z.translate(x + d_x / 2, y + d_y / 2);
  z.rect(0, 0, d_x, d_y);
  z.pop();

  t += 0.0042;
  f += 0.00042;
}
//bamboozle by pixelwank
//finished in 2023 for fxhash
function ifs(x, y, d_x, d_y, depth) {
  const a = random(0.15, 1);

  if ((a < 0.1) | (depth > 3)) {
    draw_box(x, y, d_x, d_y);
    return;
  }

  const n_x = floor(random(1, 3));
  const n_y = floor(random(1, 3));
  const new_d_x = d_x / n_x;
  const new_d_y = d_y / n_y;

  for (let x_i = 0; x_i < n_x; x_i++) {
    for (let y_i = 0; y_i < n_y; y_i++) {
      ifs(x + x_i * new_d_x, y + y_i * new_d_y, new_d_x, new_d_y, depth + dep);
    }
  }
  //bamboozle by pixelwank
  //finished in 2023 for fxhash
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas("Bamboozle-Pixelwank-" + fxhash, "png");
  }

  if (key === "2") {
    pixelDensityFactor = 2;
    preDraw(2);
  }

  if (key === "4") {
    pixelDensityFactor = 4;
    preDraw(4);
  }

  if (key === "6") {
    pixelDensityFactor = 6;
    preDraw(6);
  }

  if (key === "8") {
    pixelDensityFactor = 8;
    preDraw(8);
  }

  if (key === "g") {
    pixelDensityFactor = 10;
    preDraw(10);
  }
}

//thanks for making it this far <3
