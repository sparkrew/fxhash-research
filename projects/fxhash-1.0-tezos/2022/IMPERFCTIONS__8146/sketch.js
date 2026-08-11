let dimSquare;
var structure = fxrand();
var structure2 = fxrand();
var structureColor = fxrand() * structure2*200;
function setup() {
	const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("canvas")
  canvas.style("display", "block")

  dimSquare = height * 0.85; 
	noStroke();
	initBuilder();
}

function initBuilder() {
	let totCircles = 10 + fxrand() * 5;
	let multStructure = fxrand();
	background(12);
	randomSeed(fxhash);
	let color = fxrand()*250;
	let step = dimSquare / totCircles;
	while (multStructure < 0.2 || multStructure > 0.8) {
		multStructure = fxrand();
	}
	let radiusCircle = dimSquare / totCircles / 2 * 2 * multStructure ;
	
  for (let x = 0; x < totCircles; x++) {
    for (let y = 0; y < totCircles; y++) {
      let widthCenter = -dimSquare / 2 + step * (x);
      let heightCenter = -dimSquare / 2 + step * (y);
      let ang = HALF_PI / 2 * int(random(10));
      draw(radiusCircle, widthCenter, heightCenter, ang, color);
    }
  }
}

function draw(radiusCircle, widthCenter, heightCenter, ang, color) {
  let numCorner = fxrand()*500;
  push();
  translate(widthCenter, heightCenter);
  rotate(ang);
  beginShape();
  for (let i = 0; i < numCorner; i++) {
		if (i == 0) {
			fill(color, color*(fxrand()*100), color*(fxrand()*100));
		}
		if (i != 0) {
			fill(color, color*(fxrand()*100), color*(fxrand()*100), 1);
		}

    vertex(radiusCircle * sin(2 * PI / numCorner * i), radiusCircle * cos(2 * PI / numCorner * i));
  }
  endShape(CLOSE);
  pop();
}