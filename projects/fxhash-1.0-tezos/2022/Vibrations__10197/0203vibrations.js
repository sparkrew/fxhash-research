let palette;
let url = ["https://coolors.co/ffbc42-d81159-8f2d56-218380-73d2de-0091ad",//fire
			"https://coolors.co/f49097-dfb2f4-f5e960-f2f5ff-55d6c2-788bce",//pastel
			"https://coolors.co/54457f-ac7b84-4c243b-b84a62-f5a6e6-810e6a",
			"https://coolors.co/bf4e30-c6ccb2-093824-e5eafa-78fecf-6d320d",
			"https://coolors.co/eca400-eb5e55-6c6063-d81e5b-c6d8d3-afd5aa",
			"https://coolors.co/e2fcef-402039-6f4952-d81e5b-7b7263-947eb0",
			"https://coolors.co/dad2d8-143642-0f8b8d-ec9a29-a8201a-ec7357",
			"https://coolors.co/cdc392-e8e5da-9eb7e5-648de5-304c89-7d451b",
			"https://coolors.co/1d2f6f-8390fa-fac748-f9e9ec-f88dad-a40e4c",
			"https://coolors.co/6ccff6-00858f-757780-fffffc-98ce00-fc440f",
			"https://coolors.co/ffff82-f5f7dc-b5d99c-5b12e2-e65f5c-4f345a",
			"https://coolors.co/321325-5f0f40-9a031e-cb793a-fcdc4d-f3a712",
			"https://coolors.co/ea7af4-b43e8f-6200b3-3b0086-290628-b8e1ff",
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
			"https://coolors.co/fefae0-0f0f0f-282929-938a8a-fbfbfb-007991",
			"https://coolors.co/b3001b-080708-3772ff-fc7a1e-e6e8e6-f5fdc6",
			"https://coolors.co/301a4b-6db1bf-ffeaec-f39a9d-3f6c51-cba135",
			"https://coolors.co/f3b700-faa300-e57c04-ff6201-f63e02-0a0908",
			"https://coolors.co/a4036f-048ba8-16db93-efea5a-f29e4c-eca400",
			"https://coolors.co/052f5f-005377-06a77d-d5c67a-f1a208-ccc9dc",
			"https://coolors.co/e3170a-a9e5bb-fcf6b1-f7b32b-2d1e2f-4d243d",
			"https://coolors.co/bcabae-0f0f0f-2d2e2e-716969-fbfbfb-9dd9d2",
			"https://coolors.co/091e05-004f2d-d87cac-f9b9c3-ffda22-faff7f",
			"https://coolors.co/dec3be-0f0f0f-2d2e2e-716969-fbfbfb-ff370a",
			"https://coolors.co/daa89b-ae847e-2c0e37-690375-cb429f-f3de2c",
			"https://coolors.co/f9dbbd-ffa5ab-da627d-a53860-450920-0267c1",
			"https://coolors.co/44355b-31263e-221e22-eca72c-ee5622-8b939c",
			"https://coolors.co/b6a4a8-0f0f0f-282929-938a8a-fbfbfb-6F502D",//Ninel
			"https://coolors.co/bbd8b3-f3b61f-a29f15-510d0a-191102-1c0b19",
			"https://coolors.co/b3001b-262626-f6f4f3-fc7a1e-7cb518-00afb5",
			"https://coolors.co/171738-2e1760-3423a6-7180b9-dff3e4-248232",
			"https://coolors.co/000100-a1a6b4-94c5cc-b4d2e7-f8f8f8-0c8346",
			"https://coolors.co/5465ff-788bff-9bb1ff-bfd7ff-e2fdff-151515",
			"https://coolors.co/0094c6-fee9e1-f18f01-271033-ade25d-000000",
			"https://coolors.co/f9a03f-f7d488-eaefb1-e9f7ca-ceb5a7-af1b3f",
			"https://coolors.co/353531-ec4e20-ff9505-016fb9-000000-7180ac",
			"https://coolors.co/8eb1c7-b02e0c-eb4511-c1bfb5-fefdff-531cb3",
			"https://coolors.co/cee5f2-accbe1-7c98b3-637081-536b78-a31621",
			"https://coolors.co/d68fd6-defff2-464f51-000009-0ff4c6-ff5400",
			"https://coolors.co/0d0b0b-d80056-ff8c01-ecedef-5cb8d7-9dd9d2",
			"https://coolors.co/9c92a3-c6b9cd-d6d3f0-feea00-ad2e24-0a100d",
			"https://coolors.co/f45b69-f6e8ea-22181c-5a0001-f13030-a594f9",
			"https://coolors.co/ff3864-e4dddd-fdfffc-69626d-dfe2e2-330036",
			"https://coolors.co/000022-001242-0094c6-005e7c-040f16-a6d3a0",
			"https://coolors.co/0a210f-14591d-99aa38-e1e289-acd2ed-e5e5e5",
			"https://coolors.co/230326-1e0a18-160029-120029-230522-f8e5ee"
]
let offset=10, gap;
let sq2=Math.sqrt(2), sq3=Math.sqrt(3);
let w = 2000; let h = 2000;
let t, t1, p , u, rt, tr, hue1, sat1, wh, whmin, answ, shad;
let dx, dy, wx,hy,nx,ny, stepx, stepy, curx,cury, curr, rndang, deltang;
let pallen, rndx, rndy, prevx, prevy, colorFight, isSameColor ;
let im1, im2, index, corn1, corn2, corn3, corn4, isClear;
let im = [];
let nstep, npeak;
let circles = [], c=[];
let curcolor, colfrom, colto, gcol, coeff, anga, colbg, c1, c2, c3, c4, c5, c6;
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
	poiwei=w/400;
	curcolor = int(fxrand()*url.length);
	//curcolor=23;
	//console.log(curcolor);
	palette = createPalette(url[curcolor]);
}

function draw() {
	wh=min(w, h);
	colbg=palette[int(fxrand()*palette.length)];
	fill(colbg);
	rect(0,0, w, h);
	fill(0, 0, 100, .7);
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
	for(let i=0; i<6; i++){palette[i]=fe[c[i]];}
	//settings
	nstep = int(2 + fxrand()*8); //horizont
	npeak = nstep; //vertical
	u = fxrand();   //choose shadowColor
	dx = w/nstep;
	dy = h/npeak;
	let rndnx = 3 + int(fxrand()*15);
	let rndny = 3 + int(fxrand()*15);
	//drawing
	for(let i=0; i < nstep; i++){
		for(let j=0; j < npeak; j++)
		{
			//drawRectofRectlight(i*dx, j*dy, dx, dy, 0, 0, int(fxrand()*3));
			
			drawRectofRectlight(i*dx, j*dy, dx, dy, rndnx, rndny, 0);
			drawRectofRectlight(i*dx, j*dy, dx, dy, rndnx, rndny, 2);	
			//drawRectLight(i*dx, j*dy, dx, dy, 10, 5, int(fxrand()*3));
			
		}
	}
	for(let i=0; i < nstep; i++)
	{
		curx = fxrand()*w;
		cury = fxrand()*h;
		let rndnx = 3 + int(fxrand()*5);
			let rndny = 3 + int(fxrand()*5);
		//drawRectofRectlight(curx, cury, dx, dy, rndnx, rndny, 0);	
	}
	
	//drawRectLight(100, 100, 500, 500, 8, 5, 3);
	
	//final
	drawingContext.shadowBlur = 0;
	strokeWeight(poiwei*33);
	stroke('#000000');
	

	noStroke();
	//patina(0, 0, w, h, 1+fxrand()*8);
	noFill();

	fxpreview();
}

function drawRectofRectlight (x, y, w, h, nx, ny, type)
{
	push();
		translate(x + w/2, y + h/2);
		push();
		(u<0.5) ? rotate(90) : rotate(0);
			
			if(type === 0)
			{
				drawRectLight (-w/2, -h/2, w/2, h/2, nx, ny, 1);
				drawRectLight (-w/2, 0, w/2, h/2, nx, ny, 2);
				drawRectLight (0, -h/2, w/2, h/2, nx, ny, 0);
				drawRectLight (0, 0, w/2, h/2, nx, ny, 3);
			}
			if(type === 1)
			{
				drawRectLight (-w/2, -h/2, w/2, h/2, nx, ny, 2);
				drawRectLight (-w/2, 0, w/2, h/2, nx, ny, 1);
				drawRectLight (0, -h/2, w/2, h/2, nx, ny, 3);
				drawRectLight (0, 0, w/2, h/2, nx, ny, 0);
			}
			if(type === 2)
			{
				drawRectLight (-w/2, -h/2, w/2, h/2, nx, ny, 3);
				drawRectLight (-w/2, 0, w/2, h/2, nx, ny, 0);
				drawRectLight (0, -h/2, w/2, h/2, nx, ny, 2);
				drawRectLight (0, 0, w/2, h/2, nx, ny, 1);
			}
			if(type === 3)
			{
				drawRectLight (-w/2, -h/2, w/2, h/2, nx, ny, 0);
				drawRectLight (-w/2, 0, w/2, h/2, nx, ny, 3);
				drawRectLight (0, -h/2, w/2, h/2, nx, ny, 1);
				drawRectLight (0, 0, w/2, h/2, nx, ny, 2);
			}
		pop();
	pop();
}


function drawRectLight (x, y, w, h, nx, ny, type)
{
	let dx = w/nx;
	let dy = h/(ny - .5);
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = '#000000';
	//drawingContext.shadowOffsetX = 10;
	push();
	translate(x, y);
	
	push();	
	
	
	strokeWeight(0.1);
	stroke('#000000');
	noStroke();
	let coeffx, coeff2;
	if(type === 0) //leftup to right-down
	{
	for(let i=nx; i>0; i--){
		coeff2 = map(i, 0, nx, 0, 1);
		let collo = palette[int(fxrand()*palette.length)];
		fill(collo);
		fill(palette[int(fxrand()*palette.length)]);
		let gradient = drawingContext.createLinearGradient(0, 0, w, h);
			gradient.addColorStop(0, collo);
			
			gradient.addColorStop(1, '#ffffff05');
			
			//gradient.addColorStop(1, collo);
			drawingContext.fillStyle = gradient;
		beginShape();
		vertex(0, 0);
		for(let j = 1; j < ny; j++)
		{
			coeffx = map(j, 0, ny, 0, 1);
			vertex(coeffx * w * coeff2, dy *(j - .5));
			vertex(coeffx * w * coeff2, dy *(j));
		}
		vertex(w * coeff2, h);
		vertex(0, h);
		vertex(0, 0);
		endShape(CLOSE);
	
	}
	}
	if(type === 1) //rightup to leftdown
	{
	for(let i=nx; i>0; i--){
		coeff2 = map(i, 0, nx, 0, 1);
		let collo = palette[int(fxrand()*palette.length)].toString('#rrggbb')+'99';
		fill(collo);
		fill(palette[int(fxrand()*palette.length)]);
		let gradient = drawingContext.createLinearGradient(w, 0, 0, h);
			gradient.addColorStop(0, collo);
			
			gradient.addColorStop(1, '#ffffff05');
			
			//gradient.addColorStop(1, collo);
			drawingContext.fillStyle = gradient;
		beginShape();
		vertex(w, 0);
		for(let j = 1; j < ny; j++)
		{
			coeffx = map(j, 0, ny, 0, 1);
			vertex(w - coeffx * w * coeff2, dy *(j - .5));
			vertex(w - coeffx * w * coeff2, dy *(j));
		}
		vertex(w - w * coeff2, h);
		vertex(w, h);
		vertex(w, 0);
		endShape(CLOSE);
	
	}
	}
	if(type === 2) //rightdown to leftup
	{
	for(let i=nx; i>0; i--){
		coeff2 = map(i, 0, nx, 0, 1);
		let collo = palette[int(fxrand()*palette.length)].toString('#rrggbb')+'99';
		fill(collo);
		fill(palette[int(fxrand()*palette.length)]);
		let gradient = drawingContext.createLinearGradient(w, h, 0, 0);
			gradient.addColorStop(0, collo);
			
			gradient.addColorStop(1, '#ffffff05');
			
			//gradient.addColorStop(1, collo);
			drawingContext.fillStyle = gradient;
		beginShape();
		vertex(w, h);
		for(let j = 1; j < ny; j++)
		{
			coeffx = map(j, 0, ny, 0, 1);
			vertex(w - coeffx * w * coeff2, h- dy *(j - .5));
			vertex(w - coeffx * w * coeff2, h - dy *(j));
		}
		vertex(w - w * coeff2, 0);
		vertex(w, 0);
		vertex(w, h);
		endShape(CLOSE);
	
	}
	}
	if(type === 3) //leftdown to rightup
	{
	for(let i=nx; i>0; i--){
		coeff2 = map(i, 0, nx, 0, 1);
		let collo = palette[int(fxrand()*palette.length)].toString('#rrggbb')+'99';
		fill(collo);
		fill(palette[int(fxrand()*palette.length)]);
		let gradient = drawingContext.createLinearGradient(0, h, w, 0);
			gradient.addColorStop(0, collo);
			
			gradient.addColorStop(1, '#ffffff05');
			
			//gradient.addColorStop(1, collo);
			drawingContext.fillStyle = gradient;
		beginShape();
		vertex(0, h);
		for(let j = 1; j < ny; j++)
		{
			coeffx = map(j, 0, ny, 0, 1);
			vertex(coeffx * w * coeff2, h - dy *(j - .5));
			vertex(coeffx * w * coeff2, h - dy *(j));
		}
		vertex(w * coeff2, 0);
		vertex(0, 0);
		vertex(0, h);
		endShape(CLOSE);
	
	}
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
