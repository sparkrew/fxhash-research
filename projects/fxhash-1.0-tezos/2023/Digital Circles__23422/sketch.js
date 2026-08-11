//constants
var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight
let W = 1024;
let H = 1024;
var res = Math.min(WIDTH/W, HEIGHT/H)

let w = W * res;
let h = H * res;



let grid
let t = 0
let speed = 1
let pause = false
let amount = 24
let p5Canvas

function setup() {
  pixelDensity(4 / res);
  p5Canvas = createCanvas(w, h);
  background(255)
  smooth()
  noStroke()
  grid = new Grid(amount)
}


function draw() {
  grid.show()
  t += pause ? 0 : speed
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    grid.set_n(grid.m + 1)
  } else if (keyCode == DOWN_ARROW) {
    grid.set_n(grid.m - 1)
  } else if (keyCode == LEFT_ARROW) {
    t -= t > speed * 100 ? speed * 100 : t
  } else if (keyCode == RIGHT_ARROW) {
    t += speed * 100
  }
}

function keyTyped() {
  if (key == "w") {
    speed *= 1.5
  } else if (key == "s") {
    speed /= 1.5
  } else if (key == "p") {
    saveCanvas(p5Canvas, "screenshot")
  } else if (key == " ") {
    pause = ! pause
  }
}


function random_array(list) {
  let rand = fxrand()
  for (let i = 0; i < list.length; i++) {
    if (rand < (i + 1) / list.length) {
      return list[i]
    }
  }
}

function color_to_name(c0) {
  if (c0[0] == 0 && c0[1] == 0 && c0[2] == 0) {
    return "Black"
  } else if (c0[0] == 0 && c0[1] == 0 && c0[2] == 255) {
    return "Blue"
  } else if (c0[0] == 0 && c0[1] == 255 && c0[2] == 0) {
    return "Green"
  } else if (c0[0] == 0 && c0[1] == 255 && c0[2] == 255) {
    return "Cyan"
  } else if (c0[0] == 255 && c0[1] == 0 && c0[2] == 0) {
    return "Red"
  } else if (c0[0] == 255 && c0[1] == 0 && c0[2] == 255) {
    return "Purple"
  } else if (c0[0] == 255 && c0[1] == 255 && c0[2] == 0) {
    return "Yellow"
  } else if (c0[0] == 255 && c0[1] == 255 && c0[2] == 255) {
    return "White"
  }
}



class Grid {
  constructor(n) {
    this.set_n(n);

    // Define method
    this.xpow = random_array([1, 2, 3, 4]);
    this.ypow = random_array([max(1, this.xpow - 1), this.xpow, min(this.xpow + 1, 4)]);
    this.power = random_array([1, this.xpow, this.ypow]);
    this.xabs = fxrand() < .5;
    this.yabs = fxrand() < .5;
    this.method = round(9 * fxrand()**1.5 - .5)
    this.returnMethod = random_array([0, 1, 2]);
    this.xfactor = random_array([1, -1])
    this.yfactor = random_array([1, -1])
    this.switchAxis = fxrand() < .5

    this.mod = this.get_mod()

    this.colored = fxrand() < .3
    this.dual_color = this.colored ? fxrand() < .7 : false
    this.switch_color = fxrand() < .3

    let c1, c2
    if (this.colored) { 
      c1 = [0, 0, 0]
      while ((c1[0] == 255 && c1[1] == 255 && c1[2] == 255) || (c1[0] == 0 && c1[1] == 0 && c1[2] == 0)) {
          c1 = [random_array([0, 255]), random_array([0, 255]), random_array([0, 255])]
        }

      c2 = random_array([[0, 0, 0], [255, 255, 255]])

      if (this.dual_color) {
        while ((c2[0] == 255 && c2[1] == 255 && c2[2] == 255) || (c2[0] == 0 && c2[1] == 0 && c2[2] == 0) || (c2[0] == c1[0] && c2[1] == c1[1] && c2[2] == c1[2])) {
          c2 = [random_array([0, 255]), random_array([0, 255]), random_array([0, 255])]
        }
      }
    } else {
      c1 = random_array([[0, 0, 0], [255, 255, 255]])
      c2 = [255 - c1[0], 255 - c1[1], 255 - c1[2]]
    }

    this.c1 = this.switch_color ? color(c2) : color(c1)
    this.c2 = this.switch_color ? color(c1) : color(c2)

    window.$fxhashFeatures = {
      "Type": ["A", "B", "C", "D", "E", "F", "G", "H", "I"][this.method],
      "Primary Color": color_to_name(this.switch_color ? c2 : c1),
      "Secondary Color": color_to_name(this.switch_color ? c1 : c2)
    }
  }


  set_n(n) {
    if (n > 0) {
      this.m = n;
      this.n = 2 * n + 1;
    }
  }

  get_x(i) {
    let x = (this.xfactor * (i - this.m))**this.xpow;
    return this.xabs ? abs(x) : x
  }

  get_y(j) {
    let y = (this.yfactor * (j - this.m))**this.ypow;
    return this.yabs ? abs(y) : y
  }

  get_mod() {
    if (this.method == 0 || this.method == 1) {
      return (amount**this.xpow + amount**this.ypow)**(1 / this.power)
    } else if (this.method == 2) {
      this.power = this.power < this.xpow ? this.xpow : this.power
      return (amount**this.xpow * amount**this.ypow)**(1 / this.power) / 3
    } else if (this.method == 3) {
      this.power = this.xpow
      return (amount**this.xpow / amount**this.ypow)**(1 / this.power) * 10
    } else if (this.method == 4) {
      this.xpow = random_array([2, 3, 4])
      this.ypow = this.xpow
      return ((amount**this.xpow) >> (amount**this.ypow))**(1 / this.power) * .4
    } else if (this.method == 5) {
      return (2 * (amount**min(this.ypow, this.xpow)))**(1 / this.power) 
    } else if (this.method == 6) {
      this.xpow = random_array([this.xpow, 1])
      this.ypow = this.xpow
      this.power = random_array([this.power, 1])
      this.xabs = random_array([this.xabs, true])
      this.yabs = random_array([this.yabs, true])
      return ((amount**this.xpow) | (amount**this.ypow))**(1 / this.power) * 2
    } else if (this.method == 7) {
      this.ypow = this.xpow
      return ((amount**this.xpow) & (amount**this.ypow))**(1 / this.power)
    } else if (this.method == 8) {
      this.ypow = this.xpow 
      return ((amount**this.xpow) + (amount**this.ypow))**(1 / this.power) * 2 * this.power / this.xpow
    }
  }


  calculate_metric(f, i, j) {
    let mod = 15 * this.mod / t;
    let r
    let x = this.get_x(i)
    let y = this.get_y(j)
    if (this.method == 0) {
      r = x + y
    } else if (this.method == 1) {
      r = x - y
    } else if (this.method == 2) {
      r = x * y
    } else if (this.method == 3) {
      r = x / y 
    } else if (this.method == 4) {
      r = x >> y 
    } else if (this.method == 5) {
      r = x % y
    } else if (this.method == 6) {
      r = x | y
    } else if (this.method == 7) {
      r = x & y
    } else if (this.method == 8) {
      r = x ^ y
    } 

    let sign = r < 0 ? -1 : 1
    r = sign * (abs(r) ** (1 / this.power) % mod) / mod

    if (this.returnMethod == 0) {
      return r < 0 ? r + 1 : r;
    } else if (this.returnMethod == 1) {
      return r < 0 ? -r : r;
    } else {
      return r
    }
  }


  show() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        let o = this.switchAxis ? this.calculate_metric(frameCount, j, i) : this.calculate_metric(frameCount, i, j)
        fill(lerpColor(this.c1, this.c2, o**2))
        rect(i * w / this.n, j * h / this.n, w / this.n, h / this.n)
      }
    }
  }
}