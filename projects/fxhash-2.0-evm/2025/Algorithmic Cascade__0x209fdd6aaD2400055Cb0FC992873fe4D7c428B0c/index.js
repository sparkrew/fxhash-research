const CANVAS_RATIO = 2 // width : height
const MAX_CANVAS_WIDTH = 1800
const MIN_CANVAS_WIDTH = 600

let sceneState = null

const palettes = [
  {
    name: "Volcanic Dawn",
    background: "#f7f2e9",
    colors: ["#0b090a", "#9d0208", "#f48c06", "#faa307", "#e9ecef"],
  },
  {
    name: "Lapis Mirage",
    background: "#f5f2eb",
    colors: ["#14213d", "#6a2e35", "#b23a48", "#f77f00", "#fcbf49"],
  },
  {
    name: "Nordic Bloom",
    background: "#f3f6f2",
    colors: ["#0f4c5c", "#6ba368", "#cce3de", "#f7a072", "#dd614a"],
  },
  {
    name: "Lucent Nocturne",
    background: "#fdf6ec",
    colors: ["#1f1f1f", "#3f37c9", "#f72585", "#ffba08", "#9ef01a"],
  },
  {
    name: "Umber Aurora",
    background: "#f8f4ed",
    colors: ["#2b2d42", "#8d99ae", "#ef233c", "#ffd166", "#118ab2"],
  },
]

const structures = [
  { id: "currents", label: "Currents Flow" },
  { id: "fracture", label: "Fracture Planes" },
  { id: "bloom", label: "Radiant Bloom" },
]

const motionProfiles = [
  {
    id: "tranquil",
    label: "Tranquil Pulse",
    jitter: 0.35,
    density: 12,
    splatter: 80,
    strokeWeight: [6, 18],
  },
  {
    id: "restless",
    label: "Restless Drift",
    jitter: 0.6,
    density: 18,
    splatter: 130,
    strokeWeight: [10, 26],
  },
  {
    id: "electric",
    label: "Electric Surge",
    jitter: 0.85,
    density: 26,
    splatter: 180,
    strokeWeight: [12, 32],
  },
]

const dripProfiles = [
  { id: "slowPour", label: "Slow Pour", gravity: 0.35, wiggle: 0.25, viscosity: 0.8 },
  { id: "quickSilver", label: "Quick Silver", gravity: 0.55, wiggle: 0.55, viscosity: 0.4 },
  { id: "freefall", label: "Freefall", gravity: 0.8, wiggle: 0.85, viscosity: 0.25 },
]

const fxRandomFloat = (min = 0, max = 1) => min + (max - min) * $fx.rand()
const fxRandomInt = (min, max) => Math.floor(fxRandomFloat(min, max + 1))
const fxRandomPick = list => list[Math.floor(fxRandomFloat(0, list.length))]

const palette = fxRandomPick(palettes)
const structure = fxRandomPick(structures)
const motionProfile = fxRandomPick(motionProfiles)
const dripProfile = fxRandomPick(dripProfiles)
const layerCount = fxRandomInt(4, 7)
const accentColor = fxRandomPick(palette.colors)
const randomSeedValue = Math.floor(fxRandomFloat(0, 1e9))
const noiseSeedValue = Math.floor(fxRandomFloat(0, 1e9))
const energyLevel = fxRandomPick(["meditative", "charged", "frenetic"])

const artConfig = {
  palette,
  structure,
  motion: motionProfile,
  drip: dripProfile,
  layerCount,
  accentColor,
  energy: energyLevel,
  seeds: {
    random: randomSeedValue,
    noise: noiseSeedValue,
  },
}

$fx.features({
  Palette: palette.name,
  Structure: structure.label,
  Motion: motionProfile.label,
  Drip: dripProfile.label,
  Layers: layerCount,
  Energy: energyLevel,
  Accent: accentColor.toUpperCase(),
})

const sketch = p => {
  let paperTexture
  let canvas

  p.preload = () => {
    paperTexture = p.loadImage("paper-texture.jpg")
  }

  p.setup = () => {
    const size = computeCanvasSize()
    canvas = p.createCanvas(size.width, size.height)
    canvas.parent("app")
    p.pixelDensity(window.devicePixelRatio > 1 ? 2 : 1)

    if (isFastCaptureContext()) {
      renderFastCapture(p, paperTexture)
      return
    }

    p.frameRate(60)
    regeneratePainting(p, paperTexture)
  }

  p.draw = () => {
    runSceneQueue(p)
  }

  p.windowResized = () => {
    const { width, height } = computeCanvasSize()
    if (p.width === width && p.height === height) return
    p.resizeCanvas(width, height, true)

    if (sceneState && sceneState.snapshot) {
      p.clear()
      p.image(sceneState.snapshot, 0, 0, p.width, p.height)
      return
    }

    if (sceneState && sceneState.renderLocked) {
      return
    }

    regeneratePainting(p, paperTexture)
  }

  p.keyPressed = () => {
    if (!p.key) return
    if (p.key.toLowerCase() === "s") {
      saveCompositionSnapshot(p)
    }
  }
}

new p5(sketch)

function regeneratePainting(p, paperTexture) {
  p.randomSeed(artConfig.seeds.random)
  p.noiseSeed(artConfig.seeds.noise)
  p.clear()
  sceneState = {
    queue: buildActionQueue(p, paperTexture),
    index: 0,
    done: false,
    renderLocked: false,
    snapshot: null,
  }
  if (sceneState.queue.length === 0) {
    sceneState.done = true
    if (typeof $fx.preview === "function") {
      $fx.preview()
    }
    p.noLoop()
    return
  }
  p.loop()
}

function buildActionQueue(p, paperTexture) {
  const queue = []
  queue.push(() => drawPaperGround(p, paperTexture))
  queue.push(() => paintBackdropWash(p))
  enqueueColorFields(p, queue)
  enqueueDripVeins(p, queue)
  enqueueBrushwork(p, queue)
  enqueueGravityDrips(p, queue)
  enqueueSplatter(p, queue)
  queue.push(() => overlayTextureVeil(p, paperTexture))
  return queue
}

function runSceneQueue(p) {
  if (!sceneState || sceneState.done || !sceneState.queue.length) {
    if (sceneState && sceneState.done) {
      p.noLoop()
    }
    return
  }

  const { queue, index } = sceneState
  const progress = queue.length ? index / queue.length : 1
  const actionsPerFrame = Math.max(1, Math.round(lerp(4, 12, progress)))

  for (let i = 0; i < actionsPerFrame && sceneState.index < queue.length; i++) {
    const action = queue[sceneState.index]
    if (typeof action === "function") {
      action()
    }
    sceneState.index += 1
  }

  if (sceneState.index >= queue.length && !sceneState.done) {
    sceneState.done = true
    sceneState.renderLocked = true
    if (!sceneState.snapshot) {
      sceneState.snapshot = p.get()
    }
    if (typeof $fx.preview === "function") {
      $fx.preview()
    }
    p.noLoop()
  }
}

function drawPaperGround(p, paperTexture) {
  p.background("#f6f1e7")
  if (paperTexture) {
    p.push()
    p.tint(255, 235)
    p.image(paperTexture, 0, 0, p.width, p.height)
    p.pop()
  }
}

function paintBackdropWash(p) {
  const wash = mixHex(artConfig.palette.background, "#ffffff", 0.25)
  p.push()
  p.noStroke()
  p.fill(...rgbObjToArray(wash, 225))
  p.rect(0, 0, p.width, p.height)
  p.pop()
}

function enqueueColorFields(p, queue) {
  const fieldCount = Math.floor(p.map(artConfig.layerCount, 3, 7, 2, 5))
  for (let i = 0; i < fieldCount; i++) {
    const colorHex = p.random(artConfig.palette.colors)
    const scale = p.random(0.6, 1.1)
    queue.push(() => drawColorField(p, colorHex, scale))
  }
}

function drawColorField(p, colorHex, scale = 1) {
  p.push()
  const cx = p.random(p.width * 0.15, p.width * 0.85)
  const cy = p.random(p.height * 0.25, p.height * 0.75)
  p.translate(cx, cy)
  p.rotate(p.random(-0.25, 0.25))
  const radiusX = p.random(p.width * 0.08, p.width * 0.24) * scale
  const radiusY = radiusX * p.random(0.25, 0.6)
  const pointCount = Math.floor(p.random(18, 28))
  p.noStroke()
  p.fill(...rgbaFromHex(colorHex, p.random(60, 140)))
  p.beginShape()
  const noiseOffset = p.random(1000)
  for (let i = 0; i < pointCount; i++) {
    const angle = (p.TWO_PI / pointCount) * i
    const noiseX = radiusX * (0.4 + p.noise(noiseOffset + i * 0.07))
    const noiseY = radiusY * (0.4 + p.noise(noiseOffset + i * 0.07 + 500))
    const x = Math.cos(angle) * noiseX + p.random(-50, 50)
    const y = Math.sin(angle) * noiseY + p.random(-20, 20)
    p.curveVertex(x, y)
  }
  p.endShape(p.CLOSE)
  p.pop()
}

function enqueueDripVeins(p, queue) {
  const baseCount = artConfig.energy === "frenetic" ? 90 : artConfig.energy === "charged" ? 70 : 50
  for (let i = 0; i < baseCount; i++) {
    const actionConfig = {
      colorHex: i % 4 === 0 ? artConfig.accentColor : p.random(artConfig.palette.colors),
      alpha: artConfig.energy === "meditative" ? p.random(60, 120) : p.random(100, 200),
      weight: p.random(1.5, 4.5) * (1 + artConfig.drip.viscosity),
      span: p.random(p.width * 0.35, p.width * 0.9),
      startX: p.random(-p.width * 0.1, p.width * 1.1),
      startY: p.random(-p.height * 0.1, p.height * 1.1),
      angle: p.random(-0.35, 0.35) + selectAngleForStructure(p, artConfig.structure.id) * 0.3,
      steps: Math.floor(p.random(25, 60)),
      noiseSeed: p.random(1000),
    }
    queue.push(() => drawDripVein(p, actionConfig))
  }
}

function enqueueBrushwork(p, queue) {
  for (let layer = 0; layer < artConfig.layerCount; layer++) {
    const baseColorHex = p.random(artConfig.palette.colors)
    const densityBoost =
      1.25 + artConfig.motion.density * 0.02 + (artConfig.energy === "frenetic" ? 0.35 : artConfig.energy === "charged" ? 0.18 : 0)
    const strokesPerLayer = Math.floor((p.random(16, 24) + artConfig.motion.density * 0.75) * densityBoost)
    for (let i = 0; i < strokesPerLayer; i++) {
      const colorHex = i % 5 === 0 ? artConfig.accentColor : baseColorHex
      const enrichedColor = jitterColorHex(p, colorHex, 0.07)
      const angle = selectAngleForStructure(p, artConfig.structure.id)
      const length = p.random(p.width * 0.12, p.width * 0.35)
      const options = {
        colorHex: enrichedColor,
        weight: p.random(
          artConfig.motion.strokeWeight[0],
          artConfig.motion.strokeWeight[1]
        ),
        length,
        alpha: p.random(90, 210),
        turbulence: p.random(80, 160) * (1 + artConfig.motion.jitter),
        angle,
      }
      queue.push(() => paintGestureStroke(p, options))

      if (i % 7 === 0) {
        const whisperStroke = {
          colorHex: jitterColorHex(p, colorHex, 0.12),
          weight: p.random(artConfig.motion.strokeWeight[0] * 0.35, artConfig.motion.strokeWeight[1] * 0.55),
          length: p.random(p.width * 0.08, p.width * 0.22),
          alpha: p.random(70, 160),
          turbulence: p.random(60, 120) * (1 + artConfig.motion.jitter * 0.5),
          angle: angle + p.random(-0.4, 0.4),
        }
        queue.push(() => paintGestureStroke(p, whisperStroke))
      }
    }
  }
}

function selectAngleForStructure(p, structureId) {
  switch (structureId) {
    case "currents":
      return p.random(-p.PI / 3, p.PI / 3)
    case "fracture":
      return p.random([0, p.HALF_PI, -p.HALF_PI]) + p.random(-0.2, 0.2)
    case "bloom":
      return p.random(p.TWO_PI)
    default:
      return p.random(-p.PI, p.PI)
  }
}

function paintGestureStroke(p, { colorHex, weight, length, alpha, turbulence, angle }) {
  p.push()
  const originX = p.random(p.width * 0.02, p.width * 0.98)
  const originY = p.random(p.height * 0.02, p.height * 0.98)
  p.translate(originX, originY)
  p.rotate(angle)
  p.strokeCap(p.ROUND)

  const basePath = buildStrokePath(p, length, turbulence)
  const passes = [
    { weightScale: 1, alphaScale: 1, offset: 0, texture: 1 },
    { weightScale: 0.75, alphaScale: 0.65, offset: -weight * 0.08, texture: 1.4 },
    { weightScale: 0.55, alphaScale: 0.45, offset: weight * 0.12, texture: 1.8 },
  ]

  passes.forEach((pass, idx) => {
    const chroma = idx === 0 ? colorHex : jitterColorHex(p, colorHex, 0.05 * (idx + 1))
    const [r, g, b] = rgbaFromHex(chroma)
    drawStrokeLayer(p, basePath, {
      color: [r, g, b],
      alpha: alpha * pass.alphaScale,
      weight: weight * pass.weightScale,
      offset: pass.offset,
      textureFactor: pass.texture,
    })
  })

  const highlightColor = shadeColor(colorHex, 0.35)
  const shadowColor = shadeColor(colorHex, -0.4)
  drawStrokeLayer(p, basePath, {
    color: [highlightColor.r, highlightColor.g, highlightColor.b],
    alpha: alpha * 0.35,
    weight: Math.max(1, weight * 0.25),
    offset: -weight * 0.2,
    textureFactor: 0.5,
  })
  drawStrokeLayer(p, basePath, {
    color: [shadowColor.r, shadowColor.g, shadowColor.b],
    alpha: alpha * 0.3,
    weight: Math.max(1, weight * 0.3),
    offset: weight * 0.25,
    textureFactor: 0.9,
  })

  p.pop()
}

function drawDripVein(p, config) {
  const { colorHex, alpha, weight, span, startX, startY, angle, steps, noiseSeed } = config
  p.push()
  p.translate(startX, startY)
  p.rotate(angle)
  p.noFill()
  const [r, g, b] = rgbaFromHex(colorHex)
  p.stroke(r, g, b, alpha)
  p.strokeWeight(weight)
  p.strokeCap(p.ROUND)
  p.beginShape()
  for (let j = 0; j < steps; j++) {
    const progress = (span / steps) * j
    const sway = (p.noise(noiseSeed + j * 0.06) - 0.5) * artConfig.drip.wiggle * 180
    p.curveVertex(progress, sway)
  }
  p.endShape()
  p.pop()
}

function drawGravityDrip(p, config) {
  const { x, startY, dripLength, colorHex, weight, alpha, noiseStart, segments } = config
  p.push()
  p.translate(x, startY)
  const [r, g, b] = rgbaFromHex(colorHex)
  p.stroke(r, g, b, alpha)
  p.strokeWeight(weight)
  p.strokeCap(p.ROUND)
  p.beginShape()
  for (let j = 0; j < segments; j++) {
    const progress = (dripLength / segments) * j
    const sway = (p.noise(noiseStart + j * 0.08) - 0.5) * artConfig.drip.wiggle * 160
    p.curveVertex(sway, progress)
  }
  p.endShape()
  p.pop()
}

function drawSplatterDroplet(p, config) {
  const { colorHex, alpha, sizeX, sizeYRatio, jitterX, jitterY, rotation } = config
  p.push()
  p.noStroke()
  const sizeY = sizeX * sizeYRatio
  p.fill(...rgbaFromHex(colorHex, alpha))
  p.translate(jitterX, jitterY)
  p.rotate(rotation)
  p.ellipse(0, 0, sizeX, sizeY)
  p.pop()
}

function enqueueGravityDrips(p, queue) {
  const dripCount = Math.floor(p.map(artConfig.drip.gravity, 0.25, 0.85, 60, 140))
  for (let i = 0; i < dripCount; i++) {
    const actionConfig = {
      x: p.random(-p.width * 0.05, p.width * 1.05),
      startY: p.random(-p.height * 0.15, p.height * 0.1),
      dripLength: p.random(p.height * 0.25, p.height * 0.9),
      colorHex: i % 6 === 0 ? artConfig.accentColor : p.random(artConfig.palette.colors),
      weight: p.random(1.5, 5.5),
      alpha: p.random(90, 200),
      noiseStart: p.random(1000),
      segments: Math.floor(p.random(18, 40)),
    }
    queue.push(() => drawGravityDrip(p, actionConfig))
  }
}

function enqueueSplatter(p, queue) {
  const splatterCount = Math.floor(artConfig.motion.splatter * (artConfig.energy === "frenetic" ? 1.35 : 1))
  for (let i = 0; i < splatterCount; i++) {
    const actionConfig = {
      colorHex: i % 4 === 0 ? artConfig.accentColor : p.random(artConfig.palette.colors),
      alpha: p.random(60, 180),
      sizeX: p.random(2, 26),
      sizeYRatio: p.random(0.5, 1.8),
      jitterX: p.random(-p.width * 0.1, p.width * 1.1),
      jitterY: p.random(-p.height * 0.1, p.height * 1.1),
      rotation: p.random(-p.PI, p.PI),
    }
    queue.push(() => drawSplatterDroplet(p, actionConfig))
  }
}

function buildStrokePath(p, length, turbulence) {
  const segments = Math.floor(p.random(20, 34))
  const noiseStart = p.random(1000)
  const path = []
  for (let i = 0; i < segments; i++) {
    const progress = p.map(i, 0, segments - 1, -length / 2, length / 2)
    const waviness =
      (p.noise(noiseStart + i * 0.07) - 0.5) * turbulence +
      p.random(-artConfig.motion.jitter * 14, artConfig.motion.jitter * 14)
    path.push({ x: progress, y: waviness })
  }
  return path
}

function drawStrokeLayer(p, basePath, { color, alpha, weight, offset = 0, textureFactor = 1 }) {
  p.push()
  p.noFill()
  p.stroke(...color, alpha)
  p.strokeWeight(weight)
  p.beginShape()
  const noiseShift = p.random(1000)
  basePath.forEach((point, idx) => {
    const texture =
      (p.noise(noiseShift + idx * 0.11) - 0.5) * textureFactor * (weight * 0.35) +
      p.random(-weight * 0.05, weight * 0.05)
    p.curveVertex(point.x + texture * 0.05, point.y + offset + texture)
  })
  p.endShape()
  p.pop()
}

function jitterColorHex(p, hex, variance = 0.08) {
  const { r, g, b } = hexToRgb(hex)
  const jitter = value =>
    Math.round(Math.max(0, Math.min(255, value + p.randomGaussian(0, variance * 255))))
  return rgbToHex({ r: jitter(r), g: jitter(g), b: jitter(b) })
}

function overlayTextureVeil(p, paperTexture) {
  if (!paperTexture) return
  p.push()
  p.blendMode(p.MULTIPLY)
  p.tint(255, 140)
  p.image(paperTexture, 0, 0, p.width, p.height)
  p.pop()
}

function hexToRgb(hex) {
  let sanitized = hex.replace("#", "")
  if (sanitized.length === 3) {
    sanitized = sanitized
      .split("")
      .map(ch => ch + ch)
      .join("")
  }
  const value = parseInt(sanitized, 16)
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

function rgbaFromHex(hex, alpha = 255) {
  const { r, g, b } = hexToRgb(hex)
  return [r, g, b, alpha]
}

function rgbToHex({ r, g, b }) {
  const toHex = value => value.toString(16).padStart(2, "0")
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function shadeColor(hex, amount = 0) {
  const { r, g, b } = hexToRgb(hex)
  const target = amount >= 0 ? 255 : 0
  const t = Math.min(1, Math.max(0, Math.abs(amount)))
  return {
    r: Math.round(lerp(r, target, t)),
    g: Math.round(lerp(g, target, t)),
    b: Math.round(lerp(b, target, t)),
  }
}

function mixHex(colorA, colorB, amount) {
  const a = hexToRgb(colorA)
  const b = hexToRgb(colorB)
  const t = Math.min(Math.max(amount, 0), 1)
  return {
    r: Math.round(lerp(a.r, b.r, t)),
    g: Math.round(lerp(a.g, b.g, t)),
    b: Math.round(lerp(a.b, b.b, t)),
  }
}

function rgbObjToArray(rgb, alpha = 255) {
  return [rgb.r, rgb.g, rgb.b, alpha]
}

function lerp(start, stop, amt) {
  return start + (stop - start) * amt
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function computeCanvasSize() {
  if (typeof window === "undefined") {
    return { width: MAX_CANVAS_WIDTH, height: Math.floor(MAX_CANVAS_WIDTH / CANVAS_RATIO) }
  }
  const margin = 48
  const availableWidth = clamp(window.innerWidth - margin, MIN_CANVAS_WIDTH, MAX_CANVAS_WIDTH)
  const availableHeight = clamp(
    window.innerHeight - margin,
    MIN_CANVAS_WIDTH / CANVAS_RATIO,
    MAX_CANVAS_WIDTH / CANVAS_RATIO
  )
  const widthFromHeight = availableHeight * CANVAS_RATIO
  const width = clamp(Math.floor(Math.min(availableWidth, widthFromHeight)), MIN_CANVAS_WIDTH, MAX_CANVAS_WIDTH)
  const height = Math.floor(width / CANVAS_RATIO)
  return { width, height }
}

function isFastCaptureContext() {
  return typeof $fx !== "undefined" && $fx.context === "fast-capture"
}

function renderFastCapture(p, paperTexture) {
  p.randomSeed(artConfig.seeds.random)
  p.noiseSeed(artConfig.seeds.noise)
  p.clear()
  const queue = buildActionQueue(p, paperTexture)
  queue.forEach(action => action())
  const snapshot = p.get()
  sceneState = {
    queue: [],
    index: queue.length,
    done: true,
    renderLocked: true,
    snapshot,
  }
  if (typeof $fx.preview === "function") {
    $fx.preview()
  }
  p.noLoop()
}

function saveCompositionSnapshot(p) {
  const prefix = "expressionist"
  const hashFragment = ($fx?.hash || "fxhash").slice(0, 8)
  const filename = `${prefix}-${hashFragment}`
  const fallback = () => p.saveCanvas(filename, "png")

  if (typeof window === "undefined" || typeof window.html2canvas !== "function") {
    fallback()
    return
  }

  const target = document.body || document.documentElement
  if (!target) {
    fallback()
    return
  }

  const backgroundColor = window.getComputedStyle(target).backgroundColor
  const scale = Math.min(3, (window.devicePixelRatio || 1) * 1.5)

  window.html2canvas(target, {
    backgroundColor,
    scale,
    useCORS: true,
    windowWidth: document.documentElement.scrollWidth,
    windowHeight: document.documentElement.scrollHeight,
    scrollX: 0,
    scrollY: 0,
  })
    .then(canvas => {
      canvas.toBlob(blob => {
        if (!blob) {
          fallback()
          return
        }
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = `${filename}-viewport.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setTimeout(() => URL.revokeObjectURL(url), 2000)
      }, "image/png")
    })
    .catch(() => fallback())
}
