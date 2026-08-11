//////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    extraClr: "",
    name: ""
}
if (palette.n < 0.25) {
    palette.bgClr = ["#F2F2F2", "#F5F5F5"]
    palette.clr = ["#0E0E0E", "#F00707"]
    palette.extraClr = "#F22727";
    palette.name = "White & Red"
}
else if (palette.n < 0.3) {
    palette.clr = ["#F2C12E", "#0D0D0D"]
    palette.bgClr = ["#D9981E", "#733D0E"]
    palette.extraClr = "#F2C12E";
    palette.name = "Taxi"
}
else if (palette.n < 0.35) {
    palette.clr = ["#F23054", "#99F2E9"]
    palette.bgClr = ["#99F2E9", "#D91424"]
    palette.extraClr = "#F2D06B";
    palette.name = "Fantasia"
}
else if (palette.n < 0.4) {
    palette.clr = ["#BF264F", "#5B26A6"]
    palette.bgClr = ["#20308C", "#350F40"]
    palette.extraClr = "#2EF2DF";
    palette.name = "Neon"
}
else if (palette.n < 0.5) {
    palette.clr = ["#F28F16", "#031626"]
    palette.bgClr = ["#052440", "#031626"]
    palette.extraClr = "#F2A71B";
    palette.name = "Night Light"
}
else if (palette.n < 0.55) {
    palette.clr = ["#0D0D0D", "#36BF4A"]
    palette.bgClr = ["#01260A", "#0D0D0D"]
    palette.extraClr = "#44F24F";
    palette.name = "Matrix"
}
else if (palette.n < 0.6) {
    palette.clr = ["#D9704A", "#211F26"]
    palette.bgClr = ["#BF9A78", "#A65E44"]
    palette.extraClr = "#F2A679";
    palette.name = "Vintage 2"
}
else if (palette.n < 0.65) {
    palette.clr = ["#8C837B", "#BFBAB8"]
    palette.bgClr = ["#403531", "#0D0D0D"]
    palette.extraClr = "#D9D5D2";
    palette.name = "Vintage 1"
}
else if (palette.n < 0.7) {
    palette.clr = ["#262626", "#8C2F0D"]
    palette.bgClr = ["#8C2F0D", "#595959"]
    palette.extraClr = "#D97904";
    palette.name = "Rusty"
}
else {
    palette.clr = ["#989898", "#0D0D0D"]
    palette.bgClr = ["#262626", "#0D0D0D"]
    palette.extraClr = "#F22727";
    palette.name = "Gray & Red"
}