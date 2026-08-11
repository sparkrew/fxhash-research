// Crashserver 
// Natural flow 

//noprotect
let grid = [];
let nlin, ncol;
let xori, yori;
let t, iter;
let itermax;

let huebase = 0;
let density = 0;
let step = 0;
let sw = 0;
let angleIdx = 0;
let variation = 0;
let isBW = false;
let isGradient = false;

let hue, sat, bri, apha;

function setup() {
	createCanvas(windowWidth, windowHeight)
	seed=floor(fxrand() * 1000); // FXHASH seed rand
	randomSeed(seed);
	noiseSeed(seed);
	
	huebase = floor(getR(0,360-60));
	density = floor(getR(2000,12000));
	step = getR(4,30);
	sw = getR(0.1,0.3);
	angleIdx = floor(getR(0,99));
	variation = getR(1,100);
	isBW = getR(0,1)<0.3 ? true : false;
	isGradient = getR(0,1)<0.6 ? true : false;
	
	window.$fxhashFeatures = {
	"Hue" : huebase,
	"Density": density,
	"Step": step,
	"Stroke weigth": sw,
	"Pattern": angleIdx,
	"Monochrome": isBW,
	"Gradien color": isGradient,
	"variation": variation
	}
	
	
	itermax = width;	
	t = 0;
	iter = 0;
	colorMode(HSB,360,100,100,1);
	background(0)
	
	itermax /= step;
	nlin = height/step;
	ncol = width/step;
	itermax = constrain(itermax, 350,width);
	
	for (let y=0; y<nlin; y++){
		grid[y] = [];
		for (let x=0; x<ncol; x++){
			let xpos = x*step;
			let ypos = y*step;
			let anglePattern = [((y*x)/((x-y)+map(variation,1,100,0.01,36)))*PI, (((x%floor(getR(1,36)))-y)/((1+1*-5)/2))*PI, 
						(x/nlin*(ncol-y+map(variation,1,100,0,height)))*PI, ((x/(nlin+map(variation,1,100,0,height/4)))*(ncol-nlin+y))*PI, 
						(y/nlin*tan((nlin)**-sin(x)-variation))*PI,	((x)**cos(sin(ncol/(tan(y)+1*variation)))*cos(y))*PI, 
						(x/sin(nlin*ncol+variation))*PI,
						(x/cos(nlin*ncol+variation/100)+0.001)*PI, (sin(x)/(tan(nlin+ncol+variation)+0.001))*PI, (sin(x)+tan(y*variation))*PI, 
						(tan(x*variation/100)+tan(y))*PI, (tan(x)/(tan(y)+variation/10))*PI, (cos(x+y*variation/10))*PI, (cos(x*(y+variation)))*HALF_PI, 
						(tan(x*(y+0.02))*tan(x/(y+0.01*variation)))*TWO_PI, (x*(sqrt(y)+variation))*HALF_PI]
			let angle = anglePattern[angleIdx%anglePattern.length];
			grid[y][x] = angle;
		}
	}
}

function draw() {
	//randomSeed(seed);
	if (iter<itermax){
		xori = constrain(randomGaussian(width/2, width/4), step*4, width-step*4);
		yori = randomGaussian(height/2,height/8);
		for (let i=0; i<density; i++){
			xori = constrain(xori,step,width-(step));
			yori = constrain(yori,0,height);
			strokeWeight(getR(0.1,sw));
            
			let iangle = grid[floor(yori/step)][floor(xori/step)];
			let xstep = step * cos(iangle);
			let ystep = step * sin(iangle);
			let xoffset = xstep * map(noise(t),0,1,-0.5,0.5);
			let yoffset = ystep * map(noise(t+50),0,1,-0.5,0.5)
			
			if (isBW){  // Black & white
				if (iter%10==0){
					sat=0;
					bri=0;
					alpha = getR(0.01,0.6);
				}
				else {
					sat=0;
					let disMid = dist(width/2, height/2, xori+step, yori+step)
					bri=map(disMid,0, height/2 + getR(0,150), 100,1);
					alpha = map(iter, 0, itermax, 0.5,0.05)
				}
				}
				
			else{  // Color
				if (isGradient){
					hue = map(yori, 0, height, (huebase+getR(60,120))%360, huebase);
					}
				else {hue = huebase;}
				alpha = getR(0.05,map(iter, 0, itermax, 0.2,0.9))
				if (iter%10==0){ // add white & gray touch
					sat = getR(0,50);
					bri = getRList([100,getR(0,100)]);
					}
				else {
					sat= getR(20,100);
					bri = getR(30,100);
					}
				}
			stroke(hue,sat, bri,alpha);
			
			line(xori, yori, xori+xstep, yori+ystep);
			xori += xoffset;
			yori += yoffset;
			if (xori>width-2*step || xori<step){break;}
			if (yori>height || yori<0){break;}
			t+=0.1;
			}
			iter++;
	}
	else {
		fxpreview();
		noLoop();
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

// Convert random() to fxrand()
function getR(min, max) {
  min = isNaN(min) ? 0 : min;
  return fxrand() * (max - min) + min;
}

function getRList(randList){
	return randList[Math.floor(fxrand() * randList.length)];
}

function mouseReleased(){
	noLoop();
}
