

function generateRules2() {
	
	push()
	
		
	if(rID7%5==0){
		patterns = random([
		"FFFFF-FFFFF",
		"F-F-F+F+F-F-F+F+F-F-F+F+F-F-F",
		])}
	
		if(rID7%5==1){
		patterns = random([
		
	
			"F-F-F+F+F-F-F+F+F-F-F+F+F-F-F",
		"FFF+FF+FF-FF", 
		])}
	
	if(rID7%5==2){
		patterns = random([
			"FF+FF-FF+FF-FF+FF",
			"F+F+F+F-F-F-F-F",
			"F+F+F+F-F-F-F-F-F", 
	])}
		if(rID7%5==3){
		patterns = random([
			"F+F+F+F-F-F-F-F-F-F",
			"F+F+F+F-F-F-F-F-F-F+F-F",
		
		
		])}
	

		if(rID7%5==4){
		patterns = random([
			"F+F+F-F-F-F-F-F+F-F+F-F+F-F",
			"F-F+F-F-F+F-F-F+F-F+F-F+F-F+F-F+F-F"
			
			])}

	var pattern = patterns


	// if (rID4 % 5 == 0) {
	// 	pattern = "F-F-F+F+F-F-F+F+F-F-F+F+F-F-F"////8
	// }
	// if (rID4 % 5 == 1) {
	// 	pattern = "F-F-F+F+F-F-F+F+F-F-F+F+F-F-F+F+F-F-F"////9
	// }




	var newstring = ""
	for (var i = 0; i < ruleString2.length; i++) {
		var c = ruleString2.charAt(i)
		if (c == "F") {

			newstring += pattern
		} else {
			newstring += c
		}
	}
	ruleString2 = newstring

	pop()

	// console.log(pattern)
}


function createTurtle2() {
	push()

	///////////////////////////////rID3=4/////////////////////////////////////////////////////
	if (rID2 % 3 == 1) {
		var clr1 = color(50, 2, 70) //在rID3=4;rID2=1 //灰
		// clr1.setAlpha(random(0.03, 1))
		var clr2 = color(random(0, 50), random(60, 30), random(70, 90)) //粉紅
		// clr2.setAlpha(random(0.03, 1))
		var clr3 = color(random(40,60), random(20,35), 80) //鵝黃
		// clr3.setAlpha(random(0.03, 1))

		var clr4 = color(random(100,120),18,65) //灰綠
		// clr4.setAlpha(random(0.03, 1))
			var clr5 = color(50,80,80) //灰暗
		clr5.setAlpha(random(0.5, 0.8))

		var clrs = random([clr1, clr2, clr3, clr4])
		
	

		strokeWeight(1.5)
		stroke(clrs)
	}

	if (rID2 % 3 == 2) {
		
					drawingContext.shadowBlur =30
			drawingContext.shadowColor = color(random([0,30,50]), 60, 100)
		
		var clr1_2 = color(50, 2, random(60, 90)) //在rID3=4;rID2=1 //灰
		clr1_2.setAlpha(random(0.1,0.3))
		var clr2_2 = color(random(0, 50), random(60, 30), random(60, 90)) //金粉
		clr2_2.setAlpha(random(0.1,0.3))
		var clr3_2 = color(0, 0, random(50, 60)) //灰黑粉筆
		clr3_2.setAlpha(random(0.1,0.3))
   
		var clr4_2 = color(0, 30, random(20, 100)) //灰黑粉筆
		clr4_2.setAlpha(random(0.1,0.3))

		var clr5_2 = color(52, 81, random([80, 100, 100])) //金
		clr5_2.setAlpha(random(0.1,0.3))

		var clrs2 = random([clr1_2, clr2_2, clr3_2, clr4_2, clr5_2])
		strokeWeight(1)
		stroke(clrs2)

	}

	for (var i = 0; i < ruleString2.length; i++) {
		var c = ruleString2.charAt(i)
		if (c == "F") {
			// var clr1 = color(0, 0, 60)
			// 			drawingContext.shadowBlur = 2
			// drawingContext.shadowColor = color(50, 50, 90)




			line(0, 0, 0, -len2 / (1 + deapth2 / 3))
			translate(0, -len2 / (1 + deapth2 / 3))
			// 			push()
			// drawOrchid2()
			// pop()
			// ellipse(0, 0, 5)


		} else if (c == "-") {

			rotate(-angle2 + deapth2 / 75)


		} else if (c == "+") {

			rotate(angle2 + deapth2 / 75)

		} else if (c == "[") {

			deapth2 += 1
			push()

		} else {

			deapth2 -= 1
			pop()

		}

		if (c == "F" && ruleString2.charAt(i + 1) == "]") {
			noStroke()
			fill(15 * deapth2, 200, 100)
			ellipse(0, 0, 3)
		}

	}

	pop()
}