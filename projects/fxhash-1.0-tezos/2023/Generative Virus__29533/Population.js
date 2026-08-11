class Population {
  constructor(numOfGenes, m, num) {

    this.population; // Array to hold the current population
    this.matingPool; // ArrayList which we will use for our "mating pool"
    this.generations = 0; // Number of generations
    this.mutationRate = m; // Mutation rate
    this.numOfGenes = numOfGenes;
    this.population = [];
    this.showInfo = false;

    for (let i = 0; i < num; i++) {
      let dna = new DNA(this.numOfGenes)
      this.population[i] = new Individual(dna, i);
    }
    this.matingPool = [];
  }

  // Generate a mating pool
  selection() {
    // Clear the array
    this.matingPool = [];
    let totalFitness = 0;
    for (let i = 0; i < this.population.length; i++) {
      totalFitness += this.population[i].fitness; // we add all the pick (fitnessess) together
    }
    console.clear();
    // Based on fitness, each member will get added to the mating pool a certain number of times
    // a higher fitness = more entries to mating pool = more likely to be picked as a parent
    // a lower fitness = fewer entries to mating pool = less likely to be picked as a parent
    for (let i = 0; i < this.population.length; i++) {
      let fitness = map(this.population[i].fitness, 0, totalFitness, 0, 1);
      let n = floor(fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
      console.log(i + " is represented: " + n )
      for (let j = 0; j < n; j++) { // and pick two random numbers
        this.matingPool.push(this.population[i]);
      }
    }
  }

  // Create a new generation
  generate() {
    // Refill the population with children from the mating pool
    // console.clear()
    for (let i = 0; i < this.population.length; i++) {
      let a = floor(random(this.matingPool.length));
      let b = floor(random(this.matingPool.length));
      let partnerA = this.matingPool[a];
      let partnerB = this.matingPool[b];
      let childDna = partnerA.dna.crossover(partnerB.dna);
      let child = new Individual(childDna, i);
      child.dna.mutate(this.mutationRate);
      this.population[i] = child;
      this.population[i].calcPhenotype();
    }
    this.generations++;
  }

  // if selected by user, the fitness increases
  pick(n){
    this.population[n].fitness++;
  }

  // debug(){
  //   this.showInfo = !this.showInfo;
  // }

  // draw trees spread out on screen
  draw(){
    for(let i = 0; i < this.population.length; i++)
    {
        this.population[i].draw(0,0); //just drawing the trees
        if (this.showInfo) this.population[i].printPhenotype();
        translate(width/this.population.length, 0);
    }
  }
}