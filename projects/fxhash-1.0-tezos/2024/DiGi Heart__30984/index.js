//Copyrighted by AItezoart. Do not use without permission.
document.addEventListener('DOMContentLoaded', function() {

    function generateNoise(width, height) {
        let noise = [];
        for (let x = 0; x < width; x++) {
            noise[x] = [];
            for (let y = 0; y < height; y++) {
                noise[x][y] = $fx.rand();
            }
        }
        return noise;
    }

    function interpolate(a, b, t) {
        return a * (1 - t) + b * t;
    }

    function smoothNoise(x, y, noise) {
        let fractX = x - Math.floor(x);
        let fractY = y - Math.floor(y);

        let x1 = (Math.floor(x) + noise.length) % noise.length;
        let y1 = (Math.floor(y) + noise[0].length) % noise[0].length;

        let x2 = (x1 + noise.length - 1) % noise.length;
        let y2 = (y1 + noise[0].length - 1) % noise[0].length;

        let value = 0.0;
        value += fractX * fractY * noise[x1][y1];
        value += (1 - fractX) * fractY * noise[x2][y1];
        value += fractX * (1 - fractY) * noise[x1][y2];
        value += (1 - fractX) * (1 - fractY) * noise[x2][y2];

        return value;
    }

    function perlinNoise(width, height, noise) {
        let result = [];
        for (let x = 0; x < width; x++) {
            result[x] = [];
            for (let y = 0; y < height; y++) {
                let value = 0.0;
                let frequency = 1.0;
                let amplitude = 1.0;
                let maxValue = 0.0;

                for (let octave = 0; octave < 8; octave++) {
                    value += smoothNoise(x * frequency, y * frequency, noise) * amplitude;
                    maxValue += amplitude;
                    amplitude *= 0.5;
                    frequency *= 2.0;
                }

                result[x][y] = value / maxValue;
            }
        }
        return result;
    }


    function drawNoise(canvas, noise, r, g, b) {
        let ctx = canvas.getContext('2d');
        let imageData = ctx.createImageData(canvas.width, canvas.height);

        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                let value = Math.floor(noise[x][y] * 255);
                let index = (x + y * canvas.width) * 4;
                imageData.data[index] = r * value; 
                imageData.data[index + 1] = g * value;
                imageData.data[index + 2] = b * value;
                imageData.data[index + 3] = 255;
            }
        }

        ctx.putImageData(imageData, 0, 0);
        xxx=Math.floor($fx.rand()*10)+2;
        ctx.filter = 'blur('+xxx+'px)'; 
        ctx.drawImage(canvas, 0, 0);
        ctx.filter = 'none'; 
    }


    function drawHeartWithEdgeCircles(canvas, numCircles, minRadius, maxRadius, size, r, g, b) {
        let ctx = canvas.getContext('2d');
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        xxx=Math.floor($fx.rand()*5);
        ctx.filter = 'blur('+xxx+'px)'; 

        ctx.beginPath();
        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
            let x = size * 16 * Math.pow(Math.sin(t), 3);
            let y = size * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            let px = centerX + x;
            let py = centerY - y; 


            let radius = minRadius +Math.floor($fx.rand() * (maxRadius - minRadius));
            let angle = Math.floor($fx.rand()*2) * Math.PI;
            let cx = px + radius * Math.cos(angle);
            let cy = py + radius * Math.sin(angle);

            ctx.beginPath();

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();

        }
        ctx.closePath();
    }


        let canvas = document.getElementById('AItezoart');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        let backgroundColorR = 0.2;
        let backgroundColorG = 0.5;
        let backgroundColorB = 0.8;

        let noise = generateNoise(canvas.width, canvas.height);
        let perlin = perlinNoise(canvas.width, canvas.height, noise);


        drawNoise(canvas, perlin, backgroundColorR, backgroundColorG, backgroundColorB);


        let heartR = 255;
        let heartG = 0;
        let heartB = 0;
        for (let t = 0; t <= Math.floor($fx.rand()*15)+10; t += 1) {

        drawHeartWithEdgeCircles(canvas, 100, 2, Math.floor($fx.rand()*10), t, heartR, heartG, heartB);
        }
    

 
    $fx.preview ();

    console.log($fx.rand());
    console.log(5*$fx.rand());
    console.log(Math.floor(5*$fx.rand()));
    
    var rarity=Math.floor(10*$fx.rand());
    
    console.log("Rarity = ", rarity);
    window.$fxhashFeatures = {
     "Rarity":  rarity
    }
    
    
});
