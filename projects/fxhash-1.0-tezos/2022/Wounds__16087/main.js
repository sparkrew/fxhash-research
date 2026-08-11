/*
* author: Diego Pintos @dondiegotez
* Licensed under CC BY-NC-SA 4.0
*/
const TITLE = 'Wounds';
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
    {name:'Salamanca', colors:['#bd211a',"#ebd8c4","#d0baa7","#de9f6b"]}
]

let palette = PALETTES[Math.floor(fxrand()*PALETTES.length)];
let monochrome = fxrand()<.3;
let invert = false;
const dotR = 2/10000;
let fractures, loops, saturation, brightness;
function setup() {
    const seed = Math.floor(fxrand() * 1e9);
    randomSeed(seed);
    noiseSeed(seed);
    angleMode(DEGREES);

    const size = min(windowWidth, windowHeight);
    createCanvas(size,size);
    pixelDensity(2);
    const num = random(1, 8);
    window.$fxhashFeatures = {
        Palette: monochrome ? "Monochrome" : palette.name,
        Fractures: ceil(num),
    };

    colorMode(HSB, 360, 100, 100, 1);
    noStroke();
    reset();
    
    fractures = [];
    let ai = random(360);
    for (let i = 0; i < num; i++) {
        let rot = random()<.25 ? ai : random()<.5 ? ai+180%360 : ai+90%360;
        let tx = random(.1,.9);
        let ty = random(.1,.9);
        let gauss = random(.1, .25);
        let col = color(random(palette.colors));
        fractures.push({rot,tx,ty,gauss,col});
    }    
}
function reset() {
    if(!invert) {
        saturation = !monochrome ? 90 : 100;
        brightness = !monochrome ? 20 : 0;
    } else {
        saturation = !monochrome ? 20 : 0;
        brightness = !monochrome ? 90 : 100;
    }
    background(!invert ? 245 : 10);
    loops = 4*100;
    loop();
}
function keyPressed() {
    if(key=='s') saveCanvas('@dondiegotez_'+TITLE+"_"+fxhash, 'png');
    if(key=='i') toggleInvert();
}
function toggleInvert() {
    invert = !invert;
    reset();
}
function spread(line) {
    const num = 900;
    const xi = 0;
    const yi = 0;
    let x,y;
    fill(hue(line.col), saturation, brightness, .5);
    for (let i = 0; i < num; i++) {
        x = xi + randomGaussian()*line.gauss;
        y = yi + random()*random()*random()*.5*(.5-random()*random()*abs(x-xi));
        rect(x*width,y*height,1*dotR*width,1*dotR*height)
    }
}
function draw() {
    for (var i=0; i<fractures.length; i++) {
        push();
        translate(fractures[i].tx*width, fractures[i].ty*height);
        rotate(fractures[i].rot);
        spread(fractures[i]);
        pop();
    }
    if(loops--<=0) {
        noLoop();
        fxpreview();
    }
}