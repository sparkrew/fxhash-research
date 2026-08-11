// let colors = "e6e1c5-d4cb92-395c6b-bcd3f2-f24-fff-52489c-4062bb-59c3c3-ebebeb-f45b69-0c090d-f9c22e-53b3cb".split("-").map(a=>"#"+a)
let colors = "fa9f42-d00000-721817-0f0a0a-f24-0a122a-2e2d4d-2b4162-59c3c3-98c9a3-cfd2b2-0c090d-0a122a-53b3cb".split("-").map(a=>"#"+a)
let circles = []
let graphics
let structure;

function setup() {
  randomSeed(fxhash);
  noiseSeed(fxhash);
  structure = fxrand();
	createCanvas(windowWidth, windowHeight);
	pixelDensity(3)
	graphics = createGraphics(windowWidth, windowHeight)
	graphics.updatePixels()
	
	background(255);
	for(var i=0;i<width;i+=15){
		for(var t=0;t<height;t+=15){
			circles.push(new Circles({
				position: createVector(i, t),	
				velocity: createVector(noise(i/8)*10-3*structure,noise(t/8)*10-3*structure),	
				radius: random(120+10*structure)
			}))
		}
	}
}

function draw() {
	circles.forEach(position=>position.draw())
	circles.forEach(position=>position.update())
	image(graphics,0,0)
	push()
	pop()
}


class Circles{
	constructor(args){
		let def = {
			position: createVector(0,0),
			velocity: createVector(0,0),
			acceleration: createVector(0,0),
			radius: 100,
			dp: random(0.989,0.99+structure),
			angMult: random(0,360),
			color: random(colors)
		}
		Object.assign(def,args)
		Object.assign(this,def)
  }
  
	draw(){
		graphics.push()
    graphics.translate(this.position.x,this.position.y)
    graphics.fill(this.color)
    graphics.noStroke()
    graphics.square(this.radius, this.radius, this.radius, this.radius)
    graphics.pop()
    
  }
  
	update(){
		this.position.add(this.velocity)
		this.velocity.add(this.acceleration)
		let delta = createVector(this.position.x-width/2,this.position.y-height/2)
		let ang = delta.heading()
		let rr = delta.mag()
		this.velocity.x += -sin(ang*this.angMult+rr/5)/5*structure + cos(rr/10)/10*structure
		this.velocity.y += -cos(ang*this.angMult+rr/5)/5*structure+ sin(rr/10)/10*structure
		this.acceleration.x = (noise(this.position.x,this.position.y,5)-0.5)*1.1*structure
		this.acceleration.y = (noise(this.position.x,this.position.y,5000)-0.5)*1.1*structure
		this.velocity.mult(structure);
		this.radius *= this.dp*structure
	}
}
