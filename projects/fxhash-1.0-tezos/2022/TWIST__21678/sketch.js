
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

let x=500, y=270, s=1060, r=250, g=70, b=150, size=200;

col = ["#F7D1CD", "#E8C2CA", "#D1B3C4", "#B392AC","#735D78"];
col2 = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];
col3 = ["#355070", "#6D597A", "#B56576", "#E56B6F", "#EAAC8B"];
col4 = ["#16697A", "#489FB5", "#82C0CC", "#EDE7E3", "#FFA62B"];
col5 = ["#F8FFE5","#06D6A0","#1B9AAA", "#EF476F","#FFC43D"];
col6 = ["#ADB5BD","#6C757D","#495057", "#343A40","#212529"];
col7 = ["#5603AD","#8367C7","#B3E9C7", "#C2F8CB","#F0FFF1"];
col8 = ["#DB5461","#686963","#8AA29E", "#3D5467","#F1EDEE"];


bg = ["#F7D1CD", "#E8C2CA", "#D1B3C4", "#B392AC","#735D78",
   "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF",
   "#355070", "#6D597A", "#B56576", "#E56B6F", "#EAAC8B",
  "#16697A", "#489FB5", "#82C0CC", "#EDE7E3", "#FFA62B",
      "#F8FFE5","#06D6A0","#1B9AAA", "#EF476F","#FFC43D",
      "#ADB5BD","#6C757D","#495057", "#343A40","#212529"
  ]


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  randomSeed(fxrand()*10000)
  noiseSeed(fxrand()*10000)
	noCursor();
	angleMode(CENTER)
	background(random(bg))
	colorMode(HSB, 360,100,100,100);
    strokeWeight(0.9);

  c = random([col, col2, col3, col4, col5, col6, col7, col8]);
    t = 0;
}

function draw() {
	blendMode(BLEND);
	x = noise(4*frameCount * 0.002) * width;
	y = noise(2*frameCount * 0.003) * height;
	s = noise(frameCount * 0.02) * width/height*size;
	randomSeed(1000);
	stroke(0);
	fill(random(c));
	ellipse(x,y,s);
  push();
  	ellipse(x,y,s);
  push();
	ellipse(x,y,s);

   t += 0.005;

		endShape(CLOSE)

}

function keyPressed() {
	if(keyCode == 8)
		background(0);
}


function keyPressed() {

  // If you hit the s key, save an image
  if (key == 's') {
    save("blocks.png");
  }
}
