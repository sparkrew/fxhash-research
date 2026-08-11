let x = 0
let y
function setup() {
    randomSeed(fxrand()*100000)
	createCanvas(windowWidth, windowHeight);
	
	x = random(width)
	y = height
	colorMode(HSB, 360,100,100)
	background(240,100,30);
	noStroke()
	rectMode(CENTER)
	frameRate(1)
}

function draw() {
	background(240,100,30)
	main()
}

function main(){
	let n = 20
	for(let y=height; y>0;y-=0.5){	
		for(let i=0; i<n;i+=1){
			let dir = random()>1?1:-1
			fill(180,10,100,0.4*y/height)
			x = random(-500,500) + width*i/n + dir*noise(i*y, i*y*2, i*y*3)*(height-y)/2
			if(i == floor(n*0.4) && y){
					fill(45,80,100,1*y/height)
					x = random(-100,100) + width*i/n + dir*noise(i*y, i*y*2, i*y*3)*(height-y)/10
			}
			
			rect(
					x,
					height-y, 
					y/2,
					0.6
				)
		}
	}
}