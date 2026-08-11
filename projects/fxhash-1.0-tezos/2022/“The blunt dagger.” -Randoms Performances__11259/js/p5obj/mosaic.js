//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq


/*Sky Tokens

Get your unique token for entering the place that is in the sky that is not really like heaven, is just a place where clouds works as sofas and people play videogames all the day, but I hear that managment of the place is not so nice. Anyway , with one of this editions you are guaranteed to enter.

I was looking to make this idea of a wall with different pictures, so i´ve tested this recursive subdivision algorithm and i saw that was so cool(thanks kali for that idea).

Interaction :
Click with mouse to zoom in.

shader,p5,processing,glsl,sky,heaven,hell,token,coin,noise,generative,interactive,mosaic
*/

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
        this.RM.addShader('shaders/generative/fondomosaic.frag', 0, "mosaic.frag");
        //this.RM.addShader('shaders/generative/alienfondo.frag', 0, "alienfondo.frag");

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/f3.frag', 0, "f3.frag");

        this.pg = createGraphics(windowWidth, windowHeight);
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


        this.RM.objts[0].localUniformsValues[0] = red(this.c1)/255;
        this.RM.objts[0].localUniformsValues[1] = green(this.c1) / 255;
        this.RM.objts[0].localUniformsValues[2] = blue(this.c1) / 255;

        this.RM.objts[0].localUniformsValues[3] = red(this.c3) / 255;
        this.RM.objts[0].localUniformsValues[4] = green(this.c3) / 255;
        this.RM.objts[0].localUniformsValues[5] = blue(this.c3) / 255;



        this.RM2.objts[0].localUniformsValues[0] = red(this.c1) / 255;
        this.RM2.objts[0].localUniformsValues[1] = green(this.c1) / 255;
        this.RM2.objts[0].localUniformsValues[2] = blue(this.c1) / 255;

        this.RM2.objts[0].localUniformsValues[3] = red(this.c2) / 255;
        this.RM2.objts[0].localUniformsValues[4] = green(this.c2) / 255;
        this.RM2.objts[0].localUniformsValues[5] = blue(this.c2) / 255;

        this.zoom = 1.0;
    }
    draw(_ps) {
       
        if (!this.loaded) {
            //background(255,0,0);
            
            
            this.generate2();
            this.loaded = true;
            console.log("test");
        }
       /* pushMatrix();
        translate(xzoom, yzoom);
        scale(zoom, zoom);
        translate(-xzoom, -yzoom);
        image(mapa, 0, 0);*/

        let xzoom = mouseX;
        let yzoom = mouseY;

        push();
        translate(xzoom, yzoom);
        scale(this.zoom, this.zoom);
        translate(-xzoom, -yzoom);
        this.RM.draw();
        image(this.pg, 0, 0, width, height);
        
        pop();
        this.RM2.draw();

        if (mouseIsPressed) {
            this.zoom += 0.05;
        } else {
            this.zoom -= 0.1;
        }

        this.zoom = constrain(this.zoom, 1.0, 6.0);
    }

    generate2() {
       /* noStroke();
        background(lerpColor(
            color(genR(255), genR(255), genR(255)),
            color(255),
            0.8));

        rectMode(CENTER);*/
        this.pg.noStroke();
        this.pg.rectMode(CENTER);
 
        // ld(width/2, height/2,220);

        let rows = floor(genR(5, 7));
        let cols = floor(genR(6, 10));
        rows = 4;
        cols = 4;

        let x = 10;
        let y = 10;

        let fase = floor(genR(4)) * PI / 4;
        /*for (let i = 0; i < cols; i++) {
            for (let k = 0; k < rows; k++) {
                let xx = map(k, 0, rows - 1, width * 1.25 / 8, width * 6.75 / 8);
                let yy = map(i, 0, cols - 1, height * 1.25 / 8, height * 6.75 / 8);

                let a = (i + k) * PI / 4;

                this.ld(xx, yy, 100, a + fase);
            }
        }*/

        this.fractld(width / 2, height / 2, 370, floor(genR(4,10)), 0);
    }
	
    fractld(x,y,size,cnt,ite) {


        

        if ((ite < cnt && genR(1) < 0.5) || ite == 0) {


            this.fractld(x - size / 2, y + size / 2, size / 2, cnt, ite + 1);
            this.fractld(x - size / 2, y - size / 2, size / 2, cnt, ite + 1);
            this.fractld(x + size / 2, y + size / 2, size / 2, cnt, ite + 1);
            this.fractld(x + size / 2, y - size / 2, size / 2, cnt, ite + 1);
        } else {

            this.ld(x, y, size, genR(TWO_PI));
        }

        //if(genR())

    }


	ld( x,y, s,a){
        
        let cnt = 15;

        let colborde = color(255);


        let mr = genR(s*.2, s*.6); //MARCO REDONDEADO ;
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


                this.pg.fill(lerpColor(this.c2,
                    this.c3,
                    ic), 255);
            } else {
               // fill(lerpColor(color(255),lerpColor(this.c1, this.c2, genR(1)),genR(255)), genR(1));

                let cf = color(lerpColor(colborde, lerpColor(this.c1, this.c2, genR(1)), 1. - idx));
              //  cf.setAlpha(map(i, 0, cnt - 1, 120, 255));
                cf.setAlpha(255);
                this.pg.fill(cf);
            }
            this.pg.rect(x, y, ss, ss, mr, mr, mr, mr);
        }


        
        this.pg.push();
        this.pg.translate(x, y);
        // rotate(floor(genR(4))*PI/4);
        this.pg.rotate(a);
        let cnt2 = 20;

        let f = genR(TWO_PI * .5);
        //LINEA
        for (let i = 0; i < cnt2; i++) {
            let ss = map(i, 0, cnt2 - 1, s * 1.2, 0);
            let idc = map(i, 0, cnt2 - 1, 0, TWO_PI);
            let idx = sin(idc * f) * .5 + .5;
            let cf = lerpColor(this.c2, color(0), idx);

            this.pg.fill(cf, 255);
            this.pg.rect(0, 0, s * .05, ss);

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

                let cf;
                if (genR(1) < 0.5) {
                    cf = lerpColor(lerpColor(this.c3, this.c2, genR(1)), color(genR(255)), genR(0.2, 0.5));
                } else {
                    cf = lerpColor(lerpColor(this.c3, this.c2, genR(1)), color(0), genR(1.0));

                }
//                let
                //let cf = lerpColor(lerpColor(this.c3, this.c2, genR(1)), color(0), genR(1.0));
                cf.setAlpha(genR(150,255));
                this.pg.fill(cf);
            
                let ss3 = map(k, 0, cnt2 - 1, s * s2, 0);
                this.pg. ellipse(xx, yy, ss3, ss3);
                this.pg.ellipse(-xx, yy, ss3, ss3);
                this.pg.ellipse(xx, -yy, ss3, ss3);
                this.pg.ellipse(-xx, -yy, ss3, ss3);
            }
        }


        this.pg.pop();
    }
	
	update(){
        this.RM.update();
        this.RM2.update();
	}
    cr() {

        let cf = color(genR(0,255),
            genR(0,255),
            genR(0, 255), 255);

        cf = lerpColor(cf, color(255), genR(0.5,1.0));
        return cf;
    }
}

