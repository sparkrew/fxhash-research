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

let offset=20;

let w = 1200; let h = w;
let x, y, z, r1, r2, p, q, r, g, b, k, t;
let dx, dy, wx,hy,nx,ny, stepy, rndH, hbezi, curx,cury, curpal;
let rndx, rndy, prevx, prevy, value, c;
let curcolor, x1, y1, z1;
let queueNumber = [0, 1, 2, 3, 4];
let nlines = 500;



function setup() {
	h=windowHeight*.95;
	w=h;
	createCanvas(w, h);
	colorMode(RGB, 255, 255, 255, 1);
	angleMode(DEGREES);
	noStroke();
	noLoop();
	
}

function draw() {
	curcolor = int(fxrand()*url.length);
	palette = createPalette(url[curcolor]);
	queueNumber[0] = int(fxrand()*4.5); if (queueNumber[0]==5) {queueNumber[0]==0;}
			while (queueNumber[1] == queueNumber[0]) { queueNumber[1] = int(fxrand()*4.5);}
			while (queueNumber[2] == queueNumber[0] || queueNumber[2] == queueNumber[1]) { queueNumber[2] = int(fxrand()*4.5);}
			while (queueNumber[3] == queueNumber[0] || queueNumber[3] == queueNumber[1] || queueNumber[3] == queueNumber[2]) { queueNumber[3] = int(fxrand()*4);}
			while (queueNumber[4] == queueNumber[0] || queueNumber[4] == queueNumber[1] || queueNumber[4] == queueNumber[2] || queueNumber[4] == queueNumber[3]) { queueNumber[4] = int(fxrand()*4.1);}
	curpal=palette;
	for(let f=0; f<palette.length; f++){palette[f]=curpal[queueNumber[f]];}
	
	
	background(palette[0]);
	background(0,0,0,.9);
	offset=h/40;
	k=2+fxrand()*4;//size circle
	
	rndx=5+fxrand()*30;//wind
	if(fxrand()<0.5){ rndx = -1*rndx; }
	rndy=2+fxrand()*2;
	for(let i=0; i<nlines; i++){
		x = offset+fxrand()*(w-offset*2);
		y = 1/5*h+fxrand()*(4/5*h-offset);
		nx=fxrand()*rndx; 
		if((x+nx)>(w-offset) ){nx=w-offset-x;}
		if((x+nx)<offset ){nx=offset-x;}
		
		ny=abs(nx*rndy);
		if((y+ny)>(h-offset) ){ny=h-offset-y;}
		stroke(255,255,255,fxrand()*.3);
		line(x, y, x+nx, y+ny);
	}
	noStroke();
	
	for (let i=offset; i<h-offset; i+=k/2) {
        for (let j=0; j<w/5; j++){
		x=int(fxrand()*w);
		c = palette[int(1+fxrand()*3)];
		fill(red(c), green(c), blue(c), .2+fxrand());
		dx=w/2*(.98-sin(map(i, 0, h-k, 0, 90)))+fxrand()*w/10;
		
		if(x > (w/2-dx) && x> offset && x<(w-offset) && x < (w/2+dx)){ circle(x, i, map(i, 0, h-k, k, k*.6)); }
		}
    }
	
	for(let i=3/5*h; i<h-offset; i++){
		
		        for (let j=0; j<i-3/5*h; j+=k){
					x = offset+fxrand()*(w-offset*2);
					c = palette[int(1+fxrand()*3)];
					t = abs(x-w/2);
					t = dist(x, i, w/2, h-offset);
					q = map(t, 0, w/2, 0.8, 0.1);
					fill(red(c), green(c), blue(c), fxrand()*q);
					circle(x, i, k/2+fxrand()*k/2);
				}
	}
	
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

function mouseClicked() {
	
	redraw();
}