//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq



totalHeight = 80;
class TommyManager{

	constructor(){
		this.cosos = [];
		this.name = "Tommy 2";
		this.dir = "Tommy 1 ";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/tommy4.frag', 0, "jupiter.frag");
       // this.RM.addShader('shaders/imageprocessing/bloom2.frag', 1, "Bloom.frag");
        //this.RM.addShader('shaders/generative/tommy2.frag', 0, "jupiter.frag");

        this.soundTrigger = false;

        this.players = [];
        this.meters = [];
        this.idx = [];
        this.cntsounds = 6;
        for(let i=0; i<this.cntsounds; i++){
            this.idx[i] = str(floor(genR(4)+1));
            this.meters[i] = new Tone.Meter();
        }
       // this.idx[0] = 1;
        //this.idx[2] = 2;
        this.max = -120 ; //Maxima amplitud hardcodeada de verlo? 
        this.escena = 1;

        this.mvs = [];
        this.jpsyncplayer = new JPsyncrandomplayer();
    }

    setup() {
       // this.RM2.pgs[0].background(255,0,0);	
      // this.jpsyncplayer.setup();//LO PONGO ACA PARA PODER USAR EL GENR
    }
    draw(_ps) {
        this.jpsyncplayer.update();
        let st ="a";
		if(!this.loaded){	
            this.loaded = true;
        }
        if(mouseIsPressed && !this.soundTrigger){
            this.soundTrigger = true;
        }

        if(this.escena == 0){
           // this.drawGrafico(_ps);
           this.jpsyncplayer.draw(_ps);
        }
        if(this.escena == 1){
            this.drawVisual(_ps);
        }

        
        //this.drawVisual(_ps);
        if(keyIsPressed){
            if(key == 'q'){
                this.escena = 0;
            }
            if(key == 'w'){
                
                this.escena = 1;
            }
        }
    }
    drawVisual(_ps){
        this.RM.update();
        this.RM.updateDrawOnBuffers();
        if(this.soundTrigger){
           // this.RM.objts[0].localUniformsValues[0] =map(this.meters[0].getValue(),-this.max,0.0,0.0,1.0);

           for(let i=0; i<this.cntsounds; i++){
            
            /*let mv = this.meters[i].getValue();
                mv = abs(mv);
                mv = constrain(mv,0.0,100);
                mv = map(mv,0.0,100.,1.,0.);
                mv = this.mvs[i];*/
                //console.log(this.mvs[0]);
            this.RM.objts[0].localUniformsValues[i] =this.jpsyncplayer.mvs[i];
           }
            
         }else{
            this.RM.objts[0].localUniformsValues[0] = 0.0;
            this.RM.objts[0].localUniformsValues[1] = 0.0;
            this.RM.objts[0].localUniformsValues[2] = 0.0;
            this.RM.objts[0].localUniformsValues[3] = 0.0;
            this.RM.objts[0].localUniformsValues[4] = 0.0;
            this.RM.objts[0].localUniformsValues[5] = 0.0;
            this.RM.objts[0].localUniformsValues[6] = 0.0;
            
        }
        //this.RM.objts[0].localUniformsValues[2] =map(this.meters[2].getValue(),-this.max,0,0,1);
        //this.RM.objts[0].localUniformsValues[3] =map(this.meters[3].getValue(),-this.max,0,0,1);

        _ps.image(this.RM.pgs[0],0,0,width,height);
    }

    drawGrafico(_ps){
        if(this.soundTrigger){
            _ps.background(0);
            //console.log(this.meter.getValue());
            _ps.textAlign(CENTER,CENTER);
            _ps.textSize(30);
            let sepy = 100;

            let cnt = 4;
            let xs = [width*.25,width*.5,width*.75,
                      width*.25,width*.5,width*.75];
            let ys = [height*.25,height*.25,height*.25,
                      height*.75,height*.75,height*.75];
            let layers = ["LAYER A","LAYER B","LAYER C","LAYER D","LAYER E","LAYER F"]

            this.max = 128;

          
            for(let i=0; i<this.cntsounds; i++){
                if(i == 0){
                    console.log("AMP : ");
                    console.log(this.meters[i].getValue().toFixed(2));
                }
                let mv = this.meters[i].getValue();
                mv = abs(mv);
                mv = constrain(mv,0.0,100);
                mv = map(mv,0.0,100.,1.,0.);
                mv = this.mvs[i];
                
               // mv = this.mvs[i];
                //let absval = abs(this.meters[i].getValue());
               // console.log(absval);
               // let mv =  map(absval,0.0,this.mx,.0,1.0);
                //mv = constrain(mv,0.0,1.0);



                _ps.fill(255,255);
                _ps.textAlign(CENTER,CENTER);
                _ps.text(layers[i],xs[i],ys[i]-sepy);
                _ps.text(this.meters[i].getValue().toFixed(2),xs[i],ys[i]-sepy*2.);
                _ps.textAlign(LEFT,CENTER);
                _ps.text("Mapeado " + mv.toFixed(2),xs[i]-100,ys[i]+sepy);
                _ps.text("Crudo " + this.meters[i].getValue().toFixed(2),xs[i]-100,ys[i]+sepy*1.5);
                _ps.text("Indice " + this.idx[i],xs[i]-100,ys[i]+sepy*2.0);
                _ps.fill(255,10);
                _ps.circle(xs[i],ys[i],mv*150);
                _ps.noFill();
                _ps.stroke(255,255);
                _ps.strokeWeight(2);
                _ps.circle(xs[i],ys[i],this.max,this.max);
            }

        }

    }

    update() {

    }

    triggerSounds(meter,player,dir){
        player = new Tone.Player(dir);
        player.autostart = true;
        player.loop = true;
        //player.sync().start(1);
        let reverb = new Tone.Reverb();
        player.toDestination();
        player.connect(meter);
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }