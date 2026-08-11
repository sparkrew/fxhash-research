
class EyesInDarkManager{
	//var cosos = [];

   

	constructor(){
		this.eyes = [];
		//maxpasadas = 9;
		this.name = "Eyes in the dark";
		this.dir = "Eyes in the Dark";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        let cntx = 4;
        let cnty = 3;
        for (let i = 0; i < cntx; i++) {
            for (let k = 0; k < cnty; k++) {

                let rdmst = 150;
                let rdmx = random(-rdmst, rdmst);
                let rdmy = random(-rdmst, rdmst);
                let px = map(i, 0, cntx-1, width * 2 / 10, width * 8 / 10) + rdmx;

                let py = map(k, 0, cnty-1, height * 2 / 10, height * 8 / 10) + rdmy;

                this.eyes.push(new Eyes(px, py, random(40, 60), color(255, 255),random(2)));
            }
           
		}
	}
	

	
    draw(_ps) {
       // _ps.background(0);

        fill(0,255);
        rect(0, 0, width, height);

        /*fill(255);

        let px = random(width);
        let py = random(height);
        ellipse(px, py, 20, 20);*/
        for (let i = 0; i < this.eyes.length; i++) {
            this.eyes[i].display(_ps);
        }
    }


	
	update(){
	
	}
}

class Eyes {

    constructor(_x, _y, _size,_c1 ,_type) {

        this.col = _c1;

       // this.col2 = color(0);
       // this.cols = _cols;
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.sepx = random(_size*.5, _size*.7);
        this.angle = 0;
        this.type = _type;
    }

   display(pg) {

       if (this.type < 1) {
           this.dibujarojo1();
       } else if (this.type < 2) {
           this.dibujarojo2();
       }
  
    }

    dibujarojo1() {

        noStroke();

        // Eye balls
        noStroke();
        fill(255, 255);

        this.angle = atan2(mouseY - this.y, mouseX - this.x);

        let ojoy = this.y;
        let ojoderx = this.x - this.sepx;
        let ojoizqx = this.x + this.sepx;

        let sf = this.size;


        let d = dist(mouseX, mouseY, this.x, this.y);
        let pupilas = sf / 2;
        if (d < 100) {
            //  sf = sin(millis() * .04) * this.size / 2. * .5 + this.size * .7;

            let speed = map(d, 100, 0, .04, 0.01);
            let amp = map(d, 100, 0, 0, 40);
            sf = map(d, 100, 0, this.size, sin(millis() * 0.04) * this.size / 2. * .5 + this.size * .7);
            sf = this.size;
            let xm1 = this.x - this.sepx + sin(millis() * 0.04) * amp;
            let xm2 = this.x + this.sepx + sin(millis() * 0.04) * amp;

            ojoderx = map(d, 100, 0, this.x - this.sepx, xm1);
            ojoizqx = map(d, 100, 0, this.x + this.sepx, xm2);

            pupilas = map(d, 100, 0, sf / 2, 2);
        }


        push();
        translate(ojoderx, ojoy);
        fill(255);
        ellipse(0, 0, sf, sf);
        rotate(this.angle);
        fill(0, 0, 0);
        ellipse(sf / 4, 0, pupilas, pupilas);
        pop();


        push();
        translate(ojoizqx, ojoy);
        fill(255);
        ellipse(0, 0, sf, sf);
        rotate(this.angle);
        fill(0, 0, 0);
        ellipse(sf / 4, 0, pupilas, pupilas);
        pop();

    }

    dibujarojo2() {

        noStroke();

        // Eye balls
        noStroke();
        fill(255, 255);

        this.angle = atan2(mouseY - this.y, mouseX - this.x);

        let ojoy = this.y;
        let ojoderx = this.x - this.sepx*1.2;
        let ojoizqx = this.x + this.sepx*1.2;

        let sf = this.size;


        let d = dist(mouseX, mouseY, this.x, this.y);
        let pupilas = sf / 2;
    

        push();
        translate(ojoderx, ojoy);
        fill(255,0,0);
        this.ojomalo(0,this.size);
        pop();


        push();
        fill(255, 0, 0);
        translate(ojoizqx, ojoy);
        rotateX(TWO_PI);
        this.ojomalo(1,this.size);
        pop();

    }

    ojomalo(d,s) {
        beginShape();

        if (d == 0) {
            vertex(0 - s * 0.7, s / 2);
            vertex(s/2, s);
            vertex(-s/2, s);
        } else {
            vertex(0 + s * 0.7, s / 2);
            vertex(-s/2, s);
            vertex(s/2, s);

        }

        endShape();
    }
   
}