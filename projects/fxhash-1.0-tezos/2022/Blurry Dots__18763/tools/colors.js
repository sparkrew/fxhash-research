// ////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    name: ""
}
if (palette.n < 0.2) {
    palette.bgClr = ["#F2F2F2", "#D9D2D0"]
    palette.clr = ["#262626", "#0D0D0D"]
    palette.name = "🎨 1"
} else if (palette.n < 0.4) {
    palette.clr = ["#F2F2F2", "#0D0D0D"]
    palette.bgClr = ["#737373", "#F2F2F2"]
    palette.name = "🎨 2"
} else if (palette.n < 0.6) {
    palette.bgClr = ["#FFFFFF", "#F2F2F2"]
    palette.clr = ["#242424", "#F2F2F2"]
    palette.name = "🎨 3"
} else if (palette.n < 0.8) {
    palette.bgClr = ["#F2F2F2", "#BFBFBF"]
    palette.clr = ["#202020", "#262626"]
    palette.name = "🎨 4"
} else {
    palette.bgClr = ["#F2E8DF", "#A69981"]
    palette.clr = ["#403F38", "#0D0D0D"]
    palette.name = "🎨 5"
}