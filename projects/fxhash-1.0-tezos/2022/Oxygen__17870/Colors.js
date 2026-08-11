const colorSchemes = {
    berries: {
        background: "#182a28",
        backgroundShapeColor: "#fb3c3c",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",

        vineBaseColor: "#999999",
        sparkleBaseColor: "#fb3c3c",
        marbleCenterGlow: "#fb723c",
    },

    darkviolet: {
        background: "#1e122d",

        backgroundShapeColor: "#c77555",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",
        vineBaseColor: "#c77555",
        sparkleBaseColor: "#ffffff",
        marbleCenterGlow: "#fb983c",
    },

    violet: {
        background: "#191919",
        backgroundShapeColor: "#6d05bd",
        marbleFromColor: "#00ad9c",
        marbleToColor: "#5f5b69",

        vineBaseColor: "#e015dd",
        sparkleBaseColor: "#ffffff",
        marbleCenterGlow: "#ffffff",
    },

    monochrome: {
        background: "#191919",
        backgroundShapeColor: "#cccccc",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",

        vineBaseColor: "#999999",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#e0e0e0",
    },

    monochromePinkVine: {
        background: "#191919",
        backgroundShapeColor: "#cccccc",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",

        vineBaseColor: "#e015dd",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#e0e0e0",
    },

    killbill: {
        background: "#191919",
        backgroundShapeColor: "#FFC43B",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",

        vineBaseColor: "#d58020",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#d58020",
    },

    monochromeTurquoiseVine: {
        background: "#191919",
        backgroundShapeColor: "#00ad9c",
        marbleFromColor: "#333333",
        marbleToColor: "#f0f0f0",

        vineBaseColor: "#00ad9c",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#00ad9c",
    },

    strangeFruit: {
        background: "#1e122d",
        backgroundShapeColor: "#FE5F55",
        marbleFromColor: "#FFC43B",
        marbleToColor: "#ffecf5",

        vineBaseColor: "#FE5F55",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#FE5F55",
    },

    turquoise: {
        background: "#0e121b",
        backgroundShapeColor: "#00ad9c",
        marbleFromColor: "#d58020",
        marbleToColor: "#606060",

        vineBaseColor: "#2f59bc",
        sparkleBaseColor: "#f0f0f0",
        marbleCenterGlow: "#d58020",
    },
};

function randomizeColor(obj) {
    if (isObject(obj)) {
        const h = obj.hue.from + randO.next() * (obj.hue.to - obj.hue.from);
        const s = obj.sat.from + randO.next() * (obj.sat.to - obj.sat.from);
        const l = obj.lig.from + randO.next() * (obj.lig.to - obj.lig.from);
        return hslToHex(h, s, l);
    } else {
        return obj;
    }
}

function getColor(colorName) {
    const obj = colorSchemes[Config.colorScheme][colorName];

    if (Array.isArray(obj)) {
        const i = Math.floor(randO.next() * obj.length);
        return obj[i];
    } else if (isObject(obj)) {
        if (!isNaN(Object.keys(obj)[0])) {
            const probs = Object.keys(obj)
                .map((x) => Number(x))
                .sort();
            const rnd = randO.next();

            for (let i = probs.length - 1; i >= 0; i--) {
                if (rnd > probs[i]) {
                    return randomizeColor(obj["" + probs[i]]);
                }
            }
            return undefined;
        } else {
            return randomizeColor(obj);
        }
    } else {
        return obj;
    }
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
