function drawflower() {
	push()
	rotate(random(-0.3, 0.3))
	stemX = random(-5, 5)
	stemY = random(-7, -10)
	colorFlower2 = random([50, 60, 70])
	
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 3), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	/////////////花1/////////////繡球花 + 其他/////
	push()
	translate(stemX, stemY)
	var r = 2
	for (var a = 0; a < 150; a += 2) {
		noFill()
		
		if(rID4%2==0){
		stroke(colorFlower, colorFlower2, random([70, 80]))
		}
		
			if(rID4%2==1){
		stroke(colorFlower, colorFlower2_2, random([ 70, 80]))
		}
	
	
		rotate(rID9 / 1000)

		circle(1 + 3 * cos(a), 0, 2 / r);

	}
	pop()
	pop()
}
//////////////////////////////////////////////////////////////////////////////	
function drawflower2() {
	push()

	stemX = random(-5, 5)
	stemY = random(-7, -10)
	
	colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])
	
	

	flowerCenter = random(3, 4)

	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 3), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	////////花2///////////////喇叭花+其他////////////
	push()

	translate(stemX, stemY)
	var r = 2
	for (var a = 0; a < 150; a += 2) {
		// stroke(colorFlower)
		// fill(colorFlower,colorFlower2,random([70,80]))
		noFill()
		
		if(rID4%2==0){
		stroke(colorFlower, colorFlower2, random([70, 80]))
		}
		
			if(rID4%2==1){
		stroke(colorFlower, colorFlower2_2, random([ 70, 80]))
		}
		
		
		

		rotate(rID9 / 1000)
		circle(3 + 1 * cos(a), 0, 3 / r);
	}
	pop()
	////////中心//////////////////////////
	push()

	noStroke()
	var clrC = color(colorCenter, colorCenter2, random([70, 80]))
	clrC.setAlpha(0.3)
	fill(clrC)

	for (var c = 0; c < flowerCenter; c++) {
		ellipse(stemX, stemY, flowerCenter - c)
	}







	pop()
}
////////////////////////////////////////////////////////
function drawflower3() {
	push()

	stemX = random(-5, 5)
	stemY = random(-7, -10)
	colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 3), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	////////////花3////////////////////////////////
	push()
	translate(stemX, stemY)
	var r = 2
	for (var a = 0; a < 150; a += 2) {
		let ratio1 = map(a, 0, 150, 70, 30)
		let ratio2 = map(a, 0, 150, 50, 70)
		noFill()
				
		stroke(colorFlower, ratio1, ratio2)
		
		
		// 	if(rID4%2==1){
		// stroke(colorFlower, colorFlower2_2, random([ 70, 80]))
		// }
		
	
		rotate(rID9 / 1000)

		ellipse(1 + 3 * cos(a), 0, 3);
	}
	pop()
	////////中心//////////////////////////
	push()

	noStroke()
	
	
	for(var cc=0;cc<3;cc++){
		
		var clr=color(colorCenter3, colorFlower2, random([50, 60]))
		clr.setAlpha(0.3)
fill(clr)
	ellipse(stemX, stemY, 3-cc)}
	pop()
	pop()
}
/////////////////////////////////////////////////////////////
function drawflower4() {
	push()
	rotate(random(-0.3, 0.3))
	stemX = random(-5, 5)
	stemY = random(-7, -10)
colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([5,10, 20, 30])
	colorFlower3 = random([ 70, 80])
	flowerX = random(-8, 8)


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)

	vertex(0, stemY)
	vertex(0, stemY)
	endShape();
	pop()

	////////////花4////////////////////////////////
	push()


	for (var d = 0; d < 50; d++) {

		let x = map(d, 0, 40, 0, flowerX)
		let color3 = map(d, 0, 40, 50, 75)
		let color3_2 = map(d, 0, 40, 20, 70)

		noFill()
		
				if(rID4%2==0){
		stroke(colorFlower, colorCenter2, color3)
		}
		
			if(rID4%2==1){
		stroke(colorFlower, colorFlower2_2, random([ 70, 80]))
		}




		ellipse(randomGaussian(x, 0.5), 2 + stemY - d / 3, 1 - d / 50)

		stroke(colorFlower, colorCenter2, color3_2)

		ellipse(randomGaussian(x, 0.4), 2 + stemY - d / 3, 0.1)


	}



	pop()



	pop()
}
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function drawflower5() {
	push()

	stemX = random(-5, 5)
	stemY = random(-5, -8)
	colorFlower1 = random(360)
colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])
	flowerX = random(-10, 10)


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)

	vertex(0, stemY)
	vertex(0, stemY)
	endShape();
	pop()

	////////////花5////////////////////////////////
	push()
	for (var c = 0; c < 2; c++) {

		let clr3 = map(c, 0, 4, 30, 75)
		let clr4 = map(c, 0, 4, 60, 75)
		
		
		drawingContext.shadowBlur =10
	drawingContext.shadowColor = color(colorFlower, 100, 50)
		noStroke()
			if(rID4%2==0){
			
		fill(colorFlower, colorFlower2, clr3)
		}
		
			if(rID4%2==1){
		fill(colorFlower, colorFlower2_2, clr3)
		}
		
		
	

		ellipse(0, stemY, 2 - c, random(7,15) - c)



	}





	pop()
	pop()
}
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function drawflower6() {
	push()

	stemX = random(-5, 5)
	stemY = random(-7, -10)
	colorFlower1 = random(360)
colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])
	flowerX = random(-10, 10)


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 1), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	////////////花6////////////////////////////////
	push()
	for (var c = 0; c < 8; c += 1.5) {

		let clr3 = map(c, 0, 5, 50, 70)
let clr4 = map(c, 0, 5, 70, 80)

		strokeWeight(0.1)
		clr2 = color(0, 0, clr3)
		stroke(clr2)
		
		
				if(rID4%2==0){
			
		fill(colorFlower, colorFlower2, clr3)
		}
		
			if(rID4%2==1){
		fill(colorFlower, colorFlower2_2, clr4)
		}
		

		ellipse(stemX + randomGaussian(0, 0.2), stemY + randomGaussian(0, 0.2), 6 - c)
	}


	for (var c2 = 0; c2 < 30; c2++) {
		fill(0, 0, 0)
		ellipse(stemX + random(-2, 2), stemY + random(-2, 2), 0.5)
	}








	pop()
	pop()
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function drawflower7() {
	push()

	stemX = random(-5, 5)
	stemY = random(-7, -10)
colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])


	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 2), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	/////////////花7/////
	push()
	translate(stemX, stemY)
	var r = 2
	for (var a = 0; a < 100; a++) {
		noFill()
		
		stroke(colorFlower, colorFlower2, random([75, 85]))
		
						if(rID4%2==0){
			
	stroke(colorFlower, colorFlower2, random([75, 85]))
		}
		
			if(rID4%2==1){
		stroke(colorFlower, colorFlower2_2, random([70, 80]))
		}
		
		
		
		rotate(0.2 + rID9 / 100)

		circle(3 + cos(a), 0, 0.1 - a / 1000);

	}
	pop()

	push()
	for (var c = 0; c < 4; c++) {

		let clr3 = map(c, 0, 5, 50, 90)


		strokeWeight(0.1)
		clr2 = color(0, 0, clr3)

		stroke(clr2)
		fill(colorFlower1_2, colorFlower2, clr3)

		ellipse(stemX + randomGaussian(0, 0.2), stemY + randomGaussian(0, 0.2), 4 - c)
	}

	pop()


	pop()
}
//////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////
function drawflower8() {
	push()


	stemX = random(-5, 5)
	stemY = random(-7, -10)
	colorFlower2 = random([50, 60, 70])
	colorFlower2_2 = random([10, 20, 30])
	colorFlower3 = random([ 70, 80])

	/////////////梗//////////

	push()
	// strokeWeight(1.5)  
	// stroke(random([80,90]),80,random([20,40]))   
	noFill()
	strokeWeight(0.5)
	stroke(81, random(60, 75), randomGaussian(20, 1))

	beginShape()
	vertex(0, 0)
	vertex(0, 0)
	curveVertex(randomGaussian(0, 2), random(-3, -5))
	vertex(stemX, stemY)
	vertex(stemX, stemY)
	endShape();
	pop()

	/////////////花8/////
	push()
	translate(stemX, stemY)
	var r = 2
	for (var a = 0; a < 100; a++) {
		noFill()
		
							if(rID4%2==0){
			
	stroke(colorFlower, colorFlower2, random([75, 85]))
		}
		
			if(rID4%2==1){
		stroke(colorFlower, colorFlower2_2, random([70, 80]))
		}
		
		
		
	
		rotate(core8 + rID9 / 100)

		circle(4 + cos(a), 0, 0.1 - a / 1000);

	}
	pop()

	push()
	for (var c = 0; c < 5; c++) {

		let clr3 = map(c, 0, 5, 60, 90)


		strokeWeight(0.1)
		clr2 = color(colorFlower, 10, 80)

		// 		stroke(clr2)
		noStroke()
		fill(colorFlower1_2, random(50, 90), clr3)

		ellipse(stemX + randomGaussian(0, 0.2), stemY + randomGaussian(0, 0.2), 5 - c)
	}

	pop()

	push()
	for (var c2 = 0; c2 < 30; c2++) {

		var clrDot = color(colorFlower, 100, 50)
		clrDot.setAlpha(0.3)
		noStroke()
		fill(clrDot)
		ellipse(stemX + random(-2, 2), stemY + random(-2, 2), 0.5)
	}


	pop()







	pop()
}
//////////////////////////////////////////////////////////////////////////////	