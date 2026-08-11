class MiniGameManager1 extends ManagerTemplate {

	constructor(){
		super("Minigame 1");



		this.RM = new RenderManager();
		this.RM.addShader("shaders/generative/starnest_minigame.frag", 0, "starnest.frag");

		this.RM2 = new RenderManager();
		this.RM2.addShader("shaders/imageprocessing/minigame_bullets.frag", 0, "bullets.frag");

		this.RM3 = new RenderManager();
		this.RM3.addShader("shaders/generative/front.frag", 0, "front.frag");

		this.RM4 = new RenderManager();
		this.RM4.addShader("shaders/imageprocessing/minigame_ship.frag", 0, "front.frag");

		//this.RM.addShader('shaders/generative/noisify1.frag', 0, "noise.frag");
		this.audioInit = false;
		
		this.puntos = 10;
		
		this.masterVolume = -9; // in decibel.
		this.grabys = [];
		this.bullets = [];
		this.bullets_enemy = [];
		this.meteors = [];
		this.enemys = [];
		this.scale ;
		this.reverb ; 
		this.isPlaying = true ;
		this.isPlayingFinalboss = false ;
		this.isPlayingFinalbossTrigger = false ;
		
		
		this.stars = new Stars();


		this.stars2 = new StarsSystem();
		this.finalboss = 
		
		
		this.c1 = color(genR(255),genR(255),genR(255));
		this.c2 = color(genR(255),genR(255),genR(255));
		
		
		this.durenemy = 10000;
		this.lasttime_ene = 0;
		
		
		let cnt_grab = 0;
		for(let i=0; i<cnt_grab; i++){
			let ama = genR(100,255);
			let c = color(ama,ama,100);
			this.grabys[i] = new Grabp(
							createVector(random(windowWidth),random(windowHeight)),
							c);
		}
		console.log(uniforms_fxhash.meteormaxsize);
		for(let i=0; i<u_fxhash.meteorssize; i++){
		
			let c = this.c1;
			this.meteors[i] = new Meteor(
							createVector(genR(windowWidth),genR(windowHeight)),
							createVector(genR(-1,1),genR(-1,1)),
							c,
							uniforms_fxhash.meteormaxsize,
							0);
			
		}
		this.PJ = new PJ(createVector(windowWidth/2,windowHeight/2)
						,12,
						color(genR(255),genR(255),genR(255)));
		
		this.ltbullet = 0
		this.bulletduration = 100;

		this.pgbullets = createGraphics(windowWidth, windowHeight);
		//this.pgbullets = new PGraphics(windowWidth, windowHeight);

		this.pgnaves = createGraphics(windowWidth, windowHeight);
	}

	initAudio(){
		if(!this.audioInit){
			  Tone.Master.volume.value = this.masterVolume;
			  gmixer = new Tone.Gain();
			  this.reverb = new Tone.Reverb({
				wet: 0.5, // half dry, half wet mix
				decay: 30 // decay time in seconds
			  });
			  gmixer.connect(this.reverb);
			  this.reverb.toDestination();
			  this.audioInit = true;
		}
	}
	setup() {
		this.RM.objts[0].localUniformsValues[0] = 0.14;
		this.RM.objts[0].localUniformsValues[1] = 0.38;
		this.RM.objts[0].localUniformsValues[2] = 0.57;
		this.RM.objts[0].localUniformsValues[3] = 0.42;
		this.RM.objts[0].localUniformsValues[4] = 0.91;
		this.RM.objts[0].localUniformsValues[5] = 0.46;
		this.RM.objts[0].localUniformsValues[6] = 0.5 ;
		this.RM.objts[0].localUniformsValues[7] = 0.5;
		this.RM.objts[0].localUniformsValues[8] = 0.29;
		this.RM.objts[0].localUniformsValues[9] = 0.36;
		this.RM.objts[0].localUniformsValues[10] = 0.16;
		this.RM.objts[0].localUniformsValues[11] = 0.89;
		this.RM.objts[0].localUniformsValues[12] = 0.73;
		this.RM.objts[0].localUniformsValues[13] = 0.58;
    }
    draw(_ps) {
		let b = 50;
		_ps.background(0,0,0,120);
		
		_ps.noStroke();


		this.RM.updateDrawOnBuffers()
		this.RM.update();

		_ps.image(this.RM.pgs[0], 0, 0, width, height);
		//this.RM.draw();
		//genR(windowWidth*2),genR(windowHeight*2)
		
		
		let scamp = 50;

		//_ps.translate(windowWidth / 2, windowHeight / 2);
		/*_ps.push();
		_ps.translate(map(this.PJ.p.x,0,windowWidth,-scamp,scamp),
					  map(this.PJ.p.y,0,windowHeight,-scamp,scamp));
		this.stars.display(_ps);

		_ps.pop();*/

		//this.stars2.display(_ps,this.PJ.p.x, this.PJ.p.y);
		
		if (this.isPlaying) {
			this.pgbullets.background(0);
			this.pgnaves.background(0);
			for(let i=0; i<this.grabys.length; i++){
				this.grabys[i].display(_ps);
			}
			for(let i=0; i<this.bullets.length; i++){
				this.bullets[i].display(this.pgbullets);
			}
			for(let i=0; i<this.bullets_enemy.length; i++){
				//this.bullets_enemy[i].display(_ps);
				this.bullets_enemy[i].display(this.pgbullets);
			}
			for(let i=0; i<this.meteors.length; i++){
				this.meteors[i].display(_ps);
			}
			for(let i=0; i<this.enemys.length; i++){
				this.enemys[i].display(this.pgnaves);
			}
			this.PJ.display(this.pgnaves);
			//this.RM2.objts[0].localUniformsValues[0] = this.pgbullets;
			this.RM2.updateDrawOnBuffers();
			this.RM2.objts[0].sh.setUniform("tx2", this.pgbullets);
			this.RM2.update();

			this.RM4.updateDrawOnBuffers();
			this.RM4.objts[0].sh.setUniform("tx2", this.pgnaves);
			this.RM4.update();

			_ps.image(this.RM2.pgs[0], 0, 0, width, height);

			//this.RM3.update();
			//this.RM3.updateDrawOnBuffers();

			
			//_ps.image(this.pgbullets, 0, 0, width, height);
			

			//_ps.image(this.pgnaves, 0, 0, width, height);
			_ps.image(this.RM4.pgs[0], 0, 0, width, height);
		}else{
			background(0);
		}
	}	
	update(){
		
		this.PJ.update();
		
		if(millis()-this.ltbullet > this.PJ.startf && mouseIsPressed){
				this.addBullet();
				this.ltbullet = millis();
			}
		if(this.meteors.length == 0){
			this.isPlaying = false;
			document.getElementById("gameover").style.visibility = "visible";
			document.getElementById("gameover").innerHTML = "YOU WIN!";
		}
		
		
		for(let i=this.bullets.length-1; i>=0; i--){
			this.bullets[i].update();			
			for(let k=this.meteors.length-1; k>=0; k--){
				if(this.meteors[k] && this.bullets[i]){
					let d = this.bullets[i].p.dist(this.meteors[k].p);
					if(d < 10){
						this.addMeteor(this.meteors[k]);
						this.meteors.splice(k,1);
						this.bullets.splice(i,1);
						this.puntos+=10;
						document.getElementById("points").innerHTML  = this.puntos.toString();
					}
				}
			}
			for(let k=this.enemys.length-1; k>=0; k--){
				if(this.enemys[k] && this.bullets[i]){
					let d = this.bullets[i].p.dist(this.enemys[k].p);
					if(d < 10){
						//this.addMeteor(this.meteors[k]);
						//if(genR() < 0.7){
							this.addPowerUp(this.enemys[k].p);
						//}
						
						
						this.enemys.splice(k,1);
						this.bullets.splice(i,1);
						this.puntos+=50;
						document.getElementById("points").innerHTML  = this.puntos.toString();
					}
				}
			}
			
			if(this.bullets[i]){
				if(this.bullets[i].life < 0){
					this.bullets.splice(i,1);
				}
			}
		}
		
		for(let i=this.bullets_enemy.length-1; i>=0; i--){
			this.bullets_enemy[i].update();			
			for(let k=this.meteors.length-1; k>=0; k--){
				if(this.meteors[k] && this.bullets_enemy[i]){
					let d = this.bullets_enemy[i].p.dist(this.meteors[k].p);
					if(d < 10){
						this.addMeteor(this.meteors[k]);
						this.meteors.splice(k,1);
						this.bullets_enemy.splice(i,1);
					}
				}
			}
			if(this.bullets_enemy[i]){
				if(this.bullets_enemy[i].life < 0){
					this.bullets_enemy.splice(i,1);
				}
			}
		}
		for(let i=0; i<this.grabys.length; i++){
			this.grabys[i].update();			
			if(dist(this.PJ.p.x,this.PJ.p.y,this.grabys[i].p.x,this.grabys[i].p.y) < 20){
				this.grabys.splice(i,1);
				this.puntos+=10;
				document.getElementById("points").innerHTML  = this.puntos.toString();
				this.updateSpaceship();
			}
			
		}
		for(let i=0; i<this.meteors.length; i++){
			this.meteors[i].update();
			if(dist(this.PJ.p.x,this.PJ.p.y,this.meteors[i].p.x,this.meteors[i].p.y) < 20 ){
				if(this.PJ.shieldActivated){
					this.addMeteor(this.meteors[i]);
					this.meteors.splice(i,1);
				}else{
					this.isPlaying = false;
					document.getElementById("gameover").style.visibility = "visible";
				}
			}
		}
		if(millis() - this.lasttime_ene > this.durenemy && !this.isPlayingFinalboss){
			this.addEnemys();
			this.lasttime_ene = millis(); 
		}
		
		for(let i=0; i<this.enemys.length; i++){
			this.enemys[i].update();
			if(this.enemys[i].readyToShoot){
				//this.addEnemyBullet(this.enemy[i]);
				this.enemys[i].readyToShoot = false;
				this.addEnemyBullet(this.enemys[i]);
			}
			if(dist(this.PJ.p.x,this.PJ.p.y,this.enemys[i].p.x,this.enemys[i].p.y) < 20 ){
				if(this.PJ.shieldActivated){
					//this.addMeteor(this.meteors[i]);
					//this.meteors.splice(i,1);
				}else{
					this.isPlaying = false;
					document.getElementById("gameover").style.visibility = "visible";
				}
			}			
		}
		
		if(this.meteors.length == 0 && !this.isPlayingFinalbossTrigger){
			this.isPlayingFinalboss = true;
			this.isPlayingFinalbossTrigger = true; 
		}
		
	}
	addBullet(){
		let rdm = 10;
		let v = createVector(this.PJ.p.x,this.PJ.p.y);
		let bul = new Bullet(
				v,
				color(220,100,100),
				createVector(mouseX,mouseY));
		bul.speedlimit = 4;
		this.bullets.push(bul);
	}
	addMeteor(_meteor){
		if(_meteor.ite < u_fxhash.maxite){
			let siz = map(_meteor.ite+1,
							0,
							u_fxhash.maxite,
							uniforms_fxhash.meteormaxsize,
							uniforms_fxhash.meteorminsize);
			let c1 = this.c1;
			let c2 = this.c2;
			c2 = color(255,255,0);
			let cf = lerpColor(c1,c2,map(_meteor.ite,0,u_fxhash.maxite,0,1));
			
			
			let rdm = 2.5;
			let v = createVector(this.PJ.p.x,this.PJ.p.y);
			
			
			
			let speedst = map(_meteor.ite,0,u_fxhash.maxite,1,4);
			
			let b = new Meteor(createVector(_meteor.p.x,_meteor.p.y),
					createVector(genR(-1,1)*speedst,genR(-1,1)*speedst),
					cf,
					siz,
					_meteor.ite+1);
					
			let b2 = new Meteor(_meteor.p,
					createVector(genR(-rdm,rdm),genR(-rdm,rdm)),
					cf,
					siz,
					_meteor.ite+1);
						
			b.speedlimit = 4;
			
		//	b.sp = createVector(genR(-4,4),genR(-4,4));
			//b.sp = createVector(-2,0);
			//b2.sp = createVector(2,0);
		//	b2.sp = createVector(genR(-4,4),genR(-4,4));
			this.meteors.push(b);
			this.meteors.push(b2);
			
		}
	}
	addEnemys(){
		
		
		let cnt = 3 ; 
		
		//TYPE 
		//0 ARRIBA A ABAJO
		//1 ABAJO A ARRIBA
		//2 DERECHA A IZQUIERDA
		//3 IZQUEIRDA A DERECHA
		
		let type = floor(genR(4));
		
		let pos = createVector(0,0);
		let sp = createVector(0,0);
			
		let rdmSP = 10;
		if(type == 0){
			pos = createVector(random(windowWidth),0);
			sp = createVector(0,genR(1,rdmSP));
		}else if(type == 1){
			pos = createVector(random(windowWidth),windowHeight);
			sp = createVector(0,-genR(1,rdmSP));
		}else if(type == 2){
			pos = createVector(0,random(windowHeight));
			sp = createVector(genR(1,rdmSP),0);
		}else if(type == 3){
			pos = createVector(windowWidth,random(windowHeight));
			sp = createVector(-genR(1,rdmSP),0);
		}
			
		this.enemys.push(new Enemy(pos,
						 15,
						 type,
						 sp,
						 color(genR(255),genR(255),genR(255))) );
	
	
	}
	addEnemyBullet(_e){
		let rdm = 10;
		let v = createVector(_e.p.x,_e.p.y);
		let bul = new Bullet(
				v,
				_e.c,
				createVector(this.PJ.p.x,this.PJ.p.y));
		bul.speedlimit = 4;
		this.bullets_enemy.push(bul);
	}
	addPowerUp(_p){
		let ama = genR(100,255);
			let c = color(ama,ama,100);
			let gb = new Grabp(
							//createVector(genR(windowWidth),genR(windowHeight)),
							_p,
							c);
							
			this.grabys.push(gb);
	}
	updateSpaceship(){
		this.PJ.startf-=20;
	}
}
class Meteor extends Particle{
	constructor(_pos,_sp,_c,_s,_ite){
//		console.log(_sp);
		let rdm = 4;
		super(_pos,
			  _sp,
			  createVector(0,0));
		this.s = _s;
		this.speedlimit = map(_ite,0,u_fxhash.maxite,2,5);
		this.c = _c;
		this.ite = _ite;
		this.rpos = [];
		let rdm2 = 10;
			//rdm2 = 0;
		for(let i = 0; i<15; i++){
			
			let vec = createVector(genR(-rdm2,rdm2),genR(-rdm2,rdm2));
			this.rpos.push(vec);
		}
		
	}
	display(_ps){
		_ps.push();
		_ps.rectMode(CENTER);
		_ps.translate(this.p.x,this.p.y);
		_ps.rotate(0);
		for(let i=0; i<this.rpos.length; i++){
			this.c.setAlpha(255);
			_ps.fill(this.c);
		
			_ps.rect(this.rpos[i].x,this.rpos[i].y,this.s,this.s);
			_ps.fill(0);
			//_ps.rect(this.rpos[i].x,this.rpos[i].y,this.s*0.85,this.s*0.85);
			_ps.rect(this.rpos[i].x,this.rpos[i].y,this.s*0.75,this.s*0.75);
		}
		//_ps.fill(255,0,0);
		//_ps.ellipse(0,0,10,10);
		_ps.pop();
		
	}
}
class Bullet extends Particle {
	constructor(_pos,_c,_target){
		let dir = atan2(_pos.y-_target.y,_pos.x-_target.x);


		let stspeed = 1500;
		let speed = createVector(sin(-dir - PI / 2) * stspeed, cos(-dir - PI / 2) * stspeed);
		
		super(_pos,
			  speed,
			  createVector(0,0),	  
			  2.5);
		this.target = _target;
		let rdm = 2;
		this.prevp = _pos.copy();
		this.lifespeed = 1.2;
		
		let cntr = 10;
		this.rpos = [];
		this.c = _c;
		this.s = 6;
		this.limitspeed = 150;
	}
	update(){
		this.prevp = this.p.copy();
		super.update();
		//this.seek(createVector(mouseX,mouseY))
	//	this.seek(this.target)
		//this.p.x +=genR(-4,4);
		//this.p.y +=genR(-4,4);
	}
	display(_ps){
		//super.display(_ps);
		
		//let alf = map(this.life,255,0,255,0);
		
		//_ps.fill(200,0,0,this.life);
		
		//_ps.fill(this.c);
		let dir = atan2(this.p.y-this.prevp.y,this.p.x-this.prevp.x);
		_ps.push();
		_ps.translate(this.p.x,this.p.y);
		_ps.rotate(dir+PI/2);

		let cnt2 = 10;
		let rdms = 15;
		rectMode(CENTER);
		/*for (let i = 0; i < cnt2 ; i++) {
			let sf = map(i, 0, cnt2 - 1, this.s * 1.8, this.s );
			let cf = lerpColor(this.c, color(255), map(i, 0, cnt2 - 1, 0, 1));
			let rdmx = genR(-rdms, rdms);
			let rdmy = genR(-rdms, rdms);
			cf.setAlpha(120);
			_ps.fill(cf);
			//_ps.rect(rdmx*3., rdmy, this.s, 3);
			
		}*/
		_ps.fill(this.c, 255);
		//_ps.ellipse(0, 0, this.s, this.s);
		//_ps.rect(0, 0, this.s * 1., this.s * 0.25, 100);
		_ps.triangle(0, -this.s * 2, this.s, this.s, -this.s, this.s);
		_ps.pop();
	}
}
class Grabp extends Particle {
	constructor(_pos,_c){
		let rdm = 2;
		super(_pos,
			   createVector(genR(-rdm,rdm),genR(-rdm,rdm)),
			   createVector(0,0),
			   1.5);
			   
		this.c = _c;
		this.s = 5;
	}
	display(_ps){
	//	console.log("CORRE GRABP");
		let cnt2 = 5;
		
	//	_ps.ellipse(this.p.x,this.p.y,5,5);
		for(let i=0; i<cnt2; i++){
			
			let ms = map(i,0,cnt2-1,this.s*4.8,this.s);
			let ai = map(i,0,cnt2-1,1,0);
			let cf = lerpColor(this.c,color(0),sin(ai*TWO_PI*5.+millis()*0.004)*.5+.5);
	
			if(i > cnt2-1){
				cf.setAlpha(255);
			}else{
				cf.setAlpha(255);
			}
			_ps.fill(cf);
			
			_ps.ellipse(this.p.x,this.p.y,ms,ms);
		}
	}	
}
class PJ extends Particle {
	constructor(_pos,_s,_c){
	
		super(_pos,
			   createVector(0,0),
			   createVector(0,0),
			   15);
			   
		this.s = _s;
		this.c = _c;
		let rdm = genR(1); 
		this.mass = 0.9;
		
		this.pscnt = 20;
		this.ps = [];
		
		for(let i=0; i<this.pscnt; i++){
			this.ps[i] = createVector(genR(windowWidth),genR(windowHeight));
		}
		
		this.c = color(genR(255),genR(255),genR(255));
		this.c2 = color(genR(255),genR(255),genR(255));
		
		this.shieldActivated = true;
		//STATS ; 
		this.movst = u_fxhash.startmov;
		this.startf = u_fxhash.startf;
		//VARIABLES NAVE : 

		this.setAtrNave();
	}

	setAtrNave() {
		this.cntlayers = 10;
		this.atrsnave = [];
		this.s = 10;
		for (let i = 0; i < this.cntlayers; i++) {
			let cnt = floor(genR(10, 20));
			let es = map(i, 0, this.cntlayers - 1, this.s * 1.7, this.s * .1);
			let ea = map(i, 0, this.cntlayers - 1, 1, 255);
			let c1 = color(genR(0, 255), genR(0, 255), genR(0, 255), genR(200, 255));
			let c2 = color(genR(0, 255), genR(0, 255), genR(0, 255), genR(200, 255));
			let rdm2 = 0.;
			let freq2 = floor(genR(2, 8000));
			let s2 = es * 4.;
			let h2 = genR(1, 1.5);
			let c3 = color(genR(0, 255), 200);
			let c4 = color(genR(0, 255), 200);
			let cobn = constrain(floor(genR(1, 5)), 0, cnt);
			let atrnave = {
				cnt: cnt,
				es: es,
				ea: ea,
				c1: c1,
				c2: c2,
				rdm: rdm2,
				freq2: freq2,
				s2: s2,
				h2: h2,
				c3: c3,
				c4: c4,
				cobn: cobn
			}
			this.atrsnave.push(atrnave);
		}
    }
	display(_ps){
		this.ps[0] = this.p;
		for (let i = this.ps.length-1; i > 0; i--) { 
			this.ps[i].x = this.ps[i-1].x;
		    this.ps[i].y = this.ps[i-1].y;
		}
		
		//Draw shield
		if(this.shieldActivated){
			_ps.push();
			_ps.translate(this.p.x,this.p.y);
			_ps.fill(255);
			_ps.ellipse(0,0,this.s*4.1,this.s*4.1);
			_ps.fill(0);
			_ps.ellipse(0,0,this.s*4,this.s*4.);
			_ps.pop();
		}
		//Draw Tail
		for(let i=0; i<this.ps.length; i++){	
			let ms = map(i,0,this.ps.length-1,this.s,0);
			let msindex = map(i,0,this.ps.length-1,1,0);
			ms = sin(i*15.+millis()*0.01)*this.s/2+this.s/2;
			ms*=msindex;
			let cf = lerpColor(this.c,color(0),map(i,0,this.ps.length-1,0,1));
			cf = lerpColor(color(random(255)),this.c2,map(i,0,this.ps.length-1,0,1));
			_ps.push();
			_ps.translate(this.ps[i].x,this.ps[i].y);
			_ps.fill(cf);
			_ps.ellipse(0,0,ms,ms);
			_ps.pop();
		}

		let s = 7;
		let adir = atan2(this.p.y-this.ps[1].y ,this.p.x-this.ps[1].x); 
			adir = atan2(mouseY-this.ps[0].y ,mouseX-this.ps[1].x); 
		_ps.fill(this.c);
		_ps.push();
		_ps.translate(this.p.x,this.p.y);
		_ps.rotate(adir - PI / 2);
		_ps.scale(0.3, 0.3);
		//_ps.triangle(0,-s*2,s,s,-s,s);
		this.nave(_ps, 0, 0, 25);
		_ps.pop();
	}

	nave(_ps,x, y, s) {
		for (var k = 0; k < this.cntlayers; k++) {
			let cnt = this.atrsnave[k].cnt;
			let es = map(k, 0, this.cntlayers - 1, s * 1.2, s * .1);
			let ea = map(k, 0, this.cntlayers - 1, 1, 255);
			let c1 = this.atrsnave[k].c1;
			let c2 = this.atrsnave[k].c2;
			let rdm = 0.;
			let freq2 = this.atrsnave[k].freq2;
			let s2 = this.atrsnave[k].s2;
			let h2 = this.atrsnave[k].h2;
			let c3 = this.atrsnave[k].c3;
			let c4 = this.atrsnave[k].c4;
			let cobn = this.atrsnave[k].cobn; 
			if (k == 0) {
				_ps.stroke(100, 0, 255, 200);
				_ps.strokeWeight(5);
			}
			else {
				if (genR(0, 1) > .5) {
					_ps.strokeWeight(20);
					_ps.stroke(0, 10);
				} else {
					_ps.noStroke();
				}
			}
		_ps.noStroke();
		_ps.beginShape();
		for (var i = 0; i < cnt; i++) {
			var c6 = color(lerpColor(c3, c4, map(i, 0, cnt - 1, 0, 1)));
			var cf = color(lerpColor(c1, c2, map(i, 0, cnt - 1, 0, 1)));
			var w = (k < this.cntlayers - cobn) ? c6 : cf;
			_ps.fill(w);
			var a = map(i, 0, cnt - 1, 0, TWO_PI);
			var a2 = map(i, 0, cnt - 1, 0, TWO_PI * freq2);
			var xx = x + sin(a) * es;
			xx += sin(a2) * s2;
			//xx += genR(-rdm, rdm);
			var yy = y + cos(a) * es * h2;
				yy += cos(a2) * s2 * h2;
			_ps.vertex(xx, yy);
		}
		_ps.endShape();
		}

	}
	update(){
		super.update();
		this.c = color(map(noise(millis()*0.001+9250),0,1,100,255),
					   map(noise(millis()*0.001+124),0,1,100,255),
					  map(noise(millis()*0.001+53223),0,1,100,255));		  
		this.c = color(255);
		if (keyIsPressed === true) {
			let rdm = 2;
			let movst = 0.1;
			let B_UP =  (keyIsDown(UP_ARROW) || keyIsDown(87));
			let B_DOWN = (keyIsDown(DOWN_ARROW) ||  keyIsDown(83));
			let B_LEFT = (keyIsDown(LEFT_ARROW) ||  keyIsDown(65));
			let B_RIGHT = (keyIsDown(RIGHT_ARROW) ||  keyIsDown(68));
			if(B_UP && B_LEFT){
				this.applyForce(createVector(-movst,-movst));	
			}else if(B_UP && B_RIGHT){
				this.applyForce(createVector(movst,-movst));	
			}else if(B_LEFT && B_DOWN){
				this.applyForce(createVector(-movst,movst));	
			}else if(B_DOWN && B_RIGHT){
				this.applyForce(createVector(movst,movst));	
			}else if (B_LEFT) {
				this.applyForce(createVector(-movst,0));
			}else if(B_RIGHT) {
				this.applyForce(createVector(movst,0.0));
			}else if (B_UP){
				this.applyForce(createVector(0.0,-movst));
			}else if (B_DOWN){
				this.applyForce(createVector(0.0,movst));
			}
			if(keyIsDown(32)) {
				this.shieldActivated = true;
			}else{
				this.shieldActivated = false;
			}
		}else{
				this.shieldActivated = false;
		}
	}
}
class Enemy extends Particle{
	constructor(_pos,_s,_type,_sp,_c){
	
		super(_pos,
			  _sp,
			  createVector(0,0),
			  color(255,0,0));
		
		this.limitspeed = 3;
		this.type = _type; 
		this.p = _pos;
		this.s = _s; 
		this.c = _c;
		
		this.readyToShoot = false;
		
		this.koko = false;
		this.lasttimeShoot = 0;
		this.durationShoot = 1500;
		this.amp = genR(10,100);
		this.fasex = genR(TWO_PI);
		this.fasey = genR(TWO_PI);
		this.setAtrNave();
	}
	display(_ps){

		
		let s = this.s;
			s = 8;
		
		let dir = this.sp.heading()+PI/2;
		_ps.push();
		_ps.translate(this.p.x,this.p.y);
		_ps.rotate(dir);
		_ps.scale(0.3, 0.3);
		_ps.fill(this.c);
		_ps.triangle(0,-s*2,
					 s,s,
					-s,s);
		_ps.fill(255);
		s*=0.45;
		/*_ps.triangle(0,-s*2,
					 s,s,
			-s, s);*/
		this.nave(_ps, 0, 0, s);
		_ps.pop();
	}
	update(){
		this.sp.add(this.ac);
		this.sp.limit(this.limitspeed);
		this.p.add(this.sp);
		this.sp.x+=sin(millis()*0.01+this.fasex)*this.amp*0.000;
		this.sp.y+=cos(millis()*0.01+this.fasey)*this.amp*0.000;		
		let nnx = map(noise(this.fasex*1500784125+millis()*0.5+995952),0,1,-0.01,0.01)*40.5
		let nny = map(noise(this.fasey*1231241423+millis()*0.5+1243321),0,1,-0.01,0.01)*40.5
		nnx*=3;
		nny*=3;
		this.sp.x-=nnx;
		this.sp.y-=nny;
		this.life -= this.lifespeed;
		if(millis() - this.lasttimeShoot > this.durationShoot){
			this.readyToShoot = true;
			this.lasttimeShoot = millis();
		}
	    if(this.p.x > width){
		  this.p.x = 0;
	    }
	    if(this.p.x < 0){
		  this.p.x = width;
	    }
	    if(this.p.y > height){
		  this.p.y = 0;
	    }
	    if(this.p.y < 0){
		  this.p.y = height;
	    }
	}
	setAtrNave() {
		this.cntlayers = 7;
		this.atrsnave = [];
		this.s = 10;
		for (let i = 0; i < this.cntlayers; i++) {
			let cnt = floor(genR(10, 20));
			let es = map(i, 0, this.cntlayers - 1, this.s * 1.7, this.s * .1);
			let ea = map(i, 0, this.cntlayers - 1, 1, 255);
			let c1 = color(genR(0, 255), genR(0, 255), genR(0, 255), genR(200, 255));
			let c2 = color(genR(0, 255), genR(0, 255), genR(0, 255), genR(200, 255));

			c1 = color(genR(0, 255), genR(100), genR(100));
			c2 = color(genR(0, 255), genR(100), genR(100));
			let rdm2 = 0.;
			let freq2 = floor(genR(2, 90000));
			let s2 = es * 4.;
			let h2 = genR(1, 1.5);
			let c3 = color(genR(0, 255), genR(100), genR(100), 200);
			let c4 = color(genR(0, 255), genR(100), genR(100), 200);
			let cobn = constrain(floor(genR(1, 5)), 0, cnt);
			let atrnave = {
				cnt: cnt,
				es: es,
				ea: ea,
				c1: c1,
				c2: c2,
				rdm: rdm2,
				freq2: freq2,
				s2: s2,
				h2: h2,
				c3: c3,
				c4: c4,
				cobn: cobn
			}
			this.atrsnave.push(atrnave);
		}
	}
	nave(_ps, x, y, s) {
		for (var k = 0; k < this.cntlayers; k++) {
			let cnt = this.atrsnave[k].cnt;
			let es = map(k, 0, this.cntlayers - 1, s * 1.2, s * .1);
			let ea = map(k, 0, this.cntlayers - 1, 1, 255);
			let c1 = this.atrsnave[k].c1;
			let c2 = this.atrsnave[k].c2;
			let rdm = 0.;
			let freq2 = this.atrsnave[k].freq2;
			let s2 = this.atrsnave[k].s2;
			let h2 = this.atrsnave[k].h2;
			let c3 = this.atrsnave[k].c3;
			let c4 = this.atrsnave[k].c4;
			let cobn = this.atrsnave[k].cobn;
			if (k == 0) {
				_ps.stroke(100, 0, 255, 200);
				_ps.strokeWeight(5);
			}
			else {
				if (genR(0, 1) > .5) {
					_ps.strokeWeight(20);
					_ps.stroke(0, 10);
				} else {
					_ps.noStroke();
				}
			}
			_ps.noStroke();
			_ps.beginShape();
			for (var i = 0; i < cnt; i++) {
				var c6 = color(lerpColor(c3, c4, map(i, 0, cnt - 1, 0, 1)));
				var cf = color(lerpColor(c1, c2, map(i, 0, cnt - 1, 0, 1)));
				var w = (k < this.cntlayers - cobn) ? c6 : cf;
				_ps.fill(w);
				var a = map(i, 0, cnt - 1, 0, TWO_PI);
				var a2 = map(i, 0, cnt - 1, 0, TWO_PI * freq2);
				var xx = x + sin(a) * es;
				xx += sin(a2) * s2;
				//xx += genR(-rdm, rdm);
				var yy = y + cos(a) * es * h2;
				yy += cos(a2) * s2 * h2;
				_ps.vertex(xx, yy);
			}
			_ps.endShape();
		}

	}
}
class StarsSystem {
	constructor() {
		this.ps = [];

		this.stars = [];


		this.scampmin = 10;
		this.scampmax = 100;


		this.cnt = 10; 

		this.sizemin = 4;
		this.sizemax = 1;

		this.c1 = color(genR(255), genR(255), genR(255));
		this.c2 = color(genR(255), genR(255), genR(255));



		for (let i = 0; i < this.cnt; i++) {


			this.c3 = lerpColor(this.c1, this.c2, map(i, 0, this.cnt - 1, 0, 1));
			this.s = map(i, 0, this.cnt - 1, this.sizemin, this.sizemax);
			this.stars.push(new Stars(this.s,this.c3));
		}



	}
	display(_ps,_px,_py) {
		

		for (let i = 0; i < this.cnt; i++) {
			let scamp = map(i, 0, this.cnt - 1, this.scampmin, this.scampmax);

			_ps.push();
			_ps.translate(map(_px, 0, windowWidth, -scamp, scamp),
					  map(_py, 0, windowHeight, -scamp, scamp));
			this.stars[i].display(_ps);

			_ps.pop();
		}


	}
}

class Stars{ 
	 constructor(_s,_c){
		 this.ps = [];
		 let nums = 120; 

		 for(let i=0; i<nums; i++){
			//this.ps.push(createVector(genR(windowWidth*2),genR(windowHeight*2)));
			this.ps.push(createVector(genR(-windowWidth*2,windowWidth*2),genR(-windowHeight*2,windowHeight*2)));
		 }
		 this.size = _s;
		 this.c = _c;
	 }
	 display(_ps){
		// _ps.fill(255,0,0);
		//_ps.ellipse(width/2,height/2,40,40); 
		//_ps.fill(this.c);
		for(let i=0; i<this.ps.length; i++){
			//_ps.ellipse(this.ps[i].x, this.ps[i].y, this.size, this.size);
			this.drawStar(_ps, this.c, this.ps[i].x, this.ps[i].y, this.size);
		 }
	 }
	drawStar(_ps,_c, _x, _y, _s) {
		_ps.ellipse(_x, _y, _s,_s);
		//this.c1 = _c ;
		//this.c2 = color(255) ;
		this.cnt = 3 ;

		for (let k = 0; k < this.cnt; k++) {

			let cf2 = lerpColor(_c,
				color(genR(255)),
				map(k, 0, this.cnt - 1, 0, 1));
			cf2.setAlpha(120);
			let sf = map(k, 0, this.cnt - 1, _s * 1.7, _s );
			//sf = 5;
			_ps.fill(cf2);
			_ps.ellipse(_x, _y, sf, sf);
			//_ps.ellipse(_x, _y, this.sf, this.sf);
		}

		

    }
}

class Finalboss extends Particle{
	constructor(){
		
		
		super(createVector(0,0),
				createVector(0,0),
				createVector(0,0),
				2);
				
		this.life = 1000
		this.startingAnimation = true;
		this.ani = 0; 
		
		this.startpos = createVector(windowWidth/2,-100);
		this.endpos = createVector(windowWidth/2,windowHeight*1/8);
		
		
	}
	display(_ps){
		_ps.ellipse(this.p.x,this.p.y,100,100);
	}
	
	update(){
		
		this.ani+=0.1;
		if(this.startingAnimation){
			p5.Vector.lerp(this.startpos,this.endpos,this.ani,this.p);
		}
		if(this.ani > 1){
			this.startingAnimation = false;
		}
		
	}
	
	
}
class stats{

	constructor(_x,_y,name){
		
	
	}
	display(_ps){
		
		
		
	}
}

