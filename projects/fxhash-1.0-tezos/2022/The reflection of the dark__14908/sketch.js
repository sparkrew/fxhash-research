var whichFrame = 0;
var delay = 45; // milliseconds to delay
var nextTimer = 0;

let escena = 0 ;

/////////////////////////////////////////////
let imgsequences = [];
let index;


function preload(){
    let cntjpgs = [58, 74, 25, 21, 49 , 57 , 86 , 97]; //Esto representa la cantidad de fotogramas que tiene cada secuencia imagen
    let directs = ["a1/a", "a2/b", "a3/c", "a4/d", "a5/e" , "a6/f", "a7/g" , "a8/h"];
    let cnt = 7; //cantidad de secuencia de imagenes 
    index = floor(genR(7));
    for (let i = 0; i < cnt; i++) {
        if (i == 0) {
            imgsequences.push(new ImgSequence(directs[i], cntjpgs[i], floor(genR(cntjpgs[i]))));
        } else {
            imgsequences.push(new ImgSequence(directs[i], cntjpgs[i], 0));
        }
    }
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  nextTimer = millis() + delay;
}

function draw() {

    imgsequences[index].update();
    imgsequences[index].display();



    if (imgsequences[index].cambieSecuencia) {
        imgsequences[index].cambieSecuencia = false;
        index = floor(genR(7));
    }
  //0, 4, 2, 1, 4, 2, 0, 1, 2, 3, 1, 2, 4
  //0, 2, 1, 3, 0, 2, 1, 1, 2, 3, 1, 2, 4


 // noStroke();
 // fill(255);
 // text(frameRate(), 25, 16);
}

function genR(min, max) {
    let result = 0;
    if (!max) { result = fxrand() * (min - 0) + 0; } else { result = fxrand() * (max - min) + min; }
    return result;
}

class ImgSequence {
    constructor(dir, cnt,_fotogramastart) {
        this.imgs = [];
        this.whichFrame = _fotogramastart;

        this.cambieSecuencia = false;
        for (let i = 0; i < cnt; i++) {
            this.imgs[i] = loadImage(dir + (i).toString() + ".jpg");
        }
        console.log("Que fotograma arranca " + this.whichFrame);
    }

    display() {
        //console.log(this.whichFrame);
        image(this.imgs[this.whichFrame], 0 , height/4 , width, height/2 ); 
    }

    update(_index) {
        if (millis() > nextTimer) {
            this.whichFrame = this.whichFrame + 1;
            if (this.whichFrame >= this.imgs.length) {
                this.whichFrame = 0;
                this.cambieSecuencia = true;
              
                _index = floor(genR(7));
               // console.log(_index);
            }
            nextTimer = millis() + delay;
        }
    }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}