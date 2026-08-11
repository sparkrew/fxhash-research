class Scene {
	constructor(seed){
		console.log('Scene.constructor()');

		// = Global properties
		// - HSB is amazing, gotta use it
		colorMode(HSB,360,100,100,100);

		this.seed = seed;
	    this.prand = new PRand(seed);

    	// = Constants
    	this.C_COLOR_BG = color('black');

    	// - Rate for drawing to screen
    	let rare = this.prand.R()<0.1;
    	// rare=true;
    	if(rare){
    		this.F_RARE = true;
    		this.C_FRAMERATE = 30;
    		window.$fxhashFeatures = {
    			'Time Variance':'Dynamic'
    		}
    	}else{
    		this.F_RARE = false;
    		this.C_FRAMERATE = 0;
    		window.$fxhashFeatures = {
    			'Time Variance':'Static'
    		}
    	}
    	// this.C_FRAMERATE = 30;

    	if( typeof isFxpreview !== 'undefined' && isFxpreview===true){
    		this.C_BUFF_SCALE = 2.5;
    		this.C_PREREND = 130;
    	}else{
    		this.C_BUFF_SCALE = 1;
    		this.C_PREREND = 130;
    	}
    	

    	// - Border size as a proportion of image height
    	this.C_FRAME_H_PROP = 0.05;
    	// this.C_IMAGE_HW_PROP = 1/C_GOLD_RATIO;
    	this.C_IMAGE_HW_PROP = 1;

    	// = Base properties
	    // - Psudo-random seed

	    this.last_frame = 0;
	    this.record = false;
	    this.record_frame = 0;

    	// = Scene contents
	    // - frame
	    this.frame = new Frame(this.C_FRAME_H_PROP, this.prand.R(), this.F_RARE);
	    // - display object
	    this.objkt = new Objkt(this.prand.R());
	}

	init(){
		console.log('Scene.init()');

		// = Draw settings
		// - HSB color mode, it's sick, gotta do it 
	    //colorMode(HSB, 255, 100, 100, 255);
	    // - Frame rate, dont overload the client
	    if(this.C_FRAMERATE > 0){
	    	frameRate(this.C_FRAMERATE );
	    }else{
	    	noLoop();
	    }
	    
	    // = Size the objects being drawn
		this.resize();
	}

	resize(){
		console.log('Scene.resize()');

		// = Size canvas to entire window
		this.canvas_w = window.innerWidth;
	    this.canvas_h = window.innerHeight;
	    this.canvas = createCanvas(this.canvas_w, this.canvas_h);

	    // = Border size
	    let C_BORDER_TOTAL = this.canvas_h * this.C_FRAME_H_PROP;


	    // = Frame and object size and position
	    // - Set size based on max available height or width
	    // - Constrain height-width proportions set by ratio C_IMAGE_HW_PROP
	    let frm_w, frm_h, frm_x, frm_y;
	    let obj_w, obj_h, obj_x, obj_y;
	    if((this.canvas_w-C_BORDER_TOTAL*2) < (this.canvas_h-C_BORDER_TOTAL*2) / this.C_IMAGE_HW_PROP){
	      // Canvas is TALL, width based size calc
	      // console.log('tall');

	      frm_w = this.canvas_w;
	      obj_w = this.canvas_w-C_BORDER_TOTAL*2;
	      obj_h = obj_w * this.C_IMAGE_HW_PROP;
	      frm_h = obj_h+C_BORDER_TOTAL*2;
	    }else{
	      // Canvas is WIDE, height based size calc
	      // console.log('wide');
	      frm_h = this.canvas_h;
	      obj_h = this.canvas_h-C_BORDER_TOTAL*2;
	      obj_w = obj_h / this.C_IMAGE_HW_PROP;
	      frm_w = obj_w+C_BORDER_TOTAL*2;
	    }

	    // Center the object and frame
	    frm_x = this.canvas_w/2 - frm_w/2;
	    frm_y = this.canvas_h/2 - frm_h/2;
	    obj_x = this.canvas_w/2 - obj_w/2;
	    obj_y = this.canvas_h/2 - obj_h/2;
	    // frm_x = 0- frm_w/2;
	    // frm_y = 0 - frm_h/2;
	    // obj_x = 0 - obj_w/2;
	    // obj_y = 0 - obj_h/2;
	  

	    // Apply size and positioning to the objects

	    this.frame.resize(frm_w, frm_h); //, frm_x, frm_y);
	    this.frame.transform(createVector(frm_x,frm_y));

	    this.objkt.resize(obj_w/this.C_BUFF_SCALE, obj_h/this.C_BUFF_SCALE);
	    this.objkt.transform(
	    	createVector(obj_x/this.C_BUFF_SCALE, obj_y/this.C_BUFF_SCALE), // translate
	    	createVector(this.C_BUFF_SCALE,this.C_BUFF_SCALE), // scale
	    	null
	    	);

	    this.render();
	}

	render(){
		this.frame.render();
		this.objkt.prerender(this.C_PREREND);
	}

	draw(){
		background( this.C_COLOR_BG );

		// translate(-this.canvas_w/2,-this.canvas_h/2);

		// Frame
    	image(this.frame.img,this.frame.transform_translate_v.x, this.frame.transform_translate_v.y);

    	// Object
    	//this.objkt.obj.generate();
    	this.objkt.render();
    	push();

    	scale(this.objkt.transform_scale_v.x, this.objkt.transform_scale_v.y);
    	translate(this.objkt.transform_translate_v.x, this.objkt.transform_translate_v.y);
    	
    	image(this.objkt.img,0,0);
		
		pop();

    	// Screen capture
		if(this.record && (this.frameCount%this.C_RECORD_EA==0 || this.C_RECORD_EA == 1) ){
			this.doRecord();
		}

    	// DEBUG TEXT
    	if(this.C_DO_PRINT){
	    	textSize(12);
	    	fill(color('white)'));
	    	// frame rate
	    	let time_delta = Date.now()-this.last_frame;
	    	let frame_rate = 1000/time_delta;
	    	text('fps: '+str(int(frame_rate)),20,30);
	    	this.last_frame = Date.now();
	    	// frame count
	    	text('frs: '+str(frameCount),20,80);
	    }
	}

	doRecord(){
		console.log('doRecord()');
		let fn = 'rec'+this.seed+'_'+this.record_frame;
		console.log('saving '+fn);
		saveCanvas(fn,'png');

	}
}