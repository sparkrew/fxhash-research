//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class MiniMoonManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "Minimoon";
		this.dir = "Minimoon";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		
	}
	
	setup() {

    }
	
    draw(_ps) {
		
		if(!this.loaded){				
            //background(255, 0, 0);
            _ps.noStroke();
            _ps.rectMode(CENTER);
			this.generate2(_ps);
			this.loaded = true;
			console.log("test");
		}
	}

	update(){
	
	}
	generate2(_ps){
        //background();
        this.fondo(_ps);
        this.estrellas(_ps);
        this.luna(_ps);
        this.nubes(_ps);
	}
  
    nubes(_ps){
        _ps.rectMode(CENTER);
        _ps.noStroke();
        let cnt = floor(genR(5, 20));
        if (genR(1 < 0.2)) {
            cnt = floor(genR(150, 400));
        }
        let redon = 350;
     //   alpha = genR()
        for (let i = 0; i < cnt; i++) {
            _ps.fill(genR(50, 225), genR(170, 255));
            let y = map(i, 0, cnt - 1, 0, height);
            let x = genR(width);
            if (i % 2 == 0) {
                x = genR(0, width / 2);
            } else {
                x = genR(width / 2, width);
            }
            let w = genR(width / 2, width);
            let h = genR(20, 120);
            h = (height / cnt) * genR(0.2, 1.2);
            _ps.rect(x, y, w, h, redon);
        }
    }

    estrellas(_ps){
        let cnt = floor(genR(10, 500));
        for (let i = 0; i < cnt; i++) {
            let x = genR(width);
            let y = genR(height);
            let s = genR(3, 10);
            let cnt2 = floor(genR(4, 80));
            for (let k = 0; k < cnt2; k++) {
                let c = lerpColor(color(255),
                                  color(genR(255)), genR(1));
                c.setAlpha(3);
                _ps.fill(c);
                let ms = map(k, 0, cnt2, s, 0);
                _ps.ellipse(x, y, ms, ms);
            }
        }
    }

    luna(_ps){

        let s = height * 3 / 4;
        _ps.fill(255);
        _ps.ellipse(width / 2, height / 2, s, s);

        let cnt = floor(genR(5, 50));
        for (let i = 0; i < cnt; i++) {
            let ms = map(i, 0, cnt - 1, s * 1.05, s);

            if (i < cnt - 1) {
                _ps.fill(255, 15);
            } else {
                _ps.fill(255, 255);
            }
            _ps.ellipse(width / 2, height / 2, ms, ms);
        }
    }

    fondo(_ps){
        let cnt = 25;
        _ps.rectMode(CORNER);
         let c1 = color(genR(50),
            genR(50),
            genR(50, 100));

         let c2 = color(genR(50),
            genR(50),
            genR(50, 100));


        let c3 = color(255, 100, genR(100,255));

        c2 = lerpColor(c2, c3, genR(0.25,0.3));
        c1 = lerpColor(c2, c3, genR(0.25, 0.3));
        //c1 = color(255, 0, 0);
        //c2 = color(0, 0, 255);
        for (let i = 0; i < cnt; i++) {
            let idx = map(i, 0, cnt, 0, 1);
            let x = 0;
            let y = map(i, 0, cnt, 0, height);
            let w = width;
            let h = height / cnt*1.5;
            let cf = lerpColor(c2, c1, idx);
            _ps.fill(cf);
            _ps.rect(x, y, w, h);
        }
        _ps.rectMode(CENTER);
    }
}