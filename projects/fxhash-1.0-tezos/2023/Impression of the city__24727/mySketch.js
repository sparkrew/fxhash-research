// This template can be used to create sketches for FXHASH.    
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

function setup() {
	fx = fxrand()   
	randomSeed(fx * 987654321)   
	noiseSeed(fx * 987654321)
	
	
	colorMode(HSB)
	createCanvas(1000, 1000);   
	/////////////////白///////////////   
	// background(50, 5, 100);
	//back0()

	Part = int(random(1, 7))
	PartTree = int(random(5)) //tree形狀
	PartTreeW = int(random(5)) ///tree位置
	PartRoad = int(random(5)) //tree形狀


	PartAclr1 = random(360)

}

function draw() {
	/////////mountain//////////////////////
	if (frameCount == 1) {

		push()


		for (var MoutainY = 0; MoutainY < 25; MoutainY++) {
			for (var MoutainX = 0; MoutainX < 5; MoutainX++) {

				push()
				translate(random(width), height - MoutainY * 50)
				cloud(5, 5)

				pop()

				push()

				if (PartTreeW == 0 || PartTreeW == 1 || PartTreeW == 4) {

					translate(random(width), height - MoutainY * 50)
				}

				if (PartTreeW == 2) {

					translate(randomGaussian(width / 2, 50), height - MoutainY * 50)
				}

				if (PartTreeW == 3) {

					translate(random([randomGaussian(width * 1 / 3, 100), randomGaussian(width * 2 / 3, 100)]), height - MoutainY * 50)
				}






				if (PartTree == 0 || PartTree == 1 || PartTree == 2) {
					tree(1, 5)
				}
				
				if (PartTree == 3) {
					tree2(0.5, 5)
					tree(1, 5)}
					if (PartTree == 4) {
						tree2(0.5, 5)
					}

				




				pop()



			}
		}

		pop()
	}
	///////////////////////////////
	if (frameCount == 2) {
		push()
		// moon()	
		pop()


	}


	///////////////////tree////////////////////////	
	if (frameCount == 3) {

		push()
		var Road = int(random(1, 5))
		var RoadH = int(random(200, height - 200))


		for (var a = 0; a < Road; a++) {
			for (var b = 0; b < 1; b += 0.1) {
				push()

				translate(random(width), RoadH + a * 50)

				if (PartRoad <= 3&&PartTree<=5) {
					road(1, 30)
				}
				if (PartRoad ==4&&PartTree<=3) {
					
				}
				if (PartRoad ==4&&PartTree==4) {
					road(1, 30)
				}
				
				
				


				pop()
			}
		}

		pop()


	}

	//////////////////////////////////////////////

	// 		if (frameCount == 4) {
	// for(var treeY=0;treeY<25;treeY++ ){
	// 		for (var treeX = 0; treeX < 5; treeX ++) {
	// 			push()
	// translate(random(width),height-treeY*50)


	// 		tree2(0.5,5)

	// 			pop()

	// 		}
	// 		}


	// 	}
	//////////////////////////////////////////	

	if (frameCount == 10) {

		//	reset()



	}





}

function doubleClicked() {

	save("c.png")
}


function reset() {
	save("c.png")
	background(255);
	clear()
	setup()
	frameCount = 0




}

function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot

	if (key === " ") reset(); //to generate variations
}