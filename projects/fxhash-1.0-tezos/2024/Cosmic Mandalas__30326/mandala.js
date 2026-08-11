

function setup() {
    let seed = int(  $fx.rand() * 10000);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id('myUniqueCanvas'); 
    noLoop();

    randomSeed(seed);
  }
  
  function draw() {
 
    background(0);
    translate(width / 2, height / 2); 
  
    let maxPetals = 360;
    let layers = int(random(33, 55)); 
    let maxRadius = min(width / 2, height / 2); 
  
    for (let j = layers; j > 0; j--) { 
      let ly = j / layers;
      let petals = floor(random(11, maxPetals));
      let ang = 360 / petals;
      let layerRadius = ly * maxRadius*1.7; 
  
      let hue = random(256);
      let sat = random(1, 256); 
      let brt = random(1, 256);
      let alph = random(44, 100);
      fill(hue, sat, brt, alph);
  
      for (let i = 0; i < petals; i++) {
        let x1 = layerRadius * random(0.7, 0.9);
        let x2 = layerRadius * random(0.8, 1);
        let y2 = random(-layerRadius * 0.1, layerRadius * 0.1);
        let x3 = layerRadius * random(0.7, 0.9);
        let y3 = random(-layerRadius * 0.1, layerRadius * 0.1);
        let x4 = layerRadius;
  
        noStroke();
        beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, y2);
        curveVertex(x3, y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
        endShape();
  
        beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, -y2);
        curveVertex(x3, -y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
        endShape();
        rotate(radians(ang));
      }
      rotate(radians(ang / 2));
    }
  }