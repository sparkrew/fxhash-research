/**
 * @property {number} buildingHue - 建築物的色相值(0-360)
 * @property {bool} isNight - 是否為晚上
 * @property {bool} isEclipse - 是否為全蝕
 * @property {bool} isShootingStar - 是否有流星
 */
let buildingHue, isNight, isEclipse, isShootingStar;

let drawWidth, drawHeight, drawRatio;
let canvasWidth, canvasHeight, canvasRatio;
let densityRatio;
let lastNoiseX, lastNoiseY;

/**
 * 主要畫布
 */
let mainCanvas

/**
 * 保存上傳給Fxhash的屬性參數
 */
let featureObject={};

/**
 * 定義不同場景出現的機率設置。
 * 
 * @type {Object} probabilities - 各種機率集合。
 * @property {number} night - 夜晚出現的機率，設置0.2為20%。
 * @property {number} moon - 月亮出現的概率， 0.4 代表 40%。
 * @property {number} shootingStar - 流星出現的概率， 0.3 代表 30%。
 * @property {number} windowLightsOn - 晚上窗戶亮燈的機率 0.5 代表 50%。
 * @property {number} eclipse - 月蝕或日蝕出現的機率 0.05 代表 5%。
 */
let probabilities = {
  night:0.2,
  moon: 0.4, 
  shootingStar: 0.3, 
  windowLightsOn: 0.5, 
  eclipse: 0.05,
}

function setup() {

  initFeatures();
  initVariable();
  createCanvas(canvasWidth, canvasHeight);
  
  drawSky();
  drawBuildings();
  drawFrame();
}

/**
 * 初始化屬性變數
 * 為符合Fxhash屬性設定
 */
function initFeatures() {
  isEclipse = fxRandom() < probabilities.eclipse;
  isNight = fxRandom() < probabilities.night;
  
  if (isNight) {
    probabilities.moon = isEclipse ? 1 : probabilities.moon;
    isShootingStar = fxRandom() < probabilities.shootingStar;
  }

  //白天 or 黑夜
  featureObject["Time of Day"] = isNight ? "Nighttime" : "Daytime";

  if (isEclipse) {
    //日蝕 or 月蝕
    featureObject["Eclipse Event"] = isNight ? "LunarEclipse" : "SolarEclipse";
  }
  else {
    //一般天空
    featureObject["Eclipse Event"] = "Normal";
  }

  //流星
  if (isNight && isShootingStar) {
    featureObject["Meteoric Event"] = "Meteoric";
  }
  console.log('isEclipse = ' + (isEclipse?"YES":"NO"));
  console.log("isNight = " + (isNight ? "YES" : "NO"));
  console.log("isShootingStar = " + (isShootingStar ? "YES" : "NO"));
  console.log(featureObject);
  $fx.features(featureObject);
}

/**
 * 初始化各個變數們
 */
function initVariable() {

  drawWidth = 900,
  drawHeight = 700,
  lastNoiseX = 0;
  lastNoiseY = 0;

  noiseSeed(fxRandom(-1000000, 1000000));
  colorMode(HSB);

  setupRatio();
  setupMainCanvas();
}

/**
 * 初始化畫面比例
 */
function setupRatio () {

  densityRatio = 1;
  windowRatio = windowWidth / windowHeight;
  drawRatio = drawWidth / drawHeight;

  if(drawRatio < windowRatio)
  {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * drawRatio;
  }
  else
  {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / drawRatio;
  }

  let url = new URL(window.location.href);
  let inputRatio = url.searchParams.get('scale');
  inputRatio = float(inputRatio);

  if( isNaN(inputRatio) == true )
  {
    densityRatio = canvasWidth / drawWidth;
  }
  else
  {
    densityRatio = inputRatio;
  }
}

/**
 * 主要畫布初始設定
 */
function setupMainCanvas() {
  mainCanvas = createGraphics(drawWidth, drawHeight);
  mainCanvas.pixelDensity(densityRatio);
  mainCanvas.colorMode(HSB);
}

function draw() {
  image(mainCanvas, 0, 0, width, height);
}

/**
 * 將random改為fahash的隨機方法
 * @param {number} _from 
 * @param {number} _to 
 * @returns 
 */
function fxRandom(_from = 0, _to = 1)
{
  return lerp(_from, _to, $fx.rand());
}

/**
 * 繪製外框
 * 如果是晚上，會隨機生成不同顏色的框，白天為金色框
 */
function drawFrame() {

  let frameHue, frameSat, frameBri;

  if (isNight) {
    frameHue = fxRandom(120, 180);
    frameSat = fxRandom(20, 40);
    frameBri = fxRandom(20, 40);
  }
  else if (isEclipse) { // 日食或月食的框顏色
    frameHue = fxRandom(0, 30);
    frameSat = fxRandom(80, 100);
    frameBri = fxRandom(50, 70);
  }
  else {  // 白天的框顏色
    // 繪製金色邊緣
    frameHue = 45; // 金色的色相
    frameSat = 100;
    frameBri = 100;
  }

  mainCanvas.fill(frameHue, frameSat, frameBri);
  
  let thickness = 20;
  mainCanvas.noStroke();
  mainCanvas.rect(0, 0, thickness, mainCanvas.height);
  mainCanvas.rect(mainCanvas.width - thickness, 0, thickness, mainCanvas.height);
  mainCanvas.rect(0, 0, mainCanvas.width, thickness);
  mainCanvas.rect(0, mainCanvas.height - thickness, mainCanvas.width, thickness);
}

/**
 * 繪製天空，白天與黑夜有不一樣的元素與色彩
 */
function drawSky() {
  // 繪製星星或雲彩
  for (let x = 0; x < mainCanvas.width; x ++) {
    for (let y = 0; y < mainCanvas.height; y ++) {
      let noiseX = x * 0.01;
      let noiseY = y * 0.01;
      let lerpAmount = 0.5;

      let n = noise(
        lerp(lastNoiseX, noiseX, lerpAmount),
        lerp(lastNoiseY, noiseY, lerpAmount)
      );
      lastNoiseX = noiseX;
      lastNoiseY = noiseY;
      let dotHue, dotSat, dotBri, bgHue;
      
      mainCanvas.noStroke();

      if (isNight) {
        dotSize = fxRandom(0, 2);

        dotHue = isEclipse ? map(n, 0, 1, 190, 360) : map(n, 0, 1, 190, 260);
        dotSat = isEclipse ? 100 : map(n, 0, 1, 30, 100);
        dotBri = isEclipse ? n * 30 : map(n, 0, 1, 25, 75);
        dotAlpha = 1;

        mainCanvas.stroke(dotHue, dotSat, dotBri, dotAlpha);
        mainCanvas.point(x, y);

      } else {
        // 白天雲彩點的大小範圍加大
        dotSize = fxRandom(5, 30);

        let hueOffset = fxRandom(-20, 20);

        // 為每個雲彩點隨機選擇一個基礎色相
        let cloudBaseHue = fxRandom(150, 240);

        // 在基礎色相的基礎上,為每個雲彩點添加一個小的色相偏移
        dotHue = cloudBaseHue + fxRandom(-50, 50) + hueOffset;

        dotSat = map(n, 0, 1, 10, 60);
        dotBri = fxRandom(60, 100);
        dotAlpha = fxRandom(0.4, 0.8);

        // 日全蝕的天空變化
        if (isEclipse) {
          bgHue = 60;
          dotSat = 100;
          dotBri = 30;
        }

        mainCanvas.fill(dotHue, dotSat, dotBri, dotAlpha);
        mainCanvas.noStroke();
        mainCanvas.circle(x, y, dotSize);
      }
    }
  }

  drawStars();
  drawMoon();
  drawSun();
}

/**
 * 畫建築物
 */
function drawBuildings() {
  let detail = 0.02; 
  let buildingHeight;
  let x = 0; 
  let y = 0;

  while (x < mainCanvas.width) {
    let noiseVal = noise(x * detail, y);
    let buildingWidth = map(noise(x * 0.02), 0, 1, 20, 100);
    let buildingMargin = fxRandom(-20, 30); 

    buildingHeight = map(noiseVal, 0, 1, mainCanvas.height / 3, mainCanvas.height * 3/4);
    
    buildingHue = fxRandom(0, 360); 

    // 主建物
    mainCanvas.fill(buildingHue, 60, 80); 
    mainCanvas.rect(x + buildingMargin, mainCanvas.height - buildingHeight, buildingWidth, buildingHeight);

    // 門
    mainCanvas.fill(buildingHue, 80, 60); 
    mainCanvas.rect(x + buildingMargin, mainCanvas.height-buildingHeight/8, buildingWidth/4, buildingHeight/8);

    // 建物陰影
    mainCanvas.fill(buildingHue, 80, 40); 
    mainCanvas.rect(x + buildingMargin + buildingWidth * 0.7, mainCanvas.height - buildingHeight, buildingWidth * 0.3, buildingHeight);

    // 高光
    mainCanvas.fill(buildingHue, 100, 80); 
    mainCanvas.rect(x + buildingMargin, mainCanvas.height - buildingHeight, buildingWidth * 0.1, buildingHeight);

    // 窗戶
    drawWindows(x + buildingMargin, mainCanvas.height - buildingHeight, buildingWidth, buildingHeight);

    x += buildingWidth + buildingMargin; 

    y += 0.1;
  }
}

/**
 * 繪製窗戶
 * @param {number} x - Ｘ
 * @param {number} y - Ｙ
 * @param {number} buildingWidth - 建物寬度
 * @param {number} buildingHeight - 建物寬高度
 */
function drawWindows(x, y, buildingWidth, buildingHeight) {
  let windowWidth = 3; 
  let windowHeight = 6; 

  // 計算樓層數
  let floors = floor(buildingHeight / (windowHeight * 2 + 5)); 

  for(let f = 0; f < floors; f++) {
    for (let wx = x; wx < x + buildingWidth; wx += windowWidth * 2) {
      for (let wy = y + f * (windowHeight * 2 + 5); wy < y + (f+1) * (windowHeight * 2 + 5); wy += windowHeight * 2) {

        // 使用與建築物相同的色相來繪製窗戶
        let windowHue = buildingHue + fxRandom( -50, 50); 
        
        let windowSaturation, windowBrightness;
        if (isNight) {
          //有機率的開燈
          let isLightOn = fxRandom() < probabilities.windowLightsOn; 
          windowHue = fxRandom(45, 60); // 夜晚窗戶顏色（黃色到橙色）

          // “開燈”的窗戶更亮
          windowSaturation = isLightOn ? 120 : 50; 

          // “開燈”的窗戶飽和度高
          windowBrightness = isLightOn ? 100 : 30; 

        } else {

          //白天窗戶的色相變化
          windowHue = fxRandom(50, 70); // 白天窗戶可以有些許色相變化

          // 白天窗戶飽和度比較低
          windowSaturation = fxRandom(0, 30); 

          // 比較暗的窗戶
          windowBrightness = fxRandom(40, 60); 
        }
        mainCanvas.fill(windowHue, windowSaturation, windowBrightness);

        // 開始畫窗戶
        mainCanvas.rect(wx, wy, windowWidth, windowHeight); 
      }
    }
  }
}

/**
 * 繪製月亮
 */
function drawMoon() {

  // 如果不是夜晚，則不繪製月亮
  if (!isNight) return;

  //要符合月亮出現的機率
  if (fxRandom() >= probabilities.moon) return;

  let moonSize = fxRandom(50, 200); 

  let x = fxRandom(mainCanvas.width);

  let minHeight = mainCanvas.height * 0.6; 
  let maxHeight = mainCanvas.height * 0.3; 

  // 隨機決定月亮的高度
  let y = fxRandom(maxHeight, minHeight); 

  //月全蝕
  if (isEclipse) {
    mainCanvas.fill(0, 100, 60); // 設置月全食時月亮的顏色為暗紅色
    mainCanvas.ellipse(x, mainCanvas.height * 0.3, 150, 150); 
  }
  else {

    // 根據高度調整月亮的色相，越低越偏紅
    let moonHue = map(y, maxHeight, minHeight, 55, 50);
    // 繪製月亮本體（圓形）
    mainCanvas.fill(moonHue, 80, 90);
    mainCanvas.ellipse(x, y, moonSize, moonSize); 
  }
}

/**
 * 繪製星星
 */
function drawStars() {

  // 如果不是夜晚，則不繪製星星
  if (!isNight) return;

  let starCount = fxRandom(100, 300); 

  for (let i = 0; i < starCount; i++) {
    let starX = fxRandom(mainCanvas.width);
    let starY = fxRandom(mainCanvas.height / 2);

    let starSize = fxRandom(1, 3);
    let starHue = fxRandom(55, 65); 
    let starBrightness = fxRandom(70, 100);

    mainCanvas.fill(starHue, 80, starBrightness);
    mainCanvas.noStroke();
    mainCanvas.circle(starX, starY, starSize);
  }

  //有機率的繪製一顆流星
  if (isShootingStar) {
    let shootingStarX = fxRandom(mainCanvas.width);
    let shootingStarY = fxRandom(mainCanvas.height / 2);
    let shootingStarAngle = fxRandom(0.45, 0.7); 
    drawShootingStar(shootingStarX, shootingStarY, shootingStarAngle);
  }
}

/**
 * 畫流星
 * @param {number} x - Ｘ 
 * @param {number} y - Ｙ
 * @param {number} angle - 流星的角度
 */
function drawShootingStar(x, y, angle) {
  let tailLength = fxRandom(60, 200); 
  for (let i = 0; i < tailLength; i++) {
    let tailX = x + cos(angle) * i + noise(x * 0.01, y * 0.01) * 20; 
    let tailY = y + sin(angle) * i;
    let tailSize = map(i, 0, tailLength, 1, 5); 
    mainCanvas.fill(60, 0, 100, map(i, 0, tailLength, 100, 0));
    mainCanvas.noStroke();
    mainCanvas.circle(tailX, tailY, tailSize);
  }
}

/**
 * 繪製太陽
 */
function drawSun() {

  // 如果是夜晚，則不繪製太陽
  if (isNight) return;

  let size = fxRandom(60, 150)

  let x = fxRandom(mainCanvas.width);

  let minHeight = mainCanvas.height * 0.5;
  let maxHeight = mainCanvas.height * 0.2;
  let y = fxRandom(maxHeight, minHeight); 

  // 根據高度調整太陽的色相，越低越偏紅
  let sunHue = map(y, maxHeight, minHeight, 60, 30);

  mainCanvas.fill(sunHue, 100, 100); // 太陽顏色設置為明亮的黃色
  mainCanvas.ellipse(x, y, size, size); // 繪製太陽

  //日全蝕
  if (isEclipse) {
    mainCanvas.fill(0, 0, 20); // 日全食的時候太陽是深灰色
    mainCanvas.ellipse(x, y, size, size); 
  }
}

/**
 * 鍵盤事件, p5內建的函式
 * 讓用戶點擊s可儲存檔案 
 */
function keyPressed (e) {
  console.log(e);
  if(e.key == 's' || e.key == 'S')
  {
    let fileName = "Gradient-and-Textures-" + $fx.hash + ".png";
    save(mainCanvas, fileName);
  }
}