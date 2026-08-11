function tiling() {
  if (tileType == 0) {
    //long tiles with mixed row length
    tiling0();
  } else if (tileType == 1) {
    tiling1(); //mirror tiles
  } else if (tileType == 2) {
    tiling2(); //becoming chaotic
  } else if (tileType == 3) {
    tiling3(); //circle of tiles - dart board
  } else if (tileType == 4) {
    tiling4(); //small tiles with noise
  } else if (tileType == 5) {
    tiling5(); //long, offset tiles with gaps
  } else if (tileType == 6) {
    tiling6(); //long tiles with offset & circle
  } else if (tileType == 7) {
    tiling7(); //large tiles
  } else if (tileType == 8) {
    tiling8(); //mixed tiles with noise
  }
}

function tiling0() {
  //long tiles with mixed row length
  cnv = createGraphics(width, height);
  cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(24, 35));
  padding = width * random(0.002, 0.004);
  cnv.noStroke();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  let rez = 0.0025;
  let tintAlpha = 180; //random(140,255);
  for (i = 0; i < tilesAcross; i++) {
    //actually tiles down
    y = padding + i * (tileSize + padding);
    tileH = random(9);
    if (tileH < 7) {
      tileHeight = tileSize;
    } else if (tileH < 8) {
      tileHeight = tileSize * 2 + padding;
      i++;
    } else {
      tileHeight = tileSize * 3 + padding * 2;
      i += 2;
    }
    for (j = 0; j < tilesAcross; j++) {
      tileW = floor(random(3, 12));
      tileWidth = tileSize * tileW + padding * (tileW - 1);
      x = padding + j * (tileSize + padding);
      j += tileW - 1;
      img = get(
        random(width - tileWidth),
        random(height - tileHeight),
        tileWidth,
        tileHeight
      );
      cnv.image(img, x, y);
      n =
        (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.1) *
        1.3;
      getColor(min(6, max(0, floor(n * 7))));
      cnv.tint(h, s, b, tintAlpha);
      cnv.image(img, x, y);
      cnv.noTint();
    }
  }
  if (random(2) < 1) {
    image(cnv, 0, 0);
  } else {
    push();
    translate(width / 2, height / 2);
    rotate(PI * 0.5);
    translate(-width / 2, -height / 2);
    image(cnv, 0, 0);
    pop();
  }
}

function tiling1() {
  //mirror tiles
  cnv = createGraphics(width, height);
  cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(12, 15));
  padding = 0; //width * random(0.001, 0.003);
  cnv.noFill();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  let rez = 0.0025;
  let tintAlpha = 180; //random(140,255);
  let tinting = random(5);
  //let resetSeed = random(4);
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesAcross; j++) {
      img = get(
        random(width * 0.91),
        random(height * 0.91),
        tileSize,
        tileSize
      );
      x = padding + i * (tileSize + padding);
      y = padding + j * (tileSize + padding);
      cnv.image(img, x, y);
      if (tinting < 4) {
        n =
          (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.1) *
          1.3;
        getColor(min(6, max(0, floor(n * 7))));
        cnv.tint(h, s, b, tintAlpha);
        cnv.image(img, x, y);
        cnv.noTint();
        cnv.rect(x, y, tileSize);
      }
    }
  }
  push();
  translate(width / 2, height / 2);
  scale(0.5);
  image(cnv, 0, 0);
  scale(-1, 1);
  image(cnv, 0, 0);
  scale(1, -1);
  image(cnv, 0, 0);
  scale(-1, 1);
  image(cnv, 0, 0);
  pop();
}

function tiling2() {
  //becoming chaotic
  cnv = createGraphics(width, height);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  let rez = random(0.002, 0.003); //color
  let tileSize = width * random(0.05, 0.08);
  let frame = width * 0.08;
  let topFrame = -width * 0.035;
  let padding = width * random(0.005);
  let tilesAcross = floor((width - frame * 2) / (tileSize + padding));
  let extraWidth = round(
    (width - (tilesAcross * (tileSize + padding) + frame * 2 - padding)) / 2
  );
  let extraHeight = round(
    (height - (tilesAcross * (tileSize + padding) + frame * 2 - padding)) / 2
  );
  cnv.noStroke();
  let rotAmt = random(30, 70);
  let extraTint = random(2);
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesAcross; j++) {
      let tile = get(
        floor(random(width - tileSize)),
        floor(random(height - tileSize)),
        tileSize,
        tileSize
      );
      let randWidth = random(((i * i) / 3) * 0.95, ((i * i) / 3) * 1.1);
      let randHeight = random(((i * i) / 3) * 0.95, ((j * j) / 3) * 1.1); //play with i*i or j*j or i*j for width and height
      let x =
        i * (tileSize + padding) + frame + extraWidth + topFrame + randWidth;
      let y =
        j * (tileSize + padding) + frame + extraHeight + topFrame + randHeight;
      tilerot = (i + j) / rotAmt;
      cnv.push();
      cnv.translate(x + tileSize / 2, y + tileSize / 2);
      cnv.rotate(random(-tilerot, tilerot));
      cnv.image(tile, -tileSize / 2, -tileSize / 2);
      if (extraTint < 1) {
        n =
          (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.2) *
          1.65;
        getColor(min(6, max(0, floor(n * 7.5))));
        cnv.tint(h, s, b, 190);
        cnv.image(tile, -tileSize / 2, -tileSize / 2);
        cnv.noTint();
      }
      cnv.pop();
    }
  }
  darkBackground();
  image(cnv, 0, 0);
}

function tiling3() {
  //circle of tiles - dart board
  cnv1 = createGraphics(width, height);
  tilesAcross = floor(random(16, 20));
  numbCircles = floor(tilesAcross / 2);
  tileSize = width / numbCircles / 2;
  let tintAlpha = 180; //random(140,255);
  let tileCol1 = floor(random(7));
  for (i = 1; i < numbCircles; i++) {
    //number of circles of tiles
    diam = i * tileSize * 2 + tileSize; //diameter of the circle
    circ = PI * diam; //circumference
    numTiles = floor(circ / tileSize); //number needed around circle
    ang = (PI * 2) / numTiles; //total arc angle for each tile
    let startAng = random(PI * 0.2);
    tileCol2 = floor(random(7));
    if (tileCol2 == tileCol1) {
      tileCol2 = floor(random(7));
    }
    tileCol1 = tileCol2;
    getColor(tileCol2);
    for (j = 0; j < numTiles; j++) {
      //loop for one of the circles of tiles
      cnv2 = createGraphics(width, height);
      cnv2.strokeWeight(width * 0.002);
      cnv2.push();
      cnv2.translate(width / 2, height / 2);
      cnv2.rotate(j * ang + startAng);
      cnv2.beginShape();
      for (k = (-ang / 2) * 1.01; k < (ang / 2) * 1.01; k += ang / 4) {
        x = (sin(k) * diam) / 2;
        y = (cos(k) * diam) / 2;
        cnv2.vertex(x, y);
      }
      for (k = (ang / 2) * 1.01; k > (-ang / 2) * 1.01; k -= ang / 4) {
        x = sin(k) * (diam / 2 - tileSize);
        y = cos(k) * (diam / 2 - tileSize);
        cnv2.vertex(x, y);
      }
      cnv2.endShape(CLOSE);
      ctx = cnv2.canvas.getContext("2d");
      ctx.clip();
      img = get(
        random(width - tileSize * 2),
        random(height - tileSize * 2),
        tileSize * 2,
        tileSize * 2
      );
      cnv2.image(img, x - tileSize / 2, y - tileSize / 2);
      cnv2.tint(h, s, b, 180);
      cnv2.image(img, x - tileSize / 2, y - tileSize / 2);
      cnv1.image(cnv2, 0, 0);
    }
  }
  cnv2 = createGraphics(width, height);
  cnv2.strokeWeight(width * 0.002);
  cnv2.circle(width / 2, height / 2, tileSize);
  ctx = cnv2.canvas.getContext("2d");
  ctx.clip();
  img = get(
    random(width - tileSize * 2),
    random(height - tileSize * 2),
    tileSize * 2,
    tileSize * 2
  );
  cnv2.image(img, width / 2 - tileSize / 2, height / 2 - tileSize / 2);
  getColor(floor(6));
  cnv2.tint(h, s, b, 180);
  cnv2.image(img, width / 2 - tileSize / 2, height / 2 - tileSize / 2);
  cnv1.image(cnv2, 0, 0);
  getColor(floor(random(2)));
  background(h, s + 10, b - 50, 200);
  image(cnv1, 0, 0);
}

function tiling4() {
  //small tiles with noise
  cnv = createGraphics(width, height);
  cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(25, 30));
  padding = 0; //width * 0.001;//random(0.001, 0.003);
  //tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  tileSize = width / tilesAcross;
  let rez = 0.0025;
  let tintAlpha = 180; //random(140,255);
  cnv.noFill();
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesAcross; j++) {
      img = get(
        random(width * 0.96),
        random(height * 0.96),
        tileSize,
        tileSize
      );
      x = padding + i * (tileSize + padding);
      y = padding + j * (tileSize + padding);
      cnv.image(img, x, y);
      n =
        (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.1) *
        1.3;
      getColor(min(6, max(0, floor(n * 7))));
      cnv.tint(h, s, b, tintAlpha);
      cnv.image(img, x, y);
      cnv.noTint();
      cnv.rect(x, y, tileSize);
    }
  }
  image(cnv, 0, 0);
}

function tiling5() {
  //long,offset tiles with gaps
  cnv = createGraphics(width, height);
  //cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(6, 12));
  padPerc = map(15 - tilesAcross, 0, 9, 0.02, 0.04);
  padding = width * padPerc;
  cnv.noStroke();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  let dir;
  for (i = 0; i < tilesAcross; i++) {
    img = get(random(width - tileSize), 0, tileSize, height);
    if (fract(i / 2) > 0) {
      dir = 1;
    } else {
      dir = -1;
    }
    cnv.image(
      img,
      padding + i * (tileSize + padding),
      height * dir * random(0.01, 0.13)
    );
  }
  cnv3 = createGraphics(width, height);
  cnv3.scale(0.85);
  cnv3.image(cnv, width * 0.09, height * 0.09);
  push();
  translate(width / 2, height / 2);
  rotate(PI * 0.5 * floor(random(4)));
  translate(-width / 2, -height / 2);
  //background(0);
  darkBackground();
  image(cnv3, 0, 0);
  pop();
  strokeWeight(width * 0.03);
  getColor(floor(random(2, 6)));
  stroke(h, s, 30);
  noFill();
  rect(0, 0, width, height);
}

function tiling6() {
  //long tiles with offset & circle
  cnv = createGraphics(width, height);
  //cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(15, 30));
  padding = width * random(0.001, 0.004);
  cnv.noStroke();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  let dir;
  for (i = 0; i < tilesAcross; i++) {
    img = get(random(width - tileSize), 0, tileSize, height);
    if (fract(i / 2) > 0) {
      dir = 1;
    } else {
      dir = -1;
    }
    cnv.image(
      img,
      padding + i * (tileSize + padding),
      height * dir * random(0.01, 0.13)
    );
  }
  if (random(4) < 2) {
    maxScale = min(6, tilesAcross);
    extraTint = 0; //random(2);
    tintAlpha = random(180, 220);
    for (i = 0; i < 22; i++) {
      tileWscale = floor(random(1, maxScale));
      tileHscale = floor(random(1, maxScale));
      tileWid = tileWscale * (tileSize + padding) - padding;
      tileHgt = tileHscale * (tileSize + padding) - padding;
      img = get(
        random(width - tileWid),
        random(height - tileHgt),
        tileWid,
        tileHgt
      );
      tileX =
        padding +
        floor(random(tilesAcross - tileWscale + 1)) * (tileSize + padding);
      tileY =
        padding +
        floor(random(tilesAcross - tileHscale + 1)) * (tileSize + padding);
      cnv.fill(0);
      cnv.rect(
        tileX - padding,
        tileY - padding,
        tileWid + padding * 2,
        tileHgt + padding * 2
      );
      cnv.image(img, tileX, tileY);
      if (extraTint < 1) {
        getColor(floor(random(6)));
        cnv.tint(h, s, b + 10, tintAlpha);
        cnv.image(img, tileX, tileY);
      }
      cnv.noTint();
    }
  }
  cnv3 = createGraphics(width, height);
  cnv3.scale(0.85);
  cnv3.image(cnv, width * 0.09, height * 0.09);
  push();
  translate(width / 2, height / 2);
  rotate(PI * 0.25 * floor(random(8)));
  translate(-width / 2, -height / 2);
  darkBackground();
  image(cnv3, 0, 0);
  pop();
  strokeWeight(width * 0.03);
  getColor(floor(random(7)));
  stroke(h, s, 30);
  noFill();
  rect(0, 0, width, height);
}

function tiling7() {
  // large tiles
  cnv = createGraphics(width, height);
  cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(8, 20));
  padding = width * random(0.001, 0.004);
  cnv.noStroke();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesAcross; j++) {
      img = get(
        random(width - tileSize),
        random(height - tileSize),
        tileSize,
        tileSize
      );
      cnv.image(
        img,
        padding + i * (tileSize + padding),
        padding + j * (tileSize + padding)
      );
    }
  }
  maxScale = min(5, tilesAcross);
  extraTint = random(2);
  tintAlpha = random(150, 230);
  for (i = 0; i < 25; i++) {
    tileWscale = floor(random(1, maxScale));
    tileHscale = floor(random(1, maxScale));
    tileWid = tileWscale * (tileSize + padding) - padding;
    tileHgt = tileHscale * (tileSize + padding) - padding;
    img = get(
      random(width - tileWid),
      random(height - tileHgt),
      tileWid,
      tileHgt
    );
    tileX =
      padding +
      floor(random(tilesAcross - tileWscale + 1)) * (tileSize + padding);
    tileY =
      padding +
      floor(random(tilesAcross - tileHscale + 1)) * (tileSize + padding);
    cnv.fill(0);
    cnv.rect(
      tileX - padding,
      tileY - padding,
      tileWid + padding * 2,
      tileHgt + padding * 2
    );
    cnv.image(img, tileX, tileY);
    if (extraTint < 1) {
      getColor(floor(random(6)));
      cnv.tint(h, s, b + 10, tintAlpha);
      cnv.image(img, tileX, tileY);
    }
    cnv.noTint();
  }
  image(cnv, 0, 0);
}

function tiling8() {
  //mixed tiles with noise
  cnv = createGraphics(width, height);
  cnv.background(0);
  cnv.colorMode(HSB, 360, 120, 100, 255);
  tilesAcross = floor(random(25, 35));
  padding = width * random(0.001, 0.004);
  cnv.noStroke();
  tileSize = (width - padding * (tilesAcross + 1)) / tilesAcross;
  let rez = 0.0022;
  let tintAlpha = 170; //random(140,255);
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesAcross; j++) {
      img = get(
        random(width - tileSize),
        random(height - tileSize),
        tileSize,
        tileSize
      );
      x = padding + i * (tileSize + padding);
      y = padding + j * (tileSize + padding);
      cnv.image(img, x, y);
      n =
        (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.2) *
        1.6;
      getColor(min(6, max(0, floor(n * 7))));
      cnv.tint(h, s, b, tintAlpha);
      cnv.image(img, x, y);
      cnv.noTint();
    }
  }
  randomSeed(seed);
  noiseSeed(seed);
  maxScale = min(6, tilesAcross);
  //extraTint = random(2);
  for (i = 0; i < 25; i++) {
    tileWscale = floor(random(1, maxScale));
    tileHscale = floor(random(1, maxScale));
    tileWid = tileWscale * (tileSize + padding) - padding;
    tileHgt = tileHscale * (tileSize + padding) - padding;
    img = get(
      random(width - tileWid),
      random(height - tileHgt),
      tileWid,
      tileHgt
    );
    tileX =
      padding +
      floor(random(tilesAcross - tileWscale + 1)) * (tileSize + padding);
    tileY =
      padding +
      floor(random(tilesAcross - tileHscale + 1)) * (tileSize + padding);
    cnv.fill(0);
    cnv.rect(
      tileX - padding,
      tileY - padding,
      tileWid + padding * 2,
      tileHgt + padding * 2
    );
    cnv.image(img, tileX, tileY);
    n =
      (noise((x / width) * 1000 * rez, (y / height) * 1000 * rez) - 0.1) * 1.3;
    getColor(min(6, max(0, floor(7 - n * 7))));
    cnv.tint(h, s, b + 10, tintAlpha);
    cnv.image(img, tileX, tileY);
    cnv.noTint();
  }
  image(cnv, 0, 0);
}

function darkBackground() {
  bgType = random(6);
  if (bgType < 1) {
    getColor(floor(random(6)));
    background(h, s + 10, 15, 215);
  } else if (bgType < 3) {
    getColor(floor(random(6)));
    background(h, s + 10, 15);
  } else {
    background(0, 0, random(23));
  }
}
