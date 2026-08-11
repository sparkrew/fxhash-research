
class HandsManager {
    constructor() {

        this.name = "Hands";
        this.dir = "Hands";
        this.localUniformsNames = [];
        this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

        this.hindx = 0;

       
        this.RM = new RenderManager();
        this.RM.addShader('shaders/imageprocessing/chroma2.frag', 0, "invert.frag");


        //Cargo todas las secuencias de imagenes : 
        this.secuencia = [];
        let directoryes  = [ "2palmas","guante","mano2",
                             "palmafrente","perro","vivora"
               
        ];
        let cnts = [29,9,19,33,23,28]
        let scals = [1.,1.,1.,1.,1.,1.]
        for(let i=0; i<directoryes.length; i++){
            this.secuencia.push(new seqmanager(cnts[i],directoryes[i]));
            console.log("IMG");
        }

        //Hago los videos juegos.
        this.spirals = [];
        let cntspirals = floor(genR(3,6));
        for(let i=0; i<cntspirals; i++){

            let amp = map(i,0,cntspirals-1,500,100);
            this.spirals.push(new handSpiral(width/2,
            height/2,
            1,
            genR(TWO_PI),
            amp,
            floor(genR(5,20)),0.0025,floor(genR(directoryes.length-1))));
        }
        console.log(this.spirals);
        
    }
    setup() {
        this.RM.objts[0].localUniformsValues[0] = 0.0;
        this.RM.objts[0].localUniformsValues[1] = 1.0;
        this.RM.objts[0].localUniformsValues[2] = 0.0;
    }
    draw(_ps) {
        //_ps.translate(-width/2,-height/2);
        //_ps.ellipse(mouseX,mouseY,30,30);
        _ps.background(0, 0, 0);
        for(let i=0; i<this.spirals.length; i++){
            this.spirals[i].draw(this.RM,this.secuencia,_ps);
        }
        //this.spirals[1].draw(this.RM,this.secuencia);
        //image(this.secuencia[0].arrayfotos[0],width/2,height/2);
    }
    runAudio(){

    }
    update() {
       
      //  this.RM2.update();
       // this.RM2.updateDrawOnBuffers();
    }
    
}
//tamaño de mano
//fase en la animacion
//Amplitud
//Cantidad de manos
//Velocidad de rotacion
//Posicion




class seqmanager{
    constructor(_cnt,_dir){
        this.arrayfotos = [];
        for (let i = 1; i < _cnt; i++) {
            let indx = i;
            if (i < 10) {
                indx = "0" + (i).toString();
            }
            this.arrayfotos.push(loadImage("img/hands/"+_dir+"/" + indx + ".jpg"));
        }
        this.cnt = _cnt;
    }
}

class handSpiral{
    constructor(_x,_y,_s,_fase,_amp,_cnt,_speedrot,_idx){
        this.x = _x;
        this.y = _y;
        this.s = _s;
        this.fase = _fase;
        this.amp = _amp;
        this.cnt = _cnt;
        this.speedrot = _speedrot
        this.idx = _idx;
        this.hindx = 0;
        this.sp = genR(-0.1,0.1);
        this.s = 0.4;
    }

    draw(rm,seq,_ps){
        //console.log(seq);
       
        _ps.imageMode(CORNER);
        //this.hindx = floor(sin(millis() * 0.001) * seq[0].cnt / 2 + seq[0].cnt / 2);
        //let idxt = floor(sin(millis() * 0.01) * seq[0].cnt / 2 + seq[0].cnt / 2);
       

        //console.log(idxt);
        rm.update();
        
        


        let cnt = 15;
        let amp = this.amp;
        _ps.imageMode(CENTER);
        for (let i = 0; i < cnt; i++) {
            let a = map(i, 0, cnt, TWO_PI*2., 0);
            let idxt = floor(sin(millis() * this.speedrot*this.cnt*.07+a) * seq[this.idx].arrayfotos.length/2 + seq[this.idx].arrayfotos.length/2);
            rm.objts[0].sh.setUniform("tx", seq[this.idx].arrayfotos[idxt]);
            let f = -PI/2;
            
            let xx = width / 2  + sin(a+f) * amp ;
            let yy = height / 2 + cos(a+f) * amp ;
            let w = seq[this.idx].arrayfotos[this.hindx].width  * this.s;
            let h = seq[this.idx].arrayfotos[this.hindx].height * this.s;

            _ps.push();
            _ps.translate(xx, yy);
            let a2 = atan2(xx - width / 2, yy - height / 2);
            _ps.rotate(-a2-f+this.sp*millis()*.01);
            //rm.draw(0,0, w, h);
            rm.updateDrawOnBuffers();
            _ps.image(rm.pgs[0],0,0,w,h);
            fill(255, 0, 0);
            _ps.pop();
        }
        //_ps.ellipse(mouseX,mouseY,20,20);
    }
    update(){

    }

}
