
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

let clr1 = minmax(0, 360);
let clr2 = minmax(0, 360);


particles1 = []
particles2 = []
noiseScale = 0.01/2
n = 0.1
n2 = 0.01
a = 0.01
a2 = 0.02
place = 0
change = 0
pick = 0



function setup() {
	createCanvas(windowWidth, windowHeight);
  noiseSeed(minmax(0,1000))
  randomSeed(minmax(0,1000))
	for (i = 0; i < 1000; i++) {
	particles1.push(createVector(place, (height)))
		particles2.push(createVector(place, (0)))
		place += width/1000
	}
	place = 0
	pick = random(0, 255)
}

function draw() {

	for (i = 0; i < 1000; i++) {
	p1 = particles1[i]
	p2 = particles2[i]
		strokeWeight(random([random(1, 2), random(1, 2), random(1, 2), random(1, random(2, 10))]))
			colorMode(RGB)
		stroke(0, random(20, 100))
		strokeWeight(random(0, 1))
point(p1.x, map(p2.x, 0, width, 0, height))
point(p2.x, map(p1.x, 0, width, 0, height))
		point(p1.x, p2.x)
		point(p2.x, p1.x)


point(width-p1.x, height-map(p2.x, 0, width, 0, height))
point(width-p2.x, height-map(p1.x, 0, width, 0, height))
		point(width-p1.x, height-p2.x)
		point(width-p2.x, height-p1.x)

		stroke(255, random(20, 100))
point(map(p1.y, 0, height, 0, width), p2.y)
		point(map(p2.y, 0, height, 0, width), p1.y)
		point(p1.y, p2.y)
		point(p2.y, p1.y)
			colorMode(HSB, 255)
		stroke(change, map(sin(a2), -1, 1, pick, 255-pick), map(cos(a), -1, 1, 200, 255), random(0, 50))
		strokeWeight(random([0, 0, 0, 0, 0, 0, random(0, random(0, random(0, random(0, 1))))]))
		strokeWeight(1)
point(p1.x, p1.y)
		point(p2.x, p2.y)
		point(width-p1.x, height-p1.y)
		point(width-p2.x, height-p2.y)
strokeWeight(random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, random(0, 1)]))
line(p1.x, p1.y, p2.x, p2.y),

		n = noise(p1.x * noiseScale, p1.y * noiseScale, (frameCount/noiseScale))
		a = TAU * n

				n2 = noise(p2.x * noiseScale, p2.y * noiseScale, (frameCount/noiseScale))
		a2 = TAU * n2
		p1.x += sin(a)
		p1.y += cos(a)
				p2.x += sin(a2)
		p2.y += -cos(a2)

		if (!onScreen(p1)) {
		p1.x = place
			p1.y = height
			place += width/5000
			colorMode(HSB, 255)
			change += sin((a + a2)/random(1, random(1, 100)))
		}
				if (!onScreen(p2)) {
		p2.x = place
			p2.y = 1
					place += width/5000
					colorMode(HSB, 255)
					change += sin((a + a2)/random(1, random(1, 100)))
		}

		if (place >= width) {
			place = 0
			point(p1.x, p1.y)
			point(p2.x, p2.y)
		}

		if (change >= 255) {
			change = 0
			point(p1.x, p1.y)
			point(p2.x, p2.y)
		}
	}
}

function onScreen(v) {
return v.x < width && v.y < height && v.x > 0 && v.y > 0
}
