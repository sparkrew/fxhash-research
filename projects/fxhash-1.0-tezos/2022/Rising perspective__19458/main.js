let cnv,
  myWid,
  myHei,
  mult,
  multX,
  multY,
  format,
  urlParam,
  palette,
  shadow,
  nFish,
  fishDir,
  theme,
  style,
  colorDistr,
  rasterCnv,
  loadContW,
  loadContH,
  loadItemW,
  loadItemH,
  loadExtMarg,
  loadIntMarg,
  loadDir,
  tipsCounter,
  rainbow;
loadLastIter = 0;
tips = [];
tipsTriggers = [10, 25, 50, 80, 120, 170];
let loadIter = 50;
let loadPatterns = [];
let loadOrder = [];
let sections = [];
let tempSections = [];
let time = -3;
let fRatioV = 0.75;
let fRatioH = 0.55;
let vertCnv = 5;
let horCnv = 5;
let margin = 8;
let maxTime = 270;
let rockPatterns = [];
let seaPatterns = [];
let palettes = [];
let birdColors = [];
let dbg = false;

function initPalettes() {
  let pBlackAndWhite = {
    name: "Black and White",
    bg: { h: 0, s: 0, b: 77 },
    pillars: [
      { f: { h: 0, s: 0, b: 15 }, s: { h: 0, s: 0, b: 0 } },
      { f: { h: 0, s: 0, b: 30 }, s: { h: 0, s: 0, b: 15 } },
    ],
    grass: { h: 0, s: 0, b: 50 },
    fish: { h: 0, s: 0, b: 24 },
    bird: { h: 0, s: 74, b: 80 },
    clouds: { h: 0, s: 0, b: 90 },
  };
  palettes.push(pBlackAndWhite);

  let pSpring = {
    name: "Spring",
    bg: { h: 177, s: 55, b: 40 },
    pillars: [
      { f: { h: 23, s: 53, b: 90 }, s: { h: 23, s: 53, b: 75 } },
      { f: { h: 14, s: 47, b: 80 }, s: { h: 14, s: 47, b: 65 } },
    ],
    grass: { h: 125, s: 55, b: 34 },
    fish: { h: 168, s: 13, b: 92 },
    bird: { h: 242, s: 55, b: 20 },
    clouds: { h: 0, s: 0, b: 80 },
  };
  palettes.push(pSpring);

  let pSunset = {
    name: "Sunset",
    bg: { h: 45, s: 61, b: 97 },
    pillars: [
      { f: { h: 350, s: 46, b: 51 }, s: { h: 350, s: 46, b: 36 } },
      { f: { h: 313, s: 27, b: 31 }, s: { h: 313, s: 27, b: 16 } },
    ],
    grass: { h: 125, s: 33, b: 50 },
    fish: { h: 0, s: 0, b: 0 },
    bird: { h: 0, s: 0, b: 95 },
    clouds: { h: 50, s: 30, b: 64 },
  };
  palettes.push(pSunset);

  let pVolcanic = {
    name: "Volcanic",
    bg: { h: 0, s: 90, b: 60 },
    pillars: [
      { f: { h: 0, s: 10, b: 15 }, s: { h: 0, s: 10, b: 0 } },
      { f: { h: 358, s: 77, b: 33 }, s: { h: 358, s: 77, b: 18 } },
    ],
    grass: { h: 40, s: 80, b: 98 },
    fish: { h: 65, s: 95, b: 70 },
    bird: { h: 305, s: 0, b: 90 },
    clouds: { h: 0, s: 0, b: 50 },
  };
  palettes.push(pVolcanic);

  let pExtinction = {
    name: "Extinction",
    bg: { h: 137, s: 21, b: 55 },
    pillars: [
      { f: { h: 145, s: 13, b: 41 }, s: { h: 145, s: 13, b: 26 } },
      { f: { h: 145, s: 9, b: 47 }, s: { h: 145, s: 9, b: 32 } },
      { f: { h: 60, s: 9, b: 67 }, s: { h: 60, s: 9, b: 52 } },
    ],
    grass: { h: 35, s: 25, b: 86 },
    fish: { h: 173, s: 14, b: 30 },
    bird: { h: 10, s: 85, b: 65 },
    clouds: { h: 138, s: 30, b: 73 },
  };
  palettes.push(pExtinction);

  let pVenus = {
    name: "Venus",
    bg: { h: 24, s: 32, b: 81 },
    pillars: [
      { f: { h: 280, s: 23, b: 31 }, s: { h: 280, s: 23, b: 16 } },
      { f: { h: 240, s: 19, b: 50 }, s: { h: 240, s: 19, b: 35 } },
    ],
    grass: { h: 0, s: 22, b: 70 },
    fish: { h: 224, s: 9, b: 10 },
    bird: { h: 60, s: 78, b: 92 },
    clouds: { h: 230, s: 20, b: 90 },
  };
  palettes.push(pVenus);

  let pPole = {
    name: "Pole",
    bg: { h: 195, s: 15, b: 88 },
    pillars: [
      { f: { h: 193, s: 42, b: 80 }, s: { h: 193, s: 42, b: 65 } },
      { f: { h: 195, s: 35, b: 90 }, s: { h: 195, s: 35, b: 75 } },
      { f: { h: 205, s: 35, b: 95 }, s: { h: 205, s: 35, b: 80 } },
    ],
    grass: { h: 0, s: 0, b: 95 },
    fish: { h: 173, s: 14, b: 30 },
    bird: { h: 319, s: 75, b: 83 },
    clouds: { h: 220, s: 0, b: 100 },
  };
  palettes.push(pPole);

  let pAcid = {
    name: "Acid",
    bg: { h: 99, s: 70, b: 95 },
    pillars: [
      { f: { h: 253, s: 70, b: 95 }, s: { h: 253, s: 70, b: 80 } },
      { f: { h: 267, s: 70, b: 95 }, s: { h: 267, s: 70, b: 80 } },
    ],
    grass: { h: 75, s: 75, b: 95 },
    fish: { h: 240, s: 15, b: 48 },
    bird: { h: 0, s: 0, b: 0 },
    clouds: { h: 75, s: 100, b: 53 },
  };
  palettes.push(pAcid);

  let pElDorado = {
    name: "El Dorado",
    bg: { h: 204, s: 72, b: 21 },
    pillars: [
      { f: { h: 37, s: 69, b: 60 }, s: { h: 37, s: 60, b: 45 } },
      { f: { h: 44, s: 96, b: 80 }, s: { h: 44, s: 96, b: 65 } },
    ],
    grass: { h: 0, s: 0, b: 80 },
    fish: { h: 0, s: 0, b: 80 },
    bird: { h: 0, s: 0, b: 0 },
    clouds: { h: 170, s: 44, b: 80 },
  };
  palettes.push(pElDorado);

  black = { h: 0, s: 0, b: 0 };
  white = { h: 0, s: 0, b: 100 };

  lightTheme = { h: 42, s: 16, b: 98 };
  darkTheme = { h: 230, s: 45, b: 10 };
}

function createColor(c, alpha) {
  return color(c.h, c.s, c.b, alpha);
}

function createCloudColor(c, colorVar, alpha) {
  const cb =
    c.b + colorVar < 0 ? 0 : c.b + colorVar > 100 ? 100 : c.b + colorVar;

  return color(c.h, c.s, cb, alpha);
}

function initFeature() {
  format = rndArr(["S", "P", "L"], [80, 60, 100]);

  initPalettes();
  palette =
    palettes[
      rndArr([0, 1, 2, 3, 4, 5, 6, 7, 8], [100, 95, 92, 82, 79, 76, 55, 50, 46])
    ];

  setBirdColors();

  const fishes = rndArr(["Many", "Average", "Few", "None"], [25, 33, 21, 13]);
  nFish =
    fishes == "None"
      ? 0
      : fishes == "Few"
      ? floor(rnd(5, 11))
      : fishes == "Average"
      ? floor(rnd(14, 23))
      : floor(rnd(30, 90));

  fishDir = rnd(0, 100) < 50 ? 0 : 1;

  theme = rndArr(["Dark", "Light"], [45, 55]);
  style = rndArr(["Regular", "Irregular", "Mixed"], [95, 79, 41]);
  let rCD = rnd(0, 100);
  colorDistr =
    rCD < 48 ? "Balanced" : rCD < 80 ? "Unbalanced" : "Heavily unbalanced";

  let rndRainbow = rnd(0, 100);
  rainbow = rndRainbow < 89 ? 0 : rndRainbow < 97 ? 1 : 2;
}

function setBirdColors() {
  const goldenConures = { h: 60, s: 78, b: 92 };
  const flamingos = { h: 319, s: 75, b: 83 };
  const cormorants = { h: 242, s: 55, b: 20 };
  const macaws = { h: 0, s: 74, b: 80 };
  const seagulls = { h: 0, s: 0, b: 95 };
  const scarletIbises = { h: 10, s: 85, b: 65 };

  switch (palette.name) {
    case "Black and White":
      birdColors.push(macaws);
      birdColors.push(seagulls);
      birdColors.push(flamingos);
      birdColors.push(goldenConures);
      break;
    case "Spring":
      birdColors.push(cormorants);
      birdColors.push(seagulls);
      birdColors.push(goldenConures);
      break;
    case "Sunset":
      birdColors.push(seagulls);
      birdColors.push(goldenConures);
      birdColors.push(flamingos);
      break;
    case "Volcanic":
      birdColors.push(seagulls);
      birdColors.push(goldenConures);
      break;
    case "Extinction":
      birdColors.push(scarletIbises);
      birdColors.push(goldenConures);
      break;
    case "Venus":
      birdColors.push(goldenConures);
      birdColors.push(seagulls);
      break;
    case "Pole":
      birdColors.push(flamingos);
      birdColors.push(cormorants);
      birdColors.push(macaws);
      break;
    case "Acid":
      birdColors.push(cormorants);
      birdColors.push(goldenConures);
      break;
    case "El Dorado":
      birdColors.push(cormorants);
      birdColors.push(seagulls);
      break;
  }

  palette.bird = rndArr(birdColors, [100, 30, 18, 7]);
}

function setProportions(sizeUrlParam) {
  urlParam = parseInt(sizeUrlParam);

  if (!urlParam || urlParam < 500 || urlParam > 4500) {
    switch (format) {
      case "P":
        if (innerHeight * fRatioV > innerWidth) {
          myWid = innerWidth;
          myHei = innerWidth / fRatioV;
        } else {
          myWid = innerHeight * fRatioV;
          myHei = innerHeight;
        }
        break;
      case "L":
        if (innerWidth * fRatioH > innerHeight) {
          myWid = innerHeight / fRatioH;
          myHei = innerHeight;
        } else {
          myWid = innerWidth;
          myHei = innerWidth * fRatioH;
        }
        break;
      case "S":
        myHei = myWid = innerHeight < innerWidth ? innerHeight : innerWidth;
        break;
      default:
        break;
    }
  } else {
    switch (format) {
      case "P":
        myWid = urlParam * fRatioV;
        myHei = urlParam;
        break;
      case "L":
        myWid = urlParam;
        myHei = urlParam * fRatioH;
        break;
      case "S":
        myHei = myWid = urlParam;
        break;
      default:
        break;
    }
  }

  multX = myWid / 821;
  multY = myHei / 821;
  mult = (myWid + myHei / 2) / 821;

  loadExtMarg = 10 * mult;
  loadContW = myWid - loadExtMarg * 2;
  loadContH = myHei - loadExtMarg * 2;

  loadIntMarg = 1.5 * mult;

  loadItemW = (loadContW - (loadIter + 1) * loadIntMarg) / loadIter;
  loadItemH = (loadContH - (loadIter + 1) * loadIntMarg) / loadIter;
  loadDir = rnd(0, 100) > 50 ? 0 : 1;
}

function setup() {
  pixelDensity(1);
  const urlParams = new URLSearchParams(window.location.search);
  const sizeUrlParam = urlParams.get("size");
  noiseSeed(floor(rnd(1000, 100000)));
  initFeature();
  setProportions(sizeUrlParam);
  tempSections = setSectionsCanvas();
  logFeaturesAndLicense();
  initLoadTips();
  colorMode(HSB);
  cnv = createCanvas(myWid, myHei);

  if (!urlParam || urlParam < 500 || urlParam > 4500) {
    cnv.style("bottom", 0);
    cnv.style("left", 0);
    cnv.style("max-width", "100%");
    cnv.style("max-height", "100%");
    cnv.style("margin", "auto");
    cnv.style("overflow", "auto");
    cnv.style("position", "fixed");
    cnv.style("right", 0);
    cnv.style("top", 0);
    cnv.style("object-fit", "contain");
  }
  cnv.background(createColor(theme == "Light" ? lightTheme : darkTheme, 1));
}

function initSeaPatterns() {
  //SEA PATTERNS
  for (let i = 0; i < 60; i++) {
    let buffer = createGraphics(myWid, myHei);
    buffer.pixelDensity(1);
    buffer.colorMode(HSB);
    buffer.background(createColor(palette.bg, 0.02));

    for (let j = 0; j < nFish; j++) {
      drawFish(buffer);
    }
    seaPatterns.push(initPattern(buffer));
  }

  //SEA HIGH PATTERNS
  for (let i = 0; i < 20; i++) {
    let buffer = createGraphics(myWid, myHei);
    buffer.pixelDensity(1);

    buffer.colorMode(HSB);
    buffer.background(createColor(palette.bg, 0.02));
    seaPatterns.push(initPattern(buffer));
  }
}

function initRockPatterns() {
  //ROCK PATTERNS
  for (let i = 0; i < palette.pillars.length; i++) {
    const cF = createColor(palette.pillars[i].f, 1);
    const cS = createColor(palette.pillars[i].s, 1);
    const cCesp = createColor(palette.grass, 1);

    let cd =
      palette.pillars.length == 2
        ? colorDistr == "Balanced"
          ? 0
          : colorDistr == "Unbalanced"
          ? i * 2
          : i * 4
        : colorDistr == "Balanced"
        ? 0
        : colorDistr == "Unbalanced"
        ? i * 2
        : i * 3;
    for (let j = 0; j < 8 - cd; j++) {
      let grf = createGraphics(100 * mult, 100 * mult);
      grf.pixelDensity(1);
      grf.colorMode(HSB);
      grf.background(cF, 1);
      grf.noStroke();

      const colorGap1 = 0.29;
      const colorGap2 = 0.28;

      for (let x = 0; x < 100; x += 0.3) {
        for (let y = 0; y < 100; y++) {
          let n = noise(x, y, j);

          if (n > 0.5 - colorGap1 / 2 && n < 0.5 + colorGap1 / 2) grf.fill(cF);
          else if (
            n > 0.5 - colorGap2 / 2 - colorGap1 / 2 &&
            n < 0.5 + colorGap2 / 2 + colorGap1 / 2
          )
            grf.fill(cS);
          else grf.fill(cCesp);

          let dim = noise(j, x, y);

          if (rnd(0, 1) > 0.5) grf.ellipse(x * mult, y * mult, dim * 2 * mult);
          else grf.rect(x * mult, y * mult, dim * 2 * mult, dim * 2 * mult);
        }
      }

      rockPatterns.push({ fill: initPattern(grf), stroke: cS });
    }
  }

  let arrCol = [];
  let arrWei = [];
  for (let i = 0; i < loadIter; i++) {
    arrCol.push({ col: i, row: loadDir == 0 ? loadIter - 1 : 0 });
    arrWei.push(10);
  }

  for (let i = 0; i < loadIter * loadIter; i++) {
    let c = rndArr(
      arrCol.filter((data) =>
        loadDir == 0 ? data.row >= 0 : data.row <= loadIter - 1
      ),
      arrWei
    );
    loadOrder.push(c.row * loadIter + c.col);
    loadPatterns.push(floor(rnd(0, rockPatterns.length - 1.000001)));

    if (loadDir == 0) c.row--;
    else c.row++;
  }
}

function drawFish(buffer) {
  buffer.noStroke();
  buffer.fill(createColor(palette.fish, 1));
  let dim = rnd(2, 6);
  dim = dim * mult;
  const x = getCoordFromPerc(rnd(0, 100), myWid);
  const y = getCoordFromPerc(rnd(0, 100), myHei);

  buffer.ellipse(x, y, dim, dim / 3);

  if (fishDir == 0) {
    const xCoda = x + dim / 2.5;
    buffer.triangle(
      xCoda,
      y,
      xCoda + dim / 2,
      y - dim / 5,
      xCoda + dim / 4,
      y + 0.2 * mult
    );

    buffer.triangle(
      xCoda,
      y,
      xCoda + dim / 2,
      y + dim / 5,
      xCoda + dim / 4,
      y - 0.2 * mult
    );
  } else {
    const xCoda = x - dim / 2.5;
    buffer.triangle(
      xCoda,
      y,
      xCoda - dim / 2,
      y - dim / 5,
      xCoda - dim / 4,
      y + 0.2 * mult
    );

    buffer.triangle(
      xCoda,
      y,
      xCoda - dim / 2,
      y + dim / 5,
      xCoda - dim / 4,
      y - 0.2 * mult
    );
  }
}

function setSectionsCanvas() {
  let res = [];
  let pos = 1;
  let arrValuesH = [];
  let arrWeightsH = [];
  for (let i = horCnv; i > 0; i--) {
    arrValuesH.push(i);
    arrWeightsH.push(horCnv * 3 - (i - 1));
  }
  let arrValuesV = [];
  let arrWeightsV = [];
  for (let j = vertCnv; j > 0; j--) {
    arrValuesV.push(j);
    arrWeightsV.push(vertCnv * 3 - (j - 1));
  }

  let skip = [];
  for (let j = 0; j < vertCnv; j++) {
    for (let i = 0; i < horCnv; i++) {
      if (!mustSkip(i, j, skip)) {
        let hSpaces = rndArr(arrValuesH, arrWeightsH);
        let vSpaces = rndArr(arrValuesV, arrWeightsV);
        hSpaces > horCnv - i && (hSpaces = horCnv - i);
        vSpaces > vertCnv - j && (vSpaces = vertCnv - j);

        for (let w = 1; w <= hSpaces - 1; w++) {
          if (mustSkip(i + w, j, skip)) {
            hSpaces = w;
            break;
          }
        }

        for (let w = 1; w <= vSpaces - 1; w++) {
          if (mustSkip(i, j + w, skip)) {
            vSpaces = w;
            break;
          }
        }

        if (hSpaces > 1) {
          for (let k = 1; k < hSpaces; k++) {
            for (let z = 0; z < vSpaces; z++) {
              skip.push({ x: i + k, y: j + z });
            }
          }
        }

        if (vSpaces > 1) {
          for (let k = 1; k < vSpaces; k++) {
            for (let z = 0; z < hSpaces; z++) {
              skip.push({ x: i + z, y: j + k });
            }
          }
        }

        res.push({ pos: pos, x: i, y: j, hSpaces: hSpaces, vSpaces: vSpaces });
        pos++;
      }
    }
  }

  let mrg = margin * (format == "L" ? multX : format == "P" ? multY : mult);
  let cnvWidth = (myWid - mrg) / horCnv;
  let cnvHeight = (myHei - mrg) / vertCnv;

  let incEval = floor(rnd(0, 2.999999999));

  for (let i = 0; i < res.length; i++) {
    res[i].startX = mrg + cnvWidth * res[i].x;
    res[i].startY = mrg + cnvHeight * res[i].y;
    res[i].width = cnvWidth * res[i].hSpaces - mrg;
    res[i].height = cnvHeight * res[i].vSpaces - mrg;
    res[i].widthSpaces = res[i].hSpaces;
    res[i].heightSpaces = res[i].vSpaces;

    res[i].inc =
      incEval == 0
        ? rnd(2.3, res[i].heightSpaces < 4 ? 4 : 3.3)
        : incEval == 1
        ? rnd(1.5, 2)
        : rnd(1, 1.33);

    incEval = incEval == 2 ? 0 : incEval + 1;

    let rndBirds = rnd(0, 100);

    let bNum =
      rndBirds < 35
        ? 0
        : rndBirds < 93
        ? floor(rnd(1, 7))
        : rndBirds < 99.5
        ? floor(rnd(7, 10))
        : floor(rnd(15, 18));
    res[i].birdsNumber = bNum * res[i].hSpaces * res[i].vSpaces;
    res[i].birdsRotation = rnd(-30, 30);

    let clouds = [];
    let cTypes = rnd(0, 100);

    let nClouds =
      cTypes < 25
        ? rnd(10, 50)
        : cTypes < 50
        ? rnd(50, 100)
        : cTypes < 75
        ? rnd(100, 160)
        : cTypes < 98
        ? rnd(160, 200)
        : rnd(250, 320);

    nClouds = nClouds * (res[i].heightSpaces * res[i].widthSpaces);
    for (let j = 0; j < nClouds; j++) {
      let ww = rnd(25, 35);
      clouds.push({
        x: rnd(0, 100),
        y: rnd(0, 100) < 80 ? rnd(0, 60) : rnd(61, 85),
        alpha: rnd(0.05, 0.1),
        w: ww,
        h: ww / 1.5,
        time: floor(rnd(90, 170)),
        colorVar: floor(rnd(-10, 10)),
      });
    }

    res[i].clouds = clouds;
    res[i].rainbow = false;
  }

  if (rainbow > 0) {
    let rnbInd1 = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i].inc > res[rnbInd1].inc) rnbInd1 = i;
    }
    res[rnbInd1].rainbow = true;

    if (rainbow == 2) {
      let rnbInd2 = 0;
      for (let i = 0; i < res.length; i++) {
        if (res[i].clouds.rainbow == false && res[i].inc > res[rnbInd2].inc)
          rnbInd2 = i;
      }
      res[rnbInd2].rainbow = true;
    }
  }

  return res;
}

function mustSkip(x, y, skip) {
  for (let i = 0; i < skip.length; i++) {
    if (skip[i].x == x && skip[i].y == y) {
      return true;
    }
  }
  return false;
}

function setRegularElements(tempSection, half) {
  let elements = [];

  let nPillarsTemp = floor(rnd(10, 45));
  if (half) nPillarsTemp = floor(nPillarsTemp / 2);
  let nShortPillarsTemp = floor(rnd(nPillarsTemp * 1.2, 150));
  if (half) nShortPillarsTemp = floor(nShortPillarsTemp / 2);

  let nPillars =
    nPillarsTemp * tempSection.widthSpaces + (5 * tempSection.heightSpaces - 1);
  let nShortPillars =
    nShortPillarsTemp * tempSection.widthSpaces +
    (10 * tempSection.heightSpaces - 1);

  for (let j = 0; j < nPillars; j++) {
    elements.push({
      type: "Regular",
      x: rnd(0, 100),
      y: rnd(0, 100),
      w: rnd(0, 100) < 90 ? rnd(15, 25) : rnd(35, 55),
      dt: rnd(100, maxTime),
      tr: rnd(-0.2, 0.2),
      vertex: [],
    });
  }

  for (let j = 0; j < nShortPillars; j++) {
    elements.push({
      type: "Regular",
      x: rnd(0, 100),
      y: rnd(0, 100),
      w: tempSection.heightSpaces > 3 ? rnd(9, 15) : rnd(5, 15),
      dt: rnd(10, 100),
      tr: rnd(-0.2, 0.2),
      vertex: [],
    });
  }

  return elements;
}

function setIrregularElements(tempSection, half) {
  let elements = [];

  let nPillarsTemp = floor(rnd(10, 25));
  if (half) nPillarsTemp = floor(nPillarsTemp / 3);
  let nShortPillarsTemp = floor(rnd(nPillarsTemp * 1.3, 150));
  if (half) nShortPillarsTemp = floor(nShortPillarsTemp / 3);

  let nPillars =
    nPillarsTemp * tempSection.widthSpaces + (5 * tempSection.heightSpaces - 1);

  let nShortPillars =
    nShortPillarsTemp * tempSection.widthSpaces +
    (10 * tempSection.heightSpaces - 1);

  for (let j = 0; j < nPillars; j++) {
    let w = rnd(0, 100) < 90 ? rnd(15, 25) : rnd(35, 55);
    let vertex = setIrregularVertex(14, 18, floor(rnd(12, 17)));

    elements.push({
      type: "Irregular",
      x: rnd(0, 100),
      y: rnd(0, 100),
      w: w,
      dt: rnd(100, maxTime),
      tr: rnd(-0.2, 0.2),
      vertex: vertex,
    });
  }

  for (let j = 0; j < nShortPillars; j++) {
    let w = tempSection.heightSpaces > 3 ? rnd(9, 15) : rnd(5, 15);
    let vertex = setIrregularVertex(9, 13, floor(rnd(10, 12)));

    elements.push({
      type: "Irregular",
      x: rnd(0, 100),
      y: rnd(0, 100),
      w: w,
      dt: rnd(10, 120),
      tr: rnd(-0.2, 0.2),
      vertex: vertex,
    });
  }

  return elements;
}

function setIrregularVertex(minSize, maxSize, angNum) {
  let vertex = [];
  let s = (2 * PI) / (angNum + 1);

  for (let i = 0; i < angNum; i++) {
    const m = rnd(minSize, maxSize);
    vertex.push(p5.Vector.fromAngle(rnd(i * s, (i + 1) * s)).mult(m * mult));
  }
  return vertex;
}

function getElements(elements) {
  let res = [];
  for (let i = 0; i < elements.length; i++) {
    res.push(
      new Pillar(
        elements[i].type,
        elements[i].x,
        elements[i].y,
        elements[i].w,
        elements[i].dt,
        elements[i].tr,
        elements[i].vertex
      )
    );
  }
  return res;
}

function draw() {
  if (time == -3) {
    time++;
    rasterize();
    drawLoading(true);
  } else if (time == -2) {
    initRockPatterns();
    time++;
    drawLoading(false);
  } else if (time == -1) {
    initSeaPatterns();
    time++;
    drawLoading(false);
  } else if (time == 0) {
    for (let i = 0; i < tempSections.length; i++) {
      let elements = [];
      if (style == "Regular")
        elements = setRegularElements(tempSections[i], false);
      else if (style == "Irregular")
        elements = setIrregularElements(tempSections[i], false);
      else if (style == "Mixed") {
        elements = setRegularElements(tempSections[i], true);
        let elements2 = setIrregularElements(tempSections[i], true);
        for (let i = 0; i < elements2.length; i++) elements.push(elements2[i]);
      }
      let s = new Section(
        tempSections[i].pos,
        tempSections[i].startX,
        tempSections[i].startY,
        tempSections[i].width,
        tempSections[i].height,
        tempSections[i].widthSpaces,
        tempSections[i].heightSpaces,
        getElements(elements),
        tempSections[i].inc,
        tempSections[i].birdsNumber,
        tempSections[i].birdsRotation,
        tempSections[i].clouds,
        tempSections[i].rainbow
      );
      s.init();
      sections.push(s);
    }
    time++;
    drawLoading(false);
  } else if (time >= 0) {
    if (dbg) {
      cnv.background(createColor(theme == "Light" ? lightTheme : darkTheme, 1));

      image(rasterCnv, 0, 0);
      for (let i = 0; i < sections.length; i++) {
        sections[i].draw(time);
        image(sections[i].cnv, sections[i].x, sections[i].y);
        image(sections[i].cnv2, sections[i].x, sections[i].y);
      }
      time++;
      if (time == maxTime) {
        noLoop();
      }
    } else {
      for (let i = 0; i < sections.length; i++) {
        sections[i].draw(time);
      }
      time++;
      drawLoading(false);
      if (time == maxTime) {
        cnv.background(
          createColor(theme == "Light" ? lightTheme : darkTheme, 1)
        );
        image(rasterCnv, 0, 0);
        for (let i = 0; i < sections.length; i++) {
          image(sections[i].cnv, sections[i].x, sections[i].y);
          image(sections[i].cnv2, sections[i].x, sections[i].y);
        }
        fxpreview();
        noLoop();
      }
    }
  }
}

function drawLoading(first) {
  push();
  let cbg = createColor(theme == "Light" ? lightTheme : darkTheme, 1);
  let cfg = createColor(theme == "Light" ? darkTheme : lightTheme, 1);
  if (first) background(cbg, 1);

  let perc = -1;
  if (time == -2) {
    perc = 0;
  } else if (time == -1) {
    perc = 2.5;
  } else if (time == 0) {
    perc = 5;
  } else if (time <= 80) {
    perc = floor(time / 1.29) + 5;
  } else if (time >= maxTime - 5) {
    perc = 100 - (maxTime - (time + 1));
    perc > 100 && (perc = 100);
  } else {
    perc = ((time - 80) * 29) / (maxTime - 80) + (80 / 1.29 + 5);
  }

  if (first) {
    noStroke();
    fill(createColor(palette.bg, 1));
    rect(loadExtMarg, loadExtMarg, loadContW, loadContH);
  }
  fill(cbg);
  noStroke();
  push();
  for (let i = loadLastIter; i < perc * ((loadIter * loadIter) / 100); i++) {
    let index = loadOrder[i];

    if (rockPatterns.length > 0) {
      const patt = rockPatterns[loadPatterns[index]];
      fillPattern(patt.fill);
    }
    const row = floor(index / loadIter);
    const col = index % loadIter;

    rect(
      loadExtMarg + (col + 1) * loadIntMarg + col * loadItemW,
      loadExtMarg + (row + 1) * loadIntMarg + row * loadItemH,
      loadItemW,
      loadItemH,
      15 * mult
    );
  }
  pop();
  loadLastIter = floor(perc * ((loadIter * loadIter) / 100));

  const wCnvTxt = (myWid / 10) * (format == "L" ? 5 : 6);
  const hCnvTxt = (myHei / 10) * 2;
  cnvTxt = createGraphics(wCnvTxt, hCnvTxt);
  cnvTxt.pixelDensity(1);
  cnvTxt.clear();
  if (time > -1) cnvTxt.image(rasterCnv, 0, 0);

  fill(cbg);
  rect(
    (myWid / 10) * (format == "L" ? 2.5 : 2),
    (myHei / 10) * 4,
    wCnvTxt,
    hCnvTxt
  );
  fill(cfg);

  textFont("Verdana");
  if (time < 1) {
    textSize(25 * mult);
    textAlign(CENTER, CENTER);
    text("Generating artwork", myWid / 2, myHei / 2);
  } else {
    if (time == 1) {
      tipsCounter = floor(rnd(0, tips.length - 0.00001));
    } else if (tipsTriggers.includes(time)) {
      tips.length - 1 == tipsCounter ? (tipsCounter = 0) : tipsCounter++;
    }
    textSize(tips[tipsCounter].size * mult);
    textAlign(CENTER, CENTER);
    if (tips[tipsCounter].text2 == "") {
      text(tips[tipsCounter].text, myWid / 2, myHei / 2);
    } else {
      text(
        tips[tipsCounter].text,
        myWid / 2,
        myHei / 2 - tips[tipsCounter].size * mult
      );
      text(
        tips[tipsCounter].text2,
        myWid / 2,
        myHei / 2 + tips[tipsCounter].size * mult
      );
    }
  }

  image(cnvTxt, (myWid / 10) * (format == "L" ? 2.5 : 2), (myHei / 10) * 4);

  if (first) image(rasterCnv, 0, 0);
  pop();
}

function initLoadTips() {
  tips.push({ text: "Rome wasn't built in a day", text2: "", size: 20 });
  tips.push({
    text: "To await a pleasure,",
    text2: "it's a pleasure itself",
    size: 17,
  });
  tips.push({ text: "while(1==1) wait();", text2: "", size: 22 });
  tips.push({
    text: "The length of a minute depends on",
    text2: "which side of the bathroom door you are on",
    size: 13,
  });
  tips.push({
    text: "A sloth is overtaking you",
    text2: "",
    size: 18,
  });
  tips.push({
    text: "Do you have anything else to do?",
    text2: "",
    size: 17,
  });
  tips.push({
    text: "Haste makes waste",
    text2: "",
    size: 25,
  });
  tips.push({
    text: "All in good time",
    text2: "",
    size: 25,
  });
  tips.push({
    text: " Me waiting... ",
    text2: "☠ ☠ for the perfect artwork ☠ ☠",
    size: 17,
  });
  tips.push({
    text: "Like the desert",
    text2: "waiting for the rain",
    size: 17,
  });
  tips.push({
    text: "Art stands out for learning to slow down",
    text2: "",
    size: 13,
  });
  tips.push({
    text: "♫ Wait and bleed ♪♪",
    text2: "",
    size: 20,
  });
  tips.push({
    text: "Does anyone read these?",
    text2: "",
    size: 20,
  });

  tips.sort(() => (rnd(0, 100) > 50 ? -1 : 1));
}

function rnd(minVal, maxVal) {
  const val = fxrand();

  return val * (maxVal - minVal) + minVal;
}

function rndArr(arrayValues, arrayWeights) {
  let temp = [];
  for (var i = 0; i < arrayValues.length; i++) {
    for (var j = 0; j < arrayWeights[i]; j++) {
      temp.push(arrayValues[i]);
    }
  }
  return temp[floor(rnd(0, temp.length - 0.000001))];
}

function logFeaturesAndLicense() {
  window.$fxhashFeatures = {
    Orientation:
      format == "S" ? "Square" : format == "P" ? "Portrait" : "Landscape",
    Palette: palette.name,
    Canvas: theme,
    Pillars: style,
    "Color distribution": colorDistr,
    Sections: tempSections.length,
  };

  console.log(
    "Artwork licensed under CC BY-NC-SA 4.0 - https://creativecommons.org/licenses/by-nc-sa/4.0/"
  );
  console.log(
    "p5.js (open source software) - https://github.com/processing/p5.js/blob/main/license.txt"
  );
  console.log("");
  console.log("hash: " + fxhash);
  console.log(
    "______________________________________________________________________"
  );
  Object.keys(window.$fxhashFeatures).forEach(function (key, index) {
    console.log(key + ": " + window.$fxhashFeatures[key]);
  });
}

function keyTyped() {
  switch (key) {
    case "s":
    case "S":
      saveCanvas("RisingPerspective_" + fxhash, "png");
      break;
  }
}

function rasterize() {
  rasterCnv = createGraphics(myWid, myHei);
  rasterCnv.pixelDensity(1);
  rasterCnv.colorMode(HSB);
  rasterCnv.clear();

  const r = 0.5;
  const c = 0.5;

  const minAlpha = 0.0275;
  const maxAlpha = 0.1;
  const minSW = 0.1;
  const maxSW = 0.5;

  const rastLineW = (getCoordFromPerc(r, myWid) / 10) * 9;
  const rastLineH = (getCoordFromPerc(c, myHei) / 10) * 9;

  rasterCnv.noFill();
  for (let i = 0; i < 100; i += r) {
    for (let j = 0; j < 100; j += c) {
      const x = getCoordFromPerc(i, myWid);
      const y = getCoordFromPerc(j, myHei);

      let type = floor(map(noise(i, j), 0, 1, 0, 2.99));

      rasterCnv.stroke(theme == "Dark" ? 255 : 0, rnd(minAlpha, maxAlpha));
      rasterCnv.strokeWeight(rnd(minSW, maxSW) * mult);

      switch (type) {
        case 0:
          rasterCnv.line(x, y, x + rastLineW, y + rastLineH);
          break;
        case 1:
          rasterCnv.line(x + rastLineW, y, x, y + rastLineH);
          break;
        case 2:
          rasterCnv.line(x, y, x + rastLineW, y + rastLineH);
          rasterCnv.line(x + rastLineW, y, x, y + rastLineH);
          break;
      }

      if (rnd(0, 100) > 70) {
        rasterCnv.strokeWeight(rnd(minSW / 2, maxSW / 2) * mult);
        rasterCnv.ellipse(x, y, rastLineW * rnd(0.2, 0.5));
      }
    }
  }
}

p5.prototype.initPattern = function (e, r) {
  if (e.canvas) e = e.canvas;
  else if (e.elt) e = e.elt;
  return this.drawingContext.createPattern(e, r || "repeat");
};

p5.prototype.fillPattern = function (p) {
  this.drawingContext.fillStyle = p;
};
p5.prototype.strokePattern = function (p) {
  this.drawingContext.strokeStyle = p;
};

function getCoordFromPerc(perc, axisLength) {
  return (perc * axisLength) / 100;
}
