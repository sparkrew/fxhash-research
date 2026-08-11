let colors;
let colorScheme = {
  red: [
    "#FFEBEE", //lightest
    "#FFCDD2",
    "#EF9A9A",
    "#E57373",
    "#EF5350",
    "#F44336",
    "#E53935",
    "#D32F2F",
    "#C62828",
    "#B71C1C", //darkest
  ],
  pink: [
    "#FCE4EC", //lightest
    "#F8BBD0",
    "#F48FB1",
    "#F06292",
    "#EC407A",
    "#E91E63",
    "#D81B60",
    "#C2185B",
    "#AD1457",
    "#880E4F", //darkest
  ],
  purple: [
    "#F3E5F5", //lightest
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#9C27B0",
    "#8E24AA",
    "#7B1FA2",
    "#6A1B9A",
    "#4A148C", //darkest
  ],
  deepPurple: [
    "#EDE7F6", //lightest
    "#D1C4E9",
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
    "#673AB7",
    "#5E35B1",
    "#512DA8",
    "#4527A0",
    "#311B92",
    "#1A237E", //darkest
  ],
  indigo: [
    "#E8EAF6", //lightest
    "#C5CAE9",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#3949AB",
    "#303F9F",
    "#283593",
    "#1A237E", //darkest
  ],
  blue: [
    "#E3F2FD", //lightest
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#2196F3",
    "#1E88E5",
    "#1976D2",
    "#1565C0",
    "#0D47A1", //darkest
  ],
  lightBlue: [
    "#E1F5FE", //lightest
    "#B3E5FC",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#03A9F4",
    "#039BE5",
    "#0288D1",
    "#0277BD",
    "#01579B", //darkest
  ],
  cyan: [
    "#E0F7FA", //lightest
    "#B2EBF2",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#00BCD4",
    "#00ACC1",
    "#0097A7",
    "#00838F",
    "#006064", //darkest
  ],
  teal: [
    "#E0F2F1", //lightest
    "#B2DFDB",
    "#80CBC4",
    "#4DB6AC",
    "#26A69A",
    "#009688",
    "#00897B",
    "#00796B",
    "#00695C",
    "#004D40", //darkest
  ],
  green: [
    "#E8F5E9", //lightest
    "#C8E6C9",
    "#A5D6A7",
    "#81C784",
    "#66BB6A",
    "#4CAF50",
    "#43A047",
    "#388E3C",
    "#2E7D32",
    "#1B5E20", //darkest
  ],
  lightGreen: [
    "#F1F8E9", //lightest
    "#DCEDC8",
    "#C5E1A5",
    "#AED581",
    "#9CCC65",
    "#8BC34A",
    "#7CB342",
    "#689F38",
    "#558B2F",
    "#33691E", //darkest
  ],
  lime: [
    "#F9FBE7", //lightest
    "#F0F4C3",
    "#E6EE9C",
    "#DCE775",
    "#D4E157",
    "#CDDC39",
    "#C0CA33",
    "#AFB42B",
    "#9E9D24",
    "#827717", //darkest
  ],
  yellow: [
    "#FFFDE7", //lightest
    "#FFF9C4",
    "#FFF59D",
    "#FFF176",
    "#FFEE58",
    "#FFEB3B",
    "#FDD835",
    "#FBC02D",
    "#F9A825",
    "#F57F17", //darkest
  ],
  amber: [
    "#FFF8E1", //lightest
    "#FFECB3",
    "#FFE082",
    "#FFD54F",
    "#FFCA28",
    "#FFC107",
    "#FFB300",
    "#FFA000",
    "#FF8F00",
    "#FF6F00", //darkest
  ],
  orange: [
    "#FFF3E0", //lightest
    "#FFE0B2",
    "#FFCC80",
    "#FFB74D",
    "#FFA726",
    "#FF9800",
    "#FB8C00",
    "#F57C00",
    "#EF6C00",
    "#E65100", //darkest
  ],
  deepOrange: [
    "#FBE9E7", //lightest
    "#FFCCBC",
    "#FFAB91",
    "#FF8A65",
    "#FF7043",
    "#FF5722",
    "#F4511E",
    "#E64A19",
    "#D84315",
    "#BF360C",
    "#3E2723", //darkest
  ],
  brown: [
    "#EFEBE9", //lightest
    "#D7CCC8",
    "#BCAAA4",
    "#A1887F",
    "#8D6E63",
    "#795548",
    "#6D4C41",
    "#5D4037",
    "#4E342E",
    "#3E2723", //darkest
  ],
  grey: [
    "#FAFAFA", //lightest
    "#F5F5F5",
    "#EEEEEE",
    "#E0E0E0",
    "#BDBDBD",
    "#9E9E9E",
    "#757575",
    "#616161",
    "#424242",
    "#212121", //darkest
  ],
  blueGrey: [
    "#ECEFF1", //lightest
    "#CFD8DC",
    "#B0BEC5",
    "#90A4AE",
    "#78909C",
    "#607D8B",
    "#546E7A",
    "#455A64",
    "#37474F",
    "#263238", //darkest
  ],
};

// Cubic Bézier Curves points:
// interactive example: https://www.geogebra.org/m/WPHQ9rUt
let p1, p2, p3, p4;

// time for one cycle of animation (0 ~ 1)
let t = 0;

// total number of frames per cycle of animation
// larger --> better anti-aliasing
let framesPerCycle = 60 * 10;

// vertical separation between layers
let dy;

// radius the rectangles that draw the layers
let r;

// control if the waves change color constantly
let changeColor = false;

//seed Hash
let seed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  // frameRate(60);
  background(0);

  p1 = createVector(0 - 150, height);
  p2 = createVector((width / 4) * 3, height);
  p3 = createVector(width / 4, height / 2);
  p4 = createVector(width, height / 2);

  dy = random(1) * 100;

  // get a random key(color_name) from colorScheme
  let color = random(Object.keys(colorScheme));
  colors = colorScheme[color];

  r = random(20, 45);
  changeColor = random(0, 1) > 0.5;

  // FX Features
  window.$fxhashFeatures = {
    InitialColor: color,
    WillChangeColor: changeColor,
  };

  noStroke();
}

function draw() {
  let x = bezierPoint(p1.x, p2.x, p3.x, width + 150, t);
  let y = bezierPoint(p1.y, p2.y, p3.y, p4.y, t);

  // for each color:
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x - i * 25, y + dy * i, 100, 100, r);
  }

  if (frameCount % 30 == 0 && changeColor) {
    let key = random(Object.keys(colorScheme));
    colors = colorScheme[key];
  }

  // if one cycle completes, reverse p1 & p4:
  if (frameCount % framesPerCycle == 0) {
    t = 0;

    // record the current p1.y
    p1y = p1.y;

    // set p1.y to current p4.y:
    p1 = createVector(0 - 150, p4.y);

    p2 = createVector((width / 4) * 3, p4.y);
    p3 = createVector(width / 4, p1y);

    // set p4.y to old p1.y
    p4 = createVector(width, p1y);

    // decides separations between bars in a wave
    dy = noise(frameCount) * 100;
  } else {
    t += 1 / framesPerCycle;
  }
}

function keyPressed(key) {
  if (key.key == "r") {
    // reset the color scheme
    let key = random(Object.keys(colorScheme));
    colors = colorScheme[key];
  }

  // if spacebar is pressed
  if (key.keyCode == 32) {
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
