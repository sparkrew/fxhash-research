let particulas = [];
cantidad = 2500 * fxrand();

const tulac = fxrand()

function colorPicker() {
    const colorBackground = ["#2d4551", "#0e151a"]
    const colorPastoVerde = ["#b3c1b4", "#0b2603", "#124608"]
    const colorPastoSeco = ["#92622c", "#9b3114", "#a93413"]
    const colorHojas = [
        ["#92622c", "#224927", "#9b3114", "#a93413"],
        ["#a93413"],
        ["#277B16"],
        ["#096404", "#0B6E06", "#043201", "#2E6C2B"],
        ["#ABA9A6", "#EEEDED", "#D0AFB4"]
    ]
    const colorTronco = ["#2c251c", "#1c1210", "#000"]
    const colorAstro = ["#F7E1C3", "#e33900"]
    const colorParticulas = ["#ffede6", "#ffffff", "#A99457"]

    var count = 0

    col = random(colorParticulas)
    colHojas = random(colorHojas)
    colBack = random(colorBackground)
    colTronco = random(colorTronco)
    colAstro = random(colorAstro)




    if (colHojas == colorHojas[0] || colHojas == colorHojas[1]) {
        colPasto = random(colorPastoSeco)
    } else {
        colPasto = random(colorPastoVerde)
        if (colBack == '#0e151a') {
            colPasto = "#124608"
        }
    }


}
setsize(window.innerHeight, window.innerHeight);

function windowResized(sw, sh) {
    if (sw == undefined || sh == undefined) {
        sw = windowHeight - (windowHeight - windowHeight);
        sh = windowHeight;
    }
    setsize(sw, sh);
    setup();
}

function setsize(sw, sh) {
    wh = sh;
    ww = sw;
}

function setup() {
    randomSeed(fxrand() * 99999)

    let myCanvas = createCanvas(ww, wh, P2D);
    myCanvas.parent("canvas");
    colorPicker();

    //Particulas
    for (let i = 0; i < cantidad; i++) {
        particulas.push(new Particula(random(-width, width),
            random(-height, height),
            color(col),
            random(.4, 1.5)));
    }

}

function draw() {
    background(colBack);

    for (let i = 0; i < particulas.length; i++) {
        particulas[i].display();
    }

    dibujarLuna()


    dibujarArbol(width / 2, height, 0, 150);

    dibujarPasto();

}

function dibujarLuna() {
    colorPicker()

    circle(random(0, .7) * width, height * random(.1, .5), random(width * .1, width * .7), random(height * .1, height * .7))
}

function dibujarArbol(x, y, angulo, radio) {
    if (radio < 1.3) {
        return
    }
    if (radio < 8) {
        stroke(random(colHojas))
    } else {
        stroke(colTronco)
    }
    let x2 = x + radio * cos(angulo - PI / 2)
    let y2 = y + radio * sin(angulo - PI / 2)
    strokeWeight(radio / random(7, 12))
    line(x, y, x2, y2)
    for (let i = 0; i < 3; i++) {
        dibujarArbol(
            x2,
            y2,
            angulo + random(-PI / 6, PI / 6),
            radio * random(0.15, 1)
        )
    }
    noLoop()
}

function dibujarPasto() {
    for (i = 0; i < width; i++) {
        noFill();
        stroke(colPasto);
        strokeWeight(fxrand());
        rect(i, width, sin(height), fxrand() * -35);
    }
}

class Particula {

    constructor(_x, _y, _color, _s) {

        this.x = _x; //posicion en x
        this.y = _y; //posicion en y
        this.speedx = random(-1, -1);
        this.speedy = random(-1, 1)
        this.col = _color; //color
        this.size = _s; //tamaño
    }

    display() {

        this.y -= this.speedx;
        this.y -= this.speedy;
        fill(this.col);

        circle(this.x, this.y, this.size);
        strokeWeight(0)
    }

}