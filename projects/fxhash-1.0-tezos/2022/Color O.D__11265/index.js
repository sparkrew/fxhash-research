function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}


/*	
	_hydra_multi // cc teddavis.org 2021	
	extends _hydra_scope for multiple instances
*/

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']
let aa;
let ab;
let ac;
let ad;
let rndShape;
let rndBackground;
let a;
let b;

let synthCount = 10 // # of hydra instances

// gen hydra instances
let pg = [synthCount],
	hc = [synthCount],
	synth = [synthCount]

for(let i = 0; i < synthCount; i++) {
	hc[i] = document.createElement('canvas') // hydra canvas + custom size
	hc[i].width = 640 // set resolution width
	hc[i].height = 360 // set resolution height

	synth[i] = new Hydra({
		detectAudio: false, // no mic
		canvas: hc[i], // use hydra canvas
		makeGlobal: false, // scoped
	}).synth // scoped hydra
}


// sandbox - start
// access each instance via synth[index]

//background textures

synth[0]
	.osc(50, .15)
	.colorama(rnd_int(0,3))
	.rotate()
	.out()


//.noise(rnd_int(1, 5), .5)
//	.modulate(synth[0].noise(rnd_int(10, 30)), .3)
	//.modulate(synth[0].osc(5, .1, .2), .3)
//	.out()
	
synth[1]

.osc(rnd_int(10, 180), 0, 0.7)
.color(rnd_int(1, 10), rnd_int(1, 10), rnd_int(1, 10))
.rotate(rnd_int(1, 3), -0.06)
	.out()
	
synth[2]

.osc(rnd_int(1, 50), rnd_btw(0, 0.2), rnd_btw(0.1, 1.1))
.color(rnd_int(1, 10),rnd_int(1, 10), rnd_int(1, 10))
.rotate(0.30, 0.1)
.pixelate(2, 20)
	.out()

synth[3]
	.osc(20, 0.01, 1.1)
	.kaleid(rnd_int(1,5))
	.color(2.83,0.91,0.39)
	.rotate(0, 0.1)

//.gradient(rnd_btw(0.7, 1))
//.color(rnd_int(0, 5),rnd_int(0, 5), rnd_int(0, 5))
//.posterize(rnd_int(2, 50), 1.2)
//.saturate(1)
//.rotate(0, -0.08)


	.out()
	

synth[4]

.osc(rnd_int(20, 40), 0.1, 0.8)
.color(rnd_int(0,1),rnd_int(0,1), rnd_int(0,1))
.rotate(0.30, 0.1)
.pixelate(rnd_int(5, 10), rnd_int(2, 5))
	
		.out()
			
//shapes textures	

synth[5].osc(10, .05, .5)
	.modulate(synth[1].src(synth[1].o0).rotate(), .1)
	.out()
	
synth[6].osc(5)
	.color(1,1,1)
	.rotate()
	.out()

synth[7].osc(5)
	.color(2,1,1)
	.rotate()
	.out()

synth[8].osc(5)
	.color(1,2,1)
	.rotate()
	.out()

synth[9].osc(5)
	.color(1,1,2)
	.rotate()
	.out()


// sandbox - stop




//shapes
aa= function cubito(){
		noStroke(0);		
		box(110, 150,110);

}
ab= function conito(){
   		noStroke(0);		
		cone(78, 150,24,24);

}
//ac= function cilindro(){
 //		noStroke(0);		
	//	cylinder(55, 150);
//}

ac= function esfera(){
		noStroke(0);		
		sphere(75);
  }
Shapes= [aa, ab, ac]

rndBackground = rnd_int(0, 4)
rndShape = rnd_int(5, 9)
a = rnd_int(0, 45)
b = a


function setup() {
	cnv = createCanvas(windowHeight,windowHeight, WEBGL)
	cnv.position(windowWidth/2-windowHeight/2,0)
	noStroke()
	
	// prep synth layers
	for(let i = 0; i < synthCount; i++) {
		pg[i] = createGraphics(hc[i].width, hc[i].height)
	}	
}
function windowResized() {
	resizeCanvas(windowHeight, windowHeight,WEBGL);
	cnv.position(windowWidth/2-windowHeight/2,0)
}

function draw() {


	background(100)
	//orbitControl(5)

	// grab + apply hydra textures
	for(let i = 0; i < synthCount; i++) {
		pg[i].clear()
		pg[i].drawingContext.drawImage(hc[i], 0, 0, pg[i].width, pg[i].height)
	}
	
	texture(pg[rndBackground]) // use hydra 1
	plane(5000, height)




if (b<5){	
	push()
	translate(0,0,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa()
	pop();
}
	
	else if (b<10){

	push()
	translate(200,0,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()

	push()
	translate(-200,0,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()}

	else if (b<15) {
	push()
	translate(200,200,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()

	push()
	translate(-200,200,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()

	push()
	translate(200,-200,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()

	push()
	translate(-200,-200,0)
	texture(pg[rndShape])
	//rotateY(90)
	aa(0)
	pop()
	}

	else if (b<20){
	push()
	translate(0,0,0)
	texture(pg[rndShape])
	rotateY(90)
	ab(0)
	pop()

	}

	else if (b<25){
		push()
		translate(200,0,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()
	
		push()
		translate(-200,0,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()
	}
	
	else if (b<30) {
		push()
		translate(200,200,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()
	
		push()
		translate(-200,200,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()

		push()
		translate(200,-200,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()
	
		push()
		translate(-200,-200,0)
		texture(pg[rndShape])
		rotateY(90)
		ab(0)
		pop()
	}


	else if (b<35){
		push()
		translate(0,0,0)
		texture(pg[rndShape])
		rotateY(90)
		ac(0)
		pop()
	
		}
	
		else if (b<40){
			push()
			translate(200,0,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
		
			push()
			translate(-200,0,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
		}
		
		else if (b<45) {
			push()
			translate(200,200,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
		
			push()
			translate(-200,200,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
	
			push()
			translate(200,-200,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
		
			push()
			translate(-200,-200,0)
			texture(pg[rndShape])
			rotateY(90)
			ac(0)
			pop()
		}
}
