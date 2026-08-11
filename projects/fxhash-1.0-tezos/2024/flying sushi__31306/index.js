// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference
/*
    // FUNCTIONS
    $fx.rand()          // generates a random number based on the transaction hash of the mint
    $fx.randminter()    // generates a random number based on the minter's wallet address

    $fx.rand.reset()    // resets the $fx.rand() function
    $fx.randminter.reset()  // restes the $fx.randminter() function

    // VARIABLES
    $fx.hash            // the hash of the mint transaction
    $fx.minter          // the wallet address of the minter
    $fx.iteration       // the iteration of the mint (starts at 1)

*/

const sp = new URLSearchParams(window.location.search);

// Setting up the canvas, sushi dimensions, and bubbles array for the trail
// Setting up the canvas, sushi dimensions, and bubbles array for the trail
let sushiWidth, sushiHeight, pixelSize;
let bubbles = []; // Array to hold bubble positions and sizes


function setup() {
  let cnv = createCanvas(400, 400); // Canvas size 400x400
  cnv.id("my-canvas")
  pixelSize = 10; // Increase pixel size for larger sushi
  sushiWidth = pixelSize * 10; // Sushi width based on pixel size
  sushiHeight = pixelSize * 5; // Sushi height based on pixel size
  background(255, 182, 193); // Light pink background for a dreamy effect
  rectMode(CENTER)
  noCursor();

  colorMode(HSB)
  
}

let random1X =  $fx.rand() * 400;
let random1Y =  $fx.rand() * 400;


let randomHue = $fx.rand() * 360




function draw() {
  // Redraw background with light pink color
  background(randomHue, 20, 100);

  // Draw white clouds
  fill(255); // White color for clouds
  noStroke();
  drawCloud(random1X, random1Y, 40); // Cloud at (50, 80)
  drawCloud(250, 100, 50); // Cloud at (250, 100)
  drawCloud(150, 200, 35); // Cloud at (150, 200)
  drawCloud(300, 300, 45); // Cloud at (300, 300)
  drawCloud(100, 320, 30); // Cloud at (100, 320)

  // Set the sushi position based on mouse position at the top-left corner
  let x = mouseX;
  let y = mouseY;

  // Add a new bubble at the current sushi position with the same size as the sushi
  bubbles.push({ x: x + sushiWidth / 2, y: y + sushiHeight / 2, width: sushiWidth, height: sushiHeight, alpha: 255 });

  // Draw each bubble
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let bubble = bubbles[i];

    // Set a vibrant pink color with transparency for a fading bubble effect
    fill(255, 105, 180, bubble.alpha); // Vibrant pink bubbles
    noStroke();
    rect(bubble.x - bubble.width / 2, bubble.y - bubble.height / 2, bubble.width, bubble.height, 10); // Sushi-sized bubble with rounded corners

    // Reduce the alpha value to fade out the bubble slower for a smoother effect
    bubble.alpha -= 3;

    // Remove bubble from the array if it's fully transparent
    if (bubble.alpha <= 0) {
      bubbles.splice(i, 1);
    }
  }

  // Draw pixel-art nigiri sushi using a grid of squares

  // Rice base (white pixel blocks)
  fill(255); // White for rice
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      rect(x + i * pixelSize, y + j * pixelSize, pixelSize, pixelSize);
    }
  }

  // Fish topping (pink pixel blocks)
  fill(255, 105, 180); // Hot pink for fish topping
  for (let i = 1; i < 9; i++) {
    for (let j = -2; j < 2; j++) {
      rect(x + i * pixelSize, y + j * pixelSize, pixelSize, pixelSize);
    }
  }

  // Add a cute face on the rice part

  // Eyes
  fill(0); // Black for eyes
  rect(x + 3 * pixelSize, y + 2 * pixelSize, pixelSize, pixelSize); // Left eye
  rect(x + 6 * pixelSize, y + 2 * pixelSize, pixelSize, pixelSize); // Right eye

  // Blush
  fill(255, 182, 193); // Light pink for blush
  rect(x + 2 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize); // Left blush
  rect(x + 7 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize); // Right blush

  // Mouth
  fill(0); // Black for mouth
  rect(x + 4.5 * pixelSize, y + 3.5 * pixelSize, pixelSize, pixelSize / 2); // Simple smiling mouth
}

// Function to draw clouds with multiple ellipses
function drawCloud(x, y, size) {
  ellipse(x, y, size, size * 0.6);
  ellipse(x + size * 0.5, y, size * 0.8, size * 0.6);
  ellipse(x - size * 0.5, y, size * 0.8, size * 0.6);
  ellipse(x, y - size * 0.2, size * 0.9, size * 0.7);
}
