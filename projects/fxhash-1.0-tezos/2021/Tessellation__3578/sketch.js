
let url = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0",
           "#a3c4f3", "#90dbf4", "#b9fbc0", "#8eecf5",
          "#f08080", "#f4978e", "#f8ad9d", "#fbc4ab", "#ffdab9"];
let palette;
let seed = 0; 


function setup() {
	createCanvas(1000, 1000);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
     seed=int(fxrand() * 100000000); 
     randomSeed(seed); 
	palette = shuffle(url);
}

function draw() {
	background('#f8f9fa');
  	let angle = 45;
	let cells = int(random(3, 20));
	let offset = width / 15;
	let d = (width - offset * 2) / cells;


	for (let k = cells; k >= 0; k--) {
		for (let n = 0; n < 2; n++) {
			for (let j = 0; j < k; j++) {
				for (let i = 0; i < k; i++) {
					let offset2 = offset + d / 2 * (cells - k);
					let cx = offset2 + i * d + d / 2;
					let cy = offset2 + j * d + d / 2;
					//fxrand();
					angle += n * 180;
					noStroke();
					drawingContext.shadowColor = color(0, 0, 0, 15);
					drawingContext.shadowBlur = d / 4;

					let gradient = drawingContext.createRadialGradient(
						0, 0, 0, 0, 0, d / 2);
					palette = shuffle(palette, true);
					let c1 = random(palette);
					let c2 = random(palette);
					while (c1 == c2) {
						c2 = random(palette);
					}

					if (n == 0) {
						gradient.addColorStop(0, c1);
						gradient.addColorStop(1, c2);
					} else {
						gradient.addColorStop(0, c2);
						gradient.addColorStop(1, c1);

					}
					drawingContext.fillStyle = gradient;
					drawFancyShape(cx, cy, d, angle);
				}
			}
		}
	}
	 noLoop();
	//frameRate(0.5);
}

function drawFancyShape(x, y, d, angle) {
	let ratio = 1;
	let shape_num = int(random(5));
	let dd = d * ratio;
	push();
	translate(x, y);
	rotate(angle);
	scale(random(400) > 50 ? -1 : 1,
		random(400) > 50 ? -1 : 1);
	switch (shape_num) {
		case 0:
        shuffle(arc(0, 0, dd, dd, 0, 90, PIE),triangle(0, -dd / 2, 0, dd / 2, 0, -dd / 2), rect(-dd / 4, 0, dd / 4, dd / 4));
        
        break;
		case 1:
			//triangle(-dd / 2, 0, dd / 2, 0, 0, -dd / 2);
        shuffle(triangle(-dd / 2, 0, dd / 2, 0, 0, -dd / 2), rect(-dd / 3, 0, dd / 3, dd / 3));
         
			break;
		case 2:
         rect(-dd / 2, 0, dd / 2, dd / 2);
			break;
		case 3:
          //  triangle(-dd / 7, 0, dd / 7, 0, 0, -dd / 7);
        rect(-dd / 6, 0, dd / 6, dd / 6);
	
			break;
		case 4:
            //triangle(-dd / 5, 0, dd / 5, 0, 0, -dd / 5);
			rect(-dd / 6, 0, dd / 6, dd / 6);
			//rect(dd / 2, 0, -dd / 2, -dd / 2);
			break;
	}
	pop();
}


