let bgCol = '#222222';
let seed = fxrand() * 123456789;
let colors = [
  ['#011627', '#9D061A', '#0C6E61', '#E08300'],
  ['#002626', '#D74009', '#941B0C', '#FFA10A'],
  ['#2A7A60', '#34623F', '#1E2F23', '#B39C4D']
]
let multiplier = fxrand();

function setup(){
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  randomSeed(seed);
  pixelDensity(1);
  wh = min(width, height);
  pg = createGraphics(2000, 2000);
  bg = createGraphics(2000, 2000);

  palette = random(colors);
  index = int(random(0, palette.length));
  bgCol = palette[index];
  palette.splice(index, 1);
  background(bgCol);

  if(multiplier < 0.02){
    multiplier = 1;
  }else if(multiplier < 0.15){
    multiplier = 2;
  }else if(multiplier > 0.85){
    multiplier = 8;
  }else{
    multiplier = 4;
  }

  back(bg);
  pg.strokeWeight(0.5);
  generate(200, 200, pg.width - 400, pg.height - 400, pg);
  image(bg, 0, 0, wh, wh);
  image(pg, 0, 0, wh, wh);

  loadPixels();
  let d = pixelDensity();
  let img = 4 * (width * d) * (height * d);
  for(let i = 0; i < img; i+=4){
    pixels[i] += fxrand() * 40;
    pixels[i + 1] += fxrand() * 40;
    pixels[i + 2] += fxrand() * 40;
    pixels[i + 3] += fxrand() * 40;
  }
  updatePixels();
}

function generate(x, y, w, h, buffer){
  col = color(random(palette))

  var splitWidth = random(1) > 0.5;
  var splitWhere = random(0.4, 0.6);

  if(splitWidth && w > 100 * multiplier)
  {
    generate(x, y, w * splitWhere, h, buffer);
    generate(x + (w * splitWhere), y, w * (1 - splitWhere), h, buffer);
  }
  else if(h > 100 * multiplier)
  {
    generate(x, y, w, h * splitWhere, buffer);
    generate(x, y + (h * splitWhere), w, h * (1 - splitWhere), buffer);
  }

  if((w > 200 * multiplier || h > 200 * multiplier)){
    openShape(x, y, w, h, col, buffer);
  }else{
    random([openShape, closedShapeHor, closedShapeVert])(x, y, w, h, col, buffer);
  }
}

function back(buffer){
  buffer.strokeWeight(1)
  for(let i = 0; i<10000; i++){
    buffer.stroke(random(0, 255), 5);
    y = map(i, 0, 10000, 0, buffer.height);
    buffer.line(0, y+ map(fxrand(), 0, 1, -200, 200), buffer.width, y+ map(fxrand(), 0, 1, -200, 200));
  }
}

function closedShapeChaotic(x, y, xSize, ySize, col, buffer){
  var x1 = x;
  var x2 = x + xSize;
  var y1 = y;
  var y2 = y + ySize;

  buffer.stroke(col);

  for(let i = 0; i < (xSize + ySize) / 2; i++){
    buffer.line(random(x1, x2), random(y1, y2), random(x1, x2), random(y1, y2))
  }
}

function closedShapeHor(x, y, xSize, ySize, col, buffer){
  var x1 = x;
  var x2 = x + xSize;
  var y1 = y;
  var y2 = y + ySize;

  buffer.stroke(col);

  for(let i = 0; i < ySize; i++){
    var y = map(i, 0, ySize, y1, y2)
    buffer.line(
      x1 + map(fxrand(), 0, 1, -20, 20),
      y + map(fxrand(), 0, 1, -20, 20),
      x2 + map(fxrand(), 0, 1, -20, 20),
      y + map(fxrand(), 0, 1, -20, 20)
    )
  }
}

function closedShapeVert(x, y, xSize, ySize, col, buffer){
  var x1 = x;
  var x2 = x + xSize;
  var y1 = y;
  var y2 = y + ySize;

  buffer.stroke(col);

  for(let i = 0; i < xSize; i++){
    var x = map(i, 0, xSize, x1, x2)
    buffer.line(
      x + map(fxrand(), 0, 1, -20, 20),
      y1 + map(fxrand(), 0, 1, -20, 20),
      x + map(fxrand(), 0, 1, -20, 20),
      y2 + map(fxrand(), 0, 1, -20, 20)
    )
  }
}

function openShape(x, y, xSize, ySize, col, buffer){
  var x1 = x;
  var x2 = x + xSize;
  var y1 = y;
  var y2 = y + ySize;

  buffer.stroke(col);

  for(let i = 0; i < 20; i++){
    buffer.line(
      x1 + map(fxrand(), 0, 1, -20, 20),
      y1 + map(fxrand(), 0, 1, -20, 20),
      x2 + map(fxrand(), 0, 1, -20, 20),
      y1 + map(fxrand(), 0, 1, -20, 20)
    )
    buffer.line(
      x2 + map(fxrand(), 0, 1, -20, 20),
      y1 + map(fxrand(), 0, 1, -20, 20),
      x2 + map(fxrand(), 0, 1, -20, 20),
      y2 + map(fxrand(), 0, 1, -20, 20)
    )
    buffer.line(
      x2 + map(fxrand(), 0, 1, -20, 20),
      y2 + map(fxrand(), 0, 1, -20, 20),
      x1 + map(fxrand(), 0, 1, -20, 20),
      y2 + map(fxrand(), 0, 1, -20, 20)
    )
    buffer.line(
      x1 + map(fxrand(), 0, 1, -20, 20),
      y2 + map(fxrand(), 0, 1, -20, 20),
      x1 + map(fxrand(), 0, 1, -20, 20),
      y1 + map(fxrand(), 0, 1, -20, 20)
    )
  }
}

function windowResized(){
  wh = min(windowWidth, windowHeight);
  resizeCanvas(wh, wh);
  background(bgCol);

  image(bg, 0, 0, wh, wh);
  image(pg, 0, 0, wh, wh);

  loadPixels();
  let d = pixelDensity();
  let img = 4 * (width * d) * (height * d);
  for(let i = 0; i < img; i+=4){
    pixels[i] += fxrand() * 40;
    pixels[i + 1] += fxrand() * 40;
    pixels[i + 2] += fxrand() * 40;
    pixels[i + 3] += fxrand() * 40;
  }
  updatePixels();
}
