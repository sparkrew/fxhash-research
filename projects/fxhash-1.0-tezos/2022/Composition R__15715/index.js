const width = Plotted.IN * 9;
const height = Plotted.IN * 9;
const margin = Plotted.IN * 1.0;
const Point = Plotted.Point;
let SVG;
let canvas;
let config = {};
const palletes = [
	{name: 'red'           , bg: 'white'  , rects: ['black', 'red'], lines: ['red'] },
	{name: '3D Glasses'    , bg: 'white'  , rects: ['blue', 'red'], lines: ['red', 'blue'] },
	{name: 'sunrise'       , bg: 'white'  , rects: ['red', 'orange'], lines: ['red', 'orange', 'pink']},
	{name: 'cool'          , bg: '#eeeeff', rects: ['black'], lines: ['black', 'blue']},
	{name: 'matrix'        , bg: '#222'   , rects: ['chartreuse'], lines: ['chartreuse', 'darkorange']},
	{name: 'precious metal', bg: '#111'   , rects: ['gold', 'silver'], lines: ['gold', 'silver']},
	{name: 'summer'        , bg: '#ffe'   , rects: ['seagreen', 'gold'], lines: ['deepskyblue', 'seagreen', 'gold']}
];
window.onload = () => {
    canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	//Initialize features
	config.algorithm = choose([subdivide, slice, grid, random]);
	config.colorscheme = choose(palletes);
	sizes = [];
	switch(config.colorscheme.name){
		default:
			sizes.push('small');
		case 'precious metal':
		case 'matrix':
			sizes.push('medium');
			sizes.push('big')
	}
	config.size = choose(sizes);

	window.$fxhashFeatures = {
		"colorscheme": config.colorscheme.name,
		"rectangle size": config.size,
		"algorithm": config.algorithm.name
	}

	SVG = new Plotted.SVG(width, height, ctx);
	SVG.rect(SVG.origin, width, height).fill(config.colorscheme.bg);

	for(let c of config.colorscheme.rects){
		SVG.setGroup(c);
		SVG.stroke(c);
	}
	for(let c of config.colorscheme.lines){
		SVG.setGroup(c);
		SVG.stroke(c);
	}

	const area = new Plotted.Rect(new Point(margin, margin), width - margin * 2, height - margin * 2);
	SVG.addChild(area).stroke(choose(config.colorscheme.rects)).fill('none');
	let rects = config.algorithm(area);

	let rectProbability;
	switch(config.size){
		case "big": rectProbability = .75; break;
		case "medium": rectProbability = .5; break;
		case "small": rectProbability = .5;
	}
	
	for(let r of rects){
		if(fxrand() < .5){
			let t = new Point(fxRange(margin, width - margin), fxRange(margin, height / 2));
			let t2 = new Point(fxRange(margin, width - margin), fxRange(height / 2, height - margin));
			doRect(r, t, t2);
		}

		if(fxrand() < rectProbability){
			const rectcolor = choose(config.colorscheme.rects);
			SVG.setGroup(rectcolor);
			SVG.addChild(r).stroke(rectcolor).fill('none');
		}

	}

	SVG.draw();
	display();
	fxpreview();
}

function subdivide(initialrect){
	let maxdepth;
	switch(config.size){
		case 'big': maxdepth = fxInt(3, 7); break;
		case 'medium': maxdepth = fxInt(8, 10); break;
		case 'small': maxdepth = fxInt(10, 12); break;
	}
	const area = initialrect.width * initialrect.height;
	let rects = [initialrect];
	for(let i = 0; i < maxdepth; i++){

		let temp = [];
		for(let r of rects){
			if(fxrand() < .95 || i < 3){
;				temp = temp.concat(split(r, 'longest'));
			}
		}
		rects = temp;

	}
	return rects;
}

function slice(initialrect){
	let numSlices;
	switch(config.size){
		case 'big': numSlices = fxInt(2, 6); break;
		case 'medium': numSlices = fxInt(8, 11); break;
		case 'small': numSlices =fxInt(12, 16); break;
	}
	let slicePoints = [initialrect.nw, initialrect.ne];

	while(slicePoints.length < numSlices + 2){
		let newPoint = new Point(fxRange(initialrect.nw.x, initialrect.ne.x), initialrect.nw.y);
		if(slicePoints.find((p) => p.dist(newPoint) < Plotted.MM) === undefined){
			slicePoints.push(newPoint);
		}
	}

	slicePoints.sort((a, b) => a.x - b.x);

	let slices = [];

	for(let i = 0; i < numSlices + 1; i++){
		const p = slicePoints[i];
		const w = p.dist(slicePoints[i + 1])
		const rect = new Plotted.Rect(p, w, initialrect.height);
		slices = slices.concat(split(rect, "horizontal"));
	}

	return slices;
}

function grid(initialrect){
	let rows, cols;
	switch(config.size){
		case 'big': rows = fxInt(4, 8); cols = fxInt(4, 8);break;
		case 'medium': rows = fxInt(8, 14); cols = fxInt(8, 14); break;
		case 'small':  rows = fxInt(20, 30); cols = fxInt(20, 30); break;
	}
	const w = initialrect.width / cols;
	const h = initialrect.height / rows;
	let rects = [];
	for(let x = initialrect.nw.x; x < initialrect.se.x; x += w){
		for(let y = initialrect.nw.y; y < initialrect.se.y; y += h){
			rects.push(new Plotted.Rect(new Point(x, y), w, h));
		}
	}
	return rects;
}

function random(initialrect){
	let numRects;
	let minSize = Plotted.MM * 5;
	let maxSize;
	switch(config.size){
		case 'big': numRects = fxInt(10, 20);minSize = Plotted.MM * 10; maxSize = Plotted.IN * 2; break;
		case 'medium': numRects = fxInt(50, 60); maxSize = Plotted.IN; break;
		case 'small': numRects = fxInt(150, 200); maxSize = Plotted.MM * 7; break;
	}
	let rects = [];
	while(rects.length < numRects){
		let w = fxRange(minSize, maxSize);
		let h = fxRange(minSize, maxSize);
		let x = fxRange(initialrect.nw.x + w, initialrect.se.x - w);
		let y = fxRange(initialrect.nw.y + h, initialrect.se.y - h);
		let r = new Plotted.Rect(new Point(x, y), w, h);
		//Rectangles can have a little overlap, as a treat
		if(!hasIntersection(r, rects) || fxrand() < .2){
			rects.push(r);
		}
	}

	return rects;
}

function split(rect, axis){
	if(axis == 'longest'){
		axis = rect.width > rect.height ? 'vertical' : 'horizontal';
	}
	let divider = fxGauss(.5, .3);
	divider = Math.max(.05, divider);
	divider = Math.min(.95, divider);
	if(axis == 'vertical'){
		splitPoint = lerp(rect.nw, rect.ne, divider);
		const w = rect.nw.dist(splitPoint);
		const h = rect.height;
		const r1 = new Plotted.Rect(rect.nw, w, h);
		const r2 = new Plotted.Rect(splitPoint, rect.width - w, h);
		return [r1, r2];
	}else if(axis == 'horizontal'){
		splitPoint = lerp(rect.nw, rect.sw, divider);
		const h = rect.nw.dist(splitPoint);
		const w = rect.width;
		const r1 = new Plotted.Rect(rect.nw, w, h);
		const r2 = new Plotted.Rect(splitPoint, w, rect.height - h);
		return [r1, r2];
	}
}

function doRect(r, target1, target2){

	SVG.setGroup(choose(config.colorscheme.lines));
	const dir = choose([true, false]);
	let len = choose([Plotted.MM * 1.5, Plotted.CM, Plotted.MM * 1.5, Plotted.CM, Plotted.CM * 2]);
	
	let density = Math.max(Plotted.MM * .75, fxGauss(Plotted.MM * 2, 1));
	//Wider spacing on the dark themes to accomodate gel pens
	if(config.colorscheme.name === 'precious metal' || config.colorscheme.name === 'matrix'){
		density *= 1.2;
	}
	for(let x = r.position.x; x < r.position.x + r.width; x += density){
		if(fxrand() < .01){
			SVG.setGroup(choose(config.colorscheme.lines));
		}
		for(let y = r.position.y; y < r.position.y + r.height; y += density){

			let p = new Point(x, y);
			let dest;
			if(dir){
			dest = p.subtract(target1).normalize().mult(len).add(p);
			}else{
			dest = target1.subtract(p).normalize().mult(len).add(p);
			}
			const safety = distanceToEdge(dest);
			if(safety < margin * .5){
				dest = dest.subtract(p).normalize().mult(safety - margin * .5).add(p);
			}
			let control = p.subtract(target2).normalize().mult(len).add(p);
			const path = SVG.path().strokeWidth(.5);
			path.moveTo(p);
			path.curveTo(control, dest);
		}
	}
}

function distanceToEdge(point){
	return Math.min(
		point.x,
		width - point.x,
		point.y,
		height - point.y
	);
}

function hasIntersection(r, rects){
	for(let other of rects){
		if(intersects(r, other)){
			return true;
		}
	}
	return false;
}

function intersects(rect1, rect2){
	return rect1.nw.x < rect2.ne.x && rect1.ne.x > rect2.nw.x
	&& rect1.nw.y < rect2.sw.y && rect1.sw.y > rect2.nw.y;
}

function display(){
	const displayCanvas = document.getElementById('display');
	const size = Math.min(window.innerWidth, window.innerHeight);
	displayCanvas.setAttribute('width', size);
	displayCanvas.setAttribute('height', size);
	const ctx = displayCanvas.getContext('2d');
	ctx.drawImage(canvas, 0, 0, size, size);
}

window.onresize = () => display();

window.onkeyup = (event) =>{
    if(event.key == 's'){
        downloadSVG();
    }else if(event.key == 'p'){
        downloadPNG();
    }
}

function downloadSVG(){
	const text = SVG.exportSVG({asString: true});
	const fileName = `${fxhash}.svg`;
	const blob = new Blob([text], {type: 'image/svg+xml'});
	let elem = document.createElement('a');
	elem.href = window.URL.createObjectURL(blob);
	elem.setAttribute('download', fileName);
	document.body.appendChild(elem);
	elem.click();
	document.body.removeChild(elem);
}

function downloadPNG(){

	const fileName = `${fxhash}.png`;
	const blob = canvas.toBlob((blob) => {
	    let elem = document.createElement('a');
	    elem.href = window.URL.createObjectURL(blob);
	    elem.setAttribute('download', fileName);
	    document.body.appendChild(elem);
	    elem.click();
	    document.body.removeChild(elem);
    });
}