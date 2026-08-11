/**
 * 
 * @param {*} minVal 
 * @param {*} maxVal 
 * @returns 
 */
function randRange(minVal, maxVal) {
    return fxrand() * (maxVal - minVal) + minVal;
}
  
/**
 * 
 * @param {*} minVal 
 * @param {*} maxVal 
 * @returns 
 */
function randRangeInt(minVal, maxVal) {
    return Math.round(fxrand() * (maxVal - minVal) + minVal);
}

/**
 * 
 * @param {*} value 
 * @param {*} cap 
 * @returns 
 */
function setRange(value, cap) {
    if (value < 0) {
        value = 0;
    }
    else if (value > cap) {
        value = cap;
    }

    return value;
}