/*
* author: Diego Pintos @dondiegotez
* Licensed under CC BY-NC-SA 4.0
*/

const TITLE = 'DOLMEN';
const TIPOS = [
    {name:"Square"},
    {name:"Equilibrium"},
    {name:"Pyramid"},
    {name:"Row"},
    {name:"Column"},
    {name:'Frame'},
    {name:'3 rows'},
    {name:'3 columns'},
    {name:'PersonChen Style'},
    {name:'Hanging'}
]

const PALETTES = [
    {name:'Gioconda', colors:['#3b5135',"#4a2a24","#383124","#b4812d"]},
    {name:'Guernika', colors:['#9199a2',"#33363b","#73777b","#dcd8c6"]},
    {name:'Judith beheading Holofernes', colors:['#e5c3a3',"#782226","#8f2729","#555240"]},
    {name:'Meninas', colors:['#6e4032',"#c7b99d","#90593a","#f9ecc9"]},
    {name:'Nighthawks', colors:['#e7e3a4',"#4f846e","#b6c872","#213a41"]},
    {name:'Firefall', colors:['#ff9b09',"#ca4900","#1b222a","#434d5c"]},
    {name:'Timanfaya', colors:['#761306',"#523e37","#c78962","#6c4d42"]},
    {name:'Guacamayo', colors:['#fab511',"#8fb032","#9fc3dc","#f31a1d"]},
    {name:'Piedra', colors:['#5a662e',"#a6a196","#4c4d4f","#abb16a"]},
    {name:'Mostaza', colors:['#ffbe3c',"#3a677c","#02a3cd","#d3b265"]},
    {name:'Al-Siq', colors:['#fadbbe',"#e48741","#471203","#d95729"]},
    {name:'Salamanca', colors:['#bd211a',"#ebd8c4","#d0baa7","#de9f6b"]},
]

//
const tipo = TIPOS[Math.floor(fxrand()*TIPOS.length)].name;
let monochrome = fxrand()<.01;
let dark = fxrand()<.2;
let unfill = monochrome ? monochrome : fxrand()<.05;
let palette = PALETTES[Math.floor(fxrand()*PALETTES.length)];
const habitable = fxrand()<.9;
let suelo = false;
//console.log(palette.name, monochrome, tipo, dark);

let recs,items,pasadas,pasadasTotales,dotR,bgColor,bloques;

function setup() {
    const seed = Math.floor(fxrand() * 1e9);
    randomSeed(seed);
    noiseSeed(seed);

    size = min(windowWidth, windowHeight);
    let w = size;
    let h = size;
    createCanvas(w,h);
    pixelDensity(2);
    //frameRate(30);

    colorMode(HSB, 360, 100, 100, 1);
    bgColor = dark ? 0 : 95;
    background(bgColor);
    
    pasadas = 0;
    pasadasTotales = 4;    
    recs = [];
    
    let safe = 0;    // browser safe
    dotR = 2/10000;
    let x,y,ww,hh,pw,ph,delta,gap,lw;
    let minrecs = 40;
    switch (tipo.toLowerCase()) {
        case 'square':
            suelo = .9;
            pw = random(.03,.3)
            ph = random(.03,.3)
            packing(.1,.1,.8,.8, pw,ph);
            while(recs.length<minrecs) {
                recs = [];
                packing(.1,.1,.8,.8, pw,ph);
                if(safe++>100) break;
            }
            if(recs.length<70) dotR = 3/10000;
            break;
        case 'equilibrium':
            y = .9;
            ww = random(.03, .06);
            hh = random(.03, .06);
            suelo = .9+hh;
            delta = 0;
            pw = random(.04,.1)
            ph = random(.04,.1)
            while(y>.1) {
                delta++;
                if(ww>1) ww = 1;
                x = .5-ww/2;
                packing(x,y,ww,hh,pw-delta/10000,ph);
                hh = random(.01*delta, .03*delta);
                ww = random(.08*delta, .12*delta);
                y-=hh;
            }
            break;
        case 'pyramid':
            hh = random(.03, .15);
            y = .9-hh;
            suelo = .9;
            ww = random(.7, 1);
            pw = random(.04,.1);
            ph = random(.04,.1);
            let justonemore = false;
            while(y>=.1) {
                x = .5-ww/2;
                packing(x,y,ww,hh,pw,ph);
                hh = random(.03, .15);
                ww -= random(.17) + randomGaussian()*.025;
                if(ww>1) ww = 1;
                if(ww<.015) {
                    if(!justonemore && y-hh>.15) {
                        ww = .015;
                        justonemore = true;
                    } else {
                        break;
                    }
                }
                y-=hh;
            }
            //suelo = y+hh;
            break;
        case 'column':
            y = 0;
            ww = random(.2, .6);
            x = .5-ww/2;
            hh = 1;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,ww,hh,pw,ph);
            while(recs.length<minrecs) {
                recs = [];
                packing(x,y,ww,hh,pw,ph);
                if(safe++>100) break;
            }
            break;
        case "row":
            x = 0;
            hh = random(.2, .6);
            y = .5-hh/2;
            suelo = y+hh;
            ww = 1;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,ww,hh,pw,ph);
            while(recs.length<minrecs) {
                recs = [];
                packing(x,y,ww,hh,pw,ph);
                if(safe++>100) break;
            }
            break;
        case "frame":
            
            let tam = random(.15, .35);
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(0,0,1-tam,tam,pw,ph);
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(1-tam,0,tam,1-tam,pw,ph);
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(tam,1-tam,1-tam,tam,pw,ph);
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(0,tam,tam,1-tam,pw,ph);
            pw = random(.03,.15)
            ph = random(.03,.15)
            if(random()<tam+.1) packing(.4,.4,.2,.2,pw,ph);
            break;
        case '3 columns':
            let colW = random(.15, .3);
            gap = (1-colW*3)/3;
            x = gap;
            hh = random(.4, .9);
            y = random()<.5 ? 0 : 1-hh;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,colW,hh,pw,ph);
            x+=colW+gap/2;
            hh = random(.5, .9);
            y = random()<.5 ? 0 : 1-hh;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,colW,hh,pw,ph);
            x+=colW+gap/2;
            hh = random(.4, .9);
            y = random()<.5 ? 0 : 1-hh;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,colW,hh,pw,ph);
            break;
        case '3 rows':
            lw = .001;
            let hanging = random()<.5;
            let rowH = random(.15, .3);
            gap = (1-rowH*3)/3;
            y = gap;
            ww = random(.4, .9);
            x = random()<.5 ? 0 : 1-ww;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,ww,rowH,pw,ph);

            if(!hanging) {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:y+rowH, w:lw, h:1});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:y+rowH, w:lw, h:1});
                }
            } else {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:0, w:lw, h:y});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:0, w:lw, h:y});
                }
            }

            hanging = random()<.75 ? hanging : !hanging;

            y+=rowH+gap/2;
            ww = random(.5, .9);
            x = random()<.5 ? 0 : 1-ww;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,ww,rowH,pw,ph);
            if(!hanging) {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:y+rowH, w:lw, h:1});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:y+rowH, w:lw, h:1});
                }
            } else {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:0, w:lw, h:y});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:0, w:lw, h:y});
                }
            }
            hanging = random()<.75 ? hanging : !hanging;

            y+=rowH+gap/2;
            ww = random(.4, .9);
            x = random()<.5 ? 0 : 1-ww;
            pw = random(.03,.15)
            ph = random(.03,.15)
            packing(x,y,ww,rowH,pw,ph);

            if(!hanging) {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:y+rowH, w:lw, h:1});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:y+rowH, w:lw, h:1});
                }
            } else {
                if(x>0) {
                    recs.push({pc:true, x:x+lw*.2, y:0, w:lw, h:y});
                } else {
                    recs.push({pc:true, x:x-lw*1.2+ww, y:0, w:lw, h:y});
                }
            }
            break;

        case 'personchen style':
            y = random(.9,.95);
            suelo = y;
            hh = .05+random()*.3;
            y -= hh;
            x = random()*.4;
            ww = .02 + random()*.5;
            pw = random(.03,.15)
            ph = random(.03,.15)
            bloques = [];

            while(y>0.05) {
                while(x+ww<1) {
                    bloques.push({x,y,ww,hh});
                    packing(x,y,ww,hh,pw,ph);
                    x = x+ww + random()*random()*.1;
                    ww = .02 + random()*.5;
                    if(safe++>100) break;
                }
                if(safe++>100) break;
                x = random()*.4;
                ww = .02 + random()*.5;
                hh = .05+random()*.3;
                y-=hh;
            }
            lw = .001;
            for(let i = 0; i < bloques.length; i++) {
                let bloque = bloques[i];
                
                recs.push({pc:true, x:bloque.x+lw*.2, y:bloque.y+bloque.hh, w:lw, h:suelo-bloque.y-bloque.hh});
                recs.push({pc:true, x:bloque.x+bloque.ww-lw*1.2, y:bloque.y+bloque.hh, w:lw, h:suelo-bloque.y-bloque.hh});
                //line(bloque.x*width+5*dotR*width, bloque.y*height+bloque.hh*height, bloque.x*width + 5*dotR*width, suelo*height)
                //line(bloque.x*width+bloque.ww*width-5*dotR*width, bloque.y*height+bloque.hh*height, bloque.x*width+bloque.ww*width-5*dotR*width, suelo*height)
            }

            //suelo = y+hh;
            break;
        case 'hanging':
            y = random(.05, .1);
            hh = .05+random()*.3;
            x = random()*.4;
            ww = .02 + random()*.5;
            pw = random(.03,.15)
            ph = random(.03,.15)
            bloques = [];

            while(y+hh<.95) {
                while(x+ww<1) {
                    bloques.push({x,y,ww,hh});
                    packing(x,y,ww,hh,pw,ph);
                    x = x+ww + random()*random()*.1;
                    ww = .02 + random()*.5;
                    if(safe++>100) break;
                }
                if(safe++>100) break;
                x = random()*.4;
                ww = .02 + random()*.5;
                y+=hh;
                hh = .05+random()*.3;
            }
            lw = .001;
            for(let i = 0; i < bloques.length; i++) {
                let bloque = bloques[i];
                
                recs.push({pc:true, x:bloque.x+lw*.2, y:0, w:lw, h:bloque.y});
                recs.push({pc:true, x:bloque.x+bloque.ww-lw*1.2, y:0, w:lw, h:bloque.y});
            }

            //suelo = y+hh;
            break;
        }

    const dens = recs.length;
    let density = dens<35 ? 'Tiny' : dens<100 ? 'Small' : dens<250 ? 'Medium' : dens<350 ? 'High' : dens<500 ? 'Massive' : 'Ultra';
    //console.log(density);

    window.$fxhashFeatures = {
        Palette: palette.name,
        "Style":tipo,
        "Fill Mode": !unfill + " - Color inside rectangles",
        "Dark Mode": dark + " - Dark background",
        "Monochrome": monochrome + " - Black and White version",
        "Density": density + " - Rectangles density",
        "Habitable": habitable + " - Can contains tiny humans",
    };


    for(let i = 0; i < recs.length; i++) {
        recs[i].col = color(random(palette.colors));
    }
    shuffle(recs, true);
    setupRecs();
    drawNoiseBackground(dark);

    /*
    if(bloques) {
        console.log("entro")
        stroke(0, .3);
        strokeWeight(5*dotR*width);
        for(let i = 0; i < bloques.length; i++) {
            let bloque = bloques[i];
            line(bloque.x*width+5*dotR*width, bloque.y*height+bloque.hh*height, bloque.x*width + 5*dotR*width, suelo*height)
            line(bloque.x*width+bloque.ww*width-5*dotR*width, bloque.y*height+bloque.hh*height, bloque.x*width+bloque.ww*width-5*dotR*width, suelo*height)
        }
    }/* */

    noStroke();
    
}

function setupRecs() {
    items = [];
    for(let i = 0; i < recs.length; i++) {
        let rec = recs[i];
        let num = dark ? random(40,80) : random(100,200);
        let x = rec.x;
        let y = rec.y;
        let w = rec.w;
        let h = rec.h;
        let iter = random(60,30);
        let n = 0;
        let typey = random();
        let typex = random();
        let col = rec.col;
        let rot = rec.rot;
        let pc = rec.pc;
        items.push({num,x,y,w,h,iter,n,typex,typey,col,rot,pc});
    }
    //console.log(recs.length)
}

function updateRecs() {     // no está usandose
    shuffle(items, true);
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        item.num = random(50,50);
        item.iter = random(60,30);
        item.n = 0;
        item.typey = random();
        item.typex = random();
    }
}

function keyPressed() {
    if(key=='s') saveCanvas('@dondiegotez_'+TITLE+"_"+fxhash, 'png');
    if(key=='f') toggleFillMode();
    if(key=='m') toggleMonochrome();
    if(key=='d') toggleDarkMode();
    if(key=='p') togglePalette();       // HIDDEN FEAT.
}
function reset() {
    drawNoiseBackground(dark);
    pasadas = 0;
    setupRecs();
    loop();
}
function toggleFillMode() {
    unfill = !unfill;
    if(!unfill) monochrome = false;
    reset();
}
function togglePalette() {
    palette = PALETTES[Math.floor(random()*PALETTES.length)];
    for(let i = 0; i < recs.length; i++) recs[i].col = color(random(palette.colors));
    console.log(palette.name);
    reset();
}
function toggleDarkMode() {
    dark = !dark;
    reset();
}
function toggleMonochrome() {
    unfill = true;
    monochrome = !monochrome;
    reset();
}
function drawNoiseBackground(dark) {
    let img = createImage(200,200);
    img.loadPixels();
    let d = pixelDensity();
    let halfImage = 4 * (img.width * d) * (img.height / 2 * d);
    for (let i = 0; i < halfImage; i += 4) {
        let r = !dark ? random(240,255) : random(10,20);
        let g = r;
        let b = !dark ? random(230,245) : random(10,20);
        img.pixels[i + 0] = r;
        img.pixels[i + 1] = g;
        img.pixels[i + 2] = b;
        img.pixels[i + 3] = 255;
    }
    img.updatePixels();
    let pattern = drawingContext.createPattern(img.canvas, 'repeat');
    drawingContext.save();
    drawingContext.fillStyle = pattern;
    rect(0,0,width,height);
    drawingContext.restore();
}

function packing(x,y,w,h,pw,ph) {

    x = x ? x : 0;
    y = y ? y : 0;
    w = w ? w : 1;
    h = h ? h : 1;

    if(w<=pw && h<=ph) {
        recs.push({x, y, w, h});
        return;
    }
    const ref = Math.max(pw/w, ph/h)
    let split = random() < .5 + ref*.4;
    if(w>.4 || h>.4) split = true;
    if(split) {
        let splitWhere = random(.3, .8);
        let packW = false;
        let packH = false;
        let ppw = pw;
        let pph = ph;
        if(w>ppw && h>pph) {
            if(random()<.5) {
                packW = true;
            } else {
                packH = true;
            }
        } else if(w<=ppw) {
            packH = true;
        } else {
            packW = true;
        }
        if(packW) {
            packing(x, y, w * splitWhere, h,pw,ph);
            packing(x + (w * splitWhere), y, w * (1 - splitWhere), h,pw,ph);
        }
        if(packH) {
            packing(x, y, w, h * splitWhere,pw,ph);
            packing(x, y + (h * splitWhere), w, h * (1 - splitWhere),pw,ph);
        }
        if(!packW && !packH) console.log("WHAT!")
    } else {
        recs.push({x, y, w, h});
    }
}

function drawHuman4(x,y,h) {
    strokeWeight(.05 * h/10 * width);
    fill(10);
    if(dark) fill(80);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    
    let rad,x1,y1,x2,y2;
    const dir = random()<.5 ? 1 : -1;
    const angle = -90 + random(5)*dir;
    //feet
    x1 = x;
    y1 = y-h*.1;
    x2 = x + h*0.08*dir;
    y2 = y;
    triangle(x*width, y*height, x1*width, y1*height, x2*width, y2*height);
    // legs
    rad = h*.35;
    const fat = random(10,15);
    x1 = x+cos(radians(angle+fat*-dir)) * rad;
    y1 = y+sin(radians(angle+fat*-dir)) * rad;
    x2 = x+cos(radians(angle+fat*dir)) * rad;
    y2 = y+sin(radians(angle+fat*dir)) * rad;
    triangle(x*width, y*height, x1*width, y1*height, x2*width, y2*height);

    y-=rad;
    rad = h*.3;
    const inclinacion = random(5,40);
    x3 = x+cos(radians(angle+inclinacion*dir)) * rad;
    y3 = y+sin(radians(angle+inclinacion*dir)) * rad;
    // hands
    x1 += dir<0 ? h*.025 : -h*.025;
    
    triangle(x3*width, y3*height, x1*width, y1*height, x2*width, y2*height);
    circle(x1*width, y1*height, h*.05*width)

    // head
    x += h*(inclinacion/180)*dir;
    y -= rad*.84;
    let headsize = h*.15;
    circle(x*width, y*height, headsize*width);


}

function fillRectangle(item) {

    if(item.pc && !unfill && pasadas>0) return;

    let xx = item.x;
    let yy = item.y;
    let ww = item.w;
    let hh = item.h;
    
    if(!unfill && pasadas<=0 && !item.base) {
        let col;
        if(!dark) {
            col = color(hue(item.col), saturation(item.col),brightness(item.col), 1);
        } else {
            //col = color(hue(item.col), saturation(item.col)*.3,brightness(item.col)*.1, 1);
            col = color(hue(item.col), saturation(item.col),brightness(item.col), 1);
        }
        fill(col);
        rect(xx*width,yy*height,ww*width,hh*height);
        // close gaps without complete stroke
        stroke(col);
        strokeWeight(1);
        line((xx+ww)*width,yy*height, (xx+ww)*width, (yy+hh)*height);
        line(xx*width,(yy+hh)*height, (xx+ww)*width, (yy+hh)*height);
        noStroke();

        item.base = true;
    }

    let col;
    if(!monochrome) {
        if(dark) {
            if(unfill) {
                col = color(hue(item.col),40,90,.15);     // claro, colored
            } else {
                col = color(random(0,20), .35);
            }
            
        } else {
            col = color(hue(item.col),100,brightness(item.col)*.3,.15);    // oscuro, colored
        }
    } else {
        if(dark) {
            col = color(random(200,255),.15);     // white
        } else {
            col = color(random(0,20),.15);     // black
        }
    }
    fill(col);
    for(let i = 0; i<item.num; i++) {
        let x = random();
        if(item.typex<.4) x = random()*random();
        if(item.typex>.6) x = 1 - random()*random();
        let y = random();
        if(item.typey<.4) y = random()*random()*random();
        if(item.typey>.6) y = 1 - random()*random()*random();
        

        rect(xx*width + x*ww*width, yy*height + y*hh*height, 2 * dotR * width,2 * dotR * height);
        
    }

    if(suelo && yy+hh >= suelo-.001) {
        for(let i = 0; i<item.num/10; i++) {
            let xi = (1-random()*random())/2;
            let x = random()<.5 ? .5 + xi : .5-xi;
            x += randomGaussian()*.15;
            if(item.pc) x = xi+randomGaussian()*10;
            let y = 1+random()*random()*random()*random()*random()*.2;
            //y+=randomGaussian()*.01;
            fill(0, .12);
            if(dark) fill(hue(item.col), saturation(item.col),brightness(item.col), .12);
            rect(xx*width + x*ww*width, yy*height + y*hh*height, 2 * dotR * width,2 * dotR * height);
        }
    } 
    
    // crack
    if(random()<0.003) {
        let cx = item.x+random()*item.w;
        let cy = item.y+random()*item.h;
        fill(col);
        let long = random(150,300);
        for(let k=0; k<long; k++) {            
            rect(cx*width, cy*height, 2 * dotR * width,2 * dotR * height);
            cy += randomGaussian()*noise(sin(k))/200;
            cx += randomGaussian()*noise(sin(k))/200;
        } 
    }

}

function draw() {
    for(let i = 0; i < 100; i++) {
        if(i>=items.length) break;
        let item = items[i];
        fillRectangle(item)
        if(item.n++>item.iter) {
            if(habitable && pasadas>=pasadasTotales-1 && random()<.05) {
                drawHuman4(item.x + random(item.w), item.y, .02);
            }
            items.splice(i,1);
        }
    }
    
    if(items.length<=0) {
        if(++pasadas < pasadasTotales) {
            setupRecs();
        } else {
            fxpreview();
            noLoop();
        }
    }
}