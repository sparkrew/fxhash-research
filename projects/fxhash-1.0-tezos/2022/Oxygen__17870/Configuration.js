const ASPECT_RATIO_5_9 = 9;
const ASPECT_RATIO_5_8 = 8;
const ASPECT_RATIO_5_7 = 7;
const ASPECT_RATIO_5_6 = 6;
const ASPECT_RATIO_5_5 = 5;

const Options = {
    background: {
        shapeMode: [
            "horizontalColumns",
            "verticalColumns",
            "sphere",
            "rectangle",
            "singleVerticalColumn",
        ],

        shapeThickness: { from: 0.02, to: 0.2 },
    },
    blobs: {
        upperMargin: { from: 0.05, to: 0.2 },
        leftMargin: { from: 0, to: 0.2 },
        rightMargin: { from: 0, to: 0.2 },
        bottomMargin: 0.02,
        amount: { from: 3, to: 10 },
    },
    roots: {
        upperMargin: { from: 0.05, to: 0.2 },
        leftMargin: { from: 0, to: 0.2 },
        rightMargin: { from: 0, to: 0.2 },
        bottomMargin: 0.02,
    },
    growth: {
        iterations: { from: 400, to: 600 },
    },
    aspectRatio: [9, 8, 7],
    particlesInitialDirection: [0, 8, -8],
    colorScheme: [
        "killbill",
        "berries",
        "monochromeTurquoiseVine",
        "monochromePinkVine",
        "turquoise",
        "strangeFruit",
        "monochrome",
        "violet",
        "darkviolet",
    ],
};

const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === "[object Object]";
};

function randomizeOption(obj) {
    if (Array.isArray(obj)) {
        const i = Math.floor(randO.next() * obj.length);
        return obj[i];
    } else if (isObject(obj)) {
        if ("from" in obj) {
            let val = obj.from + randO.next() * (obj.to - obj.from);

            if (obj.type == "integer") {
                val = Math.floor(val);
            }
            return val;
        } else {
            for (const key in obj) {
                obj[key] = randomizeOption(obj[key]);
            }
            return obj;
        }
    } else {
        return obj;
    }
}

function isOkay(conf) {
    if (
        (conf.mode == "grid" || conf.mode == "both") &&
        conf.grid.shape == "capsule" &&
        conf.grid.orientation == "horizontal" &&
        conf.particlesInitialDirection == 0
    ) {
        return false;
    }

    if (
        conf.colorScheme == "blueRed" &&
        conf.circles.transparentMode == "all" &&
        (conf.mode == "circles" || conf.mode == "both")
    ) {
        return false;
    }

    return true;
}

function GenerateConfig(opt) {
    let conf = randomizeOption(JSON.parse(JSON.stringify(opt)));
    while (!isOkay(conf)) {
        conf = randomizeOption(JSON.parse(JSON.stringify(opt)));
    }
    return conf;
}
