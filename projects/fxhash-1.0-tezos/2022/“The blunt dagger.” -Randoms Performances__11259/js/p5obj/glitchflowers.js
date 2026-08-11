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

        let rdms = random(.5, 25);
        rdms = 10.09;
        // rdms =.4;
        document.getElementById("loading").style.visibility = "hidden";


        let cnt2 = floor(genR(10, 30));
        cnt2 = 80;
        for (let i = 0; i < cnt2; i++) {

            let x = genR(windowWidth);
            let y = genR(windowHeight);
            let x2 = genR(windowWidth);
            let y2 = genR(windowHeight);
            let s = genR(10, 1500);
            let cf = lerpColor(c, c2, random(1));
            let cf2 = lerpColor(c3, c4, random(1));

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
            this.mss[i].display();
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
        this.rdm = random(_s);
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
  
    display() {
        let cf  = lerpColor(this.c, this.c2, genR(1));
        //let cf2 = lerpColor(this.c, this.c2, genR(1));

        //let cf = color(0);
        //let cf2 = color(255);
        cf = lerpColor(cf, color(0), genR(0.5));
       // cf = lerpColor(cf, color(255), genR(0.5));

       // cf = lerpColor(cf, color(0), sin(this.ani*150.)*.5+.5);
        //cf2 = lerpColor(cf2, color(genR(255)), genR(1));
        cf.setAlpha(genR(0,255));
        fill(cf);
       // noStroke();
        strokeWeight(genR(10));
        stroke(color(0,5));
      //  fill(255, 0, 0);
      
        for (let i = 0; i < this.ps; i++) {
            let xn = noise(this.seed + this.ani * this.nf);
            let yn = noise(this.seed+155234782. + this.ani * this.nf);
            let xx = this.xf + map(xn, 0, 1, -this.na, this.na);
            let yy = this.yf + map(yn, 0, 1, -this.na, this.na);

            this.poly(xx ,yy, this.s, this.cntp);
        }
       
        //this.poly(this.xf, this.yf, this.s, 10);
        //ellipse(this.xf, this.xf, this.s, this.s);
    }

    update() {
        //console.log("Cokok");
        this.s -= this.s * (0.080);
        this.s = constrain(this.s, 0, this.s);
        this.rdm = random(this.s * this.rdms);
        this.xf = map(this.s, this.so, 0, this.x, this.x2);
        this.yf = map(this.s, this.so, 0, this.y, this.y2);

        this.ani = map(this.s, this.so,0, 1, 0);
    }

    poly( _x,_y,_s,_cnt){
        beginShape();
        for (let i = 0; i < _cnt; i++) {
            let a = map(i, 0, _cnt - 1, 0, TWO_PI);
            let rdmx = genR(- this.rdm, this.rdm);
            let rdmy = genR(- this.rdm, this.rdm);
            let xx = _x + sin(a) * _s + rdmx;
            let yy = _y + cos(a) * _s + rdmy;
            vertex(xx, yy);
        }
        endShape();
    }
}


/*
ArrayList < ms > mss;
void setup(){
    fullScreen();
    regenerate();
}
void regenerate(){
    background(0);
    mss = new ArrayList<ms>();

    int cnt = floor(random(1, 10));
    color c = color(random(100, 255), random(100, 255), random(100, 255));
    color c2 = color(random(100, 255), random(100, 255), random(100, 255));

    color c3 = color(random(100, 255), random(100, 255), random(100, 255));
    color c4 = color(random(100, 255), random(100, 255), random(100, 255));


    int cntp = floor(random(4, 20));
    // cntp =5;

    float rdms = random(.5, 5);
    // rdms =.4;
    for (int i = 0; i < cnt; i++) {

        float x = random(width);
        float y = random(height);
        float x2 = random(width);
        float y2 = random(height);
        float s = random(100, 700);
        color cf = lerpColor(c, c2, random(1));
        color cf2 = lerpColor(c3, c4, random(1));

        mss.add(new ms(x, y,
            x2, y2,
            cf,
            cf2,
            s,
            cntp,
            rdms));
    }
}
void mousePressed(){
    regenerate();
}
void draw(){
    for (int i = 0; i < mss.size(); i++) {
        ms m = mss.get(i);
        m.update();
        m.display();
    }
}


void update(){
    s -= s * (0.020);
    s = constrain(s, 0, s);
    rdm = random(s * rdms);
    xf = map(s, so, 0, x, x2);
    yf = map(s, so, 0, y, y2);
}

void poly(float _x,
    float _y,
    float _s,
    int _cnt
){
    beginShape();
    for (int i = 0; i < _cnt; i++) {
        float a = map(i, 0, _cnt - 1, 0, TWO_PI);
        float rdmx = random(-rdm, rdm);
        float rdmy = random(-rdm, rdm);
        float xx = _x + sin(a) * _s + rdmx;
        float yy = _y + cos(a) * _s + rdmy;
        vertex(xx, yy);
    }
    endShape();
}
} */