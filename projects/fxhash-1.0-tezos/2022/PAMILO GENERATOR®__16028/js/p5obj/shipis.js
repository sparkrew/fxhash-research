//ooLuGCv41QVrameGjMowBuHpqqo28VdhzuRtLYANKpFB95FwMZr

//ooZ7ZKxgsB8SMfLdKkXwzMwf7YsVEYB9PFsv1whCbB7vJX2JqdC


//ooKwLP9hKdagPmBajQkujnuGr6k6VDH5MW4chEopDivBBhFwnKe


//ooE8u2mqeMtVneqWwVP196Aj1sxkaoJZVPkQPfas1C4syb4ArBg


//oohPBfN213HNdQpiuh5Gff46jQbzsMeSpugMfsHkReEGgweibYH
//Shadow Polys

//It represents de darkeness of us all.
//100% code. 0 %image. Made in p5js and a little shader for the texture. 
//p5js,polys,rect,creativecoding,coding,%100code,processing,shaders,glsl
class Shipym{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "shipi";
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
			//_ps.noStroke();
			this.generate2(_ps);
			this.loaded = true;
		//	this.loaded = true;
			//this.kaka();
			/*this.RM.update();
			this.RM.updateDrawOnBuffers();
			_ps.image(this.RM.pgs[0],0,0,width,height);*/
			//this.RM.draw();
		}
    }


	
	update(){
	
	}

	generate2(_ps) {
		//background(0, 0, 20);

		_ps.fill(genR(50, 255));
		_ps.rect(0, 0, width, height);
		this.drawSky(_ps);
		this.drawMountains(_ps);
		//drawCity();
		
		this.drawWater(_ps);
		// drawFog();
		let cntships = 8;
		let xsep =0;
		for (let i=0; i <cntships; i++) {
			xsep+=genR(230, 400);
			let x = genR(width*1/8, width*7/8);
			let y = genR(height/2, height);
			this.drawShip(_ps,xsep, y);
		}

	}

    setup(){

	}
	runAudio(){

	}
	drawShip(_ps,x,y) {

		let c1 = color(200);
	  
		c1 = lerpColor(c1, color(255), 0.7);
	  
		let w = genR(80, 150);
		let h = genR(20, 40);
	  
		let cntvelas =10;
		let velhor = genR(1);
		for (let k =0; k<cntvelas; k++) {
			let hpalo = genR(100, 200);
			let xp =genR(x-w, x+w);
		  // xp = x;
		  //paloprincipal
		  _ps.stroke(genR(80, 200), 50);
		  _ps.strokeWeight(8);
		  _ps.line(xp, y, xp, y-hpalo);
	  
	  
		  //vela de lineas
		  _ps.strokeWeight(1);
		  let cnt = floor(genR(8, 2));
		  let x1 = xp;
		  let y1 = y-hpalo;
		  let y2 = y-h;
		  for (let i =0; i<cnt; i++) {
			let x2 = map(i, 0, cnt-1, x-w-h, x+w+h);
			_ps.line(x1, y1, x2, y2);
		  }
	  
		  //vela posta
		  let hvel = 0;
		  let wvel = w;
		  if (genR(1) <.75) {
	  
			_ps.fill(genR(200, 255), genR(0, 100));
			_ps.beginShape();
			_ps.vertex(xp, y1);
			_ps.vertex(x+w+h, y2-hvel);
			_ps.vertex(xp, y-h-hvel);
			_ps.endShape();
		  } 
		}
	
		//base
		_ps.fill(c1);
		_ps.noStroke();
		_ps.beginShape();
		_ps.vertex(x-w, y);
		_ps.vertex(x-w-h, y-h);
		_ps.vertex(x+w+h, y-h);
		_ps.vertex(x+w, y);
		_ps.endShape(CLOSE);
	  
		//base2
		_ps.fill(lerpColor(c1, color(0), 0.5));
		_ps.noStroke();
		_ps.beginShape();
		_ps.vertex(x-w, y);
		_ps.vertex(x-w-h/2, y-h/2);
		_ps.vertex(x+w+h/2, y-h/2);
		_ps.vertex(x+w, y);
		_ps.endShape(CLOSE);
	  }
	   drawWater(_ps) {
		_ps.fill(0, 0, 30);
		_ps.rect(0, height/2, width, height/2);
	  
		let c1 = color(50);
		let c2 = color(120, 120, 170);
		let cnt = 2000;
		for (let i =0; i<cnt; i++) {
		  let x= genR(width);
		  let y = map(i, 0, cnt-1, height/2, height);
	  
		  let idx = map(i, 0, cnt, 0, 1);
		  let cf = lerpColor(c2, c1, idx);
	  
		  let cnt2 = floor(genR(5, 10));
		  _ps.rectMode(CENTER);
		  for (let k=0; k<cnt2; k++) {
			cf.setAlpha(genR(5));
			_ps.fill(cf);
			_ps.rect(x, y, genR(400), genR(25));
		  }
		  _ps.rectMode(CORNER);
		}
	  }
	    drawMountains(_ps) {
		_ps.noStroke();
		let cnt = floor(genR(100, 300));
		let cnt2 = floor(genR(4, 900));
		let h = 30;
		let c1 = color(255);
		//c1 =cmoon;
		let c2 = color(0, 0, 20);
		for (let k=0; k<cnt2; k++) {
		  let amp = map(k,0,cnt2-1,400,0);
		  h = map(k, 0, cnt2-1, 30, 0);
		  let cf = lerpColor(c1, c2, map(k, 0, cnt2-1, 0, 1));
		  _ps.fill(cf);
		  _ps.beginShape();
		  _ps.vertex(0, height/2);
		  for (let i=0; i<cnt; i++) {
			let f = i*.05;
			let x = map(i, 0, cnt-1, 0, width);
			let y = height/2
			  -map(noise(f), 0, 1, 0, amp)
			  -h;  
			  _ps.vertex(x, y);
		  }
		  _ps.vertex(width, height/2);
		  _ps.endShape(CLOSE);
		}
	  }
	  drawSky(_ps) {
		_ps.noStroke();
		let cnt = 1500;
		for (let i=0; i<cnt; i++) {
		  let cf = color(genR(255));
		  cf.setAlpha(genR(15));
		  _ps.fill(cf);
		  _ps.ellipse(genR(width), 
			genR(0, height/2), 
			genR(100, 300), 
			genR(100, 300));
		}
	  }
	 drawFog(_ps){
		
		let cnt =20;
		let cnt2 =1800;
		let x1=0; 
		let y1 =height/2;
		let x2 =width;
		
		for(let i=0; i<cnt; i++){
		  let xx = map(i,0,cnt-1,width*0/8,width*8/8);
		  let rdm = 75;
		  for(let k=0; k<cnt2; k++){
			_ps.fill(genR(220,255),2);
			let xxx = xx+ genR(-rdm,rdm);
			let yy = height/2 +genR(-rdm/8,rdm*3);
			let ys = abs(height/2-yy);
			_ps.ellipse(xxx,
			yy,
			genR(15),
			genR(15));
		  }
		}
		
	  }
	   drawCity() {
		let x1 = width/2; 
		let y1 = height/2; 
	  
		let cnt = 40;
		let w = genR(200, 100);
	  
	  
		//let hc = genR(70);
		_ps.rectMode(CENTER);
		for (let i=0; i<cnt; i++) {
		  let xx = map(i, 0, cnt-1, x1-w, x1+w);
		  let y= height/2;
		  let wc = genR(50);
		  let hc = genR(120);
		  _ps.fill(genR(170, 255));
		  // rect(xx,y-hc,wc,hc);
		  let cnt2= floor(genR(3, 150));
		  for (let k=0; k<cnt2; k++) {
			let rdm = 120;
			let xrdm = genR(-rdm, rdm);
			let yrdm = genR(rdm);
			this.drawHouse(_ps,xx+xrdm, y-hc/2+yrdm, wc, hc);
		  }
		}
		_ps.rectMode(CORNER);
	  }
	   drawHouse(_ps,x,y,w,h) {
		_ps.fill(genR(0, 255), 50);
		_ps.rect(x, y, w, h);
	  
		let ama = genR(100);
		_ps.fill(0,0, genR(80), genR(100));
		_ps.rect(x, y, w*.9, h*.9);
	  }
}

