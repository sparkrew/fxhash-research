let p5Canvas;

let SIZE = 800;
let DENSITY = 4;
// let COLS = 160;
// let ROWS = 160;
let COLS = 200;
let ROWS = 200;
let CELLS = COLS * ROWS;
let CELL_SIZE = 4;

pixelMoves = [[]];
for (let i=1;i<10;i++) {
  //pixelMoves.push(moves.sort(() => fxrand() - 0.5));
  //let newMoves = [...moves];
  //newMoves.sort(() => (fxrand() > .5) ? 1 : -1);
  let newMoves = [];
  for(let j=0;j<10;j++) {
    newMoves.push(
      {
        x: Math.floor(fxrand() * 11) - 5,
        y: Math.floor(fxrand() * 11) - 5
      }
    );
  }
  pixelMoves.push(newMoves);
}
//console.log(pixelMoves);


let pixels = new Array(CELLS).fill(0);
let energy = new Array(CELLS).fill(0);
//let pixels = new Array(CELLS).fill(0);

for (let x=0;x<200;x++) {
  //let pxInterval = Math.floor(fxrand() * 20) + 10;
  if (x%10===0) {
    //let yo = Math.floor(fxrand() * 11) - 5;
    if (pattern === 'Horizontal') {
      let yo = 0;
      let y=0;
      pixels[cellIndex(x, y)] = 1;
      y=25+yo;
      pixels[cellIndex(x, y)] = 2;
      y=50+yo;
      pixels[cellIndex(x, y)] = 3;
      y=75+yo;
      pixels[cellIndex(x, y)] = 4;
      y=100+yo;
      pixels[cellIndex(x, y)] = 5;
      y=125+yo;
      pixels[cellIndex(x, y)] = 6;
      y=150+yo;
      pixels[cellIndex(x, y)] = 7;
      y=175+yo;
      pixels[cellIndex(x, y)] = 8;
      y=199;
      pixels[cellIndex(x, y)] = 9;
    }

    if (pattern === 'Vertical') {
      let yo = 0;
      let y=15;
      pixels[cellIndex(y, x)] = 1;
      y=25+yo;
      pixels[cellIndex(y, x)] = 2;
      y=50+yo;
      pixels[cellIndex(y, x)] = 3;
      y=75+yo;
      pixels[cellIndex(y, x)] = 4;
      y=100+yo;
      pixels[cellIndex(y, x)] = 5;
      y=125+yo;
      pixels[cellIndex(y, x)] = 6;
      y=150+yo;
      pixels[cellIndex(y, x)] = 7;
      y=175+yo;
      pixels[cellIndex(y, x)] = 8;
      y=185;
      pixels[cellIndex(y, x)] = 9;
    }
  }
}

if (pattern === 'X') {
  pixels[cellIndex(90, 90)] = 1;
  pixels[cellIndex(110, 90)] = 1;
  pixels[cellIndex(90, 110)] = 1;
  pixels[cellIndex(110, 110)] = 1;

  pixels[cellIndex(80, 80)] = 2;
  pixels[cellIndex(120, 80)] = 2;
  pixels[cellIndex(80, 120)] = 2;
  pixels[cellIndex(120, 120)] = 2;

  pixels[cellIndex(70, 70)] = 3;
  pixels[cellIndex(130, 70)] = 3;
  pixels[cellIndex(70, 130)] = 3;
  pixels[cellIndex(130, 130)] = 3;

  pixels[cellIndex(60, 60)] = 4;
  pixels[cellIndex(140, 60)] = 4;
  pixels[cellIndex(60, 140)] = 4;
  pixels[cellIndex(140, 140)] = 4;

  pixels[cellIndex(50, 50)] = 5;
  pixels[cellIndex(150, 50)] = 5;
  pixels[cellIndex(50, 150)] = 5;
  pixels[cellIndex(150, 150)] = 5;

  pixels[cellIndex(40, 40)] = 6;
  pixels[cellIndex(160, 40)] = 6;
  pixels[cellIndex(40, 160)] = 6;
  pixels[cellIndex(160, 160)] = 6;

  pixels[cellIndex(30, 30)] = 7;
  pixels[cellIndex(170, 30)] = 7;
  pixels[cellIndex(30, 170)] = 7;
  pixels[cellIndex(170, 170)] = 7;

  pixels[cellIndex(20, 20)] = 8;
  pixels[cellIndex(180, 20)] = 8;
  pixels[cellIndex(20, 180)] = 8;
  pixels[cellIndex(180, 180)] = 8;

  pixels[cellIndex(10, 10)] = 8;
  pixels[cellIndex(190, 10)] = 8;
  pixels[cellIndex(10, 190)] = 8;
  pixels[cellIndex(190, 10)] = 8;
}

if (pattern === 'Box') {
  let c = 1;
  for (let x=0;x<200;x++) {
    pixels[cellIndex(x, 0)] = c;
    pixels[cellIndex(x, 199)] = c;
    pixels[cellIndex(0, x)] = c;
    pixels[cellIndex(199, x)] = c;
    c += 1;
    if (c>9) { c=1; }
  }
}

// for (let i=0;i<2;i++) {
//   pixels[Math.floor(fxrand() * CELLS)] = 1;
//   pixels[Math.floor(fxrand() * CELLS)] = 2;
//   pixels[Math.floor(fxrand() * CELLS)] = 3;
//   pixels[Math.floor(fxrand() * CELLS)] = 4;
//   pixels[Math.floor(fxrand() * CELLS)] = 5;
//   pixels[Math.floor(fxrand() * CELLS)] = 6;
//   pixels[Math.floor(fxrand() * CELLS)] = 7;
//   pixels[Math.floor(fxrand() * CELLS)] = 8;
//   pixels[Math.floor(fxrand() * CELLS)] = 9;
// }


function setup() {
  p5Canvas = createCanvas(800, 800);
  //orbitControl();
  pixelDensity(DENSITY);
  smooth();
  frameRate(30);
  noStroke();
  //noLoop();

  renderPixels();
}

let changes = 0;

function draw() {
  let newPixels = [...pixels];
  pixels.map((pixel, index) => {
    if (pixel !== 0) {
      for (let i=0;i<10;i++) {
        let move = pixelMoves[pixel][i];
        let [x, y] = cellXY(index);
        let yo = 0;
        if (x+move.x>ROWS-1) { yo = -1; }
        if (x+move.x<0) { yo = 1; }
        //if (x+move.x>ROWS-1 || y+move.y>COLS-1 || x+move.x<0 || y+move.y<0) { continue; }

        let px = cellIndex(x+move.x, y+move.y+yo);
        if (pixels[px] === 0) {
          changes += 1;
        //if (pixels[px] !== undefined) {
          newPixels[px] = pixel;
          //console.log(index, pixel);
          break;
        }
      }
    }
  });
  pixels = newPixels;
  renderPixels();

  //console.log('loop');
  //let blanks = pixels.findIndex(p => p===0);
  //console.log(blanks);
  //if (frameCount === 10) {
  // if (blanks === -1) {
  //   noLoop();
  // }

  //console.log('changes');
  if (changes === 0) {
    //console.log('done');
    noLoop();
    fxpreview();
  } else {
    changes = 0;
  }
}

function renderPixels() {
  for (let i=0;i<CELLS;i++) {
    const [x, y] = cellXY(i);
    const cx = x * CELL_SIZE;
    const cy = y * CELL_SIZE;
    const color = pixels[i]===0 ? '#000' : colors[pixels[i]-1];
    fill(color);
    rect(cx, cy, CELL_SIZE, CELL_SIZE);
    //rect(cx+1, cy+1, CELL_SIZE-1, CELL_SIZE-1);
  }
}

function cellXY(i) {
  const x = i % COLS;
  const y = Math.floor(i / ROWS);
  return [x, y];
}

function cellIndex(x, y) {
  return (y * COLS) + x;
}

function northIndex(x, y) {
  if (y===0) { return -1; }
  return cellIndex(x, y-1);
}

function southIndex(x, y) {
  if (y===ROWS-1) { return -1; }
  return cellIndex(x, y+1);
}

function eastIndex(x, y) {
  if (x===COLS-1) { return -1; }
  return cellIndex(x+1, y);
}

function westIndex(x, y) {
  if (x===0) { return -1; }
  return cellIndex(x-1, y);
}

function neighborCells(x, y) {
  let neighbors = [];
  neighbors.push(northIndex(x, y));
  neighbors.push(southIndex(x, y));
  neighbors.push(eastIndex(x, y));
  neighbors.push(westIndex(x, y));
  return neighbors.filter(n => n !== -1);
}