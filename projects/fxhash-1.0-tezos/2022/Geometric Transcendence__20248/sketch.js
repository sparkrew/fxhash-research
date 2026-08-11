const pal = [
  ["#a90014", "#62191f", "#41140a", "#111111", "#f4e3d5"],
  ["#f1b052", "#d46283", "#264981", "#755f76", "#69743c"],
  ["#4146A6", "#063573", "#5EC8F2", "#8C4E03", "#D98A29"],
  ["#FFA83B", "#ECB7C5", "#BA2A2A", "#FFDDB3", "#9BBFC9"],
  ["#d4b84a", "#85211f", "#7d3638", "#57757a", "#2b5c66", "#242936"],
  ["#0095cf", "#007fc8", "#0061bd", "#003f9c", "#031155", "#030643"],
  ["#ff566c", "#ec3c56", "#c9002c", "#a90014", "#62191f", "#47100c"],
  ["#f9f9f5", "#191917", "#9dd2ba", "#333436", "#c8c8c7", "#968378"],
  ["#8ac0ea","#fcf9f2","#fac3bf","#dce87c","#464d4e","#5d91b6","#768448","#dbecf2","#312f2b"],
  ["#cce4fc","#d3bb9c","#2c2722","#f9f6ee","#484235","#a3c2eb","#95836b","#c84b56","#cce4fc"],
  ["#F2F2F2","#BFBFBF","#8C8C8C","#0D0D0D","#010101","#FAF9F6","##F8F0E3"],
  ["#03071e","#370617","#6a040f","#9d0208","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"],
  ["#d9cfc5","#da595a","#f18d3e","#ffc83d","#bdaa76","#59535f"],
  ["#240046","#3c096c","#5a189a","#7b2cbf","#9d4edd","#c77dff","#e0aaff"],
  ["#b7094c", "#a01a58", "#892b64", "#723c70", "#5c4d7d", "#455e89", "#2e6f95", "#1780a1", "#0091ad"],
];
palNames = [
  "Blood Moon",
  "Oregon Sunsets",
  "Monet",
  "Renoir",
  "Thermal",
  "Into the Depths",
  "Summer",
  "Extraterrestrial",
  "A Day in the Park",
  "Midwest",
  "Noir",
  "Underworld",
  "Cyberpunk",
  "Grimace",
  "Cotton Candy",
];
let circ = [], w = 2e3, gC, resp = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
function setup() {
  preDraw(),
    (palC = floor(random(1, 15))),
    (PalName = palNames[palC]),
    noStroke(),
    smooth(),
    noLoop(),
    (gC = createGraphics(width, height)).noFill(),
    gC.stroke(0),
    gC.strokeWeight(1),
    shapeConfig(),
    (border = random(1)),
    (window.$fxhashFeatures = {
      Palettes: PalName,
      Border: getFeatureString("border", border),
    });
}
function getFeatureString($, e) {
  if ("border" == $) return e < 0.88 ? "Yes" : "No";
}

function draw() {
  border < 0.88 &&
    ((bs = 100),
    push(),
    rectMode(CENTER),
    noFill(),
    stroke("blanchedalmond"),
    strokeWeight(bs),
    rect(width / 2, height / 2, width, height),
    pop()),
      drawTexture(),
    fxpreview();
}
function circleForm() {
  let $ = random(kaos = [22, 50, 70, 80, 100, 200, 500, 700, 800, 1e3, 1200, 1500, 1600, 1800]),
    e = random(kaos);
  for (var r, a = !1, c = 0; c < 10; c++)
    if (
      !rekt(
        (r = {
          x: int(random(0.1 * width, 0.8 * width)),
          y: int(random(0.1 * height, 0.8 * height)),
          radius: $,
        })
      )
    ) {
      a = !0;
      break;
    }
  if (a) {
    for (var _ = $; _ < e; _++) {
      if (((r.radius = _), rekt(r))) {
        r.radius--;
        break;
      }
      print("kaos", $);
    }
    circ.push(r);
    for (var f = floor(random(1, 2)); f >= -1; f--) {
      fill(color(random(pal[palC])));
      var n = 1 * r.radius + f * random(300, 700);
      n > 150 &&
        (rect(r.x, r.y, n), circle(r.x, r.y, n), gC.circle(r.x, r.y, n));
    }
  }
}
function rekt($) {
  for (var e = 0; e < circ.length; e++) {
    var r = circ[e],
      a = $.radius + r.radius,
      c = $.x - r.x,
      _ = $.y - r.y;
    if (a >= Math.sqrt(c * c + _ * _)) return !0;
  }
  return !1;
}
function lineForm() {
  let $ = random() > 0.5 ? 0 : width,
    e = int(random(1 * width * 0.8)),
    r = int(random(1 * width, width));
  beginShape(),
    vertex(e, 0),
    vertex ($, 0),
    vertex($, width),
    vertex(r, height),
    endShape();
}
function shapeConfig() {
  background(palC), blendMode(DIFFERENCE), (circuit = int(random(5, 25)));
  for (var $ = 0; $ < circuit; $++) circleForm();
  lineForm(), blendMode(DIFFERENCE), blendMode(ADD), rSC();
}
function rSC() {
  let $ = [],
    e = [...$];
  for (var r = 0; r < random(5, 20); r++)
    if (
      ($.sort(() => (random() > 0.5 ? 1 : -1)),
      e.sort(() => (random() > 0.5 ? 1 : -1)),
      $.length > 0)
    ) {
      let a = random(100, 1e3),
        c = $.pop(),
        _ = e.pop();
      line(c, _, a), gC.circle(c, _, a);
    }
}

function div($, e, r, a) {
  let c;
  $ > r && ((c = $), ($ = r), (r = c), (c = e), (e = a), (a = c));
  let _ = r - $,
    f = a - e,
    n = 1;
  r < $ && (n = -n);
  let t = $,
    i = e;
  for (let d = $ + n; d <= r; d += n) {
    let o = e + (n * f * (d - $)) / _;
    strokeWeight(1 + (noise(t, i), int(random(-1,1)))),
      line(t, i, d + (noise(d, o), int(random(-1,5))), o + (noise(d, o), int(random(-1,5)))),
      (t = d), (i = o);
  }
}
function drawTexture() {
  for (let $ = -width; $ < height + width; $ += 13)
    stroke(255, 23), div($, 0, $ + height, height);
  for (let e = height + width; e >= -width; e -= 13)
    stroke(255, 23), div(e, 0, e - height, height);
}
function preDraw() {
  let $ = floor(999999 * fxrand());
  randomSeed($), noiseSeed($);
  createCanvas(0.75 * w, w).parent("fulllscreen"), pixelDensity(8);
}
function keyTyped() {
  ("s" === key || "S" === key) &&
    saveCanvas("GeometricTranscendence-Freeimp-Fxhash", "png");
}
