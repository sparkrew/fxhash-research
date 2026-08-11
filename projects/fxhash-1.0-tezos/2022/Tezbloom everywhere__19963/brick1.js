function brick1(newX, newY) {
	var brickTex = random(["‧", "◜", "◝", "✣", "✥", "✦", "꧁", "დ", "│", "―", "⠁⠂⠃⠄⠅⠆⠇"])


	push()
	for (var b = 0; b < 20; b++) {

		var clr1 = color(random([50, 60, 10, 30]), random(20, 30), random(70, 90))
		var clr2 = color(random([150, 60, 220, 30]), random(20, 30), random(70, 90))
		var clr3 = color(52, 15, random(60, 100))
		var clr4 = color(random(180, 220), 40, random(70, 80))
		var clr5 = color(random([0, 180, 220]), random([0, 20]), random(80, 95))
		var clr6 = color(random([0, 30, 50]), random([0, 10, 28]), random(75, 90))
		var clr7 = color(random([30, 50,120]), random(30, 20), random([ 90, 90, 80]))
		var clr8 = color(random(0,15), random(20, 26), random( [70,80,90]))


		var clrs = random([clr1, clr2, clr3, clr4, clr5, clr6, clr7, clr8])
		// clrs.setAlpha(0.2)
		noStroke()
		// fill(random(360), 30, 80) //粉紅黃

		fill(clrs) //粉紅黃

		// fill(random([50, 60, 100]), 60, 80)  //綠黃
		// fill(50, 10, random(0,50))
		///////////隨機形狀////////////////////////////////////////////////

		if (rID2 % 5 == 0 ) {
			beginShape()
			for (var b1 = 0; b1 < 20; b1++) {
				x1 = random(-100, width + 100)
				y1 = random(-100, width + 100)
				curveVertex(x1, y1)
			}
			endShape()
		}
		///////////隨機小圓////////////////////////////////////

		if (rID2 % 5 == 1||rID2 % 5 == 4) {
			for (var b2 = 0; b2 < 10; b2++) {
				ellipse(random(width), random(width), random(50))

			}
		}
		///////////隨機大圓////////////////////////////////////
		if (rID2 % 5 == 2) {
			for (var b3 = 0; b3 < 10; b3++) {
				ellipse(random(width), random(width), random(100))

			}
		}

		///////////隨機方型///////////////////////////////////
		if (rID2 % 5 == 3) {
			for (var b4 = 0; b4 < 10; b4++) {
				rect(random(width), random(width), random(100))

			}
		}





	}

	pop()


	/////////TEXT//////////////////////////////
	push()


	for (var a2 = 0; a2 < width; a2 += newX) {
		for (var b2 = 0; b2 < height; b2 += newY) {

			push()
			translate(a2, b2)
			for (var d = 0; d < newX; d += newX / 5) {
				for (var c = 0; c < newY; c += newY / 5) {
					var clrText = color(0, 0, 70)
            clrText.setAlpha(0.3)
					fill(clrText)
					textSize(10)
					text(brickTex, d, c)

				}
			}
			pop()
		}
	}

	pop()

	////////////框/////////////////////
	push()
	for (var a3 = 0; a3 < width; a3 += newX) {
		for (var b5 = 0; b5 < height; b5 += newY) {
			for (var r = 0; r < 3; r++) {
				noFill()

				var strColor = color(0, 0, random(20, 60))
				// strColor.setAlpha(0.5)
				stroke(strColor)
				rect(a3, b5, newX - r, newY - r)
			}
		}
	}

	pop()











}