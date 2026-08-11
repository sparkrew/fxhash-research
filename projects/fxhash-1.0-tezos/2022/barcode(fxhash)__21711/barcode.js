
let bcFont1,bcFont2;
let columnes;
let files=1;
let distX, distY;
let contador=0;
let strHash;
let margeX,margeY;
let fxhash2;
let numBoxes;
let boxes=[];
let show_hash=false;
let pre_cont=0;
let ample, alt;
let feat_quadats=true;
let feat_rotacio_tipus='none';
let feat_angle=0;
let feat_angles_iguals;
let feat_scale_main=1
let feat_scale_tipus='none';
let feat_scale_x=1;
let feat_scale_y=1;
let feat_scale_iguals=true;
let feat_separacio=1.5;
let feat_color_mode='white';
let feat_transparent=true;
let feat_alpha=0;
let feat_te_fxhash=false;
let feat_mostra_fxhash=false;
let feat_shadow_main;
let feat_shadow_exterior='none';
let feat_shadow_interior='none';
let feat_blur_exterior=0;
let feat_blur_interior=0;
let feat_color_fons=250;
let feat_color_linia=0;
let max_scale_x=1
let max_scale_y=1

function preload() {
	bcFont2 = loadFont("./LibreBarcode39ExtendedText-Regular.ttf");
	bcFont1 = loadFont("./LibreBarcode39Extended-Regular.ttf");
	txtFont = loadFont("./sono.ttf");
}

function setup() {
	createCanvas(1024, 1024);
	angleMode(DEGREES);
	imageMode(CENTER);

	margeX=width/10;
	margeY=0;
	
	strHash= split(fxhash, 'oo');
	fxhash2=strHash[1]
  
 	columnes=getRandomInt(1,9);
 	files=getRandomInt(1,9);
	
	feat_separacio=getRandomSeparacio()
	ample=width/(columnes+feat_separacio)
 	alt=height/(files+feat_separacio)

	distX=width/(columnes+1)
	distY=height/(files+1)

	numBoxes=files*columnes;
	
	feat_quadats=getRandomBool()
	getColors();
	feat_te_fxhash=buscaFxHash(fxhash2,'te');
	feat_mostra_fxhash=buscaFxHash(fxhash2,'mostra');

 	if(feat_quadats){
	 	if(ample>alt){
	 		ample=alt
	 	}else{
	 		alt=ample
	 	}
	 }

	for(let i=0;i<numBoxes;i++){
		if(i<fxhash2.length){
			boxes.push(new Box(fxhash2[i]));
		}else{
			let c=i-fxhash2.length
			boxes.push(new Box(fxhash2[c]));
		}	
	}
	contador=0;
	for(let y=0;y<files;y++ ){
		for(let x=0; x< columnes; x++){
			if(contador<numBoxes){
				boxes[contador].x=distX*(x+1);
				boxes[contador].y=distY*(y+1);
				boxes[contador].columna=x;
				boxes[contador].fila=y;
				contador++;
				
			}
		}
	}	

	feat_rotacio_tipus=getRandomRotacio();
	ferRotacio();
	creaEscala();
	feat_scale_tipus=getRandomEscala();
	ferEscala();

	feat_shadow_main=getShadowMain();
	feat_blur_exterior=getRandomInt(10,100);
	feat_shadow_exterior=getRandomShadow();
	ferShadowExterior();

	feat_blur_interior=getRandomInt(10,100);
	feat_shadow_interior=getRandomShadow();
	ferShadowInterior();


	for(let c=0; c<numBoxes;c++){
		boxes[c].actualitza()
	}


window.$fxhashFeatures = {
    "num_chars": numBoxes,
    "has_fxhash": feat_te_fxhash,
    "show_fxhash": feat_mostra_fxhash,
    "columns": columnes,
    "rows": files,
    "color_mode": feat_color_mode,
    "separacio": feat_separacio,
    "scale_type": feat_scale_tipus,
    "rotate_type": feat_rotacio_tipus,
    "transparent": feat_transparent,
    "squares": feat_quadats,
    "main_shadow": feat_shadow_main,
    "exterior_shadow": feat_shadow_exterior,
    "interior_shadow": feat_shadow_interior
  };
  print("fxhashFeatures:");
  print(window.$fxhashFeatures);


}

function draw() {
	if(!show_hash){
		push()
		background(feat_color_fons);
		imageMode(CENTER);
		angleMode(DEGREES);
		rectMode(CENTER);

		drawingContext.shadowBlur = feat_shadow_main;
		if(feat_transparent){
			drawingContext.shadowColor = color(feat_color_linia)
		}else{
			drawingContext.shadowColor = color(feat_color_fons2)
		}

		for(let i=0;i<numBoxes;i++){
			boxes[i].dibuixa();
			pre_cont++;
		}
		if(feat_mostra_fxhash){
			push();
			rectMode(CORNER);
			noFill();
			stroke('red');	
			strokeWeight(4);
			let l=width/40;		
			rect(l,l,width-2*l,height-2*l)
			pop();
		}
		if(pre_cont==numBoxes){
			fxpreview();		
		}
		pop();
	}else{
		push();
		background(255);
		textAlign(CENTER,CENTER);
		fill(0)
		textFont(txtFont);
		textSize(30);
		text("barcode(fxhash)",width/2, 20);
		textSize(20);
		text("fxhash="+fxhash,width/2, 50);
		fill(180);
		text("NOT DISPLAYED",width/4, 90);
		fill(0);
		text("DISPLAYED",width/2,90)
		fill(255,0,0)
		text("'FXHASH' CHAR", width-(width/4),90)
		textSize(50);
		textFont(bcFont2);
		dibuixaFxhash()
		pop();
	}
	noLoop();
}

class Box {
	constructor(lletra){
		this.lletra=lletra;
		this.x=0;
		this.y=0;
		this.pg= createGraphics(ample,alt);
		this.scalex=1
		this.scaley=1
		this.fontsize=ample*0.5;
		this.rotacio=0;
		this.columna=0;
		this.fila=0;
		this.scalex=1
		this.scaley=1
		this.blurColor=0;
		this.blurInterior=0;
		this.blurExterior=0;
	}
	actualitza(){
		push();
		this.pg.background(feat_color_fons2,feat_alpha);
		this.pg.angleMode(DEGREES);
		this.pg.imageMode(CENTER)
  		this.pg.noStroke();
  		this.pg.textSize(this.fontsize);
  		this.pg.textFont(bcFont1);
  		this.pg.textAlign(CENTER,CENTER);
  		if(lletraVermella(this.lletra) && feat_te_fxhash){
  			this.pg.fill(255,0,0)
  			this.vermella=true;
  		}else{
  			this.pg.fill(feat_color_linia)
  			this.vermella=false;
  		}
  		this.pg.translate(this.pg.width/2,this.pg.height/2)
  		this.pg.rotate(this.rotacio)
  		this.pg.translate(-this.pg.width/2,-this.pg.height/2)
  		this.pg.scale(1,20)
  		if(!feat_transparent){
  			this.pg.drawingContext.shadowBlur = this.blurInterior
  			if(this.vermella){
				this.pg.drawingContext.shadowColor = color(255,0,0)
  			}else{
  				this.pg.drawingContext.shadowColor = color(feat_color_linia)
  			}
  		}
		this.pg.text("*"+this.lletra+"*",this.pg.width/2,0)
		pop();
	}
	dibuixa(){
		push()
		imageMode(CENTER)
		if(this.blurExterior>0){		
			drawingContext.shadowBlur = this.blurExterior;
	  		if(this.vermella){
				drawingContext.shadowColor = color(255,0,0)
	  		}else{
	  			drawingContext.shadowColor = color(feat_color_linia)
	  		}
  		}
		image(this.pg,this.x,this.y,this.pg.width*this.scalex,this.pg.height*this.scaley)
		noFill()
		pop();
	}
}


function mouseClicked() {
	 if (show_hash == true) {
		show_hash = false;
	 } else {
		show_hash = true;
	 }
	 loop();
}



function dibuixaFxhash(){
	push()
	let cont=0;
	let fil=6;
	let cols=9;
	let dx=width/(cols+1)
	let dy=height/(fil+1)
	for(let y=0;y<fil;y++ ){
		for(let x=0; x<cols; x++){
			if(cont<fxhash.length){
				if(cont < 2 || cont>=(numBoxes+2)){
					if(fxhash[cont]=='f' || fxhash[cont]=='F' || fxhash[cont]=='x' || fxhash[cont]=='X' || fxhash[cont]=='h' || fxhash[cont]=='H' || fxhash[cont]=='a' || fxhash[cont]=='A' || fxhash[cont]=='s' || fxhash[cont]=='S'){
						fill(255,0,0,150)
					}else{
						fill(180)
					}
				}else{
					if(fxhash[cont]=='f' || fxhash[cont]=='F' || fxhash[cont]=='x' || fxhash[cont]=='X' || fxhash[cont]=='h' || fxhash[cont]=='H' || fxhash[cont]=='a' || fxhash[cont]=='A' || fxhash[cont]=='s' || fxhash[cont]=='S'){
						fill(255,0,0)
					}else{
						fill(0)
					}
				}
				text("*"+fxhash[cont]+"*",dx*(x+1),dy*(y+1))				
				cont++;
			}
		}
	}	
	pop()
}

function getRandomInt(min,max) {
    return int(map(fxrand(), 0,1, min,max));
}

function getRandomBool() {
    let v=getRandomInt(0,2)
    if(v==1){
      return true;
    }else{
      return false;
    }
}

function buscaFxHash(hashin,quin){
	let f=0;
	let x=0;
	let h=0;
	let a=0;
	let s=0;
	let max;
	if(quin=='te'){
		max=hashin.length
	}else{
		max=numBoxes
	}
	for(let i=0;i<max;i++){
		if(hashin[i]=='f' || hashin[i]=='F'){
			f++
		}
		if(hashin[i]=='x' || hashin[i]=='X'){
			x++
		}
		if(hashin[i]=='h' || hashin[i]=='H'){
			h++
		}
		if(hashin[i]=='a' || hashin[i]=='A'){
			a++
		}
		if(hashin[i]=='s' || hashin[i]=='S'){
			s++
		}
	}
	if(f>=1 && x>=1 && h>=2 && a>=1 && s>=1){
		return true;
	}else{
		return false;
	}
}

function getShadowMain(){
		let t=getRandomInt(0,16)
		switch(t){
			case 1: 
				return 20;
			    break;
			case 2:
				return 40;
				break;
			case 3: 
				return 60;
			    break;
			case 4: 
				return 60;
			    break;
			case 5: 
				return 70;
			    break;
			case 6: 
				return 70;
			    break;
			case 7: 
				return 80;
			    break;
			case 8: 
				return 80;
			    break;	
			case 9: 
				return 90;
			    break;	
			case 10: 
				return 90;
			    break;	
			case 11: 
				return 100;
			    break;	
			case 12: 
				return 150;
			    break;	
			case 13: 
				return 200;
			    break;	
			default:
				return 0;	  
		}	
}

function getColors(){
	feat_color_mode=getColorMode()
	if(feat_color_mode=='white'){
		feat_color_linia=getRandomInt(0,40)	
		feat_color_fons=getRandomInt(220,255);
		feat_color_fons2=getRandomInt(100,200);
		feat_transparent=getTransparent();
		if(feat_transparent){
			feat_alpha=0
		}else{
			feat_alpha=getRandomInt(80,200)
		}
	}else{
		feat_color_linia=getRandomInt(200,255);
		feat_color_fons=getRandomInt(0,60)	
		feat_color_fons2=getRandomInt(60,120)	
		feat_transparent=getTransparent();
	
		if(feat_transparent){
			feat_alpha=0
		}else{
			feat_alpha=getRandomInt(80,200)
		}
	}
}

function getColorMode(){
	if(getRandomInt(0,4)==1){
		return 'black';
	}else{
		return 'white';
	}
}

function getTransparent(){
	if(getRandomInt(1,3)==1){
		return false;
	}else{
		return true;
	}
}


function getRandomSeparacio(){
		let t=getRandomInt(0,10)
		switch(t){
			case 1: 
				return 1.1;
			    break;
			case 2:
				return 1.5;
				break;
			case 3: 
				return 4;
			    break;
			case 4: 
				return 1.1;
			    break;
			case 5: 
				return 1.1;
			    break;
			case 6: 
				return 1.1;
			    break;
			case 7: 
				return 3;
			    break;

			default:
				return 2;	  
		}	
}

function lletraVermella(lletrain){
	if(lletrain=='f' || lletrain=='F' || lletrain=='x' || lletrain=='X' || lletrain=='h' || lletrain=='H' || lletrain=='a' || lletrain=='A' || lletrain=='s' || lletrain=='S'){
		return true;
	}else{
		return false;
	}
}

function getRandomRotacio(){
		feat_angle=getRandomBool();
		feat_angles_iguals=getRandomBool();
		let t=getRandomInt(0,11)
		switch(t){
			case 1: 
				return 'parells'
			    break;
			case 2:
				return 'senars';
				break;
			case 3: 
				return 'colparells'
			    break;
			case 4:
				return 'colsenars';
				break;
			case 5: 
				return 'filaparells'
			    break;
			case 6:
				return 'filasenars';
				break;
			case 7:
				return 'random';
				break;
			case 8:
				return 'tots';
				break;
			case 9:
				return 'un';
				break;
			case 10:
				return 'mult3';
				break;				

			default:
				return 'none';	  
		}
}

function getRandomShadow(){
		let t=getRandomInt(0,45)
		switch(t){
			case 1: 
				return 'parells'
			    break;
			case 2:
				return 'senars';
				break;
			case 3: 
				return 'colparells'
			    break;
			case 4:
				return 'colsenars';
				break;
			case 5: 
				return 'filaparells'
			    break;
			case 6:
				return 'filasenars';
				break;
			case 7:
				return 'random';
				break;
			case 8:
				return 'tots';
				break;
			case 9:
				return 'un';
				break;
			case 10:
				return 'mult3';
				break;				

			default:
				return 'none';	  
		}
}

function getRandomEscala(){
		let t=getRandomInt(0,30)
		switch(t){
			case 1: 
				return 'parells'
			    break;
			case 2:
				return 'senars';
				break;
			case 3: 
				return 'colparells'
			    break;
			case 4:
				return 'colsenars';
				break;
			case 5: 
				return 'filaparells'
			    break;
			case 6:
				return 'filasenars';
				break;
			case 7:
				return 'random';
				break;
			case 8:
				return 'tots';
				break;
			case 9:
				return 'un';
				break;
			case 10:
				return 'un';
				break;
			case 11:
				return 'un';
				break;
			case 12:
				return 'mult3';
				break;	

			default:
				return 'none';	  
		}
}

function creaEscala(){
	feat_scale_x=1-map(fxrand(), 0,1, 0.6,1.2)
	if(getRandomBool()){
		feat_scale_y=feat_scale_x
	}else{
		feat_scale_y=1-map(fxrand(), 0,1, 0.6,1.2)

	}
}

function ferEscala(){
	let x,y;
	switch(feat_scale_tipus){
		case 'parells':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)==0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y
				}
			}
			break;
		case 'senars':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)!=0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y
			}
			}
		case 'mult3':
			for(let i=0;i<numBoxes;i++){
				if((i % 3)==0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y
			}
			}
			break;	
		case 'colparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].columna % 2)==0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y
			}
			}		
			break;
		case 'colsenars':
			for(let i=0;i<numBoxes;i++){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y

			}		
			break;
		case 'filaparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)==0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y

				}
			}		
			break;
		case 'filasenars':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)!=0){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y

				}
			}		
			break;
		case 'random':
			for(let i=0;i<numBoxes;i++){
				if(getRandomBool()){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y

				}	
			}		
			break;
		case 'tots':
			for(let i=0;i<numBoxes;i++){
					//creaEscala();
					boxes[i].scalex=boxes[i].scalex+feat_scale_x
					boxes[i].scaley=boxes[i].scaley+feat_scale_y

			}	
	case 'un':
			let quin=getRandomInt(0,numBoxes);
			boxes[quin].scalex=boxes[quin].scalex+feat_scale_x
			boxes[quin].scaley=boxes[quin].scaley+feat_scale_y
				
		default:
			break;
	}
}

function ferShadowExterior(){
	let x,y;

	switch(feat_shadow_exterior){
		case 'parells':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)==0){
					//creaEscala();
					boxes[i].blurExterior=feat_blur_exterior;
				}
			}
			break;
		case 'senars':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)!=0){
					boxes[i].blurExterior=feat_blur_exterior;

			}
			}
		case 'mult3':
			for(let i=0;i<numBoxes;i++){
				if((i % 3)==0){
					boxes[i].blurExterior=feat_blur_exterior;
			}
			}
			break;	
		case 'colparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].columna % 2)==0){
					boxes[i].blurExterior=feat_blur_exterior;
			}
			}		
			break;
		case 'colsenars':
			for(let i=0;i<numBoxes;i++){
					boxes[i].blurExterior=feat_blur_exterior;

			}		
			break;
		case 'filaparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)==0){
					boxes[i].blurExterior=feat_blur_exterior;

				}
			}		
			break;
		case 'filasenars':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)!=0){
					boxes[i].blurExterior=feat_blur_exterior;

				}
			}		
			break;
		case 'random':
			for(let i=0;i<numBoxes;i++){
				if(getRandomBool()){
					boxes[i].blurExterior=feat_blur_exterior;

				}	
			}		
			break;
		case 'tots':
			for(let i=0;i<numBoxes;i++){
					//creaEscala();
					boxes[i].blurExterior=feat_blur_exterior;


			}	
	case 'un':
			let quin=getRandomInt(0,numBoxes);
			boxes[quin].blurExterior=feat_blur_exterior;
	
		default:
			break;
	}
}

function ferShadowInterior(){
	let x,y;

	switch(feat_shadow_interior){
		case 'parells':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)==0){
					//creaEscala();
					boxes[i].blurInterior=feat_blur_interior;
				}
			}
			break;
		case 'senars':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)!=0){
					boxes[i].blurInterior=feat_blur_interior;

			}
			}
		case 'mult3':
			for(let i=0;i<numBoxes;i++){
				if((i % 3)==0){
					boxes[i].blurInterior=feat_blur_interior;
			}
			}
			break;	
		case 'colparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].columna % 2)==0){
					boxes[i].blurInterior=feat_blur_interior;
			}
			}		
			break;
		case 'colsenars':
			for(let i=0;i<numBoxes;i++){
					boxes[i].blurInterior=feat_blur_interior;

			}		
			break;
		case 'filaparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)==0){
					boxes[i].blurInterior=feat_blur_interior;

				}
			}		
			break;
		case 'filasenars':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)!=0){
					boxes[i].blurInterior=feat_blur_interior;

				}
			}		
			break;
		case 'random':
			for(let i=0;i<numBoxes;i++){
				if(getRandomBool()){
					boxes[i].blurInterior=feat_blur_interior;

				}	
			}		
			break;
		case 'tots':
			for(let i=0;i<numBoxes;i++){
					//creaEscala();
					boxes[i].blurInterior=feat_blur_interior;

			}	
	case 'un':
			let quin=getRandomInt(0,numBoxes);
			boxes[quin].blurInterior=feat_blur_interior;

		default:
			break;
	}
}


function ferRotacio(){
	let angle;
	if(feat_angle){
		angle=90
	}else{
		angle=getRandomInt(0,180)				
	}
	switch(feat_rotacio_tipus){
		case 'parells':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)==0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
				}
			}
			break;
		case 'senars':
			for(let i=0;i<numBoxes;i++){
				if((i % 2)!=0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}				}
			}
			break;	
		case 'mult3':
			for(let i=0;i<numBoxes;i++){
				if((i % 3)==0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}				}
			}
			break;		
		case 'colparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].columna % 2)==0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}				}
			}		
			break;
		case 'colsenars':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].columna % 2)!=0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
				}
			}		
			break;
		case 'filaparells':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)==0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
				}
			}		
			break;
		case 'filasenars':
			for(let i=0;i<numBoxes;i++){
				if((boxes[i].fila % 2)!=0){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
				}
			}		
			break;
		case 'random':
			for(let i=0;i<numBoxes;i++){
				if(getRandomBool()){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
				}	
			}		
			break;
		case 'tots':
			for(let i=0;i<numBoxes;i++){
					if(feat_angles_iguals){
						boxes[i].rotacio=angle	
					}else{
						boxes[i].rotacio=getRandomInt(0,180)
					}
			}	
		case 'un':
			let quin=getRandomInt(0,numBoxes);
			
				if(feat_angles_iguals){
					boxes[quin].rotacio=angle	
				}else{
					boxes[quin].rotacio=getRandomInt(0,180)
				}
		default:
			break;
	}
}