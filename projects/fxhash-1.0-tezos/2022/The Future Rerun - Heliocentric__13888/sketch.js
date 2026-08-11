var NUM_LINES;
var t;
var times;
var l;
var glow;
var systemType;
var solSys;
var orb;
var orbs;

function setup() {
  initializeFields();
  randomSeed(seed);
  t = random(times);
  orb = random(orbs) / 10;
  l = windowHeight / 8;
  solSys = random(systemType);
  glow = random(glows);
  pyro = random(pyros);

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  strokeJoin(ROUND);

  window.$fxhashFeatures = {
    SystemSize: orb,
    PlanetFormation: solSys,
    StarPyrometer: pyro,
    StarGlow: glow,
  };
}

function x1(t) {
  return sin(t / q) * l;
}

function draw() {
  background(10, 10, 10, 220);
  translate(width / 2, height / 2);

  //FRAME
  push();
  rectMode(CENTER);
  strokeWeight(4);
  stroke(glow);
  noFill();
  drawingContext.shadowColor = glow;
  drawingContext.shadowBlur = 8;
  rect(0, 0, l * 7, l * 7, 20);
  pop();

  //SUN FLARE
  push();
  for (let n = 0; n < pyro / 10; n++) {
    let dust = random(PI * 2);
    let radi =
      l * (1 - random(random(random(random(random(random(random())))))));
    stroke(glow);
    strokeWeight(2.5);
    point(cos(dust) * radi, sin(dust) * radi);

    point(cos(dust) * radi * 1.01, sin(dust) * radi * 1.01);
  }
  pop();


  //SUN
  push();
  for (let n2 = 0; n2 < pyro; n2++) {
    let dust2 = random(PI * 2);
    let radi2 = l * (1 - random()); //(1 -
    stroke(glow);
    strokeWeight(2.5);
    point(cos(dust2) * radi2, sin(dust2) * radi2);
  }
  pop();

  //THREE-BODY
  if (solSys == "THREE-BODY") {
    for (var i3 = 0; i3 < NUM_LINES; i3++) {
      //orbt1
      push();
      rotate(PI / orb);
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i3) * 1.1, x1(t / orb + i3) * 1.1);
      strokeWeight(6 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * 1.1, x1(t / orb) * 1.1);
      pop();

      //orbt2
      push();
      rotate(PI / (orb * orb));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i3) * orb * 1.01, x1(t / orb + i3) * orb * 1.01);
      strokeWeight(15 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.01, x1(t / orb) * orb * 1.01);
      pop();

      //orbt3
      push();
      rotate(PI / (orb * orb * orb));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i3) * orb * orb, x1(t / (orb * orb) + i3) * orb * 1.05);
      strokeWeight(5 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);

      point(x1(t) * orb * orb, x1(t / (orb * orb)) * orb * 1.05);
      pop();
    }
    t += 0.15;
  }
  //LONER
  else if (solSys == "LONER") {
    for (var i1 = 0; i1 < NUM_LINES; i1++) {
      push();
      rotate(PI / orb);
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i1) * orb, x1(t / orb + i1) * orb);
      strokeWeight(16 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;

      stroke(glow);
      point(x1(t) * orb, x1(t / orb) * orb);

      pop();
    }

    t += 0.15;
  }
  //DUO
  else if (solSys == "DUO") {
    for (var i2 = 0; i2 < NUM_LINES; i2++) {
      push();
      rotate(PI / orb);
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i2) * orb, x1(t / orb + i2) * orb);
      strokeWeight(6 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb, x1(t / orb) * orb);
      pop();

      //orbt2
      push();
      rotate(PI / (orb * orb));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i2) * orb * 1.2, x1(t / orb + i2) * orb * 1.2);
      strokeWeight(12 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.2, x1(t / orb) * orb * 1.2);
      pop();
    }
    t += 0.15;
  } else if (solSys == "ATOMIC") {
    for (var i6 = 0; i6 < NUM_LINES; i6++) {
      push();
      rotate(radians(0));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i6) * orb * 1.1, x1(t / orb + i6) * orb * 1.1);
      strokeWeight(10 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.1, x1(t / orb) * orb * 1.1);
      pop();

      push();
      rotate(radians(120));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i6) * orb * 1.1, x1(t / orb + i6) * orb * 1.1);
      strokeWeight(10 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.1, x1(t / orb) * orb * 1.1);
      pop();

      push();
      rotate(radians(240));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + i6) * orb * 1.1, x1(t / orb + i6) * orb * 1.1);
      strokeWeight(10 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.1, x1(t / orb) * orb * 1.1);
      pop();
    }
    t += 0.15;
  } else if (solSys == "TWINS") {
    for (var iTwin = 0; iTwin < NUM_LINES; iTwin++) {
      push();
      rotate(radians(0));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + iTwin) * orb * 1.1, x1(t / orb + iTwin) * orb * 1.1);
      strokeWeight(10 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.1, x1(t / orb) * orb * 1.1);
      pop();

      push();
      rotate(radians(180));
      stroke(glow);
      strokeWeight(1.5);
      point(x1(t + iTwin) * orb * 1.1, x1(t / orb + iTwin) * orb * 1.1);
      strokeWeight(10 * orb);
      drawingContext.shadowColor = glow;
      drawingContext.shadowBlur = 2;
      stroke(glow);
      point(x1(t) * orb * 1.1, x1(t / orb) * orb * 1.1);
      pop();
    }
    t += 0.15;
  }
  
}

function initializeFields() {
   seed = float(fxrand() * 10000000);
  systemType = [
    "LONER",
    "DUO",
    "TWINS",
    "THREE-BODY",
    "ATOMIC"];

  NUM_LINES = 63;
  orbs = [13, 14, 14, 15, 15, 16];
  times = [30, 40, 70, 100, 120, 200, 300, 400, 500,600];
  pyros = [200, 300, 300, 400, 500];
  q = 10;

  glows = [
    "dodgerblue",
    "hotpink",
    "wheat",
    "salmon",
    "linen",
    "greenyellow",
    "chartreuse",
    "palegreen",
    "tomato",
    "red",
    "gold",
    "skyblue",
    "cyan",
    "orange",
  "coral",
  "magenta",
  "orangered",
  "plum"];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
