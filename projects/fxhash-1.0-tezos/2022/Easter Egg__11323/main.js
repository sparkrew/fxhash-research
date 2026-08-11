window.$fxhashFeatures = {};
var hatchTime =
  1650192187553 + rndInt(1 * 24 * 60 * 60 * 1000, 60 * 24 * 60 * 60 * 1000);

var hatched = false;
var drawnHatched = false;

var clickedCounter = 0;

showInfo = false;

const BG_COLOR = "rgba(255,255,255,1)";
const BG_STROKES = "rgba(0,0,0,1)";
const BG_STROKE_WIDTH = rndFloat(0.05, 0.05);
let BG_TICKS_MAX = 1000;
let STROKE_TICKS_MAX = 10000;
let bgTicks = 0;
let strokeTicks = 0;
let rad = 300;
let w = 900;
let h = 600;
let x = width / 2;
let y = height / 2;
let ratioSpeed = 0.15;
let ratioPointAmount = rndInt(15, 15);
var dance = false;
let rndMouth = rndFloat();
var hasTeeth = rndMouth < 1 / 3;
var hasBeak = !hasTeeth && rndMouth < 2 / 3;

var maxHairTicks = 18000;
var maxEggTicks = 3000;
var maxFurTicks = 10000;
var maxEarTicks = 7000;
var maxEyeBrowTicks = 6000;
var maxTeethTicks = 20000;
var maxBeakTicks = 500;

initBg();

let egg = new Egg(new Vec2(width / 2, (height * 4) / 5));

let ticker = 0;

function render() {
  if (paused) {
    window.requestAnimationFrame(render);
    return;
  }
  ticker++;
  if (Date.now() > hatchTime && !hatched) {
    hatched = true;
    renderOnce();
  }
  cArms.clearRect(0, 0, width, height);
  if (hatched) {
    for (let i = 0; i < 20; i++) {
      ears.render(c);
      if (hasTeeth) {
        teeth.render(cforeGround);
      }
      if (hasBeak) {
        beak.render(cforeGround);
      }
    }
    for (let i = 0; i < 100; i++) {
      hair.render(cforeGround);
      eyebrows.render(cforeGround);
    }
    if (dance) {
      arms.render(cArms);
      legs.render(cArms);
    }
  }
  if (showInfo) {
    renderInfo();
  }
  for (let i = 0; i < 20; i++) {
    egg.renderLines(c);
  }

  window.requestAnimationFrame(render);
}
function renderOnce() {
  eyes.renderShape();
}
let hair = new Hair();
let ears = new Ears();
let eyes = new Eyes();
let arms = new Arms();
let legs = new Legs();
let teeth = new Teeth();
let beak = new Beak();
let eyebrows = new Eyebrows();

render();

function renderInfo() {
  let ct = cArms;
  let text = "";
  if (hatched) {
    text = "Born " + new Date(hatchTime).toDateString();
  } else {
    text = "Hatches in " + getTimeString(hatchTime - Date.now());
    if (clickedCounter > 2) {
      text = "Leave me alone. Not ready yet.";
    }
  }
  ct.font = "30px Arial black";
  ct.fillStyle = "rgba(15,15,15,1)";
  let wd = ct.measureText(text).width;
  ct.fillText(text, width / 2 - wd / 2, height - 120);
}
