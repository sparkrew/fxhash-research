class Xorshift128 {
    constructor(seed) {
      this.seedState = new Uint32Array(4);
      this.state = new Uint32Array(4);
  
      if (seed) {
        this.seed(seed);
      } else {
        // Si no se proporciona una semilla, se utiliza una semilla predeterminada
        this.seed(Date.now());
      }
    }
  
    seed(seed) {
      // Inicializar el estado del generador con la semilla proporcionada
      const seedState = new Uint32Array(seed instanceof Array ? seed : [seed]);
      for (let i = 0; i < seedState.length; i++) {
        this.seedState[i] = seedState[i] || 0;
      }
      this.reset();
    }
  
    reset() {
      // Restaurar el estado del generador a partir de la semilla original
      for (let i = 0; i < this.seedState.length; i++) {
        this.state[i] = this.seedState[i];
      }
    }
  
    random() {
      // Generar un número pseudoaleatorio de 128 bits
      const t = this.state[3];
      let s = this.state[0];
      this.state[3] = this.state[2];
      this.state[2] = this.state[1];
      this.state[1] = s;
      s ^= s << 11;
      s ^= s >>> 8;
      this.state[0] = s ^ t ^ (t >>> 19);
  
      // Convertir el número de 128 bits en un número en punto flotante entre 0 y 1
      const MAX_UINT32 = 0xFFFFFFFF;
      return (this.state[0] >>> 0) / (MAX_UINT32 >>> 0);
    }
  
    randomInt(a, b) {
      const min = Math.min(a, b);
      const max = Math.max(a, b);
      const range = max - min + 1;
  
      return Math.floor(this.random() * range) + min;
    }
  
    randomFloat(a, b) {
      return this.random() * (b - a) + a;
    }
  
    randomElement(array) {
      const index = this.randomInt(0, array.length - 1);
      return array[index];
    }
  }


class Interpolate {

    static interpolateLine = (p1, p2, coef) => [lerp(p1[0], p2[0], coef), lerp(p1[1], p2[1], coef)];

    static interpoalteCurve(controlPoints, numPoints) {
        let bezierPoints = [];

        for (let i = 0; i <= numPoints; i++) {
            const t = i / numPoints;
            const point = this.calculateBezierCurve(controlPoints, t);
            bezierPoints.push(point);
        }

        return bezierPoints;
    }


    static factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }

    static binomialCoefficient(n, k) {
        return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
    }

    static bernsteinPolynomial(i, n, t) {
        const binomial = this.binomialCoefficient(n, i);
        const tPower = Math.pow(t, i);
        const oneMinusT = Math.pow(1 - t, n - i);
        return binomial * tPower * oneMinusT;
    }

    static calculateBezierCurve(controlPoints, t) {
        const n = controlPoints.length - 1;
        let result = [0, 0];

        for (let i = 0; i <= n; i++) {
            const bernstein = this.bernsteinPolynomial(i, n, t);
            const point = controlPoints[i];
            result[0] += bernstein * point[0];
            result[1] += bernstein * point[1];
        }

        return result;
    }

}



class mathTool {
    static clamp = (v, min = 0, max = 1) => v < min ? min : v > max ? max : v;
    static percent = (v, min = 0, max = 1) => max - min ? clamp((v - min) / (max - min)) : 0;
}


class arrayManage {
    static getLimits(array) {
        let xMin = Infinity;
        let yMin = Infinity;
        let xMax = -Infinity;
        let yMax = -Infinity;

        for (let i = 0; i < array.length; i++) {
            const [x, y] = array[i];

            xMin = Math.min(xMin, x);
            yMin = Math.min(yMin, y);
            xMax = Math.max(xMax, x);
            yMax = Math.max(yMax, y);
        }

        return { xMin: xMin, yMin: yMin, xMax: xMax, yMax: yMax };
    }

    static shuffle(array, xorshift) {
        const length = array.length;

        for (let i = length - 1; i > 0; i--) {
            const j = xorshift.randomInt(0, i);
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    //---Require p5js
    static shuffleNoise(array) {
        let xOff = 0;
        let step = 0.02;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(noise(xOff) * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            xOff += step;
        }
        return array;
    };

    static rotatePoints(points, angle, centerX = points[0][0], centerY = points[0][1]) {
        let rotatedPoints = [];

        const radians = angle * (Math.PI / 180);
        const cosAngle = Math.cos(radians);
        const sinAngle = Math.sin(radians);

        for (let i = 0; i < points.length; i++) {
            let x = points[i][0] - centerX;
            let y = points[i][1] - centerY;

            let rotatedX = x * cosAngle - y * sinAngle;
            let rotatedY = x * sinAngle + y * cosAngle;

            rotatedX += centerX;
            rotatedY += centerY;

            rotatedPoints.push([rotatedX, rotatedY]);
        }

        return rotatedPoints;
    }

    static rayCasting(point, polygon) {
        const n = polygon.length
        let isIn = false
        const x = point[0]
        const y = point[1]
        let x1, x2, y1, y2

        x1 = polygon[n - 1][0]
        y1 = polygon[n - 1][1]

        for (let i = 0; i < n; ++i) {
            x2 = polygon[i][0];
            y2 = polygon[i][1];

            if (y < y1 !== y < y2 && x < (x2 - x1) * (y - y1) / (y2 - y1) + x1) {
                isIn = !isIn;
            }
            x1 = x2
            y1 = y2
        }

        return isIn;
    }

    static getBaricenter(points) {
        let x = 0;
        let y = 0;

        for (let i = 0; i < points.length; i++) {
            x += points[i][0];
            y += points[i][1];
        }

        let centerX = x / points.length;
        let centerY = y / points.length;

        return [centerX, centerY]
    }
}


class colorsManage {
    static hexToRgb(hex) {
        hex = hex.slice(1);
        let red = parseInt(hex.substring(0, 2), 16);
        let green = parseInt(hex.substring(2, 4), 16);
        let blue = parseInt(hex.substring(4, 6), 16);

        return { red: red, green: green, blue: blue };
    }

    //==Requiere p5js

    static setGradient(x, y, w, h, c1, c2) {
        noFill();
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }

    static getDarkestColor(colors) {
        let darkestColor = colors[0];

        for (let i = 1; i < colors.length; i++) {
            const currentColor = colors[i];

            if (getBrightness(currentColor) < getBrightness(darkestColor)) {
                darkestColor = currentColor;
            }
        }

        return darkestColor;
    }

    static getLightestColor(colors) {
        let lightestColor = colors[0];

        for (let i = 1; i < colors.length; i++) {
            const currentColor = colors[i];

            if (getBrightness(currentColor) > getBrightness(lightestColor)) {
                lightestColor = currentColor;
            }
        }

        return lightestColor;
    }

    static getBrightness(color) {
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);

        return (r + g + b) / 3;
    }


    static setGradientShape(x, y, w, h, c1, c2, polygon) {
        noFill();
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            for (let j = x; j < x + w; j++) {
                stroke(c)
                if (rayCasting([j, i], polygon)) {

                    fill(c)
                    circle(j, i, height * 0.0015)
                }

            }

        }
    }
}



//======Canvas

function setFormat(format) {
    const formats = {
        "Small square" :  { w: 148, h: 148 },
        "Medium square":  { w: 210, h: 210 },
        "Large square" :  { w: 297, h: 297 },
        "Portrait A4"  :  { w: 210, h: 297 },
        "Landscape A4" :  { w: 297, h: 210 },
        "Landscape A5" :  { w: 210, h: 148 },
    };

    let canvasWidth  = 0;
    let canvasHeight = 0;

    const formatData = formats[format];

    if (formatData) {
        const windowWidthToHeight = windowWidth / windowHeight;

        if (windowWidthToHeight > formatData.w / formatData.h) {
            canvasWidth = windowHeight * (formatData.w / formatData.h);
            canvasHeight = windowHeight;
        } else {
            canvasWidth = windowWidth;
            canvasHeight = windowWidth / (formatData.w / formatData.h);
        }
    } else {
        console.error("Invalid format");
        return;
    }

    return { "w": canvasWidth, "h": canvasHeight, "name": format, "w_svg":formatData.w, "h_svg":formatData.h}
}


function convertToPixelMeasurements(widthMM, heightMM) {
    const inchesPerMM = 1 / 25.4;
    const resolutionPPI = 406;

    const widthInches = widthMM * inchesPerMM;
    const heightInches = heightMM * inchesPerMM;

    const widthPixels = Math.round(widthInches * resolutionPPI);
    const heightPixels = Math.round(heightInches * resolutionPPI);

    return { w: widthPixels, h: heightPixels };
}



function setTitle(title){
    document.querySelector("title").innerHTML = title;
}




function paperTexture(instance) {
    noFill();
    textureNum = 4000;
    for (i = 0; i < textureNum; i++) {
        stroke(instance.randomInt(100, 150), instance.randomInt(100, 150), instance.randomInt(100, 150), 14);//12
        x = instance.randomFloat(-width * 0.2, width * 1.2);
        y = instance.randomFloat(-height * 0.2, height * 1.2);
        push();
        translate(x, y);
        strokeWeight(3);
        point(0, 0);
        strokeWeight(1);
        rotate(instance.randomInt(0,PI * 2));

        curve(instance.randomFloat(width * .12, width * .44), 0, 0, instance.randomFloat(-width * .1, width * .1), instance.randomFloat(-width * .1, width * .1), instance.randomFloat(width * .12, width * .24), instance.randomFloat(width * .12, width * .24), instance.randomFloat(width * .12, width * .44))

        pop();
    }
}
 