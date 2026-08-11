class Repulsor {
    particle
    radius
    strength
    size = 20

    constructor(x, y, radius = width, strength = -0.1) {
        this.particle = new toxi.physics2d.VerletParticle2D(new toxi.geom.Vec2D(x, y))
        this.radius = radius
        this.strength = strength
    }

    addToWorld(world) {
        world.addParticle(this.particle)
        world.addBehavior(new toxi.physics2d.behaviors.AttractionBehavior(this.particle, this.radius, this.strength))
    }

    display() {
        noStroke()
        fill(colourRepulsor)
        ellipse(this.particle.x, this.particle.y, this.size, this.size)
    }
}