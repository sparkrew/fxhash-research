let noiseScaleX = 0.0001;
let noiseScaleY = 0.0001;
let noiseAngleRange = 450;

let originCanvasWidth = 1500;
let originCanvasHeight = 2100;

// 最終的畫布大小
let canvasWidth = 1500;
let canvasHeight = 2100;

let _mainCanvas;

function setupCanvasRatio() {
  let originRatio = originCanvasWidth / originCanvasHeight;
  let screenRatio = windowWidth / windowHeight;
  console.log(originRatio);
  console.log(screenRatio);

  if (screenRatio > originRatio) {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originRatio;
  }
  else {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originRatio;
  }
}

async function setup() {

  console.log(fxhash);
  noiseSeed(fxRandom(-10000, 10000));

  setupCanvasRatio()

  _mainCanvas = createGraphics(originCanvasWidth, originCanvasHeight);
  createCanvas(canvasWidth, canvasHeight);

  let baseHue = fxRandom(0, 360);

  let isBriMode = false;
  let isDark1Mode = false;
  let isDark2Mode = false;
  let isDark3Mode = false;
  let isDark4Mode = false;
  let isDark5Mode = false;

  if (fxRandom(0, 1) <= 0.1) {
    isBriMode = true;

    noiseScaleX = 0.0001;
    noiseScaleY = 0.0001;
    noiseAngleRange = 180;

    _mainCanvas.colorMode(HSB);
    let colorHue = baseHue;
    let colorSat = fxRandom(6, 13);
    let colorBri = fxRandom(80, 100);
    _mainCanvas.colorHue += 30;
    if (colorHue > 360)
      colorHue -= 360;

    _mainCanvas.background(colorHue, colorSat, colorBri);

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 5.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(50, 100);

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1, 100), 1);

      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(50, 150); // 長度
      let transp = fxRandom(0.15, 15);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 1500; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 150); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue + fxRandom(-20, 20);
      let colorSat = fxRandom(30, 60);
      let colorBri = fxRandom(55, 95);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 0, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }
  else if (fxRandom(0, 1) <= 0.25) {
    _mainCanvas.background(0);
    isDark1Mode = true;
    noiseScaleX = 0.01;
    noiseScaleY = 0.01;
    noiseAngleRange = 20;

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 5.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(60, 100);
      _mainCanvas.colorHue -= 30;
      if (colorHue > 360)
        colorHue -= 360;


      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1.5, 150), 1.5);
      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(75, 150); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 2000; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 150); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(20, 100);
      let colorBri = fxRandom(0, 30);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 150, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }

  else if (fxRandom(0, 1) <= 0.4) {
    _mainCanvas.background(0);
    isDark2Mode = true;
    noiseScaleX = 0.0001;
    noiseScaleY = 0.0001;
    noiseAngleRange = 90;

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 7.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(60, 100);
      _mainCanvas.colorHue -= 30;
      if (colorHue > 360)
        colorHue -= 360;


      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1.5, 150), 1.5);

      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(75, 150); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 2000; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 150); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(20, 100);
      let colorBri = fxRandom(0, 30);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 150, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }

  else if (fxRandom(0, 1) <= 0.55) {
    _mainCanvas.background(0);
    isDark3Mode = true;
    noiseScaleX = 0.0001;
    noiseScaleY = 0.0001;
    noiseAngleRange = 450;

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 7.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(60, 100);
      _mainCanvas.colorHue -= 30;
      if (colorHue > 360)
        colorHue -= 360;


      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1.5, 150), 1.5);

      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(75, 150); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 2000; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 150); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(20, 100);
      let colorBri = fxRandom(0, 30);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 150, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }

  else if (fxRandom(0, 1) <= 0.7) {
    _mainCanvas.background(0);
    isDark4Mode = true;
    noiseScaleX = 0.0001;
    noiseScaleY = 0.0001;
    noiseAngleRange = 450;

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 7.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(60, 100);
      _mainCanvas.colorHue -= 30;
      if (colorHue > 360)
        colorHue -= 360;


      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1.5, 150), 1.5);

      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(75, 150); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 2000; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 200); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(20, 100);
      let colorBri = fxRandom(0, 30);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 150, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }

  else if (fxRandom(0, 1) <= 0.85) {
    _mainCanvas.background(0);
    isDark5Mode = true;
    noiseScaleX = 0.005;
    noiseScaleY = 0.005;
    noiseAngleRange = 20;

    let counter = 0;
    for (let i = 0; i < 15000; i++) // 最底的點點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 7.5); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(0, 100);
      let colorBri = fxRandom(60, 100);
      _mainCanvas.colorHue -= 30;
      if (colorHue > 360)
        colorHue -= 360;


      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      _mainCanvas.circle(xPos, yPos, steps, transp);
      drawFlowLine(xPos, yPos, fxRandom(1.5, 150), 1.5);

      if (counter++ % 1000 == 0)
        await sleep(1);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) //第二層的線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(75, 150); // 長度
      let transp = fxRandom(0.15, 1.5);

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(50, 100);
      let colorBri = fxRandom(60, 100);


      _mainCanvas.fill(colorHue, colorSat, colorBri, 1);
      drawFlowLine(xPos, yPos, steps, transp);
    }
    await sleep(1);

    for (let i = 0; i < 2000; i++) //主視覺圈圈
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1, 100); // 長度

      _mainCanvas.colorMode(HSB);
      let colorHue = baseHue;
      let colorSat = fxRandom(20, 100);
      let colorBri = fxRandom(0, 30);

      _mainCanvas.circle(xPos, yPos, fxRandom(0, 75));

      _mainCanvas.noStroke();
      _mainCanvas.fill(colorHue, colorSat, colorBri);
      drawFlowLine(xPos, yPos, steps, fxRandom(1.5, 30));
    }
    await sleep(1);

    for (let i = 0; i < 3000; i++) // 裝飾白線
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(15, 150); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.fill(0, 0, 150, 0.5);
      drawFlowLine(xPos, yPos, steps, 1.5);
    }
    await sleep(1);

    for (let i = 0; i < 1000; i++) // 裝飾白點
    {
      let xPos = fxRandom(0, originCanvasWidth);
      let yPos = fxRandom(0, originCanvasHeight);
      let steps = fxRandom(1.5, 15); // 長度

      _mainCanvas.colorMode(HSB);

      _mainCanvas.stroke(0, 0, 150, fxRandom(0.1, 0.9));
      _mainCanvas.circle(xPos, yPos, steps, 1.5);
    }
    await sleep(1);
  }

  fxpreview();
}


function drawFlowLine(_startX, _startY, _steps, _radius) {
  let x = _startX;
  let y = _startY;

  for (let i = 0; i < _steps; i++) {
    _mainCanvas.circle(x, y, _radius);

    let noiseValue = noise(x * noiseScaleX, y * noiseScaleY) * noiseAngleRange;

    x += sin(noiseValue);
    y += cos(noiseValue);
  }

}

function draw() {
  image(_mainCanvas, 0, 0, width, height);
}

function keyPressed (e)
{
  if(e.key == 's' || e.key == 'S')
  {
    let fileName = 'HABABI-' + fxhash + '.png';
    save(_mainCanvas, fileName);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
