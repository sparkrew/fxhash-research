function Outer() {

	push()
	noFill()
	
	if(rID3<=5){
	stroke(random(30, 50), random(40, 60), random(30, 60))}
	
		if(rID3==4&&rID2 % 3 == 2){
	stroke(random(30, 50), random(20, 30), random(60, 70))}

	
	strokeWeight(20)
	
	if(rID3<=5){
	stroke(colorFlower, 50, 25)}
	
		if(rID3==4&&rID2 % 3 == 2){
	stroke(colorFlower, random(20, 30), random(60, 70))}
	
	
	
	rect(0, 0, 1000)
	pop()
	
	
	
	///////////////左/////////////////////////////////////////////////////////////////////////////////////////////
	push()	
		if(rID3==3||rID3==4||rID3==5){
for(var a=0;a<7;a++){
	stroke(random([randomGaussian(colorFlower,5),30]), random(30,60), random(20,60))
	noFill()

	strokeWeight(random(1,1.5))
	
///////////////左//////////////////
		beginShape()
		vertex(7, 0)
		vertex(7, 0)
		for (var y = 0; y < height+100; y+=50) {
		vertex(randomGaussian(7, 4), y)
		}
		endShape()
		//////////////右//////////////////	
			
			beginShape()
		vertex(width-7, 0)
		vertex(width-7, 0)
		for (var y2 = 0; y2 < height+100; y2+=50) {
		vertex(randomGaussian(width-7, 4), y2)
		}
		endShape()
		/////////////上//////////////////////////
			beginShape()
		vertex(0, 7)
		vertex(0, 7)
		for (var x = 0; x < width+100; x+=50) {
		vertex(x,randomGaussian(7, 4))
		}
		endShape()
			
			///////下//////////////
			beginShape()
		vertex(0, height-7)
		vertex(0, height-7)
		for (var x2 = 0; x2 < width+100; x2+=50) {
		vertex(x2,randomGaussian(height-7, 4))
		}
		endShape()
			
			
			
}}
	pop()
			
			
}		
			
			
			
	