//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class ArmsManager{

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

        this.rdm1 = genR(20,500);
      
    }

    setup() {

    }
    draw(_ps) {		
		if(!this.loaded){				
            _ps.background(0);
            this.generate2(_ps);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }

    }

    update() {

    }

    generate2(_ps) {
        noiseSeed(floor(genR(1000)));
        /*this.c1 = color(genR(255), genR(255), genR(255));
        this.c2 = color(genR(255), genR(255), genR(255));
        let cb = lerpColor(this.c1, this.c2, genR(1));
        cb = lerpColor(cb, color(255), 0.7);
        _ps.background(cb);
        let cnt = floor(genR(1, 45));
        for (let i = 0; i < cnt; i++) {
            this.drawSnake(_ps,genR(1000));
        }*/
        
        let cnt = floor(genR(10, 30));
        for (let i = 0; i < cnt; i++) {
            this.machimbre(_ps,genR(width),genR(height),genR(100,800));
        }
        //_ps.ellipse(20,20,40,40);
    }
    machimbre(_ps,_x,_y,_s){
        let cnt = floor(genR(2, 50));
        let s1 = genR(4);
        for(let i=0; i<cnt; i++){
            //ellipse(random(width),random(height),20,20);
            s1+=0.05;
            let r1 = noise(s1+2452)*255;
            let c1 = color(noise(s1+2452)*255,noise(s1+150)*255,noise(s1+987)*255);
            let c2 = color(noise(s1+1423)*255,noise(s1+1324)*255,noise(s1+5341)*255);
            c1.setAlpha(genR(255));
            _ps.fill(c1);
            this.formas(_ps,_x,_y,_s);
        }
    }
    
    formas(_ps,_x,_y,_s){
        let cnt = 15;
        let a = genR(TWO_PI);
        let amp1 = _s;
        let px1 = _x;
        let py1 = _y;
        let px2 = px1+sin(a)*amp1;
        let py2 = py1+cos(a)*amp1;
        
     
        _ps.stroke(0,40);
        _ps.strokeWeight(2);
        
        _ps.beginShape();
        
        
        for(let i=0; i<cnt; i++){
       
          let rdm =this.rdm1;
          let idx = map(i,0,cnt-1,0,1);
          let px3 = lerp(px1,px2,idx);
          
          let py3 = lerp(py1,py2,idx);
          px3+=genR(-rdm,rdm);
          py3+=genR(-rdm,rdm);
          _ps.curveVertex(px3,py3);
        }
        _ps.endShape(CLOSE);
        
      }
 
}
