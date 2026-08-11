class PaintGauClosed extends PaintCoal{
	constructor(x,y,m,num){
		super(x,y,m,num)
	}
	
	gaussian(skew) {  
		let R1 = random();
		let R2 = random();
		let factor = Math.pow(9, Math.abs(skew) *-0.01);
		let temp = (R1 * cos(2 * Math.PI * R2) +1)/2;
		if(skew > 0)
			return 1 - Math.pow(temp, factor);   //temp的factor次方
		else
			return Math.pow(temp, factor);
		}
	
	show(spac,timePI,length){        
		source.noStroke()
		source.push()
			source.translate(this.pos.x,this.pos.y)
			// let towardAngle = this.vel.heading()
			// source.rotate(towardAngle)
			let strokeMax = 0.65
			let strokeMin = 0.0005
			let bluring = map(length,0,1000,0,200)
			
			for (let i=this.num/2*-1;i<this.num/2;i++) {
				let positionX = sin(timePI * PI * 4);
				let y = w[i]*i*spac*this.gaussian(0)
				let x = this.gaussian(positionX) * bluring
				let rRange = map(abs(i),0,this.num/2,strokeMax,strokeMin)
				// source.rotate(0)
				source.push()
					source.translate(x , y)
					source.fill(0,120)
					source.fill(this.color)
					source.circle(0,0, this.r*rRange)
				source.pop()
				source.push()
					source.translate(x , -y)
					source.fill(0,120)
					// source.fill(this.color2)
					source.circle(0,this.num , this.r*rRange)
				source.pop()
			}
		source.pop()
		// a+=aVar
	}
}