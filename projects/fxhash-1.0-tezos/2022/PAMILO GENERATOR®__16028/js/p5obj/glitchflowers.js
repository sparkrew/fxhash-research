//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class GlitchFlowerManager{
	//var cosos = [];

  
	constructor(){
		

		this.name = "GlitchFlowerManager";
		this.dir  = "GlitchFlowerManager";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        this.flores = [];
        this.mss = [];

        let cnt = floor(genR(1, 10));
        let c = color(genR(100, 255), genR(100, 255), genR(100, 255));
        let c2 = color(genR(100, 255), genR(100, 255), genR(100, 255));

        let c3 = color(genR(100, 255), genR(100, 255), genR(100, 255));
        let c4 = color(genR(100, 255), genR(100, 255), genR(100, 255));


        let cntp = floor(genR(4, 20));
        cntp =3;

        let rdms = genR(.5, 25);
        rdms = u_fxhash.rdm;
        
        // rdms =.4;
        document.getElementById("loading").style.visibility = "hidden";


        let cnt2 = u_fxhash.flowersaamount;
       // cnt2 = 80;
        for (let i = 0; i < cnt2; i++) {

            let x = genR(windowWidth);
            let y = genR(windowHeight);
            let x2 = genR(windowWidth);
            let y2 = genR(windowHeight);
            let s = genR(10, 1500);
            let cf = lerpColor(c, c2, genR(1));
            let cf2 = lerpColor(c3, c4, genR(1));

            this.mss.push(new ms(x, y,
                x2, y2,
                cf,
                cf2,
                s,
                cntp,
                rdms));
        }
       
     
	}
	
    setup() {

    }
    draw(_ps) {
        //console.log(this.mss);
       //_ps.background(255, 0, 0);
        for (let i = 0; i < this.mss.length; i++) {
            this.mss[i].display(_ps);
            this.mss[i].update();
        }
	}

	update(){
	
    }
    regenerate2(){
        
    }
}
class ms {
    constructor(_x,
        _y,
         _x2,
         _y2,
         _c,
         _c2,
         _s,
        _cntp,
        _rdms) {

        this.x = _x;
        this.y = _y;
        this.x2 = _x2;
        this.y2 = _y2;
        this.c = _c;
        this.c2 = _c2;
        this.s = _s;
        this.rdm = genR(_s );
        this.rdms = _rdms;
        this.cntp = _cntp;


        this.xf = _x;
        this.yf = _y;
        this.so = this.s;
        this.cf = _c;

        this.ani = 1;


        this.nf = 25;
        this.na = 150;
        this.seed = genR(1000);

        this.ps = genR(10);
    }
  
    display(_ps) {
        let cf  = lerpColor(this.c, this.c2, genR(1));
        if (u_fxhash.white) {
            cf = lerpColor(cf, color(255), genR(1.0));
        } else {
            cf = lerpColor(cf, color(0), genR(1.0));
        }
        cf.setAlpha(genR(u_fxhash.minalpha, u_fxhash.maxalpha));
        _ps.fill(cf);
      
      
        for (let i = 0; i < this.ps; i++) {
            let xn = noise(this.seed + this.ani * this.nf);
            let yn = noise(this.seed+155234782. + this.ani * this.nf);
            let xx = this.xf + map(xn, 0, 1, -this.na, this.na);
            let yy = this.yf + map(yn, 0, 1, -this.na, this.na);
            if (this.s > 1.) {
                this.poly(_ps, xx, yy, this.s, this.cntp);
            }
        }
    }

    update() {
        //console.log("Cokok");
        this.s -= this.s * (u_fxhash.decrease);
        this.s = constrain(this.s, 0, this.s);
        this.rdm = genR(this.s * this.rdms);
        this.xf = map(this.s, this.so, 0, this.x, this.x2);
        this.yf = map(this.s, this.so, 0, this.y, this.y2);

        this.ani = map(this.s, this.so,0, 1, 0);
    }

    poly(_ps, _x, _y, _s, _cnt) {

        if (u_fxhash.white) {
            strokeWeight(35);
            _ps.stroke(0, 100);
        } else {
            strokeWeight(10)
            _ps.stroke(255, 20);
        }
        _ps.beginShape();
        for (let i = 0; i < _cnt; i++) {
            let a = map(i, 0, _cnt - 1, 0, TWO_PI);
            let rdmx = genR(- this.rdm, this.rdm);
            let rdmy = genR(- this.rdm, this.rdm);
            let xx = _x + sin(a) * _s + rdmx;
            let yy = _y + cos(a) * _s + rdmy;
            _ps.vertex(xx, yy);
        }
        _ps.endShape(CLOSE);
    }
}
