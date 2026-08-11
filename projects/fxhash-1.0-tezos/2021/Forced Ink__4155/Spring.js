class Spring {
    spring

    constructor(particle1, particle2) {
        this.spring = new toxi.physics2d.VerletSpring2D(particle1, particle2, 15, 0.1)
    }

    addToWorld(world) {
        world.addSpring(this.spring)
    }

    display() {
        strokeWeight(1)
        line(this.spring.a.x, this.spring.a.y, this.spring.b.x, this.spring.b.y)
    }
}