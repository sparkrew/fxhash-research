// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference


const sp = new URLSearchParams(window.location.search);

///// ADD YOUR CODE BELOW THIS LINE
let tree = [];
let maxTransactions = 15;
let branchLength = 80; // Initial length of the first branch

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.id("my-canvas")
  background(255);

  // Start with the initial trunk of the tree
  let start = createVector(width / 2, height);
  let end = createVector(width / 2, height - branchLength);
  let trunk = new Branch(start, end);
  tree.push(trunk);  // Add trunk to the tree

    for(let i = 0; i < $fx.iteration; i++) {

      makeTree()

      if($fx.iteration > maxTransactions) {
        return;
      }
    }

  

  // Draw all the branches in the tree
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}

// function draw() {
//   background(255);

//   // // Draw all the branches in the tree
//   // for (let i = 0; i < tree.length; i++) {
//   //   tree[i].show();
//   // }
// }

function makeTree() {
  // "Transaction" occurs - add branches to the tree
  let newBranches = [];
  for (let i = 0; i < tree.length; i++) {
    if (!tree[i].finished) { // Only branch off unfinished branches
      // Each branch creates two child branches
      newBranches.push(tree[i].branchA());
      newBranches.push(tree[i].branchB());
      tree[i].finished = true; // Mark this branch as finished
    }
    
  }

  tree = tree.concat(newBranches);
}

// // Simulate transaction by clicking the mouse to grow the tree
// function mousePressed() {
//   // "Transaction" occurs - add branches to the tree
//   let newBranches = [];
//   for (let i = 0; i < tree.length; i++) {
//     if (!tree[i].finished) { // Only branch off unfinished branches
//       // Each branch creates two child branches
//       newBranches.push(tree[i].branchA());
//       newBranches.push(tree[i].branchB());
//       tree[i].finished = true; // Mark this branch as finished
//     }
//   }

//   // Add new branches to the main tree
//   tree = tree.concat(newBranches);
// }

// Branch class to represent each branch in the tree
class Branch {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.finished = false;
  }

  // Method to create the first child branch
  branchA() {
    let dir = p5.Vector.sub(this.end, this.start);
    let angle = -PI / 8;  // Randomize the rotation angle
    dir.rotate(angle); // Rotate by a random angle
    let newLength = branchLength * .6; // Randomize the length
    dir.mult(newLength / dir.mag()); // Adjust branch length
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }

  // Method to create the second child branch
  branchB() {
    let dir = p5.Vector.sub(this.end, this.start);
    let angle = PI / 8;  // Randomize the rotation angle
    dir.rotate(angle); // Rotate by a random angle
    let newLength = branchLength * .6; // Randomize the length
    dir.mult(newLength / dir.mag()); // Adjust branch length
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }

  // Display each branch as a line
  show() {
    stroke(0);
    strokeWeight(2);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
