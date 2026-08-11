var uniforms_fxhash = [];

/*
We can´t tell if we are ruled by a corrupt goverment, Corrupt big ass corporations
lizard people, iluminati or the high council of atlantis.

Iluminati Generator is an artwork inspired in the Iluminati iconography.It was made with a mix of P5js and shaders.

This artwork is interactive.The Eyes are always following the mouse, and the arrows only follows the mouse when you hold click.

F e a t u r e s:
23 % of chance to get Special Arrows. (they are drawn with a little white arrow inside the arrow)
3 % of chance to get Everything as a star.All arrows turn into stars.
3 % of chance to get Everything as an EYE.All arrows turn into staring eyes
20 % of chance to get White rays(the ones that pop out behind the pyramid
2 % of chance of get DOUBLE EYED piramid. /
Amount 1 : This is the eyes that spawn in polar cartesian around the piramid
Amount 2 : The symbols(arrows stars or more eyes) that spawns in polar cartesian around the eyes.
*/
//1 / 100 minted

//p5js,shaders,eyes,eye,mouse,click,interactive,generative,iluminati,mason,triangle,pyramid,paper

//oo2iUQCXebUU8R4fDtd35fWUv1R7vZa43r1HHG36YM3oewAkanK PREVIEW

//ooDHd7KhxLhT6zri57u6epSaPYTUXMonU6yY2EqieSPrJpLkpgJ

//ooYZQ86sYjSPM722XS3QoHY4NeCQDdAKpuBMk6SuF1433Ha2B5p

//ooQdNkaopFgiaoxuWQ2WRZvNGbSnSw561CAVGtZv6X915or4tEm //PREVIEW
//oofEgHsnw5iM4jeoMxQhWiuxCnVaewPtK5wodyRutHQkRLz9JUt 2


//ooEPX1mSvCcEUJSSmyLuhf8wFMnvw9vfzyi9STmnezN3k2AreFf
//oo6t3x2ZtwFFjXgnbhRdcjzFPR9pZd6QZ89NFVs7M6ZaN6bviay
//oohHcrxpJahLfabtxtPwVsipyQis2bPTfqGvsm8cMWPLsDBowbc
//ooCkPrVkAhxPmGnfbShqmzpAR2scZgBVHQSsjrR6p8rZfACEiht
//ooCnHkcQxHXvVEoAKoaTJSXbg67xrrsqFgAm2inimFU1aHtR4uV
//oo34A1cuJ5VZCCRvh1GWa9FMTiYXHCuRpFLN9v447hXkJgSfETt EVERYTHING IS EYES
//ooar1wEKjdKox3MsLmR8g4GHNNJmkj8jZNAHTbWDVu8j4xaszQm
//ootqNMLSJV4fwnbanNXAgqww5L6X57RVMbukavys4RcPUB1bZCm
//oo3nnD5TeuMQXNuWxZcoMwVDPamUhgWmRvKqutTEYhjpkMiTonR
//ooxReesdQi3xnuvrcPYYJFkFd9sDzPeHRpK1KsBPLht8hmrobfr
//oomhvufYuw92MdUPgKpLdkQ86HGnYvBKTMkatKzHydirATPHZjb

//ooD1Nz45HWLi1VpryfbaG7ab8s1YCGkm5M8pXcYG9pFLKgvFkrV WHITE RAYS
//oopYv4KdxPahK9bEanJPeo2VS8n1DFXpVMmoDirX39z6R7MM656 SPECIAL TRIANGLES INVERT
//oonwSMr5WmbR4CzST9BBHCzh7yr1oJ576SQ2R75up7jeVeXu196
//oobdFXNhnmxaKbn65GCXh3yxQwk9WVibMBKvfRdktUscEmvBrtZ
//oozX8dzSyxCChaWzXrYarMNFtSDFp1ZEf4cVEPPxdWXNjC2CinK STARS

//ooCy8VcgmkPaU3SJbjHUYHWzXCkX46h7jDDzgmANfut46FAAecs

//oorRRpiSsBTHyu3wtnM8MW7WECUW55kmTYJJjZMDqWo51anDDL1 2eys
//oodrLxYurxppK6J2RPE6qxRsn6kX3SfzAa1b9BASrxHQpCJHthv 2eyes 2 
let percent = [];
/*
percent.chulu = 3;
percent.stone = 20;
percent.mountains = 40;
percent.frontleft = 35;
percent.frontright = 35;
percent.frontcenter = 35;
percent.ruinleft = 35;
percent.ruinright = 35;
percent.bloodsky = 5;*/

percent.specialTriangles = 23;
percent.invertiluminati = 45;
percent.everythingeye = 3;
percent.everythingstar = 3;
percent.whiterays = 20;
percent.doubleeye = 2;

uniforms_fxhash.specialTriangles = fxrand() * 100.;
uniforms_fxhash.invertiluminati = fxrand() * 100;
uniforms_fxhash.everythingeye = fxrand() * 100;
uniforms_fxhash.everythingstar = fxrand() * 100;
uniforms_fxhash.whiterays = fxrand() * 100;
uniforms_fxhash.doubleeye = fxrand() * 100;

//let cntl = floor(random(4, 8));
//let cnt2 = floor(random(4, 20));


uniforms_fxhash.amount1 = Math.floor(genR(4, 8));
uniforms_fxhash.amount2 = Math.floor(genR(4, 20));

function setFeatures_iluminati() {
   // let strspecialtriangles = "no";
    let strinvertpiramid = "No";
    let streverything = "Arrows";
    let strwhiterays = "Black";
    let strdoubleeye = "No";

    if (uniforms_fxhash.invertiluminati < percent.invertiluminati) {
        strinvertpiramid = "Yes"
    }
    if (uniforms_fxhash.whiterays < percent.whiterays) {
        strwhiterays = "White"
    }
    if (uniforms_fxhash.everythingeye < percent.everythingeye) {
        streverything = "Eyes"
    } else if (uniforms_fxhash.everythingisastar < percent.everythingstar) {
        streverything = "Stars"
    }else if (uniforms_fxhash.specialTriangles < percent.specialTriangles) {
        streverything = "Special Arrows "
    }


    if (uniforms_fxhash.doubleeye < percent.doubleeye) {
        strdoubleeye = "yes"
    }

    window.$fxhashFeatures = {
        "Invert Pyramid ": strinvertpiramid,
        "Everything is ": streverything,
        "Rays Color": strwhiterays,
        "Pyramid with 2 eyes": strdoubleeye,
        "Amount of points 1": uniforms_fxhash.amount1,
        "Amount of points 2": uniforms_fxhash.amount2
    }


}

//setFeatures_iluminati();
class EyesInDarkManager{
	//var cosos = [];
    constructor() {

        this.name = "Eyes in the dark";
        this.dir = "Eyes in the Dark";
        this.localUniformsNames = [];
        this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;


        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/papel.frag', 0, "papel.frag");

       // this.RM.resizePG(20, 20, 0); 

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/eyesfront.frag', 0, "dit.frag");
       // this.RM2.resizePG(20, 20, 0); 

        this.eyes = [];
        this.minieyes = [];
        this.simbols = [];
		//maxpasadas = 9;
		
		this.duration = 300;
		this.lasttime = 0;
		


        let c1 = color(200,150,110);
        let c2 = color(0);
        this.piramid = new Piramid(windowWidth / 2, windowHeight / 2, 40,c1);

        this.generateEyes(c1,c2);

        this.x1t = genR(windowWidth);
        this.y1t = genR(windowHeight);
        this.s = genR(50, 150);
        this.cntls = floor(genR(4, 15));



        this.als = [];

      //  this.als.push(new AnimatedLine(0, windowHeight * .25, windowWidth, windowHeight * .25, random(1, 35), random(1, 35)));
     


        let cntl = uniforms_fxhash.amount1;
        let cnt2 = uniforms_fxhash.amount2;

        let maxdistsimbol = 200;
     

        /*if (cntl == cnt2) {
            cnt2+=2;
        }*/
       // console.log("Cnt1 " + cntl);
        //console.log("Cnt2 " +cnt2);
        let amp1 = genR(200, 400);

        let amp2 = genR(20, 500);

        maxdistsimbol = (amp1 + amp2)/2;
       // let simbolsize = random(50, 100);
        let puntascnt = floor(genR(4, 7));

 /*       let segmentL = genR(1, 120);
        let spaceL = genR(1, 120);
        let sL = genR(1, 120);
   */

        let segmentL = genR(15, 80);
        let spaceL = genR(15, 80);


        let sL = genR(2, 40);

        let segmentL2 = genR(15, 80);
        let spaceL2 = genR(15, 80);
        let sL2 = genR(5, 40);

        let simbolsize = genR(25, 50);
        for (let i = 0; i < cntl; i++) {

            let a = map(i, 0, cntl-1, 0, TWO_PI);
          
            let x1 = windowWidth * .5 + sin(a) * amp1;
            let y1 = windowHeight * .5 + cos(a) * amp1;

            let x2 = windowWidth * .5 + sin(a - PI) * amp1;
            let y2 = windowHeight * .5 + cos(a - PI) * amp1;
            this.als.push(new AnimatedLine(x1, y1, x2, y2, segmentL, spaceL, sL));
           // this.als.push(new AnimatedLine(x1, y1, x2, y2, 90, 180, 2));

            
          //  let amp2 = 100;
            for (let k = 0; k < cnt2; k++) {

                let a2 = map(k, 0, cnt2 - 1, 0, TWO_PI);
                let a3 = map(k, 0, cnt2, 0, TWO_PI);

                let xx1 = x2 + sin(a2) * amp2;
                let yy1 = y2 + cos(a2) * amp2;

                let xx2 = x2 + sin(a2 - PI) * amp2;
                let yy2 = y2 + cos(a2 - PI) * amp2;
                

                if (dist(xx1, yy1, windowWidth / 2, windowHeight / 2) > maxdistsimbol) {
                    this.als.push(new AnimatedLine(xx1, yy1, xx2, yy2, segmentL2, spaceL2, sL2));
                    a2 = atan2(yy1 - yy2, xx1 - xx2);

                    if (uniforms_fxhash.everythingeye < percent.everythingeye) {

                        this.minieyes.push(new Eyes(xx1, yy1, simbolsize * .75, color(255), 1.5, a));
                    } else if (uniforms_fxhash.everythingstar < percent.everythingstar) {

                        this.simbols.push(new Simbol(xx1, yy1, simbolsize, 0, a3, floor(genR(4,7))));

                     //   console.log("TYPE : " + 0);
                    } else {
                        this.simbols.push(new Simbol(xx1, yy1, simbolsize, 1, a2, 3));
                   //     console.log("TYPE : " + 1);
                    }
                }
                //this.minieyes.push(new Eyes(xx1, yy1, 10, color(255), 0, a2));
                //this.simbols.push(new Simbol(x2, y2, simbolsize, 0, a, puntascnt));
            }
            //this.simbols.push(new Simbol(x2, y2, simbolsize, 0, a, puntascnt));

            this.minieyes.push(new Eyes(x2, y2, 35, color(255), 1.5, a));

        }

	}
    generateEyes(_c1,_c2) {
        let cnt = floor(genR(4,8));
        for (let i = 0; i < cnt; i++) {
            let index = map(i, 0, cnt , 0, 1);
            let amp = 420;
            let a = index * TWO_PI-PI/4;
            let xx = windowWidth * .5 + sin(a) * amp;
            let yy = windowHeight * .5 + cos(a) * amp;

            let cf = lerpColor(_c1, _c2, sin(a * 5.) * .5 + .5);
            this.eyes.push(new Eyes(xx, yy, 20, cf, 0,a));
        }
    }
    draw(_ps) {
        background(255, 255, 220);
        this.RM.update();
        this.RM.draw();


        for (let i = 0; i < this.als.length; i++) {
            
            noStroke();
            fill(0);
            this.als[i].display();
            this.als[i].move(0.2);
        }
        noStroke();


        for (let i = 0; i < this.simbols.length - 1; i++) {
            this.simbols[i].display();
        }

        
        this.piramid.display();

        for (let i = 0; i < this.minieyes.length - 1; i++) {

            fill(0);
            ellipse(this.minieyes[i].x, this.minieyes[i].y, 50, 50);

            let index = map(i, 0, this.eyes.length - 1, 0, 1);
            let a = index * TWO_PI - PI / 4;

            //this.eyes[i].setPos(xx, yy);
            this.minieyes[i].setRotangle(a + PI / 2);
            // this.eyes[i].display(_ps);
            this.minieyes[i].display();
        }



       /* for (let i = 0; i < this.eyes.length; i++) {
            let amp = 420;
            let index = map(i, 0, this.eyes.length-1, 0, 1);
            let a = index * TWO_PI - PI / 4;
            let xx = windowWidth * .5 + sin(a+millis()*0.0001) * amp;
            let yy = windowHeight * .5 + cos(a + millis() * 0.0001) * amp;

            this.eyes[i].setPos(xx, yy);
            this.eyes[i].setRotangle(a - millis() * 0.0005);
            this.eyes[i].display(_ps);
        }*/

        this.RM2.update();
        this.RM2.draw();
        /*push();
        translate(this.x1t, this.y1t);
        this.drawSpecialTriangle(0, -this.s,
            this.s, this.s,
            -this.s, this.s)
        pop();*/


    }
   
    drawSpecialTriangle(_x1, _y1, _x2, _y2, _x3, _y3) {
        this.drawLine(_x1, _y1, _x2, _y2,4);
        this.drawLine(_x2, _y2, _x3, _y3,4);
        this.drawLine(_x3, _y3, _x1, _y1,4);
    }
  
	update(){
	
    }

}
class dottedLine {
    constructor(_x1, _y1, _x2, _y2) {




    }
    display(){


    }


}
class Piramid {

    constructor(_x, _y, _s,_c1) {

        this.x = _x;
        this.y = _y;
        this.s = _s;
        this.c1 = _c1; //Color piram

        if (uniforms_fxhash.doubleeye < percent.doubleeye) {
            this.eye = new Eyes(windowWidth / 2 - _s, windowHeight / 2, _s / 2, color(255, 255), 0, 0);

            this.eye2 = new Eyes(windowWidth / 2 + _s, windowHeight / 2, _s / 2, color(255, 255), 0, 0);
        } else {

            this.eye = new Eyes(windowWidth / 2, windowHeight / 2, _s, color(255, 255), 0, 0);
        }
     

   

        this.r1 = 200;
        this.r2 = 30;
        this.cnt1 = 20;



        this.rays = {};
        this.rays.cnt = floor(genR(15, 80));
        this.rays.s = genR(5,15);
        this.rays.h = genR(100, 200);
        this.rays.freq = genR(20, 150);
        //this.rays.freq = 50;

        this.ap = genR(20, 70);
    }
    display() {

    
        this.drawRays();
        push();
        translate(this.x, this.y);   
        //if(strinvertpiramid)
        if (uniforms_fxhash.specialTriangles < percent.invertiluminati) {
            rotate(PI);
        }
        let s1 = this.s * 2.6;
        let ap = this.ap;
        let offsety = -30;
        fill(0);
        triangle(0, -s1 + offsety, s1 + ap, s1 + offsety, -s1 - ap, s1 + offsety);
        fill(this.c1);
        s1 *= 0.9;
        ap *= 0.9;
        offsety *= 0.9;
        triangle(0, -s1 + offsety, s1 + ap, s1 + offsety, -s1 - ap, s1 + offsety);
        pop();
        this.eye.display();
        if (uniforms_fxhash.doubleeye < percent.doubleeye) {
            this.eye2.display();
        }
    }
    drawRays() {

        
        let s = this.rays.s;
        let h = this.rays.h;

        if (uniforms_fxhash.whiterays < percent.whiterays) {
            fill(255);
        }
        else {

            fill(0);
        }
       
        for (let i = 0; i < this.rays.cnt; i++) {
            push();
            translate(windowWidth * .5, windowHeight * .5);
            let index = map(i, 0, this.rays.cnt - 1, 0, 1);
            let a = index * TWO_PI;
            rotate(a - this.rays.freq + millis() * .0001);

            let hh = h + sin(a * this.rays.freq+millis()*.001)*h/2;
            triangle(0, -hh, s, 0, -s, 0);
            pop();
        }
    }
    update(){

    }
}
class Eyes {
    constructor(_x, _y, _size,_c1 ,_type,_rotangle) {
        this.col = _c1;
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.sepx = genR(_size*.5, _size*.7);
        this.angle = 0;
        this.type = _type;

        this.rotangle = _rotangle;
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
        let ojox = this.x ;
        let sf = this.size;
        let d = dist(mouseX, mouseY, this.x, this.y);
        let pupilas = sf / 2;
        if (d < 100) {
            let amp = map(d, 100, 0, 0, 40);
            sf = this.size;
            pupilas = map(d, 100, 0, sf / 2, this.size / 4);
        }
        push();
        translate(ojox, ojoy);
        fill(0);
        push();
        rotate(this.rotangle);
        this.ojonopupil(sf*1.1);
        fill(this.col);

        this.ojonopupil(sf);





        pop();
        fill(0);
        ellipse(0, 0, sf*1.2, sf*1.2);
        fill(255);
        ellipse(0, 0, sf, sf);
        rotate(this.angle);
        fill(0, 0, 0);
        ellipse(sf / 4, 0, pupilas, pupilas);

        pop();
    }
    setPos(x,y) {
        this.x = x;
        this.y = y;
    }
    setRotangle(a) {
        this.rotangle = a;
    }
    ojonopupil(s) {
        //beginShape();

        
        //endShape();

        let apt = 5;

        let x1 = 0;
        let y1 = -s / 2 - apt;
        let x2 = s * 2;
        let y2 = 0;
        let x3 = 0;
        let y3 = s / 2 + apt;
        let x4 = -s * 2;
        let y4 = 0;
        //fill(255,255,255);
        beginShape();
        vertex(x1, y1);
        bezierVertex(x1, y1, lerp(x1,x2,0.5), y1, x2, y2);
        vertex(x2, y2);
        bezierVertex(x2, y2, lerp(x2, x3, 0.5), y3, x3, y3);
        vertex(x3, y3);
        bezierVertex(x3, y3, lerp(x3, x4, 0.5), y3, x4, y4);
        vertex(x4, y4);
        bezierVertex(x4, y4, lerp(x4, x1, 0.5), y1, x1,y1);
        endShape(close);
    }
    dibujarojo2() {

        noStroke();

        // Eye balls
        noStroke();
        fill(255, 255);

        this.angle = atan2(mouseY - this.y, mouseX - this.x);

        let ojoy = this.y;
        let ojox = this.x;
        let sf = this.size;
        let d = dist(mouseX, mouseY, this.x, this.y);
        let pupilas = sf / 2;
        if (d < 100) {
            let amp = map(d, 100, 0, 0, 40);
            sf = this.size;
            pupilas = map(d, 100, 0, sf / 2, this.size / 4);
        }
        push();
        translate(ojox, ojoy);
        fill(0);
        push();
        rotate(this.rotangle);
        //this.ojonopupil(sf * 1.1);
        fill(this.col);
        //this.ojonopupil(sf);
        pop();
        fill(0);
        ellipse(0, 0, sf * 1.05, sf * 1.05);
        fill(255);
        ellipse(0, 0, sf, sf);
        rotate(this.angle);
        fill(0, 0, 0);
        ellipse(sf / 4, 0, pupilas, pupilas);
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

class Simbol {

    constructor(x, y, _s, _type, _a, _puntas) {
        this.x = x;
        this.y = y;
        this.s = _s;
        this.type = _type;
        this.angle = _a;
        this.p = _puntas;
        //this.p = 3;
        this.s2 = _s * genR(1);
        this.size2 = 0.25;
        this.amp2 = genR(100, 300);
    }

    display() {

        if (this.type == 0) {
            push();
            translate(this.x, this.y);

            let lok = atan2(this.y - mouseY, this.x - mouseX);

            if (mouseIsPressed) {
                rotate(lok - PI / 2);
            } else {
                rotate(this.angle + PI / 2);
            }
            fill(0, 250);
            let s1 = this.s * 0.6;
            let ap = 0;
            let offsety = 0;
            star(0, 0, s1, s1 * .5, this.p);
            fill(255);
            star(0, 0, s1 * .5, s1 * .25, this.p);
            pop();
        }

        if (this.type == 1) {
            push();
            translate(this.x, this.y);


            let lok = atan2(this.y - mouseY, this.x - mouseX);

            if (mouseIsPressed) {
                rotate(lok - PI / 2);
            } else {
                rotate(this.angle + PI / 2);
            }
            fill(0, 250);
            let s1 = this.s * 0.6;
            let s2 = this.s * 0.6 * this.size2;
            let ap = 0;
            let offsety = 0;

            triangle(0, -s1, s1 * .5, s1, -s1 * .5, s1);
            fill(255);


            if (percent.specialTriangles > uniforms_fxhash.specialTriangles) {
                push();
                translate(0, +s2 / 2);
                rotate(PI);
                triangle(0, -s2, s2 * .5, s2, -s2 * .5, s2);
                pop();
            }
            pop();
        }
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }



    star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * radius2;
            let sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }



}

/*
function webGLline(_x1, _y1, _x2, _y2) {

    push();
    translate(_x1, _y1);
    rotate(atan2(_y1 - _y2, _x1 - _x2));
    rect(0, 0, this.size, 2);
    pop();

}*/