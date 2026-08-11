
Math.random = fxrand;
const choose = function(object) {
    if (Array.isArray(object))
        return object[Math.floor(Math.random() * object.length)];

    if (Object.keys(object).length < 0) return undefined;
    let random_key = Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)];
    return object[random_key];
}
