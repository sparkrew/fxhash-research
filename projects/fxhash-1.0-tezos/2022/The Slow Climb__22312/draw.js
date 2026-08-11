/*
The Slow Climb
by yenren / 2022-Dec-12
https://twitter.com/yenrenART
https://www.fxhash.xyz/u/yenren
License: ./LICENSE.txt
*/

// Parameters
var ar = 1;
var ro = rI([-3,-2,-1,0,1,2,3,4,5,6,7,8,9]) * 15;
var tail = 48;
var wfm = rI([[30,28,-648],[36,33,-796],[42,30,-876],[48,33,-1024],[54,30,-1324],[60,36,-1374],[66,39,-1380]]);
var w0 = wfm[0], f = wfm[1], m = wfm[2], xk = w0 / 2;
var ik = rI([3,4,5,6,8,10,12]);
var jk = rI([0.2,0.3,0.4,0.5,0.6,0.8,1]);
var n = (jk == 1) ? rI([32,36]) : (jk == 0.8) ? rI([32,36,40,44]) : rI([40,44,48,52]);
var ck = rI([[0,2],[1,2]]);
var dd = (fx() > 0.3) ? 1 : 0;
var dw = rI([1,12,12,12,12,18,18,18]);
var zz = rI([[8,3],[12,4.5]]);

var colors = [['EC9E0F','123D63'],['B6050C','53697C'],['DBC288','0F3454'],['E6A631','9C3F02'],['F38689','173E5F'],['4BA5A1','B84922'],['DBC665','A52741'],['550295','DFE73D'],['8A1402','F5D269'],['472498','79DB02'],['0F326D','9AE6C9'],['B63940','7C7FDD'],['0D4780','DC1189'],['B73035','236E65'],['4C7EA0','EECEA3'],['80126E','DFAF0E'],['5B5F41','E1B606'],['370A6F','F06A1E'],['7D0D4A','1CADA7'],['DDE946','187873'],['973B56','F6E0CF'],['05604B','F08928'],['EACDDF','47018E'],['FCC65A','01218C'],['EEB214','018A37']];

var col = rI(colors); shuffle(col);
var bg = rI(['021C17','1C0204','1C020F','1C021A','0D021C','02021C','021C09','1A1C02','1C0E02']);

var cw = 1000, dents = 1;

function draw() {
	fxrand = sfc32(...hashes); setup(800);
	rectangle(0, 0, cw, cw, bg);
	
	rotateC(cw / 2, cw / 2, ro);
	
	// Steps
	for (let i = 1; i <= n; i++) {
		if (i % ik == 0) {
			for (let j = 1; j <= n; j++) {
				if (fx() < jk) {
					let x = w0 * i + m;
					let y = w0 * j + m;
					
					for (let k = 1; k <= tail; k++) {
						let xkk = xk * k;
						let xx = x + xkk;
						let yy = y + xkk;
						let w = xkk * i;
						
						let c1 = (k % ck[1] == 0) ? ((ck[0]) ? bg : col[0]) : (((ck[0]) ? col[0] : bg));
						let c2 = (k % ck[1] == 0) ? ((ck[0]) ? bg : col[1]) : (((ck[0]) ? col[1] : bg));
						
						let p1 = [xx, yy];
						let p2 = [xx, yy + w];
						let p3 = [xx + w, yy + w];
						let p4 = [xx + w, yy];
						
						poly([p1, p2, p3], c1);
						poly([p1, p4, p3], c2);
						
						if (dents) {
							let zw = w / dw;
							
							if (dd) {
								let z1 = [xx + zz[0], yy + zz[1]];
								poly([z1, [z1[0] + zw, z1[1] + zw], [z1[0] + 2 * zw, z1[1] + zw], [z1[0] + zw, z1[1]]], bg);
							} else {
								let z2 = [xx + zz[1], yy + zz[0]];
								poly([z2, [z2[0], z2[1] + zw], [z2[0] + zw, z2[1] + 2 * zw], [z2[0] + zw, z2[1] + zw]], bg);
							}
						}
						
						line(p1, p2, 0.75, c1, 0.75);
						line(p1, p4, 0.75, c2, 0.75);
						line(p1, p3, 0.75, c1, 0.75);
					}
				}
			}
		}
	}
	
	rotateC(cw / 2, cw / 2, -ro);
	
	// Frame
	rectangleE(f / 2, f / 2, cw - f, cw - f, f, rI(col));
	
	// Grain
	rotateC(cw / 2, cw / 2, ro);
	
	var gc = ['000000','222222','444444','666666','888888'];
	ctx.globalAlpha = 0.16;
	
	for (let i = 0; i < 24000; i++) {
		rectangle(rN(-200, cw + 200), rN(-200, cw + 200), 0.6, 18, rI(gc));
		rectangle(rN(-200, cw + 200), rN(-200, cw + 200), 18, 0.6, rI(gc));
		rectangle(rN(-200, cw + 200), rN(-200, cw + 200), 1.8, 1.8, rI(gc));
	}
	
	fxpreview();
}

onload = draw; var d; onresize = function() { clearTimeout(d); d = setTimeout(draw, 100) };

// Dents D
document.addEventListener('keydown', function(e) { if (e.keyCode == 68) { dents = (dents) ? 0 : 1; draw(); } });

// Save S
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 83) {
		let a = document.createElement('a'); a.download = 'The-Slow-Climb-by-yenren.png'; a.href = canvas.toDataURL('image/png'); a.click();
	}
});