
class SceneElement {
	// 
	constructor(seed){
    	this.prand = new PRand(seed);

    	this.transform_translate_v = null;
    	this.transform_scale_v = null;
    	this.transform_rotate_v = null;
	}

	// re-size, re-position the element (drawing surfaces)
	resize(w,h){
		this.dim = createVector(w,h);

		this.img = createGraphics(w,h);
		//this.img.colorMode(HSB,360,100,100,100);
	}

	resize3D(x,y){
		if(!y){
			y=x;
		}
		this.img = createGraphics(x,y,WEBGL);
		this.dim = createVector(x,y);

		this.render();
	}

	// set the transform vectors for drawing the image
	transform(v_translate=null, v_scale=null, r_rotate=null){
		
		// save all the transform vectors
		this.transform_translate_v = v_translate != null ? v_translate : createVector(0,0);
		this.transform_scale_v = v_scale != null ? v_scale : createVector(1,1);
		this.transform_rotate_r = r_rotate != null ? r_rotate : 0.0;
		
		// simpler alias
		this.pos = this.transform_translate_v;
	}

	// generates the data required to render the image
	generate(){

	}

	render(){
		this.img.background( this.C_COLOR_BG );
	};

	// render data to image buffer
	render_brush_fill(brush=null){
		// console.log('render_brush_fill()');

		//this.img.background(50,100,100);

		if(brush.img){
			// fill brush to image buffer
			//// console.log('filling area:',0,0,this.dim.x,this.dim.y);
			//// console.log('brush:',brush);
			//// console.log('this.img',this.img);
			// console.log('brush',brush);
			// console.log('dim',this.dim);
			this.img.image(brush.img,0,0,this.dim.x-1,this.dim.y-1);
			//this.img.image(brush.img,0,0,this.dim.x,brush.size);
		}
	}

	// draw image buffer to surface with applied transforms
	draw_to_surface(img){
		// console.log('draw_to_surface()');

		img.push();
		
		img.translate(this.transform_translate_v);
		img.rotate(this.transform_rotate_r);
		img.scale(this.transform_scale_v);
		
		
		

		img.image(this.img, 0, 0);

		//img.fill('red');
		//img.rect(this.pos.x,this.pos.y,this.dim.x,this.dim.y);
		//img.rect(0,0,100,100);

		img.pop();
	}
}

class BrushPrimitive {
	constructor(seed){
		this.prand = new PRand(seed);
		colorMode(HSB,360,100,100,100);
		this.C_COLOR_BG = color(this.prand.R_lim_int(0,360),100,100);

		this.dna = {};

		// this.resize(size,size);
		// this.render();
	}

	resize(x,y){
		// console.log('BrushPrimitive.resize()',x,y);

		if(!y){
			y=x;
		}
		this.img = createGraphics(x,y);
		this.dim = createVector(x,y);

		this.render();
	}

	render(){
		// console.log('BrushPrimitive.render()');

		//this.img.colorMode(HSB,360,100,100,100);

		this.img.background( this.C_COLOR_BG );

	}
}



// = CODE PATTERNS
// - Implementing a SceneElement
class myClass extends SceneElement {
	constructor(seed){
		super(seed);

		// = CONSTANTS

		// = DNA

		// = PROPERTIES
	}

	generate(x,y){
		super.resize(x,y);
		// your resize code here
	}

	render(){
		super.render();
		// your render code here
	}
}