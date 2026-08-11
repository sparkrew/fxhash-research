
let circles = [];
let maxRadius = 300;
let alphaGate = 0;
let redGate = 0;
let greenGate = 0;
let blueGate = 0;
let endless = 0
let typeString = "";
let endlessString = "";

function setup() {
  size = min(windowWidth, windowHeight);
  maxRadius=size/2*3/4;
  createCanvas(size, size);
  frameRate();
  background(0);
  alphaGate = Math.round(get_random(140, 240));
  redGate = Math.round(get_random(0, 200)) % 10;
  greenGate = Math.round(get_random(0, 200)) % 10;
  blueGate = Math.round(get_random(0, 200)) % 10;
  endless = Math.round(get_random(0, 200)) % 40;
  if (redGate === 0 && greenGate === 0 && blueGate === 0) {
    typeString = "B/W";
  } else if (redGate > 0 && greenGate === 0 && blueGate === 0) {
    typeString = "Red Circles Soul";
  } else if (redGate === 0 && greenGate > 0 && blueGate === 0) {
    typeString = "Green Circles Soul";
  } else if (redGate === 0 && greenGate === 0 && blueGate > 0) {
    typeString = "Blue Circles Soul";

  } else if (redGate > 0 && greenGate === 0 && blueGate > 0) {
    typeString = "Purple Circles Soul";

  } else if (redGate > 0 && greenGate > 0 && blueGate === 0) {
    typeString = "Yellow Circles Soul";

  }
  else if (redGate === 0 && greenGate > 0 && blueGate > 0) {
    typeString = "AQUA Circles Soul";

  } else {
    typeString = "Rainbow Circles Soul";
  }

  if (endless === 0) {
    endlessString = "Endless";
  } else {
    endlessString = "NoLoop";
  }

  window.$fxhashFeatures = {
    "Type": typeString.toString(),
    "Endless": endlessString.toString(),
    "density": (Math.round(1/alphaGate*10000)/10).toString(),
  };
  //console.log(window.$fxhashFeatures);


  // redGate=0;
  // greenGate=0;
  // blueGate=0;
}

function draw() {
  translate(width / 2, height / 2);
  let R = get_random(0, 255);
  let G = get_random(0, 255);
  let B = get_random(0, 255);
  let A = get_random(0, 255);
  if (redGate === 0) {
    R = 0;
  }
  if (greenGate === 0) {
    G = 0;
  }
  if (blueGate === 0) {
    B = 0;
  }
  if (R === 0 && G === 0 && B === 0) {
    R = get_random(0, 255);
    G = R;
    B = R;
  }


  let newCircle = {
    x: 0,
    y: 0,
    radius: 1,
    color: color(R, G, B, A)
  };
  if (A > alphaGate) {
    circles.push(newCircle);
  }
  //circles.push(newCircle);


  for (let i = 0; i < circles.length; i++) {

    let c = circles[i];
    noStroke();
    fill(c.color);
    ellipse(c.x, c.y, c.radius * 2, c.radius * 2);

    if (c.radius < maxRadius) {
      c.radius += (maxRadius/300);
    }
  }

  if (circles.length > 0 && circles[0].radius >= maxRadius) {
    if (endless === 0) {
      circles.shift();
    } else {
      noLoop();
    }
    // console.log(circles[0].radius);
  }


}

function mousePressed() {
  saveCanvas('CirclesSoul', 'png');
}

function get_random(e, o) {
  return e + fxrand() * (o - e);
}