var déboguer = false;
var activer = false;
var adresse = fxhash.toLowerCase();
var grainesArr = [];
var desgraines = [];
var totaldesgraines = 30;
var _OXGDESL = Math.floor(adresse.length / totaldesgraines);
var _OXGDESLVal = _OXGDESL * 20;
let largeur_de_toile = window.innerWidth;
let _OXTOHU_de_toile = window.innerHeight;
let rembourrage = largeur_de_toile / 8;
let zone_dimpression = largeur_de_toile - rembourrage - rembourrage;
var _OXTOHU = window.innerHeight * 0.9;
var _OXTPERLIG = 233;
var xDécalage = 0;
var Couleur = "#f2f0df";
var palette = [
  ["#222222", "Charcol"],
  ["#ae2012", "Valentine"],
  ["#390099", "Deep Sky"],
  ["#403d39", "Mud"],
  ["#656d4a", "Heena"],
  ["#9e8787", "Castor"],
  ["#3c096c", "Purpy"],
  ["#c44536", "Goldy"],
  ["#353535", "Unlike Black"],
  ["#ff4000", "Orgasmic"],
  ["#fffcf2", "Minted"],
];
var paletteSeed = Math.floor(fxrand() * (palette.length - 1));
grainesArr = _OGDGFH(adresse, _OXGDESL);
grainesArr.forEach((seed, i) => {
  return desgraines.push(mapRange(grainesArr[i], 0, _OXGDESLVal, 0, 100));
});

var xVert = Math.round(mapRange(desgraines[desgraines.length - 4], 0, 100, 8, 15));
var xLinesP = Math.round(mapRange(desgraines[desgraines.length - 5], 0, 100, 8, 15));
var xDens = mapRange(desgraines[desgraines.length - 6], 0, 100, 7, 15);
var _OXWAERLIG = mapRange(desgraines[desgraines.length - 7], 0, 100, 1.8, 20);
var _OXFR = xDens + mapRange(desgraines[desgraines.length - 8], 0, 100, 30, 50);
var avespacex = -(_OXFR * 150) / (xDens * xVert) - (_OXFR - xDens) * 2;
window.$fxhashFeatures = {
  Color: palette[paletteSeed][1],
  "Architect Node": xVert,
  Interpoles: xLinesP,
  Rigidness: getFeatures(xDens, 7, 15),
  Consistency: getFeatures(_OXWAERLIG, 1.8, 20),
  Dimension: getFeatures(_OXFR, 37, 65),
};
console.log("hash", fxhash);
console.log("fxhashFeatures", window.$fxhashFeatures);
function setup() {
  CANVAS = createCanvas(largeur_de_toile, _OXTOHU_de_toile);
  pixelDensity(2);
  randomSeed(fxrand());
  noLoop();
  angleMode(DEGREES);
}
function getFeatures(value, min, max) {
  var percent = mapRange(value, min, max, 0, 1);
  if (percent < 0.2) return "Internal";
  if (percent < 0.4) return "Regular";
  if (percent < 0.6) return "Mediocre";
  if (percent < 0.8) return "Hightech";
  else return "Extreme";
}

function draw() {
  background(Couleur);
  noFill();
  stroke(palette[paletteSeed][0]);
  var select = int(random(1,3));
  strokeWeight(1);
  print(select)
  if (select==1){
    architecture01();
  }
  else{
    architecture02();
  }
}

function architecture01() {
  let _OXDRE = avespacex;
  let _OXDYU = _OXFR * 2;
  let _OXUIU = (_OXDYU * xVert) / 2;
  let _OBUIU = (_OXDRE * (xVert - 1)) / 2;
  let _OXDU = xVert;
  let _OXTO = xLinesP;

  push();
  translate(width / 2 - _OXUIU - _OBUIU + xDécalage, height / 2 - _OXTOHU / 2);

  for (let l = 0; l < _OXDU; l++) {
    let xpos = (_OXDYU + _OXDRE) * l;

    push();
    for (let i = 0; i < _OXTO; i++) {
      let _OXTPER = _OXTPERLIG;
      let _OXWAVWERLIG = _OXWAERLIG;
      let _OXWAEY = _OXFR;

      beginShape();

      for (let p = 0; p < _OXTPER; p++) {
        let osc =
          cos(p * sin(p) * _OXWAVWERLIG) *
          (_OXWAEY * (((i * sin(p)) / xDens) * tan(p)));
        let x = xpos + _OXWAEY + osc;
        let y = map(p, 0, _OXTPER, 0, _OXTOHU);

        curveVertex(x, y);
      }
      endShape();
    }
    pop();
  }
  pop();
}

function architecture02() {
  let _OXDRE = avespacex;
  let _OXDYU = _OXFR * 2;
  let _OXUIU = (_OXDYU * xVert) / 2;
  let _OBUIU = (_OXDRE * (xVert - 1)) / 2;
  let _OXDU = xVert;
  let _OXTO = xLinesP;

  push();
  translate(width / 2 - _OXUIU - _OBUIU + xDécalage, height / 2 - _OXTOHU / 2);

  for (let l = 0; l < _OXDU; l++) {
    let xpos = (_OXDYU + _OXDRE) * l;

    push();
    for (let i = 0; i < _OXTO; i++) {
      let _OXTPER = _OXTPERLIG;
      let _OXWAVWERLIG = _OXWAERLIG;
      let _OXWAEY = _OXFR;

      beginShape();

      for (let p = 0; p < _OXTPER; p++) {
        let osc =
          cos(p * sin(p) * _OXWAVWERLIG) *
          (_OXWAEY * (((i * sin(p)) / xDens) * tan(p)));
        let x = xpos * sin(p) + _OXWAEY + osc;
        let y = map(p, 0, _OXTPER, 0, _OXTOHU);

        curveVertex(x, y);
      }
      endShape();
    }
    pop();
  }
  pop();
}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function _ODDA(_ODDAator, a) {
  return _ODDAator + a;
}

function _OFLOAR(arr, _O_OCHUNKY) {
  const res = [];
  for (let i = 0; i < arr.length; i += _O_OCHUNKY) {
    const _OCHUNKY = arr.slice(i, i + _O_OCHUNKY);
    res.push(_OCHUNKY);
  }
  return res;
}

function _OGDGFH(str, size) {
  var _OdNumA = [];
  _OdNuPI = str.match(new RegExp(".{1," + size + "}", "g"));
  _OdNuPI.forEach((item, i) => {
    var _OdCHARS = _OdNuPI[i].split("");
    _OdCHARS.forEach((char, c) => {
      var _OdECR = isNaN(char) ? 97 : 48 - 16;
      _OdNumA.push(_OdCHARS[c].charCodeAt(0) - _OdECR);
    });
  });

  var _OXNGR = _OFLOAR(_OdNumA, _OXGDESL);
  var _OXGRAIN = [];

  _OXNGR.forEach((item, i) => {
    _OXGRAIN.push(_OXNGR[i].reduce(_ODDA, 0));
  });
return _OXGRAIN;
}

function keyPressed() {
  if (key == "s") exportCanvas("PNG");
}

function exportCanvas(format) {
  let timestamp = year() + nf(month(), 2) + nf(day(), 2);
  saveCanvas(canvas, timestamp, "png");
}

function mapRange(value, a, b, c, d) {
  value = (value - a) / (b - a);
  return c + value * (d - c);
}
