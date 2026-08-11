// NAME YOUR PROJECT
// < project name>
// < project author>
// < date >


// +++++++++++++++++++ RECOMMENDATION ++++++++++++++++
// PREPARE A RESIZEABLE GRID SYSTEM
// It is strongly recommended that you use a dimensionless approach from the start
// You will see how this is used later in the code
let g = 0;  // will hold size of grid
let c = 0;  // will hold grid cell
let q = 0;  // will hold grid micro-cell
let v = 0;  // will grid nano-cell
//++++++++++++++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
// PREPARE VARIABLE TO CONTROL PRNG FUNCTIONALITY
let seed = 0; // to hold random seed
//++++++++++++++++++++++++++++++++++++++++++++++++++++


// PRE-LOAD
function preload()
{
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // SET SEED TO CONTROL PRNG FUNCTION REQUIRED BY fx(hash)
  seed = int(fxrand() * 999999);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++


  // +++++++++++++++++++ RECOMMENDATION ++++++++++++++++
  // Initialize color system
  colorMode(HSB, 360, 100, 100, 100);
  // you will have finer control over color in your work if you use the HSB model from the start
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
}





var fr=60;
var t=160;




// SET-UP
function setup()
{
  // Initialize Grid System & Setup Canvas
  // the createCanvas and background statements are a standard part
  // of any p5.js project - the grid system is a recommendation
  setupGrid(1);       // use explained in the definition of the function
  createCanvas(g,g);  // see the function setUpGrid below to understand the importance
                      // of using a variable here rather than a fixed numeral
 // background(10,0,100,100); // set color of background; I'm using white



    colorMode(HSB,g,100,100,255);
      frameRate(60);
      pixelDensity(9.0);
      noStroke();
      noSmooth();
      blendMode(SCREEN);
      noLoop();
        
    
}

// DRAW
function draw()
{
  // ++++++++++++ DO NOT CHANGE ++++++++++++++++++++++++++
  // Initialize PRNG environment required by fx(hash)
  randomSeed(seed);
  noiseSeed(seed);
  // DO MOT CALL ANY RANDOM FUNCTIONS PRIOR TO THESE TWO LINES!
  // You will see code in which these lines are placed in the setup function.
  // They need to go here in the draw function so that the resize and save functionality
  // given below work properly.  This will also be true of any code you
  // write that redraws the canvas.  Having these two statements in the draw
  // function will allow redrawing to occur while maintaining the
  // deterministic quality required by fx(hash).
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  

  // all your lovely drawing code goes here

    // fc=frameCount;
    var fc=random(77,3333);
    translate(g/2,g/2);
    rotate(random(0.00,3.14));
    var r=360*sin(fc*PI/fr/2/t);
    var ran1=random(0.5,3.0);
    var ran2=random(40,90);
    var ran3=random(4.0,10.0);
    var ran4=random(4.0,12,0)
    var ran5=random(0,g/2);
   var ran6=random(0,g);
   // var p=1.0;
   var p=v;
    
  clear();
     background(random(1,g),random(80,90),random(0,40),255);
     
    for(i=1;i<g;i++){;
        var icol= map(i,0,g,ran5,ran6);
         fill(icol,100,100,ran2);
         
        rotate(r);

    rect(g/ran3-p*r*sin(i),0,p*ran1,p*r*(cos(r/0.1)));
    rect(g/ran4-p*r*cos(i),0,p*ran1,p*r*(1-cos(r/0.1)));

    }
  

  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // REQUIRED BY FXHASH
  // call fxpreview once confirmation that preview is ready
  i = 0;
  while (i != 1)
    {
      if ((isFxpreview = true)) {fxpreview(); i = 1;}
    }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
  

  // without the following your draw function will continuously loop
  // chances are you don't want that - at least not in the very beginning
  // of your learning curve
  noLoop();
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// PROJECT FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// This is where any code that you want to craft as a repeatable, callable
// module will go.  The Standard Template Functions below provide examples
// of how to declare functions.  I recommend that you  use functions
// liberally to organize your code for readability and ease.


 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// STANDARD TEMPLATE FUNCTIONS - INCLUDE IN ALL PROJECTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupGrid(m)
{
  // m, the value passed into the function, is a multiplier used to scale the
  // canvas for saving hi res output - see the keyPressed function below.
  // The value of m to begin with is 1 - see the call of this function in the
  // setUp function above.

  // g is the variable that controls the size of the canvas.  In this
  // case I am using a square canvas, hence the mininum value of windowWidth and
  // windowHeight is used.

  // using windowWidth and windowHeight to establish the size of your grid allows
  // your canvas to respond to the device being used to view your work.  You will
  // often see work created with a fixed pixel size (e.g 1200 x 1200).  As a
  // collector, I frown on this practice.
  
  // you can read more about buildding dimensionless projects at
  // https://www.fxhash.xyz/article/how-to-create-a-dimensionless-project-with-p5js
  g = min(windowWidth, windowHeight) * m;
  c = g/10;   // grid cell
  q = g/100;  // grid micro-cell
  v = g/1000; // grid nano-cell
  // the point of these divisions of the grid is that if you want
  // 1) to offer a work that scales to the window size of the viewer without any
  //    loss of quality, and
  // 2) produces the same output when given the same seed - a requirement for fx(hash) -
  //    you must specify all x and y positions, diameters, radii, heights and widths, and any other size
  //    information in terms relative to your grid.  Having larger and smaller increments
  //    ready to work with is handy.  When you think of size, don't forget things like textSize and strokeWeight.
}


// the built-in p5.js random function, when faced with something like random(0, 10)
// will never return a 10.  I find this unintuitive, so when I want a random integer
// that spans the full range of input values, I use the following.  This code was given to me
// and I pass it along to you as extremely useful.
function randomInt(min, max)
{
  return floor(random() * (max - min + 1)) + min;
}


// one of the things I look for as a collector is the ability to save a high resolution
// copy of my collected NFT - a file that would support printing a piece of wall art, for
// example.  This function adds that capability to your work.  When someone presses and s, the
// canvas is resized.  This will inherently redraw your work.  The resized work is then downloaded.
// If you choose not to do  this, you may  remove this function.

                    
                    
function keyPressed()
{
  if (key == 's' || key == 'S')
   {
 //   setupGrid(5);
 //   resizeCanvas(g,g);
    saveCanvas('Geometrail' + seed, 'png');
   }
}

