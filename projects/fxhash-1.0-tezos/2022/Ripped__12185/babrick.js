let bw, bh, bm, bys, inc, zoff, brickch1, brickch2, scratchch, scratchchh, shighcol, bxs, by, brch;
var mortarc = [];
var brickc = [];
var scratchc = [];
var scratcha = [];
var scratchh = [];
function babrick() {
  ba = createGraphics(cs, cs);
  ba.background("#e3c89d");
  ba.noStroke();
  mortarc = [features.mortard1, features.mortard2, features.mortard3, features.mortard4, features.mortard5,];
  let mortarch = shuffleArray(mortarc);
  let mc1 = color(mortarch[0]);
  let mc2 = color(mortarch[1]);
  for (let j = 0; j < cs + 1; j++) {
    let mcch = lerpColor(mc1, mc2, j / cs);
    ba.stroke(mcch);
    ba.line(0, j, cs, j);
  }
  ba.noStroke();
  bw = h[370];
  bh = bw / 2.5;
  bm = bw / 20;
  bhw = bw / 2;
  bxs = myRandom(-bw / 2, 0);
  by = myRandom(-bh / 2, 0);
  bys = by;
  brch = myRandom(0, 1);
  if (brch > 0.5) {
    for (let j = 0; j < cs / bh + 2; j++) {
      if (j / 2 == int(j / 2)) bx = bxs;
      if (j / 2 != int(j / 2)) bx = bxs - bw * myRandom(0.45, 0.55);
      for (let i = 0; i < cs / bw + 1; i++) {
        brick = new Brick(bx, by, bw - bm, "l");
        brick.draw();
        bx += bw;
      }
      by += bh;
    }
  }
  if (brch <= 0.5) {
    for (let j = 0; j < cs / bh + 1; j++) {
      if (j / 2 == int(j / 2)) bx = bxs;
      if (j / 2 != int(j / 2)) bx = bxs - bw * myRandom(0.7, 0.8);
      for (let i = 0; i < cs / bw + 3; i++) {
        if (i / 2 == int(i / 2)) {
          brick = new Brick(bx, by, bw - bm, "l");
          brick.draw();
          bx += bw;
        }
        if (i / 2 != int(i / 2)) {
          brick = new Brick(bx, by, bhw - bm, "s");
          brick.draw();
          bx += bhw;
        }
      }
      by += bh;
    }
  }
}
class Brick {
  constructor(x, y, len, los) {
    brickc = [
      features.brickd1,
      features.brickd2,
      features.brickd3,
      features.brickd4,
      features.brickd5,
    ];
    scratchc = [
      features.scratch1,
      features.scratch2,
      features.scratch3,
      features.scratch4,
      features.scratch5,
    ];
    scratchh = [
      features.scratch1h,
      features.scratch2h,
      features.scratch3h,
      features.scratch4h,
      features.scratch5h,
    ];
    let colr = int(myRandom(0, 5));
    let colr2 = int(myRandom(0, 5));
    brickch1 = brickc[colr];
    brickch2 = brickc[colr2];
    scratchch = scratchc[colr];
    scratchchh = scratchh[colr2];
    this.x = x + bm / 2;
    this.y = y + bm / 2;
    this.len = len;
    this.los = los;
    this.hei = bh - bm;
    this.ytop = [];
    this.ybot = [];
    this.xright = [];
    this.xleft = [];
    this.brickch1 = brickch1;
    this.brickch2 = brickch2;
    this.brc1 = color(this.brickch1);
    this.brc2 = color(this.brickch2);
    this.brcinc = myRandom(0, 1);
    this.brch = lerpColor(this.brc1, this.brc2, this.brcinc);
    this.brch2 = features.bricksh;
    this.variance = this.hei / 80;
    this.variance2 = this.hei / 60;
    this.variance3 = this.hei / 40;
    if (this.los === "l") {
      for (let i = 0; i < 40; i++) {
        let yt = myRandom(-this.variance, this.variance);
        this.ytop.push(yt);
        let yb = myRandom(-this.variance, this.variance);
        this.ybot.push(yb);
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < 20; i++) {
        let yt = myRandom(-this.variance, this.variance);
        this.ytop.push(yt);
        let yb = myRandom(-this.variance, this.variance);
        this.ybot.push(yb);
      }
    }
    for (let i = 0; i < 20; i++) {
      let xr = myRandom(-this.variance, this.variance);
      this.xright.push(xr);
      let xl = myRandom(-this.variance, this.variance);
      this.xleft.push(xl);
    }
  }

  draw() {
    ba.push();
    ba.translate(this.x + this.hei / 30, this.y + this.hei / 40);
    ba.fill(features.bricksh);
    ba.beginShape();
    ba.vertex(0, 0);
    let c = 0;
    if (this.los === "l") {
      for (let i = 0; i < this.len; i += this.len * 0.025) {
        ba.vertex(i, this.ytop[c] - 3.7 * myRandom(0, this.variance));
        c++;
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < this.len; i += this.len * 0.1) {
        ba.vertex(i, this.ytop[c] - 3.7 * myRandom(0, this.variance));
        c++;
      }
    }
    let d = 0;
    for (let i = 0; i < this.hei; i += this.hei * 0.05) {
      ba.vertex(
        this.len +
          this.xright[d] +
          1.2 * myRandom(-this.variance, this.variance),
        i
      );
      d++;
    }
    let e = 0;
    if (this.los === "l") {
      for (let i = this.len; i > -1; i -= this.len * 0.025) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance, this.variance)
        );
        e++;
      }
    }
    if (this.los === "s") {
      for (let i = this.len; i > -1; i -= this.len * 0.05) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance, this.variance)
        );
        e++;
      }
    }
    let f = 0;
    for (let i = this.hei; i > 0; i -= this.hei * 0.05) {
      ba.vertex(this.xleft[f] - 3.7 * myRandom(0, this.variance), i);
      f++;
    }
    ba.vertex(0, 0);
    ba.endShape();
    ba.pop();
    ba.push();
    ba.translate(this.x + this.hei / 25, this.y + this.hei / 25);
    ba.fill(features.bricksh2);
    ba.beginShape();
    ba.vertex(0, 0);
    c = 0;
    if (this.los === "l") {
      for (let i = 0; i < this.len; i += this.len * 0.025) {
        ba.vertex(
          i,
          this.ytop[c] - 3.7 * myRandom(-this.variance2, this.variance2)
        );
        c++;
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < this.len; i += this.len * 0.1) {
        ba.vertex(
          i,
          this.ytop[c] - 3.7 * myRandom(-this.variance2, this.variance2)
        );
        c++;
      }
    }
    d = 0;
    for (let i = 0; i < this.hei; i += this.hei * 0.05) {
      ba.vertex(
        this.len +
          this.xright[d] +
          1.2 * myRandom(-this.variance2, this.variance2),
        i
      );
      d++;
    }
    e = 0;
    if (this.los === "l") {
      for (let i = this.len; i > -1; i -= this.len * 0.025) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance2, this.variance2)
        );
        e++;
      }
    }
    if (this.los === "s") {
      for (let i = this.len; i > -1; i -= this.len * 0.05) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance2, this.variance2)
        );
        e++;
      }
    }
    f = 0;
    for (let i = this.hei; i > 0; i -= this.hei * 0.05) {
      ba.vertex(
        this.xleft[f] - 3.7 * myRandom(-this.variance2, this.variance2),
        i
      );
      f++;
    }
    ba.vertex(0, 0);
    ba.endShape();
    ba.pop();
    ba.push();
    ba.translate(this.x + this.hei / 25, this.y + this.hei / 35);
    ba.fill(features.bricksh3);
    ba.beginShape();
    ba.vertex(0, 0);
    c = 0;
    if (this.los === "l") {
      for (let i = 0; i < this.len; i += this.len * 0.025) {
        ba.vertex(
          i,
          this.ytop[c] - 3.7 * myRandom(-this.variance3, this.variance3)
        );
        c++;
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < this.len; i += this.len * 0.1) {
        ba.vertex(
          i,
          this.ytop[c] - 3.7 * myRandom(-this.variance3, this.variance3)
        );
        c++;
      }
    }
    d = 0;
    for (let i = 0; i < this.hei; i += this.hei * 0.05) {
      ba.vertex(
        this.len +
          this.xright[d] +
          1.2 * myRandom(-this.variance3, this.variance3),
        i
      );
      d++;
    }
    e = 0;
    if (this.los === "l") {
      for (let i = this.len; i > -1; i -= this.len * 0.025) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance3, this.variance3)
        );
        e++;
      }
    }
    if (this.los === "s") {
      for (let i = this.len; i > -1; i -= this.len * 0.05) {
        ba.vertex(
          i,
          this.hei +
            this.ybot[e] +
            1.2 * myRandom(-this.variance3, this.variance3)
        );
        e++;
      }
    }
    f = 0;
    for (let i = this.hei; i > 0; i -= this.hei * 0.05) {
      ba.vertex(
        this.xleft[f] - 3.7 * myRandom(-this.variance3, this.variance3),
        i
      );
      f++;
    }
    ba.vertex(0, 0);
    ba.endShape();
    ba.pop();
    ba.push();
    ba.translate(this.x, this.y);
    ba.fill(this.brch);
    ba.beginShape();
    ba.vertex(0, 0);
    c = 0;
    if (this.los === "l") {
      for (let i = 0; i < this.len; i += this.len * 0.025) {
        ba.vertex(i, this.ytop[c]);
        c++;
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < this.len; i += this.len * 0.1) {
        ba.vertex(i, this.ytop[c]);
        c++;
      }
    }
    d = 0;
    for (let i = 0; i < this.hei; i += this.hei * 0.05) {
      ba.vertex(this.len + this.xright[d], i);
      d++;
    }
    e = 0;
    if (this.los === "l") {
      for (let i = this.len; i > -1; i -= this.len * 0.025) {
        ba.vertex(i, this.hei + this.ybot[e]);
        e++;
      }
    }
    if (this.los === "s") {
      for (let i = this.len; i > -1; i -= this.len * 0.05) {
        ba.vertex(i, this.hei + this.ybot[e]);
        e++;
      }
    }
    f = 0;
    for (let i = this.hei; i > 0; i -= this.hei * 0.05) {
      ba.vertex(this.xleft[f], i);
      f++;
    }
    ba.vertex(0, 0);
    ba.endShape();
    ba.pop();
    ba.push();
    ba.translate(this.x, this.y);
    ba.stroke(features.bricksh);
    ba.noFill(0);
    ba.beginShape();
    ba.vertex(0, 0);
    c = 0;
    if (this.los === "l") {
      for (let i = 0; i < this.len; i += this.len * 0.025) {
        ba.vertex(i, this.ytop[c]);
        c++;
      }
    }
    if (this.los === "s") {
      for (let i = 0; i < this.len; i += this.len * 0.1) {
        ba.vertex(i, this.ytop[c]);
        c++;
      }
    }
    d = 0;
    for (let i = 0; i < this.hei; i += this.hei * 0.05) {
      ba.vertex(this.len + this.xright[d], i);
      d++;
    }
    e = 0;
    if (this.los === "l") {
      for (let i = this.len; i > -1; i -= this.len * 0.025) {
        ba.vertex(i, this.hei + this.ybot[e]);
        e++;
      }
    }
    if (this.los === "s") {
      for (let i = this.len; i > -1; i -= this.len * 0.05) {
        ba.vertex(i, this.hei + this.ybot[e]);
        e++;
      }
    }
    f = 0;
    for (let i = this.hei; i > 0; i -= this.hei * 0.05) {
      ba.vertex(this.xleft[f], i);
      f++;
    }
    ba.vertex(0, 0);
    ba.endShape();
    ba.strokeWeight(h[1]);
    ba.stroke(scratchch);
    this.dotx = this.len / 1000;
    this.doty = this.hei / 500;
    for (let i = 0; i < 500; i++) {
      ba.strokeWeight(myRandom(h[1], h[3]));
      ba.point(
        myRandom(h[1] + this.dotx, this.len),
        myRandom(h[1] + this.doty, this.hei)
      );
      this.dotx += this.len / 1000;
      this.doty += this.hei / 500;
    }
    this.dotx = this.len / 1600;
    this.doty = this.hei / 800;
    for (let i = 0; i < 800; i++) {
      shighcol = eval(' " ' + scratchchh + int(myRandom(10, 77)) + ' " ');
      ba.stroke(shighcol);
      ba.strokeWeight(myRandom(h[1] * 0.1, h[2]));
      ba.point(
        myRandom(h[1], this.len - this.dotx),
        myRandom(h[1], this.hei - this.doty)
      );
      this.dotx += this.len / 1600;
      this.doty += this.hei / 800;
    }
    ba.pop();
    ba.strokeWeight(h[1]);
    ba.stroke("#2B1B0755");
    for (let i = 0; i < 10000; i++) {
      ba.point(myRandom(0, cs), myRandom(0, cs));
    }
    ba.noStroke();
  }
}
