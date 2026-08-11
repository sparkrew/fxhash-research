class JPsyncrandomplayer{
	constructor(){
		console.log("Init audio master controller");

		let dirs = [];
		this.layers = [];
		this.meters = [];

		let cnt = 6;
		this.idx = [];
		for(let i=0; i<cnt; i++){
            this.idx[i] = str(floor(genR(4)+1));
		}
		//console.log(this.idx);
		dirs[0] = "sounds/tommy1/A"+this.idx[0]+".mp3";
		dirs[1] = "sounds/tommy1/B"+this.idx[1]+".mp3";
		dirs[2] = "sounds/tommy1/C"+this.idx[2]+".mp3";
		dirs[3] = "sounds/tommy1/D"+this.idx[3]+".mp3";
		dirs[4] = "sounds/tommy1/E"+this.idx[4]+".mp3";
		dirs[5] = "sounds/tommy1/F"+this.idx[5]+".mp3";


		//dirs[0] = "sounds/tommy1/2.5.mp3";
		//dirs[1] = "sounds/tommy1/2.6.mp3";
		//dirs[2] = "sounds/tommy1/2.7.mp3";


	 cnt = 4;
	 for(let i=0; i<cnt;i++){
		this.meters[i] = new Tone.Meter();
		//this.idx[i] = str(floor(genR(4)+1));
		this.layers.push( new Tone.Player({
			url:
			dirs[i]
		  }));
		this.layers[i].sync().start(0);
		this.layers[i].loop = true;
		//this.layers[i].connect(this.meters[i]);
	 }
	

	//const autoFilter = new Tone.AutoFilter("4n")

	 
	let v1 = str(floor(genR(80))) +"n"; 


	const filter = new Tone.Filter(1500, "highpass")


	let options = {
		"frequency":genR(100,5000),
		"baseFrequency":genR(100,400),
		"wet":genR(1),
	}

	let options2 = {
		"frequency":genR(100,5000),
		"baseFrequency":genR(100,400),
		"wet":genR(1),
	}

	let options3 = {
		"frequency":genR(100,5000),
		"baseFrequency":genR(100,400),
		"wet":genR(1),
		"filter":{
			"frequency":genR(800,1000),
			"type":"highpass",
			"Q" : genR(1)
		}
	}

	let options4 = {
		"frequency":genR(100,5000),
		"baseFrequency":genR(100,400),
		"wet":genR(1),
		"filter":{
			"frequency":genR(800,1000),
			"type":"highpass",
			"Q" : genR(1)
		}
	}

	const autofilter1 = new Tone.AutoFilter(options)
	const autofilter2 = new Tone.AutoFilter(options2)
	const autofilter3 = new Tone.AutoFilter(options3)
	const autofilter4 = new Tone.AutoFilter(options4)

	let rdmpitch = floor(genR(-12,12));

	const efecto1 = new Tone.Chebyshev(floor(genR(10,30)))
	const efecto2_tremolo = new Tone.Tremolo(9, 0.75).start();
	//freeverb.dampening = genR(1500);
	this.layers[0].connect(efecto1)
	//efecto1.toDestination();
	efecto1.connect(autofilter1);
	autofilter1.connect(this.meters[0]);
	this.layers[1].connect(autofilter2);
	autofilter2.connect(this.meters[1]);
	this.layers[2].connect(autofilter3);
	autofilter3.connect(this.meters[2]);


	this.layers[3].connect(autofilter4);
	autofilter4.connect(this.meters[3]);

	/*efecto1.toDestination();
	this.layers[1].toDestination();
	this.layers[2].toDestination();
	this.layers[3].toDestination();*/
	
	autofilter1.toDestination();
	autofilter2.toDestination();
	autofilter3.toDestination();
	autofilter4.toDestination();

	this.mvs = []; //METER VALUES PAPA.
	
	
	
	}
	setup(){

	}
	update(){
		//Actualiza los valores de los meters.
		for(let i=0; i<this.layers.length; i++){
			let mv = this.meters[i].getValue();
			mv = abs(mv);
			mv = constrain(mv,0.0,100);
			mv = map(mv,0.0,100.,1.,0.);
			this.mvs[i] = mv;
		}
	}
	
	draw(_ps){
		//_ps.background(255,0,0);
         _ps.background(0,100,100);
		//console.log(this.meter.getValue());
		_ps.textAlign(CENTER,CENTER);
		_ps.textSize(30);
		let sepy = 100;

		let cnt = 4;
		let xs = [width*.25,width*.5,width*.75,
					width*.25,width*.5,width*.75];
		let ys = [height*.25,height*.25,height*.25,
					height*.75,height*.75,height*.75];
		let layers = ["LAYER A","LAYER B","LAYER C","LAYER D","LAYER E","LAYER F"]

		this.max = 128;
		
		for(let i=0; i<this.layers.length; i++){
			if(i == 0){
				console.log("AMP : ");
				console.log(this.meters[i].getValue().toFixed(2));
			}
		
			_ps.fill(255,255);
			_ps.textAlign(CENTER,CENTER);
			_ps.text(layers[i],xs[i],ys[i]-sepy);
			//_ps.text(this.meters[i].getValue().toFixed(2),xs[i],ys[i]-sepy*2.);
			_ps.textAlign(LEFT,CENTER);
			_ps.text("Mapeado " + this.mvs[i].toFixed(2),xs[i]-100,ys[i]+sepy);
			_ps.text("Crudo " + this.meters[i].getValue().toFixed(2),xs[i]-100,ys[i]+sepy*1.5);
			_ps.text("Indice " + this.idx[i],xs[i]-100,ys[i]+sepy*2.0);
			_ps.fill(255,10);
			_ps.circle(xs[i],ys[i],this.mvs[i]*150);
			_ps.noFill();
			_ps.stroke(255,255);
			_ps.strokeWeight(2);
			_ps.circle(xs[i],ys[i],this.max,this.max);
		}
	}
	

}


