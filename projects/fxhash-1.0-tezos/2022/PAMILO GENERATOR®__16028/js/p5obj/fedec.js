//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class FedeM{

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

        this.imgs = [];
        let cnt = 84;
        for(let i =0; i<cnt; i++){
            this.imgs[i] = loadImage("img/fotosv/varela"+i.toString()+".jpg");
        }

        this.img1 = this.imgs[floor(genR(cnt))];
        
        this.img2 = this.imgs[floor(genR(cnt))];
        
        this.RM = new RenderManager();
        this.RM.addShader('shaders/imageprocessing/fede.frag', 0, "invert.frag");

    }

    setup() {

    }
    draw(_ps) {		
        _ps.imageMode(CENTER);
		if(!this.loaded){				
            _ps.background(0, 0, 0);
            this.RM.update();
            this.RM.objts[0].sh.setUniform("tx", this.img1);
            this.RM.objts[0].sh.setUniform("tx2",this.img2);
            this.RM.updateDrawOnBuffers();
            _ps.image(this.RM.pgs[0],width/2,height/2,this.imgs[0].width,this.imgs[0].height);
        }

    }

    update() {

    }
    runAudio(){

    
    }

}
