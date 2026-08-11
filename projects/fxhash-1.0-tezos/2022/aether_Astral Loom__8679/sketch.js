// "aether:Astral Loom" by Lisa Orth  @lisaorthstudio
// also this is an experiment with leaving my code messy... does it matter?

/*
aether:Astral Loom
Weaving on the astral plane. Lines of transmission. 
Some journeys are straightforward, others yield a multitude of pathways.
Disconnect to interpret.

(As an experiment) the rarity values assigned to this artwork are completely arbitrary, and are in no way connected to the visual output of the minted piece. One might wonder, why have rarity values at all? That's what I ask myself any time I see a value based on rarity attributes instead of viewer aesthetic. 

That being said, I suppose it's up to each person to decide for themselves the value of art...

This artwork was created using p5js.

*/

let random = (a = 1, b = 0) => fxrand() * (b - a) + a
let choose = (dsp) => dsp[Math.floor(random(dsp.length))]

let bg = ['#3C362B', '#FEF0D9', '#3C362B', '#3C362B'];

scales = [-1.25, -1.125, -1, 1, 1.125, 1.25, random(1, 1.25)];

let fScale = choose(scales);

bgC = choose(bg);

let Min, Max, what, andOr;

//console.log(fxhash) // the 64 chars hex number fed to your algorithm

// ******** rarity features below

let element_id, bw_id, path_id;

let el = random(100);
	if (el < 10) {
		element_id = 'Aether';
	} else if (el < 30) {
		element_id = 'Earth';
	} else if (el < 60) {
		element_id = 'Fire';
	} else if (el < 90) {
		element_id = 'Air';
	} else {
		element_id = 'Water';
	}

let bw = random(100);
	if (bw < 5) {
		bw_id = 'Infra-Low (<.5HZ)';
	} else if (bw < 10) {
		bw_id = 'Delta Waves (.5 to 3 Hz)';
	} else if (bw < 25) {
		bw_id = 'Theta Waves (3 to 8 Hz)';
	} else if (bw < 40) {
		bw_id = 'Alpha Waves (8 to 12 Hz)';
      	} else if (bw < 45) {
		bw_id = 'Gamma Waves (38 to 42 Hz)';
	} else {
		bw_id = 'Beta Waves (12 to 38 Hz)';
	}

let pw = random(100);
	if (pw < 15) {
		path_id = 'Left Hand';
	} else if (pw < 40) {
		path_id = 'Right Hand';
	} else if (pw < 75) {
		path_id = 'Narrow';
	} else if (pw < 85) {
		path_id = 'Flexible';
      	} else if (pw < 95) {
		path_id = 'Collapsing';
	} else {
		path_id = 'None';
	}

let iw = random(100);
	if (iw < 50) {
		in_id = 'Etheric';
	} else if (iw < 30) {
		in_id = 'Causal';
	} else {
		in_id = 'Astral';
	} 

window.$fxhashFeatures = {
  Element: element_id,
  Wavelength: bw_id,
  Assignment: path_id,
  Inception: in_id,
}

// ******* end rarity features above

function setup() {
  
  w = min (windowWidth, windowHeight);
  m = w
  createCanvas (w*0.75, w, WEBGL);
  let cSchema;
  noLoop();
  
  slate = color('#3C362B')  // SLATE GREY
  cream = color('#FEF0D9')  // LIGHT CREAM
  vRed = color('#FF4106')   // VINTAGE RED
  turq = color('#12A9BD')   // TURQUOISE
  sbY = color('#F0BB01')    // SCHOOL BUS YELLOW  
  purp = color('#a571b6')   // SUBTLE PURPLE
  gngr = color('#918f87')   // LT GREENISH GREY also A69E83
  brown = color("#8B5A05")  // brown
  dGrey = color("#666666")  // dark grey
  lGrey = color("#999999")  // light grey
  
}

function draw() {
  
  // picks added lines or not, 0 is not, 1 is yes //
//let andOr = [0, 0, 0];
  let andOr = [0, 1, 1];
  what = choose(andOr);
//console.log('min or max', what);
  
  let rotations = [0, HALF_PI, PI, PI+HALF_PI, TWO_PI];
  let wR = choose(rotations);
//console.log('rotations', wR);
  
  rotate(wR);
  
  strokeWeight (random(0.25, 1));
  
  //translate(-w/2, -w/2); // classic fix web gl translate
  
    translate(0, -250);
  //translate(-400/2, -400);//this repositions from WEBGL  interesting as well 
  // ******* not sure should keep the more move or not
  let moreMove = random(-width/4, width/4);
  //translate(moreMove, 0);
  //console.log('moreMove', moreMove);
  //translate(random(-width/2, width/2), 0);
  // ******* keep the above?

//background('#FEF0D9');
//background(choose(bg));
  background(bgC);
  let palette = [];
  let sy = height / (fxrand() * 5 + 1); //4 + 1 columns < - - > frombs
  let sx = width / (fxrand() * 6 + 1);  //5 + 1 notat frombs
  let c = width;
  
  for (let y = 0; y < c - 1; y = y + sy) {
  let j = 6;
    
    cSchema = [slate, cream, vRed, sbY, dGrey, lGrey];  
  //cSchema = [slate, cream, vRed, turq, sbY];   
    
    let colGradp = floor(fxrand() * (cSchema.length - 2 ) + 3);
    while (colGradp-- > 0) { 
      palette.push(cSchema[colGradp]);
    } 
      
    for (let x = 0; x < c; x = x + sx) {
      palette.unshift(palette.pop());
      gradLines(x, y, sx, sy, palette[1], palette[0], 0);
    }
     if (y < m / random(1,5) - sy) {
      sx = sx / 5;
    } else {
      sx = sx * 5;
    }    
  } 
  // ****************************************** testingPos
  /*
  push();
  translate(-400, -150);
  
  stroke('lime');
  strokeWeight(2);
  //rect(0, 0, 800, 800);
  pop();
  */
   // ****************************************** 
  }

    // no RD elements below in function, call above
    function gradLines(x, y, m, h, c1, c2, axis) {
      
    scale(fScale);
    //console.log(fScale);
    noFill();
    for (let z = 0; z < m; z = z + 0.25) {
    let v = 1 - cos (3 / z * m);
    stroke(lerpColor(color(c2), color(c1), v*3))
    //line(x + z, y, x + z, y + h); // bsLines
    line(x - y, y * z, x / z * PI, y - h); //too chaotic + blanks THIS IS OG THIS VERSION
      
// no blanks yo
// picks added lines or not, 0 is not, 1 is yes //
//  let andOr = [0, 0, 1];
//  what = choose(andOr);
//  console.log('min or max', what);
      
      if (what == 1) {
        //stroke('lime');
        line(y - x, y / z, x * z * PI, y + h); //variation
      } else {
        //stroke ('lime');
        line (x, y, x * z * PI, y + h); //var option 2b
      //line (x, z, x * z * PI, y + h); //var option 2a
      }
    }
}