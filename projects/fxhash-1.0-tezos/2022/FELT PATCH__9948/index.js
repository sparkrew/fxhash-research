// FELT PATCH
// © 2022 Stevan Kojic @fxhash
// Licence in licence.md file
p5.disableFriendlyErrors = true;
var max;
var bgcl;
var sqrs=[];
var clrsets = [
    ["#B983FF70","#94B3FD70","#99FEFF70"],
    ["#7A0BC070","#FA58B670","#FF008E70"],
]
var clrsetIndex,clrset;
var gridColor,gridCol=[];
var bwcl;
var grc, dens, imgGr;
function setFeatures(){
    bwcl = setColors();
    let patchCount = setSqrs();
    console.log('color/b&w:',bwcl)
    console.log('count:',patchCount)
    window.$fxhashFeatures = {
        "color/b&w": bwcl,
        "count": patchCount,
    };  
}
function setColors(){
    let colR = fxrand()*100;
    let c = colR<=0.5? 'b&w'
    : (colR>1 && colR<=99)? 'color'
    : 'b&w & color on the top';
    bgcl = '#000';
    clrsetIndex = randInt(0,clrsets.length-1);
    clrset = clrsets[clrsetIndex];
    return c;
}
function setSqrs() {
    let rand = randInt(4,10);
    let pc = rand*2;   
    let top;
    for(let i=0; i<rand; i++){
        top = i==rand-1? true : false
        let s = new Sqr(top);
        sqrs.push(s);
    }
    return pc;
}
class Sqr {
    constructor(top) {
        this.sqrOr = fxrand()<=0.5? 'Hor' : 'Ver';
        this.sqNo = 2;
        this.top = top;
        this.yHorInd = [];
        this.xVerInd = [];
        let rxy = [1/6,1/4,1/3,1/2];
        let randxy = rxy[randInt(0,rxy.length-1)];
        for(let i=0; i<this.sqNo; i++){
            if(i % 2 === 0) {randxy = rxy[randInt(0,rxy.length-1)];};
            this.yHorInd[i] = randxy;
            this.xVerInd[i] = randxy;
        }
        this.centered = fxrand()<=0.2? true : false;
        let a = [45,90];
        let angInd = randInt(0,a.length-1);
        this.ang = radians(a[angInd]);
        let swh = [1/3,1/4,1/6];
        this.sqWH = swh[randInt(0,swh.length-1)];
        let hw = [1/6,1/4,1/3,1/2,2/3,3/4,3/5,5/6,7/8];
        this.hWInd = hw[randInt(0,hw.length-1)];
        let vh = [1/6,1/4,1/3,1/2,2/3,3/4,3/5,5/6,7/8];
        this.vHInd = vh[randInt(0,vh.length-1)];
        let cl = [40,80];
        if(bwcl=='b&w') {
            let c = cl[randInt(0,cl.length-1)];
            this.clr = color('rgba('+c+','+c+','+c+','+0.7+')');
        } else if(bwcl=='color') {
            this.clr = clrset[randInt(0,clrset.length-1)];
        } else {
            if(this.top){
                this.clr = clrset[randInt(0,clrset.length-1)];
            } else {
                let c = cl[randInt(0,cl.length-1)];
                this.clr = color('rgba('+c+','+c+','+c+','+0.7+')');
            }
        }
        this.cor = 50;
    }
    display() {
        push();
        fill(this.clr);
        noStroke();
        rectMode(CENTER);
        translate(width/2,height/2);
        let x = [];
        let y = [];
        let a = [];
        let sig = 1;
        if(this.sqrOr == 'Hor'){
            this.w = this.hWInd*width
            this.h = this.sqWH*height;
            this.x = 0;
            for(let i=0; i<this.sqNo; i++){
                a[i] = sig*this.ang
                x[i] = this.centered? 0 : this.x;
                y[i] = this.centered? 0 : sig*this.yHorInd[i]*height/2;
                sig*=-1;
            }
        } else {
            this.w = this.sqWH*width;
            this.h = this.vHInd*height;
            this.y = 0;
            for(let i=0; i<this.sqNo; i++){
                a[i] = sig*this.ang
                x[i] = this.centered? 0 : sig*this.xVerInd[i]*width/2;
                y[i] = this.centered? 0 : this.y;
                sig*=-1;
            }
        }
        for(let i=0; i<this.sqNo; i++){
            push();
            this.centered? rotate(a[i]) : null;
            rect(x[i],y[i],this.w,this.h, this.cor);
            pop();
        }
        pop();
    }
}
function setup() {
    console.log(fxhash);
    noiseSeed(fxhash);
    randomSeed(fxhash);
    max = min(windowHeight, windowHeight);
	createCanvas(max, max);
    background(200);
    pixelDensity(4);
    dens = pixelDensity();
    colorMode(RGB);
	setFeatures();
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = '#00000080';    
}
function draw() {
    background(bgcl);
    for(let i=0; i<sqrs.length; i++){
        sqrs[i].display();
    }
    imgGr = createImage(width, height);
    imgGr.loadPixels();
    for (let i = 0; i < dens * (width * height); i += dens) {
        grc = color(random(255));
        imgGr.pixels[i] = red(grc);
        imgGr.pixels[i + 1] = green(grc);
        imgGr.pixels[i + 2] = blue(grc);
        imgGr.pixels[i + 3] = alpha(grc);
    }
    imgGr.updatePixels();
    tint(255,50);
    image(imgGr, 0, 0, width, height);
    if(frameCount==1) fxpreview();
    noLoop();
}
function keyTyped() {
    if (key === 's' || key === 'S') {
        saveCanvas(canvas, 'felt-patch.png');
    } else null;
}
function randInt(x, y) {
    return Math.floor(fxrand(fxhash) * (y + 1 - x) + x);
}
function randFloat(x, y) {
    return (fxrand(fxhash) * (y - x) + x);
}
function windowResized() {
    max = min(windowHeight, windowHeight);
    resizeCanvas(max, max);
}