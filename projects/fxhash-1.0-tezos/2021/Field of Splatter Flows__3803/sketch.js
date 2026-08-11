// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

/*
=====================     G L O B A L      ========================================
*/
let flow = 0;
let resolution = 60
let fieldSize = 0
let angle = 0;
let brush;
let colors = ["#e8c65c", "#c7e97f", "#e59e9b", "#ef5b45", "#51b6aa"]
let randomArrayElement = () => '';

let globalPoints = {
  id: [{id: "gP"}],
  position: [{x: 0, y: 0}],
  color: ["#426b78","#6cc2db", "#a8d9e7", "#d9dbda", "#f7dcd00", "#f0dad6"],
  angle: [],
}

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color

function setup() {

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  noiseSeed(seed);
  col = random(colors);
  // sizee = int(random(width/2));
  resolution = int(random(55,75));

  let w = windowWidth
  let h = windowHeight

  fieldSize = w/resolution

  const artboard = createCanvas(w, h);
  artboard.parent('pi5-canvas');

  let colorBG = random(globalPoints.color)
  background(colorBG)

  for (let row = 0; row < resolution; row += 1) {
    for (let col = 0; col < resolution; col += 1) {

      let PosX = row * fieldSize
      let PosY = col * fieldSize
      
      // let angle = (row/TAU)
      let angle = noise(row * 0.1, col * 0.1)

      // The simple grid without translate to achieve all coordinates

      // Pushing the position of each gridPoint to the globalPoints Object in the Array "position", which has an Object with x and y.
      globalPoints.position.push({x: PosX, y: PosY})

     // Pushing an ID to the global Points Object
      globalPoints.id.push("R" + row + "C" + col)

      // Pushing an Angle to the Objects
      globalPoints.angle.push(angle)
    }
  }
  angle = TAU/360

  // A Loop for the Lines starting from the globalPoints positions.
  
  for (let i = 0; i < globalPoints.id.length; i++) {
    // Random Stroke Weight to Play with

    brush = (w / 2000) * (i / 65) * random()
    strokeWeight(brush)

    // Coloring Random Colors of an Color Selection in an Array

    let x1 = globalPoints.position[i].x
    let y1 = globalPoints.position[i].y
    
    // let x2 = x1 * (2.5 * noise(flow * angle * i))
    // let y2 = y1 * (2 * noise(flow + angle * i))
    
    let x2 = x1 + globalPoints.angle[i] * i/TAU * noise(i*4)
    let y2 = y1 + globalPoints.angle[i] * i/TAU


    let circleSize = (w / 2000) * random(20,(100/i))

    if (circleSize > ((w/2000) * 11.8) && circleSize < ((w/2000) * 14)) {
      // col = random(colors);
      fill(col)
      noStroke()
      circle(x1 * noise(i), y1 * noise(i), circleSize)
    } else {
    let randomColor1 = random(globalPoints.color)
    fill(randomColor1)
    noStroke()
    circle(x1 * noise(i), y1 * noise(i), circleSize)

  }
    // flow = flow + 0.00002
    // Coloring Random Colors of an Color Selection in an Array

    if (brush > ((w/2000) * 19) && brush < ((w/2000) * 23) ) {
      // col = random(colors);
      stroke(col)

      line(x1, y1, x2, y2)
    } else {
      let randomColor = random(globalPoints.color)
      stroke(randomColor)
      line(x1, y1, x2, y2)
    }

  }

  // FX Features
  window.$fxhashFeatures = {
    "Resolution" : resolution,
    "Highlight Color" : col,
     };

}

function draw() {
   
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

