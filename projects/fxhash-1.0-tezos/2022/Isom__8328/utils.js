const choose = function(object) {
    if (Array.isArray(object))
        return object[Math.floor(fxrand() * object.length)];

    if (Object.keys(object).length < 0) return undefined;
    let random_key = Object.keys(object)[Math.floor(fxrand() * Object.keys(object).length)];
    return object[random_key];
}
