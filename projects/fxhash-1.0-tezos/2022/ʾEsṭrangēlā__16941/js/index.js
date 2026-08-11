console.log(' BLOCK_007 by bejuco @ 22.07.2022 \n Please see LICENSE.md for more information. \n https://bejuco.co ');

Number.prototype.mapInt = function (in_min, in_max, out_min, out_max) {
  return parseInt((this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

Number.prototype.mapFloat = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function uni_char(first, last) {
  var char = String.fromCharCode(parseInt(first, 16) + fxrand() * (parseInt(last, 16) - parseInt(first, 16) + 1))
  return char;
}

const blocks = [['0x0700','0x070D'],
                ['0x0710','0x072C'],
                ['0x0730','0x074A'],

                ['0x0700','0x070D'],
                ['0x0710','0x072C'],
                ['0x0730','0x074A'],

                ['0x0700','0x070D'],
                ['0x0710','0x072C'],
                ['0x0730','0x074A'],

                ['0x2190','0x21FF'],
                ['0x27F0','0x27FF'],
                ['0x2900','0x297F']];

const num_circles = 12;

for (var i = 0; i <= num_circles; i++) {
  const spanElement = document.createElement("span");
  spanElement.id = 'text_circle_' + i;
  spanElement.classList.add('text_circle');
  document.body.append(spanElement);
}

var hue_1 = fxrand().mapInt(0, 1, 0, 360);
var hue_2 = fxrand().mapInt(0, 1, 0, 360);
var sat_1 = fxrand().mapFloat(0, 1, 0.48, 0.72);
var sat_2 = fxrand().mapFloat(0, 1, 0.72, 0.96);
var lght_1 = fxrand().mapFloat(0, 1, 0, 0.48);
var lght_2 = fxrand().mapFloat(0, 1, 0.72, 0.84);

var color_1 = chroma(hue_1, sat_1, lght_1, 'hsl').hex();
var color_2 = chroma(hue_2, sat_2, lght_2, 'hsl').hex();

var colors = chroma.scale([color_1, color_2])
                   .mode('lch')
                   .colors(num_circles + 1);

for (var i = 0; i <= num_circles; i++) {
  var stringLine = '';
  var text_circle = document.getElementById('text_circle_' + i);
  var num_glyphs = fxrand().mapInt(0, 1, 1, 14);
  for (var j = 0; j < num_glyphs; j++) {
    var rand_block = fxrand().mapInt(0, 1, 0, blocks.length);
    var rand_glyph = uni_char(blocks[rand_block][0], blocks[rand_block][1]);
    stringLine += rand_glyph;
  }  
  text_circle.innerHTML = stringLine;
  text_circle.style.color = colors[i];
  const circleType = new CircleType(document.getElementById('text_circle_' + i))
                                   .radius(0)
                                   .dir(1);
}

var text_circles = document.getElementsByClassName('text_circle');
for (var i = 0; i <= num_circles; i++) {
  var num_glyphs = text_circles[i].children[0].children.length;
  for (var j = 0; j < num_glyphs; j++) {
    text_circles[i].children[0].children[j].classList.add('circleTypeGlyph');
  }
}

var ztxt = new Ztextify(".circleTypeGlyph", {
  depth: "50px",
  layers: 24,
  fade: true
});

var zLayers = document.getElementsByClassName("z-layers");
for (var i = 0; i < zLayers.length - 1; i++){
  var rot_x = fxrand().mapInt(0, 1, 24, 48);
  var rot_y = fxrand().mapInt(0, 1, 24, 48);
  zLayers[i].style.webkitTransform = "rotateX(" + rot_x + "deg) rotateY(" + rot_y  + "deg)";
  zLayers[i].style.mozTransform = "rotateX(" + rot_x + "deg) rotateY(" + rot_y  + "deg)";
  zLayers[i].style.msTransform = "rotateX(" + rot_x + "deg) rotateY(" + rot_y  + "deg)";
  zLayers[i].style.oTransform = "rotateX(" + rot_x + "deg) rotateY(" + rot_y  + "deg)";
  zLayers[i].style.transform = "rotateX(" + rot_x + "deg) rotateY(" + rot_y  + "deg)";
}