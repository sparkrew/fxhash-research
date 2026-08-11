// p5.js sketch generating 800x800 ASCII Xerox-style renderings
// Uses fxhash seed via $fx to create deterministic outputs across runs.

const CANVAS_SIZE = 800
const OUTER_GREY = 0
const INNER_BORDER = 4
const EXPORT_ART_SIZE = 3840
const ASCII_SETS = [
  " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  ' .:-=+*#%@',
  ' `.-:+*owOX#@',
  "NFT",
  "XEROX"
]

let pg
let seedInt

const DEFAULT_PARAMS = {
  dithering_mode: "floyd-steinberg",
  grain_intensity: 0.35,
  contrast_breakdown: 0.35,
  pixel_scale: 0.55,
  cluster_bias: 0.5,
  void_ratio: 0.35,
  pulse_wave: 0.4,
  glitch_rate: 0.4,
}

function setup() {
  const renderer = createCanvas(CANVAS_SIZE, CANVAS_SIZE)
  optimizeContext(renderer)
  pixelDensity(1)

  const innerSize = CANVAS_SIZE - 2 * (OUTER_GREY + INNER_BORDER)
  pg = createGraphics(innerSize, innerSize)
  optimizeContext(pg)
  pg.pixelDensity(1)

  seedInt = computeSeedFromFxHash($fx.hash)
  randomSeed(seedInt)
  noiseSeed(seedInt)

  noSmooth()
  pg.noSmooth()

  renderArtwork()
  registerFxParamUpdates()
}

function draw() {
  noLoop()
  background('#111111')
  const inset = INNER_BORDER
  image(pg, inset, inset)

  stroke('#111111')
  strokeWeight(INNER_BORDER)
  noFill()
  rect(
    INNER_BORDER / 2,
    INNER_BORDER / 2,
    CANVAS_SIZE - INNER_BORDER,
    CANVAS_SIZE - INNER_BORDER
  )
}

function renderArtwork() {
  const params = collectParamsFromFx()
  renderAsciiScene(pg, params)
}

function computeSeedFromFxHash(h) {
  let seed = 0
  for (let i = 0; i < Math.min(h.length, 20); i++) {
    seed = (seed * 31 + h.charCodeAt(i)) % 2147483647
  }
  return seed
}

function collectParamsFromFx() {
  const snapshot = typeof getFxParams === 'function'
    ? { ...DEFAULT_PARAMS, ...getFxParams() }
    : { ...DEFAULT_PARAMS }
  return {
    ditheringMode: snapshot.dithering_mode,
    grainIntensity: snapshot.grain_intensity,
    contrastBreakdown: snapshot.contrast_breakdown,
    pixelScale: snapshot.pixel_scale,
    clusterBias: snapshot.cluster_bias,
    voidRatio: snapshot.void_ratio,
    pulseWave: snapshot.pulse_wave,
    glitchRate: snapshot.glitch_rate,
  }
}

function renderAsciiScene(target, params) {
  target.push()
  target.background(5)
  const field = generateAsciiField(target, params)
  renderAsciiField(target, field, params)
  addLetterSmears(target, params)
  addScanTearLines(target, params)
  addGhostChannels(target, params)
  applyPaperWarp(target, params)
  applyContrastBreakdown(target, params)
  addTonerGrain(target, params)
  addPaperNoise(target, params)
  target.pop()
}

function generateAsciiField(g, params) {
  const cols = Math.floor(mapRange(params.pixelScale, 0, 1, 52, 132))
  const cellW = g.width / cols
  const cellH = cellW * mapRange(params.pixelScale, 0, 1, 1.6, 2.15)
  const rows = Math.max(18, Math.floor(g.height / cellH))
  const freq = mapRange(params.pixelScale, 0, 1, 0.12, 0.58)
  const clusters = buildClusterRects(cols, rows, params)
  const field = []
  for (let row = 0; row < rows; row++) {
    const rowValues = []
    for (let col = 0; col < cols; col++) {
      const nx = col / cols
      const ny = row / rows
      const base = noise((nx + seedInt * 0.001) * freq * 5.1, (ny - seedInt * 0.002) * freq * 4.7)
      const grad = Math.pow(ny, 1.08) * params.pulseWave
      const cluster = clusterBoost(col, row, clusters) * params.clusterBias
      const glitch = (sin((col * 0.85 + row * 1.2) * 1.7 + seedInt) * 0.5 + 0.5) * params.glitchRate * 0.45
      const voidLift = noise(col * 0.12, row * 0.09 + seedInt) * params.voidRatio * 0.6
      let value = base * 0.62 + grad + cluster + glitch - (params.voidRatio * 0.5 + voidLift)
      rowValues.push(clamp(value, 0, 1))
    }
    field.push(rowValues)
  }
  return { cols, rows, cellW, cellH, values: field }
}

function renderAsciiField(g, field, params) {
  const { cols, rows, cellW, cellH, values } = field
  const charSet = selectCharSet(params)
  g.push()
  g.background(5)
  g.textFont('Courier New')
  g.textAlign(CENTER, CENTER)
  g.textSize(cellH * 0.88)
  g.noStroke()
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const v = values[row][col]
      if (v <= 0 && random() < params.voidRatio * 0.35) continue
      const idx = Math.min(charSet.length - 1, Math.max(0, Math.round(v * (charSet.length - 1))))
      const ch = charSet[idx]
      const alpha = clamp(mapRange(v, 0, 1, 35, 255) + params.grainIntensity * 60, 35, 255)
      const jitterX = (noise(col * 0.21, row * 0.28 + seedInt) - 0.5) * params.glitchRate * cellW * 0.9
      const jitterY = (noise(col * 0.13 + seedInt, row * 0.24) - 0.5) * params.glitchRate * cellH * 0.6
      const x = col * cellW + cellW * 0.5 + jitterX
      const y = row * cellH + cellH * 0.55 + jitterY
      g.fill(255, alpha)
      g.text(ch, x, y)
      if (params.glitchRate > 0.55 && random() < 0.02) {
        g.push()
        g.fill(255, alpha * 0.6)
        g.text('_', x + cellW * random(-0.2, 0.2), y + cellH * 0.4)
        g.pop()
      }
    }
  }
  g.pop()
}

function addLetterSmears(g, params) {
  const smearCount = 6 + Math.floor(params.glitchRate * 18)
  const maxSpan = g.width * mapRange(params.pixelScale, 0, 1, 0.25, 0.6)
  g.push()
  g.blendMode(SCREEN)
  for (let i = 0; i < smearCount; i++) {
    const y = random(g.height)
    const h = random(g.height * 0.01, g.height * 0.05)
    const offset = random(-maxSpan, maxSpan) * (0.4 + params.glitchRate * 0.8)
    const jitterY = random(-2, 2)
    g.copy(g, 0, y, g.width, h, offset, y + jitterY, g.width, h)
    if (random() < params.glitchRate * 0.3) {
      const x = random(g.width)
      const w = random(g.width * 0.01, g.width * 0.05)
      const verticalShift = random(-g.height * 0.08, g.height * 0.08)
      g.copy(g, x, 0, w, g.height, x + random(-3, 3), verticalShift, w, g.height)
    }
  }
  g.pop()
}

function selectCharSet(params) {
  if (params.ditheringMode === 'bayer-4') {
    return ASCII_SETS[1].split('')
  }
  if (params.clusterBias > 0.65 || params.glitchRate > 0.65) {
    return ASCII_SETS[0].split('')
  }
  return ASCII_SETS[2].split('')
}

function addScanTearLines(g, params) {
  const passes = 3 + Math.floor(params.glitchRate * 12)
  g.push()
  g.stroke(255, 18 + params.glitchRate * 120)
  g.strokeWeight(1)
  for (let i = 0; i < passes; i++) {
    const y = random(g.height)
    const dash = random(18, 64)
    for (let x = -dash; x < g.width + dash; x += dash) {
      const wobble = random(-1.5, 1.5)
      g.line(x, y + wobble, x + dash * random(0.45, 0.9), y + wobble + random(-0.5, 0.5))
    }
  }
  g.pop()
}

function addGhostChannels(g, params) {
  const ghost = createGraphics(g.width, g.height)
  ghost.pixelDensity(1)
  ghost.image(g, 0, 0)
  g.push()
  g.blendMode(SCREEN)
  g.tint(255, 18 + params.glitchRate * 70)
  const dx = (random(-2, 2) + params.glitchRate * 3) * 0.8
  const dy = random(-1.5, 1.5)
  g.image(ghost, dx, dy)
  g.pop()
}

function buildClusterRects(cols, rows, params) {
  const rng = makeRng(seedInt ^ 0x9e3779b9)
  const count = 2 + Math.floor(params.clusterBias * 6)
  const rects = []
  for (let i = 0; i < count; i++) {
    const w = randRange(rng, cols * 0.12, cols * 0.65)
    const h = randRange(rng, rows * 0.08, rows * 0.55)
    const x = randRange(rng, -cols * 0.1, cols * 0.9)
    const y = randRange(rng, -rows * 0.1, rows * 0.95)
    rects.push({ x, y, w, h, weight: randRange(rng, 0.3, 1.1) })
  }
  return rects
}

function clusterBoost(x, y, rects) {
  let boost = 0
  for (const rect of rects) {
    const centerX = rect.x + rect.w / 2
    const centerY = rect.y + rect.h / 2
    const dx = Math.abs((x - centerX) / (rect.w / 2))
    const dy = Math.abs((y - centerY) / (rect.h / 2))
    const dist = Math.max(dx, dy)
    if (dist <= 1) {
      boost += (1 - dist) * rect.weight * 0.85
    }
  }
  return boost
}

// --- Shared processing ---

function applyPaperWarp(g, params) {
  const source = createImage(g.width, g.height)
  source.copy(g, 0, 0, g.width, g.height, 0, 0, g.width, g.height)
  source.loadPixels()
  g.loadPixels()
  const w = g.width
  const h = g.height
  const warpAmt = mapRange(params.voidRatio, 0, 1, 4, 18)
  const waveFreq = mapRange(params.clusterBias, 0, 1, 0.45, 1.6)
  const curl = mapRange(params.pixelScale, 0, 1, 0.35, 1.1)
  const jitterFactor = mapRange(params.glitchRate, 0, 1, 0.2, 0.8)
  for (let y = 0; y < h; y++) {
    const ny = y / h
    const waveY = sin(TWO_PI * ny * waveFreq + noise(ny * 2.4 + seedInt) * TWO_PI)
    const foldY = cos(TWO_PI * ny * (curl * 0.5 + 0.2))
    for (let x = 0; x < w; x++) {
      const nx = x / w
      const swirl = sin(TWO_PI * (nx * curl + ny * 0.35) + waveY)
      const tumble = cos(TWO_PI * (nx * waveFreq * 0.6) - foldY)
      const jitterX = (noise(nx * 3.7, ny * 4.1 + seedInt) - 0.5) * warpAmt * jitterFactor
      const jitterY = (noise(nx * 2.5 + seedInt, ny * 3.3) - 0.5) * warpAmt * jitterFactor * 0.7
      const offsetX = swirl * warpAmt + tumble * warpAmt * 0.3 + jitterX
      const offsetY = foldY * warpAmt * 0.4 + jitterY
      const sampleX = clamp(Math.round(x + offsetX), 0, w - 1)
      const sampleY = clamp(Math.round(y + offsetY), 0, h - 1)
      const srcIdx = (sampleX + sampleY * w) * 4
      const dstIdx = (x + y * w) * 4
      g.pixels[dstIdx] = source.pixels[srcIdx]
      g.pixels[dstIdx + 1] = source.pixels[srcIdx + 1]
      g.pixels[dstIdx + 2] = source.pixels[srcIdx + 2]
      g.pixels[dstIdx + 3] = source.pixels[srcIdx + 3]
    }
  }
  g.updatePixels()
}

function clamp(v, a, b) {
  return Math.min(Math.max(v, a), b)
}

function addTonerGrain(g, params) {
  const n = params.grainIntensity
  g.loadPixels()
  for (let y = 0; y < g.height; y++) {
    for (let x = 0; x < g.width; x++) {
      const idx = (x + y * g.width) * 4
      // small random grain applied equally to RGB channels
      const grain = (random() - 0.5) * 255 * n * 0.6
      g.pixels[idx] = clamp(g.pixels[idx] + grain, 0, 255)
      g.pixels[idx + 1] = clamp(g.pixels[idx + 1] + grain, 0, 255)
      g.pixels[idx + 2] = clamp(g.pixels[idx + 2] + grain, 0, 255)
    }
  }
  g.updatePixels()
}
function addPaperNoise(g, params) {
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
      tile.pixels[idx + 3] = clamp(10 + v * params.grainIntensity * 1.2, 0, 140)
    }
  }
  tile.updatePixels()
  g.push()
  g.blendMode(MULTIPLY)
  g.image(tile, 0, 0)
  g.pop()
  tile.remove()
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
  } catch (err) {}
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

function keyPressed() {
  if (key && key.toLowerCase() === 's') {
    saveWithHtml2Canvas()
  }
}

async function saveWithHtml2Canvas() {
  if (typeof html2canvas === 'undefined') {
    console.warn('html2canvas not loaded; cannot save image')
    return
  }
  const displayCanvas = document.querySelector('canvas')
  const canvasRect = displayCanvas?.getBoundingClientRect()
  const baseWidth = (window.innerWidth || CANVAS_SIZE)
  const baseHeight = (window.innerHeight || CANVAS_SIZE)
  const params = collectParamsFromFx()
  const exportOuter = OUTER_GREY
  const exportBorder = INNER_BORDER
  const exportInnerSize = EXPORT_ART_SIZE - 2 * (exportOuter + exportBorder)

  const exportPg = createGraphics(exportInnerSize, exportInnerSize)
  optimizeContext(exportPg)
  exportPg.pixelDensity(1)
  renderAsciiScene(exportPg, params)

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

  const holder = document.createElement('div')
  holder.style.position = 'fixed'
  holder.style.left = '-99999px'
  holder.style.top = '0'
  holder.style.width = `${viewportWidth}px`
  holder.style.height = `${viewportHeight}px`
  holder.appendChild(viewportCanvas)
  document.body.appendChild(holder)

  try {
    const cssWidth = viewportCanvas.clientWidth || viewportWidth
    const scaleFactor = viewportWidth / cssWidth
    const snapshot = await html2canvas(viewportCanvas, {
      backgroundColor: null,
      useCORS: true,
      scale: scaleFactor,
      width: viewportWidth,
      height: viewportHeight,
      windowWidth: viewportWidth,
      windowHeight: viewportHeight,
    })
    const link = document.createElement('a')
    link.download = `artwork-${$fx.hash}.png`
    link.href = snapshot.toDataURL('image/png')
    link.click()
  } catch (err) {
    console.error('Failed to save via html2canvas', err)
  } finally {
    document.body.removeChild(holder)
    exportPg.remove()
  }
}

function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
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

/* End of sketch.js */
