const o = [];
const e = [
    {
      sunColor: "#BC5656",
      darkMountainColor: "#ee4863",
      lightMountainColor: "#e3b4b8",
      topSky: ["#E8C5C5", "#BC5656"],
      skyBg: "#e4dcc2",
      strokeColor: "#323232",
    },
    {
      sunColor: "#35333c",
      darkMountainColor: "#35333c",
      lightMountainColor: "#8076a3",
      topSky: ["#d1c2d3", "#35333c"],
      skyBg: "#d1c2d3",
      strokeColor: "#323232",
    },
    {
      sunColor: "#BC5656",
      darkMountainColor: "#10aec2",
      lightMountainColor: "#c6e6e8",
      topSky: ["#E8C5C5", "#BC5656"],
      skyBg: "#e4dcc2",
    },
    {
      sunColor: "#BC5656",
      darkMountainColor: "#41ae3c",
      lightMountainColor: "#add5a2",
      topSky: ["#E8C5C5", "#BC5656"],
      skyBg: "#e4dcc2",
    },
    {
      sunColor: "#fcc515",
      darkMountainColor: "#41ae3c",
      lightMountainColor: "#add5a2",
      topSky: ["#f7e8aa", "#fcc515"],
      skyBg: "#f7e8aa",
    },
    {
      sunColor: "#fcc515",
      darkMountainColor: "#41ae3c",
      lightMountainColor: "#add5a2",
      topSky: ["#f7e8aa", "#BC5656"],
      skyBg: "#f7e8aa",
    },
  ],
  t = [
    {
      treePurple: "rgb(117, 0, 98)",
      treeBg: "rgb(255, 194, 245)",
      treeBlossom: "rgb(255, 122, 233)",
      treeBlossomRed: "rgb(255, 194, 245)",
    },
    {
      treePurple: "#e3b4b8",
      treeBg: "#ccccd6",
      treeBlossom: "#7e2065",
      treeBlossomRed: "#813c85",
    },
    {
      treePurple: "#e3b4b8",
      treeBg: "#ccccd6",
      treeBlossom: "#2177b8",
      treeBlossomRed: "#ec2c64",
    },
    {
      treePurple: "#eb507e",
      treeBg: "#ccccd6",
      treeBlossom: "#f9c116",
      treeBlossomRed: "#2c9678",
    },
    {
      treePurple: "#346c9c",
      treeBg: "#ccccd6",
      treeBlossom: "#f9c116",
      treeBlossomRed: "#2c9678",
    },
  ],
  r = "#323232";
let s, i;
const n = ["#9BB7A2", "#535350"],
  l = ["春色", "风光", "自然", "道法", "春日", "灿烂", "独醉", "梦境"];
(window.preload = function () {
  myFont = loadFont("./font.ttf");
}),
  (window.setup = () => {
    window.fxrand &&
      (randomSeed(1e4 * window.fxrand()), noiseSeed(1e4 * window.fxrand())),
      createCanvas(600, 800),
      pixelDensity(2),
      textFont(myFont),
      (s = random(e)),
      (i = random(t));
    new h(0, 0, width, 400, s.skyBg, s.skyBg).drawMe();
    const c = new h(0, 0, width, 40, s.topSky[0], s.topSky[1]);
    c.setColorLerpPoints(5, 40), c.drawMe(), noStroke(), fill(s.sunColor);
    let p = random(10, 0.9 * width),
      m = random(60, 150);
    circle(p, m, 50);
    const f = random(l);
    textSize(60),
      text(f[0], width - p < 200 ? 10 : width - 60, 100),
      text(f[1], width - p < 200 ? 10 : width - 60, 170),
      (function ({ x: o, y: e, positive: t }) {
        let s = o - 100,
          i = e - 40,
          n = random(4, 6);
        if (random() < 0.4) {
          for (let o = 0; o < n; o++) {
            (s += 30 * random(1, 1.2)), (i += 20 * random(1, 1.2));
            new a(s, i, 10, random(2, 6), r).drawMe();
          }
          for (let o = 0; o < 5; o++) {
            (s += 30 * random(1, 1.2)), (i -= 20 * random(1, 1.2));
            new a(s, i, 10, random(2, 6), r).drawMe();
          }
          return;
        }
        if (random() < 0.5)
          for (let o = 0; o < n; o++) {
            (s += 30 * random(1, 1.2)), (i += 10 * random(1, 1.2));
            new a(s, i, 10, random(2, 6), r).drawMe();
          }
        else
          for (let o = 0; o < n; o++) {
            (s += 30 * random(1, 1.2)), (i -= 10 * random(1, 1.2));
            new a(s, i, 10, random(2, 6), r).drawMe();
          }
      })({ x: p, y: m }),
      (startx = width / 2),
      (starty = height - 100),
      (xOff = -100),
      (x = 0),
      (y = 60),
      (time = 1);
    const w = color(s.darkMountainColor),
      k = color(s.lightMountainColor);
    for (let o = 0; o <= width; o += 1)
      for (let e = 1; e <= 10; e++)
        strokeWeight(2),
          stroke(lerpColor(k, w, e / 10)),
          line(o, 60 + 50 * e + 300 * noise(o / 300, 1 * e), o, height);
    noStroke(),
      (function () {
        push(), stroke(n[0]);
        for (let o = 0; o < width; o++) {
          const e = 100 * noise(0.01 * o) + 600;
          line(o, height, o, e);
          for (let t = e + 6; t < height; t += 2) {
            let e = noise(0.01 * o, 0.01 * t);
            (e > 0.5 || e < 0.3) &&
              (push(), stroke(n[1]), fill(n[1]), circle(o, t, 8), pop()),
              random(0, 1) < 0.1 &&
                (push(), fill(i.treeBg), circle(o, t, 8), pop());
          }
        }
        pop();
      })(),
      angleMode(RADIANS);
    const u = random(50, 70);
    for (let e = 0; e < u; e++)
      o.push(
        new d(
          random(0, width),
          random(map(u, 20, 50, 850, 700), height + 100),
          40,
          8,
          0
        )
      );
    o.sort((o, e) => e.y - o.y);
  }),
  (window.draw = () => {
    if (!o.length)
      return (
        (function () {
          push();
          const o = pixelDensity();
          loadPixels();
          for (let e = 0; e < height * o; e++)
            for (let t = 0; t < width * o; t++) {
              let r = 4 * (t + e * width * o),
                s = pixels[r + 0],
                i = pixels[r + 1],
                n = pixels[r + 2],
                l = 0;
              (l += 10 * noise(t / 500, e / 500)),
                (l += random(-10, 10)),
                (pixels[r + 0] = s + l),
                (pixels[r + 1] = i + l),
                (pixels[r + 2] = n + l);
            }
          updatePixels(), pop();
        })(),
        fxpreview(),
        void noLoop()
      );
    o.pop().draw();
  });
class d {
  constructor(o, e, t = 100, r = 4, s = 0, i = TWO_PI * (3 / 4)) {
    (this.x = o),
      (this.y = e),
      (this.len = t),
      (this.depth = s),
      (this.dir = i),
      (this.thickness = r),
      (this.noiseOffset = random(1e3));
  }
  draw() {
    push(),
      translate(this.x, this.y),
      rotate(this.dir),
      stroke(47, 25, 8),
      strokeWeight(this.thickness),
      noFill(),
      beginShape();
    for (let o = 0; o < this.len; o++)
      vertex(o, 5 * noise(this.noiseOffset + 0.05 * o));
    if (
      (endShape(),
      translate(
        this.len - 1,
        5 * noise(this.noiseOffset + 0.05 * (this.len - 1))
      ),
      random(1) < 0.8 && this.depth > 5)
    ) {
      stroke(i.treeBlossom), strokeWeight(2);
      for (let o = 0; o < 20; o++) line(0, 0, random(-5, 5), random(-5, 5));
    }
    if (this.depth - 3 > 5)
      if ((noStroke(), random(1) < 0.9)) {
        stroke(i.treeBlossomRed), strokeWeight(2);
        for (let o = 0; o < 1; o++) line(0, 0, random(-5, 5), random(-5, 5));
        if (random(1) < 0.2) {
          fill(i.treeBg), noStroke();
          for (let o = 0; o < 5; o++)
            ellipse(random(-5, 5), random(-5, 5), 1, 1);
        }
      } else {
        stroke(i.treePurple), strokeWeight(2);
        for (let o = 0; o < 20; o++) line(0, 0, random(-5, 5), random(-5, 5));
      }
    else {
      let o, e, t;
      (o =
        this.depth > 0
          ? map(this.depth, 0, 10, 0.1, 0.5)
          : 0.3 * random(0.9, 1.1)),
        (e = new d(
          0,
          0,
          random(0.8, 1.1) * (this.len - this.depth),
          0.8 * this.thickness,
          this.depth + 1,
          -1 * random(0.8, 1.1) * o
        )),
        e.draw(),
        (t = new d(
          0,
          0,
          random(0.8, 1.1) * (this.len - this.depth),
          0.8 * this.thickness,
          this.depth + 1,
          1 * random(0.8, 1.1) * o
        )),
        t.draw();
    }
    pop();
  }
}
class h {
  constructor(o, e, t, r, s, i) {
    (this.x = o),
      (this.y = e),
      (this.w = t),
      (this.h = r),
      (this.color1 = s),
      (this.color2 = i),
      (this.lerpY1 = 0),
      (this.lerpY2 = 0);
  }
  setColorLerpPoints(o, e) {
    return (this.lerpY1 = o), (this.lerpY2 = e), this;
  }
  drawMe() {
    push(), noStroke(), translate(this.x, this.y);
    const o = color(this.color1),
      e = color(this.color2);
    for (let t = 0; t < this.h; t += 1)
      fill(
        lerpColor(
          e,
          o,
          (this.y + t - this.lerpY1) / (this.lerpY2 - this.lerpY1)
        )
      ),
        rect(0, t, this.w, 1);
    pop();
  }
}
class a {
  constructor(o, e, t, r, s) {
    (this.x = o),
      (this.y = e),
      (this.w = t),
      (this.h = r),
      (this.strokeColor = s);
  }
  drawMe() {
    push(),
      angleMode(DEGREES),
      translate(this.x, this.y - this.h),
      fill(this.strokeColor),
      noStroke();
    let o = random(220, 270);
    for (let e = o; e < 360; e++) {
      const o = cos(e) * this.w - this.w,
        t = sin(e) * this.h,
        r = random([1, 2, 3]);
      circle(o, t, r);
    }
    o = random(270, 320);
    for (let e = 180; e < o; e++) {
      const o = cos(e) * this.w + this.w,
        t = sin(e) * this.h,
        r = random([1, 2, 3]);
      circle(o, t, r);
    }
    pop();
  }
}
