let myImage = new Image();
let canvasSize;
//fxhash="oo1gvmHTqhTFbEMqmRM7TGsx3zTAEmmbCkzj34XC4gAJCk8tpZQ";
let refresh;
let gpu;
if (isFxpreview == true) {
    gpu = new GPU({
        mode: 'cpu'
    });
} else {
    gpu = new GPU({
        mode: 'gpu'
    });
}
let scale = 80;
let dispatch = fxrand() * 90;
let xfreq = 20 + fxrand() * 90;
let yfreq = 20 + fxrand() * 90;
let pforce = 0.4 + fxrand() * 0.1;
let stw = 0.7;
let taked = false;
let pp;
let centerpoint = [
    [300, 100, 0],
    [-300, -20, 0]
];
let counter = 0;
let particlesize = 128;
let bridgetexture;
let fxseed = fxrand();
let bgpar;
let viewheight = -3000 * fxrand() * 3;
//bgpar=100;
let myCanvas;
let backgroundimage;
let phasex = fxrand() * 6.28;
let phasey = fxrand() * 6.28;
let chaos=10+fxrand()*90;

let init = true;
let bgsettingdatabase = [
    [0, 16000, 2000, 40, 0.2, 1000, 0.1],
    [2000, 16000, 2000, 80, 0.5, 1000, 0.4],
    [2000, 16000, 2000, 80, 0.3, 600, 0.6],
    [2000, 16000, 2000, 80, 0.8, 500, 0.4],
    [2000, 16000, 1200, 80, 0.1, 800, 0.5],
    [2000, 16000, 2000, 10, 3, 400, 0.7],
    [800, 32000, 200, 20, 0.8, 800, 0.3],
    [800, 16000, 2000, 500, 0.2, 400, 0.8],
    [800, 16000, 2000, 200, 1.1, 1200, 0.2]
];

let colordatabase = [
    [
        [211, 0, 100],
        [211, 0, 5],
        [211, 0, 90],
        [211, 0, 85],
        [211, 0, 80],
        [211, 0, 5]
    ],
    [
        [211, 10, 100],
        [211, 10, 5],
        [211, 10, 90],
        [211, 10, 85],
        [211, 10, 80],
        [211, 10, 5]
    ],
    [
        [180, 10, 100],
        [180, 10, 5],
        [180, 10, 90],
        [180, 10, 85],
        [180, 10, 80],
        [180, 10, 5]
    ],
    [
        [210, 90, 100],
        [210, 10, 5],
        [210, 20, 90],
        [210, 90, 85],
        [210, 10, 80],
        [210, 10, 5]
    ],
    [
        [120, 10, 100],
        [120, 10, 5],
        [120, 10, 90],
        [120, 10, 85],
        [120, 10, 80],
        [120, 10, 5]
    ],
    [
        [80, 10, 100],
        [80, 10, 5],
        [80, 10, 90],
        [80, 10, 85],
        [80, 10, 80],
        [80, 10, 5]
    ],
    [
        [40, 10, 100],
        [40, 10, 5],
        [40, 10, 90],
        [40, 10, 85],
        [40, 10, 80],
        [40, 10, 5]
    ],
    [
        [0, 60, 100],
        [0, 10, 5],
        [0, 10, 100],
        [0, 60, 85],
        [0, 10, 80],
        [0, 10, 5]
    ],
    [
        [230, 65, 100],
        [230, 10, 5],
        [230, 10, 100],
        [230, 65, 85],
        [230, 10, 80],
        [230, 10, 5]
    ],
    [
        [250, 70, 30],
        [250, 10, 80],
        [250, 10, 100],
        [250, 70, 15],
        [250, 10, 80],
        [250, 10, 70]
    ],
];
let modedice = Math.floor(fxrand() * bgsettingdatabase.length);
let colordice = Math.floor(fxrand() * (colordatabase.length - 1));
if (modedice == 0 || modedice == 3 || modedice == 4) {
    let special = fxrand();
    if (special < 0.15) {
        colordice = 9;
    }

}
//modedice=8;
let bgbgsetting = bgsettingdatabase[modedice];
scale = bgbgsetting[3];
pforce = bgbgsetting[4] + fxrand() * 0.2;
bgpar = bgbgsetting[5] + fxrand() * 100;
stw = bgbgsetting[6];

let colormode = colordatabase[colordice];

const render = gpu.createKernel(function(a, frac, p, pforce) {
        //Math.randomSeed()
        if (this.thread.x % 2 == 0) {
            let px = a[this.thread.y][this.thread.x][0] + a[this.thread.y][this.thread.x + 1][0];
            let py = a[this.thread.y][this.thread.x][1] + a[this.thread.y][this.thread.x + 1][1];
            let pz = a[this.thread.y][this.thread.x][2] + a[this.thread.y][this.thread.x + 1][2];
            return [px, py, pz];
        } else {

            let vx = a[this.thread.y][this.thread.x][0];
            let vy = a[this.thread.y][this.thread.x][1];
            let vz = a[this.thread.y][this.thread.x][2];
            for (var i = 0; i < 1; i++) {
                let pvx = p[i][0] - a[this.thread.y][this.thread.x - 1][0];
                let pvy = p[i][1] - a[this.thread.y][this.thread.x - 1][1];
                let pvz = p[i][2] - a[this.thread.y][this.thread.x - 1][2];
                let myfrac = frac;
                const distance = Math.sqrt(pvx * pvx + pvy * pvy + pvz * pvz);

                let force = pforce * (1 / (distance * distance));
                if (distance < 0) {
                    force = 1;
                    myfrac = 0.991;
                }
                vx = vx * myfrac + pvx * distance * force;
                vy = vy * myfrac + pvy * distance * force;
                vz = vz * myfrac + pvz * distance * force;
            }


            return [vx, vy, vz];
        }

    })
    .setOutput([particlesize, particlesize])


const generateMatrices = () => {
    const matrices = [];
    for (let j = 0; j < particlesize; j++) {
        matrices.push([]);
        for (let i = 0; i < particlesize; i++) {
            if (i % 2 == 0) {
                matrices[j].push([])
                matrices[j][i].push(75 + (noise(i / particlesize) - 0.5) * scale);
                matrices[j][i].push(20 + (noise(i / particlesize) - 0.5) * scale);
                matrices[j][i].push((noise(i / particlesize) - 0.5) * scale);
            } else {
                matrices[j].push([])
                matrices[j][i].push((fxrand() - 0.5) * 4);
                matrices[j][i].push((fxrand() - 0.5) * 4);
                matrices[j][i].push((fxrand() - 0.5) * 4);
            }
        }
    }
    return matrices
}




function setup() {
    if (innerWidth > innerHeight) {
        canvasSize = innerHeight;
    } else {
        canvasSize = innerWidth;
    }
    //canvasSize*=2;
    if(canvasSize<600){
      canvasSize=600;
    }
    if(canvasSize>1024){
      canvasSize=1024;
    }

    pp = generateMatrices();
    pixelDensity(displayDensity() * 2);

    colorMode(HSB, 360, 100, 100);
    createCanvas(canvasSize, canvasSize, WEBGL);
    myCanvas = createGraphics(canvasSize, canvasSize, WEBGL);
    bridgetexture = createGraphics(canvasSize, canvasSize, WEBGL);

    backgroundimage = createImage(canvasSize, canvasSize);
    myCanvas.colorMode(HSB, 360, 100, 100);
    bridgetexture.colorMode(HSB, 360, 100, 100);
    refresh = 1;
    background(colormode[0]);
    for (var i = 0; i < bgpar; i++) {
        counter++;
        paint(myCanvas);
    }

    camera = createCamera();


    //backgroundimage.img(myCanvas);
    drawonce();

}

function draw() {
    //orbitControl();
    //background(backgroundimage);
    perspective(PI / 3.0, canvasSize / canvasSize, canvasSize * 0.01, canvasSize * 1200);

    if (init == true) {
        push();
        translate(0, 0, -332.8*canvasSize);
        //scale(0.2);
        texture(myCanvas);
        noStroke();
        plane(canvasSize * 400, canvasSize * 400);
        //image(myCanvas,-canvasSize/2,-canvasSize/2,canvasSize,canvasSize);

        pop();
        camera.pan(6.28 / 360 * 10);
        camera.move(canvasSize * 8, canvasSize * 4, canvasSize * 5);
        camera.move(0, viewheight, 0);
        camera.tilt(6.28 / 360 * -2);
        //perspective(PI / 3.0, canvasSize / canvasSize, canvasSize * 0.01, canvasSize * 1200);
        drawonce();
        drawbuilding();
        init = false;
    } else {
        if (taked == false) {
            fxpreview();
            taked = true;
        }
    }


}

function doubleClicked() {
    saveCanvas('fuzzy', 'jpg');
}

function drawbuilding() {
    let chaosy = fxrand() * bgbgsetting[0];
    strokeWeight(2.8);
    for (var j = 0; j < 400; j++) {
        stroke(colormode[1]);
        beginShape(LINES);
        let buildingheight = (fxrand()) * bgbgsetting[1];
        for (var i = 0; i < 80; i++) {

            px = 20 + fxrand() * 100;
            py = (i / 80) * -6000 + buildingheight;
            pz = -96000;
            pxL = -px + ((j + 1) / 400 - 0.5 + fxrand() * 0.01) * 300000;
            pxR = px + ((j + 1) / 400 - 0.5 + fxrand() * 0.01) * 300000;
            pyL = py + (fxrand() - 0.5) * chaosy;
            pyR = py + (fxrand() - 0.5) * chaosy;
            vertex(pxL, pyL, pz);
            vertex(pxR, pyR, pz);
        }
        endShape();
    }



}

function paint(canvas) {
    phase = fxrand() * 6.28;

    centerpoint[0][0] = cos(counter / 300 * 6.28 + phasex) * chaos;
    centerpoint[0][1] = sin(counter / 300 * 6.28 + phasey) * chaos;
    centerpoint[0][2] = noise(counter / 300 * 6.28) * chaos;

    centerpoint[1][0] = noise(counter) * 200;
    centerpoint[1][1] = noise(counter) * 200;

    pp = render(pp, 0.9999, centerpoint, pforce);

    canvas.push();
    canvas.translate(0, 0, 200);

    canvas.strokeWeight(stw);
    canvas.stroke(colormode[1]);
    //canvas.blendMode(LIGHTEST);
    for (var i = 0; i < pp.length; i++) {
        canvas.stroke(colormode[1]);
        canvas.beginShape(POINTS);
        for (var j = 0; j < pp[i].length; j += 2) {


            if (j % 2 == 0) {
                //          stroke(colormode[1][0],colormode[1][1],colormode[1][2]*(0.8+fxrand()*0.2));
                //box(1);
                canvas.vertex(pp[i][j][0], pp[i][j][1], pp[i][j][2]);
            } else {
                newpx = pp[i][j - 1][0] + pp[i][j][0];
                newpy = pp[i][j - 1][1] + pp[i][j][1];
                newpz = pp[i][j - 1][2] + pp[i][j][2];
                canvas.vertex(newpx, newpy, newpz);

            }

        }
        canvas.endShape();
    }
    refresh = 1;
    canvas.pop();
}

function drawawood(w, h, d) {
    let chaosx = 100;
    let chaosz = 0;

    // texture(bridgetexture);
    stroke(colormode[0]);

    noFill();
    strokeWeight(0.8);
    beginShape(LINES);
    for (var i = 0; i < 40; i++) {
        px = (i / 40 - 0.5) * w;
        py = h / 2;
        pz = d;
        pxLF = -px + (fxrand() - 0.5) * chaosx;
        pxRF = px + (fxrand() - 0.5) * chaosx;
        pxRB = px + (fxrand() - 0.5) * chaosx;
        pxLB = -px + (fxrand() - 0.5) * chaosx;
        pzLF = pz + (fxrand() - 0.5) * chaosz;
        pzRF = pz + (fxrand() - 0.5) * chaosz;
        pzRB = -pz + (fxrand() - 0.5) * chaosz;
        pzLB = -pz + (fxrand() - 0.5) * chaosz;
        //    vertex(pxLF,py,pzLF);
        vertex(pxRF, py, pzRF);
        vertex(pxRB, py, pzRB);
        //    vertex(pxLB,py,pzLB);


    }

    endShape();




}

function drawadoor(w, h, d, chaosx, chaosy) {
    beginShape(QUADS);
    chaosx = 0;
    chaosy = 0;
    for (var i = 0; i < 40; i++) {
        px = w / 2;
        py = h / 2;
        pz = d / 2;
        //px+=(fxrand()-0.5)*1000;
        //pz+=(fxrand()-0.5)*1000;

        pxLF = -px + (fxrand() - 0.5) * chaosx;
        pxRF = px + (fxrand() - 0.5) * chaosx;
        pxRB = px + (fxrand() - 0.5) * chaosx;
        pxLB = -px + (fxrand() - 0.5) * chaosx;

        pyLF = py + (fxrand() - 0.5) * chaosy;
        pyRF = py + (fxrand() - 0.5) * chaosy;
        pyRB = -py + (fxrand() - 0.5) * chaosy;
        pyLB = -py + (fxrand() - 0.5) * chaosy;

        vertex(pxLF * 1.1, pyLF, -pz);
        vertex(pxRF * 1.1, pyRF, -pz);
        vertex(pxRB * 0.65, pyRB, -pz);
        vertex(pxLB * 0.65, pyLB, -pz);

    }
    endShape(CLOSE);
}

function drawonce() {
    for (var i = 0; i < 600; i++) {
        push();
        //noStroke();
        translate(0, -4000, i * -2048);
        //fill(139,80,80,60);
        strokeWeight(2);

        stroke(colormode[0]);
        //drawawood(4800,1,1024);
        pop();
        if (i % 50 == 30) {
            push();
            //noStroke();

            translate(0, -4000, i * -2048);

            stroke(colormode[0]);
            strokeWeight(4);
            //drawadoor(6400,48000,1,0,30000);

            pop();

        }
    }

    translate(0, 4000, -80000);
    stroke(100);
    strokeWeight(1);
    fill(colormode[5]);
    box(300000, 1, 200000);
    fill(colormode[2]);


    noFill();

    beginShape(LINES);

    for (var i = 0; i < 10000; i++) {
        stroke(colormode[3]);

        px = (fxrand() - 0.5) * 250000;
        pz = 0 + (fxrand() - 0.5) * 200000;
        pzL = pz + (fxrand() - 0.5) * 800;
        pzR = pz + (fxrand() - 0.5) * 800;
        range = 500 + fxrand() * 300;

        vertex(px - range, 1, pzL);
        vertex(px + range, 1, pzR);

    }
    endShape();

    noFill();
    beginShape(LINES);

    for (var i = 0; i < bgbgsetting[2]; i++) {
        stroke(colormode[2]);

        px = 6000 + (fxrand() - 0.5) * 8000;
        py = viewheight + (fxrand() - 0.5) * 9000;

        pz = 17000 + (fxrand() - 0.5) * 170000;
        pzL = pz + (fxrand() - 0.5) * 800;
        pzR = pz + (fxrand() - 0.5) * 800;
        range = 500 + fxrand() * 300;

        vertex(px, py, pzL + range);
        vertex(px, py, pzR - range);

    }
    endShape();




}