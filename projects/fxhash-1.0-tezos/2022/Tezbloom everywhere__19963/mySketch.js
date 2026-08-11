// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH.       

ruleString1 = "";
ruleString1_2 = "";  
ruleString1_3 = "";
ruleString2 = "F";
ruleString3 = "F";      
len = 20;
deapth = 0;
angle = 0;

len1_2 = 20;
deapth1_2 = 0;
angle1_2 = 0;

len1_3 = 20;
deapth1_3 = 0;
angle1_3 = 0;



len2 = 20;
deapth2 = 0;
angle2 = 0;


len3 = 20;
deapth3 = 0;
angle3 = 0;


function setup() {
	fx = fxrand()
	randomSeed(fx * 987654321)


	push()
	createCanvas(1000, 1000);
	pixelDensity(2);

	colorMode(HSB)
	// background(0,22,50);
	background(random(360), random(10), 85);


	// rID2 =800
	// rID =4
	// rID2 =2
	
	// rID4 = 0
	// rID3 =4

	// rID6=4
	// rID5 = 0
	// rID7 =3
	// rID8 = 13
	
	rID = int(random(999)) /////flower pattern
	rID2 = int(random(999)) /////flower pattern
	rID3 = int(random(5))
	rID4 = int(random(999))
	rID5 = int(random(999)) /////葉子
	rID6 = int(random(999)) /////花
	rID7 = int(random(999)) /////圖騰
	rID8 = int(random(999)) /////葉子顏色
	rID9 = int(random(999)) /////創造花隨機

	// rID3 = 4

	colorFlower = random(360) /////flower color
	colorFlower1_2 = random([0, 10, 20, 30, 40, 50])
	colorCenter = random([0, 30, 50])
	colorCenter2 = random([50, 60, 70, 90])
	colorCenter3 = random([0, 30, 50])
	core8 = random(0.1, 0.8) ////花8.中心
	flowerNum = random([7, 11, 13, 17]) ////花的數量%

	rule1_2Y = random([-450, -400, -200])
	// scale(0.5)

	rule1 = random(["-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F", "-F-F+F-F+F-F-F-F+F+F-F-F+F-F+F-F-F-F+FF++F-F-F+F-F+F-F-F-F+FF+F++F-F-F+F-F+F", "-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F-F+F-F+F+F"])
	// rule1_2=random(["-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F+F-F-F+F-F+F-F-F+F","-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F-F+F-F+F+F+F-F-F+F-F+F-F-F+F","-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F+F-F-F+F","-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F-F-F-F+F-F+F-F-F+F-F+F-F+F-F+F+FF"])
	rule1_2 = random(["-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F-F+F-F+F+F+F-F-F+F-F+F-F-F+F", "-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F+F-F-F+F", "-F-F+F-F+F-F-F+F-F+F-F+F-F+F+F-F-F-F+F-F+F-F-F+F-F+F-F+F-F+F+FF"])










}

function reset() {
	background(255);
}

function draw() {
	var r = 0


	if (frameCount == 1 && rID3 == 0) { ////////brick0

		brick0(random(30, 90), random(30, 60))

	}

	if (frameCount == 2 && rID3 == 1) { ////////brick0

		brick1(random(30, 90), random(30, 70))

	}

	if (frameCount == 3 && rID3 == 2) { ////////brick0
		
		
brick2(random(400, 600), random(200, 400))
			

	}

	if (frameCount == 4 && rID3 == 3) { ////////brick0
		
		brick3(random(400, 600), random(200, 400))

		

	}
	if (frameCount == 5 && rID3 == 4) { ////////brick0

		brick4(random(400, 600), random(200, 400))

	}
// 	if (frameCount == 6 && rID3 == 5) { ////////brick0

// 		// brick4(random(400, 600), random(200, 400))
		



// 	}


	//////////////////花+藤////////////////////////////////////
	if (frameCount == 21) {
		push()

		// 	scale(2)
		// translate(-250,-250)

		// scale(2.5)
		// translate(-180,-350) ///-350,-200
		scale(4)
		translate(-300, -450) ///-350,-200


		push()
		angle = PI / 6
		for (var i = 0; i < 2; i++) {
			generateRules1()
			len /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle1()

		pop()
		pop()

	}
	//////////////花+藤2/////////////////////////
	if (frameCount == 22) {
		push()
		// scale(2.5)
		// translate(-180,-350) ///-400,-300

		scale(4)
		translate(-350, -350) ///-400,-300
		push()
		angle1_2 = PI / 6
		for (var i2 = 0; i2 < 2; i2++) {
			generateRules1_2()
			len1_2 /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle1_2()

		pop()
		pop()

	}
	//////////////花+藤3/////////////////////////
	if (frameCount == 23) {
		push()
		// scale(2.5)
		// translate(random(-420, -400), -180) ///-400,-200
		scale(4)
		translate(-420, -300) ///-400,-200

		push()
		angle1_3 = PI / 6
		for (var i1_3 = 0; i1_3 < 2; i1_3++) {
			generateRules1_3()
			len1_3 /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle1_3()

		pop()
		pop()

	}

	/////////////////////////////////////////
	// 	/////////////花+藤4/////////////////////////
	// 	if (frameCount == 24) {
	// 		push()
	// 		scale(2.5)
	// 		translate(random(-180,-160),-180) ///-350,-200
	// 		push()
	// 		angle = PI / 6
	// 		for (var i4 = 0; i4 < 2; i4++) {
	// 			generateRules1()
	// 			len /= 1.25
	// 		}
	// 		translate(width / 2, height / 2)
	// 		createTurtle1()

	// 		pop()
	// 		pop()

	// 	}

	/////////////花+藤5/////////////////////////
	if (frameCount == 25) {
		push()
		// scale(2.5)
		// translate(random(-200,-180), -180) ///-400,-200
		scale(4)
		translate(-450, -430) ///-400,-200

		push()
		angle1_2 = PI / 6
		for (var i5 = 0; i5 < 2; i5++) {
			generateRules1_2()
			len1_2 /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle1_2()

		pop()
		pop()

	}

	/////////////花+藤6/////////////////////////
	if (frameCount == 26) {
		push()
		// scale(2.5)
		// translate(random(-450,-400), -400) ///-400,-200
		scale(4)
		translate(-300, -300) ///-400,-200

		push()
		angle1_3 = PI / 6
		for (var i6 = 0; i6 < 2; i6++) {
			generateRules1_3()
			len1_3 /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle1_3()

		pop()
		pop()

	}







	////////////底層線//////////////
	if (frameCount == 20 && rID3 == 4 && rID2 % 3 > 0) {

		push()
		scale(2.5)
		translate(-300, -300)
		angle2 = PI / 6
		for (var i3 = 0; i3 < 3; i3++) {
			generateRules2()
			len2 /= 1.25
		}
		translate(width / 2, height / 2)
		createTurtle2()

		pop()

	}
	//////////////////////////////////////

	////////////底層線2//////////////
	// 	if (frameCount == 19 && rID3 == 4 && rID2%3 >0   ) {

	// 		push()
	// 		scale(2.5)
	// 		translate(-300, -300)
	// 		angle2 = PI / 6
	// 		for (var i3_2 = 0; i3_2 < 3; i3_2++) {
	// 			generateRules2()
	// 			len2 /= 1.25
	// 		}
	// 		translate(width / 2, height / 2)
	// 		createTurtle2()

	// 		pop()

	// 	}
	// //////////////////////////////////////
	////////////隨機圖騰//////////////
	// 	if (frameCount == 20 && rID3 == 5  ) {

	// 		push()
	// 		scale(2.5)
	// 		translate(-300, -300)
	// 		angle3 = PI / 6
	// 		for (var i3_1 = 0; i3_1 < random(3,4); i3_1++) {
	// 			generateRules3()
	// 			len3 /= 1.25
	// 		}
	// 		translate(width / 2, height / 2)
	// 		createTurtle3()

	// 		pop()

	// 	}



	////////////////外框//////////////////////

	if (frameCount == 30) {

		Outer()

	}

}



function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot

	if (key === " ") reset(); //to generate variations
}

function doubleClicked() {
	save("c.png")

}