//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq

//oogKrXTU5st5QPeh3gyVEttoN8RfvafsAn2oYG7PqDR1kMh8sQS


class ShadowPolyManager3{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "ShadowPoly3";
		this.dir = "ShadowPoly3";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		
		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/noisify1.frag', 0, "noise.frag");


	}
	

	
    draw(_ps) {
		//_ps.translate(-width/2,-height/2);
//        _ps.background(255,0,0);
		if(!this.loaded){
			//_ps.blendMode(DIFFERENCE);
			_ps.blendMode(EXCLUSION);
			 
			_ps.translate(-width/2,-height/2);
			_ps.noStroke();
			_ps.rectMode(CENTER);
			this.generate2(_ps);
			this.loaded = true;
			//this.kaka();
			//this.RM.update();
			//this.RM.updateDrawOnBuffers();
			//_ps.image(this.RM.pgs[0],0,0,width,height);
			//this.RM.draw();
		}
    }


	
	update(){
	
	}

	generate2(_ps) {
	
	  _ps.background(0);
	  

	  let cnln = floor(genR(4,5));
	  let cnln2 = 2;
	 
	  
	  this.lrects(_ps);
	  /*for(let i = 0; i<15; i++){
	   _ps.rect(random(width),random(height),50,50);
	  }*/
	}
   
	lrects(_ps){
		let b1 = 70;

		let s1 = genR(10,20);
		let s2 = genR(5,20);
		let cnt = floor(genR(4,7));
		// cnt=1;
		for( let i =0; i< cnt; i++){
			let x1 = genR(width);
			let y1 = genR(height);
				
				
				x1 = map(i,0,cnt,width*2/10,width*8/10);
			let rdm = genR(20,700);
			let x2 = genR(-rdm,rdm);
			let y2 = genR(-rdm,rdm);

			let idx = map(i,0,cnt-1,0,1);
			let xx = lerp(x1,x2,idx);
			let yy = lerp(y1,y2,idx);

			let c1 = color(genR(100, 240)+b1, 
			genR(50, 125)+b1, 
			genR(20, 120)+b1);

			let c2 = color(genR(100, 240)+b1, 
			genR(50, 125)+b1, 
			genR(20, 120)+b1);
			_ps.push();
			_ps.translate(x1,y1);
			_ps.rotate(0);
			_ps.fill(255,0,0);
			//  ellipse(x1,y1,5,5);
			/*this.lrect(0,0,x2,y2,
			genR(200,400),genR(20,60),c1,c2,_ps);
			*/
			
			/*this.lrect(0,0,x2,y2,
			genR(50,300),genR(20,60),c1,c2,_ps);*/
			
			this.lrect(0,0,x2,y2,
			genR(width*0.02,width*0.25),genR(20,60),c1,c2,_ps);
			
			// genR(20,100), genR(20,100), c1);
			_ps.pop();
		}	
	}
	lrect(x1,y1,x2,y2,s1,s2,c1,c2,_ps){
		   let cnt = floor(genR(1,4)) ;
		   for(let i=0; i<cnt; i++){
			let idx = map(i,0,cnt-1,0,1);
			let a = map(i,0,cnt,0,TWO_PI);
			let xx = map(i,0,cnt-1,x1,x2);
			let yy = map(i,0,cnt-1,y1,y2);
			let cf = lerpColor(c1,c2,idx);
			let ss = map(i,0,cnt-1,s1,s2);
			_ps.push();
			_ps.translate(xx,yy);
			if(i != 0){
					_ps.rotate(genR(TWO_PI));
			
			}
			//rotate(a);
			this.srect(0, 0, ss, ss,cf,_ps);
			_ps.pop();
		   }
	}
           
	srect(x,y,w,h,c1,_ps) {
	  let cnt = 10;
		   cnt = floor(genR(2,4));
	
	  let m = genR(1.3,1.8);
		  m = genR(1.3,7.8);
	  for (let i=0; i <cnt; i++) {
		  
		 let b1= 50;
	  let c1 = color(255);
	
		  
		  
		let sw = map(i, 0, cnt-1, w*m, w);
		let sh = map(i, 0, cnt-1, w*m, w);
		if (i>cnt-2) {
		  _ps.fill(c1, 255);
		} else {
		  //_ps.fill(255-red(c1),255-green(c1),255-blue(c1), 20);
		  //c1.setAlpha(genR(255));
			 c1 = lerpColor(c1,color(255),0.05);
		     c1.setAlpha(10);
			_ps.fill(c1);
		}
		//_ps.ellipse(x,y,sw,sw);
		//_ps.rect(x,y,sw,sw);
		let border = 80;
		//
		if(fxrand() < 0.5){
			_ps.rect(x,y,sw*genR(0.8,1),sw*genR(0.8,1));
		}else{
			if(uniforms_fxhash.ispoly < 0.3){
				star(x, y, sw*genR(0.2,1.), sw*genR(0.2,1.), floor(genR(2,5)),_ps);
			}else{
				_ps.ellipse(x,y,sw*genR(0.8,1),sw*genR(0.8,1));
			}
			//
		}
	  }
	}
	poly(){
	
	}

	
}