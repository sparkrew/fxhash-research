function rrnd(min=0,max=1, inte=false) {
    min = isNaN(min) ? 0 : min;
    max = isNaN(max) ? 1 : max;
    if (!inte) return fxrand()*(max-min)+min;
    return Math.floor(fxrand()*(max-min)+min);
}

function hex2Color(hex, alphaGlobal_ = 255) {
    if (!hex) {
      console.error("Error color", hex)
      return color(0,0,0,0);
    }
    if ( hex[0] == "#" ) hex = hex.substr(1);
    a=alphaGlobal_;
    r=parseInt(hex.slice(0, 2), 16);
    g=parseInt(hex.slice(2, 4), 16);
    b=parseInt(hex.slice(4, 6), 16);
    al=parseInt(hex.slice(6, 8), 16);
    if (al) a=al;
    return color(r,g,b,a);
}
  
function checkPoundHexColor(col) {
    if ( col[0] == "#" ) return col;
    return "#"+col;
}
  
function LightenDarkenColor(col,amt) {
    if (col===undefined) return "000000";
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;  }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function pickRandomElementFromArray(arr) {
    if (arr.length==0) return;
    return arr[Math.floor(rrnd(0,arr.length))];
}

function dec2Hex(numb) {
    if (isNaN(numb)) return;
    numb=Math.floor(numb);
    return numb.toString(16);
}
