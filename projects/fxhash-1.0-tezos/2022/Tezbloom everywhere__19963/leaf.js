function leaf1() {
	push()
	rotate(random(-0.4, 0.4))
	scale(random(0.5, 1))
	var topX = random(-4, 4)

	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
	if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}


	// var leafClr1 = color(random(70, 120), random(70, 85), random(50, 60)) //亮綠
	// var leafClr2 = color(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	// var leafClr3 = color(random(100, 130), random(60, 75), random(50, 60)) //常綠
	// var leafClr4 = color(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	// var leafClr5 = color(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50 ,55])) //綠枯葉
	// var leafClr6 = color(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50,2)) //綠紅葉
	// var leafClr7 = color(random([50, 105]), random(40, 45), randomGaussian(50,2)) //綠橘葉
	// var leafClr8 = color(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	// var leafClr9 = color(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	// var leafClr10 = color(random(130, 140), random([30, 55, 55, 45, 60]), random([50,  55, 60, 62, 40, 58])) // //長老綠


	// var leafClr11 =color(colorFlower,random(10,30),random(30,60))  //灰暗leaf
	// var leafClr12 =color(colorFlower,random(30,50),random(50,70))  // colorFlower leaf
	// var leafClr13 =color(colorFlower,random(5,10),random(50,70))  //白灰
	// var leafClr14 =color(colorFlower,random(10,20),random(50,80))  //白leaf
	// 	var leafClr15 =color((360-colorFlower),random(30,50),random(50,70))  //白leaf

	// var leafColors = random([
	// 												leafClr11,leafClr1
	// 												])
	// fill(leafColors)

	strokeWeight(0.2)
	// stroke(random(70, 120), 60, random(20, 40))

	//////////////////////////////
	beginShape()
	vertex(0, -2)
	vertex(0, -2)
	curveVertex(-3, -8)
	vertex(topX, -15)
	curveVertex(3, -8)
	vertex(0, -2)
	vertex(0, -2)
	endShape()


	// beginShape()
	// vertex(0, -3)
	// bezierVertex(random(-2, -4), random(-3, -5), random(-3, -4), random(-6,-8), topX, -15)
	// bezierVertex( random(3, 4), random(-6,-8),random(2, 4), random(-3, -5), 0, -3)
	// endShape()

	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(93, 45, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	beginShape()
	for (var c2 = -2; c2 <= 2; c2++) {
		vertex(0, 0)
		vertex(0, -2)

		curveVertex(c2, -8)

		vertex(topX, -15)
	}
	endShape()
	pop()


	pop()
}

// for (var a = 0; a < 5; a++) {
// 	ellipse(cos(a), -a, 1)
// }
///////////////////////////////////////////////////
function leaf2() {
	var buttom = random(-3, -5)
	var buttom1 = random(3, 5)
	var buttom2 = random(2, 4)
	var top = random(-2, 2)


	push()
	rotate(random(-0.4, 0.4))
	scale(random(0.5, 1))
	// var end=random(-5,5)
	var end = 0

	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
		if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}

	strokeWeight(0.2)

	//////////////////////////////
	beginShape()
	vertex(0, buttom)
	vertex(0, buttom)
	curveVertex(-buttom1, -3)
	curveVertex(-buttom2, -7)
	vertex(top, -15)
	curveVertex(buttom2, -7)
	curveVertex(buttom1, -3)
	vertex(0, buttom)
	vertex(0, buttom)
	endShape()



	// 	beginShape()
	// 	vertex(0, -5)
	// 	bezierVertex(-7, 3, -6, random(-6,-8), end, -15)
	// 	bezierVertex( 6, random(-6,-8),7,3, 0, -5)
	// 	endShape()


	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 12)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	push()
	strokeWeight(0.5)
	beginShape()
	vertex(0, 0)
	vertex(0, -5)
	vertex(top, -15)
	endShape()
	pop()
	////////////////////////////
	// push()
	// beginShape()
	// vertex(0, -5)
	// vertex(-3,-7)
	// endShape()
	// pop()
	// push()
	// beginShape()
	// vertex(0, -5)
	// vertex(3,-7)
	// endShape()
	// pop()
	//////////////////////////////////

	push()

	for (var b = -5.5; b > -8; b--) {
		var a = map(b, -5.5, -8, -2, 0.1)
		translate(0, -1.5)
		for (var a2 = -2; a2 <= 0; a2++) {
			beginShape()
			vertex(0, -5)
			vertex(a, b)
			endShape()
		}
	}
	pop()

	push()

	for (var b3 = -5.5; b3 > -8; b3--) {
		var a4 = map(b3, -5.5, -8, 2, 0.1)
		translate(0, -1.5)
		for (var a3 = 0; a3 <= 2; a3++) {

			beginShape()
			vertex(0, -5)
			vertex(a4, b3)
			endShape()
		}
	}
	pop()
	pop()
	pop()


}

///////////////////////////////////////////
function leaf3() {
	push()
	var topX = random(-5, 5)
	rotate(random(-0.4, 0.4))
	scale(random(0.5, 1))

	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
		if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	strokeWeight(0.2)

	push()
	beginShape()
	vertex(0, -3)
	vertex(0, -3)
	curveVertex(-2, -8)
	vertex(topX, -22)
	curveVertex(2, -8)
	vertex(0, -3)
	vertex(0, -3)

	endShape()

	pop()
	///////////////////////////
	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	for (var c = -2; c <= 2; c++) {
		beginShape()

		vertex(0, 0)
		vertex(0, 0)
		vertex(0, -3)

		curveVertex(c, -8)

		vertex(topX, -22)
		vertex(topX, -22)


		endShape()
	}

	pop()

	pop()
}
////////////////////////////////////////////////////////////////////////////
function leaf4() {

	var top = random(-2, 2)
	var leftY = random(-9, -6)
	push()

	rotate(random(-0.4, 0.4))
	scale(random(0.5, 1))

	push()
	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
		if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}


	strokeWeight(0.2)



	beginShape()
	vertex(0, -3)
	vertex(0, -3)

	vertex(-3, -5)
	curveVertex(-5, leftY)
	vertex(-2, -6)
	vertex(top, -13)
	vertex(2, -6)
	curveVertex(5, leftY)
	vertex(3, -5)
	vertex(0, -3)

	vertex(0, -3)
	endShape()
	pop()

	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	beginShape()
	vertex(0, 0)
	vertex(0, -3)
	vertex(top, -12)
	endShape()
	/////////////////
	beginShape()
	vertex(0, 0)
	vertex(0, -3)
	vertex(-2, -6)
	endShape()
	/////////////////
	beginShape()
	vertex(0, 0)
	vertex(0, -3)
	vertex(2, -6)
	endShape()
	pop()

	pop()

}
//////////////////////////////////////////////////////////////////////
function leaf5() {
	var topX = random(-2, 2)
	var topY = random(-15, -20)
	////////////中///////////////////////
	push()
	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
		if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}

	strokeWeight(0.2)

	rotate(random(-0.4, 0.4))

	scale(random(0.5, 1))

	push()
	beginShape()
	vertex(0, -3)
	vertex(0, -3)
	curveVertex(-2, -8)
	vertex(topX, topY)
	curveVertex(2, -8)
	vertex(0, -3)
	vertex(0, -3)

	endShape()

	pop()
	//////////
	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	for (var c = -2; c <= 2; c++) {
		beginShape()

		vertex(0, 0)
		vertex(0, 0)
		vertex(0, -3)

		curveVertex(c, -8)

		vertex(topX, topY)
		vertex(topX, topY)


		endShape()
	}
	pop()
	pop()
	/////////////左///////////////////////
	push()

	fill(random(70, 120), 60, random(20, 40))
	strokeWeight(0.1)


	rotate(-0.5)


	push()
	beginShape()
	vertex(0, -3)
	vertex(0, -3)
	curveVertex(-1, -8)
	vertex(topX, topY)
	curveVertex(1, -8)
	vertex(0, -3)
	vertex(0, -3)

	endShape()

	pop()
	//////////////////////
	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	for (var c2 = -1; c2 <= 1; c2++) {
		beginShape()

		vertex(0, 0)
		vertex(0, 0)
		vertex(0, -3)

		curveVertex(c2, -8)

		vertex(topX, topY)
		vertex(topX, topY)


		endShape()
	}
	pop()
	pop()
	////////////右///////////////////////////////
	push()

	fill(random(70, 120), 60, random(20, 40))
	strokeWeight(0.1)


	rotate(0.1)


	push()
	beginShape()
	vertex(0, -3)
	vertex(0, -3)
	curveVertex(-1, -8)
	vertex(topX, topY)
	curveVertex(1, -8)
	vertex(0, -3)
	vertex(0, -3)

	endShape()

	pop()
	///////////////////////////
	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 15)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	for (var c3 = -1; c3 <= 1; c3++) {
		beginShape()

		vertex(0, 0)
		vertex(0, 0)
		vertex(0, -3)

		curveVertex(c3, -8)

		vertex(topX, topY)
		vertex(topX, topY)


		endShape()
	}
	pop()
	pop()

}
/////////////////////////////////////////////////////
function leaf6() {
	var top = random(-13, -17)
	var L = random(-6, -9)
	var bottom = random(1, 4)

	push()
	rotate(random(-0.4, 0.4))
	scale(random(0.3, 0.8))
	// var end=random(-5,5)
	var end = 0
	if (rID8 % 17 == 0) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 1) {
		fill(random(70, 120), random(70, 85), random(50, 60)) //亮綠)
	}

	if (rID8 % 17 == 2) {
		fill(random(40, 100), random(60, 75), random(50, 60)) //黃綠
	}
	if (rID8 % 17 == 3) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}
	if (rID8 % 17 == 4) {
		fill(random(120, 150), random(60, 70), random(50, 55)) //綠藍
	}
	if (rID8 % 17 == 5) {
		fill(random([36, 100, 100, 120, 120]), random(60, 50), random([40, 50, 55])) //綠枯葉
	}
	if (rID8 % 17 == 6) {
		fill(random([0, 10, 100, 100, 120, 120]), random(40, 60), randomGaussian(50, 2)) //綠紅葉
	}
	if (rID8 % 17 == 7) {
		fill(random([50, 105]), random(40, 45), randomGaussian(50, 2)) //綠橘葉
	}
	if (rID8 % 17 == 8) {
		fill(random(80, 90), random(40, 55), random(30, 55)) // //黯然綠
	}
	if (rID8 % 17 == 9) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}

	if (rID8 % 17 == 10) {
		fill(random(130, 140), random([30, 55, 55, 45, 60]), random([50, 55, 60, 62, 40, 58])) // //長老綠
	}

	if (rID8 % 17 == 11) {
		fill(colorFlower, random(10, 30), random(30, 60)) //灰暗leaf
	}
	if (rID8 % 17 == 12) {
		fill(colorFlower, random(30, 50), random(50, 70)) // colorFlower leaf
	}
		if (rID8 % 17 == 13) {
		fill(colorFlower, random(5, 25), random(70, 95)) //白灰
	}
	if (rID8 % 17 == 14) {
		fill(random(130, 140), random(50, 75), random(40, 55)) // //成熟綠
	}
	if (rID8 % 17 == 15) {
		fill((360 - colorFlower), random(30, 50), random(50, 70)) //對比leaf
	}
	if (rID8 % 17 == 16) {
		fill(random(100, 130), random(60, 75), random(50, 60)) //常綠
	}

	strokeWeight(0.2)

	//////////////////////////////
	beginShape()
	vertex(0, -5)
	vertex(0, -5)
	curveVertex(-bottom, -3)
	curveVertex(-4, -1)
	curveVertex(-5, -2)
	curveVertex(-6, L)
	vertex(0, top)
	curveVertex(6, L)
	curveVertex(5, -2)
	curveVertex(4, -1)

	curveVertex(bottom, -3)
	vertex(0, -5)
	vertex(0, -5)
	endShape()



	// 	beginShape()
	// 	vertex(0, -5)
	// 	bezierVertex(-7, 3, -6, random(-6,-8), end, -15)
	// 	bezierVertex( 6, random(-6,-8),7,3, 0, -5)
	// 	endShape()


	push()
	noFill()
	strokeWeight(0.1)
	leafColor = color(0, 0, 12)
	leafColor.setAlpha(0.5)
	stroke(leafColor)

	push()
	strokeWeight(0.1)
	beginShape()
	vertex(0, 0)
	vertex(0, -5)
	vertex(0, top)
	endShape()
	pop()
	////////////////////////////
	// push()
	// beginShape()
	// vertex(0, -5)
	// vertex(-3,-7)
	// endShape()
	// pop()
	// push()
	// beginShape()
	// vertex(0, -5)
	// vertex(3,-7)
	// endShape()
	// pop()
	//////////////////////////////////

	push()

	for (var b = -5.5; b >= -8; b--) {
		var a = map(b, -5.5, -8, 3, 0.1)

		translate(0, -1.5)
		for (var a2 = -2; a2 <= 0; a2++) {
			beginShape()
			vertex(0, -5)
			vertex(-a, b)
			endShape()
		}
	}
	pop()

	push()

	for (var b3 = -5.5; b3 >= -8; b3--) {
		var a4 = map(b3, -5.5, -8, 3, 0.1)
		translate(0, -1.5)
		for (var a3 = 0; a3 <= 2; a3++) {
			beginShape()
			vertex(0, -5)
			vertex(a4, b3)
			endShape()
		}
	}
	pop()









	pop()


}