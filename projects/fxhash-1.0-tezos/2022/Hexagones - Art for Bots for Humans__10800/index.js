/* global fxrand fxhash palettes preloadImagesTmr Path2D noise */

//
//  HEXAGONES - art for bots - revdancatt ??/??/2022
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

// Global values, because today I'm being an artist not an engineer!
const ratio = 1 // canvas ratio
const features = {} //  so we can keep track of what we're doing
let lastTick = new Date().getTime() // keeping the animations the same rate no matter the fps
const startTime = new Date().getTime() // so we can figure out how long since the scene started
let timePassed = 0 // keeping track of the ms since our last frame
const speedMod = 1 // multiplier for the animation speed
const paused = true // are we paused
let highRes = false // display high or low res
let drawn = false
let ARTFORBOTSLoaded = false // A terrible...

//  We need this to display features
window.$fxhashFeatures = {}

const translate = (points, x, y) => {
  return points.map((p) => {
    p.x += x
    p.y += y
    return p
  })
}

//  Use a messy global because it's just easier to debug
let globalTiles = []
const recurse = (x, y, w, h, count) => {
  //  The chance of there being an arrow is based on the count down
  const arrowChance = count / 10
  const recurseChance = (10 - count) / 10

  if (fxrand() < arrowChance) {
    //  If we have an arrow, then we say that this is where we are
    //  going to draw one
    globalTiles.push({
      x,
      y,
      w,
      h,
      rotation: Math.floor(fxrand() * 4) * 90
    })
  } else {
    //  Otherwise we need to split into four and recurse again, if we are told to
    if (fxrand() < recurseChance) {
      recurse(x, y, w / 2, h / 2, count + 1)
      recurse(x + w / 2, y, w / 2, h / 2, count + 1)
      recurse(x, y + h / 2, w / 2, h / 2, count + 1)
      recurse(x + w / 2, y + h / 2, w / 2, h / 2, count + 1)
    }
  }
}

const makeFeatures = () => {
  //  Make sure flickering is off to start with
  features.flicker = false

  //   Calculate the points we need to have a hexagon that fills the whole area
  const r = -0.5
  const startAngle = 30
  features.rootPoints = []
  for (let a = 0; a <= 5; a++) {
    //  Turn the x,y co-ords into the 6 x,y points we need to form a hexagon
    const x = (Math.sin((Math.PI / 180) * (a * 60 + startAngle)) * r)
    const y = (Math.cos((Math.PI / 180) * (a * 60 + startAngle)) * r)
    features.rootPoints.push({
      x,
      y
    })
  }
  features.rootPoints.push({
    x: 0,
    y: 0
  })

  //  Figure out a palette
  const palNumber = Math.floor(fxrand() * palettes.length)
  // const palNumber = 8
  features.palette = palettes[palNumber]
  features.palNumber = palNumber

  //  Work out what mode we are
  features.mode = ['toggle'][Math.floor(fxrand() * 1)]
  const maxOsc = 7
  features.oscillators = (maxOsc - 3) - Math.floor(Math.sqrt(fxrand() * maxOsc * maxOsc)) + 5
  features.osc = []
  //  Now make the oscillators
  let oldColour = {
    h: null,
    s: null,
    l: null
  }
  for (let x = 0; x < features.oscillators; x++) {
    const newOsc = {
      min: fxrand() * 0.8 + 0.1,
      max: fxrand() * 0.8 + 0.1,
      speed: fxrand() * 0.9 + 0.1
    }
    newOsc.colour = features.palette[Math.floor(fxrand() * features.palette.length)]
    while (
      newOsc.colour.h === oldColour.h &&
      newOsc.colour.s === oldColour.s &&
      newOsc.colour.l === oldColour.l
    ) newOsc.colour = features.palette[Math.floor(fxrand() * features.palette.length)]
    oldColour = JSON.parse(JSON.stringify(newOsc.colour))
    features.osc.push(newOsc)
  }

  // ##########################################################################
  // MAIN HEXAGON
  // ##########################################################################
  features.showMainHexagon = true

  // ##########################################################################
  // SMALL HOLDERS
  // ##########################################################################
  features.showSmallHolders = true

  //  Now work out where we are going to place the small ones
  const smallHolder = []
  for (let x = 0; x < 5; x++) {
    const yHolder = []
    for (let y = 0; y < 10; y++) {
      const chance = (1 - ((y + 1) * 0.1)) - (x * 0.2)
      const data = {
        showSquare: false,
        showHex: false,
        offset: x * 10 + y
      }
      if (x < 2 || (x === 2 && y < 3) || (x >= 3 && y < 2)) {
        if (fxrand() < chance * 2) {
          if (fxrand() < 0.7) {
            data.showSquare = true
            data.showHex = true
          }
        }
      }
      yHolder.push(data)
    }
    smallHolder.push(yHolder)
  }
  features.smallHolder = smallHolder

  const hashOffsetHolder = []
  for (let i = 0; i < 24; i++) {
    let offset = 0
    if (fxrand() < 0.2) {
      offset = Math.floor(fxrand() * 4) + 1
    }
    hashOffsetHolder.push(offset)
  }
  features.hashOffsetHolder = hashOffsetHolder

  const hashShadeHolder = []
  for (let i = 0; i < 24; i++) {
    if (fxrand() < 0.1) {
      hashShadeHolder.push(true)
    } else {
      hashShadeHolder.push(false)
    }
  }
  features.hashShadeHolder = hashShadeHolder
  features.hashLines = Math.floor((Math.floor(fxrand() * 18) + 6) / 2)

  //  Pick out the colours for the ART FOR BOTS text at the top
  const col = features.palette[0]
  const light = Math.floor(col.l + (100 - col.l) / 2)
  const medium = Math.floor(col.l)
  const dark = Math.floor(col.l / 2)
  features.ARTFORBOTScolours = {
    light,
    medium,
    dark
  }
  const alreadyUsedColours = [col]
  const backgroundColour = features.palette[0]

  // ##########################################################################
  // TOP BLOCK
  // ##########################################################################
  //  See if we are going to have a top strip
  features.showTopBlock = fxrand() < 0.666
  features.blocks = {}
  features.blocks.top = {
    colour: features.palette[Math.floor(fxrand() * (features.palette.length - 4)) + 3],
    tab: features.palette[Math.floor(fxrand() * (features.palette.length - 4)) + 3],
    striped: false
  }
  alreadyUsedColours.push(features.blocks.top.colour)

  while (alreadyUsedColours.includes(features.blocks.top.tab)) features.blocks.top.tab = features.palette[Math.floor(fxrand() * (features.palette.length - 3)) + 2]
  alreadyUsedColours.push(features.blocks.top.tab)

  //  Sometimes we'll make the top block striped and the tab solid
  if (fxrand() < 0.4) features.blocks.top.striped = true

  // ##########################################################################
  // CIRCLES
  // ##########################################################################
  let circlesChance = 0.6
  const tilesChance = 0.3
  const hasTiles = fxrand() < tilesChance
  if (!hasTiles) circlesChance = 0.9
  features.showCircles = fxrand() < circlesChance

  //  Make the first circle always null
  features.circles = [null]
  oldColour = features.palette[Math.floor(fxrand() * (features.palette.length - 1)) + 1]
  for (let x = 0; x < 4; x++) {
    if (fxrand() < 0.4) {
      const newCircle = {
        colour: features.palette[Math.floor(fxrand() * (features.palette.length - 1)) + 1],
        hollow: false,
        striped: false
      }
      while (newCircle.colour === oldColour && newCircle.colour === backgroundColour) newCircle.colour = features.palette[Math.floor(fxrand() * (features.palette.length - 1)) + 1]
      if (fxrand() < 0.5) newCircle.striped = true
      if (fxrand() < 0.5) {
        newCircle.hollow = true
        newCircle.striped = false
      }
      features.circles.push(newCircle)
    } else {
      features.circles.push(null)
    }
  }

  // ##########################################################################
  // Y2K ARROWS
  // ##########################################################################
  //  See if we have some recursive arrows
  features.showY2KArrows = hasTiles
  features.tiles = []
  globalTiles = []
  recurse(0, 0, 1, 1, 1)
  features.tiles = globalTiles
  features.tileColour = 'white'
  if ([0, 1, 5, 6, 7, 9, 13, 14].includes(features.palNumber)) features.tileColour = 'black'
  if ([8].includes(features.palNumber)) features.tileColour = 'hsla(324, 84%, 65%, 1)'
  if ([8].includes(features.palNumber) && fxrand() < 0.5) features.tileColour = 'hsla(52, 99%, 62%, 1)'
  if ([10].includes(features.palNumber)) features.tileColour = 'hsla(330, 100%, 50%, 1)'
  if ([11].includes(features.palNumber) && fxrand() < 1) features.tileColour = 'hsla(60, 100%, 60%, 1)'
  if ([12].includes(features.palNumber)) features.tileColour = 'hsla(28, 100%, 50%, 1)'

  // ##########################################################################
  // SMALL SQUARES
  // ##########################################################################
  //  The small grid of squares along the bottom need some love too
  features.showSmallSquaresAndStripes = true
  features.squares = []
  for (let square = 0; square <= 100; square++) {
    const toggle = []
    for (let t = 0; t < 4; t++) toggle.push(fxrand() < 0.5)
    features.squares.push(toggle)
  }

  // ##########################################################################
  // HASH CODES
  // ##########################################################################
  features.showHashCodes = true

  // ##########################################################################
  // NOISE HEXAGONS
  // ##########################################################################
  //  Now noise the hexagons on the left side
  features.showNoiseHex = fxrand() < 0.4
  noise.seed(fxhash)
  features.noiseHexagons = []
  features.maxNoiseHexagons = 20 + Math.floor(fxrand() * 3) * 20
  features.noiseHexagonsHueShift = 0
  if (fxrand() < 0.333) features.noiseHexagonsHueShift = Math.floor(fxrand() * 3) * 120
  for (let x = 0; x < features.maxNoiseHexagons; x++) {
    const hexes = []
    for (let y = 0; y < features.maxNoiseHexagons; y++) {
      if (fxrand() < ((noise.perlin2(x / 500, y / 700) + 1) / 2) * ((features.maxNoiseHexagons - x) / features.maxNoiseHexagons)) {
        hexes.push({
          layer1: fxrand() < 0.8,
          layer2: fxrand() < 0.8,
          layer3: fxrand() < 0.8
        })
      } else {
        hexes.push(null)
      }
    }
    features.noiseHexagons.push(hexes)
  }

  // ##########################################################################
  // Chevrons
  // ##########################################################################
  //  Now the chevrons on the right hand side
  features.showChevrons = fxrand() < 0.4
  features.chevrons = []
  for (let c = 0; c < 8; c++) {
    if (fxrand() < 0.666) {
      features.chevrons.push({})
    } else {
      features.chevrons.push(null)
    }
  }
  features.chevronsStripes = []
  for (let s = 0; s < 80; s++) {
    features.chevronsStripes.push({
      x: fxrand(),
      widthMod: Math.floor(fxrand() * 20),
      colourIndex: Math.floor(fxrand() * features.palette.length)
    })
  }

  // ##########################################################################
  // PROFIT LOSS
  // ##########################################################################
  //  Next the up-downs
  features.showUpDowns = fxrand() < 0.4
  features.upDowns = []
  for (let c = 0; c < 23; c++) {
    if (fxrand() < 0.666) {
      features.upDowns.push({
        start: -fxrand(),
        end: fxrand()
      })
    } else {
      features.upDowns.push(null)
    }
  }

  // ##########################################################################
  // ATARI BABY
  // ##########################################################################
  //  Do we have an atariBaby
  features.showAtariBaby = fxrand() < 0.2

  // ##########################################################################
  // RAYS
  // ##########################################################################
  //  Work out what hexes we have, how many and how bbig they should be
  features.showRays = fxrand() < 0.4
  features.hexRayHexes = []
  features.hexRayRays = []
  features.hexRayOffsets = [fxrand() * 0.8 + 0.1, fxrand() * 0.8 + 0.1]
  const maxHexRayHexes = Math.floor(fxrand() * 6) + 4
  for (let x = 0; x < maxHexRayHexes; x++) {
    features.hexRayHexes.push(fxrand())
  }
  //  Now make a bunch of rays, decided on which ring each one start
  const maxHexRayRays = Math.floor(fxrand() * 80) + 60
  for (let r = 0; r < maxHexRayRays; r++) {
    const ray = {
      start: Math.floor(fxrand() * maxHexRayHexes),
      end: null,
      angle: Math.floor(fxrand() * 360)
    }
    //  Some of the time we move from one ring to another,
    //  the rest of the time we go forever
    if (fxrand() < 0.5) {
      ray.end = ray.start
      while (ray.end === ray.start) ray.end = Math.floor(fxrand() * maxHexRayHexes)
    }
    features.hexRayRays.push(ray)
  }
  //  Sort them into order
  features.hexRayHexes = features.hexRayHexes.sort((a, b) => (a.min < b.min) ? 1 : -1)

  //  Set up the flickering
  features.flickeringItems = [{
    name: 'showMainHexagon',
    start: 0,
    end: 10,
    onoffs: []
  }, {
    name: 'showARTFORBOTS',
    start: 4,
    end: 15,
    onoffs: []
  }, {
    name: 'showSmallHolders',
    start: 6,
    end: 20,
    onoffs: []
  }, {
    name: 'showTopBlock',
    start: 8,
    end: 25,
    onoffs: []
  }, {
    name: 'showHashCodes',
    start: 10,
    end: 30,
    onoffs: []
  }, {
    name: 'showSmallSquaresAndStripes',
    start: 11,
    end: 30,
    onoffs: []
  }, {
    name: 'showCircles',
    start: 14,
    end: 50,
    onoffs: []
  }, {
    name: 'showChevrons',
    start: 16,
    end: 50,
    onoffs: []
  }, {
    name: 'showNoiseHex',
    start: 18,
    end: 50,
    onoffs: []
  }, {
    name: 'showRays',
    start: 20,
    end: 50,
    onoffs: []
  }, {
    name: 'showY2KArrows',
    start: 25,
    end: 50,
    onoffs: []
  }, {
    name: 'showUpDowns',
    start: 30,
    end: 50,
    onoffs: []
  }, {
    name: 'showAtariBaby',
    start: 35,
    end: 50,
    onoffs: []
  }]
  const upperChance = 0.98
  for (let f = 0; f < 1440; f++) {
    for (const item of features.flickeringItems) {
      const startFrame = item.start * 24
      const endFrame = item.end * 24
      const diff = endFrame - startFrame
      // If we  are over 55 seconds, then always show
      if (f > 1320) {
        item.onoffs.push(true)
      } else {
        //  If we haven't started yet, then don't show
        if (f < startFrame) {
          item.onoffs.push(false)
        } else {
          //  If we have finished, then we have a slim chance not to show
          if (f > endFrame) {
            item.onoffs.push(fxrand() < upperChance)
          } else {
            // work out how far between the start and end frame we are
            item.onoffs.push(fxrand() < (f - startFrame) / diff * upperChance)
          }
        }
      }
    }
  }
  features.flickeringItemsObj = {}
  for (const item of features.flickeringItems) {
    features.flickeringItemsObj[item.name] = item
  }
  window.$fxhashFeatures.oscillators = features.oscillators
  window.$fxhashFeatures.palette = ['Frail Robin',
    'Basic Dragonfly',
    'Low Chill',
    'Corrupt Champion',
    'Formal Tiger',
    'Late Devil',
    'Eager Hurricane',
    'Late Liberty',
    'Sleeping Dragon',
    'Close Passenger',
    'First Supernova',
    'Proud Rose',
    'Stalking Biscuit',
    'Electric Clown',
    'Atomic Sunset',
    'Baked Luna'
  ][palNumber]
  window.$fxhashFeatures['Top block'] = features.showTopBlock
  window.$fxhashFeatures['Hash codes'] = features.showHashCodes
  window.$fxhashFeatures['Code stripes'] = features.showSmallSquaresAndStripes
  window.$fxhashFeatures.Circles = features.showCircles
  window.$fxhashFeatures.Chevrons = features.showChevrons
  window.$fxhashFeatures['Noise hexes'] = features.showNoiseHex
  window.$fxhashFeatures.Schematic = features.showRays
  window.$fxhashFeatures['Y2K arrows'] = features.showY2KArrows
  window.$fxhashFeatures['Profit/Loss'] = features.showUpDowns
  window.$fxhashFeatures['Atari Baby'] = features.showAtariBaby
  window.$fxhashFeatures['For Bots'] = true
  window.$fxhashFeatures['For Humans'] = true
}

//  Call the above make features, so we'll have the window.$fxhashFeatures available
//  for fxhash
makeFeatures()

//  Call this at the start
const init = async () => {
  //  I should add a timer to this, but really how often to people who aren't
  //  the developer resize stuff all the time. Stick it in a digital frame and
  //  have done with it!
  window.addEventListener('resize', async () => {
    //  If we do resize though, work out the new size...
    await layoutCanvas()
    //  And redraw it
    drawCanvas()
  })

  //  Now layout the canvas
  await layoutCanvas()
  //  And draw it!!
  drawCanvas()
}

//  This is where we layout the canvas, and redraw the textures
const layoutCanvas = async () => {
  //  MATH!!!
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
  }

  //  Put it into position
  canvas.style.position = 'absolute'
  canvas.style.width = `${cWidth}px`
  canvas.style.height = `${cHeight}px`
  canvas.style.left = `${(wWidth - cWidth) / 2}px`
  canvas.style.top = `${(wHeight - cHeight) / 2}px`

  features.showARTFORBOTS = true
  features.ARTFORBOTScanvas = document.createElement('canvas')
  features.ARTFORBOTScanvas.id = 'ARTFORBOTSsrc'
  features.ARTFORBOTScanvas.width = 6465
  features.ARTFORBOTScanvas.height = 1312
  features.ARTFORBOTSctx = features.ARTFORBOTScanvas.getContext('2d')
  features.ARTFORBOTSctx.drawImage(features.ARTFORBOTS, 0, 0)

  //  Work out the colours
  const col = features.palette[0]
  let light = Math.floor(col.l + (100 - col.l) / 2)
  let medium = Math.floor(col.l)
  let dark = Math.floor(col.l / 2)
  light = Math.max(light, 10)
  light = Math.min(light, 90)
  medium = Math.max(medium, 10)
  medium = Math.min(medium, 90)
  dark = Math.max(dark, 10)
  dark = Math.min(dark, 90)
  features.ARTFORBOTSctx.globalCompositeOperation = 'source-atop'
  features.ARTFORBOTSctx.fillStyle = `hsla(${col.h}, ${col.s}%, ${light}%, 1)`
  features.ARTFORBOTSctx.fillRect(0, 0, 6465, 680)
  features.ARTFORBOTSctx.fillStyle = `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`
  features.ARTFORBOTSctx.fillRect(0, 680, 6465, 400)
  features.ARTFORBOTSctx.fillStyle = `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
  features.ARTFORBOTSctx.fillRect(0, 1080, 6465, 400)
}

const hexPoints = (points, scale) => {
  return JSON.parse(JSON.stringify(points)).map((point) => {
    // scale the points
    point.x *= scale
    point.y *= scale
    //  Now move them to the middle
    point.x += 0.5
    point.y += 0.5
    return point
  })
}

const clipZone = (ctx, width, height, points, zone) => {
  ctx.beginPath()
  if (zone === 0) {
    ctx.moveTo(points[6].x * width + 1, points[6].y * height)
    ctx.lineTo(points[1].x * width, points[1].y * height)
    ctx.lineTo(points[0].x * width, points[0].y * height)
    ctx.lineTo(points[5].x * width + 1, points[5].y * height)
  }
  if (zone === 1) {
    ctx.moveTo(points[6].x * width + 1, points[6].y * height)
    ctx.lineTo(points[2].x * width + 1, points[2].y * height)
    ctx.lineTo(points[2].x * width, points[2].y * height)
    ctx.lineTo(points[1].x * width, points[1].y * height)
    ctx.lineTo(points[0].x * width, points[0].y * height)
    ctx.lineTo(points[0].x * width + 1, points[0].y * height)
  }
  if (zone === 2) {
    ctx.moveTo(points[6].x * width, points[6].y * height)
    ctx.lineTo(points[3].x * width, points[3].y * height)
    ctx.lineTo(points[2].x * width, points[2].y * height)
    ctx.lineTo(points[1].x * width, points[1].y * height)
  }
  if (zone === 3) {
    ctx.moveTo(points[6].x * width, points[6].y * height)
    ctx.lineTo(points[4].x * width, points[4].y * height)
    ctx.lineTo(points[3].x * width, points[3].y * height)
    ctx.lineTo(points[2].x * width, points[2].y * height)
  }
  if (zone === 4) {
    ctx.moveTo(points[6].x * width, points[6].y * height)
    ctx.lineTo(points[5].x * width, points[5].y * height)
    ctx.lineTo(points[4].x * width, points[4].y * height)
    ctx.lineTo(points[3].x * width, points[3].y * height)
  }
  if (zone === 5) {
    ctx.moveTo(points[6].x * width, points[6].y * height)
    ctx.lineTo(points[0].x * width, points[0].y * height)
    ctx.lineTo(points[5].x * width, points[5].y * height)
    ctx.lineTo(points[4].x * width, points[4].y * height)
  }
  ctx.clip()
}

const drawHex = (ctx, width, height, points, light, medium, dark) => {
  //  Draw the light face first
  ctx.fillStyle = light
  ctx.save()
  clipZone(ctx, width, height, points, 0)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 0.75, 0.25, 'hsla(120, 100%, 0%, 0.8)')
  // drawHalftone(ctx, width, height, 20, 1.5, 0.25, 'hsla(120, 100%, 100%, 0.8)')
  ctx.restore()

  //  Draw the medium face
  ctx.fillStyle = medium
  ctx.save()
  clipZone(ctx, width, height, points, 4)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 1, 0.5, 'hsla(120, 100%, 0%, 0.8)')
  ctx.restore()

  //  Draw the dark face
  ctx.fillStyle = dark
  ctx.save()
  clipZone(ctx, width, height, points, 2)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 1, 0.75, 'hsla(120, 100%, 0%, 0.8)')
  ctx.restore()
}

const drawInvertedHex = (ctx, width, height, points, light, medium, dark) => {
  //  Draw the light face first
  ctx.fillStyle = light
  ctx.save()
  clipZone(ctx, width, height, points, 3)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 1, 0.25, 'hsla(120, 100%, 0%, 0.8)')
  ctx.restore()

  //  Draw the medium face
  ctx.fillStyle = medium
  ctx.save()
  clipZone(ctx, width, height, points, 1)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 1, 0.5, 'hsla(120, 100%, 0%, 0.8)')
  ctx.restore()

  //  Draw the dark face
  ctx.fillStyle = dark
  ctx.save()
  clipZone(ctx, width, height, points, 5)
  ctx.fillRect(0, 0, width, height)
  // drawHalftone(ctx, width, height, 50, 1, 0.75, 'hsla(120, 100%, 0%, 0.8)')
  ctx.restore()
}

//  Draw some halftone
/*
const drawHalftone = (ctx, width, height, angle, size, shade, fill, mode = 'source-over') => {
  ctx.fillStyle = fill
  ctx.globalCompositeOperation = mode

  ctx.save()
  ctx.rotate(angle * Math.PI / 180)
  const step = width / 100 * size
  let x = -width
  let y = -height
  while (y < height * 2) {
    while (x < width * 2) {
      x += step
      ctx.beginPath()
      ctx.arc(x, y, step * shade * 0.7, 0, 2 * Math.PI)
      ctx.fill()
    }
    x = -width / 2
    y += step
  }
  ctx.restore()
}
*/

//   Draw some cheverons
const drawChevrons = (ctx, width, height, howMany, lineWidth, colour, flipped = false) => {
  const step = width / howMany
  const offset = step / 2
  ctx.lineWidth = lineWidth
  ctx.strokeStyle = colour
  for (let x = 0; x < howMany * 2; x++) {
    ctx.beginPath()
    if (flipped) {
      ctx.moveTo((x * step) + offset - (width * 2), -height)
      ctx.lineTo(width + (x * step) + offset, height * 2)
    } else {
      ctx.moveTo(width + (x * step) + offset, -height)
      ctx.lineTo((x * step) + offset - (width * 2), height * 2)
    }
    ctx.stroke()
  }
}

//  This is where we bring it all together
const drawCanvas = async () => {
  const canvas = document.getElementById('target')
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height

  //  update the time passed
  //  We do it this way so we can speed up time if needed.
  if (!paused) timePassed -= (new Date().getTime() - lastTick) * speedMod * (1 * (1 + Math.abs(Math.sin(timePassed / 100000))))
  lastTick = new Date().getTime()

  //  Work out if we are flickering
  let frame = 0
  if (features.flicker) {
    const diff = new Date().getTime() - features.startFlickrTime
    frame = Math.floor(diff / 1000 * 24 / 4) * 4
    frame *= 2
    //  If we have passed 60 seconds, then turn flickring back off
    if (frame > 1440) features.flicker = false
  }
  // ##########################################################################
  //  Fill the background
  // ##########################################################################
  const background = features.palette[features.palette.length - 1]
  ctx.fillStyle = `hsla(${background.h}, ${background.s}%, ${background.l}%, 1)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // ##########################################################################
  //  If we have the top strip then do that here
  // ##########################################################################
  if ((features.showTopBlock && !features.flicker) || (features.flicker && features.flickeringItemsObj.showTopBlock.onoffs[frame])) {
    //  Draw the top block
    const topBlockColour = `hsla(${features.blocks.top.colour.h}, ${features.blocks.top.colour.s}%, ${features.blocks.top.colour.l}%, 1)`
    ctx.save()
    ctx.beginPath()
    ctx.rect(0, 0, w, h / 3.1)
    ctx.clip()
    if (features.blocks.top.striped) {
      drawChevrons(ctx, w, h, 16, w / 40, topBlockColour)
    } else {
      ctx.fillStyle = topBlockColour
      ctx.fillRect(0, 0, w, h)
    }
    ctx.restore()

    //  And the tab on the right
    const tabColour = `hsla(${features.blocks.top.tab.h}, ${features.blocks.top.tab.s}%, ${features.blocks.top.tab.l}%, 1)`
    ctx.save()
    ctx.beginPath()
    ctx.rect(w - (w / 30), h / 3.1 / 4, w / 30, (h / 3.1 / 2))
    ctx.clip()
    if (!features.blocks.top.striped) {
      drawChevrons(ctx, w, h, 40, w / 80, tabColour)
    } else {
      ctx.fillStyle = tabColour
      ctx.fillRect(0, 0, w, h)
    }
    ctx.restore()
  }

  // ##########################################################################
  //  Draw Atari Baby
  // ##########################################################################
  if ((features.showAtariBaby && !features.flicker) || (features.flicker && features.flickeringItemsObj.showAtariBaby.onoffs[frame])) {
    const ribbonWidth = w / 7
    for (let r = 3; r >= 0; r--) {
      const outerX = ((r * ribbonWidth) + (ribbonWidth / 2))
      const middleY = h * 0.6
      const shrinkMod = 0.25
      const shade = `hsla(${features.palette[r].h}, ${features.palette[r].s}%, ${features.palette[r].l}%, 0.8)`
      ctx.fillStyle = shade
      ctx.beginPath()
      ctx.moveTo((w / 2) - outerX, h)
      ctx.lineTo((w / 2) - outerX * shrinkMod, middleY)
      ctx.lineTo((w / 2) - outerX * shrinkMod, 0)
      ctx.lineTo((w / 2) + outerX * shrinkMod, 0)
      ctx.lineTo((w / 2) + outerX * shrinkMod, middleY)
      ctx.lineTo((w / 2) + outerX, h)
      ctx.closePath()
      ctx.fill()
    }
  }
  // ##########################################################################
  //  Draw the chevrons
  // ##########################################################################
  if ((features.showChevrons && !features.flicker) || (features.flicker && features.flickeringItemsObj.showChevrons.onoffs[frame])) {
    const chevronXOffset = w * 0.773
    const chevronYOffset = w * 0.12
    const chevronWidth = w * 0.16
    const chevronHeight = h / 14
    const chevronGap = h / 30
    let paletteShift = 0
    let miniYOffset = 0
    let offsetAmount = h / 160

    for (let r = 0; r <= 2; r++) {
      for (const c in features.chevrons) {
        const chevron = features.chevrons[c]
        if (chevron) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(chevronXOffset, chevronYOffset + ((chevronHeight + chevronGap) * c) + miniYOffset)
          ctx.lineTo(chevronXOffset + chevronWidth, chevronYOffset + ((chevronHeight + chevronGap) * c) - chevronHeight + miniYOffset)
          ctx.lineTo(chevronXOffset + chevronWidth, chevronYOffset + ((chevronHeight + chevronGap) * c) + miniYOffset)
          ctx.lineTo(chevronXOffset, chevronYOffset + ((chevronHeight + chevronGap) * c) + chevronHeight + miniYOffset)
          ctx.lineTo(chevronXOffset - chevronWidth, chevronYOffset + ((chevronHeight + chevronGap) * c) + miniYOffset)
          ctx.lineTo(chevronXOffset - chevronWidth, chevronYOffset + ((chevronHeight + chevronGap) * c) - chevronHeight + miniYOffset)
          ctx.lineTo(chevronXOffset, chevronYOffset + ((chevronHeight + chevronGap) * c) + miniYOffset)
          ctx.clip()

          //  Now draw the stripes
          const left = chevronXOffset - chevronWidth
          const right = chevronXOffset + chevronWidth
          const diff = right - left
          for (const stripe of features.chevronsStripes) {
            ctx.beginPath()
            ctx.moveTo(left + (diff * stripe.x), 0)
            ctx.lineTo(left + (diff * stripe.x), h)

            ctx.lineWidth = w / 1000 * stripe.widthMod
            let cIndex = stripe.colourIndex + paletteShift
            if (cIndex >= features.palette.length) cIndex -= features.palette.length
            ctx.strokeStyle = `hsla(${features.palette[cIndex].h}, ${features.palette[cIndex].s}%, ${features.palette[cIndex].l}%, 1)`
            ctx.stroke()
          }
          ctx.restore()
        }
      }
      miniYOffset -= offsetAmount
      offsetAmount *= 2
      paletteShift++
    }
  }

  // ##########################################################################
  //  Draw the hexagons
  // ##########################################################################
  if ((features.showNoiseHex && !features.flicker) || (features.flicker && features.flickeringItemsObj.showNoiseHex.onoffs[frame])) {
    //  Get the points for a hexagone
    const noiseHexPoints1 = hexPoints(features.rootPoints, w / features.maxNoiseHexagons * 1)
    const noiseHexPoints2 = hexPoints(features.rootPoints, w / features.maxNoiseHexagons * 0.666)
    const noiseHexPoints3 = hexPoints(features.rootPoints, w / features.maxNoiseHexagons * 0.333)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = w / 1000
    for (const x in features.noiseHexagons) {
      for (const y in features.noiseHexagons[x]) {
        const thisHex = features.noiseHexagons[x][y]
        if (thisHex && !(parseInt(y, 10) === 0 && x % 2 === 0)) {
          let xOffset = w / features.maxNoiseHexagons * x + (w / (features.maxNoiseHexagons * 2))
          let yOffset = h / features.maxNoiseHexagons * y + (h / (features.maxNoiseHexagons * 2))
          if (x % 2 === 0) yOffset -= h / (features.maxNoiseHexagons * 2)
          xOffset *= 0.9
          xOffset += w / (features.maxNoiseHexagons * 4)
          //  Do the first hex
          if (thisHex.layer1) {
            ctx.strokeStyle = `hsla(${features.palette[0].h + features.noiseHexagonsHueShift}, ${features.palette[0].s}%, ${features.palette[0].l}%, 1)`
            ctx.beginPath()
            ctx.moveTo(noiseHexPoints1[0].x + xOffset, noiseHexPoints1[0].y + yOffset)
            for (let p = 1; p <= 5; p++) ctx.lineTo(noiseHexPoints1[p].x + xOffset, noiseHexPoints1[p].y + yOffset)
            ctx.closePath()
            ctx.stroke()
          }
          //  Do the second hex
          if (thisHex.layer2) {
            ctx.strokeStyle = `hsla(${features.palette[1].h + features.noiseHexagonsHueShift}, ${features.palette[1].s}%, ${features.palette[1].l}%, 1)`
            ctx.beginPath()
            ctx.moveTo(noiseHexPoints2[0].x + xOffset, noiseHexPoints2[0].y + yOffset)
            for (let p = 1; p <= 5; p++) ctx.lineTo(noiseHexPoints2[p].x + xOffset, noiseHexPoints2[p].y + yOffset)
            ctx.closePath()
            ctx.stroke()
          }
          //  Do the third hex
          if (thisHex.layer3) {
            ctx.strokeStyle = `hsla(${features.palette[2].h + features.noiseHexagonsHueShift}, ${features.palette[2].s}%, ${features.palette[2].l}%, 1)`
            ctx.beginPath()
            ctx.moveTo(noiseHexPoints3[0].x + xOffset, noiseHexPoints3[0].y + yOffset)
            for (let p = 1; p <= 5; p++) ctx.lineTo(noiseHexPoints3[p].x + xOffset, noiseHexPoints3[p].y + yOffset)
            ctx.closePath()
            ctx.stroke()
          }
        }
      }
    }
  }

  // ##########################################################################
  //  Draw the hex rays
  // ##########################################################################
  if ((features.showRays && !features.flicker) || (features.flicker && features.flickeringItemsObj.showRays.onoffs[frame])) {
    ctx.lineWidth = w / 1000
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    const offsetter = [{
      clipTop: 0,
      clipBottom: 0.32,
      leftShift: features.hexRayOffsets[0]
    }, {
      clipTop: 0.325,
      clipBottom: 0.67,
      leftShift: features.hexRayOffsets[1]
    }]
    ctx.globalCompositeOperation = 'difference'
    for (const offset of offsetter) {
      for (const rayHex of features.hexRayHexes) {
        const maxRadius = h * 0.25
        const minRadius = h * 0.05
        const radius = rayHex * (maxRadius - minRadius) + minRadius

        //  Now draw the hex
        ctx.save()
        //  Have where we can draw the rays
        ctx.beginPath()
        ctx.rect(0, h * offset.clipTop, w, h * offset.clipBottom)
        ctx.clip()
        //  Shift
        ctx.translate(w * offset.leftShift, h * 0.31)
        //  Draw the circles
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.stroke()
        //  And back to the start
        ctx.restore()
      }

      //  Now we do the same with the rays
      for (const rayRay of features.hexRayRays) {
        const maxRadius = h * 0.25
        const minRadius = h * 0.05
        const startRadius = features.hexRayHexes[rayRay.start] * (maxRadius - minRadius) + minRadius
        let endRadius = h * 2
        if (rayRay.end !== null) endRadius = features.hexRayHexes[rayRay.end] * (maxRadius - minRadius) + minRadius

        const startX = (Math.sin((Math.PI / 180) * rayRay.angle) * startRadius)
        const startY = (Math.cos((Math.PI / 180) * rayRay.angle) * startRadius)
        const endX = (Math.sin((Math.PI / 180) * rayRay.angle) * endRadius)
        const endY = (Math.cos((Math.PI / 180) * rayRay.angle) * endRadius)

        //  Now draw the hex
        ctx.save()
        //  Have where we can draw the rays
        ctx.beginPath()
        ctx.rect(0, h * offset.clipTop, w, h * offset.clipBottom)
        ctx.clip()
        //  Shift
        ctx.translate(w * offset.leftShift, h * 0.31)
        //  Draw the circles
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.closePath()
        ctx.stroke()
        //  And back to the start
        ctx.restore()
      }
    }
    ctx.globalCompositeOperation = 'source-over'
  }

  // ##########################################################################
  //  Draw any recursion arrows
  // ##########################################################################
  if ((features.showY2KArrows && !features.flicker) || (features.flicker && features.flickeringItemsObj.showY2KArrows.onoffs[frame])) {
    const arrowPoints = [
      [0.95, 0.95],
      [0.30, 0.95],
      [0.10, 0.75],
      [0.60, 0.75],
      [0.05, 0.20],
      [0.20, 0.05],
      [0.75, 0.60],
      [0.75, 0.10],
      [0.95, 0.30],
      [0.95, 0.95]
    ]
    features.tiles.forEach((tile) => {
      let thesePoints = JSON.parse(JSON.stringify(arrowPoints))
      if (tile.rotation === 90 || tile.rotation === 180) thesePoints = thesePoints.map((point) => [1 - point[0], point[1]])
      if (tile.rotation === 180 || tile.rotation === 270) thesePoints = thesePoints.map((point) => [point[0], 1 - point[1]])
      ctx.fillStyle = features.tileColour
      ctx.save()
      ctx.beginPath()
      ctx.moveTo((thesePoints[0][0] * tile.w * w) + (tile.x * w), (thesePoints[0][1] * tile.h * h) + (tile.y * h))
      for (let i = 1; i < arrowPoints.length; i++) ctx.lineTo((thesePoints[i][0] * tile.w * w) + (tile.x * w), (thesePoints[i][1] * tile.h * h) + (tile.y * h))
      ctx.clip()
      ctx.fillRect(0, 0, w, h)
      ctx.restore()
    })
  }

  // ##########################################################################
  //  If we have any circles draw those
  // ##########################################################################
  if ((features.showCircles && !features.flicker) || (features.flicker && features.flickeringItemsObj.showCircles.onoffs[frame])) {
    const radius = h / 6
    let offset = 1
    features.circles.forEach((circle) => {
      //  If we have a circle, then do the whole thing
      if (circle) {
        const circleColour = `hsla(${circle.colour.h}, ${circle.colour.s}%, ${circle.colour.l * 0.8}%, 1)`
        const circleClip = new Path2D()
        circleClip.arc(w / 4, radius * offset, radius, 0, 2 * Math.PI)

        //  Now we fill the circle (or hollow circle)
        if (circle.hollow) {
          ctx.lineWidth = w / 80
          ctx.lineCap = 'round'
          ctx.strokeStyle = circleColour
          for (let angle = 0; angle < 360; angle += 10) {
            const rotation = angle * Math.PI / 180
            ctx.beginPath()
            ctx.moveTo((Math.sin(rotation) * -radius * 0.95) + (w / 4), (Math.cos(rotation) * -radius * 0.95) + (radius * offset))
            ctx.lineTo((Math.sin(rotation) * -radius * 0.8) + (w / 4), (Math.cos(rotation) * -radius * 0.8) + (radius * offset))
            ctx.stroke()
          }
          ctx.lineCap = 'square'
        } else {
          ctx.save()
          ctx.clip(circleClip, 'evenodd')
          ctx.fillStyle = circleColour
          if (circle.striped) {
            const density = 8
            drawChevrons(ctx, w, h, 16 * density, w / (40 * density), circleColour, offset % 2)
          } else {
            ctx.fillRect(0, 0, w, h)
          }
          ctx.restore()
        }
      }
      offset++
    })
  }

  // ##########################################################################
  // Time for the updowns
  // ##########################################################################
  if ((features.showUpDowns && !features.flicker) || (features.flicker && features.flickeringItemsObj.showUpDowns.onoffs[frame])) {
    const upDownMargin = w * 0.1
    const upDownLeftMargin = upDownMargin / 2
    const upDownTotalWidth = w - upDownMargin
    const upDownWidth = w / 60
    const upDownHeight = h / 10
    const upDownStripe = h / 500
    const upDownOffset = -w / 1000

    const upDownCol = features.palette[0]
    let upDownDark = Math.floor(upDownCol.l / 2)
    upDownDark = Math.max(upDownDark, 10)
    upDownDark = Math.min(upDownDark, 90)

    const upDownColours = [`hsla(${upDownCol.h}, ${upDownCol.s}%, ${upDownDark}%, 0.25)`, `hsla(${upDownCol.h}, ${upDownCol.s}%, 100%, 0.8)`]
    ctx.lineWidth = upDownStripe

    for (let l = 0; l <= 1; l++) {
      ctx.fillStyle = upDownColours[l]
      ctx.strokeStyle = upDownColours[l]
      for (const u in features.upDowns) {
        const upDown = features.upDowns[u]
        if (upDown) {
          const x = u / (features.upDowns.length - 1) * upDownTotalWidth + upDownLeftMargin
          const start = (h / 3.1) + (upDownHeight * upDown.start)
          const end = (h / 3.1) + (upDownHeight * upDown.end)
          let currentStart = start

          while (currentStart < end) {
            ctx.fillRect(x - upDownWidth / 2 + (upDownOffset * l), currentStart + (upDownOffset * l), upDownWidth, upDownStripe)
            currentStart += upDownStripe * 2.5
          }
          currentStart -= upDownStripe * 2.5
          //  Do the start and end stripes
          ctx.beginPath()
          ctx.moveTo(x + (upDownOffset * l), start - upDownStripe * 10 + (upDownOffset * l))
          ctx.lineTo(x + (upDownOffset * l), start + (upDownOffset * l))
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(x + (upDownOffset * l), currentStart + upDownStripe * 10 + (upDownOffset * l))
          ctx.lineTo(x + (upDownOffset * l), currentStart + upDownStripe + (upDownOffset * l))
          ctx.stroke()
        }
      }
    }
  }

  // ##########################################################################
  //  Now copy over the ARTFORBOTS text
  // ##########################################################################
  if ((features.showARTFORBOTS && !features.flicker) || (features.flicker && features.flickeringItemsObj.showARTFORBOTS.onoffs[frame])) {
    ctx.imageSmoothingQuality = 'medium'
    ctx.drawImage(features.ARTFORBOTScanvas, 0, 0, 6465, 1312, w / 11 / 4, w / 11 / 4, w * 0.75, w * 0.75 / 6465 * 1312)
    ctx.imageSmoothingQuality = 'low'
  }

  // ##########################################################################
  //  Stripes at the bottom
  // ##########################################################################
  if ((features.showSmallSquaresAndStripes && !features.flicker) || (features.flicker && features.flickeringItemsObj.showSmallSquaresAndStripes.onoffs[frame])) {
    const stripSize = h * 0.029
    const stripTop = h * 0.8945
    const stripMiddle = stripTop + stripSize
    const stripBottom = stripTop + (stripSize * 2)
    const stripExtraBottom = stripTop + (stripSize * 3)

    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.beginPath()
    ctx.moveTo(0, stripTop)
    ctx.lineTo(w - (stripSize * 3.5), stripTop)
    ctx.lineTo(w - (stripSize * 4.5), stripMiddle)
    ctx.lineTo(0, stripMiddle)
    ctx.fill()

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.beginPath()
    ctx.moveTo(0, stripMiddle)
    ctx.lineTo(w - (stripSize * 4.5), stripMiddle)
    ctx.lineTo(w - (stripSize * 5.5), stripBottom)
    ctx.lineTo(0, stripBottom)
    ctx.fill()

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
    ctx.beginPath()
    ctx.moveTo(0, stripBottom)
    ctx.lineTo(w - (stripSize * 5.5), stripBottom)
    ctx.lineTo(w - (stripSize * 6.5), stripExtraBottom)
    ctx.lineTo(0, stripExtraBottom)
    ctx.fill()

    const stripWidth = w * 0.005
    for (let start = w - (stripSize * 3.5) + stripWidth; start < w * 1.2; start += stripWidth * 2) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.beginPath()
      ctx.moveTo(start, stripTop)
      ctx.lineTo(start + stripWidth, stripTop)
      ctx.lineTo(start + stripWidth - stripSize, stripMiddle)
      ctx.lineTo(start - stripSize, stripMiddle)
      ctx.fill()
    }

    for (let start = w - (stripSize * 4.5) + stripWidth; start < w * 1.2; start += stripWidth * 2) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.beginPath()
      ctx.moveTo(start, stripMiddle)
      ctx.lineTo(start + stripWidth, stripMiddle)
      ctx.lineTo(start + stripWidth - stripSize, stripBottom)
      ctx.lineTo(start - stripSize, stripBottom)
      ctx.fill()
    }

    for (let start = w - (stripSize * 5.5) + stripWidth; start < w * 1.2; start += stripWidth * 2) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.beginPath()
      ctx.moveTo(start, stripBottom)
      ctx.lineTo(start + stripWidth, stripBottom)
      ctx.lineTo(start + stripWidth - stripSize, stripExtraBottom)
      ctx.lineTo(start - stripSize, stripExtraBottom)
      ctx.fill()
    }

    //  Do the squares under the stripes
    ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
    const sqOffset = stripWidth / 14
    ctx.lineWidth = sqOffset
    let sIndex = 0
    for (let square = 0 + stripWidth / 2; square < w; square += stripWidth * 2) {
      //  Outer square
      if (features.squares[sIndex][0]) {
        ctx.beginPath()
        ctx.rect(square, stripExtraBottom + (stripWidth / 2), stripWidth, stripWidth)
        ctx.stroke()
      }
      //  2nd square
      if (features.squares[sIndex][1]) {
        ctx.beginPath()
        ctx.rect(square + (sqOffset * 2), stripExtraBottom + (stripWidth / 2) + (sqOffset * 2), stripWidth - (sqOffset * 4), stripWidth - (sqOffset * 4))
        ctx.stroke()
      }
      //  3rd square
      if (features.squares[sIndex][2]) {
        ctx.beginPath()
        ctx.rect(square + (sqOffset * 4), stripExtraBottom + (stripWidth / 2) + (sqOffset * 4), stripWidth - (sqOffset * 8), stripWidth - (sqOffset * 8))
        ctx.stroke()
      }
      //  4th square
      if (features.squares[sIndex][3]) {
        ctx.beginPath()
        ctx.rect(square + (sqOffset * 6), stripExtraBottom + (stripWidth / 2) + (sqOffset * 6), stripWidth - (sqOffset * 12), stripWidth - (sqOffset * 12))
        ctx.stroke()
      }

      sIndex++
    }
  }

  // ##########################################################################
  //  Next we write out the hash code
  // ##########################################################################
  const col = features.palette[0]
  const light = Math.floor(col.l + (100 - col.l) / 2)
  const medium = Math.floor(col.l)
  const dark = Math.floor(col.l / 2)
  if ((features.showHashCodes && !features.flicker) || (features.flicker && features.flickeringItemsObj.showHashCodes.onoffs[frame])) {
    ctx.font = `${h / 40}px ocr-aregular`
    for (let i = 0; i < features.hashLines; i++) {
      ctx.fillStyle = 'white'
      if (features.hashShadeHolder[i]) ctx.fillStyle = `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
      ctx.fillText(fxhash, w / 36 + (features.hashOffsetHolder[i] * (w / (36 * 12))), h - (h / 36 * i) - (h / 36))
    }
  }

  // ##########################################################################
  //  Draw the main background hexagon
  // ##########################################################################
  if ((features.showMainHexagon && !features.flicker) || (features.flicker && features.flickeringItemsObj.showMainHexagon.onoffs[frame])) {
    const maxSize = 0.6
    const points = hexPoints(features.rootPoints, maxSize)
    drawHex(ctx, w, h, points,
      `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
      `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
      `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
    )

    //  Work out where we are between the two points
    const diff = 500
    features.osc.forEach((osc) => {
      // console.log(osc.min + ' : ' + osc.max)
      osc.mid = osc.min + ((osc.max - osc.min) * Math.abs(Math.sin((diff) / 2500 * osc.speed)))
    })

    features.osc = features.osc.sort((a, b) => (a.min < b.min) ? 1 : -1)
    let toggle = false
    if (features.mode === 'toggle') toggle = true
    //  Now draw the rest of the oscillators
    features.osc.forEach((osc) => {
      const mod = osc.mid
      const points = hexPoints(features.rootPoints, mod * maxSize)
      const col = osc.colour
      const light = Math.floor(col.l + (100 - col.l) / 2)
      const medium = Math.floor(col.l)
      const dark = Math.floor(col.l / 2)
      /*
      light = Math.max(light, 10)
      light = Math.min(light, 90)
      medium = Math.max(medium, 10)
      medium = Math.min(medium, 90)
      dark = Math.max(dark, 10)
      dark = Math.min(dark, 90)
      */
      if (toggle) {
        drawInvertedHex(ctx, w, h, points,
          `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
          `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
          `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
        )
      } else {
        drawHex(ctx, w, h, points,
          `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
          `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
          `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
        )
      }
      if (features.mode === 'toggle') toggle = !toggle
    })
  }

  // ##########################################################################
  //  Now draw the smaller hexagons
  // ##########################################################################
  if ((features.showSmallHolders && !features.flicker) || (features.flicker && features.flickeringItemsObj.showSmallHolders.onoffs[frame])) {
    let y = 0
    let x = 0
    const square = w / 11
    const offset = square / 2

    features.smallHolder.forEach((col) => {
      col.forEach((row) => {
        if (row.showSquare) {
          ctx.beginPath()
          ctx.rect(w - offset - square - (x * square), h - offset - square - (y * square), square, square)
          // ctx.rect(w - offset - square, h - offset - square, w - offset, h - offset - (y * square))
          // ctx.stroke()

          //  Now if we are supposed to draw the hexagon then we do all of the above again, but smaller!
          if (row.showHex) {
            const maxSize = 1 / 13
            const points = translate(hexPoints(features.rootPoints, maxSize), 0.5 - (1 / 11 * (x + 1)), 0.5 - (1 / 11 * (y + 1)))
            const col = features.palette[0]
            const light = Math.floor(col.l + (100 - col.l) / 2)
            const medium = Math.floor(col.l)
            const dark = Math.floor(col.l / 2)
            /*
            light = Math.max(light, 10)
            light = Math.min(light, 90)
            medium = Math.max(medium, 10)
            medium = Math.min(medium, 90)
            dark = Math.max(dark, 10)
            dark = Math.min(dark, 90)
            */
            drawHex(ctx, w, h, points,
              `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
              `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
              `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
            )

            features.osc.forEach((osc) => {
              // console.log(osc.min + ' : ' + osc.max)
              osc.mid = osc.min + ((osc.max - osc.min) * Math.abs(Math.sin((startTime) / 2500 * osc.speed * (row.offset * 1000))))
            })

            features.osc = features.osc.sort((a, b) => (a.min < b.min) ? 1 : -1)
            let toggle = false
            if (features.mode === 'toggle') toggle = true
            //  Now draw the rest of the oscillators
            features.osc.forEach((osc) => {
              const mod = osc.mid
              const points = translate(hexPoints(features.rootPoints, mod * maxSize), 0.5 - (1 / 11 * (x + 1)), 0.5 - (1 / 11 * (y + 1)))
              const col = osc.colour
              const light = Math.floor(col.l + (100 - col.l) / 2)
              const medium = Math.floor(col.l)
              const dark = Math.floor(col.l / 2)
              /*
              light = Math.max(light, 10)
              light = Math.min(light, 90)
              medium = Math.max(medium, 10)
              medium = Math.min(medium, 90)
              dark = Math.max(dark, 10)
              dark = Math.min(dark, 90)
              */
              if (toggle) {
                drawInvertedHex(ctx, w, h, points,
                  `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
                  `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
                  `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
                )
              } else {
                drawHex(ctx, w, h, points,
                  `hsla(${col.h}, ${col.s}%, ${light}%, 1)`,
                  `hsla(${col.h}, ${col.s}%, ${medium}%, 1)`,
                  `hsla(${col.h}, ${col.s}%, ${dark}%, 1)`
                )
              }
              if (features.mode === 'toggle') toggle = !toggle
            })
          }
        }
        y++
      })
      y = 0
      x++
    })
  }

  drawn = true
  /*
  htctx.save()
  clipZone(htctx, w, h, points, 0)
  drawHalftone(htctx, w, h, 45, 1, 0.2, true)
  htctx.restore()
  */

  //  We should wait for the next animation frame here
  window.requestAnimationFrame(drawCanvas)
}

//  This downloads the image by using MAGIC!!!
const autoDownloadCanvas = async (showHash = false) => {
  const element = document.createElement('a')
  element.setAttribute('download', `Hexagone_${fxhash}`)
  element.style.display = 'none'
  document.body.appendChild(element)
  let imageBlob = null
  imageBlob = await new Promise(resolve => document.getElementById('target').toBlob(resolve, 'image/png'))
  element.setAttribute('href', window.URL.createObjectURL(imageBlob, {
    type: 'image/png'
  }))
  element.click()
  document.body.removeChild(element)
}

//  KEY PRESSED OF DOOM
document.addEventListener('keypress', async (e) => {
  e = e || window.event
  // Save
  if (e.key === 's') autoDownloadCanvas()
  //   Toggle highres mode
  if (e.key === 'h') {
    highRes = !highRes
    await layoutCanvas()
  }
  /* eslint-disable */
  if (e.key === '1') features.showARTFORBOTS = !features.showARTFORBOTS
  if (e.key === '2') features.showTopBlock = !features.showTopBlock
  if (e.key === '3') features.showAtariBaby = !features.showAtariBaby
  if (e.key === '4') features.showChevrons = !features.showChevrons
  if (e.key === '5') features.showNoiseHex = !features.showNoiseHex
  if (e.key === '6') features.showRays = !features.showRays
  if (e.key === '7') features.showY2KArrows = !features.showY2KArrows
  if (e.key === '8') features.showCircles = !features.showCircles
  if (e.key === '9') features.showUpDowns = !features.showUpDowns
  if (e.key === '0') features.showSmallSquaresAndStripes = !features.showSmallSquaresAndStripes
  if (e.key === '-') features.showHashCodes = !features.showHashCodes
  if (e.key === '=') features.showSmallHolders = !features.showSmallHolders
  if (e.key === 'm') features.showMainHexagon = !features.showMainHexagon
  //  Turn flickering off if we do anything
  if ('sh1234567890-=m'.includes(e.key)) features.flicker = false

  if (e.key === 'f') {
    if (features.flicker === false) {
      features.startFlickrTime = new Date().getTime()
      features.flicker = true
    } else {
      features.flicker = false
    }
  }
})
/* eslint-enable */

//  This preloads the images so we can get access to them
// eslint-disable-next-line no-unused-vars
const preloadImages = () => {
  //  Normally we would have a test
  // if (true === true) {

  let ARTFORBOTS = document.getElementById('ARTFORBOTS')
  if (!ARTFORBOTS) {
    ARTFORBOTS = document.createElement('img')
    ARTFORBOTS.id = 'ARTFORBOTS'
    ARTFORBOTS.style.width = '6465px'
    ARTFORBOTS.style.height = '1312px'
    ARTFORBOTS.addEventListener('load', () => {
      ARTFORBOTSLoaded = true
    })
    ARTFORBOTS.src = './imgs/ARTFORBOTS.png'
    features.ARTFORBOTS = ARTFORBOTS
  }

  if (ARTFORBOTSLoaded && !drawn) {
    clearInterval(preloadImagesTmr)
    init()
  }

  //  If, for some reason things haven't fired after 3.333 seconds, then just draw the stuff anyway
  //  without the textures
  if (new Date().getTime() - startTime > 3333 && !drawn) {
    clearInterval(preloadImagesTmr)
    init()
  }
}

console.table(window.$fxhashFeatures)
