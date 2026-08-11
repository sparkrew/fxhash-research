let img;

function preload() {
  img = loadImage('example.png'); // Load your PNG image
}

function setup() {
  createCanvas(img.width , img.height ); // Resize the canvas to half the dimensions of the image
  noStroke(); // Disable the stroke
  const colors = ["#87CEEB", "#E6E6FA", "#FF7F50", "#98FF98", "#6B3FA0", "#FFDB58", "#FF2600", "#556B2F", "#008080", "#FFE5B4" ,"#1E90FF", "#00BFFF", "#4169E1", "#6495ED", "#ADD8E6", "#87CEFA", "#00CED1", "#20B2AA", "#008B8B", "#87CEEB", "#4682B4", "#778899"];
  const chosenColor = colors[Math.floor(fxrand() * colors.length)];
  background(chosenColor); // Set the background color to a random color from the colors array

  // Array of draw pattern functions
  const drawPatternFunctions = [drawPattern1, drawPattern2, drawPattern3, drawPattern4, drawPattern5, drawPattern6, drawPattern7, drawPattern8, drawPattern9];

  // Call three draw pattern functions at random
  const chosenPatterns = [];
  while (chosenPatterns.length < 3) {
    const index = Math.floor(fxrand() * drawPatternFunctions.length);
    const pattern = drawPatternFunctions[index];
    if (!chosenPatterns.includes(pattern)) {
      chosenPatterns.push(pattern);
    }
  }

  // Call the chosen draw pattern functions
  chosenPatterns.forEach(pattern => pattern());
}


function drawPattern1() {
  let centerX = width / 1.1;
  let centerY = height / 2.4;
  let angleStep = 5 + fxrand(fxrand() * 10);
  let radiusStep = 0.1 + fxrand();
  let radius = 10 + Math.floor(fxrand() * 20);
  let angle = Math.floor(fxrand() * 360);
  let index = 0;
  let spread = 9;
  let startColor = 0;

  let hueMin = 0;
  let hueMax = 255;
  let saturationMin = 77;
  let saturationMax = 88;
  let brightnessMin = 132;
  let brightnessMax = 123;

  while (radius < width || radius < height) {
    let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
    let noiseVal = noise(radius * 0.0001, angle * 0.001);
    let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
    let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
    fill(hue, saturation, brightness);
    noStroke();
    let x = centerX + radius * cos(radians(angle));
    let y = centerY + radius * sin(radians(angle));
    ellipse(x, y, 10, 10);
    radius += radiusStep;
    angle += angleStep;
    index++;
  }

}


function drawPattern2() {
  let centerX = width / 2.7;
  let centerY = height / 1.7;
  let angleStep = 5 + Math.floor(fxrand() * 10);
  let radiusStep = 0.1 + fxrand();
  let radius = 10 + Math.floor(fxrand() * 20);
  let angle = Math.floor(fxrand() * 360);
  let index = 0;
  let spread = 9;
  let startColor = 0;

  let hueMin = 0;
  let hueMax = 255;
  let saturationMin = 11;
  let saturationMax = 33;
  let brightnessMin = 55;
  let brightnessMax = 54;

  while (radius < width || radius < height) {
    let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
    let noiseVal = noise(radius * 0.0001, angle * 0.001);
    let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
    let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
    fill(hue, saturation, brightness);
    noStroke();
    let x = centerX + radius * cos(radians(angle));
    let y = centerY + radius * sin(radians(angle));
    ellipse(x, y, 10, 10);
    radius += radiusStep;
    angle += angleStep;
    index++;
  }

}
  
  function drawPattern3() {
    let centerX = width / 2.4; // Center X position of the spiral
    let centerY = height / 1.3; // Center Y position of the spiral
    let angleStep = 5 + Math.floor(fxrand() * 10); // Random step value for the angle of the spiral between 5 and 15
    let radiusStep = 0.1 + fxrand(); // Random step value for the radius of the spiral between 0.1 and 1
    let radius = 10 + Math.floor(fxrand() * 20); // Starting radius of the spiral between 10 and 30
    let angle = Math.floor(fxrand() * 360); // Random starting angle of the spiral between 0 and 359
    let index = 0; // Index value for calculating hue
    let spread = 9;
    let startColor = Math.floor(fxrand() * 255);
    
    while (radius < width || radius < height) { // Keep drawing the spiral until it goes beyond the canvas
      let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255; // Calculate hue using the provided code
      let noiseVal = noise(radius * 0.01, angle * 0.01); // Calculate a Perlin noise value based on the current radius and angle
      let saturation = map(noiseVal, 0, 1, 100, 200); // Map the noise value to a saturation value between 100 and 200
      fill(hue, saturation, 255); // Set the fill color based on the calculated hue and mapped saturation
      noStroke(); // Turn off stroke
      let x = centerX + radius * cos(radians(angle)); // Calculate X position based on radius and angle
      let y = centerY + radius * sin(radians(angle)); // Calculate Y position based on radius and angle
      ellipse(x, y, 10, 10); // Draw a circle at the calculated position
      radius += radiusStep; // Increase radius by the step value
      angle += angleStep; // Increase angle by the step value
      index++; // Increment index value
    }
    
  }
  
  function drawPattern4() {
    let centerX = width / 2.4;
    let centerY = height / 2.7;
    let angleStep = 5 + Math.floor(fxrand() * 10);
    let radiusStep = 0.1 + fxrand();
    let radius = 10 + Math.floor(fxrand() * 20);
    let angle = Math.floor(fxrand() * 360);
    let index = 0;
    let spread = 9;
    let startColor = 0;
  
    let hueMin = 0;
    let hueMax = 255;
    let saturationMin = 100;
    let saturationMax = 144;
    let brightnessMin = 150;
    let brightnessMax = 166;
  
    while (radius < width || radius < height) {
      let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
      let noiseVal = noise(radius * 0.0001, angle * 0.001);
      let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
      let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
      fill(hue, saturation, brightness);
      noStroke();
      let x = centerX + radius * cos(radians(angle));
      let y = centerY + radius * sin(radians(angle));
      ellipse(x, y, 10, 10);
      radius += radiusStep;
      angle += angleStep;
      index++;
    }
  
  }
  
  
    function drawPattern5() {
      let centerX = width / 1.4; // Center X position of the spiral
      let centerY = height / 2.8; // Center Y position of the spiral
      let angleStep = 5 + Math.floor(fxrand() * 10); // Random step value for the angle of the spiral between 5 and 15
      let radiusStep = 0.1 + fxrand(); // Random step value for the radius of the spiral between 0.1 and 1
      let radius = 10 + Math.floor(fxrand() * 20); // Starting radius of the spiral between 10 and 30
      let angle = Math.floor(fxrand() * 360); // Random starting angle of the spiral between 0 and 359
      let index = 0; // Index value for calculating hue
      let spread = 9;
      let startColor = Math.floor(fxrand() * 255);
      
      while (radius < width || radius < height) { // Keep drawing the spiral until it goes beyond the canvas
        let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255; // Calculate hue using the provided code
        let noiseVal = noise(radius * 0.01, angle * 0.01); // Calculate a Perlin noise value based on the current radius and angle
        let saturation = map(noiseVal, 0, 121, 100, 200); // Map the noise value to a saturation value between 100 and 200
        fill(hue, saturation, 200); // Set the fill color based on the calculated hue and mapped saturation
        noStroke(); // Turn off stroke
        let x = centerX + radius * cos(radians(angle)); // Calculate X position based on radius and angle
        let y = centerY + radius * sin(radians(angle)); // Calculate Y position based on radius and angle
        ellipse(x, y, 10, 10); // Draw a circle at the calculated position
        radius += radiusStep; // Increase radius by the step value
        angle += angleStep; // Increase angle by the step value
        index++; // Increment index value
      }
      
    }
    
    function drawPattern6() {
      let centerX = width / 2.4; // Center X position of the spiral
      let centerY = height / 1.3; // Center Y position of the spiral
      let angleStep = 5 + Math.floor(fxrand() * 10); // Random step value for the angle of the spiral between 5 and 15
      let radiusStep = 0.1 + fxrand(); // Random step value for the radius of the spiral between 0.1 and 1
      let radius = 10 + Math.floor(fxrand() * 20); // Starting radius of the spiral between 10 and 30
      let angle = Math.floor(fxrand() * 360); // Random starting angle of the spiral between 0 and 359
      let index = 0; // Index value for calculating hue
      let spread = 9;
      let startColor = Math.floor(fxrand() * 255);
      
      while (radius < width || radius < height) { // Keep drawing the spiral until it goes beyond the canvas
        let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255; // Calculate hue using the provided code
        let noiseVal = noise(radius * 0.01, angle * 0.01); // Calculate a Perlin noise value based on the current radius and angle
        let saturation = map(noiseVal, 0, 1, 189, 243); // Map the noise value to a saturation value between 100 and 200
        fill(hue, saturation, 200); // Set the fill color based on the calculated hue and mapped saturation
        noStroke(); // Turn off stroke
        let x = centerX + radius * cos(radians(angle)); // Calculate X position based on radius and angle
        let y = centerY + radius * sin(radians(angle)); // Calculate Y position based on radius and angle
        ellipse(x, y, 10, 10); // Draw a circle at the calculated position
        radius += radiusStep; // Increase radius by the step value
        angle += angleStep; // Increase angle by the step value
        index++; // Increment index value
      }
      
    }
    
    function drawPattern7() {
      let centerX = width / -2.4; // Center X position of the spiral
      let centerY = height / -1.1;
      let angleStep = 5 + Math.floor(fxrand() * 10);
      let radiusStep = 0.1 + fxrand();
      let radius = 100 + Math.floor(fxrand() * 20);
      let angle = Math.floor(fxrand() * 3600);
      let index = 0;
      let spread = 9;
      let startColor = 0;
    
      let hueMin = 0;
      let hueMax = 255;
      let saturationMin = 100;
      let saturationMax = 200;
      let brightnessMin = 150;
      let brightnessMax = 255;
      
      // Modified code starts here
      let prevX = null;
      let prevY = null;
      let speed = 0.01 + fxrand() * 0.1;
      let size = 2 + Math.floor(fxrand() * 2);
    
      while (radius < width || radius < height) {
        let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
        let noiseVal = noise(radius * 0.01, angle * 0.001);
        let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
        let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
        fill(hue, saturation, brightness);
        noStroke();
        let x = centerX + cos(radians(angle));
        let y = centerY + sin(radians(angle));
        ellipse(x, y, 12, 12);
    
        let r = map(sin(angle * 14), -1, 12, 0, 255);
        let g = map(cos(angle * 56), -1, 1, 0, 255);
        let b = map(sin(angle * 25), -1, 1, 0, 255);
        let opacity = map(sin(angle), -1, 1, 50, 200);
        stroke(r, g, b, opacity);
        if (prevX != null && prevY != null) {
          line(prevX, prevY, x, y);
          for (let i = 0; i < 9; i++) {
            let subRadius = radius / 2;
            let subX = cos(angle * (i + 1)) * subRadius;
            let subY = sin(angle * (i + 1)) * subRadius;
            
            let subR = map(sin(angle * 7), -1, 1, 0, 255);
            let subG = map(cos(angle * 10), -1, 1, 0, 255);
            let subB = map(sin(angle * 20), -1, 1, 0, 255);
            let subOpacity = map(sin(angle), -1, 1, 50, 200);
            
            stroke(subR, subG, subB, subOpacity);
            circle(subX, subY, size * .9);
          }
        }
        
        prevX = x;
        prevY = y;
        angle += speed;
        index++;
        radius += radiusStep;
      }
    
    }
    
    
    function drawPattern8() {
      let centerX = width / 2.4;
      let centerY = height / 2.7;
      let angleStep = 5 + Math.floor(fxrand() * 10);
      let radiusStep = 0.1 + fxrand();
      let radius = 10 + Math.floor(fxrand() * 20);
      let angle = Math.floor(fxrand() * 360);
      let index = 0;
      let spread = 9;
      let startColor = 0;
    
      let hueMin = 0;
      let hueMax = 255;
      let saturationMin = 100;
      let saturationMax = 200;
      let brightnessMin = 150;
      let brightnessMax = 255;
    
      while (radius < width || radius < height) {
        let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
        let noiseVal = noise(radius * 0.0001, angle * 0.001);
        let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
        let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
        fill(hue, saturation, brightness);
        noStroke();
        let x = centerX + radius * cos(radians(angle));
        let y = centerY + radius * sin(radians(angle));
        ellipse(x, y, 10, 10);
        radius += radiusStep;
        angle += angleStep;
        index++;
      }
    
    }
      function drawPattern9() {
        let centerX = width / 1.1;
        let centerY = height / 2.4;
        let angleStep = 5 + Math.floor(fxrand() * 10);
        let radiusStep = 0.1 + fxrand();
        let radius = 10 + Math.floor(fxrand() * 20);
        let angle = Math.floor(fxrand() * 360);
        let index = 0;
        let spread = 9;
        let startColor = 0;
      
        let hueMin = 0;
        let hueMax = 255;
        let saturationMin = 233;
        let saturationMax = 255;
        let brightnessMin = 132;
        let brightnessMax = 255;
      
        while (radius < width || radius < height) {
          let hue = reverse ? 255 - (((index / spread) + startColor + angle) % 255) : (((index / spread) + startColor) + angle) % 255;
          let noiseVal = noise(radius * 0.0001, angle * 0.001);
          let saturation = Math.floor(fxrand() * (saturationMax - saturationMin + 1)) + saturationMin;
          let brightness = Math.floor(fxrand() * (brightnessMax - brightnessMin + 1)) + brightnessMin;
          fill(hue, saturation, brightness);
          noStroke();
          let x = centerX + radius * cos(radians(angle));
          let y = centerY + radius * sin(radians(angle));
          ellipse(x, y, 10, 10);
          radius += radiusStep;
          angle += angleStep;
          index++;
        }
      
      }