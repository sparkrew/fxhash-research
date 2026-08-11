noiseVar = Math.ceil(fxrand() * 10)
pixelVar = Math.ceil(fxrand() * 10) * 100
kaleidVar = Math.ceil(fxrand() * 10)
brightnessVar = fxrand()
window.$fxhashFeatures = {
  Brightness: brightnessVar,
  Noise: noiseVar,
  Kaleid: kaleidVar,
  Pixel: pixelVar,
}

console.log($fxhashFeatures)
console.log('Noisy Strips')
console.log('Distorted')
console.log('January 2022')

function loadImage() {
  var myImage = new Image()
  myImage.onload = () =>
    s0.init({ src: myImage, dynamic: false })
  myImage.src = './the-maze.png'
}
loadImage()
src(s0)
  .brightness(brightnessVar)
  .pixelate(pixelVar, pixelVar)
  .diff(
    src(s0)
      .mask(noise(noiseVar * 100, 0.05))
      .diff(
        src(s0).modulate(
          osc(6, 0, 1.5)
            .modulate(noise(noiseVar).sub(gradient()), 1)
            .brightness(-0.5),
          0.05
        )
      )
  )
  .modulateScale(
    solid()
      .kaleid(kaleidVar)
      .brightness(() => Math.random() * 0.01)
  )
  .mult(shape(100, 0.72))
  .out()

//-------------------------------------------------------------------------------------------
fxpreview()
document.addEventListener('keyup', (event) => {
  if (event.key === 's' || event.key === 'S') {
    event.preventDefault()
    screencap()
  }
})
