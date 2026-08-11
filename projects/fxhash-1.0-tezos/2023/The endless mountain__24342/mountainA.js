function mountainA() {


	push()
	scale(mountainSize)
	// blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)

	if (Style == 0) {
		rID4 = random([rID3, (rID3 + 40) % 360, (rID3 + 180) % 360])
		cloudClr2 = 30
	}

	if (Style  == 1) {
		rID4 = random([rID3, (rID3 + 180) % 360])
		cloudClr2 = 30
	}

	if (Style == 2) {
		rID4 = randomGaussian(rID3, 20)
		cloudClr2 = 30
	}

	if (Style == 3) {
		rID4 = random(360)
		cloudClr2 = 30
	}

	if (Style == 4) {
		rID4 = random(360)
		cloudClr2 = random([0, 10, 20])
	}
		if (Style == 5) {
		rID4 = random([randomGaussian(rID3,20), (rID3 + 180) % 360,randomGaussian(rID3,20)])
		cloudClr2 = random([0,40])
	}
	
	if (Style == 6) {
		rID4 = random(360)
		cloudClr2 = random([0,40,40])
	}
	
	
	
	
	
	
	



	rID7 = 5 //random(200,500)   //數量     
	rID8 = 100 //random(200, 400) ////大顆大小

	for (var b = 1; b < rID7; b++) { //數量
		push()



		rID5 = map(b, 0, rID7, rID8, 10) ///大小
		rID6 = random(0, 100) //隨機形狀


		// 		////三色//////
		var clr1 = color(rID4, cloudClr2, 80) //0.7
		var clr2 = color(rID4, cloudClr2 - 10, 90) //0.1




		let ratio = map(b, 0, rID7, 0, 0.99)
		var clr3 = lerpColor(clr1, clr2, ratio)
		// var clr6 = lerpColor(clr4, clr5, ratio)

		////////////////////////////////////////////////


		for (var c = 0; c < 10; c++) {



			// blendMode(SCREEN)//MULTIPLY   LIGHTEST)

			beginShape()

			for (var a = 0; a < TWO_PI; a += 0.1) {

				let xoff = cos(a) + 1
				let yoff = sin(a) + 1
				let r = map(noise(xoff, yoff, rID6), 0, 1, (rID5 - c * 10) / 2, rID5 - c * 10)



				 // if (Style3 == 0 || Style3 == 1) {
					let x = r * 1 / tan(a)
					let y = -abs(r * sin(a))
				 // }

				// if (Style3 == 2) {
				// 	let x = r * cos(a)
				// 	let y = r * sin(a)
				// }





				noStroke()
		
				fill(clr3)
				vertex(x, y)



			}
			endShape(CLOSE)
			// noLoop()
		}
		pop()
	}
	pop()





}