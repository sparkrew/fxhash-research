// Telluria: Hectare
// ©2023 Matthew Mosher

/* CONTROLS
m = map mode
c = camera
d = daylight
s = save frame
*/

const numBoxes = 40;
const sideLength = 10;
const noiseOffset = 100;
let noiseScale = 0.005;

let seaLevel = 0.4;
const rockLevel = 0.3
const sandLevel = 0.4;
const treeLevel = 0.65;
const mtnLevel = 0.8;
const bushLevel = 0.55;

let rockColor, sandColor, grassColor, forestColor, mtnColor, seaColor;
let seaColorSolid, trunkColor, leafColor, bushColor, houseColor, roofColor, detail;

let mapMode = 1;
let rocks = false;
let houses = false;
let houseNum = 0;
let visitors = "not today";
let visitorsDrawn = false;
let iVis = 0;
let jVis = 0;
let seed, sl, ns;

let cam;
let orbCon = -1;
let daylight = -1;

let heightScale = 1;
let heightDir = 0.05;

function preload() {
  seed = int($fx.rand()*987654321);
  randomSeed(seed);
  noiseSeed(seed);
  
  // set sea level and grade
  seaLevel = gaussianRandom(0.5*bushLevel, 0.15);
  seaLevel = constrain(seaLevel,0.01,bushLevel);
  noiseScale = gaussianRandom(0.006, 0.003);
  noiseScale = constrain(noiseScale,0.001, 0.009);
  
  // classify sea and grade
  if(seaLevel < 0.33*bushLevel) {
    sl = "arid";
  } else if(seaLevel < 0.66*bushLevel) {
    sl = "temperate";
  } else {
    sl = "humid"
  }
  if(noiseScale < 0.002) {
    ns = "plains";
  } else if(noiseScale < 0.005) {
    ns = "rolling hills";
  } else if(noiseScale < 0.007) {
    ns = "foothills";
  } else {
    ns = "canyons";
  }
  
  //calculate averate elevation
  let mtn = 0
  let ocean = 0;
  let avens = 0;
  for(let i = 0; i < numBoxes-1; i ++) {
    for(let j = 0; j < numBoxes-1; j ++) {
      const x = (i * sideLength) - (numBoxes * sideLength)/2;
      const z = (j * sideLength) - (numBoxes * sideLength)/2;
      avens += getNoiseValue(x,z);
      if(getNoiseValue(x,z) > seaLevel) {ocean++;}
      if(getNoiseValue(x,z) > mtnLevel) {mtn++;}
    }
  }
  avens = avens / ((numBoxes-1)*(numBoxes-1));
  
  // special terrain type overrides
  if(sl == "arid" && ns == "plains" && avens < bushLevel) 
    {ns = "desert";}
  if(sl == "arid" && ns == "rolling hills" && avens < sandLevel) 
    {ns = "dunes";}
  if(ns == "plains" && avens < seaLevel) 
    {ns = "coast";}
  if(sl == "humid" && ns == "canyons" && avens < seaLevel) 
    {ns = "atolls";}
  if(avens > bushLevel && noiseScale < 0.004)
    {ns = "brushland";}
  if(sl == "humid" && ns == "rolling hills" && avens > seaLevel && mtn < 1)
    {ns = "swamp";} 
  if(avens > treeLevel) 
    {ns = "forest";}
  if(mtn > 3 && (ns == "canyons" || ns == "foothills")) 
    {ns = "mountains";}
  if(avens > mtnLevel && ns == "plains")
    {ns = "plateau";}
  if(sl == "humid" && ns == "rolling hills" && avens < seaLevel)
    {ns = "islands";} 
  if(sl == "humid" && ns == "foothills" && avens < seaLevel)
    {ns = "islands";}
  if(ocean == 0)
    {ns = "ocean";}


  // gleaming
  let dreaming = false;
  if($fx.rand() < 0.15) {
    mapMode = 2;
    daylight = -1;
    dreaming = true;
  }
  
  //inhabitants
  if($fx.rand() < 0.3 && avens < bushLevel && avens > seaLevel) {houses = true;}
  
  //special features - visitors
  if($fx.rand() < 0.15) {
    if(mtn > 2) {visitors = "radio tower";}
    else if(avens < seaLevel) {visitors = "ship";}
    else if(avens < bushLevel && houses == false) {
      if(random() < 0.5) {visitors = "portal";}
      else {visitors = "gate";}}
    else {visitors = "UFO";}
  } 
  
  if($fx.rand() < 0.3) {rocks = true;}
  
  // set fx features
  console.log("sea: " + seaLevel + 
    " grade: " + noiseScale*100 +
    " avens: " + avens);
  $fx.features({
    "climate": sl,
    "terrain": ns,
    "inhabited": houses,
    "gleaming": dreaming,
    "visitors": visitors
  })
  console.log(window.$fx.getFeatures());
}

function setup() {
  createCanvas(900, 900, WEBGL);
  windowResized();
  noStroke();
  frameRate(12);
  //ortho();
  
  // Calculate camera position
  cam = createCamera();
  const camHeight = -numBoxes * sideLength * 0.8;
  const orbitRad = numBoxes * sideLength * 1.2;  
  cam.setPosition(0, camHeight, orbitRad);
  cam.lookAt(0, 0, 0);
  
  //bushLevel is max sea level
  let gl = map(seaLevel, 0, bushLevel, 0, 1);
  grassColor = lerpColor(color("#B4804B"), color("#6BA74A"), gl);
  getColors(mapMode);
    
  //instructions
  /*
  let p = createP('r = refresh, c = orbital camera toggle, d = daylight toggle, m = grayscale toggle, h = 2D toggle, s = save frame');
  p.style('font-size', '16px');
  p.style('text-align:center');
  p.position( 0,0);
  p.center('horizontal');
  */
}

function draw() {
  randomSeed(seed);
  noiseSeed(seed);
  const t = millis();

  //background
  let daySpeed = 75;//90*(1+sin(frameCount/60))/2+10;
  let s = (1+cos(frameCount/daySpeed))*127;
  if(daylight == -1) {
    background(255);  //white
  } else {
    background(s,s,42+5*s/6); //night/day
  }
  
  // camera stuff
  const camHeight = -numBoxes * sideLength * 0.8;
  const orbitRad = numBoxes * sideLength * 1.2;
  if(orbCon > 0) {
      orbitControl();
  } else {
    cam.setPosition(-cos(frameCount/60)*orbitRad, camHeight, -sin(frameCount/60)*orbitRad);
    cam.lookAt(0, 0, 0);
  }
  
  // lights
  let vl = createVector(-cos(frameCount/60)*orbitRad, camHeight, -sin(frameCount/60)*orbitRad).normalize().mult(-1);
  ambientLight(80);
  if(daylight == 1) {
    let v = new p5.Vector(sin(frameCount/daySpeed),cos(frameCount/daySpeed), 0);
    let vmoon = v;
    directionalLight(250, 250, 240, v);
    vmoon.mult(-1);
    directionalLight(30, 30, 90, vmoon);
  } else if(orbCon < 0) {
    directionalLight(250,250,250,vl);
  } else {
    let vs = createVector(cam.eyeX,cam.eyeY,cam.eyeZ).normalize().mult(-1);
    directionalLight(250,250,250,vs);
  }
    
  // drap map
  drawTerrain(t);
  if(frameCount < 2) {background(255);} // skip init glitch
  
  if(visitors != "not today" ){//&& visitors != "radio tower") {
    visitorsDrawn = false;
    findVisitors();
  }
  
  drawWater();
  
  //fx preview
  if(frameCount == 45) {$fx.preview();}
}

function keyReleased() {
  if(key === "s") { // save frame
    save(genFilename("telluria_") + seed + ".png");
  } else 
  if(key === "c") { // manual camera control
    orbCon *= -1;
  } else 
  if(key === "m") { // map color style
    mapMode *= -1;
    getColors(mapMode);
  }  else
  if(key === "d") { // toggle daylight
    daylight *= -1;
  }
  //if(key === "r") {window.location.href = window.location.href;}
}

function drawTerrain(t) {
  let hNum = 0;
  //visitorsDrawn = false;
  for(let i = 0; i < numBoxes-1; i++) {
    let pastHouse = false;
    for(let j = 0; j < numBoxes-1; j++) {
      const x = (i * sideLength) - (numBoxes * sideLength)/2;
      const z = (j * sideLength) - (numBoxes * sideLength)/2;
      const x2 = ((i+1) * sideLength) - (numBoxes * sideLength)/2;
      const z2 = ((j+1) * sideLength) - (numBoxes * sideLength)/2;
      
      //drawMesh
      const noiseValue = getNoiseValue(x, z);//, t);
      let h = -getBoxHeight(noiseValue);
      let h1 = -getBoxHeight(getNoiseValue(x2, z));
      let h2 = -getBoxHeight(getNoiseValue(x2, z2));
      let h3 = -getBoxHeight(getNoiseValue(x, z2));
      
      // SET COLOR     
      if(noiseValue < rockLevel) {
        const lerpVal = map(noiseValue, 0, rockLevel, 0, 1);
        ambientMaterial(lerpColor(color(rockColor), color(sandColor), lerpVal));
      } else if(noiseValue < sandLevel) {
        const lerpVal = map(noiseValue, rockLevel, sandLevel, 0, 1);
        ambientMaterial(lerpColor(color(sandColor), color(grassColor), lerpVal));
      } else if(noiseValue < mtnLevel) {
        const lerpVal = map(noiseValue, sandLevel, mtnLevel, 0, 1);
        ambientMaterial(lerpColor(color(grassColor), color(forestColor), lerpVal));
      } else {
        const lerpVal = map(noiseValue, mtnLevel, 1, 0, 1);
        ambientMaterial(lerpColor(color(forestColor), color(mtnColor), lerpVal));
        if(mapMode == 1) {
          ambientMaterial(lerpColor(color(mtnColor), color(rockColor), lerpVal));
        }
      }
      
      // construct quad normal vector
      let v1 = createVector(x, h, z);
      let v2 = createVector(x2, h1, z);
      let v3 = createVector(x2, h2, z2);
      let v6 = v2.sub(v1).cross(v3.sub(v1));
      v6.normalize();

      // DRAW TERRAIN QUAD
      if(mapMode == 2) {stroke(75);}
      beginShape();
        normal(v6);
        vertex(x, h, z);
        vertex(x2, h1, z);
        vertex(x2, h2, z2);
        vertex(x, h3, z2);
      endShape(CLOSE);
      noStroke();
        
      //DRAW EDGE QUADS
      ambientMaterial(sandColor);
      if(i == 0) {
        beginShape();
          normal(-1, 0, 0);
          vertex(x, h, z);
          vertex(x, 0, z);
          vertex(x, 0, z2);
          vertex(x, h3, z2);
        endShape(CLOSE);
      }
      if(i == numBoxes-2) {
        beginShape();
          normal(1, 0, 0);
          vertex(x2, 0, z);
          vertex(x2, h1, z);
          vertex(x2, h2, z2);
          vertex(x2, 0, z2);
        endShape(CLOSE);
      }
      if(j == 0) {
        beginShape();
          normal(0,0,-2);
          vertex(x, h, z);
          vertex(x2, h1, z);
          vertex(x2, 0, z);
          vertex(x, 0, z);
        endShape(CLOSE);
      }
      if(j == numBoxes-2) {
        beginShape();
          normal(0,0,1);
          vertex(x, h3, z2);
          vertex(x2, h2, z2);
          vertex(x2, 0, z2);
          vertex(x, 0, z2);
        endShape(CLOSE);
      }
      //draw base plane
      push();
        translate(-sideLength/2, 0, -sideLength/2);
        if(i == 0 && j == 0 && heightScale != 0) {
          beginShape();
            normal(0,1,0);
            vertex(((numBoxes-1) * sideLength)/2, 0, ((numBoxes-1) * sideLength)/2);
            vertex(((numBoxes-1) * sideLength)/2, 0, -((numBoxes-1) * sideLength)/2);
            vertex(-((numBoxes-1) * sideLength)/2, 0, -((numBoxes-1) * sideLength)/2);
            vertex(-((numBoxes-1) * sideLength)/2, 0, ((numBoxes-1) * sideLength)/2);
          endShape(CLOSE);
        }
      pop();
      
      // TREES
      push();
        translate((x+x2)/2, (h+h2)/2, (z+z2)/2);
        if(noiseValue >= treeLevel && noiseValue < mtnLevel) {
          if(mapMode == 1 && (ns == "swamp" || sl == "arid")) 
          {leafColor = color(random(25,100), random(50,100), random(25));}
          else if(mapMode == 1) {leafColor = color(random(25,50), random(50,100), random(25,50));}
          else {random(); random(); random();}
          drawTree(h);
        }
        // BUSHES
        if(noiseValue >= bushLevel && noiseValue < treeLevel) {
          if(mapMode == 1) {bushColor = color(random(15,165-seaLevel*150), random(50,125), random(25));}
          else {random(); random(); random();}
          if(random() <0.15 && mapMode == 1 && rocks && (ns == "mountains" || ns == "foothills")) {
            let r = random(50,150);  
            bushColor = color(r,r,r);} //rocks instead
          else {random();}
          drawBush(h, noiseValue);
        }
        // Silos
        if(noiseValue < bushLevel && noiseValue > seaLevel && houses == true && ns == "plains" && pastHouse == true) { 
          if(random() < 0.3) {drawSilo(h);}
          pastHouse = false;
        } 
        // HOUSES
        if(noiseValue < bushLevel && noiseValue > seaLevel && houses == true) {
          if(mapMode == 1) {roofColor = color(random(150,200), random(50,70), random(50,70));}
          else {random(); random(); random();}
          if((hNum == 0 && i > 5 && j > 5) || random() < 0.01) {
            drawHouse(h);
            hNum++;
            pastHouse = true;
          }
        }
      pop();
    }
  }
}

function drawWater() {
    push();
      const waterHeight = getBoxHeight(seaLevel);
      const waterSize = (numBoxes-1) * sideLength - 0.1;
      ambientMaterial(seaColor);
      translate(-sideLength/2, -waterHeight/2-0.01, -sideLength/2);
      box(waterSize, getBoxHeight(seaLevel), waterSize);
    pop();
}

function drawBush(h, n) {
  const bushLength = sideLength*4/10;
  let bp = map(n, bushLevel, treeLevel, 0, 1);
    translate(0, -bushLength/2,0);
    ambientMaterial(bushColor);
    if(random() < bp && heightScale > 0) {
      sphere(random(bushLength,(bushLength)*n), detail, detail);
    } else {
      random();
    }
    translate(random(sideLength/2), 0,random(sideLength/2));
    if(random() < n && heightScale > 0) {
      sphere(random(bushLength,(bushLength)*n), detail, detail);
    } else {
      random();
    }
}

function drawTree(h) {
  const trunkLength = sideLength;
  const leafLength = sideLength;
      //trunk
      ambientMaterial(trunkColor);
      translate(0, -trunkLength/2, 0);
      translate(random(sideLength/2), 0,random(sideLength/2));
      cylinder(trunkLength/5, trunkLength,detail, detail);
      //needles
      ambientMaterial(leafColor);
      translate(0, -trunkLength/2 - leafLength/2, 0); //stroke(100);
      cone(leafLength * (0.5+random(0.25)), -leafLength * (1+random()),detail, detail); //detail 4,1 for outlines    
}

function drawHouse(h) {
  const houseHeight = sideLength*0.6;
      translate(0, -houseHeight/2, 0);
      ambientMaterial(houseColor);
      ellipsoid(sideLength*0.6,houseHeight,sideLength*0.6, detail, detail);
      translate(0, -houseHeight, 0);
      ambientMaterial(roofColor);
      cone(sideLength*3/4, -sideLength/2, detail, detail);
}

function drawSilo(h) {
    const houseHeight = sideLength;
      translate(0, -houseHeight/2, 0);
      ambientMaterial(houseColor);
      cylinder(sideLength*0.5,houseHeight, detail, detail);
      translate(0, -houseHeight/2, 0);
      sphere(sideLength*0.5, detail, detail);
}

function drawVisitors(h) {
    switch(visitors) {
      case "radio tower":
        ambientMaterial(roofColor);//"#cc2211");
        translate(0, -2*sideLength,0);
        cylinder(sideLength/10, 3*sideLength, detail, detail);
        translate(0,-3*sideLength/2,0);
        emissiveMaterial("#ffe");
        sphere(sideLength/10);
      break;
      case "portal":
        translate(0,-0.5*sideLength,0);  //0.5
        ambientMaterial(visColor);
        torus(0.5*sideLength,0.1*sideLength, detail, detail);
        emissiveMaterial(seaColor);
        ellipsoid(0.4*sideLength,0.4*sideLength,0.1*sideLength, detail, detail);
      break;
      case "gate":
        translate(0,-0.9*sideLength,0);  //0.5
        ambientMaterial(visColor);
        ellipsoid(sideLength*0.8,sideLength*0.15, sideLength*0.2, detail, detail);
        translate(sideLength*0.4, 0.5*sideLength,0);
        ellipsoid(sideLength*0.15, sideLength*0.8, sideLength*0.2, detail, detail);
        translate(-sideLength*0.8,0,0);
        ellipsoid(sideLength*0.15, sideLength*0.8, sideLength*0.2, detail, detail);
      break;
      case "ship":
        let seaBox = -getBoxHeight(seaLevel);
        let shipLevel = seaBox - h;
        translate(0,shipLevel,0);
        ambientMaterial(visColor);
        ellipsoid(0.3*sideLength, 0.1*sideLength, sideLength, detail, detail);
        translate(0,-0.25*sideLength,0);
        cylinder(1, 0.5*sideLength, detail, detail);
        translate(0,0,0.3*sideLength);
        cylinder(1, 0.4*sideLength, detail, detail);
      break;
      default: //ufo
        translate(0, -3*sideLength, 0);
        translate(0,sin(frameCount/5)*sideLength/2,0);
        ambientMaterial(visColor);
        if(mapMode ==2) {ambientMaterial("#ccc");}
        ellipsoid(sideLength*0.7,sideLength*0.2,sideLength*0.7, detail, detail);
        ambientMaterial(seaColor);
        sphere(sideLength*0.4, detail, detail);
        translate(0,2*sideLength,0);
        emissiveMaterial("rgba(255, 255, 0, 0.1)");
        cone(0.5*sideLength, -4*sideLength, detail, detail)
        //console.log("ufo drawn");
    }
  visitorsDrawn = true;
}

function findVisitors() {
  let i, j, x, z, x2, z2, h, h2, noiseValue;
  if( iVis == 0 && jVis == 0) {
  let search = true;
    while(search) {
      i = int(random(numBoxes-2));
      j = int(random(numBoxes-2));
      x = (i * sideLength) - (numBoxes * sideLength)/2;
      z = (j * sideLength) - (numBoxes * sideLength)/2;
      noiseValue = getNoiseValue(x, z);
      switch(visitors) {
        case "radio tower":
          if(noiseValue > mtnLevel) {search = false;}
        break;
        case "ship":
          if(noiseValue < seaLevel-0.05) {search = false;}
        break;
        case "portal":
        case "gate":
          if(noiseValue < bushLevel && noiseValue > seaLevel) {search = false;}
        break;
        default:
          search = false;
      }
    }
    iVis = i;
    jVis = j;
  } else {
    x = (iVis * sideLength) - (numBoxes * sideLength)/2;
    z = (jVis * sideLength) - (numBoxes * sideLength)/2;
    x2 = ((iVis+1) * sideLength) - (numBoxes * sideLength)/2;
    z2 = ((jVis+1) * sideLength) - (numBoxes * sideLength)/2;
    noiseValue = getNoiseValue(x, z);
    h = -getBoxHeight(noiseValue);
    h2 = -getBoxHeight(getNoiseValue(x2, z2));
    push();
      translate((x+x2)/2, (h+h2)/2, (z+z2)/2);
      rotateY(random(0,PI));
      drawVisitors((h+h2)/2)
    pop();
  }
}

function getNoiseValue(x, z){
  x = x * noiseScale + noiseOffset;
  z = z * noiseScale + noiseOffset;
  return noise(x, z);
}

function getBoxHeight(noiseValue) {
  return map(noiseValue, 0, 1, 0, 150) * heightScale;
}

function getColors(m) {
  if(mapMode == 2) { //gleaming
    detail = 6;
    sandColor = "#f0f";
    rockColor = "#0ff";
    mtnColor = sandColor;
    seaColor = "rgba(0,250,0, 0.5)";
    seaColorSolid = "#00F900";
    trunkColor = sandColor;
    leafColor = sandColor;
    bushColor = sandColor;
    houseColor = "#666";
    roofColor = "#ff0";
    grassColor = lerpColor(color(rockColor),color(sandColor), sandLevel);//sandColor;
    forestColor = sandColor;
    sandColor = rockColor;
    visColor = "#ff0";
  } else if(mapMode == 1) { //regualar
    detail = 16;
    rockColor = "#1A1003";
    sandColor = "#D4A463";
    let gl = map(seaLevel, 0, bushLevel, 0, 1);
    if(ns == "islands" || ns == "atolls" || ns == "ocean") {
      gl = map(seaLevel/2, 0, bushLevel, 0, 1);
    }
    grassColor = lerpColor(color("#B4804B"), color("#6BA74A"), gl);
    forestColor = "#236204";
    mtnColor = "#4B4742";
    seaColor = "rgba(16, 152, 166, 0.4)";
    seaColorSolid = "#1098A6";
    trunkColor = "#794A1F";
    leafColor = "#468343";
    bushColor = "#6F9350";
    houseColor = "#eee";
    roofColor = "rgb(200,70,70)";
    visColor = "#aaa";
  } else if(mapMode == -1) { // flat sand
    detail = 4;
    sandColor = "#D4A463";
    rockColor = "#A26514";
    mtnColor = "#E6BE78"
    grassColor = lerpColor(color(rockColor),color(sandColor), sandLevel);//sandColor;
    forestColor = lerpColor(color(rockColor), color(sandColor),treeLevel);//sandColor;//"#6D973E";
    seaColor = "rgba(82,62,22, 0.5)";
    seaColorSolid = "#523E15";
    trunkColor = sandColor;//"#886622";
    leafColor = sandColor; 
    bushColor = sandColor; 
    houseColor = sandColor;
    roofColor = sandColor;
    visColor = sandColor
    sandColor = lerpColor(color(rockColor), color(sandColor),rockLevel);//sandColor;//"#6D973E";
  } else { //flat gray
    detail = 6;
    sandColor = "#eee";
    rockColor = "#111";
    mtnColor = "#fff";
    seaColor = "rgba(0,0,0, 0.5)";
    seaColorSolid = "#000000";
    trunkColor = sandColor;
    leafColor = sandColor;
    bushColor = sandColor; 
    houseColor = sandColor;
    roofColor = sandColor;
    visColor = "#aaa";
    grassColor = lerpColor(color(rockColor),color(sandColor), sandLevel);//sandColor;
    forestColor = lerpColor(color(rockColor), color(sandColor),treeLevel);//sandColor;//"#6D973E";
    sandColor = lerpColor(color(rockColor), color(sandColor),rockLevel);//sandColou
  }
}
