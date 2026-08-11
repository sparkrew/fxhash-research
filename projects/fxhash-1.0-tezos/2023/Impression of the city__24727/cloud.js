function cloud(cloudSize, cloudClr2) {


	push(PartAclr1)
	scale(cloudSize)
	// blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)

	rID3 = 196
	rID4 = random(360) //random(360) //162//155//random(360)  
	rID7 = 5 //random(200,500)   //數量     
	rID8 = 100 //random(200, 400) ////大顆大小

	for (var b = 1; b < rID7; b++) { //數量
		push()
		// 		let strokwRatio=map(b,rID7/3,rID7,0,1)
		// 		let strokwRatio2=map(b,rID7/2,rID7,0,2)
		// 	 stroke((rID4+180)%360,0,100,strokwRatio)
		// 	 strokeWeight(strokwRatio2)




		rID5 = map(b, 0, rID7, rID8, 10) ///大小
		rID6 = random(0, 100) //隨機形狀
		// translate(random(width),random(height))
		//translate(width/2,200)




		// // 		//4.13淡彩/////
		// var clr1 = color(rID4, cloudClr2, 80,0.5) //0.7
		// var clr2 = color(rID4, 22, 90,0.1)//0.1

		// 		//4.18.rgb/////
		// 		var clr1 = color(rID4,60,83) //0.7
		// 		var clr2 = color(rID4,46,21,0.1)//0.1

		/////////18.紅/////////////////////////
		// 		var clr1 = color(0,63,83) //0.7
		// 		var clr2 = color(0,70,21,0.1)//0.1



		/////////19//////////////////////////////
		// 		var clr1 = color(211,63,83) //0.7
		// 		var clr2 = color(211,70,21,0.1)//0.1
		
		
		

/////////////////partA//////////////////////////////
		if (Part == 1||Part == 2) {
			 clr1 = color(PartAclr1, 63, 83) //0.7
		 clr2 = color(PartAclr1, 70, 21, 0.1)} //0.1
		////////////灰白////////////////////////
		
		
		if(Part==4){
		 clr1 = color(PartAclr1, 0, 83) //0.7
		 clr2 = color(PartAclr1, 0, 21, 0.1)} //0.1
		
		if(Part==5){
		 clr1 = color(PartAclr1, 0, 3) //0.7
		 clr2 = color(PartAclr1, 0, 21, 0.1)} //0.1

if(Part==6||Part == 3){
		 clr1 = color(PartAclr1, 0, 3) //0.7
		 clr2 = color(PartAclr1, 0, 0, 0.1)} //0.1




		// var clr4 = color((rID4+180)%360, 20,50,0.05)
		// var clr5 = color((rID4+180)%360, 40, 50,0.1)

		let ratio = map(b, 0, rID7, 0, 0.99)
		var clr3 = lerpColor(clr1, clr2, ratio)
		// var clr6 = lerpColor(clr4, clr5, ratio)

		////////////////////////////////////////////////


		for (var c = 0; c < 4; c++) {



			// blendMode(SCREEN)//MULTIPLY   LIGHTEST)

			beginShape()

			for (var a = 0; a < TWO_PI; a += 0.1) {

				let xoff = cos(a) + 1
				let yoff = sin(a) + 1
				let r = map(noise(xoff, yoff, rID6), 0, 1, (rID5 - c * 10) / 2, rID5 - c * 10)
				let x = r * cos(a)
				let y = r * sin(a)
				
				// let x = r * cos(a)
				// let y = -abs(r * sin(a))

				//noStroke()
				// strokeWeight(5)
				
				if(Part<=4){
				
				noStroke()
					fill(clr3)
				}
				
				if(Part==5){
				
			stroke(rID4,50,80,0.05)
				fill(clr3)
				}
					if(Part==6||Part == 3){
				
			stroke(PartAclr1,50,80,0.05)
				fill(clr3)
				}







				vertex(x, y)



			}
			endShape(CLOSE)
			// noLoop()
		}
		pop()
	}
	pop()





}