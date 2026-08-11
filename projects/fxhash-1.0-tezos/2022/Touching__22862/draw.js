/*
Touching
by yenren / 2022-Dec-28
https://twitter.com/yenrenART
https://www.fxhash.xyz/u/yenren
License: ./LICENSE.txt
*/

// Parameters
var ro = rI([0,90,180,270]);
var n = rI([60,75,90,105,120]);
var tail = rI([16,18,20,22,24]);
var w0 = rI([18,24,30,36,42,48,54,60]);
var xk = w0 / 6;
var ik = rI([4,6,8,10]);
var jk = rI([0.2,0.25,0.3,0.35,0.4,0.45,0.5]);
var style = rI([1,2,3,4,4,5,5,6,7,8,9,10,11,12]);

var colorP = [['021F46','D82734',0.2],['B6050C','53697C',0.1],['00FF29','FF00D6',0.18],['E53564','100998',0.24],['4307C4','D3FE5F',0.12],['00ADE2','DC3501',0.14],['0035E2','DDAA02',0.08],['310D1F','D42028',0.2],['3715B4','FF7CE9',0.18],['CF1F63','32E79F',0.14],['2608CD','8A5605',0.2],['7203E6','A1F370',0.16],['1118F0','F1EA00',0.12],['B73035','048E7B',0.1],['9B0283','E4B417',0.08],['430A8A','E5590A',0.2]];
var colorsA = rI(colorP);
var colors = [colorsA[0],colorsA[1]]; shuffle(colors);
var c1 = colors[0];
var c2 = colors[1];

var cw = 1000;

function draw() {
	fxrand = sfc32(...hashes); setup(1080);
	rectangle(0, 0, cw, cw, c2);
	
	rotateC(cw / 2, cw / 2, ro);
	
	for (let i = 1; i <= n; i++) {
		if (i % ik == 0) {
			for (let j = 1; j <= n; j++) {
				if (fx() < jk) {
					let x = w0 * i;
					let y = w0 * j;
					let w, h;
					
					for (let k = 1; k <= tail; k++) {
						if (i % 2 == 0) rotateC(cw / 2, cw / 2, 90);
						
						let xkk = xk * k;
						let c = (k % 2 == 0) ? c1 : c2;
						
						switch (style) {
							case 1: w = xkk; h = xkk; break;
							case 2: w = xkk * i; h = xkk; break;
							case 3: w = xkk * k; h = xkk; break;
							case 4: w = xkk; h = xkk * i; break;
							case 5: w = xkk; h = xkk * k; break;
							case 6: w = xkk * i; h = xkk * j; break;
							case 7: w = xkk * i; h = xkk * k; break;
							case 8: w = xkk * j; h = xkk * j; break;
							case 9: w = xkk * j; h = xkk * k; break;
							case 10: w = xkk * k; h = xkk * i; break;
							case 11: w = xkk * k; h = xkk * j; break;
							case 12: w = xkk * k; h = xkk * k; break;
						}
						
						let p1 = [x + xkk, y + xkk];
						let p2 = [x + xkk, y + xkk + h];
						let p3 = [x + xkk + w, y + xkk + h];
						let p4 = [x + xkk + w, y + xkk];
						
						rectangle(x + xkk, y + xkk, w, h, c);
						
						line(p1, p2, 2, c);
						line(p1, p4, 2, c);
					}
				}
			}
		}
	}
	
	rotateC(cw / 2, cw / 2, -ro);
	
	// Frame
	var f = 30;
	rectangleE(f / 2, f / 2, cw - f, cw - f, f, c1);
	
	// Grain
	var gc = ['222222','444444','666666','888888',c1,c2];
	
	ctx.globalAlpha = colorsA[2];
	for (let i = 0; i < 34000; i++) {
		rectangle(rN(0, cw), rN(0, cw), 0.5, 15, rI(gc));
		rectangle(rN(0, cw), rN(0, cw), 15, 0.5, rI(gc));
		rectangle(rN(0, cw), rN(0, cw), 1.2, 3.6, rI(gc));
		rectangle(rN(0, cw), rN(0, cw), 3.6, 1.2, rI(gc));
	}
	
	fxpreview();
}

onload = draw; var d; onresize = function() { clearTimeout(d); d = setTimeout(draw, 100) };

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 83) {
		let a = document.createElement('a'); a.download = 'Touching-by-yenren.png'; a.href = canvas.toDataURL('image/png'); a.click();
	}
});