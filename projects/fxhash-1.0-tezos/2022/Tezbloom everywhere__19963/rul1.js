function generateRules1() {
	//////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////1-1/////////////////////////////////////////////////////////////////////

	push()
	var newFlowers1
	
	var spaceFlowers
	// var flowers = ["F-F-F-F-F"]
		// var flowers = ["+F+F+F+F+F-F+F"]
var flowers = [rule1]
// var flowers = []
	var r = 0
	// for (var i = 0; i < random(10, 30); i++) {
			for (var i = 0; i <20;i++) {

		var randomStr = random(["+", "-"])
		flowers.push(randomStr)
		// flowers.splice(random(30), 0, "F")  ///隨機F位置
		flowers.splice(r, 0, "F") //奇數位置F


		// 		flowers.splice(5, 0, "[") 
		// 		flowers.splice(10, 0, "]") 


		spaceFlowers = flowers.join("")
		// spaceFlowers="F"

		r = r + 2
		ruleString1 += spaceFlowers

	}
	
	pop()
	// console.log(ruleString1)
}


////////////////////////////////////////////
function createTurtle1() {
push()

	for (var i = 0; i < ruleString1.length; i++) {
		
		var r=random(4,6)   ///數字越大越密
		// var r=3
		var c = ruleString1.charAt(i)

		
		if (c == "F") {
      // leaf3()
		push()
			
				strokeWeight(random(0.3,0.5))
			stroke(random(100,120),random(30,55),randomGaussian(25,1))
		
			line(0, 0, 0, -len / (r + deapth / 3))
			pop()
			translate(0, -len / (r + deapth / 3))
	
			
			
			push()
			
				// if(i%3>=2){
			
				if(rID5%7==0){
						leaf1()
				}
					if(rID5%7==1){
						leaf2()
				}
					if(rID5%7==2){
						leaf3()
				}
					if(rID5%7==3){
						leaf4()
				}
					if(rID5%7==4){
						leaf5()
				}
					if(rID5%7==5){
						leaf6()
				}
					if(rID5%7==6){
						leaf1()
				}
				// }
			pop()
			
			
			push()
			if(i%flowerNum==2){
			
			
				if(rID6%11==0 ||rID6%11==8 ){
			drawflower()
			}
					if(rID6%11==1||rID6%11==9  ){
			drawflower2()
			}
					if(rID6%11==2 ){
			drawflower3()
			}
						if(rID6%11==3 ){
			drawflower4()
			}
						if(rID6%11==4 ){
			drawflower7()
			}
						if(rID6%11==5 ){
			drawflower6()
			}
					if(rID6%11==6 ){
			drawflower7()
			}
					if(rID6%11==7||rID6%11==10 ){
			drawflower8()
			}
			}
			pop()
			

		} else if (c == "-") {

			rotate(-angle + deapth / 75)
			
		



		} else if (c == "+") {

			rotate(angle + deapth / 75)

		} 

	

	}

pop()
	// console.log(rID5)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////1-2////////////////////////////////////////////////////////////////////////
function generateRules1_2() {
	push()
	///////////////////////////////
	var newFlowers1
	var spaceFlowers1_2
	// var flowers1_2 = ["F-F-F-F-F"]
		// var flowers1_2 = [rule1_2]  
	var flowers1_2 = []  
	var r = 0
	// for (var i = 0; i < random(10, 30); i++) {
			for (var i = 0; i <20;i++) {

		var randomStr1_2 = random(["+", "-"])
		flowers1_2.push(randomStr1_2)
		// flowers1_2.splice(random(30), 0, "F")  ///隨機F位置
		flowers1_2.splice(r, 0, "F") //奇數位置F


		// 		flowers1_2.splice(5, 0, "[") 
		// 		flowers1_2.splice(10, 0, "]") 


		spaceFlowers1_2 = flowers1_2.join("")
		// spaceFlowers1_2="F"

		r = r + 2
		ruleString1_2 += spaceFlowers1_2

	}
	
	pop()
	
	// console.log(ruleString1_2)
}



////////////////////////////////////////////
function createTurtle1_2() {
push()

	for (var i = 0; i < ruleString1_2.length; i++) {
		
		var r=random(4,6)
		var c = ruleString1_2.charAt(i)

		
		if (c == "F") {
      // leaf3()
		push()
			
				strokeWeight(random(0.3,0.5))
			stroke(random(100,120),random(30,55),randomGaussian(25,1))
		
			line(0, 0, 0, -len1_2 / (r + deapth1_2 / 3))
			pop()
			translate(0, -len1_2 / (r + deapth1_2 / 3))
	
			
			
			push()
			
				if(i%3>=2){
				
				if(rID5%7==0){
						leaf1()
				}
					if(rID5%7==1){
						leaf2()
				}
					if(rID5%7==2){
						leaf3()
				}
					if(rID5%7==3){
						leaf4()
				}
					if(rID5%7==4){
						leaf5()
				}
					if(rID5%7==5){
						leaf6()
				}
					if(rID5%7==6){
						leaf1()
				}}

			pop()
			
				push()
			if(i%flowerNum==2){
			
			
				if(rID6%11==0 ||rID6%11==8 ){
			drawflower()
			}
					if(rID6%11==1||rID6%11==9  ){
			drawflower2()
			}
					if(rID6%11==2 ){
			drawflower3()
			}
						if(rID6%11==3 ){
			drawflower4()
			}
						if(rID6%11==4 ){
			drawflower7()
			}
						if(rID6%11==5 ){
			drawflower6()
			}
					if(rID6%11==6 ){
			drawflower7()
			}
					if(rID6%11==7||rID6%11==10 ){
			drawflower8()
			}
			}
			pop()
			
			

		} else if (c == "-") {

			rotate(-angle1_2 + deapth1_2 / 75)
			
		



		} else if (c == "+") {

			rotate(angle1_2 + deapth1_2 / 75)

		} 

	

	}

pop()
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////1-3////////////////////////////////////////////////////////////////////////
function generateRules1_3() {
	push()
	///////////////////////////////
	var newFlowers1
	var spaceFlowers1_3
	// var flowers1_3 = ["F-F-F-F-F"]
		var flowers1_3 = []

	var r = 0
	// for (var i = 0; i < random(10, 30); i++) {
			for (var i = 0; i <20;i++) {

		var randomStr1_3 = random(["+", "-"])
		flowers1_3.push(randomStr1_3)
		// flowers1_3.splice(random(30), 0, "F")  ///隨機F位置
		flowers1_3.splice(r, 0, "F") //奇數位置F


		// 		flowers1_3.splice(5, 0, "[") 
		// 		flowers1_3.splice(10, 0, "]") 


		spaceFlowers1_3 = flowers1_3.join("")
		// spaceFlowers1_3="F"

		r = r + 2
		ruleString1_3 += spaceFlowers1_3

	}
	
	pop()
	
}


////////////////////////////////////////////
function createTurtle1_3() {
push()

	for (var i = 0; i < ruleString1_3.length; i++) {
		
		var r=random(4,6)
		var c = ruleString1_3.charAt(i)

		
		if (c == "F") {
      // leaf3()
		push()
			
			strokeWeight(random(0.3,0.5))
			stroke(random(100,120),random(30,55),randomGaussian(25,1))
		
			line(0, 0, 0, -len1_3 / (r + deapth1_3 / 3))
			pop()
			translate(0, -len1_3 / (r + deapth1_3 / 3))
	
			
			
			push()
			
				if(i%3>=2){
				
				if(rID5%7==0){
						leaf1()
				}
					if(rID5%7==1){
						leaf2()
				}
					if(rID5%7==2){
						leaf3()
				}
					if(rID5%7==3){
						leaf4()
				}
					if(rID5%7==4){
						leaf5()
				}
					if(rID5%7==5){
						leaf6()
				}
					if(rID5%7==6){
						leaf1()
				}}

			pop()
			
				push()
			if(i%flowerNum==2){
			
			
				if(rID6%11==0 ||rID6%11==8 ){
			drawflower()
			}
					if(rID6%11==1||rID6%11==9  ){
			drawflower2()
			}
					if(rID6%11==2 ){
			drawflower3()
			}
						if(rID6%11==3 ){
			drawflower4()
			}
						if(rID6%11==4 ){
			drawflower7()
			}
						if(rID6%11==5 ){
			drawflower6()
			}
					if(rID6%11==6 ){
			drawflower7()
			}
					if(rID6%11==7||rID6%11==10 ){
			drawflower8()
			}
			}
			pop()
			
			

		} else if (c == "-") {

			rotate(-angle1_3 + deapth1_3 / 75)
			
		



		} else if (c == "+") {

			rotate(angle1_3 + deapth1_3 / 75)

		} 

	

	}

pop()
}
//////////////////////////////////////////

