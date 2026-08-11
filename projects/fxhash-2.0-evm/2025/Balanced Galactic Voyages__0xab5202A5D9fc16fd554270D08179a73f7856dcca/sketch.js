// --- GLOBAL DEĞİŞKENLER ---
let seed;
let currentPalette;

// Zenginleştirilmiş Paletler
const PALETTES = [
  { name: "Neon Tokyo", colors: ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d90429"] },
  { name: "Alien Jungle", colors: ["#0d1b2a", "#1b4332", "#40916c", "#74c69d", "#d8f3dc"] },
  { name: "Solar Flare", colors: ["#370617", "#6a040f", "#9d0208", "#e85d04", "#ffba08"] },
  { name: "Deep Ocean", colors: ["#03045e", "#023e8a", "#0077b6", "#00b4d8", "#90e0ef"] },
  { name: "Royal Void", colors: ["#10002b", "#240046", "#3c096c", "#7b2cbf", "#e0aaff"] },
  { name: "Synthwave", colors: ["#240046", "#3c096c", "#ff006e", "#8338ec", "#3a86ff"] }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  colorMode(HSB, 360, 100, 100, 100);
  generateArt();
}

function draw() {
  // Statik olduğu için draw boş bırakılabilir veya noLoop() kullanılabilir.
}

function mousePressed() {
  // Test için tıklayınca yeniden çiz
  generateArt();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateArt();
}

// --- AKILLI RENK SEÇİCİ ---
function getSmartColor(alphaVal = 100) {
  // YENİ SİSTEM: fxrand() yerine $fx.rand() kullanıyoruz
  // %20 ihtimalle "Wildcard" (Sürpriz Renk)
  if ($fx.rand() < 0.20) {
    return color($fx.rand() * 360, 80 + $fx.rand() * 20, 90 + $fx.rand() * 10, alphaVal);
  } else {
    // %80 ihtimalle Paletten
    let colStr = currentPalette.colors[floor($fx.rand() * currentPalette.colors.length)];
    let c = color(colStr);
    c.setAlpha(alphaVal);
    return c;
  }
}

// --- ANA ÜRETİM ---
function generateArt() {
  // YENİ SİSTEM: $fx.rand()
  seed = $fx.rand() * 999999;
  randomSeed(seed);
  noiseSeed(seed);
  
  currentPalette = PALETTES[floor($fx.rand() * PALETTES.length)];
  
  // Zemin
  let bg = color(currentPalette.colors[0]);
  bg.setAlpha(100);
  background(bg);

  // Katmanlar
  drawAtmosphere();
  
  blendMode(ADD); 
  drawFlowField();
  blendMode(BLEND);

  drawCosmicWeb();
  drawOrbs();
  addTexture();
  
  // Features (YENİ SİSTEM ÖZELLİKLERİ)
  $fx.features({
    "Base Palette": currentPalette.name,
    "Chaos Level": "20% Wildcard",
    "Atmosphere": $fx.rand() > 0.5 ? "Dense" : "Light"
  });
}

function drawAtmosphere() {
  let count = 80;
  noStroke();
  for(let i=0; i<count; i++) {
    let x = $fx.rand() * width;
    let y = $fx.rand() * height;
    let s = width * (0.2 + $fx.rand() * 0.4);
    let colIdx = floor($fx.rand() * currentPalette.colors.length);
    let c = color(currentPalette.colors[colIdx]);
    c.setAlpha(5 + $fx.rand() * 10);
    fill(c);
    ellipse(x, y, s, s);
  }
}

function drawFlowField() {
  let numLines = 1200;
  let scale = 0.003;
  noFill();
  for(let i=0; i<numLines; i++) {
    let x = $fx.rand() * width;
    let y = $fx.rand() * height;
    let c = getSmartColor(40); 
    stroke(c);
    strokeWeight($fx.rand() * 2);
    beginShape();
    let len = 20 + $fx.rand() * 50;
    for(let n=0; n<len; n++) {
      vertex(x, y);
      let angle = noise(x*scale, y*scale, seed) * TWO_PI * 4;
      x += cos(angle) * 3;
      y += sin(angle) * 3;
    }
    endShape();
  }
}

function drawCosmicWeb() {
  let nodes = [];
  let numNodes = 80;
  for(let i=0; i<numNodes; i++) {
    let isWild = $fx.rand() > 0.5;
    let col;
    if(isWild) col = color($fx.rand()*360, 90, 100, 100);
    else col = color(currentPalette.colors[floor($fx.rand()*currentPalette.colors.length)]);
    nodes.push({
      x: $fx.rand() * width,
      y: $fx.rand() * height,
      color: col
    });
  }
  noStroke();
  for(let n of nodes) {
    fill(n.color);
    ellipse(n.x, n.y, 4, 4);
    if($fx.rand() > 0.8) {
      fill(n.color.levels[0], n.color.levels[1], n.color.levels[2], 20);
      ellipse(n.x, n.y, 15, 15);
    }
  }
  for(let i=0; i<nodes.length; i++) {
    for(let j=i+1; j<nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if(d < 100) {
        let linkCol = nodes[i].color;
        linkCol.setAlpha(map(d, 0, 100, 60, 0));
        stroke(linkCol);
        strokeWeight(1);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
}

function drawOrbs() {
  let numOrbs = floor($fx.rand() * 4) + 1;
  for(let i=0; i<numOrbs; i++) {
    let x = $fx.rand() * width;
    let y = $fx.rand() * height;
    let s = $fx.rand() * 150 + 50;
    push();
    translate(x, y);
    let coreCol = color(currentPalette.colors[floor($fx.rand()*currentPalette.colors.length)]);
    noStroke();
    blendMode(ADD);
    coreCol.setAlpha(30);
    fill(coreCol);
    ellipse(0,0, s*1.2, s*1.2);
    blendMode(BLEND);
    let rings = 10;
    noFill();
    strokeWeight(3);
    for(let r=0; r<rings; r++) {
      let ringCol;
      if($fx.rand() < 0.4) {
        ringCol = color($fx.rand()*360, 90, 100, 80);
      } else {
        ringCol = color(currentPalette.colors[floor($fx.rand()*currentPalette.colors.length)]);
        ringCol.setAlpha(80);
      }
      stroke(ringCol);
      let diameter = s - (r * (s/rings));
      beginShape();
      for(let a=0; a<TWO_PI; a+=0.1) {
        let n = noise(cos(a)+i, sin(a)+r, seed);
        let rad = (diameter/2) + map(n, 0, 1, -5, 5);
        vertex(cos(a)*rad, sin(a)*rad);
      }
      endShape(CLOSE);
    }
    pop();
  }
}

function addTexture() {
  loadPixels();
  let d = pixelDensity();
  let count = 4 * (width * d) * (height * d);
  for (let i = 0; i < count; i += 4) {
    let amt = 20;
    if (Math.random() > 0.5) {
      pixels[i] += (Math.random()-0.5)*amt;
      pixels[i+1] += (Math.random()-0.5)*amt;
      pixels[i+2] += (Math.random()-0.5)*amt;
    }
  }
  updatePixels();
}