let particles = [];
let particles2 = [];
let particles3 = [];
let particles4 = [];
let particles5 = [];
let particles6 = [];
let particles7 = [];
let particles8 = [];
let particles9 = [];
let points = []
let mult = 0.005;
let edge;
let sBlur;
let blurEdge = 0;
let angle1, angle2, angle3, vec, vec2, vec3
let canvas, canvas2

let bW = 29;
let bB = 213;

let xoff, yoff;
let noiseStop;
let triEdge;

let mumult;

let density, spaceX, spaceY;

let rectX1, rectY1, rectW1, rectH1, rectF1;
let rectX2, rectY2, rectW2, rectH2, rectF2;

let col;

let colorPalettes;

let bgColor, lineColor1, lineColor2, lineColor3, gridColor, lineColor4, lineColor5, lineColor6, lineColor7, lineColor8, lineColor9

let lineOrtak1, lineOrtak2, lineOrtak3

let diarem = 0.1;

let shapeX1, shapeY1, shapeX2, shapeY2, shapeX3, shapeY3

let canvasX, canvasY

let colSel, bgSel, textGrid, bgProb

let alp1, alp2, alp3

let sp, xA, xB, yA, yB



let NoiseType, placementType
let cokluChooser;
let tekliChooser, sekilChooser
let noiseChooser
let texture
let step, sekilProb

let backCol, lineCol, noiseT, arcT, circleT

cokluChooser = fxrand();
tekliChooser = fxrand();
sekilChooser = fxrand();
noiseChooser = fxrand();
multChooser = fxrand()
texture = fxrand()
colSel = fxrand()
bgSel = fxrand()


if (tekliChooser < 0.5) {
  if (noiseChooser < 0.10) {


    if (multChooser < 0.33) {
      NoiseType = "Composition1"
    } else if (multChooser > 0.33 && multChooser < 0.66) {
      NoiseType = "Composition1.1"
    } else if (multChooser > 0.66) {
      NoiseType = "Composition1.2"
    }
  } else if (noiseChooser > 0.10 && noiseChooser < 0.25) {

    if (multChooser < 0.25) {
      NoiseType = "Composition2"
    } else if (multChooser > 0.25 && multChooser < 0.50) {
      NoiseType = "Composition2.1"
    } else if (multChooser > 0.50 && multChooser < 0.75) {
      NoiseType = "Composition2.2"
    } else if (multChooser > 0.75) {
      NoiseType = "Composition2.3"
    }
  } else if (noiseChooser > 0.25 && noiseChooser < 0.55) {

    
      if (multChooser < 0.10) {
        NoiseType = "Composition3"
      } else if (multChooser > 0.10 && multChooser < 0.20) {
        NoiseType = "Composition3.1"
      } else if (multChooser > 0.20 && multChooser < 0.30) {
        NoiseType = "Composition3.2"
      } else if (multChooser > 0.30 && multChooser < 0.40) {
        NoiseType = "Composition3.3"
      } else if (multChooser > 0.40 && multChooser < 0.50) {
        NoiseType = "Composition3.4"
      } else if (multChooser > 0.50 && multChooser < 0.60) {
        NoiseType = "Composition3.5"
      } else if (multChooser > 0.60 && multChooser < 0.70) {
        NoiseType = "Composition3.6"
      } else if (multChooser > 0.70 && multChooser < 0.80) {
        NoiseType = "Composition3.7"
      } else if (multChooser > 0.80) {
        NoiseType = "Composition3.8"
      }
    

  } else if (noiseChooser > 0.55 && noiseChooser < 0.70) {


    if (sekilChooser < sekilProb) {
      NoiseType = "Composition4"
    } else {
      NoiseType = "Composition5"
    }
  } else if (noiseChooser > 0.70) {
    if (sekilChooser < sekilProb) {
      NoiseType = "Composition6"
    } else {
      if (multChooser < 0.33) {
        NoiseType = "Composition7"
      } else if (multChooser > 0.33 && multChooser < 0.66) {
        NoiseType = "Composition7.1"
      } else if (multChooser > 0.66) {
        NoiseType = "Composition7.2"
      }
    }
  }
} else {


  if (noiseChooser < 0.10) {


    if (multChooser < 0.33) {
      NoiseType = "Composition8"
    } else if (multChooser > 0.33 && multChooser < 0.66) {
      NoiseType = "Composition8.1"
    } else if (multChooser > 0.66) {
      NoiseType = "Composition8.2"
    }
  } else if (noiseChooser > 0.10 && noiseChooser < 0.25) {

    if (multChooser < 0.25) {
      NoiseType = "Composition9"
    } else if (multChooser > 0.25 && multChooser < 0.50) {
      NoiseType = "Composition9.1"
    } else if (multChooser > 0.50 && multChooser < 0.75) {
      NoiseType = "Composition9.2"
    } else if (multChooser > 0.75) {
      NoiseType = "Composition9.3"
    }
  } else if (noiseChooser > 0.25 && noiseChooser < 0.55) {

    if (multChooser < 0.25) {
      NoiseType = "Composition10"
    } else if (multChooser > 0.25 && multChooser < 0.50) {
      NoiseType = "Composition10.1"
    } else if (multChooser > 0.50 && multChooser < 0.75) {
      NoiseType = "Composition10.2"
    } else if (multChooser > 0.75) {
      NoiseType = "Composition10.3"
    }
  } else if (noiseChooser > 0.55 && noiseChooser < 0.70) {

    if (sekilChooser < sekilProb) {
      NoiseType = "Composition11"
    } else {
      NoiseType = "Composition12"
    }
  } else if (noiseChooser > 0.70) {

    if (sekilChooser < sekilProb) {
      if (multChooser < 0.33) {
        NoiseType = "Composition13"
      } else if (multChooser > 0.33 && multChooser < 0.66) {
        NoiseType = "Composition13.1"
      } else if (multChooser > 0.66) {
        NoiseType = "Composition13.2"
      }
    } else {
      if (multChooser < 0.33) {
        NoiseType = "Composition14"
      } else if (multChooser > 0.33 && multChooser < 0.66) {
        NoiseType = "Composition14.1"
      } else if (multChooser > 0.66) {
        NoiseType = "Composition14.2"
      }
    }
  }
}

if (sekilChooser < 0.5) {
  if (tekliChooser < 0.5) {
    placementType = "Vertical Line"
  } else {
    placementType = "Horizontal Line"
  }
} else {
  if (tekliChooser < 0.5) {
    placementType = "Vertical Lines"
  } else {
    placementType = "Horizontal Lines"
  }
}

if (bgSel < 0.5) { ///85
  backCol = "Black"
  if (colSel < 0.10) {
    lineCol = "Color Palette 1"

  } else if (colSel > 0.10 && colSel < 0.20) {
    lineCol = "Color Palette 2"
  } else if (colSel > 0.20 && colSel < 0.30) {
    lineCol = "Color Palette 3"

  } else if (colSel > 0.30 && colSel < 0.40) {
    lineCol = "Color Palette 4"

  } else if (colSel > 0.40 && colSel < 0.50) {
    lineCol = "Color Palette 5"
  } else if (colSel > 0.50 && colSel < 0.60) {
    lineCol = "Color Palette 6"
  } else if (colSel > 0.60 && colSel < 0.70) {
    lineCol = "Color Palette 7"
  } else if (colSel > 0.70 && colSel < 0.80) {

    lineCol = "Color Palette 8"
  } else if (colSel > 0.80 && colSel < 0.90) {
    lineCol = "Color Palette 9"
  } else if (colSel > 0.90) {
    lineCol = "Color Palette 10"
  }
} else {
  backCol = "White"
  if (colSel < 0.12) {
    lineCol = "Color Palette 11"
  } else if (colSel > 0.12 && colSel < 0.28) {
    lineCol = "Color Palette 12"
  } else if (colSel > 0.28 && colSel < 0.40) {
    lineCol = "Color Palette 13"
  } else if (colSel > 0.40 && colSel < 0.52) {
    lineCol = "Color Palette 14"
  } else if (colSel > 0.52 && colSel < 0.64) {
    lineCol = "Color Palette 15"
  } else if (colSel > 0.64 && colSel < 0.76) {
    lineCol = "Color Palette 16"
  } else if (colSel > 0.76 && colSel < 0.88) {
    lineCol = "Color Palette 17"
  } else if (colSel > 0.88) {
    lineCol = "Color Palette 18"
  }
}



window.$fxhashFeatures = {
  "Background Color": backCol,
  "Color Palette": lineCol,
  "Placement": placementType,
  "Composition Type": NoiseType
}







function setup() {

  let size = min(windowWidth, windowHeight)
  // let size = 800

  if(windowWidth > windowHeight * 1.1){
    size = 800
  }

  canvas = createCanvas(size, size)

  // if (height >= 850 && height <= 950) {
  //   if (!mult <= 0.002) mult = mult - 0.002
  // }else if(height >= 950 ){
  //   if (!mult <= 0.003) mult = mult - 0.003
  // }

  // console.log(tekliChooser)
  // console.log(noiseChooser)
  // console.log(multChooser)
  

  colorMode(HSB, 360, 100, 100, 255)

  bgProb = 0.50

  if (bgSel < bgProb) {
    blendMode(LIGHTEST);
  } else {
    blendMode(BLEND);
  }

  noise = new OpenSimplexNoise(Date.now());

  angleMode(RADIANS)
  rectMode(CENTER)
  frameRate(60)

  colors()
  background(bgColor); //223,223,218

  grid()
  noiseStart();

}

function noiseStart() {

  density = height / 10;
  space = width / density;
  spaceY = height / density;

  rad = height / 3.3333333

  sekilProb = 0.5


  if (sekilChooser < sekilProb) {
    if (tekliChooser < 0.5) {
      //////////////////////DIKEY
      sp = 2
      xA = width / 2 - 5
      xB = width / 2 + 5
      yA = height / 10
      yB = height - height / 10
    } else {
      //   //   //////////////////////////YATAY
      sp = 2
      xA = width / 5
      xB = width - width / 5
      yA = height / 2 - 5
      yB = height / 2 + 5
    }

    ///////TEK LINE

    for (let x = xA; x < xB; x = x + sp) {
      for (let y = yA; y < yB; y = y + sp) {
        let p = createVector(x, y)
        particles.push(p)
      }
    }


    for (let x = xA; x < xB; x = x + sp) {
      for (let y = yA; y < yB; y = y + sp) {
        let p = createVector(x, y)
        particles2.push(p)
      }
    }

    for (let x = xA; x < xB; x = x + sp) {
      for (let y = yA; y < yB; y = y + sp) {
        let p = createVector(x, y)
        particles3.push(p)
      }
    }
  } else {

    ////////KARE

    /////////Dikey
    if (tekliChooser < 0.5) {
      let gridSize = 5

      for (let x = width / 5; x <= width - width / 5; x = x + gridSize * 10) {
        for (let y = height / 5; y <= height - height / 5; y = y + gridSize) {
          let p = createVector(x, y)
          particles.push(p)
        }
      }

      for (let x = width / 5; x <= width - width / 5; x = x + gridSize * 10) {
        for (let y = height / 5; y <= height - height / 5; y = y + gridSize) {
          let p = createVector(x, y)
          particles2.push(p)
        }
      }
      for (let x = width / 5; x <= width - width / 5; x = x + gridSize * 10) {
        for (let y = height / 5; y <= height - height / 5; y = y + gridSize) {
          let p = createVector(x, y)
          particles3.push(p)
        }
      }
    } else {

      //     ////////////YATAY
      for (let x = width / 5; x <= width - width / 5; x = x + 5) {
        for (let y = height / 5; y <= height - height / 5; y = y + 50) {
          let p = createVector(x, y)
          particles.push(p)
        }
      }

      for (let x = width / 5; x <= width - width / 5; x = x + 5) {
        for (let y = height / 5; y <= height - height / 5; y = y + 50) {
          let p = createVector(x, y)
          particles2.push(p)
        }
      }
      for (let x = width / 5; x <= width - width / 5; x = x + 5) {
        for (let y = height / 5; y <= height - height / 5; y = y + 50) {
          let p = createVector(x, y)
          particles3.push(p)
        }
      }
    }
  }

}

function gridline(x1, y1, x2, y2) {

  if (texture < 0.7) {
    step = 1
  } else {
    step = 3
  }

  let tmp;
  /* Swap coordinates if needed so that x1 <= x2 */
  if (x1 > x2) {
    tmp = x1;
    x1 = x2;
    x2 = tmp;
    tmp = y1;
    y1 = y2;
    y2 = tmp;
  }

  let dx = x2 - x1;
  let dy = y2 - y1;


  if (x2 < x1)
    step = -step;

  let sx = x1;
  let sy = y1;
  for (let x = x1 + step; x <= x2; x += step) {
    let y = y1 + step * dy * (x - x1) / dx;
    strokeWeight(1 + map(noise.noise3D(sx, sy, x), 0, 1, -0.5, 0.5));
    line(sx, sy, x + map(noise.noise3D(x, y, sx), sx, 0, 1, -1, 1), y + map(noise.noise3D(x, y, sy), 0, 1, -1, 1));
    sx = x;
    sy = y;
  }
}

function grid() {
  let spacing = 5;
  for (let i = -width; i < height + width; i += spacing) {
    stroke(gridColor, gridColor.setAlpha(random(2, 10)));
    gridline(i, 0, i + height, height);
  }
  for (let i = height + width; i >= -width; i -= spacing) {
    stroke(gridColor, gridColor.setAlpha(random(2, 10)));
    gridline(i, 0, i - height, height);
  }
}


function colors(a, a2, a3) {

  // console.log(sekilChooser)

  if (bgSel < bgProb) { ///85
    bgColor = color(0, 0, 11) //color('#1d1d1d') /// dark bg
    gridColor = color(0, 0, 77) //color('#d1d1d1');
    if (colSel < 0.10) {
      lineColor1 = color(11, 77, 52, a) //color("#85321f");  ///// BU TAMAM  Yeşil Kırmızı Turuncu
      lineColor2 = color(25, 69, 65, a2) //color('#a56333');
      lineColor3 = color(68, 37, 59, a3) //color('#8f965f');

    } else if (colSel > 0.10 && colSel < 0.20) {
      lineColor1 = color(25, 31, 98, a) //color("#f9cdad"); //////// BU DA TAMAM   Mavi Kırmızı Krem
      lineColor2 = color(153, 25, 69, a2) //color('#83af9b');
      lineColor3 = color(5, 79, 79, a3) //color('#ca382b');

    } else if (colSel > 0.20 && colSel < 0.30) {
      lineColor1 = color(138, 33, 54, a) //color("#699c78"); ////// Bu DA TAMAM   Pembe Yesil Kremsi
      lineColor2 = color(12, 51, 94, a2) //color('#f0a28e');
      lineColor3 = color(47, 36, 100, a3) //color('#fff1bc');


    } else if (colSel > 0.30 && colSel < 0.40) {
      lineColor1 = color(39, 39, 75, a) //color("#bf9775");   ////BU DA TAMAM  SaRI TURUNCU KREMSİ
      lineColor2 = color(55, 54, 54, a2) //color('#8a8c3e');
      lineColor3 = color(33, 83, 69, a3) //color('#d97d0d');


    } else if (colSel > 0.40 && colSel < 0.50) {
      lineColor1 = color(45, 74, 56, a) //color("#f2b705");     /// BU DA TAMAM SARI MAVİ KREMSİ
      lineColor2 = color(82, 17, 84, a3) //color('#f2e8c9');
      lineColor3 = color(198, 62, 52, a2) //color('#73b2d9');

    } else if (colSel > 0.50 && colSel < 0.60) {
      lineColor1 = color(203, 47, 58, a) //color("#73b2d9");   /// BU DA TAMAM MAVİ BORDO KREMSİ
      lineColor2 = color(45, 17, 95, a2) //color('#f2e8c9');
      lineColor3 = color(16, 56, 65, a3) //color('#a66249');

    } else if (colSel > 0.60 && colSel < 0.70) {
      lineColor1 = color(62, 56, 40) //color("#e1ab00");     // BU DA TAMAM BRONZ
      lineColor2 = color(38, 56, 32) //color('#4b4d54');
      lineColor3 = color(44, 59, 56) //color(206, 51, 23);111, 26, 13
    } else if (colSel > 0.70 && colSel < 0.80) {

      lineColor1 = color(57, 86, 35) //color("#e1ab00");     // BU DA TAMAM KAHVE YESİL KOYU YESİL
      lineColor2 = color(24, 85, 37) //color('#4b4d54');
      lineColor3 = color(111, 26, 15) //color(206, 51, 23);111, 26, 13
    } else if (colSel > 0.80 && colSel < 0.90) {

      lineColor1 = color(45, 79, 46) //color("#393232");    // BU DA TAMAM YESİL SARI KIRMIZI  BAKIR
      lineColor2 = color(81, 29, 35) //color('#c06c84');
      lineColor3 = color(23, 88, 40) //color('#8d6262');
    } else if (colSel > 0.90) {

      lineColor1 = color(326, 34, 33) //color("#393232");    // BU DA TAMAM YESİL SARI KIRMIZI  BAKIR
      lineColor2 = color(195, 31, 56) //color('#c06c84');
      lineColor3 = color(238, 19, 51) //color('#8d6262');
    }
  } else {
    bgColor = color('#ccc8ad') /// bright bg             ////BEYAZ İÇİN GUZELLER; color(45, 79, 46) color(81, 35, 62)  color(81, 39, 32) YESİL
    gridColor = color('#1d1d1d');
    if (colSel < 0.12) {
      lineColor1 = color(81, 39, 32) //color("#c98e43"); ///BU DA TAMAM YESİL SARIYESİL LACİ
      lineColor2 = color(61, 42, 56) //color('#334762');
      lineColor3 = color(227, 15, 33) //color('#64463c');

    } else if (colSel > 0.12 && colSel < 0.28) {
      lineColor1 = color(15, 95, 76, a) //color("#c33809");  /// BU ÇOK GUZEL  Kırmızı Siyah TURUNCUMSU
      lineColor2 = color(33, 61, 73, a2) //color('#b98748');
      lineColor3 = color(14, 63, 14, a3) //color('#2d1a14');

    } else if (colSel > 0.28 && colSel < 0.40) {
      lineColor1 = color(327, 13, 11) //color("#6f4b5e"); /// BU DA TAMAM SARI MAVİ SİYAH
      lineColor2 = color(210, 21, 49) //color('#65b1af');
      lineColor3 = color(45, 79, 46) //color('#d44634');


    } else if (colSel > 0.40 && colSel < 0.52) {
      lineColor1 = color(78, 19, 27) //color("#414538");   // BU DA TAMAM SİYAH SARI KIRMIZI
      lineColor2 = color(31, 57, 77) //color('#c48d54');
      lineColor3 = color(18, 44, 61) //color('#9c6c58');

      // alp1 = 100
      // alp2 = 100
      // alp3 = 100

    } else if (colSel > 0.52 && colSel < 0.64) {
      lineColor1 = color(45, 79, 46) //color("#393232");    // BU DA TAMAM YESİL SARI KIRMIZI  BAKIR
      lineColor2 = color(81, 29, 35) //color('#c06c84');
      lineColor3 = color(23, 88, 40) //color('#8d6262');

      //// ed8d8d linecolor2 pembe için eski alternatif
    } else if (colSel > 0.64 && colSel < 0.76) {
      lineColor1 = color(46, 79, 57) //color("#e1ab00");     // BU DA TAMAM LACİ KIRMIZI SARI
      lineColor2 = color(227, 11, 33) //color('#4b4d54');
      lineColor3 = color(7, 68, 62) //color('#9e3e32');
      //   //// e1ab00 sarı için ilk alternatif 

    } else if (colSel > 0.76 && colSel < 0.88) {

      lineColor1 = color(57, 86, 33) //color("#e1ab00");     // BU DA TAMAM KAHVE YESİL KOYU YESİL
      lineColor2 = color(24, 85, 35) //color('#4b4d54');
      lineColor3 = color(111, 26, 13) //color(206, 51, 23);111, 26, 13

    } else if (colSel > 0.88) {
      lineColor1 = color(62, 39, 40) //color("#e1ab00");     // BU DA TAMAM BRONZ
      lineColor2 = color(38, 39, 32) //color('#4b4d54');
      lineColor3 = color(44, 45, 56) //color(206, 51, 23);111, 26, 13
    }
  }
}


function draw() {
  noStroke();

  // alp1 = 20
  // alp2 = 20
  // alp3 = 20

  for (let i = 0; i < particles.length; i = i + 1) {

    let mu = 0.5 ////

    noiseStop = map(noise.noise2D(particles[i].x * mult, i * mult), -0.6, 1, 0.1, mumult); ///// 84 - 2

    // ////////////////////////DIKEY

    if (tekliChooser < 0.5) {
      if (noiseChooser < 0.10) {

        ////Noise 1
        if (multChooser < 0.33) {
          mult = 0.009;
        } else if (multChooser > 0.33 && multChooser < 0.66) {
          mult = 0.004
        } else if (multChooser > 0.66) {
          mult = 0.008
        }
        if (sekilChooser < sekilProb) {


          angle = map(tan(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].y * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].y * mult), 0, 1, 0, 0.1);


          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(tan(angle3), sin(angle3 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.45 && colSel < 0.60) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          angle = map(tan(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].y * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].y * mult), 0, 1, 0, 0.1);

          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(tan(angle3), sin(angle3 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }
      } else if (noiseChooser > 0.10 && noiseChooser < 0.25) {
        ////Noise 2
        if (multChooser < 0.25) {
          mult = 0.006;
        } else if (multChooser > 0.25 && multChooser < 0.50) {
          mult = 0.004
        } else if (multChooser > 0.50 && multChooser < 0.75) {
          mult = 0.008
        } else if (multChooser > 0.75) {
          mult = 0.01
        }
        if (sekilChooser < sekilProb) {

          angle = map(tan(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].y * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].y * mult), 0, 1, 0, 0.1);

          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {

          angle = map(tan(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].y * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].y * mult), 0, 1, 0, 0.1);

          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }

      } else if (noiseChooser > 0.25 && noiseChooser < 0.55) {

        ///Noise 3
        if (sekilChooser < sekilProb) {
          if (multChooser < 0.10) {
            mult = 0.0015
          } else if (multChooser > 0.10 && multChooser < 0.20) {
            mult = 0.002
          } else if (multChooser > 0.20 && multChooser < 0.30) {
            mult = 0.004
          } else if (multChooser > 0.30 && multChooser < 0.40) {
            mult = 0.005
          } else if (multChooser > 0.40 && multChooser < 0.50) {
            mult = 0.007
          } else if (multChooser > 0.50 && multChooser < 0.60) {
            mult = 0.008
          } else if (multChooser > 0.60 && multChooser < 0.70) {
            mult = 0.009
          } else if (multChooser > 0.70 && multChooser < 0.80) {
            mult = 0.01
          } else if (multChooser > 0.80) {
            mult = 0.006
          }


          angle = map(sin(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(cos(particles2[i].y * mult), 0, 1, 0, 2);
          angle3 = map(sin(particles3[i].y), 0, 1, 0, 4);

          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {

          angle = map(sin(particles[i].y * mult), 0, 1, 0, 0.1);
          angle2 = map(cos(particles2[i].y * mult), 0, 1, 0, 2);
          angle3 = map(sin(particles3[i].y), 0, 1, 0, 4);

          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 50
          alp2 = 50
          alp3 = 50

          if (bgSel > bgProb) {
            alp1 = 70
            alp2 = 70
            alp3 = 70
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }

      } else if (noiseChooser > 0.55 && noiseChooser < 0.70) {

        //////////Noise 4
        if (sekilChooser < sekilProb) {
          mult = 0.006
          angle = map(noise.noise2D(particles[i].y * mult, i * mult), 0, 1, 0, 0.1);
          angle2 = map(noise.noise2D(particles2[i].y * mult, i * mult), 0, 1, 0, 0.2);
          angle3 = map(noise.noise2D(particles3[i].y, noiseStop), 0, 1, 0, 4);

          vec = createVector(tan(angle / 2 * i), sin(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2), sin(angle2 * i));
          vec3 = createVector(tan(angle), sin(angle3 * i));

          alp1 = 20
          alp2 = 10
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 30
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          mult = 0.008
          angle = map(tan(particles[i].y * mult), 0, 1, 0, 0.0004);
          angle2 = map(sq(particles2[i].y * mult), 0, 1, 0, 0.002);
          angle3 = map(1 / tan(particles3[i].y * noiseStop), 0, 1, 0, 4);

          vec = createVector(sq(angle / 2 * i), sin(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2), sin(angle2 * i));
          vec3 = createVector(tan(angle), tan(angle3 * i));
          alp1 = 50
          alp2 = 10
          alp3 = 50

          if (bgSel > bgProb) {
            alp1 = 70
            alp2 = 30
            alp3 = 70
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }

      } else if (noiseChooser > 0.70) {
        ////////Noise 5
        if (sekilChooser < sekilProb) {
          mult = 0.0065
          angle = map(noise.noise2D(particles[i].y * mult, i), 0, 1, 0, 0.01);
          angle2 = map(tan(particles2[i].x * mult), 0, 1, 0, sin(i));
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, cos(i) * 2);

          vec = createVector(sin(angle / 2 * (i / 9)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), cos(angle2 / 2 * (i)));
          vec3 = createVector(1 / tan(angle2 / 2 * (i * mult)), 1 / tan(angle2 / 2 * (i)));
          alp1 = 5
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 25
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          if (multChooser < 0.33) {
            mult = 0.007;
          } else if (multChooser > 0.33 && multChooser < 0.66) {
            mult = 0.009
          } else if (multChooser > 0.66) {
            mult = 0.011
          }


          angle = map(tan(particles[i].x * mult), 0, 1, 0, cos(i) * 2);
          angle2 = map(1 / tan(particles2[i].x * mult), 0, 1, 0, sin(i));
          angle3 = map(1 / tan(particles3[i].y * mult, i), 0, 1, 0, 0.01);


          vec = createVector(1 / tan(angle2 / 2 * (i * mult)), 1 / tan(angle2 / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), cos(angle2 / 2 * (i)));
          vec3 = createVector(sin(angle / 2 * (i / 9)), sin(angle / 2 * (i)));

          alp1 = 30
          alp2 = 30
          alp3 = 30

          if (bgSel > bgProb) {
            alp1 = 50
            alp2 = 50
            alp3 = 50
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }

      }
    } else {
      ////////////////////////YATAY

      if (noiseChooser < 0.10) {

        ////////Noise1

        if (multChooser < 0.33) {
          mult = 0.005;
        } else if (multChooser > 0.33 && multChooser < 0.66) {
          mult = 0.003
        } else if (multChooser > 0.66) {
          mult = 0.009
        }

        if (sekilChooser < sekilProb) {

          angle = map(sin(particles[i].x * mult + i), 0, 1, 0, 10);
          angle2 = map(noise.noise2D(particles2[i].x * mult, i * mult), 0, 1, 0, 8);
          angle3 = map(sin(i + particles3[i].x * mult), 0, 1, 0, 10);


          vec = createVector(sin(angle / 2 * (i)), tan(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(sin(angle3), tan(angle3 / 2 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          mult = 0.003
          angle = map(sq(particles[i].x * mult + i), 0, 1, 0, 10);
          angle2 = map(noise.noise2D(particles2[i].y * mult, i * mult), 0, 1, 0, 8);
          angle3 = map(sin(i + particles3[i].x * mult), 0, 1, 0, 10);

          vec = createVector(sin(angle / 2 * (i)), tan(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(sin(angle3), tan(angle3 / 2 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }

      } else if (noiseChooser > 0.10 && noiseChooser < 0.25) {

        ////////////Noise2

        if (multChooser < 0.25) {
          mult = 0.002;
        } else if (multChooser > 0.25 && multChooser < 0.50) {
          mult = 0.004
        } else if (multChooser > 0.50 && multChooser < 0.75) {
          mult = 0.006
        } else if (multChooser > 0.75) {
          mult = 0.01
        }

        if (sekilChooser < sekilProb) {
          angle = map(tan(particles[i].x * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].x * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.1);


          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(tan(angle3), sin(angle3 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          mult = 0.0079
          angle = map(tan(particles[i].x * mult), 0, 1, 0, 1);
          angle2 = map(tan(particles2[i].x * mult), 0, 1, 0, 0.01);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.01);


          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(tan(angle3), sin(angle3 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }
      } else if (noiseChooser > 0.25 && noiseChooser < 0.55) {
        ////////////Noise3

        if (multChooser < 0.25) {
          mult = 0.002;
        } else if (multChooser > 0.25 && multChooser < 0.50) {
          mult = 0.004
        } else if (multChooser > 0.50 && multChooser < 0.75) {
          mult = 0.006
        } else if (multChooser > 0.75) {
          mult = 0.009
        }

        if (sekilChooser < sekilProb) {

          angle = map(tan(particles[i].x * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].x * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.1);


          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {

          angle = map(tan(particles[i].x * mult), 0, 1, 0, 0.1);
          angle2 = map(tan(particles2[i].x * mult), 0, 1, 0, 0.1);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.1);


          vec = createVector(tan(angle), tan(angle));
          vec2 = createVector(tan(angle2), sq(angle2 * i * mult));
          vec3 = createVector(sq(angle3), tan(angle3));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }

        }
      } else if (noiseChooser > 0.55 && noiseChooser < 0.70) {
        /////////Noise 4
        if (sekilChooser < sekilProb) {
          mult = 0.007
          angle = map(cos(particles[i].x * mult), 0, 1, 0, 0.01);
          angle2 = map(sin(particles2[i].x * mult), 0, 1, 0, 4);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.1);

          vec = createVector(sin(angle * (i * mult)), tan(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), cos(angle2 / 2 * (i)));
          vec3 = createVector(1 / tan(angle2 / 3 * (i * mult)), 1 / tan(angle3 / 2 * (i)));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          mult = 0.007
          angle = map(cos(particles[i].x * mult), 0, 1, 0, 0.01);
          angle2 = map(sin(particles2[i].x * mult), 0, 1, 0, 4);
          angle3 = map(tan(particles3[i].x * mult), 0, 1, 0, 0.1);

          vec = createVector(sin(angle * (i * mult)), tan(angle)); /////// tan sin  / tan tan / 
          vec2 = createVector(cos(angle2 / 2 * (i * mult)), cos(angle2 / 2 * (i)));
          vec3 = createVector(1 / tan(angle2 / 3 * (i * mult)), 1 / tan(angle3 / 2 * (i)));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }
      } else if (noiseChooser > 0.70) {

        ///////Noise 5
        if (multChooser < 0.33) {
          mult = 0.004;
        } else if (multChooser > 0.33 && multChooser < 0.66) {
          mult = 0.006
        } else if (multChooser > 0.66) {
          mult = 0.001
        }

        if (sekilChooser < sekilProb) {

          angle = map(sq(particles[i].x * mult), 0, 1, 0, 0.1);
          angle2 = map(sq(particles2[i].x * mult), 0, 1, 0, 0.1);
          angle3 = map(sin(particles3[i].x * mult), 0, 1, 0, 0.1);

          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle2 / 2 * (i * mult)), tan(angle2 / 2 * (i)));
          vec3 = createVector(tan(angle3), sin(angle3 * i));
          alp1 = 20
          alp2 = 20
          alp3 = 20
          if (bgSel > bgProb) {
            alp1 = 40
            alp2 = 40
            alp3 = 40
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        } else {
          mult = 0.009
          angle = map(sq(particles[i].x * mult * i * mult), 0, 1, 0, 1);
          angle2 = map(tan(particles2[i].x * mult + particles2[i].y * mult), 0, 1, 0, 0.007);
          angle3 = map(sin(particles3[i].x * mult), 0, 1, 0, 0.001);

          vec = createVector(tan(angle / 2 * (i * noiseStop)), sin(angle / 2 * (i))); /////// tan sin  / tan tan / 
          vec2 = createVector(tan(angle3), sin(angle / 2 * (i)))
          vec3 = createVector(tan(angle3), sq(angle3 * i));

          alp1 = 50
          alp2 = 20
          alp3 = 50
          if (bgSel > bgProb) {
            alp1 = 70
            alp2 = 40
            alp3 = 70
            if (colSel > 0.40 && colSel < 0.52) {
              alp1 = 100
              alp2 = 100
              alp3 = 100
            }
          }
        }
      }
    }


    vec.setMag(1);
    vec2.setMag(1);
    vec3.setMag(1);

    // let alp = map(dist(width / 2, height / 2, particles[i].x, particles[i].x), 0, 500, 0, 80)

    colors(127, 127, 127)

    alp1 = 70
    alp2 = 70
    alp3 = 70

    var alpha = lineColor1.setAlpha(random(alp1))
    var alpha2 = lineColor2.setAlpha(random(alp2))
    var alpha3 = lineColor3.setAlpha(random(alp3))


    // colors(random(alp1), random(alp2), random(alp3))




    particles[i].add(vec);
    particles2[i].add(vec2);
    particles3[i].add(vec3);


    if (particles[i].x > width / 10 && particles[i].x < (width - width / 10) && particles[i].y > height / 10 && particles[i].y < (height - height / 10)) {
      fill(lineColor1, alpha)
      ellipse(particles[i].x, particles[i].y, 1)
    }

    if (particles2[i].x > width / 10 && particles2[i].x < (width - width / 10) && particles2[i].y > height / 10 && particles2[i].y < (height - height / 10)) {
      fill(lineColor2, alpha2)
      ellipse(particles2[i].x, particles2[i].y, 1)
    }

    if (particles3[i].x > width / 10 && particles3[i].x < (width - width / 10) && particles3[i].y > height / 10 && particles3[i].y < (height - height / 10)) {
      fill(lineColor3, alpha3)
      ellipse(particles3[i].x, particles3[i].y, 1)
    }


  }

  if (frameCount > 1320) {
    fxpreview()
    noLoop()
  }


}


function keyPressed() {
  if (key == 's') {
    saveCanvas('HOP', 'png');
  }
}


function windowResized() {

  let size = min(windowWidth, windowHeight)
  resizeCanvas(size, size)

  frameCount = 0
  particles.length = 0;
  particles2.length = 0;
  particles3.length = 0;
  particles4.length = 0;
  particles5.length = 0;
  particles6.length = 0;
  particles7.length = 0;
  particles8.length = 0;
  particles9.length = 0;
  colors();
  background(bgColor);
  grid()
  noiseStart();
}