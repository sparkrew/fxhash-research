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
			"https://coolors.co/230326-1e0a18-160029-120029-230522-f8e5ee",
			"https://coolors.co/cbe896-fffffc-beb7a4-ff7f11-ff1b1c-22223b",
			"https://coolors.co/9b5de5-f15bb5-fee440-00bbf9-00f5d4-bdede0",
			"https://coolors.co/100b00-85cb33-efffc8-a5cbc3-3b341f-cc5803",
			"https://coolors.co/000000-502f4c-70587c-c8b8db-f9f4f5-b80c09",
			"https://coolors.co/000000-2f1000-621b00-945600-c75000-85cb33",
			"https://coolors.co/a5d0a8-8cada7-110b11-b7990d-f2f4cb-f18f01",
			"https://coolors.co/22162b-451f55-724e91-e54f6d-f8c630-23f0c7",
			"https://coolors.co/212738-f97068-d1d646-edf2ef-57c4e5-4f7cac",
			"https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533-ED6A5A",
			"https://coolors.co/4d2d30-ff1f1f-fffffb-a4a4a2-646864-183A37",
			"https://coolors.co/0094c6-0f0f0f-2d2e2e-716969-fbfbfb-D9DBF1",
			"https://coolors.co/f15156-0f0f0f-474848-4a4545-d9dbf1-C0BDA5",
			"https://coolors.co/998fc7-0f0f0f-474848-c0bda5-d9dbf1-05299E"
]
let offset=10, gap;
let sq2=Math.sqrt(2), sq3=Math.sqrt(3);
let w = 800; let h = 800;
let t, s, t1, p , u, rt, tr, hue1, sat1, wh, whmin, answ, nn, ax, ay;
let dx, dy, dr,  wx,hy,nx,ny, stepx, stepy, curx,cury, curr, hfloor, rndang, curang;
let curwei, rndx, rndy, prevx, prevy, typeArrow=0, isNotGradi, isContour, isDark;
let im1, im2, index, deltaw, deltah, clrfrom, clrto, rnddeltah, rnddir, rndrot;
let ang = [], lx = [], ly = [], ldx = [], ldy = [];
let nstep, npeak, isOpacity, isPacking, isColorStroke = true;
let circles = [], c = [];
let curcolor, curcolor2, colfrom, colto, gcol, coeff, anga, colbg, c1, c2, c3, c4, c5, c6;
let poiwei=4, offik=w/100;
let ugol, dira, xd, yd, isCenterpersp, coeffstart;
let isChaos = (fxrand()<.7) ? true : false;
            

function setup() {
	noiseSeed(int(fxrand()*10000000));
	//h=windowHeight*.99;
	//w=windowWidth*.99;
	createCanvas(w, h);
	colorMode(HSB, 360, 100, 100, 1);
	angleMode(DEGREES);
	noStroke();
	//smooth();
	noLoop();
	poiwei=1.6+fxrand()*9;
	curcolor = int(fxrand()*url.length);
	//curcolor2 = int(fxrand()*url.length);
	//curcolor=0;
	//curcolor = url.length-1;
	console.log(curcolor);
	palette = createPalette(url[curcolor]);
		
}

function draw() {
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
	
	
	u=fxrand();
	(fxrand()<.3) ? isDark = true : isDark = false;
	(fxrand()<.6) ? isPacking = true : isPacking = false;
	if(u<.25)typeArrow=0;
	if(u>=.25&u<.5)typeArrow=1;
	if(u>=.5&u<.75)typeArrow=2;
	if(u>=.75)typeArrow=3;
	
	wh=min(w, h);
	colbg=palette[int(fxrand()*palette.length)];
	fill(colbg);
			let gradi = drawingContext.createLinearGradient(0, 0, w, h);
			if(typeArrow===1)gradi = drawingContext.createLinearGradient(0, h, w, 0);
			if(typeArrow===2)gradi = drawingContext.createLinearGradient(0, 0, w, 0);
			if(typeArrow===3)gradi = drawingContext.createLinearGradient(0, 0, 0, h);
			gradi.addColorStop(0, palette[0]);
			gradi.addColorStop(.5, palette[1]);
			gradi.addColorStop(1, palette[0]);
			drawingContext.fillStyle = gradi;
	rect(0,0, w, h);
	(isDark) ? fill(0, 0, 0, .5) : fill(0, 0, 100, .6);
	//fill(0, 0, 0, .9);
	rect(0,0, w, h);
	//rect(w*.03,h*.03, w*.94, h*.94);
	//drawingContext.clip();	
	//settings
	nx = 2+int(fxrand()*3);
	dx = w/nx;
	ny = 2+int(fxrand()*3);
	dy = h/ny;
	coeffstart = .05+fxrand()*.15;
	nn = 5;
	poiwei=1+fxrand()*1;
	gap = poiwei*5;
	rndx = w*.3+fxrand()*w*.4;
	rndy = fxrand()*h;
	rndx=w*.5; 
	rndy = h*.5;
	//strokeCap(SQUARE);
	strokeWeight(poiwei);
	stroke(palette[int(fxrand()*palette.length)]);
		  drawingContext.shadowOffsetX = 5;
		  drawingContext.shadowOffsetY = 5;
		  drawingContext.shadowBlur = 3;
		  drawingContext.shadowColor = '#00000010';
		  //(!isDark) ? drawingContext.shadowColor = '#00000010' : drawingContext.shadowColor = '#ffffff30'; 
	//drawingContext.filter = 'blur(2px)';
	//drawingContext.filter = 'opacity(30%)';
	noFill();
	curx = 0; cury = 0; index =1;
	lx[0] = 0; ly [0] = 0;
	while(curx<w)
	{
		
		let rndwx = w*.2 + fxrand()*w*.2;
		if(curx + rndwx>w*.9)rndwx = w - curx;
		lx[index] = lx[index-1] + rndwx;
		ldx[index-1] = rndwx;
		index++;
		curx+=rndwx;
	}
			index = 1;
		while(cury<h)
	{
		
		let rndhy = h*.2 + fxrand()*h*.2;
		if(cury + rndhy>h*.9)rndhy = h - cury;
		ly[index] = ly[index-1] + rndhy;
		ldy[index-1] = rndhy;
		index++;
		cury+=rndhy;
	}
	let isRavno = (fxrand()<.5) ? true : false;
	if(isRavno)
	{
	for(let i = 0; i < ly.length; i++)
	{
		for(let j = 0 ; j < lx.length; j++)
	{
		dx = ldx[j];
		dy = ldy[i];
		let collo = int(fxrand()*palette.length);
		stroke(palette[collo]);
		//drawingContext.shadowColor = palette[collo];
		let rndperspx = gap + fxrand()*(dx-2*gap);
		let rndperspy = gap + fxrand()*(dy-2*gap);
		isCenterpersp = (fxrand()<.5) ? true : false;
		//figurePersp(rndx, rndy, j*dx+gap, i*dy+gap, 0, 0, 0, 0, 0, 0, 2, dx-2*gap, dy-2*gap);
		
		(isCenterpersp) ? 
		figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j]+gap, ly[i]+gap, 0, 0, 0, 0, 0, 0, -1, dx-2*gap, dy-2*gap)
		: figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j]+gap, ly[i]+gap, 0, 0, 0, 0, 0, 0, -1, dx-2*gap, dy-2*gap);
		stroke(palette[(collo+int(fxrand()*palette.length))%palette.length]);

		let rndfig = int(fxrand()*6);
		
		if(rndfig===0)
		{
			(isCenterpersp) ? 
			figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, 0, 0, 0)
			: 
			figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, 0, 0, 0);//curve
		}
		if(rndfig===1)
		{
			let elx = dx*.1 + fxrand()*dx*.8;
			let elly = dy*.1 + fxrand()*dy*.8;
			let xxell = .5*(dx-elx-4*gap) * fxrand();
			if(fxrand()<.5)xxell*=-1;
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			if(fxrand()<.5)yyell*=-1;
			(isCenterpersp) ? 
			figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j]+dx/2+xxell, ly[i]+dy/2+yyell, 0, 0, 0, 0, 0, 0, 1, elx, elly)
			: figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j]+dx/2+xxell, ly[i]+dy/2+yyell, 0, 0, 0, 0, 0, 0, 1, elx, elly);//ellipse
		}
		if(rndfig===2)
		{
			let elx = dx*.2 + fxrand()*dx*.6;
			let elly = dy*.2 + fxrand()*dy*.6;
			let xxell = .5*(dx-elx-4*gap) * fxrand();
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			(isCenterpersp) ? 
			figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j]+gap+xxell, ly[i]+gap+yyell, 0, 0, 0, 0, 0, 0, 2, elx, elly)
			: figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j]+gap+xxell, ly[i]+gap+yyell, 0, 0, 0, 0, 0, 0, 2, elx, elly);//rect
		}
		if(rndfig===3)
		{
			let elx = dx*.2 + fxrand()*dx*.6;
			let elly = dy*.2 + fxrand()*dy*.6;
			let xxell = .5*(dx-elx-4*gap) * fxrand();
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			(isCenterpersp) ? 
			figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j], ly[i], 0, 0, 0, 0, 0, 0, 3, dx, dy) : 
			figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j], ly[i], 0, 0, 0, 0, 0, 0, 3, dx, dy);//lines
		}
		if(rndfig===4)
		{
			(isCenterpersp) ? 
			figurePersp(lx[j]+dx/2, ly[i]+dy/2, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, 4, 0, 0)
			:
			figurePersp(lx[j]+rndperspx, ly[i]+rndperspy, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, lx[j]+dx*.1+fxrand()*dx*.8, ly[i]+dy*.1+fxrand()*dy*.8, 4, 0, 0);//curve
		}
	}
	}
	} //end if
	
	nn = 50;
	if(!isRavno)
	{
	for(let i = 0 ; i < ny; i++)
	{
		for(let j = 0 ; j < nx; j++)
	{
		let collo = int(fxrand()*palette.length);
		stroke(palette[collo]);
		//drawingContext.shadowColor = palette[collo];
		let rndperspx = gap + fxrand()*(dx-2*gap);
		let rndperspy = gap + fxrand()*(dy-2*gap);
		isCenterpersp = (fxrand()<.5) ? true : false;
		//figurePersp(rndx, rndy, j*dx+gap, i*dy+gap, 0, 0, 0, 0, 0, 0, 2, dx-2*gap, dy-2*gap);
		
		(isCenterpersp) ? 
		figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx+gap, i*dy+gap, 0, 0, 0, 0, 0, 0, -1, dx-2*gap, dy-2*gap)
		: figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx+gap, i*dy+gap, 0, 0, 0, 0, 0, 0, -1, dx-2*gap, dy-2*gap);
		stroke(palette[(collo+int(fxrand()*palette.length))%palette.length]);

		let rndfig = int(fxrand()*6);
		
		if(rndfig===0)
		{
			(isCenterpersp) ? 
			figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, 0, 0, 0)
			: 
			figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, 0, 0, 0);//curve
		}
		if(rndfig===1)
		{
			let ellx = dx*.1 + fxrand()*dx*.8;
			let elly = dy*.1 + fxrand()*dy*.8;
			let xxell = .5*(dx-ellx-4*gap) * fxrand();
			if(fxrand()<.5)xxell*=-1;
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			if(fxrand()<.5)yyell*=-1;
			(isCenterpersp) ? 
			figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx+dx/2+xxell, i*dy+dy/2+yyell, 0, 0, 0, 0, 0, 0, 1, ellx, elly)
			: figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx+dx/2+xxell, i*dy+dy/2+yyell, 0, 0, 0, 0, 0, 0, 1, ellx, elly);//ellipse
		}
		if(rndfig===2)
		{
			let ellx = dx*.2 + fxrand()*dx*.6;
			let elly = dy*.2 + fxrand()*dy*.6;
			let xxell = .5*(dx-ellx-4*gap) * fxrand();
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			(isCenterpersp) ? 
			figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx+gap+xxell, i*dy+gap+yyell, 0, 0, 0, 0, 0, 0, 2, ellx, elly)
			: figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx+gap+xxell, i*dy+gap+yyell, 0, 0, 0, 0, 0, 0, 2, ellx, elly);//rect
		}
		if(rndfig===3)
		{
			let ellx = dx*.2 + fxrand()*dx*.6;
			let elly = dy*.2 + fxrand()*dy*.6;
			let xxell = .5*(dx-ellx-4*gap) * fxrand();
			let yyell = .5*(dy-elly-4*gap) * fxrand();
			(isCenterpersp) ? 
			figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx, i*dy, 0, 0, 0, 0, 0, 0, 3, dx, dy) : 
			figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx, i*dy, 0, 0, 0, 0, 0, 0, 3, dx, dy);//lines
		}
		if(rndfig===4)
		{
			(isCenterpersp) ? 
			figurePersp(j*dx+dx/2, i*dy+dy/2, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, 4, 0, 0)
			:
			figurePersp(j*dx+rndperspx, i*dy+rndperspy, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, j*dx+dx*.1+fxrand()*dx*.8, i*dy+dy*.1+fxrand()*dy*.8, 4, 0, 0);//curve
		}
	}
	}
	} //end if
	for(let i = 180 ; i < 360; i+=1)
	{
		let collo = int(fxrand()*palette.length);
		stroke(palette[collo]);
		//drawingContext.shadowColor = palette[collo];
		
		//figurePersp(rndx, rndy, rndx+w*.5*cos(i), rndy+h*.2*sin(i), w*.33, h*.1, w*.66, h*.1, w*1.2, h*1.2, 1);
	}
	
	nn=1;
	for(let i = 0 ; i < nn; i++)
	{
		let collo = int(fxrand()*palette.length);
		stroke(palette[collo]);
		//drawingContext.shadowColor = palette[collo];
		
		//figurePersp(rndx, rndy, w*.2, h*0.8, w*.2, h*.6, w*.7, h*.6, w*0.7, h*0.2, 3);
	}
	
	

	fxpreview();
}

function figurePersp(xpersp, ypersp, x1, y1, x2, y2, x3, y3, x4, y4, typef, wx, wy)
{
	let nfig = 20;
	let cstart = coeffstart;
	//xpersp = abs(x4-2*x1)*.5; ypersp = abs(y4-2*y1)*.5;
	let vec1 = createVector(x1 - xpersp, y1 - ypersp);
	let vec2 = createVector(x2 - xpersp, y2 - ypersp);
	let vec3 = createVector(x3 - xpersp, y3 - ypersp);
	let vec4 = createVector(x4 - xpersp, y4 - ypersp);
	
	push();
	translate(xpersp, ypersp);
	let step = .012 + fxrand()*.012;
	let isDefected4 = (fxrand()<.5) ? true : false;
	if(typef === 3)
		{
			ugol = 2 + int(fxrand()*3);
			dira = (fxrand()<.5) ? 0 : 1;
			if(dira===0)
			{
				xd = wx/ugol;
				
				x2 = x1 + 1*xd + fxrand()*(xd-4*gap) + 2*gap;
				x3 = x1 + 2*xd + fxrand()*(xd-4*gap) + 2*gap;
				x4 = x1 + 3*xd + fxrand()*(xd-4*gap) + 2*gap;
				x1 = x1 + 0*xd + fxrand()*(xd-4*gap) + 2*gap;
				
				y2 = y1 + fxrand()*(wy - 4*gap);
				y3 = y1 + fxrand()*(wy - 4*gap);
				y4 = y1 + fxrand()*(wy - 4*gap);
				y1 = y1 + gap + fxrand()*(wy - 4*gap);
				vec1 = createVector(x1 - xpersp, y1 - ypersp);
				vec2 = createVector(x2 - xpersp, y2 - ypersp);
				vec3 = createVector(x3 - xpersp, y3 - ypersp);
				vec4 = createVector(x4 - xpersp, y4 - ypersp);
			}
			if(dira===1)
			{
				yd = wy/ugol;
				
				x2 = x1 + fxrand()*(wx-4*gap);
				x3 = x1 + fxrand()*(wx-4*gap);
				x4 = x1 + fxrand()*(wx-4*gap);
				x1 = x1 + gap + fxrand()*(wx-4*gap);
				
				y2 = y1 + 1*yd + fxrand()*(yd-4*gap) + 2*gap;
				y3 = y1 + 2*yd + fxrand()*(yd-4*gap) + 2*gap;
				y4 = y1 + 3*yd + fxrand()*(yd-4*gap) + 2*gap;
				y1 = y1 + 0*yd + fxrand()*(yd-4*gap) + 2*gap;
				vec1 = createVector(x1 - xpersp, y1 - ypersp);
				vec2 = createVector(x2 - xpersp, y2 - ypersp);
				vec3 = createVector(x3 - xpersp, y3 - ypersp);
				vec4 = createVector(x4 - xpersp, y4 - ypersp);
			}
		}
	for (i = cstart; i<1; i+=step)
	{
		//stroke(palette[int(fxrand()*palette.length)]);
		//stroke(palette[int(map(i, cstart, 1, 1, palette.length))]);
		drawingContext.filter = `opacity(${map(i, cstart, 1, 10, 100)}%)`;
		//quad(vec1.x*i, vec1.y*i, vec2.x*i, vec2.y*i, vec3.x*i, vec3.y*i, vec4.x*i, vec4.y*i);
		
		if(typef === 0)
		{
		beginShape();
		curveVertex(vec1.x*i, vec1.y*i);
		curveVertex(vec1.x*i, vec1.y*i);
		curveVertex(vec2.x*i, vec2.y*i);
		curveVertex(vec3.x*i, vec3.y*i);
		curveVertex(vec4.x*i, vec4.y*i);
		curveVertex(vec1.x*i, vec1.y*i);
		curveVertex(vec1.x*i, vec1.y*i);
		endShape();
		}
		if(typef === 1)
		{
		(fxrand()<.5) ? ellipse(vec1.x*i, vec1.y*i, i*wx*(sin(i*90)), i*wy*(sin(i*90))) : ellipse(vec1.x*i, vec1.y*i, i*wx, i*wy); 
		}
		if(typef === 2)
		{		
		rect(vec1.x*i, vec1.y*i, i*wx, i*wy);
		}
		if(typef === -1)
		{
		rectdefect(vec1.x*i, vec1.y*i, i*wx, i*wy);
		}
		
		if(typef === 3)
		{
				line(vec1.x*i, vec1.y*i, vec2.x*i, vec1.y*i);
				line(vec2.x*i, vec1.y*i, vec2.x*i, vec2.y*i);
				if(ugol>2)
				{
				line(vec2.x*i, vec2.y*i, vec2.x*i, vec3.y*i);
				line(vec2.x*i, vec3.y*i, vec3.x*i, vec3.y*i);
				}
				if(ugol>3)
				{
				line(vec3.x*i, vec3.y*i, vec3.x*i, vec4.y*i);
				line(vec3.x*i, vec4.y*i, vec4.x*i, vec4.y*i);
				}
		}

		if(typef === 4)
		{
		//line(vec1.x*i, vec1.y*i, vec2.x*i, vec1.y*i);
		//line(vec2.x*i, vec1.y*i, vec2.x*i, vec2.y*i);
		//line(vec2.x*i, vec2.y*i, vec2.x*i, vec3.y*i);
		//line(vec2.x*i, vec3.y*i, vec3.x*i, vec3.y*i);
		//line(vec3.x*i, vec3.y*i, vec3.x*i, vec4.y*i);
		//line(vec3.x*i, vec4.y*i, vec4.x*i, vec4.y*i);
		
		//line(vec1.x*i, vec1.y*i, vec2.x*i, vec2.y*i);
		//line(vec2.x*i, vec2.y*i, vec3.x*i, vec3.y*i);
		//line(vec3.x*i, vec3.y*i, vec4.x*i, vec4.y*i);
		if(isDefected4)
		{
		linedefect(vec1.x*i, vec1.y*i, vec2.x*i, vec2.y*i);
		linedefect(vec2.x*i, vec2.y*i, vec3.x*i, vec3.y*i);
		linedefect(vec3.x*i, vec3.y*i, vec4.x*i, vec4.y*i);
		linedefect(vec1.x*i, vec1.y*i, vec4.x*i, vec4.y*i);
		}
		else
		{
			line(vec1.x*i, vec1.y*i, vec2.x*i, vec2.y*i);
		line(vec2.x*i, vec2.y*i, vec3.x*i, vec3.y*i);
		line(vec3.x*i, vec3.y*i, vec4.x*i, vec4.y*i);
		line(vec1.x*i, vec1.y*i, vec4.x*i, vec4.y*i);
		}
		}
	}
	pop();
}

function linedefect (x1, y1, x2, y2){
	let rasst = dist(x1, y1, x2, y2);
	let vect = createVector(x2-x1, y2-y1);
	let perpvect = createVector(rasst*cos(vect.heading()-90), rasst*sin(vect.heading()-90));
	
	perpvect.x*=1/rasst;perpvect.y*=1/rasst;
	
	//line(w/2, h/2, w/2+vect.x, h/2+vect.y);
	//line(w/2, h/2, w/2+perpvect.x, h/2+perpvect.y);
	beginShape();
	curveVertex(x1, y1);
	let du = 3+fxrand()*10;
	for(let i=0; i<rasst; i+=1){
		coeff=map(i, 0, rasst, 0, 1);
		//if(fxrand()<0.6)point(x1+coeff*vect.x, y1+coeff*vect.y);
		//if(fxrand()<0.2)point(x1+coeff*vect.x+1, y1+coeff*vect.y-1);
		//if(fxrand()<0.2)point(x1+coeff*vect.x-1, y1+coeff*vect.y+1);
		if(fxrand()<1.4)
		{
			//strokeWeight(1+fxrand());
			let de = du*.25*fxrand();
			(fxrand()<.5) ? curveVertex(x1+coeff*vect.x+perpvect.x*de, y1+coeff*vect.y+perpvect.y*de) : curveVertex(x1+coeff*vect.x-perpvect.x*de, y1+coeff*vect.y-perpvect.y*de);
		}
	}
	curveVertex(x2, y2);
	curveVertex(x2, y2);
	endShape();
}

function rectdefect (x3, y3, w3, h3){
	linedefect(x3, y3, x3+w3, y3);
	linedefect(x3+w3, y3, x3+w3, y3+h3);
	linedefect(x3+w3, y3+h3, x3, y3+h3);
	linedefect(x3, y3+h3, x3, y3);
}

function specpatina (x1, y1, x2, y2, x3, y3, x4, y4)
{
	for(let i = y1; i < y4; i++)
	{
		for(let j=map(i, y1, y4, x1, x4); j < map(i, y1, y4, x2, x3); j++)
		{
			if(fxrand()<.12)
			{
				(fxrand()<.5) ? stroke('#00000060') : stroke ('#ffffff60');
				point(j, i);
			}
		}
	}
	noStroke();
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
