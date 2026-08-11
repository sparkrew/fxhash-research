function tree(cloudSize, cloudClr2) {


	push()
	scale(cloudSize)
	
	treeW=int(random([1,2,0.5,]))
	
	// blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)
	rID4 = random(360) //162//155//random(360)  
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




		// 	//PartAclr1//

	if (Part == 1||Part == 2) {
			clr1 = color(rID4, cloudClr2, 80, 0.5) //0.7
			clr2 = color(rID4, 22, 90, 0.1)
		}

		if (Part == 4) {
			clr1 = color(rID4, cloudClr2, 80, 0.5) //0.7
			clr2 = color(rID4, 22, 90, 0.1)
		}

		if (Part == 5) {
			clr1 = color(rID4, cloudClr2, 0, 0.5) //0.7
			clr2 = color(rID4, 22, 10, 0.1)
		}
		if (Part == 6||Part == 3) {
			clr1 = color(rID4, cloudClr2, 0, 0.5) //0.7
			clr2 = color(rID4, 22, 10, 0.1)
		}




		//0.1

		// var clr1 = color(204,0,98) //0.7
		// var clr2 = color(204,100,98,) //0.1






		// var clr4 = color((rID4+180)%360, 20,50,0.05)
		// var clr5 = color((rID4+180)%360, 40, 50,0.1)

		let ratio = map(b, 0, rID7, 0, 0.99)
		var clr3 = lerpColor(clr1, clr2, ratio)
		// var clr6 = lerpColor(clr4, clr5, ratio)

		////////////////////////////////////////////////


		for (var c = 0; c < 5; c++) {



			// blendMode(SCREEN)//MULTIPLY   LIGHTEST)

			beginShape()

			for (var a = 0; a < TWO_PI; a += 0.1) {

				let xoff = cos(a) + 1
				let yoff = sin(a) + 1
				let r = map(noise(xoff, yoff, rID6), 0, 1, (rID5 - c * 10) / 2, rID5 - c * 10)

				////////treeA//////////////////////
				let x = r * sin(a)*treeW
				let y = abs(r * 1 / sin(a))
				// ///////treeB///////////////////////////////////
				// 		let x = r * 1/cos(a)
				// let y =abs (r * tan(a))


				// noStroke()
				// strokeWeight(5)
				// stroke(0,0,0,0.5)
				if (Part <= 4) {
					
					noFill()
					stroke(0, 0, 10, 0.7)
				}

				if (Part == 5) {
					noFill()
					stroke(random([PartAclr1,(PartAclr1+180)%360,(PartAclr1+40)%360,(PartAclr1+90)%360]), 50, 100, 0.31)
				}
				if (Part == 6||Part == 3) {
					
					fill(PartAclr1,0,0)
					stroke(random([PartAclr1,(PartAclr1+180)%360]), 50, 100, 0.31)
				}

				//	fill(clr3)

				

				vertex(x, y)



			}
			endShape(CLOSE)
			// noLoop()
		}
		pop()
	}
	pop()





}