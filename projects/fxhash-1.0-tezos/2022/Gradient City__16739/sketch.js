let grid;
let angle = 0;
let night = 0;
let img;
let n = 1;
let ma;

let cv, ctx2, ctx3, ctx4;
let c1, c2, c3, c4, c5, c6;
let palette_names = [];
let canvas_sz;
let offsetx, offsety;
let grid_cnt, palette_name;
let leftover, palette_num;
let repeats = 0;
let gradient_bg = 0;

function preload() {

  img = loadImage('./public/img/paper.jpg');
  setupHash();
  if (getHour() < 6 || getHour() >= 18) night = 1;;
  //night = 1;
  n = mapWalletInt(11, 2, 64);
  grid_cnt = ceil(Math.cbrt(n));
  // front
  palette_num = mapWalletInt(15, 0, palette.length - 1);
  //palette_num = 5
  if (mapWalletInt(11, 0, 100) > 80) gradient_bg = 1;
  colours = palette[palette_num];
  setupInitialColours();

  setRarity();

}


function setup() {

  canvas_sz = min(windowWidth, windowHeight);
  createCanvas(canvas_sz, canvas_sz, WEBGL);
  ctx = createGraphics(canvas_sz, canvas_sz)
  ctx2 = createGraphics(canvas_sz, canvas_sz)
  ctx3 = createGraphics(canvas_sz, canvas_sz)
  ctx4 = createGraphics(canvas_sz, canvas_sz)

  reset();

}


function reset() {

  if (night && !isFxpreview) {
    document.body.style.background = '#000000';
  }

  grid = [];
  grid_cnt = ceil(Math.cbrt(n));
  leftover = n - (grid_cnt * grid_cnt * grid_cnt);
  console.log("leftover", leftover)

  grid = new simpleGrid3D(grid_cnt, grid_cnt, grid_cnt, canvas_sz / 2.5, canvas_sz / 2.5, canvas_sz / 2.5);

  shuffleGrid(grid.pos);

  offsetx = (windowWidth - canvas_sz) / 2;
  offsety = (windowHeight - canvas_sz) / 2;

  // console.log(min(grid_cnt, n), grid_cnt, grid_cnt)
  // console.log(n, grid_cnt, grid_cnt * grid_cnt* grid_cnt)

  ma = atan(cos(QUARTER_PI));

  createBoxes();

  drawTextures();

}





function draw() {

  if (night && !isFxpreview) {
    background(0);
    //blendMode(MULTIPLY);
  } else {
    background(225);
  }

  push();

  if (gradient_bg) {
    setBackground(c1, c2)
  } else {
    image(img, -width / 2, -height / 2, canvas_sz, canvas_sz);
  }

  fill(210, 120);
  if (night && !isFxpreview) {
    fill(30, 220);
  }
  noStroke();
  rect(-width / 2, -height / 2, canvas_sz, canvas_sz);
  //blendMode(MULTIPLY);
  //ambientLight(240);
  //directionalLight(255, 255, 255, 1, 0, 1);
  //translate(-offsetx, -offsety);
  //blendMode(BLEND);
  drawCubes();
  blendMode(BLEND);
  //ctx4.image(cv, 0, 0);
  //image(img, -width/2, -height/2, width * 2, height * 2 )

  //cv.image(ctx4, -width/2, -height/2, width, height)


  pop();

}


function drawCubes(){

  ortho(-canvas_sz / 2, canvas_sz / 2, canvas_sz/2, -canvas_sz/2, 10, 2000);
  push();

    rotateX(ma);
    rotateY(-QUARTER_PI);
    drawBoxes();

  pop();

}


function createBoxes() {

  for (var i = 0; i < grid.pos.length; i++) {

    let g = grid.pos[i];

    if ( grid_cnt > 1 && leftover < 0 && i >= n ) {
      g.show = 0;
    } else if (grid_cnt > 1){
      g.show = mapWalletInt(29 + i, 0, 1);
    }

    if (grid_cnt > 1){
      g.show = mapWalletInt(29 + i, 0, 1);
    }

  }

}


function drawGradientTexture(_ctx, c1, c2, rot) {
  if (rot == 1) {
    linearGradient(_ctx, 0, canvas_sz / 2, canvas_sz, canvas_sz / 2, color(c1), color(c2))
  } else {
    linearGradient(_ctx, canvas_sz / 2, 0, canvas_sz / 2, canvas_sz, color(c1), color(c2))
  }
  _ctx.stroke(255);
  _ctx.strokeWeight(12);
  _ctx.noStroke();
  _ctx.rect(0, 0, canvas_sz, canvas_sz);
  randomNoise(_ctx);
}


function drawBoxes() {
  let c = 0;
  for (var i = 0; i < grid.pos.length; i++) {
    let g = grid.pos[i];
    push();
    translate(round(g.x), round(g.y), round(g.z));
    //if (g.show)
    if (g.show) drawBox(g.sz.x);
    pop();
  }
}


function drawBox(sz) {

  sz = ceil(sz);

  stroke(255);

  noStroke();

  push();

  //left
  translate(0, 0, sz / 2);
  texture(ctx3);
  plane(sz, sz)

  push();
  translate(0, 0, -sz)
  //plane2(sz)
  pop();

  texture(ctx2);

  // top
  push();
  rotateX(radians(90))
  translate(0, -sz / 2, -sz / 2)
  plane(sz, sz)
  pop();

  push();
  rotateX(radians(90))
  translate(0, -sz / 2, sz / 2)
  //plane2(sz)
  pop();

  push();
  rotateY(radians(90))
  translate(sz / 2, 0, -sz / 2)
  //plane2(sz)
  pop();

  // front
  texture(ctx);
  push();
  rotateY(radians(90))
  translate(sz / 2, 0, sz / 2)
  plane(sz, sz)
  pop();

  pop();

}


function keyPressed() {
  //console.log(keyCode);
  if (keyCode == 37) {
    n--;
    reset()
  }
  if (keyCode == 39) {
    n++;
    reset()
  }

}



function setRarity() {
  //console.log(n * n);
  window.$fxhashFeatures = {

    "Cube Count": grid_cnt * grid_cnt * grid_cnt,
    "Palette #: ": palette_num,
    "Palette Name": palette_name,
    "Gradient Background": gradient_bg == 1 ? "True" : "False",
    "Repeats": repeats,

  }

  console.log("Cube Count: ", grid_cnt * grid_cnt * grid_cnt);
  console.log("Palette #: ", palette_num);
  console.log("Palette Name: ", palette_name);
  console.log("Gradient Background: ", gradient_bg == 1 ? "True" : "False");
  console.log("Repeats: ", repeats);

  //console.log("Outline", stroke_me);
  //console.log("Border", border == 1 ? "True" : "False");


}


function setupInitialColours(){

  c1 = colours.get(mapWalletInt(16 + night, 0, 100));
  c2 = colours.get(mapWalletInt(17 + night, 0, 100));
  c3 = colours.get(mapWalletInt(20 + night, 0, 50));
  c4 = colours.get(mapWalletInt(21 + night, 0, 50));

  if (c1 == c2 && mapWalletInt(27, 0, 100) > 10) c2 = colours.get(mapWalletInt(18 + night, 0, 100));
  if (c3 == c4 && mapWalletInt(37, 0, 100) > 10) c4 = colours.get(mapWalletInt(21 + night, 0, 70));

  if (c1 == c3 && mapWalletInt(47, 0, 100) > 10) c3 = colours.get(mapWalletInt(31 + night, 0, 70));
  if (c2 == c4 && mapWalletInt(57, 0, 100) > 10) c4 = colours.get(mapWalletInt(35 + night, 0, 70));

  if (c1 == c4 && mapWalletInt(67, 0, 100) > 10) c4 = colours.get(mapWalletInt(41 + night, 0, 70));
  if (c3 == c2 && mapWalletInt(77, 0, 100) > 10) c3 = colours.get(mapWalletInt(45 + night, 0, 70));

  if (c1 == c2 && mapWalletInt(25, 0, 100) > 10) c2 = colours.get(mapWalletInt(28 + night, 0, 30));

  let n1 = getColourName(c1);
  palette_names.push(n1);
  let n2 = getColourName(c2);
  palette_names.push(n2);
  let n3 = getColourName(c3);
  palette_names.push(n3);
  let n4 = getColourName(c4);
  palette_names.push(n4);

  palette_names2 = [... new Set(palette_names)]

  if (palette_names.length > palette_names2.length) repeats = palette_names.length - palette_names2.length;
  if(palette_names2.length > 2) {
    palette_name = palette_names2[0] + " " + palette_names2[2];
  } else {
    palette_name = palette_names2[0];
  }

}



function drawTextures(){

    if (night && !isFxpreview) {
      drawGradientTexture(ctx, c2, c1, mapWalletInt(24, 0, 1))
    } else {
      drawGradientTexture(ctx, c1, c2, mapWalletInt(25, 0, 1))
    }


    // top


    if (night && !isFxpreview) {
      drawGradientTexture(ctx2, c2, c1, mapWalletInt(26, 0, 1))
    } else {
      drawGradientTexture(ctx2, c1, c2, mapWalletInt(27, 0, 1))
    }


    // left


    if (night && !isFxpreview) {
      drawGradientTexture(ctx3, c4, c3, mapWalletInt(28, 0, 1))
    } else {
      drawGradientTexture(ctx3, c3, c4, mapWalletInt(29, 0, 1))
    }

}
