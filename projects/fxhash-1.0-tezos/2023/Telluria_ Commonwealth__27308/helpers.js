

// HELPER FUNCTIONS

// Wrap color circle
function hueCircle(c) {
 if(c > 360) return c-360;
 if(c < 0) return c+360;
 return c;
}

// scale width to pixels
function w(val) {
  if (val == null) {return width;}
  return width * val;
}

// scale height to pixels
function h(val) {
  if (val == null) {return height;}
  return height * val;
}

function fh(val) {
  if (val == null) {return width*3/5;}
  return width*3/5 * val;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  //rotate(PI);
  for (let a = PI; a < 3*PI; a += angle) {
    let sx = x + sin(a) * radius;
    let sy = y + cos(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  let size;
  if(windowHeight*5/4 > windowWidth) {
    size = windowWidth;
  } else {
    size = windowHeight*5/4;
  }
  resizeCanvas(size, size*4/5);
}

// build filename
function genFilename(work) {
  let date = new Date().toISOString();
  let splitDate = splitTokens(date, '.T');
  //let filename = work + "_" + splitDate[0] + "_" + splitDate[1] + "_" + seed;
  let filename = work + "_" + seed;
  console.log(filename);
  return filename;
}

// save an image
function mousePressed() {
  //resizeCanvas(8000,4000);
  save(name+".png");
  //resizeCanvas(windowWidth, windowWidth/2);
}

// capitalize first letter
function capitalize(s)
{
  return s && s[0].toUpperCase() + s.slice(1);
}

// gaussian for params
function gaussianRandom(mean=0, stdev=1) {
  let u = 1 - $fx.rand(); // Converting [0,1) to (0,1]
  let v = $fx.rand();
  let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  // Transform to the desired mean and standard deviation:
  return z * stdev + mean;
}

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) { 
       var j = Math.floor($fx.rand() * (i + 1));                 
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }  
   return array;
}

function crescent(x,y,a,r,n) {
  //center of crescent is (x,y)
  //small radius is a (+/-), big radius is r (+/-)
  //n is number of vertices per arc
  
  let delt = PI/n; //delta t (parameter)
  translate(x,y);
  rotate(PI/2);
  beginShape();
  for (let i=0; i<n; i++) {
    vertex(a*Math.sin(delt*i),r*Math.cos(delt*i));
  }
  for (let i=0; i<n; i++) {
    vertex(r*Math.sin(PI-delt*i),r*Math.cos(PI-delt*i));
  }
  endShape(CLOSE);
  rotate(-PI/2);
  translate(-x,-y);
}
