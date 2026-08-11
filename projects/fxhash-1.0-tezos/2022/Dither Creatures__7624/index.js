// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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

// this code writes the values to the DOM as an example
// const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container)

const vm = new Vue({
  el: '#root',
  data() {
    return {
      hue: window.hue,
      hueShift: window.hueShift,
      light: window.light,
      saturation: window.saturation,
      canvasSize: 0,
      ctx: null,
      dpr: null
    }
  },
  mounted() {
    let c = document.getElementById("canvas");
    let dpr = window.devicePixelRatio || 1;
    let ctx = c.getContext("2d");
    this.canvasSize = 5025;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high'
    this.ctx = ctx;

    setTimeout(() => {
      this.generate();
    },10);
  },
  methods: {
    generate() {
      let ctx = this.ctx;
      let deg = this.deg;

      ctx.fillStyle = `hsl(${this.hue},${this.saturation},5%)`;
      ctx.fillRect(0, 0, this.canvasSize, this.canvasSize);

      let squareSize = 25;
      for (let j=0;j<50;j++) {
        let hue = this.hue;
        let hueShift = this.hueShift;
        let s = this.saturation;
        let l = this.light;
        let x=2500;
        let y=2500;
        let xo=0;
        let yo=0;
        let size=Math.floor(fxrand()*1000)+10;
        for (let i=0;i<size;i++) {
          xo += (fxrand() > .5) ? squareSize : -squareSize;
          yo += (fxrand() > .5) ? squareSize : -squareSize;
          hue += (fxrand() > .5) ? hueShift : hueShift*-1;
          if (hue > 360) { hue=360-hue; }
          if (hue < 0) { hue=360+hue; }

          if (xo>0 && yo>0) {
            ctx.fillStyle = `hsl(${hue},${s},${l})`;
            //ctx.fillStyle = '#fff';
            ctx.fillRect(x+xo-squareSize, y+yo-squareSize, squareSize, squareSize);
            ctx.fillRect(x-xo+squareSize, y-yo+squareSize, squareSize, squareSize);
            ctx.fillRect(x+xo-squareSize, y-yo+squareSize, squareSize, squareSize);
            ctx.fillRect(x-xo+squareSize, y+yo-squareSize, squareSize, squareSize);
          }
        }
      }

      for (let j=0;j<50;j++) {
        let hue = this.hue;
        let hueShift = this.hueShift;
        let s = this.saturation;
        let l = this.light;
        let xo=0;
        let yo=0;
        let size=Math.floor(fxrand()*1000)+10;
        for (let i=0;i<size;i++) {
          xo += (fxrand() > .5) ? squareSize : -squareSize;
          yo += (fxrand() > .5) ? squareSize : -squareSize;
          hue += (fxrand() > .5) ? hueShift : hueShift*-1;
          if (hue > 360) { hue=360-hue; }
          if (hue < 0) { hue=360+hue; }

          if (xo>0 && yo>0) {
            ctx.fillStyle = `hsl(${hue},${s},${l})`;
            //ctx.fillStyle = '#fff';
            ctx.fillRect(0+xo-squareSize, 0+yo-squareSize, squareSize, squareSize);
            ctx.fillRect(5025-xo, 5025-yo, squareSize, squareSize);
            ctx.fillRect(0+xo-squareSize, 5025-yo, squareSize, squareSize);
            ctx.fillRect(5025-xo, 0+yo-squareSize, squareSize, squareSize);
          }
        }
      }

      for (let j=0;j<50;j++) {
        let hue = this.hue;
        let hueShift = this.hueShift;
        let s = this.saturation;
        let l = this.light;
        let xo=0;
        let yo=0;
        let size=Math.floor(fxrand()*150)+10;
        for (let i=0;i<size;i++) {
          xo += (fxrand() > .5) ? squareSize : -squareSize;
          yo += (fxrand() > .5) ? squareSize : -squareSize;
          hue += (fxrand() > .5) ? hueShift : hueShift*-1;
          if (hue > 360) { hue=360-hue; }
          if (hue < 0) { hue=360+hue; }

          if (xo>0 && yo>0) {
            ctx.fillStyle = `hsl(${hue},${s},${l})`;
            //ctx.fillStyle = '#fff';
            ctx.fillRect(0+xo-squareSize, 2500+yo-squareSize, squareSize, squareSize);
            ctx.fillRect(0+xo-squareSize, 2500-yo+squareSize, squareSize, squareSize);

            ctx.fillRect(5025-xo, 2500+yo-squareSize, squareSize, squareSize);
            ctx.fillRect(5025-xo, 2500-yo+squareSize, squareSize, squareSize);
          }
        }
      }

      for (let j=0;j<50;j++) {
        let hue = this.hue;
        let hueShift = this.hueShift;
        let s = this.saturation;
        let l = this.light;
        let xo=0;
        let yo=0;
        let size=Math.floor(fxrand()*150)+10;
        for (let i=0;i<size;i++) {
          xo += (fxrand() > .5) ? squareSize : -squareSize;
          yo += (fxrand() > .5) ? squareSize : -squareSize;
          hue += (fxrand() > .5) ? hueShift : hueShift*-1;
          if (hue > 360) { hue=360-hue; }
          if (hue < 0) { hue=360+hue; }

          if (xo>0 && yo>0) {
            ctx.fillStyle = `hsl(${hue},${s},${l})`;
            //ctx.fillStyle = '#fff';
            ctx.fillRect(2500+xo-squareSize, 0+yo-squareSize, squareSize, squareSize);
            ctx.fillRect(2500-xo+squareSize, 0+yo-squareSize, squareSize, squareSize);

            ctx.fillRect(2500+xo-squareSize, 5025-yo, squareSize, squareSize);
            ctx.fillRect(2500-xo+squareSize, 5025-yo, squareSize, squareSize);
          }
        }
      }
    },
    deg(a) {
      return a * (Math.PI/180);
    }
  }
});