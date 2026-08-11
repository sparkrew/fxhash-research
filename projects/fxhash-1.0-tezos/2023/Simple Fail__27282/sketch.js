// Inspirations: 
  // sha22.art (sha22blockchain) Perpetual Line: https://www.fxhash.xyz/gentk/FX0-1271430
  // LESSLIE (@lessliexyz) Soil Horizon: https://www.fxhash.xyz/gentk/FX0-662585
  // Disrupted Star (@TidallyD) Joy Division: https://www.fxhash.xyz/gentk/FX0-461810
  // Estienne (@Estienne_ca) Fractures: https://www.fxhash.xyz/gentk/FX0-186809
  // RJM_Studios (@rjm_studios) Different Strokes: https://www.fxhash.xyz/gentk/FX0-215491
  // yenren (@yenrenART) The Voyage: https://www.fxhash.xyz/gentk/FX0-948270
  // KRANKARTA (krankarta) Rebug: https://www.fxhash.xyz/gentk/FX0-1068827
  // Volatile Moods (@VolatileMoods) M-Tore: https://www.fxhash.xyz/gentk/FX0-338148
  // punevyr (@punevyr) d e p t h: https://www.fxhash.xyz/generative/6282
  // whitekross (@whitekross) Slanted: https://www.fxhash.xyz/gentk/FX0-388489
  // Juhani Halkomäki (@JuhaniHalkomaki) rflktr : https://www.fxhash.xyz/gentk/FX0-1324707
  // nudoru (@nudoru) Splinter (https://www.fxhash.xyz/gentk/FX0-1387954)
  // Tea Boswell - Sketchbook Splash: https://www.fxhash.xyz/gentk/FX0-521699
  // Lisa Orth (@lisaorthstudio) - Winter Jacket: https://www.fxhash.xyz/gentk/FX0-95409
  // Corey Haber - SOL: https://opensea.io/assets/ethereum/0x8a2cc211cbba1dc896d1939c4c43778a72d6362f/347
// oo6Ref4tpqhLDsn29xTfUFkbitGi1pfj6vAbjZUJtPS2WwAPhPL - preview hash



let title = "Simple Fail"
let maxDrawSegment
let seedValue //= 4040611622 //377790836
let generatorMode = 0
let generationCount = 0
let maxGenerationCount = 100
let resolutionMultiplier = 1
let enableParams = 1
let printDebugs = -1
let debugLineCt = 0
let debugFrame = 1
let gridCount = 1
let perfect = 0
let fr = 30
let switchPerfect = -1
let switchDistortion = 1
let switchZoom = -1
let showFaceOdds = 0.8
let flipPlace = 0
let flipFaceId
let showOutlineDot = true
let splitFaceOdds = 0.33
let defaultAlpha = 150
let strokeSizetoFaceArea = 1
let stopPerc = 1
let highlightAlphaDefault = 80
let edgeViolationAlphaFactor = 0.5
let crayonIndicator = -1
let switchShowGrid = -1
let switchShowFeatures = -1
let switchAdaptiveRatio = -1
let switchShowHighlights = 1
let switchShowGrain = 1
let switchEcho = 1
let switchFrame = 1
let switchBackground = 1
let showFaceDots = 0
let exportFlag = 0
let highlightTypeTracker = 1
let canvasRatio
let canvasFactor
let canvasMinSize
let strokeSize
let scaleX
let scaleY
let nodeHDivisor1
let nodeHDivisor2
let nodeHDivisor3
let nodeVDivisor1
let nodeVDivisor2
let nodeVDivisor3
let tokenSaved = 0
let chosenColors
let betaBackGround
let colorCombos = []
let faceColors = []
let iOSRatios = [{
    name: "iPhone 11 Pro",
    ratio: 18 / 39
  },
  {
    name: "iPad Pro",
    ratio: 3 / 4
  },
]
let lastTap
let touchStart;
let touchEnd;
let touchDuration = 500;

let marginFactor = 0.06
let showQubesPercInc = 0.1
let drawTypePercStep = 0.04 //should always be larger than showQubesPercInc  random(0.05, 0.1) ... only used in steps right now
let defaultPercStepFactor
let percStepType

let canvasArea
let humanDrawErrorFactor = 0
let grids = []
let qubes = []
let points = []
let bigPoints = []
let outputWidth
let _outputHeight
let featureText_minterMentality
let featureText_outlines
let featureText_outlineStyle
let featureText_qubeType
let featureText_continuity
let customDrawSegmentLimits
let customDrawSegmentLimits_outlines
let drawConsistency = 0.1
let nextDrawnPerc = 0
let incOverlapRate = 0.66
let showFace1 = 0
let showFace2 = 0
let showFace3 = 0
let showFace4 = 0
let showFace5 = 0
let showFace6 = 0
let showOutline1 = 0
let showOutline2 = 0
let showOutline3 = 0
let showOutline4 = 0
let showOutline5 = 0
let showOutline6 = 0
let showOutline7 = 0
let showOutline8 = 0
let showOutlineType
let outlineExtensionFactor
let splitFace1
let splitFace2
let splitFace3
let splitFace4
let splitFace5
let splitFace6
let colorSplitType = "split"
let faceCount = 0
let faceTypeCount = 3
let fadeRate = 33
let fadeType = "ramp"
let minMinAlphaFactor = 0
let maxMaxAlphaFactor = 3
let distortionType
let squiggleXDirection
let squiggleYDirection
let echoXDirection
let echoYDirection
let colorEffect

let mainBuffer
let featureBuffer
let qubesBuffer
let outlinesBuffer
let gridBuffer
let bgBuffer
let highlightBuffer
let lowlightBuffer

let f_drawType
let f_drawStyle
let f_plopType
let f_canvasRatio
let f_frame
let f_outlines
let f_outlineStyle

new p5();

function seedTheSeed(_seedValue, _perfect, _zoom) {

  seedValue = setupRandomSeed(_seedValue)
  let r = random()

  const fw_qubeType = [{
    v: 0,
    w: 0
  }, {
    v: 1,
    w: 0
  }, {
    v: 2,
    w: 30
  }, {
    v: 3,
    w: 20
  }, {
    v: 4,
    w: 9
  }, {
    v: 5,
    w: 20
  }, {
    v: 6,
    w: 21
  }];
  // const fw_qubeType = [{v:0,w:0},{v:1,w:0},{v:2,w:0},{v:3,w:1},{v:4,w:0},{v:5,w:0},{v:6,w:0}]; //debug
  // const fw_qubeType = [{v:0,w:0},{v:1,w:0},{v:2,w:0},{v:3,w:0},{v:4,w:0},{v:5,w:2},{v:6,w:2}]; //debug triangles
  // const fw_qubeType = [{v:4,w:1}]; //debug 
  f_qubeType = rarityPicker(fw_qubeType, random());
  if (f_qubeType == 0) {
    featureText_qubeType = "Crayon"
  } else if (f_qubeType == 1) {
    featureText_qubeType = "Starburst"
  } else if (f_qubeType == 2) {
    featureText_qubeType = "Concentric Angles"
  } else if (f_qubeType == 3) {
    featureText_qubeType = "Steps"
  } else if (f_qubeType == 4) {
    featureText_qubeType = "Rayscan"
  } else if (f_qubeType == 5) {
    featureText_qubeType = "Stripes"
  } else if (f_qubeType == 6) {
    featureText_qubeType = "Concentric Triangles"
  }


  const fw_drawStyle = [{
    v: 0,
    w: 15
  }, {
    v: 1,
    w: 43
  }, {
    v: 2,
    w: 20
  }, {
    v: 3,
    w: 15
  }, {
    v: 4,
    w: 7
  }];
  // const fw_drawStyle = [{
  //   v: 0,
  //   w: 0
  // }, {
  //   v: 1,
  //   w: 0
  // }, {
  //   v: 2,
  //   w: 0
  // }, {
  //   v: 3,
  //   w: 0
  // }, {
  //   v: 4,
  //   w: 10
  // }]; //debug beta
  // const fw_drawStyle = [{v:0,w:1},{v:1,w:0},{v:2,w:0},{v:2,w:0},{v:3,w:0}];  //debug perfect
  // const fw_drawStyle = [{v:0,w:0},{v:1,w:10},{v:2,w:0},{v:2,w:0},{v:3,w:0}];  //debug human
  // const fw_drawStyle = [{v:0,w:0},{v:1,w:0},{v:2,w:100},{v:2,w:0},{v:3,w:0}];  //debug slashes
  // const fw_drawStyle = [{v:0,w:0},{v:1,w:0},{v:2,w:0},{v:2,w:0},{v:3,w:20}];  //debug squiggles
  // const fw_drawStyle = [{v:0,w:0},{v:1,w:0},{v:2,w:0},{v:2,w:0},{v:4,w:20}];  //debug beta
  if (f_drawStyle === undefined) {
    f_drawStyle = rarityPicker(fw_drawStyle, random());
    if (f_drawStyle == 0) {
      featureText_drawStyle = "Perfect"
    } else if (f_drawStyle == 1) {
      featureText_drawStyle = "Human"
    } else if (f_drawStyle == 2) {
      featureText_drawStyle = "Slashes"
    } else if (f_drawStyle == 3) {
      featureText_drawStyle = "Squiggles"
    } else if (f_drawStyle == 4) {
      featureText_drawStyle = "Beta"
      f_qubeType = 4
      featureText_qubeType = "Rayscan"
    }
  }

  if (random() > 0.85 && featureText_drawStyle != "Slashes" &&
    featureText_drawStyle != "Squiggles" &&
    featureText_drawStyle != "Beta"
  ) {
    featureText_chunky = true
  } else {
    featureText_chunky = false
  }

  //These rarity pickers from YenRen are REALLY cool!  Link in helpers.js.
  const fw_outlines = [{
    v: 0,
    w: featureText_drawStyle == "Beta" ? 10 : 25
  }, {
    v: 1,
    w: featureText_drawStyle == "Beta" ? 70 : 60
  }, {
    v: 2,
    w: featureText_drawStyle == "Beta" ? 20 : 15
  }];
  // const fw_outlines = [{v:3,w:1}]; //debug outlines
  if (f_outlines === undefined) {
    f_outlines = rarityPicker(fw_outlines, random());
    if (f_outlines == 0) {
      featureText_outlines = "None"
    } else if (f_outlines == 1) {
      featureText_outlines = "All"
    } else if (f_outlines == 2) {
      featureText_outlines = "Some"
    } else if (f_outlines == 3) {
      featureText_outlines = "Outer"
    }
  }

  const fw_outlineStyle = [{
    v: 0,
    w: featureText_drawStyle == "Beta" ? 15 : 50
  }, {
    v: 1,
    w: featureText_drawStyle == "Beta" ? 85 : 50
  }];
  // const fw_outlineStyle = [{v:0,w:50},{v:1,w:0}]; //debug
  if (f_outlineStyle === undefined) {
    f_outlineStyle = rarityPicker(fw_outlineStyle, random());
    if (f_outlineStyle == 0) {
      featureText_outlineStyle = "Match"
    } else if (f_outlineStyle == 1) {
      featureText_outlineStyle = "Perfect"
    }
  }

  const fw_canvasRatio = [{
    v: 0, //portrait
    w: 50 
  }, {
    v: 1,
    w: 0
  }, {
    v: 2, //square
    w: 15
  }, {
    v: 3,
    w: 0
  }, {
    v: 4,
    w: 0
  }, {
    v: 5,
    w: 0
  }, {
    v: 6,
    w: 0
  }, {
    v: 7,
    w: 0
  }, {
    v: 8,
    w: 0
  }, {
    v: 9, //Landscape
    w: 35
  }];
  // const fw_canvasRatio = [{v:0,w:20},{v:1,w:0},{v:2,w:0},{v:3,w:0},{v:4,w:0}]; //debug
  if (f_canvasRatio === undefined) {
    f_canvasRatio = rarityPicker(fw_canvasRatio, random());
    if (f_canvasRatio == 0) {
      featureText_canvasRatio = "Portrait"
      canvasRatio = 29 / 41
    } else if (f_canvasRatio == 1) {
      featureText_canvasRatio = "16:9"
      canvasRatio = 16 / 9
    } else if (f_canvasRatio == 2) {
      featureText_canvasRatio = "Square"
      canvasRatio = 1
    } else if (f_canvasRatio == 3) {
      featureText_canvasRatio = "3:4"
      canvasRatio = 3 / 4
    } else if (f_canvasRatio == 4) {
      featureText_canvasRatio = "4:3"
      canvasRatio = 4 / 3
    } else if (f_canvasRatio == 5) {
      featureText_canvasRatio = "3:1"
      canvasRatio = 3 / 1
    } else if (f_canvasRatio == 6) {
      featureText_canvasRatio = "4:5"
      canvasRatio = 4 / 5
    } else if (f_canvasRatio == 7) {
      featureText_canvasRatio = "5:4"
      canvasRatio = 5 / 4
    } else if (f_canvasRatio == 8) {
      featureText_canvasRatio = "2:3"
      canvasRatio = 2 / 3
    } else if (f_canvasRatio == 9) {
      featureText_canvasRatio = "Landscape"
      canvasRatio = 3 / 2
    }
  }

  const fw_colorPickerType = [{
    v: 0,
    w: 5
  }, {
    v: 1,
    w: 5
  }, {
    v: 2,
    w: 5
  }, {
    v: 3,
    w: 5
  }]; //
  f_colorPickerType = rarityPicker(fw_colorPickerType, random());
  if (f_colorPickerType == 0) {
    featureText_colorPickerType = "Face Assignment"
  } else if (f_colorPickerType == 1) {
    featureText_colorPickerType = "Vertical Location"
  } else if (f_colorPickerType == 2) {
    featureText_colorPickerType = "Horizontal Location"
  } else if (f_colorPickerType == 3) {
    featureText_colorPickerType = "Node Index"
  }

  const fw_plopType = [{
    v: 0,
    w: featureText_drawStyle == "Beta2" ? 4 : 41
  }, {
    v: 1,
    w: featureText_drawStyle == "Beta2" ? 40 : 30
  }, {
    v: 2,
    w: featureText_drawStyle == "Beta2" ? 18 : 8
  }, {
    v: 3,
    w: featureText_drawStyle == "Beta2" ? 20 : 12
  }, {
    v: 5,
    w: featureText_drawStyle == "Beta2" ? 18 : 9
  }];
  // const fw_plopType = [{v:0,w:1},{v:1,w:0},{v:2,w:0},{v:3,w:0},{v:4,w:0}]; //debug perfect
  // const fw_plopType = [{v:0,w:0},{v:1,w:0},{v:2,w:1},{v:3,w:0},{v:4,w:0}]; //debug circle
  // const fw_plopType = [{v:0,w:0},{v:1,w:0},{v:2,w:1},{v:3,w:0},{v:4,w:0}]; //debug circle
  // const fw_plopType = [{v:5,w:1}]; //debug
  if (f_plopType === undefined) {
    f_plopType = rarityPicker(fw_plopType, random());
    if (f_plopType == 0 || _perfect) {
      featureText_plopType = "Perfect"
    } else if (f_plopType == 1) {
      featureText_plopType = "Grid"
    } else if (f_plopType == 2) {
      featureText_plopType = "Circle"
    } else if (f_plopType == 3) {
      featureText_plopType = "Organic"
    } else if (f_plopType == 4) {
      featureText_plopType = "Spiral"
    } else if (f_plopType == 5) {
      featureText_plopType = "Frame"
    }
  }

  const fw_structureType = [{
    v: 0,
    w: 40
  }, {
    v: 1,
    w: 23
  }, {
    v: 2,
    w: 23
  }, {
    v: 3,
    w: 0
  }];
  // const fw_structureType = [{v:3,w:1}]; //debug circle
  f_structureType = rarityPicker(fw_structureType, random());
  if (f_structureType == 0) {
    featureText_structureType = "Cube"
    faceTypeCount = 3
  } else if (f_structureType == 1 && featureText_plopType != "Perfect") {
    featureText_structureType = "Butterfly"
    faceTypeCount = 4
  } else if (f_structureType == 2 || featureText_plopType == "Perfect") {
    featureText_structureType = "Flag"
    faceTypeCount = 3
  } else if (f_structureType == 3 && featureText_plopType != "Perfect") {
    featureText_structureType = "Star"
    faceTypeCount = 3
  }

  const fw_distortion = [{
    v: 0,
    w: 30
  }, {
    v: 1,
    w: 70
  }];
  f_distortion = rarityPicker(fw_distortion, random());
  // if (f_distortion == 0 || featureText_plopType == "Perfect") {
  if (f_distortion == 0) {
    featureText_distortion = false
  } else if (f_distortion == 1) {
    featureText_distortion = true
  }



  const fw_continuity = [{
    v: 0,
    w: 75
  }, {
    v: 1,
    w: 21
  }, {
    v: 2,
    w: 4
  }];
  // const fw_continuity = [{v:0,w:0},{v:1,w:0},{v:2,w:8}]; //debug
  f_continuity = rarityPicker(fw_continuity, random());
  if (f_continuity == 0) {
    featureText_continuity = "Overlapped"
  } else if (f_continuity == 1) {
    featureText_continuity = "Broken"
  } else if (f_continuity == 2) {
    featureText_continuity = "Explosive"
  }

  const fw_humanDrawErrorFactor = [{
    v: 0,
    w: 20
  }, {
    v: 1,
    w: 75
  }, {
    v: 2,
    w: 5
  }];
  f_humanDrawErrorFactor = (featureText_drawStyle == "Perfect" || featureText_drawStyle == "Beta" || featureText_continuity == "Explosive") ? random([-1]) : rarityPicker(fw_humanDrawErrorFactor, random());
  if (f_humanDrawErrorFactor == 0) {
    featureText_humanDrawErrorFactor = "Skilled"
  } else if (f_humanDrawErrorFactor == 1) {
    featureText_humanDrawErrorFactor = "Amateur"
  } else if (f_humanDrawErrorFactor == 2) {
    featureText_humanDrawErrorFactor = "Wild"
  } else if (f_humanDrawErrorFactor == -1) {
    featureText_humanDrawErrorFactor = "N/A"
  }

  const fw_pencil = [{
    v: 0,
    w: 98
  }, {
    v: 1,
    w: 3
  }];
  f_pencil = rarityPicker(fw_pencil, random());
  if (f_pencil == 0 || featureText_chunky == true) {
    featureText_pencil = false
  } else if (f_pencil == 1) {
    featureText_pencil = true
  }

  const fw_multigrid = [{
    v: 0,
    w: featureText_drawStyle == "Beta" ? 20 : 40
  }, {
    v: 1,
    w: 40
  }, {
    v: 2,
    w: featureText_drawStyle == "Beta" ? 40 : 20
  }];
  f_multigrid = rarityPicker(fw_multigrid, random());
  if (f_multigrid == 0 || featureText_plopType == "Perfect" || featureText_plopType == "Spiral") {
    featureText_multigrid = false
  } else if (f_multigrid == 1) {
    featureText_multigrid = true
  } else if (f_multigrid == 2) {
    featureText_multigrid = "Overlapped"
  }

  const fw_echo = [{
    v: 0,
    w: 80
  }, {
    v: 1,
    w: 0
  }, {
    v: 2,
    w: 0
  }];
  f_echo = rarityPicker(fw_echo, random());
  if (f_echo == 0) {
    featureText_echo = "None"
  } else if (f_echo == 1) {
    featureText_echo = "Growth"
  } else if (f_echo == 2) {
    featureText_echo = "Directional"
  }

  if (featureText_drawStyle != "Human") {
    featureText_continuity = "N/A"
  }

  const fw_frame = [{
    v: 0,
    w: 45
  }, {
    v: 1,
    w: 55
  }];
  if (f_frame === undefined) {
    f_frame = rarityPicker(fw_frame, random());
  }
  if (f_frame == 0) {
    featureText_frame = "Unframed"
    if (random() > 0.35) {
      marginFactor = random(-0.3, -0.05)
    } else {
      marginFactor = random(0.01, 0.06)
    }
  } else if (f_frame == 1) {
    featureText_frame = "Framed"
    marginFactor = random([random(-0.3, -0.05), random(0.01, 0.06)])
    marginFactor = 0.06
  }
  if (_zoom) {
    marginFactor = -0.3
  }

  //select color palette
  let parsedColors = JSON.parse(JSON.stringify(qubeColors));
  f_color = floor(random(qubeColors.length - 0.00001))
  featureText_color = parsedColors[f_color].name

  const fw_highlightType = [{
    v: 0,
    w: 45
  }, {
    v: 1,
    w: 45
  }, {
    v: 2,
    w: 10
  }];
  f_highlightType = rarityPicker(fw_highlightType, random());
  if (f_highlightType == 0) {
    featureText_highlightType = "Original Color"
  } else if (f_highlightType == 1) {
    featureText_highlightType = "Palette"
  } else if (f_highlightType == 2) {
    featureText_highlightType = "Random"
  }

  const fw_constrain = [{
    v: 0,
    w: 50
  }, {
    v: 1,
    w: 50
  }];
  f_constrain = rarityPicker(fw_constrain, random());
  if (f_constrain == 0) {
    featureText_constrain = false
  } else if (f_constrain == 1) {
    featureText_constrain = true
  }

  const fw_edgeProtection = [{
    v: 0,
    w: (marginFactor <= 0 ? 100 : 15)
  }, {
    v: 1,
    w: (marginFactor <= 0 ? 0 : 60)
  }, {
    v: 2,
    w: (marginFactor <= 0 ? 0 : 25)
  }];
  f_edgeProtection = rarityPicker(fw_edgeProtection, random());
  if (f_edgeProtection == 0) {
    featureText_edgeProtection = "None"
  } else if (f_edgeProtection == 1 && marginFactor > 0) {
    featureText_edgeProtection = "Align"
  } else if (f_edgeProtection == 2 || marginFactor <= 0) {
    featureText_edgeProtection = "Dim"
  }
 if (featureText_distortion == false && marginFactor > 0) {
  featureText_edgeProtection = "Not Needed"
 }

}

handleUrlParams()
if (generatorMode != 1 && enableParams == 1) {
  handleFXParams()
}
console.log("Seed: " + seedValue)
seedTheSeed(seedValue);

window.$fxhashFeatures = {
  "Color Palette": featureText_color,
  "Plop Type": featureText_plopType,
  "Qube Type": featureText_qubeType,
  "Outlines": featureText_outlines,
  "Canvas Ratio": featureText_canvasRatio,
  "Distortion": featureText_distortion,
  "Draw Style": featureText_continuity == "Explosive" ? featureText_continuity : featureText_drawStyle,
  "Human Skill Factor": featureText_humanDrawErrorFactor,
  "Edge Protection": featureText_edgeProtection,
  "Special Feature - Chunky": featureText_chunky,
  "Special Feature - Graphite": featureText_pencil,
  "Special Feature - Multigrid": featureText_multigrid,
  "Minter Mentality": featureText_minterMentality
}

$fx.features({
  "Color Palette": featureText_color,
  "Plop Type": featureText_plopType,
  "Qube Type": featureText_qubeType,
  "Outlines": featureText_outlines,
  "Canvas Ratio": featureText_canvasRatio,
  "Distortion": featureText_distortion,
  "Draw Style": featureText_continuity == "Explosive" ? featureText_continuity : featureText_drawStyle,
  "Human Skill Factor": featureText_humanDrawErrorFactor,
  "Edge Protection": featureText_edgeProtection,
  "Special Feature - Chunky": featureText_chunky,
  "Special Feature - Graphite": featureText_pencil,
  "Special Feature - Multigrid": featureText_multigrid,
  "Minter Mentality": featureText_minterMentality
})

window.$hiddenFeatures = {
  "Outline Style": featureText_outlineStyle,
  "Resolution Multiplier": resolutionMultiplier
}

// console.info(title)
console.info("\n\nfxHash Features:");
console.table($fxhashFeatures);
console.info("\n\nHidden Features:");
console.table($hiddenFeatures);

function setupRandomSeed(_seed) {
  if (_seed === undefined) {
    _seed = Math.floor(fxrand() * Math.pow(2, 32))
  }
  randomSeed(_seed)
  noiseSeed(_seed)
  console.info("seedValue = " + _seed + "(" + random(10000).toFixed(0) + ")")
  console.info("fxhash = " + fxhash)

  return _seed
}

function setupBuffers(_restart) {

  if (_restart !== undefined && _restart == true) {
    mainBuffer.remove()
    featureBuffer.remove()
    qubesBuffer.remove()
    outlinesBuffer.remove()
    gridBuffer.remove()
    bgBuffer.remove()
    highlightBuffer.remove()
    lowlightBuffer.remove()
    grainBuffer.remove()
    frameBuffer.remove()
  }

  mainBuffer = createGraphics(outputWidth, outputHeight);
  featureBuffer = createGraphics(outputWidth, outputHeight);
  qubesBuffer = createGraphics(outputWidth, outputHeight);
  outlinesBuffer = createGraphics(outputWidth, outputHeight);
  gridBuffer = createGraphics(outputWidth, outputHeight);
  bgBuffer = createGraphics(outputWidth, outputHeight);
  highlightBuffer = createGraphics(outputWidth, outputHeight);
  lowlightBuffer = createGraphics(outputWidth, outputHeight);
  grainBuffer = createGraphics(outputWidth, outputHeight);
  frameBuffer = createGraphics(outputWidth, outputHeight);

  mainBuffer.pixelDensity(1);
  featureBuffer.pixelDensity(1);
  qubesBuffer.pixelDensity(1);
  outlinesBuffer.pixelDensity(1);
  gridBuffer.pixelDensity(1);
  bgBuffer.pixelDensity(1);
  highlightBuffer.pixelDensity(1);
  lowlightBuffer.pixelDensity(1);
  grainBuffer.pixelDensity(1);
  frameBuffer.pixelDensity(1);


  // mainBuffer.strokeCap(SQUARE);
  // featureBuffer.strokeCap(SQUARE);
  // qubesBuffer.strokeCap(SQUARE);
  // outlinesBuffer.strokeCap(SQUARE);
  // gridBuffer.strokeCap(SQUARE);
  // progressBuffer.strokeCap(SQUARE);
  // bgBuffer.strokeCap(SQUARE);
  // perfectBuffer.strokeCap(SQUARE);
  // accentBuffer.strokeCap(SQUARE);
  // highlightBuffer.strokeCap(SQUARE);
  // lowlightBuffer.strokeCap(SQUARE);
  // grainBuffer.strokeCap(SQUARE);

  //   mainBuffer.strokeCap(SQUARE);
  //   featureBuffer.strokeCap(SQUARE);
  //   qubesBuffer.strokeCap(SQUARE);
  //   outlinesBuffer.strokeCap(SQUARE);
  //   gridBuffer.strokeCap(SQUARE);
  //   progressBuffer.strokeCap(SQUARE);

  mainBuffer.colorMode(HSB, 255);
  featureBuffer.colorMode(HSB, 255);
  qubesBuffer.colorMode(HSB, 255);
  outlinesBuffer.colorMode(HSB, 255);
  gridBuffer.colorMode(RGB, 255);
  bgBuffer.colorMode(HSB, 255);
  highlightBuffer.colorMode(HSB, 255)
  lowlightBuffer.colorMode(HSB, 255)
  grainBuffer.colorMode(HSB, 255)
  frameBuffer.colorMode(HSB, 255)
}

function clearBuffers() {
  mainBuffer.clear();
  featureBuffer.clear();
  qubesBuffer.clear();
  outlinesBuffer.clear();
  gridBuffer.clear();
  bgBuffer.clear();
  highlightBuffer.clear();
  lowlightBuffer.clear();
  grainBuffer.clear();
  frameBuffer.clear();
}

function restart(_perfect = false, _scale = resolutionMultiplier, _zoom = switchZoom == 1 ? true : false) {
  console.clear()
  resetVars();
  // if (generatorMode != 1 && enableParams == 1) {
  //   handleFXParams()
  // }
  seedTheSeed(seedValue, _perfect, _zoom);
  
  if(printDebugs == 1) {console.log("Restart - pre setupCanvas (" + frameCount + "): " + random().toFixed(2))}
  setupCanvas(true, _scale)
  if(printDebugs == 1) {console.log("Restart - pre setupBuffers (" + frameCount + "): " + random().toFixed(2))}
  setupBuffers(true)
  if(printDebugs == 1) {console.log("Restart - pre clearBuffers (" + frameCount + "): " + random().toFixed(2))}
  clearBuffers();
  if(printDebugs == 1) {console.log("Restart - pre setupColors (" + frameCount + "): " + random().toFixed(2))}
  setupColors()
  fineTuneFeatures()
  buildGrids()
  pruneQubes()
  addGrain(grainBuffer)
  drawBackground()
  loop();
}


function setup() {
  frameRate(fr)
  
  if(printDebugs == 1) {console.log("Restart - pre setupCanvas (" + frameCount + "): " + random().toFixed(2))}
  setupCanvas(false, resolutionMultiplier)
  if(printDebugs == 1) {console.log("Restart - pre setupBuffers (" + frameCount + "): " + random().toFixed(2))}
  setupBuffers()
  if(printDebugs == 1) {console.log("Restart - pre clearBuffers (" + frameCount + "): " + random().toFixed(2))}
  clearBuffers()
  if(printDebugs == 1) {console.log("Restart - pre setupColors (" + frameCount + "): " + random().toFixed(2))}
  setupColors()
  fineTuneFeatures()
  buildGrids()
  pruneQubes()
  addGrain(grainBuffer)
  drawBackground()
}

function resetVars() {

  frameCount = 0

  f_drawType = undefined
  f_drawStyle = undefined
  f_plopType = undefined
  f_canvasRatio = undefined
  f_frame = undefined
  f_outlines = undefined
  f_outlineStyle = undefined

  crayonIndicator = -1

  grids = []
  points = []
  bigPoints = []
  tokenSaved = 0
  faceCount = 0
  switchShowGrid = -1
  // switchFrame = 1
  // switchZoom = -1
  // switchShowFeatures = -1
  colorCombos = []
  faceColors = []
  showQubesPercInc = 0.1
  drawTypePercStep = 0.04 //should always be larger than showQubesPercInc  random(0.05, 0.1) ... only used in steps right now

  humanDrawErrorFactor = 0
  qubes = []

  drawConsistency = 0.1
  nextDrawnPerc = 0
  showFace1 = 0
  showFace2 = 0
  showFace3 = 0
  showFace4 = 0
  showFace5 = 0
  showFace6 = 0
  showOutline1 = 0
  showOutline2 = 0
  showOutline3 = 0
  showOutline4 = 0
  showOutline5 = 0
  showOutline6 = 0
  showOutline7 = 0
  showOutline8 = 0
}

function buildGrids() {

  let breakCount = 0
  let singleColorFaceCount = 0
  let gridSplitType = featureText_multigrid == "Overlapped" ? featureText_multigrid : random(["vertical", "horizontal"])
  for (let i = 0; i < (featureText_plopType == "Perfect" ? 1 : gridCount) && breakCount < 1000; i++) {
    let createGridCount = gridCount
    let cc, rc
    let verticalGridCount
    let horizontalGridCount

    if (gridSplitType == "horizontal") {
      verticalGridCount = gridCount
      horizontalGridCount = 1
    } else if (gridSplitType == "vertical") {
      verticalGridCount = 1
      horizontalGridCount = gridCount
    } else if (gridSplitType == "Overlapped") {
      verticalGridCount = 1
      horizontalGridCount = 1
    }

    let minCols = 5.01
    if (featureText_plopType == "Perfect" && featureText_drawStyle == "Beta") {
      minCols = 9.01
    }

    let minMaxCols = minCols * horizontalGridCount
    let maxCols = max(minCols, 27 / horizontalGridCount)
    let r = random()
    if (r > 0.90) {
      if (r <= 0.98) {
        cc = ceil(random(20, 35) / horizontalGridCount)
      } else {
        cc = ceil(random(35, 60) / horizontalGridCount)
      }
    } else {
      cc = ceil(random(minCols, maxCols))
    }

    let plotableWidth = outputWidth - (marginFactor * outputWidth * 2)
    let plotableHeight = outputHeight - (marginFactor * outputHeight * 2)
    let gridWidth = plotableWidth / horizontalGridCount
    let gridHeight = plotableHeight / verticalGridCount

    let dampenFactor = 0.25
    let aspectFactor = (1 - (gridHeight / gridWidth)) * dampenFactor + (gridHeight / gridWidth)
    let minRows = max(7.01, cc * 0.5 * aspectFactor)
    let minMaxRows = minCols * verticalGridCount
    let maxRows = max(minRows, cc * 2 * aspectFactor)
    rc = ceil(random(minRows, maxRows));
    // print(aspectFactor, (gridHeight / gridWidth),  minRows, maxRows)
    // print("cc rc", cc, rc)

    let g = new Grid(cc, rc, marginFactor, gridWidth, gridHeight, 0, 0)

    g.scaleX = gridWidth / (g.columnCount - 1);
    g.scaleY = gridHeight / (g.rowCount - 1);
    g.gridWidth = g.scaleX * g.columnCount
    g.gridHeight = g.scaleY * g.rowCount
    g.gridArea = g.gridWidth * g.gridHeight

    let strokeToGridRatio = (strokeSize / (g.scaleX * g.scaleY) * 100000).toFixed(2)
    if (strokeToGridRatio > 20) {
      crayonIndicator = 1
    }

    if (1 == 1) { // stacking grids
      g.startX = (marginFactor * outputWidth) + (gridWidth * i * (gridSplitType == "horizontal" || gridSplitType == "Overlapped" ? 0 : 1))
      g.startY = (marginFactor * outputHeight) + (gridHeight * i * (gridSplitType == "vertical" || gridSplitType == "Overlapped" ? 0 : 1))
    }


    g.buildGrid()
    g.distortGrid()
    g.assignBigNodes()

    buildQubes(g)
    // print("faceCoverage", g.faceArea/g.gridArea)
    if (g.qubeCount > (featureText_multigrid == false ? 3 : 0) && g.faceArea / g.gridArea >= (featureText_multigrid == false ? 0.12 : 0.12 / gridCount) && g.faceArea / g.gridArea <= 1.5) {
      grids.push(g)
      for (q of g.qubes) {
        qubes.push(q)
        faceCount += q.faceCount
        for (let f of q.faces) {
          if (f.colors.length == 1) {
            singleColorFaceCount++
          }
        }
      }

    } else {
      i--
    }
    breakCount++
    if (breakCount > 900) {
    }

  }

  showFaceDots = (singleColorFaceCount / faceCount > 0.72) ? 1 : 0

  if (faceCount == 0) {
    print(breakCount, "Oh no, your qubes weren't found in this castle!!  This was VERY unlikely to happen...but not so unlikely that I didn't think to add this Easter egg.  If you don't like these random lines, please contact the author and request them to purchase this token back from you at mint cost.")
    for (let i = 0; i <= 100; i++) {
      customLinebySquiggles(qubesBuffer, createVector(random(outputWidth), random(outputHeight)), createVector(random(outputWidth), random(outputHeight)), color(faceColors[floor(random(faceColors.length))][0]), 255, strokeSize, canvasMinSize, 50, squiggleXDirection, squiggleYDirection, 0.25, colorEffect)
    }
  }
}

function pruneQubes() {
  let pruneRate = map(qubes.length, 100, 300, 0, 0.25, true)
  let marginAmountHorizontal = (outputWidth * marginFactor)
  let marginAmountVertical = (outputHeight * marginFactor)

  if (featureText_plopType != "Perfect") {
    for (let i = 0; i < qubes.length; i++) {
      if (random() < pruneRate) {
        qubes.splice(i, 1)
        i--
      }
    }
  }

  //Realized that I should have implemented edge protection as a function of building the Grid rather than checking every point of a qube
  //doing it this way is less effecient as I'll check a point multiple times instead of just once.  This is also requires more verbose code.
  //I *should* fix this, but it's getting late in the project and this is working!  #fail
  if (featureText_edgeProtection == "Align") {    

    let p1 = createVector(marginAmountHorizontal, marginAmountVertical).lerp(createVector(0, 0), 0.4)
    let p4 = createVector(outputWidth - marginAmountHorizontal, outputHeight - marginAmountVertical).lerp(createVector(outputWidth, outputHeight), 0.4)

    let marginPadding = 0.2
    let leftEdge = p1.x + marginAmountHorizontal * marginPadding
    let rightEdge = p4.x - marginAmountHorizontal * marginPadding
    let topEdge = p1.y + marginAmountVertical * marginPadding
    let bottomEdge = p4.y - marginAmountVertical * marginPadding

    for (let i = 0; i < qubes.length; i++) {
      for (let j = 0; j < qubes[i].faces.length; j++ ) {
        if (qubes[i].faces[j].v1.x < leftEdge) {
          qubes[i].faces[j].v1.x = leftEdge
        }
        if (qubes[i].faces[j].v1.x > rightEdge) {
          qubes[i].faces[j].v1.x = rightEdge
        }
        if (qubes[i].faces[j].v1.y < topEdge) {
          qubes[i].faces[j].v1.y = topEdge
        }
        if (qubes[i].faces[j].v1.y > bottomEdge) {
          qubes[i].faces[j].v1.y = bottomEdge
        }

        if (qubes[i].faces[j].v2.x < leftEdge) {
          qubes[i].faces[j].v2.x = leftEdge
        }
        if (qubes[i].faces[j].v2.x > rightEdge) {
          qubes[i].faces[j].v2.x = rightEdge
        }
        if (qubes[i].faces[j].v2.y < topEdge) {
          qubes[i].faces[j].v2.y = topEdge
        }
        if (qubes[i].faces[j].v2.y > bottomEdge) {
          qubes[i].faces[j].v2.y = bottomEdge
        }

        if (qubes[i].faces[j].v3.x < leftEdge) {
          qubes[i].faces[j].v3.x = leftEdge
        }
        if (qubes[i].faces[j].v3.x > rightEdge) {
          qubes[i].faces[j].v3.x = rightEdge
        }
        if (qubes[i].faces[j].v3.y < topEdge) {
          qubes[i].faces[j].v3.y = topEdge
        }
        if (qubes[i].faces[j].v3.y > bottomEdge) {
          qubes[i].faces[j].v3.y = bottomEdge
        }
      }
      
      // if (pruneQubeFlag == 1 && qubes.length > 1) {
      //   qubes.splice(i, 1)
      //   i--
      // }
    }
  }

  if (featureText_edgeProtection == "Dim") {    
    let p1 = createVector(marginAmountHorizontal, marginAmountVertical).lerp(createVector(0, 0), 0.4)
    let p4 = createVector(outputWidth - marginAmountHorizontal, outputHeight - marginAmountVertical).lerp(createVector(outputWidth, outputHeight), 0.4)

    let leftEdge = p1.x
    let rightEdge = p4.x
    let topEdge = p1.y
    let bottomEdge = p4.y

    for (let i = 0; i < qubes.length; i++) {
      let pruneQubeFlag = 0
      for (let j = 0; j < qubes[i].faces.length; j++ ) {
        if (isWithinBounds(qubes[i].faces[j].v1.x, qubes[i].faces[j].v1.y, leftEdge, rightEdge, topEdge, bottomEdge) == false
            || isWithinBounds(qubes[i].faces[j].v2.x, qubes[i].faces[j].v2.y, leftEdge, rightEdge, topEdge, bottomEdge) == false
            || isWithinBounds(qubes[i].faces[j].v3.x, qubes[i].faces[j].v3.y, leftEdge, rightEdge, topEdge, bottomEdge) == false) {
          pruneQubeFlag = 1
          qubes[i].faces[j].edgeViolation = true
        }

      }
      
      // if (pruneQubeFlag == 1 && qubes.length > 1) {
      //   qubes.splice(i, 1)
      //   i--
      // }
    }
  }

  // if (featureText_edgeProtection == true && 1==1) {    
  //   let p1 = createVector(marginAmountHorizontal, marginAmountVertical).lerp(createVector(0, 0), 0.4)
  //   let p4 = createVector(outputWidth - marginAmountHorizontal, outputHeight - marginAmountVertical).lerp(createVector(outputWidth, outputHeight), 0.4)

  //   let leftEdge = p1.x
  //   let rightEdge = p4.x
  //   let topEdge = p1.y
  //   let bottomEdge = p4.y

  //   for (let i = 0; i < qubes.length; i++) {
  //     let pruneQubeFlag = 0
  //     for (let f of qubes[i].faces) {
  //       if (isWithinBounds(f.v1.x, f.v1.y, leftEdge, rightEdge, topEdge, bottomEdge) == false
  //           || isWithinBounds(f.v2.x, f.v2.y, leftEdge, rightEdge, topEdge, bottomEdge) == false
  //           || isWithinBounds(f.v3.x, f.v3.y, leftEdge, rightEdge, topEdge, bottomEdge) == false) {
  //         pruneQubeFlag = 1
  //       }
  //     }
      
  //     if (pruneQubeFlag == 1 && qubes.length > 1) {
  //       qubes.splice(i, 1)
  //       i--
  //     }
  //   }
  // }
}

function setupColors() {
  colorMode(HSB, 255)
  //damn deep copy issues!  This forced a shallow copy.  ref: https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
  let qc = JSON.parse(JSON.stringify(qubeColors));
  chosenColors = qc[f_color]
  shuffle(chosenColors.colors)


  //choose background color
  let r
  let bgc

  let validBGC = 0
  let breakCount = 0
  while (validBGC == 0 && breakCount < 300) {
    r = floor(random(chosenColors.bgColors.length - 0.0001))
    bgc = chosenColors.bgColors[r]
    if (valueInArray(chosenColors.bgColors, bgc)) {
      validBGC = 1
    }
    breakCount++
  }

  for (let i = 0; i < chosenColors.colors.length; i++) {
    if (chosenColors.colors[i] == bgc) {
      chosenColors.colors.splice(i, 1)
    }
  }

  featureText_backgroundType = brightness(bgc) / 255 > 0.5 ? "Light" : "Dark"

  if (featureText_pencil) {
    let pc = JSON.parse(JSON.stringify(featureText_backgroundType == "Light" ? pencilColorsDark : pencilColorsLight));
    chosenColors = random(pc)
    shuffle(chosenColors.colors)
  }

  //choose outline color
  let olc
  if (random() > 0.73) {
    r = floor(random(chosenColors.colors.length - 0.0001))
    olc = chosenColors.colors[r]
    chosenColors.colors.splice(r, 1)
  } else {
    r = floor(random(chosenColors.outlineColors.length - 0.0001))
    olc = chosenColors.outlineColors[r]
  }

  //choose highlight color
  let hlc
  r = floor(random(chosenColors.colors.length - 0.0001))
  hlc = chosenColors.colors[r]
  chosenColors.colors.splice(r, 1)

  for (let i = 0; i < chosenColors.colors.length; i++) {
    for (let j = 0; j < chosenColors.colors.length; j++) {
      if (chosenColors.colors[i] != chosenColors.colors[j]) {
        colorCombos.push([chosenColors.colors[i], chosenColors.colors[j]])
      }
    }
  }

  for (let i = 0; faceColors.length <= 5; i++) {
    let cIndex = floor(random(colorCombos.length))
    faceColors.push(colorCombos[cIndex])
    if (colorCombos.length > 1) {
      colorCombos.splice(cIndex, 1)
    }
  }

  frameColor = color(random(chosenColors.colors))

  bgColor = color(bgc)
  outlineColor = color(olc)
  highlightColor = hlc
}

function setupCanvas(_resize, _scale = 1) {

  if (canvasRatio > 1) {
    if (windowHeight < (windowWidth / canvasRatio)) {
      outputHeight = windowHeight
      outputWidth = windowHeight * canvasRatio
    } else {
      outputWidth = windowWidth
      outputHeight = (windowWidth / canvasRatio)
    }
  } else {
    if (windowWidth < (windowHeight * canvasRatio)) {
      outputWidth = windowWidth
      outputHeight = windowWidth / canvasRatio
    } else {
      outputHeight = windowHeight
      outputWidth = (windowHeight * canvasRatio)
    }
  }
  if (switchAdaptiveRatio >= 0) {
    if (switchAdaptiveRatio == 0) {
      outputWidth = displayWidth
      outputHeight = displayHeight
    } else {
      outputWidth = displayHeight
      outputHeight = displayWidth
    }
    canvasRatio = outputWidth / outputHeight
    console.log("adapt")
  }

  let canvasWidth = outputWidth
  let canvasHeight = outputHeight

  outputWidth *= _scale
  outputHeight = outputHeight * _scale

  if(printDebugs == 1) {console.log("SetupCanvas - pre create or resize (" + frameCount + "): " + random().toFixed(2))}
  if (_resize == undefined || _resize == false) {
    createCanvas(canvasWidth, canvasHeight);
  } else {
    resizeCanvas(canvasWidth, canvasHeight, noRedraw = true);
  }
  if(printDebugs == 1) {console.log("SetupCanvas - post create or resize (" + frameCount + "): " + random().toFixed(2))}

  canvasMinSize = min(outputWidth, outputHeight)
  canvasArea = outputWidth * outputHeight
  canvasFactor = canvasMinSize * 0.0006
}

function fineTuneFeatures() {

  edgeViolationAlphaFactor = random(0.25, 0.5)

  const fw_defaultAlpha = [{
    v: 0,
    w: 10
  }, {
    v: 1,
    w: 60
  }, {
    v: 2,
    w: 30
  }];
  f_defaultAlpha = rarityPicker(fw_defaultAlpha, random());
  if (f_defaultAlpha = 0) {
    defaultAlpha = 100
  } else if (f_defaultAlpha = 1) {
    defaultAlpha = 150
  } else if (f_defaultAlpha = 2) {
    defaultAlpha = 250
  }

  showOutlineDot = random([true, false])

  // no flip at all half of the time
  if (random() > 0.5) {
    //completely flip the face 25% of the time
    if (random() > 0.5) {
      flipPlace = 0
      //partially flip the face 25% of the time
    } else {
      flipPlace = (featureText_qubeType == "Stripes" ? random([0.5, 0.75]) : random([0.33, 0.5]))
    }
  } else {
    flipPlace = 1
  }
  if (random() > 0.75) {
    flipFaceId = "all"
  } else {
    flipFaceId = random([0, 1, 2])
  }
  if (flipPlace == 1) {
    flipFaceId = "none"
  }

  if (featureText_drawStyle == "Beta") {
    betaBackGround = false
    let r = random()
  } else {
    if (random() > 0.75) {
      betaBackGround = true
    } else {
      betaBackGround = false
    }
  }

  // showQubesPercInc = 1

  showFaceOdds = featureText_structureType == "Star" ? random(0.066, 0.33) : random(0.1, 0.5)


  if (random() > (featureText_drawStyle == "Squiggles" ? 0.95 : 0.5)) {
    colorEffect = "solid"
  } else {
    colorEffect = "variable"
  }

  if (random() > 0.80) {
    squiggleXDirection = randomSV(0.002, 0.004)
    squiggleYDirection = randomSV(0.002, 0.004)
  } else {
    squiggleXDirection = 0
    squiggleYDirection = 0

    let r = random()
    r = random()
  }

  switch (featureText_continuity) {
    case "Overlapped":
      incOverlapRate = random(0.6, 0.75)
      break;
    case "Broken":
      incOverlapRate = random(-0.25, 0.05)
      break;
    case "Explosive":
      incOverlapRate = random(-1.15, -2)
      break;
    default:
      incOverlapRate = random(0.75, 0.75)
  }

  if (random() > 0.7 && featureText_drawStyle != "Squiggles") {
    percStepType = "random"
  } else {
    percStepType = "consistent"
  }

  //debug remove this whole section in favor of the next line?
  switch (featureText_qubeType) {
    case "Rayscan":
      defaultPercStepFactor = (0.004 * (canvasMinSize)) * (featureText_drawStyle == "Slashes" ? random(1.5, 5) : (featureText_chunky == true ? random(2, 3) : random([1])))
      defaultPercStepFactor = 0.1
      break;
    case "Starburst":
      defaultPercStepFactor = (0.003 * (canvasMinSize))
      break;
    case "Concentric Angles":
      defaultPercStepFactor = (0.004 * (canvasMinSize)) * (featureText_drawStyle == "Slashes" ? random(1.5, 8) : (featureText_chunky == true ? random(2, 8) : random([1])))
      break;
    case "Steps":
      defaultPercStepFactor = (0.004 * (canvasMinSize)) * (featureText_drawStyle == "Slashes" ? random(1.5, 8) : (featureText_chunky == true ? random(2, 8) : random([1]))) //debug how to spread out slashes, maybe other things too?
      break;
    default:
      defaultPercStepFactor = (0.004 * (canvasMinSize))
  }

  if (featureText_drawStyle == "Slashes") {
    if (featureText_qubeType == "Stripesxxxx") {
      defaultPercStepFactor = random(0.01, 0.06)
    } else {
      defaultPercStepFactor = random(0.07, 0.20)
    }
  } else if (featureText_drawStyle == "Squiggles") {
    defaultPercStepFactor = random(0.04, 0.10)
  } else {
    defaultPercStepFactor = featureText_chunky == true ? random(0.10, 0.14) : random(0.02, 0.04)
  }

  if (featureText_qubeType == "Stripes") {
    defaultPercStepFactor = defaultPercStepFactor * random(0.3, 0.4)
  }
  // print("defaultPercStepFactor", defaultPercStepFactor)

  switch (featureText_humanDrawErrorFactor) {
    case "Skilled":
      humanDrawErrorFactor = (PI / random(20, 40))
      maxDrawSegment = random(0.02, 0.05)
      break;
    case "Amateur":
      humanDrawErrorFactor = (PI / random(8, 15))
      maxDrawSegment = random(0.03, 0.075)
      break;
    case "Wild":
      humanDrawErrorFactor = (PI / random(4, 5))
      maxDrawSegment = random(0.03, 0.075)
      break;
    default:
      humanDrawErrorFactor = (PI / random(40, 40))
      maxDrawSegment = random(0.02, 0.04)
  }
  customDrawSegmentLimits = {
    min: featureText_drawStyle == "Perfect" ? 0.5 * canvasMinSize : 0.02 * canvasMinSize,
    max: featureText_drawStyle == "Perfect" ? 0.5 * canvasMinSize : maxDrawSegment * canvasMinSize
  }

  customDrawSegmentLimits_outlines = {
    min: featureText_drawStyle == "Perfect" ? 0.5 * canvasMinSize : 0.01 * canvasMinSize,
    max: featureText_outlineStyle == "Perfect" ? 0.5 * canvasMinSize : maxDrawSegment * canvasMinSize
  }

  strokeSize = canvasFactor * random(1, 1) * (map(humanDrawErrorFactor, (PI / 40), PI / 8, 1.5, 0.75, true))

  drawConsistency = 0.01 //debug, doesn't seem to have big effect, maybe test on a big scale output. if this works move into human if above

  if (featureText_drawStyle == "Human") {}

  while (showFace1 + showFace2 + showFace3 <= 0) {
    showFace1 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
    showFace2 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
    showFace3 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
    showFace4 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
    showFace5 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
    showFace6 = featureText_plopType == "Perfect" ? random(1, 1) : random() > showFaceOdds ? 1 : 0
  }

  let faceOutlineCount = floor(random(1, faceTypeCount - 0.0001))
  let faceArray = []
  let faceOutlineArray = []
  showOutlineType = random(["Strict", "Random"])
  for (let i = 1; i <= faceTypeCount; i++) {
    faceArray.push(i)
  }
  for (let i = 0; i < faceOutlineCount; i++) {
    let faceIndex = floor(random(faceArray.length))
    faceOutlineArray.push(faceArray[faceIndex])
    faceArray.splice(faceIndex, 1)
  }
  for (let face of faceOutlineArray) {
    if (face == 1 || featureText_outlines == "All" || featureText_plopType == "Perfect") {
      showOutline1 = 1
    }
    if (face == 2 || featureText_outlines == "All" || featureText_plopType == "Perfect") {
      showOutline2 = 1
    }
    if (face == 3 || featureText_outlines == "All" || featureText_plopType == "Perfect") {
      showOutline3 = 1
    }
    if (face == 4 || featureText_outlines == "All" || featureText_plopType == "Perfect") {
      showOutline4 = 1
    }
  }

  splitFace1 = random() > splitFaceOdds ? 1 : 0
  splitFace2 = random() > splitFaceOdds ? 1 : 0
  splitFace3 = random() > splitFaceOdds ? 1 : 0
  splitFace4 = random() > splitFaceOdds ? 1 : 0
  splitFace5 = random() > splitFaceOdds ? 1 : 0
  splitFace6 = random() > splitFaceOdds ? 1 : 0

  switch (floor(random(0, 4.9999))) {
    case 0:
      colorSplitType = "split"
      break;
    case 1:
      colorSplitType = "lerp"
      break;
    case 2:
      colorSplitType = "invert50"
      break;
    case 3:
      colorSplitType = "mixer"
      break;
    case 4:
      colorSplitType = "random"
      break;
  }

  fadeRate = random(random([15, 33, 50]), random(0, 100))
  fadeType = random(["ramp", "smooth"])
  maxMaxAlphaFactor = featureText_drawStyle == "Squiggles" ? random(1, 2) : random(1, 3)
  minMinAlphaFactor = featureText_drawStyle == "Squiggles" ? random(0.5, 0.75) : random(0.1, 0.5)
  standardAlpha = map(maxMaxAlphaFactor, 1, 3, defaultAlpha * 1.3, defaultAlpha)

  if (random() <= 0.75) {
    outlineExtensionFactor = random([0, 0.25, 0.5])
  } else {
    if (featureText_multigrid == "Overlapped" && gridCount > 2 && featureText_outlines == "All") {
      outlineExtensionFactor = random([0, 0.25, 0.5])
    } else {
      outlineExtensionFactor = random([1, 2])
    }
  }

  if (featureText_multigrid) {
    gridCount = featureText_multigrid == "Overlapped" ? floor(random([2, 2, 3])) : floor(random([2, 2, 2, 3, 3, 3, 4, 4]))
  } else {
    gridCount = 1
  }

  if (featureText_plopType == "Perfect") {
    outlineExtensionFactor = 0
  }

  if (featureText_drawStyle == "Squiggles") {
    highlightAlpha = highlightAlphaDefault * 0.5
  } else {
    highlightAlpha = highlightAlphaDefault
  }

  if (featureText_echo == "Directional") {
    echoXDirection = random([-1, 1])
    echoYDirection = random([-1, 1])
  }

}

function drawBackground() {

  let bgc = bgColor
  bgc.setAlpha(255)
  if (switchBackground == 1) {
    bgBuffer.background(bgc)
  } else {
    bgBuffer.background("White")
  }

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " frame 1: " + random().toFixed(2));
    debugLineCt++
  }
  let frameStrokeSize = strokeSize * 2

  let sColors
  sColors = frameColor
  sColors.setAlpha(200)
  let frameAlpha = 200

  for (i = 0; i <= 0; i++) {
    let debug = random()
  }

  if (featureText_frame == "Framed") {
    if (featureText_drawStyle == "Perfect" || featureText_drawStyle == "Beta") {

      // halfway between margin and edge
      // square
      let p1 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.5)
      let p2 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.5)
      let p3 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.5)
      let p4 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.5)

      let p5 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.6)
      let p6 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.6)
      let p7 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.6)
      let p8 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.6)

      frameBuffer.push()
      frameBuffer.strokeWeight(frameStrokeSize)
      frameBuffer.stroke(sColors);
      frameBuffer.noFill()
      frameBuffer.line(p1.x, p1.y, p2.x, p2.y)
      frameBuffer.line(p1.x, p1.y, p3.x, p3.y)
      frameBuffer.line(p2.x, p2.y, p4.x, p4.y)
      frameBuffer.line(p3.x, p3.y, p4.x, p4.y)
      frameBuffer.line(p5.x, p5.y, p6.x, p6.y)
      frameBuffer.line(p5.x, p5.y, p7.x, p7.y)
      frameBuffer.line(p6.x, p6.y, p8.x, p8.y)
      frameBuffer.line(p7.x, p7.y, p8.x, p8.y)
      frameBuffer.pop()


    } else if (featureText_drawStyle == "Human") {

      // halfway between margin and edge
      // square
      let p1 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.5)
      let p2 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.5)
      let p3 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.5)
      let p4 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.5)

      let p5 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.6)
      let p6 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.6)
      let p7 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.6)
      let p8 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.6)

      let h = hue(sColors)
      let s = saturation(sColors)
      let b = brightness(sColors)
      let color2 = colorEffect != "solid" ? color(h, s * random(0.5, 1), b * random(0.5, 1)) : sColors

      customLine(frameBuffer, p1, p3, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p1, p2, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p2, p4, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p3, p4, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p5, p6, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p5, p7, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p6, p8, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)
      customLine(frameBuffer, p7, p8, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor * 0.25, undefined, false, colorEffect != "solid" ? "dim" : colorEffect)

    } else if (featureText_drawStyle == "Slashes") {
      // halfway between margin and edge
      // square

      let p1 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.5)
      let p2 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.5)
      let p3 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.5)
      let p4 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.5)

      let slashLength = canvasMinSize * 0.0125
      let slashSpacing = slashLength * 0.5

      customLinebyCrosses(frameBuffer, p1, p2, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect != "solid" ? "dim" : colorEffect)
      customLinebyCrosses(frameBuffer, p1, p3, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect != "solid" ? "dim" : colorEffect)
      customLinebyCrosses(frameBuffer, p2, p4, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect != "solid" ? "dim" : colorEffect)
      customLinebyCrosses(frameBuffer, p3, p4, drawConsistency, customDrawSegmentLimits, sColors, frameAlpha, frameStrokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect != "solid" ? "dim" : colorEffect)

    } else if (featureText_drawStyle == "Squiggles") {

      let sqCount = 5
      let sqDensity = 0.9
      let sqBaseMovement = random(0.001, 0.006) * canvasMinSize / 1000

      let p1 = createVector((outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(0, 0), 0.7)
      let p2 = createVector(outputWidth - (outputWidth * marginFactor), (outputHeight * marginFactor)).lerp(createVector(outputWidth, 0), 0.7)
      let p3 = createVector((outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(0, outputHeight), 0.7)
      let p4 = createVector(outputWidth - (outputWidth * marginFactor), outputHeight - (outputHeight * marginFactor)).lerp(createVector(outputWidth, outputHeight), 0.7)

      customLinebySquiggles(frameBuffer, p1, p2, sColors, frameAlpha * 1, frameStrokeSize / 2, canvasMinSize, sqCount, 0, -sqBaseMovement, sqDensity, colorEffect)
      customLinebySquiggles(frameBuffer, p1, p3, sColors, frameAlpha * 1, frameStrokeSize / 2, canvasMinSize, sqCount, -sqBaseMovement, 0, sqDensity, colorEffect)
      customLinebySquiggles(frameBuffer, p2, p4, sColors, frameAlpha * 1, frameStrokeSize / 2, canvasMinSize, sqCount, sqBaseMovement, 0, sqDensity, colorEffect)
      customLinebySquiggles(frameBuffer, p3, p4, sColors, frameAlpha * 1, frameStrokeSize / 2, canvasMinSize, sqCount, 0, sqBaseMovement, sqDensity, colorEffect)
    }
  }


  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " drawBackground END: " + random().toFixed(2));
    debugLineCt++
  }

}

function buildQubes(_grid) {

  for (let thisPoint of _grid.bigPoints) {

    let qube = new Qube(thisPoint.x, thisPoint.y, thisPoint.i, thisPoint.j, featureText_qubeType, thisPoint.noise, _grid.columnCount, _grid.rowCount, _grid.points, _grid.scaleX * _grid.scaleY)

    if (qube.faceCount > 0) {
      _grid.qubes.push(qube)
      _grid.qubeCount++
      _grid.faceArea += qube.faceArea

      // let qubeStrokeSize = strokeSizetoFaceArea / 10000 * ((_grid.faceArea / _grid.qubeCount) / canvasArea)
      let averageFaceAreaByGrid = _grid.faceArea / _grid.qubeCount
      let averageFaceAreaToCanvasRatio = averageFaceAreaByGrid / canvasArea
      let qubeStrokeSize = strokeSize * map(averageFaceAreaToCanvasRatio, 0.001, 0.04, 0.75, 1.5, true)
      //wasn't sure I liked adjusting strokesize with above
      qubeStrokeSize = strokeSize
      let qubeSquiggleSegmentCount = round(map(averageFaceAreaToCanvasRatio, 0.004, 0.1, 2.0, 7, true))
      let qubeSquiggleDensity = map(averageFaceAreaToCanvasRatio, 0.004, 0.1, 0.25, 0.05, true)


      qube.strokeSize = qubeStrokeSize
      qube.squiggleSegmentCount = qubeSquiggleSegmentCount
      qube.qubeSquiggleDensity = qubeSquiggleDensity
      // print("QubeStrokeSize to Avg Face Area:", averageFaceAreaToCanvasRatio.toFixed(4), qubeStrokeSize, strokeSize)

      for (let f of qube.faces) {
        f.faceStrokeSize = qube.strokeSize
        f.squiggleSegmentCount = qube.squiggleSegmentCount
        f.squiggleDensity = qube.qubeSquiggleDensity

        //trying the second option as the first option makes percstep smaller on larger faces.  I don't think that's needed as they would have more segment counts
        // f.modifiedPercStep = f.percStep * (f.qubeOriginalScaleAreaToCanvasRatio <= 0.0025 ? map(f.qubeOriginalScaleAreaToCanvasRatio, 0.00, 0.0025, 1.5, 1, true) : map(f.qubeOriginalScaleAreaToCanvasRatio, 0.0025, 0.02, 1, 0.85, true))
        f.modifiedPercStep = f.percStep * map(averageFaceAreaToCanvasRatio, 0.00, 0.01, 1.5, 1, true)
        // print(f.percStep, averageFaceAreaToCanvasRatio, f.qubeOriginalScaleAreaToCanvasRatio, f.modifiedPercStep, f.squiggleSegmentCount) 
      }
    }

  }
  // showQubesPercInc = faceCount > 400 ? showQubesPercInc * 0.75 : showQubesPercInc
}

function showQubes() {
  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " showQubes 1: " + random().toFixed(2));
    debugLineCt++
  }
  for (let qube of qubes) {
    qube.show()
  }

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " showQubes 2: " + random().toFixed(2));
    debugLineCt++
  }
  nextDrawnPerc += showQubesPercInc
  if (round(nextDrawnPerc, 8) > stopPerc) {
    tokenSaved = 1
    fxpreview()
    // console.log("End: " + random())
    // nextDrawnPerc = 0
  }
}

function drawOutlines(gb, _v1, _v2, _v3, _color, _perc, _percInc, _offset, _qubeOriginalScaleArea, _squiggleSegmentCount, _HELD_faceNextPercDraw, _percStep, _faceEndPerc, _squiggleDensity) {

  let percEnd = min(1, round((_perc + _percInc), 8))
  _perc = round(_perc, 8)

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " drawOutlines 1: " + random().toFixed(2));
    debugLineCt++
  }
  _perc = round(_perc, 8)

  let defaultOutlinesAlpha = standardAlpha * 1.1

  let doffInc = drawConsistency

  percStep = _percStep
  for (let perc = _HELD_faceNextPercDraw; round(perc, 8) <= max(percEnd, _HELD_faceNextPercDraw); perc += percStep) {

    let offset = _offset === undefined ? 0 : _offset

    let faceEndPerc = _faceEndPerc

    let startVector1 = p5.Vector.lerp(_v2, _v1, perc)
    let startVector2 = p5.Vector.lerp(_v2, _v3, perc)
    let startVector3 = p5.Vector.lerp(_v1, _v3, perc)
    let endVector1 = p5.Vector.lerp(_v2, _v1, faceEndPerc)
    let endVector2 = p5.Vector.lerp(_v2, _v3, faceEndPerc)
    let endVector3 = p5.Vector.lerp(_v1, _v3, faceEndPerc)
    startVector1.x += offset * startVector1.x
    startVector1.y += offset * startVector1.y
    startVector2.x += offset * startVector2.x
    startVector2.y += offset * startVector2.y
    startVector3.x += offset * startVector3.x
    startVector3.y += offset * startVector3.y
    endVector1.x += offset * endVector1.x
    endVector1.y += offset * endVector1.y
    endVector2.x += offset * endVector2.x
    endVector2.y += offset * endVector2.y
    endVector3.x += offset * endVector3.x
    endVector3.y += offset * endVector3.y
    let outlineExtensionLen = p5.Vector.dist(startVector1, endVector1) * outlineExtensionFactor
    let headingLine1 = p5.Vector.sub(endVector1, startVector1).heading()
    let headingLine2 = p5.Vector.sub(endVector2, startVector2).heading()
    let headingLine3 = p5.Vector.sub(endVector3, startVector3).heading()
    let extension1 = p5.Vector.fromAngle(headingLine1, outlineExtensionLen)
    let extension2 = p5.Vector.fromAngle(headingLine2, outlineExtensionLen)
    let extension3 = p5.Vector.fromAngle(headingLine3, outlineExtensionLen)
    startVector1.sub(extension1)
    startVector2.sub(extension2)
    startVector3.sub(extension3)
    endVector1.add(extension1)
    endVector2.add(extension2)
    endVector3.add(extension3)

    if (frameCount == debugFrame && printDebugs == 1) {
      console.log(debugLineCt + " drawOutlines 2: " + random().toFixed(2));
      debugLineCt++
    }
    if (featureText_drawStyle == "Human" && featureText_outlineStyle == "Match") {
      customLine(gb, startVector1, endVector1, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, random(0.6, 0.75), true, colorEffect)
      customLine(gb, startVector2, endVector2, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, random(0.6, 0.75), true, colorEffect)
    } else if (featureText_drawStyle == "Squiggles" && featureText_outlineStyle == "Match") {
      customLinebySquiggles(gb, startVector1, endVector1, _color, defaultOutlinesAlpha, strokeSize, canvasMinSize, _squiggleSegmentCount, squiggleXDirection, squiggleYDirection, _squiggleDensity, colorEffect)
      customLinebySquiggles(gb, startVector2, endVector2, _color, defaultOutlinesAlpha, strokeSize, canvasMinSize, _squiggleSegmentCount, squiggleXDirection, squiggleYDirection, _squiggleDensity, colorEffect)
    } else if (featureText_drawStyle == "Slashes" && featureText_outlineStyle == "Match") {

      let slashLengthSpread

      switch (featureText_humanDrawErrorFactor) {
        case "Skilled":
          slashLengthSpread = 0.1
          break;
        case "Amateur":
          slashLengthSpread = 0.25
          break;
        case "Wild":
          slashLengthSpread = 0.4
          break;
        default:
          slashLengthSpread = 0
          break;
      }
      let slashLength = percStep * _v3.dist(_v1) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread)) * 0.85
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))
      customLinebyCrosses(gb, startVector1, endVector1, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
      customLinebyCrosses(gb, startVector2, endVector2, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
    } else {
      customLine(gb, startVector1, endVector1, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize * 1.25, outputWidth, outputHeight, "perfect", undefined, undefined, false, "solid")
      customLine(gb, startVector2, endVector2, doffInc, customDrawSegmentLimits_outlines, _color, defaultOutlinesAlpha, strokeSize * 1.25, outputWidth, outputHeight, "perfect", undefined, undefined, false, "solid")
    }
  }

  //outline dots
  if (showOutlineDot) {
    let cSize = min((2000 * resolutionMultiplier) * (_qubeOriginalScaleArea / canvasArea), 0.005 * sqrt(canvasArea))

    let noiseFrequency
    let noiseAmp
    let density
    if (featureText_drawStyle == "Squiggles") {
      noiseFrequency = 30
      noiseAmp = 1.85
      density = 0.15
    } else if (featureText_drawStyle == "Human") {

      switch (featureText_humanDrawErrorFactor) {
        case "Skilled":
          noiseFrequency = 2
          noiseAmp = 0.2
          density = 0.75
          break;
        case "Amateur":
          noiseFrequency = 3
          noiseAmp = 0.35
          density = 0.55
          break;
        case "Wild":
          noiseFrequency = 20
          noiseAmp = 0.95
          density = 0.65
          break;
      }
    } else {
      noiseFrequency = 1
      noiseAmp = 0.35
      density = 0.95
    }
    if (round(_perc, 2) == 1.00) {
      if (featureText_drawStyle == "Human" && featureText_outlineStyle == "Match") {
        customEllipse(gb, _v1, _color, 255, strokeSize, cSize, noiseFrequency, noiseAmp, density, colorEffect)
      } else if (featureText_drawStyle == "Squiggles" && featureText_outlineStyle == "Match") {
        // customEllipse(gb, _v1, outlineColor, defaultOutlinesAlpha * 2, strokeSize, cSize, noiseFrequency, noiseAmp, density, colorEffect)
        for (i = 0; i <= 25; i++) {
          // squiggle(gb, outlineColor, defaultOutlinesAlpha * 2, strokeSize, canvasMinSize / 1.5, _v1, 8, 0, 0, "variable")
        }
      } else { //perfect dot
        gb.push()
        gb.fill(_color)
        gb.noStroke()
        gb.strokeWeight(strokeSize)
        gb.ellipse(_v1.x, _v1.y, cSize * 1.4)
      }
    }
  }

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " drawOutlines 3 (" + frameCount + "): " + random().toFixed(2));
    debugLineCt++
  }
  // }
}

//This was helpful for me when testing outputs, why not keep it for everyone?
function showFeatures(gb) {
  gb.clear()

  let x = 30
  let y = 30

  let bgWithAlpha = color(bgColor)
  bgWithAlpha = color("grey")
  bgWithAlpha.setAlpha(170)

  push();
  gb.rectMode(CORNER)
  gb.noStroke()
  gb.fill(bgWithAlpha);
  gb.rect(canvasMinSize * -0.01, canvasMinSize * 0.045, canvasMinSize * 0.5, canvasMinSize * 0.55, 20);
  pop();

  push();
  if (featureText_backgroundType == "Dark") {
    gb.stroke(255)
    gb.fill(255)
  } else {
    gb.stroke(0)
    gb.fill(0)
  }

  gb.noStroke()
  gb.textSize(canvasMinSize * 0.020)


  gb.text(

    "Plop Type = " + featureText_plopType + "\n" +
    "Qube Type = " + featureText_qubeType + "\n" +
    "Outlines = " + featureText_outlines + "\n" +
    "Canvas Ratio = " + featureText_canvasRatio + "\n" +
    "Distortion? = " + featureText_distortion + "\n" + "\n" +

    "Draw Style = " + (featureText_continuity == "Explosive" ? featureText_continuity : featureText_drawStyle) + "\n" +
    "Human Skill Factor = " + featureText_humanDrawErrorFactor + "(" + humanDrawErrorFactor.toFixed(2) + ")\n" +
    "Stroke Size = " + strokeSize.toFixed(2) + "\n" +
    // "defaultPercStepFactorMultiplier = " + (defaultPercStepFactor * 100).toFixed(1) + "\n" +
    // "customDrawSegmentLimits = min(" + customDrawSegmentLimits.min.toFixed(1) + ") max(" + customDrawSegmentLimits.max.toFixed(1) + ")" + "\n" +
    "strokeSize/canvasFactor = " + (strokeSize / canvasFactor).toFixed(1) + "\n" + "\n" +

    "Special Feature - Chunky = " + featureText_chunky + "\n" +
    "Special Feature - Graphite = " + featureText_pencil + "\n" +
    "Special Feature - Multigrid = " + featureText_multigrid + "\n" +
    "Outline Style = " + featureText_outlineStyle + "\n" + "\n" +

    "Continuity = " + featureText_continuity + "\n" +
    "Color Selection Type = " + featureText_colorPickerType + "\n" +
    "Structure Type = " + featureText_structureType + "\n" +
    "Resolution Mulitplier = " + resolutionMultiplier + " (" + outputWidth.toFixed(0) + "x" + outputHeight.toFixed(0) + ") (" + width.toFixed(0) + "x" + height.toFixed(0) + ")" + "\n" +
    "user Agent = " + navigator.userAgent
    , canvasMinSize * 0.025, canvasMinSize * 0.063)
}

function showGrid(gb) {

  for (let grid of grids) {
    gb.push()
    gb.noStroke();
    for (let thisPoint of grid.points) {
      if (thisPoint.nodeType == "big1") {
        gb.fill(0, 255, 0, 255)
        gb.ellipse(thisPoint.x, thisPoint.y, 15, 15)

        gb.fill(255, 0, 0, 255)
        gb.text(thisPoint.i + "," + thisPoint.j + "\n" + thisPoint.noise.toFixed(2), thisPoint.x, thisPoint.y)
      } else if (thisPoint.nodeType == "big2") {
        gb.fill(255, 255, 0, 255)
        gb.ellipse(thisPoint.x, thisPoint.y, 15, 15)

        gb.fill(255, 0, 0, 255)
        gb.text(thisPoint.i + "," + thisPoint.j + "\n" + thisPoint.noise.toFixed(2), thisPoint.x, thisPoint.y)
      } else {
        gb.fill(0, 190, 0, 255)
        gb.ellipse(thisPoint.x, thisPoint.y, 5, 5)

        gb.fill(190, 0, 0, 255)
        gb.text(thisPoint.i + "," + thisPoint.j + "\n" + thisPoint.noise.toFixed(2), thisPoint.x, thisPoint.y)
      }
    }
    gb.pop();

    if (featureText_plopType == "Circle") {
      gridBuffer.push()
      gridBuffer.strokeWeight(2)
      gridBuffer.stroke(255, 0, 0, 255);
      gridBuffer.noFill()
      gridBuffer.ellipse(grid.centerVector.x, grid.centerVector.y, grid.circleMaxDist * 2)

      gridBuffer.stroke(0, 0, 255, 255);
      gridBuffer.ellipse(grid.centerVector.x, grid.centerVector.y, grid.circleMinDist * 2)
      gridBuffer.pop()
    }

  }
}

function addGrain(gb) {
  let grainAlpha
  if (featureText_backgroundType == "Dark") {
    grainAlpha = 200
  } else {
    grainAlpha = 50
  }

  let scalex = max(1, outputWidth / 965)
  let scaley = max(1, outputHeight / 965)
  let scaledRows = ceil(outputHeight / scaley)
  let scaledColumns = ceil(outputWidth / scalex)
  for (let iy = 0; iy < scaledRows; iy += 1) {
    for (let ix = 0; ix < scaledColumns; ix += 1) {

      if (((iy + 1) % 4) == 1 || ((iy + 1) % 4) == 0) {
        if ((ix + 1) % 8 == 1 || (ix + 1) % 8 == 6) {
          randomGray = 255
          gb.fill(randomGray, grainAlpha)
          gb.rect(ix * scalex, iy * scaley, scalex, scaley)
        } else randomGray = 255
      } else if (((iy + 1) % 4) == 2 || ((iy + 1) % 4) == 3) {
        if ((ix + 1) % 8 == 2 || (ix + 1) % 8 == 5) {
          randomGray = 255
          gb.fill(randomGray, grainAlpha)
          gb.rect(ix * scalex, iy * scaley, scalex, scaley)
        } else randomGray = 255
      }

    }
  }
}


function draw() {

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log("Draw Start (" + frameCount + "): " + random().toFixed(2))
    debugLineCt++
  }
  // clear()
  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 1: " + random().toFixed(2));
    debugLineCt++
  }
  if (!tokenSaved) {
    showQubes();
  }
  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 11: " + random().toFixed(2));
    debugLineCt++
  }
  // if (switchBackground == 1) {
  mainBuffer.image(bgBuffer, 0, 0)
  // }
  if (switchShowGrain == 1 && switchBackground == 1) {
    mainBuffer.push()
    mainBuffer.tint(255, 10)
    mainBuffer.image(grainBuffer, 0, 0)
    mainBuffer.pop()
  }
  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 12: " + random().toFixed(2));
    debugLineCt++
  }

  if (switchFrame == 1) {
    mainBuffer.image(frameBuffer, 0, 0)
  }


  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 2: " + random().toFixed(2));
    debugLineCt++
  }

  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 3: " + random().toFixed(2));
    debugLineCt++
  }

  mainBuffer.image(qubesBuffer, 0, 0)
  if (switchShowHighlights == 1) {
    mainBuffer.push()
    mainBuffer.image(lowlightBuffer, 0, 0)
    mainBuffer.image(highlightBuffer, 0, 0)
    mainBuffer.pop()
  }


  mainBuffer.blendMode(BLEND)
  mainBuffer.push()
  if (outlineExtensionFactor >= 1) {
    let tintFactor = map(faceCount, 1, 50, 0.75, 0.33, true)
    mainBuffer.tint(255, 255 * tintFactor)
  }
  mainBuffer.image(outlinesBuffer, 0, 0)
  mainBuffer.pop()

  if (switchShowGrid == 1) {
    showGrid(gridBuffer)
    mainBuffer.image(gridBuffer, 0, 0)
  }
  if (switchShowFeatures == 1) {
    showFeatures(featureBuffer)
    mainBuffer.image(featureBuffer, 0, 0)
  }

  if (generatorMode == 0) {
    // clear()
    // background(30)
    image(mainBuffer, 0, 0, width, height)
  }
  if (frameCount == debugFrame && printDebugs == 1) {
    console.log(debugLineCt + " draw 4 (" + frameCount + "): " + random().toFixed(2));
    debugLineCt++
  }
  if (tokenSaved && !(touchStart > 0)) {
    if (exportFlag == 1 && tokenSaved == 1) {
      exportFlag = 0
      exportCanvas(outputWidth, outputHeight)
    }
    noLoop();
    if (generatorMode && generationCount < maxGenerationCount) {
      generationCount++
      image(featureBuffer, 0, 0)
      save(mainBuffer, 'qube_' + featureText_canvasRatio + "_"+ featureText_color + "_" + colorEffect + "_" + seedValue + "_" + featureText_drawStyle + "_" + featureText_plopType + '.png');
      console.log("Generation Count = " + generationCount)
      seedValue += 1
      restart();
    }
  }
}

function keyPressed() {
  // print("keyCode=" + keyCode)

  if (keyCode == 49) { // 1
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 1, switchZoom == 1 ? true : false)
  }

  if (keyCode == 50) { // 2
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 2, switchZoom == 1 ? true : false)
  }

  if (keyCode == 51) { // 3
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 3, switchZoom == 1 ? true : false)
  }

  if (keyCode == 52) { // 4
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 4, switchZoom == 1 ? true : false)
  }

  if (keyCode == 53) { // 5
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 5, switchZoom == 1 ? true : false)
  }

  if (keyCode == 54) { // 6
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 6, switchZoom == 1 ? true : false)
  }

  if (keyCode == 55) { // 7
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 7, switchZoom == 1 ? true : false)
  }

  if (keyCode == 56) { // 8
    exportFlag = 1
    restart(switchPerfect == 1 ? true : false, 8, switchZoom == 1 ? true : false)
  }

  if (keyCode == 83) { // S
    exportCanvas(outputWidth, outputHeight)
  }

  if (keyCode == 90) { // z
    switchZoom *= -1

    switchFrame = -switchZoom
    restart(switchPerfect == 1 ? true : false, undefined, switchZoom == 1 ? true : false);
  }

  if (keyCode == 65) { // A
    if (switchAdaptiveRatio == 1) {
      switchAdaptiveRatio = -2
    }
    switchAdaptiveRatio += 1
    restart(switchPerfect == 1 ? true : false, undefined, switchZoom == 1 ? true : false);
  }

  if (keyCode == 66) { // B
    switchBackground *= -1
    restart();
  }

  // if (keyCode == 68) { // D
  //   switchShowGrid *= -1
  //   gridBuffer.clear()
  //   showGrid(gridBuffer)
  //   loop();
  // }

  if (keyCode == 69) { // A
    switchEcho *= -1
    loop();
  }

  if (keyCode == 70) { // F
    // if (switchShowFeatures != 1) {
    //   switchShowFeatures = 1
    //   featureBuffer.clear()
    //   showFeatures(featureBuffer)
    // } else {
    //   switchShowFeatures = -1
    // }
    // loop();

    switchFrame *= -1
    loop();
  }

  if (keyCode == 71) {
    switchShowGrain *= -1
    loop();
  }

  // if (keyCode == 78) { // N
  //   console.log("Next!")
  //   seedValue += 1
  //   restart();
  //   // if (generatorMode) {  
  //   // image(featureBuffer,0,0)
  //   // save(mainCanvas, 'qube_' + seedValue + "_" + random(500000) + '.png');
  //   // }
  // }

  // if (keyCode == 76) { // L
  //   console.log("Last!")
  //   seedValue += -1
  //   restart();
  //   // if (generatorMode) {  
  //   // image(featureBuffer,0,0)
  //   // save(mainCanvas, 'qube_' + seedValue + "_" + random(500000) + '.png');
  //   // }
  // }

  if (keyCode == 72) { // 
    switchShowHighlights *= -1
    loop();
  }

  if (keyCode == 80) {
    switchDistortion *= -1
    switchPerfect *= -1
    restart(switchPerfect == 1 ? true : false, undefined, switchZoom == 1 ? true : false);
  }
}

function touchStarted() {
  touchStart = millis();
  loop();
}

function touchEnded() {
  touchEnd = millis();
  touchStart = 0
}

class Qube {
  constructor(_x, _y, _i, _j, _style, _noise, _columnCount, _rowCount, _points, _originalScaleArea) {
    this.x = _x
    this.y = _y
    this.i = _i
    this.j = _j
    this.style = _style
    this.noiseValue = _noise
    this.faces = []
    this.faceArea = 0
    this.originalScaleArea = _originalScaleArea
    this.strokeSize = 0

    this.faceCount = this.addFaces(_columnCount, _rowCount, _points)
  }

  addFaces(columnCount, rowCount, points) {
    let colors = []
    let flipColors = []
    let face
    let v1Index
    let v2Index
    let v3Index
    let v4Index
    let v5Index
    let v6Index
    let v1
    let v2
    let v3
    let v4
    let v5
    let v6
    let showThisFace
    let newFaces = []
    let nodeIndex = this.i + this.j * columnCount
    if (featureText_structureType == "Cube") {

      //N of big node
      if (this.j != -2) { // && this.i >= 1 && this.i <= columnCount - 2 && this.j <= rowCount - 2) { 
        let v1Index = nodeIndex - columnCount - 1
        let v2Index = nodeIndex
        let v3Index = nodeIndex - columnCount + 1
        let v4Index = nodeIndex - columnCount - 1
        let v5Index = nodeIndex - columnCount * 2
        let v6Index = nodeIndex - columnCount + 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j - 1) {
            showFace = 1

            newFaces.push({
              faceId: 0,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace1,
              splitFace: splitFace1,
              showOutlines: showOutline1
            })
          }
        }
      }

      //E of big node
      if ((this.j != -2 || (this.i) / 2 % 2 == 0) && this.j <= rowCount - 3) {
        let v1Index = nodeIndex - columnCount - 1
        let v2Index = nodeIndex
        let v3Index = nodeIndex + columnCount * 2
        let v4Index = nodeIndex - columnCount - 1
        let v5Index = nodeIndex + columnCount - 1
        let v6Index = nodeIndex + columnCount * 2
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2) {

            showFace = 1

            newFaces.push({
              faceId: 1,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace2,
              splitFace: splitFace2,
              showOutlines: showOutline2
            })
          }
        }
      }

      //W of big node
      if ((this.j != -2 || (this.i) / 2 % 2 == 0) && this.j <= rowCount - 3) {
        let v1Index = nodeIndex - columnCount + 1
        let v2Index = nodeIndex
        let v3Index = nodeIndex + columnCount * 2
        let v4Index = nodeIndex - columnCount + 1
        let v5Index = nodeIndex + columnCount + 1
        let v6Index = nodeIndex + columnCount * 2
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2) {

            showFace = 1

            newFaces.push({
              faceId: 2,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace3,
              splitFace: splitFace3,
              showOutlines: showOutline3
            })
          }
        }
      }
    } else if (featureText_structureType == "Butterfly") {

      //NE of big node
      // if (this.j != 2 && showFace1) {
      if (this.j >= 3 && this.i <= columnCount - 2) {
        v1Index = nodeIndex
        v2Index = nodeIndex - columnCount * 2
        v3Index = nodeIndex - columnCount * 3 + 1
        v4Index = nodeIndex
        v5Index = nodeIndex - columnCount + 1
        v6Index = nodeIndex - columnCount * 3 + 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j + 2 && points[v3Index].j == points[v2Index].j - 1) {
            showFace = 1

            newFaces.push({
              faceId: 0,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace1,
              splitFace: splitFace1,
              showOutlines: showOutline1
            })
          }
        }
      }

      //SE of big node
      // if (this.j < rowCount-4 && showFace3) {
      if (this.j < rowCount - 3 && this.i <= columnCount - 2) { //should the subtraction be one of the divisors instead of 3?
        v1Index = nodeIndex
        v2Index = nodeIndex + columnCount + 1
        v3Index = nodeIndex + columnCount * 3 + 1
        v4Index = nodeIndex
        v5Index = nodeIndex + columnCount * 2
        v6Index = nodeIndex + columnCount * 3 + 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2) {
            showFace = 1

            newFaces.push({
              faceId: 1,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace2,
              splitFace: splitFace2,
              showOutlines: showOutline2
            })
          }
        }
      }

      //NW of big node
      if (this.j >= 3 && this.i >= 1) {
        v1Index = nodeIndex
        v2Index = nodeIndex - columnCount * 2
        v3Index = nodeIndex - columnCount * 3 - 1
        v4Index = nodeIndex
        v5Index = nodeIndex - columnCount * 1 - 1
        v6Index = nodeIndex - columnCount * 3 - 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j + 2 && points[v3Index].j == points[v2Index].j - 1) {
            showFace = 1

            newFaces.push({
              faceId: 2,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace3,
              splitFace: splitFace3,
              showOutlines: showOutline3
            })
          }
        }
      }

      //SW of big node
      if (this.j < rowCount - 3 && this.i >= 1) {
        v1Index = nodeIndex
        v2Index = nodeIndex + columnCount * 1 - 1
        v3Index = nodeIndex + columnCount * 3 - 1
        v4Index = nodeIndex
        v5Index = nodeIndex + columnCount * 2
        v6Index = nodeIndex + columnCount * 3 - 1
        let showFace = showFace4 && points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2 ? 1 : 0

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j - points[v2Index].j == -1 && points[v3Index].j - points[v2Index].j == 2) {
            newFaces.push({
              faceId: 3,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace4,
              splitFace: splitFace4,
              showOutlines: showOutline4
            })
          }
        }
      }
    } else if (featureText_structureType == "Flag" || featureText_structureType == "Star") {

      //NE of big node
      // if (this.j != 2 && showFace1) {
      if (1) {
        v1Index = nodeIndex
        v2Index = nodeIndex - columnCount * 2
        v3Index = nodeIndex - columnCount * 3 + 1
        v4Index = nodeIndex
        v5Index = nodeIndex - columnCount + 1
        v6Index = nodeIndex - columnCount * 3 + 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j - points[v2Index].j == 2 && points[v3Index].j - points[v2Index].j == -1) {
            showFace = 1

            newFaces.push({
              faceId: 0,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace1,
              splitFace: splitFace1,
              showOutlines: showOutline1
            })
          }
        }
      }

      //E of big node
      // if (this.i < columnCount-1 && (this.j != 2 || (this.i) / 2 % 2 == 0) && showFace2) {
      if (1) {
        v1Index = nodeIndex
        v2Index = nodeIndex - columnCount + 1
        v3Index = nodeIndex + 2
        v4Index = nodeIndex
        v5Index = nodeIndex + columnCount + 1
        v6Index = nodeIndex + 2
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          // print(v1Index + " - " + v2Index + " - " + v3Index) //debug
          if (points[v1Index].j - points[v2Index].j == 1 && points[v3Index].j - points[v2Index].j == 1) {
            showFace = 1

            newFaces.push({
              faceId: 1,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace2,
              splitFace: splitFace2,
              showOutlines: showOutline2
            })
          }
        }
      }

      //SE of big node
      // if (this.j < rowCount-4 && showFace3) {
      if (this.j < rowCount - 3) { //should the subtraction be one of the divisors instead of 3?
        v1Index = nodeIndex
        v2Index = nodeIndex + columnCount + 1
        v3Index = nodeIndex + columnCount * 3 + 1
        v4Index = nodeIndex
        v5Index = nodeIndex + columnCount * 2
        v6Index = nodeIndex + columnCount * 3 + 1
        let showFace

        if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
          v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
          if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2) {
            showFace = 1

            newFaces.push({
              faceId: 2,
              v1Index: v1Index,
              v2Index: v2Index,
              v3Index: v3Index,
              v4Index: v4Index,
              v5Index: v5Index,
              v6Index: v6Index,
              colors: colors,
              style: this.style,
              colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
              showFace: showFace3,
              splitFace: splitFace3,
              showOutlines: showOutline3
            })
          }
        }
      }

      if (featureText_structureType == "Star") {
        //NW of big node
        if (this.j >= 3 && this.i >= 1) {
          v1Index = nodeIndex
          v2Index = nodeIndex - columnCount * 2
          v3Index = nodeIndex - columnCount * 3 - 1
          v4Index = nodeIndex
          v5Index = nodeIndex - columnCount * 1 - 1
          v6Index = nodeIndex - columnCount * 3 - 1
          let showFace

          if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
            v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
            if (points[v1Index].j == points[v2Index].j + 2 && points[v3Index].j == points[v2Index].j - 1) {
              showFace = 1

              newFaces.push({
                faceId: 3,
                v1Index: v1Index,
                v2Index: v2Index,
                v3Index: v3Index,
                v4Index: v4Index,
                v5Index: v5Index,
                v6Index: v6Index,
                colors: colors,
                style: this.style,
                colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
                showFace: showFace4,
                splitFace: splitFace4,
                showOutlines: showOutline3
              })
            }
          }
        }

        //W of big node
        if ((this.j != -2 || (this.i) / 2 % 2 == 0) && this.j <= rowCount - 3) {
          let v1Index = nodeIndex - columnCount + 1
          let v2Index = nodeIndex
          let v3Index = nodeIndex + columnCount * 2
          let v4Index = nodeIndex - columnCount + 1
          let v5Index = nodeIndex + columnCount + 1
          let v6Index = nodeIndex + columnCount * 2
          let showFace

          if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
            v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
            if (points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2) {

              showFace = 1

              newFaces.push({
                faceId: 4,
                v1Index: v1Index,
                v2Index: v2Index,
                v3Index: v3Index,
                v4Index: v4Index,
                v5Index: v5Index,
                v6Index: v6Index,
                colors: colors,
                style: this.style,
                colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
                showFace: showFace5,
                splitFace: splitFace5,
                showOutlines: showOutline3
              })
            }
          }
        }

        //SW of big node
        if (this.j < rowCount - 3 && this.i >= 1) {
          v1Index = nodeIndex
          v2Index = nodeIndex + columnCount * 1 - 1
          v3Index = nodeIndex + columnCount * 3 - 1
          v4Index = nodeIndex
          v5Index = nodeIndex + columnCount * 2
          v6Index = nodeIndex + columnCount * 3 - 1
          let showFace = showFace4 && points[v1Index].j == points[v2Index].j - 1 && points[v3Index].j == points[v2Index].j + 2 ? 1 : 0

          if (v1Index < points.length && v2Index < points.length && v3Index < points.length && v4Index < points.length && v5Index < points.length && v6Index < points.length &&
            v1Index >= 0 && v2Index >= 0 && v3Index >= 0) {
            if (points[v1Index].j - points[v2Index].j == -1 && points[v3Index].j - points[v2Index].j == 2) {
              newFaces.push({
                faceId: 5,
                v1Index: v1Index,
                v2Index: v2Index,
                v3Index: v3Index,
                v4Index: v4Index,
                v5Index: v5Index,
                v6Index: v6Index,
                colors: colors,
                style: this.style,
                colorSplitType: colorSplitType == "random" ? random(["split", "lerp", "invert50", "mixer"]) : colorSplitType,
                showFace: showFace6,
                splitFace: splitFace6,
                showOutlines: showOutline4
              })
            }
          }
        }
      }

    }
    for (let newFace of newFaces) {
      if (newFace.v1Index >= 0 && newFace.v2Index >= 0 && newFace.v3Index >= 0 && newFace.v4Index >= 0 && newFace.v5Index >= 0 && newFace.v6Index >= 0 &&
        newFace.v1Index < points.length && newFace.v2Index < points.length && newFace.v3Index < points.length && newFace.v4Index < points.length && newFace.v5Index < points.length && newFace.v6Index < points.length
      ) {

        v1 = createVector(points[newFace.v1Index].x, points[newFace.v1Index].y)
        v2 = createVector(points[newFace.v2Index].x, points[newFace.v2Index].y)
        v3 = createVector(points[newFace.v3Index].x, points[newFace.v3Index].y)
        v4 = createVector(points[newFace.v4Index].x, points[newFace.v4Index].y)
        v5 = createVector(points[newFace.v5Index].x, points[newFace.v5Index].y)
        v6 = createVector(points[newFace.v6Index].x, points[newFace.v6Index].y)

        let cIndex = newFace.faceId
        if (featureText_colorPickerType == "Face Assignment") {
          cIndex = floor(random(faceColors.length))
        } else if (featureText_colorPickerType == "Vertical Location") {
          cIndex = floor(this.j / (rowCount / faceColors.length))
        } else if (featureText_colorPickerType == "Horizontal Location") {
          cIndex = floor(this.i / (columnCount / faceColors.length))
        } else if (featureText_colorPickerType == "Node Index") {
          cIndex = nodeIndex % faceColors.length
        }

        colors.push(faceColors[cIndex][0])
        if (newFace.splitFace == 1) {
          colors.push(faceColors[cIndex][1])
        }

        let cIndex2 = cIndex
        while (cIndex2 == cIndex) {
          cIndex2 = floor(random(faceColors.length))
        }
        flipColors.push(faceColors[cIndex2][0])
        if (newFace.splitFace == 1) {
          flipColors.push(faceColors[cIndex2][1])
        }

        let percStep
        let cp = JSON.parse(JSON.stringify(qubeColors))[f_color]
        let betaColor = random(colors)

        if (percStepType == "random" && random() > 0.7) {
          percStep = (defaultPercStepFactor + (defaultPercStepFactor * random([-0.3, -0.65, 0.5, 0.9]))) / v1.dist(v2)
          percStep = (defaultPercStepFactor + (defaultPercStepFactor * random([-0.3, -0.65, 0.5, 0.9]))) // debug, this needs to be figured out and refactored.  Causes massive stroke sizes when distortion creates tiny qubes...also how is this dimensionless?
        } else {
          percStep = defaultPercStepFactor * ((v1.dist(v2) / canvasMinSize) / 0.12) // debug, this needs to be figured out and refactored.  Causes massive stroke sizes when distortion creates tiny qubes...also how is this dimensionless?
          percStep = defaultPercStepFactor // debug, this needs to be figured out and refactored.  Causes massive stroke sizes when distortion creates tiny qubes...also how is this dimensionless?
        }

        //let's make sure there are no dupe point locations in groups 1,2,3 or 4,5,6
        if (!(v1.dist(v2) * v1.dist(v3) * v2.dist(v3) * v4.dist(v5) * v4.dist(v6) * v5.dist(v6) == 0) &&
          newFace.showFace == 1) {
          let face1 = new Face(v1, v2, v3, colors, newFace.style, newFace.colorSplitType, newFace.showFace, newFace.showOutlines, percStep, betaColor, flipColors, newFace.faceId)
          let face2 = new Face(v4, v5, v6, colors, newFace.style, newFace.colorSplitType, newFace.showFace, newFace.showOutlines, percStep, betaColor, flipColors, newFace.faceId)

          //confusing, but the "this" in this.faceArea is actually to store the total face area of the qube
          this.faceArea += (v1.dist(v3) * p5.Vector.lerp(v1, v3, 0.5).dist(v2)) / 2
          this.faceArea += (v4.dist(v6) * p5.Vector.lerp(v4, v6, 0.5).dist(v5)) / 2

          //and now, because I did this backwards, I want to store the total qube area in the face so I can get the outline dot size
          //to be based on the qube area.
          face1.qubeArea = this.faceArea
          face2.qubeArea = this.faceArea

          //Didn't like how determining outline circle size by each qube area created a lot of varying circle sizes.
          //Let's instead keep it more consistent and base the circle size on the grid scale
          face1.qubeOriginalScaleArea = this.originalScaleArea
          face1.qubeOriginalScaleAreaToCanvasRatio = this.originalScaleArea / canvasArea
          face2.qubeOriginalScaleArea = this.originalScaleArea
          face2.qubeOriginalScaleAreaToCanvasRatio = this.originalScaleArea / canvasArea

          this.faces.push(face1)
          this.faces.push(face2)
        } else {
          // print("bad face", v1, v2, v3, v4, v5, v6)
        }
        colors = []
        // if (colorCombos.length > 1) {colorCombos.splice(cIndex,1)}

      }
    }

    return this.faces.length;
  }

  show() {
    for (let face of this.faces) {
      face.show()
    }
  }

}

class Face {
  constructor(_v1, _v2, _v3, _colors, _style, _colorSplitType, _showFace, _showOutlines, _percStep, _betaColor, _flipColors, _faceId) {
    this.v1 = _v1
    this.v2 = _v2
    this.v3 = _v3
    this.colors = _colors
    this.betaColor = [_betaColor]
    this.style = _style
    this.nextPercDrawn = 0
    this.lastPercDrawn = 0
    this.colorSplitType = _colorSplitType
    this.showFace = _showFace
    this.percStep = _percStep
    this.faceStrokeSize = 1.01
    this.flipColors = _flipColors
    this.faceId = _faceId
    this.edgeViolation = false

    if (this.faceId == flipFaceId || flipFaceId == "all") {
      this.doWeFlip = true
    } else {
      this.doWeFlip = false
    }

    this.faceArea = (_v1.dist(_v3) * p5.Vector.lerp(_v1, _v3, 0.5).dist(_v2)) / 2

    if (featureText_outlines == "All") {
      this.showOutlines = 1
    } else if (featureText_outlines == "Some") {
      if (showOutlineType == "Random" && featureText_plopType != "Perfect") {
        this.showOutlines = random() > 0.65 ? 1 : 0
      } else {
        this.showOutlines = _showOutlines
      }
    }
  }

  show() {
    let HELD_nextDrawnPerc = nextDrawnPerc
    let HELD_faceNextPercDraw = this.nextPercDrawn

    if (this.showFace) {
      // this.showHighlights(this.v1, this.v2, this.v3, this.colors, this.style, nextDrawnPerc, showQubesPercInc, this.colorSplitType, this.percStep)

    if (frameCount == debugFrame && printDebugs == 1) {
      console.log(debugLineCt + " showFace 1: " + random().toFixed(2), this.v1.x / canvasMinSize, this.v2.x / canvasMinSize, this.v3.x / canvasMinSize, nextDrawnPerc, showQubesPercInc, this.percStep);
      debugLineCt++
    }

    if (this.edgeViolation == false || 1==1) {
      if (featureText_drawStyle == "Beta") {
        this.betaFaceDraw(this.v1, this.v2, this.v3, this.betaColor, this.style, HELD_nextDrawnPerc, showQubesPercInc, this.colorSplitType, 1, this.faceArea, HELD_faceNextPercDraw)
        // this.customFaceDraw(this.v1, this.v2, this.v3, this.colors, this.style, nextDrawnPerc, showQubesPercInc, this.colorSplitType, this.percStep)
      } else {
        this.customFaceDraw(this.v1, this.v2, this.v3, this.colors, this.style, nextDrawnPerc, showQubesPercInc, this.colorSplitType, this.modifiedPercStep)
        if (betaBackGround == true) {
          this.betaFaceDraw(this.v1, this.v2, this.v3, this.betaColor, this.style, HELD_nextDrawnPerc, showQubesPercInc, this.colorSplitType, 1, this.faceArea, HELD_faceNextPercDraw)
          // this.betaBGFaceDraw(this.v1, this.v2, this.v3, this.betaColor, this.style, nextDrawnPerc, showQubesPercInc, this.colorSplitType, 1)
        }
      }
    }

    }
    if (frameCount == debugFrame && printDebugs == 1) {
      console.log(debugLineCt + " showFace 2: " + random().toFixed(2));
      debugLineCt++
    }
    if (this.showOutlines && this.edgeViolation == false) {
      drawOutlines(outlinesBuffer, this.v1, this.v2, this.v3, outlineColor, HELD_nextDrawnPerc, showQubesPercInc, undefined, this.qubeOriginalScaleArea, this.squiggleSegmentCount, HELD_faceNextPercDraw, this.modifiedPercStep, this.nextPercDrawn, this.squiggleDensity)
    }
    if (frameCount == debugFrame && printDebugs == 1) {
      console.log(debugLineCt + " showFace END: " + random().toFixed(2));
      debugLineCt++
    }

  }

  betaFaceDraw(v1, v2, v3, _colors, _drawType, _perc, _percInc, _colorSplitType, _percStep, _faceArea, _HELD_faceNextPercDraw) {

    let percStep = _percStep
    let percEnd = min(1, round((_perc + _percInc), 8))
    _perc = round(_perc, 8)
    let minAlpha, maxAlpha
    minAlpha = standardAlpha * minMinAlphaFactor
    maxAlpha = standardAlpha * maxMaxAlphaFactor
    let c
    let inc = 0.01
    let size = sqrt(_faceArea) * inc

    let startVector = v1.copy()

    // if (round(_perc, 2) >= 0.95) {

    let alpha = random(minAlpha, maxAlpha)
    alpha = featureText_drawStyle == "Beta" ? 35 : 8
    alpha *= (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)
    // print(alpha,minAlpha,maxAlpha)
    c = color(_colors[0])
    c.setAlpha(alpha)
    let sc = color(_colors[0])
    sc.setAlpha(alpha * 0.5)

    for (let i = _perc + inc; round(i, 8) <= max(percEnd, _HELD_faceNextPercDraw); i = round((i + inc), 8)) {
      // new beta style
      let startVector = v1
      let startVector2 = v2
      let startVector3 = v3
      let endVector = p5.Vector.lerp(v2, v3, i)
      let endVector2 = p5.Vector.lerp(v1, v3, i)
      let endVector3 = p5.Vector.lerp(v1, v2, i)

      if (i >= 1) {
        c.setAlpha(alpha * 0.5)
      }

      qubesBuffer.push()
      qubesBuffer.strokeWeight(this.faceStrokeSize)
      qubesBuffer.strokeWeight(size)
      qubesBuffer.fill(c)
      qubesBuffer.stroke(c)
      qubesBuffer.line(startVector.x, startVector.y, endVector.x, endVector.y)
      qubesBuffer.line(startVector2.x, startVector2.y, endVector2.x, endVector2.y)
      qubesBuffer.line(startVector3.x, startVector3.y, endVector3.x, endVector3.y)
      qubesBuffer.pop()
    }
  }

  betaBGFaceDraw(v1, v2, v3, _colors, _drawType, _perc, _percInc, _colorSplitType, _percStep) {

    let percStep = _percStep
    let percEnd = 1
    let minAlpha, maxAlpha
    minAlpha = standardAlpha * minMinAlphaFactor
    maxAlpha = standardAlpha * maxMaxAlphaFactor
    let c

    if (round(_perc, 2) >= 0.95) {
      let alpha = random(minAlpha, maxAlpha)
      alpha = featureText_drawStyle == "Beta" ? 35 : 10
      c = color(_colors[0])
      c.setAlpha(alpha * 4)
      let sc = color(_colors[0])
      sc.setAlpha(alpha * 0.5)

      qubesBuffer.push()
      qubesBuffer.strokeWeight(this.faceStrokeSize)
      qubesBuffer.fill(c)
      qubesBuffer.stroke(sc)
      qubesBuffer.beginShape()
      qubesBuffer.vertex(v1.x, v1.y)
      qubesBuffer.vertex(v2.x, v2.y)
      qubesBuffer.vertex(v3.x, v3.y)
      qubesBuffer.endShape(CLOSE)
      qubesBuffer.pop()
    }
  }

  customFaceDraw(v1, v2, v3, _colors, _drawType, _perc, _percInc, _colorSplitType, _percStep) {
    // _drawType = "Squigles" //debug
    let c
    let percStep
    let percEnd = min(1, round((_perc + _percInc), 8))
    _perc = round(_perc, 8)
    highlightTypeTracker = 1
    let slashLengthSpread
    let strokeSizePercStepModifier = _percStep / 0.02

    switch (featureText_humanDrawErrorFactor) {
      case "Skilled":
        slashLengthSpread = 0.1
        break;
      case "Amateur":
        slashLengthSpread = 0.25
        break;
      case "Wild":
        slashLengthSpread = 0.4
        break;
      default:
        slashLengthSpread = 0
        break;
    }


    let cSize = min(0.0015 * this.qubeOriginalScaleArea, 0.005 * sqrt(canvasArea))
    cSize = this.faceStrokeSize * (defaultPercStepFactor * 50)
    cSize = cSize * map(defaultPercStepFactor, 0.2, 0.1, 0.2, 0.8, true) //* (featureText_chunky ? 0.3 : 1) 
    let noiseFrequency
    let noiseAmp
    let density
    if (featureText_drawStyle == "Squiggles") {
      noiseFrequency = 30
      noiseAmp = 1.85
      density = 0.15
    } else if (featureText_drawStyle == "Human") {

      switch (featureText_humanDrawErrorFactor) {
        case "Skilled":
          noiseFrequency = 3
          noiseAmp = 0.35
          density = 0.55
          break;
        case "Amateur":
          noiseFrequency = 3
          noiseAmp = 0.35
          density = 0.85
          break;
        case "Wild":
          noiseFrequency = 20
          noiseAmp = 0.95
          density = 0.65
          break;
      }
    } else {
      noiseFrequency = 1
      noiseAmp = 0.35
      density = 0.95
    }

    if (_drawType == "Crayon") {
      for (let perc = _perc; perc < percEnd; perc += 0.02) {
        let endVector = p5.Vector.lerp(v2, v3, perc)
        let doff = random(1000)
        for (let perc2 = 0; perc2 <= map(noise(doff), 0, 1, 0.95, 1.05); perc2 += random(0.01, 0.02)) {
          let plotPoint = p5.Vector.lerp(v1, endVector, perc2)
          push();
          let alpha = map(perc2, 0, 1, (standardAlpha / 2), standardAlpha)
          stroke(_color.h, _color.s, _color.b, alpha);
          noFill();
          let sw = map(v1.dist(v3), 0, canvasMinSize * 0.5, 1, 3)
          strokeWeight(sw * canvasMinSize * .00065)
          ellipse(plotPoint.x, plotPoint.y, 0.75, 0.75)
          pop();

          doff += 0.05
        }
      }
    } else if (_drawType == "Rayscan") {

      percStep = _percStep
      let slashLength = percStep * v3.dist(v1) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread))
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))
      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {

        let startVector = v2
        let endVector = p5.Vector.lerp(v1, v3, perc)

        let adjustedPerc = map(perc - flipPlace, 0, 1 - flipPlace, 0, 1)
        if (this.doWeFlip && perc >= flipPlace) {
          startVector = v3

          let flipVectorStart = v2
          let flipVectorEnd = p5.Vector.lerp(v1, v3, flipPlace)
          endVector = p5.Vector.lerp(flipVectorStart, flipVectorEnd, adjustedPerc)
        }

        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor //* (4/3)
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor //* (4/3)
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * 1.5 * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)
        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)
          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }
        let h = hue(c)
        let s = saturation(c)
        let b = brightness(c)
        //  c = color(h,s * random(0.2,1),b * random(0.2,1))
        if (featureText_drawStyle == "Human") {
          customLine(qubesBuffer, startVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, startVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
          }
        } else if (featureText_drawStyle == "Beta") {
          let c = color(_colors[0])
          let alpha = 35
          c.setAlpha(alpha * 4)
          let sc = color(_colors[0])
          sc.setAlpha(alpha * 0.5)

          let size = sqrt(this.faceArea) * percStep

          qubesBuffer.push()

          // qubesBuffer.strokeCap(SQUARE);
          qubesBuffer.strokeWeight(this.faceStrokeSize)
          qubesBuffer.strokeWeight(size)
          qubesBuffer.fill(c)
          qubesBuffer.stroke(c)
          qubesBuffer.line(v2.x, v2.y, endVector.x, endVector.y)
          qubesBuffer.pop()

        } else if (featureText_drawStyle == "Slashes") {
          customLinebyCrosses(qubesBuffer, startVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, startVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 4)

          customLinebySquiggles(qubesBuffer, startVector, endVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
        } else {

          //  let c = color(_color)
          c.setAlpha(alpha * 4)
          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, endVector.x, endVector.y)
          qubesBuffer.pop()
        }

        let highlightStartVector = startVector
        let highlightEndVector = p5.Vector.lerp(v1, v3, min(1, perc + percStep))

        let offsetLength = this.faceStrokeSize * strokeSizePercStepModifier
        let lineHeading = (p5.Vector.sub(highlightStartVector, highlightEndVector).heading()) - (abs((p5.Vector.sub(highlightStartVector, highlightEndVector).heading())) > (PI / 2) ? PI : 0)
        let startOffsetAngle = PI / 2
        let endOffsetAngle = PI / 2
        let highlightOffsetFromStartVector = p5.Vector.fromAngle(lineHeading + startOffsetAngle, 0)
        let highlightOffsetFromEndVector = p5.Vector.fromAngle(lineHeading + endOffsetAngle, offsetLength)
        let startDrawVector = p5.Vector.add(highlightStartVector, highlightOffsetFromStartVector)
        let endDrawVector = p5.Vector.add(highlightEndVector, highlightOffsetFromEndVector)

        c.setAlpha(alpha * 4)
        let highlightColorToUse = featureText_highlightType == "Random" ? random([color(highlightColor), c]) : featureText_highlightType == "Palette" ? color(highlightColor) : c
        highlightColorToUse.setAlpha(alpha * 4)

        if (highlightTypeTracker == 1) {
          this.showHighlights(highlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250, this.faceStrokeSize * strokeSizePercStepModifier)
        } else {
          this.showHighlights(lowlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 75, this.faceStrokeSize * strokeSizePercStepModifier)
        }
        highlightTypeTracker *= -1

        this.lastPercDrawn = perc
      }

    } else if (_drawType == "Starburst") {

      percStep = _percStep
      let loopCt = 0
      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {
        loopCt++
        //start in the middle (between v1 and v3) and draw two lines, one that ends between v1,v2 and another that ends between v3,v2

        let endVector1 = p5.Vector.lerp(v1, v2, perc)
        let endVector2 = p5.Vector.lerp(v3, v2, perc)
        let startVector1 = p5.Vector.lerp(endVector1, p5.Vector.lerp(v1, v3, 0.5), 0.95)
        let startVector2 = p5.Vector.lerp(endVector2, p5.Vector.lerp(v1, v3, 0.5), 0.95)
        let doff = random(1000)
        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)

        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)

          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }

        if (featureText_drawStyle == "Human") {


          customLine(qubesBuffer, startVector1, endVector1, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, startVector1, endVector1, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
          }
          if (perc < 1) {
            customLine(qubesBuffer, startVector2, endVector2, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
            if (showFaceDots == 1) {
              customLinebyCircles(qubesBuffer, startVector2, endVector2, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
            }
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 4)

          customLinebySquiggles(qubesBuffer, startVector1, endVector1, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          if (perc < 1) {
            customLinebySquiggles(qubesBuffer, startVector2, endVector2, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          }
        } else {
          //  let c = color(_color)
          c.setAlpha(standardAlpha * 2)

          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector1.x, startVector1.y, endVector1.x, endVector1.y)
          if (perc < 1) {
            qubesBuffer.line(startVector2.x, startVector2.y, endVector2.x, endVector2.y)
          }
          qubesBuffer.pop()
        }
        this.lastPercDrawn = perc
      }
    } else if (_drawType == "Concentric Angles") {
      percStep = _percStep
      let minimumSlashLengthbyCanvas = canvasMinSize * 0.005
      let slashLength = max(percStep * v1.dist(p5.Vector.lerp(v1, v3, 0.5)) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread)), minimumSlashLengthbyCanvas)
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw preloop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep, percEnd)
      }

      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {
        if (frameCount == debugFrame && printDebugs == 1) {
          console.log(debugLineCt + " customFaceDraw loop 1 (" + frameCount + "): " + random().toFixed(2), perc, percStep, percEnd)
        }
        let startVector = p5.Vector.lerp(v1, p5.Vector.lerp(v1, v3, 0.5), perc)
        let midVector = p5.Vector.lerp(v2, p5.Vector.lerp(v1, v3, 0.5), perc)
        let endVector = p5.Vector.lerp(v3, p5.Vector.lerp(v1, v3, 0.5), perc)

        let adjustedPerc = perc
        if (this.doWeFlip && perc >= flipPlace) {
          adjustedPerc = map(perc - flipPlace, 0, 1 - flipPlace, 0, 1)

          let flipVectorStart = p5.Vector.lerp(v1, p5.Vector.lerp(v1, v3, 0.5), flipPlace)
          let flipVectorMid = p5.Vector.lerp(v2, p5.Vector.lerp(v1, v3, 0.5), flipPlace)
          let flipVectorEnd = p5.Vector.lerp(v3, p5.Vector.lerp(v1, v3, 0.5), flipPlace)

          startVector = p5.Vector.lerp(flipVectorStart, flipVectorMid, adjustedPerc / 2)
          midVector = p5.Vector.lerp(flipVectorEnd, p5.Vector.lerp(flipVectorStart, flipVectorMid, 0.5), adjustedPerc)
          endVector = p5.Vector.lerp(flipVectorStart, flipVectorMid, 1 - adjustedPerc / 2)

        }

        //fade out then fade in
        //  let alpha = map(round(perc * 100) % fadeRate, 0, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (fadeRate * 0.5) : fadeRate, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (standardAlpha / 3) : standardAlpha, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? standardAlpha*1.5: standardAlpha * 0.25)
        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        // print("fadeType", fadeType, minAlpha, maxAlpha)
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)

        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)

          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }

        if (featureText_drawStyle == "Human") {

          // customPoly(qubesBuffer, [startVector, midVector, endVector], drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor)
          customLine(qubesBuffer, midVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          customLine(qubesBuffer, midVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, midVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
            customLinebyCircles(qubesBuffer, midVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
          }
        } else if (featureText_drawStyle == "Slashes") {
          // customPoly(qubesBuffer, [startVector, midVector, endVector], drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength)

          customLinebyCrosses(qubesBuffer, startVector, midVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          customLinebyCrosses(qubesBuffer, midVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, midVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
            customLinebyCircles(qubesBuffer, midVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 4)

          customLinebySquiggles(qubesBuffer, startVector, midVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          customLinebySquiggles(qubesBuffer, midVector, endVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
        } else if (featureText_drawStyle == "Beta") {
          let c = color(_colors[0])
          let alpha = 35
          c.setAlpha(alpha * 4)
          let sc = color(_colors[0])
          sc.setAlpha(alpha * 0.5)

          let size = sqrt(this.faceArea) * percStep

          qubesBuffer.push()

          // qubesBuffer.strokeCap(SQUARE);
          qubesBuffer.strokeWeight(this.faceStrokeSize)
          qubesBuffer.strokeWeight(size)
          qubesBuffer.fill(c)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, midVector.x, midVector.y)
          qubesBuffer.line(midVector.x, midVector.y, endVector.x, endVector.y)
          qubesBuffer.pop()

        } else {

          //  let c = color(_color)
          c.setAlpha(alpha * 2)
          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, midVector.x, midVector.y)
          qubesBuffer.line(midVector.x, midVector.y, endVector.x, endVector.y)
          qubesBuffer.pop()
        }

        let offsetLength = this.faceStrokeSize * strokeSizePercStepModifier * 0.5
        let lineHeading1 = abs(p5.Vector.sub(startVector, midVector).heading())
        let lineHeading2 = abs(p5.Vector.sub(midVector, endVector).heading())
        let midHeading = ((p5.Vector.sub(midVector, endVector).heading()) - (p5.Vector.sub(startVector, midVector).heading())) - (((p5.Vector.sub(midVector, endVector).heading()) - (p5.Vector.sub(startVector, midVector).heading())) > (PI / 2) ? PI : 0)
        let startOffsetAngle = PI / 2
        let endOffsetAngle = PI / 2
        let highlightOffsetFromStartVector = p5.Vector.fromAngle(lineHeading1 + startOffsetAngle, offsetLength)
        let highlightOffsetFromMidVector = p5.Vector.fromAngle(startVector.angleBetween(endVector) / 2 + startOffsetAngle, offsetLength)
        let highlightOffsetFromEndVector = p5.Vector.fromAngle(lineHeading2 + endOffsetAngle, offsetLength)
        let highlightStartVector = p5.Vector.add(startVector, highlightOffsetFromStartVector)
        let highlightMidVector = p5.Vector.add(midVector, highlightOffsetFromMidVector)
        let highlightEndVector = p5.Vector.add(endVector, highlightOffsetFromEndVector)

        c.setAlpha(alpha * 4)
        let highlightColorToUse = featureText_highlightType == "Random" ? random([color(highlightColor), c]) : featureText_highlightType == "Palette" ? color(highlightColor) : c
        highlightColorToUse.setAlpha(alpha * 4)

        if (highlightTypeTracker == 1) {
          this.showHighlights(highlightBuffer, highlightStartVector, highlightMidVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250)
          this.showHighlights(highlightBuffer, highlightMidVector, highlightEndVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250)
        } else {
          this.showHighlights(lowlightBuffer, highlightStartVector, highlightMidVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
          this.showHighlights(lowlightBuffer, highlightMidVector, highlightEndVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
        }
        highlightTypeTracker *= -1
        this.lastPercDrawn = perc
      }

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw post loop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep);
        debugLineCt++;
      }
    } else if (_drawType == "Concentric Triangles") {
      percStep = _percStep
      let minimumSlashLengthbyCanvas = canvasMinSize * 0.005 // 02=72, 05=46
      let slashLength = max(percStep * v1.dist(p5.Vector.lerp(v1, v3, 0.5)) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread)), minimumSlashLengthbyCanvas)
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw preloop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep, percEnd)
      }

      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {
        if (frameCount == debugFrame && printDebugs == 1) {
          console.log(debugLineCt + " customFaceDraw loop 1 (" + frameCount + "): " + random().toFixed(2), perc, percStep, percEnd)
        }
        let centerCalc = 0.5
        if (this.doWeFlip && perc >= flipPlace) {
          centerCalc = 0.8
          _colors = this.flipColors
        }
        let centerPointX = (p5.Vector.lerp(v1, p5.Vector.lerp(v2, v3, centerCalc), centerCalc).x + p5.Vector.lerp(v2, p5.Vector.lerp(v1, v3, centerCalc), centerCalc).x + p5.Vector.lerp(v3, p5.Vector.lerp(v1, v2, centerCalc), centerCalc).x) / 3
        let centerPointY = (p5.Vector.lerp(v1, p5.Vector.lerp(v2, v3, centerCalc), centerCalc).y + p5.Vector.lerp(v2, p5.Vector.lerp(v1, v3, centerCalc), centerCalc).y + p5.Vector.lerp(v3, p5.Vector.lerp(v1, v2, centerCalc), centerCalc).y) / 3
        let centerVector = createVector(centerPointX, centerPointY)
        let startVector = p5.Vector.lerp(v1, centerVector, perc)
        let midVector = p5.Vector.lerp(v2, centerVector, perc)
        let endVector = p5.Vector.lerp(v3, centerVector, perc)

        //fade out then fade in
        //  let alpha = map(round(perc * 100) % fadeRate, 0, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (fadeRate * 0.5) : fadeRate, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (standardAlpha / 3) : standardAlpha, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? standardAlpha*1.5: standardAlpha * 0.25)
        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)

        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)

          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }

        if (featureText_drawStyle == "Human") {

          // customPoly(qubesBuffer, [startVector, midVector, endVector], drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor)
          customLine(qubesBuffer, midVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          customLine(qubesBuffer, midVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          customLine(qubesBuffer, endVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, midVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
            customLinebyCircles(qubesBuffer, midVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
            customLinebyCircles(qubesBuffer, endVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
          }
        } else if (featureText_drawStyle == "Slashes") {
          // customPoly(qubesBuffer, [startVector, midVector, endVector], drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength)

          customLinebyCrosses(qubesBuffer, startVector, midVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          customLinebyCrosses(qubesBuffer, midVector, endVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          customLinebyCrosses(qubesBuffer, endVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, midVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
            customLinebyCircles(qubesBuffer, midVector, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
            customLinebyCircles(qubesBuffer, endVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 4)

          customLinebySquiggles(qubesBuffer, startVector, midVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          customLinebySquiggles(qubesBuffer, midVector, endVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          customLinebySquiggles(qubesBuffer, endVector, startVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
        } else if (featureText_drawStyle == "Beta") {
          let c = color(_colors[0])
          let alpha = 35
          c.setAlpha(alpha * 4)
          let sc = color(_colors[0])
          sc.setAlpha(alpha * 0.5)

          let size = sqrt(this.faceArea) * percStep

          qubesBuffer.push()

          // qubesBuffer.strokeCap(SQUARE);
          qubesBuffer.strokeWeight(this.faceStrokeSize)
          qubesBuffer.strokeWeight(size)
          qubesBuffer.fill(c)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, midVector.x, midVector.y)
          qubesBuffer.line(midVector.x, midVector.y, endVector.x, endVector.y)
          qubesBuffer.line(endVector.x, endVector.y, startVector.x, startVector.y)
          qubesBuffer.pop()

        } else {

          //  let c = color(_color)
          c.setAlpha(alpha * 2)
          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, midVector.x, midVector.y)
          qubesBuffer.line(midVector.x, midVector.y, endVector.x, endVector.y)
          qubesBuffer.line(endVector.x, endVector.y, startVector.x, startVector.y)
          qubesBuffer.pop()
        }

        let offsetLength = this.faceStrokeSize * strokeSizePercStepModifier * 0.5
        let lineHeading1 = abs(p5.Vector.sub(startVector, midVector).heading())
        let lineHeading2 = abs(p5.Vector.sub(midVector, endVector).heading())
        let midHeading = ((p5.Vector.sub(midVector, endVector).heading()) - (p5.Vector.sub(startVector, midVector).heading())) - (((p5.Vector.sub(midVector, endVector).heading()) - (p5.Vector.sub(startVector, midVector).heading())) > (PI / 2) ? PI : 0)
        let startOffsetAngle = PI / 2
        let endOffsetAngle = PI / 2
        let highlightOffsetFromStartVector = p5.Vector.fromAngle(lineHeading1 + startOffsetAngle, offsetLength)
        let highlightOffsetFromMidVector = p5.Vector.fromAngle(startVector.angleBetween(endVector) / 2 + startOffsetAngle, offsetLength)
        let highlightOffsetFromEndVector = p5.Vector.fromAngle(lineHeading2 + endOffsetAngle, offsetLength)
        let highlightStartVector = p5.Vector.add(startVector, highlightOffsetFromStartVector)
        let highlightMidVector = p5.Vector.add(midVector, highlightOffsetFromMidVector)
        let highlightEndVector = p5.Vector.add(endVector, highlightOffsetFromEndVector)

        c.setAlpha(alpha * 4)
        let highlightColorToUse = featureText_highlightType == "Random" ? random([color(highlightColor), c]) : featureText_highlightType == "Palette" ? color(highlightColor) : c
        highlightColorToUse.setAlpha(alpha * 4)

        if (highlightTypeTracker == 1) {
          this.showHighlights(highlightBuffer, highlightStartVector, highlightMidVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250)
          this.showHighlights(highlightBuffer, highlightMidVector, highlightEndVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250)
          this.showHighlights(highlightBuffer, highlightEndVector, highlightStartVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250)
        } else {
          this.showHighlights(lowlightBuffer, highlightStartVector, highlightMidVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
          this.showHighlights(lowlightBuffer, highlightMidVector, highlightEndVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
          this.showHighlights(lowlightBuffer, highlightEndVector, highlightStartVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
        }
        highlightTypeTracker *= -1

        this.lastPercDrawn = perc
      }

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw post loop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep);
        debugLineCt++;
      }
    } else if (_drawType == "Stripes") {
      percStep = _percStep
      let minimumSlashLengthbyCanvas = canvasMinSize * 0.005
      let slashLength = max(percStep * v1.dist(p5.Vector.lerp(v1, v3, 0.5)) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread)), minimumSlashLengthbyCanvas)
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw preloop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep, percEnd)
      }

      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {
        if (frameCount == debugFrame && printDebugs == 1) {
          console.log(debugLineCt + " customFaceDraw loop 1 (" + frameCount + "): " + random().toFixed(2), perc, percStep, percEnd)
        }
        let startVector = perc <= 0.5 ? p5.Vector.lerp(v1, v2, perc * 2) : p5.Vector.lerp(v2, v3, (perc - 0.5) * 2)
        let endVector = p5.Vector.lerp(v1, v3, perc)
        if (this.doWeFlip && perc >= flipPlace) {
          let adjustedPerc = map(perc - flipPlace, 0, 1 - flipPlace, 0, 1)

          let flipVectorStart = p5.Vector.lerp(p5.Vector.lerp(v2, v1, flipPlace), p5.Vector.lerp(v2, v3, flipPlace), abs(0 - adjustedPerc))

          if (adjustedPerc > flipPlace || adjustedPerc < (1 - flipPlace)) {
            startVector = (adjustedPerc <= 0.5 ? p5.Vector.lerp(p5.Vector.lerp(v1, v2, adjustedPerc * 2), flipVectorStart, 1) : p5.Vector.lerp(v2, v3, (adjustedPerc - 0.5) * 2))
          } else {
            startVector = flipVectorStart
          }
          startVector = (adjustedPerc <= 0.5 ? p5.Vector.lerp(v1, v2, adjustedPerc * 2) : p5.Vector.lerp(v2, v3, (adjustedPerc - 0.5) * 2))
          endVector = p5.Vector.lerp(v1, v3, adjustedPerc)
        } else {
          startVector = p5.Vector.lerp(v2, v1, perc)
          endVector = p5.Vector.lerp(v2, v3, perc)
        }

        //fade out then fade in
        //  let alpha = map(round(perc * 100) % fadeRate, 0, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (fadeRate * 0.5) : fadeRate, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? (standardAlpha / 3) : standardAlpha, round(perc * 100) % fadeRate <= (fadeRate * 0.5) ? standardAlpha*1.5: standardAlpha * 0.25)
        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)

        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)

          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }

        if (featureText_drawStyle == "Human") {

          customLine(qubesBuffer, endVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, endVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.5, this.squiggleDensity * 0.6))
          }
        } else if (featureText_drawStyle == "Slashes") {

          customLinebyCrosses(qubesBuffer, endVector, startVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, endVector, startVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 4)

          customLinebySquiggles(qubesBuffer, endVector, startVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
        } else if (featureText_drawStyle == "Beta") {
          let c = color(_colors[0])
          let alpha = 35
          c.setAlpha(alpha * 4)
          let sc = color(_colors[0])
          sc.setAlpha(alpha * 0.5)

          let size = sqrt(this.faceArea) * percStep
          size = v1.dist(v3) * percStep

          qubesBuffer.push()

          // qubesBuffer.strokeCap(SQUARE);
          qubesBuffer.strokeWeight(this.faceStrokeSize)
          qubesBuffer.strokeWeight(size)
          qubesBuffer.fill(c)
          qubesBuffer.stroke(c)
          qubesBuffer.line(startVector.x, startVector.y, endVector.x, endVector.y)
          qubesBuffer.pop()

        } else {

          //  let c = color(_color)
          c.setAlpha(alpha * 2)
          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          qubesBuffer.line(endVector.x, endVector.y, startVector.x, startVector.y)
          qubesBuffer.pop()
        }

        let highlightStartVector = startVector
        let highlightEndVector = endVector

        let offsetLength = this.faceStrokeSize * strokeSizePercStepModifier
        let lineHeading = (p5.Vector.sub(highlightStartVector, highlightEndVector).heading()) - (abs((p5.Vector.sub(highlightStartVector, highlightEndVector).heading())) > (PI / 2) ? PI : 0)
        let startOffsetAngle = PI / 2
        let endOffsetAngle = PI / 2
        let highlightOffsetFromStartVector = p5.Vector.fromAngle(lineHeading + startOffsetAngle, 0)
        let highlightOffsetFromEndVector = p5.Vector.fromAngle(lineHeading + endOffsetAngle, offsetLength)
        let startDrawVector = p5.Vector.add(highlightStartVector, highlightOffsetFromStartVector)
        let endDrawVector = p5.Vector.add(highlightEndVector, highlightOffsetFromEndVector)

        c.setAlpha(alpha * 4)
        let highlightColorToUse = featureText_highlightType == "Random" ? random([color(highlightColor), c]) : featureText_highlightType == "Palette" ? color(highlightColor) : c
        highlightColorToUse.setAlpha(alpha * 4)

        if (highlightTypeTracker == 1) {
          this.showHighlights(highlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250, this.faceStrokeSize * strokeSizePercStepModifier)
        } else {
          this.showHighlights(lowlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 75, this.faceStrokeSize * strokeSizePercStepModifier)
        }
        highlightTypeTracker *= -1

        this.lastPercDrawn = perc
      }

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw post loop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep);
        debugLineCt++;
      }
    } else if (_drawType == "Steps") {
      percStep = _percStep
      let slashLength = percStep * v3.dist(p5.Vector.lerp(v1, v2, 0.5)) * (random(0.5 - slashLengthSpread, 0.5 + slashLengthSpread))
      let slashSpacing = max(slashLength * 0.5, map(percStep, 0.02, 0.25, slashLength * 0.5, slashLength * 0.1))

      if (frameCount == debugFrame && printDebugs == 1) {
        console.log(debugLineCt + " customFaceDraw preloop (" + frameCount + "): " + random().toFixed(2), this.nextPercDrawn, percStep, percEnd);
        debugLineCt++;
      }
      for (let perc = this.nextPercDrawn; round(perc, 8) <= max(percEnd, this.nextPercDrawn); perc += percStep) {
        if (frameCount == debugFrame && printDebugs == 1) {
          console.log(debugLineCt + " customFaceDraw loop 1 (" + frameCount + "): " + random().toFixed(2), perc, percStep, percEnd);
          debugLineCt++;
        }
        let endVector = p5.Vector.lerp(v2, v3, perc)
        let plotPoint = p5.Vector.lerp(v1, v3, perc)

        if (this.doWeFlip && perc >= flipPlace) {
          let adjustedPerc = map(perc - flipPlace, 0, 1 - flipPlace, 0, 1)
          let flipVectorStart = p5.Vector.lerp(p5.Vector.lerp(v1, v3, flipPlace), p5.Vector.lerp(v2, v3, flipPlace), adjustedPerc)

          plotPoint = flipVectorStart
          endVector = p5.Vector.lerp(v1, v3, perc)
        }

        let minFadeRate, maxFadeRate, minAlpha, maxAlpha
        if (fadeType == "ramp") {
          minFadeRate = 0
          maxFadeRate = fadeRate
          minAlpha = standardAlpha * minMinAlphaFactor
          maxAlpha = standardAlpha * maxMaxAlphaFactor
        } else if (fadeType == "smooth") {
          if (round(perc * 100) % fadeRate <= (fadeRate * 0.5)) { //if within the first half of the fadeRate
            minFadeRate = 0
            maxFadeRate = fadeRate * 0.5
            minAlpha = standardAlpha * minMinAlphaFactor
            maxAlpha = standardAlpha * maxMaxAlphaFactor
          } else {
            minFadeRate = fadeRate * 0.5
            maxFadeRate = fadeRate
            minAlpha = standardAlpha * maxMaxAlphaFactor
            maxAlpha = standardAlpha * minMinAlphaFactor
          }
        }
        let alpha = map(round(perc * 100) % fadeRate, minFadeRate, maxFadeRate, minAlpha, maxAlpha) * 1.5 * (this.edgeViolation == true ? edgeViolationAlphaFactor : 1)
        if (_colors.length == 1) {
          c = color(_colors[0])
        } else {
          let colorSplitLoc = perc * 3
          let decimalValueof_colorSplitLoc = colorSplitLoc - floor(colorSplitLoc)

          switch (_colorSplitType) {
            case "lerp":
              colorMode(RGB, 255)
              let c2 = lerpColor(color(_colors[0]), color(_colors[1]), decimalValueof_colorSplitLoc)
              colorMode(HSB, 255)
              let c3 = color("#0000")
              c3.setRed(red(c2))
              c3.setGreen(green(c2))
              c3.setBlue(blue(c2))
              c = c3
              break;
            case "invert50":
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[perc > 0.5 ? 1 : 0] : _colors[perc > 0.5 ? 0 : 1]) // invert after half
              break;
            case "mixer":
              c = color(random(chosenColors.colors))
              break;
            default:
              c = color(decimalValueof_colorSplitLoc <= 0.5 ? _colors[0] : _colors[1])
          }
        }
        if (featureText_drawStyle == "Human") {
          c.setAlpha(alpha * 2)
          customLine(qubesBuffer, plotPoint, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * strokeSizePercStepModifier, outputWidth, outputHeight, "hash", humanDrawErrorFactor, incOverlapRate, true, colorEffect)
          if (showFaceDots == 1) {
            // print(cSize, this.faceStrokeSize, strokeSizePercStepModifier)
            customLinebyCircles(qubesBuffer, plotPoint, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.4, this.squiggleDensity * 0.6))
          }
        } else if (featureText_drawStyle == "Slashes") {
          customLinebyCrosses(qubesBuffer, plotPoint, endVector, drawConsistency, customDrawSegmentLimits, c, alpha * 1.5, this.faceStrokeSize * 1, outputWidth, outputHeight, "hash", humanDrawErrorFactor, slashSpacing, slashLength * 0.5, colorEffect)
          if (showFaceDots == 1) {
            customLinebyCircles(qubesBuffer, plotPoint, endVector, chosenColors.colors, alpha, this.faceStrokeSize, canvasMinSize, cSize, noiseFrequency, noiseAmp, density, colorEffect, this.squiggleSegmentCount, random(this.squiggleDensity * 0.3, this.squiggleDensity * 0.5))
          }
        } else if (featureText_drawStyle == "Squiggles") {
          c.setAlpha(alpha * 2)

          if (frameCount == debugFrame && printDebugs == 1) {
            console.log(debugLineCt + " customFaceDraw step pre-squiggles (" + frameCount + "): " + random().toFixed(2));
            debugLineCt++;
          }
          customLinebySquiggles(qubesBuffer, plotPoint, endVector, c, alpha, this.faceStrokeSize, canvasMinSize, this.squiggleSegmentCount, squiggleXDirection, squiggleYDirection, this.squiggleDensity, colorEffect)
          if (frameCount == debugFrame && printDebugs == 1) {
            console.log(debugLineCt + " customFaceDraw step post-squiggles (" + frameCount + "): " + random().toFixed(2));
            debugLineCt++;
          }
        } else if (featureText_drawStyle == "Beta") {
          let c = color(_colors[0])
          let alpha = 35
          c.setAlpha(alpha * 4)
          let sc = color(_colors[0])
          sc.setAlpha(alpha * 0.5)

          let size = sqrt(this.faceArea) * percStep

          qubesBuffer.push()
          // qubesBuffer.strokeCap(SQUARE);
          qubesBuffer.strokeWeight(this.faceStrokeSize)
          qubesBuffer.strokeWeight(size)
          qubesBuffer.fill(c)
          qubesBuffer.stroke(c)
          qubesBuffer.line(plotPoint.x, plotPoint.y, endVector.x, endVector.y)
          qubesBuffer.pop()
        } else {

          c.setAlpha(alpha * 2)
          qubesBuffer.push()
          qubesBuffer.noFill()
          qubesBuffer.strokeWeight(this.faceStrokeSize * strokeSizePercStepModifier)
          qubesBuffer.stroke(c)
          // qubesBuffer.noStroke()
          qubesBuffer.line(plotPoint.x, plotPoint.y, endVector.x, endVector.y)
          //  customLinebyCrosses(qubesBuffer, plotPoint, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * 1, outputWidth, outputHeight, "perfect", humanDrawErrorFactor, spaceBetweenPercStep/3)
          qubesBuffer.pop()
        }
        let highlightStartVector = plotPoint
        let highlightEndVector = endVector

        let offsetLength = this.faceStrokeSize * strokeSizePercStepModifier * 1.5
        let lineHeading = (p5.Vector.sub(highlightStartVector, highlightEndVector).heading()) - (abs((p5.Vector.sub(highlightStartVector, highlightEndVector).heading())) > (PI / 2) ? PI : 0)
        let startOffsetAngle = PI / 2
        let endOffsetAngle = PI / 2
        let highlightOffsetFromStartVector = p5.Vector.fromAngle(lineHeading + startOffsetAngle, offsetLength)
        let highlightOffsetFromEndVector = p5.Vector.fromAngle(lineHeading + endOffsetAngle, offsetLength)
        let startDrawVector = p5.Vector.add(highlightStartVector, highlightOffsetFromStartVector)
        let endDrawVector = p5.Vector.add(highlightEndVector, highlightOffsetFromEndVector)

        c.setAlpha(alpha * 4)
        let highlightColorToUse = featureText_highlightType == "Random" ? random([color(highlightColor), c]) : featureText_highlightType == "Palette" ? color(highlightColor) : c
        highlightColorToUse.setAlpha(alpha * 4)

        if (this.edgeViolation == false) {
          if (highlightTypeTracker == 1) {
            this.showHighlights(highlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 250, this.faceStrokeSize * strokeSizePercStepModifier)
          } else {
            this.showHighlights(lowlightBuffer, startDrawVector, endDrawVector, highlightColorToUse, this.faceStrokeSize, highlightAlpha, 50)
          }
          highlightTypeTracker *= -1
        }

        this.lastPercDrawn = perc

      }
    }

    this.nextPercDrawn = min(1, this.lastPercDrawn + percStep)
  }

  showHighlights(gb, _v1, _v2, _color, _strokeSize, _alpha, _brightness) {
    // let h,s,b
    let h = hue(_color)
    let s = map(saturation(_color), 0, 255, 0, 255)
    let b = map(brightness(_color), 0, 255, 0, 255)
    let c = color(h, s, b, _alpha)

    // print(startDrawVector, endDrawVector)

    gb.push()
    gb.noFill()
    gb.strokeWeight(_strokeSize * 1)
    gb.stroke(c)
    gb.line(_v1.x, _v1.y, _v2.x, _v2.y)
    //  customLinebyCrosses(qubesBuffer, plotPoint, endVector, drawConsistency, customDrawSegmentLimits, c, alpha, this.faceStrokeSize * 1, outputWidth, outputHeight, "perfect", humanDrawErrorFactor, spaceBetweenPercStep/3)
    gb.pop()
  }

}

function exportCanvas(bufferWidth, bufferHeight) {

  if (bufferWidth === undefined) {
    bufferWidth = outputWidth;
  }
  if (bufferHeight === undefined) {
    bufferHeight = outputHeight;
  }

  saveBuffer = createGraphics(bufferWidth, bufferHeight);
  saveBuffer.pixelDensity(1);
  saveBuffer.colorMode(HSB, 255);

  // if (switchBackground == 1) {
  saveBuffer.image(bgBuffer, 0, 0)
  // }
  if (switchShowGrain == 1 && switchBackground == 1) {
    saveBuffer.push()
    saveBuffer.tint(255, 10)
    saveBuffer.image(grainBuffer, 0, 0)
    saveBuffer.pop()
  }

  if (switchFrame == 1) {
    saveBuffer.image(frameBuffer, 0, 0)
  }

  saveBuffer.image(mainBuffer, 0, 0)

  saveBuffer.image(qubesBuffer, 0, 0)
  if (switchShowHighlights == 1) {
    saveBuffer.push()
    // blendMode(HARD_LIGHT)
    saveBuffer.image(lowlightBuffer, 0, 0)
    // blendMode(BLEND)
    saveBuffer.image(highlightBuffer, 0, 0)
    saveBuffer.pop()
  }

  saveBuffer.push()
  if (outlineExtensionFactor >= 1) {
    let tintFactor = map(faceCount, 1, 50, 0.75, 0.25, true)
    saveBuffer.tint(255, 255 * tintFactor)
  }
  saveBuffer.image(outlinesBuffer, 0, 0)
  saveBuffer.pop()

  save(saveBuffer, title + "_" + fxhash + "_" + bufferWidth.toFixed(0) + "x" + bufferHeight.toFixed(0) + ".png")

}

//I decided against using params for this project.
function handleFXParams() {
  // define parameters exposed to collectors
  $fx.params([
    {
      id: "fparam_ignoreSeed",
      name: "Ignore Unique Wallet Seed",
      type: "boolean",
      default: true
    },
    {
      id: "fparam_seed",
      name: "Unique Wallet Seed",
      type: "number",
      options: {
        min: 0,
        max: 49,
        step: 1,
      },
    }

    // {
    //   id: "fparam_drawStyle",
    //   name: "Draw Style",
    //   type: "select",
    //   default: "Human",
    //   options: {
    //     options: ["Perfect", "Human", "Slashes", "Squiggles", "Beta"],
    //   },
    // },
    // {
    //   id: "fparam_plopType",
    //   name: "Placement",
    //   type: "select",
    //   default: "Grid",
    //   options: {
    //     options: ["Perfect", "Grid", "Circle", "Organic", "Spiral"],
    //   },
    // },
    // {
    //   id: "fparam_outlines",
    //   name: "Outlines",
    //   type: "select",
    //   default: "All",
    //   options: {
    //     options: ["None", "All", "Some"],
    //   },
    // },
    // {
    //   id: "fparam_outlineStyle",
    //   name: "Outline Style",
    //   type: "select",
    //   default: "Match",
    //   options: {
    //     options: ["Match", "Perfect"],
    //   },
    // },
    // {
    //   id: "fparam_frame",
    //   name: "Frame",
    //   type: "boolean",
    //   default: "true"
    // },
    // {
    //   id: "fparam_canvasRatio",
    //   name: "Canvas Ratio",
    //   type: "select",
    //   default: "3:4",
    //   options: {
    //     options: ["3:4", "4:3", "1:1", "16:9", "18:39 (iPhone 11+)", "3:1 (Twitter Banner)"],
    //   },
    // },
  ])


  let fparam_seed = $fx.getParam("fparam_seed")
  let fparam_ignoreSeed = $fx.getParam("fparam_ignoreSeed")
  if(seedValue === undefined) {
    if (fparam_ignoreSeed) {
      seedValue = Math.floor(fxrand() * Math.pow(2, 32))
    }
    else {
      seedValue = Math.floor(fxrandminter() * Math.pow(2, 32) * fparam_seed)
    }
    featureText_minterMentality = fparam_ignoreSeed ? "Gutsy" : "Risk Averse"
  }
  

  // // get the value of a parameter
  // let fparam_drawStyle = $fx.getParam("fparam_drawStyle")
  // featureText_drawStyle = fparam_drawStyle
  // print("featureText_drawStyle: " + featureText_drawStyle)

  // switch (fparam_drawStyle) {
  //   case "Perfect":
  //     f_drawStyle = 0
  //     break;
  //   case "Human":
  //     f_drawStyle = 1
  //     break;
  //   case "Slashes":
  //     f_drawStyle = 2
  //     break;
  //   case "Squiggles":
  //     f_drawStyle = 3
  //     break;
  //   case "Beta":
  //     f_drawStyle = 4
  //     break;
  // }


  // let fparam_canvasRatio = $fx.getParam("fparam_canvasRatio")
  // featureText_canvasRatio = fparam_canvasRatio

  // switch (featureText_canvasRatio) {
  //   case "18:39 (iPhone 11+)":
  //     f_canvasRatio = 0
  //     canvasRatio = 18 / 39
  //     break;
  //   case "16:9":
  //     f_canvasRatio = 1
  //     canvasRatio = 16 / 9
  //     break;
  //   case "1:1":
  //     f_canvasRatio = 2
  //     canvasRatio = 1 / 1
  //     break;
  //   case "3:4":
  //     f_canvasRatio = 3
  //     canvasRatio = 3 / 4
  //     break;
  //   case "4:3":
  //     f_canvasRatio = 4
  //     canvasRatio = 4 / 3
  //     break;
  //   case "3:1 (Twitter Banner)":
  //     f_canvasRatio = 5
  //     canvasRatio = 3 / 1
  //     break;
  // }


  // let fparam_frame = $fx.getParam("fparam_frame")
  // featureText_frame = fparam_frame ? "Framed" : "Unframed"

  // switch (featureText_frame) {
  //   case "Unframed":
  //     f_frame = 0
  //     break;
  //   case "Framed":
  //     f_frame = 1
  //     break;
  // }

}