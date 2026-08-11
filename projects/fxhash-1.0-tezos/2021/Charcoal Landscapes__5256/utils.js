/**
 * Create a noise texture of the given width, height and srength
 * @param ctx the p5 context
 * @param options the options (width, height, strength)
 * @returns the noise texture
 */
 function createNoiseTexture(ctx, options) {
  const scale = 255*options.strength;
  const invscale = 255*(1-options.strength);
  const rand = fastRandom(5);
  let img = ctx.createImage(options.width, options.height);
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, rand.nextFloat() * scale + invscale);
    }
  }
  img.updatePixels();
  return img;
}


function createGreenTexture(ctx, options) {
  let img = ctx.createImage(options.width, options.height);
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, [234, 247, 237, 255]);
    }
  }
  img.updatePixels();
  return img;
}


// https://github.com/borilla/fast-random
function fastRandom(seed) {
	function _seed(s) {
		if ((seed = (s|0) % 2147483647) <= 0)
			seed += 2147483646;
	}
	function _nextInt() { return seed = seed * 48271 % 2147483647; }
	function _nextFloat() { return (_nextInt() - 1) / 2147483646; }
	_seed(seed);
	return { seed: _seed, nextInt: _nextInt, nextFloat: _nextFloat };
}


function removeFromArray(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index+1)];
}
