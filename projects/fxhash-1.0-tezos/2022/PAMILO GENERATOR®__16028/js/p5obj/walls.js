//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class WallManager{

	constructor(){
		this.cosos = [];
		this.name = "WallE";
		this.dir = "wallE";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        let ama = genR(120, 200);
        this.cmoon = color(genR(ama, 255), ama, genR(ama));
        this.cleaves = color(genR(ama, 255), ama, genR(ama)); 
        this.cmountains = color(genR(ama, 255), ama, genR(ama));
        this.br = genR(1, 3);

        this.c1 = color(genR(255), genR(255), genR(255));
    }

    setup() {

    }
    draw(_ps) {		
		if(!this.loaded){				
            _ps.background(255, 255, 0);
            this.generate2(_ps);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }

    }

    update() {

    }

    generate2(_ps) {
        noiseSeed(floor(genR(1000)));
        this.c1 = color(genR(255), genR(255), genR(255));
        this.c2 = color(genR(255), genR(255), genR(255));

        let cb = lerpColor(this.c1, this.c2, genR(1));
        cb = lerpColor(cb, color(255), 0.7);
        _ps.background(cb);
        let cnt = floor(genR(1, 45));
        for (let i = 0; i < cnt; i++) {
            this.drawSnake(_ps,genR(1000));
        }
    }
   drawSnake(_ps,seed) {


    let cnt = floor(genR(40));
    let c1 = color(genR(255), genR(255), genR(255));
    let c2 = color(genR(255), genR(255), genR(255));

       _ps.noStroke();
    //asignamos los puntos
       //PVector[] ps = new PVector[cnt];

       let ps = [];

       
    for (let i = 0; i < cnt; i++) {
        let idx = i * 0.8;
        let x = map(noise(idx + seed), 0, 1, 0, width);
        let y = map(noise(idx + 3984324. + seed), 0, 1, 0, height);
        ps[i] = createVector(x, y);
    }


    let cnt2 = floor(genR(20, 80));
    let cnt3 = 15;
    let s = genR(10, 80);
    let rdm = genR(30);

    for (let i = 0; i < cnt; i++) {
        if (i < cnt - 1) {
            _ps.line(ps[i].x, ps[i].y, ps[i + 1].x, ps[i + 1].y);

            rdm = genR(120);
            for (let k = 0; k < cnt2; k++) {
                let pf = p5.Vector.lerp(ps[i], ps[i + 1], genR(1));
                let dir = atan2(ps[i].y - ps[i + 1].y,
                    ps[i].x - ps[i + 1].x);

                let cf = lerpColor(c1, c2, genR(1));
                cf.setAlpha(genR(25));
                _ps.fill(cf);
                for (let l = 0; l < cnt3; l++) {
                    s = genR(5, 25);
                    _ps.push();
                    let rdmx = genR(-rdm, rdm);
                    let rdmy = genR(-rdm, rdm);
                    _ps.translate(pf.x + rdmx, pf.y + rdmy);
                    _ps.rotate(dir + PI / 2);
                    _ps.triangle(0, -s, -s / 2, s, s / 2, s);
                    //ellipse(0,0,genR(s),genR(s));
                    _ps.pop();
                }
            }
        }
    }
}
}
