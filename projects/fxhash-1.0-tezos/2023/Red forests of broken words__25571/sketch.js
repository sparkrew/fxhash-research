

let treeColor = [244, 54, 49];


function setup()
{
  randomSeed(fxrand()*9999999)
  
  
  
  pixelDensity(6);
   randomSeed(int(fxrand()*917954329))
  createCanvas(700, 400);
  background(random(20,150), random(70,200), random(80,250));

  noLoop();
  
  
}

function draw() {
  for (let i = 0; i < random(1, 50); i++) {
    drawTree(random(width), height, random(50, 150));
  }
   // Draw texture
  
  let spacing = 2.5;
 
  strokeWeight(.3);
 
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      if (random() > 1) {
        
        
        line(x, y, x + spacing, y + spacing);
      } else {
        
        line(x, y + spacing, x + spacing, y);
      }
    }
  }

  
  // Add thin black frame
  stroke(236, 220, 225);
  strokeWeight(3);
  noFill();
  rect(0, 0, width - 1, height - 1);
  
  
}





function drawTree(x, y, size) {
  stroke(treeColor);
  strokeWeight(size / random(4,40));
  line(x, y, x, y - size);

  if (size > 8) {
    let angle1 = random(20, 45);
    let angle2 = random(20, 45);
    let length1 = random(0.5, .8);
    let length2 = random(0.5, .8);

    push();
    translate(x, y - size);
    rotate(radians(-angle1));
    drawTree(0, 0, size * length1);
    pop();

    push();
    translate(x, y - size);
    rotate(radians(angle2));
    drawTree(0, 0, size * length2);
    pop();
  }
  

  // Draw fire effect
  let fireSize = size / 2;
  let fireX = x;
  let fireY = y - size - fireSize / 2;
  let fireColor1 = color(random(200, 255), random(100, 200), random(0, 100));
  let fireColor2 = color(random(200, 255), random(100, 200), random(0, 100));
  for (let i = 0; i < fireSize; i++) {
    let t = i / fireSize;
    let fireColor = lerpColor(fireColor1, fireColor2, t);
    fill(fireColor);
    let noiseVal = noise(fireX, fireY + i, frameCount * 0.01);
    let fireRadius = noiseVal * (fireSize - i) / 2;
    ellipse(fireX, fireY + i, fireRadius, fireRadius);
  }

  // Draw random letter
  let letterSize = random(1, 15);
  let letterX = random(x - size / 2, x + size / 2);
  let letterY = random(y - size - fireSize, y - size);
  let letter = String.fromCharCode(random(10, 91));
  textSize(letterSize);
  textAlign(CENTER, CENTER);
  fill(random(255), random(255), random(255));
  text(letter, letterX, letterY);
  
  
  
}



function keyPressed() {
  if (key === "s") {
    saveCanvas("myTreeArt", "png");
    
    
    
  }
}