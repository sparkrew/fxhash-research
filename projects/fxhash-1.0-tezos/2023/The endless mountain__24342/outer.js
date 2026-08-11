function outer() {
	push()
	//	layer2.translate(width/2,height/2)
	//	
	//layer2.rectMode(CENTER)
	push()
	layer2.noStroke()
	// layer2.stroke(0,0,20)
	
	if(Style5==0||Style5==3||Style5==4||Style5==5){
	layer2.fill(rID3, 11, 97)}
	if(Style5==1){
	layer2.fill(rID3, 0, 97)}
	if(Style5==2||Style5==6){
	layer2.fill(rID3, 15, 85)}
	
	
	
	
	
	
	// layer2.fill(random([57,20,80]),11,97)	

	layer2.rect(0, 0, 1000, 1000)
	// layer2.rect(a,b,20,20)
	// }}
	pop()
	//////////////////////////////////////////////////////////////////
	push()
	for (var b = 0; b < 110; b++) {
		for (var a = (b % 2) * 5; a < width + (b % 2) * 5; a += 10) {

			push()
			//layer2.translate((b % 2) * 5, 0)
			//layer2.textSize(5)
			// layer2.	stroke(0,70,70,0.5)
			layer2.fill((rID3+180)%360, 70, 70, outerRatio)

			if (Style4 == 0) {
				layer2.text(random(["▲", " ▼", "△", " ▽"]), a, b * 10)
			}
			if (Style4 == 1) {
				layer2.text(random(["◢", "◣", "◥", "◤","◁","▷", "△", " ▽"]), a, b * 10)
			}
			if (Style4 == 2) {
				layer2.text(random(["/","╳","▕"]), a, b * 10)
			}
			if (Style4 == 3) {
				layer2.text(random(["▙", "▟", "▛", "▜","▗ ▘","▖","▗"," ▘","▝","▚","▞"," "," "," "]), a, b * 10)
			}
			if (Style4 == 4) {
				layer2.text(random(["-"]), a, b * 10)
			}
			if (Style4 == 5) {
				layer2.text(random(["❖","◇","⟐"]), a, b * 10)
			}
			if (Style4 == 6) {
				layer2.text(random(["⊖", "⊘", "⊝"]), a, b * 10)
			}
			if (Style4 == 7) {
				layer2.text(random(["◇", "◆", "◈", "◊", "⟐"]), a, b * 10)  
			}
			if (Style4 == 8) {
				layer2.text(random(["╔","╦","╗","╠","═","╬","╣"]), a, b * 10)
			}
				if (Style4 == 9) {
				layer2.text(random(["★","✰","☆"]), a, b * 10)
			}
		if (Style4 == 10) {
				layer2.text(random(["Ä","Ã","Ç","Ê","Ë","Î","Ï","Ð","Ñ"]), a, b * 10)
			}





			pop()
		}
	}

	pop()







	/////////////////////////////////////////////////////////////////////


	push()
	// layer2.noFill()
	// layer2.strokeWeight(50)

	layer2.erase()

	layer2.fill(50, 15, 80)
	layer2.rect(100, 100, 800, 800, 20, 20, 20, 20)
	layer2.noErase()

	pop()


	pop()



}