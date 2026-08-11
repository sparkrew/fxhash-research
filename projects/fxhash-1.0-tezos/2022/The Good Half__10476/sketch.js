let rows = 10;
let colourProb = 30;

let colors = [
  ['#FBF8CC','#FDE4CF','#FFCFD2','#F1C0E8','#CFBAF0','#A3C4F3','#90DBF4','#8EECF5','#98F5E1','#B9FBC0'],
  ['#EAE4E9','#FFF1E6','#FDE2E4','#FAD2E1','#E2ECE9','#BEE1E6','#F0EFEB','#DFE7FD','#CDDAFD'],
  ['#E2E2DF','#D2D2CF','#E2CFC4','#F7D9C4','#FAEDCB','#C9E4DE','#C6DEF1','#DBCDF0','#F2C6DE','#F9C6C9']
];

let darkPallete = [
  '#26324a', '#221f1f', '#242726', '#2e3233', '#2a1f15', '#263238', '#292c1b'
]

let fontPath = './fonts'

const fonts = [
  {
    name: 'Cinzel',
  },
  {
    name: 'Archivo',
  },
  {
    name: 'BioRhyme',
  },
  {
    name: 'Cormorant',
  },
  {
    name: 'Domine',
  },
  {
    name: 'Epilogue',
  },
  {
    name: 'Hahmlet',
  },
  {
    name: 'Inter',
  },
  {
    name: 'JetBrains_Mono',
  },
  {
    name: 'Kanit',
  },
  {
    name: 'Manrope',
  },
  {
    name: 'Montserrat',
  },
  {
    name: 'Nunito',
  },
  {
    name: 'Old_Standard_TT',
  },
  {
    name: 'Open_Sans',
  },
  {
    name: 'Oswald',
  },
  {
    name: 'Oxygen',
  },
  {
    name: 'Cormorant',
  },
  {
    name: 'Playfair_Display',
  },
  {
    name: 'Poppins',
  },
  {
    name: 'Sora',
  }
];

let content = 'i';

function preload() {
  // content = `${i} ${j}`;
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  content = getRandomElement(characters)
  console.log(content);
}

let palette = colors[0];
let textColour;
function setup() {
  createCanvas(600, 600);
  noLoop();
  rows = randInt(10, 18);
  palette = getRandomElement(colors);
  let textPallette = getRandomElement(colors);
  textColour = getRandomElement(darkPallete);
}

let bgColor = 'white';
let paint = 'black';

let colorMatrix = [];


function fillBox(x, y, side, i, j) {

  push();
  strokeWeight(1);

  let result = randInt(0, 100);
  if (result > colourProb) {
    fill('white');
  } else {
    let c = color(getRandomElement(palette));
    fill(c)

    if (!colorMatrix[i]) colorMatrix[i] = [];
    colorMatrix[i][j] = c;
  }
  noStroke();
  rect(x, y, side, side);
  pop();
  return result < colourProb;
}

let angleMatrix = [];

function writeText(x, y, boxSide, textSizeValue, i, j) {
  // fill('black');
  fill(textColour)
  noStroke();

  push();
  translate(x + boxSide/2, y+ boxSide/2);
  let angles = [0, 90, -90, -180];
  let angle = getRandomElement(angles);
  if (!angleMatrix[i]) angleMatrix[i] = [];
  let c = 'white'
  if (angle === 90) {
    if (j > 0 && angleMatrix[i][j-1]=== -90) {
      let angles = [0, -90];
      angle = getRandomElement(angles)
    } else {
      c = colorMatrix[i] && colorMatrix[i][j-1] ? colorMatrix[i][j-1] : 'white';
    }
  }

  if (angle === -180) {
    if (i > 0 && angleMatrix[i-1][j]=== 0) {
      let angles = [0, -90];
      angle = getRandomElement(angles)
    } else {
      c = colorMatrix[i-1] && colorMatrix[i-1][j] ? colorMatrix[i-1][j] : 'white';
    }
  }
  angleMatrix[i][j] = angle;
  
  rotate(radians(angle));  

  let randFont = getRandomElement(fonts)
  console.log(i, j, randFont.name);
  
  textFont(randFont.name);

  let yText = boxSide/1.75

  text(content, -(textSizeValue/10), yText );

  // drawPointer(-(textSizeValue/10), yText)

  if (angle === 90 || angle === -180) {
    hideOtherHalf(i,j, boxSide, c);
  }
  pop();
}

function drawPointer(x, y) {
  push();
  strokeWeight(1);
  stroke('red')
  noFill();
  // circle(0, boxSide/2, 5);
  circle(x, y, 5);
  pop();
  
}

function hideOtherHalf(i, j, boxSide, c) {

  c = c ? c : 'white';

  push();
  fill(c);
  stroke('red');
  noStroke();
  rect(-boxSide/7, boxSide/2+1, boxSide/2, boxSide/4.5);
  pop();
}

function draw() {
  rows = randInt(8, 10);
  palette = getRandomElement(colors);

  background(bgColor);
  stroke(paint);

  let boxSide = width/rows;
  let textSizeValue = boxSide/2.5;

  textSize(textSizeValue);

  let x = 0, y = 0;
  let coloured = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      let isColoured = fillBox(x, y, boxSide, i, j);
      if (isColoured) coloured++;
      writeText(x, y, boxSide, textSizeValue, i, j);
      x += boxSide;
    }
    y += boxSide;
    x = 0;
  }

  window.$fxhashFeatures = {
    coloured,
    letter: content
  }

  fxpreview();
}


function getRandomElement(array) {
  let index = randInt(0, array.length - 1);
  return array[index];
}

function randInt(min, max) { // min and max included 
  return Math.floor(fxrand() * (max - min + 1) + min)
}