// Another Time
// Idlebit, 2022
// NFT License 2.0
console.log(fxhash)

let soundStarted = false
let soundPaused = false
var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isIOS
var isFirefox = /Firefox/i.test(navigator.userAgent)
var isSafari = /Safari/i.test(navigator.userAgent)

class WichmanHill {
  constructor(seed) {
    this.x = seed[0]
    this.y = seed[1]
    this.z = seed[2]
  }

  next() {
    this.x = (171 * this.x) % 30269
    this.y = (172 * this.y) % 30307
    this.z = (170 * this.z) % 30323
    return (this.x/30269.0 + this.y/30307.0 + this.z/30323.0) % 1.0
  }

  rf(a, b) {
    return this.next() * (b - a) + a
  }

  ri(max) {
    return Math.floor(this.rf(0, max))
  }

  choose(a) {
    return a[this.ri(a.length)]
  }
}

function ri(max) {
  return Math.floor(fxrand() * max);
}

let toneWH = new WichmanHill([ri(10000), ri(10000), ri(10000)])
let drawWH = new WichmanHill([ri(10000), ri(10000), ri(10000)])
let setupWH = new WichmanHill([ri(10000), ri(10000), ri(10000)])

function startSound() {
  if (isIOS) {
    try{
      // Adapted from https://github.com/swevans/unmute (MIT 2020)
      const silentAudioFile = createSilentAudioFile(44100)
      createHtmlAudio(silentAudioFile);
    }catch(e){
      console.log(e)
    }
  }

  Tone.Transport.start();
  soundStarted = true

  myJ = 0
  myI = 0
  loop()
}

function toggleSound() {
  if (soundPaused) {
    Tone.Transport.start()
    soundPaused = false
    loop()
  } else {
    Tone.Transport.pause()
    soundPaused = true
    noLoop()
  }
}

let timeLastPressed = Date.now()
function pressed() {
  let t0 = Date.now()
  if (t0 - timeLastPressed < 500) return
  timeLastPressed = t0
  if (!soundStarted) {
    startSound()
  } else {
    toggleSound()
  }
}

function mousePressed() {
  if (!isMobile || isIOS) {
    pressed()
  }
}

function mouseReleased() {
  if (isMobile && !isIOS) {
    pressed()
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

var myJ = 0

function windowResized() {
  if (isFxpreview) return
  let vmin = Math.min(window.innerWidth, window.innerHeight)
  resizeCanvas(vmin, vmin)
  background(255,225,225)
  for (var j = 0; j < 100; j++) {
    draw()
  }
  for (var i = 0; i < 10; i++) {
    doText(0,'')
  }
}

const unitWidth = 500

function draw() {
  wScale = width / unitWidth

  var lineAlphaMult;
  if (isSafari || isIOS) {
    strokeWeight(0.3 * wScale)
    lineAlphaMult = 0.06
  } else if (isFirefox) {
    strokeWeight(0.3 * wScale)
    lineAlphaMult = 0.09
  } else {
    strokeWeight(0.05 * wScale)
    lineAlphaMult = 1.0
  }

  for (var i = 0; i < 500; i += 0.27 * drawWH.ri(4)) {
    var c0 = (250 + myJ * 3 + i * bgMult) % 255
    var c1 = Math.abs(220 - myJ * 2) % 255
    var c2 = (220 + myJ * 1.7 - i * bgMult) % 255
    var c3 = Math.floor(drawWH.ri(55 + myJ%100) * lineAlphaMult)
    if (bgMode === 0) {
      stroke(c0, c1, c2, c3)
    } else if (bgMode === 1) {
      stroke(c0, c2, c1, c3)
    } else if (bgMode === 2) {
      stroke(c1, c0, c2, c3)
    } else if (bgMode === 3) {
      stroke(c2, c0, c1, c3)
    } else if (bgMode === 4) {
      stroke(c1, c2, c0, c3)
    } else if (bgMode === 5) {
      stroke(c2, c1, c0, c3)
    } else if (bgMode === 6) {
      stroke(c0, c0, c2, c3)
    } else if (bgMode === 7) {
      stroke(c0, c2, c0, c3)
    } else if (bgMode === 8) {
      stroke(c2, c0, c0, c3)
    } else {
      stroke(c0, c0, c0, c3)
    }
    line((drawWH.ri(700)-100) * wScale, (i + drawWH.ri(5) * 23) * wScale, (drawWH.ri(700)-100) * wScale, i * wScale)
  }
  if (drawWH.ri(5) < 1) {
    myJ++
  }
  myJ = myJ % 500
}

var myI = 0

var stickyK = -1
var colorMode = 0
var colorAdd = 0
var bgMode = 0
var bgMult = 0
var shapeFs = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

function doText(i, t, size=null) {
  wScale = width / unitWidth

  strokeWeight(3.0 * wScale)
  strokeCap(SQUARE)
  noStroke()
  var m = Tone.Frequency(t).toMidi()
  if (size === null) {
    textSize((m/2) * wScale)
  } else {
    textSize(size)
  }
  noFill()

  for (var k = 0; k < 20; k+=3) {
    for (var j = 0; j < 6; j++) {
      if (k === stickyK) {
        // no-op
      } else{
        var c0 = c[(j+ci)%c.length] + colorAdd
        var c1 = 50 + colorAdd
        var c2 = toneWH.ri(180) + colorAdd
        var c3 = 155
        if (colorMode === 0) {
          stroke(c0, c1, c2, c3)
        } else if (colorMode === 1) {
          stroke(c0, c2 / 2, c1, c3)
        } else if (colorMode === 2) {
          stroke(c1, c0, c2, c3)
        } else if (colorMode === 3) {
          stroke(c1, c2 / 4, c0, c3)
        } else if (colorMode === 4) {
          stroke(c2 / 2, c0, c1, c3)
        } else if (colorMode === 5) {
          stroke(c2 / 4, c1, c0, c3)
        } else if (colorMode === 6) {
          stroke(c0, c0, c1, c3)
        } else if (colorMode === 7) {
          stroke(c0, c1, c0, c3)
        } else if (colorMode === 8) {
          stroke(c1, c0, c0, c3)
        } else {
          stroke(c0,c0,c0, c3)
        }
      }
      var aaa = [
        (j*3 + 100 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5) + 500) * wScale, (375 + 100 * (shapeFs[4] - 0.75)) * wScale, (j*3 + 103 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5)) * wScale, (500) * wScale,
        (j*3 + 100 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5) + 500) * wScale, (75 + 100 * (shapeFs[4] - 0.75)) * wScale, (j*3 + 103 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5)) * wScale, (500) * wScale,
        (j*3 + 100 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5) + 500) * wScale, (75 + 100 * (shapeFs[4] - 0.75)) * wScale, (j*3 + 103 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5) - 1000) * wScale, (500) * wScale,

        (j*3 + 100 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5)) * wScale, (375 + 100 * (shapeFs[4] - 0.75)) * wScale, (j*3 + 103 * (shapeFs[1] + 0.5) + k*6*3*(shapeFs[3] + 0.5)) * wScale, (500) * wScale,

        (j*3 + 10 * (shapeFs[0] + 0.5) + k*6*3*(shapeFs[2] + 0.5)) * wScale, 75 * wScale,

        (j*3 + 10 * (shapeFs[0] + 0.5) + k*6*3*(shapeFs[2] + 0.5)) * wScale, (75 - k * 10) * wScale,
      ]
      var rectDir = 1
      if (shapeFs[7] < 0.2) {
        for (var aaai = 0; aaai < aaa.length; aaai += 2) {
          aaa[aaai] = (aaa[aaai] - (250 * wScale)) * -1.0 + 250 * wScale
        }
        rectDir = -1
      }
      if (shapeFs[8] < 0.7) {
        line(aaa[0], aaa[1], aaa[2], aaa[3])
        line(aaa[4], aaa[5], aaa[6], aaa[7])
        line(aaa[8], aaa[9], aaa[10], aaa[11])
      }
      if (shapeFs[8] > 0.3) {
        line(aaa[12], aaa[13], aaa[14], aaa[15])
      }
      if (shapeFs[5] < 0.4) {
        circle(aaa[16], aaa[17], (j*3 + 103 * (shapeFs[0] + 0.5) + k*6*3*(shapeFs[2] + 0.5)) * wScale)
      } else if (shapeFs[5] < 0.8) {
        rect(aaa[18], aaa[19], (j*3 + 103  * (shapeFs[0] + 0.5) + k*6*3) * wScale * rectDir, (j*3 + 103 + k*6*3*(shapeFs[2] + 0.5)) * wScale)
      }
    }
  }
  
  var c0 = c[(j+ci)%c.length] + colorAdd
  var c1 = 50 + colorAdd
  var c2 = toneWH.ri(180) + colorAdd
  var c3 = 255
  if (colorMode === 0) {
    stroke(c0, c1, c2, c3)
  } else if (colorMode === 1) {
    stroke(c0, c2, c1, c3)
  } else if (colorMode === 2) {
    stroke(c1, c0, c2, c3)
  } else if (colorMode === 3) {
    stroke(c1, c2, c0, c3)
  } else if (colorMode === 4) {
    stroke(c2, c0, c1, c3)
  } else if (colorMode === 5) {
    stroke(c2, c1, c0, c3)
  } else if (colorMode === 6) {
    stroke(c0, c0, c2, c3)
  } else if (colorMode === 7) {
    stroke(c0, c2, c0, c3)
  } else if (colorMode === 8) {
    stroke(c2, c0, c0, c3)
  } else {
    stroke(c0,c0,c0, c3)
  }
  ci++
  
  if (shapeFs[9] > 0.5) {
    text(t, (i % 12 * 42 + (shapeFs[6] * 15 - 5)) * wScale, ((i / 14 * 32 + 15) % 500) * wScale)
  } else {
    text(t, (i % 12 * 42 + (shapeFs[6] * 15 - 5)) * wScale, (((Math.floor(i / 12) + (shapeFs[9]*4-1)*((i/12)%1)) * 32 + 15) % 500) * wScale)
  }
}

var c = [34,45,67,88,120,140,90,50]
var ci = 0

function setup(){
  let vmin = Math.min(window.innerWidth, window.innerHeight)
  createCanvas(vmin, vmin)
  background(255,225,225)
  noLoop()

  stickyK = setupWH.choose([3,6,9,12,15,-1,-1,-1])
  colorMode = setupWH.choose([0,1,2,3,4,5,6,7,8,9])
  colorAdd = setupWH.ri(130) - 30
  bgMode = setupWH.choose([0,1,2,3,4,5,6,7,8,9])
  bgMult = setupWH.rf(0.2, 1.8)
  shapeFs = [
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
    setupWH.rf(0.0, 1.0),
  ]

  Tone.Destination.volume.value = 0
		Tone.Transport.timeSignature = [6, 4];
		Tone.Transport.bpm.value = 100;
		const merge = new Tone.Merge();
		const reverb = new Tone.Reverb({
			wet: 0.85
		});
    const comp = new Tone.Compressor(-30, 3);
		merge.chain(reverb, comp, Tone.Destination);

		const synthL = new Tone.PolySynth({
			oscillator: {
				type: "custom",
				partials: [2, 1, 2, 2],
			},
			envelope: {
        attack: 1.5,
        decay: 3.0,
        sustain: 1.0,
        release: 3,
      },
			portamento: 0.03,
			volume: isFirefox || (isMobile && !isIOS) ? 0 : 5
		}).connect(merge, 0, 0);
		const synthR = new Tone.PolySynth({
			oscillator: {
				type: "custom",
				partials: [2, 1, 2, 2],
			},
			envelope: {
				attack: 1.5,
				decay: 3.0,
				sustain: 1.0,
				release: 3,
			},
			portamento: 0.03,
			volume: isFirefox || (isMobile && !isIOS) ? 0 : 5
		}).connect(merge, 0, 1);

    var LAss = [
      [
        ["C3", "E3", "G3"],
        ["D3", "F3", "A3"],
        ["E3", "G3", "B3"],
      ],
      [
        ["B2", "D3", "F3"],
        ["C3", "E3", "F4", "G3"],
        ["C3", "Eb3", "G3"],
        ["C3", "Eb3", "G3"],
      ],
      [
        ["C3", "D3", "E3", "F3", "A3"],
        ["G2", "B2", "C3"],
        ["C#3", "F#3", "C#3", "F#3","C#3", "F#3",],
      ],
      [
        ["D3", "F#3", "A3"],
        ["D3", "G3", "Bb3"]
      ],
      [
        ["C3", "E3", "G3"],
        ["C3", "E3", "G3"],
        ["C3", "F3", "A3"],
        ["D3", "F3", "A3"],
        ["D3", "G3", "B3"],
      ],
    ]
    var LAs = []
    for (var i = 0; i < LAss.length; i++) {
      if (setupWH.ri(LAss.length) <= 1) {
        LAs.push(...LAss[i])
      }
    }
    if (LAs.length === 0) {
      LAs.push(...setupWH.choose(LAss))
    }
        
    var RAss = [
      [
        ["C4", "E4", "G4", "C5"],
        ["C4", "E4", "G4", "B4"],
        ["C4", "E4", "G4", "D5"],
        ["D4", "F4", "A4", "C5"],
        ["D4", "F4", "A4", "B4"],
        ["D4", "F4", "A4", "D5"],
      ],
      [
        ["C4", "D4", "E4", "F#4", "G4", "A4", "Bb4", "C5"],
        ["C4", "D4", "E4", "F#4", "G4", "A4", "Bb4", "C5"],
        ["B3", "C4", "E4", "G4", "C5"],
        ["C4", "E4", "A4", "C5"],
      ],
      [
        ["B3", "D4", "F4", "A4", "D5"],
        ["D4", "F4", "B4", "E5"],
        ["E4", "G4", "A4", "C5"],
        ["D4", "G4", "B4", "F5"],
        ["B3", "C4", "E4", "G4", "A4", "C5"],
        ["C4", "E4", "A4", "B4", "C5"],
        ["B3", "C4", "E4", "G4", "A4", "B4"],
        ["D4", "F4", "A4", "B4", "D5"],
      ],
      [
        ["D4", "F4", "B4", "C5", "E5"],
        ["E4", "G4", "A4", "B4", "C5"],
        ["B3", "D4", "G4", "B4", "D5", "F5"],
        ["D4", "E4", "G4", "A4"],
        ["D4", "F4", "G4", "B4"],
        ["D4", "E4", "A4", "B4"],
        ["D4", "F4", "G4", "A4"],
        ["B3", "D4", "F#4", "A4", "B4"],
      ],
      [
        ["D4", "F#4", "A4", "C5"],
        ["D4", "F#4", "A4", "D5"],
        ["B3", "C4", "Eb4", "A4", "C5"],
        ["C4", "Eb4", "A4", "B5"],
        ["C4", "Eb4", "A4", "D5"],
        ["B3", "E4", "G4", "B4", "E5"],
        ["D4", "F4", "B4", "E5"],
      ],
      [
        ["F4", "B4", "D5", "F5"],
        ["B3", "G4", "B4", "D5", "F5"],
        ["G4", "B4", "C5", "G5"],
        ["G4", "B4", "C5", "G5", "A5", "B5", "C6", "C7"],
        ["E4", "A4", "C5", "G5", "A5", "B5", "C6"],
        ["F4", "B4", "C5", "G5", "A5", "B5", "C7"],
        ["B3", "D4", "F4", "G4", "C5", "D5", "E5", "F5", "G5"],
      ],
      [
        ["B3", "C4"],
        ["D4"],
        ["E4"],
        ["B4"],
      ],
      [
        ["C4", "C#4", "E4", "F4", "F#4", "Bb4"],
        ["B3", "C4", "C5"],
        ["C4", "F4", "B4"],
        ["C4", "F4", "B4", "D5"]
      ],
      [
        ["F3", "G3"],
        ["F3", "G3"],
        ["F4", "G4"],
        ["Bb4", "E4", "G4"]
      ],
      [
        ["D4", "D5", "D4", "D5"],
        ["E4", "F4", "F4", "E4"],
        ["C4", "F4", "B4", "C5"],
      ]
    ]
    var RAs = []
    for (var i = 0; i < RAss.length; i++) {
      if (setupWH.ri(RAss.length) <= 1) {
        RAs.push(...RAss[i])
      }
    }
    if (RAs.length === 0) {
      RAs.push(...setupWH.choose(RAss))
    }
  
    var a = []
    var LAi = setupWH.ri(LAs.length)
    var RAi = setupWH.ri(RAs.length)
    var RAn = 4
    var RAx0 = 2
    var RAx1 = 3
    var RAx2 = 0
    for (var i = 0; i < 160; i++) {
      if (i % 1 === 0 && setupWH.ri(4) < 3) {
        LAi = setupWH.ri(LAs.length)
        RAi = setupWH.ri(RAs.length)
        RAx0 = setupWH.ri(4)
        RAx1 = setupWH.ri(4)
        RAx2 = setupWH.ri(4)
      }
      if (i % 4 === 0 && setupWH.ri(3) < 1) {
        RAn = Math.min(setupWH.ri(6) + 1, 4)
      }
      a.push(...LAs[LAi])
      if (RAn === 4) {
        a.push(...RAs[RAi].reverse())
      } else if (RAn === 3) {
        for (var j = 0; j < Math.min(4, RAs[RAi].length); j++) {
          if (j !== RAx0) {
            a.push(RAs[RAi][j])
          }
        }
      } else if (RAn === 2) {
        for (var j = 0; j < Math.min(4, RAs[RAi].length); j++) {
          if (j !== RAx0 && j !== RAx1) {
            a.push(RAs[RAi][j])
          }
        }
      } else if (RAn === 1) {
        for (var j = 0; j < Math.min(4, RAs[RAi].length); j++) {
          if (j !== RAx0 && j !== RAx1 && j !== RAx2) {
            a.push(RAs[RAi][j])
          }
        }
      }
    }

    let nni = 30 + setupWH.ri(140)
    let nI = nni + Math.floor(fxrand() * (a.length - nni));
    myI = nI - nni
    myJ = (nI - Math.min(50, nni)) * 10
    for (var i = nI - nni; i < nI; i++) {
      if (i > nI - 50) {
        for (var j = 0; j < 10; j++) {
          draw()
        }
      }
      doText(i, a[i])
    }

		const partL = new Tone.Sequence(((time, note) => {
      doText(myI, note)
      myI++
			synthL.triggerAttackRelease(note, "4n", time);
		}), a, "16n").start();

		const partR = new Tone.Sequence(((time, note) => {
			synthR.triggerAttackRelease(note, "4n", time);
		}), a, "16n").start();

		partR.playbackRate = 0.996;
}
