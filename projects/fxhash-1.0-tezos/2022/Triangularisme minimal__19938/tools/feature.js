let ratio = 1.41414141414
let format = {
    n: fxrand(),
    ww: 1,
    hh: 1,
    name: ''
}

if (format.n < 0.33) {
    format.ww = ratio
    format.hh = 1
    format.name = "LANDSCAPE"

} else if (format.n < 0.66) {
    format.ww = 1
    format.hh = ratio
    format.name = "PORTRAIT"

} else {
    format.ww = 1
    format.hh = 1
    format.name = "SQUARE"
}

/////////////////////////scl
let scl = {
    n: fxrand(),
    name: ""
}

if (scl.n < 0.33) {
  scl.val = 20
}
else if (scl.n < 0.66) {
  scl.val = 50
}
else { scl.val = 100 }


/////////////////////////STROKE
    let strokeStyle = {
        n: fxrand(),
        name: "NAME",
      }
  
      if (strokeStyle.n < 0.33) {
        strokeStyle.name = "ROUND"
      }
      else if (strokeStyle.n < 0.66) {
        strokeStyle.name = "SQUARE"
      }
      else {
        strokeStyle.name = "PROJECT"
      }