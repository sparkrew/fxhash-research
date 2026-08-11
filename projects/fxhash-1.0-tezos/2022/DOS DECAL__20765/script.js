function convertToDecimal(x) {
  switch (x) {
    case "1":
      return 1
    case "2":
      return 2
    case "3":
      return 3
    case "4":
      return 4
    case "5":
      return 5
    case "6":
      return 6
    case "7":
      return 7
    case "8":
      return 8
    case "9":
      return 9
    case "A":
      return 10
    case "B":
      return 11
    case "C":
      return 12
    case "D":
      return 13
    case "E":
      return 14
    case "F":
      return 15
    case "G":
      return 16
    case "H":
      return 17
    case "J":
      return 18
    case "K":
      return 19
    case "L":
      return 20
    case "M":
      return 21
    case "N":
      return 22
    case "P":
      return 23
    case "Q":
      return 24
    case "R":
      return 25
    case "S":
      return 26
    case "T":
      return 27
    case "U":
      return 28
    case "V":
      return 29
    case "W":
      return 30
    case "X":
      return 31
    case "Y":
      return 32
    case "Z":
      return 33
    case "a":
      return 34
    case "b":
      return 35
    case "c":
      return 36
    case "d":
      return 37
    case "e":
      return 38
    case "f":
      return 39
    case "g":
      return 40
    case "h":
      return 41
    case "i":
      return 42
    case "j":
      return 43
    case "k":
      return 44
    case "m":
      return 45
    case "n":
      return 46
    case "o":
      return 47
    case "p":
      return 48
    case "q":
      return 49
    case "r":
      return 50
    case "s":
      return 51
    case "t":
      return 52
    case "u":
      return 53
    case "v":
      return 54
    case "w":
      return 55
    case "x":
      return 56
    case "y":
      return 57
    case "z":
      return 58
  }
}
var seed = fxhash.split("")
var converted = []
for (let i = 0; i < seed.length; i++) {
  converted.push(convertToDecimal(seed[i]))
}

// GET CONTEXT
const canvas = document.getElementById('web2d')
const c = canvas.getContext('2d')

// SET SIZE
var TILE_SIZE = 15
var NX = 40
var NY = 40

const patterns = [
  "Math.floor(Math.abs(this.x + this.y) % charset.length)",
  "Math.floor(Math.abs(this.x * this.y) % charset.length)",
  "Math.floor(Math.abs(this.x ^ this.y) % charset.length)",
  "Math.floor(Math.abs(this.x % this.y) % charset.length)",
  "Math.floor(Math.abs(this.x ** this.y) % charset.length)",
  "Math.floor(Math.abs(this.x + this.y * (this.y % 2 * 2 - 1)) % charset.length)",
  "charset.length - 1",
  "Math.floor((this.x ** this.y * 8) % charset.length)"
]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var hoodieMap = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


const colours = [
  "",
  "hsl(176, 63%, 81%)",
  "hsl(0, 0%, 0%)",
  "hsl(72, 3%, 34%)",
  "hsl(1, 77%, 57%)",
  "hsl(6, 37%, 45%)"
]

function resize() {
  TILE_SIZE = window.innerWidth / NX
  canvas.width = NX * TILE_SIZE
  canvas.height = NY * TILE_SIZE
  generateGrid()
}

var charset = "".split("")

boundOne = converted[9] + converted[10] + converted[11] + converted[12]
boundTwo = converted[19] + converted[20] + converted[21] + converted[22]
if(boundOne > boundTwo) {
  charset = charset.slice(boundTwo, boundOne)
} else {
  charset = charset.slice(boundOne, boundTwo)
}
charset.push(".")

if(charset.length < 3) {
  charset.push("D")
  charset.push("E")
  charset.push("C")
  charset.push("A")
}

class Point {
  constructor(x, y, xPos, yPos) {
    this.x = x
    this.y = y
    this.xPos = xPos
    this.yPos = yPos
    this.index = Math.floor(Math.random() * charset.length)
    this.destinationIndex = 1
    this.active = true
    this.color = hoodieMap[this.y * NX + this.x] === 2 ? "#000" : "hsl(" + (this.x * this.y * converted[11]) + ", 50%, 75%)"
  }

  generateDestination(choice) {
    switch (choice) {
      case 0:
        this.destinationIndex = eval(patterns[0])
        break
      case 1:
        this.destinationIndex = this.x % charset.length > (charset.length / 2) ? 0 : charset.length - 2
        break
      case 2:
        this.destinationIndex = ((this.x % charset.length > (charset.length / 2) ? 0 : 2) + (this.x % charset.length > (charset.length / 4) ? 0 : 3))
        break
      case 3:
        this.destinationIndex = ((this.x % charset.length > (charset.length / 3) ? 0 : 1))
        break
      case 4:
        this.destinationIndex = ((this.x % charset.length > (charset.length / 5) ? 0 : 1))
        break
      case 5:
        this.destinationIndex = ((this.y % charset.length > (charset.length / 2) ? 2 : 1))
        break
      case 6:
        this.destinationIndex = ((this.y % charset.length > (charset.length / 2) ? 1 : (this.x % charset > 4 ? 0 : charset.length - 1)))
        break
    }
  }

  draw() {
    c.fillStyle = this.color
    c.font = (TILE_SIZE + "px C64")
    c.fillText(charset[this.index], this.xPos, this.yPos)
  }

  update() {
    if (this.index != this.destinationIndex) {
      this.index++
      if (this.index >= charset.length) {
        this.index = 0
      }
    } else {
      this.active = false
    }
  }
}

var grid = []
function generateGrid() {
  grid = []
  for (let x = 1; x < NX; x++) {
    for (let y = 1; y < NY; y++) {
      grid.push(new Point(x, y, TILE_SIZE * x, TILE_SIZE * y))
    }
  }
  grid.forEach((item) => {
    item.generateDestination()
  })
}

var tick = 0
var pause = 0
var choice = 0
var iterations = 0

function animate() {
  window.requestAnimationFrame(animate)
  if (tick > 2) {
    c.fillStyle = "#000"
    c.fillRect(0, 0, canvas.width, canvas.height)

    grid.forEach((item) => {
      item.draw()
      item.update()
    })

    let update = false
    grid.forEach((item) => {
      if (item.active) {
        update = true
      }
    })
    if (update === false) {
      pause++
      if (pause > 10) {
        fxpreview()
        grid.forEach((item) => {
          item.generateDestination(converted[iterations] % 7)
          item.active = true
        })
        let temp = patterns.shift()
        patterns.push(temp)
        iterations++
        if(iterations > converted.length) {
          iterations = 0
        }
        pause = 0
      }
    }
    tick = 0
  }
  tick++
  choice++

}

window.onload = () => {
  resize()
  generateGrid()
  animate()
  window.$fxhashFeatures = {
    "Charset Size": Math.abs(boundTwo - boundOne)
  }
}

addEventListener('resize', resize);