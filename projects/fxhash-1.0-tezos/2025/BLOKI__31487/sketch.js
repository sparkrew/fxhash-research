// Generate seed from URL params, fxhash, or random
const sp = new URLSearchParams(window.location.search);
const seed = sp.get('sp') || sp.get('hash') || $fx.hash || Math.floor($fx.rand() * 9999999).toString();
console.log('Using seed:', seed);

// Custom random number generator using xoshiro128** algorithm
let xoshiro128ss = {
  a: 0, b: 0, c: 0, d: 0,
  
  // Initialize the state with a seed
  setSeed(seed) {
    // Create hash from seed string
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash = hash & hash;
    }
    
    // Initialize state using the hash
    this.a = hash >>> 0;
    this.b = (hash * 31) >>> 0;
    this.c = (hash * 37) >>> 0;
    this.d = (hash * 41) >>> 0;
    
    // Warm up the RNG
    for (let i = 0; i < 20; i++) this.next();
  },
  
  // Generate next random number
  next() {
    const result = this.rotl(this.b * 5, 7) * 9;
    const t = this.b << 9;
    this.c ^= this.a;
    this.d ^= this.b;
    this.b ^= this.c;
    this.a ^= this.d;
    this.c ^= t;
    this.d = this.rotl(this.d, 11);
    return result >>> 0;
  },
  
  // Helper function for bit rotation
  rotl(x, k) {
    return ((x << k) | (x >>> (32 - k))) >>> 0;
  },
  
  // Get random float between 0 and 1
  random() {
    return (this.next() >>> 0) / 4294967296;
  }
};

// Set the random seed
xoshiro128ss.setSeed(seed);

// Replace Math.random with our custom random
const customRandom = (min, max) => {
  const rand = xoshiro128ss.random();
  if (min === undefined && max === undefined) {
    return rand;
  }
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + rand * (max - min);
};

// Helper function for integer random in range (inclusive)
const customRandomInt = (min, max) => {
  return Math.floor(customRandom(min, max + 1));
};

//  console.log(sp);

// this is how features can be defined
$fx.features({
  "Palette": [
    "mondrian", "picasso_blue", "miro", "matisse", "kandinsky", "vanGogh", "rothko", "dali",
    "soviet_brutalism", "abandoned_factory", "metro_2033", "chernobyl", "night_industrial",
    "nuclear_winter", "rust_belt", "acid_rain", "dead_city", "night_windows", "soviet_housing",
    "power_plant", "research_facility", "blast_door", "emergency_exit", "vault_door",
    "maintenance_access", "prison_door"
  ].at(customRandomInt(0, 25)),
  "Wobblyness": customRandomInt(0, 2), // 0 = subtle, 1 = medium, 2 = extreme
  "Smog": customRandomInt(0, 3) // 0 = clear, 1 = light haze, 2 = heavy fog, 3 = toxic clouds
})

let canvas, ctx;
let width = 600;
let height = 800;
let padding = 36;
let dpr = 2;

// Move palette selection inside setup function
let selectedPalette;
let tower = []; // Add tower as global variable

// Add counter at the top level
let beamCounter = 0;

// Helper function to get wobble intensity based on Wobblyness feature
function getWobbleIntensity() {
  const wobblyness = $fx.getFeature("Wobblyness");
  switch(wobblyness) {
    case 0: return 0.4;  // subtle
    case 1: return 1.0;  // medium
    case 2: return 2.0;  // extreme
    default: return 1.0; // fallback to medium
  }
}

function drawWobblyLine(startX, startY, endX, endY, color, segments = 50, opacity = 1) {
  const points = [];
  const baseColor = Array.isArray(color) ? color : selectedPalette.colors[1];
  const wobbleIntensity = getWobbleIntensity();
  
  // Scale segments based on wobble intensity
  const scaledSegments = Math.max(3, Math.floor(segments * wobbleIntensity));
  
  // Generate points
  for (let i = 0; i <= scaledSegments; i++) {
    const t = i / scaledSegments;
    const x = startX + (endX - startX) * t;
    const y = startY + (endY - startY) * t;
    
    // Add wobble using intensity multiplier
    const wobbleX = (customRandom() * 1.2 * scaledSegments - 1) / scaledSegments * wobbleIntensity;
    const wobbleY = (customRandom() * 1.2 * scaledSegments - 1) / scaledSegments * wobbleIntensity;
    
    points.push({
      x: x + wobbleX,
      y: y + wobbleY,
      color: slightlyVaryColor(baseColor)
    });
  }
  
  // Draw points with varying line width based on wobble intensity
  for (let i = 1; i < points.length; i++) {
    const [r, g, b] = points[i].color;
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    ctx.lineWidth = (0.8 + customRandom() * 0.4) * Math.max(0.5, wobbleIntensity * 0.8);
    
    ctx.beginPath();
    ctx.moveTo(points[i-1].x, points[i-1].y);
    ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
  }
}

function setup() {

  // Select palette based on feature
  const paletteName = $fx.getFeature("Palette");
  selectedPalette = window.PALETTES[paletteName];

  canvas = document.createElement('canvas');
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  
  document.body.appendChild(canvas);
  
  // Set HTML background color to match palette background
  const [r, g, b] = selectedPalette.background;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100vh';
  
  ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  
  // Set canvas background
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, width * dpr, height * dpr);
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function slightlyVaryColor(color) {
  const variation = 5;
  return color.map(c => 
    Math.min(255, Math.max(0, c + (customRandom() - 0.5) * variation))
  );
}

function drawShape(points, color) {
  if (points.length < 2) return;
  
  for (let i = 1; i < points.length; i++) {
    drawWobblyLine(
      points[i-1][0] + padding,
      points[i-1][1] + padding,
      points[i][0] + padding,
      points[i][1] + padding,
      color
    );
  }
  
  // Close the shape if it's a polygon
  if (points.length > 2) {
    drawWobblyLine(
      points[points.length-1][0] + padding,
      points[points.length-1][1] + padding,
      points[0][0] + padding,
      points[0][1] + padding,
      color
    );
  }
}

function createCube(centerX, centerY, size, widthScale = 1, heightScale = 1, xAngle = 0, yAngle = 0) {
  // Allow for different width and height while keeping depth proportional to width
  const halfWidth = (size * widthScale) / 2;
  const halfHeight = (size * heightScale) / 2;
  const halfDepth = halfWidth; // Keep depth proportional to width
  
  // Define cube vertices in 3D space (x, y, z)
  const vertices = [
    // Front face
    [-halfWidth, -halfHeight, halfDepth],   // 0
    [halfWidth, -halfHeight, halfDepth],    // 1
    [halfWidth, halfHeight, halfDepth],     // 2
    [-halfWidth, halfHeight, halfDepth],    // 3
    // Back face
    [-halfWidth, -halfHeight, -halfDepth],  // 4
    [halfWidth, -halfHeight, -halfDepth],   // 5
    [halfWidth, halfHeight, -halfDepth],    // 6
    [-halfWidth, halfHeight, -halfDepth]    // 7
  ];

  // Apply projection with varied angles
  const projected = vertices.map(([x, y, z]) => {
    // First rotate around Y
    let x1 = x * Math.cos(yAngle) - z * Math.sin(yAngle);
    let y1 = y;
    let z1 = x * Math.sin(yAngle) + z * Math.cos(yAngle);
    
    // Then rotate around X
    let x2 = x1;
    let y2 = y1 * Math.cos(xAngle) - z1 * Math.sin(xAngle);
    let z2 = y1 * Math.sin(xAngle) + z1 * Math.cos(xAngle);
    
    return [
      x2 + centerX,
      y2 + centerY
    ];
  });

  return projected;
}

function drawHatchLines(points, color, spacing = 8, angle = Math.PI/4) {
  // Get bounding box of the face
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  
  // Calculate diagonal length for line extension
  const diagLength = Math.sqrt(
    Math.pow(maxX - minX, 2) + 
    Math.pow(maxY - minY, 2)
  );
  
  // Generate parallel lines
  const cos_angle = Math.cos(angle);
  const sin_angle = Math.sin(angle);
  
  // Center point of the face
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  
  // Draw lines
  for (let d = -diagLength; d <= diagLength; d += spacing) {
    const x1 = centerX - diagLength * cos_angle + d * sin_angle;
    const y1 = centerY - diagLength * sin_angle - d * cos_angle;
    const x2 = centerX + diagLength * cos_angle + d * sin_angle;
    const y2 = centerY + diagLength * sin_angle - d * cos_angle;
    
    // Create line segment points
    const line = [[x1, y1], [x2, y2]];
    
    // Clip line to polygon
    const clippedLine = clipLineToPolygon(line, points);
    if (clippedLine) {
      drawWobblyLine(
        clippedLine[0][0],
        clippedLine[0][1],
        clippedLine[1][0],
        clippedLine[1][1],
        color,
        15
      );
    }
  }
}

function clipLineToPolygon(line, polygon) {
  let [[x1, y1], [x2, y2]] = line;
  let inside1 = false;
  let inside2 = false;
  
  // Check if points are inside polygon
  if (isPointInPolygon([x1, y1], polygon)) inside1 = true;
  if (isPointInPolygon([x2, y2], polygon)) inside2 = true;
  
  if (!inside1 && !inside2) return null;
  
  // Find intersections
  for (let i = 0; i < polygon.length; i++) {
    const j = (i + 1) % polygon.length;
    const intersection = lineIntersection(
      [x1, y1],
      [x2, y2],
      polygon[i],
      polygon[j]
    );
    
    if (intersection) {
      if (!inside1) {
        [x1, y1] = intersection;
        inside1 = true;
      } else if (!inside2) {
        [x2, y2] = intersection;
        inside2 = true;
      }
    }
    
    if (inside1 && inside2) break;
  }
  
  return [[x1, y1], [x2, y2]];
}

function isPointInPolygon(point, polygon) {
  let inside = false;
  const [x, y] = point;
  
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    
    const intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  
  return inside;
}

function lineIntersection(p1, p2, p3, p4) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  const [x4, y4] = p4;
  
  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (denominator === 0) return null;
  
  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
  const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;
  
  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    return [
      x1 + t * (x2 - x1),
      y1 + t * (y2 - y1)
    ];
  }
  
  return null;
}

function tintCubeFace(points, color, angle = Math.PI/3, spacing = 2) {
  // Get bounding box of the face
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  
  // Calculate diagonal length for line extension
  const diagLength = Math.sqrt(
    Math.pow(maxX - minX, 2) + 
    Math.pow(maxY - minY, 2)
  );
  
  // Generate parallel lines
  const cos_angle = Math.cos(angle);
  const sin_angle = Math.sin(angle);
  
  // Center point of the face
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  
  // Ensure minimum 1px spacing between lines
  const minSpacing = Math.max(1, spacing);
  
  // Draw tinting lines
  for (let d = -diagLength; d <= diagLength; d += minSpacing) {
    const x1 = centerX - diagLength * cos_angle + d * sin_angle;
    const y1 = centerY - diagLength * sin_angle - d * cos_angle;
    const x2 = centerX + diagLength * cos_angle + d * sin_angle;
    const y2 = centerY + diagLength * sin_angle - d * cos_angle;
    
    const line = [[x1, y1], [x2, y2]];
    const clippedLine = clipLineToPolygon(line, points);
    
    if (clippedLine) {
      drawWobblyLine(
        clippedLine[0][0],
        clippedLine[0][1],
        clippedLine[1][0],
        clippedLine[1][1],
        color,
        15,
        1.0  // Full opacity
      );
    }
  }
}

function colorCubeSide(points, color, angle) {
  // Get bounding box of the face
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  
  // Create lighter version of the color for filling
  const lightColor = color.map(c => Math.min(255, c + 40));
  
  // Use 1px spacing for lines
  const spacing = 1;
  
  // Draw vertical lines from left to right
  for (let x = minX; x <= maxX; x += spacing) {
    // Create vertical line from top to bottom
    const line = [[x, minY], [x, maxY]];
    const clippedLine = clipLineToPolygon(line, points);
    
    if (clippedLine) {
      drawWobblyLine(
        clippedLine[0][0],
        clippedLine[0][1],
        clippedLine[1][0],
        clippedLine[1][1],
        lightColor,
        15,  // segments
        0.8  // opacity
      );
    }
  }
}

function drawWindows(points, color, numRows = 3, numCols = 4, faceType) {
  // Skip top and bottom faces for windows
  if (faceType === 'top' || faceType === 'bottom') {
    return;
  }

  // Calculate face vectors for proper perspective
  const topEdge = [
    points[1][0] - points[0][0],
    points[1][1] - points[0][1]
  ];
  const sideEdge = [
    points[3][0] - points[0][0],
    points[3][1] - points[0][1]
  ];
  
  // Calculate unit vectors
  const topLength = Math.sqrt(topEdge[0] * topEdge[0] + topEdge[1] * topEdge[1]);
  const sideLength = Math.sqrt(sideEdge[0] * sideEdge[0] + sideEdge[1] * sideEdge[1]);
  const topUnit = [topEdge[0] / topLength, topEdge[1] / topLength];
  const sideUnit = [sideEdge[0] / sideLength, sideEdge[1] / sideLength];
  
  // Window size relative to face dimensions
  const windowWidth = topLength / (numCols * 2.5);
  const windowHeight = sideLength / (numRows * 2.5);
  
  // Spacing between windows
  const spacingX = topLength / numCols;
  const spacingY = sideLength / numRows;
  
  // Margin from edges (15% of spacing)
  const marginX = spacingX * 0.15;
  const marginY = spacingY * 0.15;
  
  // Check if we're using a dark palette
  const bgColor = selectedPalette.background;
  const avgBgBrightness = (bgColor[0] + bgColor[1] + bgColor[2]) / 3;
  const isDarkPalette = avgBgBrightness < 128;
  
  // Create window colors based on palette brightness
  const darkColor = isDarkPalette ? color.map(c => Math.min(255, c + 60)) : color.map(c => Math.max(0, c - 60));
  const lightColor = isDarkPalette ? color.map(c => Math.max(0, c - 60)) : color.map(c => Math.min(255, c + 60));
  const glowColor = isDarkPalette ? lightColor.map(c => Math.min(255, c + 40)) : darkColor;
  
  // Improved ground level detection
  const isGroundLevel = faceType === 'front' && 
    Math.abs(points[3][1] - (height - padding)) < sideLength * 1.5 &&
    Math.abs(points[0][0] - width/2) < topLength * 2.0 &&
    points[3][1] > points[0][1] &&
    points[3][1] > height * 0.7;
  
  // Draw windows
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Skip middle window in bottom row of ground level front face to make room for door
      if (isGroundLevel && row === numRows - 1 && col === Math.floor(numCols / 2)) {
        // Draw door instead
        const doorWidth = windowWidth * 1.8; // Reduced from 3.5
        const doorHeight = windowHeight * 2.5; // Reduced from 4.0
        
        // Calculate door position - adjusted position
        const xOffset = marginX + col * spacingX + (spacingX - doorWidth) / 2;
        const yOffset = -3 + marginY + row * spacingY + spacingY * 0.1; // Slightly adjusted down
        
        const baseX = points[0][0] + topUnit[0] * xOffset + sideUnit[0] * yOffset;
        const baseY = points[0][1] + topUnit[1] * xOffset + sideUnit[1] * yOffset;
        
        // Draw solid background for door area first
        const doorPoints = [
          [baseX, baseY], // top-left
          [
            baseX + topUnit[0] * doorWidth,
            baseY + topUnit[1] * doorWidth
          ], // top-right
          [
            baseX + topUnit[0] * doorWidth + sideUnit[0] * doorHeight,
            baseY + topUnit[1] * doorWidth + sideUnit[1] * doorHeight
          ], // bottom-right
          [
            baseX + sideUnit[0] * doorHeight,
            baseY + sideUnit[1] * doorHeight
          ]  // bottom-left
        ];
        
        // Fill door area with solid color first
        colorCubeSide(doorPoints, darkColor);
        
        // Draw multiple frames for emphasis
        const frames = 3;
        for(let frame = 0; frame < frames; frame++) {
          const frameInset = (frame * doorWidth * 0.1);
          const framePoints = [
            [baseX + topUnit[0] * frameInset, baseY + topUnit[1] * frameInset],
            [baseX + topUnit[0] * (doorWidth - frameInset), baseY + topUnit[1] * (doorWidth - frameInset)],
            [baseX + topUnit[0] * (doorWidth - frameInset) + sideUnit[0] * (doorHeight - frameInset),
             baseY + topUnit[1] * (doorWidth - frameInset) + sideUnit[1] * (doorHeight - frameInset)],
            [baseX + sideUnit[0] * (doorHeight - frameInset),
             baseY + sideUnit[1] * (doorHeight - frameInset)]
          ];
          
          // Draw frame with varying thickness
          for (let i = 0; i < 4; i++) {
            const next = (i + 1) % 4;
            const frameColor = (i === 0 || i === 3) ? lightColor : darkColor;
            drawWobblyLine(
              framePoints[i][0], framePoints[i][1],
              framePoints[next][0], framePoints[next][1],
              frameColor, 25 - frame * 5, 1 // Thicker lines for outer frame
            );
          }
        }
        
        // Add larger, more prominent door handle
        const handleOffset = doorWidth * 0.85;
        const handleHeight = doorHeight * 0.5;
        const handleX = baseX + topUnit[0] * handleOffset;
        const handleY = baseY + topUnit[1] * handleOffset;
        
        // Draw simple vertical handle
        drawWobblyLine(
          handleX + sideUnit[0] * handleHeight,
          handleY + sideUnit[1] * handleHeight,
          handleX + sideUnit[0] * (handleHeight + 15), // Reduced handle size
          handleY + sideUnit[1] * (handleHeight + 15),
          lightColor, 10, 1
        );
        
        continue;
      }
      
      // Calculate base position along face vectors
      const xOffset = marginX + col * spacingX + (spacingX - windowWidth) / 2;
      const yOffset = marginY + row * spacingY + (spacingY - windowHeight) / 2;
      
      const baseX = points[0][0] + topUnit[0] * xOffset + sideUnit[0] * yOffset;
      const baseY = points[0][1] + topUnit[1] * xOffset + sideUnit[1] * yOffset;
      
      // Create window points following face perspective
      const windowPoints = [
        [baseX, baseY], // top-left
        [
          baseX + topUnit[0] * windowWidth,
          baseY + topUnit[1] * windowWidth
        ], // top-right
        [
          baseX + topUnit[0] * windowWidth + sideUnit[0] * windowHeight,
          baseY + topUnit[1] * windowWidth + sideUnit[1] * windowHeight
        ], // bottom-right
        [
          baseX + sideUnit[0] * windowHeight,
          baseY + sideUnit[1] * windowHeight
        ]  // bottom-left
      ];
      
      // Check if window is inside the face
      if (windowPoints.every(point => isPointInPolygon(point, points))) {
        // Randomly decide if this window should be lit (more likely in dark palettes)
        const shouldBeLit = isDarkPalette && customRandom() < 0.7;
        
        // Draw window glow for lit windows in dark palettes
        if (shouldBeLit && isDarkPalette) {
          // Draw multiple layers of glow
          for (let i = 0; i < 3; i++) {
            const glowScale = 1 + (i * 0.15);
            const glowOpacity = 0.2 - (i * 0.05);
            const glowPoints = windowPoints.map(([x, y]) => [
              x + (x - baseX) * (glowScale - 1),
              y + (y - baseY) * (glowScale - 1)
            ]);
            
            // Draw glow outline
            for (let j = 0; j < 4; j++) {
              const next = (j + 1) % 4;
              drawWobblyLine(
                glowPoints[j][0], glowPoints[j][1],
                glowPoints[next][0], glowPoints[next][1],
                glowColor, 8, glowOpacity
              );
            }
          }
        }
        
        // Draw window frame
        for (let i = 0; i < 4; i++) {
          const next = (i + 1) % 4;
          const frameColor = (i === 0 || i === 3) ? lightColor : darkColor;
          drawWobblyLine(
            windowPoints[i][0], windowPoints[i][1],
            windowPoints[next][0], windowPoints[next][1],
            frameColor, 10, 1
          );
        }
        
        // Fill window with appropriate color
        if (shouldBeLit && isDarkPalette) {
          // Draw lit window pattern
          const numDivisions = 3;
          const divSize = windowWidth / numDivisions;
          
          for (let i = 0; i < numDivisions; i++) {
            for (let j = 0; j < numDivisions; j++) {
              // Calculate division points
              const divPoints = [
                [
                  baseX + topUnit[0] * (i * divSize) + sideUnit[0] * (j * divSize),
                  baseY + topUnit[1] * (i * divSize) + sideUnit[1] * (j * divSize)
                ],
                [
                  baseX + topUnit[0] * ((i + 1) * divSize) + sideUnit[0] * (j * divSize),
                  baseY + topUnit[1] * ((i + 1) * divSize) + sideUnit[1] * (j * divSize)
                ],
                [
                  baseX + topUnit[0] * ((i + 1) * divSize) + sideUnit[0] * ((j + 1) * divSize),
                  baseY + topUnit[1] * ((i + 1) * divSize) + sideUnit[1] * ((j + 1) * divSize)
                ],
                [
                  baseX + topUnit[0] * (i * divSize) + sideUnit[0] * ((j + 1) * divSize),
                  baseY + topUnit[1] * (i * divSize) + sideUnit[1] * ((j + 1) * divSize)
                ]
              ];
              
              // Random light pattern
              if (customRandom() < 0.8) {
                for (let k = 0; k < 4; k++) {
                  const next = (k + 1) % 4;
                  drawWobblyLine(
                    divPoints[k][0], divPoints[k][1],
                    divPoints[next][0], divPoints[next][1],
                    glowColor, 5, 0.8
                  );
                }
              }
            }
          }
        } else {
          // Draw dark window
          colorCubeSide(windowPoints, darkColor);
        }
        
        // Add window details only for larger windows
        if (windowWidth > 8 && windowHeight > 8 && !shouldBeLit) {
          // Draw vertical divider
          drawWobblyLine(
            baseX + topUnit[0] * windowWidth / 2,
            baseY + topUnit[1] * windowWidth / 2,
            baseX + topUnit[0] * windowWidth / 2 + sideUnit[0] * windowHeight,
            baseY + topUnit[1] * windowWidth / 2 + sideUnit[1] * windowHeight,
            lightColor, 8, 0.9
          );
          
          // Draw horizontal divider
          drawWobblyLine(
            baseX + sideUnit[0] * windowHeight / 2,
            baseY + sideUnit[1] * windowHeight / 2,
            baseX + topUnit[0] * windowWidth + sideUnit[0] * windowHeight / 2,
            baseY + topUnit[1] * windowWidth + sideUnit[1] * windowHeight / 2,
            lightColor, 8, 0.9
          );
        }
      }
    }
  }
}

// Update drawCube to create recursive nested cubes
function drawCube(centerX, centerY, size, color, widthScale = 1, heightScale = 1, depth = 0, parentSize = null) {
  // Don't draw if cube is too small (using a slightly larger threshold for better visibility)
  const effectiveSize = size * Math.min(widthScale, heightScale);
  if (effectiveSize < 8) return;

  // If this cube would be bigger than its parent, don't draw it
  if (parentSize !== null && size > parentSize) return;

  // Check if cube would overlap with padding
  const halfSize = size * Math.max(widthScale, heightScale) / 2;
  if (centerX - halfSize < padding || 
      centerX + halfSize > width - padding ||
      centerY - halfSize < padding ||
      centerY + halfSize > height - padding) {
    return;
  }

  const maxDepth = 3; // Maximum recursion depth
  
  // Base angles for isometric projection with deterministic variation
  const baseYAngle = Math.PI / 6; // 30 degrees
  const baseXAngle = Math.atan(1/Math.sqrt(2)); // ~35.264 degrees
  
  // Add controlled random variation to angles (±5 degrees max)
  const maxVariation = Math.PI / 36; // 5 degrees
  const yAngle = baseYAngle + (customRandom() - 0.5) * maxVariation;
  const xAngle = baseXAngle + (customRandom() - 0.5) * maxVariation;
  
  const projected = createCube(centerX, centerY, size, widthScale, heightScale, xAngle, yAngle);
  
  // Define all faces and their angles for line filling
  const faces = [
    { verts: [4, 5, 6, 7], angle: Math.PI/2, windows: { rows: 4, cols: 5 }, type: 'front' },     // front face (was back)
    { verts: [4, 5, 1, 0], angle: Math.PI/4, windows: { rows: 2, cols: 4 }, type: 'top' },      // top face
    { verts: [4, 0, 3, 7], angle: 0, windows: { rows: 4, cols: 3 }, type: 'left' },             // left face
    { verts: [1, 5, 6, 2], angle: 0, windows: { rows: 4, cols: 3 }, type: 'right' },            // right face
    { verts: [0, 1, 2, 3], angle: Math.PI/4, windows: { rows: 4, cols: 5 }, type: 'back' },    // back face (was front)
    { verts: [7, 6, 2, 3], angle: Math.PI/4, windows: { rows: 2, cols: 4 }, type: 'bottom' }    // bottom face
  ];
  
  // Draw all faces with lines and windows
  faces.forEach((face, i) => {
    const facePoints = face.verts.map(idx => projected[idx]);
    
    // Draw the face outline first
    const points = [...facePoints, facePoints[0]]; // Close the shape
    for (let i = 0; i < points.length - 1; i++) {
      drawWobblyLine(
        points[i][0],
        points[i][1],
        points[i + 1][0],
        points[i + 1][1],
        color,
        25
      );
    }
    
    // Fill with hatch lines (reduced spacing for subtler effect)
    drawHatchLines(facePoints, color, 12, face.angle);
    
    // Add windows if the face is large enough
    const faceWidth = Math.max(...facePoints.map(p => p[0])) - Math.min(...facePoints.map(p => p[0]));
    if (faceWidth > 30) { // Only add windows if face is large enough
      const windowRows = Math.max(2, Math.floor(face.windows.rows * (faceWidth / 100)));
      const windowCols = Math.max(2, Math.floor(face.windows.cols * (faceWidth / 100)));
      drawWindows(facePoints, color, windowRows, windowCols, face.type);
    }

    // If this is the ground cube's top face, draw beams every other time
    if (face.type === 'top' && depth === 0 && tower[0] && tower[0].size === size) {
      if (beamCounter % 2 === 0) {
        drawBeams(projected);
      }
    }
  });

  // If we haven't reached max depth, draw inner cubes
  if (depth < maxDepth) {
    const innerSize = size * 0.3; // Smaller inner cubes to accommodate more of them
    // Check if inner cubes would be too small
    if (innerSize * Math.min(widthScale, heightScale) >= 8) {
      // Get available colors from palette (excluding background and line colors)
      const availableColors = selectedPalette.colors.slice(2);
      
      // Use deterministic number of inner cubes based on depth and size
      const sizeHash = Math.floor(size * 100) + depth * 1000;
      const numCubesIndex = customRandomInt(0, 3, sizeHash);
      const numCubes = [1, 2, 4, 8][numCubesIndex];
      
      // Get a new aspect ratio for inner cubes
      const innerRatio = getRandomAspectRatio();
      const innerWidthScale = customRandom() > 0.5 ? innerRatio : 1;
      const innerHeightScale = innerWidthScale === 1 ? innerRatio : 1;
      
      // Define possible positions based on number of cubes
      let positions = [];
      const offset = size * 0.2; // Reduced offset for better spacing
      const smallOffset = offset * 0.6; // For 8-cube arrangement
      
      switch(numCubes) {
        case 1:
          // Single cube in center
          positions = [{ x: 0, y: 0 }];
          break;
        case 2:
          // Two cubes, deterministically choose horizontal or vertical arrangement
          if (customRandom(sizeHash) > 0.5) {
            positions = [
              { x: -offset, y: 0 },
              { x: offset, y: 0 }
            ];
          } else {
            positions = [
              { x: 0, y: -offset },
              { x: 0, y: offset }
            ];
          }
          break;
        case 4:
          // Four cubes in corners
          positions = [
            { x: -offset, y: -offset },
            { x: offset, y: -offset },
            { x: -offset, y: offset },
            { x: offset, y: offset }
          ];
          break;
        case 8:
          // Eight cubes in a double-square arrangement
          positions = [
            // Inner square
            { x: -smallOffset, y: -smallOffset },
            { x: smallOffset, y: -smallOffset },
            { x: -smallOffset, y: smallOffset },
            { x: smallOffset, y: smallOffset },
            // Outer square
            { x: -offset, y: -offset },
            { x: offset, y: -offset },
            { x: -offset, y: offset },
            { x: offset, y: offset }
          ];
          break;
      }

      positions.forEach((pos, index) => {
        // Get deterministic color for each inner cube based on its position and parent properties
        const colorHash = Math.floor(size * 100) + depth * 1000 + index;
        const innerColor = availableColors[customRandomInt(0, availableColors.length - 1, colorHash)];
        drawCube(
          centerX + pos.x,
          centerY + pos.y,
          innerSize,
          innerColor,
          innerWidthScale,
          innerHeightScale,
          depth + 1,
          size
        );
      });
    }
  }
}

// Move Perlin noise and drawSmoke before drawTower
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t, a, b) {
  return a + t * (b - a);
}

function grad(hash, x, y) {
  const h = hash & 15;
  const gradX = 1 + (h & 7);  // Gradient x
  const gradY = 1 + (h >> 4);  // Gradient y
  return ((h & 8) ? -gradX : gradX) * x + ((h & 8) ? -gradY : gradY) * y;
}

// Permutation table
const P = new Array(512);
for(let i = 0; i < 256; i++) {
  P[i] = P[i + 256] = customRandomInt(0, 255);
}

function noise(x, y) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  
  x -= Math.floor(x);
  y -= Math.floor(y);
  
  const u = fade(x);
  const v = fade(y);
  
  // Use deterministic values from our permutation table
  const A = P[X] + Y;
  const AA = P[A & 255];
  const AB = P[(A + 1) & 255];
  const B = P[(X + 1) & 255] + Y;
  const BA = P[B & 255];
  const BB = P[(B + 1) & 255];
  
  // Scale result to [-1, 1] range
  return (lerp(v,
    lerp(u,
      grad(P[AA], x, y),
      grad(P[BA], x - 1, y)
    ),
    lerp(u,
      grad(P[AB], x, y - 1),
      grad(P[BB], x - 1, y - 1)
    )
  ) + 1) * 0.5;
}

// Simulate time deterministically
let simulatedTime = 0;
function getSimulatedTime() {
  // Increment by a small random amount each time to simulate time passing
  simulatedTime += customRandom() * 0.1;
  return simulatedTime;
}

// Helper function to get smog intensity based on Smog feature
function getSmogIntensity() {
  const smog = $fx.getFeature("Smog");
  switch(smog) {
    case 0: return 0.2;   // clear
    case 1: return 0.6;   // light haze
    case 2: return 1.0;   // heavy fog
    case 3: return 1.5;   // toxic clouds
    default: return 0.6;  // fallback to light haze
  }
}

// Update drawSmoke to use smog intensity
function drawSmoke(x, y, width, height) {
  const smogIntensity = getSmogIntensity();
  // Increase number of particles based on smog intensity
  const numParticles = Math.floor(800 * smogIntensity);
  const time = getSimulatedTime();
  
  // Use a slightly darker smoke color for better visibility
  const bgColor = selectedPalette.background;
  const smokeColor = bgColor.map(c => Math.min(255, c + 30));
  
  // Add slight wind effect with more variation
  const windStrength = noise(time * 0.2, 0) * 0.8 * smogIntensity;
  
  // Create multiple smoke columns for wider coverage
  const numColumns = Math.floor(4 * smogIntensity);
  for (let col = 0; col < numColumns; col++) {
    const columnOffset = (col - (numColumns - 1) / 2) * (width * 0.2);
    
    for (let i = 0; i < numParticles / numColumns; i++) {
      // Slower time scale for more stable movement
      const timeScale = 0.3;
      // Calculate base rise height
      const baseRise = (i * height / (numParticles / numColumns));
      // Add perlin noise for natural movement
      const noiseY = noise(i * 0.1 + col * 100 + time * timeScale, time * timeScale) * height * 0.4;
      // Combine base rise with noise
      const totalRise = baseRise + noiseY;
      
      // Add wind drift to X position, stronger at higher elevations
      const noiseX = noise(i * 0.1 + col * 50, time * timeScale) * width * 0.4 + 
                     totalRise * windStrength;
      
      // Calculate particle position with upward drift
      const particleX = x + columnOffset + noiseX;
      const particleY = y - totalRise; // Negative for upward movement
      
      // Smoother opacity falloff
      const opacity = Math.max(0, 1 - (totalRise / height)) * 0.25;
      
      // Draw tiny wobbly dots for smoke particles
      const dotSize = 1 + noise(i + col * 1000, time) * 1.5; // Small variation in dot size
      
      // Draw a tiny wobbly circle using short lines
      const numPoints = 4; // Fewer points for smaller shapes
      let prevX = particleX + dotSize * Math.cos(0);
      let prevY = particleY + dotSize * Math.sin(0);
      
      for (let j = 1; j <= numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2;
        const wobble = 1 + noise(i + j + col * 500, time) * 0.2;
        const nextX = particleX + dotSize * Math.cos(angle) * wobble;
        const nextY = particleY + dotSize * Math.sin(angle) * wobble;
        
        // Draw short wobbly line for each segment
        drawWobblyLine(
          prevX, prevY,
          nextX, nextY,
          smokeColor,
          2, // Thinner lines for more delicate smoke
          opacity
        );
        
        prevX = nextX;
        prevY = nextY;
      }
      
      // Occasionally add some connecting lines between particles for texture
      if (i > 0 && customRandom() < 0.05) { // Reduced connection frequency
        const prevParticle = i - 1;
        const prevBaseRise = (prevParticle * height / (numParticles / numColumns));
        const prevNoiseY = noise(prevParticle * 0.1 + col * 100 + time * timeScale, time * timeScale) * height * 0.4;
        const prevTotalRise = prevBaseRise + prevNoiseY;
        const prevNoiseX = noise(prevParticle * 0.1 + col * 50, time * timeScale) * width * 0.4 + 
                          prevTotalRise * windStrength;
        const prevX = x + columnOffset + prevNoiseX;
        const prevY = y - prevTotalRise;
        
        // Draw faint connecting line if particles are close enough
        if (Math.abs(particleX - prevX) < width * 0.1 && Math.abs(particleY - prevY) < height * 0.1) {
          drawWobblyLine(
            particleX, particleY,
            prevX, prevY,
            smokeColor,
            1, // Even thinner connecting lines
            opacity * 0.15 // More transparent connections
          );
        }
      }
    }
  }
}

function drawTower(shouldDrawPath = false) {
  // Calculate available drawing area (respecting padding)
  const drawArea = {
    width: width - (padding * 2),
    height: height - (padding * 2),
    startX: padding,
    startY: padding
  };
  
  // Base size parameters - adjusted for better coverage
  const baseSize = Math.min(drawArea.width, drawArea.height) * 0.45; // Increased from 0.4 for larger base
  const shrinkFactor = 0.85;
  const maxLevels = 15;
  
  // Create color sequence from palette
  const colorSequence = selectedPalette.colors.slice(2);
  let colorIndex = customRandomInt(0, colorSequence.length - 1);
  
  // Generate tower structure first without drawing
  tower = []; // Reset tower array
  let currentSize = baseSize;
  let currentY = height - padding - baseSize * 0.8; // Adjusted to raise the base slightly
  let lastSize = Infinity;
  
  // Calculate initial tower structure
  for (let level = 0; level < maxLevels; level++) {
    // For the first level, use a more standard aspect ratio
    const ratio = level === 0 ? 1 : getRandomAspectRatio();
    const widthScale = level === 0 ? 1.2 : (customRandom() > 0.5 ? ratio : 1); // Wider base
    const heightScale = level === 0 ? 1 : (widthScale === 1 ? ratio : 1);
    
    const effectiveSize = currentSize * Math.max(widthScale, heightScale);
    // Relaxed size comparison to prevent skipping
    if (currentSize * Math.min(widthScale, heightScale) < 6 || effectiveSize > lastSize * 1.2) break;
    
    // Calculate base position with deterministic variation
    const xOffset = (customRandom() - 0.5) * currentSize * 0.1; // Reduced from 0.1
    const yOffset = (customRandom() - 0.5) * currentSize * 0.1; // Reduced from 0.1
    
    const shape = {
      size: currentSize,
      widthScale: widthScale,
      heightScale: heightScale,
      depth: level,
      level,
      color: colorSequence[colorIndex],
      x: width / 2 + xOffset,
      y: currentY + yOffset
    };
    
    tower.push(shape);
    lastSize = effectiveSize;
    
    // Adjusted vertical spacing calculation
    const maxScale = Math.max(widthScale, heightScale);
    const verticalSpacing = 0.7 * maxScale; // Reduced from 0.8 for tighter stacking
    currentY -= currentSize * verticalSpacing;
    
    // Use deterministic size reduction
    currentSize *= shrinkFactor;
    currentSize *= (0.97 + customRandom() * 0.03); // Small random variation
    colorIndex = (colorIndex + 1) % colorSequence.length;
  }
  
  // Sort shapes by size (largest to smallest) to ensure largest cube is at bottom
  tower.sort((a, b) => {
    const sizeA = a.size * Math.max(a.widthScale, a.heightScale);
    const sizeB = b.size * Math.max(b.widthScale, b.heightScale);
    return sizeB - sizeA;
  });
  
  // Reposition cubes vertically based on sorted order
  let yPos = height - padding - tower[0].size * 0.8; // Start with largest cube
  tower.forEach((shape, index) => {
    shape.y = yPos;
    if (index < tower.length - 1) {
      const nextShape = tower[index + 1];
      const currentScale = Math.max(shape.widthScale, shape.heightScale);
      yPos -= shape.size * currentScale * 0.7; // Consistent spacing
    }
  });
  
  // Draw all shapes
  tower.forEach(shape => {
    // Calculate offsets for this shape
    const xOffset = (customRandom() - 0.5) * shape.size * 0.05;
    const yOffset = (customRandom() - 0.5) * shape.size * 0.05;
    
    drawCube(shape.x + xOffset, shape.y + yOffset, shape.size, shape.color, shape.widthScale, shape.heightScale, 0, null);
  });

  // After drawing all shapes, add path from the door if requested
  if (shouldDrawPath) {
    // Use the largest cube (first in array) for the door
    const groundCube = tower[0];
    const cubeProjection = createCube(
      groundCube.x, 
      groundCube.y, 
      groundCube.size, 
      groundCube.widthScale, 
      groundCube.heightScale,
      Math.PI / 6,
      Math.atan(1/Math.sqrt(2))
    );
    
    // Get front face vertices
    const frontFace = [cubeProjection[4], cubeProjection[5], cubeProjection[6], cubeProjection[7]];
    
    // Calculate door position
    const faceWidth = frontFace[1][0] - frontFace[0][0];
    const doorX = frontFace[0][0] + faceWidth * 0.5; // Center of face
    const doorHeight = groundCube.size * 0.8; // Door height is 80% of cube size
    const doorBottom = frontFace[2][1] - doorHeight * 0.1; // Exact bottom of door
    
    // Draw path from door to off-screen
    const pathEndX = doorX + (width * 0.3); // Go off screen to the right
    const pathEndY = height + padding; // Go off screen at the bottom
    
    // Use primary and secondary colors from palette
    const pathColors = [selectedPalette.colors[0], selectedPalette.colors[1]];
    
    // Draw multiple paths with slight offsets for visual interest
    drawNoisyPath(doorX, doorBottom + 60, pathEndX, pathEndY, pathColors[0]);
    drawNoisyPath(doorX, doorBottom + 60, pathEndX + 20, pathEndY + 10, pathColors[1]);
    drawNoisyPath(doorX, doorBottom + 60, pathEndX - 20, pathEndY - 10, pathColors[1]);
  }
}

// Add function to check if canvas is empty
function isCanvasEmpty() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Check if all pixels are transparent or background color
  const [bgR, bgG, bgB] = selectedPalette.background;
  for (let i = 0; i < data.length; i += 4) {
    // If pixel is not transparent and not background color
    if (data[i + 3] !== 0 && // alpha
        (data[i] !== bgR || 
         data[i + 1] !== bgG || 
         data[i + 2] !== bgB)) {
      return false;
    }
  }
  return true;
}

function applyGrainEffect(intensity = 0.15, useGradient = false) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  for (let y = 0; y < canvas.height; y++) {
    // Calculate gradient multiplier (1 at top, 0 at bottom)
    const gradientMultiplier = useGradient ? 
      Math.max(0, Math.min(1, 1 - (y / canvas.height))) : 1;
    
    for (let x = 0; x < canvas.width; x++) {
      const i = (y * canvas.width + x) * 4;
      
      // Skip fully transparent pixels
      if (data[i + 3] === 0) continue;
      
      // Generate noise value between -intensity and +intensity
      // Scale intensity by gradient if enabled
      const effectiveIntensity = intensity * (useGradient ? gradientMultiplier : 1);
      const noise = (customRandom() * 2 - 1) * effectiveIntensity;
      
      // Apply noise to RGB channels while preserving alpha
      data[i] = Math.min(255, Math.max(0, data[i] + data[i] * noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + data[i + 1] * noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + data[i + 2] * noise));
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Add drawAtmosphere function
function drawAtmosphere() {
  const time = getSimulatedTime();
  const smogIntensity = getSmogIntensity();
  
  // Use background color as base
  const bgColor = selectedPalette.background;
  // Create slightly lighter color for atmosphere
  const atmosphereColor = bgColor.map(c => Math.min(255, c + 40));
  
  // Parameters for fog distribution - adjusted by smog intensity
  const numRows = Math.floor(40 * smogIntensity);
  const numDotsPerRow = Math.floor(100 * smogIntensity);
  const rowHeight = height / numRows;
  
  // Draw fog layers from top to bottom
  for (let row = 0; row < numRows; row++) {
    const y = row * rowHeight;
    // Opacity increases towards bottom and with smog intensity
    const baseOpacity = (row / numRows) * 0.3 * smogIntensity;
    
    // Draw dots and connecting lines for each row
    for (let i = 0; i < numDotsPerRow; i++) {
      // Add perlin noise to position
      const baseX = (i / numDotsPerRow) * width;
      const noiseX = noise(baseX * 0.01, y * 0.01 + time * 0.1) * width * 0.1 * smogIntensity;
      const noiseY = noise(baseX * 0.01 + 100, y * 0.01 + time * 0.1) * rowHeight * 0.5 * smogIntensity;
      
      const x = baseX + noiseX;
      const finalY = y + noiseY;
      
      // Vary opacity with noise and smog intensity
      const opacityNoise = noise(x * 0.02, finalY * 0.02 + time * 0.2) * 0.2 * smogIntensity;
      const opacity = Math.max(0, Math.min(0.4 * smogIntensity, baseOpacity + opacityNoise));
      
      // Draw tiny dot with size affected by smog
      const dotSize = (1 + noise(x, finalY + time) * 2) * smogIntensity;
      const numPoints = 4;
      let prevX = x + dotSize * Math.cos(0);
      let prevY = finalY + dotSize * Math.sin(0);
      
      for (let j = 1; j <= numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2;
        const wobble = 1 + noise(x + j, finalY + time) * 0.3 * smogIntensity;
        const nextX = x + dotSize * Math.cos(angle) * wobble;
        const nextY = finalY + dotSize * Math.sin(angle) * wobble;
        
        drawWobblyLine(
          prevX, prevY,
          nextX, nextY,
          atmosphereColor,
          1,
          opacity
        );
        
        prevX = nextX;
        prevY = nextY;
      }
      
      // Occasionally connect dots with faint wobbly lines - more connections with higher smog
      if (i > 0 && customRandom() < 0.3 * smogIntensity) {
        const prevX = ((i - 1) / numDotsPerRow) * width + 
                     noise((baseX - width/numDotsPerRow) * 0.01, y * 0.01 + time * 0.1) * width * 0.1;
        const prevY = y + noise((baseX - width/numDotsPerRow) * 0.01 + 100, y * 0.01 + time * 0.1) * rowHeight * 0.5;
        
        // Only connect nearby dots
        if (Math.abs(x - prevX) < width * 0.05 * smogIntensity) {
          drawWobblyLine(
            x, finalY,
            prevX, prevY,
            atmosphereColor,
            1,
            opacity * 0.5
          );
        }
      }
    }
  }
}

function drawTopAtmosphere() {
  const time = getSimulatedTime();
  const smogIntensity = getSmogIntensity();
  
  // Use background color as base
  const bgColor = selectedPalette.background;
  // Create much lighter color for top atmosphere
  const atmosphereColor = bgColor.map(c => Math.min(255, c + 60));
  
  // Parameters for top-heavy distribution
  const numRows = Math.floor(30 * smogIntensity);
  const numDotsPerRow = Math.floor(150 * smogIntensity); // More dots for denser effect
  const rowHeight = height / numRows;
  
  // Draw fog layers from top to bottom with strong fade
  for (let row = 0; row < numRows; row++) {
    // Strong opacity at top, fading quickly
    const fadeStrength = Math.pow(1 - (row / numRows), 2); // Quadratic falloff
    if (fadeStrength < 0.1) continue; // Skip almost invisible rows
    
    const y = row * rowHeight;
    const baseOpacity = fadeStrength * 0.6; // Higher base opacity
    
    // More dots in upper rows
    const actualDotsInRow = Math.ceil(numDotsPerRow * fadeStrength);
    
    for (let i = 0; i < actualDotsInRow; i++) {
      // Add stronger perlin noise to position
      const baseX = (i / actualDotsInRow) * width;
      const noiseX = noise(baseX * 0.02 + time * 0.1, y * 0.02) * width * 0.15;
      const noiseY = noise(baseX * 0.02 + 100, y * 0.02 + time * 0.1) * rowHeight;
      
      const x = baseX + noiseX;
      const finalY = y + noiseY;
      
      // Vary opacity with noise
      const opacityNoise = noise(x * 0.03, finalY * 0.03 + time * 0.2) * 0.3;
      const opacity = Math.max(0, Math.min(0.7, baseOpacity + opacityNoise));
      
      // Draw larger dots at the top
      const dotSize = (1 + noise(x, finalY + time) * 2) * (1 + fadeStrength);
      const numPoints = 4;
      let prevX = x + dotSize * Math.cos(0);
      let prevY = finalY + dotSize * Math.sin(0);
      
      for (let j = 1; j <= numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2;
        const wobble = 1 + noise(x + j, finalY + time) * 0.4;
        const nextX = x + dotSize * Math.cos(angle) * wobble;
        const nextY = finalY + dotSize * Math.sin(angle) * wobble;
        
        drawWobblyLine(
          prevX, prevY,
          nextX, nextY,
          atmosphereColor,
          1,
          opacity
        );
        
        prevX = nextX;
        prevY = nextY;
      }
      
      // More connections at the top
      if (i > 0 && customRandom() < fadeStrength * 0.5) {
        const prevX = ((i - 1) / actualDotsInRow) * width + 
                     noise((baseX - width/actualDotsInRow) * 0.02, y * 0.02 + time * 0.1) * width * 0.15;
        const prevY = y + noise((baseX - width/actualDotsInRow) * 0.02 + 100, y * 0.02 + time * 0.1) * rowHeight;
        
        if (Math.abs(x - prevX) < width * 0.08) {
          drawWobblyLine(
            x, finalY,
            prevX, prevY,
            atmosphereColor,
            1,
            opacity * 0.6
          );
        }
      }
      
      // More vertical connections at the top
      if (row > 0 && customRandom() < fadeStrength * 0.3) {
        const upperY = finalY - rowHeight + 
                      noise(x * 0.02, (y - rowHeight) * 0.02 + time * 0.1) * rowHeight;
        
        drawWobblyLine(
          x, finalY,
          x, upperY,
          atmosphereColor,
          1,
          opacity * 0.4
        );
      }
    }
  }
}

// Add drawBirds function after drawTopAtmosphere
function drawBirds() {
  const smogIntensity = getSmogIntensity();
  const wobbleIntensity = getWobbleIntensity();
  // Use deterministic random value instead of time
  const pseudoTime = customRandom() * 1000;
  
  // Fewer birds in heavy smog
  const baseNumBirds = 4;
  const numBirds = Math.max(1, Math.floor(baseNumBirds / smogIntensity));
  
  // Bird parameters
  const wingSpan = 4;
  const baseWingSpread = 0.4;
  const baseFlapSpeed = 10;
  const flapAmplitude = 0.3;
  
  // Define different formation types
  const formationTypes = ['v', 'line', 'cloud'];
  
  // Create flocks with different formations
  const numFlocks = customRandomInt(2, 3); // 2-3 flocks
  const flockCenters = [];
  for (let f = 0; f < numFlocks; f++) {
    // Randomly choose formation type for each flock
    const formationType = formationTypes[customRandomInt(0, formationTypes.length - 1)];
    const vAngle = Math.PI * 0.2 + customRandom() * Math.PI * 0.1; // V angle between 0.2π and 0.3π
    
    flockCenters.push({
      x: width * (0.3 + customRandom() * 0.4),
      y: height * (0.3 + customRandom() * 0.3),
      speed: 0.5 + customRandom() * 0.5,
      direction: -Math.PI/2 + (customRandom() - 0.5) * Math.PI * 0.2, // Mostly upward
      vAngle: vAngle,
      flapOffset: customRandom() * Math.PI * 2,
      formation: formationType
    });
  }
  
  // Use more contrasting colors for better visibility
  const bgColor = selectedPalette.background;
  const avgBgBrightness = (bgColor[0] + bgColor[1] + bgColor[2]) / 3;
  const birdColor = avgBgBrightness > 128 
    ? bgColor.map(c => Math.max(0, c - 160))
    : bgColor.map(c => Math.min(255, c + 160));
  const birdHighlight = avgBgBrightness > 128
    ? bgColor.map(c => Math.max(0, c - 120))
    : bgColor.map(c => Math.min(255, c + 120));
  
  for (let i = 0; i < numBirds; i++) {
    // Assign bird to a flock
    const flockIndex = i % numFlocks;
    const flockCenter = flockCenters[flockIndex];
    
    // Calculate bird position based on formation type
    const birdPseudoTime = pseudoTime + i * 0.1;
    const birdsPerWing = Math.floor((numBirds / numFlocks) / 2);
    const birdIndexInFlock = Math.floor(i / numFlocks);
    
    let baseX = flockCenter.x;
    let baseY = flockCenter.y;
    
    switch(flockCenter.formation) {
      case 'v':
        // V formation positioning
        const wingIndex = birdIndexInFlock % birdsPerWing;
        const isRightWing = Math.floor(birdIndexInFlock / birdsPerWing) % 2 === 1;
        const wingAngle = flockCenter.direction + (isRightWing ? flockCenter.vAngle : -flockCenter.vAngle);
        const distanceFromLeader = wingIndex * 15;
        baseX += Math.cos(wingAngle) * distanceFromLeader;
        baseY += Math.sin(wingAngle) * distanceFromLeader;
        break;
        
      case 'line':
        // Line formation
        const lineSpacing = 12;
        const lineOffset = birdIndexInFlock * lineSpacing;
        baseX += Math.cos(flockCenter.direction) * lineOffset;
        baseY += Math.sin(flockCenter.direction) * lineOffset;
        break;
        
      case 'cloud':
        // Random cloud formation using deterministic values
        const cloudRadius = 30;
        const angle = customRandom() * Math.PI * 2;
        const radius = customRandom() * cloudRadius;
        baseX += Math.cos(angle) * radius;
        baseY += Math.sin(angle) * radius;
        break;
    }
    
    // Add natural variation to position
    const naturalSpread = {
      x: (customRandom() - 0.5) * 5 * wobbleIntensity,
      y: (customRandom() - 0.5) * 5 * wobbleIntensity
    };
    
    // Add slight wave motion using pseudoTime
    const waveAmp = 5;
    const waveFreq = 2;
    const waveOffset = birdIndexInFlock * 0.5;
    const waveX = Math.cos(birdPseudoTime * waveFreq + waveOffset) * waveAmp;
    const waveY = Math.sin(birdPseudoTime * waveFreq + waveOffset) * waveAmp;
    
    const x = baseX + naturalSpread.x + waveX;
    const y = baseY + naturalSpread.y + waveY;
    
    // Individual flap speed and phase variation
    const individualFlapSpeed = baseFlapSpeed * (0.8 + customRandom() * 0.4);
    const individualPhaseOffset = customRandom() * Math.PI * 2;
    const wingPhase = birdPseudoTime * individualFlapSpeed + flockCenter.flapOffset + individualPhaseOffset;
    
    // More dynamic wing movement
    const wingSpread = baseWingSpread + 
                      Math.sin(wingPhase) * flapAmplitude + 
                      Math.sin(wingPhase * 2) * flapAmplitude * 0.3;
    
    // Calculate bird direction based on formation
    let direction = flockCenter.direction;
    if (flockCenter.formation === 'cloud') {
      // Add more variation to direction for cloud formation
      direction += (customRandom() - 0.5) * Math.PI * 0.5;
    } else {
      // Slight random variation for other formations
      direction += (customRandom() - 0.5) * 0.2;
    }
    
    // Create wing shapes
    const leftWingTip = {
      x: x - Math.cos(direction - wingSpread) * wingSpan,
      y: y - Math.sin(direction - wingSpread) * wingSpan
    };
    
    const rightWingTip = {
      x: x - Math.cos(direction + wingSpread) * wingSpan,
      y: y - Math.sin(direction + wingSpread) * wingSpan
    };
    
    const leftWingJoint = {
      x: x - Math.cos(direction - wingSpread * 0.6) * wingSpan * 0.5,
      y: y - Math.sin(direction - wingSpread * 0.6) * wingSpan * 0.5
    };
    
    const rightWingJoint = {
      x: x - Math.cos(direction + wingSpread * 0.6) * wingSpan * 0.5,
      y: y - Math.sin(direction + wingSpread * 0.6) * wingSpan * 0.5
    };
    
    // Add tail
    const tailLength = wingSpan * 0.4;
    const tailSpread = 0.2 + Math.sin(wingPhase * 0.3) * 0.1;
    const tailCenter = {
      x: x - Math.cos(direction) * tailLength,
      y: y - Math.sin(direction) * tailLength
    };
    
    const tailLeft = {
      x: tailCenter.x - Math.cos(direction - tailSpread) * tailLength * 0.3,
      y: tailCenter.y - Math.sin(direction - tailSpread) * tailLength * 0.3
    };
    
    const tailRight = {
      x: tailCenter.x - Math.cos(direction + tailSpread) * tailLength * 0.3,
      y: tailCenter.y - Math.sin(direction + tailSpread) * tailLength * 0.3
    };
    
    // Calculate opacity based on smog
    const opacity = Math.max(0.4, 1 - smogIntensity * 0.3);
    const baseThickness = 1.2;
    
    // Draw bird
    // Left wing
    drawWobblyLine(
      x, y,
      leftWingJoint.x, leftWingJoint.y,
      birdHighlight,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity,
      baseThickness
    );
    drawWobblyLine(
      leftWingJoint.x, leftWingJoint.y,
      leftWingTip.x, leftWingTip.y,
      birdColor,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity * 0.9,
      baseThickness
    );
    
    // Right wing
    drawWobblyLine(
      x, y,
      rightWingJoint.x, rightWingJoint.y,
      birdHighlight,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity,
      baseThickness
    );
    drawWobblyLine(
      rightWingJoint.x, rightWingJoint.y,
      rightWingTip.x, rightWingTip.y,
      birdColor,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity * 0.9,
      baseThickness
    );
    
    // Tail
    drawWobblyLine(
      x, y,
      tailCenter.x, tailCenter.y,
      birdHighlight,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity,
      baseThickness
    );
    drawWobblyLine(
      tailCenter.x, tailCenter.y,
      tailLeft.x, tailLeft.y,
      birdColor,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity * 0.9,
      baseThickness
    );
    drawWobblyLine(
      tailCenter.x, tailCenter.y,
      tailRight.x, tailRight.y,
      birdColor,
      Math.max(2, Math.floor(2 * wobbleIntensity)),
      opacity * 0.9,
      baseThickness
    );
  }
}

// Add drawDogs function
function drawDogs() {
  const smogIntensity = getSmogIntensity();
  const wobbleIntensity = getWobbleIntensity();
  // Use deterministic random value instead of time
  const pseudoTime = customRandom() * 1000;
  
  // Fewer dogs in heavy smog
  const baseNumDogs = 2;
  const numDogs = Math.max(1, Math.floor(baseNumDogs / smogIntensity));
  
  // Dog parameters - sized relative to windows
  const bodyLength = 5; // About 1/3 of typical window width
  
  // Use contrasting colors for better visibility
  const bgColor = selectedPalette.background;
  const avgBgBrightness = (bgColor[0] + bgColor[1] + bgColor[2]) / 3;
  const dogColor = avgBgBrightness > 128 
    ? bgColor.map(c => Math.max(0, c - 160))
    : bgColor.map(c => Math.min(255, c + 160));
  const dogHighlight = avgBgBrightness > 128
    ? bgColor.map(c => Math.max(0, c - 120))
    : bgColor.map(c => Math.min(255, c + 120));
  
  // Calculate ground level based on tower position
  const groundY = height - padding - customRandom(0, 40);
  
  // Different dog behaviors/poses
  const poses = [
    'walking',    // Regular walking
    'sitting',    // Sitting and looking around
    'sniffing',   // Head down, sniffing ground
    'standing',   // Standing still, alert
    'stretching'  // Stretching pose
  ];
  
  // Create array to store dog positions
  const dogPositions = [];
  
  for (let i = 0; i < numDogs; i++) {
    // Give each dog its own personality
    const dogPseudoTime = pseudoTime + i * 0.2;
    const personalityValue = customRandom();
    const pose = poses[customRandomInt(0, poses.length - 1)];
    const speed = 0.5 + customRandom() * 1.5;
    const direction = customRandom() * Math.PI * 2;
    
    // Calculate position with more natural, independent movement
    const baseX = width * (0.1 + customRandom() * 0.8);
    const wobbleX = customRandom() * 30 * wobbleIntensity;
    
    // Ensure different Y positions for each dog
    let wobbleY;
    let y;
    let attempts = 0;
    const maxAttempts = 10;
    const minYDistance = 20; // Minimum distance between dogs
    
    do {
      wobbleY = customRandom() * 30 * wobbleIntensity;
      y = groundY + wobbleY;
      
      // Check if this position is far enough from other dogs
      const isFarEnough = dogPositions.every(pos => Math.abs(pos - y) >= minYDistance);
      
      if (isFarEnough || attempts >= maxAttempts) {
        dogPositions.push(y);
        break;
      }
      
      attempts++;
    } while (attempts < maxAttempts);
    
    const x = baseX + wobbleX;
    
    // Calculate opacity and thickness
    const opacity = Math.max(0.4, 1 - smogIntensity * 0.3);
    const baseThickness = 1.2;
    
    // Draw dog based on pose
    switch(pose) {
      case 'sitting':
        // Shorter body, more upright
        const sitBodyLength = bodyLength * 0.7;
        const sitAngle = Math.PI * 0.25; // Slightly upright
        
        // Body
        drawWobblyLine(
          x, y,
          x + Math.cos(sitAngle) * sitBodyLength,
          y - Math.sin(sitAngle) * sitBodyLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Front legs (shorter)
        const frontLegLength = bodyLength * 0.3;
        drawWobblyLine(
          x + Math.cos(sitAngle) * sitBodyLength,
          y - Math.sin(sitAngle) * sitBodyLength,
          x + Math.cos(sitAngle) * sitBodyLength,
          y - Math.sin(sitAngle) * sitBodyLength + frontLegLength,
          dogColor,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity * 0.9,
          baseThickness
        );
        
        // Head (looking around)
        const headBob = Math.sin(dogPseudoTime * 3) * 0.2 * wobbleIntensity;
        drawWobblyLine(
          x + Math.cos(sitAngle) * sitBodyLength,
          y - Math.sin(sitAngle) * sitBodyLength,
          x + Math.cos(sitAngle + headBob) * (sitBodyLength * 0.4),
          y - Math.sin(sitAngle + headBob) * (sitBodyLength * 0.4),
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        break;
        
      case 'sniffing':
        // Body lowered
        const sniffBodyLength = bodyLength * 0.9;
        const sniffAngle = Math.PI * -0.1; // Nose down
        
        // Body
        drawWobblyLine(
          x, y,
          x + Math.cos(sniffAngle) * sniffBodyLength,
          y + Math.sin(sniffAngle) * sniffBodyLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Sniffing head movement
        const sniffMove = Math.sin(dogPseudoTime * 12) * 0.1;
        drawWobblyLine(
          x + Math.cos(sniffAngle) * sniffBodyLength,
          y + Math.sin(sniffAngle) * sniffBodyLength,
          x + Math.cos(sniffAngle - 0.5 + sniffMove) * (sniffBodyLength * 0.4),
          y + Math.sin(sniffAngle - 0.5 + sniffMove) * (sniffBodyLength * 0.4),
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Legs spread for balance
        const sniffLegSpread = bodyLength * 0.3;
        [-1, 1].forEach(side => {
          drawWobblyLine(
            x + side * sniffLegSpread * 0.3,
            y,
            x + side * sniffLegSpread * 0.3,
            y + bodyLength * 0.4,
            dogColor,
            Math.max(2, Math.floor(2 * wobbleIntensity)),
            opacity * 0.9,
            baseThickness
          );
        });
        break;
        
      case 'standing':
        // Alert upright pose
        const standBodyLength = bodyLength;
        const alertEarAngle = Math.PI * 0.3 + Math.sin(dogPseudoTime * 4) * 0.1 * wobbleIntensity;
        
        // Body
        drawWobblyLine(
          x, y,
          x + Math.cos(0) * standBodyLength,
          y + Math.sin(0) * standBodyLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Alert head position
        const alertHeadAngle = Math.sin(dogPseudoTime * 2) * 0.1 * wobbleIntensity;
        drawWobblyLine(
          x + standBodyLength,
          y,
          x + standBodyLength + Math.cos(alertHeadAngle) * (bodyLength * 0.4),
          y + Math.sin(alertHeadAngle) * (bodyLength * 0.4),
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Perked ears
        drawWobblyLine(
          x + standBodyLength + Math.cos(alertHeadAngle) * (bodyLength * 0.4),
          y + Math.sin(alertHeadAngle) * (bodyLength * 0.4),
          x + standBodyLength + Math.cos(alertHeadAngle + alertEarAngle) * (bodyLength * 0.3),
          y + Math.sin(alertHeadAngle + alertEarAngle) * (bodyLength * 0.3),
          dogColor,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity * 0.9,
          baseThickness
        );
        break;
        
      case 'stretching':
        // Stretching pose (play bow)
        const stretchFrontLength = bodyLength * 0.6;
        const stretchBackLength = bodyLength * 0.8;
        const stretchAngle = Math.PI * -0.2;
        
        // Front legs and chest
        drawWobblyLine(
          x, y,
          x,
          y - stretchFrontLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Stretched body
        drawWobblyLine(
          x,
          y - stretchFrontLength,
          x + Math.cos(stretchAngle) * stretchBackLength,
          y - stretchFrontLength + Math.sin(stretchAngle) * stretchBackLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Wagging tail in stretch
        const stretchWag = Math.sin(dogPseudoTime * 8) * 0.4 * wobbleIntensity;
        drawWobblyLine(
          x + Math.cos(stretchAngle) * stretchBackLength,
          y - stretchFrontLength + Math.sin(stretchAngle) * stretchBackLength,
          x + Math.cos(stretchAngle + stretchWag) * (bodyLength * 0.4),
          y - stretchFrontLength + Math.sin(stretchAngle + stretchWag) * (bodyLength * 0.4),
          dogColor,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity * 0.9,
          baseThickness
        );
        break;
        
      default: // 'walking'
        // Regular walking animation
        const walkPhase = dogPseudoTime * speed * 8;
        const legLift = (Math.sin(walkPhase) * 0.5 + 0.5) * 3 * wobbleIntensity;
        
        // Body
        drawWobblyLine(
          x, y,
          x + Math.cos(direction) * bodyLength,
          y + Math.sin(direction) * bodyLength,
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Head
        const headBobWalk = Math.sin(walkPhase) * 0.1;
        drawWobblyLine(
          x + Math.cos(direction) * bodyLength,
          y + Math.sin(direction) * bodyLength,
          x + Math.cos(direction + headBobWalk) * (bodyLength * 0.4),
          y + Math.sin(direction + headBobWalk) * (bodyLength * 0.4),
          dogHighlight,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity,
          baseThickness
        );
        
        // Walking legs
        const legPhases = [0, Math.PI, Math.PI/2, Math.PI*1.5];
        legPhases.forEach((phase, index) => {
          const legLiftAmount = Math.sin(walkPhase + phase) * legLift;
          const legX = x + (index < 2 ? bodyLength * 0.7 : 0);
          drawWobblyLine(
            legX, y,
            legX, y + bodyLength * 0.4 - legLiftAmount,
            dogColor,
            Math.max(2, Math.floor(2 * wobbleIntensity)),
            opacity * 0.9,
            baseThickness
          );
        });
        
        // Tail
        const tailWag = Math.sin(walkPhase * 2) * 0.3 * wobbleIntensity;
        drawWobblyLine(
          x, y,
          x - Math.cos(direction + tailWag) * (bodyLength * 0.4),
          y - Math.sin(direction + tailWag) * (bodyLength * 0.4),
          dogColor,
          Math.max(2, Math.floor(2 * wobbleIntensity)),
          opacity * 0.9,
          baseThickness
        );
        break;
    }
  }
}

// Update main function to include dogs
function main() {
  let attempts = 0;
  const maxAttempts = 10;

  function tryDraw() {
    setup();
    
    // Generate tower structure first
    drawTower(false);
    
    const smogIntensity = getSmogIntensity();
    applyGrainEffect(0.25 * smogIntensity, true);
    drawAtmosphere();
    
    // Draw tower with path and increment beam counter
    beamCounter++;
    drawTower(true);
    
    drawBirds();
    drawDogs();
    applyGrainEffect(0.15 * smogIntensity);
    applyGrainEffect(0.25 * smogIntensity, true);
    drawTopAtmosphere();
    
    if (isCanvasEmpty() && attempts < maxAttempts) {
      attempts++;
      console.log(`Canvas empty, retrying... Attempt ${attempts}/${maxAttempts}`);
      xoshiro128ss.setSeed($fx.hash || Math.floor(customRandom() * 9999999).toString());
      tryDraw();
    }
  }

  tryDraw();
}

main();

$fx.on(
  "params:update",
  newRawValues => {
    // Reset random seed on parameter update
    xoshiro128ss.setSeed($fx.hash || Math.floor(customRandom() * 9999999).toString());
    // Always refresh on parameter change
    return true;
  },
  (optInDefault, newValues) => {
    // Clear canvas before redrawing
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    main();
  }
)

// Update drawTower and drawCube to use specific aspect ratios
function getRandomAspectRatio() {
  const ratios = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3];
  return ratios[customRandomInt(0, ratios.length - 1)];
}

function drawNoisyPath(startX, startY, endX, endY, color) {
  const wobbleIntensity = getWobbleIntensity();
  // More segments for higher wobbliness
  const segments = Math.max(3, Math.floor(10 * wobbleIntensity)); // Base segments scaled by wobble
  const points = [];
  
  // Create contrasting colors
  const darkColor = color.map(c => Math.max(0, c - 80));
  const lightColor = color.map(c => Math.min(255, c + 80));
  
  // Generate points with minimal curves
  points.push({ x: startX, y: startY });
  
  // Add intermediate points with wobble based on intensity
  for (let i = 1; i < segments - 1; i++) {
    const t = i / segments;
    const baseX = startX + (endX - startX) * t;
    const baseY = startY + (endY - startY) * t;
    
    // Scale displacement by wobble intensity
    const noiseScale = Math.min(width, height) * 0.015 * wobbleIntensity;
    const noiseValue = noise(t * 2, t * 2) * 2 - 1;
    
    // Calculate perpendicular direction for wobble
    const dx = endX - startX;
    const dy = endY - startY;
    const len = Math.sqrt(dx * dx + dy * dy);
    const perpX = -dy / len;
    const perpY = dx / len;
    
    // Add point with displacement scaled by wobble
    points.push({
      x: baseX + perpX * noiseValue * noiseScale * Math.sin(t * Math.PI),
      y: baseY + perpY * noiseValue * noiseScale * Math.sin(t * Math.PI)
    });
  }
  
  points.push({ x: endX, y: endY });
  
  // Draw main path with parallel lines
  for (let i = 1; i < points.length; i++) {
    const progress = i / points.length;
    const opacity = 0.95;
    
    // Draw multiple parallel lines with consistent thickness
    for (let j = 0; j < 3; j++) {
      const offset = (j - 1) * 0.8;
      const useColor = j % 2 === 0 ? lightColor : darkColor;
      
      drawWobblyLine(
        points[i-1].x + offset,
        points[i-1].y + offset,
        points[i].x + offset,
        points[i].y + offset,
        useColor,
        Math.max(1, Math.floor(5 * wobbleIntensity)), // More segments for higher wobbliness
        opacity
      );
    }
  }
}

function drawBeams(vertices) {
  // Get the top face vertices of the cube
  const topFaceVertices = [
    vertices[0], // front-left
    vertices[1], // front-right
    vertices[5], // back-right
    vertices[4]  // back-left
  ];

  // Set beam properties
  const beamOpacity = 40; // Opacity of the beams
  const beamColor = [255, 255, 255]; // White color for beams

  // Draw beams from each vertex
  topFaceVertices.forEach((vertex, i) => {
    const startX = vertex[0];
    const startY = vertex[1];
    const endX = startX;
    const endY = 0; // Go to the top of the canvas

    // Draw the main beam
    drawWobblyLine(
      startX, startY,
      endX, endY,
      beamColor,
      25, // More segments for smoother wobble
      beamOpacity/100
    );

  });
}

