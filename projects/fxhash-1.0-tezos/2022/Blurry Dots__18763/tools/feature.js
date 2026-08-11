/////////////////////////BPM
let bpm = {
    n: fxrand(),
    val: 100,
    name: ""
}

if (bpm.n < 0.2) {
    bpm.val = 100
    bpm.name = "EDM"
}
else if (bpm.n < 0.4) {
    bpm.val = 110
    bpm.name = "HOUSE"
}
else if (bpm.n < 0.6) {
    bpm.val = 127
    bpm.name = "TECHNO"
}
else if (bpm.n < 0.8) {
    bpm.val = 137
    bpm.name = "HARD TECHNO"
}
else {
    bpm.val = 160
    bpm.name = "HARD CORE"
}

//////////////GRID NUMEBR OF FRAMES//////
let myGrid = {
    n: fxrand(),
    val: 0,
    name: ''
}

if (myGrid.n < 0.25) {
    myGrid.val = 0.125/1.75
    myGrid.name = "13"
} else if (myGrid.n < 0.5) {
    myGrid.val = 0.125
    myGrid.name = "7"
} else if (myGrid.n < 0.75) {
    myGrid.val = 0.25
    myGrid.name = "3"
} else {
    myGrid.val = 0.33
    myGrid.name = "2"
}
// else {
//     myGrid.val = 0.5
//     myGrid.name = "1"
// }

///////////MARGIN
let myMargin = {
    n: fxrand(),
    val: 0,
    name: ''
}

if (myMargin.n < 0.25) {
    myMargin.name = "XS";
    myMargin.val = 5
} else if (myMargin.n < 0.5) {
    myMargin.name = "S";
    myMargin.val = 10
} else if (myMargin.n < 0.75) {
    myMargin.name = "L";
    myMargin.val = 20
} else {
    myMargin.name = "OFF";
    myMargin.val = 0
}

/////////////////////////GRADIENT
let grd = {
    n: fxrand(),
    name: ""
}
if (grd.n < 0.5) {
    grd.name = "RADIAL"
} else {
    grd.name = "LINEAR"
}

/////////////////////////BAKCGROUND COLOR
let bg = {
    n: fxrand(),
    val: 0,
    name: ""
}

if (bg.n < 0.5) {
    bg.val = 0
    bg.name = "DARK"
} else {
    bg.name = "LIGHT"
    bg.val = 250
}

/////////////////////////FORCE
let turb = {
    n: fxrand(),
    val: 0.1,
    name: ""
}

if (turb.n < 0.25) {
    turb.val = 0.00001
    turb.name = "A"
} else if (turb.n < 0.001) {
    turb.val = 0.05
    turb.name = "B"
} else if (turb.n < 0.1) {
    turb.val = 0.1
    turb.name = "C"
} else {
    turb.val = 1
    turb.name = "D"
}


///////////////VARIATION
let vari = {
    n: fxrand(),
    name: "",
    val : 100
}

if (vari.n < 0.33) {
    vari.name = "SOFT"
    vari.val = 50
} 

if (vari.n < 0.66) {
    vari.name = "MEDIUM"
    vari.val = 25
}

else {
    vari.val = 10
    vari.name = "STRONG"
}