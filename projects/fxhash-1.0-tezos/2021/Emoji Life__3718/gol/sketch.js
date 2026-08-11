let grid;
// for coarse loop detection
let grid2back;
let dupeCount;

let a = null;
let b = null;
let bat_a, bat_b;

let size_emoji, size_frag;
let hoff, voff;
let mobile_scaling, desktop_scaling, scaling_factor;

const urlParams = new URLSearchParams(window.location.search);
const cycle_mode = urlParams.get('cycle') !== null;

var yellows = [
  '#f77622',
  '#feae34',
  '#fee761',
];
var greens = [
  '#63c74d',
  '#3e8948',
];
var blues = [
  '#124e89',
  '#0099db',
  '#2ce8f5',
  '#ffffff',
];
var reds = [
  '#ff0044',
  '#68386c',
  '#b55088',
  '#f6757a',
  '#e43b44',
  '#f77622',
  '#ead4aa',
  '#e4a672',
];
var grays = [
  '#ead4aa', '#e8b796', '#c0cbdc', '#8b9bb4', '#5a6988', '#3a4466', '#ffffff'
];
var palettes = [
  yellows, yellows, greens.concat(blues), blues.concat(greens), reds, reds,
  grays, grays
];
var pal;

function windowResized() {
  // select mobile or desktop sizes
  var scaling = innerWidth < 1000 ? mobile_scaling : desktop_scaling;
  var size_font = scaling[0];
  var factor_gap = scaling[1];

  // set the font accordingly and measure the width of each emoji
  textSize(size_font);
  size_emoji = Math.max(textWidth(a), textWidth(b));
  size_frag = size_emoji * factor_gap;

  // set p5's canvas to match window size
  resizeCanvas(innerWidth, innerHeight);
  wid = Math.floor(width / size_frag);
  hei = Math.floor(height / size_frag);

  // some nudges in here discovered from manual testing
  hoff = (width % size_frag) * 0.5;
  voff = size_emoji * 0.8 + (height % size_frag) * 0.5;
}

function init() {
  // populate grid
  grid = [];
  for (var i = 0; i < wid * hei; i++) {
    grid.push(fxrand() < 0.5 ? 1 : 0);
  }
  dupeCount = 0;
  grid2back = [];
}

function pickEmoji() {
  bat_a = Math.floor(fxrand() * emoji.length);
  bat_b = Math.floor(fxrand() * emoji.length);
  while (bat_a === bat_b) {
    // dedupe
    bat_b = Math.floor(fxrand() * emoji.length);
  }
  a = emoji[bat_a][Math.floor(fxrand() * emoji[bat_a].length)];
  b = emoji[bat_b][Math.floor(fxrand() * emoji[bat_b].length)];

  var idxPal = fxrand() < 0.5 ? bat_a : bat_b;
  pal = palettes[idxPal][Math.floor(fxrand() * palettes[idxPal].length)];

  // set favicon dynamically
  data_pre =
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctext%20y%3D%2224%22%20font-size%3D%2224%22%3E';
  data_post = '%3C%2Ftext%3E%3C%2Fsvg%3E';
  var icon = document.getElementById('favi');
  icon.href = data_pre + a + data_post;
  document.title = b;
}

function setup() {
  let cnv = createCanvas();
  cnv.id('gridCanvas');

  frameRate(15);

  var scaling_roll = fxrand() < 0.5;
  mobile_scaling = scaling_roll ? [16, 1.0] : [24, 1.0];
  desktop_scaling = scaling_roll ? [24, 1.0] : [32, 1.0];

  pickEmoji();
  windowResized();
  init();

  // assign them to the $fxhashFeatures object
  window.$fxhashFeatures = {
    Live: a,
    Dead: b,
  };
}

function nextState(grid) {
  var ng = [...grid];
  for (var u = 0; u < wid; u++) {
    for (var v = 0; v < hei; v++) {
      // cell (5) and neighbors
      let _7, _8, _9;
      let _4, _5, _6;
      let _1, _2, _3;

      var udec = (u - 1) < 0 ? (wid - 1) : (u - 1);
      var vdec = (v - 1) < 0 ? (hei - 1) : (v - 1);
      var uinc = (u + 1) % wid;
      var vinc = (v + 1) % hei;

      _5 = u + v * wid;

      _7 = udec + vinc * wid;
      _8 = u + vinc * wid;
      _9 = uinc + vinc * wid;

      _4 = udec + v * wid;
      _6 = uinc + v * wid;

      _1 = udec + vdec * wid;
      _2 = u + vdec * wid;
      _3 = uinc + vdec * wid;

      // count liveness
      var count = grid[_1] + grid[_2] + grid[_3] + grid[_4] + grid[_6] +
          grid[_7] + grid[_8] + grid[_9];
      if (count === 2 || count === 3) {
        ng[_5] = (count === 3 || grid[_5] === 1) ? 1 : 0;
      } else {
        ng[_5] = 0;
      }
    }
  }
  return ng;
}


function draw() {
  background(pal);

  // update
  // ----------------
  grid = nextState(grid);

  // draw
  // ----------------
  for (var u = 0; u < wid; u++) {
    for (var v = 0; v < hei; v++) {
      var _u = (u * size_frag);
      var _v = (v * size_frag);
      var idx = grid[u + v * wid] > 0 ? a : b;
      text(idx, _u + hoff, _v + voff);
    }
  }

  if (frameCount % 2 === 0) {
    if (grid.length === grid2back.length && grid.every(function(el, idx) {
          return el === grid2back[idx]
        })) {
      dupeCount += 1;
    }
    if (dupeCount > 5) {
      if (cycle_mode) {
        pickEmoji();
      }
      init();
    } else {
      grid2back = [...grid];
    }
  }
}
