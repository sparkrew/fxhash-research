const getDistribution = (maxItems) => {
		const items = []
		while(items.length <= maxItems) {
			items.push(Math.random())
		}
		const sum = items.reduce((sum,item) => { return sum += item }, 0)
		items.forEach((value, index) => {
    	items[index] /= sum
		});
		return items
}
/////////////////////////////////////////////////////////////////////////////////
const hatch = (props) => {

	if( props.w > props.h ) {
		for( let y = 0; y < props.h; y += props.step ) {
			line(props.x, props.y + y, props.x + props.w, props.y + y)
		}
	} else {
		for( let x = 0; x < props.w; x += props.step ) {
			line(props.x + x, props.y, props.x + x, props.y + props.h)
		}
	}
}
/////////////////////////////////////////////////////////////////////////////////
const squareCircle = (props) => {

	const res = 0.01
	const radius = Math.sqrt(Math.pow(props.w, 2) + Math.pow(props.h, 2))
	const circleDef = [{
		// top left corner
		center: { x: props.x, y: props.y },
		angle: { start: 0, end: Math.PI * 0.5 }
	}, {
		// top right corner
		center: { x: props.x + props.w, y: props.y },
		angle: { start: Math.PI * 0.5, end: Math.PI }
	}, {
		// bottom right corner
		center: { x: props.x + props.w, y: props.y + props.h },
		angle: { start: Math.PI, end:  Math.PI * 1.5 }
	}, {
		// bottom left corner
		center: { x: props.x, y: props.y + props.h },
		angle: { start: Math.PI * 1.5, end: Math.PI * 2 }
	}]
	const index = Math.floor(Math.random() * circleDef.length)
	const rotation = circleDef[index]
	
	for( let r = props.step; r < radius; r += props.step ) {
		
		beginShape()
		for( let theta = rotation.angle.start; theta <= rotation.angle.end; theta += res ) {
		
			const point = [ 
				rotation.center.x + r * Math.cos(theta),
				rotation.center.y + r * Math.sin(theta),
			]
			
			
			if( 
				point[0] > props.x && 
				point[0] < props.x + props.w &&
				point[1] > props.y &&
				point[1] < props.y + props.h
			) {
			
			
				vertex(point[0], point[1])
			}
 		}
		endShape()
	}
}

/////////////////////////////////////////////////////////////////////////////////
