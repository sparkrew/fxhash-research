let squares = []; // Array per salvare i quadrati
let padding = 100; // Padding di 100 pixel su tutti i lati
let scaleFactor = 1; // Fattore di scala del 98% (2% di spazio attorno a ogni quadrato)
let movingSquares = []; // Array per i quadrati in movimento
let moveStep = 0; // Tiene traccia dei passi di movimento effettuati
let maxSteps = 60; // Numero totale di passi verso la posizione finale
let moveSpeed = 0.5; // Velocità di movimento (più piccolo è il numero, più lento è il movimento)
let lineCoords1, lineCoords2; // Coordinate della prima e, eventualmente, seconda linea
let drawSecondLine; // Determina se disegnare una seconda linea
let applyScaledWork; // Determina se eseguire la versione scalata
let randomSeedForLogo;
let customColor;

function setup() {
  createCanvas(1200, 1200).parent("canvas-container");
  background(255);
  randomSeed(seedToNumber($fx.hash));

  // Imposta il padding come un valore casuale tra 100 e 200
  padding = floor(random(100, 200));

  // Genera un colore base casuale scuro
  customColor = color(random(0, 200), random(0, 200), random(0, 200));

  let randomSquareSize = floor(random(150, 300));
  let availableWidth = width - 2 * padding;
  let availableHeight = height - 2 * padding;

  let cols = floor(availableWidth / randomSquareSize);
  let rows = floor(availableHeight / randomSquareSize);

  let baseSquareSize = min(availableWidth / cols, availableHeight / rows);
  let squareSize = baseSquareSize * scaleFactor;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = padding + j * baseSquareSize + (baseSquareSize - squareSize) / 2;
      let y = padding + i * baseSquareSize + (baseSquareSize - squareSize) / 2;

      // Determina se applicare una deviazione con probabilità del 20%
      let squareColor;
      if (random() < 0.2) {
        squareColor = color(
          constrain(red(customColor) + random(-3, 3), 0, 255),
          constrain(green(customColor) + random(-3, 3), 0, 255),
          constrain(blue(customColor) + random(-3, 3), 0, 255)
        );
      } else {
        squareColor = customColor;
      }

      // Applica una distorsione casuale al 20% dei quadrati
      let distortedWidth = squareSize;
      let distortedHeight = squareSize;
      if (random() < 0.5) {
        // 20% di probabilità di distorsione
        let distortion = random(-30, 10) / 100; // Valore di distorsione tra -15% e 0%
        let isHorizontal = random() < 0.5; // Decide se la distorsione è orizzontale o verticale
        if (isHorizontal) {
          distortedWidth = squareSize * (1 + distortion);
        } else {
          distortedHeight = squareSize * (1 + distortion);
        }
      }

      squares.push({
        x: x,
        y: y,
        width: squareSize, // Larghezza distorta
        height: squareSize, // Altezza distorta
        widthD: distortedWidth,
        heightD: distortedHeight,
        originalX: x,
        originalY: y,
        targetX: x,
        targetY: y,
        color: squareColor, // Colore personalizzato del quadrato
      });
    }
  }

  // Genera coordinate casuali per la prima linea curva
  lineCoords1 = {
    x1: random(padding, width / 2),
    y1: random(padding, height / 2),
    x2: random(width / 2, width - padding),
    y2: random(height / 2, height - padding),
    ctrlX1: random(width / 4, width / 2),
    ctrlY1: random(height / 4, height / 2),
    ctrlX2: random(width / 2, (3 * width) / 4),
    ctrlY2: random(height / 2, (3 * height) / 4),
  };

  // Decidi casualmente se disegnare una seconda linea
  drawSecondLine = random() > 0.5; // 50% di probabilità di disegnare una seconda linea

  if (drawSecondLine) {
    lineCoords2 = {
      x1: random(padding, width / 2),
      y1: random(padding, height / 2),
      x2: random(width / 2, width - padding),
      y2: random(height / 2, height - padding),
      ctrlX1: random(width / 4, width / 2),
      ctrlY1: random(height / 4, height / 2),
      ctrlX2: random(width / 2, (3 * width) / 4),
      ctrlY2: random(height / 2, (3 * height) / 4),
    };
  }

  applyScaledWork = random() < 0.8;

  squares.forEach((square) => {
    if (
      lineIntersectsSquare(
        lineCoords1.x1,
        lineCoords1.y1,
        lineCoords1.x2,
        lineCoords1.y2,
        square
      ) ||
      (drawSecondLine &&
        lineIntersectsSquare(
          lineCoords2.x1,
          lineCoords2.y1,
          lineCoords2.x2,
          lineCoords2.y2,
          square
        ))
    ) {
      movingSquares.push(square);

      let dx = lineCoords1.x2 - lineCoords1.x1;
      let dy = lineCoords1.y2 - lineCoords1.y1;

      let length = sqrt(dx * dx + dy * dy);

      let directionX = (dx / length) * random(-10, 10);
      let directionY = (dy / length) * random(-10, 10);

      square.targetX = square.x + directionX;
      square.targetY = square.y + directionY;
    }
  });
  randomSeedForLogo = random(100, 1000000);
}

function draw() {
  background(255);

  drawSignature();
  // Disegna tutti i quadrati alle loro posizioni attuali
  noStroke();
  squares.forEach((square) => {
    if (applyScaledWork) {
      drawScaledWorkInSquare(square);
    } else {
      fill(square.color); // Usa il colore personalizzato del quadrato
      // rect(square.x, square.y, map(moveStep,0,maxSteps,square.width,square.widthD), map(moveStep,0,maxSteps,square.height,square.heightD));
      rect(
        square.x,
        square.y,
        lerp(square.width, square.widthD, moveStep / maxSteps),
        lerp(square.height, square.heightD, moveStep / maxSteps)
      );
    }
  });

  // Disegna la prima linea curva
  stroke(0);
  strokeWeight(0);
  noFill();

  // Disegna la seconda linea curva se abilitata
  if (drawSecondLine) {
  }

  movingSquares.forEach((square) => {
    square.x = lerp(square.originalX, square.targetX, moveStep / maxSteps);
    square.y = lerp(square.originalY, square.targetY, moveStep / maxSteps);
  });

  if (millis() > 150) {
    if (moveStep < maxSteps) {
      moveStep += moveSpeed;
    } else {
      console.log("done here");
      $fx.preview();
      drawSignature();
      noLoop();
    }
  }
  // Disegna la firma
  drawSignature();
}

function drawSignature() {
  let textStr = "rvvr";
  let baseX = width - 180;
  let baseY = height - 40;
  push();

  randomSeed(randomSeedForLogo);
  let xOffset = random(-20, 20);
  let yOffset = random(-20, 20);
  let angle = random(-3, 3);

  translate(baseX + xOffset, baseY + yOffset);
  rotate(radians(angle));
  textAlign(LEFT, BOTTOM);
  textSize(14);
  noStroke();
  fill(0);

  let currentX = 0;
  for (let i = 0; i < textStr.length; i++) {
    let charWidth = textWidth(textStr[i]);
    text(textStr[i], currentX, 0);
    currentX += charWidth + random(5, 15);
  }
  pop();
}

function drawScaledWorkInSquare(square) {
  push();
  translate(square.x, square.y);
  let localScaleFactor = square.width / (width - 2 * padding);
  scale(localScaleFactor);

  noStroke();
  squares.forEach((s) => {
    fill(s.color); // Usa il colore personalizzato del quadrato
    rect(
      s.x - padding,
      s.y - padding,
      lerp(s.width, s.widthD, moveStep / maxSteps),
      lerp(s.height, s.heightD, moveStep / maxSteps)
    );
  });

  stroke(255, 0, 0);
  strokeWeight(0);
  noFill();
  if (drawSecondLine) {
  }
  pop();
}

function lineIntersectsSquare(x1, y1, x2, y2, square) {
  let sx = square.x;
  let sy = square.y;
  let ex = square.x + square.width;
  let ey = square.y + square.height;

  return (
    lineIntersect(x1, y1, x2, y2, sx, sy, sx, ey) ||
    lineIntersect(x1, y1, x2, y2, sx, ey, ex, ey) ||
    lineIntersect(x1, y1, x2, y2, ex, ey, ex, sy) ||
    lineIntersect(x1, y1, x2, y2, ex, sy, sx, sy)
  );
}

function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (den === 0) return false;
  let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

function seedToNumber(ssr) {
  let num = 0;
  for (let i = 0; i < ssr.length; i++) {
    num += ssr.charCodeAt(i);
  }
  return int(num);
}
