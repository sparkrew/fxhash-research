function bgFeature(e) {

    return e >= 0 && e < .14 ? "2B3361" :
        e >= .14 && e < .28 ? "5C5845" :
        e >= .28 && e < .42 ? "2FA4A9" :
        e >= .42 && e < .56 ? "024E61" :
        e >= .56 && e < .70 ? "FFF591" :
        e >= .70 && e < .84 ? "912D86" :
        "A64842"

}

function skinFeature(e) {
    return e >= 0 && e < .1 ? "Plain-Green" :
        e >= .1 && e < .2 ? "Hawaiian" :
        e >= .2 && e < .3 ? "Bow-Tie-Panda" :
        e >= .3 && e < .4 ? "T-Shirt" :
        e >= .4 && e < .5 ? "Vest" :
        e >= .5 && e < .6 ? "Backpack" :
        e >= .6 && e < .7 ? "Blazer" :
        e >= .7 && e < .8 ? "Corporate" :
        e >= .8 && e < .9 ? "White-Shirt" :
        "Uniform"
}

function mouthFeature(e) {

    return e >= 0 && e < .14 ? "Pursed" :
        e >= .14 && e < .28 ? "Closed" :
        e >= .28 && e < .42 ? "Straight-Face" :
        e >= .42 && e < .56 ? "Tongue-Out" :
        e >= .56 && e < .70 ? "Smile" :
        e >= .70 && e < .84 ? "Wide-Smile" :
        "Pursed-2"
}

function propsFeature(e) {

    return e >= 0 && e < .1 ? "Glasses" :
        e >= .1 && e < .2 ? "Witch-Hat" :
        e >= .2 && e < .3 ? "Cigarette" :
        e >= .3 && e < .4 ? "Cap" :
        e >= .4 && e < .5 ? "Crown" :
        e >= .5 && e < .6 ? "Angel" :
        e >= .6 && e < .7 ? "Vacay-Mode" :
        e >= .7 && e < .8 ? "Magician" :
        e >= .8 && e < .9 ? "Chef" :
        "Royal-Guard"

}

function eyesFeature(e) {

    return e >= 0 && e < .16 ? "Open" :
        e >= .16 && e < .32 ? "Starry" :
        e >= .32 && e < .48 ? "Googly" :
        e >= .48 && e < .64 ? "Intense" :
        e >= .64 && e < .80 ? "Inward" :
        "Normal"

}

function eyebrowsFeature(e) {

    return e >= 0 && e < .2 ? "Right-Raised" :
        e >= .2 && e < .4 ? "Angry" :
        e >= .4 && e < .6 ? "Sleepy" :
        e >= .6 && e < .8 ? "Raised" :
        "Normal"

}

var bgFeatureValue = bgFeature(fxrand()),
    skinFeatureValue = skinFeature(fxrand()),
    mouthFeatureValue = mouthFeature(fxrand()),
    propsFeatureValue = propsFeature(fxrand()),
    eyesFeatureValue = eyesFeature(fxrand()),
    eyebrowsFeatureValue = eyebrowsFeature(fxrand());


window.$fxhashFeatures = {
    Background: bgFeatureValue,
    Skin: skinFeatureValue,
    Mouth: mouthFeatureValue,
    Accessories: propsFeatureValue,
    Eyes: eyesFeatureValue,
    Eyebrows: eyebrowsFeatureValue
},
    console.log("bg: " + $fxhashFeatures.Background), console.log("skin: " + $fxhashFeatures.Skin), console.log("mouth: " + $fxhashFeatures.Mouth), console.log("props: " + $fxhashFeatures.Accessories), console.log("eyes: " + $fxhashFeatures.Eyes), console.log("eyebrows: " + $fxhashFeatures.Eyebrows);

/*const container = document.createElement("div");

container.innerText = `\n  random hash: ${fxhash}\n\n  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n\n  background: ${window.$fxhashFeatures.background}\n  skin: ${window.$fxhashFeatures.skin}\n  mouth: ${window.$fxhashFeatures.mouth}\n  props: ${window.$fxhashFeatures.props}\n  eyes: ${window.$fxhashFeatures.eyes}\n`;*/
