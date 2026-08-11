const pick = arr => arr[fxrand() * arr.length | 0];

function getWeightedOption(options) {
    let choices = [];
    for (let i in options)
        choices = choices.concat(new Array(options[i][1]).fill(options[i][0]))
    return pick(choices);
}

function fxrandRange(min, max, step) {
    value = Math.round(fxrand() * (max - min) / step);
    return value * step + min
}

function displayParts() {
    leftPart = createGraphics(w2, s);
    rightPart = createGraphics(w2, s);
    leftPart.ellipseMode(CENTER);
    rightPart.ellipseMode(CENTER);
    leftPart.rectMode(CENTER);
    rightPart.rectMode(CENTER);

}

function setupClrs() {

    fill = colors[colorIndex].fill;
    bg = colors[colorIndex].bg;
    strokeC = colors[colorIndex].stroke;

    if (strokeC == "none") {
        leftPart.noStroke();
        rightPart.noStroke();
        filled = false;
    } else {
        leftPart.stroke(strokeC);
        rightPart.stroke(strokeC);
        rightPart.strokeWeight(strokeSizes);
        leftPart.strokeWeight(strokeSizes);
    }
}