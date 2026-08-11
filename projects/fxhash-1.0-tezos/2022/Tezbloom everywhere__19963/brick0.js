function brick0(newX, newY) {

	var brickTex = random(["‧", "◜", "◝", "✣", "✥", "✦", "꧁", "დ", "│", "―", "⠁⠂⠃⠄⠅⠆⠇", " "])
	// var brickTex=random([" "]) 
	var ellipseX = random(10, 20)
	var clrR1 = random(0, 240)
	var clrR2 = random([10, 30, 50])
	push()
	for (var a = 0; a < width + 100; a += newX) {
		for (var b = 0; b < height + 100; b += newY) {
			/////////////////////色系////////////////////////////////////
			push()
			noStroke()

			if (rID%7==0 ||rID%7==6) {

				fill(clrR1, random(2, 20), random(60, 90)) //// 粉紅黑
			}

			if (rID%7==1) {

				fill(0, 5, random([70, 90])) ////  黑白
			}

			if (rID%7==2) {

				fill(clrR1, clrR2, random([70, 90])) ////  黑粉彩之一
			}

			if (rID%7==3) {

				fill(clrR1, random([0, 20]), random([70,90])) ////  白粉彩之一
			}

			if (rID%7==4) {

				fill(clrR1, random([ 30,40]), random(70,90)) ////  ///  白鵝黃
			}




			if (rID%7==5) {

				fill(random(360), random([0, 20]), random([90])) ////  白全彩
			}


			///////////////////形狀 方形 圓//////////////////////////////////			
			if (rID2%5==2 ||rID2%5==1||rID2%5==0) {
				rect(a, b, newX, newX)
			}
			if (rID2%5==3) {


				ellipse(a, b, ellipseX)
			}
			
			if (rID2%5==4) {
				ellipse(a, b, random(10, 30))
			}



			pop()

			///////////////////框內字圖////////////////////////
			push()
			translate(a, b)
			for (var d = 10; d < newX; d += newX / 5) {
				for (var c = 0; c < newY; c += newY / 5) {
					var clr1 = color(0, 0, 70)
					clr1.setAlpha(random(0.3, 0.5))
					// stroke(clr1)	
					fill(clr1)
					textSize(10)
					text(brickTex, d, c)

				}
			}
			pop()







		}
	}

	pop()

	////////////框/////////////////////
	push()
	for (var a2 = 0; a2 < width; a2 += newX) {
		for (var b2 = 0; b2 < height; b2 += newY) {
			for (var r = 0; r < 3; r++) {
				noFill()

				var strColor = color(0, 0, random(20, 60))
				strColor.setAlpha(0.5)
				stroke(strColor)
				rect(a2, b2, newX - r, newY - r)
			}
		}
	}

	pop()

}