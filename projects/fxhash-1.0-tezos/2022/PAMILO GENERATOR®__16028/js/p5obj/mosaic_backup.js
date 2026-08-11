//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class MosaicManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "Mosaic";
		this.dir = "Mosaic";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
		this.generate = true;

        this.c1 = color(genR(80, 225), genR(70, 100), genR(20, 255));
        this.c2 = color(genR(80, 100), genR(100, 200), genR(170, 255));
        this.c3 = color(genR(150, 225), genR(70, 180), genR(20, 255));

        //console.log(this.colorPalette());

        this.RM = new RenderManager();
   //     this.RM.addShader('shaders/generative/fondomosaic.frag', 0, "mosaic.frag");
        this.RM.addShader('shaders/generative/alienfondo.frag', 0, "alienfondo.frag");


        this.pg = createCanvas(windowWidth, windowHeight);
	}
    setup() {

        //SETEA LOS VALORES
        console.log("SET VALUES");
       /* this.RM.objts[0].localUniformsValues[0] = genR(1);
        this.RM.objts[0].localUniformsValues[1] = 0.4;
        this.RM.objts[0].localUniformsValues[2] = 0.4;



        this.RM.objts[0].localUniformsValues[3] = genR(1);
        this.RM.objts[0].localUniformsValues[4] = 0.4;
        this.RM.objts[0].localUniformsValues[5] = 0.4;*/

        //this.RM.update();


        this.RM.objts[0].localUniformsValues[0] = genR(1);
        this.RM.objts[0].localUniformsValues[1] = 0.4;
        this.RM.objts[0].localUniformsValues[2] = 0.4;
    }
    draw(_ps) {
        this.RM.update();
        this.RM.draw();
        if (!this.loaded) {
            //background(255,0,0);
            
            
            this.generate2();
            this.loaded = true;
            console.log("test");
        }
        
        ellipse(mouseX, mouseY, 20, 20);
    }

    generate2() {
       /* noStroke();
        background(lerpColor(
            color(genR(255), genR(255), genR(255)),
            color(255),
            0.8));

        rectMode(CENTER);*/
        noStroke();
        rectMode(CENTER);
  //      this.RM.draw();
        //this.c1 = this.cr();
        //this.c2 = this.cr();
        //this.c3 = this.cr();


       
        /*this.c1 = color(genR(80, 255),
            genR(80, 255),
            genR(80, 255), 255);


        this.c2 = color(genR(80, 255),
            genR(80, 255),
            genR(80, 255), 255);

        this.c3 = color(genR(80, 255),
            genR(80, 255),
            genR(80, 255), 255);*/



        // ld(width/2, height/2,220);

        let rows = floor(genR(5, 7));
        let cols = floor(genR(6, 10));
        rows = 4;
        cols = 4;

        let x = 10;
        let y = 10;

        let fase = floor(genR(4)) * PI / 4;
        for (let i = 0; i < cols; i++) {
            for (let k = 0; k < rows; k++) {
                let xx = map(k, 0, rows - 1, width * 1.25 / 8, width * 6.75 / 8);
                let yy = map(i, 0, cols - 1, height * 1.25 / 8, height * 6.75 / 8);

                let a = (i + k) * PI / 4;

                this.ld(xx, yy, 100, a + fase);
            }
        }
    }
	

	ld( x,y, s,a){
        
        let cnt = 15;

        let colborde = color(255);
        for (let i = 0; i < cnt; i++) {

            let ss = map(i, 0, cnt - 1, s * 1.7, s);
            let idx = map(i, 0, cnt - 1, 1, 0);

            let ic = sin((a + idx))*.5 + .5;


            if (i == cnt - 1) {
               /* fill(lerpColor(this.c2,
                    color(255 - red(this.c2),
                        255 - green(this.c2),
                        255 - blue(this.c2)),
                    ic), 255);*/


                fill(lerpColor(this.c2,
                    this.c3,
                    ic), 255);
            } else {
               // fill(lerpColor(color(255),lerpColor(this.c1, this.c2, genR(1)),genR(255)), genR(1));
                fill(lerpColor(colborde, lerpColor(this.c1, this.c2, genR(1)), 1.-idx), 10);
            }
            rect(x, y, ss, ss);
        }


        
        push();
        translate(x, y);
        // rotate(floor(genR(4))*PI/4);
        rotate(a);
        let cnt2 = 20;

        let f = genR(TWO_PI * .5);

        for (let i = 0; i < cnt2; i++) {
            let ss = map(i, 0, cnt2 - 1, s * 1.2, 0);
            let idc = map(i, 0, cnt2 - 1, 0, TWO_PI);
            let idx = sin(idc * f) * .5 + .5;
            let cf = lerpColor(this.c2, color(0), idx);

            fill(cf, 255);
            rect(0, 0, s * .05, ss);

        }
        
        let stx = s * .4;
       
        for (let i = 0; i < 25 ; i++) {
            let xx = genR(stx);
            let yy = genR(stx);
            let s2 = genR(.2);
            s2 = genR(.2);

            //fill(255,0,0);
      
            let cnt3 = floor(genR(1, 4));
            cnt3 = 1;
            for (let k = 0; k < cnt3; k++) {
            
               // fill(lerpColor(lerpColor(this.c3, this.c2, genR(1)), 0, genR(1)));


                let cf = lerpColor(lerpColor(this.c3, this.c2, genR(1)), color(genR(255)), genR(0.2,0.5));
                cf.setAlpha(genR(150,255));
                fill(cf);
            
                let ss3 = map(k, 0, cnt2 - 1, s * s2, 0);
                ellipse(xx, yy, ss3, ss3);
                ellipse(-xx, yy, ss3, ss3);
                ellipse(xx, -yy, ss3, ss3);
                ellipse(-xx, -yy, ss3, ss3);
            }
        }


        pop();
    }
	
	update(){
	
	}
    cr() {

        let cf = color(genR(0,255),
            genR(0,255),
            genR(0, 255), 255);

        cf = lerpColor(cf, color(255), genR(0.5,1.0));
        return cf;
    }
}

