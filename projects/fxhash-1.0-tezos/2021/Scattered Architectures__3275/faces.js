/*****
Copyright (C) 2021  Leonardo Solaas

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

leonardo@solaas.com.ar
https://solaas.com.ar

*****/


var colChances = [
    ["yellow", "#FEB50022", 1],
    ["red", "#BC310F22", 1],
    ["green", "#91990022", 1],
    ["blue", "#57ACBF22", 1],
    ["purple", "#9F7EB222", 1],
    ["white", "#EEEEEE33", 0.2]
]
var faceChances = [
    [6, 6, 1],
    [7, 7, 2],
    [8, 8, 3],
    [9, 9, 4],
    [10, 10, 5],
    [11, 11, 4],
    [12, 12, 2],
    [13, 13, 1]
]

var gap = 1, t = 0;
var faces, edges, tickers;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('container');
    strokeWeight(1);
    smooth();

    init();
}

function init() {
    faces = [], edges = [];
    tickers = new Set();
    t = 0;
    background(255);


    let _col = weightedPick(colChances);
    let _faces = weightedPick(faceChances);

    let linked = 0, extrusions = 0, spikes = 0;
    for(let i=0; i<_faces.v; i++) {
        let f = new Face();
        f.col = hexToRgba( i < _faces.v-2 ? "#00000000" : _col.v );
        f.wait = 50 * i;
        faces.push(f);
        console.log(i, f);

        if(edges.length > 0 && fxrand() < 0.8) {
            f.from.clone( pick(edges) );
            linked ++;
        } else {
            f.from.make();
            edges.push(f.from);
        }

        let p = fxrand();
        if(p < 0.5) {
            f.to.parallel(f.from);
            edges.push(f.to);
        } else if(p < 0.95) {
            f.to.extrude(f.from);
            edges.push(f.to);
            extrusions ++;
        } else {
            f.to.point(f.from);
            spikes ++;
        }

        f.init();
    }

    let co = linked /  (_faces.v - 1);
    let coK = labelValue(co, [ [0.65, "very low"], [0.75, "low"], [0.85, "average"], [0.95, "high"], [99, "very high"] ]);

    let or = extrusions / _faces.v;
    let orK = labelValue(or, [ [0.35, "very low"], [0.45, "low"], [0.55, "average"], [0.65, "high"], [99, "very high"] ]);

    window.$fxhashFeatures = {
      "Color": _col.k,
      "Faces": _faces.k,
      "Connectedness": coK,
      "Orthogonality": orK,
      "Spikes": spikes
    }
    //console.log( window.$fxhashFeatures );

    loop();
}

function draw() {
    for (let tkr of tickers) {
        tkr.tick();
    }
    t++;

    if(tickers.size == 0) { noLoop(); console.log("finished"); }
}

class Edge {

    constructor() {
        this.a = createVector();
        this.z = createVector();
        this.len = 0;
        this.horiz = true;
    }

    make() {
        let _len = 0.2 + fxrand() * fxrand() * 0.6;
        let dir = fxrand() < 0.5 ? -1 : 1;
        if(fxrand() < 0.5) {
            let x1 = rnd(0.1, 0.9);
            let x2 = constrain(x1 + _len*dir, 0, 1);
            this.a.set( min(x1, x2) , rnd(0.1, 0.9) );
            this.z.set( max(x1, x2), this.a.y );
            this.len = _len * width;
            this.horiz = true;
        } else {
            let y1 = rnd(0.1, 0.9);
            let y2 = constrain(y1 + _len*dir, 0, 1);
            this.a.set( rnd(0.1, 0.9), min(y1, y2) );
            this.z.set( this.a.x, max(y1, y2) );
            this.len = _len * height;
            this.horiz = false;
        }
    }

    clone(e) {
        this.a.set(e.a.x, e.a.y);
        this.z.set(e.z.x, e.z.y);
        this.len = e.len;
        this.horiz = e.horiz;
    }

    parallel(e) {
        let dst = 0.2 + fxrand() * fxrand() * 0.6;
        let _len = 0.2 + fxrand() * fxrand() * 0.6;
        let dir = fxrand() < 0.5 ? -1 : 1;
        if(e.horiz) {
            let ny = e.a.y + dst*dir;
            if(ny < 0 || ny > 1) {
                dir *= -1;
                ny = constrain(e.a.y + dst*dir, 0, 1);
            }
            let x1 = rnd(0.1, 0.9);
            let x2 = constrain(x1 + _len*dir, 0, 1);
            this.a.set( min(x1, x2), ny );
            this.z.set( max(x1, x2), ny );
            this.len = _len * width;
            this.horiz = true;
        } else {
            let nx = e.a.x + dst*dir;
            if(nx < 0 || nx > 1) {
                dir *= -1;
                nx = constrain(e.a.x + dst*dir, 0, 1);
            }
            let y1 = rnd(0.1, 0.9);
            let y2 = constrain(y1 + _len*dir, 0, 1);
            this.a.set( nx, min(y1, y2) );
            this.z.set( nx, max(y1, y2) );
            this.len = _len * width;
            this.horiz = false;
        }
    }

    extrude(e) {
        let dst = 0.2 + fxrand() * fxrand() * 0.6;
        let dir = fxrand() < 0.5 ? -1 : 1;
        if(e.horiz) {
            let ny = e.a.y + dst*dir;
            if(ny < 0 || ny > 1) {
                dir *= -1;
                ny = constrain(e.a.y + dst*dir, 0, 1);
            }
            this.a.set( e.a.x, ny );
            this.z.set( e.z.x, ny );
            this.len = e.len;
            this.horiz = true;
        } else {
            let nx = e.a.x + dst*dir;
            if(nx < 0 || nx > 1) {
                dir *= -1;
                nx = constrain(e.a.x + dst*dir, 0, 1);
            }
            this.a.set( nx, e.a.y );
            this.z.set( nx, e.z.y );
            this.len = e.len;
            this.horiz = false;
        }
    }

    perpendicular(e) {
        let _len = 0.2 + fxrand() * fxrand() * 0.6;
        let dir = fxrand() < 0.5 ? -1 : 1;
        if(e.horiz == false) {
            let x1 = rnd(0.1, 0.9);
            let x2 = constrain(x1 + _len*dir, 0, 1);
            this.a.set( min(x1, x2) , rnd(0.1, 0.9) );
            this.z.set( max(x1, x2), this.a.y );
            this.len = _len * width;
            this.horiz = true;
        } else {
            let y1 = rnd(0.1, 0.9);
            let y2 = constrain(y1 + _len*dir, 0, 1);
            this.a.set( rnd(0.1, 0.9), min(y1, y2) );
            this.z.set( this.a.x, max(y1, y2) );
            this.len = _len * height;
            this.horiz = false;
        }
    }

    point(e) {
        let dst = 0.2 + fxrand() * fxrand() * 0.6;
        let dir = fxrand() < 0.5 ? -1 : 1;
        if(e.horiz) {
            let ny = e.a.y + dst*dir;
            if(ny < 0 || ny > 1) {
                dir *= -1;
                ny = constrain(e.a.y + dst*dir, 0, 1);
            }
            this.a.set( rnd(0.2, 0.8), ny );
            this.z.set( this.a.x, ny );
            this.len = 1;
            this.horiz = true;
        } else {
            let nx = e.a.x + dst*dir;
            if(nx < 0 || nx > 1) {
                dir *= -1;
                nx = constrain(e.a.x + dst*dir, 0, 1);
            }
            this.a.set( nx, rnd(0.2, 0.8) );
            this.z.set( nx, this.a.y );
            this.len = 1;
            this.horiz = false;
        }
    }
}


class Face {

    constructor(){
        this.from = new Edge();
        this.to = new Edge();
        this.col = {};
        this.alpha = 0;
        this.wait = 0;
        this.created = t;
        this.mt = 0;
        this.life = 1;
        this.action = this.hold;
    }

    init() {
        this.alpha = rnd(16, 64);
        this.life = int(this.from.len/gap);
        tickers.add(this);
    }

    tick() {
        this.action();
    }

    hold() {
        if (this.wait > 0 && t < this.wait) return;
        this.mt = 0;
        this.action = this.update;
    }

    update() {
        let d = this.mt / this.life;
        let fx = this.from.a.x + (this.from.z.x-this.from.a.x) * d;
        let fy = this.from.a.y + (this.from.z.y-this.from.a.y) * d;
        let tx = this.to.a.x + (this.to.z.x-this.to.a.x) * d;
        let ty = this.to.a.y + (this.to.z.y-this.to.a.y) * d;

        this.alpha += rnd(-3, 3);
        this.alpha = constrain(this.alpha, 8, 128);
        stroke(this.col.r, this.col.g, this.col.b, this.col.a + this.alpha);
        line(fx*width, fy*height, tx*width, ty*height);

        this.mt++;
        if(this.mt > this.life) tickers.delete(this);
    }
}


function rnd(a = 0, z = 1) {
    return a + fxrand() * (z-a);
}

function pick(arr) {
    return arr[ int(fxrand()*arr.length) ];
}

function weightedPick(arr) {
    let sum = 0, n = 0;
    for(let o of arr) sum += o[2];

    let r = fxrand() * sum;
    for(let o of arr) {
        n += o[2];
        if(r < n) return {k:o[0], v:o[1]};
    }
    return {k:arr[0][0], v:arr[0][1]};
}

function labelValue(val, labels) {
    for(let o of labels) {
        if(val < o[0]) return o[1];
    }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function hexToRgba(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: parseInt(result[4], 16)
  } : null;
}

function keyTyped() {
    if (key === 'r') {
        init();
    } else if (key === 's') {
        saveCanvas("scattered_architectures.jpg");
    } else if (key === 'f') {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas.parent('container');
    init();
}
