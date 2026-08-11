let originalWidth = 600;
let originalHeight = 600;
let densityRatio = 1.0;

function setupDensity() {
  let originalRatio = originalWidth / originalHeight;
  let windowRatio = windowWidth / windowHeight;

  if (windowRatio > originalRatio) {
    densityRatio = windowHeight / originalHeight;
  } else {
    densityRatio = windowWidth / originalWidth;
  }

  densityRatio = max(1.0, densityRatio);
  console.log("densityRatio: " + densityRatio);
}

function keyPressed(e) {
  if (e.key == "s" || e.key == "S") {
    let fileName = "Flow of Nature-" + $fx.hash + ".png";
    save(fileName);
  }
}

async function setup() {
  console.log($fx.hash);
  randomSeed($fx.rand() * 10000000);
  noiseSeed($fx.rand() * 10000000);
  setupDensity();
  colorMode(HSB);
  angleMode(DEGREES);
  createCanvas(originalWidth, originalHeight);
  pixelDensity(densityRatio);
  flex();
  background(0);
  let rate = random(0, 1);
  console.log(rate);
  if (rate >= 0 && rate <= 0.25) {
    let flowCount = 1000;
    for (let i = 0; i < flowCount; i++) {
      let length = random(50, 300);
      let drawCount = length;
      let drawStep = length / drawCount;
      let xPos = random(0, width);
      let yPos = random(0, height);
      for (let j = 0; j < drawCount; j++) {
        push();
        translate(xPos, yPos);
        noStroke();
        colorMode(GRAY);
        fill(random(0, 255), random(0.1, 1));
        circle(0, 0, random(0.1, 1));
        pop();
        let rotAngle = flowFieldAngle(xPos, yPos, 0.05, rate);
        xPos += sin(radians(rotAngle)) * drawStep;
        yPos = yPos - cos(radians(rotAngle)) * drawStep;
      }
      await sleep(1);
    }
    await sleep(1);
  } else if (rate > 0.25 && rate <= 0.5) {
    console.log("hi");
    // let xCount = 40;
    // let yCount = 40;
    // let rectWidth = width / xCount;
    // let rectHeight = height / yCount;
    let flowCount = 10000;
    for (let i = 0; i < flowCount; i++) {
      let length = random(300, 600);
      let drawCount = length;
      let drawStep = length / drawCount;
      let xPos = random(0, width);
      let yPos = random(0, height);
      for (let j = 0; j < drawCount; j++) {
        push();
        translate(xPos, yPos);
        noStroke();
        colorMode(GRAY);
        fill(random(0, 255), random(0.1, 1));
        circle(0, 0, random(0.1, 1));
        pop();
        let rotAngle = flowFieldAngle(xPos, yPos, 0.03, rate);
        xPos += sin(radians(rotAngle)) * drawStep;
        yPos = yPos - cos(radians(rotAngle)) * drawStep;
      }
      await sleep(1);
    }
    await sleep(1);
  } else if (rate > 0.5 && rate <= 0.75) {
    // let xCount = 40;
    // let yCount = 40;
    // let rectWidth = width / xCount;
    // let rectHeight = height / yCount;
    let flowCount = 10000;
    console.log("hi");
    for (let i = 0; i < flowCount; i++) {
      let length = random(300, 600);
      let drawCount = length;
      let drawStep = length / drawCount;
      let xPos = random(0, width);
      let yPos = random(0, height);
      for (let j = 0; j < drawCount; j++) {
        push();
        translate(xPos, yPos);
        noStroke();
        colorMode(GRAY);
        fill(random(0, 255), random(0.1, 1));
        circle(0, 0, random(0.1, 1));
        pop();
        let rotAngle = flowFieldAngle(xPos, yPos, 0.003, rate);
        xPos += sin(radians(rotAngle)) * drawStep;
        yPos = yPos - cos(radians(rotAngle)) * drawStep;
      }
      await sleep(1);
    }
    await sleep(1);
  } else if (rate > 0.75 && rate <= 1) {
    // let xCount = 40;
    // let yCount = 40;
    // let rectWidth = width / xCount;
    // let rectHeight = height / yCount;
    let flowCount = 10000;
    console.log("hi");
    for (let i = 0; i < flowCount; i++) {
      let length = random(1, 100);
      let drawCount = length;
      let drawStep = length / drawCount;
      let xPos = random(0, width);
      let yPos = random(0, height);
      for (let j = 0; j < drawCount; j++) {
        push();
        translate(xPos, yPos);
        noStroke();
        colorMode(GRAY);
        fill(random(0, 255), random(0.1, 1));
        circle(0, 0, random(0.1, 2));
        pop();
        let rotAngle = flowFieldAngle(xPos, yPos, 0.09, rate);
        xPos += sin(radians(rotAngle)) * drawStep;
        yPos = yPos - cos(radians(rotAngle)) * drawStep;
      }
      await sleep(1);
    }
    await sleep(1);
  }

  setTimeout((e) => {
    fxpreview();
  });
}

function flowFieldAngle(xPos, yPos, density, rate) {
  if (rate >= 0 && rate <= 0.25) {
    let noiseValue = noise(xPos * density, yPos * density);
    let rotateAngle = lerp(0, 720, noiseValue) * 0;
    return rotateAngle;
  } else if (rate > 0.25 && rate <= 0.5) {
    let noiseValue = noise(xPos * density, yPos * density);
    let rotateAngle = lerp(0, 360, noiseValue) * 30;
    return rotateAngle;
  } else if (rate > 0.5 && rate <= 0.75) {
    let noiseValue = noise(xPos * density, yPos * density);
    let rotateAngle = lerp(0, 720, noiseValue) * 30;
    return rotateAngle;
  } else if (rate > 0.75 && rate <= 1) {
    let noiseValue = noise(xPos * density, yPos * density);
    let rotateAngle = lerp(0, 720, noiseValue) * 100;
    return rotateAngle;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function draw() {}
