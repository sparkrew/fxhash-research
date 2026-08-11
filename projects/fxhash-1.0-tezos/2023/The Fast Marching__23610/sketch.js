// THE SANDBOX by Stas Kulesh aka gmi.sh
// Jan 2023

let c1, c2, c3, c4, c5, p // colours
let particles = []
let vX = []
let vY = []
let algoType = 0 
let g = d = c = m = seed = iteration = 0

function preload() {
    seed = int(fxrand() * 9999999)    
}  

function setup() {
    setupGrid(1)
    createCanvas(g, g)
    randomSeed(seed)
    noiseSeed(seed)
    colorMode(HSB, 360, 100, 100, 100)

    algoType = randomInt(0,3)
    console.log(algoType)

    p = randomInt(0,palettes.length-1)
    palette = sort_by_luminance(palettes[p])
    c1 = palette[0]
    c2 = palette[1]
    c3 = palette[2]
    c4 = palette[3]
    c5 = palette[4]  
    background(c5)
    stroke(c1)
    fill(c1)
    strokeWeight(m)

    for (var j = 0; j <= 100; j++) {
        let newParticle = {
            x: randomInt(0,g),
            y: randomInt(0,g)
        }
        particles.push(newParticle)
    }

    for (let x = 0; x <= g+1; x++) {
        vX[x] = []; // create nested array
        vY[x] = []; // create nested array
        for (let y = 0; y <= g+1; y++) {
            if (algoType === 0) {
                vX[x][y] = sin((x+y))
                vY[x][y] = cos((y-x))
            } else if (algoType === 1) {
                vX[x][y] = random([-2,0,2])*noise(x+y)
                vY[x][y] = tan(cos(x+y/g/g/g))
            } else if (algoType === 2) {
                vX[x][y] = tan((x+y))^1.3
                vY[x][y] = random([-2,2])*noise(x)
            } else {
                vX[x][y] = random([-2,2])*noise(y)
                vY[x][y] = random([-2,2])*noise(x)
            } 
        }
    }
}

function draw() {
    let x = g/2
    let y = g/2

    for (var i = particles.length - 1; i >=0; i--) {
        let dx = vX[floor(abs(particles[i].x))][floor(abs(particles[i].y))]
        let dy = vY[floor(abs(particles[i].x))][floor(abs(particles[i].y))]

        let tmpX = particles[i].x
        let tmpY = particles[i].y
        particles[i].x+=dx
        particles[i].y+=dy

        let strWeight = 0
        
        if (particles[i].x > g) {
            particles[i].x = random(g)
        } else if (particles[i].y > g) {
            particles[i].y = random(g)
        } else if (particles[i].x <= 0) {
            particles[i].x = g
        } else if (particles[i].y <= 0) {
            particles[i].y = g
        } else {
            strWeight = g*dist(g/2*(1/2+sin(PI*frameCount/g)),g/2*(1/2+cos(PI*frameCount/g)),particles[i].x, particles[i].y)/frameCount/frameCount
            // strWeight -= dist(g*sin(PI*i/frameCount)/2,g*cos(PI*i/frameCount)/2, particles[i].x, particles[i].y)/frameCount/2
        }
        
        strokeWeight(strWeight)
        push()

        if (algoType === 0) {
            rotate(sin(frameCount/g/g/g)+tan(frameCount/g/g/g))
            square(particles[i].x, particles[i].y,strWeight)
            vX[floor(abs(particles[i].x))][floor(abs(particles[i].y))]-=sin(frameCount)/100
            vY[floor(abs(particles[i].x))][floor(abs(particles[i].y))]-=cos(frameCount)/100
        } else if (algoType === 1) {
            rotate(sin(frameCount/g/g/g)/cos(frameCount/g/g/g))
            circle(particles[i].x, particles[i].y,strWeight)
            circle(particles[i].x+strWeight/2, particles[i].y+strWeight/2,strWeight*noise(i))
            circle(particles[i].x-strWeight/2, particles[i].y-strWeight/2,strWeight*noise(i))
            line(tmpX,tmpY,particles[i].x,particles[i].y)
            vX[floor(abs(particles[i].x))][floor(abs(particles[i].y))]^=1.001+noise(frameCount)/1000
            vY[floor(abs(particles[i].x))][floor(abs(particles[i].y))]^=1.001+noise(frameCount)/1000
        } else if (algoType === 2) {
            square(particles[i].y, particles[i].x,strWeight*2*cos(PI*frameCount/g/2))
            point(particles[i].x, particles[i].y)    
            vX[floor(abs(particles[i].x))][floor(abs(particles[i].y))]-=tan(i/(frameCount+1))/100
            vY[floor(abs(particles[i].x))][floor(abs(particles[i].y))]-=0.001
        } else {
            rotate(i/frameCount/c)
            point(particles[i].x, particles[i].y)
        } 
        pop()
    }

    stroke(c1)

    if (iteration > g/1.77/8) { stroke(c5); fill(c5) }
    if (iteration > g/1.77/7) { stroke(c4); fill(c4)}
    if (iteration > g/1.77/6) { stroke(c3); fill(c3)}
    if (iteration > g/1.77/4) { stroke(c2); fill(c2)}
    if (iteration > g/1.77/2) { stroke(c1); fill(c1)}
    if (iteration % 3 === 0) { stroke(c5) }
    if (iteration > g/1.77/1.5) {
        noLoop()
        loadPixels();
        let den = pixelDensity();
        let halfImage = 4 * (width * den) * (height * den);
        for (let l = 0; l < halfImage; l += 4) {
            grainAmount = randomInt(-12, 12);
            pixels[l] = pixels[l] + grainAmount;
            pixels[l + 1] = pixels[l + 1] + grainAmount;
            pixels[l + 2] = pixels[l + 2] + grainAmount;
            pixels[l + 3] = pixels[l + 3] + grainAmount;
        }
        updatePixels();      
        k = 0
        while (k != 1) {
            if ((isFxpreview = true)) {fxpreview(); k= 1;}
        }    
    }
    else {
        iteration++
    }
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

function convert_to_float(b) {
  var floatValue = +(b);
  return floatValue;
}

function sort_by_luminance(arrColors) {
  var tmp, a_y, b_y, a, b
  tmp = arrColors.slice()  // deep copy
  tmp.sort(function(a, b) {
    a_y = 0.2126 * hexToR(a) + 0.7152 * hexToG(a) + 0.0722 * hexToB(a)
    b_y = 0.2126 * hexToR(b) + 0.7152 * hexToG(b) + 0.0722 * hexToB(b)
    return b_y - a_y
  })
  return tmp
 }

function removeElement(array, index) {
    if (index < 0 || index >= array.length) return
    return array.splice(index, 1)
}

let palettes = [
    ['#fe4365','#fc9d9a','#f9cdad','#c8c8a9','#83af9b'],
    ['#556270','#4ecdc4','#c7f464','#ff6b6b','#c44d58'],
    ['#3fb8af','#7fc7af','#dad8a7','#ff9e9d','#ff3d7f'],
    ['#d9ceb2','#948c75','#d5ded9','#7a6a53','#99b2b7'],
    ['#ffffff','#cbe86b','#f2e9e1','#1c140d','#cbe86b'],
    ['#343838','#005f6b','#008c9e','#00b4cc','#00dffc'],
    ['#413e4a','#73626e','#b38184','#f0b49e','#f7e4be'],
    ['#2b2823','#8fa691','#d4ceaa','#f9fadc','#cc3917'],
    ['#c9b8a8','#f8af8c','#a24d52','#5a3044','#391d34'],
    ['#a82f61','#95708c','#78b2a2','#bccb9c','#dadfb3'],
    ['#2d2137','#f6f4f9','#dc012b','#feffff','#282536'],
    ['#ffed4a','#58cc65','#039ba6','#215096','#0c1c36'],
    ['#c6d5ae','#f1ea9b','#f7c869','#8f7b55','#d6c584'],
    ['#5c4152','#b4585d','#d97f76','#f7d0a9','#a1c0ae'],
    ['#185b63','#c0261c','#ba460d','#c59538','#404040'],
    ['#5e1f28','#8a2f2e','#ae5543','#f7bb75','#83764c'],
    ['#faefc2','#a4ac9d','#a27879','#a4626c','#f05d77'],
    ['#f3d597','#b6d89c','#92ccb6','#f87887','#9e6b7c'],
    ['#f4e1b8','#9ec7b7','#acaa9b','#a5826e','#7e514b'],
    ['#a89d87','#bab100','#f91659','#b31d6a','#2e2444'],
    ['#ff7c70','#f2dfb1','#b7c9a9','#674d69','#2e292e'],
    ['#decba0','#a0ab94','#6b9795','#594461','#6e1538'],
    ['#4b1623','#75233d','#c4594b','#f0b96b','#fdf57e'],
    ['#40223c','#42988f','#b1c592','#f1ddba','#fb718a'],
    ['#000000','#a69682','#7e9991','#737373','#d8770c'],
    ['#a4f7d4','#9ae07d','#ada241','#a13866','#381c30'],
    ['#484450','#466067','#459a96','#34baab','#c4c8c5'],
    ['#fbffcc','#caf2be','#ddc996','#f67975','#f13565'],
    ['#40ffdc','#00a9d4','#1c3166','#240047','#1c0021'],
    ['#3b1a01','#a5cc7a','#dcffb6','#633b1c','#db3c6e'],
    ['#f8f8d6','#b3c67f','#5d7e62','#50595c','#fa3e3e'],
    ['#ffdeb3','#73bc91','#342220','#fc370c','#ff8716'],
    ['#caf729','#79dd7e','#2ecbaa','#21b6b6','#888dda'],
    ['#c7003f','#f90050','#f96a00','#faab00','#daf204'],
    ['#fef7d5','#abee93','#2d938e','#0b4462','#f7a48b'],
    ['#320139','#331b3b','#333e50','#5c6e6e','#f1debd'],
    ['#f3b578','#f78376','#da4c66','#8f3c68','#3f3557'],
    ['#f4fcb8','#dae681','#95a868','#452c18','#cc7254'],
    ['#ffe3b3','#ff9a52','#ff5252','#c91e5a','#3d2922'],
    ['#3b3f49','#fdfaeb','#faeddf','#f3c6b9','#f7a29e'],
    ['#394736','#696b46','#b99555','#a8462d','#5c584c'],
    ['#f1f7cd','#d3f7cd','#b5f7cd','#403a26','#81876c'],
    ['#1a0c12','#f70a71','#ffdaa6','#ffb145','#74ab90'],
    ['#48586f','#ffffc0','#d6c496','#d62e2e','#283d3e'],
    ['#99db49','#069e8c','#211d19','#575048','#9e064a'],
    ['#8f9044','#f8a523','#fc8020','#cf1500','#352f3d'],
    ['#f8f4c4','#d5e0b5','#a5c3a7','#6d8b89','#47667b'],
    ['#ffffea','#a795a5','#7a959e','#424e5e','#3b2b46'],
    ['#f7fd91','#d09e1e','#fa7a32','#f42a55','#261323'],
    ['#383939','#149c68','#38c958','#aee637','#fffedb'],
    ['#fea304','#909320','#125a44','#37192c','#220315'],
    ['#7d677e','#4f2c4d','#360b41','#ccc9aa','#fafdea'],
    ['#0b110d','#2c4d56','#c3aa72','#dc7612','#bd3200'],
    ['#090f13','#171f25','#752e2b','#c90a02','#f2eab7'],
    ['#53ac59','#3b8952','#0f684b','#03484c','#1c232e'],
    ['#111113','#d18681','#acbfb7','#f6ebdd','#8e6d86'],
    ['#52baa7','#718f85','#ba5252','#fc0f52','#fc3d73'],
    ['#c8cfae','#96b397','#525574','#5c3e62','#9b5f7b'],
    ['#5a372c','#8b8b70','#98c7b0','#f0f0d8','#c94b0c'],
    ['#d9dade','#bc0100','#95040b','#0c0304','#2c3230'],
    ['#d3b390','#b8a38b','#a78b83','#c76b79','#21112b'],
    ['#3b234a','#523961','#baafc4','#c3bbc9','#d4c7bf'],
    ['#745e50','#ff948b','#fdaf8a','#fcd487','#f79585'],
    ['#f2eabc','#54736e','#194756','#080000','#ff3b58'],
    ['#cccc66','#a6bf73','#80b380','#59a68c','#339999'],
    ['#880606','#d53d0c','#ff8207','#231d1e','#fcfcfc'],
    ['#c95c7a','#de9153','#d6d644','#dcebaf','#14888b'],
    ['#f0c0a8','#f0d8a8','#a8c090','#789090','#787878'],
    ['#000000','#1693a5','#d8d8c0','#f0f0d8','#ffffff'],
    ['#ceebd1','#b6deb9','#b1ccb4','#aebfaf','#a6ada7'],
    ['#ae0c3e','#afcca8','#f5eec3','#c7b299','#33211c'],
    ['#f23e02','#fef5c8','#00988d','#2c6b74','#013750'],
    ['#fcbf6b','#a9ad94','#42302e','#f6daab','#dabd7b'],
    ['#bfe0c0','#160921','#f06e75','#f2af60','#d0d26f'],
    ['#fbb498','#f8c681','#bec47e','#9bb78f','#98908d'],
    ['#bad3c6','#f9d9ac','#fca483','#f18886','#7b7066'],
    ['#c5b89f','#feffd4','#9e2d4a','#450b1e','#21000f'],
    ['#f05c54','#a17457','#5c735e','#3d615b','#434247'],
    ['#010f3c','#7c0c44','#d10a46','#f7931b','#d7d908'],
    ['#d0cf75','#f8764e','#da2644','#90044a','#440a2a'],
    ['#7d535f','#f7e9cc','#332022','#d1949b','#c2bda7'],
    ['#f0f0f0','#d8d8d8','#c0c0a8','#604848','#484848'],
    ['#5b1d99','#0074b4','#00b34c','#ffd41f','#fc6e3d'],
    ['#ff8482','#ffb294','#f8d8a5','#91be95','#635a49'],
    ['#13141a','#a90448','#fb3640','#fda543','#17c69b'],
    ['#0d0f36','#294380','#69d2cd','#b9f1d6','#f1f6ce'],
    ['#666764','#ba7a74','#f38780','#f6a27f','#fccc7f'],
    ['#ff1d44','#fbebaf','#74bf9d','#56a292','#1c8080'],
    ['#cee1d8','#f6eee0','#fda664','#f04842','#83563f'],
    ['#484848','#006465','#0f928c','#00c9d2','#beee3b'],
    ['#c0d88c','#f7a472','#f07877','#fa2a3a','#0a5c5a'],
    ['#75d9b4','#aa6b71','#f2896f','#ffb87f','#ffec72'],
    ['#3e3433','#f07f83','#b29a78','#9eaf83','#75a480'],
    ['#ffbd87','#ffd791','#f7e8a6','#d9e8ae','#bfe3c0']
]

function setupGrid(mult)
{
  g = min(windowWidth, windowHeight) * mult; 
  d = g/10;   // deci
  c = g/100;  // centi
  m = g/1000; // milli
}

function randomInt(min, max) {
  return floor(random() * (max - min + 1)) + min;
}