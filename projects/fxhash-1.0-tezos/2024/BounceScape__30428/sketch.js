let ball;
let backgroundColor; // Variable to store the background color
let transitionAlpha; // For smooth transition effect
let newBackgroundColor; // Next background color

function setup() {
  createCanvas(800, 800); // Adjust size as needed
  backgroundColor = color(0);
  newBackgroundColor = backgroundColor;
  transitionAlpha = 0; // Initialize transition effect to be fully transparent
  initBall();
}

function initBall() {
  const randomColor = color(random(255), random(255), random(255)); // Generate a random color
  ball = {
    x: random(20, width - 20), // Start from a random position
    y: random(20, height - 20), // Start from a random position
    size: 20, // Starting size of the ball
    growthRate: 5, // Increased growth rate for faster growth
    xSpeed: random(4, 8), // Initial faster random speed
    ySpeed: random(4, 8), // Initial faster random speed
    speedIncrement: 0.5, // Increased speed increment for faster acceleration
    color: randomColor,
    bounceCount: 0 // Counter for the number of bounces
  };
  if (transitionAlpha === 0) { // Only update the background color if not currently transitioning
    newBackgroundColor = randomColor;
  }
}

function draw() {
  background(backgroundColor);
  if (transitionAlpha > 0) {
    transitionAlpha -= 5; // Adjust for smoother or faster transition
    backgroundColor = lerpColor(backgroundColor, newBackgroundColor, map(transitionAlpha, 255, 0, 0, 1));
  }
  
  noStroke();
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.size, ball.size);

  // Draw bounce count in the middle of the ball
  fill(255); // White color for text to make it visible
  textAlign(CENTER, CENTER);
  textSize(ball.size / 3); // Adjust text size based on the ball size
  text(ball.bounceCount, ball.x, ball.y);
  
  // Update ball position
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  
  // Check for bounces and increase speed
  let bounced = false;
  if (ball.x <= 0 || ball.x >= width) {
    ball.xSpeed *= -1; // Reverse direction
    bounced = true;
  }
  if (ball.y <= 0 || ball.y >= height) {
    ball.ySpeed *= -1; // Reverse direction
    bounced = true;
  }

  if (bounced) {
    ball.bounceCount += 1; // Increment bounce counter
    // Increase speed
    ball.xSpeed += (ball.xSpeed > 0 ? 1 : -1) * ball.speedIncrement; 
    ball.ySpeed += (ball.ySpeed > 0 ? 1 : -1) * ball.speedIncrement;
    // Grow the ball
    ball.size += ball.growthRate;
  }
  
  // Reset if the ball fills up the canvas
  if (ball.size >= width && ball.size >= height) {
    transitionAlpha = 255; // Start transition effect
    initBall(); // Initialize a new ball with a new random position and speed
  }
}
