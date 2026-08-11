function brick2(rockX, rockY) {

	var clrR1 = random(0, 240)
	var clrR2 = random([10, 30, 50])
	/////////////////////////////////////////////////////
	var woodSize = random([11, 19, 27, 37, 53, 61])
	var woodR = random(int(width / woodSize))
	var woodSize2 = random(woodSize - woodSize * 2 / 3)
	var woodColor = random(240)
	var crackTime = random([1000, 1500, 2000, 4000, 5000])
	////////////////////////////////////////////////
	var woodX = random(width)
	var woodHole = random(6)
	var woodSize3 = random(250,400)
	
  var a=0
	push()

	for (var x = -50; x < width + 50; x += 2) {
		a=a+1
		for (var y = -50; y < height + 50; y += 18 + random(3)) {
			noStroke()


			////////隨機顏色木紋//////////////
			if (rID2 % 11 == 0 || rID2 % 11 == 2|| rID2 % 11 == 9|| rID2 % 11 == 10) {
				fill(woodColor, 26, random(30, 50))

				if (x % woodSize == 0) {
					fill(35, 40, random(10, 20))
				}
			}
			////////////////////////////////////////////
			if (rID2 % 11 == 1) {
				fill(woodColor, 26, random(30, 50))

				if (x % woodSize == 0) {
					fill(35, 40, random(10, 20))
				}
			}
			//////////////////////////////////////////////////
			if (rID2 % 11 == 3) {
				fill(woodColor, 26, random(20, 40))

				if (x % woodSize >= woodHole) {
					fill(0, 20, random(10, 20))
				}
			}
			////////////////藍黃紅//////////////////////////
			if (rID2 % 11 == 4) {
		
				fill(woodColor, 30, random(20, 40))
			
					if((x/30)%3>0){
						 fill(0, 20, random(20, 30))
				}
						if((x/30)%3<1&&(x/30)%3>0 ){
						 fill(woodColor,20, random(20, 30))
							
				}
							if((x/30)%3<2&&(x/30)%3>1){
						 fill(50,20, random(20, 30))
							
				}
					
			}
			///////////////////////////////////////////////
			////////////////sin(x)/////////////////////////
			if (rID2 % 11 == 5) {
		
				fill(woodColor, 30, random(30, 55))
			
				// 	if((y/30)*sin(x)*10%3>0){
				// 		 fill(50, 23, random(60, 70))
				// }
				
					if((y/30)%3>sin(y)*5){         ////SIN木紋
						 fill(woodColor, 23, random(60, 70))
				}
				
// 						if((y/30)%3<1&&(y/30)%3>0 ){
// 						 fill(60,40, random(60, 70))
							
// 				}
// 							if((y/30)%3<2&&(y/30)%3>1){
// 						 fill(50,20, random(70, 60))
							
// 				}
					
			}
			
			////////////////////////////////////////////

			////////////////淡米/////////////////////////
			if (rID2 % 11 == 6) {
		
				fill(woodColor, 10, random(80, 90))
			
					if(x%53==3){
						 fill(50, 28, random(60, 80))
				}
// 						if((x/woodSize3)%2<=1&&(x/woodSize3)%2>0 ){
// 						 fill(woodColor,40, random(20, 60))
							
// 				}
					
			}
			
			
			
			//////////////////////////////////////////////////
			////////////////米+紅/////////////////////////
// 			if (rID2 % 11 == 6) {
		
// 				fill(woodColor, 0, random(80, 90))
			
// 					if((x/woodSize3)%2>=0){
// 						 fill(50, 28, random(60, 80))
// 				}
// 						if((x/woodSize3)%2<=1&&(x/woodSize3)%2>0 ){
// 						 fill(woodColor,40, random(20, 60))
							
// 				}
					
// 			}
			//////////////////////////////////////////////////
			////////////////米+藍/////////////////////////
			if (rID2 % 11 == 7) {
		
				fill(random(196,220),40, random(50, 60))
			
					if((x/10)%5>=0){
						 fill(200, 20, random(20, 60))
				}
						if((x/10)%5<=1&&(x/10)%5>0 ){
						 fill(213,26, random(20, 60))
							
				}
						if((x/10)%5<=2&&(x/10)%5>1 ){
						 fill(random(196,220),30, random(20, 60))	
				}
						if((x/10)%5<=3&&(x/10)%5>2){
						 fill(random(196,220),40, random(30, 60))	
				}
							if((x/10)%5<=4&&(x/10)%5>3){
						 fill(random(196,220),random(20,30), random(30, 60))	
				}
			
					
			}
//////////////////////////////////////////////////////
	////////////////黃金城///////////////////////
			if (rID2 % 11 == 8) {
		
				fill(woodColor,22, random(90, 80))
			
				// 	if((x+a)%23>=20){
				// 		 fill(0, 20, random(50, 60))
				// }
						if((x/10)%5<=1&&(x/10)%5>0 ){
						 fill(0,0, random(80, 90))
							
				}
						if((x/10)%5<=2&&(x/10)%5>1 ){
						 fill(0,20, random(90, 60))
				}
						if((x/10)%5<=3&&(x/10)%5>2){
						 fill(0,35, random(60, 80))
				}
							if((x/10)%5<=4&&(x/10)%5>3){
						 fill(0,0, random(50, 90))	
				}
			
					
			}
//////////////////////////////////////////////////////


			/////////////////////////////////////////////	
			// 				if ( rID % 3 == 2) {
			// 				fill(woodColor, 26, random(30, 50))

			// 				if (x % woodSize>=woodSize2) {
			// 				fill(35, 40, random(10, 20))
			// 				}		

			// 			}
			// ///////////////////////////////////////////////////

			ellipse(x, y, 3, 25 + random(3))
		}
	}

	pop()
	///////////////crack//////////////////////////////
	push()

	if (rID2 % 11 == 1) {

		for (var c1 = 0; c1 < crackTime; c1++) {
			var crackX1 = random(width)
			var crackY1 = random(height)

			var crackX2 = random(width)
			var crackY2 = random(height)

			for (c2 = 0; c2 < 2; c2++) {

				/////////////////////直/////////////////////
				beginShape()
				noFill()
				var strokeCrack = color(0, 0, random(30, 68))
				strokeCrack.setAlpha(0.5)
				stroke(strokeCrack)
				vertex(crackX2, crackY2)
				vertex(crackX2, crackY2)
				for (var b = crackY2 + 50; b < (height - crackY2); b += 20) {
					vertex(randomGaussian(crackX2, random(5)), b)
				}
				endShape()

			}

		}
	}

	pop()







}