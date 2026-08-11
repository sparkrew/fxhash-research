let divider,
  border,
  htd,
  h,
  u,
  palette,
  col,
  tekengebiedB,
  tekengebiedH,
  breedte,
  breedte1,
  rA,
  diameter,
  hoogte,
  hoogte1,
  rot,
  aantalO;

function setup() {
  randomSeed(fxrand() * 12345678);
  noiseSeed(fxrand() * 12345678);
  if (windowWidth > 600 && windowHeight > 600) {
    if (windowHeight < windowWidth) {
      createCanvas(windowHeight, windowHeight);
    } else {
      createCanvas(windowWidth, windowWidth);
    }
  } else {
    createCanvas(600, 600);
  }

  pg = createGraphics(width, height);
  pg2 = createGraphics(width, height);
  blendMode(DIFFERENCE);
  frameRate(60);

  palette = [
    ["#E5E2DD", "#FFFBF5", "#F9F9F9", "#F0F0F0", "#BBB7B0"],
    [
      "#d8f3dc",
      "#b7e4c7",
      "#95d5b2",
      "#74c69d",
      "#52b788",
      "#40916c",
      "#2d6a4f",
      "#1b4332",
      "#081c15",
    ],
    ["#d6a2ad", "#c3b59f", "#a0af84", "#668f80", "#4a6670"],
    ["#0F0B26", "#522421", "#8C5A2E", "#BF8641", "#B3B372"],
    ["#4D7186", "#284253", "#E0542E", "#F4A720", "#EF8C12"],
    ["#011640", "#2D5873", "#7BA696", "#BFBA9F", "#BF9663"],
    [
      "#eae4e9",
      "#fff1e6",
      "#fde2e4",
      "#fad2e1",
      "#e2ece9",
      "#bee1e6",
      "#f0efeb",
      "#dfe7fd",
      "#cddafd",
    ],
  ];
  col = random(palette);
  background(random(col));
  border = width / 12;
  tekengebiedB = width - border * 2;
  tekengebiedH = height - border * 2;
  divider = tekengebiedH / 2;
  marge = random([width / 24, width / 12]);
  aantal = floor(random(1, 9));
  pg.noStroke();
  breedte1 = tekengebiedB - marge * (aantal - 1);
  breedte = breedte1 / aantal;
  htd = divider - marge / 2 + border;
  pg.fill(220);
  for (var i = 0; i < aantal; i++) {
    rot = random([0, random([-1, 1])]);
    pg.fill(random(col));
    pg.push();
    pg.translate(border + i * breedte + i * marge, border);
    pg.rotate(radians(rot));
    pg.rect(0, 0, breedte, htd);
    pg.pop();
  }
  aantalO = floor(random(1, 8));
  hoogte1 = divider - border - marge * (aantalO - 1);
  hoogte = hoogte1 / aantalO;
  for (var j = 0; j < aantalO; j++) {
    rot = random([0, random([-1, 1])]);
    pg.fill(random(col));
    pg.push();
    pg.translate(border, border + divider + marge + j * hoogte + j * marge);
    pg.rotate(radians(rot));
    pg.rect(0, 0, width - border * 2, hoogte);
    pg.pop();
  }

  image(pg, 0, 0, width, height);

  var pBg = random();
  if (pBg >= 0.5) {
    fill(random(col));
    noStroke();
    rect(0, height * 0.25, width, height);
    rect(0, height * 0.5, width, height);
    rect(0, height * 0.75, width, height);
    rect(width * 0.25, 0, width * 0.25, height);
    rect(width * 0.5, 0, width * 0.5, height);
    rect(width * 0.75, 0, width * 0.75, height);
  }

  fill(random(col));
  rA = 0.005;
  diameter = random([width / 4, width / 3, width / 2]);
  noiseScale = random([0, random([5, 10, 20, 50, 100, 200, 2000])]);
  beginShape();
  strokeWeight(2);
  for (var a = 0; a < TWO_PI; a += rA) {
    var xoff = cos(a) + 6;
    var yoff = sin(a) + 4;
    var r = diameter + map(noise(xoff, yoff), 0, 1, -noiseScale, noiseScale);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(width / 2 + x, height / 2 + y);
  }
  endShape(CLOSE);

  // pg2.rect(0, 0, width, height);
  // image(pg2, 0, 0, width, height);

  loadPixels();
  let pD = pixelDensity();
  let h = 10 * (width * pD) * (height * pD);
  for (let i = 0; i < h; i += 4) {
    amount = random(-20, 20);
    pixels[i] = pixels[i] + amount;
    pixels[i + 1] = pixels[i + 1] + amount;
    pixels[i + 2] = pixels[i + 2] + amount;
    pixels[i + 3] = pixels[i + 3] + amount;
  }
  updatePixels();

  function getFeatureString(noiseScale) {
    if (noiseScale === 0) return "Yes. It's perfect.";
    if (noiseScale === 5) return "No. Distortion 1.";
    if (noiseScale === 10) return "No. Distortion 2.";
    if (noiseScale === 20) return "No. Distortion 3.";
    if (noiseScale === 50) return "No. Distortion 4.";
    if (noiseScale === 100) return "No. Distortion 5.";
    if (noiseScale === 200) return "No. Distortion 6.";
    if (noiseScale === 2000) return "No. Distortion 7.";
  }

  function getFeatureStringBg(pBg) {
    if (pBg < 0.5) return "uniform";
    else return "rectangels";
  }

  function getFeatureStringcP(col) {
    if (col === palette[0]) return "1";
    if (col === palette[1]) return "2";
    if (col === palette[2]) return "3";
    if (col === palette[3]) return "4";
    if (col === palette[4]) return "5";
    if (col === palette[5]) return "6";
    if (col === palette[6]) return "7";
  }

  window.$fxhashFeatures = {
    // each token will have a different "Super" feature value between 0 and 1
    //"Super": fxrand()
    Rectangles: aantal + aantalO,
    "Perfect circel?": getFeatureString(noiseScale),
    Background: getFeatureStringBg(pBg),
    "Color palette": getFeatureStringcP(col),
  };
}

function mousePressed() {
  saveCanvas("ongemak.jpeg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
