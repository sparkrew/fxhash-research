osc(100)
	.color(0.291, 0.044, 1.054)
	.rotate(0.11, 0.018)
	.modulate(osc(11.672)
		.rotate(2,0.3)
		.add(o0, 0.171))
	.add(osc(29.443, 0.07, 0.354)
		.color(0, 1.284, 1))
	.out(o0);
osc(46, 0.02, 0.7)
	.color(0.318, 0.7, 1.299)
	.diff(o0)
	.modulate(o1, 0.06)
	.out(o1);
render(o1);