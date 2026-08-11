let agents = []
let palettes = []
let a = []
let sw = []
let p = []
let r = []
let nx = []
let ny = []

let seed

let canvas

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.class("mycanvas")
    pixelDensity(pixelDensity())

    background(0);

    palettes.push([color('#191919'), color('#2D4263'), color('#C84B31'), color('#ECDBBA')])
    palettes.push([color('#1F1D36'), color('#3F3351'), color('#864879'), color('#E9A6A6')])
    
    palettes.push([color('#2A0944'), color('#1597BB'), color('#A12568'), color('#FEC260')])
    palettes.push([color('#EEB76B'), color('#E2703A'), color('#9C3D54'), color('#374045')])
   
    

    p = palettes[int(fxrand() * palettes.length)]

    for (let i = 0; i < 4; i++) {
        r.push(fxrand() * width * .5 + 10)
        // s.push( fxrand() * .5 + .1)
        nx.push(fxrand() * 9999)
        ny.push(fxrand() * 9999)
        sw.push(fxrand() * .4 + .12)
        a.push(fxrand() * 10 + 2)
    }

    agents.push(new Agent(p[0], r[0], width * .5, height * .5, nx[0], ny[0], sw[0], a[0]))
    agents.push(new Agent(p[1], r[1], width * .5, height * .5, nx[1], ny[1], sw[1], a[1]))
    agents.push(new Agent(p[2], r[2], width * .5, height * .5, nx[2], ny[2], sw[2], a[2]))
    agents.push(new Agent(p[3], r[3], width * .5, height * .5, nx[3], ny[3], sw[3], a[3]))

    seed = fxrand() * 99999
    noiseSeed(seed)
    //console.log(agents.length)
    background(0, 15, 25);
}


function draw() {

    if (millis() < 120000) {
        noiseSeed(seed)
        noFill()

        for (let i = 0; i < agents.length; i++) {
            strokeWeight(sw[i])
            agents[i].update()
        }
    }
}

function mousePressed() {
    background(0, 15, 25);
    agents = []
    agents.push(new Agent(p[0], r[0], width * .5, height * .5, nx[0], ny[0], sw[0], a[0]))
    agents.push(new Agent(p[1], r[1], width * .5, height * .5, nx[1], ny[1], sw[1], a[1]))
    agents.push(new Agent(p[2], r[2], width * .5, height * .5, nx[2], ny[2], sw[2], a[2]))
    agents.push(new Agent(p[3], r[3], width * .5, height * .5, nx[3], ny[3], sw[3], a[3]))
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    agents = []
    background(0, 15, 25);
    agents.push(new Agent(p[0], r[0], width * .5, height * .5, nx[0], ny[0], sw[0], a[0]))
    agents.push(new Agent(p[1], r[1], width * .5, height * .5, nx[1], ny[1], sw[1], a[1]))
    agents.push(new Agent(p[2], r[2], width * .5, height * .5, nx[2], ny[2], sw[2], a[2]))
    agents.push(new Agent(p[3], r[3], width * .5, height * .5, nx[3], ny[3], sw[3], a[3]))

}


class Agent {

    constructor(c, rad, posx, posy, nx, ny, sw, alpha) {
        this.rot = 0
        this.rad = rad
        this.xpos = posx
        this.ypos = posy
        this.noisex = nx
        this.noisey = ny
        this.c = c
        this.r = red(this.c)
        this.g = green(this.c)
        this.b = blue(this.c)
        this.sw = sw
        this.a = alpha

    }


    update = function () {

        this.xpos += map(noise(this.noisex, 20, 50), 0, 1, -3, 3);
        this.ypos += map(noise(this.noisey, 85, 5), 0, 1, -3, 3);

        let rad = map(noise(this.noisex / 2., this.noisey / 2., 12), 0, 1, -this.rad, this.rad )

        if (this.xpos > width) this.xpos = 0;
        else if (this.xpos < 0) this.xpos = width;
        else if (this.ypos < 0) this.ypos = height;
        else if (this.ypos > height) this.ypos = 0;
        strokeWeight(this.sw)
        for (let d = 0; d <= 360; d += 50) {
            let r = radians(d + this.rot);
            stroke(this.r, this.g, this.b, this.a + d / 10.);

          
            bezier(
                this.xpos + rad * cos(pow(this.r, .4) + PI * 0.), this.ypos +  rad * sin(pow(this.r, .4) + PI * 0.),
                this.xpos + rad * cos(pow(this.r, .4) + PI * 0.3), this.ypos + rad * sin(pow(this.r, .4) + PI * 0.3),
                this.xpos + rad * cos(pow(this.r, .4) + PI * 0.6), this.ypos + rad * sin(pow(this.r, .4) + PI * 0.6),
                this.xpos + rad * cos(pow(this.r, .4) + PI * 1.3), this.ypos + rad * sin(pow(this.r, .4) + PI * 1.3)
            );
        }
        //this.rot += .05;
        this.noisex += 0.005;
        this.noisey += 0.005;

    }



}