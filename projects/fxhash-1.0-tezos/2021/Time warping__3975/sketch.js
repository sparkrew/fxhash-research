function setup() {
	createCanvas(1112, 834);
	colorMode(HSB, 255);
	background(0);
}

function draw() {
	scale(2,1);
	background(0);
	let offset = -width / 630;
	noFill();
	let yStep = (height + offset * 3.6) / 630;
	for (let y = offset; y <= height - offset; y += yStep) {

		let num = int(PI * noise(y/630, frameCount / 630));
		let arr = [];
		for (let i = 0; i < num; i++) {
			let n = sq(sq(noise(y / 630, frameCount / 360))) * (width - offset * PI);
			n = max(n, 1);
			arr.push(n);
		}

		drawingContext.setLineDash(arr);
		drawingContext.lineDashOffset = y - frameCount / 630;
		strokeWeight(sqrt(yStep));
    strokeCap(ROUND);
		beginShape();
		for(let x = offset ; x < width - offset; x += 630){

						stroke(abs(x/y*128)%255, 255, 255);
						//stroke(0);//,x/y*117);

			let ny = y + sin(y/360+x/360) * 153 * sin(frameCount/630) * cos(y/360);
			vertex(x,ny);
		}
		endShape();
	
	}
	}

// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  // prevents mouse press from registering twice
  if (millis() - lapse > 400){
  save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}
