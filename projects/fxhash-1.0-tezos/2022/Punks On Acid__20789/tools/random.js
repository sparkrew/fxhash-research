function fxrandArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = floor(fxrand() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

function fxrandBetween(a, b) {
    if (!b) {
        return fxrand() * a
    }
    return fxrand() * (b - a) + a
}