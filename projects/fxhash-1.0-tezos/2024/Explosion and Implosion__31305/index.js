let balls = [];  // Array to hold balls
const numBalls = 50;  // Number of balls
const circleRadius = 150;  // Radius of the circle
const centerX = 200;  // X position of the circle's center
const centerY = 200;  // Y position of the circle's center
let timer = 0;  // Timer to track how long the balls have been in their current state
let state = 'bouncing';  // Current state: 'bouncing', 'formingCircle', or 'dissolving'

// Transition parameters
const transitionDuration = 240;  // Frames it takes to complete the transition (4 seconds)
const easingFactor = 0.02;  // Adjusted easing factor for smooth transition

// Ball class to handle individual ball behavior
class Ball {
  constructor(hue) {
    this.resetPosition();  // Random starting position
    this.size = $fx.rand() * 30 + 20; // Random size between 20px and 50px
    this.originalSize = this.size;  // Store original size for reset
    this.xSpeed = $fx.rand() * 2 + 1; // Random horizontal speed
    this.ySpeed = $fx.rand() * 2 + 1; // Random vertical speed
    this.targetX = this.x;  // Target X position for circle formation
    this.targetY = this.y;  // Target Y position for circle formation
    this.reachedTarget = false;  // Whether the ball has reached its target
    this.initialTransitionTime = $fx.rand()*transitionDuration;  // Offset for each ball to start transitioning at different times
    this.fillHue = hue;
  }

  // Reset ball's position to random
  resetPosition() {
    this.x = $fx.rand()*width;
    this.y = $fx.rand()*height;
  }

  // Update ball's position based on the current state
  update() {
    let transitionProgress = (timer + this.initialTransitionTime) / transitionDuration;
    transitionProgress = constrain(transitionProgress, 0, 1);  // Ensure it doesn't go beyond 1 (completion)

    if (state === 'bouncing') {
      // In 'bouncing' state, the balls should move randomly and bounce off edges
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      // Gradually adjust speed during 'bouncing' state
      this.adjustSpeed(transitionProgress);

      // Bounce off walls and change direction randomly
      if (this.x <= 0 || this.x + this.size >= width) {
        this.xSpeed *= -1;  // Reverse horizontal direction
      }

      if (this.y <= 0 || this.y + this.size >= height) {
        this.ySpeed *= -1;  // Reverse vertical direction
      }

    } else if (state === 'formingCircle') {
      // In 'formingCircle', the balls move smoothly towards the target positions on the circle
      let angle = map(balls.indexOf(this), 0, numBalls, 0, TWO_PI);
      this.targetX = centerX + circleRadius * cos(angle);
      this.targetY = centerY + circleRadius * sin(angle);

      let dx = this.targetX - this.x;
      let dy = this.targetY - this.y;
      let distance = dist(this.x, this.y, this.targetX, this.targetY);

      // Move smoothly towards the target position along the circle path
      if (distance > 2 && !this.reachedTarget) {
        this.x += dx * easingFactor * transitionProgress;
        this.y += dy * easingFactor * transitionProgress;

        // Adjust speed as the balls move towards the circle formation
        this.adjustSpeed(transitionProgress);
      } else {
        // Once the ball is close enough, stop it from moving
        this.reachedTarget = true;
        this.x = this.targetX;
        this.y = this.targetY;
      }

    } else if (state === 'dissolving') {
      // In the dissolving state, the balls move smoothly towards a new random position
      this.reachedTarget = false; // Reset reachedTarget for dissolving state

      let targetX = $fx.rand() * width;
      let targetY = $fx.rand() * height;

      let dx = targetX - this.x;
      let dy = targetY - this.y;
      let distance = dist(this.x, this.y, targetX, targetY);

      // Move smoothly towards a new random position
      if (distance > 2) {
        this.x += dx * easingFactor;
        this.y += dy * easingFactor;
      } else {
        this.reachedTarget = true;  // Once it reaches the new random position, stop
      }

      // Gradually adjust speed during dissolution
      this.adjustSpeed(transitionProgress);
    }
  }

  // Adjust the speed of the ball based on the transition progress
  adjustSpeed(progress) {
    let minSpeed = 1;
    let maxSpeed = 4;

    // Smoothly scale speed based on progress, transitioning between minSpeed and maxSpeed
    this.xSpeed = lerp(minSpeed, maxSpeed, progress);
    this.ySpeed = lerp(minSpeed, maxSpeed, progress);
  }

  // Show the ball
  show() {
    let transitionProgress = (timer + this.initialTransitionTime) / transitionDuration;
    transitionProgress = constrain(transitionProgress, 0, 1);  // Ensure it doesn't go beyond 1 (completion)

    // Color transition: from red to white and back to red
    //let red = lerp(255, 255, transitionProgress);  // Start at red, end at red (no color change during circle formation)
    let saturation = lerp(0, 100, transitionProgress);  // Green goes from 0 to 255
    let brightness = lerp(0, 100, transitionProgress);  // Blue goes from 0 to 255

    colorMode(HSB)
    fill(this.fillHue, saturation, 100);  // Ball color transition
    noStroke();  // No border
    ellipse(this.x, this.y, this.size);  // Draw the ball
  }

  // Reset the ball's size and position for dissolving back to bouncing
  reset() {
    this.size = this.originalSize;
  }
}

// FX Hash setup function
function setup() {
  createCanvas(400, 400);  // Create a 400x400 canvas
  noStroke();  // Disable the default stroke around shapes
  background(0);  // Set background to black
  
  let ballHue = $fx.rand() * 360;
  // Create 50 balls and store them in the balls array
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball(ballHue));
  }
}

// FX Hash draw function
function draw() {
  background(0);  // Black background on every frame

  // Update and display each ball
  for (let ball of balls) {
    ball.update();
    ball.show();
  }

  // Increment the timer based on frame count
  timer++;

  // Check state and transition logic
  if (state === 'bouncing' && timer >= 180) { // After 3 seconds (180 frames)
    state = 'formingCircle';  // Transition to forming the circle
    timer = 0;  // Reset timer
  } else if (state === 'formingCircle' && allBallsReachedTarget()) { // Check if all balls reached target
    state = 'dissolving';  // Transition to dissolving phase
    timer = 0;  // Reset timer
  } else if (state === 'dissolving' && timer >= 180) { // After 3 seconds (180 frames)
    state = 'bouncing';  // Back to bouncing
    timer = 0;  // Reset timer
  }
}

// Helper function to check if all balls have reached their targets
function allBallsReachedTarget() {
  for (let ball of balls) {
    if (!ball.reachedTarget) {
      return false;
    }
  }
  return true;
}
