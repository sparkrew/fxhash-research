var ranges;
 let seed = fxrand() * 1084;
 var mySize;
let str_wei = 0;
let x_space;

 // colors
 let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
 let colors1 = "fef9fb-fafdff-ffffff-fcfbf4-f9f8f6".split("-").map((a) => "#" + a);
 let colors2 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
 let color1, color2;
 let colorselet = [];
 let plus, margin;
 let tile_count ;
 let h_size;

 function setup() {
 	
 	randomSeed(seed);
 	mySize = min(windowWidth, windowHeight);
 	createCanvas(mySize/ 16 * 10, mySize/16*15 );
 	//createCanvas(windowWidth, windowHeight);
 	// background("#202020");
	 colorselet[0] = random(colors0);
 	colorselet[1] = random(colors2);
 	colorselet[2] = random(colors2);
 	colorselet[3] = random(colors2);
 	background(random(colorselet));
	 tile_count = random([16,14,18,12,10]);
	 // tile_count = 1;
 	margin = mySize / 100;
 	ranges = int(random(50,100));
 	color1 = random(colors1);
 	color2 = random(colors2);
 	plus = 0;
 	
 	h_size = int(random(height/2,height));
	 x_space = width/tile_count;
 }

 function draw() {
 	// background("#202020");
 	randomSeed(seed);
 	noiseSeed(seed);
  // rotate(PI/2);
 	noFill();
 	let H = random(1.25, 0.75) / 10;
 	let aa = random(1, 0.8) * 1.25;
 	let res = random(0.005, 0.001);
 	for (let i = 0; i < ranges; i++) {
 		strokeWeight(str_wei);
 		stroke(random(colorselet));
 		if (ranges % 3 == 0) {
 			drawingContext.shadowColor = str(random(colors1)) + "1a";
 			drawingContext.shadowOffsetX = -str_wei;
 			drawingContext.shadowOffsetY = -str_wei;
 			drawingContext.shadowBlur = 0;
 		} else {
 			drawingContext.shadowColor = str(random(colors1))+"1a";
 			drawingContext.shadowOffsetX = str_wei;
 			drawingContext.shadowOffsetY = str_wei;
 			drawingContext.shadowBlur = 0;
 		}

 		for (let y = -height * 1; y < height * 2; y += x_space) {
 			let x = random(0,width);
			if( int(y) % 3 == 0){
 			ellipse(x-random(4,2)*(random(1,0.5)*plus),y + 100 * sin(plus - 0), cos(plus)*random(1,50),0);
			}else if( int(x) % 3 == 1){
 			ellipse(x-random(6,10)*(random(1,0.5)*plus),y + 100 * sin(plus - 0), sin(plus)*random(1,50),0);
			}else if( int(x) % 3 == 2){
 			ellipse(x-random(1,5)*(random(1,0.5)*plus),y + 100 * sin(plus - 0), tan(plus)*random(1,50),0);
			}
 		}
 	}
  if(str_wei <1){
		str_wei += 0.01;
	}

 	if (plus*30 < 1.0 * x_space/random(1,2)) {
 		plus += 0.01;
		
 	} else {
 		drawingContext.shadowColor = random(colors1);
 		drawingContext.shadowOffsetX = 0;
 		drawingContext.shadowOffsetY = 0;
 		drawingContext.shadowBlur = 0;

 		//frame

 		noFill();
 		stroke("#202020");
 		strokeWeight(margin);
 		rect(0, 0, width, height);
 		noLoop();
 	}
 }
