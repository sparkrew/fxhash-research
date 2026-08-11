

const colorPalettes = [ 
["#0b090a","#161a1d","#660708","#a4161a","#ba181b","#e5383b","#b1a7a6","#d3d3d3","#f5f3f4","#ffffff"],
["#001219","#005f73","#0a9396","#94d2bd","#e9d8a6","#ee9b00","#ca6702","#bb3e03","#ae2012","#9b2226"],
["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff","#fffffc"],
["#582f0e","#7f4f24","#936639","#a68a64","#b6ad90","#c2c5aa","#a4ac86","#656d4a","#414833","#333d29"],
["#000000","#001314","#03989e","#00c2cb","#ebfeff","#990066","#a46497","#f7f2f6"],
["#ffffff","#000000","#ffffff","#000000"],
["#54478c","#2c699a","#048ba8","#0db39e","#16db93","#83e377","#b9e769","#efea5a","#f1c453","#f29e4c"],
["#984f71","#af3e66","#c54c6f","#d25170","#ca7c85","#96a297","#c0c3aa","#809f96","#657587","#6f7387"],
["#000000","#800016","#a0001c","#c00021","#ff002b","#ffffff","#407ba7","#004e89","#002962","#00043a"],
["#353535","#3c6e71","#ffffff","#d9d9d9","#284b63"],
["#000000","#ff5e5b","#d8d8d8","#ffffea","#00cecb","#ffed66"],
["#000000","#d6d6d6","#ffee32","#ffd100","#202020","#333533"],
["#000000","#f7f4ea","#ded9e2","#c0b9dd","#80a1d4","#75c9c8"]

]



function setup() {
   createCanvas(800, 1200);
 randomSeed(integer(1,1000000000))
          var scribble       = new Scribble();
        scribble.bowing    = 10.1;
        scribble.roughness = 11.5;
    
 
  
	const numVert = floor(number(number(1, 3), number(3, 9)));
	const blobSize = floor(number(3, 11));
	const numCurve = floor(number(1, 3));

	const p = fxrand()**0.4;
	const colors = colorPalettes[integer(0,12)]
	

	noStroke();
	background(colors[0])

	const points = [];
	const bands = [];

	for (let i = 0; i < numVert; i++) {
		points.push({
			x: fxrand() < 0.5 ? number(width * 0.3, 0) : number(width, width * 1.3),
			y: fxrand() < 0.5 ? number(height * 0.3, 0) : number(height, height * 1.3),
			period: number(0.008/3, 0.1/3)*numVert
		});
	}

	for(let i = 0; i < numCurve; i++){
		let start = number(-1, 1);
		let end = start + number(0.05, 0.5);
		bands.push({
			start,
			end,
			color: "white",
			chess: fxrand() < 0.5
		});
	}
	
noiseSeed( integer(1,100000000000) )
	for (let x = 0; x < width; x += blobSize) {
		for (let y = 0; y < height; y += blobSize) {
			let value = 0;
			for (let point of points) {
				value += sin(dist(x, y, point.x, point.y) * point.period) *
					map(noise(x * 0.01, y * 0.01, point.x * 0.03, point.y * 0.03), 0.2, 0.8, -0.2, 1);
			}
			
			value /= numVert/2;
			
			if(value > 0){
				value **= p
			}else{
				value = -(abs(value)**p);
			}
			
			fill(colors[wenKed(floor(map(value, -1, 1, 0, colors.length)), colors.length)]);

			for(let band of shuffle(bands)){
				if ( value > band.start && value < band.end){
					if(!band.chess || x/blobSize % 2 === y/blobSize % 2) {
						fill(band.color);
					}
				}
			}
			  strokeWeight( 0.15 );
       
          stroke(colors[wenKed(floor(map(value, -1, 1, 0, colors.length)), colors.length)]);
          
             

			scribble.scribbleRect(x, y, blobSize,blobSize);
          
		}
	}

  

  push(); 
  noFill();
  stroke('#000000');
  strokeWeight(45);
  rect(0, 0, 800, 1200)
  pop();
  noLoop()
  
  let features = {
    "numVert":numVert,
    "blobSize":blobSize,
    "numCurve":numCurve,
    "colors":colors[0],
  }
  
  console.log(features)
  
  window.$fxhashFeatures = features;  

}

function draw() 
{
 
}





function wenKed(a, b){
	if(a < 0) return a+b+a;
	return a%b;
}

function number(a, b) {
    return a+(b-a)*fxrand()
  }
function integer(a, b) {
  return Math.floor(number(a, b+1))
}