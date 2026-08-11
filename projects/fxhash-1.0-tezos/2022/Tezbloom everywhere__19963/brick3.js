function brick3(rockX, rockY) {
	// var brickTex = random(["‧", "┼", "◜", "◝", "✣", "✥", "✦", "꧁", "დ", "│", "―", "⠁⠂⠃⠄⠅⠆⠇", " "])
	var brickTex = random(["◜", "◝"])

	var clrR1 = random(0, 240)
	var clrR2 = random([10, 30, 50])

	var blockX = random([11, 17, 19, 31, 41, 61])
	var blockY = random([11, 17, 19, 31, 41, 61])
	var blockTimeX = random(3)
	var blockTimeY = random(3)

	var randomDotY = random(height)
	var crackY = random(height)
	var clr = random(250)
	var rockSize = 50

	var lineX = random([15, 20, 30, 30,40,40,50])
// var lineX=50
	// var lineY= random(30,40)

	var sunSize = random([300, 500, 600, 800, 1000])
	var sunSize2 = random([200,300,500])
	
	var sunColor = random([0, 15, 50, 80, 150])
	

	//////////////天空///////////////////
	push()
	for (var x0 = -50; x0 < width + 50; x0 += 10) {
		for (var y0 = -50; y0 < height + 50; y0 += 10) {

			let ratio = map(y0, -50, height + 50, 0, 1)
			var clr1 = color(colorFlower, 30, 20)
			var clr2 = color(colorFlower, 30, 66)
			var clr3 = lerpColor(clr1, clr2, ratio)
			noStroke()
			fill(clr3)
			ellipse(x0, y0, 15)

		}
	}
	pop()

	/////////////////////草地////////////////////////////////////
	push()

	for (var x = -50; x < width + 50; x += 8) {
		for (var y = -50; y < height + 50; y += 8) {
			noStroke()

			var clr1_2 = color(50, 40, 0)
			var clr2_2 = color(0, 0, random([10, 30]))
			var clr3_2 = color(50, 20, random(70, 90))

			var clr4 = color(random(80, 120), random(30, 40), random(50, 60))
			fill(clr4)

			ellipse(randomGaussian(x, 1), randomGaussian(y, 1), 3, 15)

		}
	}

	pop()
	///////////////////太陽/////////////////////////////////
	push()



		translate(width / 2 + random(-200, 200), height / 2 + random(-500, 0))


		for (var a = 0; a < sunSize; a += sunSize / 50) {
			let ratio = map(a, 0, 200, 0, 1)
			var clrsun1 = color(sunColor, 30, 100)
			clrsun1.setAlpha(0.01)
			var clrsun2 = color(sunColor, 60, 100)
			clrsun2.setAlpha(0.05)
			var clrsun3 = lerpColor(clrsun1, clrsun2, ratio)

			var clrsun4 = color(50, 30, 100)
			clrsun4.setAlpha(0.01)
			var clrsun5 = color(50, 60, 100)
			clrsun5.setAlpha(0.05)
			var clrsun6 = lerpColor(clrsun4, clrsun5, ratio)



			noStroke()

			if (rID % 5 == 0) {
				fill(clrsun3)
			}

			if (rID % 5 == 1) {
				
				var clrS=color(0,0,86)
				clrS.setAlpha(0.7)
				fill(clrS)
			}

			if (rID % 5 == 2) {
				fill(clrsun6)
			}


			if (rID % 5 == 3) {
				var clr5 = color(180, 20, 86)
				clr5.setAlpha(0.1)
				fill(clr5)
			}

			if (rID % 5 == 4) {
				var clr6 = color(0, 20, 86)
				clr6.setAlpha(0.1)
				fill(clr6)
			}



			ellipse(0, 0, sunSize - a)




	}

	pop()


	/////////////////月亮////////////////////////////
// 	push()
// 	if (rID2 % 2 == 1) {
// 		push()


// 		translate(width / 2 + random(-200, 200), height / 2 + random(-500, 0))


// 		for (var a2 = 0; a2 < sunSize2; a2 += sunSize2 / 50) {
			
			
			
// 				drawingContext.shadowOffsetX =random(0,sunSize2/3);
// 			// drawingContext.shadowOffsetY = -2;
// 			drawingContext.shadowBlur = 10;
// 			drawingContext.shadowColor = color(50,30,100)
			
			
// 			noStroke()
// 			fill(colorFlower,30,40)
// 			ellipse(0, 0, sunSize2 )
// 		}
// 		pop()
// 	}

// 	pop()
















	/////////////橫裂紋///////////////////////////////
	push()
	for (var c = 0; c < 5; c++) {
		for (var b0 = -lineX; b0 < height + lineX; b0 += lineX) {


			if (rID % 5 == 0) {
				stroke(random(40, 45), random(50, 40), random([30, 45])) ///竹子
			}

			if (rID % 5 == 1) {
				stroke(0, 0, random([20, 35])) ///灰
			}

			if (rID % 5 == 2) {
				stroke(50, random(10, 20), random([35, 60])) ///白灰
			}

			if (rID % 5 == 3) {
				stroke(182, 40, random([30, 45])) ///藍竹子
			}

			if (rID % 5 == 4) {
				stroke(0, 40, random([30, 45])) ///紅竹子
			}


			strokeWeight(7)
			noFill()


			vertex(0, b0)
			vertex(0, b0)
			beginShape()
			for (var a0 = -lineX; a0 < width + lineX; a0 += lineX) {
				vertex(a0, randomGaussian(b0, 5))
			}




			endShape()

		}
	}
	pop()
	//////////////////////////////////////////////////////////////////

	///////////直裂紋///////////////////////////////
	push()
	for (var c2 = 0; c2 < 20; c2++) {


		for (var a2 = -lineX; a2 < width + lineX; a2 += lineX) {

			if (rID % 5 == 0) {
				stroke(random(40, 45), random(50, 40), random([30, 45])) ///竹子
			}

			if (rID % 5 == 1) {
				stroke(0, 0, random([20, 35])) ///灰
			}

			if (rID % 5 == 2) {
				stroke(50, random(10, 20), random([35, 60])) ///白灰
			}

			if (rID % 5 == 3) {
				stroke(182, 40, random([30, 45])) ///藍竹子
			}

			if (rID % 5 == 4) {
				stroke(0, 40, random([30, 45])) ///紅竹子
			}

			strokeWeight(7)
			noFill()
			vertex(a2, 0)
			vertex(a2, 0)
			beginShape()
			for (var b2 = -lineX; b2 < height + lineX; b2 += lineX) {
				vertex(randomGaussian(a2, 3), b2)
			}
			endShape()

		}
	}



	pop()


}