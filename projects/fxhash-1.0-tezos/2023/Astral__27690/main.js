  // Déclaration des variables
  let pd = 1.5; // densité de pixels
  let mainCanvas, seed;
  let planets = [];
  let stars = [];
  let auroras = [];

  let angle = 0;
  let zoomSpeed = 0.0004; // Vitesse de dézoom
  let zoom = 1; // Niveau de zoom actuel


  // Paramètres des particules
  let numParticles = 1000;
  let particleSize = 2;
  let particleSpeed = 0.2;
  let particleColor = [240, 240, 170]; // Jaune très léger

  // Paramètres des aurores boréales
  let auroraChance = 1; // Chance d'apparition des aurores boréales


  // Fonction d'initialisation
  function setup() {
    seed = int(fxrand() * 9999999);
    restart();
  }

  function restart() {
    pixelDensity(pd);
    randomSeed(seed);
    noiseSeed(seed);
    const canvasSize = min(windowWidth, windowHeight);
    mainCanvas = createCanvas(canvasSize, canvasSize, WEBGL);

    let numPlanets = floor(random(1, 6)); // Nombre aléatoire entre 1 et 5

    // Création des planètes
    for (let i = 0; i < numPlanets; i++) {
      let radius = random(50, 150);
      let distance = random(100,900);
      let speed = random(-0.02, 0.02);
      let planet = new Planet(radius, distance, speed);

      // Vérification de la distance par rapport aux autres planètes
      let overlapping = false;
      for (let j = 0; j < planets.length; j++) {
        let other = planets[j];
        let d = dist(planet.distance, 0, other.distance, 0);
        if (d < (planet.radius + other.radius - 100)) { // Ajoutez une marge de 50 pour éviter le chevauchement
          overlapping = true;
          break;
        }
      }

      if (!overlapping) {
        planets.push(planet);
      }
    }

    // Création des étoiles (particules)
    for (let i = 0; i < numParticles; i++) {
      let x = random(-width, 1000);
      let y = random(-height, 1000);
      let z = random(-height, height);

      stars.push({ position: createVector(x, y, z) });
    }

     // Création des aurores boréales
    auroras = []; // Réinitialiser le tableau des aurores boréales

    if (random() < 0.3) {
      for (let i = 0; i < 6; i++) {
        let x = random(-width, 1000);
        let y = random(-height, 1000);
        let z = random(-height, height);

        auroras.push({ position: createVector(x, y, z) });
      }

    }

    if (auroras.length === 0) {
      auroras = []; // Vider le tableau des aurores boréales
    }

     // Génération de la couleur aléatoire pour les aurores boréales
    auroraColor = color(random(255), random(255), random(255));


  }

  // Fonction de dessin
  function draw() {
    background(5);

    // Positionnement de la caméra
    let camX = 0;
    let camY = 0;
    camera(camX, camY, (height * 1) / tan(PI / 6), 0, 0, 1, 1, 1, 0);

    // Rotation de la scène
    rotateY(angle);
    angle += 0.002;

   // Dessin des étoiles (particules)
  for (let star of stars) {
  updateParticle(star);
  drawParticle(star);
  }

  // Dessin des aurores boréales
  for (let aurora of auroras) {
  updateParticle(aurora);
  drawAurora(aurora);
  }

  // Dessin des planètes
  for (let planet of planets) {
  planet.update();
  planet.display();
  }
  }

  // Fonction de mise à jour des particules
  function updateParticle(particle) {
  particle.position.x += random(-particleSpeed, particleSpeed);
  particle.position.y += random(-particleSpeed, particleSpeed);
  particle.position.z += random(-particleSpeed, particleSpeed);
  }

  // Fonction de dessin des particules
  function drawParticle(particle) {
  push();
  translate(particle.position.x, particle.position.y, particle.position.z);

  // Calcul de la taille de la particule en fonction du zoom
  let size = particleSize / zoom;

  // Calcul de la couleur de la particule en fonction du zoom
  let color = particleColor.map(c => c * zoom);

  // Dessin de la particule
  noStroke();
  fill(color);
  sphere(size);

  pop();
  }

  // Fonction de dessin des aurores boréales
  function drawAurora(aurora) {
    push();
    translate(aurora.position.x, aurora.position.y, aurora.position.z);

  // Calcul de la taille de l'aurore boréale en fonction du zoom
  let size = 3;

    // Utilisation de la couleur aléatoire pour l'aurore boréale
    stroke(auroraColor);

  // Dessin de l'aurore boréale
  noFill();


  strokeWeight(50);
  beginShape();
  for (let i = 0; i < 360; i += 10) {
  let angle = radians(i);
  let x = size * cos(angle);
  let y = size * sin(angle);
  vertex(x, y);
  }
  endShape(CLOSE);

  pop();
  }

  class Planet {
  constructor(radius, distance, speed) {
  this.radius = radius;
  this.distance = distance;
  this.speed = speed;
  this.angle = random(TWO_PI);
  this.color = color(random(70), random(70), random(70));
  this.hasRing = random() < 0.5; // Probabilité de 50% d'avoir des anneaux
  this.hasVolcanoes = random() < 0.15 && !this.hasRing; // Probabilité de 20% d'avoir des volcans, si pas d'anneaux
  }

  update() {
  this.angle += this.speed;
  }

  display() {
  push();
  rotateY(this.angle);
  translate(this.distance, 0);


    if (this.hasRing) {
      // Dessiner les anneaux
      let ringRadius = this.radius * 1.5;
      stroke(255); // Couleur du contour des anneaux
      noFill();
      rotateX(frameCount * 0.05);
      torus(ringRadius, 15);
    }

   if (this.hasVolcanoes) {
    // Dessiner les volcans
    let numVolcanoes = floor(random(50, 50));
    let volcanoRadius = this.radius * 5;
    let volcanoHeight = this.radius * 0.3;
    let volcanoColor = color(0); // Couleur noire pour le volcan
    let strokeColor = color(255); // Couleur blanche pour le contour
    rotateX(frameCount * 0.005);

    ambientMaterial(volcanoColor); // Utiliser ambientMaterial() avec la couleur noire

    for (let i = 0; i < numVolcanoes; i++) {
      let angle = random(TWO_PI);
      let x = cos(angle) * this.radius * 0.8;
      let z = sin(angle) * this.radius * 0.8;
      translate(x, 0, z);

      stroke(strokeColor); // Définir la couleur du contour comme blanc
      cylinder(volcanoRadius, volcanoHeight);

      translate(-x, 0, -z);
    }
  }

    ambientMaterial(this.color);
    stroke(255); // Couleur du contour de la planète
    sphere(this.radius);
    pop();
  }
  }


  


  // Gestion des événements
  function keyTyped() {
    if (key === "s") {
      save(seed + ".png");
    }


    if (key === "q") {
      // Enlever les étoiles
      stars = [];
    }

    if (key === "d" && stars.length === 0) {
      // Remettre les étoiles seulement s'il n'y a pas d'étoile présente sur le canvas
      for (let i = 0; i < 1000; i++) {
        let x = random(-width, 1000);
        let y = random(-height, 1000);
        let z = random(-height, height);

        stars.push({ position: createVector(x, y, z), color: particleColor });
      }
    }

  if (key === "p") {
      // Mettre en pause l'animation
      isAnimationPaused = true;
      noLoop(); // Arrêter l'exécution continue de la fonction draw()
    }

    if (key === "m") {
      // Reprendre l'animation
      isAnimationPaused = false;
      loop(); // Reprendre l'exécution continue de la fonction draw()
    }
  }

  function windowResized() {
    pd = 1.5;
    restart();
  }


