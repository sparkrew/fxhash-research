// Copyright 2022 Lilyan.
let d=[];
function setup() {

	createCanvas(windowHeight, windowHeight);
	seed = fxrand() * 6000000;
	randomSeed(seed);
	background(random(255));
	rectMode(CENTER);
}
function draw() {

	noStroke();

	push();
  // blendMode(LIGHTEST);
	for(let x=0; x<height/2+height/10;x+=height/10){
		 for(let y =0;y<height/2+height/10;y+=height/10){
			 fill(random(255),random(50),random(255),2);
			 ellipse(y+height,x+height,random(height/2)-100);
		 }
	}
	pop();

	push();
// blendMode(HARD_LIGHT);
	for(let x=0; x<height/2+height/10;x+=height/10){
		 for(let y =0;y<height/2+height/10;y+=height/10){
			 fill(random(255),random(50),random(255),100);
			 rect(x,y,random(height*2),random(height*2),random(150));
			 ellipse(x,y,random(height*2)-100);
		 }
	}
	pop();

	// push();
	// blendMode(LIGHTEST);
	// for(let x=0; x<height/2+height/10;x+=height/10){
	// 	 for(let y =0;y<height/2+height/10;y+=height/10){
	// 		 fill(random(255),random(100),random(255),10);
	// 		 rect(x,y,random(height),random(height),random(height));
	// 	 }
	// }
	// pop();

	push();
	translate(height/2,height/2);
	for(let i=0;i<10;i++){
		d[i]=random(height+height+height,height+height+height);
	}
	for(let i=0; i<d.length;i++){
		noFill();
		stroke(random(255),random(255),random(255),100);
		strokeWeight(0.5);
		// fill(random(255),random(255),random(255));
		ellipse(random(height+height),random(height+height),d[i],d[i]);
	}
	pop();

	push();
	translate(height/2,height/2);
	for(let i=0;i<2;i++){
		d[i]=random(height+height+height,height+height+height);
	}
	for(let i=0; i<d.length;i++){
		noFill();
		stroke(random(255),random(255),random(255),100);
		strokeWeight(1);
		// fill(random(255),random(255),random(255));
		ellipse(random(height+height),random(height+height),d[i],d[i]);
	}
	pop();



	push();
	for(let i=0;i<800;i++){
		d[i]=random(0.1,4);
	}
	for(let i=0; i<d.length;i++){
		fill(random(255),random(255),random(255));
		ellipse(random(height+height),random(height+height),d[i],d[i]);
	}
	pop();

push();
for(let i=0;i<500;i++){
	d[i]=random(0.1,2);
}
for(let i=0; i<d.length;i++){
	fill(255);
	ellipse(random(height+height),random(height+height),d[i],d[i]);
}
pop();


push();
// blendMode(LIGHTEST);
translate(height/2,height/2);
noFill();
stroke(0);
strokeWeight(10);
rect(0,0,height-50,height-50);
pop();


push();
// blendMode(LIGHTEST);
translate(height/2,height/2);
noFill();
stroke(220);
strokeWeight(52);
rect(0,0,height,height);
pop();


noLoop();
}
