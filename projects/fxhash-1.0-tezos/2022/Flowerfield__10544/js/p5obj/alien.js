
class AlienManager {
    constructor() {

        this.name = "Alien";
        this.dir = "Alien";
        this.localUniformsNames = [];
        this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        this.marcos = new imgManager(0, 0, "img/alienenciclopedia/marcos/marco", 7);
       // this.marcos2 = new imgManager(0, 0, "img/alienenciclopedia/marco", 7);

        this.bgcol = color(genR(150, 80), genR(70, 120), genR(150, 175));
        this.lettersystems = [];
        this.letterimgs = [];

        for (let i = 0; i < 25; i++) {
            let chr = String.fromCharCode(97 + i).toLowerCase(); // where n is 0, 1, 2 ...
            this.letterimgs[i] = loadImage("img/alienenciclopedia/letras/" + chr + ".png");
        }
        this.letterimgs[25] = loadImage("img/alienenciclopedia/letras/space.png");
        this.letterimgs[26] = loadImage("img/alienenciclopedia/letras/space.png");

        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/alienfondo.frag', 0, "alienfondo.frag");
        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/imageprocessing/chromaalien.frag', 0, "invert.frag");

       //this.RM3 = new RenderManager();
       //this.RM3.addShader('shaders/generative/fondoalien.frag', 0, "fondoalien.frag");
       //this.RM2.addShader('shaders/imageprocessing/glass.frag', 1, "glass.frag");

        this.orden = shuffle([0, 1, 2, 3]);
       // this.flor2 = loadImage("img/alienenciclopedia/flor2.gif");
        //this.flor3 = createVideo("img/alienenciclopedia/toothy.mp4");
        //this.flor3.size(250, 250);


        this.flor3 = [];

        this.idxplanta = genR(1);
        //this.idxplanta = 0.72;
        this.idxplanta = 0.72;
        for (let k = 1; k < 95; k++) {
            let indx = k;
            if (k < 10) {
                indx = "0" + k.toString();
            }
            if (this.idxplanta < 0.25) {
                this.flor3.push(loadImage("img/alienenciclopedia/seqplanta1/planta1_" + indx + ".jpg"));
            } else if (this.idxplanta < 0.5) {
                this.flor3.push(loadImage("img/alienenciclopedia/seqplanta2/planta2_00" + indx + ".jpg"));
            } else if (this.idxplanta < 0.75){
                if (k < 10) {
                    indx = "0" + k.toString();
                }
                this.flor3.push(loadImage("img/alienenciclopedia/seqplanta3/Planta3_00" + indx + ".jpg"));
            } else {
                this.flor3.push(loadImage("img/alienenciclopedia/seqplanta4/Planta4_00" + indx + ".jpg"))
            }
        }


        let idxplanta2 = genR(1);
        this.plantasec = [];
        for (let k = 1; k < 95; k++) {
            let indx = k;
            if (k < 10) {
                indx = "0" + k.toString();
            }
            if (idxplanta2 < 0.33) {
                this.plantasec.push(loadImage("img/alienenciclopedia/semilla1/semilla1_00" + indx + ".jpg"));
            } else if (idxplanta2 < 0.66) {
                this.plantasec.push(loadImage("img/alienenciclopedia/semilla2/semilla2_00" + indx + ".jpg"));
            } else {
                this.plantasec.push(loadImage("img/alienenciclopedia/semilla3/semilla3_00" + indx + ".jpg"));
            }
        }
        this.plantasback = [];
        this.cnt = 15;
        this.cnt2 = 12;

        let idx2 = floor(genR(this.cnt - this.cnt2));
        for (let i = 0; i < this.cnt2; i++) {
            this.plantasback.push(new imgManager(0, 0, "img/alienenciclopedia/plantasecundaria/planta", 10));
            this.plantasback[i].setIndex((i+idx2)%this.cnt);
            //this.plantasback[i].setIndex(i%this.cnt);
        }
        this.idx2 = 0;

        this.positions = [createVector(width * .25, height * .25),
        createVector(width * .25, height * .75),
        createVector(width * .75, height * .25),
         createVector(width * .75, height * .75)];
        this.c1 = color(genR(1) * 255, 0.4 * 255., 0.4 * 255.);

      /*let segmentL2 = genR(15, 80);
        let spaceL2 = genR(15, 80);
        let sL2 = genR(5, 40);
        this.linea1 = new AnimatedLine(0, height / 2, width, height / 2, segmentL2, spaceL2, sL2);
        this.linea2 = new AnimatedLine(width / 2, 0, width / 2, 0, segmentL2, spaceL2, sL2);*/


        this.pgparticles = createGraphics(windowWidth, windowHeight);
    }
    setup() {
        console.log(this.idxplanta);
        if (this.idxplanta < .25) {
            console.log("11.png");
            this.RM2.objts[0].localUniformsValues[0] = 0.0;
            this.RM2.objts[0].localUniformsValues[1] = 1.0;
            this.RM2.objts[0].localUniformsValues[2] = 0.0;
        } else if (this.idxplanta < .5) {
            console.log("22.png");
            this.RM2.objts[0].localUniformsValues[0] = 0.0;
            this.RM2.objts[0].localUniformsValues[1] = 1.0;
            this.RM2.objts[0].localUniformsValues[2] = 0.0;
        } else if (this.idxplanta < .75) {
            console.log("33.png");
            this.RM2.objts[0].localUniformsValues[0] = 0.0;
            this.RM2.objts[0].localUniformsValues[1] = 1.0;
            this.RM2.objts[0].localUniformsValues[2] = 0.0;
        } else {
            console.log("44.png");
            this.RM2.objts[0].localUniformsValues[0] = 0.0;
            this.RM2.objts[0].localUniformsValues[1] = 1.0;
            this.RM2.objts[0].localUniformsValues[2] = 0.0;

        }



        let segmentL2 = genR(15, 20);
        let spaceL2 = genR(15, 12);
        let sL2 = genR(2, 15);

        let m1 = 50; // margin1 
        let m2 = 50; // margin1 
        
        this.linea1 = new AnimatedLine(m1, height / 2, width / 2 - m2, height / 2, segmentL2, spaceL2, sL2);
        this.linea2 = new AnimatedLine(width - m1, height / 2, width / 2 + m2, height / 2, segmentL2, spaceL2, sL2);


        this.linea3 = new AnimatedLine( m1, width / 2, height / 2 - m2, segmentL2, spaceL2, sL2);
        this.linea4 = new AnimatedLine(width/2, height- m1, width / 2 , height / 2+m2, segmentL2, spaceL2, sL2);


        //this.linea3 = new AnimatedLine(0, height / 2, width, height / 2, segmentL2, spaceL2, sL2);
        //this.linea3 = new AnimatedLine(width / 2, 0, width / 2, height, segmentL2, spaceL2, sL2);



        //this.al = new AlienLetters(width / 2 + 100, height / 2 + 100, this.letterimgs, genR(30, 50), floor(genR(20, 40)), floor(genR(5, 10)));
        // this.flor3.hide();
        //this.flor3.play();

        /*this.positions = [createVector(width * .25, height * .25),
        createVector(width * .25, height * .75),
        createVector(width * .75, height * .25),
        createVector(width * .75, height * .75)]; */

        let sepx2 = height*.25;

        this.positions = [createVector(width / 2 - sepx2, height / 2 - sepx2),
            createVector(width / 2 + sepx2, height / 2 + sepx2),
            createVector(width / 2 + sepx2, height / 2 - sepx2),
            createVector(width / 2 - sepx2, height / 2 + sepx2)];


        let cntrd = 165;
        for (let i = 0; i < this.plantasback.length; i++) {
            let xx = 0;
            let yy = 0; 
            let tocaotro = false;
           // for (let k = 0; k < this.plantasback.length; k++) {


            let amp = cntrd * genR(0.4,1);
            if (i < this.plantasback.length / 2) {
                // xx = this.positions[this.orden[2]].x + genR(-cntrd, cntrd) - this.plantasback[i].imgW() / 2;
                // yy = this.positions[this.orden[2]].y + genR(-cntrd, cntrd) - this.plantasback[i].imgH() / 2;
                let idx = map(i, 0, this.plantasback.length / 2, 0, TWO_PI);
                xx = this.positions[this.orden[2]].x + sin(idx) * amp - this.plantasback[i].imgW() / 4;
                yy = this.positions[this.orden[2]].y + cos(idx) * amp - this.plantasback[i].imgH() / 4;
            } else {
                let idx = map(i, this.plantasback.length / 2, this.plantasback.length , 0, TWO_PI);
                xx = this.positions[this.orden[3]].x + sin(idx) * amp - this.plantasback[i].imgW() / 4;

                yy = this.positions[this.orden[3]].y + cos(idx) * amp - this.plantasback[i].imgH() / 4;
                //xx = this.positions[this.orden[3]].x + genR(-cntrd, cntrd) - this.plantasback[i].imgW() / 2;
                //yy = this.positions[this.orden[3]].y + genR(-cntrd, cntrd) - this.plantasback[i].imgH() / 2;

            }
           // }
            this.plantasback[i].setPos(xx, yy);
            this.plantasback[i].setW(this.plantasback[i].imgW() / 2);
            this.plantasback[i].setH(this.plantasback[i].imgH() / 2);
            /*this.plantasback[i].setPos(width/2,
                height / 2);*/
            //this.orden
            //this.plantasback[i]
          //  this.plantasback.push(new imgManager(0, 0, "img/rideyourhuman/Planta", 10));
        }

        this.marcos.setH(height);
        this.marcos.setW(width);
        this.pgparticles = createGraphics(width,height);
        /*this.cnt = 1;
        for (let i = 0; i < this.cnt; i++) {
            if (i == 0) {
                this.lettersystems.push(new AlienLetters(0,
                    0,
                    this.letterimgs,
                    genR(40, 80),
                    floor(genR(6, 30)),
                    floor(genR(4, 7))));
            } else {
                this.lettersystems.push(new AlienLetters(genR(width),
                    genR(height),
                    this.letterimgs,
                    genR(40, 80),
                    floor(genR(10, 20)),
                    floor(genR(4, 7))));
            }
        }*/

        this.cnt = 1;
        for (let i = 0; i < this.cnt; i++) {
            this.lettersystems.push(new AlienLetters(0,
                0,
                this.letterimgs,
                45,
                //floor(genR(6, 30)),
                0,
                5));

            
        }
        this.particles = new AlienParticleSystem();
      /*  this.RM.objts[0].localUniformsValues[0] = red(this.c1)/255;
        this.RM.objts[0].localUniformsValues[1] = green(this.c1) / 255;
        this.RM.objts[0].localUniformsValues[2] = blue(this.c1) / 255;
        this.RM.objts[0].localUniformsValues[3] = genR(1);
        this.RM.objts[0].localUniformsValues[4] = genR(1);
        this.RM.objts[0].localUniformsValues[5] = genR(1);

        this.RM.objts[0].localUniformsValues[6] =40;
        this.RM.objts[0].localUniformsValues[7] = 40;*/

        this.RM.objts[0].localUniformsValues[0] = red(this.c1) / 255;
        this.RM.objts[0].localUniformsValues[1] = green(this.c1) / 255;
        this.RM.objts[0].localUniformsValues[2] = blue(this.c1) / 255;



        console.log(this.orden[0]);

        if (this.orden[0] == 0) {

            this.RM.objts[0].localUniformsValues[3] = .25;
            this.RM.objts[0].localUniformsValues[4] = .75;
        } else if (this.orden[0] == 1) {
            this.RM.objts[0].localUniformsValues[3] = .75;
            this.RM.objts[0].localUniformsValues[4] = .25;
        } else if (this.orden[0] == 2) {

            this.RM.objts[0].localUniformsValues[3] = .75;
            this.RM.objts[0].localUniformsValues[4] = .75;
        } else if (this.orden[0] == 3) {

            this.RM.objts[0].localUniformsValues[3] = .25;
            this.RM.objts[0].localUniformsValues[4] = .25;
        }

        this.RM.objts[0].localUniformsValues[5] = genR(1);
        this.RM.objts[0].localUniformsValues[6] = genR(1);
        this.RM.objts[0].localUniformsValues[7] = genR(1);


        this.idx2 = 0;

      //  this.RM2.activeRender = 1;

        this.marcos.setW(this.marcos.h);
        this.marcos.setPos(width / 2 - this.marcos.w/2, height / 2 - this.marcos.h/2);
    }
    draw(_ps) {

        /*let positions = [createVector(width * .25, height * .25),
        createVector(width * .25, height * .75),
        createVector(width * .75, height * .25),
            createVector(width * .75, height * .75)];*/


        rectMode(CENTER);
      //  background(this.bgcol);
        background(0);
        this.pgparticles.clear();
        this.particles.display(this.pgparticles);

        this.RM.updateDrawOnBuffers();
        this.RM.objts[0].sh.setUniform("tx2", this.pgparticles);
        this.RM.draw(width / 2-height/2, 0,height,height);
       
        this.marcos.display();


     
       // image(this.pgparticles, 0, 0, width, height);
        noStroke();
        fill(255);
        this.linea1.move(0.1);
        this.linea2.move(0.1);
        this.linea3.move(0.1);
        this.linea4.move(0.1);

        fill(255, 200);
        /*this.linea1.display();
        this.linea2.display();
        this.linea3.display();
        this.linea4.display();*/

        for (let i = 0; i < this.plantasback.length; i++) {
            this.plantasback[i].display();
        }



        this.drawLetters(this.positions[this.orden[1]].x, this.positions[this.orden[1]].y);
        this.drawModel(this.positions[this.orden[0]].x, this.positions[this.orden[0]].y);
        this.drawPlantaSec(width / 2, height / 2);
    
        imageMode(CORNER);
    }
    update() {
        this.particles.update();
        this.RM.update();
      //  this.RM2.update();
       // this.RM2.updateDrawOnBuffers();
    }
    drawLetters(_x, _y) {

        let fi = this.lettersystems[0].dn - 1;
        let fiy = this.lettersystems[0].letters.length-1;
        push();
        translate(_x, _y);

        push();
        let xf = abs(this.lettersystems[0].letters[0].x - this.lettersystems[0].letters[fi].x);
        let yf = abs(this.lettersystems[0].letters[0].y - this.lettersystems[0].letters[fiy].y);
        translate(-xf / 2, -yf/2);
        for (let i = 0; i < this.lettersystems.length; i++) {
            this.lettersystems[0].display();
        }
        pop();

        fill(255, 0, 0);
        //ellipse(0, 0, 10, 10);

        fill(255, 0, 255);
        //ellipse(this.lettersystems[0].letters[fi].x, this.lettersystems[0].letters[fi].y, 10, 10);
        pop();


    }
    drawFramework() {
        let rs1 = .95;
        rectMode(CENTER);
    }
    drawPlantaSec(_x, _y) {
        let x = _x;
        let y = _y;
        let offsetx = 0;
        let offsety = 0;
        let rsiz = 50;
        let cnt = 2;
        for (let i = 0; i < cnt; i++) {
            noFill();
            stroke(255, 255);
            let rsiz_f = map(i, 0, cnt, rsiz, rsiz * 1.1);
        }

        this.idx2 = floor(sin(millis() * 0.001) * 94 / 2 + 94 / 2);
        let ms = 400;
        //this.RM3.update();
        //this.RM3.draw(x - ms / 2, y - ms / 2, ms, ms);
        imageMode(CENTER);
        this.RM2.update();
        this.RM2.objts[0].sh.setUniform("tx", this.plantasec[this.idx2]);
        this.RM2.draw(x, y, this.flor3[this.idx2].width * 0.5, this.flor3[this.idx2].height * 0.5);
        imageMode(CORNER);
    }
    drawModel(_x, _y) {
        let x = _x;
        let y = _y;
        let offsetx = 0;
        let offsety = 0;
        let rsiz = 370;
        let cnt = 2;
        for (let i = 0; i < cnt; i++) {
            noFill();
            stroke(255, 255);
            let rsiz_f = map(i, 0, cnt, rsiz, rsiz * 1.1);
        }

        this.idx2 = floor(sin(millis() * 0.001) * 94 / 2 + 94 / 2);
        let ms = 400;
        //this.RM3.update();
        //this.RM3.draw(x - ms / 2, y - ms / 2, ms, ms);
        imageMode(CENTER);
        this.RM2.update();
        this.RM2.objts[0].sh.setUniform("tx", this.flor3[this.idx2]);
        this.RM2.draw(x,y,this.flor3[this.idx2].width*1.5, this.flor3[this.idx2].height*1.5);
        imageMode(CORNER);

    }
}



class AlienLetters {
    constructor(_x,_y,imgletters,_size,_cnt,_dn) {

        this.letterimgs = [];
        this.imgletters = imgletters;
  
        let xx = _x;
        let yy = _y;

        let sepx = genR(50, 80);
        sepx = 50;
        let s = sepx;
        let sepxacum = 0;
        
        let sepy_sep = 70;
        let sepy = -sepy_sep;
        this.dn = _dn;

        this.cnt = _cnt;
        this.letters = [];

        this.sepxacum = 70;

        this.frases = ["stem growth",
            "young root",
            "petals increasing",
            "detection of uniform leaves",
            "detection of stamens",
            "first updated species",
            "absence of fruit",
            "observation of ribs",
            "increasing ramification",
            "synthetic compounds",
            "decrease in tissue",
            "increase in fibers",
            "of daytime feeding",
            "lunar respiration",
            "has a primary structure"
        ];

        let fraseindex = floor(genR(this.frases.length));

        console.log(this.frases[fraseindex]);
        for (let i = 0; i < this.frases[fraseindex].length; i++) {

            let chat = this.frases[fraseindex].charAt(i);
            let charindex = (chat.charCodeAt(0) - 97);
 

            sepxacum += this.sepxacum;
            //if (charindex == -65) {
            if (i % this.dn == 0) {
                sepxacum = 0;
                sepy += sepy_sep;
            }
            let xxx = xx + sepxacum ;
            let yyy = yy + sepy;
          
            let fase = map(i % this.dn, 0, this.dn, 0, TWO_PI);
          
            this.letters.push(new ALetter(xxx, yyy, charindex, fase, _size));
        }
    }


    display() {

        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].display(this.imgletters);
        }
    }
    update() {

    }
}
class ALetter {
    constructor(x1, y1, index, fase, size) {
        if (index == -65) {
            this.index = 26;
        } else {
            this.index = index;
        }
        
      //  this.index = 26;
        this.x = x1;
        this.y = y1;
        this.s = size;
        this.fase = fase;
       // console.log("CONSTRUC");
    }
    display(eles) {
       // console.log(eles);

        //ellipse(mouseX, mouseY, s, s);

        imageMode(CENTER);
        tint(120);
        image(eles[this.index], this.x, this.y, this.s*1.1, this.s*1.1);

        tint(255, sin(millis() * 0.005 - this.fase)*40+220);
        image(eles[this.index], this.x, this.y, this.s, this.s);
        imageMode(CORNER);
    }

}
class AlienLetter {
    constructor(x1, y1, index, fase, size) {

        if (index == -65) {
            this.index = 0;
        } else {
            this.index = index;
        }
        
        this.x = x1;
        this.y = y1;
        this.s = size;
       // console.log("CONSTRUC");
    }
    display() {
        fill(255, 0, 0);
       // ellipse(this.x, this.y, 80, 80);
        ellipse(mouseX,mouseY, 80, 80);
       
        //  image(letters[this.index], this.x, this.y, this.s, this.s);
    }
    display(letters) {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 10, 10);
       // console.log("MIERDA DALE");
       
      //  image(letters[this.index], this.x, this.y, this.s, this.s);
    }

}
class AlienParticleSystem {
    constructor() {
        this.particles = [];

        let cnt = floor(genR(5,15));

        let centr = 300;

       
        for (let i = 0; i < cnt; i++) {
            let x = width / 2+genR(-centr,centr);
            let y = height / 2 + genR(-centr, centr); 
            this.particles[i] = new AlienParticle(x, y);
        }
    }
    display(_ps) {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].display(_ps);
        }
    }
    update() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
        }
    }
}
class AlienParticle  {
    constructor(_x, _y) {
        this.p = createVector(_x, _y);
        this.s = genR(10, 24);
        this.amp = genR(30, 180);
        this.origpos = createVector(_x, _y);
        this.fasex = genR(TWO_PI);
        this.fasey = genR(TWO_PI);
        this.fx = genR(10);
        this.fy = genR(10);
    }
    display(_ps) {
       // _ps.fill(255,255);

        _ps.noStroke();


        let cnt = 15;
        for (let i = 0; i < cnt; i++) {
            let sf = map(i, 0, cnt - 1, this.s, 0);
            _ps.fill(255, 50);
            _ps.ellipse(this.p.x, this.p.y, sf, sf);
        }
    }
    update() {
        this.p.x = this.origpos.x + sin(millis() * 0.00007*this.fy+this.fasex) * this.amp;
        this.p.y = this.origpos.y + cos(millis() * 0.00007 *this.fx+ this.fasey) * this.amp;
    }
}