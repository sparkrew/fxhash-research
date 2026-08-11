/**
 * sin interpolation
 * @param x value
 * @param atk between 0 and 0.499
 * @returns the interpolated value
 */
 function sinEase(x, atk = 0.4) {
  return Math.sin(x*Math.PI*2-Math.PI/2)*atk+(1-atk);
}

/**
 * pow interpolation
 * @param x value
 * @param atk between 0 and 0.999
 * @param pow even powers (eg. 2, 4, 6, ...)
 * @returns the interpolated value
 */
 function powEase(x, atk = 0.9, pow = 2) {
  return -Math.pow(x*2-1,pow)*atk+1;
}

/**
 * exp interpolation
 * @param x value
 * @param atk between 0 and 0.999
 * @param sqz squeeze of the spike
 * @param pow even powers (eg. 2, 4, 6, ...)
 * @returns the interpolated value
 */
 function expEase(x, atk = 0.85, sqz = 3, pow = 2) {
  return atk/Math.exp(Math.pow((x-0.5)*sqz,pow))+(1-atk);
}

/**
 * log interpolation
 * @param x value
 * @returns the interpolated value
 */
function logEase(x) {
  return 0.25/Math.log(Math.pow(x-0.5,2)+0.57)+1.43;;
}

/**
 * mix of sin and log interpolation
 * @param x value
 * @returns the interpolated value
 */
function sinLogEase(x) {
  return sinEase(x, 0.35) * logEase(x);
}
