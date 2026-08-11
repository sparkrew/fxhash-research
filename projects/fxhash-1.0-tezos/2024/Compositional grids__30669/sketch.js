const canvasWidth = 800;
const canvasHeight = 800;
const initialWidth = 400;
const initialHeight = 532;
const padding = 53;
const numRectangles = 5 * 1.33;
const minCircleSize = 133; // Minimale grootte van de cirkels
const minRectangleWidth = 15 * 1.33; // Minimale breedte van de rechthoeken
const maxRectangleWidth = 266; // Maximale breedte van de rechthoeken
const asymmetryFactor = 0.3; // Asymmetriefactor voor de grotere cirkels
const maxCircleSize = 266; // Maximale grootte van de cirkels
let charSet = {"0":60,"1": 0,"2": 1,"3": 2,"4": 3,"5": 4,"6": 5,"7": 6,"8": 7,"9": 8,"A": 9,"B": 10,"C": 11,"D": 12,"E": 13,"F": 14,"G": 15,"H": 16,"I":59,"J": 17,"K": 18,"L": 19,"M": 20,"N": 21,"P": 22,"Q": 23,"R": 24,"S": 25,"T": 26,"U": 27,"V": 28,"W": 29,"X": 30,"Y": 31,"Z": 32,"a": 33,"b": 34,"c": 35,"d": 36,"e": 37,"f": 38,"g": 39,"h": 40,"i": 41,"j": 42,"k": 43,"m": 44,"n": 45,"o": 46,"p": 47,"q": 48,"r": 49,"s": 50,"t": 51,"u": 52,"v": 53,"w": 54,"x": 55,"y": 56,"z": 57,'l':58}

let startX = 130 * 1.33; // Horizontale positie
let startY = 85 * 1.33; // Verticale positier


function setup() {
  createCanvas(canvasWidth, canvasHeight).parent(select('.canvas'));
  pixelDensity(1);
  randomSeed(floor($fx.rand()*100000));
  art();
  interpretArtwork(); // Voer daarna de pixelinterpretatie uit
}
function art(){
    background(255);
    noFill();
    noStroke();
    background(random(255), random(255), random(255), random(40, 60));
  
    let numPoints = floor(5 * 1.33);
    let maxRadiusDistance = 133;
    let chanceToDrawShape = 0.3;
  
    if (random() < chanceToDrawShape) {
      let radius = random(50*1.33, min(100, maxRadiusDistance)*1.33);
      let angle = random(TWO_PI);
      let centerX = canvasWidth / 2 + radius * cos(angle);
      let centerY = canvasHeight / 2 + radius * sin(angle);
  
      let points = [];
      let angleStep = TWO_PI / numPoints;
  
      for (let i = 0; i < numPoints; i++) {
        let angle = i * angleStep;
        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);
        x += random(-8, 8);
        y += random(-8, 8);
        points.push(createVector(x, y));
      }
  
      let fillColor = color(
        random(255),
        random(255),
        random(255),
        random(100, 200)
      );
      fill(fillColor);
  
      noStroke(); // Verwijder de omtreklijn
      beginShape();
      for (let i = 0; i < points.length; i++) {
        let x0 = points[i % points.length].x;
        let y0 = points[i % points.length].y;
        let x1 = points[(i + 1) % points.length].x;
        let y1 = points[(i + 1) % points.length].y;
        let x2 = points[(i + 2) % points.length].x;
        let y2 = points[(i + 2) % points.length].y;
        let x3 = points[(i + 3) % points.length].x;
        let y3 = points[(i + 3) % points.length].y;
  
        for (let t = 0; t <= 1; t += 0.05) {
          let xt = splineInterpolate(x0, x1, x2, x3, t);
          let yt = splineInterpolate(y0, y1, y2, y3, t);
          curveVertex(xt, yt);
        }
      }
      endShape(CLOSE);
    }
  
    //draw
    let offsetX = startX;
    let offsetY = startY;
    let Width = initialWidth;
    let Height = initialHeight;
  
    let largestCircleDiameter = 0;
    let largestRectangleWidth = 0;
    let largestRectangleHeight = 0;
  
    for (let i = 0; i < numRectangles; i++) {
      let randomOffsetX = random(-padding / 2, padding / 2);
      let randomOffsetY = random(-padding / 2, padding / 2);
      let randomWidth = Width + random(-padding, padding);
      let randomHeight = Height + random(-padding, padding);
      let randomTransparency = random(100, 255);
      let randomColor = color(
        random(255),
        random(255),
        random(255),
        randomTransparency
      );
  
      noStroke();
      fill(randomColor);
      rectMode(CENTER);
  
      if (i === floor(random(numRectangles))) {
        let x1 = random(200* 1.33, 300* 1.33);
        let y1 = random(200* 1.33, 300* 1.33);
        let x2 = random(400* 1.33, 400* 1.33);
        let y2 = y1;
        let x3 = x2;
        let y3 = random(400* 1.33, 400* 1.33);
        let x4 = x1;
        let y4 = y3;
  
        let aspectRatio = random(0.5, 0.5);
        let sizeVariation = random(0.3, 0.7);
        let initialWidth = dist(x1, y1, x2, y2);
        let initialHeight = dist(x2, y2, x3, y3);
        let newWidth = initialWidth * sizeVariation;
        let newHeight = newWidth / aspectRatio;
  
        x2 = x1 + newWidth;
        y3 = y1 + newHeight;
        x3 = x2;
        y4 = y3;
  
        let angleVariation = 5;
        x1 += random(-angleVariation, angleVariation);
        y1 += random(-angleVariation, angleVariation);
        x2 += random(-angleVariation, angleVariation);
        y2 += random(-angleVariation, angleVariation);
        x3 += random(-angleVariation, angleVariation);
        y3 += random(-angleVariation, angleVariation);
        x4 += random(-angleVariation, angleVariation);
        y4 += random(-angleVariation, angleVariation);
  
        fill(random(255), random(255), random(255), random(100, 255));
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
      } else if (random() < 0.4) {
        let diameter = min(randomWidth, randomHeight);
        if (diameter > maxCircleSize) {
          diameter = maxCircleSize;
        }
        if (diameter >= minCircleSize) {
          let randomPosX =
            offsetX + randomOffsetX + random(diameter / 2, Width - diameter / 2);
          let randomPosY =
            offsetY + randomOffsetY + random(diameter / 2, Height - diameter / 2);
          if (diameter > largestCircleDiameter) {
            largestCircleDiameter = diameter;
            let asymmetryOffsetX = random(
              -diameter * asymmetryFactor,
              diameter * asymmetryFactor
            );
            let asymmetryOffsetY = random(
              -diameter * asymmetryFactor,
              diameter * asymmetryFactor
            );
            randomPosX += asymmetryOffsetX;
            randomPosY += asymmetryOffsetY;
          }
  
          let drawPart = random() < 0.9;
          drawCircle(randomPosX, randomPosY, diameter, drawPart);
        }
      } else if (
        randomWidth >= largestRectangleWidth &&
        randomHeight >= largestRectangleHeight
      ) {
        largestRectangleWidth = randomWidth;
        largestRectangleHeight = randomHeight;
        push();
        translate(
          offsetX + randomOffsetX + Width / 2,
          offsetY + randomOffsetY + Height / 2
        );
        rotate(radians(random(-7, 7)));
        drawRectangle(0, 0, randomWidth, randomHeight);
        pop();
      } else {
        if (randomWidth >= minRectangleWidth) {
          drawRectangle(
            offsetX + randomOffsetX + Width / 2,
            offsetY + randomOffsetY + Height / 2,
            randomWidth,
            randomHeight
          );
        }
      }
  
      offsetX += padding;
      offsetY += padding;
      Width -= padding * 2;
      Height -= padding * 2;
    }
    $fx.preview();
}

function splineInterpolate(p0, p1, p2, p3, t) {
  let v0 = (p2 - p0) * 0.5;
  let v1 = (p3 - p1) * 0.5;
  let t2 = t * t;
  let t3 = t * t2;
  return (
    (2 * p1 - 2 * p2 + v0 + v1) * t3 +
    (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 +
    v0 * t +
    p1
  );
}
function drawRectangle(x, y, width, height) {
  if (width > maxRectangleWidth) {
    width = maxRectangleWidth;
  }
  rect(x, y, width, height);
}
function drawArc(x, y, diameter, startAngle, endAngle) {
  arc(x, y, diameter, diameter, radians(startAngle), radians(endAngle));
}

function drawPartOfCircle(x, y, diameter, startAngle, endAngle) {
  if (diameter >= minCircleSize) {
    fill(random(255), random(255), random(255), random(100, 255));
    noStroke();
    drawArc(x, y, diameter, startAngle, endAngle);
  }
}

function drawCircle(x, y, diameter, drawPart = false) {
  if (drawPart) {
    let startAngle = random(30, 240);
    let endAngle = random(startAngle + 20, 270);
    drawPartOfCircle(x, y, diameter, startAngle, endAngle);
  } else {
    circle(x, y, diameter);
  }
}

function interpretArtwork() {
  let pixelSize = canvasWidth / 16;
  let pixelArt = [];
  loadPixels();
  for (let y = 0; y < canvasHeight; y += pixelSize) {
    let row = [];
    for (let x = 0; x < canvasWidth; x += pixelSize) {
      let index = 4 * (y * canvasWidth + x);
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];
      row.push([r, g, b, a]);
    }
    pixelArt.push(row);
  }
  push();
  translate(pixelSize/2,pixelSize/2);
  for (let y = 0; y < pixelArt.length; y++) {
    for (let x = 0; x < pixelArt[y].length; x++) {
      fill(pixelArt[y][x][0], pixelArt[y][x][1], pixelArt[y][x][2], pixelArt[y][x][3]);
      noStroke();
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
  pop();
}











