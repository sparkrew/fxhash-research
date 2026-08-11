

let pattern, shape, pattern2;

let firstword = ['arbitrary', 'double', 'probable', 'forgettable', 'clawing', 'ephemeral', 'excusable', 'frequent', 'abstinent', 'loose', 'lost', 'ignorant', 'palpable', 'abstract', 'random', 'complete', 'capricious', 'subjective', 'inconsistent', 'consistent', 'fickle', 'erratic', 'impulsive', 'volatile', 'fleeting', 'transitory', 'abandoned', 'structural'];

let secondword = ['condition', 'disposition', 'control', 'instalation', 'deletion', 'situation', 'nature', 'diversion', 'stimuli', 'creation', 'elation', 'criteria', 'doxxing', 'puzzling', 'scattering', 'descentralization', 'temperament', 'tendency', 'propension', 'history'];

let thirdword = ['of the soul', 'of men', 'of paradise', 'of heaven', 'of the world', 'of god', 'of sacred', 'of the human', 'from god', 'of freedom', 'of existence', 'of art', 'from heaven', 'of society', 'of things'];

let matisseColors = [
  '#FFD147', // Mustard Yellow
  '#FFCBA4', // Peach
  '#A8A878', // Olive Green
  '#FF6961', // Salmon Pink
  '#FDBCB4', // Pastel Pink
  '#9B870C', // Olive
  '#DBD56E', // Light Yellow Green
  '#2E5894', // Navy Blue
  '#ADD8E6', // Light Blue
  '#FFFACD', // Lemon Yellow
  '#FFA07A', // Light Salmon
  '#CD5C5C', // Indian Red
  '#8F9779', // Khaki
  '#7F7F7F', // Dark Grey
  '#BDB76B', // Dark Khaki
  '#F5DEB3', // Wheat
  '#FFF8DC', // Cornsilk
  '#FFC0CB', // Pink
  '#FF69B4', // Hot Pink
  '#FA8072', // Salmon
  '#DB7093', // Pale Violet Red
  '#FF6347', // Tomato
];

let matisseColors2 = [
  '#FFB347', // Vivid Orange
  '#FFD147', // Mustard Yellow
  '#FFCBA4', // Peach
  '#A8A878', // Olive Green
  '#FF6961', // Salmon Pink
  '#FDBCB4', // Pastel Pink
  '#9B870C', // Olive
  '#DBD56E', // Light Yellow Green
  '#E6E6FA', // Lavender
  '#ADD8E6', // Light Blue
  '#AFEEEE', // Pale Turquoise
  '#FFFACD', // Lemon Yellow
  '#FFA07A', // Light Salmon
  '#CD5C5C', // Indian Red
  '#8F9779', // Khaki
  '#7F7F7F', // Dark Grey
  '#BDB76B', // Dark Khaki
  '#F5DEB3', // Wheat
  '#FFF8DC', // Cornsilk
  '#FFC0CB', // Pink
  '#FF69B4', // Hot Pink
  '#FFA500', // Orange
  '#FA8072', // Salmon
  '#DB7093', // Pale Violet Red
  '#FF6347', // Tomato
];


let matisseColors3 = [
  '#FFB347', // Vivid Orange
  '#FFD147', // Mustard Yellow
  '#FFCBA4', // Peach
  '#A8A878', // Olive Green
  '#FF6961', // Salmon Pink
  '#FDBCB4', // Pastel Pink
  '#9B870C', // Olive
  '#2E5894', // Navy Blue
  '#ADD8E6', // Light Blue
  '#FFFACD', // Lemon Yellow
  '#FFA07A', // Light Salmon
  '#CD5C5C', // Indian Red
  '#8F9779', // Khaki
  '#BDB76B', // Dark Khaki
  '#F5DEB3', // Wheat
  '#FFF8DC', // Cornsilk
  '#FFC0CB', // Pink
  '#FF69B4', // Hot Pink
  '#FFA500', // Orange
  '#FA8072', // Salmon
  '#DB7093', // Pale Violet Red
  '#FF6347', // Tomato
];

function setup() {
  createCanvas(600, 600);
  //random
  seed = int(fxrand() * 999999);
  Math.random = fxrand;
    randomSeed(seed);
    noiseSeed(seed);
    p5grain.setup({ random: fxrand });
  
  //sorteios
  points = floor(random(8, 61));
  points2 = floor(random(5,30));
  points3 = floor(random(5,41));
  points4 = floor(random(5,15));
  stk = random(1,1.6);
  
  draft1 = random(firstword);
  draft2 = random(secondword);
  draft3 = random(thirdword);
  
  let chosenColor = random(matisseColors); 
  let chosenColor2 = random(matisseColors2); 
  let backgroundColor = random(matisseColors3);

  console.log(points); // shape1 sem blendmode chosenColor - stk chosenColor2
  console.log(points2); // shape2 exclusion chosenColor2 - stk chosenColor
  console.log(points3); //shape3 textura
  console.log(points4); // shape4 darkest chosenColor2 - stk chosenColor2
  console.log(stk);
  console.log(chosenColor);
  console.log(chosenColor2);
  console.log(backgroundColor);
  console.log(draft1);
  console.log(draft2);
  console.log(draft3);
  
  //background
  background(backgroundColor);
  
  //pattern for shape3
  pattern = createGraphics(width, height);
  pattern.stroke('backgroundColor');
  pattern.strokeWeight(stk);
  for (let i = 0; i < width; i += 4) {
    pattern.line(i, 0, i, height);
  }
  
  //pattern for shape5
  tpattern = createGraphics(width, height);
  tpattern.stroke('chosenColor');
  tpattern.strokeWeight(stk);
  for (let i = 0; i < width; i += 4) {
    tpattern.line(i, 0, i, height);
  }
  
  //pattern for shape6
  spattern = createGraphics(width, height);
  spattern.stroke('chosenColor');
  spattern.strokeWeight(stk);
  for (let i = 0; i < height; i += 4) {
    spattern.line(0, i, width, i);
  }
  
  
  //shape1
  fill(chosenColor); // Set the fill color to the chosen color
  stroke(chosenColor2);
  strokeWeight(stk);
  drawShape();
  
  //shape2
  blendMode(EXCLUSION);
  fill(chosenColor2);
  stroke(chosenColor);
  drawShape2();
  
  //shape3 shape buffer, mask and draw
  shape = createGraphics(width, height);
  shape.stroke('black');
  shape.fill('black');
  drawShape3(shape);
  pattern2 = pattern.get();
  pattern2.mask(shape);
    blendMode(SCREEN);
    image(pattern2, 0, 0);

  //shape4
  blendMode(DARKEST);
  stroke(chosenColor2);
  fill(chosenColor2);
  drawShape4();

  
  //shape5 shape buffer, mask and draw
  shape2 = createGraphics(width, height);
  shape2.stroke('black');
  shape2.fill('black');
  drawShape5(shape2);
  pattern3 = tpattern.get();
  pattern3.mask(shape2);
    blendMode(EXCLUSION);
    image(pattern3, 0, 0);
  
    //shape6 
  shape6 = createGraphics(width, height);
  shape6.stroke('black');
  shape6.fill('black');
  drawShape6(shape6);
  pattern4 = spattern.get();
  pattern4.mask(shape6);
    image(pattern4, 0, 0);
  
  //shape9 
  shape9 = createGraphics(width, height);
  shape9.stroke('black');
  shape9.fill('black');
  drawShape9(shape9);
  pattern5 = spattern.get();
  pattern5.mask(shape9);
  image(pattern5, 0, 0);
  
  //shape7
  if (points < 30) {
  blendMode(EXCLUSION);
  fill(chosenColor);
  noStroke();
  drawShape7();
} else if (points > 30) {
  blendMode(MULTIPLY);
  fill(chosenColor);
  noStroke();
  drawShape7();
}
  
  //shape8
  if (points < 30) {
  blendMode(EXCLUSION);
  fill(chosenColor);
  noStroke();
  drawShape8();
} else if (points > 30) {
  blendMode(MULTIPLY);
  fill(chosenColor);
  noStroke();
  drawShape8();
}
  
  
  
  granulateSimple(random(15,25)); // grain
}
  

function drawShape() {
  let lastVertex2;
  beginShape();
  for (let i = 0; i < points; i++) {
    let x = random(50, 550);
    let y = random(50, 550);
    let newVertex2 = createVector(x, y);
    if (!lastVertex2 || newVertex2.dist(lastVertex2) > 50) {
      vertex(x, y);
      lastVertex2 = newVertex2;
    }
  }
}

function drawShape2() {
  beginShape();
  for (let i = 0; i < points2; i++) {
    let x = random(100,width-100);
    let y = random(100,height-100);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function drawShape3(buffer) {
  buffer.beginShape();
  for (let i = 0; i < points3; i++) {
    if (points2 < 10) {
      let x = random(20,580);
      let y = random(20,580);
      buffer.vertex(x, y);
    } else if (points2 > 15 && points2 < 20) {
      let x = random(30,300);
      let y = random(30,570);
      buffer.vertex(x, y);
    } else if (points2 > 20 && points2 < 25) {
      let x = random(50,550);
      let y = random(200,500);
      buffer.vertex(x, y);
    } else {
      let x = random(50,width-50);
      let y = random(250,400);
      buffer.vertex(x, y);
    }
  }
  buffer.endShape(CLOSE);
}

function drawShape4() {
  beginShape();
  for (let i = 0; i < points4; i++) {
    if (points < 15) {
      let x = random(20,width-20);
      let y = random(20,height-20);
      vertex(x, y);
    } else if (points > 15 && points < 30) {
      let x = random(50,550);
      let y = random(100,500);
      vertex(x, y);
    } else if (points > 30 && points < 45) {
      let x = random(200,400);
      let y = random(50,550);
      vertex(x, y);
    } else {
      let x = random(200,580);
      let y = random(50,550);
      vertex(x, y);
    }

  }
  endShape(CLOSE);
}

function drawShape5(buffer) {
  buffer.beginShape();
  for (let i = 0; i < points3; i++) {
    if (points2 < 10) {
      let x = random(50,350);
      let y = random(50,550);
      buffer.vertex(x, y);
    } else if (points2 > 15 && points2 < 20) {
      let x = random(200,400);
      let y = random(30,570);
      buffer.vertex(x, y);
    } else if (points2 > 20 && points2 < 25) {
      let x = random(300,550);
      let y = random(100,500);
      buffer.vertex(x, y);
    } else {
      let x = random(50,200);
      let y = random(50,550);
      buffer.vertex(x, y);
    }
  }
  buffer.endShape(CLOSE);
}

function drawShape6(buffer) {
  let lastVertex;
  buffer.beginShape();
  for (let i = 0; i < points4; i++) {
    let x = random(30, 570);
    let y = random(20, 350);
    let newVertex = createVector(x, y);
    if (!lastVertex || newVertex.dist(lastVertex) > 50) {
      buffer.vertex(x, y);
      lastVertex = newVertex;
    }
  }
  buffer.endShape(CLOSE);
}

function drawShape7() {
  beginShape();
  for (let i = 0; i < points4; i++) {
    let x = random(20,200);
    let y = random(300,height-20);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function drawShape8() {
  beginShape();
  for (let i = 0; i < points3; i++) {
    let x = random(300,570);
    let y = random(20,height-20);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function drawShape9(buffer) {
  buffer.beginShape();
  for (let i = 0; i < points2; i++) {
    let x = random(100,570);
    let y = random(300,570);
    buffer.vertex(x, y);
  }
  buffer.endShape(CLOSE);
}

function keyPressed() {
	let keylow = key.toLowerCase();
	if (keylow === "s") {
		save(); //to save screenshot
}
}

function mousePressed() {
  if (mouseX < 300) {
  textSize(12);
  noStroke();
  blendMode(EXCLUSION);
  fill('chosenColor');
  text(draft1, random(20,550), random(20,200));
  text(draft2, random(20,550), random(190, 400));
  text(draft3, random(20,540), random(390, 580)); 
} else if (mouseX > 300) {
  textSize(12);
  noStroke();
  blendMode(HARD_LIGHT);
  fill('chosenColor');
  text(draft1, random(20,550), random(20,200));
  text(draft2, random(20,540), random(190, 400));
  text(draft3, random(20,540), random(390, 580)); 
}
}