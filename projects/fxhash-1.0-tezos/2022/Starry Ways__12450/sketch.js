
let inc = 0.01
let coordList = []
let coordList2 = []

let cloudList = []

const cloudColors = [
  '#F0F8FF', '#000000', '#696969', '#4B0082', '#191970', '#483D8B', '#4682B4', '#AFEEEE', '#2F4F4F', '#778899', '	#8A2BE2', '#9400D3'
]
const arcColors = ['#F0F8FF', '#FFFFFF', '#00BFFF', '#1E90FF', '#483D8B', '#0000CD', '#8A2BE2', '#4B0082', '#9370DB', '#E6E6FA']

let cloudColor
let cloudColor2
let arcColor
let arcColor2



// random functions

function randomInterval(min, max) {
  return fxrand() * (max - min) + min
}

function randomArrayItem(arr) {
  const index = Math.floor(randomInterval(0, arr.length))
  return arr[index]
}

// p5 draw stuff

let isBlack = randomInterval(0, 1) > 0.5

if (!isBlack) {
  document.body.style.backgroundColor = '	#87CEFA'
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  noiseSeed(randomInterval(0, 100000))

  cloudColor = color(randomArrayItem(cloudColors))
  cloudColor2 = color(randomArrayItem(cloudColors))
  arcColor = color(randomArrayItem(arcColors))
  arcColor2 = color(randomArrayItem(arcColors))
  for (let i = 0; i < randomInterval(2000, 3000); i++) {
    coordList.push([randomInterval(0, width), randomInterval(0, height)])
  }
  const delta = randomInterval(0, PI)
  const yStart = randomInterval(0, height)
  for (let j = 0; j < randomInterval(15000, 20000); j++) {
    const x = randomInterval(0, width)
    const y = randomInterval(0, height / 3) + sin(TWO_PI * x / width / 2 + delta) * yStart
    coordList2.push([x, y])
  }
  for (let i = 0; i < randomInterval(0, 4); i++) {
    cloudList.push([randomInterval(0, width), randomInterval(0, height)])
  }
}


function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = cloudColor.levels[0];
      pixels[index + 1] = cloudColor.levels[1];
      pixels[index + 2] = cloudColor.levels[2];
      pixels[index + 3] = r;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  noLoop();

  fill(
    arcColor.levels[0],
    arcColor.levels[1],
    arcColor.levels[2],
    2
  );

  noStroke();
  cloudList.forEach((item) => {
    for (let i = 0; i < randomInterval(500, 600); i++) {
      const deltaAngle = i * PI / 3 + randomInterval(0, PI / 3)
      arc(item[0], item[1], i + 5, i + 5, 0 + deltaAngle, PI / 4 + deltaAngle)
    }
  })

  stroke('#ffffff')
  coordList2.forEach((item) => {
    strokeWeight(randomInterval(0, 1))
    point(item[0], item[1])
  })
  coordList.forEach((item) => {
    strokeWeight(randomInterval(0, 2))
    point(item[0], item[1])
  })

  if (isFxpreview) {
    fxpreview()
  }
}

