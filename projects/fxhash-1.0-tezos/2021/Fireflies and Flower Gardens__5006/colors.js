const MAX_DEPTH = 255;
const COLOR_DEPTH = 4;

/**
 * 
 */
class Color {
    constructor(red, green, blue) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.hexStr = Number(red).toString(16).padStart(2, '0') + 
                      Number(green).toString(16).padStart(2, '0') + 
                      Number(blue).toString(16).padStart(2, '0');
    }

    static newFromHexStr(colorStr) {
        let red = parseInt(colorStr.substr(0, 2), 16);
        let green = parseInt(colorStr.substr(2, 2), 16);
        let blue = parseInt(colorStr.substr(4, 2), 16);

        return new Color(red, green, blue);
    }

    static newFromToneRGB(seedR, seedG, seedB, radius) {
        let red = seedR + randRangeInt(-radius, radius);
        let green = seedG + randRangeInt(-radius, radius);
        let blue = seedB + randRangeInt(-radius, radius);

        red = setRange(red, MAX_DEPTH);
        green = setRange(green, MAX_DEPTH);
        blue = setRange(blue, MAX_DEPTH);

        return new Color(red, green, blue);
    }

    static newFromToneCSS(colorStr, radius) {
        let seedR = parseInt(colorStr.substr(0, 2), 16);
        let seedG = parseInt(colorStr.substr(2, 2), 16);
        let seedB = parseInt(colorStr.substr(4, 2), 16);

        let red = seedR + randRangeInt(-radius, radius);
        let green = seedG + randRangeInt(-radius, radius);
        let blue = seedB + randRangeInt(-radius, radius);

        red = setRange(red, MAX_DEPTH);
        green = setRange(green, MAX_DEPTH);
        blue = setRange(blue, MAX_DEPTH);

        return new Color(red, green, blue);
    }

    static newFromPalette(palette) {
        let i = randRangeInt(0, palette.colorList.length - 1);
        return new Color(palette.colorList[i].r, palette.colorList[i].g, palette.colorList[i].b);
    }
};

/**
 * 
 */
class ColorPalette {
    constructor(ccList) {
        this.colorList = [];

        for (let i = 0; i < ccList.length; i++) {
            this.colorList.push(Color.newFromHexStr(ccList[i]));
        }
    }
};

/**
 * HELPER functions to convert from RGB to HSV
 */
 function rgb2hsv(r, g, b) {
    r = r / MAX_DEPTH;
    g = g / MAX_DEPTH;
    b = b / MAX_DEPTH;

    let cMax = Math.max(r, g, b);
    let cMin = Math.min(r, g, b);
    let delta = cMax - cMin;
    let h, s, v;

    if (delta == 0) {
        h = 0;
    } else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    } else if (cMax == g) {
        h = 60 * ((b - r) / delta + 2);
    } else {
        h = 60 * ((r - g) / delta + 4);
    }

    if (cMax == 0) {
        s = 0;
    } else {
        s = delta / cMax;
    }

    v = cMax;

    return [h, s, v];
}

/**
 * HELPER functions to convert from HSV to RGB
 */
function hsv2rgb(h, s, v) {
    if (s == 0.0) {
        v *= MAX_DEPTH;
        return [v, v, v];
    } 
    
    let i = Math.round(h / 360 * 6.0);
    let f = (h / 360 * 6.0) - i;

    let [p, q, t] = [Math.round(MAX_DEPTH*(v*(1.0-s))), Math.round(MAX_DEPTH*(v*(1.0-s*f))), Math.round(MAX_DEPTH*(v*(1.0-s*(1.0-f))))];

    v*=MAX_DEPTH; 
    i = i % 6;

    if (i == 0) {
        return [v, t, p];
    } else if (i == 1) {
        return [q, v, p];
    } else if (i == 2) {
        return [p, v, t];
    } else if (i == 3) {
        return [p, q, v];
    } else if (i == 4) {
        return [t, p, v];
    } else if (i == 5) {
        return [v, p, q];
    } else {
        return [0, 0, 0];
    }
}

function shift_hue(srcImg, dstImg, offset) {
    // Copy the src image in the dst one, without it does not work [????] - TODO
    dstImg.copy(srcImg, 0, 0, srcImg.width, srcImg.height, 0, 0, dstImg.width, dstImg.height);
  
    // Load the pixel arrays
    srcImg.loadPixels();
    dstImg.loadPixels();

    // Iterate over each pixel 
    for (let i = 0; i < COLOR_DEPTH * (srcImg.width * srcImg.height); i += COLOR_DEPTH) {
        // Process the pixel if it is not trasparent, i.e. alpha ch != 0
        if (srcImg.pixels[i+3] == MAX_DEPTH) {
            // Get the HSV coords.
            let [h,s,v] = rgb2hsv(srcImg.pixels[i], srcImg.pixels[i+1], srcImg.pixels[i+2]);

            // Add an offset to the h, rember the wrap around 2PI
            h += offset;

            if (h < 0) {
                h = 360 + h;
            } else if (h > 360) {
                h = h - 360;
            }

            // Set back to RGB
            [dstImg.pixels[i], dstImg.pixels[i+1], dstImg.pixels[i+2]]= hsv2rgb(h, s, v);
        }
    }

    dstImg.updatePixels();
}