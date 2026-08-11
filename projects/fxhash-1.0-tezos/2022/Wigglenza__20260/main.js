/*
* author: Diego Pintos @dondiegotez
* Licensed under CC BY-NC-SA 4.0
*/
const TITLE = 'Wigglenza';
const PALETTES = [

    {name:'Guernika', colors:['#9e9e9d','#d4d3cb','#b8b8b5','#262c33','#75787f','#3b414c','#575b63','#151519','#e9e8e8'], bgs:['#262c33']},
    {name:'Firefall', colors:['#ff9b09',"#ca4900","#1b222a","#434d5c"], bgs:['#1b222a']},
    {name:'browns', colors:['#27180a','#49331b','#6a5438','#b79973','#967a56','#cec7bb','#9c9d9a','#e3e6e3'], bgs:['#49331b']},
    {name:'Autum', colors:['#b8522f','#e95723','#874b33','#594838','#ed9523','#a99071','#cfb9a0','#766c52'], bgs:['#594838']},
    {name:'Meninas', colors:['#937d61','#796149','#493b2f','#604a36','#342b24','#dbcaaf','#b0997a'], bgs:['#493b2f','#342b24']},
    {name:'Joker', colors:['#e5172f','#bd493a','#f3660a','#fcc703','#6c9a31','#154f66','#fffffb','#2447a8'], bgs:['#154f66']},
    {name:'Batman', colors:['#181616','#edba2d','#f3b41b','#b0790d','#5d5e64','#3d3d41','#2c2b2e'], bgs:['#2c2b2e']},
    {name:'Harley Quinn', colors:['#191717','#5d1514','#7e191a','#b92120','#a51b1b','#c32423','#dcd8d5','#262522','#2f2e2a','#444542'], bgs:['#191717']},
    {name:'Artemisia', colors:['#4c1313','#71171a','#a22325','#34160d','#543917','#755829','#9a783b','#b9975d','#d7b783','#edd8ab'], bgs:['#4c1313']},
    {name:'Spiderman', colors:['#e31f29','#961f21','#4471b5','#375998','#1e3152','#f1f1ef'], bgs:['#280a0c','#375998']},
    {name:'Wolverine', colors:['#ffe823','#ffc70b', '#ffb510','#fffcfc','#31659d'], bgs:['#ffb510','#31659d']},
    {name:'Balance', colors:['#ca2f2e','#492316','#b0790d','#f3b41b','#a2957c','#ebe2cc','#2e6ca4'], bgs:['#3384c5']},
    {name:'Feliz', colors:['#fffdf4','#f7c129','#053e6b','#c93a2a','#3384c5','#feffed', '#f2b922','#c93a2a'], bgs:['#f7c129']},
    {name:'Invierno', colors:['#243546','#a0b3aa','#f0ece6','#ee4425'], bgs:['#8f8f8f']},
    {name:'Ajeno', colors:['#ea000d','#ede2cd','#0063a2','#ffa400','#185379', '#2e2d2e', '#016727', '#df9c5a'], bgs:['#2e2d2e']},
    {name:'Ausencia', colors:['#fafaf1','#375780','#ffcb5d','#8da5a5','#ea6a5d'], bgs:['#8da5a5']},
    {name:'Amigos', colors:['#037bc7','#176b51','#ffce41','#ffc42a','#fe7040','#fe5b3a','#ff7376','#f2f5ee'], bgs:['#fe5b3a']},
    {name:'Suave', colors:['#fffeff','#d8495b','#f6ca67','#4b6073'], bgs:['#4b6073']},
    {name:'Paula', colors:['#ebecef','#e2ca9d','#c4ab82','#93806f','#8b966c', '#c5cf9d', '#ffb5d7', '#df6f97'], bgs:['#c4ab82','#ff6f97']},
    {name:'Tierra', colors:['#ffe8db','#c12e28','#536b65','#472722','#29211a','#f0ba71', '#a22e29', '#25242d'], bgs:['#e7cc93']},
    {name:'B&W', colors:['#000', '#fff'], bgs:['#000', '#000', '#fff']},
    {name:'B&W', colors:['#000', '#fff'], bgs:['#000', '#000', '#fff']}
    
]

const TIPOS = [
    {name:"Wiggle", mod:"wiggly"},
    {name:"Curvy", mod:"curvy"},
    {name:"Flow", mod:"flowy"},
    {name:"Attractors", mod:"attractors"},
];

const BRUSHES = [
    {name:"Square", brush:"vertex"},
    {name:"Round", brush:"circles"},
    {name:"Lines", brush:"lines"},
    {name:"Dots", brush:"dots"},
]

const SIZES = [
    {name:"tiny", min:3, max:10, iter:1000},
    {name:"small", min:10, max:40, iter:800},
    {name:"small", min:10, max:40, iter:800},
    {name:"small", min:10, max:40, iter:800},
    {name:"regular", min:50, max:90, iter:600},
    {name:"regular", min:50, max:90, iter:600},
    {name:"regular", min:50, max:90, iter:600},
    {name:"bold", min:130, max:190, iter:400},
    {name:"bold", min:130, max:190, iter:400},
    {name:"ultra", min:300, max:350, iter:300}
]

let tipo, tolerancia, maxx, flow, drawCollisions;
let size, lines, col, black;
let timer = 0;
let grid, gridsize, index;
let palette;
let mode = "normal"//"precalc";
let hesc, wesc;

let attractors, circularCenter;
let monocolor, specialcol;

let mgn, FAT, brush,grain;

function setup() {
    const seed = Math.floor(fxrand() * 1e9);
    randomSeed(seed);
    noiseSeed(seed);

    size = min(windowWidth, windowHeight);
    hesc = wesc = 1;
    let escaled = random()<.9;
    if(escaled) {
        if(random()<.5) {
            wesc = 1.3;
        } else {
            hesc = 1.3;
        }
    }
    let w = size*wesc;
    let h = size*hesc;
    console.log(w,h)
    createCanvas(w,h);
    pixelDensity(2);
    //frameRate(30);
    ellipseMode(CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);

    colorMode(HSB, 360, 100, 100, 1);

    palette = random(PALETTES);

    tipo = random(TIPOS);
    tolerancia = 0//random(-.05, -.01)//random(.002,.009);
    flow = random()*random()*4;
    drawCollisions = random()<.4 //tipo.name == "flowy" ? false : random()<.4;
    monocolor = palette.name == 'B&W' ? true : random()<.8;
    FAT = random(SIZES);
    brush = random(BRUSHES);

    mgn = random()<.1 ? 0 : random(.05,.15);

    circularCenter = createVector(random(),random());
    const numAttractors = random()*random()*5;
    attractors = [];
    for (let i = 0; i <numAttractors; i++) {
        attractors.push(createVector(random(-.2, 1.2), random(-.2, 1.2)));
    }
    
    const cbg = random()<.5;
    let bg = cbg ? '#eae1d2' : random(palette.bgs); //eae1d2
    if(palette.name == 'B&W') {
        bg = random(palette.bgs);
        specialcol = color(random(360), 60, 100);
    }
    palette.colors = palette.colors.filter(e => e !== bg)

    window.$fxhashFeatures = {
        "Palette":palette.name,
        "Type":tipo.name,
        "Brush":brush.name,
        "Size":FAT.name,
        "Frame":mgn>0,
        "color division":!monocolor,
        "c-lines":drawCollisions
    }
    //console.log(JSON.stringify(window.$fxhashFeatures))

    background(bg);
    noStroke();
    
    col = random(360);
    index = 0;

    let pxls = FAT.name == "tiny" ? 1500 : 1000;
    setupGrid(pxls);


    maxx = 30;
    if(FAT.name == "regular") maxx = 20;
    if(FAT.name == "bold" || FAT.name == "ultra") maxx = 10;
    lines = [];
    for (let i = 0; i <maxx; i++) {
        lines.push(new SuperLine(random(mgn/wesc,1-mgn/wesc), random(mgn/hesc,1-mgn/hesc)))
    }
    
}

function keyPressed() {
    if(key=='s') saveCanvas(TITLE+"_by_@dondiegotez_"+ fxhash, 'png');
    if(key=='p') isLooping() ? noLoop() : loop();
}

function setupGrid(pxls) {
    gridsize = size/pxls;

    let rows = width/gridsize;
    let cols = height/gridsize;
    grid = [];
    for(let i=0; i<=rows; i++) {
        let arr = [];
        for(let j=0; j<=cols; j++) {
            arr[j] = -1;
        }
        grid[i] = arr;
    }
}

function drawGrid() {
    
    stroke(0);
    noStroke();
    fill(255);
    for(let i=0; i<grid.length;i++) {
        let a = grid[i];
        for(let j=0; j<a.length;j++) {
            let x = i*gridsize;
            let y = j*gridsize;
            fill(255);
            if(a[j]>=0) fill(a[j],90,80);
            rect(x+gridsize/2,y+gridsize/2,gridsize,gridsize);
        }
    }
}

function checkGrid(x,y,id) {
    if(x<0) x=0;
    if(y<0) y=0;
    if(x>.999) x=.999;
    if(y>.999) y=.999;

    let i = floor(x*grid.length);
    let j = floor(y*grid[0].length);
    let gid = grid[i][j];
    let res = false;
    if(gid >= 0) {
        res = true;
        if(gid == id) res = false;
    }
    return res;
}

function draw() {

    let iter = 20;
    while(iter-->0) {
        for(let i=0;i<lines.length;i++) {
            let l = lines[i];
            if(l.move()) lines.splice(i, 1);
        }
        for(let i=0; i<lines.length; i++) {
            let l = lines[i];
            l.draw();
        }
        for(let i=0; i<5; i++) {
            if(lines.length<maxx) {
                let x = random(mgn/wesc,1-mgn/wesc);
                let y = random(mgn/hesc,1-mgn/hesc);
                let l = new SuperLine(x,y);
                if(!l.estimateCheck(l.fat*l.estimateFatFactor*3)) lines.push(l);
            } else {
                break;
            }
        }
    }

    if(timer++>FAT.iter*wesc*hesc) {
        fxpreview();
        noLoop();
    }

}

class SuperLine
{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.xprev = x;
        this.yprev = y;

        this.accurate = true;

        this.ang = random()*360;
        this.angy = random()*360;
        this.vel = .0005;//random(.0001, .0002);    // flow

        this.points = [];

        this.id = index++;

        this.curvysoft = .0006;
        this.curvynoisesoft = random(.4,.9);
        this.wigglesoft = .0008;
        this.attractorsoft = .002;
        this.attractorAngFactor = .1;
        this.circularInc = random(.03, .07);
        this.tube = false//random()<0;
        this.grad = false;

        this.fat = this.resetFat();
        this.newfat = this.resetFat();
        this.radio = this.fat*width*.0002;

        this.c = this.changeColor();

        if(specialcol && random()<.001) this.c = specialcol;
        
        this.dx = random()<.5 ? 1 : -1;
        this.dy = random()<.5 ? 1 : -1;

        this.xoff = random(10000);
        this.yoff = random(10000);
        this.curvyinc = random(.01, .09);
        this.wiggleinc = .005;//random(.01, .09);
        this.dxchecked = false;
        this.dychecked = false;
        this.noisexchecked = false;
        this.noiseychecked = false;

        const curvyEstimateFat = .5;
        const wiggleEstimateFat = .4;
        const flowyEstimateFat = .5;
        const attractorEstimateFat = .4;
        this.tipo = tipo.mod;

        this.estimateFatFactor = this.tipo == "wiggly" ? wiggleEstimateFat : this.tipo == "attractors" ? attractorEstimateFat : this.tipo == "flowy" ? flowyEstimateFat : curvyEstimateFat;
    }

    changeColor() {
        let cc = color(random(palette.colors));
        return cc;
    }
    resetFat() {
        return random(FAT.min, FAT.max);
    }
    savePoints() {
        this.points.push(this.calcPoints())
    }
    calcPoints() {
        const rx = this.xx - this.x;
        const ry = this.yy - this.y;

        let d = this.fat/2*.0002//sqrt(rx * rx + ry * ry) * 1;
        const a = atan2(ry, rx);
        const a1 = (a+90);
        const a2 = (a-90);
        let x1 = this.x+d*cos(a1);
        let y1 = this.y+d*sin(a1);
        let x2 = this.x+d*cos(a2);
        let y2 = this.y+d*sin(a2);

        return {p0:createVector(this.x, this.y, this.fat), p1:createVector(x1,y1),p2:createVector(x2,y2),adir:this.adir};
    }
    move() {
        if(this.xx) this.savePoints();
        this.drawGrid();
        this.fat += (this.newfat - this.fat)*.009;
        if(abs(this.fat - this.newfat)<.01) this.newfat = this.resetFat();

        if(!monocolor && random()<.001) this.c = this.changeColor();

        this.xprev = this.x;
        this.yprev = this.y;

        switch(this.tipo) {
            case "wiggly":
                this.x += noise(this.xoff)*this.wigglesoft*this.dx / wesc;
                this.y += noise(this.yoff)*this.wigglesoft*this.dy / hesc;
                this.xoff += this.wiggleinc;
                this.yoff += this.wiggleinc;
                break;
            case "curvy":
                this.x+=cos(this.ang) *this.curvysoft / wesc;
                this.y+=sin(this.angy)*this.curvysoft / hesc;
                this.ang += noise(this.xoff)*this.curvynoisesoft;
                this.xoff += this.curvyinc;
                this.angy += noise(this.yoff)*this.curvynoisesoft;
                this.yoff += this.curvyinc;
                break;
            case "flowy":
                let theta = noise(this.x * flow, this.y * flow) * TWO_PI * 2;
                let v = p5.Vector.fromAngle(theta, this.vel);
                this.x += v.x;
                this.y += v.y;
                break;
            case "circular":
                let center = attractors[0];
                const rx = (this.x - center.x);
                const ry = (this.y - center.y);
                let ang = atan2(ry, rx);
                const rad = sqrt( rx*rx + ry*ry );
                ang += this.circularInc*this.dx;
                this.x = center.x + rad * cos(ang);
                this.y = center.y + rad * sin(ang);
                // if(this.id == 1) console.log(this.x, this.y);
                break;
            case 'attractors':
                let theta2 = noise(this.x * flow, this.y * flow) * TWO_PI * 2;
                let vv = p5.Vector.fromAngle(theta2, this.vel);
                for (let i = 0; i <attractors.length;i++) {
                    let a = attractors[i];

                    let dy = this.y-a.y;
                    let dx = this.x-a.x;
                    if(abs(dy)<.001 && abs(dx)<.001) {
                        console.log("exception");
                        return true;
                    }
                    let ang = atan2(dy,dx)-PI;
                    vv.x += cos(ang)*this.attractorAngFactor;
                    vv.y += sin(ang)*this.attractorAngFactor;
                    vv.x *=this.attractorsoft;
                    vv.y *=this.attractorsoft;

                    this.x -= vv.x * wesc;
                    this.y -= vv.y * hesc;
                }
                let vvv = p5.Vector.fromAngle(theta2, this.vel);
                this.x += vvv.x * wesc * .2;
                this.y += vvv.y * hesc * .2;
                
                break;
        }
        
     
        if(this.x<mgn/wesc) return true;
        if(this.y<mgn/hesc) return true;
        if(this.x>1-mgn/wesc) return true;
        if(this.y>1-mgn/hesc) return true;

        if(this.estimateCheck(this.fat*this.estimateFatFactor)) {
            
            if(this.tipo == "flowy" || this.tipo == "attractors") return true;
            if(this.dxchecked && this.dychecked) {
                return true;
            } else if(this.dxchecked) {
                this.dychecked = true;
                // try dy
                this.angy += randomGaussian()*45;
                this.dy *= -1;
                this.move();
                return false;
            } else {
                // try dx
                this.dxchecked = true;
                this.ang += randomGaussian()*45;
                this.dx *= -1;
                this.move();
                return false;
            }
            /** */
        }
        return false;
    }

    estimateCheck(iter) {
        // primer check (origen)
        let res = checkGrid(this.x, this.y, this.id);
        if(res) return res;
        
        let xx = this.x;
        let fxoff = this.xoff;
        let yy = this.y;
        let fyoff = this.yoff;
        let fang = this.ang;
        let fangy = this.angy;
        for (var i = 0;i<iter; i++) {
            switch(this.tipo) {
                case "wiggly":
                    xx += noise(fxoff+=this.wiggleinc)*this.wigglesoft*this.dx / wesc;
                    yy += noise(fyoff+=this.wiggleinc)*this.wigglesoft*this.dy / hesc;
                    break;
                case "curvy":
                    xx+=cos(fang)* this.curvysoft;
                    yy+=sin(fangy)*this.curvysoft;
                    fang += noise(fxoff)*this.curvynoisesoft;
                    fxoff += this.curvyinc;
                    fangy += noise(fyoff)*this.curvynoisesoft;
                    fyoff += this.curvyinc;
                    break;
                case "flowy":
                    let theta = noise(xx * flow, yy * flow) * TWO_PI * 2;
                    let v = p5.Vector.fromAngle(theta, this.vel);
                    xx += v.x;
                    yy += v.y;
                    break;
                case "circular":
                    let center = attractors[0];
                    const ry = yy - center.y;
                    const rx = xx - center.x;
                    const rad = sqrt( rx*rx + ry*ry );
                    let ang = atan2(ry, rx);
                    ang+=this.circularInc;
                    xx = center.x + rad * cos(ang);
                    yy = center.y + rad * sin(ang);
                    break;
                case 'attractors':
                    let theta2 = noise(this.x * flow, this.y * flow) * TWO_PI * 2;
                    let vv = p5.Vector.fromAngle(theta2, this.vel);
                    for (let i = 0; i <attractors.length;i++) {
                        let a = attractors[i];
                        let dy = yy-a.y;
                        let dx = xx-a.x;
                        let ang = atan2(dy,dx)-PI;
                        vv.x += cos(ang)*this.attractorAngFactor;
                        vv.y += sin(ang)*this.attractorAngFactor;
                        vv.x *=this.attractorsoft;
                        vv.y *=this.attractorsoft;

                        xx -= vv.x * wesc;
                        yy -= vv.y * hesc;
                    }
                    let vvv = p5.Vector.fromAngle(theta2, this.vel);
                    xx += vvv.x * wesc * .2;
                    yy += vvv.y * hesc * .2;
                    break;
            }
            res = checkGrid(xx, yy, this.id);
            if(res) return res;
        }
        

        this.xx = xx;
        this.yy = yy;

        res = checkGrid(this.xx, this.yy, this.id);
        if(res) return res;

        const rx = xx - this.x;
        const ry = yy - this.y;
        const d = this.fat/2*.0002 +.001
        const a = atan2(ry, rx);
        this.adir = a;
        const a0 = (a+180);
        const a1 = (a+80);
        const a2 = (a-80);

        this.p0 = createVector(this.x+d*cos(a0), this.y+d*sin(a0))
        this.p1 = createVector(this.x+(d+tolerancia)*cos(a1), this.y+(d+tolerancia)*sin(a1))
        this.p2 = createVector(this.x+(d+tolerancia)*cos(a2), this.y+(d+tolerancia)*sin(a2))

        if(this.accurate) {
            res = checkGrid(this.p0.x, this.p0.y, this.id);
            if(res) return res;
            res = checkGrid(this.p1.x, this.p1.y, this.id);
            if(res) return res;
            res = checkGrid(this.p2.x, this.p2.y, this.id);
            if(res) return res;

            this.p1 = createVector(this.x+d*cos(a1), this.y+d*sin(a1))
            this.p2 = createVector(this.x+d*cos(a2), this.y+d*sin(a2))
            res = checkGrid(this.p1.x, this.p1.y, this.id);
            if(res) return res;
            res = checkGrid(this.p2.x, this.p2.y, this.id);
            if(res) return res;

            if(drawCollisions) {
                /** */
                push();
                noStroke();
                fill(0);
                let siz = 4 * width * .0002;
                //ellipse(xx*width, yy*height, siz, siz);
                ellipse((this.x + d*cos(a1))*width, (this.y+d*sin(a1))*height, siz, siz);
                ellipse((this.x + d*cos(a2))*width, (this.y+d*sin(a2))*height, siz, siz);
                // noFill();
                // stroke(0,255,0);
                // strokeWeight(.1)
                // ellipse(this.x*width, this.y*height, d*2*width, d*2*height);
                pop()
                /** */
            }
        }

        return res;

    }

    drawGrid() {

        let row = floor(this.x*grid.length);
        let col = floor(this.y*grid[0].length);

        let steps = this.radio/2/gridsize;
        let inc = 1;
        // if(steps > 5) inc += steps/5;
        for(let i = -steps/2; i < steps; i+=inc) {
            for(let j = -steps/2; j < steps; j+=inc) {
                const r = floor(row+i-1);
                const c = floor(col+j-1)
                if(grid[r] && grid[r][c]) grid[r][c] = this.id;
            }
        }
    }

    drawRound() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            this.radio = p0.z*min(width,height)*.0002;
            fill(this.c);
            noStroke();
            ellipse(p0.x*width, p0.y*height, this.radio, this.radio);
        }
    }
    drawPoints() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            let loop = random(10);
            this.radio = p0.z*min(width,height)*.0002;
            for (let i = 0; i < loop; i++) {
                let sx = random(this.radio);
                let sy = random(this.radio);
                let x = p0.x + (1-sqrt(random()))*randomGaussian()*(p0.z*.0002)/4;
                let y = p0.y + (1-sqrt(random()))*randomGaussian()*(p0.z*.0002)/4;
                let c = color(hue(this.c), saturation(this.c), brightness(this.c)+randomGaussian()*5, random(.5));
                fill(c);
                noStroke();
                if(i%2) {
                    color(this.c);
                    ellipse(x*width, y*height, sx,sy);
                } else {
                    push();
                    translate(x*width, y*height);
                    rotate(random(360));
                    rect(0,0, sx,sy);
                    pop();
                }
            }
        }
    }
    drawDots() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            
            
            let radio = p0.z*min(width,height)*.0002;
            let loop = random(radio);
            noStroke();
            let cc = color(hue(this.c), saturation(this.c), brightness(this.c)+20)
            push();
            translate(p0.x*width, p0.y*height);
            for (let i = 0; i < loop; i++) {
                
                let r = sqrt(random())*radio;
                let a = random(360);
                let x = r * cos(a);
                let y = r * sin(a);
                let s = .7+random(.3)+p0.z*.03*width*.0002;
                fill(0,.5);
                ellipse(x+1,y-1,s,s);
                fill(255,.3);
                ellipse(x-1,y+1,s,s);
                fill(cc);
                ellipse(x,y,s,s);
            }
            pop();
        }
    }

    drawSquare() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            let radio = p0.z*min(width,height)*.0002;
            // noStroke();
            strokeWeight((1+p0.z*.001)*width*.0002);
            //stroke(color(hue(this.c),saturation(this.c),brightness(this.c)+randomGaussian()*5),.3);
            stroke(this.c)
            noFill();
            //fill(color(hue(this.c),saturation(this.c),brightness(this.c)+randomGaussian()*5),.3);
            //ellipse(p0.x*width, p0.y*height, this.radio, this.radio);
            push();
            translate(p0.x*width, p0.y*height);
            //console.log(p0.adir);
            rotate(this.points[this.points.length-1].adir);
            rect(0,0,radio*.1, radio);
            stroke(color(hue(this.c),saturation(this.c),brightness(this.c)+randomGaussian()*15),.5);
            //if(random()<.01) stroke(255,.5)
            for (var i = 0; i <5; i++) {
                translate(randomGaussian()*.5,randomGaussian()*.5)
                rotate(randomGaussian()*5);
                rect(0,0,radio*.1+randomGaussian()*.001, radio+randomGaussian()*.01);
            }
            pop();
        }
    }
    drawCircle() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            let radio = p0.z*min(width,height)*.0002;
            // fill(this.c);
            // noStroke();
            strokeWeight((1+p0.z*.001)*width*.0002);
            stroke(this.c);
            noFill();
            push();
            translate(p0.x*width, p0.y*height);
            for(var i=0; i<3;i++) {
                radio+=randomGaussian()*(2*width*.0002);
                ellipse(0,0, radio, radio);
            }
            pop();
        }
    }
    drawLines() {
        if(this.points.length > 0) {
            const p0 = this.points[this.points.length-1].p0;
            let radio = p0.z*min(width,height)*.0002;
            // fill(this.c);
            // noStroke();
            strokeWeight((1+p0.z*.001)*width*.0002);
            stroke(this.c);
            noFill();
            push();
            translate(p0.x*width, p0.y*height);
            rotate(this.points[this.points.length-1].adir);
            
            strokeCap(SQUARE);
            for(var i=0; i<10;i++) {
                strokeWeight((1+random(p0.z)*.03)*width*.0002);
                let x = 0;
                let y = random(-radio/2,radio/2);
                let bri,sat;
                if(random()<.99) {
                    bri = brightness(this.c)+randomGaussian()*2;
                    sat = saturation(this.c)+random(5);
                    stroke(color(hue(this.c),sat,bri),.2);
                    line(x,y,radio*.4,y);
                } else {
                    
                    stroke(color(hue(this.c), saturation(this.c)-10,brightness(this.c)-30,.8));
                    line(x+.3,y-.3,radio*.4,y);
                    
                    stroke(color(hue(this.c), saturation(this.c)-10,brightness(this.c)+10,1));
                    // stroke(255,.5)
                    line(x,y,radio*.4,y);
                }
                

            }
            pop();
        }
    }
    draw() {

        switch(brush.brush) {
            case "circles":
                this.drawRound();
                break;
            case "lines":
                this.drawLines();
                break;
            case "vertex":
                this.drawVertex();
                break;
            case 'blobs':
                this.drawPoints();
                break;
            case 'dots':
                this.drawDots();
                break;
        }

    }
    drawVertex() {
        strokeCap(SQUARE);
        // strokeJoin(ROUND)
        if(this.points.length>1) {
            strokeWeight(3 * min(width,height) * .0002);
            const p0 = this.points[this.points.length-1].p1;
            const p1 = this.points[this.points.length-1].p2;
            const p2 = this.points[this.points.length-2].p2;
            const p3 = this.points[this.points.length-2].p1;
            fill(this.c);
            // noFill();
            stroke(this.c);
            beginShape();
            vertex(p0.x*width, p0.y*height);
            vertex(p1.x*width, p1.y*height);
            vertex(p2.x*width, p2.y*height);
            vertex(p3.x*width, p3.y*height);
            endShape();
        }
    }

}