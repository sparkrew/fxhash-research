// Reference
//  https://www.youtube.com/watch?v=0ZONMNUKTfU

let field;
const rez = 8;
const increment = 0.1;
let cols, rows;
let zOffset = 0;

function setup() {
  createCanvas(1112, 1112);
	colorMode(HSB, 255);
  cols = 2 + width / rez;
  rows = 2 + height / rez;
  field = make2DArray(cols, rows);
}

function draw() {
  // background(127);
  updateField();
  drawField();
}

const updateField = () => {
  let xOffset = 0;
  for (let i = 0; i < cols; i++) {
    let yOffset = 0;
    for (let j = 0; j < rows; j++) {
      field[i][j] = map(noise(xOffset, yOffset, zOffset), 0, 1, -1, 1);
      yOffset += increment;
    }
    xOffset += increment;
  }
  zOffset += 0.03;
};

const drawField = () => {
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      // Draw base pattern
      // stroke(field[i][j] * 255);
      // strokeWeight(rez * 0.4);
      // point(i * rez, j * rez);
      fill(255 - 100 + field[i][j] * 155, 255, 100 + field[i][j] * 155);
      noStroke();
      square(i * rez, j * rez, rez);

      // Draw lines
      const x = i * rez;
      const y = j * rez;
      const a = createVector(x + rez * 0.5, y);
      const b = createVector(x + rez, y + rez * 0.5);
      const c = createVector(x + rez * 0.5, y + rez);
      const d = createVector(x, y + rez * 0.5);
      const state = getState(
        ceil(field[i][j]),
        ceil(field[i + 1][j]),
        ceil(field[i + 1][j + 1]),
        ceil(field[i][j + 1])
      );
      stroke(205);
      strokeWeight(1);
      // console.log(state);
      // line(a.x, a.y, b.x, b.y);
      switch (state) {
        case 1:
          lineVector(c, d);
          break;
        case 2:
          lineVector(b, c);
          break;
        case 3:
          lineVector(b, d);
          break;
        case 4:
          lineVector(a, b);
          break;
        case 5:
          lineVector(a, d);
          lineVector(b, c);
          break;
        case 6:
          lineVector(a, c);
          break;
        case 7:
          lineVector(a, d);
          break;
        case 8:
          lineVector(a, d);
          break;
        case 9:
          lineVector(a, c);
          break;
        case 10:
          lineVector(a, b);
          lineVector(c, d);
          break;
        case 11:
          lineVector(a, b);
          break;
        case 12:
          lineVector(b, d);
          break;
        case 13:
          lineVector(b, c);
          break;
        case 14:
          lineVector(c, d);
          break;
      }
    }
  }
};

const lineVector = (v1, v2) => {
  line(v1.x, v1.y, v2.x, v2.y);
};

const getState = (a, b, c, d) => {
  return a * 8 + b * 4 + c * 2 + d * 1;
};

const make2DArray = (cols, rows) => {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
};
