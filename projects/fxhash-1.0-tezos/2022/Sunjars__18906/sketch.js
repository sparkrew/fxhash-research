
let random = (a = 1, b = 0) => fxrand() * (b - a) + a
let choose = (dsp) => dsp[Math.floor(random(dsp.length))]
let colors = [];

const cSchemes = [
  ['#000000', '#999999', '#666666', '#333333', '#CCCCCC', '#FFFFFF'], //mc
  ['#ffbe0b', '#fb5607', '#1f1f1d', '#ff006e', '#8338ec', '#d6a932', '#3a86ff' ], //cer

   //c
  ['#ffffff', "#FEF0D9", "#FF4106", '#915520', '#ffc11a', '#ff6d7e'],//neo
  ['#160e00', '#5e2c00', '#4a3102', '#9e6a05', '#efb400', '#000000', '#d1c5a1'], //ear
  ['#042e4e', '#05487c', '#00c9bd', '#82d7d2', '#abedd5', '#e8ffec'], //b-m
  ["#dd0615", "#e4a70e", "#461c13", "#ff0303", "#522c14", "#000000", "#fef7df"],// radhf
];

const warms = [
  ['#98332b', '#5e3929', '#1f1f1d', '#e9dbbc', '#b1a992', '#d6a932', '#671d06' ], //cer
  ['#fff8eb', '#6c553e', '#98987f', '#9f8567', '#d1bc97', '#5a3c2e', '#a76f58', '#e7d2ad'], // aa
  ['#160e00', '#5e2c00', '#4a3102', '#9e6a05', '#efb400', '#000000', '#d1c5a1'], //ear
  ["#dd0615", "#e4a70e", "#461c13", "#ff0303", "#522c14", "#000000", "#fef7df"],// radhf
  ['#000000', '#999999', '#666666', '#333333', '#CCCCCC', '#FFFFFF'], //mc
];

const cools = [
  ['#042e4e', '#05487c', '#00c9bd', '#82d7d2', '#abedd5', '#e8ffec'], //b-m
  ['#80FFDB', '#72EFDD', '#64DFDF', '#56CFE1', '#48BFE3', '#4EA8DE', '#5390D9', '#5E60CE', '#6930C3', '#7400B8'], //c1
  ['#098ea6', '#9ceeed', '#10f0c8', '#e69e14', '#f1efb0', ],// nc1
  ['#3c1642', '#086375', '#1dd3b0', '#affc41', '#b2ff9e' ], // c2
  ['#000000', '#999999', '#666666', '#333333', '#CCCCCC', '#FFFFFF'], //mc
];

const classic = [
  ['#d1ac00', '#3C362B', '#FEF0D9', '#4f772d', '#ecf39e'], //c
  ['#3C362B', '#FEF0D9', '#386641', '#cdeac0', '#bc4749'], //c
  ['#FEF0D9', '#b90504', '#8B5A05', '#12A9BD', '#3C362B'], //c
  ['#FF4106', '#8B5A05', '#12A9BD', '#3C362B', '#FEF0D9'], //c
];

const bw = [
  ['#f4f1de', '#f2cc8f', '#e07a5f', '#81b29a', '#3d405b'], //bw
  ['#eb5e28', '#252422', '#403d39', '#ccc5b9','#FFFFFF'], //mc
  ['#ff0404', '#8338ec', '#380f0f', '#302020', '#443b3b', '#413f3f'], // rmc
 
];


let spectrum

let rCs = random(160);    
	if (rCs < 10) {              
		spectrum = classic;  
  } if (rCs < 30 && rCs > 10) {              
		spectrum = cools;   
  } if (rCs < 50 && rCs > 30) {              
		spectrum = bw;  
  } if (rCs < 100 && rCs > 50) {
        spectrum = cSchemes;
  } else if (rCs < 160 && rCs > 100) {
		spectrum = warms;
	}   
//console.log(rCs);

// ************* rotation picker ************************

let rot

let rA = random(170);    //170
	if (rA < 11) {              
		rot = -100;  
    }  if (rA < 22 && rA > 11) {              
		rot = -10;   
    }  if (rA < 33 && rA > 22) {              
		rot = 5;   
    }  if (rA < 44 && rA > 33) {              
		rot = -3;  
    }  if (rA < 55 && rA > 44) {              
		rot = -1;   
    }  if (rA < 66 && rA > 55) {              
		rot = -0.3;      
    }  if (rA < 77 && rA > 66) {                          
		rot = 0.3;      
    }  if (rA < 88 && rA > 77) {              
		rot = 1;  
    }  if (rA < 99 && rA > 88) {              
		rot = 3;   
    }  if (rA < 110 && rA > 99) {              
		rot = 5; 
    }  if (rA < 121 && rA > 110) {              
		rot = 10;   
    }  if (rA < 132 && rA > 121) {              
		rot = 100;      
	 } else if (rA < 170 && rA > 132) {
		rot = 11;
	}  
let u = rA;
//console.log(rot);

function setup() {
  
  m = min(windowWidth, windowHeight);
  let r = 1.5;
  
  let h = min(windowWidth, windowHeight);
  let w = h*ceil(r/2)/r;
  if (random() < 1/2) {
    [w, h] = [h, w];
  }
  createCanvas(w, h, WEBGL);
  noLoop();  
}

function draw() {
  
  background(choose(cSchemes));
  let weights = [0.2, 0.5, 0.75];
  strokeWeight(choose(weights));
  
  let r = 1.5
  let h = min(windowWidth, windowHeight);
  let w = h*ceil(r/2)/r;

  let sy = h / (fxrand() * 5 + 1);
  let sx = w / (fxrand() * 6 + 1);
  let c = width;
  
  for (let y = 0; y < c - 1; y = y + sy) { 
  let j = 6;
    
  cSchema = choose(spectrum);
    
    let jColors = floor(fxrand() * (cSchema.length -2 ) + 3);
    while (jColors-- > 0) { 
      colors.push(cSchema[jColors]);
    } 
      
    for (let x = 0; x < c; x = x + sx) {
      colors.unshift(colors.pop());
      rotate(45 * random(8));
      spectrumBln(x, y, sx, sy, colors[1], colors[0]);
    }

    if (y < m / 2 - sy) {
      sx = sx / 5;
    } else {
      sx = sx * 5;
    }    
  } 
}
    
function spectrumBln(x, y, m, h, c1, c2) {
  blendMode(MULTIPLY);
  noFill();
  
  for (let s = 0; s < m; s = s + 0.25) {
    let v = 1 - sin (3 / s * m);
    stroke(lerpColor(color(c2), color(c1), v*3))
    line(x - y, m * c1, x + s * PI, y - h);
    rotate(rot);
    translate(m*0.1, m*0.5);    
    } 
}