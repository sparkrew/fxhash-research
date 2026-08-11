
function minmax(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

function minmaxdouble(min, max){
  return fxrand() * (max-min) + min;
}

function HSLToHEX(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};




let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;

  colorMain = HSLToHEX(minmax(0, 360), minmax(40, 60), minmax(60, 70));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, colorMain2, 0, 255, colorMain];



    let colors = ["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#203051", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];

    let mySeed;

    let patterns = [];

    function setup() {
    	createCanvas(1000, 1000);
    	ellipseMode(CENTER);
    	rectMode(CENTER);
      randomSeed(minmax(0,1000));
      noiseSeed(minmax(0,1000));
    	mySeed = floor(random(1, 10000));
    	let mySize = 100;

    	patterns.push(new Pattern(width / 2, height / 2, width - mySize));

    	for (let xx = mySize; xx <= width - mySize; xx += mySize) {
    		for (let yy = mySize; yy <= height - mySize; yy += mySize) {
    			if (random(0, 1) > 0.5)
    			{
    				patterns.push(new Pattern(xx, yy, mySize));
    			}
    		}
    	}

    	 mySize /= 2;

    	for(let xx = mySize;xx <=width-mySize;xx+=mySize)
    	{
    		for(let yy = mySize;yy <= height-mySize;yy+=mySize)
    		{
    			if (random(0,1) > 0.75)
    			{
    	    patterns.push(new Pattern(xx,yy,mySize));
    			}
    		}
    	}

    		/*
    	for(let xx = mySize;xx <= width-mySize;xx+=5)
    	{
    		for(let yy = mySize;yy <= height-mySize;yy+=5)
    		{
    			//if (random(0,1) > 0.5)
    			{
    				randomSeed(123);
    	      fill(generateColor());
    				noStroke();
    				circle(xx,yy,2);

    			}
    		}
    	}*/

    	noLoop();
    }

    function draw() {

    	randomSeed(mySeed);
    	fill(generateColor());
    	square(width / 2, height / 2, width);

    	for (let i = 0; i < patterns.length; i++) {
    		patterns[i].draw();
    	}

    	let mySize=2;
    	for(let xx = mySize;xx <= width-mySize;xx+=mySize)
    	{
    		for(let yy = mySize;yy <= height-mySize;yy+=mySize)
    		{
    			//if (random(0,1) > 0.5)
    			{
    				randomSeed(123);
    	      fill(0);
    				noStroke();
    				circle(xx,yy,0.5);

    			}
    		}
    	}
    }

    class Pattern {
    	constructor(x, y, mySize) {
    		this.x = x;
    		this.y = y;
    		this.size = mySize;
    		this.color1 = generateColor();
    		this.color2 = generateColor();
    		this.angle = random([0, PI / 2,PI,3*PI/2]);
    	}

    	draw() {
    		push();
    		//strokeWeight(0.25);
    		translate(this.x, this.y);
    		rotate(this.angle);
    		noFill();
    		square(0, 0, this.size);
    		fill(this.color1);
    		arc(-this.size / 2, 0, this.size / 2, this.size / 2, 3 * PI / 2, PI / 2);
    		arc(this.size / 2, 0, this.size / 2, this.size / 2, PI / 2, 3 * PI / 2);
    		circle(0, 0, this.size / 3);

    		fill(this.color2);
    		arc(-this.size / 2, 0, this.size / 4, this.size / 4, 3 * PI / 2, PI / 2);
    		arc(this.size / 2, 0, this.size / 4, this.size / 4, PI / 2, 3 * PI / 2);
    		arc(0, -this.size / 2, this.size / 4, this.size / 4, 2 * PI, PI);
    		arc(0, this.size / 2, this.size / 4, this.size / 4, PI, 2 * PI);

    		pop();
    	}
    }

    function generateColor() {
    	return colors[floor(random(0, colors.length))];
    }
