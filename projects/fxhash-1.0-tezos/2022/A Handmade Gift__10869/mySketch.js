let colorBG;
let colorRB;

function setup() {	
	createCanvas(1000, 1000);
	colorBG=[[264,214,98],[165,222,228],[215,84,85]];
	colorRB=[[255,143,143],[177,163,184],[63,106,167]];
	let BGran=int(fxrand()*3);
	background(colorBG[BGran][0],colorBG[BGran][1],colorBG[BGran][2]);
	stroke(255);
	strokeWeight(0.3);
	fill(0,0);
}

function draw() {
	
	let pattern=random(0,1);
	if(pattern<0.3){
		for(var i=0; i<5; i++){
				for(var j=0; j<2000; j+=10){
					let x=fxrand()*900+50;
					let y=fxrand()*900+50;
					ellipse(x, y, j, j);
				}
			}
	} else if (pattern<0.6){
		for(var i=0;i<100;i++){
				let x=fxrand()*1000;
				let y=fxrand()*1000;
				for(var j=0; j<2000; j+=10){
					let randomX=fxrand()*160+x-80;
					let randomY=fxrand()*160+y-80;
					let radius=fxrand()*69+1;
					ellipse(randomX, randomY, radius, radius);
				}
			}
	} else if (pattern<0.8){
		for(var i=0;i<1200;i+=200){
				for(var k=0; k<1000; k+=50){
					for(var j=-100; j<2100; j+=10){
						let randomX=fxrand()*160+i-80;
						let randomY=fxrand()*160+k-80;
						let radius=fxrand()*69+1;
						ellipse(randomX, randomY, radius, radius);
					}
				}	
			}
	} else {
		for(var i=0;i<1200;i+=200){
				for(var k=0; k<1000; k+=50){
					for(var j=-100; j<2100; j+=10){
						let randomX=fxrand()*160+k-80;
						let randomY=fxrand()*160+i-80;
						let radius=fxrand()*69+1;
						ellipse(randomX, randomY, radius, radius);
					}
				}	
			}
	}
	
	// draw ribbon
	
	let ribbonWidth=int(fxrand()*40)+60;
	let ribbonPattern=fxrand()*2;
	let ribbonX=fxrand()*600+200;
	let ribbonY=fxrand()*600+200;
	let RBran=int(fxrand()*3);
	
	if(ribbonPattern<1){
		stroke(0,0);
		fill(0,3);
		for(var i=0; i<5; i++){
			rect(ribbonX-6+i*3,0,ribbonWidth,1000);
		}
		fill(colorRB[RBran][0],colorRB[RBran][1],colorRB[RBran][2]);
		rect(ribbonX,0,ribbonWidth,1000);
		stroke(255);
		strokeWeight(0.3);
		for(var i=5;i<ribbonWidth;i+=5){
			line(ribbonX+i,0,ribbonX+i,1000);
		}
		stroke(0,0);
		fill(0,3);
		for(var i=0; i<5; i++){
			rect(0,ribbonY-6+i*3,1000,ribbonWidth);
		}
		fill(colorRB[RBran][0],colorRB[RBran][1],colorRB[RBran][2]);
		rect(0,ribbonY,1000,ribbonWidth);
		stroke(255);
		strokeWeight(0.3);
		for(var i=5;i<ribbonWidth;i+=5){
			line(0,ribbonY+i,1000,ribbonY+i);
		}
		
	} else {
		
		stroke(0,0);
		fill(0,3);
		for(var i=0; i<5; i++){
			rect(ribbonX-6+i*3,0,ribbonWidth,1000);
		}
		fill(colorRB[RBran][0],colorRB[RBran][1],colorRB[RBran][2]);
		rect(ribbonX,0,ribbonWidth,1000);
		stroke(0,0);
		fill(255,100)
		ellipseMode(CENTER);
		let circleX=ribbonX+ribbonWidth/2;
		for(var i=10;i<1000;i+=15){	
			ellipse(circleX,i,4,4);
		}

		stroke(0,0);
		fill(0,3);
		for(var i=0; i<5; i++){
			rect(0,ribbonY-6+i*3,1000,ribbonWidth);
		}
		fill(colorRB[RBran][0],colorRB[RBran][1],colorRB[RBran][2]);
		rect(0,ribbonY,1000,ribbonWidth);
		stroke(0,0);
		fill(255,100)
		ellipseMode(CENTER);
		let circleY=ribbonY+ribbonWidth/2;
		for(var i=10;i<1000;i+=15){
			ellipse(i,circleY,4,4);
		}

		
	}	
	
	noLoop();
}