// Glitch Acuarela
// By SantaClaws https://twitter.com/nicu_p_
// 12/13/2022

let g = 0;  
let border = 0;  
let cell_size = 0;  //DON'T EDIT
let cell_factor = 256; //total number of cells including border

let sky; //upper texture
let land; // lower texture
let ruleset1 = [1, 1, 1, 0, 1, 0, 1, 0];//[1, 1, 1, 0, 1, 1, 1, 0];
let ruleset2 = [1, 0, 0, 1, 0, 1, 0, 0];//
let ruleset3 = [1, 0, 1, 1, 1, 0, 0, 0];//[1, 0, 0, 1, 1, 1, 0, 0];[1, 0, 1, 1, 1, 1, 0, 0]
let ruleset4 = [1, 0, 0, 1, 1, 1, 0, 0]
    
let ran_translate = 0; // initializing randoms array
let ran0 = 25; // skew factor left right
let thirds = 3; // rule of thirds
// +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
// PREPARE VARIABLE TO CONTROL PRNG FUNCTIONALITY
let seed = 0; // to hold random seed
//++++++++++++++++++++++++++++++++++++++++++++++++++++


// PRE-LOAD
function preload()  {
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // SET SEED TO CONTROL PRNG FUNCTION
  seed = int(fxrand() * 999999);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
  // Initialize color system
  colorMode(HSB, 360, 100, 100, 100);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
}  


// SET-UP
function setup() {
  setupGrid(1);       
  createCanvas(g,g); 
  background(360,0,100);//100
  //fill(360,0,0);
  //rect(0+border,0+border,g-2*border,g-2*border)
   
}

// +++++++++++++++GENERATE RANDOMS+++++++++++++++++++++++++++++++++++++  

function generate_randoms(){
  if (ran_translate == 0) {
    ran_translate = Array(sky.cells.length);
    for (let t=0; t < sky.cells.length; t++){
      ran_translate[t] = int(random(-ran0,ran0));
    }
    if (ran_translate[1] < 0){      
    thirds = 2
    }    
  }  
}

// +++++++++++++++END GENERATE RANDOMS+++++++++++++++++++++++++++++++++++++

// DRAW
function draw() {
  // ++++++++++++ DO NOT CHANGE ++++++++++++++++++++++++++
  randomSeed(seed);
  noiseSeed(seed);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  generate_randoms();  
  translate(border,border);  
    
  sky.start()
  //land.start()
  
  // +++++++++++++++DRAW SKY+++++++++++++++++++++++++++++++++++++
  if (sky.generation < sky.cells.length/thirds){
      if (sky.generation > 0){sky.render();}
       
      sky.generate();
      land.render();
      
    // +++++++++++++++DRAW LAND++++++++++++++++++++++++++++++++++ 
    } else {
        
      // GET HISTORY FROM SKY
        if (land.generation == 0){          
          land.generation = sky.generation;
          land.cells = sky.cells;   
        }
      
        if (!land.finished()){
        land.render();
        land.generate();        
        }        
    }
  
  // +++++++++++++++SAVE IMG+++++++++++++++++++++++++++++++++++++
  if (land.finished()){
    print('FINISHED') 
    // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
    i = 0;
    while (i != 1) 
      {
        if ((isFxpreview = true)) {fxpreview(); i = 1;}
      }
    // +++++++++++++++++++++++++++++++++++++++++++++++++++
      
    if (key == 's'){
      
      print('SAVING')
      saveCanvas('Glitch_Acuarela_' + seed, 'png');
      print('saved!!!') 
      noLoop();
    }
    //noLoop();
  }  
  
} // ++++++++++++++++++END DRAW+++++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupGrid(m){
  
  g = min(windowWidth, windowHeight) * m;   
  cell_size =floor(g/cell_factor)
  
  g = cell_size*cell_factor  
  border = 20*cell_size;
  
  sky = new Tex(ruleset1);
  land = new Tex(ruleset2);  
  
  
} // ++++++++++++++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function keyPressed(){  
  if (key == 's' || key == 'S') {
    print('s PRESSED')
    
    setupGrid(5);
    resizeCanvas(g,g); 
    
    background(360,0,100);
    //fill(360,0,0)
    //rect(0,0,g-2*border,g-2*border)
    
    //strokeWeight(g/500);
  }
      
}