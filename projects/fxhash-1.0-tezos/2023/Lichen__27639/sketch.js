function setup() {
  cs = 1000;
  scl = 3;
  uc = 0;
  nseed = int(fxrand() * 100000000);
  rseed = int(fxrand() * 100000000);
  mydraw(cs);
}
function mydraw(cs) {
  noiseSeed(nseed);
  randomSeed(rseed);
  makearrays(cs);
  variables();
  choosecolours();
  grid();
  lichenback();
  pastel();
  lichen(int(random(12, divx - 12)), int(random(12, divy - 12)));
  image(lm, 0, 0);
  for (let q = 0; q < bus; q++) {
    lngrowth();
  }
  image(ln, 0, 0);
  fxpreview();
}

function variables() {
  mc = "";
  divw = int(h[scl]);
  divx = int(random(180, 290)) * 3;
  divy = int(random(140, 250)) * 3;
  bivw = int(h[scl * 3]);
  bivx = divx / 3;
  bivy = divy / 3;
  csw = divw * divx;
  csh = divw * divy;
  bus=int(random(7,11));print("bus",bus);
  createCanvas(csw, csh);
  lm = createGraphics(csw, csh);
  ln = createGraphics(csw, csh);
  if (features.primary == "Round") {
    limh = 1;
    limv = 1;
  }
  if (features.primary == "Vertical") {
    limh = random(0.3, 0.5);
    limv = 1;
  }
  if (features.primary == "Horizontal") {
    limh = 1;
    limv = random(0.3, 0.5);
  }
  if (features.primary == "Loose") {
    limh = random(0.75, 0.9);
    limv = random(0.75, 0.9);
  }
  if (features.secondary == "Round") {
    linh = 1;
    linv = 1;
  }
  if (features.secondary == "Vertical") {
    linh = random(0.3, 0.5);
    linv = 1;
  }
  if (features.secondary == "Horizontal") {
    linh = 1;
    linv = random(0.3, 0.5);
  }
  if (features.secondary == "Loose") {
    linh = random(0.75, 0.9);
    linv = random(0.75, 0.9);
  }
  lilh = random(0.75, 0.9);
  lilv = random(0.75, 0.9);
  print(features.primary, features.secondary);
}
function grid() {
  for (let j = 0; j < bivx; j++) {
    a[j] = [];
    b[j] = [];
    c[j] = [];
    for (let i = 0; i < bivy; i++) {
      cd = createVector(bivw / 2 + bivw * j, bivw / 2 + bivw * i);
      a[j].push(cd);
      b[j].push(cd);
      c[j].push(cd);
    }
  }
  for (let j = 0; j < divx; j++) {
    ba[j] = [];
    bb[j] = [];
    bc[j] = [];
    for (let i = 0; i < divy; i++) {
      cd = createVector(divw / 2 + divw * j, divw / 2 + divw * i);
      ba[j].push(cd);
      bb[j].push(cd);
      bc[j].push(cd);
    }
  }
}
function mouseClicked() {
  mc = "yes";
  colsh = shuffle(colours);
  llichen(int(mouseX / divw), int(mouseY / divw));
}

function keyTyped() {
  if (key === "r" || key === "R") {
    lilh = 1;
    lilv = 1;
  }
  if (key === "v" || key === "V") {
    lilh = random(0.3, 0.5);
    lilv = 1;
  }
  if (key === "h" || key === "H") {
    lilh = 1;
    lilv = random(0.3, 0.5);
  }
  if (key === "l" || key === "L") {
    lilh = random(0.75, 0.9);
    lilv = random(0.75, 0.9);
  }
  if (key === "u" || key === "U") {
    clear();
    print("uc", uc);
    if (uc == 1) {
      image(lm, 0, 0);
    }
    if (uc == 0) {
      image(lm, 0, 0);
      image(ln, 0, 0);
      uc = 1;      
    }
  }
  if (key === "y" || key === "Y") {
    clear();
    image(lm, 0, 0);
    image(ln, 0, 0);
  }
  if (key === "n" || key === "N") {
    clear();
    background(bk1);
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      image(pst, i * psw, j * psh);
    }
  }
    grid();
  }
  if (key === "o" || key === "O") {
    grid();
  }

  if (key === "4") {
    clear();
    scl = 5;
    mydraw(cs);
  }
  if (key === "5") {
    clear();
    scl = 7;
    mydraw(cs);
  }
  if (key === "6") {
    clear();
    scl = 9;
    mydraw(cs);
  }
  if (key === "7") {
    clear();
    scl = 11;
    mydraw(cs);
  }
}
