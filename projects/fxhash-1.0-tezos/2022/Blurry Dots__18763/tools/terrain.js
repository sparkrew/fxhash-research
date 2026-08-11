function terrain(maxH, minH, relief, clr1, clr2, dens, factor, sclX, sclY) {
    let posX = g1.width * 0.5
    let posY = g1.height * 0.5
    let radius = g1.width * 0.25
    let offset = fxrand();
    let offset2 = fxrand();
    for (let y = maxH; y < minH; y += sclY) {
        // g1.rotate(map(noise(offset),0,1,0,360))
        dropShad(0, 10, 10, 0, 100)
        let row = [];
        row.push(createVector(-width, y));
        for (let x = 0; x < g1.width + sclX; x += sclX) {
            let n = noise(x * relief, y * relief);
            // let ampli = map(y, 0, height, factor, 0) * dens;
            let ampli = map(noise(offset), 0, 1, 1, dens);
            let off = y + map(n, 0, 1, -ampli, ampli)
            row.push(createVector(x, off));
        }
        row.push(createVector(g1.width, g1.height));
        row.push(createVector(0, g1.height));
        let lvl = map(y, maxH, g1.height, 0, 1);
        let c = lerpColor(color(clr1), color(clr2), lvl);
        g1.stroke(c)
        g1.noFill()
        g1.beginShape();
        for (let v of row) {
            let variation = map(noise(offset), 0, 1, 0.05, 100)
            let distance = dist(v.x, v.y, g1.width * 0.5, fxrandBetween(g1.height * 0.40, g1.height * 0.60))
            let off = y + map(noise(offset), 0, 1, -g1.height / 2, g1.height / 2)
            g1.strokeWeight(variation / distance * 5);

            if (distance < radius) {
                g1.rectMode(CENTER)
                g1.rect(v.x, v.y, variation * vari.val);
            }

            if (distance < radius / fxrandBetween(2,10)) {
                if (fxrand() < 0.05) {
                    g1.ellipse(v.x, v.y+off, variation / PHI * vari.val);
                }
            } else {
                g1.vertex(v.x, v.y);
            }
            offset += turb.val;
            offset2 += 0.001;
        }
        g1.endShape(CLOSE);
    }
}

function noiser(zoneMax, zoneMin, rel, fac, density) {
    let l1 = {
        maxH: zoneMax,
        minH: zoneMin,
        relief: rel,
        clr1: palette.clr[0],
        clr2: palette.clr[1],
        dens: density,
        factor: fac,
        sclX: 1,
        sclY: 50
    }

    push()
    terrain(...Object.values(l1));
    pop()
}