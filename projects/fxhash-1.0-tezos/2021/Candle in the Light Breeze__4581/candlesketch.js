const density = 400;
const turns = 300;
const curl = 6;
var smoke = [density];
const features = {};
const tablecolour = fxrand();
const platecolour = fxrand();
const candlecolour = fxrand();
features.tc = "Purple";
features.tr = 30;
features.tg = 9;
features.tb = 45;
features.plc = "Red";
features.plr = 60;
features.plg = 0;
features.plb = 0;
features.cc = "Cream";
features.ccr = 250;
features.ccg = 230;
features.ccb = 100;
if (candlecolour < 0.95) {
  features.cc = "White";
  features.ccr = 200;
  features.ccg = 200;
  features.ccb = 200;
}
if (tablecolour < 0.6) {
  features.tc = "Green";
  features.tr = 6;
  features.tg = 42;
  features.tb = 21;
}
if (tablecolour < 0.3) {
  features.tc = "Brown";
  features.tr = 60;
  features.tg = 30;
  features.tb = 12;
}
if (platecolour < 0.6) {
  features.plc = "Blue";
  features.plr = 20;
  features.plg = 10;
  features.plb = 50;
}
if (platecolour < 0.3) {
  features.plc = "Green";
  features.plr = 10;
  features.plg = 60;
  features.plb = 30;
}
window.$fxhashFeatures = {
  Mood: "Indulgent",
  Candle: "White",
};
if (features.cc === "Cream") window.$fxhashFeatures.Candle = "Cream";
if (features.tc === "Purple" && features.plc === "Red")
  window.$fxhashFeatures.Mood = "Indulgent";
if (features.tc === "Purple" && features.plc === "Blue")
  window.$fxhashFeatures.Mood = "Romantic";
if (features.tc === "Purple" && features.plc === "Green")
  window.$fxhashFeatures.Mood = "Peaceful";
if (features.tc === "Green" && features.plc === "Blue")
  window.$fxhashFeatures.Mood = "Summer";
if (features.tc === "Green" && features.plc === "Red")
  window.$fxhashFeatures.Mood = "Christmas Eve";
if (features.tc === "Green" && features.plc === "Green")
  window.$fxhashFeatures.Mood = "Tasteful";
if (features.tc === "Brown" && features.plc === "Blue")
  window.$fxhashFeatures.Mood = "Masculine";
if (features.tc === "Brown" && features.plc === "Red")
  window.$fxhashFeatures.Mood = "Cosy";
if (features.tc === "Brown" && features.plc === "Green")
  window.$fxhashFeatures.Mood = "Rustic";
var redto;
var cd;
var randomnoiseseed;
function myRandom(low, high) {
  let r = fxrand();
  let t = map(r, 0, 1, low, high);
  return t;
}
function myRedraw() {
  resizeCanvas(windowWidth, windowHeight * 0.95);
  randomSeed(randomnoiseseed);
  myDraw();
}

function myRedrawTO() {
  clearTimeout(redto);
  redto = setTimeout(myRedraw, 1000);
}
window.addEventListener("resize", myRedrawTO);
function setup() {
  createCanvas(windowWidth, windowHeight * 0.95);
  cd = myRandom(80, 160);
  var randomnoiseseed = myRandom(0, 10000);
  noiseSeed(randomnoiseseed);
  stroke(135, 132, 102, 100);
  myDraw(cd);
}
function myDraw() {
  background(0);
  let tr = features.tr;
  let tg = features.tg;
  let tb = features.tb;
  let plr = features.plr;
  let plg = features.plg;
  let plb = features.plb;
  let ccr = features.ccr;
  let ccg = features.ccg;
  let ccb = features.ccb;
  table(cd, tr, tg, tb);
  candle(cd, plr, plg, plb, ccr, ccg, ccb);
  wick(cd);
  smokey();
}
function smokey() {
  for (let i = 0; i < density; i++) {
    let s = myRandom(0, 2 * PI);
    var angle = 0;
    var loc = createVector(width / 2, (2 * height) / 3, myRandom(0, 100));
    var dir = createVector(cos(angle), sin(angle), cos(angle) + sin(angle));
    var speed = 1;
    smoke[i] = new Smoke(loc, dir, speed);
  }
}
class Smoke {
  constructor(_loc, _dir, _speed) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
  }
  run(i) {
    this.move();
    this.update(i);
  }
  move() {
    let angle =
      noise(this.loc.x / turns, this.loc.y / turns, this.loc.z / turns) *
      TWO_PI *
      curl;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle) - 0.6;
    var vel = this.dir.copy();
    var d = 0.9;
    vel.mult(this.speed * d);
    this.loc.add(vel);
  }
  update(i) {
    point(this.loc.x, this.loc.y, this.loc.z);
  }
}
function table(cd, tr, tg, tb) {
  noStroke();
  for (let t = 0; t < int(cd / 3); t++) {
    fill(tr - t / 6, tg - t / 6, tb - t / 6);
    ellipse(width / 2, height - cd / 4 + t, cd * 3.6 + t / 2, cd * 1.2);
  }
  fill(tr / 3, tg / 3, tb / 3, 180);
  ellipse(width / 2, height - cd / 2 + cd / 6, cd * 2.1, cd * 0.7);
  for (let tt = 0; tt < int(cd * 1.8); tt++) {
    for (let a = 0; a < 100; a++) {
      let ran = myRandom(0, 1);
      var tex = createVector(
        width / 2 + cos(a * ran) * ((cd * 3.6) / 2 - tt),
        height - cd / 4 + sin(a * ran) * ((cd * 1.2) / 2 - tt / 3)
      );
      stroke(myRandom(0, 20), myRandom(0, 20), myRandom(0, 20), 90);
      point(tex.x, tex.y);
    }
  }
}
function candle(cd, plr, plg, plb, ccr, ccg, ccb) {
  const pw = cd + 100;
  const ph = pw / 3;
  //plate
  for (let pl = 0; pl < 4; pl++) {
    noStroke();
    fill(plr, plg, plb, 30);
    ellipse(width / 2, height - cd / 2 + pl, pw, ph);
  }
  for (let pr = 0; pr < 16; pr++) {
    fill(plr + pr * 10, plg + pr * 10, plb + pr * 10);
    ellipse(width / 2, height - cd / 2, pw - pr, ph - pr * 0.6);
  }
  for (let p = 16; p < 55; p++) {
    fill(plr * 3 - p, plg * 3 - p, plb * 3 - p);
    ellipse(width / 2, height - cd / 2, pw - p, ph - p * 0.6);
  }
  //candle
  stroke(135, 132, 102, 70);
  fill(ccr, ccg, ccb);
  print(ccr, ccg, ccb, plr, plg, plb);
  for (let h = height - cd / 2; h > (height * 2) / 3 + 25; h--) {
    ellipse(width / 2, h, cd, cd / 3);
  }
  let cr1 = ccr / 2;
  let cr2 = ccg / 2;
  let cr3 = ccb / 2;
  for (let w = cd; w > 0; w -= 3) {
    noStroke();
    fill(cr1 + w * 0.8, cr2 + w * 0.8, cr3 + w * 0.8);
    ellipse(width / 2, (height * 2) / 3 + 25, w, w / 3);
    cr1 += 1;
    cr2 += 1;
    cr3 += 1;
    stroke(135, 132, 102, 70);
  }
}
function wick(cd) {
  fill(20);
  for (let h2 = 0; h2 < 30; h2++) {
    stroke(0);
    ellipse(width / 2 + myRandom(-2, 2), (2 * height) / 3 + 25 - h2, 5, 3);
    stroke(myRandom(200, 255), myRandom(50, 100), 0, 70);
    strokeWeight(6);
    point(width / 2 + myRandom(-2, 2), (2 * height) / 3 + myRandom(-5, 15));
    stroke(135, 132, 102, 100);
    strokeWeight(1);
  }
}
function draw(cd) {
  for (let i = 0; i < smoke.length; i++) {
    smoke[i].run(i);
  }
}
