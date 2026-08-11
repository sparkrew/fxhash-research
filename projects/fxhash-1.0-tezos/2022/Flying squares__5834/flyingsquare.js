let palette;
let url = ["https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
	"https://coolors.co/0b132b-1c2541-3a506b-5bc0be-6fffe9", "https://coolors.co/025393-68ef00-ffb9cb-fd56dc-01d3fc", 
	"https://coolors.co/e89005-ec7505-d84a05-f42b03-e70e02", "https://coolors.co/b3e7dc-a6b401-eff67b-d50102-6c0102",
	"https://coolors.co/eaeaea-893168-4a1942-2e1c2b-050404", "https://coolors.co/f07d10-5b8300-efe5d4-7c8782-8a7271", 
    "https://coolors.co/dee5e5-9dc5bb-17b890-5e807f-082d0f", "https://coolors.co/050831-133072-d5e6f7-d5adfb-f90052",
	"https://coolors.co/96bbbb-618985-414535-f2e3bc-c19875", "https://coolors.co/241822-69409e-36c2f3-5ba56e-2c806f",
	"https://coolors.co/545863-00e8fc-f96e46-f9c846-ffe3e3", 
	"https://coolors.co/dee5e5-9dc5bb-17b890-5e807f-082d0f", 
	"https://coolors.co/a80874-b7fdfe-5ef38c-2b9720-343a1a",
	"https://coolors.co/b24c63-5438dc-357ded-56eef4-32e875",
	"https://coolors.co/484349-f7f0f0-8af3ff-18a999-109648",
	"https://coolors.co/ffbe86-ffe156-ffe9ce-ffb5c2-3777ff",
	"https://coolors.co/bac7be-c2e1c2-7dcd85-80ab82-778472",
	"https://coolors.co/96adc8-d7ffab-fcff6c-d89d6a-6d454c",
	"https://coolors.co/14342b-60935d-bab700-bbdfc5-ff579f",
	"https://coolors.co/aaabbc-8b8982-373f47-6c91c2-c3c9e9",
	"https://coolors.co/1e91d6-0072bb-8fc93a-e4cc37-e18335",
	"https://coolors.co/bf4e30-c6ccb2-093824-e5eafa-78fecf",
	"https://coolors.co/2274a5-e7eb90-fadf63-e6af2e-632b30",
	"https://coolors.co/3c91e6-342e37-a2d729-fafffd-fa824c",
	"https://coolors.co/bbdef0-00a6a6-efca08-f49f0a-f08700",
	"https://coolors.co/73877b-839788-bdbbb6-e5d1d0-f5e4d7",
	"https://coolors.co/ba2d0b-d5f2e3-73ba9b-003e1f-01110a",
	"https://coolors.co/ff9fb2-fbdce2-0acdff-60ab9a-dedee0",
	"https://coolors.co/272727-d4aa7d-efd09e-d2d8b3-90a9b7",
	"https://coolors.co/ffbc42-d81159-8f2d56-218380-73d2de",
	"https://coolors.co/220c10-506c64-77cbb9-75b8c8-cdd3d5",
	"https://coolors.co/000000-5d737e-fff07c-f0f7ee-87bba2",
	"https://coolors.co/6622cc-a755c2-b07c9e-b59194-d2a1b8",
	"https://coolors.co/420039-932f6d-e07be0-dcccff-f6f2ff",
	"https://coolors.co/2589bd-187795-38686a-a3b4a2-cdc6ae",
	"https://coolors.co/94ae89-a8bca1-c0da74-beedaa-d5ffd9",
	"https://coolors.co/3a405a-f9dec9-99b2dd-e9afa3-685044",
	"https://coolors.co/ff6666-ccff66-5d2e8c-2ec4b6-f1e8b8",
	"https://coolors.co/f72585-7209b7-3a0ca3-4361ee-4cc9f0",
	"https://coolors.co/2f2d2e-41292c-792359-d72483-fd3e81",
	"https://coolors.co/fe5d26-f2c078-faedca-c1dbb3-7ebc89",
	"https://coolors.co/d3f9b5-ddfc74-bf6900-3d0c11-000000",
	"https://coolors.co/f1dac4-a69cac-474973-161b33-0d0c1d",
	"https://coolors.co/090446-786f52-feb95f-f71735-c2095a",
	
]

let offset=10;

let w = 1200; let h = w;
let x, y, z, r1, r2, q, r, g, b, k, t, x0,y0;
let dx, dy, wx,hy,nx,ny, stepy, rndH, hbezi, curx,cury;
let rndx, rndy, prevx, prevy, value, c;
let curcolor, colrnd, x1, y1, z1;
let ang, angst, angf, spee;
let queueNumber = [0, 1, 2, 3, 4];
let nlines = 500, nstep=10;
let p=0, curbgg=0;
let dirar = [], tiles = [], bgar = [];



function setup() {
	h=windowHeight*.95;
	//h=1200;
	w=h;
	
	createCanvas(w, h);
	colorMode(RGB, 255, 255, 255, 1);
	angleMode(DEGREES);
	//noStroke();
	//noLoop();
	
	curcolor = int(fxrand()*url.length);
	palette = createPalette(url[curcolor]);

	dx = int(w/nstep);
	if(dx%3!=0)dx+=(3-dx%3);
	resizeCanvas(dx*nstep, dx*nstep);
	for(let i=0; i<nstep; i++){
		for(let j=0; j<nstep; j++){
			
			queueNumber[0] = int(fxrand()*4.5); if (queueNumber[0]==5) {queueNumber[0]==0;}
			while (queueNumber[1] == queueNumber[0]) { queueNumber[1] = int(fxrand()*4.5);}
			while (queueNumber[2] == queueNumber[0] || queueNumber[2] == queueNumber[1]) { queueNumber[2] = int(fxrand()*4.5);}
			while (queueNumber[3] == queueNumber[0] || queueNumber[3] == queueNumber[1] || queueNumber[3] == queueNumber[2]) { queueNumber[3] = int(fxrand()*4.5);}
			while (queueNumber[4] == queueNumber[0] || queueNumber[4] == queueNumber[1] || queueNumber[4] == queueNumber[2] || queueNumber[4] == queueNumber[3]) { queueNumber[4] = int(fxrand()*4.5);}
	let curpal=createPalette(url[curcolor]);
	for(let f=0; f<palette.length; f+=1){palette[f]=curpal[queueNumber[f]];}
			
			c=i*nstep+j;
		dirar[c]=int(fxrand()*360);
	    bgar[c]=new Bgtilearrow (i*dx, j*dx, dx, palette[0], palette[1], dirar[c]);
		x0=cos(dirar[c]);
		y0=sin(dirar[c]);
		
		k=1+fxrand()*3;
		x0*=k;
		y0*=k;
		tiles[c]=new Tile (i*dx, j*dx, dx, palette[3], x0, y0, false);
		}
	}
	
	
}

function draw() {
	
	background('#fff0ff');
	
	for(let i = 0; i < bgar.length; i++) {  
    if(tiles[i].move1)bgar[i].move();
	if(bgar[i].killed){
		
		queueNumber[0] = int(fxrand()*4.5); if (queueNumber[0]==5) {queueNumber[0]==0;}
			while (queueNumber[1] == queueNumber[0]) { queueNumber[1] = int(fxrand()*4.5);}
			while (queueNumber[2] == queueNumber[0] || queueNumber[2] == queueNumber[1]) { queueNumber[2] = int(fxrand()*4.5);}
			while (queueNumber[3] == queueNumber[0] || queueNumber[3] == queueNumber[1] || queueNumber[3] == queueNumber[2]) { queueNumber[3] = int(fxrand()*4.5);}
			while (queueNumber[4] == queueNumber[0] || queueNumber[4] == queueNumber[1] || queueNumber[4] == queueNumber[2] || queueNumber[4] == queueNumber[3]) { queueNumber[4] = int(fxrand()*4.5);}
	let curpalf=createPalette(url[curcolor]);
	for(let f=0; f<palette.length; f+=1){palette[f]=curpalf[queueNumber[f]];}
		dirar[i]=int(fxrand()*360);
		bgar[i]=new Bgtilearrow (((i-i%nstep)/nstep)*dx, (i%nstep)*dx, dx, palette[0], palette[1], dirar[i]);
		x0=cos(dirar[i]);
		y0=sin(dirar[i]);
		k=1+fxrand()*3;
		x0*=k;
		y0*=k;
		tiles[i]=new Tile (((i-i%nstep)/nstep)*dx, (i%nstep)*dx, dx, palette[2], x0, y0, false);}
    bgar[i].display();
    }
	for(let i = 0; i < tiles.length; i++) {
    
    if(!tiles[i].move1)tiles[i].display();
    }
	for(let i = 0; i < tiles.length; i++) {
    tiles[i].move();
    if(tiles[i].move1)tiles[i].display();
    }
	q=int(fxrand()*nstep*nstep);
	if(fxrand()<.05)tiles[q].move1=true;
	
}



function createPalette(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = color('#' + arr[i]);
	}
	return arr;
}

function keyPressed() {
  for(let i = 0; i < bgar.length; i++) {  
	bgar[i].killed=true;
  }
}

function mouseClicked() {
	for(let i = 0; i < tiles.length; i++) {
    tiles[i].move1=true;
    }
}

class Tile {
  constructor(posx, posy, wid, colo, speedx, speedy, move1) {
    this.posx = posx;
	this.posy = posy;
	this.wid = wid;
	this.colo = colo;
	this.speedx = speedx;
	this.speedy = speedy;
	this.move1=false;
	
  }
  
  move() {
	if(this.move1){
		this.posx += this.speedx;
		this.posy += this.speedy;
		}
  }

  display() {
			fill(this.colo);
			rect(this.posx, this.posy, this.wid, this.wid, 5);
  }
}

class Bgtilearrow {
  constructor(posx, posy, wid, colbg, colar, typ) {
    this.posx = posx;
	this.posy = posy;
	this.wid = wid;
	this.colbg = colbg;	
	this.colar = colar;
	this.typ = typ;
	this.scal = 1;
	this.killed=false;
  }
  
  move(){
	  this.scal-=0.002*fxrand();
	  if(this.scal<0)this.killed=true;
  }
  display() {
			
			fill(this.colbg);
			strokeWeight(1);
			//rect(this.posx, this.posy, this.wid, this.wid);
			push();
			translate(this.posx+this.wid/2, this.posy+this.wid/2);
			scale(this.scal);
			circle(0, 0, this.wid);
			push();
			rotate(this.typ);
			fill(this.colar);
			beginShape();
			vertex(0, -2/6*this.wid);
			vertex(2/6*this.wid, 0);
			vertex(0, 2/6*this.wid);
			vertex(0, 1/6*this.wid);
			vertex(-2/6*this.wid, 1/6*this.wid);
			vertex(-2/6*this.wid, -1/6*this.wid);
			vertex(0, -1/6*this.wid);
			vertex(0, -2/6*this.wid);
			endShape();
			pop();
			pop();
  }
}