function birds(x, y, s, complexity, n) {
  push()
    let xoff = 0.1;
    for (let j = 1; j <= n; j++) {

        for (let i = 1; i <= complexity; i++) {
            let birdPosX = x;
            let birdPosY = y;
            let birdSize = s + fxrand() * s;
            stroke(random(palette.clr));
            strokeWeight(1 * birdSize / 100);
            noFill();
            // let factor = map(noise(xoff), 0, 1, -width/33, -width/25);
            let factor = -width/3;
            beginShape()
            curveVertex(birdPosX + birdSize * 10, birdPosY - birdSize * 10*noise(xoff))
            curveVertex(birdPosX - factor, birdPosY)
            curveVertex(birdPosX + factor, birdPosY)
            curveVertex(birdPosX - birdSize * 10, birdPosY - birdSize * 10*noise(xoff))
            endShape()
            fill(random(palette.mount));
          //   ellipse(birdPosX, birdPosY + birdSize*1.1, birdSize / 5)
            xoff += 0.1
        }
    }
    pop()
  }