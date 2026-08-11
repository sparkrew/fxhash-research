// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)   // the 64 chars hex number fed to your algorithm
//console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//


// this code writes the values to the DOM as an example
// const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container);

let grid = [];
let collapses = 0;
let gw, gh;
let pink = 0, peach = 0, orange = 0, sea_green = 0, mustard = 0, olive = 0;


var colours = new colourPool()
  .add('#FFFFFF', 1)
  .add('#ECECEC', 1)
  .add('#DDDDDD', 1)
  .add('#CCCCCC', 1)
  .add('#FF3300', 2)
  .add('#333333', 1)
  .add('#0095a8', 4)
  .add('#00616f', 4)
  .add('#000000', 6)
  .add('#FF6600', 2)
  .add('#00616f', 4)
  .add('pink', 2);

var colours2 = new colourPool()
  .add('#0095a8', 2) // aqua
  .add('#D9CAB3', 2) // lt brown
  //.add('#FF3300', 2)
  .add('#FF6600', 2)
  .add('#53aff4', 2) //  grey blue
  .add('#86DC3D', 1) // lumo green
  .add('#FFADAD', 2) // peach
  .add('#9CC094', 2) // mint
  .add('#FFD371', 2) // mustard
  .add('#8CA1A5', 2) // panzer grey
  //.add('#F08FC0', 4) // pink
  .add('#C6B4CE', 2) // mauve
  .add('#F7FD04', 1) // brt yellow
  .add('#8E9775', 2) // olive
  .add('#56776C', 2) // grey green
  .add('#EAC8AF', 2) // skintone
  .add('#5B5B5B', 1) // brown green grey
  .add('#D3E0EA', 2) // baby blue

var colours3 = new colourPool()
  .add('#FFFFFF', 1)
  .add('#ECECEC', 1)
  .add('#DDDDDD', 1)
  .add('#CCCCCC', 1)
  .add('#333333', 1)
  .add('#000000', 6)
  .add('#00616f', 3)

function setup() {

  createCanvas(windowWidth, windowHeight);
  strokeWeight(.5);
  //rectMode(CENTER)
  walletStuff();
  reset();
  noStroke();
  noLoop();
}


function reset() {

  background(255);
  grid = [];
  collapses = 0;

  chooseColourPalette();

  gw = round(mapWalletLongNum(56, 3, 40, 90));
  gh = round(mapWalletLongNum(68, 3, 2, 6));
  console.log(gh);
  addGrid(69);
  addGrid(72);

  gw *= 2;

  addGrid(73);
  addGrid(64);
  addGrid(76);
  addGrid(78);

  gw *= 2;

  addGrid(82);
  addGrid(92);
  addGrid(99);

  gw *= 2;
  gh /= 2;

  grid.push(new simpleGrid(gw, gh));
  addColour(grid[grid.length - 1], color(255, 1), 0)

  gw *= 2;
  gh /= 2;

  addGrid(59);

  grid.push(new simpleGrid(gw, gh));
  addColour(grid[grid.length - 1], color(255, 1), 0)

  gh /= 2;
  grid.push(new simpleGrid(gw, gh));
  addColour(grid[grid.length - 1], color(255, 1), 0)

  for (var i = 0; i < grid.length; i++) {
    let g = grid[i];
    sortGrid(g, i);
    sortGrid(g, i);
    //sortGrid(g, i);
  }

  setRarity();
  redraw();

}


function addGrid(n){
  grid.push(new simpleGrid(gw, gh));
  let c = getColour(n);
  checkColours(c)
  addColour(grid[grid.length - 1], color(255, 1), c)
}

function getColour(n){
  return colours.get(mapWalletLongNum(n, 3, 0, 100));
}


function chooseColourPalette(){
  if (mapWalletLongNum(126, 3, 0, 100) > 70) {
    colours = colours2;
  } else if (mapWalletLongNum(146, 3, 0, 100) > 70) {
    colours = colours3;
  }
}


function setRarity(){
  window.$fxhashFeatures = {
    "Collapses": collapses,
    "Candyfloss": pink,
    "Peachiness": peach,
    "Tangerine": orange,
    "Sea Green": sea_green,
    "Mustard": mustard,
    "Olive": olive,
  }
}


function draw() {
  background(230);
  for (var i = 0; i < grid.length; i++) {
    let g = grid[i];
    drawGrid(g);
  }
}


function sortGrid(_grid, j) {

  for (var i = _grid.pos.length - 1; i >= 0; i--) {
    let g = _grid.pos[i];
    g.on = 0;

    if (mapWalletLongNum(32 + i * 56 + j, 3, 0, 100) > 95) {
      mergeRight(_grid, g);
      mergeRight(_grid, g);
    } else {
      if (mapWalletLongNum(22 + i * 36 + j, 3, 0, 100) > 95) mergeBottom(_grid, g);
    }
  }
}


function addColour(_grid, _c1, _c2) {
  for (var i = 0; i < _grid.length; i++) {
    let g = _grid.pos[i];
    g.c = _c1;
    g.c2 = _c2;
  }
}


function drawGrid(_grid) {

  for (var i = 0; i < _grid.pos.length; i++) {
    let g = _grid.pos[i];

    if (g.on) {
      fill(g.c2);
    } else {
      fill(g.c);
    }

    noStroke();
    //strokeWeight(.5)
    //stroke(255)
    rect(g.x - g.sz.x/2, g.y - g.sz.y/2, g.sz.x, g.sz.y)
  }
}

function mergeBottom(_grid, g) {
  let bottom_neighbour = _grid.pos[g.me + _grid.cols]
  if (!g.on && g.row < _grid.rows - 1 && bottom_neighbour) {
    g.sz.y += bottom_neighbour.sz.y;
    _grid.rows--;
    collapses++;
    if (bottom_neighbour.sz.y.x > g.sz.x) g.sz.x = bottom_neighbour.sz.x;
    _grid.pos.splice(bottom_neighbour.me, 1);
    g.on = 1;
  }
}


function mergeRight(_grid, g) {
  //console.log(_grid.cols);
  let right_neighbour = _grid.pos[g.me + 1]
  if (!g.on && g.col < _grid.cols - 1 && right_neighbour) {
    g.sz.x += right_neighbour.sz.x;
    _grid.cols--;
    collapses++;
    _grid.pos.splice(right_neighbour.me, 1);
    //g.c = 0;
    g.on = 1;
  }
}


function checkColours(c){
  if (c == "pink") pink = 1;
  if (c == "#FFADAD") peach = 1;
  if (c == "#FF3300") orange = 1;
  if (c == "#00616f") sea_green = 1;
  if (c == "#FFD371") mustard = 1;
  if (c == "#8E9775") olive = 1;
}
