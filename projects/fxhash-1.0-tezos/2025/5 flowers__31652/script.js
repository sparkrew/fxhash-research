let particles = [];
let numParticles = 40;
let palette, bgPalette;
let flowersLayer;
let coveredPixels = 0;
let stopThreshold;

function setup() {
  createCanvas(800, 800);
  // Инициализация выполняется только один раз при загрузке
  flowersLayer = createGraphics(width, height);
  flowersLayer.clear();

  bgPalette = [
    color(200, 220, 200, 20), color(180, 210, 180, 15), color(160, 200, 160, 10),
    color(140, 190, 140, 5), color(120, 180, 120, 3)
  ];

  palette = [
    color(255, 99, 71), color(144, 238, 144), color(255, 215, 0),
    color(173, 216, 230), color(221, 160, 221)
  ];

  stopThreshold = width * height * 0.4;
}

function draw() {
  for (let p of particles) {
    p.move();
    p.display();
  }
  image(flowersLayer, 0, 0);
}

class Particle {
  constructor(x, y, col, size) {
    this.pos = createVector(x, y);
    this.color = col;
    this.size = size;
  }

  move() {
    let angle = noise(this.pos.x * 0.01, this.pos.y * 0.01, frameCount * 0.03) * TWO_PI * 4;
    let vel = p5.Vector.fromAngle(angle).mult($fx.rand() * 2 + 0.5);
    this.pos.add(vel);
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    coveredPixels += this.size;
  }
}

function drawFlowers() {
  for (let i = 0; i < 5; i++) {
    let flowerColor = palette[Math.floor($fx.rand() * palette.length)];
    let x = $fx.rand() * width * 0.6 + width * 0.2;
    let y = $fx.rand() * height * 0.6 + height * 0.2;
    drawFlower(x, y, flowerColor, i);
  }
}

function drawFlower(x, y, baseColor, flowerIndex) {
  let petalCount = 5;
  let petalSize = $fx.rand() * 30 + 100;
  flowersLayer.push();
  flowersLayer.translate(x, y);

  for (let i = 0; i < petalCount; i++) {
    let angle = (TWO_PI / petalCount) * i;
    let xOff = cos(angle) * petalSize * 0.5;
    let yOff = sin(angle) * petalSize * 0.5;
    drawWatercolorPetal(flowersLayer, xOff, yOff, petalSize, baseColor);
  }

  drawFlowerCenter(flowersLayer, 0, 0, petalSize * 0.2, flowerIndex); 
  flowersLayer.pop();
}

function drawWatercolorPetal(layer, x, y, size, baseColor) {
  layer.push();
  layer.translate(x, y);

  let numLayers = 10;
  for (let i = 0; i < numLayers; i++) {
    let shade = lerpColor(baseColor, color(255, 255, 255, 100), i / numLayers);
    shade.setAlpha(70 - i * 7);
    layer.fill(shade);
    layer.noStroke();

    layer.beginShape();
    for (let j = 0; j < 10; j++) {
      let angle = map(j, 0, 10, 0, PI) + ($fx.rand() * 0.2 - 0.1);
      let r = size * 0.4 + sin(angle) * size * 0.3 + ($fx.rand() * 10 - 5);
      let xOff = cos(angle) * r + ($fx.rand() * 4 - 2);
      let yOff = sin(angle) * r + ($fx.rand() * 4 - 2);
      layer.vertex(xOff, yOff);
    }
    layer.endShape(CLOSE);
  }
  layer.pop();
}

function drawFlowerCenter(layer, x, y, size, flowerIndex) {
  layer.push();
  layer.translate(x, y);
  layer.noStroke();

  let baseColor = color(0, 0, 0);
  let numLayers = 10;
  for (let i = 0; i < numLayers; i++) {
    let shade = lerpColor(baseColor, color(200, 200, 200, 50), i / numLayers);
    shade.setAlpha(70 - i * 7);
    layer.fill(shade);

    layer.beginShape();
    for (let j = 0; j < 10; j++) {
      let angle = map(j, 0, 10, 0, TWO_PI) + ($fx.rand() * 0.2 - 0.1);
      let noiseOffset = noise(flowerIndex * 10 + j * 0.1 + i * 0.05);
      let r = size * (0.5 + noiseOffset * 0.5) + sin(angle) * size * 0.3 + ($fx.rand() * 10 - 5);
      let xOff = cos(angle) * r + ($fx.rand() * 4 - 2);
      let yOff = sin(angle) * r + ($fx.rand() * 4 - 2);
      layer.vertex(xOff, yOff);
    }
    layer.endShape(CLOSE);
  }

  layer.pop();
}

// Функция для генерации композиции
function generateComposition() {
  $fx.rand.reset(); // Сброс генератора случайных чисел для детерминированности
  background(255, 248, 240); // Очистка фона
  flowersLayer.clear(); // Очистка слоя с цветами
  particles = []; // Очистка частиц
  coveredPixels = 0; // Сброс счетчика покрытия

  // Генерация новых частиц
  for (let i = 0; i < numParticles; i++) {
    let col = bgPalette[Math.floor($fx.rand() * bgPalette.length)];
    let size = $fx.rand() * 4 + 2;
    particles.push(new Particle($fx.rand() * width, $fx.rand() * height, col, size));
  }

  drawFlowers(); // Отрисовка новой композиции
}

// Обработка клика мыши (оставлена для перегенерации)
function mousePressed() {
  generateComposition();
}

// Обработка двойного клика для сохранения
function doubleClicked() {
  saveCanvas('5Fl', 'png');
}

// Обработка нажатия клавиши
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('5Fl', 'png');
  }
}

// Инициализация для fxhash
try {
  console.log("fxhash:", $fx);
  console.log("fxrand():", $fx.rand());
  setup();
  generateComposition(); // Начальная композиция генерируется сразу при запуске
  console.log("Press S or double-click to save as PNG.");
} catch (error) {
  console.error("Error initializing fxhash project:", error);
}

