function sky(cloudSize,cloudClr2) {
	
	
	push()
	scale(cloudSize)
 // blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)
	
	
if(Style==0){
 rID4 =random([rID3,(rID3+40)%360,(rID3+180)%360])}
	
	if(Style==1){
 rID4 =random([rID3,(rID3+180)%360])}
	
	if(Style==2){
 rID4 =randomGaussian(rID3,20)}
	
		if(Style==3){
 rID4 =random(360)
	}
	
		if(Style==4){
 rID4 =random(360)
	}
		if (Style == 5) {
		rID4 = random([randomGaussian(rID3,20), (rID3 + 180) % 360,randomGaussian(rID3,20)])
	
	}
		if (Style == 6) {
		rID4 = random(360)

	}
	
	
	
	
	
	
	
	
	
	rID7 = 5 //random(200,500)   //數量     
	rID8 = 100//random(200, 400) ////大顆大小

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
		
		


		// 		////同色//////
		// var clr1 = color(rID4, cloudClr2, 80) //0.7   
		// var clr2 = color(rID4, 22, 90)//0.1
		
			var clr1 = color(rID4,random([20,30,0]),random(80,90),0.7) //0.7
		var clr2 = color(rID4,0,80,0.1)//0.1
		
		
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
				let r = map(noise(xoff, yoff, rID6), 0, 1,(rID5 - c * 10)/2, rID5 - c * 10)
				let x = r * cos(a)
				let y = r * sin(a)

			 noStroke()
				// strokeWeight(5)
				// stroke(0,0,0,0.5)
				
			
				fill(clr3)
			
				
				
				vertex(x, y)



			}
			endShape(CLOSE)
			// noLoop()
		}
		pop()
	}
pop()
	
	
	
	
	
}