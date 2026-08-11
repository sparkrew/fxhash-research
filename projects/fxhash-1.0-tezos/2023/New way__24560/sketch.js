var t,chosenCol;

var paletteBgd = ["#FCF5F5", "#EDE7E7", "#0A0A0C"];
var paletteLine = ["#0F79A9", "#251B4D", "#E25E74", "#048F7C", "#FCBE0E", "#CF4614", "#0E889F"];
var pall;

var t = 0;
var dens;


function setup() {
  size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  chosenCol = int(get_random(0, paletteBgd.length));
  background(paletteBgd[chosenCol]);

  pixelDensity(4);
  dens = pixelDensity();

  // Generate 10 random points
  let points = [];
  
  for (let i = 0; i < 30; i++) {
    points.push([get_random(size/20, size - size/20), get_random(size/20, size - size/20)]);
  }
  
  // Draw the rectangle in the background
  push();
  rectMode(CENTER);
  strokeWeight(size/200);
  chosenCol = int(get_random(0, paletteBgd.length));
  stroke(paletteBgd[chosenCol]);

  chosenCol = int(get_random(0, paletteBgd.length));
  fill(paletteBgd[chosenCol]);
  rect(size/2,size/2,size-(size/get_random(2,5)),size-(size/get_random(2,5)));
  pop();

  // Connect the points with a bezier curve
  noFill();

  //line ----------------------------------
  for (i = 0; i < 3; i ++) {
    
  push();
  strokeWeight(get_random(size/400, size/30));
  chosenCol = int(get_random(0, paletteLine.length));
  stroke(paletteLine[chosenCol]);
  beginShape();
  
  for (let i = 0; i < points.length - int(get_random(1,30)); i++) {
    let x1 = points[i+1][0];
    let y1 = points[i][1];
    let x2 = points[i + 1][0];
    let y2 = points[i + 1][1];

    // Add a vertex at the starting point of the curve
    if (i === 0) {
      vertex(x1, y1);
    }
    // Draw the curve
    bezierVertex(x1, y1, get_random(x1, x2), get_random(y1, y2), x2, y2);
  }
  endShape();
  pop();
  }

  // Draw the circle in random postion and random color from paletteLine array 
  push();
  noStroke();
  chosenCol = int(get_random(0, paletteLine.length));
  fill(paletteLine[chosenCol]);
  ellipse(get_random(size/20, size - size/20), get_random(size/20, size - size/20), size/10, size/10);
  pop();

  //grain
  push();
  imgGrain = createImage(width, height);
  imgGrain.loadPixels();
  for (let i = 0; i < dens * (width * height); i += dens) {
      grc = color(random(255));
      imgGrain.pixels[i] = red(grc);
      imgGrain.pixels[i + 1] = green(grc);
      imgGrain.pixels[i + 2] = blue(grc);
      imgGrain.pixels[i + 3] = alpha(grc);
  }
  imgGrain.updatePixels();
  tint(255,20);
  image(imgGrain, 0, 0, width, height);
  pop();
  
} // end of setup

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == "s" || key == "S") save("Title" + int(random(0, 1000)) + ".png");
}

// **************************
// *        Random          *
// **************************

function get_random(min, max) {
  return min + fxrand() * (max - min);
}
