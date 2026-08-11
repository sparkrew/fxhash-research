// < CONFETTIS >
// < Pierre Comet >
// < 01/11/2023 >



// DO NOT EDIT
function b58enc(hashes, n, prefix) {
	var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
	hashes = hashes.map(a => (a + 2**32) % 2**32);
	let alphas = [];
	for (let hash of hashes) {
 alphas2 = [];
		for (let i = 0; i < n >> 2; i++) {
			alphas2.push(alphabet[hash % 58]);
			hash /= 58;
			hash |= 0;
		}
		alphas = alphas.concat(alphas2.toReversed());
	}
	alphas = alphas.concat(new Array(n - (n >> 2) * hashes.length).fill(alphabet[0]));
	return prefix + "".concat(...alphas);
}



// DO NOT EDIT
// Random functions
function rand(low, high) {
	if (low === undefined) {
		low = 0;
		high = 1;
	}
	else if (high === undefined) {
		high = low;
		low = 0;
	}
	return $fx.rand() * (high - low) + low;
}

function randint(low, high) {
	return Math.floor(rand(low, high));
}

const aspect = 9 / 9;

// DO NOT EDIT

let PAD = 1;
let maxDepth = 100
let N = 50
let sourceNodes = []
let x=0,y=0


function setup(){
	createCanvas(1000, 1000);
    // reset fxrand
    $fx.rand.reset()
    $fx.randminter.reset();
    
    randomSeed($fx.rand() * 2**32)
    noiseSeed($fx.rand() * 2**32)
   
    
  frameRate(10)
  sourceNode = new makeNode(null, {x: width/2, y: height/2}, width/10, maxDepth)
  allNodes.push(sourceNode)
  noStroke();
  fill(random(255))
}

function draw(){

  sourceNode.grow()

  background('#e5cbba')
  for(let n = 0; n < allNodes.length; n++){
    allNodes[n].display()
  }
  if(frameCount>50){
    //noLoop()
      
  blendMode(BLEND)
  patchWork(0,0,width,height)  
  addGrain();
  blendMode(OVERLAY)
  fioriture();
  


  }
  // DO NOT EDIT
  if ($fx.context == "capture")
    $fx.preview();
  


}

let minBranchLength = 10;
let maxBranchLength = 500;
let allNodes = []
let allBranches = []
let counter = 50

function makeNode(parentNode, position, radius, depth){
  this.parentNode = parentNode
  this.childrenNodes = []

  this.position = position
  this.radius = radius

  this.depth = depth
  this.id = counter++

  this.attemptGrowth = function(){
    if(this.depth>0){
      let angleFromParent = random(TAU)
      let distFromParent = random(minBranchLength, maxBranchLength)
      let childSize = max(this.radius*0.5,5)

      
      let childPosition = {x: this.position.x + distFromParent * cos(angleFromParent), y: this.position.y + distFromParent * sin(angleFromParent)}
      let child = new makeNode(this, childPosition, childSize, this.depth-1)
      let placeable = true

      for(let n = 0; n < allNodes.length; n++){
        if(
          child.intersects(allNodes[n]) || this.boundaryCheck()
          ){
          placeable = false
          return false
        }
      }

      if(placeable){
        allNodes.push(child)
        this.childrenNodes.push(child)
        return true
      }
    }
  }

  this.grow = function(){
    let hasGrown = this.attemptGrowth()
    if(!hasGrown){
      let randChild = random(this.childrenNodes)

      if(randChild){
        randChild.grow()
      }
    }
  }

  this.intersects = function(otherNode){
    let inter = false
    if(
      this.id != otherNode.id &&
      dist(this.position.x, this.position.y, otherNode.position.x, otherNode.position.y) < this.radius/2 + otherNode.radius/2 + 5
    ){
      inter = true
    }
    return inter
  }

  this.boundaryCheck = function(){
    if(
      this.position.x - this.radius < PAD ||
      this.position.x + this.radius > width - PAD ||
      this.position.y - this.radius < PAD ||
      this.position.y + this.radius > height - PAD
    ){
      return true
    }
    return false
  }

  this.display = function(){
    if(parentNode != null){


  const palette = ["#616d8b",
  "#d25b4d",
  "#6e4861",
  "#f2d347",
  "#ab4984",
  "#137f81", 
  "#f17728", 
  "#30bb87",
  "#d25b4d",            
  "#728594",
  "#2B3949",
  "#763409",
  "#AB841B",
  "#ab4984"
]; 
      
   noStroke();  
  fill(palette[int(random(palette.length))]) ;         
  //line(random(width), 0, random(width), height)
    //ellipse(this.parentNode.position.x , this.parentNode.position.y, this.parentNode.radius)
    polygon(random(width) , random(height), this.parentNode.radius*random(4),random(5,10),random(360))
    }
    polygon(random(width), random(height), this.radius*random(5),random(3,5),random(0,360))
  }
}

function polygon(x, y, radius, npoints, rotateAngle) {
  let angle = TWO_PI / npoints;
  beginShape();
  for(let i=0; i< TWO_PI; i=i+angle){
    let sx = x + random(radius) * cos(i+rotateAngle);
    let sy = y + random(radius/2,radius) * sin(i+rotateAngle);
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function fioriture(){
  const colorFioriture = ["#4d908e","#f3722c","#f8961e","#f9844a","#90be6d","#43aa8b","#577590","#277da1","#a3a380","#d6ce93","#d8a48f","#bb8588","#2a9d8f","#f4a261","#e76f51"]
  let choice = int(random(15))
  const mycol = colorFioriture[choice]
  fill(mycol)
  if (rand(1)>0.5){
  blendMode(LIGHTEST);}
  else{blendMode(DARKEST)}
  rect(0,0,width,height)
  blendMode(BLEND);
  noStroke();
  fill('#e5cbba')
  rect(0,0,width,height/30)
  rect(0,height-height/30,width,height)
  rect(0,0,width/30,height)
  rect(width-width/30,0,width/30,height)

  } 


function addGrain(){  
  noLoop();
    loadPixels();
    const z = pixelDensity();
    const pixelsCount = 4 * (width * z) * (height * z);
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = random(random(-10,10));
        pixels[i] = pixels[i] + grainAmount;
        pixels[i+1] = pixels[i+1] + grainAmount;
        pixels[i+2] = pixels[i+2] + grainAmount;
    }
    updatePixels();
}


function patchWork(_x, _y, _w, _h) {

  const palette2 = ["#4d908e",
  "#f3722c","#f8961e","#f9844a","#90be6d","#43aa8b","#577590","#277da1",
  "#a3a380","#d6ce93","#d8a48f","#bb8588","#2a9d8f","#f4a261","#e76f51"
]; 
  let patchColor = color(palette2[int(random(palette2.length))]);
    

  let strokeLength = width/50;
  let strokeSpaceX = width/400;
  let strokeSpaceY = width/400;
  
  let noiseScaleX = 0.01;
  let noiseScaleY = 0.01;
  
    for (let y = 0; y < _h; y += strokeSpaceY) {
      let t = y / _h;
  
      noFill();
      stroke(patchColor,25);
  
      for (let x = 0; x < _w; x += strokeSpaceX) {
  
        let nowX = _x + x;
        let nowY = _y + y;
        let nowStrokeLength = random(0.1, 0.5)* strokeLength;
  
        let rot = noise(nowX * noiseScaleX, nowY * noiseScaleY) * 720.0;
        // nowY += noise(nowX * 0.001) * 600 - 300;
  
        strokeWeight(random(0.2));
  
        push();
        translate(nowX, nowY);
        rotate(radians(rot));
        line(-0.5 * nowStrokeLength, 0, 0.5 * nowStrokeLength,0);
        //point(-0.5 * nowStrokeLength, 0.5 * nowStrokeLength);
        pop();
      }
    }
  }



// DO NOT EDIT
function windowResized() {
	setupCanvas();
	redraw();
}

function keyPressed() {
	let keylow = key.toLowerCase();
	if (keylow == "s")
		save(); //to save screenshot
	else if (keylow >= "1" && keylow <= "7") {
		let pd = keylow - "1" + 1;
		print(`Setting pixelDensity to ${pd}`)
		pixelDensity(pd);
		redraw();
	}
}

  
