let noiseFilter;
let colors = ['#222222', '#191919', '#1D1D1D', '#141414', '#FF0000', '#000000', '#000000', '#000000'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeCap(SQUARE);
    noiseFilter = createImage(width, height);
    noiseFilter.loadPixels();
    let pix = noiseFilter.width * noiseFilter.height * 4;
    for (let i = 0; i < pix; i += 4) {
        noiseFilter.pixels[i] = random(255);
        noiseFilter.pixels[i + 1] = random(255);
        noiseFilter.pixels[i + 2] = random(255);
        noiseFilter.pixels[i + 3] = 15;
    }
    noiseFilter.updatePixels();
    noLoop();
}

function draw() {
  noLoop()
  background(220);
  
  canvas.loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      canvas.set(x, y, color(random(0, 100), 20, 255))
    }
  }
  canvas.updatePixels()
  
}

function draw() {
    background('#000000');
    for (let i = 0; i < 800; i++) {
        let x = randomGaussian(0.5, 0.18) * width;
        let y = randomGaussian(0.5, 0.18) * height;
        let d = random(width, 10) * random(random(random()));
        let rnd = int(random(3) + 1);
        let col = color(random(colors));
        push();
        if (rnd == 1) {
            myCircle01(x, y, d)
        } else if (rnd == 2) {
            myCircle02(x, y, d);
            if (random() < 0.9) {
                noStroke();
                fill(random(colors));
                circle(x, y, d * random(0.25, 1));
            }

        } else if (rnd == 3) {
            let l = random(10, 1000) * random(random());
            let col = color(random(colors));
            col.setAlpha(random(100, 255));
            strokeWeight(random(3));
            stroke(col);
            if (random() < 0.7) line(x - l, y, x + l, y);
            else line(x, y - l, x, y + l);
        }
        pop();
    }
    image(noiseFilter, 0, 0);
}

function myCircle01(x, y, d) {
    let num = 500;
    let col = color(random(colors));
    noFill();
    strokeWeight(d * 0.001);
    for (let i = 0; i < num; i++) {
        let nm = norm(i, 0, num);
        let alph = lerp(255, 0, nm ** 0.5);
        let dd = lerp(d, d * 0.5, nm);
        col.setAlpha(alph)
        stroke(col);
        circle(x, y, dd);
    }
}

function myCircle02(x, y, d) {
    let num = 500;
    let col = color(random(colors));
    noFill();
    strokeWeight(d * 0.001);
    for (let i = 0; i < num; i++) {
        let nm = norm(i, 0, num);
        let alph = lerp(255, 0, nm ** 0.5);
        let dd = lerp(d, d * 1.5, nm);
        col.setAlpha(alph)
        stroke(col);
        circle(x, y, dd);
    }
}