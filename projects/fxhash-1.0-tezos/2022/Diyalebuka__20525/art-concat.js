// vim: ts=2:sw=2
//-----------------------------------------------------------------------------
// traits.js - convert hash to set of traits
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// functions
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// FXHASH SPECIFIC :)
//-----------------------------------------------------------------------------
// Bitcoin Base58 encoder/decoder algorithm
const btcTable = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
console.assert(btcTable.length === 58);

// Base58 decoder/encoder for BigInt
function b58ToBi(chars, table = btcTable) {
  const carry = BigInt(table.length);
  let total = 0n,
    base = 1n;
  for (let i = chars.length - 1; i >= 0; i--) {
    const n = table.indexOf(chars[i]);
    if (n < 0) throw TypeError(`invalid letter contained: '${chars[i]}'`);
    total += base * BigInt(n);
    base *= carry;
  }
  return total;
}

const mkRandom = (hash) => {
  const s = Array(4)
    .fill()
    .map((_, i) => i * 12.75 + 2)
    .map((idx) => b58ToBi(hash.slice(idx, idx + 12.75), btcTable));
  const xss = xoshiro256strstr(s);
  const r = randomDecimal(xss);
  const rn = randomNumber(r);
  const ri = randomInt(rn);
  return [r, rn, ri];
};

//-----------------------------------------------------------------------------

const u64 = (n) => BigInt.asUintN(64, n);
const rotl = (x, k) => u64((x << k) | (x >> (64n - k)));

/**
 * xoshiro is a variation of the shift-register generator, using rotations in
 *   addition to shifts.
 *
 * Algorithm by [Blackmanand Vigna 2018]
 *   https://prng.di.unimi.it/xoshiro256starstar
 *
 */
const xoshiro256strstr = (s) => () => {
  const result = u64(rotl(u64(s[1] * 5n), 7n) * 9n);

  let t = u64(s[1] << 17n);

  s[2] ^= s[0];
  s[3] ^= s[1];
  s[1] ^= s[2];
  s[0] ^= s[3];

  s[2] ^= t;

  s[3] = rotl(s[3], 45n);

  return result;
};

//-----------------------------------------------------------------------------

/**
 * Returns a float between [0, 1) (inclusive of 0, exclusive of 1).
 */
const randomDecimal = (xss) => () => {
  const t = xss();
  return Number(t % 9007199254740991n) / 9007199254740991;
};

//-----------------------------------------------------------------------------

const randomNumber = (r) => (a, b) => a + (b - a) * r();

//-----------------------------------------------------------------------------

const randomInt = (rn) => (a, b) => Math.floor(rn(a, b + 1));

//-----------------------------------------------------------------------------

function medianOfInt(value) {
  var half = Math.floor(value / 2);

  if (value % 2) return half;

  return (half - 1 + half) / 2.0;
}
//-----------------------------------------------------------------------------

const shuffle = (array, r) => {
  let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(r() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

//-----------------------------------------------------------------------------

const repeat = (item, n) => Array.from({ length: n }).map((_) => item);

//-----------------------------------------------------------------------------

const selectRandom = (array, r) => array[Math.floor(r() * array.length)];

//-----------------------------------------------------------------------------

const selectRandomDist = (distMap, r) => {
  const keys = Object.keys(distMap).reduce(
    (a, k) => a.concat(repeat(k, distMap[k] * 100)),
    []
  );
  return selectRandom(shuffle(keys, r), r);
};
//-----------------------------------------------------------------------------

const getPallet = (palletNum, r) => {
  //return String(selectRandom(p[palletNum].split("-"), r)).match(/.{1,3}/g);
  let palStr = String(selectRandom(p[palletNum].split('-'), r));
  console.log('pal:', palStr);
  return palStr.match(/.{1,3}/g);
};

const getPName = (pNum) => {
  switch (pNum) {
    case 6:
      return 'ixchel';
    case 5:
      return 'ndebele';
    case 4:
      return 'duraeuropa';
    case 3:
      return 'starčevo';
    case 2:
      return 'jacquard';
    case 1:
      return 'geloma';
  }
};
//-----------------------------------------------------------------------------

// dulls / intensifies a colour by changing its percentage. Wow!
function changeCC(c, prc) {
  if (typeof c !== 'undefined') {
    let xP, rgb, r, g, b;
    if (typeof c !== 'object') {
      xP = xpPal(c);
      rgb = parseInt(xP, 16); // convert rrggbb to decimal
      r = ((rgb >> 16) & 0xff) * prc; // extract red and change prc
      g = ((rgb >> 8) & 0xff) * prc; // extract green
      b = ((rgb >> 0) & 0xff) * prc; // extract blue
    } else {
      r = c.levels[0] * prc; // extract red and change prc
      g = c.levels[1] * prc; // extract green
      b = c.levels[2] * prc; // extract blue
    }
    return color(r, g, b);
  } else {
    return c;
  }
}

//-----------------------------------------------------------------------------

// expand palette from 3-char colours to 6-char colours
const xpPal = (p) =>
  p
    .split('')
    .map((it) => it + it)
    .join('');

// func for returning a color to be used in art.js random func
const retCl = (p) => color('#' + xpPal(p));

//-----------------------------------------------------------------------------

const toHex = (x) => x.toString(16).padStart(2, '0');

//-----------------------------------------------------------------------------

// grab BG colour
function getBG(rdPal, r1, rn, ri) {
  let bgCl = 0;
  bgCl = changeCC(selectRandom(rdPal, r1), rn(0.45, 0.75));

  // check for not too similar to anything else in palette, otherwise crank up the brightness

  rdPal.map((p) => {
    let cPd = parseInt(xpPal(p), 16),
      l1 = bgCl.levels[0],
      l2 = bgCl.levels[1],
      l3 = bgCl.levels[2]; // convert rrggbb to decimal
    let rmean = (((cPd >> 16) & 0xff) + l1) / 2;
    let r = ((cPd >> 16) & 0xff) - l1; // extract red and change prc
    let g = ((cPd >> 8) & 0xff) - l2; // extract green
    let b = ((cPd >> 0) & 0xff) - l3; // extract blue
    if (
      sqrt(
        (((512 + rmean) * r * r) >> 8) +
          4 * g * g +
          (((767 - rmean) * b * b) >> 8)
      ) < 15
    ) {
      // 15 seems to be a good level of similarity.. below, too similar
      if (l1 === 0) {
        l1 = 255;
        l2 = 255;
        l3 = 255;
      } // extremely rare chance with ixchel with black bg & black other to not blend, therefore set to grey
      bgCl = changeCC([toHex(l1), toHex(l2), toHex(l3)].join(''), 0.5);
    }
  });

  return bgCl;
}

//-----------------------------------------------------------------------------

// on setup, get a random date (deterministic from seed)
function randomDate(start, end, rn) {
  return new Date(start.getTime() + rn * (end.getTime() - start.getTime()));
}

//-----------------------------------------------------------------------------
// fill square area with noise
// also, if you want to fill a shape area with noise, you can do so with a custom function..
// to do so, use doShape (make it true), shapeFunc (use a custom shape function, with x,y of square point catered for whether it falls in shape defined
// by function) and shapeVars for extra vars passed to function
//
function doCutNoise(
  stX,
  stY,
  wd,
  ht,
  xincr,
  yincr,
  clr,
  clrStrtLvl,
  clrEndLvl,
  randStrWt = false,
  doShape = false,
  shapeFunc = null,
  shapeVars = null
) {
  let x_off, y_off;

  for (let y = stY; y < ht; y = y + yincr) {
    x_off += xincr;
    y_off = 0;
    for (let x = stX; x < wd; x = x + xincr) {
      if (!doShape || (doShape && shapeFunc(x, y, ...shapeVars))) {
        beginShape();
        vertex(x, y);

        lerpCol = lerpedColorToWhite(
          clr,
          x,
          y,
          wd,
          clrStrtLvl,
          clrEndLvl,
          stX,
          stY,
          ht
        );
        // lerpCol = lerpColor(noiseCol, whiteCol, (map(x+y,stX+stY,wd+ht,0,1) * noiseV*clrEndLvl));
        if (randStrWt) {
          strokeWeight(random(0.5, 2));
        }
        stroke(lerpCol);

        vertex(x + 0.1, y);
        endShape();

        y_off += yincr;
      }
    }
  }
}
//-----------------------------------------------------------------------------
// is number odd...
function isOdd(num) {
  return num % 2 == 1;
}

//-----------------------------------------------------------------------------
// returns colour of a point (x,y) lerped within a given grid (stX, stY) from color level 1 -> 2, also averaged against x,y in whole window grid (windowHeigh, windowWidth)
// x, y = coords of point being drawn that needs color changed
// wd, ht = local width/height boundary coords of lerped area (that is, right-hand most width x coord and bottom-most y height coord)
// stX, stY = 0,0 of lerped area
// clrStttLvl = factor of given color to start with
// clrEndLvl = factor of given color to end up with
function lerpedColorToWhite(clr, x, y, wd, clrSttLvl, clrEndLvl, stX, stY, ht) {
  let noiseV = noise(
    x * y,
    y -
      (80 / (1 + pow(x - wd * noise(x / 302, y / 50), 4) / 16e6)) *
        noise(x / 30 / 50 + y)
  );
  let noiseCol = color(
    clr.levels[0] * clrSttLvl,
    clr.levels[1] * clrSttLvl,
    clr.levels[2] * clrSttLvl
  );
  let whiteCol = color(
    clr.levels[0] * clrEndLvl,
    clr.levels[1] * clrEndLvl,
    clr.levels[2] * clrEndLvl
  );
  // lerpCol = lerpColor(noiseCol, whiteCol, ((map(x+y,stX+stY,wd+ht,0,1) + map(x+y,stX+stY,windowHeight+windowWidth,0,1))/2) * noiseV*clrEndLvl);
  lerpCol = lerpColor(
    noiseCol,
    whiteCol,
    ((map(x + y, stX + stY, wd + ht, 0, 1) +
      map(x + y, 0, windowHeight + windowWidth, 0, 1)) /
      2) *
      noiseV *
      clrEndLvl
  );
  return lerpCol;
}

//-----------------------------------------------------------------------------
// draw single bar shadow
function drawBarShadow(barEl, arrLen, bgclr) {
  let clr = lerpColor(color('black'), color(tokenState.bgCol), 0.5);
  let pushout = 100;
  let scatter = 7 * arrLen;
  let strWt = 1.5 / arrLen < 0.75 ? 0.75 : 1.5 / arrLen;
  let xSt = barEl.sttX - pushout / 3;
  let xEn = barEl.endX + pushout / 6;
  let ySt = barEl.sttY - pushout / 3;
  let yEn = barEl.endY + pushout / 4;

  for (let y = ySt; y < yEn; y++) {
    for (let x = xSt; x < xEn; x++) {
      // from 0 to 255 to 0 again, along the x axis.. took me ages to work out this simple math :( yay though!
      // this is basically meant to show light shadows to left/right/up/down of area, but darker shadows within. I'm SURE there is an easier way to do this..

      let colAtPoint = color(get(x, y));

      let xyns =
        sin(PI * ((y + 1 - ySt) / (yEn - ySt))) <
        sin(PI * ((x + 1 - xSt) / (xEn - xSt)))
          ? sin(PI * ((y + 1 - ySt) / (yEn - ySt)))
          : sin(PI * ((x + 1 - xSt) / (xEn - xSt)));

      // factors for darkness to lightness from left-right/top-bottom across whole screen
      let xlf = lerp(1, 0, x / windowWidth);
      let ylf = lerp(1, 0, y / windowHeight);
      let xyls = ylf < xlf ? ylf : xlf;

      // combine 2 above factors
      xyns = (xyns + xyls) / 2;

      // clr.setAlpha(255*xyns);
      let newClr = lerpColor(clr, colAtPoint, 0.2);

      stroke(newClr);
      strokeWeight(strWt);

      point(x + scatter * randomGaussian(), y + scatter * randomGaussian());
    }
  }
}
//-----------------------------------------------------------------------------//-----------------------------------------------------------------------------
// sewn thread / carpety goodness
// cross axis lines.. ie. for each line going down.. (or across if along y-axis)
function doSewnSection(x1, y1, xadd, yadd, horizStyle, strokeClr, multiClr) {
  for (let t = 0; t < (horizStyle ? yadd : xadd); t++) {
    noFill();
    nT = noise(t);
    if (multiClr) {
      stroke(retCl(random(strokeClr))); // if threads are multi-colored, pick a random color from palette for each line
    } else {
      stroke(changeCC(strokeClr, random(0.7, 1.2))); // if threads are single-coloured, just vary the single colour
    }

    // if horizStyle is true, we're doing threads along x axis (horiz), otherwise along y axis (vert)
    if (horizStyle) {
      yA1 = t;
      xA1 = 0;
      xA2 = xadd;
      yA2 = 0;
      tC = xA2 / 50;
    } else {
      yA1 = 0;
      xA1 = t;
      xA2 = 0;
      yA2 = yadd;
      tC = yA2 / 50;
    }
    strokeWeight(random(0.1, 2));
    rB = random(1, 10);
    if (horizStyle) {
      if (random(1) > 0.5) {
        rB = rB * -1;
      }
    }

    beginShape(LINES);
    vertex(x1 + xA1, y1 + yA1); // starting vertex

    // pattern repeating along chosen axis! ie. the line going across (or down if y-axis)
    for (let v = 0; v < (horizStyle ? xA2 : yA2); v = v + tC * 4) {
      // we do this weave pattern in 4 parts...
      // _-_- => 1234 in below 'l' loop..
      for (let l = 1; l < 5; l++) {
        if (v + tC * l < (horizStyle ? xA2 : yA2)) {
          // we can cater for both horiz/vertical vertexes in this function by changing below vars..
          if (horizStyle) {
            v1xAd = v + tC * l;
            v1yAd = 0;
            v2xAd = v + tC * l;
            v2yAd = -(tC + 0.5 * randomGaussian(0.5));
            xEndCap = 0;
            yEndCap = v2yAd;
          } else {
            v1xAd = 0;
            v1yAd = v + tC * l;
            v2xAd = -(tC + 0.5 * randomGaussian(0.5));
            v2yAd = v + tC * l;
            xEndCap = v2xAd;
            yEndCap = 0;
          }

          // so here, we either do a _| shape two vertexes, or -| two vertexes..
          if (isOdd(l)) {
            vertex(x1 + xA1 + v1xAd, y1 + yA1 + v1yAd);
          }
          if (y1 + yA1 + v2yAd > y1 && x1 + xA1 + v2xAd > x1) {
            vertex(x1 + xA1 + v2xAd, y1 + yA1 + v2yAd);
          } //console.log('x1+xA1+v2xAd:', x1+xA1+v2xAd, ', poss end:', x1+xA1+xA2);
          if (!isOdd(l)) {
            vertex(x1 + xA1 + v1xAd, y1 + yA1 + v1yAd);
          }
        }
      }
    }

    vertex(x1 + xA1 + xA2 + xEndCap, y1 + yA2 + yA1 + yEndCap); // ending vertex
    endShape();
  }
}

//-----------------------------------------------------------------------------//-----------------------------------------------------------------------------
// do sewn section going up and down from circles
function doThreadStack(eX1, eY1, ey2, pal, diam, bndArr) {
  let linWid = diam / random(2, 5); // random(1,2);
  let flipSpace = random(1, 2);
  let rows = random(2, 10);
  let yIncrUp = (eY1 + diam - ey2) / rows;

  //push();
  //translate(eX1, eY1);
  // rotate(radians(90));
  for (let ct = 1; ct < rows; ct++) {
    if (eY1 - diam - ct * yIncrUp > bndArr[1]) {
      doSewnSection(
        eX1 - linWid / 2 + flipSpace,
        eY1 - diam - ct * yIncrUp,
        linWid + abs(flipSpace),
        yIncrUp,
        false,
        changeCC(retCl(random(pal)), 0.75),
        false
      ); // going up
    }
    if (eY1 + diam + (ct - 1) * yIncrUp + yIncrUp < bndArr[1] + bndArr[3]) {
      doSewnSection(
        eX1 - linWid / 2 + flipSpace,
        eY1 + diam + (ct - 1) * yIncrUp,
        linWid + abs(flipSpace),
        yIncrUp,
        false,
        changeCC(retCl(random(pal)), 0.75),
        false
      ); // going down
    }
    flipSpace = flipSpace * -1;
  }
  //pop();
}

//-----------------------------------------------------------------------------
// x,y = center position of circle to be started
// wid, ht = width and height of area where mandala must fill. will take the smallest area to fill..
function mandalaCircle(x, y, wid, ht, randPal, petals, layers, lyrFillClr) {
  push();
  noStroke();
  translate(x, y);
  // let petals = random(4,40);
  // let layers = random(5,40);
  let ang = 360 / petals;

  for (let j = layers - 1; j > 0; j--) {
    fill(lyrFillClr[j]);
    let ly = j / layers;

    xBnd1 = wid < ht ? wid / 3.22 : ht / 3.22;
    xBnd2 = wid < ht ? wid / 2.17 : ht / 2.17;
    xBnd3 = wid < ht ? wid / 2.44 : ht / 2.44;

    xBnd1 = wid < ht ? wid / 3.22 : ht / 3.22;
    xBnd2 = wid < ht ? wid / 2.17 : ht / 2.17;
    xBnd3 = wid < ht ? wid / 2.44 : ht / 2.44;

    x1 = random(xBnd1 * ly, xBnd2 * ly);
    x2 = random(xBnd1 * ly, xBnd2 * ly);
    x3 = random(xBnd3 * ly, xBnd2 * ly);
    x4 = random(xBnd1 * ly, xBnd2 * ly);

    yBnd1 = wid < ht ? wid / 33.33 : ht / 33.33;
    yBnd2 = wid < ht ? wid / 25 : ht / 25;
    yBnd3 = wid < ht ? wid / 16.67 : ht / 16.67;
    yBnd4 = wid < ht ? wid / 10 : ht / 10;

    y2 = random(yBnd1 * ly, yBnd2 * ly);
    y3 = random(yBnd3 * ly, yBnd4 * ly);

    for (let i = 0; i < petals; i++) {
      mirrorShape(x1, x2, x3, x4, 0, y2, y3, 0);
      rotate(ang);
    }
  }
  pop();
}

//-----------------------------------------------------------------------------
// creates a custom shape, plus mirrored image of it (on y axis), to create single mirrored image
function mirrorShape(x1, x2, x3, x4, y1, y2, y3, y4) {
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, y2);
  curveVertex(x3, y3);
  curveVertex(x4, y4);
  curveVertex(x4, y4);
  endShape();
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, -y2);
  curveVertex(x3, -y3);
  curveVertex(x4, y4);
  curveVertex(x4, y4);
  endShape();
}

//-----------------------------------------------------------------------------
// draw a textured circle!
// basically plot points inside a circle radius to create a circle
// gaus generally good around 3.3
function circCollision(x, y, circX, circY, rad) {
  // console.log( dist(x, y, circX, circY), rad);
  return dist(x, y, circX, circY) < rad ? true : false;
}

//-----------------------------------------------------------------------------
function drawTxtrCirc(x, y, radX, radY, gaus, clr) {
  //doCutNoise(x-radX, y-radY, x+radX, y+radY, 1, 1, clr, 0.7, 1.7, true, true, circCollision, [x, y, radX/2]);

  push();
  translate(x, y);
  for (let l = 0; l < 300; l++) {
    let theta = random(0, TWO_PI);
    let h = randomGaussian(gaus);
    let r = (exp(h) - 1) / (exp(h) + 1);
    let xV = (radX / 2) * r * cos(theta);
    let yV = (radY / 2) * r * sin(theta);
    if (clr) {
      let pClr = lerpedColorToWhite(
        clr,
        x + xV,
        y + yV,
        x + radX / 2,
        0.7,
        1.7,
        x - radX / 2,
        y - radY / 2,
        y + radY / 2
      );
      stroke(pClr);
    }
    point(xV, yV, 10);
  }
  pop();
}
//-----------------------------------------------------------------------------
// draw a textured triangle
function drawTxtrTri(x1, y1, x2, y2, x3, y3, clr) {
  let smX = Math.min(x1, x2, x3);
  let lgX = Math.max(x1, x2, x3);
  let smY = Math.min(y1, y2, y3);
  let lgY = Math.max(y1, y2, y3);

  // do cut noise, within the triangle bounds
  doCutNoise(
    smX,
    smY,
    lgX,
    lgY,
    (lgX / smX + windowWidth / windowHeight) / 3,
    (lgY / smY + windowWidth / windowHeight) / 3,
    clr,
    0.7,
    1.7,
    true,
    true,
    trianCollision,
    [x1, y1, x2, y2, x3, y3]
  );
}

//---------------------------------------------------------------------------------------------
/*
function calcSlashes(wd, ht, r) {
  // something between 1 and 10
  let slashArr = [];
  for(let i = 0; i<selectRandom([...Array(10).keys()], r); i++) {
    let a = p5.Vector.random2D().mult([wd, ht]);
    let b = p5.Vector.random2D().mult([wd, ht]);
    a.x = abs(a.x);
    a.y = abs(a.y);
    b.x = abs(b.x);
    b.y = abs(b.y);
    slashArr.push([a,b]);
  }
  return slashArr;
}
*/

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == 'Y_AXIS') {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == 'X_AXIS') {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

//-----------------------------------------------------------------------------//-----------------------------------------------------------------------------
// draws vertexes in following order, moving inwards:
//
//  4.               3.
//
//  1.               2.
//
function doSpiral(xa, ya, xb, yb, clrArr, style = 1) {
  beginShape();
  let sections = 5;
  let incr = (buffer = random(
    5,
    (abs((yb - ya) / sections) + abs((xa - xb) / sections)) / 2
  ));
  let prvL = 0;
  let loopSize =
    (abs(yb - ya) < abs(xa - xb) ? abs(yb - ya) : abs(xa - xb)) / 2;
  let clrCnt = 0; // stupid color counter to go through our set-length array of colors because we can't be arsed to create a proper 0...n loop below...

  for (let l = 0; l > -loopSize; l -= incr) {
    switch (style) {
      case 1: // curved spiral
        xIndt = prvL; // make spiral x bottom line start a bit back to create spiral effect
        break;
      case 2: // square
        xIndt = l;
        buffer = 0.1;
        break;
      case 3: // square spiral
        xIndt = l;
        break;
    }

    if (clrCnt === 10) {
      clrCnt = 0;
    }
    let spiClr = clrArr[clrCnt];

    if (xb + l > xa - prvL) {
      for (let xx = xa - xIndt; xx < xb + l; xx++) {
        switch (style) {
          case 1: // curved spiral
            xSlant = (xx + 1 * randomGaussian(0.0003) + (xb + xa) / 2) / 2;
            break;
          case 2: // square
            xSlant = xx + 1 * randomGaussian(0.0003);
            break;
          case 3: // square spiral
            xSlant = xx + 1 * randomGaussian(0.0003);
            break;
        }

        if (xx > xa - l) {
          spiClr.setAlpha(random(150, 255));
          stroke(spiClr);
          line(
            xx + 1 * randomGaussian(0.0003),
            yb - l,
            xSlant,
            yb - l + incr / 2 + random(1, incr / 5)
          ); // top
        }
        spiClr.setAlpha(random(150, 255));
        stroke(spiClr);
        line(
          xx + 1 * randomGaussian(0.0003),
          ya + l,
          xSlant,
          ya + l - incr / 2 - random(1, incr / 5)
        ); // bottom
      }
    }

    if (ya + l > yb - l) {
      for (let yy = yb - l; yy < ya + l; yy++) {
        switch (style) {
          case 1: // curved spiral
            ySlant = (yy + 1 * randomGaussian(0.0003) + (yb + ya) / 2) / 2;
            break;
          case 2: // square
            ySlant = yy + 1 * randomGaussian(0.0003);
            break;
          case 3: // square spiral
            ySlant = yy + 1 * randomGaussian(0.0003);
            break;
        }

        spiClr.setAlpha(random(150, 255));
        stroke(spiClr);
        line(
          xb + l,
          yy + 1 * randomGaussian(0.0003),
          xb + l - incr / 2 - random(1, incr / 5),
          ySlant
        ); // right
        if (yy < ya + l - buffer) {
          spiClr.setAlpha(random(150, 255));
          stroke(spiClr);
          line(
            xa - l,
            yy + 1 * randomGaussian(0.0003),
            xa - l + incr / 2 + random(1, incr / 5),
            ySlant
          ); // left
        }
      }
    }

    if (l > -loopSize) {
      prvL = l;
    }

    clrCnt++; // increment our stupid colour counter
  }
  endShape();
}

//-----------------------------------------------------------------------------
// calculate if point (px, py) is within area of 3 triangle points (x1,y1 & x2,y2, & x3,y3)
function trianCollision(px, py, x1, y1, x2, y2, x3, y3) {
  // get the area of the triangle
  var areaOrig = floor(abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)));
  //console.log("totalArea: " + areaOrig);

  // get the area of 3 triangles made between the point and the corners of the triangle
  var area1 = floor(abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py)));
  var area2 = floor(abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py)));
  var area3 = floor(abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py)));
  //console.log("areaSum: " + (area1 + area2 + area3));

  // if the sum of the three areas equals the original, we're inside the triangle
  if (area1 + area2 + area3 <= areaOrig) {
    return true;
  }
  return false;
}

//---------------------------------------------------------------------------------------------
// big bar functions - calc
//---------------------------------------------------------------------------------------------

function calcBigBars(
  divNum,
  cutsArr,
  cvW,
  cvH,
  randPal,
  rndSpc,
  r,
  ri,
  rn,
  barIncr,
  recalc,
  cWv
) {
  let tempArr = [];

  let stY = cvH * 0.1;
  let enY = cvH * 0.9;

  for (let i = 0; i < divNum; i++) {
    let tempXst = cvW * 0.1 + barIncr * i;

    let yBNR = recalc ? cWv[0][i].yBNR : rn(1, noise(enY - stY) * 300); // yBigNoiseRand

    // figure out cut x/y start/end
    let sttX = tempXst + int(rndSpc);
    let endX = tempXst + (barIncr - rndSpc);
    let sttY = stY + yBNR;
    let endY = enY - yBNR;

    // figure out cut area styles and random variables! important
    let cOb = [];
    for (let cs = 0; cs < cutsArr[i]; cs++) {
      // to cut down on bytes... 'cO' is our working cut object..
      let cO = recalc ? cWv[0][i].cOb[cs] : null;

      // some of these also put into obj
      let cstX = barIncr - rndSpc * 2;
      let cenY = (endY - sttY) / cutsArr[i];

      // random declarations/assignments
      let cStyle = recalc ? cO.cStyle : ri(1, 3), // 1 = Triangles, 2 = Threads/Rectangles, 3 = Circles
        numSh = recalc ? cO.numSh : ri(1, 5), // random number of shapes in each cut
        thrSty = recalc ? cO.thrSty : r(1) > 0.5 ? true : false, // boolean used for two things: with bz threads, are left-right or up-down? and with rect/blocks, 'draw potentially recursive rects/tris', or just a simple rectangle
        thrPSorM = recalc ? cO.thrPSorM : r(1) > 0.5 ? true : false, //chance that threads are multi vs single colour
        thrSnCl = recalc ? cO.thrSnCl : retCl(selectRandom(randPal, r)), // if threads are single-colour, here's the color :)
        cutClr = recalc ? cO.cutClr : retCl(selectRandom(randPal, r)),
        shFil = [], // what colours to fill into the number of shapes as described above
        rcrShFil = [], // what colours to fill into per shape num/ recurring number. Used for circles so far, which are recur*4
        rcrCDiaA = [], // recurring circle diam factor A
        rcrCDiaB = [], // recurring circle diam factor B
        rcrCDiaC = [], // recurring circle diam factor C
        rcrCDiaD = [], // recurring circle diam factor D
        trFil = [], // for any secondary triangles, what color to use
        trFl = [], // if random flip on, do we flip this triangle or not?
        trRgt = [], // is this triangle right facing?
        rectOrTri = [], // if recursive rects/tri section, determine whether we do a rect or tri for each shape...
        rectQuad = [], // what quadrant should our recursive rects fall into? 1=NW, 2=NE, 3=SW, 4=SE
        rcrXA = [], // 'paper armada' x factor A
        rcrYA = [], // 'paper armada' y factor A
        rcrXB = [], // 'paper armada' x factor B
        rcrYB = [], // 'paper armada' y factor B
        rcrPal = [], // 'paper armada' palette
        //diam = int(cstX / cenY) < 1 ? int(cenY / cstX) < 1 ? 0 : cstX/alC : cenY,
        diam = cstX / numSh > cenY ? cenY : cstX / numSh,
        diDv = recalc ? cO.diDv : r(1) > 0.5 ? 1 : 2,
        recur = recalc ? cO.recur : ri(1, 5),
        rSwnCut = [], // for certain recurring sections, do we show a 'sewn' section, or a noisy cut?
        rSwnSpiral = recalc ? cO.rSwnSpiral : r(1) > 0.5 ? true : false; // show a sewn section, or a spiral, for certain sections
      rMandala = recalc ? cO.rSwnSpiral : r(1) > 0.5 ? true : false; // show SOME SORT OF mandala, for certain sections
      (rMandPetals = []),
        (rMandLayers = []),
        (rMandFillClr = []),
        (rSpiClrs = []),
        (rSpiType = recalc ? cO.rSpiType : ri(1, 3)); // 1 = spiral, 2 = square, 3 = square spiral

      // do stupid set-length array of 10 colors for dumbass spiral color progression cause we can't figure out how to not break other spiral loop thingy
      let tmpSpiClrArr = [];
      for (let rM = 0; rM < 10; rM++) {
        tmpSpiClrArr.push(
          recalc ? cO.rSpiClrs[rM] : retCl(selectRandom(randPal, r))
        );
      }
      rSpiClrs.push(...tmpSpiClrArr);

      // random arrays per shape count
      for (let t = 0; t < numSh; t++) {
        shFil.push(recalc ? cO.shFil[t] : retCl(selectRandom(randPal, r))); // what colors to fill main shape array with
        trFil.push(recalc ? cO.trFil[t] : retCl(selectRandom(randPal, r))); // what colors to fill secondary triangles with. if shapes are triangles, there's always a second tri, so will be same number of elements as shFil array
        trFl.push(recalc ? cO.trFl[t] : r(1) > 0.5 ? true : false);
        trRgt.push(recalc ? cO.trRgt[t] : r(1) > 0.5 ? true : false);
        rectOrTri.push(recalc ? cO.rectOrTri[t] : r(1) > 0.3 ? true : false);
        rectQuad.push(recalc ? cO.rectQuad[t] : ri(1, 5)); // should be between 1 and 4
        rSwnCut.push(recalc ? cO.rSwnCut[t] : r(1) > 0.5 ? true : false);
        rMandPetals.push(recalc ? cO.rMandPetals[t] : ri(4, 40));
        rMandLayers.push(recalc ? cO.rMandLayers[t] : ri(5, 40));

        let tmpMFCArr = [];
        // for as many random layers, for each mandala, ensure same random fill colors
        for (
          let rM = recalc
            ? cO.rMandLayers[t]
            : rMandLayers[rMandLayers.length - 1];
          rM > 0;
          rM--
        ) {
          tmpMFCArr.push(
            recalc ? cO.rMandFillClr[t][rM] : retCl(selectRandom(randPal, r))
          );
        }
        rMandFillClr.push(tmpMFCArr);

        let t_rcrShFil = [],
          t_rcrXA = [],
          t_rcrYA = [],
          t_rcrXB = [],
          t_rcrYB = [],
          t_rcrPal = [],
          t_rcrCDiaA = [],
          t_rcrCDiaB = [],
          t_rcrCDiaC = [],
          t_rcrCDiaD = [];

        // random arrays per shape/recur count
        // this one we amp up recur times 4.. for paper armada effect.. ..also for circle fills... not the best but hey
        if (!recalc) {
          for (let rc = 0; rc < recur * 4; rc++) {
            t_rcrXA.push(r(1) > 0.15 ? true : false); // 'paper armada' x factor A
            t_rcrYA.push(r(1) > 0.25 ? true : false); // 'paper armada' y factor A
            t_rcrXB.push(ri(1, 3)); // 'paper armada' x factor B
            t_rcrYB.push(ri(1, 3)); // 'paper armada' y factor B
            t_rcrPal.push(retCl(selectRandom(randPal, r))); // 'paper armada' palette
            t_rcrShFil.push(retCl(selectRandom(randPal, r))); // recurring shapes colours! per shape num
            t_rcrCDiaA.push(ri(1, 2));
            t_rcrCDiaB.push(ri(1, 2));
            t_rcrCDiaC.push(ri(1, 2));
            t_rcrCDiaD.push(ri(1, 2));
          }
        }
        rcrShFil[t] = recalc ? cO.rcrShFil[t] : t_rcrShFil;
        rcrXA[t] = recalc ? cO.rcrXA[t] : t_rcrXA;
        rcrYA[t] = recalc ? cO.rcrYA[t] : t_rcrYA;
        rcrXB[t] = recalc ? cO.rcrXB[t] : t_rcrXB;
        rcrYB[t] = recalc ? cO.rcrYB[t] : t_rcrYB;
        rcrPal[t] = recalc ? cO.rcrPal[t] : t_rcrPal;
        rcrCDiaA[t] = recalc ? cO.rcrCDiaA[t] : t_rcrCDiaA;
        rcrCDiaB[t] = recalc ? cO.rcrCDiaB[t] : t_rcrCDiaB;
        rcrCDiaC[t] = recalc ? cO.rcrCDiaC[t] : t_rcrCDiaC;
        rcrCDiaD[t] = recalc ? cO.rcrCDiaD[t] : t_rcrCDiaD;
      }

      cOb.push({
        cStyle,
        numSh,
        shFil,
        trFil,
        thrSty,
        thrPSorM,
        thrSnCl,
        cutClr,
        diam,
        diDv,
        recur,
        cstX,
        trFl,
        trRgt,
        rectOrTri,
        rectQuad,
        rcrXA,
        rcrYA,
        rcrXB,
        rcrYB,
        rcrPal,
        rcrShFil,
        rcrCDiaA,
        rcrCDiaB,
        rcrCDiaC,
        rcrCDiaD,
        rSwnCut,
        rSwnSpiral,
        rMandala,
        rMandPetals,
        rMandLayers,
        rMandFillClr,
        rSpiClrs,
        rSpiType,
      });
    }

    tempObj = {
      sttX,
      endX,
      sttY,
      endY,
      cuts: cutsArr[i],
      cOb,
      barBg: recalc ? cWv[0][i].barBg : selectRandom(randPal, r),
      yBNR,
      // yFlNR
    };
    tempArr.push(tempObj);
  }
  return tempArr;
}

//-----------------------------------------------------------------------------

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

//-----------------------------------------------------------------------------
// pallettes
//-----------------------------------------------------------------------------

let p = [];

//185e2235aed6e89

// geloma - muted, earthy, plain
//p[1] = "e8854458acecfb3";
p[1] =
  'cfe688222433733-444ffddb6533233-6548baefbea2b52-69adcbfb7f77a57-e8854458acecfb3-7caddbdb6b53334-854dfeffdfddeaa-444767b88eb9fdb';

// jacquard - greeny bluey, nautical
p[2] =
  '223087bd9feac43-acbddce75c44545-5543339b628a357-2041351657b19c6-0683993ba9a2eb1';

// starčevo - red, or tribal / clashing
p[3] =
  '313445688ecac24-697101ba0cb8d35-333feefddfcde36-aaac57e15444333-edb123f35eb4edb-f342221771bbffc-201600a00b20e40';

// duraeuropa - bright, summery, colorful
p[4] =
  '643feb7bae71ea3-fa9e78b68657357-ec7d54b24522577-9dafdafc6fa4e54-bbacb2e73e27333';

// NEW PALETTES.. ndebele etc.
//p[5] = "219e92f219d7eff";
p[5] =
  '185e2235aed6e89-d77ed7ecb9bb068-e71100eef812e59-adfefe101eb0238-219e92f219d7eff';

// ixchel - black and white (rarest!)
p[6] = '000111EEECCCAAA';

//-----------------------------------------------------------------------------
// distributions
//-----------------------------------------------------------------------------

const palletDist = {
  6: 0.01,
  5: 0.09,
  4: 0.1,
  3: 0.2,
  2: 0.2,
  1: 0.4,
};

// used for divs, as well as > 9 (21% chances) ie. rotation chance, chaos bg chance, curve chance, slant chance
const barDist = {
  10: 0.05,
  9: 0.1,
  8: 0.1,
  7: 0.12,
  6: 0.15,
  5: 0.15,
  4: 0.12,
  3: 0.11,
  2: 0.1,
  //1: .05
};

const spDist = {
  20: 0.2,
  15: 0.2,
  10: 0.2,
  5: 0.2,
  1: 0.1,
  0: 0.01,
};

//-----------------------------------------------------------------------------
// main
//-----------------------------------------------------------------------------

const hashToTraits = (hash) => {
  // so it SEEMS as if every time r is referenced.. like in a loop, etc... it changes the seed-determined outcome of all r's? I guess?
  // so in other words, if you call r in any sort of loop that can possibly CHANGE (like, allowedCircles-based loop), then we will always have non-deterministic results on page reloads or whatever thing
  // that can CHANGE on each reload.
  // so basically, DON'T DO THAT.

  // setup random fns
  const [r, rn, ri] = mkRandom(hash);

  // size / dimension consts
  // const cvW = 1400;
  // const cvH = 1000;

  const cvW = windowWidth;
  const cvH = windowHeight;

  // most initial random vars
  const bars = selectRandomDist(barDist, r);
  const pNum = parseInt(selectRandomDist(palletDist, r));
  const randPal = getPallet(pNum, r);
  const rndSpc = selectRandomDist(spDist, r);
  const rdFlp = ri(1, 10) > 8 ? true : false;
  const rStyle = ri(1, 10) > 5 ? 1 : 3; // 1 = solid, 2 = sketch, 3 - mix // ONLY SOLID OR MIX NOW!!
  const barIncr = (cvW * 0.9 - cvH * 0.1) / bars;

  let cutsArr = [];
  let cend = bars === 1 ? 10 : bars;
  for (let c = 0; c < cend; c++) {
    cutsArr.push(ri(1, bars * 2));
  }
  console.log('cutsArr:', cutsArr);

  const divArr = calcBigBars(
    bars,
    cutsArr,
    cvW,
    cvH,
    randPal,
    rndSpc,
    r,
    ri,
    rn,
    barIncr,
    false,
    null
  );
  const bgCol = getBG(randPal, r, rn, ri);

  console.log('divArr:', divArr);

  // adding to tokenState, to help in draw function in art.js
  tokenState.bgCol = bgCol;
  tokenState.bars = bars;
  tokenState.cutsArr = cutsArr;
  tokenState.rndSpc = rndSpc;

  return {
    cvW,
    cvH,
    randPal,
    rdFlp,
    rStyle,
    divArr,
    pNum,
  };
};

// vim: ts=2:sw=2
//-----------------------------------------------------------------------------
// boot.js - bootstrap script with global data
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// testing
//-----------------------------------------------------------------------------

const randomHash = size => {
  const digits = "0123456789abcdef";
  return '0x' + [...Array(size).keys()]
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join('');
};

//-----------------------------------------------------------------------------
// globals
//-----------------------------------------------------------------------------

const tokenData = {
  projectId: 1,
  tokenId: 1,
  hash: randomHash(64)
};

//-----------------------------------------------------------------------------
// flatA = flattenAngle, lnThk = lineThickness, flutA = flutterAdd
const tokenState = {
  lnThk: "0",
  flutA: "0",
  moving: "true"
};

// vim: ts=2:sw=2
//-----------------------------------------------------------------------------
// index.js - handle testing state controls
//-----------------------------------------------------------------------------

/**
 * Handle paused, flutter and line thickness state change.
 */

const onChangeMoving = checked => {
  tokenState.moving = checked;
};

const onChangeFlutA = value => {
  tokenState.flutA = parseInt(value);
};

const onChangeLnThk = value => {
  tokenState.lnThk = parseInt(value);
};

const onMousSldrTog = () => {
  if(!document.getElementById('moving').checked) {
    tokenState.moving = !tokenState.moving;
  }
};

//-----------------------------------------------------------------------------
// art.js - art generation
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// functions
//-----------------------------------------------------------------------------
//
// CHECK EVERYTHING MARKED AS  //FXHash!! , as this is FXHash specific stuff :)
//

let fxPrevOccurred = false;

function setup() {
  //FXHash!!
  hash = fxhash;
  console.log('hash:', hash);
  randomSeed(hash);
  noiseSeed(hash);

  let { seed, cvW, cvH, randPal, rStyle, divArr, pNum } = hashToTraits(hash);

  //FXHash!!
  window.$fxhashFeatures = {
    // here define the token features
    Rugs: divArr.length,
    PaletteFamily: getPName(pNum),
  };

  tokenState.wove = [divArr, randPal, rStyle];
  tokenState.cvW = cvW;
  tokenState.cvH = cvH;

  // default frame-rate is 8
  frameRate(8);

  // create canvas
  createCanvas(cvW, cvH);

  background(tokenState.bgCol);
  doCutNoise(0, 0, width, height, 1.1, 1.1, tokenState.bgCol, 1, 2);

  for (let b = 0; b < divArr.length; b++) {
    drawBarShadow(divArr[b], divArr.length, tokenState.bgCol);
  }

  drawBigBars(...tokenState.wove);
}

/**
 * Draw is required to be defined for processing library to load into the
 *  global scope.
 */
function draw() {}

// get this working...
/*
z
*/
//--------------------------------------------------------------------------
// Cuts Shape drawing functions
//---------------------------------------------------------------------------

const doSomeTriangles = (xx, yy, yyy, x2d, cOb) => {
  let rS = cOb.numSh;

  // for as many triangles defined, figure out their geometry..
  for (let r = 0; r < rS; r++) {
    let x1, y1, x2, y2, x3, y3, mX1, mY1, mX2, mY2, mX3, mY3;

    // main vars
    (x1 = xx + x2d * r + x2d / 2), // middle x
      (y1 = yy),
      (x2 = xx + x2d + x2d * r), //right-hand most x
      (y2 = yy + yyy),
      (x3 = xx + x2d * r),
      (y3 = yy + yyy);

    // slightly smaller vars
    (mX1 = xx + x2d * r + x2d / 2),
      (mY1 = y1 + yyy / 2),
      (mX2 = x2 - x2d * 0.25),
      (mY2 = yy + yyy),
      (mX3 = x3 + x2d * 0.25);
    mY3 = yy + yyy;

    // right facing triangle
    if (cOb.trRgt[r]) {
      (x1 = xx + x2d * r), // middle x
        (y2 = yy + yyy / 2);
      (mX1 = xx + x2d * r),
        (mY1 = yy + yyy * 0.25),
        (mX2 = x2 - x2d * 0.5),
        (mY2 = yy + yyy / 2),
        (mX3 = x3),
        (mY3 = yy + yyy * 0.75);
    }

    // draw them
    drawTri(x1, y1, x2, y2, x3, y3, cOb.shFil[r], cOb.trFl[r]); // bg triangle
    drawTri(mX1, mY1, mX2, mY2, mX3, mY3, cOb.trFil[r], cOb.trFl[r]); // slightly smaller inner triangle
  }
};

// draw repeating triangle patterns!
const drawTri = (x1, y1, x2, y2, x3, y3, fillClr, trFl) => {
  let r1 = y1,
    r2 = y2;
  r3 = y3;

  if (trFl) {
    // flip the script!
    (r1 = y2), (r2 = y1);
    r3 = y1;
  }
  drawTxtrTri(x1, r1, x2, r2, x3, r3, fillClr);
};

// we draw 'threads' if style is Sketch/Mix, otherwise we draw recursively-dividing rectangles if Solid.
const drawThreadsOrRects = (
  x1,
  y1,
  xadd,
  yadd,
  rS,
  recur,
  rThrStyle,
  randPal,
  rStyle,
  rObj,
  origX,
  origY
) => {
  // RECT STYLE (if Solid style, become less like threads and more like rectangles...)
  if (rStyle === 1) {
    noStroke();
    for (let t = 0; t < rS; t++) {
      fill(rObj.shFil[t]); //solid style always has random colours it seems

      // I think this is like, 'draw potentially recursive rects/tris', or fractal rectangle/simple triangle option
      if (rThrStyle) {
        if (rObj.rectOrTri[t]) {
          // draw inner rect, or triangle?

          if (rObj.rSwnCut[t]) {
            doSewnSection(
              x1 + (xadd / rS) * t,
              y1,
              xadd / rS,
              yadd,
              random(1) > 0.5 ? true : false,
              rObj.shFil[t],
              false
            );
          } else {
            doCutNoise(
              x1 + (xadd / rS) * t,
              y1,
              x1 + (xadd / rS) * t + xadd / rS,
              y1 + yadd,
              1,
              1,
              rObj.shFil[t],
              0.55,
              1.5
            );
          }
        } else {
          drawTri(
            x1 + (xadd / rS) * t + xadd / rS,
            y1,
            x1 + (xadd / rS) * t,
            y1 + yadd,
            x1 + (xadd / rS) * t + xadd / rS,
            y1 + yadd,
            rObj.shFil[t],
            rObj.trFl[t]
          );
        }

        // small chance to create recursively smaller inner rectangle..
        if (recur > 0) {
          //fill(retCl(selectRandom(randPal, r1)));

          // we pick a random quadrant from current rect to draw inner rect in.. 1=NW, 2=NE, 3=SW, 4=SE
          let qd = rObj.rectQuad[t]; // should be between 1 and 4
          //let x2 = (xadd/rS) * 0.5;
          let xQ = (x2 = (xadd / rS) * 0.5);
          let yQ = yadd * 0.5;
          if (qd === 1) {
            xQ = 0;
            yQ = 0;
          }
          if (qd === 2) {
            yQ = 0;
          }
          if (qd === 3) {
            xQ = 0;
          }

          // passed 'recur' is only 0, becuase we only want to do this one more time.
          drawThreadsOrRects(
            x1 + xQ + (xadd / rS) * t,
            y1 + yQ,
            x2,
            yadd * 0.5,
            rS - 1,
            0,
            rThrStyle,
            randPal,
            rStyle,
            rObj,
            origX,
            origY
          );
        }
      } else {
        // do a cool fractal 'paper armada' rectangle thing, either vertical or horizontal
        //if ((xadd / yadd) < 4) {
        for (let rr = 0; rr < recur * 4; rr++) {
          // amp up the recur here times 4!
          fill(rObj.rcrPal[t][rr]);
          push();
          rectMode(CENTER);

          let xCutThing, yCutThing;

          // for different aspect ratios, stretch this way or that
          if (yadd > xadd) {
            translate(x1 + xadd / 2, y1 + (yadd / rS) * t + yadd / rS / 2);
            xCutThing =
              xadd /
              (rObj.rcrXB[t][rr] + (rObj.rcrXA[t][rr] ? (rr + 1) * 0.25 : 0));
            yCutThing =
              yadd /
              rS /
              (rObj.rcrYB[t][rr] + (rObj.rcrYA[t][rr] ? (rr + 1) * 0.25 : 0));
          } else {
            translate(x1 + (xadd / rS) * t + xadd / rS / 2, y1 + yadd / 2);
            xCutThing =
              xadd /
              rS /
              (rObj.rcrXB[t][rr] + (rObj.rcrXA[t][rr] ? (rr + 1) * 0.25 : 0));
            yCutThing =
              yadd /
              (rObj.rcrYB[t][rr] + (rObj.rcrYA[t][rr] ? (rr + 1) * 0.25 : 0));
          }

          doSewnSection(
            0 - xCutThing / 2,
            0 - yCutThing / 2,
            xCutThing,
            yCutThing,
            random(1) > 0.5 ? true : false,
            rObj.rcrPal[t][rr],
            false
          );

          pop();
        }
      }
    }

    // if rS = 0, do something interesting...}
    if (rS === 0) {
      mandalaCircle(
        origX + xadd,
        origY + yadd,
        xadd * 2,
        yadd * 2,
        randPal,
        rObj.rMandPetals[0],
        rObj.rMandLayers[0],
        rObj.rMandFillClr[0]
      );
    }
    // THREAD STYLE  (if Sketch/Mix, do bezier threadiness)
  } else {
    // let's bust out some sewn thread.
    let strokeClr = rObj.thrPSorM ? randPal : rObj.thrSnCl;
    if (rObj.rSwnSpiral) {
      doSewnSection(x1, y1, xadd, yadd, rThrStyle, strokeClr, rObj.thrPSorM);
    } else {
      noFill();
      doSpiral(x1, y1 + yadd, x1 + xadd, y1, rObj.rSpiClrs, rObj.rSpiType);
    }
  }
};

// tries to fit in as many circs as allowed into
const drawCircles = (bndX1, bndY1, bndX2, bndY2, randPal, rStyle, rObj) => {
  let numSh = rObj.numSh,
    tDi = rObj.diam / rObj.diDv,
    recur = rObj.recur;

  if (numSh >= 1) {
    if (bndY2 < bndX2 && (rStyle === 1 || rStyle === 3)) {
      // otherwise do top/bottom sewn sections
      doSewnSection(bndX1, bndY1, bndX2, bndY2 * 0.1, true, randPal, true);
      doSewnSection(
        bndX1,
        bndY1 + bndY2 * 0.9,
        bndX2,
        bndY2 * 0.1,
        true,
        randPal,
        true
      );
    }

    for (let c = 0; c < numSh; c++) {
      let eX1 = bndX1 + (bndX2 / numSh) * (c + 1) - bndX2 / numSh / 2;
      let eY1 = bndY1 + bndY2 / 2;

      // solid / mix
      if (rStyle === 1 || rStyle === 3) {
        noStroke();

        // thread stack or sewn bits
        if (bndY2 > bndX2) {
          // if it's a circle space with high vertical clearance, do some threadstacks in it
          doThreadStack(eX1, eY1, bndY1, randPal, rObj.diam, [
            bndX1,
            bndY1,
            bndX2,
            bndY2,
          ]);
        }

        for (let e = 0; e < recur * 4; e++) {
          let rD1 =
            rObj.rcrCDiaA[c][e] * (e + 1) === 0 ? 1 : rObj.rcrCDiaB[c][e];
          let rD2 =
            rObj.rcrCDiaC[c][e] * (e + 1) === 0 ? 1 : rObj.rcrCDiaD[c][e];

          strokeWeight(2);
          fill(rObj.rcrShFil[c][e]);
          // circle(eX1, eY1, tDi / rD1);
          drawTxtrCirc(
            eX1,
            eY1,
            tDi / rD1,
            tDi / rD2,
            map((tDi + rD1 + tDi + rD2) / 2, 0, width + height, 0, 1) * 75,
            rObj.rcrShFil[c][e]
          );
          strokeWeight(1);
        }
      }
      //sketched / mix
      if (rStyle === 2 || rStyle === 3) {
        stroke(retCl(random(randPal)));
        noFill();

        //draw curved beziers from left to right for each circle

        for (
          let b = eX1 - bndX2 / numSh / 2;
          b <= eX1 + bndX2 / numSh / 2;
          b = b + 5
        ) {
          strokeWeight(random(0.1, 2));
          setLineDash([random(1, 5), random(1, 5)]);

          if (!(random(1) < 0.5)) {
            fill(retCl(random(randPal)));
            // circle(eX1, eY1, tDi / random(1,3));
            // drawTxtrCirc(eX1, eY1, tDi / random(1,3), tDi / random(1,3), map((tDi + random(1,3) + tDi + random(1,3))/2, 0, (width+height), 0, 1)*75, retCl(random(randPal)));
          }

          if (!(random(1) < 0.5)) {
            noFill();
            stroke(retCl(random(randPal)));
            bezier(
              eX1,
              eY1 - tDi / 3,
              b,
              eY1 - tDi / 3,
              b,
              eY1 + tDi / 3,
              eX1,
              eY1 + tDi / 3
            );
          }
          setLineDash([]);
        }
      }
      let mandX = tDi;
      let mandY = abs(bndY2 - bndY1);
      if (c === medianOfInt(numSh)) {
        mandX = mandX * 2 > bndX2 ? bndX2 : mandX * 2;
        mandY = abs(bndY2 - bndY1) > bndY2 ? bndY2 : abs(bndY2 - bndY1);
      }

      // overlay mandala circle on whatever was drawn..
      if (rObj.rMandala) {
        mandalaCircle(
          eX1,
          eY1,
          mandX,
          mandY,
          randPal,
          rObj.rMandPetals[c],
          rObj.rMandLayers[c],
          rObj.rMandFillClr[c]
        );
      }
    }
  }
};

// style 'd' = down, 'a' = across
function drawBigBars(bArr, randPal, rStyle) {
  for (let b = 0; b < bArr.length; b++) {
    // rotation fun! Maybe figure this out a bit...
    push();

    // translate((bArr[b].endX - bArr[b].sttX) / bArr.length, windowHeight - (bArr[b].endY + (bArr[b].sttY)));
    // rotate(random(-0.3,0.3));

    // if(random(1) > 0.5) {

    //translate((bArr[b].endX - bArr[b].sttX) / bArr.length, windowHeight - (bArr[b].endY + (bArr[b].sttY)));
    //rotate(random(-0.3,0.3));

    // rotate(-1.575);
    // translate(-(tokenState.cvW/2) - (tokenState.cvH/2) + (bArr[b].endX - bArr[b].sttX), (tokenState.cvW/2) - (tokenState.cvH/2));
    // }

    // drawBarShadow(bArr[b], bArr.length, tokenState.bgCol);

    // strokeWeight(1.5);
    // stroke(retCl(bArr[b].barBg));
    // draw fluttery rug lines
    for (let i = 1; i < bArr[b].endX - bArr[b].sttX - 1; i = i + 1) {
      strokeWeight(random(1, 3));
      noFill();
      let rFlut = random(1, noise(bArr[b].endY - bArr[b].sttY) * 20); // flutter add for y
      // stroke(retCl(random(randPal)));
      // stroke(retCl(bArr[b].barBg));
      stroke(changeCC(retCl(bArr[b].barBg), random(0.7, 1.2)));
      // console.log('i:', i, 'calc:', sin(i * TWO_PI)/2);
      bezier(
        bArr[b].sttX + i,
        bArr[b].sttY - 10 - rFlut,
        bArr[b].sttX + i + random(-5, 5),
        bArr[b].sttY + random(-5, 5),
        bArr[b].sttX + i - random(-5, 5),
        bArr[b].sttY + 2 - random(-5, 5),
        bArr[b].sttX + i,
        bArr[b].sttY + 2 + rFlut
      );
      bezier(
        bArr[b].sttX + i,
        bArr[b].endY - rFlut - 10,
        bArr[b].sttX + i + random(-5, 5),
        bArr[b].endY + random(-5, 5),
        bArr[b].sttX + i - random(-5, 5),
        bArr[b].endY + 5 - random(-5, 5),
        bArr[b].sttX + i,
        bArr[b].endY + 5 + rFlut
      );
    }

    // cuts
    for (let c = 0; c < bArr[b].cuts; c++) {
      let fillClr;
      let bndY2 = (bArr[b].endY - bArr[b].sttY) / bArr[b].cuts; // cutblockheight: determine total height between fluttery top/bottom, divided by cuts needed
      let bndX1 = int(bArr[b].sttX); // cutblockstartX
      let bndY1 = bArr[b].sttY + bndY2 * c; // cutblockstartY

      noStroke();

      fillClr = bArr[b].cOb[c].cutClr;
      if (c === 0 || c === bArr[b].cuts - 1) {
        fillClr = retCl(bArr[b].barBg);
      } // if first / last cut block, fill with bg bar colour
      fill(fillClr); // otherwise fill cut block with assigned color

      rect(bndX1, bndY1, bArr[b].cOb[c].cstX, bndY2); // always have a bg block to build on top of
      doCutNoise(
        bndX1,
        bndY1,
        bndX1 + bArr[b].cOb[c].cstX,
        bndY1 + bndY2,
        1.5,
        1.5,
        fillClr,
        0.75,
        1.5
      );

      // if we might have random shapes in our cutStyle, figure that out..
      let numSh = bArr[b].cOb[c].numSh; // number of random shapes we'll be using
      let cstXdiv = bArr[b].cOb[c].cstX / numSh; // what are the X divs from this rand num?
      let cSty = bArr[b].cOb[c].cStyle;

      // 1 = Triangles, 2 = Threads/Rectangles, 3 = Circles
      if (cSty === 1) {
        doSomeTriangles(bndX1, bndY1, bndY2, cstXdiv, bArr[b].cOb[c]);
      } else if (cSty === 2) {
        drawThreadsOrRects(
          bndX1,
          bndY1,
          bArr[b].cOb[c].cstX,
          bndY2,
          numSh,
          bArr[b].cOb[c].recur,
          bArr[b].cOb[c].thrSty,
          randPal,
          rStyle,
          bArr[b].cOb[c],
          bndX1,
          bndY1
        );
      } else if (cSty === 3) {
        drawCircles(
          bndX1,
          bndY1,
          bArr[b].cOb[c].cstX,
          bndY2,
          randPal,
          rStyle,
          bArr[b].cOb[c]
        );
      }
    }

    //FXHash!!
    if (!fxPrevOccurred) {
      fxpreview();
      fxPrevOccurred = true;
    }

    pop();
  }
}
