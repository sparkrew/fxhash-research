// p5.js sketch generating 800x800 images with dithering & Xerox-style textures
// Uses fxhash seed via $fx to create deterministic outputs across runs.

// Layout constants
const BASE_CANVAS_SIZE = 800
const OUTER_GREY = 20 // light grey border outside the art
const INNER_BORDER = 4 // near-black border around art
const EXPORT_ART_SIZE = 2048 // higher resolution composite for downloads
const SCALE_FACTOR = 0.9 // css scale for display while keeping internal resolution fixed

let pg // inner artwork buffer
let seedInt
let mainRenderer
let isExportingScreenshot = false
let displayCanvasSize = BASE_CANVAS_SIZE // CSS display size (internal size stays fixed)
let fxContext = 'standalone'
let previewTriggered = false

// Dithering modes (string keys used in $fx params)
const DITHER_MODES = ["floyd-steinberg", "bayer-4", "threshold"]
const DEFAULT_PARAMS = {
  dithering_mode: "floyd-steinberg",
  grain_intensity: 0.32,
  contrast_breakdown: 0.24,
  streak_density: 0.35,
  misalignment: 3.2,
  cube_depth: 0.5,
  panel_density: 0.5,
  ink_variation: 0.5,
  tone_shift: 0,
  scanline_mode: "tight",
  line_density: 0.5,
  blur_intensity: 0.3,
  vignette_strength: 0.4,
  distortion_amount: 0.25,
  warp_strength: 0.4,
  dust_density: 0.4,
  banding_strength: 0.35,
}

function setup() {
  fxContext = getFxContext()
  // internal render is fixed-size; we only scale the CSS box for display
  const renderer = createCanvas(BASE_CANVAS_SIZE, BASE_CANVAS_SIZE)
  optimizeContext(renderer)
  pixelDensity(1)
  mainRenderer = renderer
  applyDisplaySize()

  // determine inner artwork area size using fixed internal resolution
  const innerSize = BASE_CANVAS_SIZE - 2 * (OUTER_GREY + INNER_BORDER)
  pg = createGraphics(innerSize, innerSize)
  optimizeContext(pg)
  pg.pixelDensity(1)

  // seed derived from fxhash for deterministic randomness
  seedInt = computeSeedFromFxHash($fx.hash)
  randomSeed(seedInt)
  noiseSeed(seedInt)

  // no canvas smoothing — keep halftone/dither crisp
  noSmooth()
  pg.noSmooth()

  // render once (single edition) — rerender on user request
  renderArtwork()
  registerFxParamUpdates()
}

function draw() {
  // static artwork rendered in setup(); draw just composes borders and inner PG
  noLoop()

  // Outside light grey border (match page background)
  background('#f2f2f2')
  fill('#f2f2f2')
  noStroke()
  rect(0, 0, BASE_CANVAS_SIZE, BASE_CANVAS_SIZE)

  // Draw the inner frame: a light outer band, then 4px near-black stroke around artwork.
  const x = OUTER_GREY
  const y = OUTER_GREY
  const s = BASE_CANVAS_SIZE - 2 * OUTER_GREY // overall framed area

  // place artwork image inside the clean border
  image(pg, x + INNER_BORDER, y + INNER_BORDER)

  // The solid near-black 4px border (drawn on top of the artwork)
  stroke('#111111')
  strokeWeight(INNER_BORDER)
  noFill()
  rect(
    x + INNER_BORDER / 2,
    y + INNER_BORDER / 2,
    s - INNER_BORDER,
    s - INNER_BORDER
  )

  // trigger fxhash preview capture once rendering is done
  triggerFxPreviewOnce()
}

// Handle viewport resize
function windowResized() {
  if (isExportingScreenshot) return
  if (isCaptureContext()) return // keep capture size fixed
  applyDisplaySize()
}

// Create the art on the inner graphics buffer pg
function renderArtwork(target, paramsOverride) {
  const g = target || pg
  if (!g) return

  const params = paramsOverride || collectParamsFromFx()

  // Prepare buffer with a subtle paper tone background
  g.push()
  g.background(240)

  // base texture: layered Perlin noise + gradient for tonal interest
  g.noiseDetail(2, 0.55)
  drawNoiseField(g, params)
  applyContrastBreakdown(g, params)
  renderCubeGrid(g, params)
  addHalftonePanels(g, params)
  addScanLines(g, params)
  addEdgeBurn(g, params)

  // misaligned channels: print-like CMY register offsets to create toner misalignment
  addMisalignedChannels(g, params)

  // add streaks to emulate printer drifts
  addStreaks(g, params)

  // apply low-contrast smears / blur occasional regions
  applySmear(g, params)

  // convert to grayscale then apply dithering
  applyDithering(g, params)

  // toner grain and paper overlay
  addTonerGrain(g, params)
  addPaperNoise(g, params)

  // additional generative layers for uniqueness
  addRandomLinePatterns(g, params)
  addBandingArtifacts(g, params)
  addTonerDust(g, params)
  addDistortionWaves(g, params)
  applyPaperWarp(g, params)
  addVignetteEffect(g, params)

  g.pop()
}

// UTIL: create deterministic seed from $fx.hash string
function computeSeedFromFxHash(h) {
  // fold the hash into a 32-bit integer reproducibly
  let seed = 0
  for (let i = 0; i < Math.min(h.length, 20); i++) {
    seed = (seed * 31 + h.charCodeAt(i)) % 2147483647
  }
  return seed
}

// Collect parameters from $fx (with sensible defaults if not present)
function collectParamsFromFx() {
  const snapshot = typeof getFxParams === 'function'
    ? { ...DEFAULT_PARAMS, ...getFxParams() }
    : { ...DEFAULT_PARAMS }
  return {
    ditheringMode: snapshot.dithering_mode,
    grainIntensity: snapshot.grain_intensity,
    contrastBreakdown: snapshot.contrast_breakdown,
    streakDensity: snapshot.streak_density,
    misalignment: snapshot.misalignment,
    cubeDepth: snapshot.cube_depth,
    panelDensity: snapshot.panel_density,
    inkVariation: snapshot.ink_variation,
    toneShift: snapshot.tone_shift,
    scanlineMode: snapshot.scanline_mode,
    lineDensity: snapshot.line_density,
    blurIntensity: snapshot.blur_intensity,
    vignetteStrength: snapshot.vignette_strength,
    distortionAmount: snapshot.distortion_amount,
    warpStrength: snapshot.warp_strength,
    dustDensity: snapshot.dust_density,
    bandingStrength: snapshot.banding_strength,
  }
}

// --- EFFECTS ---

function drawNoiseField(g, params) {
  // low-frequency noise for subtle shading
  const w = g.width
  const h = g.height
  g.loadPixels()
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const n = noise(x / 400 + 12.34, y / 400 + 78.21)
      const idx = (x + y * w) * 4
      const v = 220 - n * 80 // base tonal range
      g.pixels[idx] = v
      g.pixels[idx + 1] = v
      g.pixels[idx + 2] = v
      g.pixels[idx + 3] = 255
    }
  }
  g.updatePixels()

  // Add subtle shapes/gradients with random seeds
  g.noStroke()
  g.blendMode(BLEND)
  g.fill(0, 0, 0, 12)
  g.ellipse(w * 0.35, h * 0.42, w * 0.7, h * 0.46)
  g.fill(0, 0, 0, 8)
  g.ellipse(w * 0.7, h * 0.65, w * 0.4, h * 0.26)
}

function renderCubeGrid(g, params) {
  const grid = 3
  const baseGap = g.width * 0.02
  const gap = clamp(baseGap + (1 - params.panelDensity) * g.width * 0.05, g.width * 0.015, g.width * 0.08)
  const depthRatioX = mapRange(params.cubeDepth, 0, 1, 0.12, 0.34)
  const depthRatioY = depthRatioX * mapRange(params.cubeDepth, 0, 1, 1.05, 1.3)
  const cubeSizeByWidth = (g.width - gap * (grid + 1)) / (grid + depthRatioX)
  const cubeSizeByHeight = (g.height - gap * (grid + 1)) / (grid + depthRatioY)
  const cubeSize = Math.min(cubeSizeByWidth, cubeSizeByHeight)
  const depthX = cubeSize * depthRatioX
  const depthY = cubeSize * depthRatioY
  const footprintWidth = cubeSize * grid + gap * (grid - 1) + depthX
  const footprintHeight = cubeSize * grid + gap * (grid - 1) + depthY
  const startX = (g.width - footprintWidth) / 2 + depthX
  const startY = (g.height - footprintHeight) / 2 + depthY

  let tileIndex = 0
  for (let row = 0; row < grid; row++) {
    const y = startY + row * (cubeSize + gap)
    for (let col = 0; col < grid; col++) {
      const x = startX + col * (cubeSize + gap)
      // Add seed-based random position offset for chaotic look
      const rng = makeRng(seedInt + tileIndex * 9973)
      const offsetX = randRange(rng, -cubeSize * 0.08, cubeSize * 0.08)
      const offsetY = randRange(rng, -cubeSize * 0.08, cubeSize * 0.08)
      drawCubePrimitive(g, x + offsetX, y + offsetY, cubeSize, depthX, depthY, params, tileIndex++)
    }
  }
}

function drawCubePrimitive(g, x, y, size, depthX, depthY, params, tileIndex) {
  const rng = makeRng(seedInt + tileIndex * 7919)
  const tone = params.toneShift * 60
  const baseShade = clamp(lerp(110, 220, rng()) + tone, 40, 245)
  const topShade = clamp(baseShade + lerp(20, 55, rng()), 0, 255)
  const rightShade = clamp(baseShade - lerp(25, 65, rng()), 0, 255)
  const leftShade = clamp(baseShade - lerp(15, 35, rng()), 0, 255)

  fillFace(g, [
    { x: x - depthX, y: y - depthY },
    { x: x + size - depthX, y: y - depthY },
    { x: x + size, y: y },
    { x: x, y: y },
  ], topShade)

  fillFace(g, [
    { x: x + size, y: y },
    { x: x + size - depthX, y: y - depthY },
    { x: x + size - depthX, y: y + size - depthY },
    { x: x + size, y: y + size },
  ], rightShade)

  fillFace(g, [
    { x: x, y: y },
    { x: x - depthX, y: y - depthY },
    { x: x - depthX, y: y + size - depthY },
    { x: x, y: y + size },
  ], leftShade)

  textureFrontFace(g, x, y, size, baseShade, rng, params)

  g.push()
  g.stroke(0, 120)
  g.strokeWeight(1)
  g.line(x - depthX, y - depthY, x + size - depthX, y - depthY)
  g.line(x - depthX, y - depthY, x, y)
  g.line(x + size - depthX, y - depthY, x + size, y)
  g.noFill()
  g.rect(x, y, size, size)
  g.pop()

  drawCubeInks(g, x, y, size, depthX, depthY, rng, params)
}

function fillFace(g, vertices, shade) {
  g.push()
  g.noStroke()
  g.fill(shade)
  g.beginShape()
  vertices.forEach(pt => g.vertex(pt.x, pt.y))
  g.endShape(CLOSE)
  g.pop()
}

function textureFrontFace(g, x, y, size, shade, rng, params) {
  const ctx = g.drawingContext
  ctx.save()
  ctx.beginPath()
  ctx.rect(x, y, size, size)
  ctx.clip()

  g.noStroke()
  g.fill(shade)
  g.rect(x, y, size, size)

  const layerCount = 3 + Math.floor(params.inkVariation * 4)
  for (let i = 0; i < layerCount; i++) {
    const alpha = 18 + rng() * 50 * params.inkVariation
    const bandHeight = size * randRange(rng, 0.04, 0.3)
    const bandY = y + randRange(rng, -0.1, 1.1) * size
    g.fill(0, alpha)
    g.rect(x - size * 0.1, bandY, size * 1.2, bandHeight)
  }

  const dotCount = Math.floor(90 + params.grainIntensity * 280 + params.inkVariation * 200)
  g.stroke(0, 60 + params.inkVariation * 60)
  g.strokeWeight(mapRange(params.inkVariation, 0, 1, 0.4, 0.9))
  for (let i = 0; i < dotCount; i++) {
    g.point(x + rng() * size, y + rng() * size)
  }

  const ringCount = 5 + Math.floor(params.inkVariation * 6)
  g.noFill()
  g.stroke(255, 25 + params.inkVariation * 25)
  for (let i = 0; i < ringCount; i++) {
    const cx = x + rng() * size
    const cy = y + rng() * size
    const rad = size * randRange(rng, 0.08, 0.32)
    g.ellipse(cx, cy, rad, rad * randRange(rng, 0.4, 1.4))
  }

  ctx.restore()
}

function drawCubeInks(g, x, y, size, depthX, depthY, rng, params) {
  g.push()
  const diagLines = 4 + Math.floor(params.inkVariation * 6)
  g.stroke(0, 40 + params.contrastBreakdown * 120)
  g.strokeWeight(1)
  for (let i = 0; i < diagLines; i++) {
    const t = (i + 0.3) / (diagLines + 0.6)
    const x1 = x + t * size
    const x2 = x + t * size - size * randRange(rng, 0.4, 0.9)
    g.line(x1, y, x2, y + size)
  }

  const streakCount = 2 + Math.floor(params.streakDensity * 8)
  g.stroke(0, 30 + params.streakDensity * 140)
  for (let i = 0; i < streakCount; i++) {
    const yPos = y + randRange(rng, 0.1, 0.95) * size
    g.line(
      x - size * randRange(rng, 0.05, 0.15),
      yPos,
      x + size * randRange(rng, 1.0, 1.15),
      yPos + randRange(rng, -0.05, 0.05) * size
    )
  }

  const flecks = Math.floor(60 + params.grainIntensity * 260)
  g.stroke(0, 80)
  g.strokeWeight(mapRange(params.grainIntensity, 0, 1, 0.4, 0.8))
  for (let i = 0; i < flecks; i++) {
    g.point(x + rng() * size, y + rng() * size)
  }

  g.stroke(255, 30 + params.inkVariation * 40)
  g.strokeWeight(mapRange(params.inkVariation, 0, 1, 0.6, 1.2))
  g.line(
    x + size * randRange(rng, 0.05, 0.2),
    y + size * randRange(rng, 0.05, 0.2),
    x + size * randRange(rng, 0.7, 0.95),
    y + size * randRange(rng, -0.02, 0.15)
  )
  g.pop()
}

function addHalftonePanels(g, params) {
  const w = g.width
  const h = g.height
  const densityFactor = (params.panelDensity + params.contrastBreakdown) * 0.5
  const count = Math.max(1, Math.round(mapRange(densityFactor, 0, 1, 1, 7)))
  for (let i = 0; i < count; i++) {
    const panelW = Math.round(random(w * 0.25, w * 0.6))
    const panelH = Math.round(random(h * 0.18, h * 0.45))
    const panel = createGraphics(panelW, panelH)
    panel.pixelDensity(1)
    panel.clear()
    panel.noStroke()
    const spacing = random(4, 11 - params.panelDensity * 4)
    const jitter = random(0.1, 0.6)
    for (let y = spacing / 2; y < panelH; y += spacing) {
      for (let x = spacing / 2; x < panelW; x += spacing) {
        const intensity = noise(x * 0.03 + i * 11.3, y * 0.03 + seedInt * 0.002)
        const size = spacing * (0.18 + intensity * 0.9)
        const alpha = clamp(mapRange(intensity, 0, 1, 20, 120), 10, 150)
        panel.fill(0, alpha)
        panel.circle(
          x + random(-spacing * jitter, spacing * jitter),
          y + random(-spacing * jitter, spacing * jitter),
          size
        )
      }
    }
    panel.push()
    panel.noFill()
    panel.stroke(0, 25)
    panel.strokeWeight(1)
    panel.rect(2, 2, panelW - 4, panelH - 4)
    panel.pop()

    const cx = random(w * 0.15, w * 0.85)
    const cy = random(h * 0.2, h * 0.8)
    g.push()
    g.translate(cx, cy)
    g.rotate(random(-PI / 8, PI / 7))
    g.image(panel, -panelW / 2, -panelH / 2)
    g.pop()
  }
}

function addScanLines(g, params) {
  g.push()
  const spacing = params.scanlineMode === 'tight' ? 3 + params.grainIntensity * 1.5 : 5.5 + params.grainIntensity * 2
  for (let y = 0; y < g.height; y += spacing) {
    const osc = noise(y * 0.04 + seedInt * 0.005)
    const alphaBase = mapRange(osc, 0, 1, 8, 40)
    const alpha = clamp(alphaBase + params.grainIntensity * 40 + (params.scanlineMode === 'tight' ? 10 : 0), 10, 85)
    g.stroke(0, alpha)
    g.strokeWeight(params.scanlineMode === 'tight' ? random(0.4, 1.1) : random(0.7, 1.8))
    const offset = random(-3, 3)
    g.line(-offset, y + offset * 0.05, g.width + offset, y + offset * 0.05)
  }
  g.pop()
}

function addEdgeBurn(g, params) {
  const w = g.width
  const h = g.height
  const burn = createGraphics(w, h)
  burn.pixelDensity(1)
  burn.loadPixels()
  const maxDist = Math.min(w, h) * 0.5
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (x + y * w) * 4
      const dist = Math.min(x, y, w - 1 - x, h - 1 - y)
      const t = dist / maxDist
      const alpha = clamp(
        mapRange(t, 0, 1, 140 * (0.35 + params.contrastBreakdown), 0) + params.toneShift * 60,
        0,
        185
      )
      burn.pixels[idx] = 0
      burn.pixels[idx + 1] = 0
      burn.pixels[idx + 2] = 0
      burn.pixels[idx + 3] = alpha
    }
  }
  burn.updatePixels()
  g.push()
  g.blendMode(MULTIPLY)
  g.image(burn, 0, 0)
  g.pop()
}

function addMisalignedChannels(g, params) {
  // Simulate xerox misalignment by re-drawing the image with tiny offsets
  // duplicate pg into tmp layers and composite
  const tmp = createGraphics(g.width, g.height)
  tmp.image(g, 0, 0)

  // three plate overlays: dark cyan-magenta type, but we keep it near monochrome
  for (let i = 0; i < 3; i++) {
    const dx = Math.round((i === 0 ? -1 : i === 1 ? 1 : 0) * params.misalignment + (random() - 0.5) * 2)
    const dy = Math.round((i === 0 ? 1 : i === 1 ? -0.5 : 0) * params.misalignment + (random() - 0.5) * 2)
    g.tint(255, 255) // keep luminance
    g.image(tmp, dx, dy)
  }
}

function addStreaks(g, params) {
  g.push()
  g.stroke(0, 10)
  g.strokeWeight(1)
  g.noFill()
  for (let i = 0; i < Math.floor(params.streakDensity * 50); i++) {
    const x = random(g.width)
    g.stroke(0, 12 + random() * 70)
    g.strokeWeight(1 + random() * 2)
    g.line(x, random(g.height * 0.05), x + random(-4, 4), g.height - random(g.height * 0.05))
  }
  g.pop()
}

function applySmear(g, params) {
  // softly blur a few random rectangles to simulate toner smear
  for (let i = 0; i < 6; i++) {
    const x = random(g.width * 0.1, g.width * 0.9)
    const y = random(g.height * 0.1, g.height * 0.9)
    const w = random(g.width * 0.05, g.width * 0.3)
    const h = random(g.height * 0.03, g.height * 0.12)
    const tmp = createGraphics(Math.ceil(w), Math.ceil(h))
    tmp.image(g, -x, -y)
    tmp.filter(BLUR, random(0.5, 3))
    g.image(tmp, x + random(-5, 5), y + random(-5, 5))
  }
}

// Apply grayscale dithering to the pg buffer
function applyDithering(g, params) {
  const mode = params.ditheringMode
  if (mode === 'bayer-4') {
    orderedDitherBayer(g)
  } else {
    floydSteinbergDither(g)
  }
}

function orderedDitherBayer(g) {
  const bayer4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ]
  g.loadPixels()
  const w = g.width
  const h = g.height
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (x + y * w) * 4
      const v = g.pixels[idx]
      const m = (bayer4[y % 4][x % 4] + 0.5) / 16
      const thr = m * 255
      const c = v > thr ? 255 : 0
      g.pixels[idx] = c
      g.pixels[idx + 1] = c
      g.pixels[idx + 2] = c
    }
  }
  g.updatePixels()
}

function floydSteinbergDither(g) {
  g.loadPixels()
  const w = g.width
  const h = g.height
  const pixels = g.pixels
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (x + y * w) * 4
      const oldPixel = pixels[idx]
      const newPixel = oldPixel > 128 ? 255 : 0
      pixels[idx] = newPixel
      pixels[idx + 1] = newPixel
      pixels[idx + 2] = newPixel
      const err = oldPixel - newPixel
      // distribute error
      distributeError(pixels, x + 1, y, w, h, err * 7 / 16)
      distributeError(pixels, x - 1, y + 1, w, h, err * 3 / 16)
      distributeError(pixels, x, y + 1, w, h, err * 5 / 16)
      distributeError(pixels, x + 1, y + 1, w, h, err * 1 / 16)
    }
  }
  g.updatePixels()
}

function distributeError(pixels, x, y, w, h, e) {
  if (x < 0 || x >= w || y < 0 || y >= h) return
  const idx = (x + y * w) * 4
  pixels[idx] = clamp(pixels[idx] + e, 0, 255)
  pixels[idx + 1] = clamp(pixels[idx + 1] + e, 0, 255)
  pixels[idx + 2] = clamp(pixels[idx + 2] + e, 0, 255)
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v))
}

function addTonerGrain(g, params) {
  const n = params.grainIntensity
  g.loadPixels()
  for (let y = 0; y < g.height; y++) {
    for (let x = 0; x < g.width; x++) {
      const idx = (x + y * g.width) * 4
      const grain = (random() - 0.5) * 255 * n
      g.pixels[idx] = clamp(g.pixels[idx] + grain, 0, 255)
      g.pixels[idx + 1] = clamp(g.pixels[idx + 1] + grain, 0, 255)
      g.pixels[idx + 2] = clamp(g.pixels[idx + 2] + grain, 0, 255)
    }
  }
  g.updatePixels()
}

function addPaperNoise(g, params) {
  // translucent paper texture: lighten with noise
  const tile = createGraphics(g.width, g.height)
  tile.noStroke()
  tile.loadPixels()
  for (let y = 0; y < g.height; y++) {
    for (let x = 0; x < g.width; x++) {
      const idx = (x + y * g.width) * 4
      const v = noise(x / 12, y / 12) * 50 + random() * 12
      tile.pixels[idx] = 255
      tile.pixels[idx + 1] = 255
      tile.pixels[idx + 2] = 255
      tile.pixels[idx + 3] = clamp(10 + v * params.grainIntensity, 0, 140)
    }
  }
  tile.updatePixels()
  g.image(tile, 0, 0)
}

function applyContrastBreakdown(g, params) {
  const c = params.contrastBreakdown
  const curve = mapRange(c, 0, 1, 0.65, 1.45)
  g.loadPixels()
  for (let y = 0; y < g.height; y++) {
    for (let x = 0; x < g.width; x++) {
      const idx = (x + y * g.width) * 4
      const centered = g.pixels[idx] - 128
      const adjusted = clamp(128 + centered * curve, 0, 255)
      g.pixels[idx] = adjusted
      g.pixels[idx + 1] = adjusted
      g.pixels[idx + 2] = adjusted
    }
  }
  g.updatePixels()
}

function optimizeContext(renderer) {
  if (!renderer) return
  const canvasEl = renderer.canvas || renderer.elt || renderer.drawingContext?.canvas
  if (!canvasEl || typeof canvasEl.getContext !== 'function') return
  try {
    canvasEl.getContext('2d', { willReadFrequently: true })
  } catch (err) {
    // ignore if context already initialized
  }
}

function getFxContext() {
  if (typeof $fx !== 'undefined' && $fx && typeof $fx.context === 'string') return $fx.context
  return 'standalone'
}

function isCaptureContext(ctx = fxContext) {
  return ctx === 'capture' || ctx === 'fast-capture'
}

function computeDisplaySize() {
  if (isCaptureContext()) return BASE_CANVAS_SIZE
  const maxDim = Math.min(windowWidth || BASE_CANVAS_SIZE, windowHeight || BASE_CANVAS_SIZE) * SCALE_FACTOR
  return clamp(Math.max(200, maxDim), 200, BASE_CANVAS_SIZE)
}

function applyDisplaySize() {
  const size = computeDisplaySize()
  displayCanvasSize = size
  const canvasEl = getRendererCanvasElement()
  if (canvasEl) {
    canvasEl.style.width = `${size}px`
    canvasEl.style.height = `${size}px`
  }
}

function registerFxParamUpdates() {
  if (typeof $fx === 'undefined' || typeof $fx.on !== 'function') return
  if (registerFxParamUpdates._registered) return
  $fx.on('params:update', () => {
    rerenderFromCurrentState()
    return true
  })
  registerFxParamUpdates._registered = true
}

function rerenderFromCurrentState() {
  if (typeof $fx !== 'undefined') {
    seedInt = computeSeedFromFxHash($fx.hash)
  }
  randomSeed(seedInt)
  noiseSeed(seedInt)
  renderArtwork()
  redraw()
}

function triggerFxPreviewOnce() {
  if (previewTriggered) return
  if (!isCaptureContext()) return
  if (typeof $fx !== 'undefined' && typeof $fx.preview === 'function' && !isExportingScreenshot) {
    previewTriggered = true
    $fx.preview()
  }
}

function keyTyped() {
  if (key === 's' || key === 'S') {
    exportArtworkScreenshot()
    return false
  }
}

async function exportArtworkScreenshot() {
  if (isExportingScreenshot) return
  if (typeof html2canvas !== 'function') {
    console.warn('html2canvas is required for screenshot exports')
    return
  }

  isExportingScreenshot = true
  let exportPg = null

  try {
    const params = collectParamsFromFx()
    const exportOuter = OUTER_GREY
    const exportBorder = INNER_BORDER
    const exportInnerSize = EXPORT_ART_SIZE - 2 * (exportOuter + exportBorder)

    exportPg = createGraphics(exportInnerSize, exportInnerSize)
    optimizeContext(exportPg)
    exportPg.pixelDensity(1)
    renderArtwork(exportPg, params)

    const composite = document.createElement('canvas')
    composite.width = EXPORT_ART_SIZE
    composite.height = EXPORT_ART_SIZE
    const ctx = composite.getContext('2d', { willReadFrequently: true })
    ctx.fillStyle = '#111111'
    ctx.fillRect(0, 0, EXPORT_ART_SIZE, EXPORT_ART_SIZE)
    const exportCanvasEl = exportPg.canvas || exportPg.elt || exportPg.drawingContext?.canvas
    ctx.drawImage(
      exportCanvasEl,
      exportOuter + exportBorder,
      exportOuter + exportBorder,
      exportInnerSize,
      exportInnerSize
    )
    ctx.lineWidth = exportBorder
    ctx.strokeStyle = '#111111'
    ctx.strokeRect(
      exportOuter + exportBorder / 2,
      exportOuter + exportBorder / 2,
      EXPORT_ART_SIZE - 2 * exportOuter - exportBorder,
      EXPORT_ART_SIZE - 2 * exportOuter - exportBorder
    )

    const rendererCanvas = getRendererCanvasElement()
    const canvasRect = rendererCanvas ? rendererCanvas.getBoundingClientRect() : null
    const baseWidth = Math.max(1, window.innerWidth || document.documentElement.clientWidth || EXPORT_ART_SIZE)
    const baseHeight = Math.max(1, window.innerHeight || document.documentElement.clientHeight || EXPORT_ART_SIZE)
    const viewportAspect = baseWidth && baseHeight ? baseWidth / baseHeight : 1
    let viewportWidth = EXPORT_ART_SIZE
    let viewportHeight = EXPORT_ART_SIZE
    if (Number.isFinite(viewportAspect) && viewportAspect > 0) {
      if (viewportAspect >= 1) {
        viewportWidth = EXPORT_ART_SIZE
        viewportHeight = Math.max(1, Math.round(EXPORT_ART_SIZE / viewportAspect))
      } else {
        viewportHeight = EXPORT_ART_SIZE
        viewportWidth = Math.max(1, Math.round(EXPORT_ART_SIZE * viewportAspect))
      }
    }

    const viewportCanvas = document.createElement('canvas')
    viewportCanvas.width = viewportWidth
    viewportCanvas.height = viewportHeight
    viewportCanvas.style.width = `${viewportWidth}px`
    viewportCanvas.style.height = `${viewportHeight}px`
    const viewportCtx = viewportCanvas.getContext('2d', { willReadFrequently: true })
    const viewportBg = window.getComputedStyle(document.body).backgroundColor || '#f2f2f2'
    viewportCtx.fillStyle = viewportBg
    viewportCtx.fillRect(0, 0, viewportWidth, viewportHeight)

    const widthRatio = clamp(canvasRect ? canvasRect.width / baseWidth : 0.6, 0.2, 1)
    const heightRatio = clamp(canvasRect ? canvasRect.height / baseHeight : widthRatio, 0.2, 1)
    const centerXRatio = canvasRect ? (canvasRect.left + canvasRect.width / 2) / baseWidth : 0.5
    const centerYRatio = canvasRect ? (canvasRect.top + canvasRect.height / 2) / baseHeight : 0.5
    const artWidth = Math.round(viewportWidth * widthRatio)
    const artHeight = Math.round(viewportHeight * heightRatio)
    const artX = clamp(Math.round(viewportWidth * centerXRatio - artWidth / 2), 0, viewportWidth - artWidth)
    const artY = clamp(Math.round(viewportHeight * centerYRatio - artHeight / 2), 0, viewportHeight - artHeight)
    viewportCtx.drawImage(composite, artX, artY, artWidth, artHeight)

    const staging = document.createElement('div')
    staging.style.position = 'fixed'
    staging.style.left = '-10000px'
    staging.style.top = '0'
    staging.style.background = viewportBg
    staging.appendChild(viewportCanvas)
    document.body.appendChild(staging)

    try {
      const snapshotCanvas = await html2canvas(staging, {
        backgroundColor: viewportBg,
        scale: 1,
        logging: false,
        useCORS: true,
      })
      const hash = (typeof $fx !== 'undefined' && $fx && $fx.hash) ? $fx.hash : Date.now()
      await downloadCanvasAsFile(snapshotCanvas, `artwork-${hash}.png`)
    } finally {
      document.body.removeChild(staging)
    }
  } catch (err) {
    console.error('Failed to export screenshot', err)
  } finally {
    if (exportPg && typeof exportPg.remove === 'function') {
      exportPg.remove()
    }
    isExportingScreenshot = false
  }
}

function getRendererCanvasElement() {
  return mainRenderer?.canvas || mainRenderer?.elt || mainRenderer?.drawingContext?.canvas || null
}

function downloadCanvasAsFile(canvas, filename) {
  return new Promise((resolve, reject) => {
    if (!canvas) {
      reject(new Error('Missing canvas output'))
      return
    }

    const triggerDownload = url => {
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    if (canvas.toBlob) {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Unable to export canvas blob'))
          return
        }
        const objectUrl = URL.createObjectURL(blob)
        triggerDownload(objectUrl)
        URL.revokeObjectURL(objectUrl)
        resolve()
      }, 'image/png')
    } else {
      triggerDownload(canvas.toDataURL('image/png'))
      resolve()
    }
  })
}

function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}

// small helpers
function randomGray() {
  return Math.round(random(255))
}

function makeRng(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function randRange(rng, min, max) {
  return min + (max - min) * rng()
}

// --- NEW GENERATIVE EFFECTS ---

function addRandomLinePatterns(g, params) {
  const rng = makeRng(seedInt + 12321)
  const lineCount = Math.floor(20 + params.lineDensity * 80)
  g.push()
  g.stroke(0, 15 + params.lineDensity * 60)
  g.strokeWeight(randRange(rng, 0.5, 2))
  
  for (let i = 0; i < lineCount; i++) {
    const angle = rng() * TWO_PI
    const distance = randRange(rng, g.width * 0.1, g.width * 0.4)
    const startX = g.width / 2 + Math.cos(angle) * distance
    const startY = g.height / 2 + Math.sin(angle) * distance
    const endX = startX + Math.cos(angle + rng() * PI / 4) * randRange(rng, g.width * 0.05, g.width * 0.2)
    const endY = startY + Math.sin(angle + rng() * PI / 4) * randRange(rng, g.width * 0.05, g.width * 0.2)
    g.line(startX, startY, endX, endY)
  }
  g.pop()
}

function addBandingArtifacts(g, params) {
  const rng = makeRng(seedInt + 21211)
  const bands = Math.floor(4 + params.bandingStrength * 10)
  if (bands <= 0) return

  g.push()
  g.noStroke()
  for (let i = 0; i < bands; i++) {
    const y = randRange(rng, -g.height * 0.1, g.height * 1.1)
    const h = randRange(rng, g.height * 0.02, g.height * 0.12)
    const alpha = clamp(10 + params.bandingStrength * 90 + rng() * 30, 5, 140)
    const tone = clamp(220 + randRange(rng, -40, 30), 120, 245)
    g.fill(tone, alpha)
    g.rect(-g.width * 0.05, y, g.width * 1.1, h)
  }
  g.pop()
}

function addTonerDust(g, params) {
  const rng = makeRng(seedInt + 31415)
  const specks = Math.floor(100 + params.dustDensity * 900)
  g.push()
  g.stroke(0, clamp(20 + params.dustDensity * 120, 10, 200))
  g.strokeWeight(randRange(rng, 0.4, 1.3))
  for (let i = 0; i < specks; i++) {
    const x = rng() * g.width
    const y = rng() * g.height
    g.point(x, y)
  }
  g.pop()
}

function addDistortionWaves(g, params) {
  const rng = makeRng(seedInt + 98765)
  if (params.distortionAmount < 0.05) return
  
  g.push()
  const waveCount = Math.floor(3 + params.distortionAmount * 5)
  
  for (let w = 0; w < waveCount; w++) {
    const amplitude = params.distortionAmount * randRange(rng, 2, 8)
    const frequency = randRange(rng, 0.005, 0.02)
    const yOffset = randRange(rng, g.height * 0.1, g.height * 0.9)
    
    g.stroke(0, 8 + params.distortionAmount * 40)
    g.strokeWeight(1)
    g.noFill()
    g.beginShape()
    
    for (let x = 0; x < g.width; x += 4) {
      const y = yOffset + Math.sin(x * frequency + seedInt * 0.001) * amplitude
      g.vertex(x, clamp(y, 0, g.height))
    }
    g.endShape()
  }
  g.pop()
}

function applyPaperWarp(g, params) {
  const strength = params.warpStrength
  if (strength < 0.05) return

  const rng = makeRng(seedInt + 42424)
  const temp = createGraphics(g.width, g.height)
  temp.pixelDensity(1)
  temp.image(g, 0, 0)

  const stripeH = 4
  const amp = strength * 8
  const freq = randRange(rng, 0.01, 0.04)
  const phase = rng() * TWO_PI

  for (let y = 0; y < g.height; y += stripeH) {
    const offset = Math.sin(y * freq + phase) * amp + randRange(rng, -1.5, 1.5)
    g.copy(temp, 0, y, g.width, stripeH, offset, y, g.width, stripeH)
  }
}

function addVignetteEffect(g, params) {
  const strength = params.vignetteStrength
  if (strength < 0.05) return
  
  g.push()
  const vignette = createGraphics(g.width, g.height)
  vignette.pixelDensity(1)
  vignette.loadPixels()
  
  const maxDist = Math.sqrt(g.width * g.width + g.height * g.height) / 2
  
  for (let y = 0; y < g.height; y++) {
    for (let x = 0; x < g.width; x++) {
      const idx = (x + y * g.width) * 4
      const dx = x - g.width / 2
      const dy = y - g.height / 2
      const dist = Math.sqrt(dx * dx + dy * dy)
      const falloff = 1 - clamp(dist / maxDist, 0, 1)
      const alpha = Math.floor((1 - falloff * strength) * 255)
      
      vignette.pixels[idx] = 0
      vignette.pixels[idx + 1] = 0
      vignette.pixels[idx + 2] = 0
      vignette.pixels[idx + 3] = 255 - alpha
    }
  }
  vignette.updatePixels()
  
  g.blendMode(MULTIPLY)
  g.image(vignette, 0, 0)
  g.pop()
}

/* End of sketch.js */
