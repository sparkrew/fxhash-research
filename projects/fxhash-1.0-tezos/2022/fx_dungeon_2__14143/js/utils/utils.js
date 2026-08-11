function getCanvasSize() {
  if (windowHeight > windowWidth) {
    return windowWidth
  } else {
    return windowHeight
  }
}

function removeFromArray(arr, elt) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1)
    }
  }
}

function findHeuristic(a, b) {
  // let d = dist(a.colN, a.rowN, b.colN, b.rowN)
  let d = abs(a.x - b.x) + abs(a.y - b.y)
  return d
}

function findTile(x, y) {
  if (x < 0 || y < 0 || x > mapSize - 1 || y > mapSize - 1) {
      return null
  }
  return x + y * mapSize
}

function odd(value){
  if(value % 2 == 0){ // mapSize needs to be odd
    value++
    return value
  } else {
    return value
  }
}

function customNoise(seed,noiseScale,x,y) {
  noiseSeed(seed);
  value = noise(noiseScale * x, noiseScale * y)
  return value    
}

function customNoiseGrid(seed, noiseScale, size) {
  noiseSeed(seed);
  const grid = []
  for (let x = 0; x < size; x ++) {
    const row = []
    grid[x] = row
    for (let y = 0; y < size; y ++) {
      row[y] = noise(noiseScale * x, noiseScale * y)
    }
  }
  return grid
}

function toRgb(hex, alpha=255) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b, alpha);
}

function rotate_and_draw_image(img, img_x, img_y, img_width, img_height, img_angle){
  imageMode(CENTER);
  translate(img_x+img_width/2, img_y+img_width/2);
  rotate(PI/180*img_angle);
  image(img, 0, 0, img_width, img_height);
  rotate(-PI / 180 * img_angle);
  translate(-(img_x+img_width/2), -(img_y+img_width/2));
  imageMode(CORNER);
}