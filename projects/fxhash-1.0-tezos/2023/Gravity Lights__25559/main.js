const _0x41f3cc = _0x139c;
(function (_0x198a73, _0x35e04a) {
  const _0x4e74e1 = _0x139c,
    _0x18a410 = _0x198a73();
  while (!![]) {
    try {
      const _0x18e515 =
        -parseInt(_0x4e74e1(0x7b)) / 0x1 +
        parseInt(_0x4e74e1(0x7d)) / 0x2 +
        (parseInt(_0x4e74e1(0x70)) / 0x3) * (parseInt(_0x4e74e1(0x71)) / 0x4) +
        (parseInt(_0x4e74e1(0x6d)) / 0x5) * (-parseInt(_0x4e74e1(0x6f)) / 0x6) +
        parseInt(_0x4e74e1(0x74)) / 0x7 +
        (parseInt(_0x4e74e1(0x78)) / 0x8) * (parseInt(_0x4e74e1(0x6c)) / 0x9) +
        (parseInt(_0x4e74e1(0x7a)) / 0xa) * (-parseInt(_0x4e74e1(0x7c)) / 0xb);
      if (_0x18e515 === _0x35e04a) break;
      else _0x18a410["push"](_0x18a410["shift"]());
    } catch (_0x8b130d) {
      _0x18a410["push"](_0x18a410["shift"]());
    }
  }
})(_0x15fb, 0xdb81f);
const points = [];
let rMax = 0x0,
  gMax = 0x0,
  bMax = 0x0,
  noiseReducer = 0x3e8;
function _0x139c(_0x4ca3a2, _0x2be830) {
  const _0x15fbc3 = _0x15fb();
  return (
    (_0x139c = function (_0x139cc4, _0x3c6b09) {
      _0x139cc4 = _0x139cc4 - 0x6c;
      let _0x23cdd0 = _0x15fbc3[_0x139cc4];
      return _0x23cdd0;
    }),
    _0x139c(_0x4ca3a2, _0x2be830)
  );
}
function setup() {
  const _0x11ec25 = _0x139c;
  createCanvas(0x7d0, 0xbb8),
    stroke(0xff, 0xa),
    strokeWeight(0x1f4),
    background(0xff),
    randomSeed(fxrand() * 0x9184e729fff),
    noiseSeed(fxrand() * 0x9184e729fff),
    (noiseReducer = random(0x64, 0x7d0)),
    (rMax = floor(random(0xff))),
    (gMax = floor(random(0xff))),
    (bMax = floor(random(0xff)));
  for (let _0x1e9fb2 = 0x0; _0x1e9fb2 < 0x2710; _0x1e9fb2++) {
    points[_0x11ec25(0x75)](new Point(random(-0x64, width + 0x64), random(-0x64, height + 0x64)));
  }
}
let iteration = 0x28;
function draw() {
  const _0x6e81f6 = _0x139c;
  iteration === 0x5dc && fxpreview(),
    iteration++,
    points[_0x6e81f6(0x76)]((_0x69d6f3) => {
      const _0x1e8348 = _0x6e81f6;
      _0x69d6f3[_0x1e8348(0x79)](), _0x69d6f3[_0x1e8348(0x72)]();
    }),
    strokeWeight(Math[_0x6e81f6(0x6e)](0x64 - iteration / 0x2, 0x4));
}
function _0x15fb() {
  const _0x3a9d75 = [
    "251013wYxeLJ",
    "22hscNMU",
    "2924252PaefiB",
    "49491BmmfhR",
    "5towgfm",
    "max",
    "6049818VpCXan",
    "3QrIxHb",
    "7087072gsoWjs",
    "draw",
    "lastPointY",
    "6372786NMBVpb",
    "push",
    "forEach",
    "color",
    "2152nemxDf",
    "step",
    "17325520zNeusT",
  ];
  _0x15fb = function () {
    return _0x3a9d75;
  };
  return _0x15fb();
}
class Point {
  constructor(_0x58c487, _0x3eb231) {
    const _0x34d1c5 = _0x139c;
    (this["x"] = _0x58c487),
      (this["y"] = _0x3eb231),
      (this[_0x34d1c5(0x77)] = [
        floor(noise(this["x"] / 0x3e8 + 0x3e8, this["y"] / 0x3e8 + 0x3e8) * rMax),
        floor(noise(this["x"] / 0x3e8 + 0x7d0, this["y"] / 0x3e8 + 0x7d0) * gMax),
        floor(noise(this["x"] / 0x3e8 + 0xbb8, this["y"] / 0x3e8 + 0xbb8) * bMax),
      ]);
  }
  ["step"]() {
    const _0x212e62 = _0x139c;
    (this["lastPointX"] = this["x"]),
      (this[_0x212e62(0x73)] = this["y"]),
      (this["x"] += 0x19 - noise(this["x"] / noiseReducer, this["y"] / noiseReducer) * 0x32),
      (this["y"] += 0x19 - noise(this["x"] / noiseReducer + 0x3e8, this["y"] / noiseReducer + 0x3e8) * 0x32);
  }
  [_0x41f3cc(0x72)]() {
    const _0x18e56e = _0x41f3cc;
    stroke(
      floor(this["color"][0x0] * (iteration / 0x64)),
      floor(this[_0x18e56e(0x77)][0x1] * (iteration / 0x64)),
      floor(this[_0x18e56e(0x77)][0x2] * (iteration / 0x64)),
      0x14
    ),
      line(this["lastPointX"], this[_0x18e56e(0x73)], this["x"], this["y"]);
  }
}
