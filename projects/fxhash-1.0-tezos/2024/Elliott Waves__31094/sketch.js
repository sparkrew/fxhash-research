const e = Math.min(innerWidth, innerHeight);
const canvas = { w: e, h: e };

// Define fixed y-axis range
const fixedMaxY = e/2; // Upper limit of the Y-axis
const fixedMinY = -e/2; // Lower limit of the Y-axis

// Define fixed gap and other parameters
const fixedGap = e / 10; // Fixed left and right gap
const totalWaveWidth = e - 2 * fixedGap; // Total available width for waves
const waveHeight = e / 30; // Adjusted height for better visibility
const candleWidth = e / 300; // Further reduced candle width

function setup() {
  createCanvas(e, e);
  textFont('sans-serif'); // Set the font for text
  background(255);
  noLoop();

  // Initialize chart and draw
  let chart = new ElliottWaveChart();
  chart.draw();

  const readableFeaturesObj = {};
  console.table(readableFeaturesObj);
  $fx.features(readableFeaturesObj);
  $fx.preview();
}

function draw() {}

class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Candlestick {
  constructor(open, close, high, low, x) {
    this.open = open;
    this.close = close;
    this.high = high;
    this.low = low;
    this.x = x;
  }

  draw() {
    let colorFill = (this.close < this.open) ? color(255, 0, 0) : color(0, 255, 0); // Red for down, green for up

    // Draw the wick
    stroke(colorFill);
    line(this.x, mapY(this.high), this.x, mapY(this.low));

    // Draw the body
    fill(colorFill);
    stroke(colorFill);
    strokeWeight(1); // Thin border
    rectMode(CENTER); // Center the rectangle
    rect(this.x, mapY((this.open + this.close) / 2), candleWidth, abs(mapY(this.open) - mapY(this.close))); // Draw body centered
  }
}

class Axis {
  constructor() {
    // Axis parameters
  }

  drawYAxis() {
    stroke(150); // Light gray for axis lines
    strokeWeight(e/1000);
    
    let yAxisX = fixedGap; // Position of the y-axis line
    let numTicks = 10; // Number of ticks on the y-axis
    let tickSpacing = height / numTicks; // Space between ticks

    // Draw y-axis line
    line(yAxisX, 0, yAxisX, height);
    
    // Draw y-axis ticks and labels
    for (let i = 0; i <= numTicks; i++) {
      let yPos = height - i * tickSpacing; // Calculate y position for ticks
      let labelValue = map(i, 0, numTicks, -$fx.rand() *500, $fx.rand() *500); // Map tick position to y-axis value

      // Draw tick
      stroke(150);
      line(yAxisX , yPos, yAxisX , yPos);
      
      // Draw label
      textSize(e / 100); // Set text size relative to canvas size
      textAlign(RIGHT, CENTER);
      fill(0);
      text(nf(labelValue, 1, 2), yAxisX - 10, yPos);
    }
  }

  drawMonthlyAxis(numMonths) {
    stroke(150); // Light gray for axis lines
    strokeWeight(e/1000);

    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthWidth = (e - 2 * fixedGap) / numMonths; // Calculate width for each month

    for (let i = 0; i < numMonths; i++) {
      let monthX = fixedGap + (i / numMonths) * (e - 2 * fixedGap);
      
      // Draw the axis line
      line(monthX, 0, monthX, height);
      
      // Draw month labels
      textSize(e / 100); // Set text size relative to canvas size
      textAlign(CENTER, TOP);
      fill(0);
      text(monthNames[i], monthX, height - 20);
    }
  }
}

class ElliottWaveChart {
  constructor() {
    this.wavePoints = [];
    this.numDays = 360;
    this.numWeeks = Math.floor(this.numDays / 7);
    this.numMonths = Math.ceil(this.numDays / 30); // Estimate number of months
    this.waveWidth = totalWaveWidth / this.numDays; // Calculate wave width
    this.axis = new Axis();
  }

  generateWaves() {
    let x = fixedGap; // Start from the left margin
    let y = 0; // Start from zero on the canvas

    // Generate points for Elliott Waves
    for (let i = 0; i < this.numDays; i++) {
      let direction = (i % 2 === 0) ? $fx.rand() * (-1) : $fx.rand(); // Random direction
      y += direction * waveHeight * (0.8 + $fx.rand() * 0.4); // Random height variation
      this.wavePoints.push(new Wave(x, y));
      x += this.waveWidth * (0.8 + $fx.rand() * 0.4); // Random width variation
    }
  }

  drawWaves() {
    stroke(0);
    strokeWeight(e/400);
    
    for (let i = 0; i < this.wavePoints.length - 1; i++) {
      let p1 = this.wavePoints[i];
      let p2 = this.wavePoints[i + 1];
      line(mapX(p1.x), mapY(p1.y), mapX(p2.x), mapY(p2.y));
    }
  }

  drawCandlesticks() {
    strokeWeight(e/300);
    
    let weekWidth = totalWaveWidth / this.numWeeks; // Calculate width for each week

    for (let i = 0; i < this.numDays - 1; i += 7) {
      let startIndex = i;
      let endIndex = min(i + 7, this.wavePoints.length - 1);

      let open = this.wavePoints[startIndex].y +e/ ($fx.rand() * 400 )*($fx.rand()<0.5? -1:1); // Random open price
      let close = this.wavePoints[endIndex].y  +e/ ($fx.rand() * 400 )*($fx.rand()<0.5? -1:1); // Random close price
      let high = Math.min(open, close) - $fx.rand() * +e/ ($fx.rand() * 800 )*($fx.rand()<0.5? -1:1); // Random high price
      let low = Math.max(open, close) + $fx.rand() * +e/ ($fx.rand() * 800 )*($fx.rand()<0.5? -1:1); // Random low price
      let weekStartX = fixedGap + (i / this.numDays) * totalWaveWidth;
      
      let candle = new Candlestick(open, close, high, low, mapX(weekStartX));
      candle.draw();
    }
  }

  draw() {
    this.generateWaves();
    this.drawWaves();
    this.drawCandlesticks();
    this.axis.drawMonthlyAxis(this.numMonths);
    this.axis.drawYAxis();
  }
}

function mapY(y) {
  return map(y, fixedMinY, fixedMaxY, height, 0); // Map from [fixedMinY, fixedMaxY] to canvas coordinates
}

function mapX(x) {
  return map(x, fixedGap, e - fixedGap, fixedGap, width - fixedGap); // Map from wave points to canvas coordinates
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('ElliottWaves', 'png');
  }
}
