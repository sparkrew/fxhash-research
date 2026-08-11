function Particle() {
    
    this.pos = createVector(random(400,1200), random(400,1200));
    this.vel = createVector(random(-80,200), random(-120,240));
    this.acc = createVector(random(-40,100), random(-40,100));
    this.maxspeed = random(1.5,2.5);

    this.prevPos = this.pos.copy();

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    this.follow = function (vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;

        var force = vectors[index];
        this.applyForce(force);
    };

    this.applyForce = function (force) {
        this.acc.add(force);
    };
///////////
          this.show = function () {

colorMode(HSL,20);
                   stroke("rgba(random(1,100), random(1,100), random(1,100) ,55)");
        strokeWeight(4);
noFill();
        line(this.pos.x, this.pos.y, 800,this.prevPos.y);
stroke("rgba(36,35,35, 0.05)");
        line(this.pos.x, this.pos.y, this.prevPos.x,800);
stroke("rgba(50, 50, 50 ,5)");
strokeWeight(2);
        bezier(this.pos.y, this.pos.x, this.prevPos.x, this.prevPos.y, this.pos.x,  800, this.prevPos.x,this.prevPos.y);
        

        this.updatePrev();
    };

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    };

    this.edges = function () {
        if (this.pos.x > 1550) {
            this.pos.x = 50;
            this.updatePrev();
        }
        if (this.pos.x < 50) {
            this.pos.x = 1550;
            this.updatePrev();
        }
        if (this.pos.y > 1550) {
            this.pos.y = 50;
            this.updatePrev();
        }
        if (this.pos.y < 50) {
            this.pos.y = 1550;
            this.updatePrev();
        }
    };
}