class Objkt extends SceneElement {
	constructor(seed){
		super(seed);

		// = CONSTANTS
		this.C_COLOR_BG = color('white');

		// = DNA


		// = PROPERTIES
		// this.obj = new LorentzAttractor(seed);
		this.obj = new testObj(seed);

    	//this.obj.iterate();
    	this.obj.generate();
    	//this.obj.generate();
	}

	// resize = generate
	resize(x,y){
		console.log('Objkt.resize()',x,y);
		super.resize(x,y);

		this.obj.resize(x,y);
		this.obj.generate();
    //this.f.transform(createVector(x/2,y/2));
	}

	render(){
		//console.log('Objkt.render()');
		//super.render();

		//this.img.background(color('white'));
		
		this.obj.render();
    	//this.f.draw_to_surface(this.img);
		this.img.image(this.obj.img,0,0);
	}

	prerender(N){
		console.log('pre-rendering: starting iters',N);

		let tstart = performance.now();
	    this.obj.prerender_init();
	    for(let i=0; i < N; i++){
			this.obj.render();
			let t1 = performance.now();
			if((t1-tstart)/1000>20){
				break;
			}
		}
		let tend = performance.now();

		console.log('pre-rendering time:', (tend-tstart)/1000 );
	}
}
