
class PolarSequencerManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "PolarSequencer";
        this.dir = "PolarSequencer";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        this.seq = new Seq();
        
	}
	

	
    draw(_ps) {
        noStroke();
		background(0,100,150);
        this.seq.update();
        push();
       // translate(width / 2, height / 2);
        this.seq.display();
        pop();
        ellipse(mouseX, mouseY, 20, 20);
    }

    setup() {

    }
	
	update(){
	
	}

	generate2(_ps) {
	

	}
   

	
}

class Seq {
 
    constructor() {



        this.c1 = color(random(255), random(255), random(255));
        this.c2 = color(random(255), random(255), random(255));

        // c1 = lerpColor(c2,color(255),random(1));
        // c2 = lerpColor(c1,color(255),random(1));

        this.cntnotes = 15;
        this.cntsounds = 5;
        this.amp = 250 ;
        this.x = windowWidth / 2;
        this.y = windowHeight* 1.5/4;
        this.nsiz = 15;

        this.notes = [];
        this.generateNotes();
        this.t = millis();
        this.mflag = false;
    }
   generateNotes() {



    let sounddir = [];

    sounddir[0] = "sounds/bass" + floor(genR(3)) + ".wav";
    sounddir[1] = "sounds/hats" + floor(genR(3)) + ".wav";
    sounddir[2] = "sounds/kick" + floor(genR(3)) + ".wav";
    sounddir[3] = "sounds/snare" + floor(genR(3)) + ".wav";
    sounddir[4] = "sounds/synth" + floor(genR(3)) + ".wav";

    for (let  i = 0; i < this.cntsounds; i++) {
        for (let k = 0; k < this.cntnotes; k++) {

            let mamp = map(i, 0, this.cntsounds - 1,
                this.amp, 0);

            // mamp = ;
            let ak = map(k, 0, this.cntnotes, 0, TWO_PI);

            let xn = this.x + sin(ak) * mamp;
            let yn = this.y + cos(ak) * mamp;
            if (i != this.cntsounds - 1) {
                this.notes.push(new Note(xn, yn, color(0, 150), ak, sounddir[i]));
            }
        }
    }
}

 display() {

    //dibujar fondo
     for (let i = 0; i < this.cntsounds; i++) {
         let mamp = map(i, 0, this.cntsounds - 1, this.amp, 0);

         for (let k = 0; k < this.cntnotes; k++) {
            let idx = map(i, 0, this.cntsounds - 1, 0, 1);
            let ak = map(k, 0, this.cntnotes, 0, TWO_PI);
            let cf = lerpColor(this.c1, color(0), idx);

            fill(cf);
             ellipse(this.x, this.y, mamp * 2, mamp * 2);
        }
        //readers
         let xn2 = this.x + sin(-this.t + PI / 2) * mamp;
         let yn2 = this.y + cos(-this.t + PI / 2) * mamp;
         fill(255, 0, 0);
         ellipse(xn2, yn2, 10, 10);
         for (let k = this.notes.length - 1; k >= 0; k--) {
             let e = this.notes[k];
            if (dist(xn2,
                yn2,
                e.x,
                e.y) < 10) {
                e.triggerNote();
            }
        }
    }

     for (let i = this.notes.length - 1; i >= 0; i--) {
         let e = this.notes[i];
        e.display();
    }



    //dibujar linea tiempo 
    rectMode(CENTER);
    fill(0);
    push();
    translate(this.x, this.y);
    rotate(this.t);
    rect(this.amp / 2, 0, this.amp, 5);
    pop();
  }
    update() {


        if (first_click) {

            if (!mouseIsPressed) {
                this.mflag = false;
            }

            this.t = millis() * 0.001;

            for (let i = this.notes.length - 1; i >= 0; i--) {
                let e = this.notes[i];
                if (dist(mouseX, mouseY, e.x, e.y) < 10 && !this.mflag && mouseIsPressed) {
                    //e.triggerNote();
                    e.isActive = !e.isActive;
                    this.mflag = true;
                }
                e.update();
                
            }
        }
  }
}

class Note {
    
    constructor(_x, _y,_c1,_a,_sounddir) {
        this.x = _x;
        this.y = _y;
        this.siz = 25;
        this.minsiz = this.siz;
        this.maxsiz = this.siz * 2;
        this.c1 = _c1;
        this.c2 = color(225, 225, 100, 200);
        this.isPlaying = false;

        if (genR(1) < 0.2) {
            this.isActive = true;
        }

        this.dec = 1;
        this.a = _a;
        this.sounddir = _sounddir;
    }

    display() {
        if (this.isActive) {
            fill(this.c2);
        } else {
            fill(this.c1);
        }
        ellipse(this.x, this.y, this.siz, this.siz);
    }
    update() {
        this.siz -= this.dec;
        this.siz = constrain(this.siz, this.minsiz, this.maxsiz);
    }
    triggerNote() {
        if (this.isActive && this.siz == this.minsiz) {
            this.siz = this.maxsiz;
            console.log("TRIGGER NOTE ");
            if (first_click && !this.isPlaying) {


                const player = new Tone.Player(this.sounddir);
                player.autostart = true;
                player.loop = false;
                let reverb = new Tone.Reverb();
                player.chain(reverb, Tone.Destination);


            }
        }
    }
}