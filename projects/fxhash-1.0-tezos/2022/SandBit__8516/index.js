// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }


const c = document.getElementById('bg');
const ctx = c.getContext('2d');

//const bits = 2 ** (9 - ~~((fxrand() * 5) + 3))
const bits = 2 ** (2 + ~~(fxrand() * 5))
const color = ~~(fxrand() * 360)
const colorYellow = 55;

//document.write(bits + ' | ' + color)

function drawSand(bits)
{
    for(let x = 0; x < 512; x += bits) for(let y = 0; y < 512; y += bits)
    {
        const s = ~~((.5 + (fxrand() / 2) - .25) * 100);
        const l = ~~((.5 + (fxrand() / 2) - .25) * 100);
        const localColor = fxrand() < .3 ? color : colorYellow;
        ctx.fillStyle = `hsl(${localColor}deg, ${s}%, ${l}%)`;
        ctx.fillRect(x,y,bits, bits);
    }
}

drawSand(bits);
