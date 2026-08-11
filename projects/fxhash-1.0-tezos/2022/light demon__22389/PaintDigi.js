class PaintDigi extends PaintCoal{
	constructor(x,y,m,num){
		super(x,y,m,num)
	}
	
	show(spac,panX,panY){
		source.noStroke()
		source.push()
		source.translate(this.pos.x,this.pos.y)
		let towardAngle = this.vel.heading()
		// source.rotate(towardAngle/100)
		let strokeMax = 0.6
		let strokeMin = 0.0004
		let fx = 10
		let fy = 105
		
		for(let i=this.num/-2;i<this.num/2;i++){
			// let rRange = map(i,this.num/-2,this.num/2,strokeMax,strokeMin)
			let rRange = map(abs(i),0,this.num/2,strokeMax,strokeMin)
			let xVar = fx*noise(100,i/30,tan(i)*(i/panX))
			let yVar = fy*noise(200,i/100,tan(i)*(i/panY))
			
			source.rotate(a)
			if(frameCount%i<=5){
			// source.fill(0,120)
			source.fill(this.color)
			source.circle(xVar , i , this.r*rRange)
			}
			if(frameCount%i<=3){
			source.fill(255)
			source.fill(this.color)
			source.circle(xVar+i , i , this.r*rRange*0.65)
			// circle(i , yVar , this.r*rRange*0.45)
			}
		}
		source.pop()
		// a+=aVar
	}      //	s.show1(
}