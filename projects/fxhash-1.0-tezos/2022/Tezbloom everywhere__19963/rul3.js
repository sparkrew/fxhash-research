function generateRules3() {
	push()
	///////////////////////////////
	var newFlowers1
	var spaceFlowers3
	// var flowers3 = ["F-F-F-F-F"]
		var flowers3 = ["FFFFF-FFFFF"]

	var r = 0
	// for (var i = 0; i < random(10, 30); i++) {
			for (var i = 0; i <40;i++) {

		var randomStr3 = random(["+", "-"])
		flowers3.push(randomStr3)
		flowers3.splice(random(30), 0, "F")  ///隨機F位置
		// flowers3.splice(r, 0, "F") //奇數位置F


		// 		flowers3.splice(5, 0, "[") 
		// 		flowers3.splice(10, 0, "]") 


		spaceFlowers3 = flowers3.join("")
		// spaceFlowers3="F"

		r = r + 2
		ruleString3 += spaceFlowers3

	}
	
	pop()
	
}


////////////////////////////////////////////
function createTurtle3() {
push()

	for (var i = 0; i < ruleString3.length; i++) {
		
		var r=random(4,6)
		var c = ruleString3.charAt(i)

		
		if (c == "F") {
      // leaf3()
		push()
			
				strokeWeight(randomGaussian(0.5,0.2))
			stroke(random(100,120),random(30,55),randomGaussian(25,1))
		
			line(0, 0, 0, -len3 / (r + deapth3 / 3))
			pop()
			translate(0, -len3 / (r + deapth3 / 3))
	


		} else if (c == "-") {

			rotate(-angle3 + deapth3 / 75)
			
		



		} else if (c == "+") {

			rotate(angle3 + deapth3 / 75)

		} 

	

	}

pop()
}
//////////////////////////////////////////