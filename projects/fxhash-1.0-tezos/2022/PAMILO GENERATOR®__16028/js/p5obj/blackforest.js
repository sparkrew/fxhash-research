//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class BlackForestManager{

	constructor(){
		this.cosos = [];
		this.name = "BlackForest";
		this.dir = "BlackForest";
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


    }

    setup() {

        let rdm = genR(1);
        console.log(rdm);
        if (rdm > 0.75) {
            console.log("WHITE LEAVES");
            this.whiteleaves = true;
        } else {
            console.log("NO WHITE LEAVES");
            this.whiteleaves = false;
        }
      //  this.whiteleaves = false;
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
        //_ps.translate(-width / 2, -height / 2);
        _ps.background(0, 0, 0);
        noiseSeed(floor(genR(10000)));

        let ama = genR(120, 200);
        this.cmoon = color(genR(ama, 255), ama, genR(ama));

        this.br = genR(1, 3);
        this.drawSky(_ps);
        //this.drawClouds(_ps);
        this.lbs(_ps);
        this.drawMoon(_ps);
        this.drawMountains(_ps);
        this.drawTrees(_ps);

    }
    drawTrees(_ps) {
        let cnt = floor(genR(0., 5));
           //  cnt = 1;
        for (let i = 0; i < cnt; i++) {
            let x = map(i, 0, cnt - 1, width * 1 / 8, width * 7 / 8);
            if (cnt == 1) {
                x = width / 2;
            } 

            let y = 0;
            _ps.stroke(0);
            _ps.strokeWeight(35);
            // line(x,y,genR(width*.7),y);
            this.drawBranch(x,
                height,
                genR(2, 100),
                8,
                0,
                _ps);
        }
    }
    lbs(_ps) {
        let cnt = 1500;
        for (let i = 0; i < cnt; i++) {
            let c = color(genR(100, 250), genR(150, 200), 0);
            c = this.cmoon;
            c = lerpColor(c, color(255), genR(1));
            this.lb(genR(width),
                genR(height),
                genR(1, 3),
                c, _ps);
        }
     }
     lb(x,
        y,
        r,
         c1, _ps) {
        _ps.noStroke();
        let cnt = 10;
        for (let i = 0; i < cnt; i++) {
            let cf = c1;
            let ah = map(i, 0, cnt - 1, 10, 0);
            let rf = map(i, 0, cnt - 1, r * 4.5, r);
            if (i == cnt - 1) {
                ah = 255;
            } else {
                ah = 5;
            }
            cf.setAlpha(ah);
            _ps.fill(cf);
            _ps.ellipse(x, y, rf, rf);
        }
    }

     drawBranch(x,
        y,
        r,
        cnt,
         ite, _ps) {
        let sw = map(ite, 0, cnt, 20, 0);
        let rf = map(ite, 0, cnt, genR(150), 0);
        let ra = genR(0.0);
        if (ite < cnt) {
            _ps.push();
            _ps.translate(x, y - r);
            _ps.rotate(ra + 50);
            this.drawBranch(0, 0, rf, cnt, ite + 1, _ps);
            _ps.pop();
            _ps.push();
            _ps.translate(x, y - r);
            _ps.rotate(-ra - 50);
            this.drawBranch(0, 0, rf * genR(this.br) * 1.5, cnt, ite + 1, _ps);
            _ps.pop();
            _ps.stroke(0);
            let cnt2 = 20;

            for (let i = 0; i < cnt2; i++) {
                let swf = map(i, 0, cnt2 - 1, sw * 1.5, sw*0.7);
                if (ite > 1) {
                    _ps.noStroke();
                    _ps.push();
                    _ps.translate(x, y);
                    this.drawLeaves(0, 0, 0, 0 - r, genR(5),_ps);
                    _ps.pop();
                }
                _ps.strokeWeight(swf);
                if (i < cnt2 - 2) {
                    let cf = lerpColor(this.cmoon, color(0), genR(1));
                    //cf.setAlpha(10);
                    _ps.stroke(0,10);
                } else {
                    _ps.stroke(0, 255);
                }

                _ps.line(x, y, x, y - r);
            }
        }
    }

     drawLeaves(x1,
        x2,
        y1,
        y2,
         r, _ps) {
        let cnt1 = floor(genR(3, 10));
        let cnt2 = 2;
         let rdm =15;
         //rdm = 0;
        for (let i = 0; i < cnt1; i++) {
            let xx = map(i, 0, cnt1, x1, x2);
            let yy = map(i, 0, cnt1, y1, y2);
            for (let k = 0; k < cnt2; k++) {
                xx += genR(-rdm, rdm);
                yy += genR(-rdm, rdm);
                let cf = lerpColor(this.cmoon, color(0), genR(1));
                if (this.whiteleaves) {
                    cf = lerpColor(this.cmoon, color(255), genR(0.7));
                }
                cf.setAlpha(genR(255));
                _ps.fill(cf);
                _ps.ellipse(xx, yy, r, r);
            }
        }
    }


    drawMoon(_ps) {
        let cnt = floor(genR(10, 300));
        let cnt2 = 15;
        fill(255);
        let r = genR(200, 400);
        let rm = genR(2, 9);
        let c1 = color(genR(100, 255), genR(100, 255), 0);
        c1 = color(genR(255), genR(255), genR(255));
        c1 = this.cmoon;
        for (let i = 0; i < cnt; i++) {
            let rf = map(i, 0, cnt - 1, r * rm, r);
            if (i == cnt - 1) {
                c1.setAlpha(255);
                _ps.fill(c1);
            } else {
                c1.setAlpha(5);
                _ps.fill(c1);
            }
            _ps.ellipse(width / 2, height * .45, rf, rf);
        }
        for (let i = 0; i < cnt2; i++) {
            let rf = map(i, 0, cnt2 - 1, r * 1.4, r);
            if (i == cnt - 1) {
                _ps.fill(c1, 255);
            } else {
                _ps.fill(c1, 80);
            }
            _ps.ellipse(width / 2, height * .45, rf, rf);
        }
    }

    drawMountains(_ps) {
        let cnt = floor(genR(100, 300));
        let cnt2 = floor(genR(10, 250));
        let h = 250;
        let c1 = color(200);
            c1 = this.cmoon;
        let c2 = color(10);
        for (let k = 0; k < cnt2; k++) {
            let amp = genR(100, 400);
            h = map(k, 0, cnt2 - 1, 200, 0);
            let cf = lerpColor(c1, c2, map(k, 0, cnt2 - 1, 0, 1));
            cf.setAlpha(150);
            _ps.fill(cf);
            _ps.beginShape();
            _ps.vertex(0, height);

            let f2 = genR(-.5, .5);
            for (let i = 0; i < cnt; i++) {
                let f = i * .05;
                let x = map(i, 0, cnt - 1, 0, width);
                let y = height - (h + map(noise(f + f2), 0, 1, 0, amp));
                _ps.vertex(x, y);
            }
            _ps.vertex(width, height);
            _ps.endShape(CLOSE);
        }
    }

    drawSky(_ps) {
        let c1 = this.cmoon;
        let c2 = color(0);
        let cnt = 120;
        for (let i = 0; i < cnt; i++) {
            let x = 0 ;
            let y = map(i, 0, cnt - 1, 0, height);
            let w = width;
            let h = height / cnt * 1.1;
            _ps.noStroke();
            _ps.fill(lerpColor(c2, c1, map(i, 0, cnt - 1, 0, 1)), 50);
            _ps.rect(x, y, w, h);
        }
    }

    drawClouds(_ps) {
        let cnt = 8000;
        for (let i = 0; i < cnt; i++) {
            let x = random(width);
            let y = random(height);
            let cf = lerpColor(this.cmoon, color(0), genR(1));
            cf.setAlpha(genR(255));
            _ps.fill(cf);
            _ps.ellipse(x, y, random(200, 2000), random(200, 2000));
        }
    }
}
