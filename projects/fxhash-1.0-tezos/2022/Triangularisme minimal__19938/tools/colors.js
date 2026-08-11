let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    extraClr: "",
    name: "",
}


if (palette.n < 0.25) {
    palette.bgClr = "#030302"
    palette.clr = ["#FCFBF7", "#F0EFEB", "#DEDDD9", "#A8A7A5"]
    palette.name = "A"
}
else if (palette.n < 0.5) {
    palette.bgClr = "#FCFBF7"
    palette.clr = ["#3D3D3C", "#141414", "#333332", "#030302"]
    palette.name = "B"
}
else if (palette.n < 0.75) {
    palette.bgClr = "#5E5E5B"
    palette.clr = ["#C4C3BC", "#EBEAE1", "#DFDED7", "#9E9D98"]
    palette.name = "C"
}
else {
    palette.bgClr = "#5E5C5E"
    palette.clr = ["#959296", "#5E5C5E", "#DCD7DE", "#C3BEC4"]
    palette.name = "D"
}
