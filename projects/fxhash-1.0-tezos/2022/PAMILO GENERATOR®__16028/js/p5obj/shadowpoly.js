//ooLuGCv41QVrameGjMowBuHpqqo28VdhzuRtLYANKpFB95FwMZr

//ooZ7ZKxgsB8SMfLdKkXwzMwf7YsVEYB9PFsv1whCbB7vJX2JqdC


//ooKwLP9hKdagPmBajQkujnuGr6k6VDH5MW4chEopDivBBhFwnKe


//ooE8u2mqeMtVneqWwVP196Aj1sxkaoJZVPkQPfas1C4syb4ArBg


//oohPBfN213HNdQpiuh5Gff46jQbzsMeSpugMfsHkReEGgweibYH
//Shadow Polys

//It represents de darkeness of us all.
//100% code. 0 %image. Made in p5js and a little shader for the texture. 
//p5js,polys,rect,creativecoding,coding,%100code,processing,shaders,glsl
class ShadowPolyManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "ShadowPoly1";
		this.dir = "Grid";
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
		_ps.noStroke();
		this.generate2(_ps);
		this.loaded = true;
		//this.kaka();
		this.RM.update();
		this.RM.updateDrawOnBuffers();
		_ps.image(this.RM.pgs[0],0,0,width,height);
		//this.RM.draw();
		}
    }


	
	update(){
	
	}

	generate2(_ps) {
		noStroke();
		//rectMode(CENTER);
		console.log("ASDAD");
	  let b1= 50;
	  let c1 = color(genR(100, 240)+b1, 
		genR(50, 125)+b1, 
		genR(20, 120)+b1);

	  let c2 = color(genR(130, 170)+b1/2, 
		genR(30, 90)+b1/2, 
		genR(80, 120)+b1/2);
	  _ps.background(c2);
	  

	  this.lrects(_ps);
	}
   
	lrects(_ps){
		let b1 = 70;

		let s1 = genR(10,20);
		let s2 = genR(5,20);
		let cnt = floor(genR(5,25));
		// cnt=1;
		for( let i =0; i< cnt; i++){
			let x1 = genR(width);
			let y1 = genR(height);

			let rdm = genR(20,50);
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
			//  ellipse(x1,y1,5,5);
			/*this.lrect(0,0,x2,y2,
			genR(200,400),genR(20,60),c1,c2,_ps);
			*/
			
			this.lrect(0,0,x2,y2,
			genR(50,300),genR(20,60),c1,c2,_ps);

			
			
			
			// genR(20,100), genR(20,100), c1);
			_ps.pop();
		}	
	}
	lrect(x1,y1,x2,y2,s1,s2,c1,c2,_ps){
		   let cnt = floor(genR(5,8)) ;
		   for(let i=0; i<cnt; i++){
			let idx = map(i,0,cnt-1,0,1);
			let a = map(i,0,cnt,0,TWO_PI);
			let xx = map(i,0,cnt-1,x1,x2);
			let yy = map(i,0,cnt-1,y1,y2);
			let cf = lerpColor(c1,c2,idx);
			let ss = map(i,0,cnt-1,s1,s2);
			_ps.push();
			_ps.translate(xx,yy);
			_ps.rotate(genR(TWO_PI));
			//rotate(a);
			
		
			this.srect(0, 0, ss, ss,cf,_ps);
			
			
			_ps.pop();
		   }
	}
           
	srect(x,y,w,h,c1,_ps) {
	  let cnt = 25;
	  let m = genR(1.3,2.0);
	  for (let i=0; i <cnt; i++) {
		let sw = map(i, 0, cnt-1, w*m, w);
		let sh = map(i, 0, cnt-1, w*m, w);
		if (i>cnt-2) {
		  _ps.fill(c1, 255);
		} else {
		  //_ps.fill(255-red(c1),255-green(c1),255-blue(c1), 20);
		  _ps.fill(0,0,0, 15);
		}
		_ps.noStroke();
		_ps.rect(x, y, sw, sh);
		
		if(i == cnt-1){
			//fill(255,0,0);
			//_ps.ellipse(x,y,sw*.5,sw*.5);
		//fill(255,0,0,255);
			//_ps.rect(x, y, sw*.1, sh*.1);
		}
	  }
	}			
}