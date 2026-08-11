/** Copyright Richard Vigniel (RVig) 2022
 *
 * Generated image is licenced under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
 *
 **/


let n = 1000
let o = new Array(n)
const RNDMAX = 4999
let rnd = new Array(RNDMAX), rndindex = 0
let palette = [[255,255,255],[240,20,100],[250,230,50],[220,100,250],[250,120,50],[50,100,230]]
let paletteNames = ["White","Coral","Yellow","Purple","Orange","Blue"]
let count=0,bg,wrmin,wrmax,color1,color2,p=0
canvas = document.getElementsByTagName('canvas')[0]
ctx = canvas.getContext("2d")


windowResize()

for(i = 0; i<n;i++) { o[i] = i }
for(i = 0; i<RNDMAX;i++) { rnd[i] = fxrand() }

for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(fxrand() * (i + 1));
    const tmp = o[i];
    o[i] = o[j];
    o[j] = tmp;
  }

bg = fxrand()>0.5
const wr1 = Math.floor(rand(0,4))
const wr2 = Math.floor(rand(0,4))
wrmin = Math.min(wr1,wr2)*4+3
wrmax = Math.max(wr1,wr2)*4+3
color1 = Math.floor(rand(0,palette.length))
color2 = Math.floor(rand(0,palette.length))

window.$fxhashFeatures = {
  "Left colour":paletteNames[color2],
  "Right colour":paletteNames[color1],
  "Rectangle min width":["Very thin","Thin","Thick","Very thick"][Math.min(wr1,wr2)],
  "Rectangle max width":["Very thin","Thin","Thick","Very thick"][Math.max(wr1,wr2)],
  "Background":bg?"Black":"White"
}

window.addEventListener('resize',windowResize)
window.requestAnimationFrame(draw);


function rndInit() {
  rndindex = 0
}

var lastTime = 0
function draw(timestamp) {
  ctx.save()
  const deltaTime = (timestamp - lastTime)/1000;
  lastTime = timestamp;
  count++

  width = canvas.width
  height = canvas.height

  ctx.clearRect(0,0,width,height)
  ctx.fillStyle = bg ? 'black' : 'white'
  ctx.fillRect(0, 0, width, height)
  rndInit()

  p += deltaTime / Math.PI
  const c2 = palette[color1]
  const c1 = palette[color2]

  const d0 = Math.min(width/10,height/10)
  const  d2 = d0*2;
  const d = d0/4
  ctx.lineWidth = d0/200
  ctx.antialias = true

  for(let i=0;i<n;i++) {
    const k = o[i]/n
    const c0 = lerp(c1,c2,k)
    ctx.lineStyle = "rgba(0,0,0,200)"

    const dx = d2+k*(width-4*d0)
    const a0 = p*rand(-1,1)+rand(0,Math.PI*2)
    const x0 = dx+randGaussian(0,d)+Math.cos(a0)*d0
    const y0 = d2+randGaussian(d,d)+Math.sin(a0)*d0
    const a1 = p*rand(-1,1)+rand(0,Math.PI*2)
    const x1 = dx+randGaussian(0,d)+Math.cos(a1)*d0
    const y1 = height+randGaussian(-d,d)-d2+Math.sin(a1)*d0

    let v = {x:x1-x0,y:y1-y0}
    const mag = Math.sqrt(v.x*v.x+v.y*v.y)
    if(mag!=0) {
      v.x /= mag
      v.y /= mag
    }
    const tmp = v.x
    v.x = -v.y
    v.y = tmp
    const wr = rand(wrmin,wrmax)*width/1000

    v.x*=wr
    v.y*=wr

    ctx.fillStyle = "rgba("+c0[0]+","+c0[1]+","+c0[2]+",0.8)"

    ctx.beginPath();
    ctx.lineTo(x0-v.x,y0-v.y)
    ctx.lineTo(x0+v.x,y0+v.y)
    ctx.lineTo(x1+v.x,y1+v.y)
    ctx.lineTo(x1-v.x,y1-v.y)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

  }

  if(count==10) fxpreview()

  ctx.restore();
  window.requestAnimationFrame(draw);
}

function windowResize() {
  canvas.width = window.innerWidth*window.devicePixelRatio
  canvas.height = window.innerHeight*window.devicePixelRatio
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`;
}
function randGaussian(m=0,sd=1) {
  var u=0,v=0;
  while(u === 0) u = rand1();
  while(v === 0) v = rand1();
  return m+sd*(Math.sqrt(-2.0*Math.log(u))*Math.cos(2.0*Math.PI*v));
}

function rand1() {
  rndindex++
  rndindex %= RNDMAX
  return rnd[rndindex]
}

function rand(v1,v2) {
  return rand1()*(v2-v1)+v1;
}

function lerp(c1,c2,k) {
  return [
      (c2[0]-c1[0])*k+c1[0],
    (c2[1]-c1[1])*k+c1[1],
    (c2[2]-c1[2])*k+c1[2],
  ]
}

