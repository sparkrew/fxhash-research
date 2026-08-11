let height = window.innerHeight,
    width = window.innerHeight,
    xSpacing = window.innerHeight / 6,
    ySpacing = window.innerHeight / 6,
    colors;

function setup() {
    createCanvas(width, height);
    background(240);

    colors = [
        color(0),
        color(100),
        color(200),
        color(255),
        color("#ffce00"),
        color("#79c323"),
        color("#60003f"),
        color("#092653"),
        "rgb(100%, 31%, 0%)",
        "rgb(67%, 100%, 92%)",
        "rgb(42%, 17%, 47%)",
        "rgb(100%, 58%, 0%)",
        "hsl(60, 100%, 78%)",
        "hsl(135, 80%, 100%)",
        "hsl(225, 90%, 0%)",
        "hsl(315, 100%, 100%)",
        "hsl(0, 100%, 62%)",
        "hsl(90, 32%, 26%)",
        "hsl(180, 44%, 43%)",
        "hsl(270, 68%, 34%)",
        "#ffa17c",
        "#017979",
        "#c6ff52",
        "#fdeeda",
        "#6898f0",
        "#676565",
        "#ff1895",
        "#ffeef4",
        "#4fd3ce",
        "#0d0d5d",
        "#6823c7",
        "#ff8559",
    ];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    noStroke();
    for (let y = 0; y < height; y += ySpacing) {
        for (let x = 0; x < width; x += xSpacing) {
            let color = colors.shift();
            if (color === undefined) {
                color = 'white';
            }
            fill(color);

            circle(x + xSpacing, y + ySpacing, +(xSpacing, ySpacing) * Math.floor(fxrand()* map(fxrand(), 2, 4, 6, 8)));
        }
    }
    noLoop();
}
