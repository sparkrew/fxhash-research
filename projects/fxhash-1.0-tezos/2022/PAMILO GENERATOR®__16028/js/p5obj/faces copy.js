//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class FaceManager{

	constructor(){
		this.cosos = [];
		this.name = "Faces";
		this.dir = "Faces";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;



        let ama = genR(120, 200);

        this.glitchlerp = 0.0;


        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/moco3.frag', 0, "moco3.frag");

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/moco2.frag', 0, "f2.frag");

        this.d = createGraphics(windowWidth, windowHeight);
        this.d2 = createGraphics(windowWidth, windowHeight);


        const pitchShift = new Tone.PitchShift();
        this.lerpp = pitchShift;
        this.audioPlaying = false;

        this.vol1 = new Tone.Volume(-10);
        this.vol2 = new Tone.Volume(-10);

        this.crossFade = new Tone.CrossFade(0.5);

    }


        setup() {

            let distance = 0;
            do {
                this.c1 = color(genR(255), genR(255), genR(255));
                this.c2 = color(genR(255), genR(255), genR(255));


                distance = (abs(red(this.c1) - red(this.c2)) +
                    abs(green(this.c1) - green(this.c2) +
                        abs(blue(this.c1) - blue(this.c2))))/3.;

            } while (distance < 150);



            console.log 
            console.log(distance);


            this.RM2.objts[0].localUniformsValues[0] = red(this.c1) / 255;
            this.RM2.objts[0].localUniformsValues[1] = green(this.c1) / 255;
            this.RM2.objts[0].localUniformsValues[2] = blue(this.c1) / 255;

            this.RM2.objts[0].localUniformsValues[3] = red(this.c2) / 255;
            this.RM2.objts[0].localUniformsValues[4] = green(this.c2) / 255;
            this.RM2.objts[0].localUniformsValues[5] = blue(this.c2) / 255;

            this.RM2.objts[0].localUniformsValues[6] = genR(0.4,1.);
            this.RM2.objts[0].localUniformsValues[7] = genR(0.0, 1.);
            this.RM2.objts[0].localUniformsValues[8] = genR(0.0, 1.);
            this.RM2.objts[0].localUniformsValues[9] = genR(0.0, 0.5);
            this.RM2.objts[0].localUniformsValues[10] = genR(0.0, 0.5);

            this.RM2.objts[0].localUniformsValues[11] = genR(0.0, 0.4);

            this.RM2.objts[0].localUniformsValues[11] = genR(0.2,0.4);

            this.RM2.objts[0].localUniformsValues[18] = 1.0;
            //this.RM2.objts[0].sh.setUniform("lerpglitch", 1.0);

            this.RM.objts[0].localUniformsValues = this.RM2.objts[0].localUniformsValues;



            if (!this.loaded) {
                this.generate2(this.d);
                this.loaded = true;
         
                this.d.image(this.RM.pgs[0], 0, 0, width, height);
                document.getElementById("loading").style.visibility = "hidden";
            }
           
         
        }
        draw(_ps) {		


          //  this.RM2.updateDrawOnBuffers();
            /*
		    if(!this.loaded){				
                //_ps.background(0);
                this.RM2.update();
                this.RM2.updateDrawOnBuffers();
                _ps.image(this.RM2.pgs[0], 0, 0, width, height);
                this.generate2(this.d);
                this.loaded = true;
                this.RM.update();
                this.RM.updateDrawOnBuffers();
                this.d.image(this.RM.pgs[0], 0, 0,width,height);
                document.getElementById("loading").style.visibility = "hidden";
            }*/

            this.RM2.update();
            this.RM2.updateDrawOnBuffers();
            this.RM2.objts[0].sh.setUniform("tx", this.d2);

            this.RM2.objts[0].localUniformsValues[18] = this.glitchlerp;
           // this.RM2.objts[0].localUniformsValues[12] = 1.0;
            //this.RM2.objts[0].sh.setUniform("lerpglitch", 1.0);

            this.d2.image(this.RM2.pgs[0], 0, 0, width, height);
            this.d2.image(this.d, 0, 0, width, height);

            this.RM.update();
            this.RM.updateDrawOnBuffers();
            this.RM.objts[0].sh.setUniform("tx", this.d2);


            if (mouseIsPressed) {
                this.glitchlerp += 0.01;
                this.lerpp.pitch = map(mouseX,0,width,-30,30); // down one octave
            } else {
                this.glitchlerp -= 0.1;
               
            }


            this.glitchlerp += 0.01;
            this.lerpp.pitch = map(mouseX,0,width,-30,30); // down one octave



            if(  this.audioPlaying){
           //   this.vol1["volume"] = 30; 

             // this.auxv1.volume = 30;
            }
           // this.vol2.volume = map(this.glitchlerp,0,1,100,-100);
            //this.vol1 = 0.0;
            //this.vol2 = 0.0;
          //  Tone.Master.volume.value = map(this.glitchlerp,0,)

            this.glitchlerp = constrain(this.glitchlerp, 0.0, 1.0);
            this.crossFade.fade.value= this.glitchlerp;
           //_ps.image(this.RM2.pgs[0], 0, 0, width, height);
            //_ps.image(this.d2, 0, 0, width, height);
            _ps.image(this.RM.pgs[0], 0, 0, width, height);

           // background(255, 0, 0);
           //this.RM2.update();
        
           // this.RM2.draw(0, 0, width, height);

          // fill(255,0,0);
           //ellipse(mouseX,mouseY,50,50);
        }
        update() {

        }
        generate2(_ps) {

            let c1 = color(genR(255), genR(255), genR(255));
            let c2 = color(genR(255), genR(255), genR(255));
            //_ps.background(0);
            _ps.noStroke();
            _ps.rectMode(CENTER);
            _ps.fill(255);
            //bars();
            //bg();
            _ps.push();
            _ps.translate(width / 2, height / 2);
            _ps.scale(0.8);
            _ps.translate(-width / 2,- height / 2);
            //this.dibujarFondo(_ps);
            this.body(_ps);
            this.face(_ps);
            _ps.pop(_ps);
            
        }
        body(_ps) {

            let cnt = 4;
            for (let i = 0; i < cnt; i++) {
                let rdm = 50;
                let y = height / 2 + genR(-rdm, rdm);
                _ps.fill(genR(255), 255);
                this.shape1(_ps,width / 2, y, genR(300, 1500), genR(200), genR(PI / 3, -PI / 3), 0);
            }
        }
        face(_ps) {

                let cnt2 = 5;
                /*for(let i =0;i < cnt2; i++){
                 let rdm = 70;
                 let y = height/2 + genR(-rdm,rdm);
                 fill(genR(255),genR(255));
                 shape1(width/2,y,genR(1000),genR(15));
                 }*/

            this.dibujarCuerpo(_ps);
                if (genR(1) < 0.4) {
                    this.dibujarPelo(_ps);
                }
                _ps.ellipse(width / 2, height / 2, 200, 200);
                let cnt = floor(genR(30));
                for (let i = 0; i < cnt; i++) {
                    let rdm = 50;
                    let y = height / 2 + genR(-rdm, rdm);
                    _ps.fill(genR(255), genR(0, 255));

                    let w = genR(800);
                    let h = genR(350);
                    this.shape1(_ps,width / 2, y, w, h, genR(-PI, PI) + PI / 2, 0);
                    _ps.ellipse(width / 2, y, w, h);
                }

            this.dibujarNariz(_ps);
            this.dibujarOjos(_ps);
            this.dibujarBoca(_ps);
            
            this.dibujarOrejas(_ps);

                _ps.fill(0, 255);
            }
        dibujarPelo(_ps) {
                let cnt3 = 800;
                for (let i = 0; i < cnt3; i++) {
                    let s = map(i, 0, cnt3 - 1, 5, 0);

                    let cf = lerpColor(this.c1, this.c2, genR(1));
                    let c = lerpColor(color(0), cf, map(i, 0, cnt3 - 1, 0, 1));
                    //c.setAlpha(genR(255));
                    _ps.fill(c, genR(255));
                    let rdm = 300;
                    this.shape1(_ps,width / 2 + genR(-rdm, rdm),
                        height / 2 + genR(-rdm, rdm),
                        genR(350), s, genR(TWO_PI * 4), 30);

                    this.shape1(_ps,width / 2 + genR(-rdm, rdm),
                        height / 2 + genR(-rdm, rdm),
                        genR(350), s, genR(TWO_PI * 4), 30);
                }
            }
        dibujarOrejas(_ps) {
                let cnt3 = 2;
                for (let i = 0; i < cnt3; i++) {
                    let s = map(i, 0, cnt3 - 1, 150, 0);

                    let cf = lerpColor(this.c1, this.c2, genR(1));
                    let c = lerpColor(color(0), cf, map(i, 0, cnt3 - 1, 0, 1));
                    _ps.fill(c);
                    this.shape1(_ps,width / 2, height / 2 - 300, 120, 10, genR(TWO_PI * 8), 30);
                }
            }
        dibujarNariz(_ps) {
                let cnt3 = 10;
                for (let i = 0; i < cnt3; i++) {
                    let w = map(i, 0, cnt3 - 1, genR(150), 0);
                    let h = map(i, 0, cnt3 - 1, genR(150, 300), genR(100));
                    let cf = lerpColor(this.c1, this.c2, genR(1));
                    let c = lerpColor(color(0), cf, map(i, 0, cnt3 - 1, 0, 1));
                    _ps.fill(c);
                    this.shape1(_ps,width / 2, height / 2, w, h, genR(PI / 2), 30);
                }

                let ani = genR(10,20);

                let s = genR(20,50);

                let cnt4 = 150;
                let sc = 30;
                let rs = genR(1.4, 2.0);
                let ms = genR(.2, .4);


                let x1 = width / 2;
                let y1 = height / 2;

                let x2 = width / 2 ;
                let y2 = height / 2;

                for (let i = 0; i < cnt4; i++) {
                    let s = map(i, 0, cnt4 - 1, sc * rs, sc * ms);
                    let idx = map(i, 0, cnt4 - 1, 0, 1);
                    let c = lerpColor(this.c2, this.c1,1.- idx);
                
                    if (i > cnt4 -3) {
                        c.setAlpha(255);
                        _ps.fill(0);
                    } else {
                        c.setAlpha(180);
                        _ps.fill(c);
                    }

                    let ani2 = map(i, 0, cnt4, ani * 1.5, ani);

                    let yy = lerp(y1, y2, idx);

                    _ps.ellipse(x1 + ani2, yy, s, s * .5);
                    _ps.ellipse(x1 - ani2, yy, s, s * .5);
                }
            }
        dibujarCuerpo(_ps) {
                let cnt3 = 20;
                for (let i = 0; i < cnt3; i++) {
                    let s = map(i, 0, cnt3 - 1, 800, 0);
                    let cf = lerpColor(this.c1, this.c2, genR(1));
                    let c = lerpColor(color(0), cf, map(i, 0, cnt3 - 1, 0, 1));
                    _ps.fill(c, genR(255));
                    this.shape1(_ps,width / 2, height / 2, s, s, genR(TWO_PI), 30);
                    _ps.ellipse(width / 2, height / 2, s, s);
                }
            }
        dibujarOjos(_ps) {
                //OJOS 
                let cnt = floor(genR(5,50));
                let sepx = genR(0,20);
                let sepy = genR(80, 250);

                let x = width / 2;
                let y = height / 2 - sepy;


                let h = genR(5, 15);
                let an = genR(100, 180);
                for (let i = 0; i < cnt; i++) {

                    let w = genR(50, 250);
                    let ao = genR(-PI, PI) + PI / 2;

                    let cf = lerpColor(this.c1, color(0), genR(1));
                    _ps.fill(cf, genR(100, 255));
                    this.shape1(_ps,x - an, y, w, h, ao, sepx);
                    this.shape1(_ps,x + an, y, w, h, ao + genR(PI / 2), sepx);

                    // ellipse(width/2-an, height/2-sepy, w+genR(100), h+genR(100));
                    //ellipse(width/2+an, height/2-sepy, w+genR(100), h+genR(100));

                }
                let cnt2 = 10;

                for (let i = 0; i < cnt2; i++) {

                    let idx = map(i, 0, cnt2 - 1, 0, 1);
                    let w = map(i, 0, cnt2 - 1, genR(150), 0);
                    let hh = map(i, 0, cnt2 - 1, genR(150), 0);
                    let ao = genR(-PI, PI) + PI / 2;

                    let cf = lerpColor(this.c1, color(0), idx);
                    _ps.fill(cf, genR(100, 255));


                    _ps.ellipse(x - an, y, w + genR(100), hh);
                    _ps.ellipse(x + an, y, w + genR(100), hh);

                }
                _ps.fill(255, 255);
                _ps.ellipse(x - an, y, 5, 5);

                _ps.ellipse(x + an, y, 5, 5);
            }
        dibujarBoca(_ps) {
         
            let cnt = 10;
            let size = genR(200, 300);

            let cnt2 = 20;

            let x = width / 2;
            let y = height / 2 + genR(200,350);
            let maxw = genR(400, 500);
            let minw = genR(100, 10);


            let maxh = genR(100,200 );
            let minh = genR(20, 0);
            _ps.push();


            /*_ps.translate(width / 2, height / 2);
            _ps.scale(1.0, 0.4);
            _ps.translate(-width / 2, -height / 2);*/

            let minrdm = 0.1;

            let maxrdm = 2.1;
            for (let i = 0; i < cnt; i++) {
                let idx = map(i, 0, cnt - 1, 0, 1);
                let w = map(i, 0, cnt - 1, maxw, minw);
                let hh = map(i, 0, cnt - 1, maxh, minh);
                let ao = genR(-PI, PI) + PI / 2;

                let cf1 = lerpColor(this.c1, color(0), idx);
                let cf2 = lerpColor(this.c2, color(0), 1.-idx);
                let cf3 = lerpColor(cf1, cf2, idx);

                cf3.setAlpha(20);
                _ps.fill(genR(255),255);
                _ps.ellipse(x, y, w * genR(minrdm, maxrdm) * .5, hh * genR(minrdm, maxrdm));


                let cf3_2 = lerpColor(this.c1, this.c2, genR(0, 1));
                cf3_2 = lerpColor(this.c1, color(255), genR(1));
                _ps.fill(cf3_2);
                this.shape1(_ps, x, y, w * genR(minrdm, maxrdm) * .5, hh * genR(minrdm, maxrdm)*.2, genR(TWO_PI), 50);

                cf3.setAlpha(genR(255, 255));
                _ps.fill(cf3);
                _ps.ellipse(x, y, w, hh);            
            }

      
             /*   for (let i = 0; i < cnt2; i++) {

                    let idx = map(i, 0, cnt2 - 1, 0, 1);
                    let w = map(i, 0, cnt2 - 1, genR(500), 100);
                    let hh = map(i, 0, cnt2 - 1, genR(50), 0);
                    let ao = genR(-PI, PI) + PI / 2;

                    let cf1 = lerpColor(this.c1, color(0), genR(1));
                    let cf2 = lerpColor(this.c2, color(0), genR(1));
                    let cf3 = lerpColor(cf1, cf2, idx);
                    cf3.setAlpha(genR(20));
                    _ps.fill(cf3);
                    _ps.ellipse(x, y, w * 1.5, 280);
                    cf3.setAlpha(genR(255,255));
                    _ps.fill(cf3);
                  //  _ps.ellipse(x, y , w, 400);
                   // this.shape1(_ps, x, y, w, 10, genR(TWO_PI), 50);
                }*/
            _ps.pop();
            /*
                for (let i = 0; i < cnt; i++) {
                    let an = 150;
                    let ao = genR(-PI * 2, PI * 2) + PI / 2;
                    ao = genR(-PI * 4, PI * 4);
                    let w = genR(30, 150);
                    w = map(i, 0, cnt - 1, genR(120), 0);
                    let h = genR(50, 150);
                    h = map(i, 0, cnt - 1, 20, 0);
                    let sepx = genR(60);
                    let cf = lerpColor(this.c1, color(0), genR(0, 1));
                    cf = lerpColor(cf, color(255), genR(0, 1));
                    _ps.fill(cf, 255);
                    this.shape1(_ps,x, height / 2 + size, w, h, ao, sepx);
                }


                for (let i = 0; i < cnt; i++) {
                    let an = 150;
                    let ao = genR(-PI * 2, PI * 2) + PI / 2;
                    ao = genR(-PI * 4, PI * 4);
                    let w = genR(30, 120);
                    w = map(i, 0, cnt - 1, genR(400), genR(100, 0));
                    let h = genR(50, 150);
                    h = map(i, 0, cnt - 1, genR(150), genR(100));
                    let sepx = genR(60);
                    let cf = lerpColor(this.c1, color(0), genR(0, 1));
                    cf = lerpColor(cf, color(255), genR(0, 1));
                    _ps.fill(cf, genR(255));
                    _ps.ellipse(x, height / 2 + size, w, h);
                }*/
            }
        shape1(_ps,
                x,
                y,
                w,
                h,
                a,
                sepx) {

                // let w =genR(800);
                //  let h =genR(100);
                let ar = a;
                _ps.push();
                _ps.translate(x, y);
                _ps.rotate(ar);
                _ps.rect(0 + sepx, 0, w, h);
                _ps.pop();

                _ps.push();
                _ps.translate(x, y);
                _ps.rotate(-ar);
                _ps.rect(0 - sepx, 0, w, h);
                _ps.pop();
            }
        bg(_ps) {
                let cnt = 5;
                let s = 20;
                for (let i = 0; i < cnt; i++) {
                    let idx = map(i, 0, cnt - 1, 0, 1);
                    let x = map(i, 0, cnt - 1,
                        width * 1 / 8,
                        width * 7 / 8);
                    _ps.rect(x, height / 2, s, height);
                }
            }
        bars(_ps) {
                let cnt = 5;
                let s = 20;
                for (let i = 0; i < cnt; i++) {
                    let idx = map(i, 0, cnt - 1, 0, 1);
                    let x = map(i, 0, cnt - 1,
                        width * 1 / 8,
                        width * 7 / 8);
                    _ps.rect(x, height / 2, s, height);
                }
            }
        dibujarFondo(_ps) {
                let cnt3 = 30;
                for (let i = 0; i < cnt3; i++) {
                    let s = map(i, 0, cnt3 - 1, width * 1.4, 0);
                    let idx = map(i, 0, cnt3 - 1, 0, 1);

                    let c3 = lerpColor(this.c1, this.c2, genR(1));
                    let cf = lerpColor(c3, color(0), sin(idx * 50 + genR(TWO_PI)) * .5 + .5);
                    cf = lerpColor(cf, color(255), 0.2);
                    cf = lerpColor(cf, color(0), 0.2);
                    //cf = lerpColor(cf, color(255), genR(0, 1));
                    _ps.fill(cf, 150);
                    _ps.ellipse(width / 2, height / 2, s, s);
                }
            }
        runAudio() {
            if(!this.audioPlaying){
                this.runAudioMalFlash();
                this.runAudioStandart();
                this.audioPlaying = true;
                
                this.crossFade.toMaster();
            }

           /* console.log("PLAY SOUND"); 
            let synth = new Tone.MembraneSynth().toDestination();
            synth.triggerAttackRelease("C2", "0.5n");
            */

            /*return Tone.Offline(() => {
                const lfo = new Tone.LFO("4n", 400, 4000).start().toDestination();
            }, 0.5, 1);*/

            
           /* const chorus = new Tone.Chorus(4, 8.5, 5.5)
            var fb2 = new Tone.FeedbackDelay("32n", 0.98);


            let mx = map(mouseX,0,width,-5,32);
		    const autoWah = new Tone.AutoWah(mx, 8, -mx)
		    //autoWah.Q = 100; 

            const pitchShift = new Tone.PitchShift();
           // pitchShift.pitch = mx; // down one octave
            const synth = new Tone.AMSynth();


            synth.triggerAttackRelease("C3", "0.2n");
            synth.pitch = 80;
            synth.connect(chorus);
            chorus.connect(fb2);
            
            fb2.connect(this.lerpp);

            this.lerpp.toDestination();
            Tone.Master.volume.value = 10.;
          //  Tone.Master.bpm.value = 90000;
            Tone.Transport.start();*/
        }
        runAudioMalFlash(){
            
            let notas = ["A", "B", "C", "D", "E", "F", "G"];
            let nindex = floor(genR(notas.length - 1));

            let index = u_fxhash.song;

		    const player = new Tone.Player("sounds/tribal/tribal" + index + ".mp3");
            player.autostart = true;
            player.loop = true;
           // player.playbackRate = genR(0.25, 1.0);

            //player.connect(this.vol1);
            

            const crusher = new Tone.BitCrusher(4);
            player.connect(crusher);
            //crusher.connect(this.vol1);
            player.connect(this.vol1);
            this.vol1.connect(this.crossFade.a);
  
            Tone.Master.volume.value = 1.;
            Tone.Transport.start();

        
        }
        runAudioStandart(){
              
            let notas = ["A", "B", "C", "D", "E", "F", "G"];
            let nindex = floor(genR(notas.length - 1));

            let index = u_fxhash.song;

		    const player = new Tone.Player("sounds/tribal/tribal" + index + ".mp3");
            player.autostart = true;
            player.loop = true;
            player.playbackRate = 1.0;
            // initialize the noise and start
            const autoWah = new Tone.AutoWah(50, 16, -30)
            const crusher = new Tone.BitCrusher(2);
            const dist = new Tone.Distortion(0.1)
            const cheby = new Tone.Chebyshev(50)
            
            player.connect(autoWah);
         //   cheby.connect(crusher); 
            autoWah.connect(this.lerpp);
            this.lerpp.connect(this.vol2);
            this.vol2.connect(this.crossFade.b);
  
            Tone.Master.volume.value = 1.;
            Tone.Transport.start();

        }

    }


 

