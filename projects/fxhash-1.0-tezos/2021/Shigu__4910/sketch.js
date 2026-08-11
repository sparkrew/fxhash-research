
let margin, inner, palette



function setup() {
	createCanvas(windowWidth, windowHeight)
	background(240)
	noLoop()
	noFill()
	const side = Math.min(windowWidth, windowHeight) * 0.9
	palette = getPalette()
	margin = { x: (windowWidth - side) / 2, y: (windowHeight - side) / 2 }
	inner = { w: side, h: side }
	const xItems = getDistribution(8)
      
    randomSeed(fxrand()*1000000);

	const pos = { x: 0, y: 0 }
	const size = { w: 0, h: 0 }
	
	for( let i = 0; i < xItems.length; i++) {
		
		const yItems = getDistribution(8)
		size.w = xItems[i] * inner.w 
		pos.y = 0
		
		for( let j =0; j < yItems.length; j++) {
		
			size.h = yItems[j] * inner.h
			
			fill(palette[j % palette.length])
			rect(margin.x + pos.x, margin.y + pos.y, size.w, size.h)
			noFill()
			stroke(palette[(j+2) % palette.length])
			
			const weight = random([4, 6, 8])
			strokeWeight(weight * 0.25)
			
			const shapeProperties = {
				x: margin.x + pos.x, 
				y: margin.y + pos.y, 
				w: size.w, 
				h: size.h,
				step: weight
			}
			
			
			if( Math.random() > 0.5 ) {
				squareCircle(shapeProperties)
			} else {
				hatch(shapeProperties)
			}
			
			pos.y += size.h
		}
		pos.x += size.w
	}
}

function draw() {}