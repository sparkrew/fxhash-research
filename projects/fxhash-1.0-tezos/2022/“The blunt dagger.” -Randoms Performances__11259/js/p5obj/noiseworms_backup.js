
class NoiseWormsManager {
	//var cosos = [];

   

	constructor(){
		
		
		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/noisify1.frag', 0, "noise.frag");

		this.generate2();
	}
	generate2(){
					this.cosos = [];
		//maxpasadas = 9;
		this.name = "Noise Worms ";
		this.dir = "Noise Worms ";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		
		
		let cnt = floor(genR(20,150));
		cnt = floor(genR(5,15));
		let cnt2 = floor(genR(2,3));
		let b = 50;		
		for(let k = 0; k<cnt2; k++){
			for(let i=0; i<cnt; i++){
				let y = map(k,0,cnt2-1,windowHeight*1/8,windowHeight*7/8);
				let x = map(i,0,cnt-1,windowWidth*0/10,windowWidth*10/10);
				let c1 = color(genR(150,200)+b,genR(100,200)+b,genR(100,200)+b);
				let c2 = color(genR(100,200)+b,genR(100,200)+b,genR(150,200)+b);		
				if(i%2 == 0){
					this.cosos.push(new noisePoint(x,y,c1,c2));	
				}else{
					this.cosos.push(new noisePoint(x,y,c2,c1));
				}				
			}
		}
		
	}
	
	
    draw(_ps) {
		
		if(!this.loaded){
			this.loaded = true;
			_ps.background(0);
			
			/*osc.frequency.value = "C4";
			osc.frequency.rampTo("C2", 2);
			osc.start().stop("+8");
			*/
		}
		/*
		_ps.noStroke();
		_ps.translate(-width/2,-height/2);
		
		_ps.fill(255,0,0);
		for(let i=0; i<this.cosos.length; i++){
			this.cosos[i].display(_ps);
		}*/
		//_ps.translate(-width/2,-height/2);
		
		_ps.noStroke();
		_ps.fill(255,0,0,100);
		//_ps.ellipse(mouseX-width/2,mouseY-height/2,100,100);
		//_ps.ellipse(mouseX,mouseY,100,100);
		
		let cnt = 1;
		for(let k=0; k<cnt; k++){
		
			
			let a = map(k,0,cnt,0,TWO_PI);
			_ps.push();
			_ps.translate(width/2,height/2);
			_ps.rotate(a);
			_ps.translate(-width/2,-height/2);
			
			for(let i=0; i<this.cosos.length; i++){
				this.cosos[i].display(_ps);
			}
			_ps.pop();
		}
		this.RM.update();
		_ps.image(this.RM.pgs[0],-width/2,-height/2,width,height);
		//_ps.translate(-width/2,-height/2);
		//_ps.ellipse(mouseX,mouseY,100,100);
    }
	
	update(){
	
	}	
}

class noisePoint{
	 
	 
	 constructor(_x,_y,_c1,_c2){
		 
		this.x = _x;
		this.y = _y;
		
		
		this.seed = genR(1000000);
		
	
		
		let b = 30;		
		this.c = color(genR(100,200)+b,genR(100,200)+b,genR(100,200)+b);
		this.c2 = color(genR(100,200)+b,genR(100,200)+b,genR(100,200)+b);

		this.c = _c1;
		this.c2 = _c2;
		this.c2 = color(255);
		this.life = 1;
		
		this.mins = random(2,10);
		this.maxs = random(10,100);
		
		this.shadows = 1.5;
		this.cnt2 = floor(genR(20,30));
		
		this.ampx = genR(50,200);
		
		this.xspeed = genR(0.0,2.0);
	 }
	 
	 display(_ps){
		 
		 
		 
		 
		let amp = 100; 
		
		let yf = this.y+lerp(noise(millis()*0.00001*this.xspeed+this.seed*15000),-amp,amp);
		let xf = this.x+lerp(noise(millis()*0.0001*this.xspeed+this.seed*150),-amp*8.,amp*8.);	
		    
			
			
			xf = this.x+sin(millis()*0.01+this.seed*1000.)*map(this.life,1.0,0.0,this.ampx,this.ampx*0.5);
			yf = this.y+map(noise(millis()*0.0005+this.seed*15000),0,1,-height,height);
		
		
		let s = noise(millis()*0.006+4020*this.seed)*500*map(this.life,1,0,1,0.0);
			
			//s = map(s,1,0,this.mins,this.maxs)*this.life;

		let b = noise(millis()*0.001+this.seed*1000.)*255;
		let cindex = sin(this.life*TWO_PI*5.+this.seed*500.)*.4+.6
		
		
		if(this.life < 0.3){
			this.life-=genR(0.001,0.001);
		}else{			
			this.life-=genR(0.004,0.008);
		}
		this.life = constrain(this.life,0.0,1.0);
		
		
		let cf2 = lerpColor(this.c,this.c2,this.life);
		let cf = lerpColor(cf2,color(0),cindex);
			cf = lerpColor(this.c,color(0),genR(1));
		
		for(let k=0; k<this.cnt2; k++){
			let ss = map(k,0,this.cnt2-1,this.shadows*(s+this.mins)*1.8,(s+this.mins)*1.4);
			let alf = map(k,0,this.cnt2-1,0,255);
			if(k == this.cnt2-1){
				cf.setAlpha(alf);
				_ps.fill(cf);		
			}else{
				cf.setAlpha(5);
				_ps.fill(cf);
			}
			if(this.life>0){
				_ps.ellipse(xf,yf,ss,ss);
			}
		}
	 }
}