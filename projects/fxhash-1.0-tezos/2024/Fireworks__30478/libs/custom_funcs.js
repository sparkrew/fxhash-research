let createWidth;
let pieceSpan;
let borders, bordersColor
function fxRandCentered(center, variance){
  return ($fx.rand()*2 - 1) * variance/2 + center
}

function ltg(value) {
  // Local to global coordinates functions. 
  // @ value: coordinates given in the piece space (after borders and translation)
  // returns: value in global scale for display
  if (Array.isArray(value)) return value.map(x_ => ltg(x_))
  return value * pieceSpan * width 
}

/**
 * 
 * @param {[]} arr Sorted array of numbers.
 * @param {number} target Number to which we have to find the closest idx in the array.
 * @returns Idx of the closest element in the array
 */
function findClosest(arr, target) {
  let n = arr.length;

  // Corner cases
  if (target <= arr[0])
    return arr[0];
  if (target >= arr[n - 1])
    return arr[n - 1];

  // Doing binary search 
  let i = 0, j = n, mid = 0;
  while (i < j) {
    mid = Math.floor((i + j) / 2);

    if (arr[mid] == target)
      return arr[mid];

    // If target is less than array 
    // element,then search in left 
    if (target < arr[mid]) {

      // If target is greater than previous
      // to mid, return closest of two
      if (mid > 0 && target > arr[mid - 1])
        return getClosest(arr[mid - 1],
          arr[mid], target);

      // Repeat for left half 
      j = mid;
    }
    // If target is greater than mid
    else {
      if (mid < n - 1 && target < arr[mid + 1])
        return getClosest(arr[mid],
          arr[mid + 1],
          target);
      i = mid + 1; // update i
    }
  }

  // Only single element left after search
  return arr[mid];
}

// Method to compare which one is the more close
// We find the closest by taking the difference
//  between the target and both values. It assumes
// that val2 is greater than val1 and target lies
// between these two.
function getClosest(val1, val2, target) {
  if (target - val1 >= val2 - target)
    return val2;
  else
    return val1;
}

function polygon(x, y, rotation, radius, npoints) {
    angleMode(RADIANS)
    let angle = TWO_PI / npoints;
    if(npoints > 6){ // dans ce cas on fait une ellipse
      ellipse(x,y,radius+2,radius+2) //+2 est une correction pcq les shapes apparaissent plus grandes que les ellipses
    }
    else{
    beginShape();
    for (let i = 0; i < TWO_PI; i += angle) {
      vertex(x + cos(i + rotation) * radius, y + sin(i + rotation) * radius);
    }
    endShape(CLOSE);
  }
    angleMode(DEGREES)
  }
  
  function makeBorders(border_width) {
    left1 = [createVector(0, 0), createVector(border_width, height)];
    right1 = [
      createVector(width - border_width, 0),
      createVector(border_width, height),
    ];
    top1 = [createVector(0, 0), createVector(width, border_width)];
    bottom1 = [
      createVector(0, height - border_width),
      createVector(width, border_width),
    ];
    borders = [left1, right1, top1, bottom1];
    return borders;
  }
  
  function drawBorders(borders) {
    push()
      fill(bordersColor);
      strokeWeight(0)
    rect(borders[0][0].x, borders[0][0].y, borders[0][1].x, borders[0][1].y)
      for (let i = 0; i < 4; i++) {
        rect(borders[i][0].x, borders[i][0].y, borders[i][1].x, borders[i][1].y);
      }
    pop()
  }
  
  function fxProb(mean, std) {
    let found = false;
    let ubound = mean + std;
    let u1, u2, z;
    while (!found) {
      u1 = fxrand();
      u2 = fxrand();
      z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(TWO_PI * u2);
      z = z * Math.sqrt(std);
      z += mean;
      if (z > -0.5 && z < ubound) {
        found = true;
        // console.log('found')
        z = Math.round(z);
        return z;
      }
    }
  }
  
function granulate(amount, borderWidth, amountBorders=0) {
  loadPixels();
  const d = pixelDensity();
  let currentAmount;
  // const borderPixelsCount = 4 * (pieceWidth * d) * (pieceWidth * d)
  // const pixelsCount = 4 * (width * d) * (width * d);
  borderSize = int(borderWidth)
  // Iterate through the rows
  for (let row = 0; row < width; row++) {
    // Iterate through the columns
    for (let col = 0; col < width; col++) {
      // Calculate the index of the current pixel in the 1D array
      // print(row, col)
      if ((row < borderSize || row > width - borderSize) || (col < borderSize || col > width - borderSize)){
        if (amountBorders > 0){
          currentAmount = amountBorders
        } else continue
      } 
      else currentAmount = amount
      const pixelIndex = (row * width + col) * 4;
      const grainAmount = random(-currentAmount, currentAmount);
      pixels[pixelIndex] = pixels[pixelIndex] + grainAmount;
      pixels[pixelIndex + 1] = pixels[pixelIndex + 1] + grainAmount;
      pixels[pixelIndex + 2] = pixels[pixelIndex + 2] + grainAmount;
      // Access and transform the pixel using the calculated index
      // const pixelValue = pixelArray[pixelIndex];

      // Apply your transformation to the pixel here
      // For example, you can modify the pixel value
      // pixelArray[pixelIndex] = yourTransformation(pixelValue);
    }
  }
  updatePixels()
  }