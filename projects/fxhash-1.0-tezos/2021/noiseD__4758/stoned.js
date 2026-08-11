/**
 * Stoned Triangles
 * VGA 2021
 **/
let click = 0,c1,startX,startY,endX,endY,bgTheme,pY,theme,primaryColor,speedAmount,colorAmount,seed = Math.floor(fxrand() * 15608000);
function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(2);
  createCanvas(windowWidth*0.50, windowHeight*0.50);
  pX = 1;
  pY = Math.min(windowWidth*0.50, windowHeight*0.50)
  console.log("%cnoiseD[1]", "font-family:monospace; font-size: 20px");
  console.log("Experimenting with Noise.");
  bgTheme = random(1) < 0.5 ? "Dark" : "Light";
  theme = random(1) < 0.9 ? "Common Palette" : random(1) > 0.9 ? "Neon Rainbow" : "Monochrome";
  primaryColor = c[Math.floor(random() * c.length)];
  speedAmount = random(0.00025,0.005)
  noiseAmount = random(0.00025,0.01)
  colorAmount = Math.floor(random(10,100))
  features = {
    "Background Color": bgTheme,
    "Colors Amount": colorAmount < 65 ? (colorAmount < 25 ? "Low" : "Medium") : "High",
    "Noise Variance": noiseAmount < 0.005 ? (noiseAmount < 0.0025 ? "Low" : "Medium") : "High",
    "Speed": speedAmount < 0.001375 ? (speedAmount < 0.0005 ? "Slow" : "Medium") : speedAmount > 0.0025 ? "Super Fast" : "Fast",
    "Theme": theme,
  };
  c1 = []
  for (let i = 0; i < colorAmount; i++) {
    if (theme == "Neon Rainbow")
      c1.push(r[Math.floor(random() * r.length)].hex)
    else if (theme == "Common Palette" && random(1) > 0.5)
      c1.push(primaryColor[Math.floor(random(primaryColor.length))], random(1) > 0.5 ? 255 : 30)
    else if (theme == "Monochrome")
      c1.push(i % 2 == 0 ? random(0,100) : random(155,255))
    else
      c1.push(random(1) > 0.95 ? primaryColor[Math.floor(random(1) * primaryColor.length)] : bgTheme == "Dark" ? random(0,15) : random(240,255))
  }
  startX = pY * 0.025
  startY = pY * 0.025
  endX = width/2 - pY * 0.025
  endY = height/2 - pY * 0.025
  if (random() > 0.95) {
    features["Special"] = "Mirror"
    startX = -width/4 + pY * 0.025
    startY = -height/4 + pY * 0.025
    endX = width/4 - pY * 0.025
    endY = height/4 - pY * 0.025
  }
  window.$fxhashFeatures = features;
  console.table(features);
  background(bgTheme == "Dark"
  ? color(30)
  : color(240));
  noStroke();
}
function draw() {
  if (features["Special"] == "Mirror")
    translate(width/2,height/2)    
  else 
    translate(0,0)
  scale(2)
  noiseD(frameCount)
}
function mouseClicked() {
  if (click == 0) {
    noLoop();
    click++;
  } else {
    loop();
    click = 0;
  }
}
function windowResized() {
  resizeCanvas(windowWidth*0.50, windowHeight*0.50);
  setup();
}
function noiseD(frameCount) {
  for (let x = startX; x < endX; x++) {
    for (let y = startY; y < endY; y++) {
      let n = noise(x * noiseAmount, y * noiseAmount, frameCount * speedAmount)
      if (random() > map(n,1,0,0.9,0.95)) {
        fill(c1[Math.floor(n*c1.length)]);
        ellipse(x, y, pX, pX);
      }
    }
  } 
}
