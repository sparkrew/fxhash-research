// NBR
// Code by Lammetje
// Twitter: @lammetje_nl
// fxhash.xyz/u/Lammetje
// objkt.com/profile/lammetje

console.log("NBR by Lammetje 2022")



let colorarray = [
  ["F20544","8C2656","3F618C","012340","011826"],
  ["ea2f3d","36393F","484C52","202225","2F3136"],
  ["F20505","730202","400101","260101"],
  ["730D1F","400711","8C0D2F","0D0D0D"],
  ["732634","090C40","023859","04738C","F23A29"],
]


var colornr = randomIntFromInterval(0, colorarray.length-1)
let colors = colorarray[colornr]
var spincolor = randomIntFromInterval(-15, 15)

for(i = 0 ; i < colors.length ; i++ ) {
  colors[i] = tinycolor(colors[i]).spin(spincolor).toString();
}

var colorold1 = colors[0];
var colornow1 = colors[0];
var colorold2 = colors[0];
var colornow2 = colors[0];
var colorold3 = colors[0];
var colornow3 = colors[0];
var colorold4 = colors[0];
var colornow4 = colors[0];

while(colornow1 == colorold1) {
  colornow1 = randomarray(colors)
}
while(colornow2 == colorold2) {
  colornow2 = randomarray(colors)
}
while(colornow3 == colorold3) {
  colornow3 = randomarray(colors)
}
while(colornow4 == colorold4) {
  colornow4 = randomarray(colors)
}

var aantal = randomIntFromInterval(3, 12)
var divwidth = Math.round(4000/aantal);
var xpos = 0;
var ypos = 0;
var numbertotal = 0;

function startit() {
  for(i = 0 ; i < (aantal*aantal) ; i++ ) {

      while(colornow1 == colorold1) {
        colornow1 = randomarray(colors)
      }
      while((colornow2 == colorold2) || (colornow2 == colornow1)) {
        colornow2 = randomarray(colors)
      }
      while(colornow3 == colorold3) {
        colornow3 = randomarray(colors)
      }
      while((colornow4 == colorold4) || (colornow4 == colornow3)) {
        colornow4 = randomarray(colors)
      }
      var divsvg = '<div class="block block'+i+'" style="width:'+divwidth+'px; height:'+divwidth+'px;">';
      divsvg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" overflow="visible">';
      divsvg += '<defs>\
              <linearGradient id="shapegradone'+i+'" gradientTransform="rotate(90)"><stop offset="0%" stop-color="' + colornow1 + '" /><stop offset="100%" stop-color="' + colornow2 + '" /></linearGradient>\
              <linearGradient id="shapegradtwo'+i+'" gradientTransform="rotate(90)"><stop offset="0%" stop-color="' + colornow3 + '" /><stop offset="100%" stop-color="' + colornow4 + '" /></linearGradient>\
              </defs>';
      var welke = randomIntFromInterval(0, 9)
      
      switch(welke) {
         case 0:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M800 0H0v1000h1000V0H800zm0 800H200V200h600v600z"/>';
          break;
        case 1:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M400 0h200v1000H400z"/>';
          break;
        case 2:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M199.9 800V600h800V0H0v200h800v200H0v400h0v200H1000V800z"/>';
          break; 
        case 3:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M0 0v200h800v200H0v200h800v200H0v200h1000V0z"/>';
          break;
        case 4:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M800 0v400H200V0H0v600h800v400h200V0z"/>';
          break;
        case 5:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M1000 200V0H0v600h800v200H0v200h1000V400H200V200z"/>';
          break; 
        case 6:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M200 400V0H0v1000h1000V400H200zm600 400H200V600h600v200z"/>';
          break;
        case 7:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M720.2 200H0V0h1000L601 1000H401l319.2-800"/>';
          break;
        case 8:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M0 0v1000h1000V0H0zm800 800H200V600h600v200zm0-400H200V200h600v200z"/>';
          break; 
        case 9:
          divsvg += '<path fill="url(#shapegradone'+i+')" d="M0 0h1000v1000H0z"/><path class="dropsh" fill="url(#shapegradtwo'+i+')" d="M800 0H0v600h800v400h200V0H800zm0 400H200V200h600v200z"/>';
          break;
      }
      divsvg += '</svg>';
      divsvg += '</div>';

      document.querySelector('.artwrap').append(createElementFromHTML(divsvg));
      var shadowd = randomIntFromInterval(100, 150)
      gsap.set(".block"+ i, { x:(xpos*divwidth), y:(ypos*divwidth), rotation:randomIntFromInterval(-1, 1)*90 })
      gsap.set(".block"+ i +" .dropsh", { filter: "drop-shadow(0px 0px " + shadowd +"px rgba(0, 0, 0, "+ (randomIntFromInterval(3, 5)/10) +") ) " })

      colorold1 = colornow1
      colorold2 = colornow2
      colorold3 = colornow3
      colorold4 = colornow4

      xpos++;
      if(xpos >= aantal) {
        xpos = 0;
        ypos++;
      }

  }
}
window.$fxhashFeatures = {
  "Numbers count": (aantal*aantal),
  "Colors": String(colors),
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
function randomIntFromInterval(min, max) { 
  return Math.floor(fxrand() * (max - min + 1) + min)
}
function randomarray(inputarray) {
  return inputarray[Math.floor(fxrand()*inputarray.length)];
}

function resize() {
  let windowwidth = window.innerWidth;
  let windowheight = window.innerHeight;
  let scaleart = 1;
  if(windowwidth >= windowheight) {
    scaleart = Math.round((windowheight / 4000 * 100))/100
  }
  else {
    scaleart = Math.round((windowwidth / 4000 * 100))/100
  }
  gsap.set('.artscale', {scale:scaleart, transformOrigin: '50% 50%'})
}
window.addEventListener('resize', function(event) {
  resize()
}, true);
resize()

document.addEventListener('keypress', logKey);
function logKey(e) {
  if(e.key == '1') {
    savepng();
  }
}

function savepng() {
  var node = document.getElementById('artplace');
  domtoimage.toBlob(node, {width:4000, height:4000}).then(function (blob) {
    window.saveAs(blob, "nbr_by_lammetje.png");
  });      
}

