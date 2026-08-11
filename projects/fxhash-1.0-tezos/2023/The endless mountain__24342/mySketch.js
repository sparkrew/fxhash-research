// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

let layer2

function setup() {
	fx = fxrand()
	randomSeed(fx * 987654321)   
	noiseSeed(fx * 987654321)
	
	
	Style=int(random(7))   
	Style2=int(random(5))
	
	Style3=int(random(5))
	
	Style4=int(random(11))
	Style5=int(random(7))
	
	rID3=random(360)
	
	outerRatio=random([0.05,0.07,0.1,0.07,0.15])
	
	mountainSize=random([1,1,3,5,1])
	mountainX=random([-100,0,300,400,400,450,450])
	
	// rID5=random([rID4,(rID4+40)%360,(rID4+180)%360])
	colorMode(HSB)
	createCanvas(1000, 1000);
	pixelDensity(2);
	/////////////////白///////////////   
	background(50, 5, 100);


	layer2 = createGraphics(1000, 1000)
	layer2.colorMode(HSB, 360, 100, 100)
	
	
	console.log(rID3)
console.log(mountainSize)
	console.log(Style3)
}

function draw() {
	/////////mountain//////////////////////
	if (frameCount == 1) {
		for (var skyY = 0; skyY < 25; skyY++) {
			for (var skyX = 0; skyX < 10; skyX++) {
				push()
				translate(random(width),height - skyY * 50)
				sky(5, 5)
				pop()

			}
		}


	}
	
	/////////////////////////////////////////////////
// 	if (frameCount == 1) {
// 		for (var skyY = 0; skyY < 25; skyY++) {
// 			for (var skyX = 0; skyX < 10; skyX++) {
// 				push()
// 				translate(random(width),500 - skyY * 50)
// 				sky(5, 5)
// 				pop()

// 			}
// 		}


// 	}
	//////////////////////////////////////////////
	if (frameCount == 2) {

		push()
		// blendMode()

		for (var mountA = 0; mountA < 40; mountA++) {
			for (var mountB = 0; mountB < 1; mountB += 0.1) {
				push()
				translate(random(width), mountainX + mountA * 30 + random(-10, 10))
				
				if(Style3==0||Style3==1||Style3==2){
				mountainA()}
				if(Style3==3){
				mountainB()}
				
					if(Style3==4){
				mountainC()}
				
				pop()
			}
		}

		pop()


	}



	////////////////////////////////////////////////////////////////////

	if (frameCount == 4) {

	outer()
	}

image(layer2,0,0)
	
	
		if (frameCount == 6) {

	// reset()
	}
	
	
	
	

}

///////////////////////////////////

function doubleClicked() {

	save("c.png")
}






///////////////////////////////////////////////////////////////////////////////////
function reset(){
	save("c.png")
	background(255);
	clear()
	setup()
	frameCount=0
	
}

function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot

	if (key === " ") reset(); //to generate variations
}