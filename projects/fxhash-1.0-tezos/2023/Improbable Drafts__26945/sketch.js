let threading = [];
let tieUp = [];
let treadling = [];
let treadlingColour = [];
let treadlingColourI = [];
let treadlingColourN = [];
let treadlingColourFinal = [];
let warpColourScheme = [];
let weftColourScheme = [];
let warpColour = [];
let weftColour = [];

let nRepTh = [];
let nRepTr = [];

let shafts = 4;
let treadles = 4;
let gridSize = [];
let gridThreading = 40;

let repSymbol = [];
let repPlacement = [];
repSymbolColour = "#7f7f7f";
backgroundColour = "#fffffc";

features = {};

colourSchemes = [
  "Solid",
  "Across",
  "Different within",
  "Random within",
  "Section within",
];
error = [
  "Plus one",
  "Changes",
  "Removals",
  "Subsection",
  "Bonus",
  "Reorder",
  "None",
];
repSymbols = ["Circle", "Arrow", "Musical"];
repPlacements = ["Center", "Beginning", "End"];

// Set up features
function makeFeatures() {
  threadingNm = randomOption(Object.keys(threadingOpt));
  threading = randomOption(threadingOpt[threadingNm]);
  threadingError = randomOption(error);
  features.threadingError = threadingError;

  threading = makeError(threadingError, threading);

  Ntreadles = randomOption(["2", "4"]);
  features.nTreadles = Ntreadles;

  tieUpNm = randomOption(Object.keys(tieUpOpt[Ntreadles]));
  tieUp = randomOption(tieUpOpt[Ntreadles][tieUpNm]);

  treadlingNm = randomOption(Object.keys(treadlingOpt[Ntreadles]));
  treadling = randomOption(treadlingOpt[Ntreadles][treadlingNm]);
  treadlingError = randomOption(error);
  features.treadlingError = treadlingError;

  treadling = makeError(treadlingError, treadling);

  features.Threading = threadingNm;
  features.TieUp = tieUpNm;
  features.Treadling = treadlingNm;

  // Colour
  // Select palette
  palette = randomOption(Object.keys(palettes));
  features.Palette = palette;
  palette = palettes[palette];

  // Small chance of monochromatic
  if ($fx.rand() < 0.01) {
    warpColourScheme = "Monochromatic";
    weftColourScheme = "Monochromatic";
    monochromaticColor = randomOption(palette);

    warpColour = monochromaticColor;
    weftColour = monochromaticColor;
  } else {
    warpColourScheme = randomOption(colourSchemes);
    weftColourScheme = randomOption(colourSchemes);

    if ((warpColourScheme == "Solid") & (weftColourScheme == "Solid")) {
      colours = randomOptionTwoDistinct(palette);

      warpColour = colours[0];
      weftColour = colours[1];
    } else {
      if (warpColourScheme == "Solid") {
        warpColour = randomOption(palette);
      } else if (warpColourScheme == "Across") {
        // Just generate too many, too complicated to properly use grid here since windowHeight etc are needed
        nAcross = 100;
        warpColour = [randomOption(palette)];
        for (let i = 1; i < nAcross; i++) {
          warpColourI = warpColour[i - 1];
          while (warpColourI == warpColour[i - 1]) {
            warpColourI = randomOption(palette);
          }
          warpColour.push(warpColourI);
        }
      } else if (warpColourScheme == "Different within") {
        // Limit to two colours, make least common shaft have a different colour
        warpColour = randomOptionTwoDistinct(palette);

        leastCommonTh = leastCommon(threading);
      } else if (warpColourScheme == "Random within") {
        warpColourP = randomOptionTwoDistinct(palette);

        for (let i = 0; i < threading.length; i++) {
          warpColourI = randomOption(warpColourP);
          warpColour.push(warpColourI);
        }
      } else if (warpColourScheme == "Section within") {
        warpColour = randomOptionTwoDistinct(palette);

        // Indices that will get the first colour
        indexSeq = makeSeq(threading);
        warpColourSubsec = errorSubsection(indexSeq);
      }

      if (weftColourScheme == "Solid") {
        weftColour = randomOption(palette);
      } else if (weftColourScheme == "Across") {
        nAcross = 100;
        weftColour = [randomOption(palette)];
        for (let i = 1; i < nAcross; i++) {
          weftColourI = weftColour[i - 1];
          while (weftColourI == weftColour[i - 1]) {
            weftColourI = randomOption(palette);
          }
          weftColour.push(weftColourI);
        }
      } else if (weftColourScheme == "Different within") {
        // Limit to two colours, make least common treadle have a different colour
        weftColour = randomOptionTwoDistinct(palette);

        leastCommonTr = leastCommon(treadling);
      } else if (weftColourScheme == "Random within") {
        weftColourP = randomOptionTwoDistinct(palette);

        for (let i = 0; i < treadling.length; i++) {
          weftColourI = randomOption(weftColourP);
          weftColour.push(weftColourI);
        }
      } else if (weftColourScheme == "Section within") {
        weftColour = randomOptionTwoDistinct(palette);

        // Indices that will get the first colour
        indexSeq = makeSeq(treadling);
        weftColourSubsec = errorSubsection(indexSeq);
      }
    }
  }

  features.weftColourScheme = weftColourScheme;
  features.warpColourScheme = warpColourScheme;

  if ((warpColourScheme != "Across") | (weftColourScheme != "Across")) {
    repSymbol = randomOption(repSymbols);
    repPlacement = randomOption(repPlacements);
  } else {
    repSymbol = "None";
    repPlacement = "None";
  }

  features.repSymbol = repSymbol;
  features.repPlacement = repPlacement;
}

makeFeatures();

$fx.features({
  Palette: features.Palette,
  Threading: features.Threading,
  "Tie up": features.TieUp,
  Treadling: features.Treadling,
  //Treadles: features.nTreadles,
  "Threading error": features.threadingError,
  "Treadling error": features.treadlingError,
  "Warp colour scheme": features.warpColourScheme,
  "Weft colour scheme": features.weftColourScheme,
  //"Repeat symbol": features.repSymbol,
  //"Repeat symbol placement": features.repPlacement,
});

function setup() {
  // Set up sizing
  totalWidth = min(windowHeight, windowWidth);
  totalHeight = totalWidth;
  margin = totalWidth * 0.05;
  drawWidth = totalWidth - margin * 2;
  drawHeight = totalHeight - margin * 2;

  threadingTieUpGap = 2;
  gridTieUp = treadles;
  gridSize = drawWidth / (gridThreading + threadingTieUpGap + gridTieUp);
  tieUpTreadlingGap = 1;
  gridTreadling = Math.floor(
    (drawHeight - (shafts + tieUpTreadlingGap) * gridSize) / gridSize
  );

  nRepTh = ceil(gridThreading / threading.length);
  nRepTr = ceil(gridTreadling / treadling.length);

  createCanvas(totalWidth, totalHeight);
  noLoop();

  // Seed and p5.grain setup
  Math.random = $fx.rand;
  randomSeed($fx.rand() * 999999);
  noiseSeed($fx.rand() * 999999);

  // use fxrand as the internal random function
  p5grain.setup({ random: $fx.rand });
}

function draw() {
  background(backgroundColour);
  // Add grain on background only, so that light colours stand out better
  granulateSimple(15);

  translate(margin, margin);

  push();
  drawThreading();

  translate((gridThreading + threadingTieUpGap) * gridSize, 0);
  drawTieUp();

  translate(0, (shafts + tieUpTreadlingGap) * gridSize);
  drawTreadling();
  pop();
  
  translate(0, (shafts + tieUpTreadlingGap) * gridSize);
  drawDrawDown();

  i = 0;
  while (i != 1) {
   if (($fx.isPreview = true)) {$fx.preview(); i = 1;}
 }
}

function keyPressed() {
  if(key == "s") {
    saveCanvas("improbable_drafts_" + $fx.hash, "png");
  }
}

function drawThreading() {
  // Grid of shafts rows and gridThreading columns, each of gridSize

  // Draw in specific threading, then draw in grid
  noStroke();
  if (warpColourScheme == "Across") {
    push();
    for (let repTh = 0; repTh < nRepTh; repTh++) {
      fill(warpColour[repTh]);
      for (let i = 0; i < threading.length; i++) {
        if (repTh * threading.length + i < gridThreading) {
          square(
            gridThreading * gridSize - (i + 1) * gridSize, // + 1 to start at left corner of square
            (threading[i] - 1) * gridSize, // -1 to start at top
            gridSize
          );
        }
      }
      translate(-gridSize * threading.length, 0);
    }
    pop();
  } else {
    if ((warpColourScheme == "Solid") | (warpColourScheme == "Monochromatic")) {
      fill(warpColour);
    }
    for (let i = 0; i < threading.length; i++) {
      if (warpColourScheme == "Different within") {
        if (threading[i] == leastCommonTh) {
          fill(warpColour[0]);
        } else {
          fill(warpColour[1]);
        }
      } else if (warpColourScheme == "Random within") {
        fill(warpColour[i]);
      } else if (warpColourScheme == "Section within") {
        if (warpColourSubsec.includes(i)) {
          fill(warpColour[0]);
        } else {
          fill(warpColour[1]);
        }
      }
      square(
        gridThreading * gridSize - (i + 1) * gridSize, // + 1 to start at left corner of square
        (threading[i] - 1) * gridSize, // -1 to start at top
        gridSize
      );
    }
  }

  // Outlines
  stroke("black");
  noFill();
  rect(0, 0, gridThreading * gridSize, shafts * gridSize);
  for (let i = 1; i < shafts; i++) {
    line(0, gridSize * i, gridThreading * gridSize, gridSize * i);
  }
  for (let i = 1; i < gridThreading; i++) {
    line(gridSize * i, 0, gridSize * i, shafts * gridSize);
  }

  // Draw repeat lines and symbol if warp repeats (i.e. every one except across)
  if (warpColourScheme != "Across") {
    threadingEnd = gridThreading * gridSize;
    threadingStart = threadingEnd - threading.length * gridSize;
    stroke(repSymbolColour);
    line(threadingStart, -gridSize / 2, threadingEnd, -gridSize / 2);
    line(threadingStart, -gridSize / 4, threadingStart, -gridSize / 2);
    line(threadingEnd, -gridSize / 2, threadingEnd, -gridSize / 4);
    push();
    if (repPlacement == "Center") {
      repCenter = (threadingStart + threadingEnd) / 2;
    } else if (repPlacement == "Beginning") {
      repCenter = threadingEnd - gridSize / 2;
    } else if (repPlacement == "End") {
      repCenter = threadingStart + gridSize / 2;
    }
    if (repSymbol == "Circle") {
      translate(0, gridSize * 0.5);
      circle(repCenter, -gridSize * 2, gridSize);
      noStroke();
      fill(backgroundColour);
      circle(repCenter + gridSize / 2, -gridSize * 1.75, gridSize * 0.75);
      fill(repSymbolColour);
      triangle(
        repCenter + gridSize / 2,
        -gridSize * 1.75,
        repCenter + gridSize / 4,
        -gridSize * 2.15,
        repCenter + gridSize - gridSize / 3.5,
        -gridSize * 2.15
      );
    } else if (repSymbol == "Musical") {
      fill(repSymbolColour);
      circle(repCenter - gridSize / 4, -gridSize * 0.875, gridSize / 4);
      circle(repCenter + gridSize / 4, -gridSize * 0.875, gridSize / 4);
    } else if (repSymbol == "Arrow") {
      line(
        repCenter - gridSize / 2,
        -gridSize * 0.875,
        repCenter + gridSize / 2,
        -gridSize * 0.875
      );
      fill(repSymbolColour);
      triangle(
        repCenter - gridSize / 2,
        -gridSize * 0.875,
        repCenter - gridSize / 4,
        -gridSize * 0.75,
        repCenter - gridSize / 4,
        -gridSize * 1
      );
    }
    pop();
  }
}

function drawTieUp() {
  // Grid of shafts rows and treadles columns, each of gridSize

  // Draw specific tie up, then draw full grid
  noStroke();
  fill("#424242");
  for (let i = 0; i < tieUp.length; i++) {
    tieUpi = tieUp[i];
    for (let j = 0; j < tieUpi.length; j++) {
      square(i * gridSize, (tieUpi[j] - 1) * gridSize, gridSize);
    }
  }

  stroke("black");
  noFill();
  rect(0, 0, shafts * gridSize, treadles * gridSize);
  for (let i = 1; i < shafts; i++) {
    line(gridSize * i, 0, gridSize * i, shafts * gridSize);
  }
  for (let i = 1; i < treadles; i++) {
    line(0, gridSize * i, gridSize * treadles, gridSize * i);
  }
}

drawTreadling = function () {
  // Draw treadling, then draw full grid
  noStroke();
  if (weftColourScheme == "Across") {
    push();
    for (let repTr = 0; repTr < nRepTr; repTr++) {
      fill(weftColour[repTr]);
      for (let i = 0; i < treadling.length; i++) {
        if (repTr * treadling.length + i < gridTreadling) {
          square((treadling[i] - 1) * gridSize, gridSize * i, gridSize);
        }
      }
      translate(0, gridSize * treadling.length);
    }
    pop();
  } else {
    if ((weftColourScheme == "Solid") | (weftColourScheme == "Monochromatic")) {
      fill(weftColour);
    }
    for (let i = 0; i < treadling.length; i++) {
      if (weftColourScheme == "Different within") {
        if (treadling[i] == leastCommonTr) {
          fill(weftColour[0]);
        } else {
          fill(weftColour[1]);
        }
      } else if (weftColourScheme == "Random within") {
        fill(weftColour[i]);
      } else if (weftColourScheme == "Section within") {
        if (weftColourSubsec.includes(i)) {
          fill(weftColour[0]);
        } else {
          fill(weftColour[1]);
        }
      }
      square((treadling[i] - 1) * gridSize, gridSize * i, gridSize);
    }
  }

  // Outlines
  stroke("black");
  noFill();
  rect(0, 0, shafts * gridSize, gridTreadling * gridSize);
  for (let i = 1; i < shafts; i++) {
    line(gridSize * i, 0, gridSize * i, gridTreadling * gridSize);
  }
  for (let i = 1; i <= gridTreadling; i++) {
    line(0, gridSize * i, gridSize * shafts, gridSize * i);
  }

  // Draw repeat lines and symbol if weft repeats (i.e. every one except across)
  if (weftColourScheme != "Across") {
    treadlingEnd = treadling.length * gridSize;
    treadlingStart = 0;
    xOffsetLong = shafts * gridSize + gridSize / 2;
    xOffsetShort = xOffsetLong - gridSize / 4;
    stroke(repSymbolColour);
    line(xOffsetLong, treadlingStart, xOffsetLong, treadlingEnd);
    line(xOffsetShort, treadlingStart, xOffsetLong, treadlingStart);
    line(xOffsetShort, treadlingEnd, xOffsetLong, treadlingEnd);
    push();
    if (repPlacement == "Center") {
      repCenter = (treadlingStart + treadlingEnd) / 2;
    } else if (repPlacement == "Beginning") {
      repCenter = treadlingStart + gridSize / 2;
    } else if (repPlacement == "End") {
      repCenter = treadlingEnd - gridSize / 2;
    }
    if (repSymbol == "Circle") {
      circle(xOffsetLong + gridSize, repCenter, gridSize);
      noStroke();
      fill(backgroundColour);
      circle(
        xOffsetLong + gridSize * 1.5,
        repCenter + gridSize * 0.25,
        gridSize * 0.75
      );
      fill(repSymbolColour);
      triangle(
        xOffsetLong + gridSize * 1.5,
        repCenter + gridSize / 4,
        xOffsetLong + gridSize * 1.25,
        repCenter - gridSize / 8,
        xOffsetLong + gridSize * 1.75,
        repCenter - gridSize / 8
      );
    } else if (repSymbol == "Musical") {
      fill(repSymbolColour);
      circle(
        xOffsetLong + gridSize / 3,
        repCenter - gridSize / 4,
        gridSize / 4
      );
      circle(
        xOffsetLong + gridSize / 3,
        repCenter + gridSize / 4,
        gridSize / 4
      );
    } else if (repSymbol == "Arrow") {
      fill(repSymbolColour);
      line(
        xOffsetLong + gridSize / 3,
        repCenter + gridSize / 2,
        xOffsetLong + gridSize / 3,
        repCenter - gridSize / 2
      );
      triangle(
        xOffsetLong + gridSize / 3,
        repCenter + gridSize / 2,
        xOffsetLong + gridSize / 5,
        repCenter + gridSize / 4,
        xOffsetLong + gridSize / 3.5 + gridSize / 5,
        repCenter + gridSize / 4
      );
    }
    pop();
  }
};

drawDrawDown = function () {
  // For each row of the treadling, figure out which treadle is used, and then which shafts are lifted

  // Warp - outline vertically
  push();
  noStroke();
  if ((warpColourScheme == "Solid") | (warpColourScheme == "Monochromatic")) {
    fill(warpColour);
  }
  translate(gridSize * gridThreading - gridSize, 0);
  for (let repTh = 0; repTh < nRepTh; repTh++) {
    if (warpColourScheme == "Across") {
      fill(warpColour[repTh]);
    }
    for (let th = 0; th < threading.length; th++) {
      if (repTh * threading.length + th < gridThreading) {
        if (warpColourScheme == "Different within") {
          if (threading[th] == leastCommonTh) {
            fill(warpColour[0]);
          } else {
            fill(warpColour[1]);
          }
        } else if (warpColourScheme == "Random within") {
          fill(warpColour[th]);
        } else if (warpColourScheme == "Section within") {
          if (warpColourSubsec.includes(th)) {
            fill(warpColour[0]);
          } else {
            fill(warpColour[1]);
          }
        }
        //noStroke();
        stroke("black");
        rect(0, 0, gridSize, gridSize * gridTreadling);
        translate(-gridSize, 0);
      }
    }
  }
  pop();

  // Weft
  // Repeat threading and treading, up to size of grid

  //stroke(weftColour);
  noStroke();
  if ((weftColourScheme == "Solid") | (weftColourScheme == "Monochromatic")) {
    fill(weftColour);
  }
  nTh = 0;
  nTr = 0;
  for (let repTh = 0; repTh < nRepTh; repTh++) {
    for (let repTr = 0; repTr < nRepTr; repTr++) {
      if (weftColourScheme == "Across") {
        fill(weftColour[repTr]);
      }
      for (let tr = 0; tr < treadling.length; tr++) {
        treadlingTr = treadling[tr];
        tieUpTr = tieUp[treadlingTr - 1];
        for (let th = 0; th < threading.length; th++) {
          if (
            tieUpTr.includes(threading[th]) &
            (repTh * threading.length + th < gridThreading) &
            (repTr * treadling.length + tr < gridTreadling)
          ) {
            if (weftColourScheme == "Different within") {
              if (treadlingTr == leastCommonTr) {
                fill(weftColour[0]);
              } else {
                fill(weftColour[1]);
              }
            } else if (weftColourScheme == "Random within") {
              fill(weftColour[tr]);
            } else if (weftColourScheme == "Section within") {
              if (weftColourSubsec.includes(tr)) {
                fill(weftColour[0]);
              } else {
                fill(weftColour[1]);
              }
            }
            squareX =
              gridThreading * gridSize -
              (th + 1) * gridSize -
              repTh * threading.length * gridSize; // + 1 to start at left corner of square
            squareY = tr * gridSize + repTr * treadling.length * gridSize; // -1 to start at top
            //noStroke();
            square(squareX, squareY, gridSize);
            stroke("black");
            // Top and bottom lines to show weft
            if (!(repTr === 0 && tr === 0)) {
              line(squareX, squareY, squareX + gridSize, squareY);
            }
            if (!(repTr === nRepTr && tr === treadling.length - 1)) {
              line(
                squareX,
                squareY + gridSize,
                squareX + gridSize,
                squareY + gridSize
              );
            }
            //stroke(weftColour);
            noStroke();
          }
        }
      }
    }
  }

  // Outline
  stroke("black");
  noFill();
  rect(0, 0, gridSize * gridThreading, gridSize * gridTreadling);
};

function randInt(max) {
  return Math.floor($fx.rand() * max + 1);
}

function leastCommon(x) {
  x = [
    ...x.reduce(
      (
        r,
        n // count
      ) => r.set(n, (r.get(n) || 0) + 1),
      new Map()
    ),
  ].reduce((r, v) => (v[1] < r[1] ? v : r))[0]; // get the the item that appears least

  return x;
}

function randomOption(options) {
  if (options.length == 1) {
    return options[0];
  }
  option = randInt(options.length) - 1;
  return options[option];
}

function randomOptionTwoDistinct(options) {
  x1 = randomOption(options);
  x2 = x1;

  // Ensure not same
  while (x1 === x2) {
    x2 = randomOption(options);
  }

  x = [x1, x2];

  return x;
}

function makeSeq(x) {
  x = Array(x.length)
    .fill(1)
    .map((_, i) => i + 1);

  return x;
}

function makeError(randError, x) {
  if (randError == "Plus one") {
    x = errorPlusOne(x);
  } else if (randError == "Changes") {
    x = errorChange(x);
  } else if (randError == "Removals") {
    x = errorRemove(x);
  } else if (randError == "Subsection") {
    x = errorSubsection(x);
  } else if (randError == "Bonus") {
    x = errorBonus(x);
  } else if (randError == "Reorder") {
    x = errorReorder(x);
  }

  return x;
}

function errorPlusOne(x) {
  max_x = Math.max(...x);
  x_new = [];
  for (let i = 0; i < x.length; i++) {
    i_new = x[i] + 1;
    if (i_new > max_x) {
      x_new.push(1);
    } else {
      x_new.push(i_new);
    }
  }
  return x_new;
}

function errorChange(x) {
  max_x = Math.max(...x);
  x_new = [];
  for (let i = 0; i < x.length; i++) {
    // Change about 10% - some could end up the same as they already were, that's fine
    if ($fx.rand() < 0.1) {
      i_new = randomOption(
        Array(max_x)
          .fill(1)
          .map((_, i) => i + 1)
      );
      x_new.push(i_new);
    } else {
      x_new.push(x[i]);
    }
  }
  return x_new;
}

function errorRemove(x) {
  x_new = [];
  for (let i = 0; i < x.length; i++) {
    // Remove about 10%
    if ($fx.rand() > 0.1) {
      x_new.push(x[i]);
    }
  }
  return x_new;
}

function errorSubsection(x) {
  // Take a subsection, of any size
  x_seq = makeSeq(x);

  seq_start = randomOption(x_seq);
  seq_end = seq_start;

  while (seq_end == seq_start) {
    seq_end = randomOption(x_seq);
  }

  if (seq_end > seq_start) {
    x_new = x.slice(seq_start - 1, seq_end); // -1 to account for 0 indexing, not on seq_end because slice does not include end
  } else if (seq_end < seq_start) {
    x_end_seq = x.slice(seq_start - 1, x.length);
    x_beg_seq = x.slice(0, seq_end + 1);
    x_new = x_end_seq.concat(x_beg_seq);
  }

  return x_new;
}

function errorBonus(x) {
  // Take a subsection of the sequence and add it to to either the end or the beginning
  subsection = errorSubsection(x);
  if ($fx.rand() > 0.5) {
    x_new = x.concat(subsection);
  } else {
    x_new = subsection.concat(x);
  }

  if (x_new.length > gridThreading) {
    x_new = x_new.slice(0, gridThreading);
  }

  return x_new;
}

function errorReorder(x) {
  // From a certain point, take the end of the sequence and add it to the beginning
  x_seq = Array(x.length)
    .fill(1)
    .map((_, i) => i + 1);

  seq_start = randomOption(x_seq);

  x_end_seq = x.slice(seq_start - 1, x.length + 1);
  x_beg_seq = x.slice(0, seq_start - 1);

  x_new = x_end_seq.concat(x_beg_seq);

  return x_new;
}
