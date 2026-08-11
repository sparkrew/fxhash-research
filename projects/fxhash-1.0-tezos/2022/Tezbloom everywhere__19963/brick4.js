function brick4(rockX, rockY) {
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
	var rockSize = random(12, 60)
	
	var lightSize=random(5,8)


	push()

	for (var x = -50; x < width + 50; x += 6) {
		for (var y = -50; y < height + 50; y += 6) {



			noStroke()

			////////////////////////////顏色方格//////////////////////////////
			// fill(clrR1, 25, randomGaussian(35, 2))

			// var clrblock = color(clrR1, 50, random(0, 30))

			if (rID2 % 3 == 0) {
				var clrblock = color(clrR1, random(10, 20), random(20, 50))
				clrblock.setAlpha(0.5)
				fill(clrblock)
			}

			if (rID2 % 3 == 1) {
				var clrblock2 = color(clrR1, random(10, 30), random(50, 60))
				clrblock2.setAlpha(0.5)
				fill(clrblock2)
			}
			if (rID2 % 3 == 2) {
				var clrblock3 = color(clrR1, random(10, 30), random(20, 30))
				clrblock3.setAlpha(0.5)
				fill(clrblock3)
			}






			// if (x % blockX >= blockTimeX && y % 29 >= blockTimeY) {
			// 		fill(clr, 40, random(40, 50))
			// }


			ellipse(randomGaussian(x, 1), randomGaussian(y, 1), randomGaussian(rockSize, 2))
		}
	}

	pop()
	//////////隨機紋路1//////////////
	// 	push()
	// 	for(var d=0;d<height;d++){
	// 		var randomDotX=random(width)
	// 	push()
	// 	translate(0,d)
	// for(var c=randomDotX;c<randomDotX+random(300);c+=random(3)){

	// 		fill(50,100,100)
	// 		textSize(10)
	// 		// text("│",c,randomDotY)
	// 		text("⠅",c,0)
	// }
	// 	pop()
	// 	}
	// 	pop()
	//////////////隨機紋路2----X軸////////////////////////////
	push()
	if (rID2 % 3 == 1) {

		for (var e = 0; e < 5; e++) {
			for (var d = 0; d < height; d++) {
				var randomDotX = random(width)
				for (var c = randomDotX; c < randomDotX + random(200); c += random(3)) {

					var clr1 = color(0, 0, random(60, 85))
					clr1.setAlpha(random(0.8))
					fill(clr1)
					noStroke()
					// ellipse(c,d,10+random(5),2+random(1.5))
					textSize(10)
					text("⠅", c, d)

				}
			}
		}
	}
	pop()

	//////////////隨機紋路2----Y軸////////////////////////////////
	// 		push()
	// 	for(var e=0;e<3;e++){
	// 	for(var d=0;d<width;d++){	
	// 	var randomDotY=random(width)
	// for(var c=randomDotY;c<randomDotY+random(200);c+=random(3)){

	// 	var clrRock=color(0,0,randomGaussian(15,2))
	// clrRock.setAlpha(0.3)
	// 			fill(120,50,random(15,25))
	// 	noStroke()
	// 	// ellipse(d,c,2+random(1.5),10+random(5))
	// 		textSize(10)
	// 		text(brickTex,c,d)

	// }}}
	// 	pop()

	//////////////////////////////////////////////////////


	//////////////裂紋///////////////////////////////
	push()


	var strokeCrack1 = color(0, 0,60) //灰
	var strokeCrack2 = color(0, 0, random([70, 80])) //白灰
	var strokeCrack3 = color(random([0, 0, 20, 30]), random(40, 50), random(20, 25)) //紅
	var strokeCrack4 = color(50, random([40, 50]), random(60, 85)) //白金
	var strokeCrack5 = color(random(20, 50), random(40, 50), random(30, 55)) //橘
	// var strokeCrack6 = color(80 ,35, random(40,50)) //黑
	var strokeCracks = random([strokeCrack1, strokeCrack2, strokeCrack3, strokeCrack4, strokeCrack5])
	strokeCracks.setAlpha(0.5)
	strokeWeight(randomGaussian(1.7, 0.3))
	stroke(strokeCracks)




	if (rID2 % 3 == 0) {

		for (var c1 = 0; c1 < random(200, 1000); c1++) {
			var crackX1 = random(-100, width)
			var crackY1 = random(-100, height)

			var crackX2 = random(-100, width)
			var crackY2 = random(-100, height)

			for (c2 = 0; c2 < 2; c2++) {
				noFill()

				/////////////////橫///////////////////////////////
				beginShape()

				vertex(crackX1, crackY1)
				vertex(crackX1, crackY1)
				for (var a = crackX1 + 50; a < width; a += 20) {
					vertex(a, randomGaussian(crackY1, random(5)))
				}
				endShape()
				/////////////////////直/////////////////////
				beginShape()
				noFill()
				vertex(crackX2, crackY2)
				vertex(crackX2, crackY2)
				for (var b = crackY2 + 50; b < (height - crackY2); b += 20) {
					vertex(randomGaussian(crackX2, random(5)), b)
				}
				endShape()

			}

		}
	}
	pop()


	//////////////////////////////////////////////////////////////////
	// 	push()
	// if (rID2 % 3 == 1) {

	// 		for (var c3 = 0; c3 < random(100, 700); c3++) {
	// 			var crackX1_2 = random(-100,width)
	// 			var crackY1_2 = random(-100,height)

	// 			var crackX2_2 = random(-100,width)
	// 			var crackY2_2 = random(-100,height)

	// 			for (c4 = 0; c4 < 2; c4++) {
	// 				noFill()

	// 				/////////////////橫///////////////////////////////
	// 				beginShape()

	// 				vertex(crackX1_2, crackY1_2)
	// 				vertex(crackX1_2, crackY1_2)
	// 				for (var a2 = crackX1_2 + 50; a2 < width; a2 += 20) {
	// 					vertex(a2, randomGaussian(crackY1_2, random(5)))
	// 				}
	// 				endShape()
	// 				/////////////////////直/////////////////////


	// 			}

	// 		}
	// 	}
	// 	pop()
	////////////////天黑點燈///////////////////////////
	
	
	
		push()
	if(rID3==4&&rID2%3==2){
		
		for(var light=0;light<random(30,100);light++){
			for(var a5=0;a5<lightSize;a5++){
			
			drawingContext.shadowBlur =50
			drawingContext.shadowColor = color(random([0,30,50]), 60, 100)
			noStroke()
				
			let ratio=map(a5,0,5,0,1)	
			var clrLight=color(50,50,80)	
			clrLight.setAlpha(ratio)
			fill(clrLight)
			ellipse(random(width),random(height),lightSize-a5)
		
		
		}}
	}
	
	pop()








}