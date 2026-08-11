var colors;
var size;
var probChangeColor;
var currentColor;

function setup() {
  createCanvas(1000, 1000);
  noLoop();
  
  size = width/70;
  probChangeColor = 0.25;
  
  noStroke();
}

function draw() {
  var color1 = color(166, 32, 28);
  var color2 = color(380, 180, 25);
  var color3 = color(233, 11, 142); 
	var color4 = color(55, 27, 10);
	var color5 = color(30, 215, 155);
	var color6 = color(27, 25, 225);
	var color7 = color(65, 217, 30);
	var color8 = color(57, 114, 15);
  
  colors = [color1, color2, color3, color4, color5, color6, color7, color8];
  currentColor = randomColor();
  
  createComposition();
  addBorder();
}

function createComposition() {
  for (var y = 0; y < height; y += size) {
    for (var x = 0; x < width; x += size) {
      if (random(1) < probChangeColor) {
        currentColor = randomColor();
      }
      fill(currentColor);
      square(x, y, size);
    }
  }
}

function addBorder() {
  strokeWeight(0);
  stroke(colors[0]);
  line(0, 0, 0, height);
  line(0, height, width, height);
  line(width, height, width, 0);
  line(width, 0, 0, 0);
  //noStroke();
}

function randomColor() {
  return colors[floor(random(colors.length))];
}

function keyPressed() {
  draw();
}

let lapse = 0;
function mousePressed(){
  if (millis() - lapse > 500){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}