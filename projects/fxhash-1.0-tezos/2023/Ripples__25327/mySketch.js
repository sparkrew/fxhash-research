// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

let time = 0;
let time_inc = 1.1;

//----

// NOISE & CLOUD GENERATION
let p = 0.01; // Paramètre du bruit


let numCircles = 10; // How many objects

// noiseCircle
let num_points = 1000;
let step_points = 0;

let circle_noise_values = [num_points];
let circles = [numCircles]; 

// PRELOAD
// Very important for the final fxHash to work
function preload()
{
// fxHash
let seed = 10000 + fxrand() * 9999999;
randomSeed(seed);
noiseSeed(seed);

let width, multiplier;
}



///////////////////////////////////////////////////// SETUP \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function setup() {

  //createCanvas(500, 500);
	
	width = min(windowWidth, windowHeight);
  print(width);
  multiplier = width / 500;

  createCanvas(width, width);
	pixelDensity(2);
	
	
  // Size Adaptation
  strokeWeight(5*multiplier);

  //

  background(0);
  noFill();
  ellipseMode(CENTER);
	
	step_points = TWO_PI/num_points;
  
  circle_noise_values = [num_points];
  //circle_noise();
  
  // Generating the circle with their first size
  for (let i = 0; i < numCircles; i++)
  { 
    let size_init = (i)*(width/numCircles);
    circles[i] = new Circle(size_init);
  }
	
	circle_noise();
}
///////////////////////////////////////////////////// (SETUP) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////// DRAW \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function draw() 
{
	background(0);

	//circle_noise();

		for (let i = 0; i < numCircles; i++) // For every star object 
		{ 
			print(circles[i].size);
			circles[i].move();
			circles[i].seg_noise();
			circles[i].segments_init();
			circles[i].segments();
		}

	//time+= time_inc;
}
///////////////////////////////////////////////////// (DRAW) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



///////////////////////////////////////////////////// FUNCTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function circle_noise()
{
  //float noise_p = map(mouseX, 0, width, 0.1, 0.9);
  //println(noise_p);
  //noiseDetail(8, noise_p);// LP filter
  
  for (let n = 0; n < num_points; n++)
    {
      let theta = n*step_points;
			
      // NOISE LOOP
      
      let diameter = 7; // how big my perlin circle is circling
      let scale = 160; // How much i want all these 2D values to be similar
     
      let xoffX = map(cos(theta), -1, 1, scale, scale + diameter);
      let yoffX = map(sin(theta), -1, 1, scale, scale + diameter);
      
      circle_noise_values[n] = noise(xoffX, yoffX, time/200.0);
    }
    
}


function reset(){
	background(255);
}

function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot

	//if (key === " ") reset(); //to generate variations
}
///////////////////////////////////////////////////// (FUNCTIONS) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



///////////////////////////////////////////////////// CLASS : CIRCLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//------------INITIALISATION-----------------------------------------------------------------
class Circle {

 constructor(size_) // ---------------------------------------------------
{
 this.graylevel = 255;
 this.size = 0;
 
 this.x_circle = [num_points];
 this.y_circle = [num_points];
 
 // Segments (Arc)
 
 this.seg_value = [num_points]; // 0 or 1 depending on the noise
 
 this.seg_start = [num_points]; //
 this.seg_end = [num_points];   //
 
 this.rad_array = [num_points]; // TEST storing radians angle
 
 this.seg_state = 0; // 
 // 0 : only 0s
 // 1 : only 1s (circles)
 // 2 : 0s and 1s (segments)
 
 
    this.size = size_;
    
    for (let n = 0; n < num_points; n++)
    {
      this.rad_array[n] = n*step_points;
    }
  
     
  }// --------------------------------------------------------------------
  

  re_init()
  // Re-initialize some values when the circles are too large
  {
    this.size = 0;
    this.seg_state = 0;
    
    for (let n = 0; n < num_points; n++)
    {
      this.seg_value[n] = -1;
      this.seg_start[n] = -1;
      this.seg_end[n] = 0;
    }
    
    
  }
  
  move()
  // Increase the size
  {
    this.size += round(time_inc);
      
     if (this.size >= width - 1)
       {  
         this.re_init();
       }
     // "size >= width - 1" because my noise matrix 
     // is calculated between 0 and width-1
  }
  
  
  seg_noise() 
  // Checking the noise value and storing 1 or 0 depending on it
  {  
      let seg_sum = 0;
      
      let thrd_min = 0;  // Thresold at size = 0
      let thrd_max = 0.6;// Thresold at size = width (max)
      
      let threshold = map(this.size,0,width,thrd_min,thrd_max); // 1 at distance 0, 0 at distance max
      
      
      for (let n = 0; n < num_points; n++) /////////
      {
       let noise_value = circle_noise_values[n];

       if(noise_value >= threshold)
       {this.seg_value[n] = 1;} // Getting 1s when noise_value is greater than my thresold
       
       else 
       {this.seg_value[n] = 0;} // Else, I get 0s
       
       seg_sum += this.seg_value[n]; // To find seg_state
      }/////////////////////////////////////////////
      
      if (seg_sum == 0)                   {this.seg_state = 0;} // Only 0s
      else if (seg_sum == num_points)     {this.seg_state = 1;} // Only 1s
      else                                {this.seg_state = 2;} // 0s and 1s
  }
  
  
  segments_init()
  //find the position of the first ascending point, store it into seg_01
  //find the position of ascending & descending points, store them into seg_start & seg_end arrays
  {
    
    
    let seg_01 = -1; // seg_01 : first ascending position
    let seg_01_search = true;
    
    // //!!//
    // Sometimes seg_01 is still -1 !!! It's a problem with index used in array !!
    
    // *
    
    if(this.seg_state == 2) // If there are ascending(s) and descending(s) positions... ////////////////////////////////////
    {
      for (let n = 0; n < num_points; n++) // Finding the position of the first ascending point between 0 and (num_points-2), 
      // //!!// Not sure, but i think the index=-1 problm
      // appear when I have only one "1" (at position n = 0) and the rest are 0s...
      // Even tho I can't really imagine it theoritically for now.
      // So I'll juste add an IF index (and index_p1?) != -1 for the next part
      {
        let n_p1 = (n+1);
        if( n_p1 == num_points){n_p1 = 0;} // If I don't find a 1 until the last cell
        // I'll have to check n = num_points-1 (the last cell) and n+1 = 0 (the first cell, NOT num_points !)
        // IF NOT, i'll have : "ArrayIndexOutOfBoundsException: Index 1000 out of bounds for length 1000"
        
        if(seg_01_search == true && this.seg_value[n] == 0 && this.seg_value[n_p1] == 1)
        {
          seg_01 = (n); // n or (n+1) ???? //!//
          seg_01_search = false;
        }
      }
      // *
         
         
      // **
        
        let seg_start_COUNT = 0; // seg_start array index
        let seg_end_COUNT   = 0; // seg_end array index
      
        for (let n = 0; n < num_points; n++) // 
        {
          this.seg_start[n] = this.seg_end[n] = -1; // Initialising my seg_start and seg_end array at -1 for all cells
          // Then, the ascending and descending positions will be stored into the first cells...
        
          let index =    (n + seg_01    )%(num_points); // I'm circling around my array, but starting at seg_01 instead of 0
          let index_p1 = (n + seg_01 + 1)%(num_points);
          
          //!!//
          // Sometimes index = -1 (maybe because seg_01 = -1 and n = 0)
          
          if(index == -1)
          {
          //println("n : ",n,"- seg_01 : ",seg_01," / index :",index," & index_p1 :",index_p1);
          printArray(seg_value);
          }
          
          // Finding ASCENDING positions
          if( this.seg_value[index] == 0 && this.seg_value[index_p1] == 1)
          {
            this.seg_start[seg_start_COUNT] = index_p1;
            seg_start_COUNT++;
          }
          
          // Finding DESCENDING positions
          else if( this.seg_value[index] == 1 && this.seg_value[index_p1] == 0)
          {
            this.seg_end[seg_end_COUNT] = index;
            seg_end_COUNT++;
          }
        }
       
    }// ** 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
         
  }
  
  
  // Use the seg_start and seg_end arrays to draw arcs
  segments()
  {

    
    this.graylevel = map(this.size,0,width,255,0);
    //this.graylevel = map(this.size,0,width,0,255);

    stroke(this.graylevel);
    
    if (this.seg_state == 2) // If I have 1s and 0s, I have to draw segments / arcs
    {
      for (let n = 0; n < num_points; n++)
      {
        if(this.seg_start[n] != -1 && this.seg_end[n] != -1)
        {
          let angle_start = this.rad_array[this.seg_start[n]];
          let angle_end   = this.rad_array[this.seg_end[n]];
          
          if( (angle_end - angle_start) > 0)
          {
            arc(width/2, height/2, this.size, this.size,  angle_start, angle_end);
          }
          
          else if ( (angle_end - angle_start) < 0)
          {
            angle_start = angle_start - TWO_PI;
            arc(width/2, height/2, this.size, this.size,  angle_start, angle_end);
          }
          
 

        }
      }
    }
    
    else if (this.seg_state == 1)
    {
     this.display_circle(); 
    }
      

  }
  
 
  // If i want to see circles instead of arcs
    display_circle()
  {
    
    this.graylevel = map(this.size,0,width,255,0);
    //this.graylevel = map(this.size,0,width,0,255);
    
    stroke(this.graylevel);
    circle(width/2,height/2,this.size);
  }
  


}