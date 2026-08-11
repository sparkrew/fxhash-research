class GaleriaFedeManager extends ManagerTemplate {

	constructor(){
		super("Minigame 1");

		this.x =0; 
		this.y = 0;
		this.p = 250;
		this.loaded = false;

		this.imgs  = [];

		let imgsnum = 30;
		for(let i=0; i<imgsnum; i++){
			//this.imgs[i] = loadImage("img/fotosv/varela"+floor(genR(84))+".jpg");
			this.imgs[i] = loadImage("img/fotosv/varela"+i+".jpg");
		}

		this.maxsc = genR(0.4,0.8);
		if(genR(1) > .9){
			this.bordersize = genR(1.01,1.05);
		}else{
			this.bordersize = 1.0;
		}
		

		this.width2 = 800;
		this.height2 = 800;
	}

	setup() {

    }

    draw(_ps) {
		//_ps.ellipse(width/2,height/2,50,50);
		if(!this.lodaded){
			for(let i=0; i<2; i++){
				this.generate2(_ps);
			}
			this.lodaded =true;
		}

	}	

	generate2(_ps){
		background(0);
		_ps.blendMode(DIFFERENCE  );
		//_ps.blendMode(this.getgenRBlendMode());
	   
	   let h = genR(200,400);
	   let w = 0;
	   this.y = -this.height2/2;
	   this.x = -this.width2;
	   _ps.rectMode(CENTER);
	   this.y+=h/2;
	   for(let i= 0; i<this.p; i++){
		 
		 
		 if(i>0){
			this.x+=w/2;
		 }
		 _ps.fill(genR(255),genR(255),genR(255),150);
		 w = genR(100,300);
		 
		 if(this.x-w/2 > this.width2 || this.x > this.width2){
		   
			this.y+=h;
			this.x=-this.width2/2+w/2;
		 }else{
			this.x+=w/2;
		 }
		 
		 let c1 = color(255,0,0);
		 
	   
		 if(this.x > this.width2 && i%2 != 0){
			c1 = color(genR(255),genR(255),genR(255),genR(255));
		 }else{
			c1 = color(0,255,0);
		 }
		 _ps.textAlign(CENTER,CENTER);
		 //_ps.rect(this.x,this.y,w,h); 
		 

		 let activeimg = this.imgs[floor(genR(this.imgs.length))];
		 let sc1 =genR(this.maxsc);
		 
		// let hf = h*genR(1,4);

		 _ps.imageMode(CENTER);

		 _ps.push();
		 _ps.translate(this.x,this.y);
		 _ps.rotate(genR(-PI/4,PI/4));

		 //_ps.ellipse(0,0,wf,hf,500);
		// _ps.rect(0,0,wf,hf);
		_ps.noStroke();
		_ps.fill(0,255);
		_ps.rect(0,0,activeimg.width*sc1*this.bordersize,activeimg.height*this.bordersize*sc1);

		//_ps.texture(activeimg);
		//_ps.textureMode(IMAGE);
		//_ps.fill(100,100);
		//_ps.rect(0,0,activeimg.width*sc1,activeimg.height*sc1);
		
		_ps.tint(255,genR(200,255));
		
		_ps.image(activeimg,0,0,
			activeimg.width*sc1,
			activeimg.height*sc1)
		// this.poly(_ps,0,0,10,genR(150),genR(TWO_PI));
		 _ps.pop();
		 _ps.fill(255,255);
		 _ps.textSize(30);
		 _ps.textAlign(CENTER,CENTER);


	   }
	   
	}


		poly(_ps,x, y, numPoints, radius, angle) {
		_ps.beginShape();
		for (let i = 0; i < numPoints; i++) {
		  let a = angle + (TWO_PI / numPoints) * i;
		  let sx = x + cos(a) * radius;
		  let sy = y + sin(a) * radius;
		  _ps.vertex(sx, sy);
		}
		_ps.endShape(CLOSE);
	  }


	getgenRBlendMode() {
		const blendModes = [
		  BLEND,
		  ADD,
		  LIGHTEST,
		  DIFFERENCE,
		  EXCLUSION,
		  SCREEN,
		  REPLACE,
		  DODGE
		];

		let activeb = blendModes[Math.floor(genR(1) * blendModes.length)];
		console.log(activeb);

		return activeb;
	}
	update(){

	
	}
	
}



