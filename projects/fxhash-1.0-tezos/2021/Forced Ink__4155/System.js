class System {
    world
    repulsors = []
    particles = []

    constructor() {
        this.world = new toxi.physics2d.VerletPhysics2D()
        this.world.setDrag(0.01)
        this.world.setWorldBounds(new toxi.geom.Rect(-width, -height, width*3, height*3))

        // Initialise particles
        for (let i = 0; i < numParticles; i++) {
            let particle = new Particle(fxrand()*width, fxrand()*height)
            particle.addToWorld(this.world)
            this.particles.push(particle)
        }

        // Initialise repulsors
        for (let i = 0; i < numRepulsors; i++) {
            let repulsor = new Repulsor(fxrand()*width, fxrand()*height)
            repulsor.particle.lock()
            repulsor.addToWorld(this.world)
            this.repulsors.push(repulsor)
        }
    }

    display() {
        this.world.update()

        this.repulsors.forEach(repulsor => {
            repulsor.display()
        })

        this.particles.forEach(particle => {
            particle.display(color(0, 0, 0))
        })
    }
}