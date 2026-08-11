
class CandeManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];

		this.name = "Cande";
        this.dir = "Cande";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
        this.localUniformsValues = [];        
        document.getElementById("loading").style.visibility = "hidden";

        // escena = floor(genR(0, 4));
        let cntjpgs = [58, 47, 60, 52, 80]; //Esto representa la cantidad de fotogramas que tiene cada secuencia imagen
        let directs = ["img/cande/a1/a",
            "img/cande/a2/b",
            "img/cande/a3/c",
            "img/cande/a4/d",
            "img/cande/a5/e"];
        let cnt = 5; //cantidad de secuencia de imagenes 
      //  c1 = color(genR(100, 255), genR(100, 255), genR(100, 255));
     
        this.index = floor(genR(5));


        this.imgsequences = [];

        this.c1 = color(genR(255), genR(255), genR(255)); 
        this.index = floor(genR(5));

        for (let i = 0; i < cnt; i++) {
            if (i == 0) {
                this.imgsequences.push(new ImgSequence(directs[i], cntjpgs[i], floor(genR(cntjpgs[i]))));
            } else {
                this.imgsequences.push(new ImgSequence(directs[i], cntjpgs[i], 0));
            }
        }

	}
    setup() {

       // this.nextTimer = millis() + this.delay;
    }
    update() {

    }
	
    draw(_ps) {

      //  _ps.translate(-width / 2, -height / 2);
        background(0);
        this.imgsequences[this.index].update();
        tint(this.c1);
        this.imgsequences[this.index].draw(_ps);

        if (this.imgsequences[this.index].cambieSecuencia) {
            this.imgsequences[this.index].whichFrame = 0;
            this.imgsequences[this.index].cambieSecuencia = false;
            this.index = floor(genR(5));
        }

        //_ps.fill(255, 255);

        //_ps.text(this.index.toString(), width / 2, height / 2);

    }
}


class ImgSequence {


    constructor(dir, cnt, _fotogramastart) {
        this.imgs = [];
        this.whichFrame = _fotogramastart;

        this.cambieSecuencia = false;
        for (let i = 0; i < cnt; i++) {
            this.imgs[i] = loadImage(dir + (i).toString() + ".jpg");
        }
        console.log("Que fotograma arranca " + this.whichFrame);
        this.nextTimer = 0;
        this.delay = 30;
    }

    draw(_ps) {
        //console.log(this.whichFrame);

        _ps.imageMode(CENTER);
        _ps.image(this.imgs[this.whichFrame],
           width/2,
                    height/2, height, height);
    }

    update(_index) {
        if (millis() > this.nextTimer) {
            this.whichFrame = this.whichFrame + 1;
            if (this.whichFrame >= this.imgs.length) {
               
                this.cambieSecuencia = true;
                this.whichFrame = 0;
                _index = floor(genR(5));
                // console.log(_index);
            }
            this.nextTimer = millis() + this.delay;
        }
    }


}