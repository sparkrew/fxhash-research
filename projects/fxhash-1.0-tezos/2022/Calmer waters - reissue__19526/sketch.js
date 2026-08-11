//Calmer waters by Lucas S. Reveil, original 13.3.2022, reissue september 2022


//noprotect

let yoff = 0.0;
var outOfFocus = false
var radiation = false
var clouds = false
var dam = false
var songs, umBirds, sun, rad, sunSize, clouds, shimmering, birds, song, feat

function preload() {
  seed = fxrand() * 100000
  randomSeed(seed);
  noiseSeed(seed);
  var songs = ['Arvo Part: Spiegel im spiegel',
    'Max Richter: On the nature of daylight',
    "Max Richter: Vladimir's Blues",
    'Max Richter: Dream 3 in the midst of my life (Sleep)',
    'Olivia Belli, Enrico Belli: Still blue.',
    'Peter Gregson: Recomposed: Bach - the cello suites.',
    'Howard Skempton: Lento',
    'Eric Satie: Gymnopedie no. 1',
    'Yiruma: River flows in you',
    'Ludovico Einaudi: Una mattina',
    "Yann Tiersen: Comptine d'un autre ete, l'apres midi",
    'Johann Johannsson: The theory of everything',
    'Peter Gregson, Warren Zielinski, Magdalena Filipczak, Meghan Cassidy, Richard Harwood: Sequence (Four)',
    'Nils Frahm: Ambre',
    'Niklas Paschberg: Sand whirling',
    'Olafur Arnalds: Saman',
    'Olafur Arnalds: Happiness does not wait',
    'Joep Beving:Sleeping lotus',
    'Otto A. Totland: Pino',
    'Otto A. Totland: Soler',
    'Becky Ainge: Waves',
    'Norman Duck: Weightless',
    'Sylvio: Overcast',
    'Sean Oban: Ripples',
    'Josh Kramer: Night Solace',
    'Wim Mertens: Close cover',
    'Joep Beving: For Mark',
    'Daigo Hanada: Reflection',
    "Dustin O'Halloran, Hauschka: Lion theme",
    'Silence'
  ]
  song = songs[floor(random(songs.length))]

  window.$fxhashFeatures = {
    "Features?": 'Only pixels colored with code, love and gratitude',
    "Suggested accompanying audio": song,
  }
}

function setup() {
  seed = fxrand() * 100000
  randomSeed(seed);
  noiseSeed(seed);
  var sun = random()
  let numBirds = random([0, 0, 1, 1, 1, 1, 2, 2, 3, 4, 5, 1, 2, 3, 4, 5, 20]);
  var col = random()
  var rad = random()
  var clouds = random()
  if (rad < 0.2) {
    radiation = true
  }

  createCanvas(innerWidth, innerHeight);
  var p = createGraphics(width, height)
  var b = createGraphics(width, height)
  var locSunx = random(width * 0.1, width * 0.9)
  var sunSize = random([height / 6, height / 8])
  var locSuny = random(height / 6, height / 8)
  background(200);
  var col1 = color(200)
  var col2 = color(100)
  gradient(0, 0, width, height / 3, col2, col1)
  for (var i = 0; i < 1600; i++) {
    noStroke()
    fill(0 + i, 200 - i)
    line(0, i, width, i)
  }

  let kl = 190;
  let sKl = 200;
  let xoff = 0;
  let offset = 2

  //sun
  if (sun < 0.8) {
    var sA = 200
    var fA = 200
    p.strokeWeight(8)
    p.stroke(236, sA);
    p.fill(236, fA);
    p.ellipse(locSunx, locSuny, sunSize);

    if (radiation) {
      sA = 5
      fA = 6
      p.noStroke();
      p.fill(236, fA);
      for (var i = 0; i < 50; i++) {
        p.ellipse(locSunx, locSuny, sunSize);
        sunSize += 3
        fA -= 0.4
      }
    }
    image(p, 0, 0)
  }

  //ocean waves: one wave line: https://p5js.org/examples/math-noise-wave.html
  tint(255, 255)
  fill(200)
  strokeWeight(1)
  stroke(200, 50)
  rect(0, height / 3, width, height)
  val = 5
  offset = 2
  //background water
  for (var i = 0; i < height * 0.5; i++) {
    stroke(sKl, 10);
    fill(random(kl - 14, kl + 14));
    strokeWeight(0.25);
    beginShape();
    for (let x = 0; x <= width * 1.3; x += val) {
      y = map(noise(xoff), 0, 1, height / 3.4, height / 3.3);
      vertex(x, y + i * offset);
      xoff += 0.025;
    }
    vertex(width, height + height / 4);
    vertex(-height / 4, height + height / 4);
    endShape(CLOSE);
    kl -= 0.7;
    sKl -= 0.2;
  }
  //foreground water
  tint(255, 180)
  //filter(BLUR, 1)
  image(b, 0, 0)
  tint(255, 255)
  val = 6
  kl = 180;
  offset = 2
  fill(kl, 255);
  for (var i = 0; i < height * 0.5; i++) {
    //stroke(sKl, 10);
    noStroke()
    fill(random(kl - 15, kl + 15), 80);
    strokeWeight(0.5);
    beginShape();
    for (let x = 0; x <= width * 1.3; x += val) {
      y = map(noise(xoff), 0, 1, height / 3.4, height / 2.8)
      vertex(x, y + i * offset);
      xoff += 0.03;
    }
    vertex(width, height + height / 4);
    vertex(-height / 4, height + height / 4);
    endShape(CLOSE);
    kl -= 0.5;
    sKl -= 1;
  }
  yoff += 0.1;

  //shimmering
  if (sun < 0.65) {
    numSh = height * 2;
    for (let i = 0; i < numSh; i++) {
      b.fill(200, random(10, 50));
      b.noStroke();
      var ySh = random(height / 3.24, height);
      let val = randomGaussian();
      let sd = sunSize / 2.5
      let mean = locSunx;
      let xSh = val * sd + mean;
      let sc = map(ySh, height / 3, height, 8, 7);
      let d = dist(xSh, ySh, mean, ySh)
      let shC = map(d, 0, sd * 1.5, 255, 180);
      let shA = map(ySh, height / 3, height, 160, 40);
      b.fill(shC, shA);
      b.ellipse(xSh, ySh, sc, random(sc * 0.1, sc * 0.7));
    }
    tint(255, 180)
    filter(BLUR, 1)
    image(b, 0, 0)
    tint(255, 255)
  }

  //clouds
  if (sun < 0.8) {
    clouds = true
    numCl = random([width * 2, width * 3]);
    for (let i = 0; i < numCl; i++) {
      noStroke();
      xCo = random(width);
      yCo = random(0, height / 5);
      cloudC = map(yCo, 0, height / 5, 140, 180);
      cloudCA = map(yCo, 0, height / 6, 80, 20);
      fill(cloudC, cloudCA);
      ellipse(xCo, yCo, random(80));
    }
  } else {
    if (random() < 0.3) {
      clouds = true
      numCl = random([width * 2, width * 3]);
      for (let i = 0; i < numCl; i++) {
        noStroke();
        xCo = random(width);
        yCo = random(0, height / 5);
        cloudC = map(yCo, 0, height / 5, 140, 180);
        cloudCA = map(yCo, 0, height / 6, 80, 20);
        fill(cloudC, cloudCA);
        ellipse(xCo, yCo, random(80));
      }
    }
  }

  for (var i = 0; i < numBirds; i++) {
    seed = fxrand() * 1000000
    randomSeed(seed);
    noiseSeed(seed);
    push();
    translate(
      width / 8 + random(width - width / 8),
      random(height / 10, height / 3.5)
    );
    rotate(radians(random(-40, 40)));
    drawBird();
    pop();
  }

  if (col < 0.3) {
    fill(0, 91, 187, 60)
    rect(0, 0, width, height)
  }

  if (col >= 0.3 && col < 0.6) {
    fill(187, 91, 0, 70)
    rect(0, 0, width, height)
  } else {
    fill(30, 30)
    rect(0, 0, width, height)
  }

  /*https://p5js.org/reference/#/p5/pixels
  changing the alpha values of each pixel: 
  array of pixels. 
  */
  loadPixels()
  let d = pixelDensity();
  let imageP = 4 * (width * d) * (height * d);
  for (let i = 0; i < imageP; i += 4) {
    pixels[i + 3] = random(190, 240)
  }
  updatePixels();
  
  fxpreview()
}

function drawBird() {
  seed = fxrand() * 100000
  randomSeed(seed);
  noiseSeed(seed);
  var wingL = random(width / 40, width / 20);
  var wingH = random(wingL / 4.5, wingL / 2);
  var sW = map(wingL, width / 40, width / 20, 1, 2);
  strokeWeight(sW);
  noFill();
  stroke(200, 230)
  bezier(
    -wingL,
    0,
    -wingL / 2,
    -wingH / 3,
    -wingL / 3,
    -wingH,
    -wingL / 15,
    -wingL / 15
  );
  bezier(
    wingL / 15,
    -wingL / 15,
    wingL / 3,
    -wingH,
    wingL / 2,
    -wingH / 3,
    wingL,
    0
  );
  strokeWeight(sW / 1.3);
  stroke(170, 230)
  bezier(
    -wingL + 1,
    0,
    -wingL / 2,
    -wingH / 3 + 1,
    -wingL / 3,
    -wingH + 1,
    -wingL / 15,
    -wingL / 15 + 3
  );
  bezier(
    wingL / 15,
    -wingL / 15 + 3,
    wingL / 3,
    -wingH + 1,
    wingL / 2,
    -wingH / 3 + 1,
    wingL - 1,
    0
  );

  noStroke();
  fill(180, 180)
  beginShape()
  vertex(-wingL / 12, 0)
  vertex(-wingL / 6, wingL / 10)
  vertex(0, wingL / 6)
  vertex(wingL / 6, wingL / 10)
  vertex(wingL / 12, 0)
  endShape(CLOSE)

  noStroke()
  fill(190, 220);
  ellipse(0, 0, wingL / 7, wingL / 6.8);

  stroke(150, 200)
  beginShape()
  vertex(-wingL / 100, wingL / 16)
  vertex(0, wingL / 9)
  vertex(wingL / 100, wingL / 16)
  endShape(CLOSE)
}

function gradient(x, y, x2, y2, col1, col2) {
  noFill();
  for (let i = y; i <= y + y2; i++) {
    let overgang = map(i, y, y + y2, 0, 1);
    let c = lerpColor(col1, col2, overgang);
    stroke(c);
    line(x, i, x + x2, i);
  }
}

function keyPressed() {
  if (keyIsDown(83)) {
    saveCanvas('calmer_waters.jpg')
  }
}