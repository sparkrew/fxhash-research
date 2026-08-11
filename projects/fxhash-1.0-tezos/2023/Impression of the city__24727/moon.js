function moon() {
	
	
	
	push()
 // blendMode(LIGHTEST)
	colorMode(HSB, 360, 100, 100, 1)
	rID4 = random(360) //162//155//random(360)  
	rID7 = 50 //random(200,500)   //數量     
	rID8 = 500//random(200, 400) ////大顆大小

	for (var b = 1; b < rID7; b++) { //數量
		push()
// 		let strokwRatio=map(b,rID7/3,rID7,0,1)
// 		let strokwRatio2=map(b,rID7/2,rID7,0,2)
// 	 stroke((rID4+180)%360,0,100,strokwRatio)
// 	 strokeWeight(strokwRatio2)
		
		
		
		
		rID5 = map(b, 0, rID7, rID8, 10) ///大小
		rID6 = random(0, 100) //隨機形狀
		// translate(random(width),random(height))
		translate(width/2,200)

		// 		////同色//////
		var clr1 = color(rID4, 62, 80, 0.01)
		var clr2 = color(rID4, 22, 90, 0.005)
		var clr4 = color((rID4+180)%360, 20,50,0.1)
		var clr5 = color((rID4+180)%360, 40, 50,0.1)

		let ratio = map(b, 0, rID7, 0, 0.99)
		var clr3 = lerpColor(clr1, clr2, ratio)
		var clr6 = lerpColor(clr4, clr5, ratio)

		////////////////////////////////////////////////


		for (var c = 0; c < 10; c++) {
			
			

 blendMode(LIGHTEST)

			beginShape()

			for (var a = 0; a < TWO_PI; a += 0.1) {

				let xoff = cos(a) + 1
				let yoff = sin(a) + 1
				let r = map(noise(xoff, yoff, rID6), 0, 1,(rID5 - c * 10)/2, rID5 - c * 10)
				let x = r * cos(a)
				let y = r * sin(a)

			// noStroke()
				// strokeWeight(5)
				// stroke(0,0,0,0.5)
				
				if(b%2==0){
				fill(clr3)}
				else{
				fill(clr6)
				
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