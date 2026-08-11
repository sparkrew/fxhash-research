(p5.disableFriendlyErrors = !0), (document.title = "fx(Unit of truth) II");
const isCentered = !0;
let size,
  rn,
  ty,
  bg_color,
  _bg = [],
  _layer = [],
  rot = [],
  pos = [],
  nojz = [],
  nx = [],
  speed = 0.01,
  _bgRnd = 0;
let n = 3;
let x = 0;
let y = 0;
let color1, color2, color3, color4, color5, color6;
let gap = 3;
let grid;
let opacity;
let colors = [];
let inter = [];

function setup() {
  frameRate(30),
    (size = min(windowWidth, windowHeight)),
    createCanvas(size, size);

  _bg[0] = color(20, 20, 22);
  _bg[1] = color(230, 132, 34);
  _bg[2] = color(0, 50, 255);
  _bg[3] = color(153, 0, 0);
  _bg[4] = color(0, 255, 0);
  _bgRnd = floor(get_random(0, 4));

  blue = color(28, 49, 255, floor(get_random(160, 200)));
  _0000ff = color(0, 0, 255, floor(get_random(160, 200)));
  _80ff00 = color(128, 255, 0, floor(get_random(160, 200)));
  _ff00ff = color(255, 0, 255, floor(get_random(160, 200)));
  _ff8000 = color(255, 128, 0, floor(get_random(160, 200)));
  _0080ff = color(0, 128, 255, floor(get_random(160, 200)));
  _e6b422 = color(230, 180, 34, floor(get_random(160, 200)));
  _e95295 = color(233, 82, 149, floor(get_random(160, 200)));
  _ffd900 = color(255, 217, 255, floor(get_random(160, 200)));
  red = color(215, 38, 61, floor(get_random(160, 200)));
  yellow = color(255, 186, 8, floor(get_random(160, 200)));
  coral = color(247, 135, 100, floor(get_random(160, 200)));
  turquoise = color(0, 191, 178, floor(get_random(160, 200)));
  black = color(0, 0, 0, floor(get_random(160, 200)));
  white = color(256, 256, 256, floor(get_random(160, 200)));

  colors = [
    blue,
    red,
    yellow,
    coral,
    turquoise,
    _0000ff,
    _80ff00,
    _ff00ff,
    _ff8000,
    _0080ff,
    _e6b422,
    _e95295,
    _ffd900,
  ];

  reset_all();
}

function reset_all() {
  for (let e = 0; e < n; e++)
    (rot[e] = get_random(-0.05, 0.05)),
      (pos[e] = createVector(get_random(-0.001, 0.001), get_random(-0.001, 0.001))),
      (nx[e] = get_random(0, 99999));

  bg_color = _bg[_bgRnd];
  background(bg_color);
  //changeBackground(bg_color);
  grid = floor(get_random(30, 120) / 5) * 5;
    gap = floor((size / grid / 8) * 5);

  console.log("size:" + size + ",grid:" + grid + ",gap:" + gap);

  for (let e = 0; e < n; e++) {
    x = 0;
    y = 0;
    from = color(colors[floor(get_random(0, 12))]);
    to = color(colors[floor(get_random(0, 12))]);

    while (from == to) {
      to = color(colors[floor(get_random(0, 13))]);
    }
    inter.length = 0;

    for (let i = 0; i < grid; i++) {
      inter[i] = lerpColor(from, to, i / grid);
    }

    (_layer[e] = createGraphics(size, size)), _layer[e].push();

    switch (e) {
      case 0:
        color1 = from;
        color2 = to;
        break;
      case 1:
        color3 = from;
        color4 = to;
        break;
      case 2:
        color5 = from;
        color6 = to;
        break;

      default:
        break;
    }

    for (let i = 0; i < grid; i++) {
        _layer[e].fill(inter[i]).noStroke();
        for (let i = 0; i < grid; i++) {
          _layer[e].rect(x, y, size / grid).noStroke();

          x += size / grid + gap;
        }
        x = 0;
        y += size / grid + gap;
      }


    _layer[e].pop();
  }

  window.$fxhashFeatures = {
    "Color 1": color1.toString(),
    "Color 2": color2.toString(),
    "Color 3": color3.toString(),
    "Color 4": color4.toString(),
    "Color 5": color5.toString(),
    "Color 6": color6.toString(),
    "background": bg_color.toString(),
    "Grid": grid,
    "Gap": gap,
  };
}
function changeBackground(e) {
  document.body.style.backgroundColor = e;
}


function draw() {
  background(bg_color);
  //console.log(grid);
  for (let e = 0; e < n; e++)
  push(),
      (nojz[e] = map(noise(nx[e]), -1, 1, -PI, PI)),
      (nx[e] += speed),
      translate(
        pos[e].x * size + cos(nojz[e]) * size * 0.015,
        pos[e].y * size + sin(nojz[e]) * size * 0.015
      ),
   //   image(_layer[e], 0, 0, size*(1-e*(1/grid)), size*(1-e*(1/grid))),

      image(_layer[e], 0+(size*(e*(1/grid)/2))-size*0.025, 0+(size*(e*(1/grid)/2))-size*0.025, size*(1-e*(1/grid))*1.05, size*(1-e*(1/grid))*1.05),
      pop();  
  noStroke(), 20 == frameCount && fxpreview();
}
function keyPressed() {
  ("s" !== key && "S" !== key) || save("UT");
}

function get_random(e, o) {
  return e + fxrand() * (o - e);
}
