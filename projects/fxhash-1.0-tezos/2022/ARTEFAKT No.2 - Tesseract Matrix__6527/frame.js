
class Frame extends SceneElement {
	constructor(frame_prop_h, seed, rare=false){
		// frame_prop_h : (float) proportion of frame size to total size (using height of image)
		super(seed);

		// = Constants
		// - Size proportions
		this.C_PROP_1 = frame_prop_h;			// TOTAL FRAME
		this.C_PROP_2 = this.C_PROP_1 * 0.9;	// G - innermost border
		
		this.C_PROP_3 = this.C_PROP_1 * 0.8;	// A,B - outer border
		this.C_PROP_4 = this.C_PROP_3 * 0.8;	// D - border overlay
		this.C_PROP_5 = this.C_PROP_3;			// C - corner goem

		this.C_CNT_A = 4;
		this.C_CNT_B = 4;
		this.C_CNT_C = 8;
		this.C_CNT_D = 0;
		this.C_CNT_E = 0;
		this.C_CNT_F = 0;
		this.C_CNT_G = 1;

		this.C_IDX_A = 0; 
		this.C_IDX_B = this.C_IDX_A + this.C_CNT_A;
		this.C_IDX_C = this.C_IDX_B + this.C_CNT_B;
		this.C_IDX_D = this.C_IDX_C + this.C_CNT_C;
		this.C_IDX_E = this.C_IDX_D + this.C_CNT_D;
		this.C_IDX_F = this.C_IDX_E + this.C_CNT_E;
		this.C_IDX_G = this.C_IDX_F + this.C_CNT_F;

		this.C_CNT_TOTAL = this.C_IDX_F + this.C_CNT_G;

		// = DNA


		// = Properties | Members

		this.brush_A = new Primitive_A(this.prand.R(), rare);
		this.brush_B = new Primitive_B(this.prand.R(), rare);
		this.brush_C = new Primitive_C(this.prand.R(), rare);
		this.brush_D = new Primitive_D(this.prand.R(), rare);
		this.brush_E = new Primitive_E(this.prand.R(), rare);
		this.brush_G = new Primitive_G();

		this.elements = [...Array( this.C_CNT_TOTAL )].map(_=> new SceneElement() );
	}

	resize(w,h){
		console.log('frame.resize()',w,h);

		super.resize(w,h);

		// = New size properties
		var C_SIZE_TOTAL = this.dim.y;
		this.C_SIZE_BORDER = C_SIZE_TOTAL * this.C_PROP_1;
		this.C_SIZE_A = C_SIZE_TOTAL * this.C_PROP_3;
		this.C_SIZE_B = C_SIZE_TOTAL * this.C_PROP_5;
		this.C_SIZE_CW = this.C_SIZE_A;
		this.C_SIZE_C1L = this.dim.y/2 - this.C_SIZE_A+1;
		this.C_SIZE_C2L = this.dim.x/2 - this.C_SIZE_A+1;
		this.C_SIZE_D = C_SIZE_TOTAL * this.C_PROP_4;
		this.C_SIZE_E = this.C_SIZE_AW;
		this.C_SIZE_GX = 2*(this.dim.x/2 - this.C_SIZE_A * (1-this.C_PROP_2));
		this.C_SIZE_GY = 2*(this.dim.y/2 - this.C_SIZE_A * (1-this.C_PROP_2));
		console.log(this.C_SIZE_GX, this.dim.x, this.C_SIZE_A, this.C_PROP_2);

		//this.C_SIZE_GY = this.dim.y*(1-this.C_PROP_2*2);

		// = Resize brushes
		this.brush_A.resize(this.C_SIZE_A);
		this.brush_B.resize(this.C_SIZE_B);
		this.brush_C.resize(this.C_SIZE_CW);
		this.brush_D.resize(this.C_SIZE_D);
		this.brush_E.resize(this.C_SIZE_E);
		this.brush_G.resize(this.C_SIZE_GX,this.C_SIZE_GY);

		// = Resize elements
		for(let i=0; i<this.elements.length; i++){
			// // console.log(i);
			this.elements[i].resize(1,1);
			this.elements[i].transform();
		}

		// - Element A - corners
		// - - Top Left
		this.elements[this.C_IDX_A+0].resize(this.C_SIZE_A,this.C_SIZE_A);
		
		// - - Top Right
		this.elements[this.C_IDX_A+1].resize(this.C_SIZE_A,this.C_SIZE_A);
		this.elements[this.C_IDX_A+1].transform(
			createVector(this.dim.x,0),
			createVector(-1,1)
		);

		// - - Bottom Left
		this.elements[this.C_IDX_A+2].resize(this.C_SIZE_A,this.C_SIZE_A);
		this.elements[this.C_IDX_A+2].transform(
			createVector(0,this.dim.y),
			createVector(1,-1)
		);

		// -- Bottom Right
		this.elements[this.C_IDX_A+3].resize(this.C_SIZE_A,this.C_SIZE_A);
		this.elements[this.C_IDX_A+3].transform(
			createVector(this.dim.x,this.dim.y),
			createVector(-1,-1)
		);


		// - Element B - corner geometry
		// - - Top Left
		this.elements[this.C_IDX_B+0].resize(this.C_SIZE_B,this.C_SIZE_B);
		
		// - - Top Right
		this.elements[this.C_IDX_B+1].resize(this.C_SIZE_B,this.C_SIZE_B);
		this.elements[this.C_IDX_B+1].transform(
			createVector(this.dim.x,0),
			createVector(-1,1)
		);

		// - - Bottom Left
		this.elements[this.C_IDX_B+2].resize(this.C_SIZE_B,this.C_SIZE_B);
		this.elements[this.C_IDX_B+2].transform(
			createVector(0,this.dim.y),
			createVector(1,-1)
		);

		// -- Bottom Right
		this.elements[this.C_IDX_B+3].resize(this.C_SIZE_B,this.C_SIZE_B);
		this.elements[this.C_IDX_B+3].transform(
			createVector(this.dim.x,this.dim.y),
			createVector(-1,-1)
		);



		// = C1 - outer border - vertical
		// - - TopLeft
		this.elements[this.C_IDX_C+0].resize(this.C_SIZE_C1L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+0].transform(
			createVector(this.C_SIZE_CW-1,this.C_SIZE_CW),
			createVector(1,1),
			PI/2.0

		);

		// - - Top Right
		this.elements[this.C_IDX_C+1].resize(this.C_SIZE_C1L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+1].transform(
			createVector(this.dim.x-this.C_SIZE_CW+1,this.C_SIZE_CW),
			createVector(-1,1),
			-PI/2.0
		);

		// - - Bottom Left
		this.elements[this.C_IDX_C+2].resize(this.C_SIZE_C1L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+2].transform(
			createVector(this.C_SIZE_CW-1,this.dim.y-this.C_SIZE_CW),
			createVector(1,-1),
			-PI/2.0
		);

		// - - Bottom Right
		this.elements[this.C_IDX_C+3].resize(this.C_SIZE_C1L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+3].transform(
			createVector(this.dim.x-this.C_SIZE_CW+1,this.dim.y-this.C_SIZE_CW),
			createVector(-1,-1),
			PI/2.0
		);

		// = C2 - outer border - horizontal
		// - - TopLeft
		this.elements[this.C_IDX_C+4].resize(this.C_SIZE_C2L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+4].transform(
			createVector(this.C_SIZE_CW,this.C_SIZE_CW),
			createVector(1,-1),
			0
		);

		// - - Top Right
		this.elements[this.C_IDX_C+5].resize(this.C_SIZE_C2L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+5].transform(
			createVector(this.dim.x-this.C_SIZE_CW,this.C_SIZE_CW),
			createVector(-1,-1),
			0
		);

		// - - Bottom Left
		this.elements[this.C_IDX_C+6].resize(this.C_SIZE_C2L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+6].transform(
			createVector(this.C_SIZE_CW,this.dim.y-this.C_SIZE_CW),
			createVector(1,1),
			0
		);

		// - - Bottom Right
		this.elements[this.C_IDX_C+7].resize(this.C_SIZE_C2L,this.C_SIZE_CW);
		this.elements[this.C_IDX_C+7].transform(
			createVector(this.dim.x-this.C_SIZE_CW,this.dim.y-this.C_SIZE_CW),
			createVector(-1,1),
			0
		);

		// = G - inner spacing
		console.log('C_SIZE_G',this.C_SIZE_GX, this.C_SIZE_GY);
		this.elements[this.C_IDX_G].resize(this.C_SIZE_GX, this.C_SIZE_GY);
		this.elements[this.C_IDX_G].transform(
			createVector((this.dim.x-this.C_SIZE_GX)/2,(this.dim.y-this.C_SIZE_GY)/2),
			createVector(1,1),
			0
		);
	}

	render(){
		// console.log('frame.render()');
		//this.img.background( color('grey') );

		// for(let i=0; i<this.elements.length; i++){
		// 	this.elements[i].render_brush_fill(this.brush_A);
		// }

		// console.log('- rendering A');
		for(let i=this.C_IDX_A; i<this.C_IDX_A+this.C_CNT_A; i++){
			// console.log('i',i);
			this.elements[i].render_brush_fill(this.brush_A);
		}
		// console.log('- rendering B');
		for(let i=this.C_IDX_B; i<this.C_IDX_B+this.C_CNT_B; i++){
			// console.log('i',i);
			this.elements[i].render_brush_fill(this.brush_B);
		}
		// console.log('- rendering C');
		for(let i=this.C_IDX_C; i<this.C_IDX_C+this.C_CNT_C; i++){
			// console.log('i',i);
			this.elements[i].render_brush_fill(this.brush_C);
		}
		// console.log('- rendering G');
		for(let i=this.C_IDX_G; i<this.C_IDX_G+this.C_CNT_G; i++){
			// console.log('i',i);
			this.elements[i].render_brush_fill(this.brush_G);
		}


		// this.elements_B[0].render_brush_fill(this.brush_A);
		// this.elements[1].render_brush_fill(this.brush_B);
		// this.elements[2].render_brush_fill(this.brush_C);
		// this.elements[3].render_brush_fill(this.brush_D);

		for(let i=this.C_IDX_A; i<this.C_IDX_G+this.C_CNT_G;i++){
			//// console.log(i);

			this.img.push();
			
			//this.elements[i].img.background(color('white'));
			
			//this.img.image( this.elements[i].img, 0, 0, 100, 100 );
			
			this.elements[i].draw_to_surface( this.img );

			this.img.pop();
		}
	}
}

class Primitive_A extends BrushPrimitive {
	constructor(seed, rare=false){
		// console.log('Primitive_C.constructor()', seed);
		super(seed);

		// GENERATIVE PARAMETERS
		this.C_ELEM_MIN = 4;	// min number of elements
		this.C_ELEM_MAX = 7;	// max number of elements

		this.C_STROKE_MAX = 2;
		if(rare){
			this.C_COLOR_BG = color('black');
			this.C_COLOR_FR = color('white');
		}else{
			this.C_COLOR_BG = color('white');
			this.C_COLOR_FR = color('black');
		}
		

		// DNA
		this.elem_cnt = this.prand.R_lim_int(this.C_ELEM_MIN, this.C_ELEM_MAX);
		//this.elem_cnt = 3;
		// console.log('elem_cnt',this.elem_cnt);
		this.dna = {
			'elem_cnt' : this.elem_cnt,
			'elem_pos' : [...Array(this.elem_cnt)].map( _ => this.prand.R() ),
			//'elem_pos' : [1,2,3],
			'elem_w'   : [...Array(this.elem_cnt)].map( _ => this.prand.R_lim_int(1,this.C_STROKE_MAX) )
			//'elem_margin' : 1
		};

	}

	resize(size){
		// console.log('Primitive_C.resize()',size);
		//this.size = size;
		//super.resize(1,size);
		this.size = size < this.C_SIZE_MIN ? this.C_SIZE_MIN : size;
		super.resize(this.size,this.size);
	}

	render(){
		// console.log('Primitive_C.render()', this.dna);
		this.img.background(this.C_COLOR_BG);
		//this.img.noStroke();
		//this.img.fill(color('black'));
		this.img.noFill();
		this.img.stroke(this.C_COLOR_FR);

		// let u = this.size / (this.C_ELEM_POS*(1+this.C_MARGIN));
		for(let i=0; i < this.dna['elem_cnt']; i++){
			let d=this.dna['elem_pos'][i]*this.size;
			
			this.img.rect(1,1,d,d);	
		}

		this.img.rect(0,0,this.dim.x-1,this.dim.y-1);
	}
}

class Primitive_B extends BrushPrimitive {
	constructor(seed, rare=false){
		// console.log('Primitive_B.constructor()', seed);
		super(seed);

		// CONSTANTS
		if(rare){
			this.C_COLOR_ST = color('white');
		}else{
			this.C_COLOR_ST = color('black');
		}
		

		// this.C_COLOR_BG = color(0,0,0,0);
		
		// //this.C_COLOR_FL = color(this.prand.R_lim_int(0,360),100,100);
		// this.C_COLOR_FL = color(0,0,0,80);

		this.C_SIZE_MIN = 0.1;
		this.C_SIZE_MAX = 0.2;

		// GENERATIVE PROPERTIES
		
		this.P_ROT = this.prand.R_lim(0,PI*2);
		this.P_SIZE_PROP = this.prand.R_lim(this.C_SIZE_MIN, this.C_SIZE_MAX);
		
		// DNA
		// let r = this.prand.R_lim(this.C_SIZE_MIN,this.C_SIZE_MAX)/2;
		// this.dna = {
		// 	'x' : r+this.prand.R()*(1-2*r),
		// 	'y' : r+this.prand.R()*(1-2*r),
		// 	'd' : r*2,
		// };
		this.dna = {};

		// PROPERTIES
	}

	resize(x,y){
		super.resize(x,y);
	}

	render(){
		// console.log('Primitive_B.render()',this.dna,this.size);

		// super.render();
		this.img.clear();
		this.img.stroke(this.C_COLOR_ST);
		// this.img.fill(this.C_COLOR_FL);
		//this.img.circle(this.dna['x']*this.dim.x,this.dna['y']*this.dim.y,this.dna['d']*this.dim.y);
		this.img.push();
		this.img.translate(this.dim.x/2,this.dim.y/2);
		this.img.scale(this.dim.x*this.P_SIZE_PROP, this.dim.y*this.P_SIZE_PROP);
		this.img.rotate(this.P_ROT);
		this.img.triangle(0,1,1,0,-1,0);
		this.img.pop();
		//this.img.background(color('white'));
	}
}

class Primitive_C extends BrushPrimitive {
	constructor(seed,rare=false){
		// console.log('Primitive_C.constructor()', seed);

		super(seed);
				
		// GENERATIVE PARAMETERS
		this.C_ELEM_MIN = 2;	// min number of elements
		this.C_ELEM_MAX = 5;	// max number of elements
		this.C_ELEM_POS = 10;	// max number of element positions
		this.C_MARGIN = 1;		// edge margin, in 'units'

		this.C_SIZE_MIN = this.C_ELEM_POS*(this.C_MARGIN+1);

		this.C_STROKE_MAX = 2;

		//this.C_COLOR_BG = color('white');
		if(rare){
			//this.C_COLOR_FR = color(this.prand.R_lim_int(0,360),100,15);
			this.C_COLOR_BG = color('black');
			this.C_COLOR_FR = color('white');
		}else{
			this.C_COLOR_BG = color('white');
			this.C_COLOR_FR = color('black');
		}
		


		// DNA
		this.elem_cnt = this.prand.R_lim_int(this.C_ELEM_MIN, this.C_ELEM_MAX);
		//this.elem_cnt = 3;
		// console.log('elem_cnt',this.elem_cnt);
		this.dna = {
			'elem_cnt' : this.elem_cnt,
			'elem_pos' : [...Array(this.elem_cnt)].map( _ => this.prand.R_lim_int(1,this.C_ELEM_POS-1) ),
			//'elem_pos' : [1,2,3],
			'elem_w'   : [...Array(this.elem_cnt)].map( _ => this.prand.R_lim_int(1,this.C_STROKE_MAX) )
			//'elem_margin' : 1
		};

		// INTITIALIZE
		this.size=1;

		// super.resize(size,1);
		// this.render();
	}

	resize(size){
		// console.log('Primitive_C.resize()',size);
		//this.size = size;
		//super.resize(1,size);
		this.size = size < this.C_SIZE_MIN ? this.C_SIZE_MIN : size;
		super.resize(1,this.size);
	}

	render(){
		// console.log('Primitive_C.render()', this.dna);
		this.img.background(this.C_COLOR_BG);
		this.img.noStroke();
		this.img.fill(this.C_COLOR_FR);

		let u = this.size / (this.C_ELEM_POS*(1+this.C_MARGIN));
		for(let i=0; i < this.dna['elem_cnt']; i++){
			let d=this.dna['elem_pos'][i]*(1+this.C_MARGIN)*u ;
			this.img.rect(0,d, 1,this.dna['elem_w'][i]*u);
		}


	}
}

class Primitive_D extends BrushPrimitive {}

class Primitive_E extends BrushPrimitive {}

class Primitive_G extends BrushPrimitive {
	constructor(){
		super(0);

		this.C_COLOR_BG = color('white');
		this.C_COLOR_FR = color('black');

	}

	resize(w,h){
		super.resize(w,h);
	}

	render(){
		super.render();

		this.img.fill(this.C_COLOR_BG);
		this.img.stroke(this.C_COLOR_FR);
		this.img.strokeWeight(1);
		this.img.rect(0,0,this.dim.x,this.dim.y);
	}
}