var colz1 = "f10-e07a1a-364156-7d4e57-e0d21a".split("-").map(a=>"#"+a)
let colz2 = "5fe01a-ada296-1adce0-e01ad6-e01a1a-1a181b-564d65-3e8989-2cda9d-05f140-fff-ff622d".split("-").map(a=>"#"+a)
let fxcanvas
class Particle{
	constructor(args){
		let def = {
			p: createVector(0,0),
			v: createVector(0,0),
			angV: random(-40.1,120.02),
			ang: 10
		}
		Object.assign(def,args)
		Object.assign(this,def)
	}
	draw(){
		fxcanvas.push()
			fxcanvas.translate(this.p.x,this.p.y)
			// fxcanvas.translate(this.size.x/220,this.size.y/1)
			// fxcanvas.rotate(this.ang)
			// fxcanvas.translate(-this.size.x/1200,-this.size.y/1)
			fxcanvas.fill(this.color)
			fxcanvas.rect(3,5,this.size.x,this.size.y)
		fxcanvas.pop()
	}
	update(){
		this.p.add(this.v)
		this.p.x+=random()/2
		this.p.y+=random()/2
		this.p.x+=sin(this.p.y/(400+this.size.x*1) )
		
		this.p.y+=cos(this.p.x/(320+this.size.y*1))
		this.v.add(this.a)
		this.v.mult(0.9999)
		this.size.mult(0.99)
		this.ang+=this.angV+2+random()/3
	}
}
let pex =[]
function divide(x,y,w,h,z,colors=colz1){
	if (random()<0.5){
		colors = random([colz1,colz2])
	}
	if (random()<0.2+z/15 && w > 15 && h > 15 && z>1){
		push()
		fxcanvas.translate(width/2,height/2)
		fxcanvas.rotate(-sin(z/100)/100)
		fxcanvas.translate(-width/2,-height/2)
		let ratio = random()
		if (random()<0.5){
			divide(x,y,w*ratio,h,z-1,colors)
			divide(x+w*ratio,y,w*(1-ratio),h,z-1,colors)
		}else{
			divide(x,y,w,h*ratio,z-1,colors)
			divide(x,y+h*ratio,w,h*(1-ratio),z-1,colors)
		}
		pop()
	}else{
		let clr = random(colors)
		pex.push(new Particle({
			p: createVector(x,y),
			v: createVector(x/1000,y/1000),
			size: createVector(w,h),
			color: clr
		}))
		fxcanvas.fill(clr)
		fxcanvas.rect(x,y,w,h)
	}
}
let overAllTexture
function setup() {
	let seed=floor(999999*fxrand());
randomSeed(seed);
noiseSeed(seed);
	pixelDensity(2)
	createCanvas(1000, 1000);
	fxcanvas = createGraphics(width,height)
	divide(20,05,width,height,12)
	fxcanvas.noStroke()
	smooth();
	fxcanvas.drawingContext.shadowBlur= 40
	fxcanvas.drawingContext.shadowColor= color(0,120)
	
	
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	for(var i=0;i<width+100;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(1,noise(i/10,i*o/1)*random([2,220,380])))
		}
	}
	// overAllTexture.updatePixels()
}

function draw() {
   background(0);
	pex.forEach(p=>{
		p.update()
		p.draw()
	})
	image(fxcanvas,0,0)
	
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()

}

