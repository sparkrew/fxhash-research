//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class Oldtvmanager{

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
        
        this.buffer1 = createGraphics(windowWidth,windowHeight);

        this.RM = new RenderManager();
		this.RM.addShader("shaders/generative/tv1.frag", 0, "videosinte.frag");
    }

    setup() {

    }
    draw(_ps) {		
		if(!this.loaded){				
           // _ps.background(255, 255, 0);
            this.generate2(this.buffer1);

            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }
        this.RM.update();
        this.RM.updateDrawOnBuffers();
        _ps.image(this.buffer1,0,0,width,height);

    
        let scx = width*0.21;
        let scy = height*0.3; 
        _ps.image(this.RM.pgs[0],width/2-scx/2,height/2-scy/2,scx,scy);
      /*  _ps.tint(255,150);
        _ps.image(this.RM.pgs[0],0.,0.0);*/

        this.RM.objts[0].sh.setUniform("tx", _ps);

        this.cosofalopa(_ps);
    }
    cosofalopa(_ps){
        if(mouseIsPressed){

            let cnt = 10;
            for(let i=0; i<cnt; i++){
              //_ps.shader(this.RM.objts[0].sh);
             _ps.noStroke();
             _ps.ellipse(mouseX,mouseY,10,10);
            }
        }
    }
    generate2(_ps){

       // _ps.background(255,255,225);

        _ps.rectMode(CENTER);
        _ps.noStroke();

        
        
        this.mesa(_ps);
        
        //TELE
       /* _ps.fill(120);
        _ps.rect(width/2,height/2+h1/2+h2/2.-20,width*.3,h2,0);
        _ps.fill(170,100,100);
        _ps.rect(width/2,height/2,width*.3,h1,30,30,0,0);
        _ps.fill(0);
        _ps.rect(width/2,height/2,width*.225,h1*0.7,30);
        */
       this.tele(_ps);

    }
    fondo(_ps){
        
        let cnt = 50;
        for(let i=0; i<cnt; i++){
            
        }
    }

    tele(_ps){
        //TELE
        let h1 = height*.45;
        let h2 = height*.15;

        _ps.fill(120);
        _ps.rect(width/2,height/2+h1/2+h2/2.-20,width*.3,h2,0);
        _ps.fill(170,100,100);
        _ps.rect(width/2,height/2,width*.3,h1,30,30,0,0);
        _ps.fill(0);
        _ps.rect(width/2,height/2,width*.225,h1*0.7,30);
    }
    mesa(_ps){
         //MESA
         let alturamesa = 0.4;
         let ancho = 0.2;

         let alturamesa2 = 0.4;
         let ancho2 = 0.2;
         let cnt = 180;

         let c1 = color(100,20,20);
         let c2 = color(0);

         for(let i=0; i<cnt; i++){
            let idx = map(i,0,cnt-1,0,1);
            //alturamesa*=idx*4.;
            //ancho*=idx*4.;
            alturamesa = map(i,0,cnt-1,0.4,0.39);
            ancho = map(i,0,cnt-1,0.2,0.21);
         //   console.log(alturamesa);
            let c3 = lerpColor(c2,c1,idx);
            c3.setAlpha(10);
            _ps.fill(c3);
            _ps.beginShape();
            _ps.vertex(0+width*idx*.02,height);
            _ps.vertex(width*ancho,height-height*alturamesa);
            _ps.vertex(width-width*ancho,height-height*alturamesa);
            _ps.vertex(width-width*idx*.02,height);
            _ps.endShape();
            for(let i=0; i<100; i++){
                let rdmy = 150;
                let y = height-genR(350);
                let w = genR(width*ancho*3.);
                let cf = lerpColor(c1,color(0),genR(1));
                cf = distanciarColor(cf,30.0);
                cf.setAlpha(20);
                _ps.fill(cf);
                _ps.rect(width/2,y,w,genR(15));
            }
         }
    }

    update() {

    }

   
    runAudio(){

    }

}
