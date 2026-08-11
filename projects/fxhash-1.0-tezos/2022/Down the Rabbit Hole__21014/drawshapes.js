function drawShapes() {
  oppShape = false;
  printed10 = false;
  numb = round(random(objMin, objMax)); //number of objects to draw
  gridVary = width * 0.02//random(0.005, 0.02); //0.02
  // make irregular grid for shape spots
  numbAcross = 5//floor(random(5,7)); //grid spots
  frame = 0.15;
  gridSpace = (width * (1 - frame * 2)) / numbAcross; //space between grid spots
  cnt = 0;
  hgt = 0;
  m = null;
  items = [];
  if (random(5) < 3) {
    // draw big circle near edge
    size3 = null;
    let resize = 0.8; //1
    rot = random(PI);
    type = 1;
    if (random(2) < 1) {
      x = random(-width * 0.05, width * 0.1);
    } else {
      x = random(width * 0.9, width * 1.05);
    }
    if (random(2) < 1) {
      y = random(-height * 0.05, height * 0.1);
    } else {
      y = random(height * 0.9, height * 1.05);
    }
    size = random(width * 0.5, width * 0.8);
    startShape();
    cnv[cnt].circle(0, 0, size);
    cnv[cnt].pop();
    ctx[cnt].clip();
    items.push(
      x,
      y,
      size,
      hgt,
      type,
      rot,
      type2,
      pType,
      dotSpace,
      intSpace,
      dotSize,
      dotDetail
    );
    makeTexture();
    cnt++;
  }
  attempts = 0;
  //start drawing on the grid
  for (i = 0; i < numb; i++) {
    counter++;
    randomSeed(seedStart + counter);
    attempts++;
    if (attempts > 100) {
      break;
    }
    rot = random(PI * 2);
    size3 = null;
    let resize = 1;
    // pick the main 3 objects at start:
    if (i < 4) {
      openSpace = true;
      mainObjects();
      if (openSpace == false) {
        continue;
      }
      type = random(4.5);
    }
    // pick objects after starting 3: start by picking the t & u (x & y) of the grid
    if (i > 3) {
      if (random(3) < 2) {
        if (random(2) < hPerc) {
          t += round(random(0.6, 1.7));
        } else {
          t -= round(random(0.6, 1.7));
        }
      } else {
        t = floor(random(numbAcross + 1));
      }
      if (random(3) < 2) {
        if (random(2) < vPerc) {
          u += round(random(0.6, 1.7));
        } else {
          u -= round(random(0.6, 1.7));
        }
      } else {
        u = floor(random(numbAcross + 1));
      }
      if (random(10) < 2) {
        hPerc = random(0.4, 1.6);
        vPerc = random(0.4, 1.6);
      }
      if (t > numbAcross) {
        t = 0;
      }
      if (t < 0) {
        t = numbAcross;
      }
      if (u > numbAcross) {
        u = 0;
      }
      if (u < 0) {
        u = numbAcross;
      }
      if (gridArray.includes(t + "-" + u)) {
        i--;
        continue;
      } else {
        gridArray.push(t + "-" + u);
        x = t * gridSpace + width * frame + random(-gridVary, gridVary);
        y = u * gridSpace + height * frame + random(-gridVary, gridVary);
      }
      if (superSize == true) {
        resize = 0.65; //0.75
      } else {
        resize = 0.49;  //0.5
      }
      if (type < 3.5 && random(10) < 2) {
        //chance shape type will repeat
      } else {
        type = random(4.5);
      }
      //type = 4.3;
    }
    size = width * random(0.4, 0.55) * resize;
    startShape();
    if (type < 1.5) {
      // draw circles
      r = size;
      cnv[cnt].circle(0, 0, size);
      cnv[cnt].pop();
      ctx[cnt].clip();
      items.push(
        x,
        y,
        size,
        hgt,
        type,
        rot,
        type2,
        pType,
        dotSpace,
        intSpace,
        dotSize,
        dotDetail
      );
      makeTexture();
      cnt++;
      // chance to draw additional inner circles
      if (random(6) < 2 || (i < 4 && random(6) < 4)) {
        size = r * random(0.7, 0.85);
        startShape();
        cnv[cnt].circle(0, 0, size);
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size,
          hgt,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
      if (random(6) < 2 || (i < 4 && random(6) < 4)) {
        //additional circle
        size = r * random(0.5, 0.65);
        startShape();
        cnv[cnt].circle(0, 0, size);
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size,
          hgt,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
    } else if (type < 2.5) {
      // draw rectangle
      hgt = random(size * 0.75, size);
      cnv[cnt].rect(0, 0, size, hgt);
      cnv[cnt].pop();
      ctx[cnt].clip();
      items.push(
        x,
        y,
        size,
        hgt,
        type,
        rot,
        type2,
        pType,
        dotSpace,
        intSpace,
        dotSize,
        dotDetail
      );
      makeTexture();
      cnt++;
      // chance to draw additional rectangle
      if (random(6) < 2.5 || (i < 4 && random(7) < 4.5)) {
        startShape();
        size3 = size * random(0.5, 0.8);
        hgt3 = size3 * random(0.75, 1);
        cnv[cnt].rect(0, 0, size3, hgt3);
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size3,
          hgt3,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
    } else if (type < 3.0) {
      // draw right triangle
      cnv[cnt].triangle(
        -size / 4,
        -size / 4,
        (size / 4) * 3,
        -size / 4,
        -size / 4,
        (size / 4) * 3
      );
      cnv[cnt].pop();
      ctx[cnt].clip();
      items.push(
        x,
        y,
        size,
        hgt,
        type,
        rot,
        type2,
        pType,
        dotSpace,
        intSpace,
        dotSize,
        dotDetail
      );
      makeTexture();
      cnt++;
      // chance to draw additional triangle
      if (random(6) < 2.5 || (i < 4 && random(7) < 4.5)) {
        startShape();
        size3 = size * random(0.5, 0.8);
        cnv[cnt].triangle(
          -size3 / 4,
          -size3 / 4,
          (size3 / 4) * 3,
          -size3 / 4,
          -size3 / 4,
          (size3 / 4) * 3
        );
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size3,
          hgt3,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
    } else if (type < 3.5) {
      //draw isos triangle
      cnv[cnt].triangle(
        -size / 3,
        -size / 3,
        (size / 3) * 2,
        0,
        -size / 3,
        (size / 3) * 2
      );
      cnv[cnt].pop();
      ctx[cnt].clip();
      items.push(
        x,
        y,
        size,
        hgt,
        type,
        rot,
        type2,
        pType,
        dotSpace,
        intSpace,
        dotSize,
        dotDetail
      );
      makeTexture();
      cnt++;
      // chance to draw additional triangle
      if (random(6) < 2.5 || (i < 4 && random(7) < 4.5)) {
        startShape();
        size3 = size * random(0.5, 0.8);
        cnv[cnt].triangle(
          -size3 / 3,
          -size3 / 3,
          (size3 / 3) * 2,
          0,
          -size3 / 3,
          (size3 / 3) * 2
        );
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size3,
          hgt3,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
    } else if (type < 4.5) {
      // draw circle or square with pattern
      if (type2 < 1) {
        cnv[cnt].square(0, 0, size);
      } else {
        cnv[cnt].circle(0, 0, size);
      }
      cnv[cnt].pop();
      ctx[cnt].clip();
      items.push(
        x,
        y,
        size,
        hgt,
        type,
        rot,
        type2,
        pType,
        dotSpace,
        intSpace,
        dotSize,
        dotDetail
      );
      patterns();
      cnt++;
      r = size;
      // chance to draw inner circle
      if ((random(6) < 2.5 || (i < 4 && random(6) < 3.5)) && type2 == 1) {
        type = 1;
        startShape();
        type2 = 1.5;
        size = r * random(0.5, 0.7);
        cnv[cnt].circle(0, 0, size);
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size,
          hgt,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
      // chance to draw inner rectangle
      if ((random(6) < 2.5 || (i < 4 && random(7) < 4.5)) && type2 < 1) {
        type = 2;
        startShape();
        size3 = size * random(0.5, 0.7);
        hgt3 = size3 * random(0.75, 1);
        cnv[cnt].rect(0, 0, size3, hgt3);
        cnv[cnt].pop();
        ctx[cnt].clip();
        items.push(
          x,
          y,
          size3,
          hgt3,
          type,
          rot,
          type2,
          pType,
          dotSpace,
          intSpace,
          dotSize,
          dotDetail
        );
        makeTexture();
        cnt++;
      }
    }
  }
}

function startShape() {
  getColor();
  cnv[cnt] = createGraphics(width, height);
  cnv[cnt].colorMode(HSB, 360, 120, 100, 255);
  strokeOn = random(2);
  if (strokeOn < 1) {
    cnv[cnt].noStroke();
  } else {
    cnv[cnt].stroke(0, 0, random(-25, 40));
    cnv[cnt].strokeWeight(max(1, width * random(0.0012, 0.0036)));
  }
  ctx[cnt] = cnv[cnt].canvas.getContext("2d");
  cnv[cnt].rectMode(CENTER);
  if (extraShapes == true || allTransp == true) {
    cnv[cnt].fill(h, s, b, 100);
  } else {
    cnv[cnt].fill(h, s, b, 255);
  }
  type2 = floor(random(2));
  pType = random(4); //pattern type
  dotSpace = floor(width * random(0.05, 0.09));
  intSpace = floor(width * random(0.005, 0.09));
  dotSize = floor(width * random(0.0125, 0.018));
  dotDetail = floor(random(4));
  cnv[cnt].push();
  cnv[cnt].translate(x, y);
  cnv[cnt].rotate(rot);
  //print(cnt,x,y,type,u,gridSpace);
}

function mainObjects() {
  if (i == 0) {
    // first large object
    resize = 1;
    t = floor(random(2, numbAcross - 1));
    u = floor(random(2, numbAcross - 1));
    x = t * gridSpace + frame * width + random(-gridVary, gridVary);
    y = u * gridSpace + frame * height + random(-gridVary, gridVary);
    gridArray.push(
      t + "-" + u,
      t + 1 + "-" + u,
      t + 2 + "-" + u,
      t + "-" + (u + 1),
      t + 1 + "-" + (u + 1),
      t + 2 + "-" + (u + 1),
      t + "-" + (u + 2),
      t + 1 + "-" + (u + 2),
      t + 2 + "-" + (u + 2)
    );
  }
  if (i == 1) {
    // draw second object opposite from first object, if possible
    if (t < numbAcross / 2) {
      t = floor(random(numbAcross - t, numbAcross));
    } else {
      t = floor(random(1, numbAcross - t));
    }
    if (u < numbAcross / 2) {
      u = floor(random(numbAcross - u, numbAcross));
    } else {
      u = floor(random(1, numbAcross - u));
    }
  }
  if (i > 1) {
    t = floor(random(1, numbAcross));
    u = floor(random(1, numbAcross));
  }
  if (i > 0) {
    resize = 0.7; //0.75
    if (
      gridArray.includes(t + "-" + u) ||
      gridArray.includes(t + 1 + "-" + u) ||
      gridArray.includes(t + "-" + (u + 1)) ||
      gridArray.includes(t + 1 + "-" + (u + 1))
    ) {
      // do nothing if cells occupied
      openSpace = false;
    } else {
      gridArray.push(
        t + "-" + u,
        t + 1 + "-" + u,
        t + "-" + (u + 1),
        t + 1 + "-" + (u + 1)
      );
      x = t * gridSpace + frame * width + random(-gridVary, gridVary);
      y = u * gridSpace + frame * height + random(-gridVary, gridVary);
      oppShape=true;
    }
  }
}

function placeShapes() {
  //print(cnt,attempts,items);
  let size, hgt, type, rot, type2, pic;
  for (m = 0; m < cnt; m++) {
    x12 = items[m * 12 + 0];
    y12 = items[m * 12 + 1];
    type12 = items[m * 12 + 4];
    //print(m,x12,y12,type12);
    for (j = 0; j < cnt; j++) {
      if (m != j) {
        if (random(10) < 9.7 || (j > 5 && j < cnt - 1)) {
          oneShapeSpot();
        }
      }
    }
    if (random(5) < 2 || allTransp == true) {
      tint(200, 0, 100, random(160, 200));
    } else {
      noTint();
    }
    image(cnv[m], 0, 0);
  }
}

function oneShapeSpot() {
  let addTexture;
  getColor();
  if (strokeOn < 1) {
    cnv[m].noStroke();
  } else {
    cnv[m].stroke(0, 0, random(-25, 40));
    cnv[m].strokeWeight(max(1, width * random(0.0012, 0.0036)));
  }
  x = items[j * 12 + 0];
  y = items[j * 12 + 1];
  if (j<cnt){
  nextX = items[(j+1)*12 + 0]}
  //print(nextX,x);
  if (nextX==x){
    cnv[m].noFill()
  } else if (allTransp == true) {
    cnv[m].fill(h, s, b, random(125, 150));
  } else {
      cnv[m].fill(h, s, b, random(125,280));
    }
  size = items[j * 12 + 2];
  hgt = items[j * 12 + 3];
  type = items[j * 12 + 4];
  rot = items[j * 12 + 5];
  type2 = items[j * 12 + 6];
  pType = items[j * 12 + 7];
  dotSpace = items[j * 12 + 8];
  intSpace = items[j * 12 + 9];
  dotSize = items[j * 12 + 10];
  dotDetail = items[j * 12 + 11];
  cnv[m].push();
  cnv[m].translate(x, y);
  cnv[m].rotate(rot);

  if (type < 1.5) {
    // draw circles
    cnv[m].circle(0, 0, size);
  } else if (type < 2.5) {
    // draw rectangle
    cnv[m].rect(0, 0, size, hgt);
  } else if (type < 3.0) {
    // draw right triangle
    cnv[m].triangle(
      -size / 4,
      -size / 4,
      (size / 4) * 3,
      -size / 4,
      -size / 4,
      (size / 4) * 3
    );
  } else if (type < 3.5) {
    //draw iso triangle
    cnv[m].triangle(
      -size / 3,
      -size / 3,
      (size / 3) * 2,
      0,
      -size / 3,
      (size / 3) * 2
    );
  } else if (type < 4.5) {
    // draw circle or square with pattern
    if (type2 < 1) {
      cnv[m].square(0, 0, size);
    } else {
      cnv[m].circle(0, 0, size);
    }
  }
  cnv[m].pop();
}

function addLayer() {
  if (random(5) < 4.8) {
    // draw wavy line
    wavyLine = true;
    push();
    translate(width / 2, height / 2);
    rotate(floor(random(4)) * PI * 0.5);
    getColor();
    for (att = 0; att < 5; att++) {
      if (col == bgCol) {
        getColor();
      } else {
        break;
      }
    }
    colorMode(HSB, 360, 120, 100, 255);
    fill(h, s + 10, b, 90);
    noStroke();
    beginShape();
    curveVertex(-width * 0.55, -height * 0.55);
    curveVertex(-width * 0.55, -height * 0.55);
    curveVertex(width * random(-0.5, 0), -height * 0.55);
    curveVertex(width * random(-0.5, 0), -height * 0.27);
    curveVertex(width * random(-0.5, 0), height * 0.27);
    curveVertex(width * random(-0.5, 0), height * 0.55);
    curveVertex(-width * 0.55, height * 0.55);
    curveVertex(-width * 0.55, height * 0.55);
    endShape(CLOSE);
    pop();
  }
  else {wavyLine = false}
}

function moreShapes() {
  //curly thing
  extraShapes = true;
  numb2 = items.length / 12;
  if (random(5) < 4) {
    // draw wavy line
    extraShapes = false;
    x = random(width / 4, (width / 4) * 3);
    y = random(height / 4, (height / 4) * 3);
    rot = random(PI * 2);
    startShape();
    cnv[cnt].pop();
    cnv[cnt].push();
    cnv[cnt].translate(x, y);
    cnv[cnt].rotate(rot);
    cnv[cnt].beginShape();
    x5 = random((width / 4) * 2, width);
    x2 = x5 / 4;
    x3 = x5 / 2;
    x4 = (x5 / 4) * 3;
    y2 = -random(x5 / 15, x5 / 4);
    y3 = random(x5 / 15, x5 / 4);
    y4 = -random(x5 / 15, x5 / 4);
    cnv[cnt].curveVertex(0, 0);
    cnv[cnt].curveVertex(0, 0);
    cnv[cnt].curveVertex(x2, y2);
    cnv[cnt].curveVertex(x3, y3);
    cnv[cnt].curveVertex(x4, y4);
    cnv[cnt].curveVertex(x5, 0);
    cnv[cnt].curveVertex(x5, 0);
    cnv[cnt].endShape(CLOSE);
    cnv[cnt].pop();
    items.push(
      x,
      y,
      size,
      hgt,
      type,
      rot,
      type2,
      pType,
      dotSpace,
      intSpace,
      dotSize,
      dotDetail
    );
    ctx[cnt].clip();
    cnt++;
  }
}

function makeLines() {
  //make a few hash marks
  hashNum = random(-0.5, 2.3);
  attempts2 = 0;
  for (i = 0; i < hashNum; i++) {
    if (attempts2 > 100) {
      break;
    }
    attempts2++;
    t = floor(random(numbAcross + 1));
    u = floor(random(numbAcross + 1));
    if (gridArray.includes(t + "-" + u)) {
      i--;
      continue;
    } else {
      gridArray.push(t + "-" + u);
      x7 = t * gridSpace + width * frame + random(-gridVary, gridVary);
      y7 = u * gridSpace + height * frame + random(-gridVary, gridVary);
      stroke(0, 0, random(-20, 30));
      strokeWeight(max(1, width * 0.0036));
      push();
      translate(x7, y7);
      rotate(random(PI) * 2);
      lineWid = width * random(0.07, 0.1);
      lineSpace = width * 0.01;
      lineTypes();
      pop();
    }
  }
}

function lineTypes() {
  //hash mark designs
  let lineType = random(9);
  if (lineType < 1) {
    //cross
    line(0, 0, lineWid, 0);
    line(lineSpace, -lineSpace, lineSpace, -lineSpace + lineWid);
  } else if (lineType < 2) {
    // 2 parallel lines
    line(0, 0, lineWid, 0);
    line(0, lineSpace, lineWid, lineSpace);
  }
  if (lineType < 3) {
    //cross with 2 parallel
    line(0, 0, lineWid, 0);
    line(lineSpace, -lineSpace, lineSpace, -lineSpace + lineWid);
    line(lineSpace * 2, -lineSpace, lineSpace * 2, -lineSpace + lineWid);
  } else if (lineType < 4) {
    // 3 parallel lines
    line(0, 0, lineWid, 0);
    line(0, lineSpace, lineWid, lineSpace);
    line(0, lineSpace * 2, lineWid, lineSpace * 2);
  } else if (lineType < 5) {
    // 3 parallel lines offset
    line(-lineSpace, 0, -lineSpace + lineWid, 0);
    line(0, lineSpace, lineWid, lineSpace);
    line(lineSpace, lineSpace * 2, lineSpace + lineWid, lineSpace * 2);
  } else if (lineType < 6) {
    // 3 parallel lines offset plus cross
    line(-lineSpace, 0, -lineSpace + lineWid, 0);
    line(0, lineSpace, lineWid, lineSpace);
    line(lineSpace, lineSpace * 2, lineSpace + lineWid, lineSpace * 2);
    line(
      lineWid - lineSpace * 2,
      -lineSpace,
      lineWid - lineSpace * 2,
      -lineSpace + lineWid
    );
  } else if (lineType < 7) {
    // 2 parallel lines offset plus cross
    line(0, lineSpace, lineWid, lineSpace);
    line(lineSpace, lineSpace * 2, lineSpace + lineWid, lineSpace * 2);
    line(
      lineWid - lineSpace * 2,
      -lineSpace,
      lineWid - lineSpace * 2,
      -lineSpace + lineWid
    );
  } else if (lineType < 8) {
    //parallel L's
    line(0, 0, lineWid, 0);
    line(0, 0, 0, lineWid);
    line(lineSpace, -lineSpace, lineSpace + lineWid, -lineSpace);
    line(lineSpace, -lineSpace, lineSpace, -lineSpace + lineWid);
  } else if (lineType < 9) {
    //parallel L's
    line(0, 0, lineWid, 0);
    line(0, 0, 0, lineWid);
    line(-lineWid + lineSpace * 2, lineSpace * 2, lineSpace * 2, lineSpace * 2);
    line(lineSpace * 2, lineSpace * 2, lineSpace * 2, -lineWid + lineSpace * 2);
  }
}

function littleShapes() {
  //small circles and rectangles
  smallCircles = true;
  littleNum = random(15);
  colorMode(HSB, 360, 120, 100, 255);
  noStroke();
  for (i = 0; i < littleNum; i++) {
    getColor();
    a = random(120, 260);
    fill(h, s , b , a);
    size = width * random(0.02, 0.07);
    x = random(width * 0.05, width * 0.95);
    y = random(height * 0.05, height * 0.95);
    //if (random(2) < 2) {
      circle(x, y, size);
    // } else {
    //   push();
    //   translate(x, y);
    //   rotate(random(PI));
    //   hgt = height * random(0.02, 0.05);
    //   rect(0, 0, size, hgt);
    //   pop();
    // }
  }
}
