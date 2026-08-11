var cl = [
  "#69d2e7",
  "#a7dbd8",
  "#e0e4cc",
  "#f38630",
  "#fa6900",
  "#fe4365",
  "#fc9d9a",
  "#f9cdad",
  "#c8c8a9",
  "#83af9b",
  "#ecd078",
  "#d95b43",
  "#c02942",
  "#542437",
  "#53777a",
  "#556270",
  "#4ecdc4",
  "#c7f464",
  "#ff6b6b",
  "#c44d58",
  "#774f38",
  "#e08e79",
  "#f1d4af",
  "#ece5ce",
  "#c5e0dc",
  "#e8ddcb",
  "#cdb380",
  "#036564",
  "#033649",
  "#031634",
  "#490a3d",
  "#bd1550",
  "#e97f02",
  "#f8ca00",
  "#8a9b0f",
];

let pal = [
  "#69d2e7",
  "#a7dbd8",
  "#e0e4cc",
  "#f38630",
  "#fa6900",
  "#fe4365",
  "#fc9d9a",
  "#f9cdad",
  "#c8c8a9",
  "#83af9b",
  "#ecd078",
  "#d95b43",
  "#c02942",
  "#542437",
  "#53777a",
  "#556270",
  "#4ecdc4",
  "#c7f464",
  "#ff6b6b",
  "#c44d58",
  "#774f38",
  "#e08e79",
  "#f1d4af",
  "#ece5ce",
  "#c5e0dc",
  "#e8ddcb",
  "#cdb380",
  "#036564",
  "#033649",
  "#031634",
  "#490a3d",
  "#bd1550",
  "#e97f02",
  "#f8ca00",
  "#8a9b0f",
];

let dx = 0;
let dy = 0;
let dz = 0;

var col = [];

var na;

var num = 70;

let gr = 124;
var r = 1200;
var pv = [];

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

  createCanvas(windowWidth, windowHeight);

  //    button = createButton('save');

  //   button.position(50,height-50);
  //   button.style('width','145px');
  //   button.mousePressed(function(){
  //     save('colored.png');
  //   });

  smooth();

  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      pv.push(createVector(i * gr, j * gr));
    }
  }

  // background (cl[int(random(5))]);
  // background (cl[2]);

  background(0);
}

function draw() {
  background(0, 3);

  na = na + 0.4;

  push();

  translate(width / 2, height / 2);
  rotate(radians(frameCount * 0.1));
  scale(1 + sin(radians(frameCount * 0.15)));

  for (var i = 0; i < pv.length; i++) {
    var a = map(pv[i].x, 0, 600, -PI, PI);

    var b = map(pv[i].y, 0, 600, HALF_PI, -HALF_PI);

    let nv = noise(
      dx,
      dy,
      dz * i * 0.0049141 * sin(radians(frameCount * 0.05))
    );

    var x = r * sin(a) * cos(b);
    var y = r * sin(a) * sin(b);
    var z = r * cos(a);

    var r1 = r + sin(a) * cos(b);

    r1 = r / 2 + nv * 600;

    //     var x1 = r1*sin(a)*cos(b);
    //     var y1 = r1*sin(a)*sin(b);
    //     var z1 = r1*cos(a);

    var x1 = r1 * sin(a) * cos(b);
    var y1 = r1 * cos(b * a) * cos(-b);
    var z1 = r1 * cos(b * a);

    //  rotate(PI/180*mouseX);
    // rotateY(frameCount*a/b*.001);

    push();

    translate(x1, y1, z1);

    //  scale(1+frameCount*.001);

    // rotate(frameCount*a*b*.01);

    let co = lerpColor(color(random(pal)), color(random(pal)), nv);

    let co2 = color(
      random(pal) - red(co),
      random(pal) - green(co),
      random(pal) - blue(co)
    );

    co.setAlpha(255 * nv);
    stroke(co);
    strokeWeight(2);

    point(0, 0, 0);

    stroke(random(pal), random(pal), random(pal), 255 * nv);
    point(x, y1, z);

    pop();
    noFill();
  }

  pop();

  dx += 0.001;
  dy += 0.0021;
  dz += 0.00041;
}
