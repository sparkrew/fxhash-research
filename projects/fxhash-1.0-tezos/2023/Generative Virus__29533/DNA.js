class DNA {
  // Constructor (makes a random DNA)
  constructor(num) {
    // The genetic sequence
    this.genes = [];
    // this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = random(1); // Random gene value
    }
  }

  // Crossover
  crossover(partner) {
    // A new child
    let child = new DNA(this.genes.length);

    //===> CROSSOVER METHOD 1: flip a coin and randomly choose a gene from partner A or B
    for (let i = 0; i < this.genes.length; i++) {
        if (random(1)>0.5) child.genes[i] = this.genes[i];
        else child.genes[i] = partner.genes[i];
    }

    //===> CROSSOVER METHOD 2: Pick a midpoint and exchange between DNAs
    // let midpoint = floor(random(this.genes.length)); // Pick a midpoint
    // for (let i = 0; i < this.genes.length; i++) {
    //   if (i > midpoint) child.genes[i] = this.genes[i];
    //   else child.genes[i] = partner.genes[i];
    // }

    return child;
  }

  // Based on a mutation probability, picks a new random gene value
  mutate(mutationRate) {
    // randomSeed(millis());
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = random(1); // Random gene value
      }
    }
  }
}