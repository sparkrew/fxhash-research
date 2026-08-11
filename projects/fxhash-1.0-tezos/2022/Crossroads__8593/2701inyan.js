let palette, palette2;
let url = ["https://coolors.co/f49097-dfb2f4-f5e960-f2f5ff-55d6c2-788bce",//pastel
			"https://coolors.co/54457f-ac7b84-4c243b-b84a62-f5a6e6-810e6a",
			"https://coolors.co/bf4e30-c6ccb2-093824-e5eafa-78fecf-6d320d",
			"https://coolors.co/002500-929982-edcbb1-b7245c-7c3238-05668d",
			"https://coolors.co/eca400-eb5e55-6c6063-d81e5b-c6d8d3-afd5aa",
			"https://coolors.co/e2fcef-402039-6f4952-d81e5b-7b7263-947eb0",
			"https://coolors.co/dad2d8-143642-0f8b8d-ec9a29-a8201a-ec7357",
			"https://coolors.co/cdc392-e8e5da-9eb7e5-648de5-304c89-7d451b",
			"https://coolors.co/1d2f6f-8390fa-fac748-f9e9ec-f88dad-a40e4c",
			"https://coolors.co/6ccff6-00858f-757780-fffffc-98ce00-fc440f",
			"https://coolors.co/ffff82-f5f7dc-b5d99c-5b12e2-e65f5c-4f345a",
			"https://coolors.co/321325-5f0f40-9a031e-cb793a-fcdc4d-f3a712",
			"https://coolors.co/ea7af4-b43e8f-6200b3-3b0086-290628-b8e1ff",
			"https://coolors.co/ffbc42-d81159-8f2d56-218380-73d2de-0091ad",//fire
			"https://coolors.co/ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9-8385c3",//pastel
			"https://coolors.co/b8b8d1-5b5f97-ffc145-fffffb-ff6b6c-5e3023",
			"https://coolors.co/582707-972d07-ff4b3e-ffb20f-ffe548-218380",
			"https://coolors.co/f2dc5d-f2a359-db9065-a4031f-240b36-011936",
			"https://coolors.co/2e86ab-a23b72-f18f01-c73e1d-3b1f2b-616751",
			"https://coolors.co/f6d8ae-2e4057-083d77-da4167-f4d35e-df2935",
			"https://coolors.co/485696-e7e7e7-f9c784-fc7a1e-f24c00-955e42",
			"https://coolors.co/602e60-82204a-558c8c-e8db7d-eff7ff-d1b490",
			"https://coolors.co/1f271b-0b4f6c-145c9e-cbb9a8-dcc7be-a6ebc9",
			"https://coolors.co/0a0a0a-f7f3fa-0077e1-f5d216-fc3503-B52603",//mondrian
			"https://coolors.co/ffe0b5-ede580-a4af69-4c2719-d35269-2b4141",
			"https://coolors.co/494c6f-92dce5-f8f7f9-f7ec59-ff66d8-9368b7",//pastel+dark
			"https://coolors.co/042a2b-5eb1bf-cdedf6-ef7b45-d84727-edb458",
			"https://coolors.co/4464ad-a4b0f5-f58f29-7d4600-466995-553d36",
			"https://coolors.co/20bf55-0b4f6c-01baef-fbfbff-757575-fb5012",
			"https://coolors.co/b80c09-0b4f6c-01baef-fbfbff-75bbe6-f7c59f",//class
			"https://coolors.co/cfdbd5-e8eddf-f5cb5c-9a9a98-333533-084b83",
			"https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff-084c61",
			"https://coolors.co/7e64a6-372549-774c60-b75d69-eacdc2-ef946c",
			"https://coolors.co/054a91-3e7cb1-81a4cd-dbe4ee-f17300-fac748",
			"https://coolors.co/a63446-fbfef9-0c6291-000066-7e1946-cd9fcc",
			"https://coolors.co/fe4a49-fed766-009fb7-e6e6ea-f4f4f8-605770",
			"https://coolors.co/0a1128-001f54-034078-1282a2-fefcfb-c0d6df",
			"https://coolors.co/f4e409-eeba0b-c36f09-a63c06-710000-283044",
			"https://coolors.co/b3e7dc-a6b401-eff67b-d50102-6c0102-542344",//fire2
			"https://coolors.co/213036-265500-96d800-f58f92-b7241b-b87d4b",
			"https://coolors.co/7fb069-fffbbd-e6aa68-ca3c25-9d8e1b-6b7672",
			"https://coolors.co/250902-38040e-640d14-800e13-ad2831-1b998b",
			"https://coolors.co/301a4b-6db1bf-ffeaec-f39a9d-3f6c51-cba135",
			"https://coolors.co/f3b700-faa300-e57c04-ff6201-f63e02-0a0908",
			"https://coolors.co/a4036f-048ba8-16db93-efea5a-f29e4c-eca400",
			"https://coolors.co/052f5f-005377-06a77d-d5c67a-f1a208-ccc9dc",
			"https://coolors.co/e3170a-a9e5bb-fcf6b1-f7b32b-2d1e2f-4d243d",
			"https://coolors.co/bcabae-0f0f0f-2d2e2e-716969-fbfbfb-9dd9d2",
			"https://coolors.co/091e05-004f2d-d87cac-f9b9c3-ffda22-faff7f",
			"https://coolors.co/dec3be-0f0f0f-2d2e2e-716969-fbfbfb-ff370a"
	
]

let offset=2, gap;
let sq2=Math.sqrt(2), sq3=Math.sqrt(3);
let w = 1200; let h = 1200;
let t, t1, p , u, rt, tr, hue1, sat1, wh, whmin, answ;
let dx, dy, wx,hy,nx,ny, stepx, stepy, curx,cury, curr, rndang, deltang;
let pallen, rndx, rndy, prevx, prevy, rndfig ;
let im1, im2, index;
let im = [];
let nstrip, npeak, x10, x20, y10, y20;
let circles = [], c=[];
let curcolor, colfrom, colto, gcol, coeff, anga, colbg, da;
let poiwei=6, offik=w/40;
     

function setup() {
	noiseSeed(int(fxrand()*10000000));
	//h=windowHeight*.99;
	//w=windowWidth*.99;
	createCanvas(w, h);
	colorMode(HSB, 360, 100, 100, 1);
	angleMode(DEGREES);
	noStroke();
	noLoop();
	poiwei=w/800+int(fxrand()*2);
	curcolor = int(fxrand()*url.length);
	//curcolor=23;
	//console.log(curcolor);
	palette = createPalette(url[curcolor]);
	gcol = int(fxrand()*url.length);
	palette2 = createPalette(url[gcol]);
}

function draw() {
	wh=min(w, h);
	colbg=palette[int(fxrand()*palette.length)];
	fill(colbg);
	rect(0,0, w, h);
	fill(0, 0, 0, .5);
	rect(0,0, w, h);
	//random 6 colors
	c[0]=int(fxrand()*palette.length);
	c[4]=c[3]=c[2]=c[1]=c[0];
	while(c[1]==c[0])c[1]=int(fxrand()*palette.length);
	while(c[2]==c[0] || c[2]==c[1])c[2]=int(fxrand()*palette.length);
	while(c[3]==c[0] || c[3]==c[1] || c[3]==c[2])c[3]=int(fxrand()*palette.length);
	while(c[4]==c[0] || c[4]==c[1] || c[4]==c[2] || c[4]==c[3])c[4]=int(fxrand()*palette.length);
	c[5]=15-c[0]-c[4]-c[3]-c[2]-c[1];
	let fe=createPalette(url[curcolor]);
	let be=createPalette(url[gcol]);
	for(let i=0; i<6; i++){palette[i]=fe[c[i]]; palette2[i]=be[c[i]];}
	//settings
	da=int(w*.02);
	nstrip = 45;
	dx=w/nstrip;
	wx=w/100;
	(fxrand()<.6) ? rndang = 0 : rndang = int(fxrand()*90);
	
	

	push();
	rotate(rndang);
	for(let i=-100; i<100; i+=1){			
		drawingContext.shadowBlur = 0;
		drawingContext.shadowColor = '#ffffff';
		//noFill();
		(i%2===0) ? stroke(0,0,100,.05) : stroke(0,0,0,.12);		
		line(i*wx, -2*h, i*wx, 2*h);	
		line(-2*w, i*wx, 2*w, i*wx);	
	}
	pop();
	stroke(0,0,0);
	strokeWeight(.5);
		for(let i=0; i<nstrip; i++){
			
		//rndx=i*dx+fxrand()*dx;
		rndx=fxrand()*w;
		
		rndy=fxrand()*h;
		
		da=int(w*.01+w*fxrand()*.01);
		rndfig=int(1+fxrand()*4);
		intersection(rndx, rndy, rndfig, da);
			
	}
	drawingContext.shadowBlur = 0;
	noStroke();
	rectMode(CENTER);
	for(let i=0; i<5; i++){
		rndx=fxrand()*w;
		rndy=fxrand()*h;
		for(let j=100; j>0; j-=10){ 
		fill(0,0,100,.05); 
		//rect(rndx, rndy, j, j);
		}
	}
	//final	
	//patina(0, 0, w, h, 1+fxrand()*8);
		push();
	rotate(rndang);
	for(let i=-100; i<100; i+=1){			
		drawingContext.shadowBlur = 0;
		drawingContext.shadowColor = '#ffffff';
		//noFill();
		(i%2===0) ? stroke(0,0,100,.05) : stroke(0,0,0,.12);		
		line(i*wx, -2*h, i*wx, 2*h);
		line(-2*w, i*wx, 2*w, i*wx);		
		
	}	
	noFill();
	fxpreview();
}

function linedefect (x1, y1, x2, y2){
	let rasst = dist(x1, y1, x2, y2);
	let vect = createVector(x2-x1, y2-y1);
	for(let i=0; i<rasst; i++){
		coeff=map(i, 0, rasst, 0, 1);
		if(fxrand()<0.8)point(x1+coeff*vect.x, y1+coeff*vect.y);
		if(fxrand()<0.2)point(x1+coeff*vect.x+1, y1+coeff*vect.y-1);
		if(fxrand()<0.2)point(x1+coeff*vect.x-1, y1+coeff*vect.y+1);
	}
}

function intersection (x, y, na, d){
	drawingContext.shadowBlur = 4;
	drawingContext.shadowColor = '#000000';
	
	push();
		translate(x, y);
		push();
		rotate(rndang);
		for(let i=na; i>0; i--){
			let gradient = drawingContext.createLinearGradient(0, 0, w/2,0);
			gradient.addColorStop(0, palette[i]);
			gradient.addColorStop(.7, '#ffffff75');
			gradient.addColorStop(1, palette[i].toString('#rrggbb')+'80');
			drawingContext.fillStyle = gradient;
			//fill(palette[i].toString('#rrggbb'));
			drawingContext.shadowOffsetX = -2;
			drawingContext.shadowOffsetY = 2;
			rect(-i*d, 0, 2*w, i*d);
			drawingContext.shadowOffsetX = 0;
			drawingContext.shadowOffsetY = 0;
			gradient = drawingContext.createLinearGradient(0, 0, 0, -h/2);
			gradient.addColorStop(0, palette[i]);
			gradient.addColorStop(.7, '#ffffff75');
			gradient.addColorStop(1, palette[i].toString('#rrggbb')+'90');
			drawingContext.fillStyle = gradient;
			rect(-i*d, -i*d, d, -2*h);
			drawingContext.shadowOffsetX = 2;
			drawingContext.shadowOffsetY = -2;
			gradient = drawingContext.createLinearGradient(0, 0, -w/2,0);
			gradient.addColorStop(0, palette2[i]);
			gradient.addColorStop(.7, '#ffffff75');
			gradient.addColorStop(1, palette2[i].toString('#rrggbb')+'80');
			drawingContext.fillStyle = gradient;
			//fill(palette2[i].toString('#rrggbb'));
			rect(i*d, -i*d, -2*w, i*d);
			drawingContext.shadowOffsetX = 0;
			drawingContext.shadowOffsetY = 2;
			gradient = drawingContext.createLinearGradient(0, 0, 0, h/2);
			gradient.addColorStop(0, palette2[i]);
			gradient.addColorStop(.7, '#ffffff75');
			gradient.addColorStop(1, palette2[i].toString('#rrggbb')+'90');
			drawingContext.fillStyle = gradient;
			rect((i-1)*d, i*d, d, 2*h);
		}
		pop();
	pop();
}

function patina(zx, zy, zw, zh, dia){
	let nitera = (zw-zx-dia)*(zh-zy-dia)*.03;
	for(let i=0; i<nitera; i++){
		let x=zx+fxrand()*(zw-zx-dia);
		let y=zy+fxrand()*(zh-zy-dia);
		let a=fxrand()*dia*1;
		let b=fxrand()*dia*10;
		if(fxrand()<0.5){fill(0,0,10,.09);}else{fill(0,0,100,.09);}
		//ellipse(x, y, a, b);
		rect(x, y, a, b);
		
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
	//answ*=-1;
	//redraw();
}
