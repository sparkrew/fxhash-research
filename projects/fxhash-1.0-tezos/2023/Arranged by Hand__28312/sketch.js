function setup() {
  cs = 1200;
  nseed = int(fxrand() * 100000000);
  rseed = int(fxrand() * 100000000);
  mydraw();
}
function mydraw() {
  noiseSeed(nseed);
  randomSeed(rseed);
  makearrays();
  variables();
  createCanvas(csw,csh);
  choosecolours();
  skyback();
  fsandback();
  for(let p=0; p<1;p++){
  fpebbles();
  }
  fxpreview();
}
function variables() {
csw=cs*random(0.8,1.2);
csh=csw*random(1.2,1.6);
}

function mouseClicked() {}

function keyTyped() {
  if (key === "h" || key==="H") {
    clear();
    cs=4000;
    mydraw();
  }
}
