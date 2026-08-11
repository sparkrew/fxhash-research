let colors33 = ['#0CFF7C', '#90BDFF', '#FF69B4', '#ffffff'];
let p2 = [ "#999898", '#e54120', '#8661D2'];
let p3 = [ "#999898", '#738447', '#e0a5ca', '#ABB888'];
let p4 = [ "#0180cd", "#8661D2", "#e6e6e6"];
let p5 = ['#8b7c00', '#ffb1bc', '#f71d01', '#8791ce'];
let p6 = ['#fe72e5', '#5e83ea', '#feb4f3', '#d3d1c4'];

let plist = [p2, p3, p4, p5, p6];
let colors = plist[Math.floor(fxrand() * plist.length)];
let color1;

let layerA = [],
    layerB = [],
    layerC = [];
    layerD = [];

    let DIM = Math.min(window.innerWidth, window.innerHeight);

    let pic_width = DIM;
    let pic_height = DIM;
    let hum;
    let oc;

    var bg, lA, lB, lC, lD;
    var x = DIM/24;
    var y = DIM/24;
    let imgR = 0.03 * DIM;
    var rand1 = fxrand();
    var wy = (DIM * 0.85) / 4;
    var wx = (DIM * 0.6);
    var py = (DIM * 0.15)/2;

function preload() {
    for (var i = 0; i < 20; i++) {
        layerA[i] = loadImage("assets/a/img_" + i + ".png");
    }
    for (var j = 0; j < 19; j++) {
        layerB[j] = loadImage("assets/b/img_" + j + ".png");
    }
    for (var k = 0; k < 19; k++) {
        layerC[k] = loadImage("assets/c/img_" + k + ".png");
    }
    for (var l = 0; l < 19; l++) {
        layerD[l] = loadImage("assets/d/img_" + l + ".png");
    }
    hum = loadImage('assets/hum.png');
    oc = loadImage('assets/oc.png');


 
}

function setup() {
    noStroke();

    color1 = colors[Math.floor(fxrand() * colors.length)];
    color2 = colors[Math.floor(fxrand() * colors.length)];
    color3 = colors[Math.floor(fxrand() * colors.length)];
    color4 = colors[Math.floor(fxrand() * colors.length)];

    createCanvas(DIM, DIM);
    fill(color1);   
    rect(DIM*0.2, py, wx, wy+0.0008*DIM);
    fill(color2);
    rect(DIM*0.2, wy+py, wx, wy);
    fill(color3);   
    rect(DIM*0.2,wy*2+py+0.001*DIM, wx, wy);
    fill(color4);
    rect(DIM*0.2, wy*3+py, wx, wy);

    lA = layerA[Math.floor(fxrand() * layerA.length)];
    lB = layerB[Math.floor(fxrand() * layerB.length)];
    lC = layerC[Math.floor(fxrand() * layerC.length)];
    lD = layerD[Math.floor(fxrand() * layerD.length)];
    blendMode(MULTIPLY);

    image(lA,  DIM*0.2, py, wx, wy);
    image(lB, DIM*0.2, wy+py, wx, wy);
    image(lC, DIM*0.2,wy*2+py, wx, wy);
    image(lD, DIM*0.2, wy*3+py, wx, wy);
    blendMode(BLEND);

    fill('#C4C4C4');
    rect(0, 0, DIM*0.2, DIM);
    rect(0.8*DIM,0, DIM*0.2, DIM);
    rect(0, 0,DIM, py+0.0008*DIM);
    rect(0, 0.925*DIM, DIM, py);

    fill('white');
    rectMode(CENTER);
    rect(DIM*0.5, 0.038*DIM, imgR*11.61*0.96, imgR*0.8 )
    rect(DIM*0.5, 0.962*DIM, imgR*7.45*0.9, imgR*0.8  );
    imageMode(CENTER);
    image(hum,  DIM*0.5, 0.038*DIM, imgR*11.61, imgR  );
    image(oc,  DIM*0.5, 0.962*DIM, imgR*7.45, imgR  );

}




function draw() {


}

