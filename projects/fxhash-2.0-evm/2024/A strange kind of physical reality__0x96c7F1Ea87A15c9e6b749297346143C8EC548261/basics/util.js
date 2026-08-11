function hexToRGB(hex) {
  hex = hex.replace('#', '');
  var aRgbHex = hex.match(/.{1,2}/g);
 
  return {
      r: parseInt(aRgbHex[0], 16),
      g: parseInt(aRgbHex[1], 16),
      b: parseInt(aRgbHex[2], 16)
  };
}


function rgbToHSB(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;

  let d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
      h = 0; // achromatic
  } else {
      switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
}

function hexToHSB(hex) {
  let rgb = hexToRGB(hex);
  return rgbToHSB(rgb.r, rgb.g, rgb.b);
}

function hsbToRGB(h, s, v) {
  s /= 100;
  v /= 100;

  let k = (n) => (n + h / 60) % 6;
  let f = (n) => v - v * s * Math.max(Math.min(k(n), 4 - k(n), 1), 0);

  let r = Math.round(255 * f(5));
  let g = Math.round(255 * f(3));
  let b = Math.round(255 * f(1));


  return { r, g, b };
}

function rgbToHex(r, g, b) {
  let toHex = (c) => {
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  };

  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function hsbToHex(h, s, b) {
  let rgb = hsbToRGB(h, s, b);
  
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}