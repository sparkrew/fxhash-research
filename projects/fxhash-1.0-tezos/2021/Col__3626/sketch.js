let colors = ['#FF0200', '#FFB300', '#FCF500', '#A1EE2D', '#29216E', ' #583B73', '#3FB737', '#F55920', '#FFC947', '#185ADB'];

var weights = [3, 5, 7, 1, 3, 2];

var myScale = 1;

var nAgents = 500;

let agent = [];

var direction = 10;

var par = 1;

let border = 1;

function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100);
	rectMode(CENTER);
	strokeCap(SQUARE);

	background(10);

	for (let i = 0; i < nAgents; i++) {
		agent.push(new Agent());
	}
	
	smooth(8);

}

function draw() {
	
	for (let i = 0; i < agent.length; i++) 
	{
		agent[i].update();
	}

}

function fxrand(colors, weights) {
	let tt = 0;
	let sum = 0;

	for (let i = 0; i < colors.length; i++) {
		sum += weights[i];
	}

	let rr = fxrand(0, sum);

	for (let j = 0; j < weights.length; j++) {

		if (weights[j] >= rr) {
			return colors[j];
		}
		rr -= weights[j];
	}

	return tt;
}

class Agent {
	constructor() {
		this.p = createVector(random(border, width - border), random(border, height - border));

		this.pOld = createVector(this.p.x, this.p.y);

		this.step = 1.5;
		
		this.rad =  10;
		
		let temp = random(colors, weights);

		this.color = generateColor();
		this.color2 = generateColor();

		if (random(0, 1) > 0.5) {
			this.direction = 1;
		} else {
			this.direction = -1;
		}
		
		this.myrand = random(0,1);

		this.strokeWidth = 100;

	}
	
	getRad() 
	{
     return this.rad;
	}

	update() {

		if (random(0, 1) < 1.0e-4) {
			this.direction *= -1;
		}
			
		this.p.x += direction * vector_field(this.p.x, this.p.y).x * this.step ;
		this.p.y += direction * vector_field(this.p.x, this.p.y).y * this.step ;

		strokeWeight(this.strokeWidth);
    stroke(this.color);
		fill(100);
		
		if (this.rad > 1)
		{
			if(this.myrand < 5) 
			{
				//noStroke();
				//fill(this.color);
		    ellipse(this.p.x, this.p.y, this.rad,this.rad);
			  this.rad -= 0.1;
			}
			
		}else
		{
			//fill(this.color2);
			//stroke(100);
			//strokeWeight(1);
		  //ellipse(this.p.x, this.p.y, this.rad*2,this.rad*2);
			stroke(1);
			noFill();
			strokeWeight(0);
			rect(width/2,height/2,width,height)
      //noLoop();
		}


		this.pOld.set(this.p);
		

		
		//this.isOutside = false;

	}

}

function vector_field(x, y) {

	//myScale = map(-10,10,x,0,width);
	
	x = map(x, 0, width,  0, myScale);
	y = map(y, 0, height, 0, myScale);

	//let k1 = 5;
	let k1 = map(x,-myScale,myScale,-10,10);
	//let k2 = 3;
  let k2 = map(y,-myScale,myScale,-10,10);
	
	let u = sin(k1 * y) + cos(k2 * y);
	let v = sin(k2 * x) - cos(k1 * x);
  //let v = cos(k2*x);
	

	return createVector(u, v);
}

function vector_field2(x,y) {
  
  x = map(x,0,width,0,myScale);
  y = map(y,0,height,0,myScale);

  let u = -4.0*(floor(y) % 2);
	let v = -4.0*(floor(x) % 2);
  
  return createVector(u,v);
}

function fxrand(colors, weights) {
	let tt = 1;
	let sum = 1;

	for (let i = 0; i < colors.length; i++) {
		sum += weights[i];
	}

	let rr = fxrand(0, sum);

	for (let j = 0; j < weights.length; j++) {

		if (weights[j] >= rr) {
			return colors[j];
		}
		rr -= weights[j];
	}

	return tt;
}

function generateColor() {
	let temp = color(colors[floor(random(0, 10))]);

	myColor = color(hue(temp) + randomGaussian() * 10,
		saturation(temp) + randomGaussian() * 10,
		brightness(temp) * 0.75,
		random(99,100));
	return myColor;
}