osc(fxrand()*3, 2, 500)
	.color(0.2, 0.5, 0.1)
	.diff(osc(fxrand()*100, 0.3, fxrand()*500)
		.color(0.9, 0.9, 0.9)
		.rotate(fxrand()*0.30)
		.pixelate(fxrand()*30)
		.kaleid())

.out()
