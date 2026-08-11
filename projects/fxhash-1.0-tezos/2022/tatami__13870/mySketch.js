let randInt = (a, b) => (floor(random(a, b))); 

let margin = 20;
let gutter = 10;
let M, N;
let sw, sh;

let colors = ["#f3e17e", "#dd483c", "#4b8a5f", "#efa1a7", "#FEF9A7", "#FAC213", "#F77E21", "#D61C4E", "#37E2D5", "#590696", "#C70A80", 
"#FBCB0A", "#00FFAB", "#14C38E", "#B8F1B0", "#E3FCBF", "#2F8F9D", "#3BACB6", "#82DBD8", "#B3E8E5", "#4700D8", "#9900F0", "#F900BF", "#FF85B3"];
let base = ["#0d150b", "#0d150b", "#0b0d15", "#130b15", "#0b1513"];

function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
  Math.seedrandom(fxhash);

  M = randInt(15, 5);
  N = M;
  sw = (width - (M-1)*gutter - 2*margin) / M;
  sh = (height - (N-1)*gutter - 2*margin) / N;
}

function draw() {
  background(random(base));
  
  divide(0, 0, M, N);
}

function divide(i, j, m, n) {
  let p = 1/3;
  
  if (m > 2 && n > 2) {
    // can divide either way
    if (random() < 1/2) {
      divideW(i, j, m, n);
    } else {
      divideH(i, j, m, n);
    }
    return;
  } else if (m > 2) {
    // can only divide by width
    divideW(i, j, m, n);
  } else if (n > 2) {
    // can only divide by height
    divideH(i, j, m, n);
  } else if (m == 2 && n == 2) {
    // 2x2 square
    if (random() < p) {
      if (random() < 1/2) {
        divideW(i, j, m, n);
      } else {
        divideH(i, j, m, n);
      }
    } else {
      makePanel(i, j, m, n);
    }
  } else if (m == 2) {
    // 2x1 rectangle
    if (random() < p) {
      divideW(i, j, m, n);
    } else {
      makePanel(i, j, m, n);
    }
  } else if (n == 2) {
    // 1x2 rectangle
    if (random() < p) {
      divideH(i, j, m, n);
    } else {
      makePanel(i, j, m, n);
    }
  } else {
    makePanel(i, j, m, n);
  }
}

function divideW(i, j, m, n) {
  let div = randInt(1, m);
  divide(i, j, div, n);
  divide(i+div, j, m-div, n);
}

function divideH(i, j, m, n) {
  let div = randInt(1, n);
  divide(i, j, m, div);
  divide(i, j+div, m, n-div);
}

function makePanel(i, j, m, n) {
  let x = margin + i*gutter + i*sw;
  let y = margin + j*gutter + j*sh;
  let w = m*sw + (m-1)*gutter;
  let h = n*sh + (n-1)*gutter;
  
  let pal = shuffle([random(base), random(colors)]);
  let panel = createGraphics(w, h);
  panel.background(pal[0]);
  
  let grph = createGraphics(w, h);
  grph.noStroke();
  grph.fill(pal[1]);
  
  if (random() < 1/2) {
    // spirals
    let d = 2*sqrt(sq(w)+sq(h));
    let n = randInt(4, 8);
    let thetaStep = TAU/n;
    let theta0 = random(TAU);
    let rot = random(-1, 1)*0.04;
    let thetaCut = random([1/3, 1/2, 2/3]);
    let thetaFlip = 10;
    let xC = random(w/4, 3*w/4);
    let yC = random(h/4, 3*h/4);

    while (d > 0) {
      for (let theta = theta0; theta < theta0+TAU; theta += thetaStep) {
        grph.arc(xC, yC, d, d, theta, theta+thetaStep*thetaCut);
        grph.erase();
        grph.arc(xC, yC, d, d, theta+thetaStep*thetaCut, theta+thetaStep);
        grph.noErase();
      }
      d -= 0.5;
      theta0 += rot;
      if (d % thetaFlip == 0) rot *= -1;
    }
  } else {
    // circles
    let d = 2*sqrt(sq(w)+sq(h));
    let n = randInt(6, 15);
    let dStep = d/n;
    let dCut = random([1/3, 1/2, 2/3]);
    let xC = random(w/4, 3*w/4);
    let yC = random(h/4, 3*h/4);

    while (d > 0) {
      grph.circle(xC, yC, d);
      if (d > dStep/2) {
        grph.erase();
        grph.circle(xC, yC, d-dCut*dStep);
        grph.noErase();
      }
      d -= dStep;
    }
  }
  
  panel.image(grph, 0, 0);
  image(panel, x, y);
}