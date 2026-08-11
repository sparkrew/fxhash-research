function back0(){
	for(var a=0;a<width+50;a+=20){
	for(var b=0;b<height+50;b+=5){
		let ratio=map(b,0,height,0,1)
		// var clr1=color(100,55,5)   //25
		// var clr2=color(0,29,50)      //5
		
				var clr1=color(120,55,30)   //25
		var clr2=color(0,29,20)      //5
		
		// 	var clr1=color(48,12,78)   //25
		// var clr2=color(30,5,60) 
		
		var clr3=lerpColor(clr1,clr2,ratio)
		noStroke()
		// stroke(0,0,20,0.7)
		fill(clr3)
		ellipse(a,b,30+random(5),10+random(3))
	// rect(a,b,20,5)
	}
	}

}