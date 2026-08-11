
class HandsManager {
    constructor() {

        this.name = "Hands";
        this.dir = "Hands";
        this.localUniformsNames = [];
        this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        this.hindx = 0;
        this.mano1 = [];

        this.RM = new RenderManager();
        this.RM.addShader('shaders/imageprocessing/chroma2.frag', 0, "invert.frag");
        for (let i = 1; i < 19; i++) {
            let indx = i;
            if (i < 10) {
                indx = "0" + i.toString();
            }
            this.mano1.push(loadImage("img/hands/mano1/" + indx + ".jpg"));
        }


    }
    setup() {
        this.RM.objts[0].localUniformsValues[0] = 0.0;
        this.RM.objts[0].localUniformsValues[1] = 1.0;
        this.RM.objts[0].localUniformsValues[2] = 0.0;
    }
    draw(_ps) {

    
        background(0, 0, 0);
        imageMode(CORNER);
        this.hindx = floor(sin(millis() * 0.005) * this.mano1.length / 2 + this.mano1.length / 2);


        this.RM.update();
        this.RM.objts[0].sh.setUniform("tx", this.mano1[this.hindx]);
        


        let cnt = 15;
        let amp = 350;
        imageMode(CENTER);
        for (let i = 0; i < cnt; i++) {
            let f = -PI/2;
            let a = map(i, 0, cnt, TWO_PI, 0);
            let xx = width / 2  + sin(a+f) * amp ;
            let yy = height / 2 + cos(a +f) * amp ;
            
            let w = this.mano1[this.hindx].width  * .5;
            let h = this.mano1[this.hindx].height * .5;

            push();
          
            translate(xx, yy);

            let a2 = atan2(xx - width / 2, yy - height / 2);
            rotate(-a2-f);
            this.RM.draw(0,0, w, h);
            fill(255, 0, 0);
            ellipse(0, 0, 10, 10);
            pop();
        }
       
    }

    update() {
       
      //  this.RM2.update();
       // this.RM2.updateDrawOnBuffers();
    }
    
}
