let shapes = [];
let palette;
let noiseLayer;

const GOLDEN_RATIO = 1.618033988749895;
const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21];

const RHYTHM_PATTERNS = {
  fibonacci: {
    spacing: FIBONACCI,
    scale: FIBONACCI.map(n => 1 / n),
    rotation: FIBONACCI.map(n => n * 18)
  },
  golden: {
    spacing: Array(6).fill().map((_, i) => Math.pow(GOLDEN_RATIO, i)),
    scale: Array(6).fill().map((_, i) => 1 / Math.pow(GOLDEN_RATIO, i)),
    rotation: Array(6).fill().map((_, i) => i * GOLDEN_RATIO * 25)
  }
};

const DYNAMIC_RULES = {
  attractionRadius: 400,
  repulsionRadius: 200,
  attractionStrength: 0.006,
  repulsionStrength: 0.02,
  synchronizationRate: 0.03,
  mouseInfluence: 0.02
};

try {
  console.log("fxhash:", $fx);
  console.log("$fx.rand():", $fx.rand());
  setup();
} catch (error) {
  console.error("Error initializing fxhash project:", error);
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  noiseLayer = createGraphics(width, height);
  
  palette = {
    primary: [
      color(30, 50, 80),    // deep blue
      color(220, 70, 50),   // red
      color(50, 100, 160),  // teal
      color(240, 200, 100), // gold
    ],
    secondary: [
      color(245, 245, 245, 200), // off-white
      color(140, 120, 100),     // muted brown
      color(90, 110, 130),      // slate
    ],
    accents: [
      color(255, 230, 120),     // yellow
      color(120, 220, 200),     // cyan
      color(255, 255, 255),     // white
      color(0, 0, 0)            // black
    ]
  };

  generateComposition();
}

function generateComposition() {
  shapes = [];
  const pattern = $fx.rand() < 0.5 ? 'fibonacci' : 'golden';
  const rhythmRule = RHYTHM_PATTERNS[pattern];

  // Центральный крест
  shapes.push(createSuprematistCross(width/2, height/2));
  
  // Основные фигуры ближе к центру
  const shapeCount = floor($fx.rand() * (8 - 5) + 5); // Увеличиваем количество фигур (5-7)
  for (let i = 0; i < shapeCount; i++) {
    const spacing = rhythmRule.spacing[i % rhythmRule.spacing.length] * 60; // Уменьшаем радиус (было 130)
    const scale = rhythmRule.scale[i % rhythmRule.scale.length];
    const rotation = rhythmRule.rotation[i % rhythmRule.rotation.length];
    let newShape = createMainShape(spacing, scale, rotation);
    if (!shapes.some(s => dist(s.x, s.y, newShape.x, newShape.y) < 100)) { // Уменьшаем минимальное расстояние
      shapes.push(newShape);
    }
  }

  createSupportingShapes();
  createLines();
  initializeDynamicRelations();
}

function createSuprematistCross(x, y) {
  return {
    type: 'cross',
    x: x,
    y: y,
    targetX: x,
    targetY: y,
    size: $fx.rand() * (180 - 120) + 120,
    color: palette.primary[floor($fx.rand() * palette.primary.length)],
    rotationSpeed: $fx.rand() * (0.02 - (-0.02)) - 0.02, // Замедляем вращение
    aura: true,
    moveSpeed: { x: 0, y: 0 }, // Крест неподвижен
    moveRange: { x: 0, y: 0 },
    thickness: $fx.rand() * (0.5 - 0.2) + 0.2
  };
}

function createMainShape(spacing, scale, rotation) {
  const angle = $fx.rand() * 360;
  const shapeTypes = ['rect', 'triangle', 'ellipse', 'bar', 'diamond'];
  const x = width/2 + cos(angle) * spacing;
  const y = height/2 + sin(angle) * spacing;
  return {
    type: shapeTypes[floor($fx.rand() * shapeTypes.length)],
    x: x,
    y: y,
    targetX: x,
    targetY: y,
    size: $fx.rand() * (180 - 60) + 60 * scale, // Уменьшаем размер фигур
    ratio: $fx.rand() * (1.5 - 0.3) + 0.3, // Уменьшаем диапазон пропорций
    rotation: rotation + $fx.rand() * 90 - 45,
    rotationSpeed: $fx.rand() * (0.015 - (-0.015)) - 0.015, // Замедляем вращение
    scaleSpeed: $fx.rand() * (0.3 - 0.1) + 0.1, // Замедляем масштабирование
    moveSpeed: { x: $fx.rand() * (0.03 - 0.01) + 0.01, y: $fx.rand() * (0.03 - 0.01) + 0.01 }, // Замедляем движение
    moveRange: { x: $fx.rand() * (20 - 10) + 10, y: $fx.rand() * (20 - 10) + 10 }, // Уменьшаем диапазон
    color: palette.primary[floor($fx.rand() * palette.primary.length)],
    aura: $fx.rand() < 0.35,
    pulsePhase: $fx.rand() * TWO_PI,
    neighbors: []
  };
}

function createSupportingShapes() {
  shapes.forEach(mainShape => {
    if (mainShape && mainShape.type !== 'cross') {
      const supportCount = floor($fx.rand() * (3 - 1) + 1);
      for (let i = 0; i < supportCount; i++) {
        const angle = $fx.rand() * 360;
        const radius = $fx.rand() * (150 - 80) + 80; // Уменьшаем радиус (было 140-260)
        
        const x = mainShape.x + cos(angle) * radius;
        const y = mainShape.y + sin(angle) * radius;
        let newShape = {
          type: $fx.rand() < 0.5 ? 'ellipse' : 'bar',
          x: x,
          y: y,
          targetX: x,
          targetY: y,
          size: mainShape.size * ($fx.rand() * (0.5 - 0.2) + 0.2),
          ratio: $fx.rand() * (1.2 - 0.2) + 0.2, // Уменьшаем диапазон пропорций
          rotation: $fx.rand() * 90 - 45,
          rotationSpeed: mainShape.rotationSpeed * 0.5,
          scaleSpeed: mainShape.scaleSpeed * 0.7,
          moveSpeed: { x: mainShape.moveSpeed.x * 0.5, y: mainShape.moveSpeed.y * 0.5 },
          moveRange: { x: mainShape.moveRange.x/2, y: mainShape.moveRange.y/2 },
          color: palette.secondary[floor($fx.rand() * palette.secondary.length)],
          pulsePhase: $fx.rand() * TWO_PI,
          neighbors: []
        };
        
        if (!shapes.some(s => dist(s.x, s.y, newShape.x, newShape.y) < 80)) { // Уменьшаем минимальное расстояние
          shapes.push(newShape);
        }
      }
    }
  });
}

function createLines() {
  const lineCount = floor($fx.rand() * (12 - 8) + 8); // Увеличиваем количество линий (8-12)
  for (let i = 0; i < lineCount; i++) {
    const x = width/2 + $fx.rand() * 150 - 75; // Центрируем линии
    const y = height/2 + $fx.rand() * 150 - 75; // Центрируем линии
    shapes.push({
      type: 'line',
      x: x,
      y: y,
      targetX: x,
      targetY: y,
      size: $fx.rand() * (200 - 40) + 40, // Уменьшаем размер линий
      thickness: $fx.rand() * (8 - 1) + 1, // Уменьшаем толщину
      rotation: $fx.rand() * 180,
      rotationSpeed: $fx.rand() * (0.01 - (-0.01)) - 0.01, // Замедляем вращение
      color: palette.accents[floor($fx.rand() * palette.accents.length)],
      moveSpeed: { x: $fx.rand() * (0.02 - 0.005) + 0.005, y: $fx.rand() * (0.02 - 0.005) + 0.005 }, // Замедляем движение
      moveRange: { x: $fx.rand() * (15 - 5) + 5, y: $fx.rand() * (15 - 5) + 5 }, // Уменьшаем диапазон
      neighbors: []
    });
  }
}

function initializeDynamicRelations() {
  shapes.forEach(shape => {
    if (shape) {
      shape.neighbors = shapes.filter(other =>
        other !== shape &&
        other.x !== undefined && other.y !== undefined &&
        dist(shape.x, shape.y, other.x, other.y) < DYNAMIC_RULES.attractionRadius
      );
    }
  });
}

function updateDynamicRelations() {
  shapes.forEach(shape => {
    if (!shape || !shape.neighbors) return;
    
    shape.neighbors.forEach(neighbor => {
      if (!neighbor) return;
      const d = dist(shape.x, shape.y, neighbor.x, neighbor.y);
      if (d > 0) {
        const dx = neighbor.x - shape.x;
        const dy = neighbor.y - shape.y;
        
        if (d < DYNAMIC_RULES.repulsionRadius) {
          shape.targetX -= dx * DYNAMIC_RULES.repulsionStrength;
          shape.targetY -= dy * DYNAMIC_RULES.repulsionStrength;
        } else if (d < DYNAMIC_RULES.attractionRadius) {
          shape.targetX += dx * DYNAMIC_RULES.attractionStrength;
          shape.targetY += dy * DYNAMIC_RULES.attractionStrength;
        }
      }
      
      shape.rotationSpeed = lerp(shape.rotationSpeed,
        neighbor.rotationSpeed || 0,
        DYNAMIC_RULES.synchronizationRate);
    });

    // Отключаем влияние мыши, чтобы не нарушать композицию при захвате
    shape.x = lerp(shape.x, shape.targetX, 0.02);
    shape.y = lerp(shape.y, shape.targetY, 0.02);
  });
}

function createBrushTexture(x, y, w, h, rotation, clr, shapeType, aura, pulse) {
  push();
  translate(x, y);
  rotate(rotation);
  
  if (aura) {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(red(clr), green(clr), blue(clr), 80);
  }
  
  let gradient = drawingContext.createRadialGradient(0, 0, 0, 0, 0, w/2);
  gradient.addColorStop(0, clr);
  gradient.addColorStop(1, color(red(clr)*0.8, green(clr)*0.8, blue(clr)*0.8, alpha(clr)*0.7));
  drawingContext.fillStyle = gradient;
  
  noStroke();
  if (shapeType === 'rect') {
    rect(0, 0, w, h);
  } else if (shapeType === 'triangle') {
    triangle(-w/2, h/2, w/2, h/2, 0, -h/2);
  } else if (shapeType === 'ellipse') {
    ellipse(0, 0, w, h);
  } else if (shapeType === 'bar') {
    rect(0, 0, w, h/4);
  } else if (shapeType === 'diamond') {
    beginShape();
    vertex(0, -h/2);
    vertex(w/2, 0);
    vertex(0, h/2);
    vertex(-w/2, 0);
    endShape(CLOSE);
  } else if (shapeType === 'line') {
    stroke(clr);
    strokeWeight(h);
    line(-w/2, 0, w/2, 0);
  }
  
  drawingContext.shadowBlur = 0;
  pop();
}

function drawCross(shape) {
  push();
  translate(shape.x, shape.y);
  rotate(frameCount * shape.rotationSpeed);
  
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color(red(shape.color), green(shape.color), blue(shape.color), 60);
  
  noStroke();
  fill(shape.color);
  rect(0, 0, shape.size, shape.size * shape.thickness);
  rect(0, 0, shape.size * shape.thickness, shape.size);
  
  drawingContext.shadowBlur = 0;
  pop();
}

function draw() {
  background(240, 240, 235);
  
  noiseLayer.clear();
  noiseLayer.noStroke();
  for (let i = 0; i < 80; i++) {
    noiseLayer.fill(200 + $fx.rand() * 40, 10);
    let x = $fx.rand() * width;
    let y = $fx.rand() * height;
    noiseLayer.ellipse(x, y, $fx.rand() * (8 - 2) + 2);
  }
  image(noiseLayer, 0, 0);
  
  updateDynamicRelations();
  
  shapes.forEach(shape => {
    if (!shape) return;
    
    shape.currentRotation = shape.rotation + frameCount * (shape.rotationSpeed || 0);
    shape.currentScale = 1 + sin(frameCount * (shape.scaleSpeed || 0)) * 0.05;
    
    const currentSize = shape.size * shape.currentScale;
    const pos = constrainToCanvas(shape.x, shape.y, currentSize);
    
    if (shape.type === 'cross') {
      drawCross(shape);
    } else {
      createBrushTexture(
        pos.x,
        pos.y,
        currentSize * (shape.ratio || 1),
        shape.type === 'line' ? shape.thickness : currentSize,
        shape.currentRotation,
        shape.color,
        shape.type,
        shape.aura,
        frameCount * 0.05 + (shape.pulsePhase || 0)
      );
    }
  });
}

function constrainToCanvas(x, y, size) {
  return {
    x: constrain(x, size, width - size),
    y: constrain(y, size, height - size)
  };
}

function mousePressed() {
  generateComposition();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('SuprematistHarmony', 'png');
  }
}