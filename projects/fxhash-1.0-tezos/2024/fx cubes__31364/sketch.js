/////////////////////////////////////////////////////////
// Adapted from @drosman example found on p5js:
// https://editor.p5js.org/drosman/sketches/nUOH9ZHz7
/////////////////////////////////////////////////////////
// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference
/*
    // FUNCTIONS
    $fx.rand()          // generates a random number based on the transaction hash of the mint
    $fx.randminter()    // generates a random number based on the minter's wallet address

    $fx.rand.reset()    // resets the $fx.rand() function
    $fx.randminter.reset()  // restes the $fx.randminter() function

    // VARIABLES
    $fx.hash            // the hash of the mint transaction
    $fx.minter          // the wallet address of the minter
    $fx.iteration       // the iteration of the mint (starts at 1)

*/

let cubes = [];
// let amountPerRow = 4;
let amountPerRow = $fx.iteration;
let size;

const sp = new URLSearchParams(window.location.search)

function setup() {
  //let cnv = createCanvas(600, 600, WEBGL);

    // uncomment this line for a fullscreen canvas
    let cnv = createCanvas(windowWidth, windowHeight, WEBGL); 
  
  // assign an id selector to our canvas. this is important later for when fx(hash) captures a preview image of your sketch
    cnv.id("my-canvas");
  
  size = int(width/amountPerRow);

  // Add Cube objects to the array as grid on canvas
  for (let x = -width/2; x <= width; x += size) {
    for (let y = -height/2; y <= height; y += size) {
    // Calculate random depth
    let z = $fx.rand()*200-100;

    // Create a new Cube object.
    let cube = new Cube(x, y, z, size, 255);

    // Add the Cube to the array.
    cubes.push(cube);
    }
  }
}

function draw() {
  pointLight(255, 255, 255, 0, 0, 0);
  
  background(0);
  for (let i = 0; i < cubes.length; i++) {
    cubes[i].display();
    cubes[i].move();
  }
}

class Cube {
  constructor(x, y, z, size, colour) {
    this.x = x;
    this.y = y;
    this.zstart = z;
    this.z = z;
    this.size = size;
    this.colour = colour;
  }
  
  display() {
    push();
    translate(this.x,this.y,this.z);
    fill(this.colour);
    box(this.size);
    pop();
  }
  
  move() {
    this.z = 200 * sin(radians(frameCount + this.zstart));
  }
  
}