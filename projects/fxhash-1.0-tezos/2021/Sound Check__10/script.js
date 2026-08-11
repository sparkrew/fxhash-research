// Sound Check
// Idlebit, 2021
// NFT License 2.0
let viewer = "000000000000000000000000000000000000".split('')
const b58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
for (var i = 0; i < viewer.length; i++) {
  viewer[i] = b58[Math.floor(fxrand() * 58)]
}

let sampleRate = 44100
var audioCtx = new (window.AudioContext || window.webkitAudioContext)({
  sampleRate: sampleRate,
});
let audioScale = 2.4
let samplesPerNote = 10000

let loopPointCrossFade = 100
let bufferSecondsList = [
  (samplesPerNote * 16 + loopPointCrossFade) / sampleRate,
  (samplesPerNote * 16 + loopPointCrossFade) / sampleRate,
  (samplesPerNote * 16 + loopPointCrossFade) / sampleRate,
]

let buffersList = []
for (var i = 0; i < bufferSecondsList.length; i++) {
  buffersList.push([
    audioCtx.createBuffer(2, audioCtx.sampleRate * bufferSecondsList[i], audioCtx.sampleRate),
    audioCtx.createBuffer(2, audioCtx.sampleRate * bufferSecondsList[i], audioCtx.sampleRate)
  ])
}
  
let bufferIList = [0,0,0]
var sourcesList = [[null,null],[null,null],[null,null]]
var gainsList = [[null,null],[null,null],[null,null]]
var compressor = audioCtx.createDynamicsCompressor();
for (var i = 0; i < buffersList.length; i++) {
  for (var j = 0; j < buffersList[i].length; j++) {
    gainsList[i][j] = audioCtx.createGain()
    if (j === bufferIList[i]) {
      gainsList[i][j].gain.value = 1.0
    } else {
      gainsList[i][j].gain.value = 0.0
    }
    gainsList[i][j].connect(compressor)
  }
}
let masterGain = audioCtx.createGain()
masterGain.gain.value = 1.0
compressor.connect(masterGain)
masterGain.connect(audioCtx.destination)

let analyser = audioCtx.createAnalyser()
analyser.fftSize = 2048
analyser.smoothingTimeConstant = 0.9
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
let analyser2 = audioCtx.createAnalyser()
analyser2.fftSize = 1024
analyser2.smoothingTimeConstant = 0.9
var bufferLength2 = analyser2.frequencyBinCount;
var dataArray2 = new Uint8Array(bufferLength2);
for (var i = 0; i < gainsList.length; i++) {
  for (var j = 0; j < gainsList[i].length; j++) {
    gainsList[i][j].connect(analyser)
    gainsList[i][j].connect(analyser2)
  }
}

var loopStartTimeMillisList = [null, null, null];
let soundStarted = false
let muted = 0
var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isIOS
var isFirefox = /Firefox/i.test(navigator.userAgent)

function startSound() {
  if (isIOS) {
    try{
      // Adapted from https://github.com/swevans/unmute (MIT 2020)
      const silentAudioFile = createSilentAudioFile(audioCtx.sampleRate)
      createHtmlAudio(silentAudioFile);
    }catch(e){
    }
  }

  audioCtx.resume()
  var promises = []
  for (var i = 0; i < buffersList.length; i++) {
    promises.push(updateBuffer(i, isMobile ? 2.0 : 0.2))
  }
  Promise.all(promises).then(_ => {
    for (var i = 0; i < buffersList.length; i++) {
      loopStartTimeMillisList[i] = Date.now()
      sourcesList[i][1].start(0)
    }
    soundStarted = true  
  })
}

function toggleMute() {
  if (!loopStartTimeMillisList[0] || Date.now() - loopStartTimeMillisList[0] < 1000) {
    return
  }
  var currTime = audioCtx.currentTime;
  if (!muted) {
    muted = 0.05
    for (var i = 0; i < shouldUpdateBufferList.length; i++) {
      shouldUpdateBufferList[i] = false
      gainsList[i][bufferIList[i]].gain.linearRampToValueAtTime(1, currTime);
      gainsList[i][bufferIList[i]].gain.linearRampToValueAtTime(0, currTime + 0.2);
    }
  } else {
    muted = 0
    for (var i = 0; i < gainsList.length; i++) {
      gainsList[i][bufferIList[i]].gain.linearRampToValueAtTime(0, currTime);
      gainsList[i][bufferIList[i]].gain.linearRampToValueAtTime(1, currTime + 0.2);
    }
  }
}

function createSilentAudioFile (sampleRate) {
  const arrayBuffer = new ArrayBuffer(10)
  const dataView = new DataView(arrayBuffer)

  dataView.setUint32(0, sampleRate, true)
  dataView.setUint32(4, sampleRate, true)
  dataView.setUint16(8, 1, true)

  const missingCharacters =
    window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
      .slice(0, 13)

  return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${missingCharacters}AgAZGF0YQcAAACAgICAgICAAAA=`
}

function createHtmlAudio(silentAudioFile) {
  audio = document.createElement('audio')

  audio.setAttribute('x-webkit-airplay', 'deny')
  audio.preload = 'auto'
  audio.loop = true
  audio.src = silentAudioFile
  audio.load()

  audio.play().then(
    () => {
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
      audio = null
    },
    () => {
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
      audio = null
    }
  )
}

let idxsList = [
  [Math.floor(fxrand()*10),Math.floor(fxrand()*10),Math.floor(fxrand()*10)],
  [Math.floor(fxrand()*10),Math.floor(fxrand()*10),Math.floor(fxrand()*10)],
  [Math.floor(fxrand()*10),Math.floor(fxrand()*10),Math.floor(fxrand()*10)]
]

let repeatDelays = [700, 1100, 2300, 4100, 5500, 8800, 12000, 15000, 25000, 32000]
let repeatFeedbacks = [0.58, 0.62, 0.65, 0.72, 0.75, 0.81, 0.84, 0.87, 0.92, 0.97]
let smoothThreshes = [1.0, 1.0, 1.0, 0.04, 0.02, 0.015, 0.013, 0.011, 0.009, 0.008]

let prevIdxsList = []
for (var i = 0; i < idxsList.length; i++) {
  prevIdxsList[i] = idxsList[i].slice()
}

let fff = [6,4,3,2,1.5,1,0.75,0.5,0.33,0.25,0.12]
let aaa = [
  fff[Math.floor(fxrand() * 11)],
  fff[Math.floor(fxrand() * 11)],
  fff[Math.floor(fxrand() * 11)]
]

async function updateBuffer(buffersListIdx, crossFade=0.2) {
  var t = Date.now()
  var repeatDelay = repeatDelays[idxsList[buffersListIdx][0]]
  var repeatFeedback = repeatFeedbacks[idxsList[buffersListIdx][1]]
  var smoothThresh = smoothThreshes[idxsList[buffersListIdx][2]]

  var myBuff = buffersList[buffersListIdx][(bufferIList[buffersListIdx] + 1) % buffersList[buffersListIdx].length]

  var period = 180
  var targetPeriod = period

  var phaseOffest = 0
  var attackI = 0

  if (toy.boxes[buffersListIdx].row < 3) {
    for (var channel = 0; channel < myBuff.numberOfChannels; channel++) {
      var nowBuffering = myBuff.getChannelData(channel);
      phaseOffset = 0
      var viewerCharI = 0
      for (var i = 0; i < myBuff.length; i += 1) {
        if (i % (buffersListIdx === 0 ? samplesPerNote * aaa[0] : (buffersListIdx === 1 ? samplesPerNote * aaa[1]: samplesPerNote * aaa[2])) === 0) {
          var x = b58.indexOf(viewer[viewerCharI + toy.boxes[buffersListIdx].col])
          if (x >= 0) {
            targetPeriod = (25 + 5 * (58 - x)) * 1.333
            if (toy.boxes[buffersListIdx].row === 2) {
              targetPeriod *= 1.666
            } else if (toy.boxes[buffersListIdx].row === 0) {
              targetPeriod *= 0.666
            }
          }
          viewerCharI = (viewerCharI + 1) % viewer.length
          if (targetPeriod != period) {
            attackI = 0
          }
        }

        let m = 0.1 - Math.max(0, 100 - period) * 0.0009
        var y = audioScale * m * Math.sin(2 * Math.PI / period * (i - phaseOffset))
        if (period != targetPeriod && y * Math.sin(2 * Math.PI / period * (i - phaseOffset + 1)) < 0) {
          var dur = 13 * period
          for (var j = 0; j < dur; j++) {
            nowBuffering[i - j] *= j / dur
          }
          y = 0
          period = targetPeriod
          phaseOffset = i + 1
        }
        var dur = 6 * period
        if (attackI++ < dur) {
          y *= attackI / dur
        }
        nowBuffering[i] = y

        var dur = 1000
        if (i < dur) {
          nowBuffering[i] *= i / dur
        }
        if (i > nowBuffering.length - dur) {
          nowBuffering[i] *= -(i - nowBuffering.length) / dur
        }

        if (i % 100000 == 0 && Date.now() - t > 10) {
          await new Promise(window.requestAnimationFrame)
          t = Date.now()
        }
      }

      for (var i = 0; i < myBuff.length; i += 1) {
        var ease = Math.min(1.0, i / 5000)
        var signal = nowBuffering[(nowBuffering.length + i - repeatDelay) % nowBuffering.length]
        nowBuffering[i] += ease * repeatFeedback * signal
      }

      for (var i = 0; i < myBuff.length; i += 1) {
        while (Math.abs(nowBuffering[i] - nowBuffering[(nowBuffering.length + i - 1) % nowBuffering.length]) > smoothThresh * audioScale) {
          nowBuffering[i] = (nowBuffering[i] + nowBuffering[(nowBuffering.length + i - 1) % nowBuffering.length]) / 2
        }

        var dur = loopPointCrossFade
        if (i < dur) {
          nowBuffering[i] *= i / dur
        }
        if (i >= nowBuffering.length - dur) {
          nowBuffering[i - (nowBuffering.length - dur)] += ((dur - (i - (nowBuffering.length - dur))) / dur) * nowBuffering[i]
        }

        if (i % 100000 == 0 && Date.now() - t > 10) {
          await new Promise(window.requestAnimationFrame)
          t = Date.now()
        }
      }
    }
  } else {
    for (var channel = 0; channel < myBuff.numberOfChannels; channel++) {
      var nowBuffering = myBuff.getChannelData(channel);
      for (var i = 0; i < myBuff.length; i += 1) {
        nowBuffering[i] = 0
      }
    }
  }

  var currTime = audioCtx.currentTime;
  for (var i = 0; i < buffersList[buffersListIdx].length; i++) {
    if (i == bufferIList[buffersListIdx]) {
      if (!muted) {
        gainsList[buffersListIdx][i].gain.linearRampToValueAtTime(1, currTime);
      }
      gainsList[buffersListIdx][i].gain.linearRampToValueAtTime(0, currTime + crossFade);
    } else {
      var offsetSeconds = 0.0
      if (sourcesList[buffersListIdx][i]) {
        try {
          sourcesList[buffersListIdx][i].stop()
        } catch(error) {
          // no-op: happens if near end of loop.
        }
        sourcesList[buffersListIdx][i].disconnect
      }
      if (soundStarted) {
        offsetSeconds = ((Date.now() - loopStartTimeMillisList[buffersListIdx]) / 1000) % (bufferSecondsList[buffersListIdx] - loopPointCrossFade / sampleRate)
        offsetSeconds = Math.max(0, offsetSeconds)
      }
      sourcesList[buffersListIdx][i] = audioCtx.createBufferSource()  
      sourcesList[buffersListIdx][i].loop = true
      sourcesList[buffersListIdx][i].loopEnd = bufferSecondsList[buffersListIdx] - loopPointCrossFade / sampleRate
      sourcesList[buffersListIdx][i].buffer = buffersList[buffersListIdx][i]
      sourcesList[buffersListIdx][i].connect(gainsList[buffersListIdx][i])
      if (soundStarted) {
        loopStartTimeMillisList[buffersListIdx] = Date.now() - Math.floor(offsetSeconds * 1000)
        sourcesList[buffersListIdx][i].start(0, offsetSeconds)
      }
      
      if (!muted) {
        gainsList[buffersListIdx][i].gain.linearRampToValueAtTime(0, currTime);
        gainsList[buffersListIdx][i].gain.linearRampToValueAtTime(1, currTime + crossFade);
      }
    }
  }
  bufferIList[buffersListIdx] = (bufferIList[buffersListIdx] + 1) % buffersList[bufferIList[buffersListIdx]].length
  setTimeout(unbusyBuffer, 1000 * crossFade, buffersListIdx)
}

let bufferBusyList = [true, true, true]
let shouldUpdateBufferList = [false, false, false]

function unbusyBuffer(buffersListIdx) {
  if (shouldUpdateBufferList[buffersListIdx]) {
    shouldUpdateBufferList[buffersListIdx] = false
    updateBuffer(buffersListIdx)
  } else {
    bufferBusyList[buffersListIdx] = false
  }
}

function tryUpdateBuffer(buffersListIdx, crossFade=0.2) {
  if (bufferBusyList[buffersListIdx]) {
    shouldUpdateBufferList[buffersListIdx] = true
  } else {
    bufferBusyList[buffersListIdx] = true
    shouldUpdateBufferList[buffersListIdx] = false
    updateBuffer(buffersListIdx, crossFade)
  }
}

class Toy {
  constructor() {
    this.activeBoard = 2
    this.buttonRowsList = [
      [
        new ButtonRow(0,0),
        new ButtonRow(0,1),
        new ButtonRow(0,2),
      ],
      [
        new ButtonRow(1,0),
        new ButtonRow(1,1),
        new ButtonRow(1,2),
      ],
      [
        new ButtonRow(2,0),
        new ButtonRow(2,1),
        new ButtonRow(2,2),
      ]
    ]
    this.boxes = [
      new Box(0, 8, [1,2,3][Math.floor(fxrand() * 3)], 4),
      new Box(1, 16, [1,2][Math.floor(fxrand() * 2)], 4),
      new Box(2, 32, [1,2,3][Math.floor(fxrand() * 3)], 4)
    ]
    this.refresh()
  }

  refresh() {
    this.xOffset = width * 0.25
    this.yOffset = width * 0.60
    this.cRadius = width * 0.025
    this.cInterval = width * 0.5 / 9
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].refresh()
    }
  }

  handlePointer(x, y, pressed, newPress, touchId=null) {
    if (newPress && (muted || x < 0.2 * width || x > 0.8 * width || y < 0.2 * width || y > 0.8 * width)) {
      toggleMute()
    }

    for (var i = 0; i < this.buttonRowsList[this.activeBoard].length; i++) {
      this.buttonRowsList[this.activeBoard][i].handlePointer(x, y, pressed, this.xOffset, this.yOffset + i * this.cInterval, this.cRadius, this.cInterval)
    }
  }

  render() {    
    strokeWeight(Math.max(1, width / 764))
    for (var i = 0; i < this.buttonRowsList[this.activeBoard].length; i++) {
      this.buttonRowsList[this.activeBoard][i].render(this.xOffset, this.yOffset + i * this.cInterval, this.cRadius, this.cInterval)
    }    
  }

  setButtons(vals, lastPressed=false, fadeSeconds=0.0) {
    if (fadeSeconds > 0.0) {
      for (var i = 0; i < this.buttonRowsList[this.activeBoard].length; i++) {
        for (var j = 0; j < this.buttonRowsList[this.activeBoard][i].buttons.length; j++) {
          let b = this.buttonRowsList[this.activeBoard][i].buttons[j]
          if (b.on && j > vals[i]) {
            b.fadingOut = true
            b.fadeSeconds = fadeSeconds
          } else if (!b.on && j <= vals[i]) {
            b.fadingIn = true
            b.fade = 0.0
            b.fadeSeconds = fadeSeconds
          }
        }
      }
    }
    for (var i = 0; i < this.buttonRowsList[this.activeBoard].length; i++) {
      let v = vals[i]
      this.buttonRowsList[this.activeBoard][i].value = v
      for (var j = 0; j < this.buttonRowsList[this.activeBoard][i].buttons.length; j++) {
        this.buttonRowsList[this.activeBoard][i].buttons[j].on = j <= v
        if (lastPressed) {
          this.buttonRowsList[this.activeBoard][i].buttons[j].pressed = j == v
        }
        idxsList[this.activeBoard][i] = v
      }
    }
  }
}

class Box {
  constructor(boxIdx, boxSize, row, col) {
    this.boxIdx = boxIdx
    this.boxSize = boxSize
    this.row = row
    this.col = col
    this.refresh()
  }

  refresh() {
    this.width = this.boxSize * 0.0152 * width
    this.height = 0.032 * width
    this.touchId = null
    this.isDragging = false
    this.isHovering = false
    this.touchOffsetX = 0
    this.touchOffsetY = 0
  }
}

class ButtonRow {
  constructor(boardIdx, rowNum) {
    this.boardIdx = boardIdx
    this.rowNum = rowNum
    this.value = idxsList[this.boardIdx][this.rowNum]
    let c = colorsList[boardIdx][rowNum]
    this.buttons = []
    for (var i = 0; i < 10; i++) {
      this.buttons.push(new CButton(rowNum, i, c[0], c[1], c[2], i <= this.value))
    }
    this.containsPointer = false
    this.pressed = false
  }

  handlePointer(x, y, pressed, firstCX, firstCY, cRadius, cInterval) {
    if (y < firstCY - cInterval / 2 || y >= firstCY + cInterval / 2 || x < firstCX - cInterval / 2 || x >= firstCX + 9.5 * cInterval) {
      this.containsPointer = false
    } else {
      this.containsPointer = true
      if (pressed) {
        this.pressed = true
        for (var i = 0; i < this.buttons.length; i++) {
          if (this.buttons[i].handlePointer(x, firstCX + i * cInterval, cInterval)) {
            for (var i2 = 0; i2 < this.buttons.length; i2++) {
              if (i2 <= i) {
                this.buttons[i2].on = true
              } else {
                this.buttons[i2].on = false
              }
            }
            this.value = i
            idxsList[toy.activeBoard][this.rowNum] = this.value
            break
          }
        }
      }
    }
  }

  render(firstCX, firstCY, cRadius, cInterval) {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].render(firstCX + i * cInterval, firstCY, cRadius, this.containsPointer && !this.pressed, this.rowNum)
    }
  }
}

let powerHistories = [
  Array(10).fill(0),
  Array(10).fill(0),
  Array(10).fill(0),
  Array(10).fill(0),
  Array(10).fill(0),
  Array(10).fill(0),
  Array(10).fill(0),
]

let qq1 = (fxrand() - 0.5) * 60
let qq2 = (fxrand() - 0.5) * 60
let qq3 = (fxrand() - 0.5) * 60
let qq4 = (fxrand() - 0.5) * 60
let qq5 = (fxrand() - 0.5) * 60
let qq6 = (fxrand() - 0.5) * 60
let qq7 = (fxrand() - 0.5) * 60
let qq8 = (fxrand() - 0.5) * 60

class CButton {
  constructor(rowNum, colNum, r, g, b, on) {
    this.rowNum = rowNum
    this.colNum = colNum
    this.r = r
    this.g = g
    this.b = b
    this.a = 255
    this.on = on
    this.pressed = false
    this.fadingIn = false
    this.fadingOut = false
    this.fade = 1.0
    this.fadeSeconds = 1.0
    this.yExtra = fxrand() * 0.3
  }

  handlePointer(x, cx, cInterval) {
    this.pressed = x >= cx - cInterval / 2 && x < cx + cInterval / 2
    return this.pressed
  }

  render(cx, cy, cRadius, highlight, rowNum) {
    var dataI, power
    dataI = this.colNum + 10 * (6 - this.rowNum)
    power = dataArray[dataI] - (69 - dataI)

    if (this.rowNum == 4) {
      power += (dataArray[dataI+50] = dataArray[dataI+51]) / 2
    }
    if (this.rowNum < 4) {
      power += dataArray[dataI+50]
    }
    if (this.rowNum < 2) {
      power += dataArray[dataI+70]
    }
    if (this.rowNum == 0) {
      power += dataArray[dataI+80]
      power += dataArray[dataI+90]
      power += dataArray[dataI+100]
    }
    let relativePower = power - powerHistories[this.rowNum][this.colNum]
    let u = 0.996
    let m = this.rowNum == 0 ? 3 : (this.rowNum == 2 || this.rowNum == 3 ? 1.5 : 2)
    powerHistories[this.rowNum][this.colNum] = u * powerHistories[this.rowNum][this.colNum] + (1 - u) * power
    if (muted) {
      relativePower *= (1 - muted)
    }
    this.a = Math.max(200, Math.min(255, 220 + relativePower * m))

    if (!soundStarted) {
      this.a -= 20
    }
    if (muted) {
      this.a -= 20 * muted
    }

    if (highlight) {
      this.a -= 50
    }
    if (this.pressed && this.on) {
      this.a -= 100
    }

    if (this.fadingIn) {
      this.fade = Math.min(1.0, this.fade + 1/(this.fadeSeconds * 60))
      if (this.fade === 1.0 || !this.on) {
        this.fadingIn = false
        this.fade = 1.0
      }
    } else if (this.fadingOut) {
      this.fade = Math.max(0.0, this.fade - 1/(this.fadeSeconds * 60))
      if (this.fade === 0.0 || this.on) {
        this.fadingOut = false
        this.fade = 1.0
      }
    }

    if (this.on || this.fadingOut) {
      fill(this.r, this.g, this.b, this.a * this.fade)
    } else {
      noFill()
    }
    strokeWeight(3.0 * width / 764)
    strokeCap(ROUND)
    stroke(this.a, this.g, 255 - this.a, this.a)
    fill(this.a, this.g, 255 - this.a, this.a)
    line(cx - (20 + qq1) * width / 764, cy + qq2 * width / 764, cx + (this.a * 0.1 - 20 + qq3) * width / 764, cy - (250 + qq4)  * width / 764)
    line(cx + (5 + 20 - 20 + qq5) * width / 764, cy + (10 + qq6) * width / 764, cx + (this.a * 0.1 + 20 - 20 + qq7) * width / 764, cy - (1. * 250 + qq8) * width / 764)
  }
}

let colorsList = [
  [
    [120, 120,120],
    [100, 100,100],
    [80, 80,80],
  ],
  [
    [120, 120,120],
    [100, 100,100],
    [80, 80,80],
  ],
  [
    [Math.floor(fxrand() * 255), Math.floor(fxrand() * 255), Math.floor(fxrand() * 255)],
    [Math.floor(fxrand() * 255), Math.floor(fxrand() * 255), Math.floor(fxrand() * 255)],
    [Math.floor(fxrand() * 255), Math.floor(fxrand() * 255), Math.floor(fxrand() * 255)],
  ]
]
let bColors = [
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
]
let cColor = [Math.floor(fxrand() * 255), Math.floor(fxrand() * 255), Math.floor(fxrand() * 255)]

let toy;

let transRatio = 0.0
let myScale = 1.0
let myTranslation = 0.0
function setTransRatio() {
  transRatio = (700 - Math.max(400, Math.min(700, width))) * 0.0005
  myScale = 1 / (1 - 2*transRatio)
  myTranslation = -transRatio*width
}

function setup() {
  let vmin = Math.min(window.innerWidth, window.innerHeight)
  createCanvas(vmin, vmin)
  setTransRatio()

  background(250);

  toy = new Toy()
}

function windowResized() {
  let vmin = Math.min(window.innerWidth, window.innerHeight)
  resizeCanvas(vmin, vmin)
  setTransRatio()
  toy.refresh()
  draw()
}

function mouseMoved() {
  if (touches && touches.length > 0) {
    for (var i = 0; i < touches.length; i++) {
      toy.handlePointer(touches[i].x / myScale - myTranslation, touches[i].y / myScale - myTranslation, false, false, touches[i].id)
    }
  } else {
    toy.handlePointer(mouseX / myScale - myTranslation, mouseY / myScale - myTranslation, false, false)
  }
  return false
}

let touchIds = []

function mousePressed() {
  if (!soundStarted) {
    startSound()
  }
  if (touches && touches.length > 0) {
    for (var i = 0; i < touches.length; i++) {
      if (touchIds.includes(touches[i].id)) {
        toy.handlePointer(touches[i].x / myScale - myTranslation, touches[i].y / myScale - myTranslation, true, false, touches[i].id)
      } else {
        toy.handlePointer(touches[i].x / myScale - myTranslation, touches[i].y / myScale - myTranslation, true, true, touches[i].id)
        touchIds.push(touches[i].id)
      }
    }
  } else {
    toy.handlePointer(mouseX / myScale - myTranslation, mouseY / myScale - myTranslation, true, true)
  }
}

function mouseDragged() {
  if (touches && touches.length > 0) {
    for (var i = 0; i < touches.length; i++) {
      toy.handlePointer(touches[i].x / myScale - myTranslation, touches[i].y / myScale - myTranslation, true, false, touches[i].id)
    }
  } else {
    toy.handlePointer(mouseX / myScale - myTranslation, mouseY / myScale - myTranslation, true, false)
  }
  return false
}

function mouseReleased(event) {
  touchIds = []
  for (var i = 0; i < touches.length; i++) {
    touchIds.push(touches[i].id)
  }

  if (touches && touches.length > 0) {
    return false
  } else {
    touchIds = []
  }
  for (var i = 0; i < toy.buttonRowsList[toy.activeBoard].length; i++) {
    toy.buttonRowsList[toy.activeBoard][i].containsPointer = false
    toy.buttonRowsList[toy.activeBoard][i].pressed = false
    for (var j = 0; j < toy.buttonRowsList[toy.activeBoard][i].buttons.length; j++) {
      toy.buttonRowsList[toy.activeBoard][i].buttons[j].pressed = false
    }
  }

  return false
}

let bg = [Math.floor(fxrand() * 255), Math.floor(fxrand() * 255), Math.floor(fxrand() * 255)]

function draw() {
  if (muted && muted < 1.0) {
    muted += 0.05
  }

  scale(myScale)
  translate(myTranslation, myTranslation)
  
  let widthNorm = width / 764

  background(bg[0], bg[1], bg[2])
  analyser.getByteFrequencyData(dataArray);
  toy.render()

  strokeWeight(width / 764)

  stroke(cColor[0], cColor[1], cColor[2], 10);

  analyser2.getByteTimeDomainData(dataArray2);
  var topLeft, topRight, bottomLeft, bottomRight
  fill(cColor[0], cColor[1], cColor[2], 200)
  drawingContext.beginPath()
  for (var i = 0; i < dataArray2.length; i++) {
    var foo = (dataArray2[i] - 127.5) / audioScale / 10
    if (muted) {
      foo *= (1 - muted)
    }
    var topY = width * 0.22 + foo * widthNorm
    var bottomY = width * 0.78 + foo * widthNorm
    drawingContext.rect(width * 0.2 + i * 0.895 * widthNorm, topY, widthNorm, 2 * widthNorm)
    drawingContext.rect(width * 0.2 + i * 0.895 * widthNorm, bottomY - 2 * widthNorm, widthNorm, 2 * widthNorm)
    if (i === 0) {
      topLeft = topY
      bottomLeft = bottomY
    } else if (i === dataArray2.length - 1) {
      topRight = topY
      bottomRight = bottomY
    }
  }
  drawingContext.fill()
}
