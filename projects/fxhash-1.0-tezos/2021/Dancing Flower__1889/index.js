console.log(fxhash)   
console.log(fxrand()) 

let star;


function preload() {	

		star = new Star();
}


function setup() {

    createCanvas(vmin(100), vmin(100));
	colorMode(HSB);
    strokeWeight(.5);
    //angleMode(DEGREES);
	noFill();

}


function draw(){
    let fc = frameCount/480;
	blendMode(BLEND);
    background(0);
	blendMode(ADD);
	translate(width / 2, height / 2);
	stroke(star.a,40,60,0.7);
	drawingContext.shadowBlur = (cos(star.a)+1)*50;
	drawingContext.shadowColor = color((star.b*26), 360, 360);

    beginShape();

    for (let i = 0; i < 180; i++) {
        let k = i * star.a /100;
        let r = 299 * cos(star.a * k - fc * 10);
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }

    for (let i = 0; i < 180; i++) {
        let k = i * star.b;
        let r = 199 * cos(star.a * k - fc * 10)/10;
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }


    for (let i = 0; i < 560; i++) {
        let k = i * star.a ;
        let r = 199 * sin(star.b * fc);
        let x = i * cos(i*fc) / i ;
        vertex(x, k);
    }


    endShape();
}


class Star{

    constructor(){
        this.a=fxrand() * 4 + 20;
        this.b=9;
		this.c=300;
    }
}


function vmin(viewport_percent) {

  var canvas_size = windowWidth > windowHeight ? windowHeight : windowWidth;
  canvas_size -= canvas_size * ((100 - viewport_percent) / 100);
  return canvas_size;
  }


function windowResized() {
    (theSize = int(0.8 * min(windowWidth, windowHeight))), resizeCanvas(theSize, theSize, WEBGL), centerCanvas(), draw();
}


