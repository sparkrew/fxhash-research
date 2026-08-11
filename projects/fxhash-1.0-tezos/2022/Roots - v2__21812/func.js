let rand0 = fxrand();

// FXRAND ATTRIBUTION ============================================================================

function rnd_btw(min, max) {
    return rand0 * (max - min) + min;
  }
  function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(rand0 * (max - min + 1)) + min;
  }

// PARTICLE =====================================================================================

class Particle {
    constructor(e, o) {
        (this.dir = createVector(0, 0)),
        (this.vel = createVector(0, 0)),
        (this.pos = createVector(e, o)),
        (this.speed = 2.5),
        (this.color = myObj.colors_line[random(0, 5).toFixed(0)]),
        (this.move = function () {
            var e = 115 * noise(this.pos.x / myObj.scale, this.pos.y / myObj.scale);
            (this.dir.x = cos(e)),
            (this.dir.y = sin(e)),
            (this.vel = this.dir.copy()),
            this.vel.mult(this.speed),
            this.pos.add(this.vel);
            }),
        (this.checkCanvas = function () {
            (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0)
            && ((this.pos.x = random(1, width)), (this.pos.y = random(1, height)));
            }),
        (this.display = function (e) {
            ellipse(this.pos.x, this.pos.y, e, e);
            });
    }
}