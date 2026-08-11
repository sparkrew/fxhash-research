//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class ArmsManager2{

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

        this.rdm1 =100;
        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/fondodesolated.frag', 0, "fondodesolated.frag");

        this.p5 = createGraphics(windowWidth,windowHeight);
    }

    setup() {

    }
    draw(_ps) {		
		if(!this.loaded){				
            _ps.background(0);
            
            this.RM.update();
            this.RM.updateDrawOnBuffers();
            this.generate2(this.p5);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }
       // _ps.image(this.RM.pgs[0],0,0,width,height);
        _ps.image(this.p5,0,0,width,height);
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
        
      //  let cnt = floor(genR(10, 30));
        //for (let i = 0; i < cnt; i++) {
         //   this.machimbre(_ps,genR(width),genR(height),genR(100,800));
        //}
        //_ps.ellipse(20,20,40,40);

        //let cnt = 100;
        let cnt = 150;
        let c1 = color(genR(255),genR(255),genR(255));
        let c2 = color(genR(255),genR(255),genR(255));

        let freq = genR(TWO_PI*10.);
        let s1 = genR(100);
        for(let i =0; i<cnt; i++){
          
            let idx = map(i,0,cnt-1,0,1);


            s1+=0.05;
            let r1 = noise(s1+2452)*255;
            c1 = color(noise(s1+2452)*255,noise(s1+150)*255,noise(s1+987)*255);
            c2 = color(noise(s1+1423)*255,noise(s1+1324)*255,noise(s1+5341)*255);


            let cf = lerpColor(c1,c2,sin(idx*freq)*.5+.5);
            let cf2 = lerpColor(c2,c1,sin(idx*freq)*.5+.5);
            cf.setAlpha(255-idx*255);
            _ps.fill(cf);
            _ps.stroke(cf2);

            let bsize = map(i,0,cnt-1,0,40);
            _ps.strokeWeight(bsize);
            let size = map(i,0,cnt-1,800,0);
            let rdm = map(i,0,cnt-1,500,2);

            this.formas(_ps,width/2,height/2,size,rdm);
        }
    }
    machimbre(_ps,_x,_y,_s){
        let cnt = floor(genR(2, 180));
        let s1 = genR(4);
        for(let i=0; i<cnt; i++){
            //ellipse(random(width),random(height),20,20);
            s1+=0.05;
            let r1 = noise(s1+2452)*255;
            let c1 = color(noise(s1+2452)*255,noise(s1+150)*255,noise(s1+987)*255);
            let c2 = color(noise(s1+1423)*255,noise(s1+1324)*255,noise(s1+5341)*255);
            c1.setAlpha(genR(255));
            
            
            _ps.fill(c1);
            this.formas(_ps,_x,_y,0);
        }
    }
    
    formas(_ps,_x,_y,_s,_rdm){
        let cnt = 4;
        let a = genR(TWO_PI);
        let amp1 = _s;
        let px1 = _x;
        let py1 = _y;
        let px2 = px1+sin(a)*amp1;
        let py2 = py1+cos(a)*amp1;
        
        //_ps.stroke(0,40);
      
        _ps.beginShape();
        for(let i=0; i<cnt; i++){
       
          let rdm = _rdm;
          let idx = map(i,0,cnt-1,0,1);
          let px3 = lerp(px1,px2,idx);
          
          let py3 = lerp(py1,py2,idx);
          px3+=genR(-rdm,rdm);
          py3+=genR(-rdm,rdm);
          if(genR(1) > .5){
            _ps.vertex(px3,py3);
          }else{
            _ps.curveVertex(px3,py3);
          }
        }
        _ps.endShape(CLOSE);
        
      }
 
}
