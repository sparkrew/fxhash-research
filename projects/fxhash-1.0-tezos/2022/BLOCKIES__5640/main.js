// ===================================================

// Tittle  | Random layer shuffle
// Version | @v.0.2
// Author  | Jorge Dabaliña

// This program is the source code for the 
// generation of an NFT collection from PNG layers in FXHash
// minting platfortm.



// =================================================== 
const layers = [];
var labels = {};

class Img {
    constructor({
        url,
        label,
    } = {}) {
        this.label = label;
        this.url = url;
    }
}

function asyncImageLoad(img, url) {
    return new Promise((resolve, reject) => {
        img.onload = function() {
            resolve(img);
        }
        img.onerror = reject;
        img.src = url;
    });
}

function loadImages(myLayers) {
    const promises = [];
    for (let layer in myLayers) {
        myLayers[layer].img = new Image();
        promises.push(asyncImageLoad(myLayers[layer].img, myLayers[layer].url));
    }
    return Promise.all(promises);
}

function getRandomLayers(allLayers) {
    var resultsIndex = {};
    for (var layer in allLayers) {
        var traits = [];
        var i = 0;
        allLayers[layer].forEach(trait => {
            traits.push([i, trait.weight]);
            i++
        });
        resultsIndex[layer] = getWeightedOption(traits);
        labels[layer] = allLayers[layer][resultsIndex[layer]].label
        layers.push(
            new Img({
                label: labels[layer],
                url: allLayers[layer][resultsIndex[layer]].value,
            })
        );
    }
}

function pick(arr) {
    return arr[fxrand() * arr.length | 0];
}

function getWeightedOption(options) {
    let choices = [];
    for (let i in options)
        choices = choices.concat(new Array(options[i][1]).fill(options[i][0]))
    return pick(choices);
}

function init() {
    document.title = settings.title;
    loadImages(layers).then(() => {
        const canvas = document.createElement('canvas');
        canvas.width = settings.width;
        canvas.height = settings.height;
        document.body.style.background = settings.pageBackground;
        const context = canvas.getContext('2d');
        layers.forEach((layer) => {
            context.drawImage(layer.img, 0, 0);
        });
        document.body.appendChild(canvas);
    });
}

function myFeatures(myLabels) {
    window.$fxhashFeatures = myLabels;
}

function consoleLogs(myLabels) {

    if (settings.consolelogs) {
        var line = "●▪●▪●▪●";

        console.log(line)
        console.log(settings.title)
        console.log(line)
        console.log("HASH: " + fxhash)

        console.log(line)
        console.log("GENERATED TRAITS:")

        for (l in myLabels) {
            console.log(l + ": " +
                myLabels[l])
        };
        console.log(line)

    }
}
getRandomLayers(allLayers);
if (settings.fxhashfeatures) {
    myFeatures(labels);
}
if (settings.consolelogs) {
    consoleLogs(labels)
}
init();