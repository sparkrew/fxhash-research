let x = []
let y = []
let color = []
let ran = 0
let lightSize = 0

function setup() {
	createCanvas(windowHeight, windowHeight);
	background(0);
	stroke(255);
	strokeWeight(0.8);
	fill(0,0);
    ran = int(fxrand()*2)+3;
    lightSize = int(fxrand()*windowHeight)+(windowHeight*0.5);
	for(var i=0; i<(ran+1); i++){
		x[i] = int(fxrand()*(windowHeight-200))+100;
		y[i] = int(fxrand()*(windowHeight-200))+100;
	}
	for(var i=0;i<3;i++){
        color[i] = int(fxrand()*155)+100;
    }
    
}

function draw() {
	background(0);
    stroke(255);
    fill(0,0);
    
	for(var i=0; i<ran; i++){
		for(var j=0; j<(windowHeight*1.4); j+=50){
		stroke(255, (2000-j)/10);
		ellipse(x[i], y[i], j, j);
		}
	}
    stroke(0, 0);
    fill(color[0], color[1], color[2], 10);
    //stroke(color[0], color[1], color[2], (2000-j)/10);
    for(var j=0; j<lightSize; j+=50){
		ellipse(x[ran], y[ran], j, j);
    }
//    stroke(0, 0);
//    fill(color[0], color[1], color[2]);
//    ellipse(1100, 100, 100, 100);
	
}

