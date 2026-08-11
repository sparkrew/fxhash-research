/*
 * Matthew Plummer-Fernandez
 * Roots
 */


//// START PARAMS ////
let unit;
let count;
let mods = [];
let noiseScale;
let initNoise;
let side;
let scheme;
let container;
let behaviour;
let extraknotty;
//let pg;


//// SETUP ////




function setup() {
     createCanvas(min(window.innerWidth,window.innerHeight),min(window.innerWidth,window.innerHeight));
  //createCanvas(700, 700);
  
  //pg = createGraphics(1000, 1000);
  pixelDensity(2);
  
  noiseSeed(fxrand());
  
  side = min(window.innerWidth,window.innerHeight);
  //side = 700;
  console.log('side = ' + side);
  
 
  
  // Features
  
  //knottyness
  extraknotty = 0;
  let knotFeature = 'No'
  if(random_int(0,10)>8){ //20% extra knotty
    extraknotty =1;
    knotFeature = 'Yes'
  } 
  console.log("extra knotty = " + extraknotty);

  
  // container
  container =1;
  let containerFeature = 'Frame'
  let containerdice = random_int(0,10);
  
  if(containerdice>0 && containerdice<=6){ //60% normal
    container =1;
    containerFeature = 'Frame'
  }else if(containerdice>6 && containerdice<=8){ //20%circle
    container =2;
    containerFeature = 'Circle'
  }else if(containerdice>8 && containerdice<=10){ //20%small square
    container =3;
    containerFeature = 'Smol'
  }
  console.log("container ="+ container);
  
  // behaviour
  behaviour = 1;
  if(random_int(0,10)>6){ //40% behaviour2
    behaviour =2;
  }
  console.log("behaviour ="+ behaviour);
  
  
  // colour scheme
  scheme  = random_int(1,5);
  
  let schemedice = random_int(1,20);
  console.log("schemedice = "+ schemedice);
  
  if(schemedice>0 && schemedice<=5){ //5 blue 25%
    scheme =1;
  }else if(schemedice>5 && schemedice<=9){ //4 grey 20%
    scheme =2;
  }else if(schemedice>9 && schemedice<=11){ //2 white %10
    scheme =3;
  }else if(schemedice>11 && schemedice<=16){ //5 red 25%
    scheme =4;
  }else if(schemedice>16 && schemedice<=20){ //4 ochre 20%
    scheme =5;
  }
  
  console.log("scheme = " + scheme);
  
  let colScheme = ''
  
  if(scheme == 1){
    background(50,50,70); //blue
    colScheme = 'Indigo'
  }else if(scheme == 2){
    background(60,55,55); //grey
    colScheme = 'Charcoal'
  }else if(scheme == 3){
    background(200,200,200); //white
    colScheme = 'Ash'
  }else if(scheme == 4){
    background(160,58,35); //red
    colScheme = 'Rust'
  }else if(scheme == 5){
    background(200,145,65); //ochre
    colScheme = 'Ochre'
  }
  
  //noise
  initNoise = random(35,72);
  schemeNoise = int(initNoise);
  console.log("initNoise =" + initNoise);
  
  let starttop = random_num(side/8, side/8*7);
  let baseThick = random_int(7,8); // this needs to change in relation to image
  let trunks = random_int(1,4);
  let subtrunks = random_int(1,2);
  let yStart = side/8.9;
  console.log("baseThick = " + baseThick);
  
  
  //
  let features = {
     "Scheme":colScheme,
     "Behaviour":behaviour,
     "Container":containerFeature,
     "Extra knotty":knotFeature,
     "Noise":schemeNoise,
  }
  
  console.log(features);
  window.$fxhashFeatures = features;
  
  // adjustments for container 2 and 3
  if(container ==2){
    
    yStart = side/10*1.5;
    starttop = side/2;
    baseThick = random_int(6,7);
    trunks = random_int(3,4)
  }
  
  if(container ==3){
    yStart = side/10*2.1;
    starttop = side/2;
  }
  
  //initial roots
  let index = 0;
  for (let y = 0; y < trunks; y++) {
    for (let x = 0; x < subtrunks; x++) {
      mods[index++] = new Module(
        x+1,
        y+1,
        starttop,
        yStart,
        random_int(1,17)+baseThick, //diameter -to be fixed in relation to image
        initNoise //noiseScale
      );
    }
  }
  
  // begin process in advance
  for (let t = 0; t < 300; t++) {
   for (let i = 0; i < mods.length; i++) {
    mods[i].update();
    mods[i].draw();
  }
    
    if(random()>0.88){
    
    let ms = random_int(0, mods.length-1);
    let tx = mods[ms].x;
    let ty = mods[ms].y;
    let td = mods[ms].diameter;
    let tax = mods[ms].ax;
    let tay = mods[ms].ay;
    let tnoise = mods[ms].noiseScale;
      if(behaviour == 1){
       mods.push(new Module(tax+0.1,tay+0.2,tx,ty,td,tnoise+random_num(0,0.2)));
      }else if(behaviour == 2){
        mods.push(new Module(tax+0.01,tay+0.15,tx,ty,td,tnoise));
      }
    
  } 
    
  } // loop closes
  
}


function draw() {
 
  
  for (let i = 0; i < mods.length; i++) {
    
    if(mods[i].diameter>0.6){
      mods[i].update();
      mods[i].draw();
    }
    
  }
  
  if(behaviour == 1){
  if(random()>0.95 && frameCount < 400){
    
    let ms = random_int(0, mods.length-1);
    let tx = mods[ms].x;
    let ty = mods[ms].y;
    let td = mods[ms].diameter;
    let tax = mods[ms].ax;
    let tay = mods[ms].ay;
    let tnoise = mods[ms].noiseScale;
    mods.push(new Module(tax+0.2,tay,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.3,tay,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.4,tay,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.1,tay,tx,ty,td,tnoise));
    //mods.push(mods[1]);
    //console.log('new');
  }
  }else if(behaviour == 2 ){
    
    if(random()>0.96 && frameCount < 400){
    
    let ms = random_int(0, mods.length-1);
    let tx = mods[ms].x;
    let ty = mods[ms].y;
    let td = mods[ms].diameter;
    let tax = mods[ms].ax;
    let tay = mods[ms].ay;
    let tnoise = mods[ms].noiseScale;
    mods.push(new Module(tax+0.04,tay,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.06,tay,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.08,tay+0.02,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.12,tay+0.02,tx,ty,td,tnoise));
    mods.push(new Module(tax+0.16,tay,tx,ty,td,tnoise));
    }
      
  }
  
    
  if(frameCount > 1200){
    noLoop();
  }
  
  
  
}


function random_num(a, b) {
    return a+(b-a)*fxrand()
  }

function random_int(a, b) {
  return Math.floor(random_num(a, b+1))
}

class Module {
  constructor(actx, acty, x, y,diamorig, noiseScale) {
    this.xOff = 0;
    this.yOff = 0;
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.unit = 120;
    this.xDir = 1;
    this.yDir = 1;
    this.ax = actx;
    this.ay = acty;
    this.noiseScale = noiseScale;
    
    this.startposX = random_num(-2,2);
    this.startposY = 0;
    this.diamorig = diamorig;
    this.diameter = this.diamorig;
    
    this.revx = 1;
    this.revy = 1;
    
    this.yup=0;
      
  }

  // Custom method for updating the variables
  update() {
    
    let angle = this.ax*this.ay*noise(this.x/this.noiseScale, this.y/this.noiseScale)/noise(this.unit/this.noiseScale);
    
    this.xDir = cos(angle);
    this.yDir = sin(angle);
    
    if(this.y+this.diameter>= side/10*9){
      this.y = this.y-1;
      this.yup =0.3;
      
    }
    
    this.x = this.x + (1 * this.xDir * this.revx*random_num(0.95,2.3));
    this.y = this.y + (1 * this.yDir * this.revy)+0.9-this.yup;
  
    
    //  bit that keeps it inside    
    if(container == 1){ //square
    
    if(this.x-this.diameter<side/10 || this.x+this.diameter>=side/10*9){
      this.revx = this.revx *-1;
    }
    if(this.y<side/10 || this.y+this.diameter>=side/10*9){
      this.revy = this.revy *-1;
    }
    if(this.y+this.diameter> side/10*9){
      this.y = this.y -1;
      this.yup =0.6;
    }
      
    }else if(container == 2){ //circle
      this.yup =0.5;
      if(this.isInside(side/2,side/2,side/10*4,this.x,this.y)==false){
        this.revx = this.revx *-1;
        this.revy = this.revy *-1;
                
        if(this.y>side/2){
        this.y = this.y - this.diameter;
        this.yup =0.8;
        }
      }
           
    }else if(container == 3){ //small square
      
      if(this.x-this.diameter<side/10*2 || this.x+this.diameter>=side/10*8){
      this.revx = this.revx *-1;
    }
    if(this.y<side/10*2 || this.y+this.diameter>=side/10*8){
      this.revy = this.revy *-1;
    }
    if(this.y+this.diameter> side/10*8){
      this.y = this.y -1;
      this.yup =0.6;
    }
      
    }
    
    
  }
  
  isInside(circle_x, circle_y, rad, x, y){
     
    // Compare radius of circle with
    // distance of its center from
    // given point
     
    if ((x - circle_x) * (x - circle_x) +
        (y - circle_y) * (y - circle_y) <= rad * rad)
        return true;
    else
        return false;
  }
  
  shap(sx,sy,wi,he){
    push();
    translate(sx,sy);
    rotate(PI/1.5);
    for (let i = 0; i < 3; i ++) {
    ellipse(0, wi/20, wi, he*1.5);
    rotate(PI/1.5);
  }
    pop();
    
  }

  // Custom method for drawing roots
  draw() {
    
    //Colours
    let shadc = color(0,0,0);
    let c = color(0,0,0);
    let variance = random_num(0.05, 1);

  
      
    if(scheme == 1){ //bluegray
      shadc = color(0,0,50,90);
      let noisy = random_int(0,20);
      let rred = int(map(abs((this.diameter)), 0, this.diamorig, 30, 10));
      let ggreen = int(map(abs((this.diameter)), 0, this.diamorig, 6, 2));
      let bblue = int(map(abs((this.diameter)), 0, this.diamorig, 6, 2));
      c = color(rred+noisy, ggreen+noisy, bblue+noisy);
      
      
    }else if(scheme == 2){ //grey
      shadc = color(0,0,15,220);
      //shadc = color(0,0,50,90);
      let noisy = random_int(0,20);
      let rred = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let ggreen = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let bblue = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      c = color(rred+noisy, ggreen+noisy, bblue+noisy);
      
      
    }else if(scheme == 3){ // white
      shadc = color(0,0,15,130);
      //shadc = color(0,0,50,90);
      let noisy = random_int(0,20);
      let rred = int(map(abs((this.diameter)), 0, this.diamorig, 2, 30));
      let ggreen = int(map(abs((this.diameter)), 0, this.diamorig, 2, 32));
      let bblue = int(map(abs((this.diameter)), 0, this.diamorig, 2, 32));
      c = color(rred+noisy, ggreen+noisy, bblue+noisy);
    }
    
    else if(scheme == 4){ //redish
      shadc = color(80,0,0,90);
      let noisy = random_int(0,20);
      let rred = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let ggreen = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let bblue = int(map(abs((this.diameter)), 0, this.diamorig, 30, 10));
      c = color(rred+noisy, ggreen+noisy, bblue+noisy);
    }
    
    else if(scheme == 5){ //gold
      shadc = color(70,30,0,80);
      let noisy = random_int(0,20);
      let rred = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let ggreen = int(map(abs((this.diameter)), 0, this.diamorig, 10, 2));
      let bblue = int(map(abs((this.diameter)), 0, this.diamorig, 30, 15));
      c = color(rred+noisy, ggreen+noisy, bblue+noisy);
    }
    
    fill(shadc);
    //shadow shape
    this.shap(this.x+this.startposX+(7*(this.diameter/30)), this.y+this.startposY, this.diameter+variance/this.diamorig, this.diameter+variance);
    
    
    //newlight
    strokeWeight(map(1,0,1000,0,side)); //attempt to scale strokeWeight
    stroke(255,255,255,70);
    fill(255,255,255,70);
    if(scheme == 5){
      stroke(255,245,225,70);
      fill(255,245,225,70);
    }
    // note: will the 7 scale?
    this.shap(this.x+this.startposX-(7*(this.diameter/30)), this.y+this.startposY, this.diameter, this.diameter+variance);
    
    //coloralgo
    stroke(c);
    fill(c);
    this.shap(this.x+this.startposX, this.y+this.startposY, this.diameter+variance, this.diameter+variance);
    noStroke();
    
    
    //shrink root tip
    if(this.diameter>0.1){
      this.diameter = this.diameter - 0.015;
    }
    //feature
    if(extraknotty == 1 ){
       this.noiseScale = this.noiseScale *0.9996;
     }
    
  }
}

//save the image when you press 's'
function keyPressed() {
  if (key == 's'){ 
    save( "root_"+Date.now()+".png");
   }
  if (key == '/'){ 
    saveFile();
   }
  
}

function saveFile() {
  
  let essay=
      
`
Root: hashing out the concept of regenerative art

The Tezos ecosystem has become renowned for more experimental tokenised artworks. Hic Et Nunc may have temporarily closed in November, but blockchain and open-source principles lived up to their promise, accelerating a wider ecology of tezos-based marketplaces and tools to emerge, mostly initiated by artists and technologists that started out on HEN. One of these was fxhash. 

Fxhash was initiated in late 2021 by a generative artist that goes by the name Ciphrd, from Lyon, France. Fxhash is designed for and around the artistic practice of generative art, supporting the process of generating randomised outputs for buyers to mint upon purchase, resulting in unique artworks within a collection of similar-but-different outputs. The concept is similar to Artblocks, an Ethereum-based project that pioneered the minting of generative artworks and has attracted new audiences and collectors to the artform. The tezos-based fxhash is still in ‘beta’, an evolving work-in-progress that has made it both more inviting for newcomers and hands-on, but also prone to opportunistic scams and gaming along the way. The bumpy road never-the-less has started to take a more stable trajectory, and aesthetic and conceptual trends are emerging from its community of artists. 

Many works on fxhash pay tribute to and recreate the common tropes of early generative art such as grids, patterns, and minimalist compositions of shapes, but go further in recreating the pen strokes and even the texture of paper of early plotter print-outs. The artist Yazid for example, is transparent in sourcing ideas from early algorists such as Vera Molnar and Grace C. Hertlein in his series Ode to Random and Hashed Cities respectively. Hashed Cities is a set of cross-hatched, overlapping rectangles that suggest a cityscape of skyscrapers. I am purposely focusing on the aesthetic qualities of generative art here, but a nuanced discussion should also reflect on ideas carried over through coding practices. Many of the artworks on fxhash are produced with P5.js – a javascript implemention of Processing. Essentially, the works on fxhash are mini-websites often running JS scripts. The P5.js module doesn’t inherently reproduce the texture of pens and paper, so Yazid and others often craft these artefacts by clustering thousands of small circles closely together, that to the human eye appear to be the grain of their lines and shapes. By adding noise and randomised imperfections to the canvas, sometimes through processing the image through shaders, fxhash artworks tend to eschew the cleanliness of vector graphics, nostalgically simulating the materiality of physical substrates.

This paradoxical appreciation for material qualities extends to other emergent themes, notably an appreciation for cities, landscapes, or celestial bodies, that range from abstract representations to detailed illustrations all created with code. The popularity of standout collections helps further establish the themes they engage with, because other artists and coders often try to appeal to collectors with similar works. One collection in particular was Zancan’s Garden, Monoliths – algorithmically and densely populated fields of grasses and wildflowers, interrupted by monolithic rocks – originally designed for the artist’s pen plotters to draw. The artwork immediately had the qualities I had been looking for in generative art – artworks that felt contextualised and illustrative of ecological systems, without claiming that nature is somewhat reducible to code. Zancan’s gardens appear self-willed and semi-wild, with the subtle reminder of human intervention through the appearance of sculpted stones. Looking at the work is like looking through the artist’s close observations of how plants live and thrive in dense communities. Algorithms here help us illustrate the complexity of these communities, that would otherwise be hard to capture. Code here rescues the prairie from its more typical representation in art as a green carpet with specks of colour, in favour of environmental realism. 

Zancan’s series has sparked an uptake in this form of generative art – perhaps the beginnings of what we may become a subdomain we could call ‘regenerative art’. By extending the name for the art practice with a ‘re’, we summon the term ‘regenerative’ – a word now often used to describe more-than-human ecologies that thrive in perpetuity. Regenerative agriculture is the practice of designing food-bearing ecosystems that are productive by natural means, encompassing both permaculture and forest gardens. These practices urgently need to be mainstreamed, and perhaps it will be the task of regenerative artists to help illustrate and promote complex and beautiful ecologies where humans and non-humans can coexist and understand how cohabitation is not only possible, but abundantly productive towards our mutual survival. Code here becomes a tool for simulating complex assemblages and interconnections between species, and how they share not only space but scarce resources such as nutrients and water.

In Ciphrd’s own work, the simulation of ecological systems is focused on a different scale – the microscopic. In his latest series, Ethereal Microcosm, thousands of agents interact in systems where patterns emerge. It is an approach inspired by a scientific research paper written by Jeff Jones, and the artwork of Sage Jenson. This more advanced form of Conway’s ‘game of life’ results in real-time dynamics and formations. This too, could present another contribution to what could be ‘regenerative art’ – real-time pseudo-simulations that illustrate interactions between organisms – again vital for an appreciation of otherwise poorly understood factors of ecological systems. For example, ecologists are increasingly understanding the symbiotic relationships between plants and mycorrhizal fungi as crucial for soil and plant health. Plants can even share nutrients with one-another through these underground networks. Ciphrd’s code feels like the closest we may get to seeing these dynamics in practice, possibly having to indulge in more sped-up and colourful recreations of mycelium doing its thing, but enlightening audiences with the same magical qualities found in natural systems that the code is inspired by. Of course, using code in this way is nothing new considering the widespread use of Perlin noise and fractals to recreate mountains, valleys, and rivers, in everything from CGI films to videogames, however regenerative art would be more specifically contextualised by the turn towards ecological solutions to the climate crisis, as well as more recent research and understandings of interspecies survival and more-than-human symbiotic conviviality. 

In my own series ‘root’, which stores this essay within its code, I am interested in pseudo-simulating plant intelligence and root systems. I was inspired by The Revolutionary Genius of Plants: A New Understanding of Plant Intelligence and Behavior, by scientist and author Stefano Mancuso. In the book, Mancuso mentions how important the arts are for the study and understanding of plant intelligence, noting how time-lapse photography ‘gave botanists a tool to render visible what had been invisible’. He later turns our attention to the root system of a plant – a physical network of continuously advancing apexes to be understood as ‘tiny command centers’ each gathering information during growth, deciding the direction of travel. Mancaso describes the root system as a ‘sort of collective brain’ and a ‘distributed intelligence’ over a huge surface composed of hundreds of millions of root apexes. By thinking of root tips as individual yet interconnected and decentralised agents, roots are closer to swarming social insects, using simple rules to communicate. These swarming root systems have the capacity to sense their surroundings, detecting the faintest signals of water and nutrients, and explore terrain. This is all fascinating, yet Mancaso laments that our lack of techniques to record these root behaviours impedes the progress of research in this field. 

My ‘root’ collection is a simple representation of these ideas. Each root system splinters into more apexes that follow similar trajectories in swarm-like patterns. To illustrate a basic response to their surroundings, each root system is confined to an invisible container that the root tips appear to either inspect or change direction from. The code itself reveals a simplicity to it all, as very basic rules govern the system, and yet more complex shapes and dynamics appear to emerge in their collective operation. The aesthetic is purposefully abstract and minimal to draw the viewer’s attention to the root, and suspend our usual preoccupation with the above-ground elements of a plant. This regenerative art is by no means scientifically accurate, but may help communicate new understandings in science to inspire and reinvigorate more thorough engagements after. I hope this essay embedded into the artwork, is a seed for discussion, debate, ideas, themes, and further interactions with one another, as it is passed around, attached to roots that burrow into our collective thinking and practices. 
 – M Plummer-Fernandez, 4th Feb, 2022. 



`
  
  
  // Split according to nextline characters
  stringList = essay.split("\n");
 
  // Save the strings to file
  save(stringList, "Root_by_Matthew_Plummer-Fernandez_Feb_2022.txt");
}


