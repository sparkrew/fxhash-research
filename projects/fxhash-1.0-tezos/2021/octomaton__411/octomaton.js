console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

let w;
let c;
let r;

let state;
let next;
let count;

let f;
let t;

function setup() {
  createCanvas(729, 729);
  w = 3;
  c = floor(width / w);
  r = floor(height / w);
  f = 0;
  t = rndIntMinMax(30,40);
  //2D array in JS
  state = new Array(c);
  for (let i = 0; i < c; i++) {
    state[i] = new Array(r);
  }
  next = new Array(c);
  for (i = 0; i < c; i++) {
    next[i] = new Array(r);
  }
  count = new Array(c);
  for (i = 0; i < c; i++) {
    count[i] = new Array(r);
  }
  init();
  stroke(0);
  fill(0);
}

function draw() {
  background(255);
  if (f < t) { 
    generate();
    if(f%3==0){ 
     // setBorder(rndIntMinMax(3, 8));
    }
  } 

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (state[i][j] == 1) rect(i * w, j * w, w - 1, w - 1);
    }
  }
  f++;
}

function mousePressed() {
  init();
  f = 0;
  t = rndIntMinMax(30,40);
}

function init() {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      state[i][j] = 0;
      next[i][j] = 0;
      count[i][j] = 0;
    }
  }
  for (let i = 0; i < 2; i++) {
    setRectB(rndInt(6,c / 2), rndInt(6,r / 2), rndInt(50), rndInt(50));
  }
  for (let i = 0; i < 2; i++) {
    setCross(rndInt(c/2),rndInt(r/2),rndInt(50));
  }
  setBorder(rndInt(4, 12));
  let rs = rndInt(10,50);
  setRect(floor(c/2), floor(r/2), rs, rs);
  symmetryX();
  symmetryY();
}

function generate() {
  for (let x = 0; x < c; x++) {
    for (let y = 0; y < r; y++) {
      let n = 0;
      if (state[(c + x - 1) % c][(r + y - 1) % r] == 1) n++;
      if (state[(c + x - 2) % c][(r + y) % r] == 1) n++;
      if (state[(c + x - 1) % c][(r + y + 1) % r] == 1) n++;

      if (state[(c + x) % c][(r + y - 2) % r] == 1) n++;
      if (state[(c + x) % c][(r + y + 2) % r] == 1) n++;

      if (state[(c + x + 1) % c][(r + y - 1) % r] == 1) n++;
      if (state[(c + x + 2) % c][(r + y) % r] == 1) n++;
      if (state[(c + x + 1) % c][(r + y + 1) % r] == 1) n++;

      if (count[x][y] < 8) {
        if (state[x][y] == 1 && n < 2) {
          next[x][y] = 0;
          count[x][y]++; 
        } else if (state[x][y] == 1 && n > 3) {
          next[x][y] = 0;
          count[x][y]++; 
        } else if (state[x][y] == 0 && n == 3) {
          next[x][y] = 1;
          count[x][y]++; 
        } else if (state[x][y] == 0 && n == 2) {
          next[x][y] = 1;
          count[x][y]++; 
        } else {
          next[x][y] = state[x][y]; // Stasis
        }
      }
    }
  }
  for (let x = 0; x < c; x++) {
    for (let y = 0; y < r; y++) {
      state[x][y] = next[x][y];
    }
  }
}

function setRect(x, y, w, h) {
  for (let i = x - floor(w / 2); i < x + floor(w / 2); i++) {
    for (let j = y - floor(h / 2); j < y + floor(h / 2); j++) {
      state[i % (c - 1)][j % (r - 1)] = 1;
    }
  }
}

function setRectB(x, y, w, h) {
  for (let i = (x - floor(w / 2)); i < (x + floor(w / 2)); i++) {
    state[(i+c) % c][(y - floor(h / 2)+r) % r] = 1;
    state[(i+c) % c][(y + floor(h / 2)+r) % r] = 1;
  }
  for (let j = (y - floor(h / 2)); j < (y + floor(h / 2)); j++) {
    state[(x - floor(w / 2)+c) % c][(j+r) % r] = 1;
    state[(x + floor(w / 2)+c) % c][(j+r) % r] = 1;
  }
}

function setCross(x, y, s) {
  for (let i = -s; i <=s; i++) {
    state[(x+i+c)%c][(y+i+r)%r] = 1;
    state[(x+i+c)%c][(y-i+r)%c] = 1;
  }

}

function setBorder(b) {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (i < b || j < b || i > c - b || j > r - b) state[i][j] = 1;
    }
  }
}

function symmetryX() {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (state[i][j] == 1) state[(c - i-1) % c][j] = 1;
    }
  }
}

function symmetryY() {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (state[i][j] == 1) state[i][(r - j-1) % r] = 1;
    }
  }
}

function rndIntMinMax(min, max){ 
  return(floor(fxrand()*(max-min+1)+min));
}

function rndInt(max){
  return(floor(fxrand()*abs(max+1)));
}
               
               
               
