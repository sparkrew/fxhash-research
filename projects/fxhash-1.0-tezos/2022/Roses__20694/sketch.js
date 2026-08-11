let seed = 1023123; //seed Hash
let defaultTheta = 1;
let thetaInc = 0.1;
let defaultR = 3;
let defaultRBig = 0.03;
let defaultNoiseyey = 4;
let grainG;
let spacesX;
let spacesY;

const random = (from, to) => {
  return map(fxrand(), 0, 1, from, to);
};

function preload() {
  GrainShader = new p5.Shader(
    this._renderer,
    `
	precision highp float;
	attribute vec3 aPosition;
	attribute vec2 aTexCoord;
	varying vec2 vUv;
	
	void main(){
		vUv=aTexCoord;
		vec4 positionVec4=vec4(aPosition,1.);
		positionVec4.xy=positionVec4.xy*2.-1.;
		gl_Position=positionVec4;
	}`,
    ` 
	precision highp float;
	varying vec2 vUv;
	uniform sampler2D tex;
	uniform float strength;
	uniform float seed;
	uniform float offset;
	
	float rand(vec2 vUv){
		float bigNum = 234554.;
		float id = vUv.x * vUv.y * bigNum;
		float r = fract(sin(id)*bigNum); // [-1,1]
		return r;
	}
	
	void main(){
		float r = rand(vUv);
		float offset = offset;
		vec3 noise3 = vec3((r+offset) * strength); // [-1.5,0.5] * strength
		vec4 color = texture2D(tex,vec2(vUv.x,1.-vUv.y));
		gl_FragColor=	color + vec4(noise3, 0.);
}`
  );
}

function grain(strength, seed, inpG, outG) {
  if (!strength) {
    strength = 0.06;
  }
  if (!seed) {
    seed = random(1, 1000);
  }
  if (!inpG) {
    inpG = get(0, 0, width, height);
  }
  grainG.randomSeed(seed);
  grainG.shader(GrainShader);
  GrainShader.setUniform('tex', inpG);
  GrainShader.setUniform('strength', strength);
  GrainShader.setUniform('offset', -0.5);
  GrainShader.setUniform('seed', random(0, 10));
  grainG.rect(-width / 2, -height / 2, width, height);

  if (!outG) {
    image(grainG, 0, 0, width, height);
  } else {
    outG.image(grainG, 0, 0, outG.width, outG.height);
  }
}

function Stringy(_x, _y, fillColor, strokeColor) {
  const steps = 500;

  let x = _x;
  let y = _y;

  let theta = defaultTheta;
  let r = defaultR;
  let rBig = defaultRBig;
  let noiseyey = defaultNoiseyey; // defaultNoiseyey;

  const addNoise = (to) => {
    const spX = map(x, 0, width, 0, spacesX);
    const spY = map(y, 0, height, 0, spacesY);
    return to + map(noise(spX, spY), 0, 1, -noiseyey, noiseyey) * random(-1, 1);
  };

  const draw = () => {
    fill(fillColor);
    stroke(strokeColor);
    strokeWeight(1.2);
    beginShape();
    for (let i = 0; i < steps; i++) {
      curveVertex(x, y);
      x = x + addNoise(cos(theta)) * addNoise(r);
      y = y + addNoise(sin(theta)) * addNoise(r);
      theta += thetaInc;
      r += rBig;
    }
    endShape();
    theta = defaultTheta;
    r = defaultR;
    rBig = defaultRBig;

    x = _x;
    y = _y;
  };

  return { draw };
}

Array.prototype.sample = function () {
  this.length;
  return this[Math.floor(fxrand() * this.length)];
};

let stringo = [];
let numberOfStringos = 500;

let pallete;

const borderDividedBy = 15;
let borderSize;

function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function hexToRGB(hex) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  return [red, green, blue];
}

const getDiffColor = (c1, c2) => {
  // minimal recommended contrast ratio is 4.5, or 3 for larger font-sizes
  const cntrst = contrast(hexToRGB(c1), hexToRGB(c2));
  if (c1 === c2 || cntrst < 1.5) {
    const color = pallete.colors.sample();
    return getDiffColor(c1, color);
  }
  return c2;
};

let borderColor;

function drawBorder() {
  fill(borderColor);
  rect(0, 0, width, height / borderDividedBy);
  rect(
    0,
    (height / borderDividedBy) * (borderDividedBy - 1),
    width,
    height / borderDividedBy
  );

  rect(0, 0, width / borderDividedBy, height);

  rect(
    (width / borderDividedBy) * (borderDividedBy - 1),
    0,
    width / borderDividedBy,
    height
  );
}

function getSize(num) {
  if (num < 0.04) {
    return 'Small';
  }

  if (num >= 0.04 && num < 0.05) {
    return 'Medium';
  }

  if (num >= 0.05) {
    return 'Big';
  }
}

function getRoughness(size) {
  if (size < 3) {
    return 'Soft';
  }

  if (size >= 3 && size < 3.5) {
    return 'Normal';
  }

  if (size >= 3.5) {
    return 'Rough';
  }
}

let cnvs;

function setup() {
  cnvs = createCanvas(2400, 2400);
  seed = 10;
  noiseSeed(seed);
  randomSeed(seed);

  spacesX = 100;
  spacesY = 100;
  defaultNoiseyey = random(2.5, 4);
  defaultRBig = random(0.02, 0.07);

  const palletesIndex = Math.round(random(0, palletes.length - 1));
  pallete = palletes[palletesIndex];
  grainG = createGraphics(width, height, WEBGL);
  borderColor = pallete.colors.sample();

  for (let i = 0; i < numberOfStringos; i++) {
    let strokeColor = pallete.colors.sample();
    let fillColor = pallete.colors.sample();
    strokeColor = getDiffColor(fillColor, strokeColor);

    const spX = random(0, spacesX);
    const spY = random(0, spacesY);
    const posX = map(spX, 0, spacesX, 0, width);
    const posY = map(spY, 0, spacesY, 0, height);

    stringo.push(Stringy(posX, posY, fillColor, strokeColor));
  }
  const Roughness = getRoughness(defaultNoiseyey);
  const Size = getSize(defaultRBig);
  window.$fxhashFeatures = {
    Pallete: pallete.name,
    Roughness,
    Size,
  };
}

function draw() {
  noLoop();
  background(pallete.colors.sample());
  strokeWeight(1);
  stringo.forEach((s) => {
    s.draw();
  });

  noStroke();
  fill(pallete.colors.sample());
  drawBorder();
  grain(0.1, seed);

  fxpreview();
}

function keyTyped() {
  console.log({ key });
  if (key === 's') {
    save(cnvs, 'rose.png');
  }
}
