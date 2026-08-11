let scrSize;
let imgSize = 2000;

let A = 4;
let cg, maschera, masked, p, R, img_sfondo;
let img;
let x = imgSize / 2;
let y = imgSize / 2;
let vx = [];
let vy = [];
let valorip = [9, 10, 12, 15, 18, 24, 30, 36, 72];
let colore_sfondo, scelta_palette, colore_rette;

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
  img_sfondo = createGraphics(imgSize, imgSize);
  img_sfondo.pixelDensity(1);
  cg.pixelDensity(1);
  maschera = createGraphics(imgSize, imgSize, RGB);
  maschera.pixelDensity(1);
  cg.strokeWeight(1);
  let scelta_palette = int(fxrand() * 3);
  //scelta_palette = 1;
  palette(scelta_palette);
  cg.background(colore_sfondo);
  randomp = int(fxrand() * 5);
  p = valorip[randomp];
  R = imgSize - 400;
 
  let i = 0;
  for (var beta = 0; beta < 360; beta++) {
    var vertice_y = R * sin(radians(beta)) + y;
    var vertice_x = R * cos(radians(beta)) + y;
    if (beta % p == 0){
      vx[i] = vertice_x;
      vy[i] = vertice_y;
      ++i;
    }
  }

  // star polygon
  cg.stroke(colore_rette);
  cg.strokeWeight(1);
  for (var f1 = 0; f1 < 360 / p; f1++) {
    for (var f2 = 0; f2 < 360 / p; f2++) {
      cg.line(vx[f1], vy[f1], vx[f2], vy[f2]);
    }
  }  

  maschera.fill(0);
  let cerchiox, cerchioy, raggio;
  maschera.beginShape(); 
  maschera.strokeWeight(2);
  let vertice0 = int(fxrand() * imgSize);
  maschera.curveVertex(0, vertice0);
  maschera.curveVertex(0, vertice0);
  let vertice10 = int(fxrand() * 400) + 800;
  let vertice11 = int(fxrand() * 400) + 800;
  maschera.curveVertex(vertice10, vertice11);
  let vertice2 = int(fxrand() * imgSize);
  let vertice2x = int(fxrand() * 500);
  maschera.curveVertex(imgSize + vertice2x, vertice2);
  let vertice30 = int(fxrand() * 1200);
  let vertice31 = int(fxrand() * 1200);
  maschera.curveVertex(vertice30, vertice31);
  let vertice4 = int(fxrand() * imgSize);
  let vertice4x = int(fxrand() * 500);
  maschera.curveVertex(-vertice4x, vertice4);
  maschera.curveVertex(-vertice4x, vertice4);
  maschera.endShape();
  maschera.strokeWeight(100);
  maschera.line(0, 0, 0, imgSize);
  maschera.line(0, 0, imgSize, 0);
  maschera.line(0, imgSize, imgSize, imgSize);
  maschera.line(imgSize, 0, imgSize, imgSize);
  maschera.strokeWeight(100);
  maschera.line(0, 0, 0, imgSize);
  maschera.line(0, 0, imgSize, 0);
  maschera.line(0, imgSize, imgSize, imgSize);
  maschera.line(imgSize, 0, imgSize, imgSize);
  cerchiox = int(fxrand() * 400) + 800;
  cerchioy = int(fxrand() * 400) + 800;
  raggio = int(fxrand() * 400) + 200;
  maschera.circle(cerchiox, cerchioy, raggio);

  (masked = cg.get()).mask(maschera);

  img_sfondo.background(colore_rette);
  img_sfondo.noFill();
  img_sfondo.stroke(colore_sfondo);
  img_sfondo.circle(cerchiox, cerchioy, 3 * raggio);
  for(i = 0; i < 500; ++i){
    img_sfondo.strokeWeight(4);
    xs0 = int(fxrand() * imgSize);
    ys0 = int(fxrand() * imgSize);
    img_sfondo.point(xs0,ys0);
  }
  img_sfondo.loadPixels();
  for(let i = 0; i < imgSize; i++) {
    for(let j = 0; j < imgSize; j++) {
      let noise  = map(fxrand(), 0, 1, -100, 100);
      img_sfondo.pixels[(i*imgSize+j)*4] = img_sfondo.pixels[(i*imgSize+j)*4]+noise;
      img_sfondo.pixels[(i*imgSize+j)*4+1] = img_sfondo.pixels[(i*imgSize+j)*4+1]+noise;
      img_sfondo.pixels[(i*imgSize+j)*4+2] = img_sfondo.pixels[(i*imgSize+j)*4+2]+noise;
      img_sfondo.pixels[(i*imgSize+j)*4+3] = 255;
    }
  }
  img_sfondo.updatePixels(); 
  img_sfondo.filter(BLUR, 3);
  img_sfondo.blend(masked, 0, 0, imgSize, imgSize, 0, 0, imgSize, imgSize, BLEND);  
  img.copy(img_sfondo, 0, 0, imgSize, imgSize, 0, 0, imgSize, imgSize);
  
  image(img, 0, 0, scrSize, scrSize); 
}

function palette(k){
  switch (k){
    case 0:      
      colore_sfondo = color(65, 66, 66);
      colore_rette = color(239, 233, 210);
      break;
    case 1:      
      colore_sfondo = color(34, 51, 59);
      colore_rette = color(198, 172, 143);
      break;
    case 2:      
      // https://coolors.co/palette/fffe37-ff1b1c-9f9f92-485198-524632      
      colore_sfondo = color(42, 36, 26);  // grigio
      colore_rette = color(159, 159, 146);
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