let palette1 = ["#091e05", "#004f2d", "#d87cac", "#f9b9c3", "#ffda22"];
let palette2 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let palette3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let palette4 = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
let palette5 = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
let palette6 = ["#7c6a0a", "#babd8d", "#ffdac6", "#fa9500", "#eb6424"];
let palette7 = ["#3d348b", "#7678ed", "#f7b801", "#f18701", "#f35b04"];
let palette8 = ["#ff6b35", "#f7c59f", "#efefd0", "#004e89", "#1a659e"];
let palette9 = ["#233d4d", "#fe7f2d", "#fcca46", "#a1c181", "#619b8a"];
let palette10 = ["#44af69", "#f8333c", "#fcab10", "#2b9eb3", "#dbd5b5"];
let palette11 = ["#ffae03", "#e67f0d", "#fe4e00", "#e9190f", "#ff0f80"];

let palettes = [
  palette1,
  palette2,
  palette3,
  palette4,
  palette5,
  palette6,
  palette7,
  palette8,
  palette9,
  palette10,
  palette11
];

let col;
let c;
let c1;
let c2;
let c3;
let c4;
let c5;

let w;
let s; //size of cells

let side;

function setup() {
  randomSeed($fx.rand()*99999999999)
noiseSeed($fx.rand()*99999999999)
  col = random(palettes);

  c1 = col[0];
  c2 = col[1];
  c3 = col[2];
  c4 = col[3];
  c5 = col[4];
  w = windowWidth;
  createCanvas(w, w);
  background("#F5EBE0");
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  let chance = random(4);
  if (chance < 1) {
    grid();
    bands();
  } else if (chance > 1 && chance < 2) {
    grid2();
    bands2();
  } else if (chance > 2 && chance < 3) {
    grid3();
    bands3();
  } else if (chance > 3 && chance < 4) {
    grid4();
    bands4();
  }

  let cell = width / 250;
  for (i = 0; i < height; i += cell) {
    for (j = 0; j < width; j += cell) {
      var n = noise(i * 0.01, j * 0.01);

      noStroke();
      //colorMode(HSB);
      fill(255, n * 150);
      rect(j, i, cell);
    }
  }

  grain(30);
}

function grid() {
  s = width / 15;
  noStroke();
  // palette picker

  side = width * random(0.3, 0.5);
  for (let x = 0; x < side; x += s) {
    for (let y = 0; y < height; y += s) {
      // the square
      push();
      //beginClip();

      //fill(c);

      rect(x, y, s);

      //endClip();

      // the filling
      for (let x1 = x; x1 < x + s; x1 += s / 5) {
        for (let y1 = y; y1 < y + s; y1 += s / 5) {
          c = color(random([c1, c2, c3, c4, c5]));
          c.setAlpha(random(255));
          fill(c);
          rect(x1, y1, s / 5);
        }
      }
      pop();
    }
  }
}

function grid2() {
  s = width / 15;
  noStroke();
  // palette picker

  side = width * random(0.3, 0.5);
  for (let x = side; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      // the square
      push();
      //beginClip();

      //fill(c);

      rect(x, y, s);

      //endClip();

      // the filling
      for (let x1 = x; x1 < x + s; x1 += s / 5) {
        for (let y1 = y; y1 < y + s; y1 += s / 5) {
          c = color(random([c1, c2, c3, c4, c5]));
          c.setAlpha(random(255));
          fill(c);
          rect(x1, y1, s / 5);
        }
      }
      pop();
    }
  }
}

function grid3() {
  s = width / 15;
  noStroke();
  // palette picker

  side = width * random(0.3, 0.5);

  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < side; y += s) {
      // the square
      push();
      //beginClip();

      //fill(c);

      rect(x, y, s);

      //endClip();

      // the filling
      for (let x1 = x; x1 < x + s; x1 += s / 5) {
        for (let y1 = y; y1 < y + s; y1 += s / 5) {
          c = color(random([c1, c2, c3, c4, c5]));
          c.setAlpha(random(255));
          fill(c);
          rect(x1, y1, s / 5);
        }
      }
      pop();
    }
  }
}

function grid4() {
  s = width / 15;
  noStroke();
  // palette picker

  side = width * random(0.3, 0.5);

  for (let x = 0; x < width; x += s) {
    for (let y = side; y < height; y += s) {
      // the square
      push();
      //beginClip();

      //fill(c);

      rect(x, y, s);

      //endClip();

      // the filling
      for (let x1 = x; x1 < x + s; x1 += s / 5) {
        for (let y1 = y; y1 < y + s; y1 += s / 5) {
          c = color(random([c1, c2, c3, c4, c5]));
          c.setAlpha(random(255));
          fill(c);
          rect(x1, y1, s / 5);
        }
      }
      pop();
    }
  }
}

function bands() {
  for (let y = 0; y < height; y += s / 5) {
    c = color(random([c1, c2, c3, c4, c5]));
    c.setAlpha(random(255));
    fill(c);
    rect(side, y, width - random(width * 0.05, width * 0.3), s / 5);
    fill(c);
    rect(
      side + random(width * 0.05, width * 0.2),
      y,
      random(width * 0.1, width * 0.6),
      s / 5
    );
  }
}

function bands2() {
  for (let y = 0; y < height; y += s / 5) {
    c = color(random([c1, c2, c3, c4, c5]));
    c.setAlpha(random(255));
    fill(c);
    push();
    translate(side, y);
    rotate(180);
    rect(0, 0, width * random(0.4, 0.7), s / 5);
    fill(c);
    // rect(
    //   0 + random(width * 0.05, width * 0.2),
    //   0,
    //   random(width * 0.1, width * 0.8),
    //   s / 5
    // );
    pop();
  }
}

function bands3() {
  for (let x = 0; x < width; x += s / 5) {
    c = color(random([c1, c2, c3, c4, c5]));
    c.setAlpha(random(255));
    fill(c);

    rect(x, side, s / 5, random(height * 0.2, height * 0.6));
    fill(c);
    rect(
      x,
      side + random(width * 0.05, width * 0.2),
      s / 5,
      random(height * 0.2, height * 0.6)
    );
  }
}

function bands4() {
  for (let x = 0; x < width; x += s / 5) {
    c = color(random([c1, c2, c3, c4, c5]));
    c.setAlpha(random(255));
    fill(c);

    push();
    translate(x, side);
    rotate(180);
    rect(0, 0, s / 5, random(height * 0.2, height * 0.6));
    fill(c);
    rect(
      0,
      0 + random(width * 0.05, width * 0.2),
      s / 5,
      random(height * 0.2, height * 0.6)
    );
    pop();
  }
}

function grain(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }
  updatePixels();
}

function keyTyped() {
  if (key === "s") {
    save("aligning.jpg");
  }
}
