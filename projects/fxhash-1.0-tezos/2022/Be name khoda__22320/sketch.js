
let num = 1;
let stepX, stepY;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    stepX = width / num;
    stepY = height / num;

    noLoop();
}

function draw() {
    background(random(255), random(255), random(255));

    for(let j=0; j<num; j++){
        for(let i=0; i<num; i++){
            let x =stepX/10 + i * stepX;
            let y =stepY/3 + j * stepY;
            drawCircle(x, y);
        }
    }
}

function drawCircle(_x, _y) {

    for (let i = 0; i <200; i++) {       
        let val = width / 5;
        
        beginShape();

        for (let angle = 0; angle < 360; angle+=2) {
            
            let xoff = map(cos(angle), -1, 1, 0, 2);
            let yoff = map(sin(angle), -1, 1, 0, 2);
            // let vr = map(noise(xoff, yoff), 0, random(1, 100), val/2, val*2);
            let vr = map(noise(xoff, yoff), 0, 1, val/10, val*(i/10));

            // let palette = color(random(255), random(255), angle);
            noFill();
            stroke(random(255), random(255), random(255));
            strokeCap(ROUND);
            strokeJoin(ROUND);
            strokeWeight(2);
            // line(_x + vr * cos(angle), _y + vr * sin(angle), _x, _y);
            vertex(_x + vr * cos(angle), _y + vr * sin(angle));

            push()
            noStroke();
            fill(random(255), random(255), random(255))
            circle(_x + vr * cos(angle), _y + vr * sin(angle), 5);
           
            pop()
        }

        endShape(CLOSE);
    }
}


