function road(cloudSize, cloudClr2) {

	push()
	colorMode(HSB)
	strokeWeight(4)
	//fill(50,100,100)
	
	for (var d = 0; d < 3; d++) {
		
		if(Part==1||Part==2){
		stroke(random([0,45]),100,0)}
				if(Part==4){
		stroke(random([0,45]),100,0)}
			if(Part==5){
		stroke(random([0,45]),100,100)}
			if(Part==3||Part==6){
		stroke(random([0,45]),100,80)}
		
		
		
		
		
		line(randomGaussian(0, 2), 0, randomGaussian(0, 2), 100)
	}
	pop()



	push()
	scale(cloudSize)
	// blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)
	rID4 = random(360) //random(360) //162//155//random(360)  


	rID7 = 5 //random(200,500)   //數量     
	rID8 = 100 //random(200, 400) ////大顆大小

	for (var b = 1; b < rID7; b++) { //數量
		clr4_3 = random(60)
		push()
		// 		let strokwRatio=map(b,rID7/3,rID7,0,1)
		// 		let strokwRatio2=map(b,rID7/2,rID7,0,2)
		// 	 stroke((rID4+180)%360,0,100,strokwRatio)
		// 	 strokeWeight(strokwRatio2)




		rID5 = map(b, 0, rID7, rID8, 10) ///大小
		rID6 = random(0, 100) //隨機形狀
		// translate(random(width),random(height))
		//translate(width/2,200)

		// 		// 		////4.13////
		// 		var clr1 = color(rID4, cloudClr2, 80) //0.7
		// 		var clr2 = color(rID4, 22, 90)//0.1


		// 		 		////4.14////
		// 		var clr1 = color(rID4, 20, 30) //0.7
		// 		var clr2 = color((rID4+90)%360, 20, 90)//0.1

		// 		 		////4.17//紅黑夜//
		// 		var clr1 = color(rID4,20,30) //0.7
		// 		var clr2 = color((rID4+90)%360, 20, 50)//0.1





		///////////part1 單色深////////////////////////////////////

		if (Part == 1||Part == 2) {
			clr1 = color(PartAclr1, 98, clr4_3,0.7) //0.7
			clr2 = color(PartAclr1, 100, clr4_3 + 40,0.2)
		} //0.1


		///////////part2 灰白////////////////////////////////////
		if (Part == 4) {
			clr1 = color(PartAclr1, 0, clr4_3) //0.7
			clr2 = color(PartAclr1, 0, clr4_3 + 40)
		} //0.1


		///////////part3 黑色彩色世界////////////////////////////////////
		if (Part == 5) {
		clr1 = color(PartAclr1, 0, clr4_3/10,0.7) //0.7
			clr2 = color(PartAclr1, 0, clr4_3 /10+ 4,0.2)
		} //0.1
		
		if (Part == 6||Part == 3) { //黑單色
			clr1 = color(PartAclr1, 0, clr4_3/10) //0.7
			clr2 = color(PartAclr1, 0, clr4_3 /10+ 4)
		} //0.1






		// 				var clr1 = color(PartAclr1,0,clr4_3) //0.7
		// 		var clr2 = color(PartAclr1, 0, clr4_3+40)//0.1







		// 		var clr1 = color(300,96,100) //0.7
		// 		var clr2 = color(310,96,10)//0.1








		// var clr4 = color((rID4+180)%360, 20,50,0.05)
		// var clr5 = color((rID4+180)%360, 40, 50,0.1)

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
				let x = r * 1 / tan(a)
				let y = abs(r * tan(a))


				// 	let x = r * 1/tan(a)
				// let y = -abs(r * sin(a))
				if (Part <= 4) {
					// noStroke()
					stroke(0,0,10,0.2)
					fill(clr3)}
				
					if (Part == 5) { ///黑彩
					stroke(random([PartAclr1,(PartAclr1+180)%360,(PartAclr1+40)%360,(PartAclr1+90)%360]),50,80,0.8)
					 fill(clr3)
				
					}
				
					if (Part == 6||Part == 3) { ///黑單色
					stroke(random([PartAclr1,(PartAclr1+180)%360]),50,80,0.5)
					fill(clr3)
					
					
					}
				
				
				
					// strokeWeight(5)
					// stroke(0,0,0,0.5)
					//	strokeWeight(5)
					//stroke(0,0,0,0.5)





					vertex(x, y)



				}
				endShape(CLOSE)
				// noLoop()
			}
			pop()
		}
		pop()





	}