const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d', { alpha:false });
var save = location.search.split('s=')[1];

function fx() { return fxrand() }
function rI(arr) { return arr[Math.floor(fx() * arr.length)] }
function rN(min, max) { return Math.floor(fx() * (max - min + 1) + min) }

function rotateC(x, y, ang) {
	ctx.translate(x, y); ctx.rotate(ang * Math.PI / 180); ctx.translate(-x, -y);
}

function line(p1, p2, t, c) {
	ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

function rectangle(x, y, w, h, c) {
	ctx.fillStyle = '#'+c; ctx.fillRect(x, y, w, h);
}

function rectangleE(x, y, w, h, t, c) {
	ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.strokeRect(x, y, w, h);
}

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let n = Math.floor(fx() * (i + 1));
		[arr[i], arr[n]] = [arr[n], arr[i]];
	}
}

function setup(size) {
	let w = innerWidth, h = innerHeight;
	save = (save === undefined) ? size : save;
	let s = save / cw;
	
	canvas.width = canvas.height = save;
	canvas.style.width = canvas.style.height = ((w < h) ? w : h)+'px'; canvas.style.display = 'block';
	ctx.scale(s, s);
}