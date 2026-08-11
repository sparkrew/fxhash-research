let q1a = [];
let q1b = [];
let q2a = [];
let q2b = [];
let wx, wy, str, ll1a, ll2a;
function pgwood() {
  noiseSeed(myRandom(0, 10000));
  let wch = myRandom(0,1);
  if (wch > 0.15) pgwood1();
  if (wch < 0.15) pgwood3();
}
function pgwood1() {
  var ct = 0;
  wx = myRandom(h[0], h[920]);
  wy = myRandom(h[0], h[920]);
  pg.background(features.w1b1);
  let di = myRandom(h[15], h[75]);
  let rch = int(myRandom(3, 9));
  let ringinc = myRandom(1.2, 1.4);
  let alinc = int(pg.map(noise(myRandom(0, 1)), 0, 1, 90, 360)) / 2;
  for (let a = 0; a < PI * 4 + 0.02; a += PI / alinc) {
    let inc =
      pg.map(noise(sin(a), cos(a)), 0, 1, di, di + h[27]) + myRandom(-h[2], h[2]);
    q1x = wx + inc * cos(a);
    q1y = wy + inc * sin(a);
    q1a.push(q1x);
    q1b.push(q1y);
    pg.strokeWeight(h[5]);
    ll1a =pg.map(noise(myRandom(a, 3 * a)), 0, 1, di * 0.17, di * 0.9);
    if (a < PI + 0.02) {
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        //dark top
        let high = ring / 440;
        let low = ring / 900;
        ll2a =pg.map(noise(myRandom(a, 3 * a)), 0, 1, di * low, di * high);
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 4
        );
      }
      //light top
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll2a + myRandom(h[0], h[10])
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) +
            (ll2a + myRandom(h[0], h[10])) * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) +
            (ll2a + myRandom(h[0], h[10])) * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) +
            (ll2a + myRandom(h[0], h[10])) * 4
        );
      }
    }
    if (a > PI && a < 2 * PI) {
      //dark bottom
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 4
        );
      }
      //light bottom
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - (ll2a + myRandom(h[0], h[10]))
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) -
            (ll2a + myRandom(h[0], h[10])) * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) -
            (ll2a + myRandom(h[0], h[10])) * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1l2);
        if (rs < 0.5) pg.stroke(features.w1l1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] -
            sin(a) * (di * (ring + 1)) -
            (ll2a + myRandom(h[0], h[10])) * 4
        );
      }
    }
    if (a > PI * 2 - 0.1 && a < PI * 3 + 0.1) {
      //dark overlay top
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) - ll1a * 4
        );
      }
    }
    if (a > PI * 3 - 0.1) {
      //dark overlay bottom
      for (let ring = rch; ring < rch * 360; ring *= ringinc) {
        pg.strokeWeight(h[5]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a
        );
        pg.strokeWeight(h[2]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 2
        );
        pg.strokeWeight(h[1]);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 3
        );
        pg.strokeWeight(h[1] * 0.8);
        rs = myRandom(0, 1);
        pg.stroke(features.w1d2);
        if (rs < 0.5) pg.stroke(features.w1d1);
        pg.line(
          q1a[ct] + ((di * ring) / 5) * cos(a),
          q1b[ct] - sin(a) * di * (ring + 1),
          q1a[ct] + ((di * ring) / 5) * cos(a) + myRandom(-h[2], h[2]),
          q1b[ct] - sin(a) * (di * (ring + 1)) + ll1a * 4
        );
      }
    }
    ct += 1;
  }
  for (let rr = 0; rr < 1600; rr++) {
    let xr = myRandom(h[0], h[920]);
    let yr = myRandom(h[0], h[920]);
    let lr = myRandom(h[5], h[40]);
    pg.strokeWeight(h[1] * 0.8);
    pg.stroke(features.w1d1d);
    pg.line(xr, yr, xr + myRandom(-h[2], h[2]), yr + lr);
  }
  for (let rr = 0; rr < 1600; rr++) {
    let xr = myRandom(h[0], h[920]);
    let yr = myRandom(h[0], h[920]);
    let lr = myRandom(h[5], h[40]);
    pg.strokeWeight(h[1] * 0.8);
    pg.stroke(features.w1d2d);
    pg.line(xr, yr, xr + myRandom(-h[2], h[2]), yr + lr);
  }
}
