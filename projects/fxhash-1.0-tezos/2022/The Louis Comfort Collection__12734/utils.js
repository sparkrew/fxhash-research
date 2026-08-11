const random = (a = 1, b = 0) => fxrand() * (b - a) + a
const round_random = (a = 1, b = 0) => floor(random(a, b + 1))
const choose = (arr) => arr[Math.floor(random(arr.length))]

const v = (x,y)=>createVector(x,y)

// function finishImage() {
//     finalImage = get()
//     windowResized()
// }

// function windowResized() {
//     resizeCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
//     resetMatrix()
//     image(finalImage, 0, 0, width, height)
// }

function preload(){
    if (typeof preloadShader === "function") preloadShader()
    if (typeof preloadFont === "function") preloadFont()
    if (typeof preloadImage === "function") preloadImage()
}