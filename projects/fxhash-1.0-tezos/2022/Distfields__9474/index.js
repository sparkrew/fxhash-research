"use strict"

/* Cognomen fxhash mint #10
 * 16th Feb 2022
 * An experiment in distance fields.
 */

console.log(fxhash)

function preprocess_shader(txt){
	let ret = txt
	let i = 0
	while (ret.includes("R()")){
		ret = ret.replace("R()", "rand["+i+"]")
		i += 1
	}
	return ret
}

function get_shaders(){
	var req1 = new XMLHttpRequest()
	req1.open("GET", "./shader.vert", false)
	req1.send()

	var req2 = new XMLHttpRequest()
	req2.open("GET", "./shader.frag", false)
	req2.send()

	return [req1.responseText, preprocess_shader(req2.responseText)]
}

function rand_arr(n){
	let rand = []
	for(let i = 0; i < n; i++){
		rand.push(fxrand())
	}
	return rand
}

let s = (p) => {
	p5.disableFriendlyErrors = true

	let width = window.innerWidth
	let height = window.innerHeight
	let paint_width = window.innerWidth
	let paint_height = window.innerHeight
	let noise_buf

	let shader, canv, init_buf, canv_buf, canv_shader

	let time = 0

	function make_noisebuffer(){
		let fxrand2 = sfc32(...hashes)

		let buf = p.createGraphics(1024, 1024)

		buf.loadPixels()
		for (let i = 0; i < 4 * (1024*1024)*p.pixelDensity() * p.pixelDensity(); i += 4){
			buf.pixels[i] = fxrand2()*255
			buf.pixels[i+1] = fxrand2()*255
			buf.pixels[i+2] = fxrand2()*255
			buf.pixels[i+3] = fxrand2()*255
		}
		buf.updatePixels()

		return buf
	}

	p.preload = function() {
		canv_shader = p.loadShader("canv_shader.vert", "canv_shader.frag")
	}

	p.setup = function() {
		canv = p.createCanvas(width, height, p.WEBGL)
		init_buf = p.createGraphics(paint_width, paint_height, p.WEBGL)
		canv_buf = p.createGraphics(width, height, p.WEBGL)
		noise_buf = make_noisebuffer()

		let shaders = get_shaders()
		shader = init_buf.createShader(shaders[0], shaders[1])
		init_buf.shader(shader)

		canv_buf.shader(canv_shader)
		canv_buf.textureWrap(p.REPEAT)
		p.textureWrap(p.REPEAT)

		
		shader.setUniform("rand", rand_arr(64))

		canv_shader.setUniform("noise_tex", noise_buf)
		canv_shader.setUniform("tex0", init_buf)

		init_buf.rect(0,0, width, height)
		
		p.noStroke()
	}

	let frames = 0
	p.draw = function() {
		if (frames % 60 === 0){
			//shader.setUniform("rand", rand_arr(64))
		}
		frames++

		shader.setUniform("iResolution", [width, height])
		shader.setUniform("time", time)
		canv_shader.setUniform("iResolution", [width, height])

		time += p.deltaTime*0.001
		init_buf.rect(0,0, width, height)
		canv_buf.rect(0,0, width, height)

		p.texture(canv_buf)
		p.plane(width,height)
	}

	p.windowResized = function() {
		width = window.innerWidth
		height = window.innerHeight
		p.resizeCanvas(width, height)
		canv_buf.resizeCanvas(width, height)
		init_buf.resizeCanvas(width, height)
	}
}

let p5sketch = new p5(s)
