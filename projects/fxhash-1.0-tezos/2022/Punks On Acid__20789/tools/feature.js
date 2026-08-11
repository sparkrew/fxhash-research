//////////***BASIC FEATURES***//////////
let PHI = 1.4142
let format = {
    n: fxrand(),
    ww: 1,
    hh: 1,
    name: ''
}

if (format.n < 0.33) {
    format.ww = PHI
    format.hh = 1
    format.name = "LANDSCAPE"

} else if (format.n < 0.66) {
    format.ww = 1
    format.hh = PHI
    format.name = "PORTRAIT"

} else {
    format.ww = 1
    format.hh = 1
    format.name = "SQUARE"
}

////////////////////////CASES
let chooser = {
    n: fxrand(),
    val: 0
}

if (chooser.n < 0.33) {
    chooser.val = 2
} else if (chooser.n < 0.33) {
    chooser.val = 1
} else {
    chooser.val = 0
}