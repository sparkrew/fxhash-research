function randomfxhashpat(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

function randomfxhashpatdouble(min, max){
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
    function setup() {
    	createCanvas(windowHeight/1, windowHeight/1);
      randomSeed(randomfxhashpat(0,1000));
      noiseSeed(randomfxhashpat(0,1000));
    	background(16);
    	sx=random(-1.0,1.0)
    	sy=random(-1.0,1.0)
    	sa=random(-1.0,1.0)
    	sb=random(-1.0,1.0)
    	rs=random(-1.0,1.0)
    	gs=random(-1.0,1.0)
    	bs=random(-1.0,1.0)
    }

    function draw() {
    	for(i=0;i<1000;i++){
    	x=random(width)
    	y=random(height)
    	noStroke()
    		r=noise((noise((noise(x*sx/100)+noise(y*sy/100))*10*sa)+noise((noise(x*sy/100)+noise(y*sx/100))*10*sb))*4*rs)*255
    		g=noise((noise((noise(x*sx/100)+noise(y*sy/100))*10*sa)+noise((noise(x*sy/100)+noise(y*sx/100))*10*sb))*10*gs)*255
    		b=noise((noise((noise(x*sx/100)+noise(y*sy/100))*10*sa)+noise((noise(x*sy/100)+noise(y*sx/100))*10*sb))*10*bs)*255
    	fill(r,g,b);
    	ellipse(x, y, 2.5, 2.5)}
    }
