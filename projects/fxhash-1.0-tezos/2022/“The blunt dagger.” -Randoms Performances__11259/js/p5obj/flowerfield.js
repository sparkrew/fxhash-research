//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq

//oogKrXTU5st5QPeh3gyVEttoN8RfvafsAn2oYG7PqDR1kMh8sQS


class FlowerField{
	//var cosos = [];

	constructor(){
		
		//maxpasadas = 9;
		this.name = "Flowerfield";
		this.dir = "Flowerfield";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        this.flores = [];
        this.c1_1 = color(genR(255), genR(255), genR(255));
        this.c2_1 = color(genR(255), genR(255), genR(255));
        this.c1_2 = color(genR(255), genR(255), genR(255));
        this.c2_2 = color(genR(255), genR(255), genR(255));

        this.generateFlowers();


      //this.RM = new RenderManager();
      //this.RM.addShader('shaders/generative/f3.frag', 0, "f2.frag");
    }
    setup() {

    }
	generateFlowers() {

		this.flores = [];
       // this.cntf = floor(genR(100, 1500));
        this.cntf = floor(genR(100, 250));
		/*this.c1_1 = color(genR(255), genR(255), genR(255));
		this.c2_1 = color(genR(255), genR(255), genR(255));
		this.c1_2 = color(genR(255), genR(255), genR(255));
		this.c2_2 = color(genR(255), genR(255), genR(255));
        */
		this.amp1 = 400;
		this.amp2 = 1;

        let cnt3 = floor(genR(4, 8));
        //cnt3 = 4;
        let pet3 = floor(genR(4, 15));
      //  pet3 = floor(genR(10, 25));

		for (let i = 0; i < this.cntf; i++) {
			let x = genR(windowWidth);
			let y = genR(windowHeight);
            let idx = map(i, 0, this.cntf - 1, 0, 1);
            let c1 = lerpColor(this.c1_1, this.c2_1, idx);
            let c2 = lerpColor(this.c1_2, this.c2_2, idx);

			c1 = lerpColor(c1, color(255), genR(0.6));
			c2 = lerpColor(c2, color(255), genR(0.6));
            let cnt = cnt3+floor(genR(-1,2));
            let pet = pet3+floor(genR(-1,2));
            let ampf = map(i, 0, this.cntf - 1, this.amp1, this.amp2);
            this.flores.push(new Flor(x, y, c1, c2, ampf, cnt, pet));
		}
    }


    draw(_ps) {
    //    this.RM.updateDrawOnBuffers();
    //    this.RM.update();
        if (this.generate) {
          
            _ps.noStroke();
            this.fondo(_ps);
            for (let i = 0; i < this.flores.length; i++) {
            // for (let i = this.flores.length - 1; i > 0; i--) {
                let f = this.flores[i];
			    f.display(_ps);
            }
            this.generate = false;
          
           // _ps.image(this.RM.pgs[0], 0, 0, windowWidth, windowHeight);
        }

    
       // this.RM.update();
        //this.RM.draw();
    }

    fondo(_ps) {
        let cnt = 25;
        _ps.rectMode(CORNER);
        let c1 = this.c1_1;

        let c2 = this.c2_1;


        let c3 = color(255, 100, genR(100, 255));

       // c2 = lerpColor(c2, c3, genR(0.25, 0.3));
       // c1 = lerpColor(c2, c3, genR(0.25, 0.3));
        //c1 = color(255, 0, 0);
        //c2 = color(0, 0, 255);
        for (let i = 0; i < cnt; i++) {
            let idx = map(i, 0, cnt, 0, 1);
            let x = 0;
            let y = map(i, 0, cnt, 0, height);
            let w = width;
            let h = height / cnt * 1.5;
            let cf = lerpColor(c2, c1, idx);
            _ps.fill(cf);
            _ps.rect(x, y, w, h);
        }
        _ps.rectMode(CENTER);
    }

	
	update(){
	
	}

	generate2(_ps) {
	

	}
	
}


class Flor {
    constructor(_x,
         _y,
         _c1,
         _c2,
        _amp,
        _cnt,
        _pet) {

       
        this.x = _x;
        this.y = _y;


        this.c1 = _c1;
        this.c2 = _c2;

        this.c1 = lerpColor(this.c1, color(0), genR(0.6));
        this.c2 = lerpColor(this.c2, color(0), genR(0.6));
       // this.c1 = color(genR(255),genR(255),genR(255));
        //this.c2 = color(genR(255),genR(255),genR(255));

        this.cnt = _cnt;
        this.pet = _pet;
        this.amp = _amp;
    }
    display(_ps) {

        let cnt2 = 5;
       for (let i = 0; i < this.cnt; i++) {
           let idx = map(i, 0, this.cnt - 1, 0, TWO_PI );
           let amp2 = 0;
           let xx = this.x + sin(idx) * amp2;
           let yy = this.y + cos(idx) * amp2;
           let ampf = map(i, 0, this.cnt - 1, this.amp, 0);
           let f = map(i, 0, this.cnt-1 , 0, TWO_PI);
          // f = genR(TWO_PI);
         //  f = 0;
           for (let k = 0; k < cnt2; k++) {
               let fs = map(k, 0, cnt2, 1.02, 1.1);
               _ps.fill(0,15);
               this.pol1(_ps, xx, yy, ampf * fs, f, this.x, this.y, this.pet);
           }

           let cf = lerpColor(this.c1, this.c2, map(i,0,this.cnt,0,1));
           _ps.fill(cf);
           this.pol1(_ps, xx, yy, ampf * 1, f, this.x, this.y, this.pet);
       }
       //_ps.fill(200);
      // _ps.ellipse(this.x, this.y, 20, 20);
	}
    pol1(_ps,
        x,
        y,
        amp,
        fase,
        x2,
        y2,
        _pet) {

        let cnt = 100;
        // letx = width/2;
        // lety = height/2;
        // letamp = 180;
        // fill(255,200,200);
        let t = frameCount * .002;
        _ps.beginShape();
        for (let i = 0; i < cnt; i++) {
            let a = map(i, 0, cnt, 0, TWO_PI);
            let xx = x + sin(a + t + fase) * amp;
            let yy = y + cos(a + t + fase) * amp;
            let idx = sin(t + a * _pet+fase) * .5 + .5;
            let xxx = lerp(xx, x2, idx);
            let yyy = lerp(yy, y2, idx);
            _ps.vertex(xxx, yyy);
        }
        _ps.endShape();
    }
}