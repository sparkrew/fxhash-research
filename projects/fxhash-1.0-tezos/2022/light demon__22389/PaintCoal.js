
class PaintCoal{
	constructor(x,y,m,num){
		this.pos = createVector(x,y)
		this.vel = createVector(0,0)
		this.acc = createVector(0,0)
		this.num = num
		this.mass = m
		this.r = m*2
		this.color = random(clrStroke[int(random(clrStroke.length))])
		// this.color = random(westCanyon)
		this.color2 = random(village)
		
		this.imgW = width;
		this.nw_z = 100*noise(10,100,frameCount/800)
		this.nx_z = 100*noise(100,100,frameCount/800);
		this.imgH = height;
		this.nh_z = 100*noise(20,100,frameCount/800)
		this.ny_z = 100*noise(200,100,frameCount/800);
	}
	
	applyForce(force){
		let f = p5.Vector.div(force,this.mass)
		this.acc.add(f)
	}
	
	update(){
		this.vel.x = 0.8
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.acc.set(0,0)
		this.vel.limit(2)
	}
	update1(){
		this.vel.y = 0.6
		this.pos.add(this.vel)
		this.vel.add(this.acc)
		// this.pos.x+=sin(frameCount/10)*1
	}

	show(spac,panX,panY){    //炭筆
		source.noStroke()
		source.push()
		source.translate(this.pos.x,this.pos.y)
		let towardAngle = this.vel.heading()
		source.rotate(towardAngle/25)
		
		let strokeMax = 0.65
		let strokeMin = 0.005
		let fx =70
		let fy = 70
		
		for(let i=this.num/2*-1;i<this.num/2;i++){
			let rRange = map(abs(i),0,this.num/2,strokeMax,strokeMin)
			let xVar = fx*noise(200,100,frameCount*i/(panX))*noise(200,100,frameCount/(100*panX))
			let yVar = fy*noise(200,200,frameCount*i/(panY))*noise(200,100,frameCount/(100*panY))
			
			source.rotate(a)
			if(frameCount%4<=1){
			source.fill(this.color)
			// source.fill(0,120)
			source.circle(xVar , (i*spac) , this.r*rRange)
			}
			// if(frameCount%5<=1){
			// source.fill(0,10)
			// // source.fill(this.color)
			// source.circle((i*spac) , yVar , this.r*rRange*0.6)
			// }
		}
		source.pop()
		// a+=aVar
	}
	
	glitchHorizon(startY, endY, span, offsetX) {
		let xDelta = width * 0.3
		for (let y = startY; y <= endY; y += span) {
			let w = this.imgW * 2 * noise(y * 0, 15, this.nw_z);
			let x = map(noise(y * offsetX, this.nx_z), 0, 1, -xDelta, xDelta);
			image(source, x, y, width, span, 0, y, width, span)
		}
	}
	glitchVertical(startX, endX, span, offsetY) {
		let yDelta = height * 0.3
		for (let x = startX; x <= endX; x += span) {
			let h = this.imgH * 2 * noise(x * 1.5, this.nh_z);
			let y = map(noise(x * offsetY, this.ny_z), 0, 1, -yDelta, yDelta);
			image(source, x, y, span, height, x, 0, span, height)
		}
	}
	
	edges(){
		if(this.pos.x>width){
			this.pos.x = 0
			this.pos.y +=this.num
		}
		// else if(this.pos.y>height){
		// 	this.pos.y  = 0
		// 	this.pos.x +=this.num
		// }
	}
	
}