let img;
let points = [];
let triangles
let colorLimits= [20, 50, 70, 90, 110, 130, 150, 180]
let colorLimitsSpaced= [20, 50, 90, 130, 170, 190]
let colorLimitsLow = [10, 30, 50, 70, 90]
let colorLimitsHigh = [110, 130, 150, 170, 190]

let colorLimitsSpaced1 = [90, 130, 170, 190]
let colorLimitsSpaced2= [20, 50, 90, 130, 160]

let canvasSizeW
let canvasSizeH

let landscapeIndex;
let colorIndex;
let triIdx
let randTri
let scale
let iterative
let bg

function preDraw(){
  let seed=floor(991354*fxrand())
  randomSeed(seed);
  noiseSeed(seed);

  canvasSizeW = img.width *4
  canvasSizeH = img.height *4
  img.resize(canvasSizeW, canvasSizeH)
  let canvas=createCanvas( canvasSizeW,  canvasSizeH);
  canvas.parent('fulllscreen');
  pixelDensity(1)
}


function preload() {
  let seed=floor(991354*fxrand())
  randomSeed(seed);
  noiseSeed(seed);
  
  landscapeIndex = int(random(36))
  
  var images = ["flower1.png", "flower3.png","flower4.png",       "flower6.png","flower10.png","flower12.png","flower13.png","flower15.png","flower19.png","flower22.png","flower23.png","flower24.png","flower26.png","flower30.png","flower31.png","flower32.png","flower33.png","flower34.png","flower35.png","flower36.png","flower37.png","flower38.png","flower39.png","flower40.png","flower41.png","flower42.png","flower43.png","flower44.png","flower45.png","flower46.png","flower47.png","flower48.png","flower49.png","flower50.png","flower51.png","flower52.png"]
  var landscape = images[landscapeIndex]
  img = loadImage(landscape);
}


function configure(){
  if(img.width == img.height){
    stepX = random([16, 32, 64, 128, 256])

    if(stepX > 127)
      stepY = random([16, 32])  
    else if(stepX < 33  )
      stepY = random([128, 256])
    else
      stepY = random([16, 32, 64, 128, 256])
  }
  else if(img.width > img.height){
    stepX = random([32, 64, 128, 256, 320])

    if(stepX > 128)
      stepY = random([16, 32, 64])  
    else if(stepX < 65  )
      stepY = random([128, 256])
    else
      stepY = random([16, 32, 64, 128, 256])
  }
  else {
    stepY = random([32, 64, 128, 256, 320])

    if(stepY > 128)
      stepX = random([16, 32, 64])  
    else if(stepY < 65  )
      stepX = random([128, 256])
    else
      stepX = random([16, 32, 64, 128, 256])
  }
    
  bg = random([20, 235, 245])
}

function computePoints(){
  let chooseColor = colorPredicate()
  
  // Create an array of random points
  img.loadPixels();
  for (let x =0; x < canvasSizeW; x=x+stepX) {
    for (let y = 0; y < canvasSizeH; y=y+stepY) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
  
      if(chooseColor(r, g, b, limR, limG, limB)){
          // Use the color value of the pixel to influence the position of the point
          let weight = (r + g + b) / (3 * 255);
          let offset = random(-weight * random(50,200), weight * random(50,200));

          let xpos = x + offset;
          let ypos = y + offset;

          points.push([xpos, ypos]);
      }
    }
  }
}

function drawTriangles(){  
    // Draw the triangles
    for (var i = 0; i < triangles.length; i += 3) {
      drawTriangle(i)
    }
}

function setup() {
  // Create a canvas
  preDraw()  
  //img.resize(canvasSizeW, canvasSizeH);
  
  configure(); 
  
  let count = 0;
  
  do{
    computePoints()
    // Compute the Delaunay triangulation
    triangles = Delaunay.triangulate(points);
    count++
  } while(triangles.length < 1024)
    
  background(bg);
  
  randTri = []
  for(var i = 0; i < triangles.length; i += 3)
    randTri.push(random(1))
  
  if(triangles.length < 2500)
    scale = random(0.7,0.9)
  else
    scale = random(0.6,0.8)
  
  strokeWeight(6);
  
  var aux = random(1)
  iterative = (triangles.length < 2048 && aux < 0.4)
  
  if(!iterative){
    drawTriangles()
  }
  triIdx = 0
}


function draw(){
  if(!iterative || triIdx >= triangles.length){
    noLoop()
    fxpreview()  
  }
  
  drawTriangle(triIdx)
  triIdx +=3
}

function drawTriangle(idx){
    if(idx >= triangles.length || idx+1 >= triangles.length || idx+2 >= triangles.length)
      return;
      
    var p1 = points[triangles[idx]];
    var p2 = points[triangles[idx + 1]];
    var p3 = points[triangles[idx + 2]];
      
    noStroke();
   
    let aux = randTri[idx/3]
    if(aux < 0.4){
      fill(img.get(p1[0], p1[1]))
    }
    else if (aux < 0.5){
      fill(img.get(p2[0], p2[1]))
    }
    else if (aux < 0.8){
      fill(img.get(p3[0], p3[1]))
    }
    else{
      //localScale = scale * 0.85
      noFill()
      stroke(img.get(p1[0], p1[1]))
    }

    // Find the centroid of the triangle
    var x = (p1[0] + p2[0] + p3[0]) / 3;
    var y = (p1[1] + p2[1] + p3[1]) / 3;
    // Translate the triangle so that the centroid is at the origin
    x1 = p1[0] -x
    y1 = p1[1] -y
    x2 = p2[0] -x
    y2 = p2[1] -y
    x3 = p3[0] -x
    y3 = p3[1] -y

    // Change the size of the triangle based on the music spectrum
    x1 *= scale;
    y1 *= scale;
    x2 *= scale;
    y2 *= scale;
    x3 *= scale;
    y3 *= scale;

    // Translate the triangle back to its original position
    x1 += x;
    y1 += y;
    x2 += x;
    y2 += y;
    x3 += x;
    y3 += y;

    triangle(x1, y1, x2, y2, x3, y3);
}

function colorPredicate(){
  let predicates = [smallerRed, greaterRed, smallerGreen, greaterGreen, smallerBlue, greaterBlue, greaterBlueSmallerRed, greaterRedSmallerBlue, greaterRedSmallerGreen,       greaterGreenSmallerRed, greaterBlueSmallerGreen, greaterGreenSmallerBlue] 
  
  colorIndex = int(random(12))
  
  if(colorIndex < 6){
      if(colorIndex % 2 == 1){
        limR = limG = limB = random(colorLimitsSpaced1)
        if(limR >= 90)
          bg = 245
      }
      else{
        limR = limG = limB = random(colorLimitsSpaced2)
      
        if(limR <= 50)
          bg = 245
      }
  }
  else if(colorIndex == 7 || colorIndex == 8){ //greaterRed
    limR = random(colorLimitsLow)
    limB = limG = random(colorLimits)
  }
  else if(colorIndex == 6)  { //greaterBlue
    limB = random(colorLimitsLow)
    limR = limG = random(colorLimitsHigh)
  }
  else if(colorIndex == 10){//greaterBlueSmallerGreen
    limB = random(colorLimitsLow)
    limR = limG = random(colorLimitsHigh)
  }
  else{ //greaterGreen
    limG = random(colorLimitsLow)
    limB = limR = random(colorLimitsHigh)
  }
  
  return predicates[colorIndex]
}

function greaterRed(r,g,b, limR, limG, limB){
  return (r > limR)
}

function smallerRed(r,g,b, limR, limG, limB){
  return (r < limR)
}

function greaterGreen(r,g,b, limR, limG, limB){
  return (g > limG)
}

function smallerGreen(r,g,b, limR, limG, limB){
  return (g < limG)
}

function greaterBlue(r,g,b, limR, limG, limB){
  return (b > limB)
}

function smallerBlue(r,g,b, limR, limG, limB){
  return (b < limB)
}

function greaterRedSmallerBlue(r,g,b, limR, limG, limB){
  return (r > limR  && b < limB)
}

function greaterBlueSmallerRed(r,g,b, limR, limG, limB){
  return (r < limR  && b > limB)
}

function greaterRedSmallerGreen(r,g,b, limR, limG, limB){
  return (r > limR  && g < limG)
}

function greaterGreenSmallerRed(r,g,b, limR, limG, limB){
  return (r < limR  && g > limG)
}

function greaterBlueSmallerGreen(r,g,b, limR, limG, limB){
  return (b > limB  && g < limG)
}

function greaterGreenSmallerBlue(r,g,b, limR, limG, limB){
  return (b < limB  && g > limG)
}
