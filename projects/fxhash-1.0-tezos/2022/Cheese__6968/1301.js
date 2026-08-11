let palette;
let url = ["https://coolors.co/f49097-dfb2f4-f5e960-f2f5ff-55d6c2",//pastel
			"https://coolors.co/54457f-ac7b84-4c243b-b84a62-f5a6e6",
			"https://coolors.co/bf4e30-c6ccb2-093824-e5eafa-78fecf",
			"https://coolors.co/002500-929982-edcbb1-b7245c-7c3238",
			"https://coolors.co/eca400-eb5e55-3a3335-d81e5b-c6d8d3",
			"https://coolors.co/e2fcef-402039-170f11-d81e5b-7b7263",
			"https://coolors.co/dad2d8-143642-0f8b8d-ec9a29-a8201a",
			"https://coolors.co/cdc392-e8e5da-9eb7e5-648de5-304c89",
			"https://coolors.co/1d2f6f-8390fa-fac748-f9e9ec-f88dad",
			"https://coolors.co/6ccff6-001011-757780-fffffc-98ce00",
			"https://coolors.co/ffff82-f5f7dc-b5d99c-0f0326-e65f5c",
			"https://coolors.co/321325-5f0f40-9a031e-cb793a-fcdc4d",
			"https://coolors.co/ea7af4-b43e8f-6200b3-3b0086-290628",
			"https://coolors.co/ffbc42-d81159-8f2d56-218380-73d2de",//fire
			"https://coolors.co/ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9",//pastel
			"https://coolors.co/b8b8d1-5b5f97-ffc145-fffffb-ff6b6c",
			"https://coolors.co/582707-972d07-ff4b3e-ffb20f-ffe548",
			"https://coolors.co/f2dc5d-f2a359-db9065-a4031f-240b36",
			"https://coolors.co/2e86ab-a23b72-f18f01-c73e1d-3b1f2b",
			"https://coolors.co/f6d8ae-2e4057-083d77-da4167-f4d35e",
			"https://coolors.co/485696-e7e7e7-f9c784-fc7a1e-f24c00",
			"https://coolors.co/231123-82204a-558c8c-e8db7d-eff7ff",
			"https://coolors.co/1f271b-0b4f6c-145c9e-cbb9a8-dcc7be",
			"https://coolors.co/0a0a0a-f7f3fa-0077e1-f5d216-fc3503",//mondrian
			"https://coolors.co/ffe0b5-ede580-a4af69-4c2719-d35269",
			"https://coolors.co/2b2d42-92dce5-f8f7f9-f7ec59-ff66d8",//pastel+dark
			"https://coolors.co/042a2b-5eb1bf-cdedf6-ef7b45-d84727",
			"https://coolors.co/4464ad-a4b0f5-f58f29-7d4600-466995",
			"https://coolors.co/20bf55-0b4f6c-01baef-fbfbff-757575",
			"https://coolors.co/b80c09-0b4f6c-01baef-fbfbff-040f16",//class
			"https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533",
			"https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
			"https://coolors.co/1a1423-372549-774c60-b75d69-eacdc2",
			"https://coolors.co/054a91-3e7cb1-81a4cd-dbe4ee-f17300",
			"https://coolors.co/a63446-fbfef9-0c6291-000004-7e1946",
			"https://coolors.co/fe4a49-fed766-009fb7-e6e6ea-f4f4f8",
			"https://coolors.co/0a1128-001f54-034078-1282a2-fefcfb",
			"https://coolors.co/f4e409-eeba0b-c36f09-a63c06-710000",
			"https://coolors.co/b3e7dc-a6b401-eff67b-d50102-6c0102",//fire2
			"https://coolors.co/213036-265500-96d800-f58f92-b7241b"
	
]
let offset=2;
let sq2=Math.sqrt(2);
let w = 1600; let h = 1000;
let t, t1, p , g, u, rt, tr, hue1, sat1, wh, whwin, answ;
let dx, dy, wx,hy,nx,ny, stepy, curx,cury, curr, rndang;
let pallen, rndx, rndy, prevx, prevy, x1,x2,x3,y1,y2,y3;
let im1, im2;
let nstep=15, ncirc;
let circles = [];
let curcolor, colcol, gcol, coeff, anga, colbg, c1, c2, c3, c4, c5;
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
	poiwei=3+int(fxrand()*2);
	curcolor = int(fxrand()*url.length);
	console.log(curcolor);
	palette = createPalette(url[curcolor]);
}

function draw() {
	wh=min(w, h);
	
	//background(palette[int(fxrand()*palette.length)]);
	colbg=palette[int(fxrand()*palette.length)];
	fill(colbg);
	rect(0,0, w, h);
	fill(0,0,100,.6);
	rect(0,0, w, h);
	translate(offik, offik);
	scale(1-2*offik/w, 1-2*offik/h);
	im1 = createGraphics(w, h);
	im2 = createGraphics(w, h);
	let protection = 0;
	// add circles
	while (circles.length < 3500) {
	  ax=fxrand()*w;	  
	  ay=fxrand()*h;

	  // random "circle"
	  coeff=map(protection, 0, 15000, 5, 20);
	let circle = {
      y: ay,
	  x: ax,
      r: wh/coeff+fxrand()*wh/coeff
    };

    // Does it overlap any previous circles?
    let overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r + 2*offset+1) {
        overlapping = true;
      }
    }
    // If not keep it!
    if (!overlapping) {
      circles.push(circle);
    }

    // Are we stuck?
    protection++;
    if (protection > 15000) {
      break;
    }
  }

  //Draw rectangles
	for (let i = 0; i < circles.length*50; i++) {
    im2.fill(palette[int(fxrand()*palette.length)]);
    im2.stroke(0,0,0);
	im2.strokeWeight(wh/300);
	im2.rect(-100+fxrand()*(w+100), -100+fxrand()*(h+100), w/10+fxrand()*w/10, h/10+fxrand()*h/10);
    	
	}
	// Draw all the circles
	im1.fill(colbg);
	im1.noStroke();
	im1.colorMode(HSB, 360, 100, 100, 1);
	im1.rect(-1,-1,w+2,h+2);
	im1.fill(0,0,100,.6);
	im1.rect(0,0, w, h);
	
	
	rndang=fxrand()*360;
	for (let i = 0; i < circles.length; i++) {
    im1.fill(palette[int(fxrand()*palette.length)]);
    
	if(fxrand()<.5){
		im1.noStroke();
		im1.erase();
		im1.ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
		im1.noErase();
		im1.noFill();
		im1.strokeWeight(poiwei);
		im1.stroke(0,0,0);
		im1.ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
	}
	else{
		im1.push();
		im1.translate(circles[i].x, circles[i].y);
		im1.push();
		im1.rotate(rndang);
		im1.noStroke();
		im1.erase();
		im1.quad(0, -circles[i].r, circles[i].r, 0, 0, circles[i].r, -circles[i].r, 0);
		im1.noErase();
		im1.noFill();
		im1.strokeWeight(poiwei);
		im1.stroke(0,0,0);
		im1.quad(0, -circles[i].r, circles[i].r, 0, 0, circles[i].r, -circles[i].r, 0);
		im1.pop();
		im1.pop();
	}
	}
	
	image(im2, 0, 0);
	patina(0, 0, w, h, 4);
	image(im1, 0, 0);
	//patina(0, 0, w, h, 4);
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
		let a=fxrand()*dia/2;
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
	answ*=-1;
	redraw();
}
