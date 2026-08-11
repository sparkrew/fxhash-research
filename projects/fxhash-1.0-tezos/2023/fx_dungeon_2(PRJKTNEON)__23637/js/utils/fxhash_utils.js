function fxrand_float(min, max) {
    let result

    if (!max && !min) { // if called without parameters
        result = fxrand()
    } else if (!max) { // if only one parameter is called
        max = min
        min = 0
        result = fxrand() * (max - min + 1) + min
    } else {
        result = fxrand() * (max - min + 1) + min
    }

    return result
}

function fxrand_int(min, max) {
    let result

    if (!max) { // if only one parameter is called
        max = min
        min = 0
        result = Math.floor(fxrand() * (max - min + 1) + min)
    } else {
        result = Math.floor(fxrand() * (max - min + 1) + min)
    }

    return result
}

function fxrand_arr(arr) { // return a random element from that array
    let max = arr.length - 1
    let index = fxrand_int(max)
    return arr[index]
}