// BLOCK_001 by Bejuco @ 25042022
// Please see LICENSE.md for more info.

const size = 840;

var draw = SVG().addTo('main').size(size, size);

function circlePath(cx, cy, r){
  return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return parseInt((this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

var rand_1 = fxrand();
var rand_2 = fxrand();
var rand_3 = fxrand();
var rand_4 = fxrand();
var rand_5 = fxrand();
var rand_6 = fxrand();
var rand_7 = fxrand();
var rand_8 = fxrand() < 0.5;

var color_1;
var color_2;

const img_negro = ['./js/data/1.jpg', './js/data/2.jpg', './js/data/3.jpg'];
const img_naranja = ['./js/data/1_n.jpg', './js/data/2_n.jpg', './js/data/3_n.jpg'];

var img_1;
var img_2;

const mayusculas = ["Ͱ","Ͳ","Ͷ","Ϳ","Ά","Έ","Ή","Ί","Ό","Ύ","Ώ","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "Ϊ", "Ϋ", "χ", "Ϗ", "ϓ", "ϔ", "Ϙ", "Ϛ", "Ϝ", "Ϟ", "Ϡ", "Ϣ", "Ϥ", "Ϧ", "Ϩ", "Ϫ", "Ϭ", "Ϯ", "Ϸ", "Ϻ", "Ͻ", "Ͼ", "Ͽ"];
const minusculas = ["ͱ","ͳ","ͷ","ͻ","ͼ","ͽ","ά","έ","ή","ί","ΰ","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ", "ο", "π", "ρ", "ς", "σ", "τ", "υ", "φ", "ψ", "ω", "ϊ", "ϋ", "ό", "ύ", "ώ", "ϗ", "ϙ", "ϛ", "ϝ", "ϟ", "ϡ", "ϣ", "ϥ", "ϧ", "ϩ", "ϫ", "ϭ", "ϯ", "ς", "ϳ", "϶", "ϸ", "ϻ", "ϼ"];
const simbolos = ["*", "(", ")", ".", "/", ":", ";", "^", "_", "-", "'", "|", "¦", "¨", "«", "¬", "·", "»", "‖", "‗", "•", "‣", "…", "※", "⁀", "⁂", "⁌", "⁍", "⁎", "⁐", "⁑", "⁕", "⁖", "⁘", "⁙", "⁜", "*"];

var letra_1 = mayusculas[rand_1.map(0, 1, 0, mayusculas.length - 1)];
var letra_2 = simbolos[rand_2.map(0, 1, 0, simbolos.length - 1)];
var letra_3 = minusculas[rand_3.map(0, 1, 0, minusculas.length - 1)];
var letra_4 = minusculas[rand_4.map(0, 1, 0, minusculas.length - 1)];

var ilustracion = simbolos[rand_5.map(0, 1, 0, simbolos.length - 1)] + mayusculas[rand_6.map(0, 1, 0, mayusculas.length - 1)] + simbolos[rand_7.map(0, 1, 0, simbolos.length - 1)];

if (rand_8) {
  color_1 = '#000';
  color_2 = '#D97925'
  
  img_1 = img_negro[rand_1.map(0, 1, 0, img_negro.length - 1)];
  img_2 = img_naranja[rand_1.map(0, 1, 0, img_naranja.length - 1)];
} else if (!rand_8){
  color_1 = '#D97925';
  color_2 = '#000';
  
  img_1 = img_naranja[rand_1.map(0, 1, 0, img_naranja.length - 1)];
  img_2 = img_negro[rand_1.map(0, 1, 0, img_negro.length - 1)];
}

draw.rect(size - 3, size - 3)
    .fill(img_1)
    .stroke({
      color: color_2,
      opacity: 1,
      width: 3
    })
    .transform({
      origin: 'center',
      translate: [0, 0]
    });

draw.rect(size - 75, size - 75)
    .fill(img_1)
    .stroke({
      color: color_2,
      opacity: 1,
      width: 4
    })
    .transform({
      origin: 'center',
      translate: [37.5, 37.5]
    });

draw.rect(size - 200, size - 200)
    .fill(img_1)
    .stroke({
      color: color_2,
      opacity: 1,
      width: 4
    })
    .transform({
      origin: 'center',
      translate: [100, 100]
    });
    
draw.textPath(letra_1.repeat(120), 'M92 92 L749 92 L749 748 L92 748 Z')
    .fill(color_2)
    .font({
      size:70
    });

draw.circle(size - 90)
    .fill(img_1)
    .stroke({
      color: color_2,
      opacity: 1,
      width: 3
    })
    .transform({
      origin: 'center',
      translate: [45, 45]
    });
    
draw.textPath(letra_2.repeat(400), circlePath(420, 420, 362))
    .fill(color_2)
    .font({
      size: 35
    });

draw.circle(size - 175)
    .fill(img_1)
    .stroke({
      color: color_2,
      opacity: 1,
      width: 3
    })
    .transform({
      origin: 'center',
      translate: [87.5, 87.5]
    });
    
draw.circle(size - 200)
    .fill(img_2)
    .transform({
      origin: 'center',
      translate: [100, 100]
    });
    
draw.circle(size - 210)
    .fill(img_2)
    .stroke({
      color: color_1,
      opacity: 1,
      width: 1
    })
    .transform({
      origin: 'center',
      translate: [105, 105] 
    });
    
draw.textPath(letra_3.repeat(120),'M420 160 L595.3125 223.75 L675 367.1875 L659.0625 542.5 L515.625 670 L324.375 670 L180.9375 542.5 L165 367.1875 L244.6875 223.75 Z')
    .fill(color_1)
    .font({
      size: 68
    });

draw.path('M420 164 L592.5625 226.75 L671 367.9375 L655.3125 540.5 L514.125 666 L325.875 666 L184.6875 540.5 L169 367.9375 L247.4375 226.75 Z')
    .fill(img_2)
    .stroke(color_1);

draw.path('M420 170 L588.4375 231.25 L665 369.0625 L649.6875 537.5 L511.875 660 L328.125 660 L190.3125 537.5 L175 369.0625 L251.5625 231.25 Z')
    .fill(img_1);

draw.textPath(letra_4.repeat(180), 'M420 195 L571.25 250 L640 373.75 L626.25 525 L502.5 635 L337.5 635 L213.75 525 L200 373.75 L268.75 250 Z')
    .fill(color_2)
    .font({
      size: 40
    });

draw.path('M420 205 L564.375 257.5 L630 375.625 L616.875 520 L498.75 625 L341.25 625 L223.125 520 L210 375.625 L275.625 257.5 Z').fill(img_1)
    .stroke({
      color:color_2,
      opacity:1,
      width: 5
    });

draw.text(ilustracion)
    .font({
      size: 150,
      anchor: 'middle'
    })
    .fill(color_2)
    .transform({
      origin: 'center',
      translate: [420, 465] 
    });
    
fxpreview();