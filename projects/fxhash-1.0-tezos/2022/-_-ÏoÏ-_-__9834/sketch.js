var inc = fxrandRange(10, 22, 0.1);
var scl = fxrandRange(10, 120, 1);
var magv = fxrandRange(0.1, 10, 0.1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(0, 200, 1);
var cg = fxrandRange(100, 110, 1);
var cb = fxrandRange(200, 250, 1);
var dr = fxrandRange(0, 100, 1);
var dg = fxrandRange(150, 200, 1);
var db = fxrandRange(1, 150, 1);
var sizecirc = fxrandRange(5, 20, 1);
var sizecirc2 = fxrandRange(200, 500, 1);
var indexk = 0;
var sw1 = fxrandRange(0.1, 0.5, 0.1);
var sw2 = fxrandRange(0.1, 0.5, 0.1);
var mes1a = fxrandRange(0.1, 4, 0.1);
var mes2a = fxrandRange(0.1, 8, 0.1);
var mes1b = fxrandRange(2, 4, 0.1);
var mes2b = fxrandRange(2, 4, 0.1);

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 200; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      fxrandRange(10, 300, 1),
      fxrandRange(10, 400, 1),
      sw1
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      fxrandRange(90, 300, 1),
      fxrandRange(10, 200, 1),
      sw2
    );
  }
  for (i = 0; i < 200; i++) {
    particles3[i] = new Particle3(
      70,
      70,
      70,
      fxrand() * i * 8,
      fxrand() * i * 8 + windowHeight / mes2b,
      sw2,
      3
    );
  }
  // background(235, 215, 141);
  background(colback);
}

function draw() {
  if (indexk > 200) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = fxrand() * xoff;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magv);
      xoff += inc;
      // stroke(255, 130);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(0.1);
      // line(0, 0, scl, 0);
      // pop(); //fill(r);

      //rect(scl * x, scl * y, scl, scl);
    }
    yoff += inc;
    zoff += 0.0008;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  for (var i = 0; i < particles2.length; i++) {
    particles2[i].follow(flowfield);
    particles2[i].update();
    particles2[i].edges();
    particles2[i].show();
  }
  for (var i = 0; i < particles3.length; i++) {
    particles3[i].follow(flowfield);
    particles3[i].update();
    particles3[i].edges();
    particles3[i].show();
  }
  push();
  rectMode(RADIUS);
  //fill(255, 1 * sin(millis() * 3000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
  indexk = indexk + 1;

  //console.log(indexk);
  // fill(0);
  push();
  stroke(0);
  strokeWeight(sizecirc);
  ellipse(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth - sizecirc2,
    windowHeight - sizecirc2
  );
  if (indexk > 150) {
    strokeWeight(0.3);
    stroke(120);
    ellipse(
      windowWidth / 2,
      windowHeight / 2,
      windowWidth - sizecirc2,
      windowHeight - sizecirc2
    );
  }
  stroke(0);
  strokeWeight(30);
  rect(15, 15, windowWidth - 30, windowHeight - 30);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  indexk = 0;
  loop();
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 200; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      fxrandRange(10, 300, 1),
      fxrandRange(10, 400, 1),
      sw1
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      fxrandRange(90, 300, 1),
      fxrandRange(10, 200, 1),
      sw2
    );
  }
  for (i = 0; i < 200; i++) {
    particles3[i] = new Particle3(
      70,
      70,
      70,
      fxrand() * i * 8,
      fxrand() * i * 8 + windowHeight / mes2b,
      sw2,
      3
    );
  }

  push();
  noStroke();
  background(colback);

  fill(colback);
  //fill(alpha(50));
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );

  //
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  push();
  stroke(0);
  strokeWeight(sizecirc);
  ellipse(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth - sizecirc2,
    windowHeight - sizecirc2
  );
  if (indexk > 150) {
    strokeWeight(0.3);
    stroke(120);
    ellipse(
      windowWidth / 2,
      windowHeight / 2,
      windowWidth - sizecirc2,
      windowHeight - sizecirc2
    );
  }
  stroke(0);
  strokeWeight(30);
  rect(15, 15, windowWidth - 30, windowHeight - 30);
  pop();
}

function fxrandRange(min, max, step) {
  value = Math.round((fxrand() * (max - min)) / step);
  return value * step + min;
}

window.$fxhashFeatures = {
  Dr: magv,
  Ag: inc,
  On: scl,
};
