let cnv;
//let frameCount;
let fps;

let blurH, blurV, pixlines;
let font;

let pCount;
let w, h;

let windowScale;
let speed = 0.01;
let bobbleRate = 1;
let shapeAngle, startAngle;
let guiCalculated;

let msg1Glow = -1;
let msg2Glow = -1;
let shColor = -1;

let msg1Color, msg2Color;
let msg1Header, msg2Header;
let msg1Text, msg2Text;

let rulWidth, outWidth;

let shapeTopX, shapeTopY, shapeBotX, shapeBotY;

let shapeWidth, shapeHeight;

let radarTopX, radarTopY, radarBotX, radarBotY;

let dataLogTopX, dataLogTopY, dataLogBotX, dataLogBotY;

let msg1TopX, msg1TopY, msg1BotX, msg1BotY;

let msg1Width, msg1Height;

let msg2TopX, msg2TopY, msg2BotX, msg2BotY;

let msg2Width, msg2Height;

let msg1ZonePosX, msg1ZonePosY;

let msg2ZonePosX, msg2ZonePosY;

let locMsg1TopX, locMsg1TopY, locMsg1BotX, locMsg1BotY;

let locMsg2TopX, locMsg2TopY, locMsg2BotX, locMsg2BotY;

let locShapeTopX, locShapeTopY, locShapeBotX, locShapeBotY;

let msg1Zone, msg1ZoneGlow, msg2Zone, msg2ZoneGlow;

let shPoints = [];
let shChanges = [];
let shBreach = [];
let shBreachStart = [];
let radTops = [];
let radTopsBuf = [];
let dataLogTops = [];
let streams;
let init_streams;

class Stream {
  constructor(x, y, s, a, m) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.a = a;
    this.m = m;
    this.active = true;
  }
}

let angNX = [];
let angNY = [];

let distorts = [];
let deltas = [];

let angNShift = 6;

let dataLog;
let field;
let tunSpeed;
let fuelAmount;

const TUN_SPEED = [
    { title: "Tour", value: 12, weight: 44 },
    { title: "Cruize", value: 10, weight: 33 },
    { title: "Haste", value: 7, weight: 23 },
  ],
  TUN_DENSITY = [
    { title: "Modern", value: 12, weight: 44 },
    { title: "Detailed", value: 20, weight: 33 },
    { title: "Retro", value: 8, weight: 23 },
  ],
  FUELS = [
    { title: "Full", value: 95, weight: 44 },
    { title: "Middle", value: 60, weight: 33 },
    { title: "Low", value: 15, weight: 23 },
  ],
  LOGS = [
    { title: "Stable", value: 0, weight: 44 },
    { title: "Unstable", value: 1, weight: 33 },
    { title: "Collapsing", value: 2, weight: 23 },
  ],
  FIELDS = [
    { title: "Stable", value: 0, weight: 50 },
    { title: "Meteors", value: 1, weight: 35 },
    { title: "Star", value: 2, weight: 15 },
  ];

function preload() {
  preset();
  blurH = loadShader("base.vert", "bloom.frag");
  blurV = loadShader("base.vert", "bloom.frag");
  pixLines = loadShader("base.vert", "pixLines.frag");
  font1 = loadFont("AldotheApache.ttf");
}

let tunDensityPick, tunSpeedPick, dataLogPick, fieldPick, fuelPick;

let dataLogsWeight = 0,
  fieldsWeight = 0,
  fuelsWeight = 0,
  tunSpeedsWeight = 0,
  tunDensityWeight = 0;

function preset() {
  for (let key in FUELS) {
    fuelsWeight += FUELS[key].weight;
  }

  for (let key in LOGS) {
    dataLogsWeight += LOGS[key].weight;
  }

  for (let key in FIELDS) {
    fieldsWeight += FIELDS[key].weight;
  }

  for (let key in TUN_SPEED) {
    tunSpeedsWeight += TUN_SPEED[key].weight;
  }

  for (let key in TUN_DENSITY) {
    tunDensityWeight += TUN_DENSITY[key].weight;
  }

  fuelPick = getRarity(fuelsWeight, FUELS);
  dataLogPick = getRarity(dataLogsWeight, LOGS);
  fieldPick = getRarity(fieldsWeight, FIELDS);
  tunSpeedPick = getRarity(tunSpeedsWeight, TUN_SPEED);
  tunDensityPick = getRarity(tunDensityWeight, TUN_DENSITY);

  window.$fxhashFeatures = {
    Fuel: fuelPick.title,
    Tunnel_Stability: dataLogPick.title,
    Obstacles: fieldPick.title,
    Speed: tunSpeedPick.title,
    Tunnel_Density: tunDensityPick.title,
  };
}

function setup() {
  w = windowWidth - 0.1;
  h = windowHeight - 0.1;
  windowScale = window.devicePixelRatio / 1.25;

  pCount = tunDensityPick.value;
  dataLog = dataLogPick.value;
  field = fieldPick.value;
  tunSpeed = tunSpeedPick.value;
  fuelAmount = fuelPick.value;

  pParts = 1;
  numShapes = 16;
  shapeAngle = PI;
  startAngle = QUARTER_PI;
  angNShift = round(6 * (w / h), 0);
  if (angNShift % 2 != 0) angNShift++;

  cnv = createCanvas(w, h);
  centerCanvas();

  calcAllCoords();
  createAllCanvases();
  createAllWEBGLCanvases();

  if (dataLog > 0) {
    bobbleRate = 3;
  }

  guiCalculated = 0;

  background(0);

  //noLoop();

  //frameCount = 1;
  //requestAnimationFrame(update);
}

function draw() {
  //function update() {
  windowScale = window.devicePixelRatio / 1.25;
  fMax = tunSpeed;
  fNow = frameCount % fMax;
  background(1, 3, 2, 150);
  fill(0);

  let frameR = w / 1;
  let shapeR = frameR / 1.3;

  floorRes = floor(w / h);
  if (floorRes == 0) floorRes = 1;

  let persp = 3;
  startAngle += 0.02;
  let phase = frameCount * speed;

  //калькуляция
  {
    //поправка на стабилизацию
    for (let i = numShapes; i >= 1; i -= 1) {
      if (shChanges[i] == 0 || isNaN(shChanges[i])) {
        shChanges[i] = random2(30, 80);
        shBreach[i] = random2(pCount / 18, pCount / 12);
        shBreachStart[i] = random2(0, pCount - shBreach[i] - 1);
      }
      shChanges[i]--;
    }

    //подготовка нойзов смещения тоннеля
    for (let k = 0; k <= numShapes + (numShapes * pow(w / h, 2)) / 2; k++) {
      phase = frameCount * speed + ((k - fNow / fMax) / 2) * (fMax / 20);
      angNY[k] = simplex2(phase / 5 + 1, phase / 50 + 1);
      angNX[k] = simplex2(phase / 5, phase / 50);
    }
    //калькуляционный фор
    for (let i = 0; i <= numShapes; i++) {
      phase = frameCount * speed + ((i - fNow / fMax) / 2) * (fMax / 20);
      shPoints[i] = [];
      distorts[i] = [];
      deltas[i] = 0;

      let curPoint = 0;
      let x, y, r;
      //фор шейпа
      if (dataLog == 2 && i > 0) {
        shapeR *= constrain(
          map(i - fNow / fMax, 0, numShapes / 5, 0.2, 1),
          0,
          1
        );
      }
      for (let j = 0; j <= TWO_PI; j += TWO_PI / pCount) {
        let curSin = sin(j + shapeAngle + startAngle);
        let curCos = cos(j + shapeAngle + startAngle);
        let xoff = map(curCos, -1, 1, 0, bobbleRate);
        let yoff = map(curSin, -1, 1, 0, bobbleRate);
        let n = simplex2(xoff + phase, yoff + phase);

        //установка расстояния до точки
        if (
          dataLog == 1 &&
          curPoint - 1 >= shBreachStart[i] &&
          curPoint - 1 <= shBreachStart[i] + shBreach[i]
        ) {
          n *= map(pCount, 20, 8, 4, 2.5);
        }

        let nForce1 = 1.2;
        let nForce2 = 1.2;
        if (dataLog == 2) {
          nForce1 = 1.4;
          nForce2 = 1.2;
        }

        if (i < numShapes - 1)
          r =
            shapeR *
            map(
              n,
              0,
              1,
              1,
              map(i - fNow / fMax, 0, numShapes, nForce1, nForce2)
            );
        else r = shapeR * map(n, 0, 1, 1, 1);

        //запись данных для графика стабилизации
        distorts[i][curPoint] = r / shapeR - 1;
        if (curPoint > 0)
          deltas[i] += abs(distorts[i][curPoint] - distorts[i][curPoint - 1]);

        //установка координат и их смещение к краям для имитации кривого тоннеля
        if (i > 0 && i < numShapes) {
          x =
            r * curCos +
            (i - fNow / fMax) *
              map(
                i - fNow / fMax,
                0,
                numShapes - 2,
                20 * (w / h),
                20 * (w / h)
              ) *
              angNX[i + angNShift];
          y =
            r * curSin +
            (i - fNow / fMax) *
              map(i - fNow / fMax, 0, numShapes - 2, 20, 20) *
              angNY[i + angNShift];
        }
        if (i == numShapes) {
          x = r * curCos + (numShapes - 1) * 20 * angNX[i + angNShift];
          y = r * curSin + (numShapes - 1) * 20 * angNY[i + angNShift];
        }
        if (i == 0) {
          x = r * curCos;
          y = r * curSin;
        }

        //установка промежуточных точек
        if (curPoint > 0) {
          for (let k = 1; k < pParts; k++) {
            shPoints[i][curPoint] = createVector(
              lerp(shPoints[i][curPoint - k].x, x, k / pParts),
              lerp(shPoints[i][curPoint - k].y, y, k / pParts)
            );
            curPoint++;
          }
        }
        shPoints[i][curPoint] = createVector(x, y);
        curPoint++;
      }

      //deltas[i] /= numShapes;

      if (i < numShapes - 1)
        shapeR = frameR / 2 / map(i - fNow / fMax, 0, numShapes - 2, 1, 15);
      else shapeR = frameR / 2 / 15;
    }

    if (dataLog > 0) {
      if (frameCount % 40 == 0) shColor *= -1;
    }
  }

  shape.noFill().stroke(60, 100, 60).strokeCap(ROUND).strokeJoin(ROUND);

  let deepLineWidth = 0.1;
  let frontLineWidthDiv = 15;
  if (field == 2) {
    deepLineWidth = 5;
    frontLineWidthDiv = 8;
  }

  //рисование тоннеля
  {
    for (let i = numShapes; i >= 1; i -= 1) {
      //рисование колец

      //рисование огня в конце
      if (field == 2) {
        shape.stroke(
          lerpColor(
            color(60, 100, 60),
            color(205, 40, 0),
            (i * 2) / numShapes - 0.2
          )
        );
      }
      shape.noFill();
      shape.strokeWeight(
        (2 *
          map(
            i - fNow / fMax,
            0,
            numShapes,
            pow(numShapes - i + fNow / fMax, 2) /
              ((h * (h / w)) / frontLineWidthDiv),
            deepLineWidth
          )) /
          windowScale
      );
      shape.beginShape();
      for (let j = 0; j < shPoints[0].length; j++) {
        shape.vertex(shPoints[i][j].x, shPoints[i][j].y);
      }
      shape.endShape(CLOSE);

      //рисования стирателя всего за пределами кольца
      shape
        .fill(0)
        .strokeWeight(0)
        .erase(255, 0)
        .beginShape()
        .vertex(locShapeTopX, locShapeTopY)
        .vertex(locShapeTopX, locShapeBotY)
        .vertex(locShapeBotX, locShapeBotY)
        .vertex(locShapeBotX, locShapeTopY)
        .beginContour();
      for (let j = 0; j < shPoints[0].length; j++) {
        shape.vertex(shPoints[i][j].x, shPoints[i][j].y);
      }
      shape.endContour();
      shape.endShape(CLOSE);
      shape.noErase();

      //рисование продольных линий
      shape.strokeWeight(
        map(
          i - fNow / fMax,
          0,
          numShapes,
          pow(numShapes - i + fNow / fMax, 2) /
            ((h * (h / w)) / frontLineWidthDiv),
          deepLineWidth
        ) / windowScale
      );
      for (let j = 0; j < shPoints[0].length - 1; j++) {
        if (i > 0)
          shape.line(
            shPoints[i][j].x,
            shPoints[i][j].y,
            shPoints[i - 1][j].x,
            shPoints[i - 1][j].y
          );
      }
      shape.noFill();
    }
  }

  //рисование интерфейса радара
  {
    if (
      (frameCount * floorRes) % round(radarInWidth / 4 + 1, 0) == 0 ||
      frameCount < 2
    ) {
      let ipers = 0;
      for (let i = 0; i < radarInWidth / 4; i++) {
        ipers = i / (radarInWidth / 4);
        let jpers = -1;
        let j = 0;
        while (jpers < ipers && j <= angNY.length - 1) {
          j++;
          jpers = j / (angNY.length - 1);
        }
        let jtoplerp = lerp(
          shapeWidth / 2 + angNY[j] * 100 * floorRes,
          shapeWidth / 2 + angNY[j - 1] * 100 * floorRes,
          abs(jpers - ipers) / (1 / (angNY.length - 1))
        );
        radTopsBuf[i] = jtoplerp * (radarInHeight / shapeWidth);
      }
    }
    radarZone
      .background(0, 150)
      .stroke(60, 100, 60)
      .strokeWeight(3 / windowScale)
      .strokeCap(SQUARE);

    if (frameCount < 2) radTops = radTopsBuf;
    let lineNow = (frameCount * floorRes) % round(radarInWidth / 4 + 1, 0);
    radTops[lineNow] = radTopsBuf[lineNow];
    if (floorRes > 1) radTops[lineNow - 1] = radTopsBuf[lineNow - 1];

    //рисование всех линий тоннеля на радаре
    let upos;
    if (round(w / h, 0) == 0) upos = round(angNShift, 0);
    else upos = round(angNShift * (w / h), 0);
    for (i = 0; i < radTops.length; i++) {
      radarZone.drawingContext.setLineDash([2, 12]);
      radarZone.line(
        (i * 4) / windowScale,
        0,
        (i * 4) / windowScale,
        radarZone.height
      );
      radarZone.drawingContext.lineDashOffset = frameCount + random2(-2, 2) + i;
      radarZone.drawingContext.setLineDash([]);
      if (dataLog == 2)
        radarZone.line(
          (i * 4) / windowScale,
          radTops[i] -
            20 -
            random2(-10 - (pow(radTops.length / i, 2) / upos) * 3, 4),
          (i * 4) / windowScale,
          radTops[i] +
            20 +
            random2(-10 - (pow(radTops.length / i, 2) / upos) * 3, 4)
        );
      if (dataLog == 1)
        radarZone.line(
          (i * 4) / windowScale,
          radTops[i] - 20 - random2(-3, 6),
          (i * 4) / windowScale,
          radTops[i] + 20 + random2(-3, 6)
        );
      if (dataLog == 0)
        radarZone.line(
          (i * 4) / windowScale,
          radTops[i] - 20 - random2(-1, 3),
          (i * 4) / windowScale,
          radTops[i] + 20 + random2(-1, 3)
        );
      //рисование метеоритного поля
      if (field == 1) {
        radarZone.push();
        radarZone.stroke(250, 100, 20);
        if (radTops[i] % 3 > 2) {
          for (j = 0; j < (radTops[i] * 10) % 3; j++) {
            let ypoint = ((radTops[i] * 150) % 100) / 100;
            radarZone.line(
              (i * 4) / windowScale,
              lerp(0, radarInHeight, ypoint) + j + 1,
              (i * 4) / windowScale,
              lerp(0, radarInHeight, ypoint) - j - 1
            );
            if (j > 1) {
              radarZone.line(
                ((i + 1) * 4) / windowScale,
                lerp(0, radarInHeight, ypoint) + j + 1,
                ((i + 1) * 4) / windowScale,
                lerp(0, radarInHeight, ypoint) - j - 1
              );
            }
          }
        }
        radarZone.pop();
      }
    }
    if (field == 2) {
      radarZone.push();
      radarZone.blendMode(ADD);
      radarZone.stroke(80, 30, 0);
      radarZone.line(
        ((radTopsBuf.length - 3) * 4) / windowScale,
        0,
        ((radTopsBuf.length - 3) * 4) / windowScale,
        radarZone.height
      );
      radarZone.stroke(160, 20, 0);
      radarZone.line(
        ((radTopsBuf.length - 2) * 4) / windowScale,
        0,
        ((radTopsBuf.length - 2) * 4) / windowScale,
        radarZone.height
      );
      radarZone.stroke(200, 100, 10);
      radarZone.line(
        ((radTopsBuf.length - 1) * 4) / windowScale,
        0,
        ((radTopsBuf.length - 1) * 4) / windowScale,
        radarZone.height
      );
      for (i = 4; i < radTopsBuf.length / 2; i++) {
        radarZone.drawingContext.setLineDash(
          [
            radTopsBuf.length / 2 - i + random2(0, 2),
            radTopsBuf.length / 2 / 2 + i,
          ],
          random2(0, 5),
          random2(0, 5)
        );
        radarZone.drawingContext.lineDashOffset = random2(
          -radarZone.height / 3,
          radarZone.height / 3
        );

        radarZone.stroke(120, 50, 0);
        radarZone.blendMode(ADD);
        radarZone.line(
          ((radTopsBuf.length - i) * 4) / windowScale,
          0,
          ((radTopsBuf.length - i) * 4) / windowScale,
          radarZone.height
        );
      }

      radarZone.pop();
    }

    //рисование самолета
    {
      radarZone.stroke(20, 30, 20);
      //тень самолета
      radarZone.line(
        ((upos + 3) * 4) / windowScale,
        radTops[upos + 1] - 1,
        ((upos + 3) * 4) / windowScale,
        radTops[upos + 1] + 1
      );
      radarZone.line(
        ((upos + 2) * 4) / windowScale,
        radTops[upos + 1] - 6,
        ((upos + 2) * 4) / windowScale,
        radTops[upos + 1] + 6
      );
      radarZone.line(
        ((upos + 1) * 4) / windowScale,
        radTops[upos + 1] - 8,
        ((upos + 1) * 4) / windowScale,
        radTops[upos + 1] + 8
      );
      radarZone.line(
        ((upos + 0) * 4) / windowScale,
        radTops[upos + 1] - 10,
        ((upos + 0) * 4) / windowScale,
        radTops[upos + 1] + 10
      );
      radarZone.line(
        ((upos - 0.5) * 4) / windowScale,
        radTops[upos + 1] - 9,
        ((upos - 0.5) * 4) / windowScale,
        radTops[upos + 1] + 9
      );
    }

    //сам самолет
    {
      radarZone.stroke(250, 250, 250);
      radarZone.line(
        ((upos + 2) * 4) / windowScale,
        radTops[upos + 1] - 2,
        ((upos + 2) * 4) / windowScale,
        radTops[upos + 1] + 2
      );
      radarZone.line(
        ((upos + 1) * 4) / windowScale,
        radTops[upos + 1] - 5,
        ((upos + 1) * 4) / windowScale,
        radTops[upos + 1] + 5
      );
      radarZone.line(
        (upos * 4) / windowScale,
        radTops[upos + 1] - 8,
        (upos * 4) / windowScale,
        radTops[upos + 1] + 8
      );
    }

    radarZone.push();
    radarZone.blendMode(ADD);
    radarZone.stroke(100, 160, 100);
    radarZone.line(
      (lineNow * 4) / windowScale,
      0,
      (lineNow * 4) / windowScale,
      radarZone.height
    );
    if (floorRes == 2)
      radarZone.line(
        (lineNow * 4 - 1) / windowScale,
        0,
        (lineNow * 4 - 1) / windowScale,
        radarZone.height
      );
    radarZone.pop();

    //запись в канал для блума
    bloomShader(
      400 / windowScale,
      radarZone,
      bloomCnv,
      radarInTopX,
      radarInTopY,
      0.7
    );
  }

  //рисование интерфейса стабилизатора
  {
    let ipers = 0;
    for (let i = 0; i < dataLogInWidth / 4; i++) {
      ipers = i / (dataLogInWidth / 4);
      let jpers = -1;
      let j = 0;
      while (jpers < ipers && j <= deltas.length - 3) {
        j++;
        jpers = j / (deltas.length - 3);
      }
      let jtoplerp = lerp(
        shapeWidth / 2 + deltas[j] * 100 * floorRes,
        shapeWidth / 2 + deltas[j - 1] * 100 * floorRes,
        abs(jpers - ipers) / (1 / (deltas.length - 3))
      );
      dataLogTops[i] = jtoplerp * (dataLogInHeight / shapeWidth);
    }

    dataLogZone
      .background(0, 150)
      .stroke(60, 100, 60)
      .strokeWeight(3 / windowScale)
      .strokeCap(SQUARE);

    //рисование всех линий тоннеля на радаре
    let upos;
    if (round(w / h, 0) == 0) upos = round(angNShift, 0);
    else upos = round(angNShift * (w / h), 0);
    for (i = 0; i < dataLogTops.length; i++) {
      dataLogZone.drawingContext.setLineDash([2, 12]);
      dataLogZone.line(
        (i * 4) / windowScale,
        0,
        (i * 4) / windowScale,
        dataLogZone.height
      );
      dataLogZone.drawingContext.lineDashOffset =
        frameCount + random2(-2, 2) + i;
    }

    dataLogZone.drawingContext.setLineDash([]);
    for (i = 0; i < streams.length; i++) {
      //streams[i].draw();
      if (streams[i].active) {
        gradient = dataLogZone.drawingContext.createLinearGradient(
          streams[i].x,
          streams[i].y - 80,
          streams[i].x,
          streams[i].y
        );
        if (streams[i].m == 0) gradcolor = color(100, 160, 100);
        if (streams[i].m == 1) gradcolor = color(260, 120, 40);
        if (streams[i].m == 2) gradcolor = color(260, 60, 20);
        gradcolor.setAlpha(10);
        gradient.addColorStop(0, gradcolor);
        gradcolor.setAlpha(15 + random2(-10, 20));
        gradient.addColorStop(0.1, gradcolor);
        gradcolor.setAlpha(30 + random2(-25, 40));
        gradient.addColorStop(0.2, gradcolor);
        gradcolor.setAlpha(45 + random2(-40, 60));
        gradient.addColorStop(0.3, gradcolor);
        gradcolor.setAlpha(60 + random2(-55, 80));
        gradient.addColorStop(0.4, gradcolor);
        gradcolor.setAlpha(75 + random2(-70, 90));
        gradient.addColorStop(0.5, gradcolor);
        gradcolor.setAlpha(90 + random2(-85, 100));
        gradient.addColorStop(0.6, gradcolor);
        gradcolor.setAlpha(105 + random2(-100, 100));
        gradient.addColorStop(0.7, gradcolor);
        gradcolor.setAlpha(120 + random2(-110, 100));
        gradient.addColorStop(0.8, gradcolor);
        gradcolor.setAlpha(300 + random2(-260, 100));
        gradient.addColorStop(1, gradcolor);
        dataLogZone.drawingContext.strokeStyle = gradient;
        dataLogZone.line(
          streams[i].x,
          streams[i].y - 80,
          streams[i].x,
          streams[i].y
        );
      }

      //streams[i].update();
      if (streams[i].active && streams[i].y < dataLogInHeight + 80) {
        streams[i].y += streams[i].a;
      } else {
        streams[i].x =
          (round(random2(0, dataLogInWidth / 4)) * 4) / windowScale;
        streams[i].y = 0;
      }
    }

    dataLogZone.push();
    dataLogZone.blendMode(ADD);
    dataLogZone.stroke(100, 160, 100);
    dataLogZone.pop();

    //запись в канал для блума
    bloomShader(
      400 / windowScale,
      dataLogZone,
      bloomCnv,
      dataLogInTopX,
      dataLogInTopY,
      0.7
    );
  }

  //---------------------------------------------------------------------------------------
  //отрисовка одного кадра всего гуя----------------------------------------------------
  //---------------------------------------------------------------------------------------
  if (guiCalculated == 0) {
    allGui.clear();
    guiCalculated = 1;
    shapeUnder.stroke(15, 24, 15);

    //считаем количество клеток по 40 пикселей
    let numGridX = floor(shapeWidth / (40 / windowScale));

    //считаем ближайший к 40 размер кратной клетки
    let sizeGridX = shapeWidth / numGridX;

    //повторяем деление для получения колва кратных клеток
    numGridX = shapeWidth / sizeGridX;

    //все то же самое для Y
    let numGridY = floor(shapeHeight / sizeGridX);
    let sizeGridY = shapeHeight / numGridY;
    numGridY = shapeHeight / sizeGridY;

    for (let i = 1; i < numGridX + 1; i++) {
      shapeUnder.strokeWeight(1.8 / windowScale);
      shapeUnder.drawingContext.setLineDash([
        (shapeHeight / numGridY / 6) * 1,
        (shapeHeight / numGridY / 6) * 5,
      ]);
      shapeUnder.drawingContext.lineDashOffset = shapeHeight / numGridY / 12;
      shapeUnder.line(
        lerp(locShapeTopX, locShapeBotX, i / numGridX),
        locShapeTopY,
        lerp(locShapeTopX, locShapeBotX, i / numGridX),
        locShapeBotY
      );
      shapeUnder.strokeWeight(0.4 / windowScale);
      shapeUnder.drawingContext.setLineDash([]);
      shapeUnder.line(
        lerp(locShapeTopX, locShapeBotX, i / numGridX),
        locShapeTopY,
        lerp(locShapeTopX, locShapeBotX, i / numGridX),
        locShapeBotY
      );

      shapeUnder.push();
      shapeUnder.stroke(8, 12, 8);
      shapeUnder.strokeWeight(0.4 / windowScale);
      shapeUnder.drawingContext.setLineDash([]);
      shapeUnder.line(
        lerp(locShapeTopX, locShapeBotX, (i - 0.5) / numGridX),
        locShapeTopY,
        lerp(locShapeTopX, locShapeBotX, (i - 0.5) / numGridX),
        locShapeBotY
      );
      shapeUnder.pop();
    }
    for (let i = 1; i < numGridY + 1; i++) {
      shapeUnder.strokeWeight(1.8 / windowScale);
      shapeUnder.drawingContext.setLineDash([
        (shapeWidth / numGridX / 6) * 1,
        (shapeWidth / numGridX / 6) * 5,
      ]);
      shapeUnder.drawingContext.lineDashOffset = shapeWidth / numGridX / 12;
      shapeUnder.line(
        locShapeTopX,
        lerp(locShapeTopY, locShapeBotY, i / numGridY),
        locShapeBotX,
        lerp(locShapeTopY, locShapeBotY, i / numGridY)
      );
      shapeUnder.strokeWeight(0.4 / windowScale);
      shapeUnder.drawingContext.setLineDash([]);
      shapeUnder.line(
        locShapeTopX,
        lerp(locShapeTopY, locShapeBotY, i / numGridY),
        locShapeBotX,
        lerp(locShapeTopY, locShapeBotY, i / numGridY)
      );

      shapeUnder.push();
      shapeUnder.stroke(8, 12, 8);
      shapeUnder.strokeWeight(0.4 / windowScale);
      shapeUnder.drawingContext.setLineDash([]);
      shapeUnder.line(
        locShapeTopX,
        lerp(locShapeTopY, locShapeBotY, (i - 0.5) / numGridY),
        locShapeBotX,
        lerp(locShapeTopY, locShapeBotY, (i - 0.5) / numGridY)
      );
      shapeUnder.pop();
    }

    //рисование всего гуя

    allGui
      .strokeWeight(1 / windowScale)
      .noFill()
      .strokeCap(ROUND)
      .strokeJoin(ROUND);

    //линейки
    {
      //горизонтальные
      let numRuleX = numGridX * 10;
      let numRuleY = numGridY * 10;

      let icount = 0;
      for (let i = 0; i < shapeWidth; i += shapeWidth / numRuleX) {
        if (icount == numRuleX / 2) allGui.stroke(120, 200, 100);
        else allGui.stroke(50, 90, 50);

        if (icount % 5 == 0) {
          allGui.line(
            shapeTopX + i,
            shapeTopY - rulWidth,
            shapeTopX + i,
            shapeTopY - rulWidth / 2
          );
          allGui.line(
            shapeTopX + i,
            shapeBotY + rulWidth,
            shapeTopX + i,
            shapeBotY + rulWidth / 2
          );
        } else {
          allGui.line(
            shapeTopX + i,
            shapeTopY - rulWidth,
            shapeTopX + i,
            shapeTopY - (rulWidth / 3) * 2
          );
          allGui.line(
            shapeTopX + i,
            shapeBotY + rulWidth,
            shapeTopX + i,
            shapeBotY + (rulWidth / 3) * 2
          );
        }
        icount++;
      }

      //вертикальные
      icount = 0;
      for (let i = 0; i < shapeHeight + 1; i += shapeHeight / (numGridY * 10)) {
        if (icount == numRuleY / 2) allGui.stroke(120, 200, 100);
        else allGui.stroke(50, 90, 50);
        if (icount % 5 == 0) {
          allGui.line(
            shapeTopX - rulWidth,
            shapeTopY + i,
            shapeTopX - rulWidth / 2,
            shapeTopY + i
          );
          allGui.line(
            shapeBotX + rulWidth,
            shapeTopY + i,
            shapeBotX + rulWidth / 2,
            shapeTopY + i
          );
        } else {
          allGui.line(
            shapeTopX - rulWidth,
            shapeTopY + i,
            shapeTopX - (rulWidth / 3) * 2,
            shapeTopY + i
          );
          allGui.line(
            shapeBotX + rulWidth,
            shapeTopY + i,
            shapeBotX + (rulWidth / 3) * 2,
            shapeTopY + i
          );
        }
        icount++;
      }
    }

    //квадраты по углам линейки
    {
      allGui.fill(60, 100, 60);
      rquadfill(
        allGui,
        shapeTopX - rulWidth,
        shapeTopY - rulWidth,
        shapeTopX - rulWidth / 2,
        shapeTopY - rulWidth / 2,
        2
      );
      rquadfill(
        allGui,
        shapeTopX - rulWidth,
        shapeBotY + rulWidth / 2,
        shapeTopX - rulWidth / 2,
        shapeBotY + rulWidth,
        2
      );
      rquadfill(
        allGui,
        shapeBotX + rulWidth / 2,
        shapeTopY - rulWidth,
        shapeBotX + rulWidth,
        shapeTopY - rulWidth / 2,
        2
      );
      rquadfill(
        allGui,
        shapeBotX + rulWidth / 2,
        shapeBotY + rulWidth / 2,
        shapeBotX + rulWidth,
        shapeBotY + rulWidth,
        2
      );
    }

    allGui.strokeWeight(3 / windowScale);
    allGui.noFill();

    //обводка вокруг экрана
    rquad(
      allGui,
      0 + outWidth / 2,
      0 + outWidth / 2,
      w - outWidth / 2,
      h - outWidth / 2,
      rulWidth / 4
    );

    allGui.strokeWeight(2 / windowScale);
    //обводка вокруг радара
    rquad(allGui, radarTopX, radarTopY, radarBotX, radarBotY, rulWidth / 4);

    //обводка вокруг стабилизаторометра
    rquad(
      allGui,
      dataLogTopX,
      dataLogTopY,
      dataLogBotX,
      dataLogBotY,
      rulWidth / 4
    );

    allGui.push();
    allGui.strokeWeight(2.9 / windowScale);
    //уровень топлива
    for (
      i = 3 / windowScale;
      i < fuelBotX - fuelTopX - 2;
      i += 4 / windowScale
    ) {
      if ((i / (fuelBotX - fuelTopX - 2)) * 100 < fuelAmount) {
        allGui.stroke(50, 90, 50);
        if (fuelAmount <= 30) allGui.stroke(130, 90, 25);
        if (fuelAmount <= 15) allGui.stroke(230, 35, 25);
      } else allGui.stroke(12, 22, 12);
      allGui.line(fuelTopX + i, fuelTopY + 2, fuelTopX + i, fuelBotY - 2);
    }

    //скорость движения
    for (
      i = 3 / windowScale;
      i < speedBotX - speedTopX - 2;
      i += 4 / windowScale
    ) {
      if (i / (speedBotX - speedTopX - 2) < (13 - tunSpeed + 6) / 13) {
        allGui.stroke(50, 90, 50);
        if (tunSpeed == 10) allGui.stroke(130, 90, 25);
        if (tunSpeed == 7) allGui.stroke(230, 35, 25);
      } else allGui.stroke(12, 22, 12);
      allGui.line(speedTopX + i, speedTopY + 2, speedTopX + i, speedBotY - 2);
    }

    allGui.pop();
    //обводка вокруг спидометра
    rquad(allGui, speedTopX, speedTopY, speedBotX, speedBotY, rulWidth / 12);

    //обводка вокруг топлива
    rquad(allGui, fuelTopX, fuelTopY, fuelBotX, fuelBotY, rulWidth / 12);

    allGui.strokeWeight(1 / windowScale);
    //Внутренняя обводка вокруг радара
    rquad(
      allGui,
      radarInTopX,
      radarInTopY,
      radarInBotX,
      radarInBotY,
      rulWidth / 20
    );

    //Внутренняя обводка вокруг стабилизаторометра
    rquad(
      allGui,
      dataLogInTopX,
      dataLogInTopY,
      dataLogInBotX,
      dataLogInBotY,
      rulWidth / 20
    );

    //подписи на панелях
    {
      allGui.push();
      allGui.strokeWeight(0);
      prepareMsgText(allGui, 3);
      allGui.textSize(20 / windowScale);
      allGui.text(
        "SPEED",
        (speedBotX + speedTopX) / 2,
        speedTopY - (outWidth / 4) * 3
      );
      allGui.text(
        "FUEL",
        (fuelBotX + fuelTopX) / 2,
        fuelTopY - (outWidth / 4) * 3
      );
      allGui.text(
        "HYPERSCANNER",
        (radarBotX + radarTopX) / 2,
        (radarInTopY + radarTopY) / 2
      );
      allGui.text(
        "RAW DATA LOG",
        (dataLogBotX + dataLogTopX) / 2,
        (dataLogInTopY + dataLogTopY) / 2
      );
      allGui.pop();
    }

    //обводка вокруг окна тоннеля
    rquad(allGui, shapeTopX, shapeTopY, shapeBotX, shapeBotY, 2);
    rquad(
      allGui,
      shapeTopX - rulWidth / 4,
      shapeTopY - rulWidth / 4,
      shapeBotX + rulWidth / 4,
      shapeBotY + rulWidth / 4,
      rulWidth / 4
    );

    //верхнее уведомление
    {
      msg1Color = field;
      if (msg1Color == 0) {
        msg1Zone.fill(60, 90, 60).stroke(60, 100, 60);
        msg1Header = "BREACH";
        msg1Text = "BREACH POINT CLEAR";
      }
      if (msg1Color == 1) {
        msg1Zone.fill(80, 50, 10).stroke(95, 50, 25);
        msg1Header = "WARNING";
        msg1Text = "METEOR FIELD AHEAD";
      }
      if (msg1Color == 2) {
        msg1Zone.fill(60, 20, 10).stroke(140, 65, 25);
        msg1Header = "! ALARM !";
        msg1Text = "STAR AT BREACH POINT";
      }
      rquadfill(
        msg1Zone,
        locMsg1TopX,
        locMsg1TopY,
        locMsg1BotX,
        locMsg1BotY,
        rulWidth / 4
      );
    }

    //нижнее уведомление
    {
      msg2Color = dataLog;
      if (msg2Color == 0) {
        msg2Zone.fill(60, 90, 60).stroke(60, 100, 60);
        msg2Header = "TUNNEL";
        msg2Text = "NORMAL STABILITY";
      }
      if (msg2Color == 1) {
        msg2Zone.fill(80, 50, 10).stroke(95, 50, 25);
        msg2Header = "WARNING";
        msg2Text = "STABILITY LOSS";
      }
      if (msg2Color == 2) {
        msg2Zone.fill(60, 20, 10).stroke(165, 50, 25);
        msg2Header = "! ALARM !";
        msg2Text = "TUNNEL COLLAPSING";
      }
      rquadfill(
        msg2Zone,
        locMsg2TopX,
        locMsg2TopY,
        locMsg2BotX,
        locMsg2BotY,
        rulWidth / 4
      );
    }

    //текст на уведомлениях
    {
      prepareMsgText(msg1Zone, msg1Color);
      prepareMsgText(msg2Zone, msg2Color);
      prepareMsgText(msg1ZoneGlow, msg1Color);
      prepareMsgText(msg2ZoneGlow, msg2Color);
      msg1Zone.noStroke();
      msg1ZoneGlow.noStroke();
      msg2Zone.noStroke();
      msg2ZoneGlow.noStroke();

      msg1Zone.textSize(30 / windowScale);
      msg1Zone.text(
        msg1Header,
        locMsg1TopX + msg1Width / 2,
        locMsg1TopY + (msg1Height / 5) * 1.6
      );
      msg1Zone.textSize(20 / windowScale);
      msg1Zone.text(
        msg1Text,
        locMsg1TopX + msg1Width / 2,
        locMsg1TopY + (msg1Height / 5) * 4
      );

      msg2Zone.textSize(30 / windowScale);
      msg2Zone.text(
        msg2Header,
        locMsg2TopX + msg2Width / 2,
        locMsg2TopY + (msg2Height / 5) * 1.6
      );
      msg2Zone.textSize(20 / windowScale);
      msg2Zone.text(
        msg2Text,
        locMsg2TopX + msg2Width / 2,
        locMsg2TopY + (msg2Height / 5) * 4
      );
    }

    if (msg1Color == 2)
      bloomShader(300 / sqrt(windowScale), msg1Zone, msg1Zone, 0, 0, 0.85);
    if (msg1Color == 1)
      bloomShader(300 / sqrt(windowScale), msg1Zone, msg1Zone, 0, 0, 0.85);
    if (msg1Color == 0)
      bloomShader(300 / sqrt(windowScale), msg1Zone, msg1Zone, 0, 0, 0.55);
    if (msg2Color == 2)
      bloomShader(300 / sqrt(windowScale), msg2Zone, msg2Zone, 0, 0, 0.85);
    if (msg2Color == 1)
      bloomShader(300 / sqrt(windowScale), msg2Zone, msg2Zone, 0, 0, 0.85);
    if (msg2Color == 0)
      bloomShader(300 / sqrt(windowScale), msg2Zone, msg2Zone, 0, 0, 0.55);

    //дублирование уведомлений на новые слои
    {
      msg1ZoneGlow.copy(
        msg1Zone,
        0,
        0,
        msg1Zone.width,
        msg1Zone.height,
        0,
        0,
        msg1Zone.width,
        msg1Zone.height
      );
      msg2ZoneGlow.copy(
        msg2Zone,
        0,
        0,
        msg2Zone.width,
        msg2Zone.height,
        0,
        0,
        msg2Zone.width,
        msg2Zone.height
      );
    }

    //текст на подсвеченных уведомлениях
    {
      msg1ZoneGlow.textSize(30 / windowScale);
      if (msg1Color == 1) msg1ZoneGlow.fill(0, 10);
      if (msg1Color == 2) msg1ZoneGlow.fill(0, 150);
      msg1ZoneGlow.text(
        msg1Header,
        locMsg1TopX + msg1Width / 2,
        locMsg1TopY + (msg1Height / 5) * 1.6
      );
      msg1ZoneGlow.textSize(20 / windowScale);
      msg1ZoneGlow.text(
        msg1Text,
        locMsg1TopX + msg1Width / 2,
        locMsg1TopY + (msg1Height / 5) * 4
      );

      msg2ZoneGlow.textSize(30 / windowScale);
      if (msg2Color == 1) msg2ZoneGlow.fill(0, 10);
      if (msg2Color == 2) msg2ZoneGlow.fill(0, 150);
      msg2ZoneGlow.text(
        msg2Header,
        locMsg2TopX + msg2Width / 2,
        locMsg2TopY + (msg2Height / 5) * 1.6
      );
      msg2ZoneGlow.textSize(20 / windowScale);
      msg2ZoneGlow.text(
        msg2Text,
        locMsg2TopX + msg2Width / 2,
        locMsg2TopY + (msg2Height / 5) * 4
      );
    }

    if (msg1Color == 1)
      bloomShader(
        1600 / sqrt(windowScale),
        msg1ZoneGlow,
        msg1ZoneGlow,
        0,
        0,
        0.23
      );
    if (msg2Color == 1)
      bloomShader(
        1600 / sqrt(windowScale),
        msg2ZoneGlow,
        msg2ZoneGlow,
        0,
        0,
        0.23
      );
    if (msg1Color == 2)
      bloomShader(
        1000 / sqrt(windowScale),
        msg1ZoneGlow,
        msg1ZoneGlow,
        0,
        0,
        0.5
      );
    if (msg2Color == 2)
      bloomShader(
        1000 / sqrt(windowScale),
        msg2ZoneGlow,
        msg2ZoneGlow,
        0,
        0,
        0.5
      );

    allGui.image(shapeUnder, shapeTopX, shapeTopY);
    bloomShader(100 / sqrt(windowScale), allGui, allGui, 0, 0, 0.6);
  }

  //свечение экрана
  bloomShader(
    100 / sqrt(windowScale),
    shape,
    bloomCnv,
    shapeTopX,
    shapeTopY,
    1.1
  );

  //моргание кнопок
  {
    if (
      (msg1Color == 1 && frameCount % 40 == 0) ||
      (msg1Color == 2 && frameCount % 25 == 0)
    )
      msg1Glow *= -1;
    if (
      (msg2Color == 1 && (frameCount + 10) % 40 == 0) ||
      (msg2Color == 2 && (frameCount + 10) % 25 == 0)
    )
      msg2Glow *= -1;

    if (msg1Glow == -1) msgZone.image(msg1Zone, msg1ZonePosX, msg1ZonePosY);
    else msgZone.image(msg1ZoneGlow, msg1ZonePosX, msg1ZonePosY);

    msgZone.push();
    msgZone.blendMode(ADD);
    if (msg2Glow == -1) msgZone.image(msg2Zone, msg2ZonePosX, msg2ZonePosY);
    else msgZone.image(msg2ZoneGlow, msg2ZonePosX, msg2ZonePosY);
    msgZone.pop();
  }

  bloomCnv.image(msgZone, 0, 0);
  bloomCnv.blendMode(ADD);
  bloomCnv.image(allGui, 0, 0);
  bloomCnv.blendMode(BLEND);
  pixLinesShader(
    (14 / sqrt(windowScale)) * (1 / windowScale),
    bloomCnv,
    bloomCnv,
    0,
    0
  );

  //image(msgZone, 0, 0);
  blendMode(ADD);
  image(bloomCnv, 0, 0);
  blendMode(BLEND);

  pass1.clear();
  pass2.clear();
  shapeUnder.clear();
  bloomCnv.clear();
  msgZone.clear();

  //frameCount++;
  //if (frameCount==80) fxpreview();
  //requestAnimationFrame(update);
}

function bloomShader(blurAmount, cnvIn, cnvOut, cnvOutTopX, cnvOutTopY, force) {
  pass1.shader(blurH);
  pass2.shader(blurV);

  blurH.setUniform("tex0", cnvIn);
  blurH.setUniform("texelSize", [blurAmount / 100 / w, blurAmount / 100 / h]);
  blurH.setUniform("direction", [0, 1.0]);
  blurH.setUniform("force", force);

  pass1.rect(cnvOutTopX, cnvOutTopY, cnvIn.width, cnvIn.height);

  blurV.setUniform("tex0", pass1);
  blurV.setUniform("texelSize", [blurAmount / 100 / w, blurAmount / 100 / h]);
  blurV.setUniform("direction", [1.0, 0]);
  blurV.setUniform("force", force);

  pass2.rect(cnvOutTopX, cnvOutTopY, cnvIn.width, cnvIn.height);

  cnvOut.image(pass2, cnvOutTopX, cnvOutTopY, cnvIn.width, cnvIn.height);
}

function pixLinesShader(line, cnvIn, cnvOut, cnvOutTopX, cnvOutTopY) {
  plines.shader(pixLines);

  pixLines.setUniform("tex0", cnvIn);
  pixLines.setUniform("pix", line);

  plines.rect(0, 0, w, h);

  cnvOut.image(plines, 0, 0, w, h);
}

function centerCanvas() {
  var x = (windowWidth - w) / 2;
  var y = (windowHeight - h) / 2;
  cnv.position(x, y);
}

let delay;

function windowResized() {
  clearTimeout(delay); // clear current timer if any
  delay = setTimeout(function () {
    // new timer
    w = windowWidth - 1;
    h = windowHeight - 1;
    resizeCanvas(w, h, false);
    centerCanvas();

    calcAllCoords();
    resizeCanvases();

    guiCalculated = 0;
  }, 100);
}

function createAllCanvases() {
  bloomCnv = createGraphics(w, h);

  shape = createGraphics(shapeWidth, shapeHeight);
  shapeUnder = createGraphics(shapeWidth, shapeHeight);
  allGui = createGraphics(w, h);
  pLinesCnv = createGraphics(w, h);
  msgZone = createGraphics(w, h);
  msg1Zone = createGraphics(
    msg1BotX - msg1TopX + 100,
    msg1BotY - msg1TopY + 100
  );
  msg2Zone = createGraphics(
    msg2BotX - msg2TopX + 100,
    msg2BotY - msg2TopY + 100
  );
  msg1ZoneGlow = createGraphics(
    msg1BotX - msg1TopX + 100,
    msg1BotY - msg1TopY + 100
  );
  msg2ZoneGlow = createGraphics(
    msg2BotX - msg2TopX + 100,
    msg2BotY - msg2TopY + 100
  );
  radarZone = createGraphics(radarInWidth, radarInHeight);
  dataLogZone = createGraphics(dataLogInWidth, dataLogInHeight);

  shape.translate(shapeWidth / 2, shapeHeight / 2);
  shapeUnder.translate(shapeWidth / 2, shapeHeight / 2);
}

function createAllWEBGLCanvases() {
  pass1 = createGraphics(w, h, WEBGL);
  pass2 = createGraphics(w, h, WEBGL);
  plines = createGraphics(w, h, WEBGL);

  pass1.noStroke();
  pass2.noStroke();
  pass2.strokeWeight(20);
  plines.noStroke();
}

function resizeCanvases() {
  killCanvas(allGui);
  killCanvas(msgZone);
  killCanvas(msg1Zone);
  killCanvas(msg2Zone);
  killCanvas(msg1ZoneGlow);
  killCanvas(msg2ZoneGlow);
  killCanvas(bloomCnv);
  killCanvas(shape);
  killCanvas(shapeUnder);
  killCanvas(radarZone);
  killCanvas(dataLogZone);
  killCanvas(pLinesCnv);

  createAllCanvases();
}

function killCanvas(cnvs) {
  cnvs.canvas.width = 0;
  cnvs.canvas.height = 0;
  cnvs.canvas.remove();
}

function calcAllCoords() {
  {
    rulWidth = h / 20 / windowScale;
    outWidth = 20 / windowScale;

    shapeTopX = 0 + rulWidth + outWidth; //w / 4 + rulWidth;
    shapeTopY = 0 + rulWidth + outWidth;
    shapeBotX = w - rulWidth - outWidth;
    shapeBotY = h * 0.618;

    shapeWidth = shapeBotX - shapeTopX;
    shapeHeight = shapeBotY - shapeTopY;

    radarTopX = shapeTopX - rulWidth;
    radarTopY = shapeBotY + rulWidth + outWidth / 2;
    radarBotX = w / 3 + (w / 50) * (w / h) - outWidth / 4;
    radarBotY = h - outWidth;

    radarInTopX = radarTopX + outWidth / 2;
    radarInTopY = radarTopY + (outWidth / 4) * 7;
    radarInBotX = radarBotX - outWidth / 2;
    radarInBotY = radarBotY - outWidth / 2;

    radarInWidth = radarInBotX - radarInTopX;
    radarInHeight = radarInBotY - radarInTopY;

    dataLogTopX = (w / 3) * 2 - (w / 50) * (w / h) + outWidth / 4;
    dataLogTopY = shapeBotY + rulWidth + outWidth / 2;
    dataLogBotX = w - outWidth;
    dataLogBotY = h - outWidth;

    dataLogInTopX = dataLogTopX + outWidth / 2;
    dataLogInTopY = dataLogTopY + (outWidth / 4) * 7;
    dataLogInBotX = dataLogBotX - outWidth / 2;
    dataLogInBotY = dataLogBotY - outWidth / 2;

    dataLogInWidth = dataLogInBotX - dataLogInTopX;
    dataLogInHeight = dataLogInBotY - dataLogInTopY;

    msg1TopX = w / 3 + (w / 50) * (w / h) + outWidth / 4;
    msg1TopY = radarTopY;
    msg1BotX = (w / 3) * 2 - (w / 50) * (w / h) - outWidth / 4;
    msg1BotY = msg1TopY + ((radarBotY - msg1TopY) * 0.618) / 2 - outWidth / 4;

    msg2TopX = msg1TopX;
    msg2TopY = msg1BotY + outWidth / 2;
    msg2BotX = msg1BotX;
    msg2BotY = msg2TopY + (msg1BotY - msg1TopY);

    speedTopX = msg1TopX;
    speedTopY = msg2BotY + outWidth * 2;
    speedBotX = msg1TopX + (msg1BotX - msg1TopX) / 2 - outWidth / 4;
    speedBotY = radarBotY;

    fuelTopX = speedBotX + outWidth / 2;
    fuelTopY = speedTopY;
    fuelBotX = msg1BotX;
    fuelBotY = radarBotY;

    msg1Width = msg1BotX - msg1TopX;
    msg1Height = msg1BotY - msg1TopY;

    msg2Width = msg2BotX - msg2TopX;
    msg2Height = msg2BotY - msg2TopY;

    msg1ZonePosX = msg1TopX - 50;
    msg1ZonePosY = msg1TopY - 50;

    msg2ZonePosX = msg2TopX - 50;
    msg2ZonePosY = msg2TopY - 50;

    locMsg1TopX = msg1TopX - msg1ZonePosX;
    locMsg1TopY = msg1TopY - msg1ZonePosY;
    locMsg1BotX = msg1BotX - msg1ZonePosX;
    locMsg1BotY = msg1BotY - msg1ZonePosY;

    locMsg2TopX = msg2TopX - msg2ZonePosX;
    locMsg2TopY = msg2TopY - msg2ZonePosY;
    locMsg2BotX = msg2BotX - msg2ZonePosX;
    locMsg2BotY = msg2BotY - msg2ZonePosY;

    locShapeTopX = (-1 * shapeWidth) / 2;
    locShapeTopY = (-1 * shapeHeight) / 2;
    locShapeBotX = shapeWidth / 2;
    locShapeBotY = shapeHeight / 2;
  }

  init_streams = dataLogInWidth / map(tunSpeed, 6, 13, 2, 4);
  streams = [];

  for (let i = 0; i < init_streams; i++) {
    let x = round(random2(0, dataLogInWidth / 4)) * 4,
      y = round(random2(0, dataLogInHeight)),
      s = 3,
      a = random2((13 - tunSpeed + 6) / 2, ((13 - tunSpeed + 6) / 3) * 2);
    let m = 0;
    if (dataLog == 1) if (random2(0, 100) > 90) m = 1;
    if (dataLog == 2)
      if (random2(0, 100) > 65) m = 2;
      else m = 1;
    streams.push(new Stream(x, y, s, a, m));
  }
}

function rquad(layer, x1, y1, x2, y2, r) {
  layer
    .line(x1, y1 + r, x1, y2 - r)
    .arc(x1 + r, y2 - r, r * 2, r * 2, HALF_PI, HALF_PI * 2)
    .line(x1 + r, y2, x2 - r, y2)
    .arc(x2 - r, y2 - r, r * 2, r * 2, 0, HALF_PI)
    .line(x2, y2 - r, x2, y1 + r)
    .arc(x2 - r, y1 + r, r * 2, r * 2, HALF_PI * 3, HALF_PI * 4)
    .line(x1 + r, y1, x2 - r, y1)
    .arc(x1 + r, y1 + r, r * 2, r * 2, HALF_PI * 2, HALF_PI * 3);
}

function rquadfill(layer, x1, y1, x2, y2, r) {
  layer.push();
  layer
    .noStroke()
    .beginShape()
    .vertex(x1, y1 + r)
    .vertex(x1, y2 - r)
    .vertex(x1 + r, y2)
    .vertex(x2 - r, y2)
    .vertex(x2, y2 - r)
    .vertex(x2, y1 + r)
    .vertex(x2 - r, y1)
    .vertex(x1 + r, y1)
    .endShape(CLOSE);
  layer.pop();
  rquad(layer, x1, y1, x2, y2, r);
}

function prepareMsgText(layer, msgColor) {
  layer.textFont(font1);
  layer.textAlign(CENTER, CENTER);
  layer.textStyle(BOLD);
  if (msgColor == 0) layer.fill(20);
  if (msgColor == 1) layer.fill(10, 8, 6);
  if (msgColor == 2) layer.fill(80);
  if (msgColor == 3) layer.fill(60, 100, 60, 200);
}

function getRarity(weight, list) {
  let chance = random2(1, weight),
    counter = 0;
  for (let key in list) {
    counter += list[key].weight;
    if (chance <= counter) {
      return list[key];
    }
  }
}

let random2 = (min, max) => Math.floor(fxrand() * (max - min + 1)) + min;
//let random2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
