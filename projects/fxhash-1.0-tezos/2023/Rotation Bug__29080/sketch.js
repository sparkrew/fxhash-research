function setup() {
  cs = 1800;
  bgcount=0;
  nseed = int(fxrand() * 100000000);
  rseed = int(fxrand() * 100000000);
  mydraw();
}
function mydraw() {
  noiseSeed(nseed);
  randomSeed(rseed);
  makearrays();
  variables();
  choosecolours();
  swatch();
  canvas1();
  image(cv, 0, 0);
  fxpreview();
}

function variables() {
  divw = int(random(4, 8)) * 11;
  divh = int(random(3, 7)) * 11;
  d = cs / divw;
  csw = d * divw;
  csh = d * divh;
  dive = divh * 2;
  createCanvas(csw, csh);
  swdiv = int(random(5, 7));
  e = d / 2;
  sclrr = random();
  scl = random(1.7, 3.7);
  if (sclrr < 0.3) scl = random(3.7, 5.7);
  if (sclrr < 0.1) scl = random(5.7, 7.7);
  f = d * scl;
  swd = d / swdiv;
  swe = e / swdiv;
  swf = f / random(14, 21);
  if (sclrr < 0.3) swf = f / random(21, 30);
  if (sclrr < 0.1) swf = f / random(30, 42);
}
function mouseClicked() {}

function keyTyped() {
  if (key === "4") {
    clear();
    cs = 4800;
    mydraw();
  }
  if (key === "5") {
    clear();
    cs = 5800;
    mydraw();
  }
  if (key === "6") {
    clear();
    cs = 6800;
    mydraw();
  }
  if (key === "b" || key ==="B") {
    clear();    
    if(bgcount/2==int(bgcount/2))fbug="Yes";
    if(bgcount/2!=int(bgcount/2))fbug="No";
    bgcount++;
    mydraw();
  }
  if (key === "d" || key ==="D") {
    clear();
    fbgc="Dark";
    mydraw();
  }
  if (key === "l" || key ==="L") {
    clear();
    fbgc="Light";
    mydraw();
  }
  if (key === "r" || key ==="R") {
    clear();
    rdraw();
  }
}
