
let matrixStack = [];
const last = (arr) => { return arr.slice(-1)[0] };

function addScreenPositionFunction(p5Instance) {
	const p = p5Instance;

	matrixStack = [new p5.Matrix()];

	if (p.translate instanceof Function) {
		let translateNative = p.translate;
		p.translate = function(...args) {
			while (args.length < 3) {
				args.push(0);
			}
			last(matrixStack).translate(args);
			translateNative.apply(p, args);
		};
	}

	if (p.rotate instanceof Function) {
		let rotateNative = p.rotate;
		p.rotate = function(...args) {
			last(matrixStack).rotateZ(args[0]);
			rotateNative.apply(p, args);
		};
	}

	if (p.push instanceof Function) {
		let pushNative = p.push;
		p.push = function(...args) {
			let m = last(matrixStack);
			matrixStack.push(m.copy());
			pushNative.apply(p, args);
		};
	}
	if (p.pop instanceof Function) {
		let popNative = p.pop;
		p.pop = function(...args) {
			matrixStack.pop();
			popNative.apply(p, args);
		};
	}

	p.screenPosition = function(v=p.createVector()) {
		return multMatrixVector(last(matrixStack), v);
	}

	p.screenRotation = function() {
		return p.screenPosition(new p5.Vector(1, 0))
			.sub(p.screenPosition())
			.heading();
	}

	function multMatrixVector(m, v) {
		if (!(m instanceof p5.Matrix) || !(v instanceof p5.Vector)) {
			throw new Error('multMatrixVector : Invalid arguments');
		}

		var dest = p.createVector();
		var mat = m.mat4;

		// Multiply in column major order.
		dest.x = mat[0] * v.x + mat[4] * v.y + mat[8] * v.z + mat[12];
		dest.y = mat[1] * v.x + mat[5] * v.y + mat[9] * v.z + mat[13];
		dest.z = mat[2] * v.x + mat[6] * v.y + mat[10] * v.z + mat[14];
		var w = mat[3] * v.x + mat[7] * v.y + mat[11] * v.z + mat[15];

		if (Math.abs(w) > Number.EPSILON) {
			dest.mult(1.0 / w);
		}

		return dest;
	}

}