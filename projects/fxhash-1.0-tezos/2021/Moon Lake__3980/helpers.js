function addGrain(color) {
    push()
    noStroke();
    let hueVal = hue(color);
    let brightnessVal = brightness(color);
    let pixelSize = 1;
    for (let x = 0; x <= width; x += pixelSize) {
        for (let y = 0; y <= height; y += pixelSize) {
            fill(hueVal, 85 + random(-8, 8),
                brightnessVal * 0.6, 1);
            rect(x, y, pixelSize, pixelSize);
        }
    }
    pop()
}


function initFeatures() {
    window.$fxhashFeatures = {
        "Stroke": strokeW,
        "Radius": getRadius(),
        "Waves": waves,
        "Stars": stars,
        "Clouds": clouds
    }

    if (waves) {
        window.$fxhashFeatures["Waves Type"] = wavesType;
        if (wavesType !== "Still") {
            window.$fxhashFeatures["Waveness"] = getWaveness();
        }
        window.$fxhashFeatures["Amount of waves"] = getNumOfWaves();
    }
    if (stars) {
        window.$fxhashFeatures["Amount of stars"] = getNumOfStars();
    }
    if (clouds) {
        window.$fxhashFeatures["Amount of clouds"] = getNumOfClouds();
    }
}

function getNumOfClouds() {
    if (numOfClouds * numberOfLayers >= 90) {
        return "A lot"
    } else if (numOfClouds * numberOfLayers >= 40) {
        return "Some"
    } else {
        return "A bit"
    }
}

function getNumOfStars() {
    if (numOfStars >= 350) {
        return "A lot"
    } else if (numOfStars >= 150) {
        return "Some"
    } else {
        return "A bit"
    }
}


function getRadius() {
    if (radiusDiv <= 5) {
        return "Huge"
    } else if (radiusDiv <= 7) {
        return "Medium"
    } else {
        return "Small"
    }
}


function getNumOfWaves() {
    if (waveness >= 45) {
        return "A lot"
    } else if (waveness >= 35) {
        return "Some"
    } else {
        return "A bit"
    }
}


function getWaveness() {
    if (waveness >= 70) {
        return "A lot"
    } else if (waveness >= 45) {
        return "Some"
    } else {
        return "A bit"
    }
}


// random HSB color
function getRandomColor() {
    let hueVal = int(random(360));
    let satVal = 100;
    let brightnessVal = 100;

    return color(hueVal, satVal, brightnessVal, 1);
}


function getRandomFromArray(a) {
    return a[int(random(a.length))];
}

function initRands() {
    let strokeArray = range(4, 7, 1);
    strokeW = getRandomFromArray(strokeArray) / 100;

    let radiusDivArray = range(4, 8, 1);
    radiusDiv = getRandomFromArray(radiusDivArray);
    moonRadius = minSide / radiusDiv;

    let numberOfWavesArray = range(20, 60, 5);
    numberOfWaves = getRandomFromArray(numberOfWavesArray);

    let wavenessArray = range(30, 100, 5);
    waveness = getRandomFromArray(wavenessArray);

    let numOfStarsArray = range(10, 500, 10);
    numOfStars = getRandomFromArray(numOfStarsArray);

    let numberOfCloudsArray = range(20, 100, 10);
    numOfClouds = getRandomFromArray(numberOfCloudsArray);

    numberOfLayers = getNumOfLayers();

    wavesType = getWavesType();

    clouds = random() > 0.15;
    stars = random() > 0.05;
    waves = random() > 0.01;
}

function getNumOfLayers() {
    let rand = random();
    if (rand > 0.4) {
        return 1;
    } else if (rand > 0.15) {
        return 2;
    } else {
        return 3;
    }
}


function getWavesType() {
    let rand = random();
    if (rand > 0.5) {
        return "Smooth";
    } else if (rand > 0.2) {
        return "Still";
    } else {
        return "Jagged";
    }
}


function range(start, end, step) {
    let a = [];
    for (let i = start; i <= end; i += step) {
        a.push(i);
    }
    return a;
}