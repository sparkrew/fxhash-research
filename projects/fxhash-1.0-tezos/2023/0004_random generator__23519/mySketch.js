let array1=["a","b","c","d","e","f","g","h","i"];
let array2=[];
let a=200;
let b=200;
let fxmap1;
let fxmap2;

function preload(){
	//loadData
	//loadTable
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(170);
	
	angleMode(DEGREES);
	fxmap1 = map(fxrand(),max(floor(fxrand())),min(floor(fxrand())),0,5,true);
	fxmap2 = map(fxrand(),max(floor(fxrand())),min(floor(fxrand())),width,height,true);
	//grid1(width/20);
	//grid2();
	//randomVectorGenerator(fxrand()*2000);
	//translate(fxmap2/y,400);
	//Stars();
	//circleByShape1();

}

function draw() {
	if(frameCount<(fxrand()*50)){
		grid1(width/20);
		grid2();
	  randomVectorGenerator(fxrand()*2000);
	  translate(fxmap2/y,400);
	  Stars();
	  circleByShape1();
	}
	else {
		fxpreview();
	}

	
}


function grid1(z){
	for(x=floor(width/20); x < width-(width/20); x++){
		for(y=floor(height/20); y < height-(height/20); y++){
				noFill();
				stroke(x-z);
				strokeWeight(0.2);
				rect(x-10,y-10,y/z,x-z);
				rect(x-10,y-10,x+10,y+z);
			  //interesting result rect(x,x+z,y,z);
				y=y+z*2;}
		randomVectorGenerator(x);
			
	 //x=x+z;
	 //console.log(x=width/20,y=height/20);

	}
	
}


function grid2(){
	for(x=100;x<width-100;x++){
		for(y=200;y<height-100;y++){
					noStroke();
					fill(width/2,y,height/2,y/4);
					ellipse(x,y,fxrand()*1000);
					y = y+fxrand()*1000;}
		randomVectorGenerator(x);
		x = x+fxrand()*1000;}
}


function randomVectorGenerator(z){
	
		let v=createVector(x+z,y+z);
		strokeWeight(24);	
		stroke(25,2);
	console.log(v.x,v.y);
		//line(width/2,height/2,tan(v.x+z),v.y+z);
		curve(fxrand()*100/x,tan(fxrand()*1000),width/4,tan(v.x+z),600,height/2,tan(v.x+z),v.y+z);
		push();
	  rotate(fxrand()*PI);
		curve(fxrand()*100/y,tan(fxrand()*z),width/2,300,tan(v.x+z),v.y+z,1500,1600);
		translate(fxrand()*200,fxrand()*300);
		rotate(fxrand()*PI/2);
		curve(fxrand()*100/x,tan(fxrand()*1000),width/4,tan(v.x+z),600,height/2,tan(v.x+z),v.y+z);
		pop();
	  noFill();
		stroke(100);
		strokeWeight(1.2);
		ellipse(width/2,height/2,tan(fxrand()*1000));
		//small dots across the screen
		strokeWeight(2);
		ellipse(fxrand()*y,fxrand()*y,tan(fxmap1));
		}



function Stars(){
		/// color settings set AngleMode for x and y
		angleMode(DEGREES);
		/// for loops for x and y
		for(r1=0; r1<width; r1++){
			for(angle1=0; angle1<width; angle1++){
		 			///generates circle coordinates
       			let x=r1*tan(angle1);
						let y=r1*sin(angle1);
				    strokeWeight(5);
						ellipse(x,y,fxmap2/10);
						angle1= angle1+fxmap2;
					}
			r1=r1+fxmap2;
			}
	}


    function circleByShape1(){
			r1=150;
			angleMode(DEGREES);
			noFill();
			strokeWeight(fxmap1);
			stroke(140,5);
			beginShape();
				for(a=0;a<360;a=a+0.5){
					let x=r1*cos(a)+fxmap2;
					let y=r1*sin(a)+ fxmap1;
					vertex(x,y);	
					endShape();
				}
      }

	/*
  	function CircleByShape2(){
			angleMode(degrees);
			noFill();
			strokeWeight(3);
			stroke(140,100,100,5);
		
		//shape1
			r1=250;
				beginShape();
				for(a=0;a<360;a=a+12){
					let x=r1*cos(a);
					let y=r1*sin(a);
					vertex(x,y);	
				}
				endShape();

		//shape2
		//defineborder
		stroke(120,100,230,10);
		//definesvariable
			r1=250;
		//set up shape
				beginShape();
		//for loop
				for(a=0;a<360;a=a+24){
		//create variable
					let x=r1*cos(a);
					let y=r1*sin(a);
					vertex(x,y);
			//endshape
			
				}
			endShape();
    }

	//bluemoving circle
	function movingCircle1(){		
		//set up color
		fill(100,100,230,2);
		noStroke();
		//change Angle mode 
		angleMode(degrees);
		//define variable radius
		let angle=mouseX;
		r1=150;
    let x1=r1*cos(angle);
		let y1=r1*sin(angle);
		//create circle
		ellipse(x1,y1,50,50);
		//increment rotation
		angle=angle+0.1;
	}	*/



