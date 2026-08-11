
// © 2022 Gábor Réthi (cloudnoise) <cloudnoise@gmail.com>

let c;

// pixel x pixel
let grid = 32;

// pixel scale
let s = 24;

let img;
let palette, colorset;
let csky, csun, cshadow, cwindow;
let blocknum = 6;
let t = 400;
let buildingHeight = 0;
let blockOrder = [];

function setup() {
	c = createCanvas(1080, 1080);
	c.parent("container");

	let fxr = Math.floor(999999 * fxrand());
	randomSeed(fxr);
	noiseSeed(fxr);
	pixelDensity(2);

	palette = random(palettes);
	colorset = random(palette.sets);
	csky = color(colorset.sky.color);
	csun = color(colorset.sun.color);
	cshadow = color(colorset.shadow.color);
	cwindow = color(colorset.window.color);

	blocknum = randomInt(3, 8);

	img = new Img();

	
	window.$fxhashFeatures = {
		"Base Blocks" : blocknum,
		"Height" : getHeightString(),
		"Palette" : palette.name,
		"Sky" : colorset.sky.name,
		"Sun" : colorset.sun.name,
		"Shadow" : colorset.shadow.name,
		"Window" : colorset.window.name
	};
	
	noStroke();
	
}

function draw() {
	if(t>0) {
		background(csky);
		
		img.render();
		
		t--;
		if(t==1) {
			fxpreview();
		}
	}
}

function keyTyped() {
	if (key === 's') {
		saveCanvas(c, 'BrutalistM_'+fxhash+'.png');
	}
	if (key === 'n') {
		img.blocks = shuffle(img.blocks);
		img.render();
	}
	if (key === 'r') {
		img.blocks = blockOrder;
		img.render();
	}
	return false;
}

class Img {
	constructor() {
		this.blocks = [];
		let count = blocknum;
		let last = 0;

		for(let i = 0; i < count; i++) {
			if(i == count-1) last = 1;
			this.blocks.push(new Block(i*20, last, i+1, count));
		}

		blockOrder = this.blocks;
	}
	
	render() {
		push();
		translate(width/2-grid/2*s, height/2-grid/2*s);
		scale(s);
		for(let i = 0; i < this.blocks.length; i++){
			this.blocks[i].render();
		}
		pop();
	}
}

class Block {
	constructor(_startanim, _last, _id, _allblock) {
		this.id = _id;
		this.allBlocks = _allblock;
		let minWidth = this.allBlocks-this.id+1;
		let maxWidth = (grid/2)-4-this.id;

		this.wleft = randomInt(minWidth, maxWidth);
		this.wright = randomInt(minWidth, maxWidth);

		this.w = this.wleft + this.wright;
		this.h = randomInt(1, grid);
		buildingHeight = max(buildingHeight, this.h);
		this.x = randomInt(4, grid-this.w-2);
		this.y = grid - this.h;

		this.timer = _startanim;
		this.isLast = _last;

		this.leftSide = new BlockSide(this.wleft, this.h, this.x, this.y, 0, 100, this.isLast);
		this.rightSide = new BlockSide(this.wright, this.h, this.x + this.wleft, this.y, 1, 100, this.isLast);
	}

	render() {
		if(this.timer > 0) {
			this.timer--;
		}else {
			this.leftSide.render();
			this.rightSide.render();
		}
		
	}
}

class BlockSide {
	constructor(_width, _height, _xpos, _ypos, _dir, _startanim, _last) {
		this.w = _width;
		this.h = 0;
		this.toh = _height;
		this.x = _xpos;
		this.y = 0;
		this.toy = _ypos;
		this.ground = _ypos + this.toh;
		this.easing = 0.06;

		this.timer = _startanim;
		this.isLast = _last;

		this.dir = _dir;
		this.col = (this.dir) ? cshadow : csun;

		this.gaps = new Gaps(this.w, this.toh, this.dir, 40, this.isLast);
		this.extension = new Extension(this.w, this.toh, this.dir, 20, this.isLast);
	}

	render() {
		let disth = this.toh -this.h;
		this.h += disth * this.easing;
		this.y = this.toy + this.toh - this.h;
		push();
		translate(this.x, this.y);
		fill(this.col);
		rect(0, 0, this.w, this.h);

		if(this.timer > 0) {
			this.timer--;
		}else {
			this.gaps.render();
			this.extension.render();
		}
		
		pop();
	}
}

class Gaps {
	constructor(_framewidth, _frameheight, _dir, _startanim, _last) {
		this.fw = _framewidth;
		this.fh = _frameheight;
		this.dir = _dir;
		this.col = (this.dir) ? csun : cshadow;

		this.timer = _startanim;
		this.isLast = _last;

		this.minCount = 0;
		this.maxCount = Math.floor((this.fw-2)/2);
		if(this.isLast && this.maxCount > 0) {
			this.minCount = 1;
		}
		this.count = randomInt(this.minCount, this.maxCount);
		this.w = (this.count*2)+1;
		this.h = 0;
		this.toh = randomInt(0, this.fh);
		this.x = randomInt(1, this.fw-this.w);
		this.y = randomInt(0, this.fh-this.toh);
		this.easing = 0.09;

	}

	render() {
		if(this.timer > 0) {
			this.timer--;
		}else {
			let disth = this.toh - this.h;
			this.h += disth * this.easing;
			push();
			fill(this.col);
			for(let i = 0; i < this.count; i++) {
				rect(this.x+(i*2), this.y, 1, this.h);
			}
			pop();
		}
	}
}

class Extension {
	constructor(_framewidth, _frameheight, _dir, _startanim, _last) {
		this.fw = _framewidth;
		this.fh = _frameheight;
		this.dir = _dir;
		this.col1 = (this.dir) ? cshadow : csun;
		this.col2 = (this.dir) ? csun : cshadow;
		this.easing = 0.1;

		this.timer = _startanim
		this.windowwait = 40;
		this.isLast = _last;

		this.minThick = 0;
		this.maxThick = 4;
		if(this.isLast) {
			this.minThick = 1;
		}

		this.thick = 0;
		this.tothick = randomInt(this.minThick, this.maxThick);
		this.w = 0;
		this.tow = this.fw;
		this.h = randomInt(1, this.fh);
		this.y = randomInt(0, this.fh-this.h);
		this.startx = (this.dir) ? this.tothick : -this.tothick;

		this.hasWindow = (randomInt(0, 2) > 0) ? 1 : 0;
		//this.hasWindow = 1;
		this.winw = 0;
		this.winTow = this.tow-2;

	}

	render() {
		if(this.timer > 0) {
			this.timer--;
		}else {
			let distt = this.tothick - this.thick;
			this.thick += distt * this.easing;

			let distw = this.tow - this.w;
			this.w += distw * this.easing;

			push();
			if (this.tothick > 0) {
				fill(this.col2);
				if(this.dir) {
					rect(0, this.y, this.thick, this.h);
					this.startx = this.thick;
				}else {
					rect(this.tow-this.thick, this.y, this.thick, this.h);

					this.startx = 0-this.thick;

					// sun side ext shadow below
					if(this.y+this.h < this.fh) {
						rect(0, this.y+this.h, this.w, 1);
					}
				}
				fill(this.col1);
				rect(this.startx, this.y, this.tow, this.h);
			}

			
			if(this.windowwait > 0) {
				this.windowwait--;
			}else {
				if(this.hasWindow && this.h >= 3 && this.w >= 3) {
					let distw = this.winTow - this.winw;
					this.winw += distw * this.easing;

					if(this.h == 3) {
						fill(this.col2);
					}else {
						fill(cwindow);
					}
					
					if(this.dir) {
						rect(this.startx+1+this.winTow-this.winw, this.y+1, this.winw, this.h-2);
						fill(this.col2);
						rect(this.startx+this.w-2, this.y+1, 1, this.h-2);
					}else {
						rect(this.startx+1, this.y+1, this.winw, this.h-2);
						fill(this.col2);
						rect(this.startx+1, this.y+1, 1, this.h-2);
					}
					
				}
			}
			pop();
		}
	}
}


function getHeightString() {
	if(buildingHeight < 15) return "Short"
	if(buildingHeight < 26) return "Medium"
	else return "Tall";
}


function randomInt(min, max) {
	if(min == max) {
		return max;
	}else{
		return Math.floor(random(max - min + 1)) + min;
	}
}

function sorter(a, b){
	return a - b;
}

function getObjKey(obj, value) {
	return Object.keys(obj).find(key => obj[key] === value);
}


// Fisher-Yates (aka Knuth) Shuffle
// from: https://stackoverflow.com/a/2450976

function shuffle(array) {
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}