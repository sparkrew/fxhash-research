class Particle {
    particle
    radius
    strength
    size = particleSize
    prevX
    prevY

    constructor(x, y, radius = 40, strength = -0.2) {
        this.particle = new toxi.physics2d.VerletParticle2D(new toxi.geom.Vec2D(x, y))
        this.radius = radius
        this.strength = strength

        this.prevX = x
        this.prevY = y
    }

    addToWorld(world) {
        world.addParticle(this.particle)
        world.addBehavior(new toxi.physics2d.behaviors.AttractionBehavior(this.particle, this.radius, this.strength))
    }

    display() {
        stroke(colourParticle)
        strokeWeight(this.size)
        // ellipse(this.particle.x, this.particle.y, this.size, this.size)
        line(this.prevX, this.prevY, this.particle.x, this.particle.y)

        this.prevX = this.particle.x
        this.prevY = this.particle.y
        this.size *= 0.95
    }
}