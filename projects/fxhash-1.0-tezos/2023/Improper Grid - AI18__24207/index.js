function setup() {
randomSeed(int(fxrand()*987654321))
  createCanvas(1600, 1600);
  background(random(255));
  
  // Colorways 
  let colors = [
    [255, 0, 0], // Red
    [0, 255, 0], // Green
    [0, 0, 255], // Blue
    [255, 255, 0], // Yellow
    [255, 0, 255], // Magenta
    [0, 255, 255], // Cyan
    [255, 127, 0], // Orange
    [127, 0, 255] // Purple
  ];
  
  let color1 = random(colors);
  let color2 = random(colors);
  
  // Broken Grid
  noStroke();
  fill(color1);
  for (let x = 0; x <= width; x += random(25, 60)) {
    for (let y = 0; y <= height; y += random(30, 60)) {
      let newX = x + random(-10, 10);
      let newY = y + random(-10, 10);
      
      // Thick Rounded Lines 
      if (random(100) > 40) {
        ellipse(newX, newY, 20);
      }
    }
  }
  
  // Imperfections
  fill(color2);
  for (let x = 0; x < width; x += random(15, 40)) {
    for (let y = 0; y < height; y += random(15, 40)) {
      let newX = x + random(-20, 20);
      let newY = y + random(-20, 20);
      rect(newX, newY, 10, 10);
    }
  }
  
  // Substance 
  for (let x = 0; x < width; x += random(10, 30)) {
    for (let y = 0; y < height; y += random(10, 30)) {
      let newX = x + random(-30, 30);
      let newY = y + random(-30, 30);
      rect(newX, newY, 6, 6);
    }
  }
  
  // Collisions
  for (let x = 0; x < width; x += random(5, 20)) {
    for (let y = 0; y < height; y += random(5, 20)) {
      let newX = x + random(-40, 40);
      let newY = y + random(-40, 40);
      rect(newX, newY, 4, 4);
    }
  }
  
  // Dotted Lines 
  stroke(255);
  strokeWeight(1);
  for (let x = 0; x < width; x += random(10, 20)) {
    for (let y = 0; y < height; y += random(10, 20)) {
      let newX = x + random(-20, 20);
      let newY = y + random(-20, 20);
      line(newX, newY, newX + 10, newY + 10);
    }
  }
  
  // Dots
    for (let x = 0; x < width; x += random(5, 20)) {
    for (let y = 0; y < height; y += random(5, 20)) {
      let newX = x + random(-40, 40);
      let newY = y + random(-40, 40);
      ellipse(newX, newY, random(1,3));
    }
  }
  
}