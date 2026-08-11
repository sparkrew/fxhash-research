class Individual {
  constructor(dna, ID) {
    this.dna = dna;
    this.fitness = 1; // could change to 0 if we want to be more strict
    // this.m = 1;
    // this.n1 = 1;
    // this.n2 = 1;
    // this.n3 = 1;
    // this.ab = 1;
    // this.Hue = 1;
    this.ID = ID;

        //sets the seed from value passed from fxhash
  //     randomSeed(hashseed); //each coin will look different, but stay the same across minters
  // noiseSeed(hashseed); //each coin will look different, but stay the same across minters
    // this.seed =hashseed;
    // this.noiseseed = hashseed;
    // this.randomSeed(hashseed);
    // this.noiseSeed(hashseed);

    this.calcPhenotype(); // initialise variables above, based on gene values
  }

  calcPhenotype() {
    //decode the genes into variables for drawing
    this.mm = map(this.dna.genes[0], 0, 1, 0, 20);
    this.m = 2 * round(this.mm);
    this.n1 = map(this.dna.genes[1], 0, 1, 7, 10);
    this.n2 = map(this.dna.genes[2], 0, 1, 0, 10);
    this.n3 = map(this.dna.genes[3], 0, 1, 0, 10);
    this.ab = map(this.dna.genes[4], 0, 1, 1, 2);
    this.Hue = map(this.dna.genes[5], 0, 1, 0, 360);
    this.eyeNumm = map(this.dna.genes[6], 0, 1, 1, 4);
    this.eyeNum = floor(this.eyeNumm);
    this.eyeAnglee = map(this.dna.genes[7], 0, 1, 0, 360);
    this.eyeAngle = parseFloat(this.eyeAnglee.toFixed(1));
    this.eyeR = this.dna.genes[8];
    this.eyeSize = map(this.dna.genes[9], 0, 1, 20, 30);
    this.virusStroke = map(this.dna.genes[10], 0, 1, 1, 4);
    this.hairNumm = map(this.dna.genes[11], 0, 1, 10, 50);
    this.hairNum = floor(this.hairNumm);
    this.hairLength = map(this.dna.genes[12], 0, 1, 0.1, 0.5);
    this.vibrancy = map(this.dna.genes[13], 0, 1, 50, 1200);
    this.frecklesNum = map(this.dna.genes[14], 0, 1, 5, 50);
  }

  //the actual superformula
  r(theta, a, b, m, n1, n2, n3) {
    return pow(
      pow(abs(cos((m * theta) / 4.0) / a), n2) +
        pow(abs(sin((m * theta) / 4.0) / b), n3),
      -1.0 / n1
    );
  }

  organism() {
    push();
    randomSeed(hashseed);
    noiseSeed(hashseed);
    //translate(width/5, -height / 2);
    strokeWeight(this.virusStroke);

    //draw the superformula
    if (this.Hue > 180) {
      this.strokeHue = this.Hue - 180;
    } else {
      this.strokeHue = this.Hue + 180;
    }
    stroke(this.strokeHue, 100, 100);
    fill(this.Hue, 80, 80);
    beginShape();

    for (let theta = 0; theta <= 360; theta += 0.1) {
      let rad = this.r(
        theta,
        this.ab,
        this.ab,
        this.m,
        this.n1,
        this.n2,
        this.n3
      );
      if (theta > 180) {
        this.vibrancyAngle = theta;
      } else {
        this.vibrancyAngle = 360 - theta;
      }
      this.noiseLevel = noise(
        this.vibrancyAngle / 400,
        frameCount / this.vibrancy
      );
      let x = rad * cos(theta) * 50 * this.noiseLevel;
      let y = rad * sin(theta) * 50 * this.noiseLevel;
      vertex(x, y);
    }
    endShape(CLOSE);

    this.hair();
    this.freckles();
    this.eye();
    pop();
  }

  draw(x, y) {
     
    
    
    push();
    
    this.organism();
    pop();
    fill(255);
    // text("virus " + this.ID + ": " + this.fitness, -70, -10);
  }

  hair() {
    push();
    stroke(this.strokeHue, 100, 100);
    strokeWeight(random(1, 3));

    for (var theta = 0; theta < 360; theta += 360 / this.hairNum) {
      if (theta > 180) {
        this.vibrancyAngle = theta;
      } else {
        this.vibrancyAngle = 360 - theta;
      }
      this.noiseLevel = noise(
        this.vibrancyAngle / 400,
        frameCount / this.vibrancy
      );

      let hLength = random(this.hairLength - 0.1, this.hairLength + 0.3);
      let hairX1 =
        this.r(theta, this.ab, this.ab, this.m, this.n1, this.n2, this.n3) *
        cos(theta) *
        50 *
        this.noiseLevel;
      let hairY1 =
        this.r(theta, this.ab, this.ab, this.m, this.n1, this.n2, this.n3) *
        sin(theta) *
        50 *
        this.noiseLevel;
      let hairX2 =
        (hLength + 1) *
        this.r(theta, this.ab, this.ab, this.m, this.n1, this.n2, this.n3) *
        cos(theta) *
        50 *
        this.noiseLevel;
      let hairY2 =
        (hLength + 1) *
        this.r(theta, this.ab, this.ab, this.m, this.n1, this.n2, this.n3) *
        sin(theta) *
        50 *
        this.noiseLevel;
      curve(
        hairX1 - random(5, 15),
        hairY1 - random(5, 15),
        hairX1,
        hairY1,
        hairX2,
        hairY2,
        hairX2 + random(5, 15),
        hairY2 + random(5, 15)
      );
    }
    pop();
  }
  
  freckles(){
    for(var i = 0 ; i < this.frecklesNum; i++){
      fill(this.strokeHue,60,60,random(0.3,0.7));
      noStroke();
      circle(random(-40,40) * this.noiseLevel,random(-40,40)* this.noiseLevel,random(1,10)* this.noiseLevel);
    }
  }

  eye() {
    for (var i = 0; i < this.eyeNum; i++) {
      let eyeX =
        (this.eyeR - random(1)) *
        this.r(
          this.eyeAngle + i * 90,
          this.ab,
          this.ab,
          this.m,
          this.n1,
          this.n2,
          this.n3
        ) *
        cos(this.eyeAngle + i * 90) *
        50 *
        this.noiseLevel;
      let eyeY =
        (this.eyeR - random(1)) *
        this.r(
          this.eyeAngle + i * 90,
          this.ab,
          this.ab,
          this.m,
          this.n1,
          this.n2,
          this.n3
        ) *
        sin(this.eyeAngle + i * 90) *
        50 *
        this.noiseLevel;
      noStroke();
      fill(255);
      let R = this.eyeSize + random(3);
      let eyeDirection = random(360) * this.noiseLevel;
      circle(eyeX, eyeY, R * this.noiseLevel);
      fill(this.strokeHue, 80, 80);
      circle(
        eyeX + (R / 4) * cos(eyeDirection) * this.noiseLevel,
        eyeY + (R / 4) * sin(eyeDirection) * this.noiseLevel,
        (R / 2) * this.noiseLevel
      );
    }
  }

  // printPhenotype(){
  //     push();
  //     colorMode(RGB);
  //     fill(0);
  //     rect(-85, -212, 50, 80);
  //     fill(255);
  //     text("Virus " + this.ID + ": \nth:" + int(this.m)
  //         + "\nw:" + int(this.n1)
  //         + "\nl:" + int(this.n2)
  //         + "\nthV:" + int(this.n3)
  //         , -80, -200);
  //         pop();
  //   }
}
