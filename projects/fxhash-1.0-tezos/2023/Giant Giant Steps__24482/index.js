/* global preloadImagesTmr fxhash fxrand palettes StackBlur */

//
//  fxhash - Genuary 06 Steal Like An Artist - Giant Giant Steps - rudxane
//  Here I am stealing from rudxane's Giant Steps: https://www.fxhash.xyz/generative/12643
//  But also inspiration from his other projects, Tych (https://www.fxhash.xyz/generative/2675)
//  and Disrupt (https://www.fxhash.xyz/generative/6306).
//
//  The colour palettes are "stolen" from https://studioyorktown.github.io/coloryorktownhall/
//
//
//  HELLO!! Code is copyright revdancatt (that's me), so no sneaky using it for your
//  NFT projects.
//  But please feel free to unpick it, and ask me questions. A quick note, this is written
//  as an artist, which is a slightly different (and more storytelling way) of writing
//  code, than if this was an engineering project. I've tried to keep it somewhat readable
//  rather than doing clever shortcuts, that are cool, but harder for people to understand.
//
//  You can find me at...
//  https://twitter.com/revdancatt
//  https://instagram.com/revdancatt
//  https://youtube.com/revdancatt
//

const ratio = 4 / 3
// const startTime = new Date().getTime() // so we can figure out how long since the scene started
let drawn = false
let highRes = false // display high or low res
let clean = false
let animated = true
const features = {}
let resizeTmr = null
let drawTmr = null
const dumpOutputs = false
const v = 1000 * 60 * 10
const n = 1000 * 60
const f = 333
let speed = v
let rewindRestore = 0

window.$fxhashFeatures = {}

const hexToRgb = (hex) => {
  const result = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

const rgbToHsl = (rgb) => {
  rgb.r /= 255
  rgb.g /= 255
  rgb.b /= 255
  const max = Math.max(rgb.r, rgb.g, rgb.b)
  const min = Math.min(rgb.r, rgb.g, rgb.b)
  let h
  let s
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rgb.r:
        h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6 : 0)
        break
      case rgb.g:
        h = (rgb.b - rgb.r) / d + 2
        break
      case rgb.b:
        h = (rgb.r - rgb.g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100
  }
}

//  Work out what all our features are
const makeFeatures = () => {
  // Pick a random palette
  const rejectList = ['Ochre Comfort', 'Sherbet', 'Checkov', 'Elevated Basic', 'Hair Car', 'Scarry', 'Sojiro']
  let paletteIndex = Math.floor(fxrand() * palettes.length)
  features.palette = JSON.parse(JSON.stringify(palettes[paletteIndex]))
  let escape = 0
  while ((features.palette.colors.length < 3 || rejectList.includes(palettes[paletteIndex].name)) && escape < 100) {
    paletteIndex = Math.floor(fxrand() * palettes.length)
    features.palette = palettes[paletteIndex]
    escape++
  }
  // Grab the colours and convert them into hsl, to find the lightest and darkest, and the average
  let lightestColourIndex = 0
  let darkestColourIndex = 0
  let lightestColour = features.palette.colors[lightestColourIndex].value
  let darkestColour = features.palette.colors[darkestColourIndex].value
  for (let i = 0; i < features.palette.colors.length; i++) {
    const thisColour = features.palette.colors[i].value
    const thisHsl = rgbToHsl(hexToRgb(thisColour))
    if (thisHsl.l > rgbToHsl(hexToRgb(lightestColour)).l) {
      lightestColourIndex = i
      lightestColour = thisColour
    }
    if (thisHsl.l < rgbToHsl(hexToRgb(darkestColour)).l) {
      darkestColour = thisColour
      darkestColourIndex = i
    }
  }

  features.colours = {
    background: rgbToHsl(hexToRgb('#333333')),
    lines: rgbToHsl(hexToRgb('#DDDDDD')),
    block: '#CCCCCC',
    blockOutline: 'black',
    dot: 'magenta',
    blockLines: '#CCCCCC',
    grrrrrrid: '#000000'
  }
  window.$fxhashFeatures.palette = 'Dependable'
  window.$fxhashFeatures.background = 'Slate'
  window.$fxhashFeatures.accent = 'Pale Rider'

  // One third of the time we'll use either the lightest or darkest colour as the background
  if (fxrand() < 0.8) {
    window.$fxhashFeatures.palette = palettes[paletteIndex].name
    window.$fxhashFeatures.background = features.palette.colors[darkestColourIndex].name
    window.$fxhashFeatures.accent = features.palette.colors[lightestColourIndex].name

    features.colours.background = rgbToHsl(hexToRgb(darkestColour))
    features.colours.lines = rgbToHsl(hexToRgb(lightestColour))
    features.palette.colors = features.palette.colors.filter((c) => c.value !== darkestColour)
    features.palette.colors = features.palette.colors.filter((c) => c.value !== lightestColour)
    // Make the rest of them random
    features.colours.block = features.palette.colors[Math.floor(fxrand() * features.palette.colors.length)].value
    features.colours.blockOutline = features.palette.colors[Math.floor(fxrand() * features.palette.colors.length)].value
    features.colours.dot = features.palette.colors[Math.floor(fxrand() * features.palette.colors.length)].value
    features.colours.blockLines = features.palette.colors[Math.floor(fxrand() * features.palette.colors.length)].value
    features.colours.grrrrrrid = features.palette.colors[Math.floor(fxrand() * features.palette.colors.length)].value
  }

  // Sometimes we'll offset things by a bit, this is how much we'll do that
  features.featureOffset = {
    x: 0.005,
    y: 0.005
  }
  features.blockOutlines = fxrand() < 0.7

  const tinyTiny = 1
  // We are going to have a random number of lines from 5 to 9 on each side plus 1
  const lineCount = ((Math.floor(fxrand() * 4) + 5) * 2 + 1) * tinyTiny
  // The lines run from -1 to 1, so we need to work out the step size
  features.step = 2 / (lineCount - 1)
  // Now make the lines
  features.lines = []
  for (let i = 0; i < lineCount; i++) {
    const thisLine = {
      p1: {
        x: -1 + (features.step * i),
        y: -2
      },
      p2: {
        x: -1 + (features.step * i),
        y: 2
      }
    }
    features.lines.push(thisLine)
  }
  // I want to bunch some of the ends up to bring them closer together
  const scaleFactor = fxrand() * 0.33 + 0.33
  for (let i = 0; i < features.lines.length; i++) features.lines[i].p2.x *= scaleFactor

  // Now we want to put blocks between the lines. So we'll need to create a step value
  // and then loop through the lines, ignoring the last one, and creating a block
  // between each line
  const maxBlocks = 35 * tinyTiny
  const blockSize = (features.lines[0].p2.y - features.lines[0].p1.y) / maxBlocks

  // If the block is a grrrrrrid, then we need to work out what type it is
  let gridTypes = ['dots', 'dotEdgeL', 'dotEdgeBoth', 'fuzzyDots', 'fluffySide', 'fluffyEnd']
  // Sometimes we want to pick one at random and make that the whole array
  if (fxrand() < 0.333) {
    gridTypes = [gridTypes[Math.floor(fxrand() * gridTypes.length)]]
  }

  features.blocks = []
  for (let i = 0; i < features.lines.length - 1; i++) {
    // Now loop through the number of blocks we have
    for (let b = 0; b < maxBlocks; b++) {
      // There is a chance to place a block here
      const newBlock = {
        firstLine: i,
        secondLine: i + 1,
        top: b * blockSize,
        bottom: (b + 1) * blockSize,
        type: 'dot',
        randoms: []
      }
      if (fxrand() < 0.3) newBlock.type = 'block'
      if (fxrand() < 0.3) newBlock.type = 'lines'
      if (fxrand() < 0.3) newBlock.type = 'grrrrrrid'
      // We also need to give each block around 10,000 random numbers in an array we can use
      for (let r = 0; r < 10000; r++) newBlock.randoms.push(fxrand())

      if (newBlock.type === 'grrrrrrid') {
        const choice = Math.floor(fxrand() * gridTypes.length)
        newBlock.gridType = gridTypes[choice]
      }
      newBlock.dotShowRandom = fxrand() < 0.2
      newBlock.dotRandomColour = fxrand() < 0.4

      features.blocks.push(newBlock)
    }
  }
  // Work out by what we're going to rotate the canvas by
  features.rotation = fxrand() * 360

  // Now list the features
  window.$fxhashFeatures['Block Outlines'] = features.blockOutlines
  window.$fxhashFeatures.Steppy = features.lines.length
  window.$fxhashFeatures.Blocks = features.blocks.filter((b) => b.type === 'block').length
  window.$fxhashFeatures.Disrupts = features.blocks.filter((b) => b.type === 'lines').length
  window.$fxhashFeatures.Bingos = features.blocks.filter((b) => b.type === 'grrrrrrid' && b.gridType === 'fuzzyDots').length
  window.$fxhashFeatures.Tychs = features.blocks.filter((b) => b.type === 'grrrrrrid' && (b.gridType === 'fluffyEnd' || b.gridType === 'fluffySide')).length
  window.$fxhashFeatures.Dotty = features.blocks.filter((b) => b.type === 'grrrrrrid').length - window.$fxhashFeatures.Bingos - window.$fxhashFeatures.Tychs
}

//  Call the above make features, so we'll have the window.$fxhashFeatures available
//  for fxhash
makeFeatures()

console.log(features)
console.table(window.$fxhashFeatures)

const init = async () => {
  //  I should add a timer to this, but really how often to people who aren't
  //  the developer resize stuff all the time. Stick it in a digital frame and
  //  have done with it!
  window.addEventListener('resize', async () => {
    //  If we do resize though, work out the new size...
    clearTimeout(resizeTmr)
    resizeTmr = setTimeout(async () => {
      await layoutCanvas()
    }, 100)
  })

  //  Now layout the canvas
  await layoutCanvas()
}

const layoutCanvas = async () => {
  const wWidth = window.innerWidth
  const wHeight = window.innerHeight
  let cWidth = wWidth
  let cHeight = cWidth * ratio
  if (cHeight > wHeight) {
    cHeight = wHeight
    cWidth = wHeight / ratio
  }
  const canvas = document.getElementById('target')
  if (highRes) {
    canvas.height = 8192
    canvas.width = 8192 / ratio
  } else {
    canvas.width = Math.min((8192 / 2), cWidth * 2)
    canvas.height = Math.min((8192 / ratio / 2), cHeight * 2)
    //  Minimum size to be half of the high rez cersion
    if (Math.min(canvas.width, canvas.height) < 8192 / 2) {
      if (canvas.width < canvas.height) {
        canvas.height = 8192 / 2
        canvas.width = 8192 / 2 / ratio
      } else {
        canvas.width = 8192 / 2
        canvas.height = 8192 / 2 / ratio
      }
    }
  }

  canvas.style.position = 'absolute'
  canvas.style.width = `${cWidth}px`
  canvas.style.height = `${cHeight}px`
  canvas.style.left = `${(wWidth - cWidth) / 2}px`
  canvas.style.top = `${(wHeight - cHeight) / 2}px`

  // fill the background
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = `hsl(${features.colours.background.h}, ${features.colours.background.s}%, ${features.colours.background.l}%)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  //  And draw it!!
  drawCanvas()
}

const scaleBlock = (block, scale) => {
  // translate all the corners by the middle
  // (We could do this all in a handy transformation matrix, but this way is somehow more readable)
  block.topLeft.x -= block.middle.x
  block.topLeft.y -= block.middle.y
  block.bottomLeft.x -= block.middle.x
  block.bottomLeft.y -= block.middle.y
  block.topRight.x -= block.middle.x
  block.topRight.y -= block.middle.y
  block.bottomRight.x -= block.middle.x
  block.bottomRight.y -= block.middle.y

  // Now we multiply all the points by the scale
  block.topLeft.x *= scale
  block.topLeft.y *= scale
  block.bottomLeft.x *= scale
  block.bottomLeft.y *= scale
  block.topRight.x *= scale
  block.topRight.y *= scale
  block.bottomRight.x *= scale
  block.bottomRight.y *= scale

  // Finally we now shift them all back
  block.topLeft.x += block.middle.x
  block.topLeft.y += block.middle.y
  block.bottomLeft.x += block.middle.x
  block.bottomLeft.y += block.middle.y
  block.topRight.x += block.middle.x
  block.topRight.y += block.middle.y
  block.bottomRight.x += block.middle.x
  block.bottomRight.y += block.middle.y

  return block
}

const drawCanvas = async () => {
  //  Let the preloader know that we've hit this function at least once
  drawn = true

  const canvas = document.getElementById('target')
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height

  // fill the background
  // if (clean) {
  ctx.fillStyle = `hsl(${features.colours.background.h}, ${features.colours.background.s}%, ${features.colours.background.l}%)`
  ctx.fillRect(0, 0, w, h)
  // }
  // Now draw the lines
  ctx.strokeStyle = `hsl(${features.colours.lines.h}, ${features.colours.lines.s}%, ${features.colours.lines.l}%)`
  ctx.lineWidth = w / 500

  // save the canvas state
  ctx.save()
  // translate the canvas to the center
  ctx.translate(w / 2, h / 2)
  ctx.rotate((features.rotation * Math.PI) / 180)
  // Loop through the lines
  for (let i = 0; i < features.lines.length; i++) {
    const thisLine = features.lines[i]
    // Draw the line
    ctx.beginPath()
    ctx.moveTo(thisLine.p1.x * w, thisLine.p1.y * h)
    ctx.lineTo(thisLine.p2.x * w, thisLine.p2.y * h)
    ctx.stroke()
  }

  // Now loop thru the blocks
  for (let i = 0; i < features.blocks.length; i++) {
    const thisBlock = features.blocks[i]
    const firstLine = features.lines[thisBlock.firstLine]
    const secondLine = features.lines[thisBlock.secondLine]
    let rndPointer = 0

    // Now we need to work out the four corners of the block
    // The top left corner is block top distance between firstLine.p1 and firstLine.p2
    let corners = {
      topLeft: {
        x: firstLine.p1.x + (firstLine.p2.x - firstLine.p1.x) * (thisBlock.top / (firstLine.p2.y - firstLine.p1.y)),
        y: firstLine.p1.y + (firstLine.p2.y - firstLine.p1.y) * (thisBlock.top / (firstLine.p2.y - firstLine.p1.y))
      },
      bottomLeft: {
        x: firstLine.p1.x + (firstLine.p2.x - firstLine.p1.x) * (thisBlock.bottom / (firstLine.p2.y - firstLine.p1.y)),
        y: firstLine.p1.y + (firstLine.p2.y - firstLine.p1.y) * (thisBlock.bottom / (firstLine.p2.y - firstLine.p1.y))
      },
      topRight: {
        x: secondLine.p1.x + (secondLine.p2.x - secondLine.p1.x) * (thisBlock.top / (secondLine.p2.y - secondLine.p1.y)),
        y: secondLine.p1.y + (secondLine.p2.y - secondLine.p1.y) * (thisBlock.top / (secondLine.p2.y - secondLine.p1.y))
      },
      bottomRight: {
        x: secondLine.p1.x + (secondLine.p2.x - secondLine.p1.x) * (thisBlock.bottom / (secondLine.p2.y - secondLine.p1.y)),
        y: secondLine.p1.y + (secondLine.p2.y - secondLine.p1.y) * (thisBlock.bottom / (secondLine.p2.y - secondLine.p1.y))
      }
    }

    // Work out the middle point of the corners
    corners.middle = {
      x: corners.topLeft.x + ((corners.bottomRight.x - corners.topLeft.x) / 2),
      y: corners.topLeft.y + ((corners.bottomRight.y - corners.topLeft.y) / 2)
    }

    // Work out the middleTop point of the corners
    corners.middleTop = {
      x: corners.topLeft.x + ((corners.topRight.x - corners.topLeft.x) / 2),
      y: corners.topLeft.y + ((corners.topRight.y - corners.topLeft.y) / 2)
    }

    // Now we need to scale the block, but only if it's not lines
    if (thisBlock.type !== 'lines') corners = scaleBlock(corners, 0.8)

    // Now draw the block
    if (thisBlock.type === 'block') {
      ctx.fillStyle = features.colours.block
      ctx.strokeStyle = features.colours.blockOutline
      // First the solid block
      ctx.beginPath()
      ctx.moveTo(corners.topLeft.x * w, corners.topLeft.y * h)
      ctx.lineTo(corners.topRight.x * w, corners.topRight.y * h)
      ctx.lineTo(corners.bottomRight.x * w, corners.bottomRight.y * h)
      ctx.lineTo(corners.bottomLeft.x * w, corners.bottomLeft.y * h)
      ctx.lineTo(corners.topLeft.x * w, corners.topLeft.y * h)
      ctx.fill()
      // If we are drawing a block outline, then draw it
      // but offset the canvas so we use the same path
      if (features.blockOutlines) {
        ctx.lineWidth = w / 800
        ctx.beginPath()
        ctx.moveTo((corners.topLeft.x + features.featureOffset.x) * w, (corners.topLeft.y + features.featureOffset.y) * h)
        ctx.lineTo((corners.topRight.x + features.featureOffset.x) * w, (corners.topRight.y + features.featureOffset.y) * h)
        ctx.lineTo((corners.bottomRight.x + features.featureOffset.x) * w, (corners.bottomRight.y + features.featureOffset.y) * h)
        ctx.lineTo((corners.bottomLeft.x + features.featureOffset.x) * w, (corners.bottomLeft.y + features.featureOffset.y) * h)
        ctx.lineTo((corners.topLeft.x + features.featureOffset.x) * w, (corners.topLeft.y + features.featureOffset.y) * h)
        ctx.stroke()
      }
    }

    // If we are drawing a grrrrrrid, then we need to break down the block into 10 by 10 points
    if (thisBlock.type === 'grrrrrrid') {
      const points = 10
      for (let y = 0; y <= points; y++) {
        const yPercent = y / points
        for (let x = 0; x <= points; x++) {
          const xPercent = x / points
          const topMiddlePoint = {
            x: corners.topLeft.x + (corners.topRight.x - corners.topLeft.x) * xPercent,
            y: corners.topLeft.y + (corners.topRight.y - corners.topLeft.y) * xPercent
          }
          const bottomMiddlePoint = {
            x: corners.bottomLeft.x + (corners.bottomRight.x - corners.bottomLeft.x) * xPercent,
            y: corners.bottomLeft.y + (corners.bottomRight.y - corners.bottomLeft.y) * xPercent
          }
          const thisPoint = {
            x: topMiddlePoint.x + (bottomMiddlePoint.x - topMiddlePoint.x) * yPercent,
            y: topMiddlePoint.y + (bottomMiddlePoint.y - topMiddlePoint.y) * yPercent
          }

          ctx.fillStyle = features.colours.grrrrrrid
          ctx.strokeStyle = features.colours.grrrrrrid

          // If this is the fluffy side then only do things on the first x
          if (thisBlock.gridType === 'dots' || (thisBlock.gridType === 'dotEdgeL' && x === 0) || (thisBlock.gridType === 'dotEdgeBoth' && (x === 0 || x === points))) {
            // If this dot is a random colour then we need to pick a random colour
            if (thisBlock.dotRandomColour && thisBlock.randoms[rndPointer] > 0.9) {
              rndPointer++
              ctx.fillStyle = features.palette.colors[Math.floor(thisBlock.randoms[rndPointer] * features.palette.colors.length)].value
              rndPointer++
            }
            // If we are showing random dots, then we need to check if we should draw this dot
            // if we are not showing random dots, then we always draw the dot
            if (thisBlock.randoms[rndPointer] > 0.1 || !thisBlock.dotShowRandom) {
              ctx.beginPath()
              ctx.arc(thisPoint.x * w, thisPoint.y * h, w / 500, 0, 2 * Math.PI)
              ctx.fill()
            }
            rndPointer++
          }

          // If this is the fluffy side then only do things on the first x
          if (thisBlock.gridType === 'fuzzyDots' && x < points) {
            // We want to draw 20 lines randomly from this point to roughly a point half a block width across
            for (let i = 0; i < 20; i++) {
              ctx.lineWidth = w / 1000
              ctx.beginPath()
              ctx.moveTo(thisPoint.x * w, thisPoint.y * h)
              ctx.lineTo((thisPoint.x + (thisBlock.randoms[rndPointer + 0] * 0.01)) * w, (thisPoint.y + (thisBlock.randoms[rndPointer + 1] * 0.01)) * h)
              rndPointer += 2
              ctx.stroke()
            }
          }

          // If this is the fluffy side then only do things on the first x
          if (thisBlock.gridType === 'fluffySide' && x < 4) {
            // We want to draw 20 lines randomly from this point to roughly a point half a block width across
            for (let i = 0; i < 20; i++) {
              ctx.lineWidth = w / 1000
              ctx.beginPath()
              ctx.moveTo(thisPoint.x * w, thisPoint.y * h)
              ctx.lineTo((thisPoint.x + (thisBlock.randoms[rndPointer + 0] * 0.05)) * w, (thisPoint.y + (thisBlock.randoms[rndPointer + 1] * 0.01)) * h)
              rndPointer += 2
              ctx.stroke()
            }
          }

          // if type is fluffy end, then we need to draw a lines from the end of this block to this point
          if (thisBlock.gridType === 'fluffyEnd') {
            ctx.lineWidth = w / 1000
            ctx.beginPath()
            // do this 5 times
            for (let i = 0; i < 5; i++) {
              ctx.moveTo(corners.middleTop.x * w, (corners.middleTop.y + 0.01) * h)
              ctx.lineTo((thisPoint.x + (thisBlock.randoms[rndPointer + 0] * 0.01)) * w, (thisPoint.y + (thisBlock.randoms[rndPointer + 1] * 0.01)) * h)
              rndPointer += 2
            }
            ctx.stroke()
          }
        }
      }
    }

    // If we are drawing lines, then we'll draw 50 lines between the corners
    if (thisBlock.type === 'lines') {
      ctx.strokeStyle = features.colours.blockLines
      ctx.lineWidth = w / 2000
      ctx.beginPath()
      const lines = 50
      for (let l = 0; l < lines; l++) {
        let leftLinePercent = l / lines
        if (thisBlock.randoms[rndPointer] < 0.333) {
          if (leftLinePercent > thisBlock.randoms[rndPointer + 1] && leftLinePercent < thisBlock.randoms[rndPointer + 1] + (thisBlock.randoms[rndPointer + 2] * 0.2 + 0.1)) {
            leftLinePercent = thisBlock.randoms[rndPointer + 3] * 0.7 + 0.15
          }
        }
        let rightLinePercent = l / lines
        if (thisBlock.randoms[rndPointer + 4] < 0.333) {
          if (rightLinePercent > thisBlock.randoms[rndPointer + 5] && rightLinePercent < thisBlock.randoms[rndPointer + 5] + (thisBlock.randoms[rndPointer + 6] * 0.2 + 0.1)) {
            rightLinePercent = thisBlock.randoms[rndPointer + 7] * 0.7 + 0.15
          }
        }

        // work out the start point along the left side
        const leftPoint = {
          x: corners.topLeft.x + (corners.bottomLeft.x - corners.topLeft.x) * leftLinePercent,
          y: corners.topLeft.y + (corners.bottomLeft.y - corners.topLeft.y) * leftLinePercent
        }
        // work out the end point along the right side
        const rightPoint = {
          x: corners.topRight.x + (corners.bottomRight.x - corners.topRight.x) * rightLinePercent,
          y: corners.topRight.y + (corners.bottomRight.y - corners.topRight.y) * rightLinePercent
        }
        // Draw a line between the two points
        ctx.moveTo(leftPoint.x * w, leftPoint.y * h)
        // ctx.lineTo(rightPoint.x * w, rightPoint.y * h)
        ctx.bezierCurveTo(leftPoint.x * w, (leftPoint.y + 0.01) * h, rightPoint.x * w, (rightPoint.y + 0.01) * h, rightPoint.x * w, rightPoint.y * h)
      }
      rndPointer += 8
      ctx.stroke()
    }

    // Draw a red dot
    ctx.fillStyle = features.colours.dot
    ctx.beginPath()
    ctx.arc(corners.middle.x * w, corners.middle.y * h, w / 250, 0, 2 * Math.PI)
    // ctx.fill()
  }
  if (clean || rewindRestore > 33) {
    for (let i = 1; i < rewindRestore; i++) ctx.restore()
    rewindRestore = 0
    ctx.restore()
  } else {
    rewindRestore++
  }

  // Call the draw function again
  // aniFrame = window.requestAnimationFrame(drawCanvas)
  if (dumpOutputs) autoDownloadCanvas()
  // In 10 seconds we're going to call makeFeatures again, then drawCanvas again
  if (animated) {
    clearTimeout(drawTmr)
    drawTmr = setTimeout(async () => {
      await StackBlur.canvasRGBA(canvas, 0, 0, w, h, Math.min(w, h) / 1000)
      makeFeatures()
      drawCanvas()
    }, speed)
  }
}

const autoDownloadCanvas = async (showHash = false) => {
  const element = document.createElement('a')
  element.setAttribute('download', `Giant_Giant_Steps-rudxane-${fxhash}`)
  element.style.display = 'none'
  document.body.appendChild(element)
  let imageBlob = null
  imageBlob = await new Promise(resolve => document.getElementById('target').toBlob(resolve, 'image/png'))
  element.setAttribute('href', window.URL.createObjectURL(imageBlob, {
    type: 'image/png'
  }))
  element.click()
  document.body.removeChild(element)
  if (dumpOutputs) window.location.reload()
}

//  KEY PRESSED OF DOOM
document.addEventListener('keypress', async (e) => {
  e = e || window.event
  // Save
  if (e.key === 's') autoDownloadCanvas()

  //   Toggle highres mode
  if (e.key === 'h') {
    highRes = !highRes
    console.log('Highres mode is now', highRes)
    await layoutCanvas()
  }

  // Toggle clean mode
  if (e.key === 'c') {
    clean = !clean
    console.log('Clean mode is now', clean)
    await layoutCanvas()
    if (!clean) {
      clearTimeout(drawTmr)
      drawTmr = setTimeout(() => {
        makeFeatures()
        drawCanvas()
      }, 333)
    } else {
      makeFeatures()
      drawCanvas()
    }
  }

  // Toggle animated mode
  if (e.key === 'a') {
    animated = !animated
    console.log('animated mode is now', animated)
    clearTimeout(drawTmr)
    if (animated) {
      drawTmr = setTimeout(() => {
        makeFeatures()
        drawCanvas()
      }, speed)
    }
  }

  if (e.key === 'f') {
    speed = f
    console.log('Mode is now fast')
    animated = true
    console.log('animated mode is now', animated)
    clearTimeout(drawTmr)
    drawTmr = setTimeout(() => {
      makeFeatures()
      drawCanvas()
    }, speed)
  }

  if (e.key === 'n') {
    speed = n
    console.log('Mode is now normal')
    animated = true
    console.log('animated mode is now', animated)
    clearTimeout(drawTmr)
    drawTmr = setTimeout(() => {
      makeFeatures()
      drawCanvas()
    }, speed)
    makeFeatures()
    drawCanvas()
  }

  if (e.key === 'v') {
    speed = v
    console.log('Mode is now very slow')
    animated = true
    console.log('animated mode is now', animated)
    clearTimeout(drawTmr)
    drawTmr = setTimeout(() => {
      makeFeatures()
      drawCanvas()
    }, speed)
    makeFeatures()
    drawCanvas()
  }
})

//  This preloads the images so we can get access to them
// eslint-disable-next-line no-unused-vars
const preloadImages = () => {
  if (!drawn) {
    clearInterval(preloadImagesTmr)
    init()
  }
}
