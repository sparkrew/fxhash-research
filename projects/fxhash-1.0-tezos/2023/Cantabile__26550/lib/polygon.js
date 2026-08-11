//////////////////////////////////////////////////
// GENESIS PROJECT ON FXHASH
// Collection: CANTABILE
// Filename: polygon.js
// Project Author: Neverfamousartists, Jan Studio 
// Twitter: @nfamousartists, @jan_studio8
// Date: 1 April 2023
//////////////////////////////////////////////////
class POLYGON {
    constructor(vertices, modifiers) {
        this.vertices = vertices;
        if(!modifiers) {
            modifiers = [];
            for(let i = 0; i < vertices.length; i ++) {
                modifiers.push(random(0.5, 2));
            }
        }
        this.modifiers = modifiers;
    }
    grow() {
        const grownVerts = [];
        const grownMods = [];
        for(let i = 0; i < this.vertices.length; i ++) {
            const j = (i + 1) % this.vertices.length;
            const v1 = this.vertices[i];
            const v2 = this.vertices[j];

            const mod = this.modifiers[i];

            const chmod = m => {
                return m + (rand() - 0.5) * 0.1;
            }

            grownVerts.push(v1);
            grownMods.push(chmod(mod));

            const segment = p5.Vector.sub(v2, v1);
            const len = segment.mag();
            segment.mult(rand());

            const v = p5.Vector.add(segment, v1);

            segment.rotate(-180/2 + (rand()-0.5) * 180/4);
            segment.setMag(rand() * len/2 * mod);
            v.add(segment);

            grownVerts.push(v);
            grownMods.push(chmod(mod));
        }
        return new POLYGON(grownVerts, grownMods);
    }
  
    dup() {
        return new POLYGON(Array.from(this.vertices), Array.from(this.modifiers));
    }
  
    draw() {
        beginShape();
        for(let v of this.vertices) {
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }
}

function waterColor(poly, color) {
    noStroke();

    poly = poly.grow().grow();

    let numLayers = 30;
    fill(hue(color), saturation(color), brightness(color),alpha(color)/numLayers);
    for(let i = 0; i < numLayers; i ++) {
        if(i == int(numLayers/3) || i == int(2 * numLayers/3)) {
            poly = poly.grow().grow().grow();
        }
        poly.grow().draw();
    }

    numLayers = 3;
    fill(hue(color)+random(-1,1), saturation(color)*random(0.8,1.2), brightness(color)*random(0.8,1.2),alpha(color)*0.5/numLayers);
    for(let i = 0; i < numLayers; i ++) {
        if(i == int(numLayers/3) || i == int(2 * numLayers/3)) {
            poly = poly.grow().grow();
        }
        poly.grow().draw();
    }
}