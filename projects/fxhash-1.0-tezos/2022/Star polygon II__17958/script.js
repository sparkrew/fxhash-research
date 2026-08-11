let scrSize;
let imgSize = 2000;

let A = 4;
let cg, gsfondo, p, R, R1, R2, R3, R4, R5;
let img, n;
x = imgSize / 2;
y = imgSize / 2;
vx = [];
vy = [];
valorip = [9, 10, 12, 15, 18, 24, 30, 36, 72];
let colore_anello1, colore_anello2, colore_quadrato, colore_sfondo, scelta_palette, icona, randomp, vertici;

function preload() {
  myFont = loadFont('assets/Montserrat-Regular.ttf');
  bussola = createImage(200, 200);
  bussola = loadImage('assets/bussola.svg');
  compasso = createImage(200, 200);
  compasso = loadImage('assets/compasso.svg');
  om = createImage(200, 200);
  om = loadImage('assets/om.svg');
  anchor = createImage(200, 200);
  anchor = loadImage('assets/anchor.svg');
  galactic_republic = createImage(200, 200);
  galactic_republic = loadImage('assets/galactic-republic.svg');
  hand_spock = createImage(200, 200);
  hand_spock = loadImage('assets/hand-spock.svg');
  jedi = createImage(200, 200);
  jedi = loadImage('assets/jedi.svg');
  quote = createImage(200, 200);
  quote = loadImage('assets/quote.svg');
  bookmark = createImage(200, 200);
  bookmark = loadImage('assets/bookmark.svg');
  randomp = int(fxrand() * 8);
  icona = int(fxrand() * 6);
  p = valorip[randomp];
  scelta_palette = int(fxrand() * 6);
  vertici = ceil((360 / p));
  let strft_icona;
  switch (icona){
    case 0:
      strft_icona = "Om";
      break;
    case 1:
      strft_icona = "Anchor";
      break;
    case 2:
      strft_icona = "Galactic Republic";
      break;
    case 3:
      strft_icona = "Spock Hand";
      break;
    case 4:
      strft_icona = "Jedi";
      break;
    case 5:
      strft_icona = "Compass";
      break;
  }
  
  switch (scelta_palette){
    case 0:   
      strft_palette = "Cadet Blue";
      break;
    case 1:      
      strft_palette = "Auburn";
      break;
    case 2:      
      strft_palette = "Oxford Blue";
      break;
    case 3:      
      strft_palette = "Celadon Blue";
      break;
    case 4:      
      strft_palette = "Earth Yellow";
      break;
    case 5:      
      strft_palette = "Bittersweet";
      break;
  }
  
  window.$fxhashFeatures = {
    "Palette": strft_palette,
    "Vertices": vertici,
    "Icon": strft_icona,
  }
}

function setup() {
  console.log("Created by Carla Chicchiero, fxhash: SuLuLab, twitter: @sululab, instagram: @sululab. Licensed under CC BY-NC-SA 4.0.");
  if (windowWidth > windowHeight) {
    scrSize = windowHeight;
  } else {
    scrSize = windowWidth;
  }
  createCanvas(scrSize, scrSize);
  cg = createGraphics(imgSize, imgSize, RGB);
  img = createImage(imgSize, imgSize);
  cg.pixelDensity(1);
  gsfondo = createGraphics(imgSize, imgSize, RGB);
  gsfondo.pixelDensity(1);
  cg.stroke(50, 50, 50, 100);
  cg.strokeWeight(1);
  palette(scelta_palette);
  gsfondo.background(colore_sfondo);
  dist_cerchi1 = 50;
  dist_cerchi2 = 20;
  R = 300;
  let delta2 = int(fxrand() * 100);
  R1 = 500 + delta2;
  let delta1 = int(fxrand() * 100);
  R3 = 600 + delta1;
  R2 = R + dist_cerchi1;
  R4 = R1 + dist_cerchi2;
  R5 = 700;

  i = 0;
  d = 800;
  delta = 600;
  cg.fill(255);
  cg.noFill();

  // cornice
  gsfondo.strokeWeight(5);
  n = 0;
  while (n < 360) { 
    gsfondo.stroke(255);
    var vertice_y2 = (imgSize) * sin(radians(n)) + y;
    var vertice_x2 = (imgSize) * cos(radians(n)) + y;
    gsfondo.line(x, y, vertice_x2, vertice_y2);
    ++n;
  }
  gsfondo.rectMode(CENTER);
  gsfondo.fill(colore_quadrato);
  gsfondo.square(imgSize / 2, imgSize / 2, imgSize - 50);
  gsfondo.noFill();
  gsfondo.strokeWeight(1);
  cg.stroke(50);
  cg.noFill();
  cg.rectMode(CENTER);
  cg.square(imgSize / 2, imgSize / 2, imgSize - 50);
  // fine cornice
  
  // scritte  
  cg.textFont(myFont, 20);
  cg.text("STAR POLYGON", 100, 100);
  cg.text("Vertices: " + ceil((360 / p)), 100, imgSize - 100);
  let z1 = 30;
  let z2 = 20;
  cg.text("A star polygon {p/q}, with p,q positive integers,", imgSize - 500 - z2, 100 - z1);
  cg.text("is a figure formed by connecting with straight", imgSize - 500 - z2, 130 - z1);
  cg.text("lines every qth point out of p regularly spaced", imgSize - 500 - z2 + 5, 160 - z1);
  cg.text("points lying on a circumference.", imgSize - 380, 190 - z1);
  cg.textStyle(ITALIC);
  cg.text("(Wolfram MathWorld)", imgSize - 280, 220 - z1);
  cg.textStyle(NORMAL);
  // scritte

  for (var beta = 0; beta < 360; beta++) {
    // anello 1
    gsfondo.stroke(colore_anello1);
    for (var b = 0; b < 5; b++) {
      var vertice_y2 = R2 * sin(radians(beta)) + y;
      var vertice_x2 = R2 * cos(radians(beta)) + y;
      ddr1 = int(fxrand() * 5) + 5;
      var segno1 = int(fxrand() * 2);
      segno1 ? 1 : -1;
      var vertice_y1 = R1 * sin(radians(beta + ddr1 * segno1)) + y;
      var vertice_x1 = R1 * cos(radians(beta + ddr1 * segno1)) + y;
      gsfondo.line(vertice_x2, vertice_y2, vertice_x1, vertice_y1);
    }
    // anello 2
    gsfondo.stroke(colore_anello2);
    for (var b = 0; b < 10; b++) {
      var vertice_y2 = R4 * sin(radians(beta)) + y;
      var vertice_x2 = R4 * cos(radians(beta)) + y;
      ddr1 = int(fxrand() * 5) + 5;
      var segno1 = int(fxrand() * 2);
      segno1 ? 1 : -1;
      var vertice_y1 = R3 * sin(radians(beta + ddr1 * segno1)) + y;
      var vertice_x1 = R3 * cos(radians(beta + ddr1 * segno1)) + y;
      gsfondo.line(vertice_x2, vertice_y2, vertice_x1, vertice_y1);
    }
  }
  gsfondo.filter(BLUR, 3);  
  
  for (var beta = 0; beta < 360; beta++) {
    var vertice_y = R * sin(radians(beta)) + y;
    var vertice_x = R * cos(radians(beta)) + y;
    if (beta % p == 0){
      vx[i] = vertice_x;
      vy[i] = vertice_y;
      ++i;
    }
  }

  // poligono
  cg.stroke(50, 50, 50, 100);
  cg.fill(220);
  cg.strokeWeight(1);
  for (var f1 = 0; f1 < 360 / p; f1++) {
    for (var f2 = 0; f2 < 360 / p; f2++) {
      cg.line(vx[f1], vy[f1], vx[f2], vy[f2]);
    }
  }  
  cg.noFill();
  cg.stroke(255);
  
  // anello 3
  for (var i = 0; i <= 40; i++) { 
    for (var f1 = 0; f1 <= 360 / p; f1++) { 
      ddr1 = int(fxrand() * 15) + 15;
      var segno1 = int(fxrand() * 2);
      if (segno1 == 0){
        segno1 = -1;
      } else {
        segno1 = 1;
      }
      var vertice_y1 = R5 * sin(radians(f1 * p + ddr1 * segno1)) + y;
      var vertice_x1 = R5 * cos(radians(f1 * p + ddr1 * segno1)) + y;
      cg.line(vx[f1], vy[f1], vertice_x1, vertice_y1);
    }
  }
  cg.stroke(255);
  cg.strokeWeight(4);
  cg.circle(x, y, 2*R5);
  cg.strokeWeight(1);

  // frecce
  n = 0;
  while (n * p < 360) { 
    cg.stroke(50);
    ddr1 = int(fxrand() * 150) + 50;
    var vertice_y2 = (R5 + ddr1) * sin(radians(n * p)) + y;
    var vertice_x2 = (R5 + ddr1) * cos(radians(n * p)) + y;
    cg.line(vx[n], vy[n], vertice_x2, vertice_y2);
    cg.push(); 
    angolo = -PI/2;
    cg.translate(vertice_x2, vertice_y2);
    cg.rotate(radians(n * p - 90));
    cg.translate(-vertice_x2, -vertice_y2);
    cg.triangle(vertice_x2 + 10, vertice_y2, vertice_x2 - 10, vertice_y2, vertice_x2, vertice_y2 + 20);
    cg.pop();
    cg.textFont(myFont, 20);
    cg.text(n * p, vertice_x2 + 25 * Math.sign(cos(radians(n * p))), vertice_y2 + 40 * Math.sign(sin(radians(n * p))));
    ++n;
  }
  cg.stroke(255);
  img.blend(gsfondo, 0, 0, imgSize, imgSize, 0, 0, imgSize, imgSize, LIGHTEST);
  img.copy(cg, 0, 0, imgSize, imgSize, 0, 0, imgSize, imgSize);
  img.copy(bookmark, 0, 0, imgSize, imgSize, 100, 150, 800, 800);
  img.copy(compasso, 0, 0, imgSize, imgSize, 150, imgSize - 220, 800, 800);  
  img.copy(quote, 0, 0, imgSize, imgSize, imgSize - 110, 220, 800, 800);  
  switch (icona){
    case 0:
      img.copy(om, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;
    case 1:
      img.copy(anchor, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;
    case 2:
      img.copy(galactic_republic, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;
    case 3:
      img.copy(hand_spock, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;
    case 4:
      img.copy(jedi, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;
    case 5:
      img.copy(bussola, 0, 0, imgSize, imgSize, imgSize - 150, imgSize - 150, 800, 800);
      break;

  }
  image(img, 0, 0, scrSize, scrSize); 
}


function palette(k){
  switch (k){
    case 0:    
      colore_anello1 = color(103, 162, 155);
      colore_anello2 = color(167, 111, 128);
      colore_quadrato = color(230);
      colore_sfondo = color(103, 162, 155, 180);
      break;
    case 1:      
      colore_anello1 = color(13, 37, 61);
      colore_anello2 = color(158, 43, 43);
      colore_quadrato = color(207, 230, 219);
      colore_sfondo = color(158, 43, 43, 50);
      break;
    case 2:      
      colore_anello1 = color(13, 37, 61);
      colore_anello2 = color(158, 43, 43);
      colore_quadrato = color(207, 230, 219);
      colore_sfondo = color(13, 37, 61);
      break;
    case 3:      
      colore_anello1 = color(69, 123, 157);
      colore_anello2 = color(230, 57, 70);
      colore_quadrato = color(227, 243, 221);
      colore_sfondo = color(69, 123, 157);
      break;
    case 4:      
      colore_anello1 = color(96, 108, 56);
      colore_anello2 = color(221, 161, 94);
      colore_quadrato = color(236, 236, 211);
      colore_sfondo = color(221, 161, 94);
      break;
    case 5:      
      colore_anello1 = color(240, 113, 103);
      colore_anello2 = color(0, 129, 167);
      colore_quadrato = color(236, 236, 211);
      colore_sfondo = color(0, 129, 167);
      break;
  }
}

function keyPressed() {
  if (key == 's') {
    img.save("polygon.png");
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    scrSize = windowHeight;
  } else {
    scrSize = windowWidth;
  }
  resizeCanvas(scrSize, scrSize);
  image(img, 0, 0, scrSize, scrSize);
}