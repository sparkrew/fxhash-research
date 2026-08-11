class AudioExperimentManager {
	//var cosos = [];

   

	constructor(){
		
		
		this.name = "Audioexperiment 1";
		this.dir = "Audioexperiment 1";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		//this.RM = new RenderManager();
		//this.RM.addShader('shaders/generative/noisify1.frag', 0, "noise.frag");
		this.audioInit = false;
		this.generate2();
		
		
		this.masterVolume = -9; // in decibel.
		this.pendulums = [];
		this.scale;
		this.reverb ; 
		//this.mixer;
		
		

		let flavour = "minor pentatonic";
		this.scale = Tonal.Scale.get("C3 " + flavour).notes;
		this.scale = this.scale.concat(Tonal.Scale.get("C4 " + flavour).notes);
		this.scale = this.scale.concat(Tonal.Scale.get("C5 " + flavour).notes);
		for (let i = 0; i < this.scale.length; i++) {
			  let y = map (i,0,this.scale.length-1,height*1/10,height*9/10);
			  this.pendulums[i] = new Pendulum(width/2,y,0.85 + i * (1 / 60), this.scale[i]);
		}
			  
	}
	generate2(){
	
	}
	
	initAudio(){
		if(!this.audioInit){
			
			 Tone.Master.volume.value = this.masterVolume;

			  gmixer = new Tone.Gain();

			  this.reverb = new Tone.Reverb({
				wet: 0.5, // half dry, half wet mix
				decay: 30 // decay time in seconds
			  });

			  // setup the audio chain:
			  // mixer -> reverb -> Tone.Master
			  // note that the synth object inside each pendulum get
			  // connected to the mixer, so our final chain will look like:
			  // synth(s) -> mixer -> reverb -> Tone.Master
			  gmixer.connect(this.reverb);
			  this.reverb.toDestination();

			  // quick way to get more notes: just glue 3 scales together
			  // other 'flavours' to try:
			  // major
			  // minor
			  // major pentatonic
			  // the modes (eg: dorian, phrygian, etc..)
			  // look at Tonal.ScaleType.names() to see a list of all supported
			  // names


			  // optional but fun: shuffle the scale array to mixup the notes
			  //Tonal.Collection.shuffle(scale);

			  // create as many pendulums as we have notes in the scale[] array
			  for (let i = 0; i < this.scale.length; i++) {
				  let y = map (i,0,this.scale.length-1,height*1/10,height*9/10);
				  this.pendulums[i] = new Pendulum(width/2,y,0.85 + i * (1 / 60), this.scale[i]);
			  }
			  this.audioInit = true;
		}
	}
	
    draw(_ps) {
		background(0,80);
		if (this.audioInit) {
			for (let p of this.pendulums) {
			  p.run();
			 // translate(0, height / (this.pendulums.length+1));
			}
		  } else {
			fill(random(150),0,0);
			noStroke();
			ellipse(width/2,height/2,50,50);
			
			
		}
	}	
	update(){
		
	}
}
//------------------------------------------------------------
class Pendulum {
  // runs when we call "= new Pendulum()"
  constructor(_x,_y,freq, note) {
	
	this.x = _x;
	this.y = _y;
	
	this.c1 = color(random(255),random(50),random(120));
	this.c2 = color(random(255),random(150),random(180));
	
    this.freq = freq * 0.3;
    this.note = note;

	
    this.prevPos = 0;
	//this.initAudio();
	
	this.audioReady = false;
  }
  
  initAudio(){
	  
    this.lfo = new Tone.LFO(this.freq);
    this.lfo.start(1); // creating a delayed start time by 1
    this.meter = new Tone.Meter();
    this.meter.normalRange = true; // 0-1
    this.lfo.connect(this.meter);

    this.synth = new Tone.Synth();
    this.synth.connect(gmixer);
	this.audioReady = true;
  }
  // Arbitrary name here. We could have called this function 'update'
  // or 'swing' or whatever.
  run() {
	  
	  let pos = 0; 
	  if(this.audioReady){
		  pos = 0.5 - this.meter.getValue(0); // -> -0.5 ~ 0.5
		  this.x = map(pos, -0.5, 0.5, border, width - border);
	  }
    
    
    let border = max(100, (width-300)/2);
	
	



    let left = pos > 0 && this.prevPos < 0; // && --> AND
    let right = pos < 0 && this.prevPos > 0;
    if (left || right) {
      // || ---> OR
      // trigger a note
      this.synth.triggerAttackRelease(this.note, "90n");
	  //ellipse(x,height/2,500,500);
    }
    this.prevPos = pos;

    // drawing code --> this could go in a separate function if we
    // wanted to, but I didn't bother in this case.
    //fill(255);
    //stroke(255);
    //line(x, 50, width / 2, 0);
	fill(this.c1);
    ellipse(this.x, this.y, 25, 25);
  }
}