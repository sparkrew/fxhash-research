let palette;
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
			//"https://coolors.co/0a0a0a-f7f3fa-0077e1-f5d216-fc3503",//mondrian
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
			"https://coolors.co/b1a5b6-4c2b36-8d6346-ddf45b-c6f91f-babd8d",
			"https://coolors.co/7fb069-fffbbd-e6aa68-ca3c25-9d8e1b-6b7672",
			"https://coolors.co/250902-38040e-640d14-800e13-ad2831-1b998b",
			"https://coolors.co/301a4b-6db1bf-ffeaec-f39a9d-3f6c51-cba135",
			"https://coolors.co/6a041d-f5b841-f4ff52-53ff45-1e2ede-18314f"
	
]
let offset=2, gap;
let sq2=Math.sqrt(2), sq3=Math.sqrt(3);
let w = 1200; let h = 1200;
let t, t1, p , g, u, rt, tr, hue1, sat1, wh, whwin, answ;
let dx, dy, wx,hy,nx,ny, stepy, curx,cury, curr, rndang, deltang;
let pallen, rndx, rndy, prevx, prevy, rndfig, x1,x2,x3,y1,y2,y3;
let im1, im2;
let nstep=15, ncirc;
let circles = [], c=[];
let curcolor, colcol, gcol, coeff, anga, colbg, c1, c2, c3, c4, c5, c6;
let poiwei=6, offik=w/40;

function setup() {
	noiseSeed(int(fxrand()*100));
	//h=windowHeight*.99;
	//w=windowWidth*.99;
	createCanvas(w, h);
	colorMode(HSB, 360, 100, 100, 1);
	angleMode(DEGREES);
	noStroke();
	noLoop();
	poiwei=w/400+int(fxrand()*2);
	curcolor = int(fxrand()*url.length);
	//curcolor=1;
	console.log(curcolor);
	palette = createPalette(url[curcolor]);
}

function draw() {
	wh=min(w, h);
	gap=w/150+int(fxrand()*w/200);
	
	//background(palette[int(fxrand()*palette.length)]);
	colbg=palette[int(fxrand()*palette.length)];
	fill(colbg);
	rect(0,0, w, h);
	fill(0,0,100,.3);
	rect(0,0, w, h);
	
	//random 6 colors
	c[1]=int(fxrand()*palette.length);
	c[5]=c[4]=c[3]=c[2]=c[1];
	while(c[2]==c[1])c[2]=int(fxrand()*palette.length);
	while(c[3]==c[1] || c[3]==c[2])c[3]=int(fxrand()*palette.length);
	while(c[4]==c[1] || c[4]==c[2] || c[4]==c[3])c[4]=int(fxrand()*palette.length);
	while(c[5]==c[1] || c[5]==c[2] || c[5]==c[3] || c[5]==c[4])c[5]=int(fxrand()*palette.length);
	c[6]=15-c[5]-c[4]-c[3]-c[2]-c[1];
	console.log('a'+c[1]+c[2]+c[3]+c[4]+c[5]+c[6]);
	let fe=createPalette(url[curcolor]);
	console.log(fe);
	for(let i=0; i<6; i++){palette[i]=fe[c[i+1]];}
	console.log(palette);
	translate(offik, offik);
	scale(1-2*offik/w, 1-2*offik/h);
	fill(0,0,100,.5);
	let gradient = drawingContext.createLinearGradient(0, 0 , w, 0);
		gradient.addColorStop(0, palette[c[1]]);
		gradient.addColorStop(1/5, palette[c[2]]);
		gradient.addColorStop(2/5, palette[c[3]]);
		gradient.addColorStop(3/5, palette[c[3]]);
		gradient.addColorStop(4/5, palette[c[2]]);
		gradient.addColorStop(5/5, palette[c[1]]);
		drawingContext.fillStyle = gradient;
	rect(0,0,w,h);
	fill(0,0,0,.90);
	rect(0,0,w,h);
	//light
	x1=fxrand()*w;
	y1=fxrand()*h;
	
	im1 = createGraphics(w, h);
	im1.colorMode(HSB, 360, 100, 100, 1);
	im1.angleMode(DEGREES);
	im2 = createGraphics(w, h);
	let protection = 0;
	// add circles
	while (circles.length < 3500) {
	  ax=fxrand()*w;	  
	  ay=fxrand()*h;

	  // random "circle"
	  coeff=25+fxrand()*30;
	let circle = {
      y: ay,
	  x: ax,
      r: wh/coeff
    };

    // Does it overlap any previous circles?
    let overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r + 2*offset) {
        overlapping = true;
      }
    }
    // If not keep it!
    if (!overlapping) {
      circles.push(circle);
    }

    // Are we stuck?
    protection++;
    if (protection > 5000) {
      break;
    }
  }

	
	
	// Draw all the circles
	anga=fxrand()*360;
	for (let i = 0; i < circles.length; i++) {
		
		rndfig=int(4+fxrand()*0);
		deltang=360/rndfig;
		im1.noFill();
		im1.drawingContext.shadowBlur = 2;
		let vectfig = createVector(circles[i].x-x1, circles[i].y-y1);
		im1.drawingContext.shadowOffsetX = vectfig.x*.05;
		im1.drawingContext.shadowOffsetY = vectfig.y*.05;
		let colli=palette[int(circles[i].x/(w/6))];
		colli=color(hue(colli),saturation(colli)+00, brightness(colli)+20,.25);
		
		im1.drawingContext.shadowColor = colli;
		im1.push();
		im1.translate(circles[i].x, circles[i].y);
		im1.push();
		im1.rotate(anga);
		curr=circles[i].r;
		im1.stroke(palette[int(circles[i].x/(w/6))]);
		
		im1.strokeWeight(poiwei);
		im1.beginShape();
		prevx=fxrand()*curr*cos(deltang*fxrand());
		prevy=fxrand()*curr*sin(deltang*fxrand());
		im1.curveVertex(prevx, prevy);
		im1.curveVertex(prevx, prevy);
		for(let j=0; j<rndfig; j++){
		rndang=deltang*(j+fxrand());
		curx=fxrand()*curr*cos(rndang);
		cury=fxrand()*curr*sin(rndang);
		im1.curveVertex(curx, cury);
		
		}
		im1.curveVertex(curx, cury);
		im1.endShape();
		im1.pop();
		im1.pop();
		
		
		im1.strokeWeight(1);
		im1.stroke('#000000');
		im1.noFill();
		//im1.ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
		


		
	}
	//patina(0, 0, w, h, 3);
	image(im1, 0, 0);
	for(let i=0; i<h/4; i+=2){
		fill(0,0,100,.006);
		circle(x1, y1, i);
	}
	patina(0, 0, w, h, 2);
	
	//patina(0, 0, w, h, 20);
	noFill();
	strokeWeight(poiwei);
	stroke(0,0,0);
	rect(-poiwei/2,-poiwei/2,w+poiwei,h+poiwei);
	fxpreview();
}

function patinacircle(xx, yy, rr, stepen){
	let ns=int(rr*rr);
	for(let i=0; i<ns; i++){
		anga=fxrand()*360;
		let pax=xx+fxrand()*(rr)*cos(anga);
		let pay=yy+fxrand()*(rr)*sin(anga);
		let a=fxrand()*stepen;
		let b=fxrand()*stepen;
		if(fxrand()<0.5){fill(0,0,0,.09);}else{fill(0,0,100,.09);}
		ellipse(pax, pay, a, b);
		
		
	}
}

function patina(zx, zy, zw, zh, dia){
	let nitera = (zw-zx-dia)*(zh-zy-dia)*.03;
	for(let i=0; i<nitera; i++){
		let x=zx+fxrand()*(zw-zx-dia);
		let y=zy+fxrand()*(zh-zy-dia);
		let a=fxrand()*dia*1.2;
		let b=fxrand()*dia;
		if(fxrand()<0.5){fill(0,0,0,.09);}else{fill(0,0,100,.09);}
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
