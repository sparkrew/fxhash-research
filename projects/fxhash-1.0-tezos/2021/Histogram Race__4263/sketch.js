
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b7

const colorPink = ["#d7c0d0","#f7c7db","#f79ad3","#c86fc9","#8e518d","#8e518d","#c86fc9","#f79ad3","#f7c7db","#d7c0d0"]
const colorVivo = ["#fc440f","#1effbc","#7c9299","#1f01b9","#b4e33d","#b4e33d","#1f01b9","#7c9299","#1effbc","#fc440f"]
const ColorBlueCoffe = ["#3c3744","#090c9b","#3d52d5","#b4c5e4","#fbfff1","#fbfff1","#b4c5e4","#3d52d5","#090c9b","#3c3744"]
const ColorVioleta = ["#4c5b5c","#ff715b","#f9cb40","#bced09","#2f52e0","#2f52e0","#bced09","#f9cb40","#ff715b","#4c5b5c"]
const ColorReds = ["#660708","#ba181b","#e5383b","#d3d3d3","#f5f3f4","#f5f3f4","#d3d3d3","#e5383b","#ba181b","#660708",]
const ColorRnbw = ["#e6c229","#f17105","#d11149","#6610f2","#1a8fe3","#1a8fe3","#6610f2","#d11149","#f17105","#e6c229"]
const ColorEst = ["#586ba4","#324376","#f5dd90","#f68e5f","#f76c5e","#f76c5e","#f68e5f","#f5dd90","#324376","#586ba4"]
const ColorMagna = ["#3c1642","#086375","#1dd3b0","#affc41","#b2ff9e","#b2ff9e","#affc41","#1dd3b0","#086375","#3c1642"]
const ColorStd = ["#74B3CE","#508991","#345A66","#264250","#1F3645","#1F3645","#264250","#345A66","#508991","#74B3CE"]
const palletes = [colorPink, colorVivo, ColorBlueCoffe, ColorVioleta, ColorReds, ColorRnbw, ColorEst, ColorMagna, ColorStd]

const ColorBng = ["#a9a9a9","#989898","#878787","#767676","#656565","#555555","#444444","#333333","#222222","#111111"]

let color_pallete = palletes[rnd_int(0,palletes.length - 1)]
let color_bng = ColorBng[rnd_int(0,ColorBng.length -1)]
let len = rnd_int(10,20)
let axis = new Array(len).fill(0)
let step = 25;
const offset_x = 30;
const offset_y = 400;
let upper_cap = 20;
const radius = 10;
const shadow_blur = 5
let delay = 10

const resetAxis = ()=>{
  axis = new Array(len).fill(0)
  for(let i =0;i<axis.length;i++)
  {
        const color_index = Math.floor(i/(axis.length/color_pallete.length))
        let c = color(color_pallete[color_index] )
        drawingContext.shadowColor = c
        fill(c)
        circle(offset_x+i*step,offset_y,radius)
  }
}

const render = ()=>{
  const index = rnd_int(0,axis.length-1)
  axis[index]++
  const color_index = Math.floor(index/(axis.length/color_pallete.length))
  let c = color(color_pallete[color_index] )
  drawingContext.shadowColor = c
  fill(c)
  circle(offset_x+index*step,offset_y -axis[index]*step,radius)
  circle(offset_x+index*step,offset_y +axis[index]*step,radius)
  if(axis[index]>=upper_cap)
    {
      clear()
      color_pallete = palletes[rnd_int(0,palletes.length - 1)]
      color_bng = ColorBng[rnd_int(0,ColorBng.length -1)]
      createCanvas(800, 800);
      noFill()
      background(color_bng)
      strokeWeight(3)
      blendMode(SCREEN)
      drawingContext.shadowBlur = shadow_blur;
      resetAxis()
    }
}

function setup(){
  len = rnd_int(15,20)
  step = 780/len
  upper_cap = len/2
  console.log(len)
  axis = new Array(len).fill(0)
  delay = rnd_int(5,10)
  
  
  createCanvas(800, 800);
  noFill()
  background(color_bng)
  strokeWeight(3)
  blendMode(SCREEN)
  drawingContext.shadowBlur = shadow_blur;
  resetAxis()
}

function draw(){
  if(frameCount %delay == 0)
    {
      render()      
    }
}