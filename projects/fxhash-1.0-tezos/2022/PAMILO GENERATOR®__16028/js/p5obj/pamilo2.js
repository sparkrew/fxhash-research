//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class CirclePackingMaster{

	constructor(){
		this.cosos = [];
		this.name = "Pamilo";
		this.dir = "Pamilo";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        

        this.colores = [];
        this.bgcolor  = color(255,234,200);

        this.colores = [color(230,145,144),
            color(22,159,41),
            color(223,48,16),
            color(237,178,14),
           color(40,130,186),
           color(20,20,20)]
        
        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/papel2.frag', 0, "papel2.frag");

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/noisify1.frag', 0, "noisify.frag");
        

        this.p5pfp = createGraphics(windowWidth,windowHeight);
        this.p5pg = createGraphics(windowWidth, windowHeight);
        
    }

    setup() {

    }
    draw(_ps) {		
		  if(!this.loaded){				
            
            this,RM.update();
            this.RM.updateDrawOnBuffers();
            _ps.image(this.RM.pgs[0],0,0,width,height);
           
            this.drawPFP(this.p5pfp,width/2,height/2); //CARGO EL DIBUJO EN EL 
            
            this.generate4(this.p5pg);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }
        this.RM.update();
        this.RM.updateDrawOnBuffers();
        this.RM2.update();
        this.RM2.updateDrawOnBuffers();


     
        _ps.image(this.RM.pgs[0],0,0,width,height);
        _ps.image(this.p5pg,0,0,width,height);

        _ps.image(this.p5pfp,0,0,width,height);
        _ps.image(this.RM2.pgs[0],0,0,width,height);
    }

    update() {
       
    }

    generate4(_ps) {
      background(255);
    }

}
