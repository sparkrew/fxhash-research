

var maxpasadas = 3;

class InstanceFractalManager{
	//var cosos = [];
	
	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "Instances Fractal";
		this.dir = "Instances Fractal";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
		this.loaded = false;

		this.gcol1 = color(random(255), random(255), random(255));
		this.gcol2 = color(random(255),random(255),random(255));
		this.gcol3 = color(random(255),random(255),random(255));
		this.gcol4 = color(random(255),random(255),random(255));
	}
	
	
	rdmColors(){
		this.gcol1 = color(random(255),random(255),random(255));
		this.gcol2 = color(random(255),random(255),random(255));
		this.gcol3 = color(random(255),random(255),random(255));
		this.gcol4 = color(random(255),random(255),random(255));
	}
	
	draw(_ps){
		//console.log("ASADSDA");

		_ps.fill(0, 10);
		_ps.rect(-width / 2, -height / 2, width, height);


		//_ps.background(0);
		
		stroke(255,255);
		strokeWeight(5);
		fill(0);
		//ellipse(mouseX-width/2,mouseY-height/2,80,80);
		noStroke();
		//imageMode(CENTER);
		for (var i = 0; i<this.cosos.length; i++) {
			var c = this.cosos[i];
			c.display(_ps);
			if (this.cosos.length > 500) {
				this.cosos.splice(i,1);
			}
		}
	//	imageMode(CORNER);
		//translate(-width / 2, -height / 2, 0);
		
	}
	addCoso() {
	
	  var gcol1 = this.gcol1;
	  var gcol3 = this.gcol2;
	  var gcol2 = this.gcol3;
	  var gcol4 = this.gcol4;
	  
	 

	gcol1 = color(uniforms_fxhash.r1, uniforms_fxhash.g1, uniforms_fxhash.b1);
	gcol2 = color(uniforms_fxhash.r2, uniforms_fxhash.g2, uniforms_fxhash.b2);
	gcol3 = color(uniforms_fxhash.r3, uniforms_fxhash.g3, uniforms_fxhash.b3);
	gcol4 = color(uniforms_fxhash.r4, uniforms_fxhash.g4, uniforms_fxhash.b4);


	  var c1 = color(255);
	  var c2 = color(0, 0, 0);
	  c1 = gcol1;
	  c2 = gcol2;
	 
	  var col1 = color(random(255));   
	  var col2 = color(random(255));  
	  var cnt = 5;
		
		for (var i = 0; i < cnt; i++) {
			let coso;

			if (mouseIsPressed) {
				coso = new IntanceFractalParticle(mouseX - width / 2, mouseY - height / 2, 0);
			} else {
				coso = new IntanceFractalParticle(width/2 - width / 2, height/2 - height / 2, 0);
            }
		  
		  var a = map(i, 0, cnt, 0, TWO_PI);
		  a = random(TWO_PI);
		var asped = atan2(pmouseY-mouseY, pmouseX-mouseX)-PI;
		var spx = Math.sin(a);
		var spy = Math.cos(a);
		 // coso.speed = createVector(spx * uniforms_fxhash.speedlimit, spy * uniforms_fxhash.speedlimit);
		  coso.speed = createVector(spx * uniforms_fxhash.speedlimit, spy * uniforms_fxhash.speedlimit);

		  //  cos.speed.x *= uniforms_fxhash.speedlimit;
		 // cos.speed.y *= uniforms_fxhash.speedlimit;
		  //cos.col1 = color(random(100, 255), random(100, 255), 0);
		//cos.col2 = color(100, random(100, 255), random(10));
		var cy = random(0);
		//cos.col2 = color(red(c1), cy+green(c1), cy+blue(c1));
		//cos.col1 = color(red(c2), green(c2), blue(c2));
		

		coso.col1 = lerpColor(gcol1,gcol3,random(1));
		coso.col2 = lerpColor(gcol2,gcol4,random(1));	
		this.cosos.push(coso);
	  }
	}
	update(){
		
	  for (var i = 0; i<this.cosos.length; i++) {
		var c = this.cosos[i];
		c.update();
		if (c.life <0) {
		  if (c.pasadas <  maxpasadas  ) {
			var a = c.speed.heading();
			  var cn1 = new IntanceFractalParticle(c.ap.x, c.ap.y, c.pasadas+1);
			  var cn2 = new IntanceFractalParticle(c.ap.x, c.ap.y, c.pasadas+1);
			  var cn3 = new IntanceFractalParticle(c.ap.x, c.ap.y, c.pasadas+1);
			  var cn4 = new IntanceFractalParticle(c.ap.x, c.ap.y, c.pasadas+1);
			cn1.col1 = c.col1;
			cn1.col2 = c.col2;
			cn2.col1 = c.col1;
			cn2.col2 = c.col2;
			var dif = random(PI);
			var fas = 0;
			var vel1x = cos(a+dif+fas);
			var vel1y = sin(a+dif+fas);
			var vel2x = cos(a-dif+fas);
			var vel2y = sin(a-dif+fas);
			  var stspeed = uniforms_fxhash.speedlimit;
			cn1.speed = createVector(vel1x, vel1y);
			cn2.speed = createVector(vel2x, vel2y);
			cn1.speed.mult(stspeed);
			cn2.speed.mult(stspeed);
			//var spm = map(c.pasadas, 0, maxpasadas, 0, 10);
			this.cosos.push(cn2);
			this.cosos.push(cn1);
		  }
		  this.cosos.splice(i,1);
		}
	  }
		if (mouseIsPressed || millis() - this.lasttime > random(this.duration)) {	  
			this.addCoso();
			this.lasttime = millis(); 
		/*if(millis() -lasttime> duration){	
			lasttime = millis(); 
		}*/
	  }	
	}
}



class IntanceFractalParticle {
  
  constructor(x,y, _pas) {
    this.p1 = createVector(x, y);
    this.pasadas = _pas;
	
	 this.life =255;
	  var stspeed = random(10000);


	 // stspeed = uniforms_fxhash.speedlimit; 
	  /*this.speed = createVector(random(-uniforms_fxhash.particlespeedx,
										uniforms_fxhash.particlespeedx),
										random(-uniforms_fxhash.particlespeedy,
											uniforms_fxhash.particlespeedy));
											*/
	  this.speed = createVector(
		  uniforms_fxhash.particlespeedx,
			  uniforms_fxhash.particlespeedy);

    this.lasttime = millis();
    this.duration = 400;
    var ls = 500;
    this.p2 = createVector(this.p1.x+random(-ls, ls), this.p1.y+random(-ls, ls));
    this.ap = createVector(this.p1.x, this.p1.y);
    //col1 = color(random(255), random(100), random(100), 5);
    //col2 = color(random(50, 255), random(20, 100), random(100, 255), 5);
   // this.col1 = color(random(255), random(255), random(255), 5);
   // this.col2 = color(random(255, 255), random(255, 255), random(255, 255), 5);
	this.col1 = color(0);
	this.col2 = color(255);
    //col1 = color(random(255),random(255),random(255));   
    //col2 = color(random(255),random(255),random(255));       
	  this.size1 = random(uniforms_fxhash.size1);
	  this.size2 = random(uniforms_fxhash.size2);
    this.strk1 = 20;
    this.strk2 = 0;
    this.rot1 = random(PI*4);
    this.rot2 = random(PI*4);
    this.maxlife = random(10);
    this.vueltas = 0;
    //this.asize = map(this.pasadas, 0, maxpasadas, random(20,100), random(10,1));
	  this.asize = map(this.pasadas, 0, maxpasadas, this.size1, this.size2);
   }
   display(_ps) {
    /*this.p1.noFill();
    this.p1.noStroke();
	this.acol.setAlpha(random(255));
   this. p1.fill(this.acol, map(this.pasadas,0,maxpasadas,0,5));
   // strokeWeight(map(this.pasadas,0,maxpasadas,0,2));*/

	var isST = false;
	
	//this.bacol.setAlpha(255);
	
	
    this.acol = lerpColor(this.col1, this.col2, map(this.pasadas, 0, maxpasadas, 0, 1));
	
	this.acol.setAlpha(map(this.pasadas,0,maxpasadas,255,255));
	
	
	_ps.noStroke();
	_ps.fill(this.acol);
	//this.ap.x+=0.1;
	
	//fill(this.acol, map(this.pasadas,0,maxpasadas,0,5));
    _ps.ellipse(this.ap.x, this.ap.y, this.asize, this.asize);
	
	

	//_ps.tint(this.acol);
    //_ps.image(img,this.ap.x-this.asize/2,this.ap.y-this.asize/2,this.asize,this.asize);
	
	//pop();
  }
  
  update() {
   // var counter = map(millis()-this.lasttime, 0, duration, 0, 1);

	  var counter = 0.0;

	 // this.aspeed = map(this.pasadas, 0, maxpasadas, 0.0, 1.0);
	 // this.aspeed = map(this.pasadas, 0, maxpasadas, 0.0, 1.0);
    this.ap.add(this.speed);
	
	//ap.x+=0.1;
	//ap.y-=0.1;
    //  ap.x = map(counter,0,1,p1.x,p2.x);
    // ap.y = map(counter,0,1,p1.y,p2.y);

    this.acol = lerpColor(this.col1, this.col2, map(this.pasadas, 0, maxpasadas, 0, 1));
    this.bacol = lerpColor(color(0), color(0), map(this.pasadas, 0, maxpasadas, 0, 1)); 
 //   bacol = color(255-red(bacol),255-green(bacol),255-blue(bacol));
    
    // asize = map(counter,0,1,size1,size2);
    this.astrk = map(this.pasadas, 0, this.maxlife, this.strk1, this.strk2);
    this.arot = map(this.counter, 0, 1, this.rot1, this.rot2);
    //asize = 3;
	  this.life -= map(this.pasadas, 0, maxpasadas, uniforms_fxhash.life1, uniforms_fxhash.life2 );
   //   this.life-=map(this.pasadas, 0, maxpasadas, 20.0, 10.1);
   
	  var rdm = map(this.pasadas, 0, maxpasadas, uniforms_fxhash.rdm * 0.5, uniforms_fxhash.rdm*3.8);
	
	//checkEdges();
	this.speed.x+=random(-rdm, rdm);
    this.speed.y+=random(-rdm, rdm);
   
	  /*if(this.ap.x > width){
		  this.ap.x = 0;
	  }
	  if(this.ap.x < 0){
		  this.ap.x = width;
	  }
	  if(this.ap.y > height){
		  this.ap.y = 0;
	  }
	  if(this.ap.y < 0){
		  this.ap.y = height;
	  }*/
	  
	  
  }
}
