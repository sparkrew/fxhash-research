var loops = 0;
function setup() {
    // vars
  randomSeed(fxrand() * 10e12 || 123);
  function rand(max, min = 0) {
    return Math.floor(random(max - min)) + min;
  }
  createCanvas(windowWidth , windowHeight);
    pixelDensity(1);
    let gradient = drawingContext.createLinearGradient(20,20, width-20,height-20);
    gradient.addColorStop(0, 'White');
    gradient.addColorStop(1, 'Black');
    drawingContext.fillStyle = gradient;
  noStroke();
  for (let x=10; x<width; x+=50) {
    for (let y=10; y<height; y+=50) {
      square(x,y, 30);
    }
  }
  
  
  
    background(0);

  
  
 
}


function draw() {

   
  if(loops<3){
  beginShape();
  for(var i =0; i <50; i++){
    var x = random(1000);
    var y = random(1000);
    var z = random(height);
    curveVertex(x,y);

  }
  endShape(CLOSE);
      let g = drawingContext.createLinearGradient(20,20, width-20,height-20);
      let c1 = color(220, 20, 60);
      let c2 = color(0);
    let c3 = color (0);
  g.addColorStop(0,   c1.toString());
  g.addColorStop(0.5, c2.toString());
      g.addColorStop(1, c3.toString());
      drawingContext.fillStyle = g;
    loops = loops+1
}
  else{
       let u = loadPixels();
    for (g = 0; g < height; g++) {
      for (f = 0; f < width; f++) {
        var rgbs = (f + g * width) * 4;
        pixels[rgbs + 0] = pixels[rgbs + 0] - random(80);
        pixels[rgbs + 1] = pixels[rgbs + 1] - random(80);
        pixels[rgbs + 2] = pixels[rgbs + 2] - random(80);
        pixels[rgbs + 3] = pixels[rgbs + 3] - random(10);
      }
    }
    updatePixels();
    filter(DILATE);
  noLoop();
  
  }
  
}