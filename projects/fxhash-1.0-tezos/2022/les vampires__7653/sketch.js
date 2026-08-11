function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}
function preload() {
  img1 = loadImage("images/bw.png");
  img2 = loadImage("images/blue.png");
  img3 = loadImage("images/darkblue.png");
  img4 = loadImage("images/green.png");
  img5 = loadImage("images/maroon.png");
  img6 = loadImage("images/violet.png");
  img7 = loadImage("images/redish.png");
  img8 = loadImage("images/vcrglitch.png");
  img9 = loadImage("images/browny.png");
  img10 = loadImage("images/col1.png");
  img11 = loadImage("images/col2.png");
  img12 = loadImage("images/linech.png");
  img13 = loadImage("images/oily.png");
  img14 = loadImage("images/pixel.png");
  img15 = loadImage("images/batwings.png");
  img16 = loadImage("images/batears.png");
  img17 = loadImage("images/reddich.png");
  img18 = loadImage("images/bat.png");
  img19 = loadImage("images/glassy.png");

  noLoop();
}

function draw() {
  randomSeed(fxrand() * 1000);

  let fary = windowHeight / img1.height;

  let ra = random(255);
  let ga = random(255);
  let ba = random(255);
  let tia = random(55);
  let rha = random(55);
  let gha = random(55);
  let bha = random(55);
  let tha = random(25, 205);
  let vha = random(55, 255);
  let mha = random(45, 105);
  let nha = random(150, 400);
  let oha = random(999);
  let saa = random(2, 4);
  let rota = random(-5, 5);
  let xy = random(25)
  fill(xy);
  stroke(xy);
  rect(0, 0, windowWidth, windowHeight);

  imageMode(CENTER);

  push();
  tint(ra, ga, ba, tia);
  image(
    img1,
    windowWidth / 2,
    (windowHeight / 21) * 10,
    windowHeight * saa,
    windowHeight * saa
  );
  pop();

  push();
  rotate(PI / 360 - 3 * gha);
  tint(ra, ga, ba, tha);
  image(
    img15,
    (windowWidth / 100) * bha,
    (windowHeight / 100) * gha,
    (windowHeight / 100) * 150,
    (windowHeight / 100) * 150
  );
  pop();
  push();
  rotate(PI / (360 - 2 * rha));
  tint(ga, ra, ba, tha);
  image(
    img15,
    (windowWidth / 100) * 55,
    (windowHeight / 100) * 80,
    (windowHeight / 100) * 120,
    (windowHeight / 100) * 120
  );
  pop();
  push();
  rotate(PI / (360 - bha));
  tint(bha, gha, rha, tha);
  image(
    img18,
    (windowWidth / 100) * 20,
    (windowHeight / 100) * gha,
    (windowHeight / 100) * gha,
    (windowHeight / 100) * gha
  );
  pop();
  push();
  tint(rha, bha, gha, mha);
  image(
    img18,
    (windowWidth / 100) * bha,
    (windowHeight / 100) * rha,
    (windowHeight / 100) * rha,
    (windowHeight / 100) * rha
  );
  pop();
  push();
  rotate(PI / 200);
  tint(rha, gha, bha, mha);
  image(
    img18,
    (windowWidth / 100) * 80,
    (windowHeight / 100) * bha,
    (windowHeight / 100) * 20,
    (windowHeight / 100) * 20
  );
  pop();

  push();
  rotate(PI / (360 - bha));
  fill(0, vha);
  stroke(0, vha);
  ellipse(windowWidth / 2, windowHeight, oha, nha);
  pop();
  push();
  strokeWeight(35);
  fill(0, 0);
  stroke(0, vha);
  rotate(PI / 220);
  ellipse(
    windowWidth / 2 + (windowHeight / 200) * 3,
    (windowHeight / 100) * 43,
    ((img1.width * fary) / 100) * 34,
    ((img1.height * fary) / 100) * 50
  );
  pop();
  push();
  fill(0, vha);
  stroke(0, vha);
  triangle(
    windowWidth / 2 - fary * 1300,
    fary * 1700,
    windowWidth / 2 + fary / 100,
    fary * 2000,
    windowWidth / 2,
    fary * 3400
  );
  triangle(
    windowWidth / 2 + fary * 1400,
    fary * 1700,
    windowWidth / 2 + fary / 100,
    fary * 2000,
    windowWidth / 2,
    fary * 3400
  );
  quad(
    windowWidth / 2 - fary * 1000,
    windowHeight,
    windowWidth / 2 + fary * 1020,
    windowHeight,
    windowWidth / 2 + fary * 780,
    fary * 2200,
    windowWidth / 2 - fary * 720,
    fary * 2190
  );
  quad(
    windowWidth / 2 - fary * 850,
    windowHeight,
    windowWidth / 2 + fary * 900,
    windowHeight,
    windowWidth / 2 + fary * 330,
    fary * 2010,
    windowWidth / 2 - fary * 270,
    fary * 1990
  );
  pop();
  push();
  rotate(PI / -75);
  tint(rha, gha, bha, vha);
  image(
    img16,
    windowWidth / 2 - windowHeight / 98,
    (windowHeight / 200) * 87,
    ((img1.width * fary) / 100) * 70,
    ((img1.height * fary) / 100) * 80
  );
  pop();

  push();
  let pickface1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img17, img19];
  let endface1 = random(pickface1);
  let t1 = random(35);
  tint(255, 255, 255, t1);
  image(
    endface1,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();
  push();
  let pickface2 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img17, img19];
  let endface2 = random(pickface2);
  let t2 = random(35);
  tint(255, 255, 255, t2);
  image(
    endface2,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();
  push();
  let pickface3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img17, img19];
  let endface3 = random(pickface3);
  let t3 = random(25);
  tint(255, 255, 255, t3);
  image(
    endface3,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();
  push();
  let pickface4 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img17, img19];
  let endface4 = random(pickface4);
  let t4 = random(25);
  tint(255, 255, 255, t4);
  image(
    endface4,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();

  push();
  let rb = random(255);
  let gb = random(255);
  let bb = random(255);
  let tib = random(35);
  let sab = random(1, 4);
  let rotb = random(-5, 5);
  rotate(PI / rotb);
  tint(rb, gb, bb, tib);
  image(
    img2,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * sab,
    (img1.height * fary)* sab
  );
  pop();

  push();
  let rc = random(255);
  let gc = random(255);
  let bc = random(255);
  let tic = random(35);
  let sac = random(1, 4);
  let rotc = random(-5, 5);
  rotate(PI / rotc);
  tint(rc, gc, bc, tic);
  image(
    img3,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * sac,
    (img1.height * fary) * sac
  );
  pop();

  push();
  rotate(PI / (360 - bha));
  fill(0, tha);
  stroke(0, tha);
  ellipse(windowWidth / 2, windowHeight, oha, nha);
  push();
  fill(0, tha);
  stroke(0, tha);
  triangle(
    windowWidth / 2 - fary * 1300,
    fary * 1700,
    windowWidth / 2 + fary / 100,
    fary * 2000,
    windowWidth / 2,
    fary * 3400
  );
  triangle(
    windowWidth / 2 + fary * 1400,
    fary * 1700,
    windowWidth / 2 + fary / 100,
    fary * 2000,
    windowWidth / 2,
    fary * 3400
  );
  quad(
    windowWidth / 2 - fary * 1000,
    windowHeight,
    windowWidth / 2 + fary * 1020,
    windowHeight,
    windowWidth / 2 + fary * 780,
    fary * 2200,
    windowWidth / 2 - fary * 720,
    fary * 2190
  );
  quad(
    windowWidth / 2 - fary * 850,
    windowHeight,
    windowWidth / 2 + fary * 900,
    windowHeight,
    windowWidth / 2 + fary * 330,
    fary * 2010,
    windowWidth / 2 - fary * 270,
    fary * 1990
  );
  pop();
  push();
  rotate(PI / -75);
  tint(ra, ga, ba, tha);
  image(
    img16,
    windowWidth / 2 - windowHeight / 98,
    (windowHeight / 200) * 87,
    ((img1.width * fary) / 100) * 70,
    ((img1.height * fary) / 100) * 80
  );
  pop();
  push();
  strokeWeight(35);
  fill(0, 0);
  stroke(0, tha);
  rotate(PI / 220);
  ellipse(
    windowWidth / 2 + (windowHeight / 200) * 3,
    (windowHeight / 100) * 43,
    ((img1.width * fary) / 100) * 34,
    ((img1.height * fary) / 100) * 50
  );
  pop();

  push();
  let rd = random(255);
  let gd = random(255);
  let bd = random(255);
  let tid = random(35);
  let sad = random(1, 4);
  let rotd = random(-5, 5);
  rotate(PI / rotd);
  tint(rd, gd, bd, tid);
  image(
    img4,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * sad,
    (img1.height * fary) * sad
  );
  pop();
  push();
  let re = random(255);
  let ge = random(255);
  let be = random(255);
  let tie = random(35);
  let sae = random(1, 4);
  let rote = random(-5, 5);
  rotate(PI / rote);
  tint(re, ge, be, tie);
  image(
    img5,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * sae,
    (img1.height * fary) * sae
  );
  pop();
  push();
  let rf = random(255);
  let gf = random(255);
  let bf = random(255);
  let tif = random(35);
  let saf = random(2, 4);
  let rotf = random(-5, 5);
  rotate(PI / rotf);
  tint(rf, gf, bf, tif);
  image(
    img6,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * saf,
    (img1.height * fary) * saf
  );
  pop();
  push();
  let rg = random(255);
  let gg = random(255);
  let bg = random(255);
  let tig = random(35);
  let sag = random(2, 4);
  let rotg = random(-5, 5);
  rotate(PI / rotg);
  tint(rg, gg, bg, tig);
  image(
    img7,
    windowWidth / 2,
    (windowHeight / 22) * 10,
    (img1.width * fary) * sag,
    (img1.height * fary) * sag
  );
  pop();

  push();
  let rot1 = random(260, 360);
  rotate(PI / rot1);
  tint(ra, ga, ba, tia);
  image(
    img1,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 61,
    ((img1.height * fary) / 100) * 61
  );
  pop();
  push();
  let rot2 = random(25, 360);
  rotate(PI / rot2);
  tint(rb, gb, bb, tib);
  image(
    img2,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 61,
    ((img1.height * fary) / 100) * 61
  );
  pop();
  push();
  let rot3 = random(50, 360);
  rotate(PI / rot3);
  tint(rc, gc, bc, tic);
  image(
    img3,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 200) * 121,
    ((img1.height * fary) / 200) * 121
  );
  pop();
  push();
  let rot4 = random(100, 360);
  rotate(PI / rot4);
  tint(rd, gd, bd, tid);
  image(
    img4,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 200) * 121,
    ((img1.height * fary) / 200) * 121
  );
  pop();
  push();
  let rot5 = random(150, 360);
  rotate(PI / rot5);
  tint(re, ge, be, tie);
  image(
    img5,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();
  push();
  let rot6 = random(200, 360);
  rotate(PI / rot6);
  tint(rf, gf, bf, tif);
  image(
    img6,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();

  push();
  rotate(PI / (360 - bha));
  tint(rha, gha, bha, bha);
  image(
    img18,
    windowWidth / 2 - rot5,
    (windowHeight / 100) * rha,
    (windowHeight / 100) * bha,
    (windowHeight / 100) * bha
  );
  pop;

  push();
  let pickface5 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img17, img19];
  let endface5 = random(pickface5);
  let t5 = random(25, 75);
  tint(255, 255, 255, t5);
  image(
    endface5,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  pop();
  
  
    push();  
  let pickface6 = [img1, img2, img3, img4, img5, img12];
  let endface6 = random(pickface6);
  let tt6 = random(125, 175);
  let iy = random(100);
  
  if (iy < 90) {
    tint(255, 255, 255, tt6);
    image(
    endface6,
    windowWidth / 2,
    (windowHeight / 100) * 45,
    ((img1.width * fary) / 100) * 60,
    ((img1.height * fary) / 100) * 60
  );
  }
    pop();

  push();
  let m7 = img7
  let n7 = img7
  let o7 = img7
  let m11 = img11
  
  let t6 = random(155, 225);
  let t7 = random(155, 225);
  let t8 = random(175, 255);
  let tt8 = random(175, 235)
  let t9 = random(10, 30);
  let za = random(205, 255);
  let zb = random(205, 255);
  let zc = random(205, 255);
  
  let pickface7 = [o7, n7, m7, img7, img8, m11, img11];
  let endface7 = random(pickface7); 
  
  let ix = random(100);
  
  if (ix < 10) {
    tint(t7, t7, t8, tt8);
    image(
      img14,
      windowWidth / 2,
      (windowHeight / 100) * 45,
      ((img1.width * fary) / 100) * 60,
      ((img1.height * fary) / 100) * 60
    );
  }
  if (ix > 25) {
    tint(za, zb, zc, t6);
    image(
      endface7,
      windowWidth / 2,
      (windowHeight / 100) * 45,
      ((img1.width * fary) / 100) * 60,
      ((img1.height * fary) / 100) * 60
    );
  }
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
