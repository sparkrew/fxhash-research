let colorPalettes;
let colorProfileNames;
const maxTransparency = 248; // Transparantie tussen 0 en 100% (0-255 op een schaal van 255)
let colorVariation; // Variatie in kleurwaarde plus of min
const moveLargestToBackProbability = 1; // Stel hier het percentage in (0.9 betekent 90%)
const exponentFactor = 0.15; // Pas deze waarde aan voor de exponentiële verdeling
let enableCopies = true; // Voeg deze regel toe
let isAlmostBlack; // Verplaats deze variabele naar een bredere scope
let testSeed = 772003;

function setup() {
  createCanvas(800, 800).parent("canvas-container");
  pixelDensity(1);
  random_seed = $fx.rand() * 1000000;
  noise_seed = $fx.rand() * 1000000;
  //make it into a function so that I can call it again
  drawArt();
}
function keyPressed() {
  if (key == "h" || key == "H") {
    clear();
    pixelDensity(5); //increase this for better quality
    drawArt();
    save();
    clear();
    pixelDensity(1);
    drawArt();
  }
}
function drawArt() {
  randomSeed(random_seed);
  noiseSeed(noise_seed);
  textSize(14);

  // Bepaal of de achtergrond bijna zwart moet zijn
  isAlmostBlack = random(1) < 0.2; // 20% kans

  if (isAlmostBlack) {
    // Genereer willekeurige waarden tussen 10 en 50 voor R, G, B
    let r = random(10, 50);
    let g = random(10, 50);
    let b = random(10, 50);
    background(r, g, b); // Stel de achtergrondkleur in op de willekeurige waarde
  } else {
    // Stel een willekeurige achtergrondkleur en transparantie in
    let bgR = random(240, 250); // Hoge waarde voor rood
    let bgG = random(240, 250); // Hoge waarde voor groen
    let bgB = random(240, 250); // Hoge waarde voor blauw
    let bgAlpha = random(255, 255); // Transparantie tussen 40% en 80%
    background(bgR, bgG, bgB, bgAlpha);
  }

  // Bereken colorVariation met een exponentiële verdeling
  colorVariation = calculateColorVariation(10, 40, exponentFactor);
  // console.log(colorVariation);

  // Array met 21 kleurcombinaties en hun namen
  colorPalettes = [
    [
      color(0, 142, 154),
      color(203, 3, 118),
      color(170, 45, 72),
      color(101, 87, 218),
    ],
    [
      color(25, 68, 29),
      color(218, 191, 235),
      color(150, 147, 8),
      color(228, 220, 142),
    ],
    [
      color(32, 6, 245),
      color(193, 29, 147),
      color(151, 3, 74),
      color(254, 91, 16),
    ],
    [
      color(51, 130, 199),
      color(239, 159, 7),
      color(206, 147, 197),
      color(154, 234, 4),
    ],
    [
      color(64, 83, 188),
      color(64, 58, 111),
      color(56, 12, 195),
      color(220, 178, 175),
    ],
    [
      color(66, 82, 44),
      color(142, 17, 0),
      color(154, 134, 61),
      color(194, 219, 172),
    ],
    [
      color(76, 31, 91),
      color(62, 28, 100),
      color(231, 234, 199),
      color(247, 223, 162),
    ],
    [
      color(78, 129, 47),
      color(120, 147, 110),
      color(156, 95, 245),
      color(13, 47, 14),
    ],
    [
      color(78, 151, 41),
      color(138, 108, 22),
      color(134, 33, 150),
      color(181, 11, 149),
    ],
    [
      color(89, 245, 186),
      color(17, 198, 137),
      color(67, 4, 85),
      color(98, 63, 87),
    ],
    [
      color(106, 181, 161),
      color(101, 31, 178),
      color(115, 38, 179),
      color(240, 188, 188),
    ],
    [
      color(108, 94, 13),
      color(5, 17, 30),
      color(63, 4, 24),
      color(220, 112, 241),
    ],
    [
      color(110, 186, 11),
      color(73, 225, 61),
      color(130, 236, 90),
      color(142, 147, 84),
    ],
    [
      color(113, 13, 138),
      color(246, 83, 24),
      color(85, 37, 77),
      color(252, 88, 155),
    ],
    [
      color(115, 154, 44),
      color(183, 35, 199),
      color(197, 32, 142),
      color(207, 15, 124),
    ],
    [
      color(116, 163, 146),
      color(231, 56, 130),
      color(91, 76, 20),
      color(178, 158, 109),
    ],
    [
      color(119, 174, 157),
      color(120, 138, 173),
      color(61, 76, 239),
      color(9, 164, 4),
    ],
    [
      color(121, 9, 185),
      color(150, 34, 20),
      color(164, 39, 58),
      color(197, 43, 132),
    ],
    [
      color(131, 54, 213),
      color(27, 10, 51),
      color(38, 27, 62),
      color(217, 46, 246),
    ],
    [
      color(137, 43, 23),
      color(249, 123, 6),
      color(238, 21, 168),
      color(249, 231, 143),
    ],
    [
      color(143, 76, 215),
      color(127, 9, 189),
      color(79, 80, 5),
      color(78, 70, 35),
    ],
    [
      color(147, 5, 189),
      color(205, 34, 50),
      color(92, 3, 123),
      color(226, 202, 244),
    ],
    [
      color(151, 208, 86),
      color(36, 204, 94),
      color(240, 2, 207),
      color(129, 145, 190),
    ],
    [
      color(155, 140, 162),
      color(236, 122, 226),
      color(160, 214, 54),
      color(251, 245, 93),
    ],
    [
      color(163, 48, 143),
      color(113, 54, 92),
      color(34, 57, 73),
      color(3, 118, 115),
    ],
    [
      color(164, 122, 43),
      color(216, 152, 8),
      color(172, 185, 221),
      color(162, 62, 222),
    ],
    [
      color(169, 230, 172),
      color(120, 120, 58),
      color(111, 12, 128),
      color(62, 185, 166),
    ],
    [
      color(193, 79, 171),
      color(224, 4, 112),
      color(231, 108, 187),
      color(241, 29, 56),
    ],
    [
      color(205, 213, 156),
      color(141, 177, 133),
      color(170, 87, 17),
      color(37, 41, 73),
    ],
    [
      color(206, 222, 183),
      color(62, 220, 24),
      color(77, 222, 82),
      color(132, 233, 120),
    ],
    [
      color(215, 214, 147),
      color(130, 127, 116),
      color(41, 168, 112),
      color(93, 135, 144),
    ],
    [
      color(218, 54, 26),
      color(109, 64, 27),
      color(165, 56, 81),
      color(160, 94, 209),
    ],
    [
      color(220, 193, 87),
      color(231, 130, 153),
      color(152, 142, 167),
      color(148, 110, 121),
    ],
    [
      color(225, 231, 144),
      color(241, 243, 76),
      color(46, 194, 51),
      color(52, 252, 20),
    ],
    [
      color(226, 32, 237),
      color(67, 122, 252),
      color(62, 181, 78),
      color(220, 243, 17),
    ],
    [
      color(228, 198, 152),
      color(115, 207, 145),
      color(57, 47, 49),
      color(187, 119, 197),
    ],
    [
      color(232, 198, 78),
      color(60, 194, 109),
      color(25, 2, 22),
      color(143, 40, 132),
    ],
    [
      color(234, 200, 53),
      color(204, 182, 183),
      color(241, 5, 97),
      color(93, 99, 20),
    ],
    [
      color(244, 130, 213),
      color(123, 174, 122),
      color(50, 21, 74),
      color(52, 87, 33),
    ],
    [
      color(245, 104, 242),
      color(47, 96, 43),
      color(27, 22, 5),
      color(245, 204, 52),
    ],
    [
      color(70, 130, 180),
      color(34, 139, 34),
      color(255, 182, 193),
      color(128, 0, 128),
    ],
    [
      color(255, 0, 0),
      color(255, 255, 0),
      color(0, 0, 255),
      color(0, 0, 0),
      color(255, 255, 255),
    ],
    [
      color(25, 25, 112),
      color(173, 216, 230),
      color(255, 255, 0),
      color(255, 255, 255),
    ],
    [
      color(255, 0, 0),
      color(0, 0, 255),
      color(255, 255, 0),
      color(0, 0, 0),
      color(128, 128, 128),
    ],
    [color(255, 215, 0), color(0, 0, 0), color(0, 0, 128), color(139, 0, 0)],
    [color(0, 128, 0), color(255, 255, 0), color(0, 0, 255), color(255, 0, 0)],
    [
      color(0, 128, 128),
      color(255, 204, 0),
      color(85, 107, 47),
      color(255, 165, 0),
    ],
    [
      color(152, 251, 152),
      color(112, 128, 144),
      color(255, 182, 193),
      color(135, 206, 235),
    ],
    [
      color(255, 20, 147),
      color(255, 255, 0),
      color(0, 255, 255),
      color(0, 0, 0),
    ],
    [
      color(0, 255, 255),
      color(128, 0, 128),
      color(255, 20, 147),
      color(0, 0, 0),
    ],
    [
      color(255, 99, 71),
      color(75, 0, 130),
      color(240, 230, 140),
      color(0, 100, 0),
    ],
    [
      color(139, 69, 19),
      color(255, 228, 225),
      color(72, 61, 139),
      color(0, 0, 128),
    ],
    [
      color(0, 255, 127),
      color(255, 20, 147),
      color(255, 105, 180),
      color(50, 205, 50),
    ],
    [
      color(255, 165, 0),
      color(34, 139, 34),
      color(0, 0, 139),
      color(255, 69, 0),
    ],
    [
      color(85, 107, 47),
      color(255, 69, 0),
      color(70, 130, 180),
      color(238, 130, 238),
    ],
    [
      color(255, 105, 180),
      color(255, 255, 240),
      color(0, 206, 209),
      color(32, 178, 170),
    ],
    [
      color(255, 127, 80),
      color(154, 205, 50),
      color(255, 255, 0),
      color(106, 90, 205),
    ],
    [
      color(255, 140, 0),
      color(100, 149, 237),
      color(64, 224, 208),
      color(219, 112, 147),
    ],
    [
      color(255, 215, 0),
      color(244, 164, 96),
      color(64, 224, 208),
      color(210, 105, 30),
    ],
    [
      color(255, 105, 180),
      color(147, 112, 219),
      color(255, 228, 181),
      color(75, 0, 130),
    ],
  ];

  colorProfileNames = [];

  let chosenProfileIndex = floor(random(colorPalettes.length));
  let chosenProfile = colorPalettes[chosenProfileIndex];
  let chosenProfileName = colorProfileNames[chosenProfileIndex];

  // console.log(chosenProfileIndex,chosenProfile,chosenProfileName);

  let numPolygons = floor(random(6, 16)); // Kies een willekeurig aantal vlakken tussen 6 en 15
  let fixedNumCircles = 3; // Stel hier het aantal cirkels in dat je wilt tekenen

  let polygons = [];
  let largestPolygon = null;
  let largestArea = 0;

  for (let n = 0; n < numPolygons; n++) {
    let circles = [];
    let intersections = [];
    let attempts = 0; // Voorkom oneindige loops door een limiet te stellen op pogingen

    // Bepaal een nieuw middelpunt voor elke groep cirkels binnen de gespecificeerde straal
    let newCenterX = width / 2 + random(-150, 150);
    let newCenterY = height / 2 + random(-150, 150);
    let offsetDistance = dist(width / 2, height / 2, newCenterX, newCenterY);
    while (offsetDistance < 20 || offsetDistance > 150) {
      newCenterX = width / 2 + random(-150, 150);
      newCenterY = height / 2 + random(-150, 150);
      offsetDistance = dist(width / 2, height / 2, newCenterX, newCenterY);
    }

    do {
      circles = [];
      intersections = [];
      let firstRadius = random(20, 200);
      circles.push({
        x: newCenterX,
        y: newCenterY,
        r: firstRadius,
      });

      for (let i = 1; i < fixedNumCircles; i++) {
        // Gebruik fixedNumCircles in plaats van numCircles
        let radius = random(20, 300);
        let angle = random(TWO_PI);
        let valid = false;
        let x, y;

        while (!valid) {
          let offset = random(20, 300 - radius);
          x = newCenterX + offset * cos(angle);
          y = newCenterY + offset * sin(angle);
          valid = true;
          for (let circle of circles) {
            let distance = dist(x, y, circle.x, circle.y);
            if (distance < circle.r + radius && distance > 20) {
              findIntersections(x, y, radius, circle, intersections);
              break;
            }
          }
          angle = random(TWO_PI);
        }

        circles.push({ x, y, r: radius });
      }
      attempts++;
    } while (intersections.length < 3 && attempts < 100);

    // Beperk het aantal snijpunten tot maximaal 7
    if (intersections.length > 7) {
      shuffle(intersections, true);
      intersections = intersections.slice(0, 7);
    }

    if (intersections.length >= 3) {
      let polygon = orderPoints(intersections);
      let baseColor = random(chosenProfile);
      let area = calculatePolygonArea(polygon);

      polygons.push({ polygon, baseColor, area });

      // Controleer of dit het grootste polygoon is
      if (area > largestArea) {
        largestArea = area;
        largestPolygon = polygons[polygons.length - 1];
      }

      // Maak kopieën van de polygonen en voeg ze toe aan de polygonenlijst
      if (enableCopies) {
        // Controleer de enableCopies variabele
        let centroidPolygon = centroid(polygon);
        let centroidCanvas = { x: width / 2, y: height / 2 };

        let directionX = centroidCanvas.x - centroidPolygon.x;
        let directionY = centroidCanvas.y - centroidPolygon.y;
        let distance = sqrt(directionX * directionX + directionY * directionY);

        let normalizedX = directionX / distance;
        let normalizedY = directionY / distance;

        // Bereken verplaatsingen voor twee kopieën
        let moveX1 = normalizedX * 150;
        let moveY1 = normalizedY * 150;
        let moveX2 = normalizedX * 300; // Tweede kopie verder verplaatst
        let moveY2 = normalizedY * 300;

        // Voeg de kopieën toe aan de polygonenlijst
        polygons.push({
          polygon: copyPolygon(polygon, moveX1, moveY1),
          baseColor,
          area,
        });
        if (random(1) < 0.1) {
          // 10% kans
          polygons.push({
            polygon: copyPolygon(polygon, moveX2, moveY2),
            baseColor,
            area,
          });
        }
      }
    }

    strokeWeight(0); // Dikkere lijndikte voor de cirkels om ze beter zichtbaar te maken
    stroke(0); // Zwarte rand voor de cirkels om ze duidelijk te maken
    noFill(); // Geen vulling voor de cirkels
    circles.forEach((circle) => ellipse(circle.x, circle.y, circle.r * 2));
  }

  // Verwijder de grootste polygoon en zijn kopieën uit de polygonenlijst
  let largestPolygons = polygons.filter((p) => p.area === largestArea);
  let otherPolygons = polygons.filter((p) => p.area !== largestArea);

  // Bepaal of het grootste polygoon en zijn kopieën naar de achtergrond moeten worden verplaatst
  let moveLargestToBack = random(1) < moveLargestToBackProbability;

  // Teken de polygonen in de juiste volgorde
  if (moveLargestToBack) {
    // Teken eerst de grootste polygonen
    for (let i = 0; i < largestPolygons.length; i++) {
      drawPolygon(largestPolygons[i].polygon, largestPolygons[i].baseColor);
    }
    // Teken daarna de overige polygonen
    for (let i = 0; i < otherPolygons.length; i++) {
      drawPolygon(otherPolygons[i].polygon, otherPolygons[i].baseColor);
    }
  } else {
    // Teken eerst de overige polygonen
    for (let i = 0; i < otherPolygons.length; i++) {
      drawPolygon(otherPolygons[i].polygon, otherPolygons[i].baseColor);
    }
    // Teken daarna de grootste polygonen
    for (let i = 0; i < largestPolygons.length; i++) {
      drawPolygon(largestPolygons[i].polygon, largestPolygons[i].baseColor);
    }
  }

  // Roep de functie interpretArtwork aan
  interpretArtwork();

  // Pas een vervaging van 4 pixels toe op de rest van de tekening
  filter(BLUR, 1.1);

  // Teken de "rvvr" letters als laatste zonder blur
  drawText();
}

//Helper functions
function drawPolygon(points, baseColor) {
  // Geen rand om de polygonen
  noStroke();

  // Varieer de kleur en stel de vulkleur in met transparantie
  let variedColor = color(
    constrain(red(baseColor) + random(-colorVariation, colorVariation), 0, 255),
    constrain(
      green(baseColor) + random(-colorVariation, colorVariation),
      0,
      255
    ),
    constrain(
      blue(baseColor) + random(-colorVariation, colorVariation),
      0,
      255
    ),
    maxTransparency
  );

  fill(variedColor);

  // Begin met tekenen van het polygoon
  beginShape();
  for (let i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape(CLOSE);
}

function copyPolygon(points, offsetX, offsetY) {
  return points.map((pt) => ({ x: pt.x + offsetX, y: pt.y + offsetY }));
}

function findIntersections(x, y, r, otherCircle, intersections) {
  let dx = otherCircle.x - x;
  let dy = otherCircle.y - y;
  let dist = sqrt(dx * dx + dy * dy);

  if (dist < r + otherCircle.r && dist > abs(r - otherCircle.r) && dist > 20) {
    let a = (r * r - otherCircle.r * r + dist * dist) / (2 * dist);
    let h = sqrt(r * r - a * a);
    let cx = x + a * (dx / dist);
    let cy = y + a * (dy / dist);
    let intersectX1 = cx + h * (dy / dist);
    let intersectY1 = cy - h * (dx / dist);
    let intersectX2 = cx - h * (dy / dist);
    let intersectY2 = cy + h * (dx / dist);
    intersections.push({ x: intersectX1, y: intersectY1 });
    intersections.push({ x: intersectX2, y: intersectY2 });
  }
}

function centroid(points) {
  let sumX = 0,
    sumY = 0;
  points.forEach((pt) => {
    sumX += pt.x;
    sumY += pt.y;
  });
  return { x: sumX / points.length, y: sumY / points.length };
}

function orderPoints(points) {
  let center = centroid(points);
  return points.sort((a, b) => {
    return (
      atan2(a.y - center.y, a.x - center.x) -
      atan2(b.y - center.y, b.x - center.x)
    );
  });
}

function calculatePolygonArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    let j = (i + 1) % points.length;
    area += points[i].x * points[j].y;
    area -= points[j].x * points[i].y;
  }
  return abs(area) / 2;
}

function calculateColorVariation(min, max, exponentFactor) {
  let variation;
  do {
    variation =
      floor(pow(random(), 1 / exponentFactor) * (max - min + 1)) + min;
  } while (variation > max);
  return variation;
}

function interpretArtwork() {
  let pixelSize = width / 20;
  let pixelArt = [];
  loadPixels();
  for (let y = 0; y < height; y += pixelSize) {
    let row = [];
    for (let x = 0; x < width; x += pixelSize) {
      let col = get(x, y);
      let r = col[0];
      let g = col[1];
      let b = col[2];
      let a = col[3];
      row.push([r, g, b, a]);
    }
    pixelArt.push(row);
  }

  // Wis het canvas voordat je de pixelart tekent
  background(255);

  for (let y = 0; y < pixelArt.length; y++) {
    for (let x = 0; x < pixelArt[y].length; x++) {
      fill(
        pixelArt[y][x][0],
        pixelArt[y][x][1],
        pixelArt[y][x][2],
        pixelArt[y][x][3]
      );
      noStroke();
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}

function drawText() {
  let textStr = "rvvr";
  let baseX = width - 180;
  let baseY = height - 60;

  // Bepaal de willekeurige offset voor de gehele tekst binnen ±20 pixels
  let xOffset = random(-20, 20);
  let yOffset = random(-20, 20);

  // Bepaal een willekeurige rotatiehoek tussen -3 en 3 graden
  let angle = random(-3, 3);

  push();
  translate(baseX + xOffset, baseY + yOffset);
  rotate(radians(angle));

  // Stel de tekstkleur in op wit als de achtergrond bijna zwart is
  if (isAlmostBlack) {
    fill(200);
  } else {
    fill(60); // Zwarte tekst voor een lichte achtergrond
  }

  let currentX = 0;
  for (let i = 0; i < textStr.length; i++) {
    let charWidth = textWidth(textStr[i]);
    text(textStr[i], currentX, 0);
    currentX += charWidth + random(5, 15); // Voeg willekeurige spatiëring tussen de letters toe
  }
  pop();
}
