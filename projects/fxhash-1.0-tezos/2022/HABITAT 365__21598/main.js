
// © 2022 Gábor Réthi (cloudnoise) <cloudnoise@gmail.com>

let c;
let s = 8;
let b = 8;
let assetnum = 10;
let topcnum = 2;
let topnum = 3;
let bottomcnum = 4;
let bottomnum = 4;

let assetsW = [];
let assetsWtc = [];
let assetsWt = [];
let assetsWbc = [];
let assetsWb = [];
let assetsB = [];
let assetsBtc = [];
let assetsBt = [];
let assetsBbc = [];
let assetsBb = [];
let img;
let colw;
let colb;
let row;
let topcorner;
let bottomcorner;
let previewTimer;

function preload() {
	for(let i=0; i<assetnum; i++) {
		let fileW = (i<10) ? "w0"+i : "w"+i;
		assetsW.push(loadImage("assets/"+fileW+".png"));
		let fileB = (i<10) ? "b0"+i : "b"+i;
		assetsB.push(loadImage("assets/"+fileB+".png"));
	}
	for(let i=0; i<topcnum; i++) {
		let fileW = (i<10) ? "wtc0"+i : "wtc"+i;
		assetsWtc.push(loadImage("assets/"+fileW+".png"));
		let fileB = (i<10) ? "btc0"+i : "btc"+i;
		assetsBtc.push(loadImage("assets/"+fileB+".png"));
	}
	for(let i=0; i<topnum; i++) {
		let fileW = (i<10) ? "wt0"+i : "wt"+i;
		assetsWt.push(loadImage("assets/"+fileW+".png"));
		let fileB = (i<10) ? "bt0"+i : "bt"+i;
		assetsBt.push(loadImage("assets/"+fileB+".png"));
	}
	for(let i=0; i<bottomcnum; i++) {
		let fileW = (i<10) ? "wbc0"+i : "wbc"+i;
		assetsWbc.push(loadImage("assets/"+fileW+".png"));
		let fileB = (i<10) ? "bbc0"+i : "bbc"+i;
		assetsBbc.push(loadImage("assets/"+fileB+".png"));
	}
	for(let i=0; i<bottomnum; i++) {
		let fileW = (i<10) ? "wb0"+i : "wb"+i;
		assetsWb.push(loadImage("assets/"+fileW+".png"));
		let fileB = (i<10) ? "bb0"+i : "bb"+i;
		assetsBb.push(loadImage("assets/"+fileB+".png"));
	}

	let fxr = Math.floor(999999 * fxrand());
	randomSeed(fxr);
	noiseSeed(fxr);

	colw = randomInt(1, 4);
	colb = randomInt(1, 4);
	row = random([2, 4, 6, 8]);
	let hab = colw*colb*row;
	topcorner = randomInt(0, assetsWtc.length-1);
	bottomcorner = randomInt(0, assetsWbc.length-1);

	window.$fxhashFeatures = {
		"Levels" : row,
		"Width" : colw,
		"Depth" : colb,
		"Habitation" : hab
	};

	print(window.$fxhashFeatures);
}

function setup() {
	c = createCanvas(704, 704);
	c.parent("container");

	pixelDensity(2);

	previewTimer = 200;
	
	noSmooth();
	noStroke();

	
	setImg();

}

function draw() {
	background(0, 0, 255);
	
	img.render();

	if(previewTimer > 0) {
		previewTimer--;
	}else if(previewTimer == 0) {
		previewTimer = -1;
		fxpreview();

	}
}

function keyTyped() {
	if (key === 's') {
		saveCanvas(c, 'Habitat-365_'+fxhash+'.png');
	}
	if (key === 'r') {
		setImg();
	}
	// uncomment to prevent any default behavior
	return false;
}

function setImg() {
	img = new Img();
}

class Img {
	constructor() {
		this.blocks = [];
		this.w = (colw+colb)*b;
		this.h = (row+2)*b;
		this.x = width/2 - (this.w/2)*b;
		//this.y = height-(4*b) - this.h*b;
		this.y = height/2 - (this.h/2)*b;
		this.groundw = this.w + 32;

		for(let c=0; c<colw; c++) {
			for(let r=0; r<row+2; r++) {
				if(r == 0) {
					if(c == 0) {
						this.blocks.push(new Block(c*b, r*b, 1, 1, 1));
					}else {
						this.blocks.push(new Block(c*b, r*b, 1, 1, 0));
					}
				}else if(r == row+1) {
					if(c == 0) {
						this.blocks.push(new Block(c*b, r*b, 1, 2, 1));
					}else {
						this.blocks.push(new Block(c*b, r*b, 1, 2, 0));
					}
				}else {
					this.blocks.push(new Block(c*b, r*b, 1, 0, 0));
				}
				
			}
		}

		for(let c=colb-1; c>=0; c--) {
			for(let r=row+1; r>=0; r--) {
				if(r == row+1) {
					if(c == colb-1) {
						this.blocks.push(new Block((colw*b)+c*b, r*b, 0, 2, 1));
					}else {
						this.blocks.push(new Block((colw*b)+c*b, r*b, 0, 2, 0));
					}
				}else if(r == 0) {
					if(c == colb-1) {
						this.blocks.push(new Block((colw*b)+c*b, r*b, 0, 1, 1));
					}else {
						this.blocks.push(new Block((colw*b)+c*b, r*b, 0, 1, 0));
					}
				}else {
					this.blocks.push(new Block((colw*b)+c*b, r*b, 0, 0, 0));
				}
			}
		}

	}

	render() {
		push();
		translate(this.x, this.y);
		scale(s);
		for(let i=0; i<this.blocks.length; i++) {
			this.blocks[i].render();
		}
		//fill(255);
		//rect(-16, this.h-2, this.groundw, 1);
		pop();
	}
}

class Block {
	constructor(_x, _y, _side, _pos, _corner) {
		this.x = _x;
		this.y = _y;
		this.side = _side;
		this.pos = _pos;
		this.corner = _corner;
		this.ext = random([0, 2, 4]);

		if(this.pos == 0) {

		}else {

		}

		if(this.side) {
			if(this.pos == 0) {
				this.ass = random(assetsW);
				if(this.ext > 0) {
					this.x -= this.ext;
				}
			}else {
				if(this.pos == 1) {
					if(this.corner == 1) {
						this.ass = assetsWtc[topcorner];
					}else {
						this.ass = random(assetsWt);
					}
				}else if(this.pos == 2) {
					if(this.corner == 1) {
						this.ass = assetsWbc[bottomcorner];
					}else {
						this.ass = random(assetsWb);
					}
				}
			}
			
		}else {
			if(this.pos == 0) {
				this.ass = random(assetsB);
				if(this.ext > 0) {
					this.x += this.ext;
				}
			}else {
				if(this.pos == 1) {
					if(this.corner == 1) {
						this.ass = assetsBtc[topcorner];
					}else {
						this.ass = random(assetsBt);
					}
				}else if(this.pos == 2) {
					if(this.corner == 1) {
						this.ass = assetsBbc[bottomcorner];
					}else {
						this.ass = random(assetsBb);
					}
				}
			}
		}

	}

	render() {
		push();
		translate(this.x, this.y);
		image(this.ass, 0, 0, this.ass.width, this.ass.height);
		if(this.pos == 0 && this.ext > 0) {
			if(this.side) {
				fill(0);
				rect(b, 0, this.ext, b);
			}else {
				fill(255);
				rect(-this.ext, 0, this.ext, b);
			}	
		}
		pop();
	}
}

function randomInt(min, max) {
	if(min == max) {
		return max;
	}else{
		return Math.floor(random(max - min + 1)) + min;
	}
}


function getObjKey(obj, value) {
	return Object.keys(obj).find(key => obj[key] === value);
}


// shuffle array function by ashleedawg https://stackoverflow.com/a/12646864
function shuffle(a){for(var j,i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}};