// debug
let debugSave = false

// Seed
let seed = (fxrand() * 1e9) | 0

// Canvas
let W = 1500
let H = W * 1.35

// Features
let gap = 97
let rows
let cols
let rowSize
let colSize
let mosaic = []
let marginV
let marginH
let maxrows

// Palettes
let pAi = {
	name: "Ai&me",
	bg: [220, 75, 27],
	fills: [
		[100, 75, 90],
		[50, 100, 100],
		[0, 0, 80],
		[330, 40, 90],
	],
}

let pAnansi = {
	name: "Anansi",
	bg: [343, 81, 31],
	fills: [
		[259, 91, 75],
		[344, 96, 90],
		[12, 71, 50],
		[20, 93, 80],
	],
}
let pAndre = {
	name: "Andre",
	bg: [49, 10, 20],
	fills: [
		[19, 100, 97],
		[330, 83, 75],
		[291, 21, 56],
		[210, 20, 60],
	],
}
let pBlue = {
	name: "Blue",
	bg: [223, 82, 37],
	fills: [
		[45, 88, 100],
		[226, 86, 87],
		[218, 80, 64],
		[223, 85, 28],
	],
}

let pBreeze = {
	name: "Breeze",
	bg: [32, 10, 45],
	fills: [
		[0, 63, 97],
		[21, 43, 48],
		[25, 70, 95],
		[30, 55, 90],
	],
}
let pCamilleRoux = {
	name: "Camille Roux",
	bg: [220, 30, 18],
	fills: [
		[0, 0, 100],
		[60, 80, 80],
		[175, 80, 60],
		[0, 75, 80],
	],
}
let pCarbonPaper = {
	name: "Carbon Paper",
	bg: [275, 27, 20],
	fills: [
		[245, 95, 55],
		[245, 57, 55],
		[245, 63, 95],
		[245, 73, 75],
	],
}
let pColab = {
	name: "Collab",
	bg: [18, 10, 8],
	fills: [
		[335, 78, 92],
		[43, 100, 87],
		[21, 77, 100],
		[200, 75, 85],
	],
}

let pCopy = {
	name: "Copy",
	bg: [100, 0, 90],
	fills: [
		[0, 0, 87],
		[0, 0, 69],
		[0, 0, 50],
		[0, 0, 30],
	],
}
let pCortex = {
	name: "Cortex",
	bg: [222, 12, 18],
	fills: [
		[21, 79, 100],
		[212, 32, 88],
		[146, 16, 52],
		[73, 4, 89],
	],
}
let pCyberneticsRose = {
	name: "Cybernetics Rose",
	bg: [265, 90, 58],
	fills: [
		[211, 84, 100],
		[0, 0, 75],
		[213, 89, 70],
		[200, 85, 100],
	],
}
let pdmarchi = {
	name: "dmarchi",
	bg: [214, 37, 15],
	fills: [
		[207, 87, 40],
		[345, 83, 76],
		[202, 84, 55],
		[194, 68, 60],
	],
}
let pElder = {
	name: "Elder",
	bg: [47, 8, 98],
	fills: [
		[44, 11, 95],
		[46, 26, 92],
		[48, 44, 87],
		[47, 72, 83],
	],
}
let pEloutdeKok = {
	name: "Elout de Kok",
	bg: [165, 8, 14],
	fills: [
		[97, 91, 52],
		[0, 87, 73],
		[350, 70, 78],
		[24, 50, 55],
	],
}
let pEnigmaCosmico = {
	name: "Enigma Cósmico",
	bg: [0, 0, 7],
	fills: [
		[50, 100, 70],
		[220, 60, 80],
		[300, 60, 20],
		[120, 30, 20],
	],
}
let pFrajolas = {
	name: "Frajolas",
	bg: [220, 4, 16],
	fills: [
		[220, 4, 75],
		[220, 4, 55],
		[220, 4, 35],
		[220, 4, 10],
	],
}
let pFuturisticClay = {
	name: "Futuristic Clay",
	bg: [10, 10, 10],
	fills: [
		[50, 80, 100],
		[0, 60, 100],
		[15, 70, 80],
		[10, 50, 70],
	],
}
let pfxhash = {
	name: "fxhash",
	bg: [0, 0, 7],
	fills: [
		[88, 82, 100],
		[320, 100, 98],
		[0, 0, 20],
		[0, 0, 95],
	],
}

let pGrey = {
	name: "Grey",
	bg: [213, 35, 40],
	fills: [
		[11, 98, 95],
		[189, 15, 69],
		[205, 23, 59],
		[223, 30, 36],
	],
}
let pLiam = {
	name: "Liam",
	bg: [275, 19, 10],
	fills: [
		[28, 72, 100],
		[272, 76, 93],
		[248, 82, 40],
		[325, 60, 86],
	],
}
let pLikeMurvin = {
	name: "LikeMurvin",
	bg: [125, 42, 55],
	fills: [
		[30, 65, 98],
		[187, 49, 93],
		[125, 92, 98],
		[200, 96, 98],
	],
}

let pPeacockSpider = {
	name: "Peacock Spider",
	bg: [245, 180, 20],
	fills: [
		[0, 75, 94],
		[180, 180, 180],
		[100, 220, 220],
		[80, 80, 75],
	],
}
let pPurple = {
	name: "Purple",
	bg: [0, 0, 35],
	fills: [
		[263, 63, 100],
		[263, 53, 46],
		[262, 20, 27],
		[0, 0, 9],
	],
}
let pKraft = {
	name: "Kraft",
	bg: [33, 23, 56],
	fills: [
		[0, 46, 100],
		[31, 25, 36],
		[32, 24, 27],
		[33, 19, 18],
	],
}
let pSalvador = {
	name: "Salvador",
	bg: [37, 45, 55],
	fills: [
		[240, 40, 47],
		[5, 94, 96],
		[261, 49, 25],
		[39, 98, 100],
	],
}
let pSashiko = {
	name: "Sashiko",
	bg: [255, 255, 240],
	fills: [
		[30, 144, 255],
		[214, 23, 57],
		[255, 215, 0],
		[211, 211, 211],
	],
}
let pStarWesterner = {
	name: "StarWesterner",
	bg: [80, 50, 20],
	fills: [
		[0, 100, 80],
		[220, 100, 80],
		[0, 0, 10],
		[0, 0, 98],
	],
}
let pRed = {
	name: "Red",
	bg: [355, 87, 62],
	fills: [
		[0, 36, 100],
		[348, 84, 100],
		[26, 52, 28],
		[26, 49, 20],
	],
}
let pResistance = {
	name: "Resistance",
	bg: [335, 78, 90],
	fills: [
		[5, 83, 100],
		[90, 90, 80],
		[60, 90, 80],
		[220, 85, 78],
	],
}

let pTurquoise = {
	name: "Turquoise",
	bg: [0, 0, 100],
	fills: [
		[174, 77, 80],
		[174, 55, 60],
		[174, 50, 40],
		[174, 35, 20],
	],
}

let palettes = [
	pAi,
	pAnansi,
	pAndre,
	pBlue,
	pBreeze,
	pCamilleRoux,
	pCarbonPaper,
	pColab,
	pCopy,
	pCortex,
	pCyberneticsRose,
	pdmarchi,
	pElder,
	pEloutdeKok,
	pEnigmaCosmico,
	pFrajolas,
	pFuturisticClay,
	pfxhash,
	pGrey,
	pLiam,
	pLikeMurvin,
	pPeacockSpider,
	pPurple,
	pKraft,
	pSalvador,
	pSashiko,
	pStarWesterner,
	pRed,
	pResistance,
	pTurquoise,
]

// palettes = [pColab]

let c = (fxrand() * palettes.length) | 0

let sizes = ["Fam", "Space", "Nature"]
let cellSize = sizes[(fxrand() * sizes.length) | 0]

//Features
$fx.features({
	Gang: palettes[c].name,
})

// Margin
marginV = H / 4.5
marginH = W / 2

//Tipo
if (cellSize == "Fam") {
	maxrows = [25, 27, 28, 29]
	gap += H * 0.0053
} else if (cellSize == "Space") {
	maxrows = [25, 27, 28, 32]
	gap += H * 0.008
} else {
	maxrows = [25, 27, 29, 30]
	gap += H * 0.0106
}

let md1

// area de protecao
let areaProtecao = {
	x: 622,
	y: 0,
	w: 300,
	h: H,
}

function setup() {
	createCanvas(W, H)
	md1 = createGraphics(W, H)
	md2 = createGraphics(W, H)

	pixelDensity(1)
	colorMode(HSB)
	randomSeed(seed)
	noiseSeed(seed)

	const rc = rough.canvas(document.getElementById("defaultCanvas0"))

	noStroke()
	console.log("fxhash:", fxhash)
	console.log("Gang:", $fx.getFeature("Gang"))
	console.log(cellSize)

	//membro, my brother
	rows = random(maxrows)
	rowSize = (H - marginV * 2 - gap * (rows - 3)) / rows

	console.log("linhas", rows)

	for (i = 0; i < rows; i++) {
		let numCols = 1
		colSize = (W - marginV * 10 - gap * (numCols - 1)) / rowSize

		for (j = 0; j < numCols; j++) {
			let color = rarity(palettes[c].fills[0], palettes[c].fills[1], palettes[c].fills[2], palettes[c].fills[3])
			let maxBrightness
			if (cellSize !== "Fam") {
				maxBrightness = 9
			} else {
				maxBrightness = 5
			}

			let colorBrightness = [color[0], constrain(color[1] + random(2), 0, 100), constrain(color[2] - random(maxBrightness), 0, 100)]

			let form = 1
			let m1 = random()
			let m2 = random()
			let r = random()
			mosaic.push(new MosaicCell(j * colSize + j * gap, i * rowSize + i * gap, colSize, rowSize, colorBrightness, form, m1, m2))
		}
	}

	background(palettes[c].bg)

	// Fundo transparente

	if (random() < 1) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.13)
		let x = random(-W, W / 4)
		let y = random(H, 2)
		let rnd = random()

		if (rnd < 0.25) {
			fill(...cor, 0.05)
			console.log("arrowsquare")
			formArrow(x * 2, y * 0, H * 2, H * 2, 1, 1, random())
			gapSquare(x, y, H * 2, H * 2, 1, 1, random())
		} else if (rnd < 0.07) {
			console.log("verthorz")
			formLineDotVert(x * 0, y, H, H, 1, 1, random())
			formLineDotHorz(x * 0, y, H, H, 1, 1, random())
		} else if (rnd < 0.09) {
			console.log("dothorz")
			formLineDotHorz(x, y, H * 4, H, 6, 4, random())
		} else {
			console.log("square")
			fill(...cor, 0.08)
			gapSquare(x, y, H * 2, H * 2, 1, 1, random())
		}
	}

	if (random() < 0.9) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.12)
		let x = random(-W, W / 4)
		let y = random(H, 2)
		let rnd = random()

		if (rnd < 0.25) {
			fill(...cor, 0.07)
			console.log("arrowsquare")
			formArrow(x * 2, y * 0, H * 2, H * 2, 1, 1, random())
		} else if (rnd < 0.5) {
			console.log("verthorz")
			formLineDotVert(x * 0, y, H, H, 1, 1, random())
		} else if (rnd < 0.75) {
			console.log("dothorz")
			fill(...cor, 0.09)
			formLineDotHorz(x, y, H * 4, H, 6, 4, random())
		} else {
			console.log("square")
			gapSquare(x, y, H * 2, H * 2, 1, 1, random())
		}
	}

	if (random() < 0.15) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.11)
		let x = random(-W, W / 4)
		let y = random(H, 2)
		let rnd = random()

		if (rnd < 0.25) {
			fill(...cor, 0.05)
		} else if (rnd < 0.5) {
			console.log("arrows")
			formArrow(x * 2, y * 0, H * 2, H * 2, 1, 1, random())
		} else {
			console.log("asterisk")
			formAsterisk(x, y, H * 2, H * 2, 1, 1, random())
		}
	}

	//Pontinhos
	if (random() < 1) {
		let cor = random(palettes[c].fills)
		let x = random(-W, W / 4)
		let y = random(H, 2)
		let rnd = random()

		if (rnd < 0.25) {
			fill(...cor, 0.1)
			console.log("dot")
			formDotLine(x, y, H / 2, H / 2, 10, 9, 100, random())
		} else if (rnd < 0.5) {
			fill(...cor, 0.12)
			console.log("arrows")
			formArrow(x * 2, y * 0, H * 0.5, H, 8, 21, random())
		} else if (rnd < 0.75) {
			fill(...cor, 0.9)
			console.log("asterisk")
			formAsterisk(x, y, H / 1.5, H / 1.5, 14, 14, 100, random())
		} else {
			console.log("plus")
			fill(...cor, 0.2)
			formPlus(x, y, H / 2, H / 2, 10, 10, 93, random())
		}
	}

	// pontinhos 2
	if (random() < 1) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.13)
		let x = random(-W / 2, W)
		let y = random(-H / 2, 0)
		let rnd = random()

		if (rnd < 0.2) {
			fill(...cor, 0.6)
			console.log("dot2")
			formDotLine(x, y, H, H, 25, 21, 100)
		} else if (rnd < 0.4) {
			fill(...cor, 0.2)
			console.log("arrows2")
			formArrow(x, y, H * 0.5, H, 12, 21, random())
		} else if (rnd < 0.6) {
			fill(...cor, 0.9)
			console.log("asterisk")
			formAsterisk(x, y, H / 1.5, H / 1.5, 14, 14, 100, random())
		} else if (rnd < 0.8) {
			fill(...cor, 0.01)
			console.log("asterisk2")
			formAsterisk(x, y, H * 2, H, 20, 20, 500) // formAsterisk(x, y, H / 4, H / 4, 20, 20, 110)(guardar)
		} else {
			console.log("plus2")
			fill(...cor, 0.2)
			formPlus(x, y, H / 2, H / 2, 10, 10, 93)
			formPlus(x, y, H / 2, H / 2, 10, 10, 93)
		}
	}

	//linhas
	function getHSBColor(palette) {
		let index = floor(random(palette.fills.length))
		let fill = palette.fills[index]

		while (fill.every((val, i) => val === palette.bg[i])) {
			index = floor(random(palette.fills.length))
			fill = palette.fills[index]
		}

		return color(fill[0], fill[1] * 100, fill[2] * 100)
	}

	function drawLine() {
		let corHSB = getHSBColor(palettes[c])
		stroke(corHSB)
		line(x, y, x + passo, y - passo)
	}

	function RGBToHSB(rgb) {
		const r = rgb[0] / 255
		const g = rgb[1] / 255
		const b = rgb[2] / 255

		const cmin = Math.min(r, g, b)
		const cmax = Math.max(r, g, b)
		const delta = cmax - cmin

		let h = 0
		let s = 0
		let v = 0

		if (delta === 0) {
			h = 0
		} else if (cmax === r) {
			h = ((g - b) / delta) % 6
		} else if (cmax === g) {
			h = (b - r) / delta + 2
		} else {
			h = (r - g) / delta + 4
		}

		h = Math.round(h * 60)
		if (h < 0) {
			h += 360
		}

		s = delta === 0 ? 0 : delta / cmax
		v = cmax

		return [h, s, v]
	}

	if (random() < 0.9) {
		let corRGB = random(palettes[c].fills)
		let corHSB = RGBToHSB(corRGB)
		let lineColor = color(corRGB[0], corRGB[1], corRGB[2])
		let x = random(-W / 2, W * 1.5)
		let y = random(H)
		let w = random(4, 50)
		let h = random(3, 5)
		let roughness1 = random([750, 7000, 10000])
		if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
			rc.rectangle(x, y, w, h, {
				roughness: roughness1,
				seed: seed,
				stroke: lineColor,
				strokeWidth: 1,
				fill: lineColor,
			})
			console.log("linha", roughness1)
		}
	}
	if (random() < 0.7) {
		let corRGB = random(palettes[c].fills)
		let corHSB = RGBToHSB(corRGB)
		let lineColor = color(corRGB[0], corRGB[1], corRGB[2])
		let x = random(-W / 2, W * 1.5)
		let y = random(H)
		let w = random(4, 50)
		let h = random(3, 5)
		let roughness1 = random([120, 150, 255])
		if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
			rc.rectangle(x, y, w, h, {
				roughness: roughness1,
				seed: seed,
				stroke: lineColor,
				strokeWidth: 0.7,
				fill: lineColor,
			})
			console.log("linha", roughness1)
		}
	}
	if (random() < 0.6) {
		let corRGB = random(palettes[c].fills)
		let corHSB = RGBToHSB(corRGB)
		let lineColor = color(corRGB[0], corRGB[1], corRGB[2])
		let x = random(-W / 2, W * 1.5)
		let y = random(H)
		let w = random(4, 50)
		let h = random(3, 5)
		let roughness1 = random([70, 100, 200, 300])
		if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
			rc.rectangle(x, y, w, h, {
				roughness: roughness1,
				seed: seed,
				stroke: lineColor,
				strokeWidth: 0.8,
				fill: lineColor,
			})
			console.log("linha2", roughness1)
		}
	}
	if (random() < 0.7) {
		let corRGB = random(palettes[c].fills)
		let corHSB = RGBToHSB(corRGB)
		let lineColor = color(corRGB[0], corRGB[1], corRGB[2])
		let x = random(-W / 2, W * 1.5)
		let y = random(H)
		let w = random(4, 50)
		let h = random(3, 5)
		let roughness1 = random([50, 70, 85])
		if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
			rc.rectangle(x, y, w, h, {
				roughness: roughness1,
				seed: seed,
				stroke: lineColor,
				strokeWidth: 0.7,
				fill: lineColor,
			})
			console.log("linha", roughness1)
		}
	}
	let fillBg = "rgb(" + HSBToRGB(...palettes[c].bg) + ")"

	//elementos
	if (random() < 0.8) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.9)
		let x = random(W * 0.15, W * 0.85)
		let y = random(H * 0.05, H * 0.65)
		let r = random()
		if (r < 0.2) {
			let w = 98
			let h = 98
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				gapSquare(x, y, w, h, 2, 2, 10)
				console.log("4-Bit-▪️")
			}
		} else if (r < 0.4) {
			let w = 98
			let h = 98
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formPlus(x, y, w, h, 2, 2, 10)
				console.log("4-Bit-+")
			}
			4
		} else if (r < 0.6) {
			let w = 30
			let h = 30
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formArrow(x, y, w, h, 2, 2, random())
				console.log("8-Bit-^")
			}
		} else if (r < 0.8) {
			let w = 98
			let h = 98
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formDotLine(x, y, w, h, 4, 4, 5)
				console.log("8-Bit-.")
			}
		} else {
			let w = 110
			let h = 110
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formAsterisk(x, y, w, h, 4, 4, 8)
				console.log("8-Bit-*")
			}
		}
	}

	if (random() < 1) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.22)

		let r = random()
		if (r < 0.33) {
			let x = random(W)
			let y = random(H)
			let w = 20
			let h = 20
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				gapSquare(x, y, W / 12, W / 12, 4, 4, gap / 10)
			}

			console.log("8-Bit Pulse")
		} else if (r < 0.08) {
			fill(...cor, 0.09)
			let x = random(H)
			let y = random(W)
			let w = 20
			let h = 20
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				gapSquare(x, y, W / 6, W / 6, 7, 1, 1.5)
			}
			console.log("cortina")
		} else {
			fill(...cor, 0.08)
			let x = random(H)
			let y = random(W)
			let w = 20
			let h = 20
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formPlus(x, y, W / 7, W / 6, 7, 1, 1.5)
			}
			console.log("cortina plus")
		}
	}

	if (random() < 1) {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.05)

		let r = random()

		if (r < 0.33) {
			fill(...cor, 0.015)
			let x = random(H)
			let y = random(W)
			let w = 21
			let h = H
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formArrow(x, y, H / 5, H / 5, 1, 35, random())
				console.log("CordaArrow")
			}
		} else if (r < 0.66) {
			fill(...cor, 0.03)
			let x = random(H)
			let y = random(W)
			let w = 21
			let h = H
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				gapSquare(x, y, W / 4, W / 4, 1, 100, gap / 12)
				console.log("Cortina2")
			}
		} else {
			fill(...cor, 0.01)
			let x = random(H)
			let y = random(W)
			let w = 20
			let h = 20
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formAsterisk(x, y, W / 3, W / 3, 7, 1, 1.5)
				console.log("Cortina Asterisk")
			}
		}
	}

	if (random() < 0.75 && cellSize !== "Large" && cellSize !== "Tiny") {
		let cor = random(palettes[c].fills)
		fill(...cor, 0.03)

		let r = random()
		if (r < 0.33) {
			console.log("X dots")
			fill(...cor, 0.3)
			let x = random(-W / 300, W * 0.1)
			let y = random(-H / 300, H * 0.75)
			formDotLine(x, y, W / 8, W / 8, 3, 3, gap / 2)
		} else if (r < 0.66) {
			console.log("q8")
			let x = random(W * 0.1, W * 0.15) //let x = random(W*0.2, W*0.15)
			let y = random(-H / 4, H * 0.35)
			gapSquare(x, y, W / 10, H / 6, H / 15, 11, gap / 4)
		} else {
			console.log("cortina plus2")
			fill(...cor, 0.3)
			let x = random(H)
			let y = random(W)
			let w = 20
			let h = 20
			if (x < areaProtecao.x - w || x > areaProtecao.x + areaProtecao.w) {
				formPlus(x, y, W / 10, W / 20, 7, 1, 1.5)
			}
		}
	}

	makeArt()
	translate(marginH, marginV)

	//X>622 && X<922 (areadeproteção)

	addGrain(0.3)
	addGrain(0.5)

	if (debugSave) {
		save(fxhash + ".png")

		async function reloadPage() {
			await new Promise(resolve => setTimeout(resolve, 2000))
			document.location.reload(true)
		}

		reloadPage()
	}
}

function makeArt() {
	let totalGapSquares = 0
	let totalFormPluses = 0
	let totalFormDotLines = 0
	let totalFormLineDotVerts = 0
	let totalFormAsterisk = 0

	let costuraGlobal

	// decide se a costura é global
	if (random() < 0.07) {
		costuraGlobal = true
	} else {
		costuraGlobal = false
	}
	console.log("costura global", costuraGlobal)

	push()
	translate(marginH, marginV)

	for (i = 0; i < mosaic.length; i++) {
		let numGapSquare = 0
		let numFormPlus = 0
		let numFormDotLine = 0
		let numFormLineDotVert = 0
		let numFormAsterisk = 0

		fill(mosaic[i].color)
		strokeWeight(0.6)
		let mult
		// decide qual a cor da costura global
		let cor = random(palettes[c].fills)
		stroke(...cor, 0.7)

		// decide a forma sashiko
		if (random() < 0.95) {
			mult = int(map(mosaic[i].m1, 0, 1, 1, 6))

			// se nao houver costura global decide a chance de uma costura local
			if (costuraGlobal == false) {
				if (random() < 0.2) {
					let cor = random(palettes[c].fills)
					stroke(...cor, 0.6)
					drawingContext.setLineDash([0.5, 0.5])
				} else {
					noStroke()
					drawingContext.setLineDash([0.5, 0])
				}
			}
			gapSquare(mosaic[i].x, mosaic[i].y, mosaic[i].w, mosaic[i].h, mult, mult)
			numGapSquare++
		} else if (random() < 0.3) {
			mult = int(map(mosaic[i].m1, 0, 1, 1, 6))
			// se nao houver costura global decide a chance de uma costura local
			if (costuraGlobal == false) {
				if (random() < 0.3) {
					let cor = random(palettes[c].fills)
					stroke(...cor, 0.6)
					drawingContext.setLineDash([0.5, 0.5])
				} else {
					noStroke()
					drawingContext.setLineDash([0.5, 0])
				}
			}
			formPlus(mosaic[i].x, mosaic[i].y, mosaic[i].w, mosaic[i].h, mult, mult)
			numFormPlus++
		} else if (random() < 0.05) {
			mult = int(map(mosaic[i].m1, 0, 1, 1, 6))
			// se nao houver costura global decide a chance de uma costura local
			if (costuraGlobal == false) {
				if (random() < 0.3) {
					let cor = random(palettes[c].fills)
					stroke(...cor, 0.6)
					drawingContext.setLineDash([0.5, 0.5])
				} else {
					noStroke()
					drawingContext.setLineDash([0.5, 0])
				}
			}
			formDotLine(mosaic[i].x, mosaic[i].y, mosaic[i].w, mosaic[i].h, mult, mult)
			numFormDotLine++
		} else if (random() < 0.2 && totalFormAsterisk < 1) {
			mult = int(map(mosaic[i].m1, 0, 1, 1, 6))
			// se nao houver costura global decide a chance de uma costura local
			if (costuraGlobal == false) {
				if (random() < 0.2) {
					let cor = random(palettes[c].fills)
					stroke(...cor, 0.6)
					drawingContext.setLineDash([0.5, 0.5])
				} else {
					noStroke()
					drawingContext.setLineDash([0.5, 0])
				}
			}
			formAsterisk(mosaic[i].x, mosaic[i].y, mosaic[i].w, mosaic[i].h, mult, mult)
			numFormAsterisk++
		} else {
			mult = int(map(mosaic[i].m1, 0, 1, 1, 4))
			// se nao houver costura global decide a chance de uma costura local
			if (costuraGlobal == false) {
				if (random() < 0.3) {
					let cor = random(palettes[c].fills)
					stroke(...cor, 0.6)
					drawingContext.setLineDash([0.5, 0.5])
				} else {
					noStroke()
					drawingContext.setLineDash([0.5, 0])
				}
			}
			formLineDotVert(mosaic[i].x, mosaic[i].y, mosaic[i].w, mosaic[i].h, mult, mult)
			numFormLineDotVert++
		}

		totalGapSquares += numGapSquare
		totalFormPluses += numFormPlus
		totalFormDotLines += numFormDotLine
		totalFormLineDotVerts += numFormLineDotVert
		totalFormAsterisk += numFormAsterisk
	}

	translate(-marginH, -marginV)
	pop()

	console.log("GapSquares: " + totalGapSquares)
	console.log("FormPluses: " + totalFormPluses)
	console.log("FormDotLines: " + totalFormDotLines)
	console.log("FormLineDotVerts: " + totalFormLineDotVerts)
	console.log("FormAsterisks: " + totalFormAsterisk)

	$fx.preview()
}

class MosaicCell {
	constructor(x, y, w, h, color, form, m1, m2) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.color = color
		this.form = form
		this.m1 = m1
		this.m2 = m2
	}
}

function gapSquare(x, y, w, h, hparts, vparts, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			// top
			rect(x + pw * k + g * k, y + ph * j + g * j, pw, ph / 4)
			// bottom
			rect(x + pw * k + g * k, y + ph * j + g * j + (ph - ph / 4), pw, ph / 4)
			// Left
			rect(x + pw * k + g * k, y + ph * j + g * j, pw / 4, ph)
			// Right
			rect(x + pw * k + g * k + (pw - pw / 4), y + ph * j + g * j, pw / 4, ph)
		}
	}
}

function formPlus(x, y, w, h, hparts, vparts, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			rect(x + pw * k + g * k, y + ph * j + g * j + (ph / 2 - ph / 8), pw, ph / 4)
			rect(x + pw * k + g * k + (pw / 2 - pw / 8), y + ph * j + g * j, pw / 4, ph)
		}
	}
}

function formDotLine(x, y, w, h, hparts, vparts, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			rect(x + pw * k + g * k, y + ph * j + g * j, pw, ph)
		}
	}
}

function formAsterisk(x, y, w, h, hparts, vparts, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			let xc = x + pw * k + g * k
			let yc = y + ph * j + g * j

			rect(xc, yc + (ph / 2 - ph * 0.075), pw, ph * 0.15)
			rect(xc + (pw / 2 - pw * 0.075), yc, pw * 0.15, ph)
			beginShape()
			vertex(xc + (pw / 35) * 3, yc + (ph / 35) * 7)
			vertex(xc + (pw / 35) * 7, yc + (ph / 35) * 3)
			vertex(xc + (pw / 35) * 32, yc + (ph / 35) * 28)
			vertex(xc + (pw / 35) * 28, yc + (ph / 35) * 32)
			endShape()
			beginShape()
			vertex(xc + (pw / 35) * 28, yc + (ph / 35) * 3)
			vertex(xc + (pw / 35) * 32, yc + (ph / 35) * 7)
			vertex(xc + (pw / 35) * 7, yc + (ph / 35) * 32)
			vertex(xc + (pw / 35) * 3, yc + (ph / 35) * 28)
			endShape()
		}
	}
}

function formLineDotHorz(x, y, w, h, hparts, vparts, m1, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts
	let r = int(map(m1, 0, 1, 0, 2))

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			if (r === 0) {
				// Left-Right
				// Line
				rect(x + pw * k + g * k, y + ph * j + g * j, pw * 0.7, ph)
				// Dot
				rect(x + pw * k + g * k + pw * 0.7 + g, y + ph * j + g * j, pw - (pw * 0.7 + g), ph)
			} else if (r === 1) {
				// Right-Left
				// Line
				rect(x + pw * k + g * k + (pw - (pw * 0.7 + g)) + g, y + ph * j + g * j, pw * 0.7, ph)
				// Dot
				rect(x + pw * k + g * k, y + ph * j + g * j, pw - (pw * 0.7 + g), ph)
			}
		}
	}
}

function formLineDotVert(x, y, w, h, hparts, vparts, m1, customGap) {
	let g
	if (customGap !== undefined) {
		g = customGap
	} else {
		g = gap
	}
	let pw = (w - g * (hparts - 1)) / hparts
	let ph = (h - g * (vparts - 1)) / vparts
	let r = int(map(m1, 0, 1, 0, 2))

	for (k = 0; k < hparts; k++) {
		for (j = 0; j < vparts; j++) {
			if (r === 0) {
				// Bottom-Up
				// Line
				rect(x + pw * k + g * k, y + ph * j + g * j + (ph - (ph * 0.7 + g)) + g, pw, ph * 0.7)
				// Dot
				rect(x + pw * k + g * k, y + ph * j + g * j, pw, ph - (ph * 0.7 + g))
			} else if (r === 1) {
				// // Up-Bottom
				// // Line
				rect(x + pw * k + g * k, y + ph * j + g * j, pw, ph * 0.7)
				// // Dot
				rect(x + pw * k + g * k, y + ph * j + g * j + (ph - (ph - (ph * 0.7 + g))), pw, ph - (ph * 0.7 + g))
			}
		}
	}
}

function formArrow(x, y, w, h, hparts, vparts, m1) {
	let pw = (w - gap * (hparts - 1)) / hparts
	let ph = (h - gap * (vparts - 1)) / vparts
	let r = int(map(m1, 0, 1, 0, 4))

	for (j = 0; j < vparts; j++) {
		for (k = 0; k < hparts; k++) {
			let xc = x + pw * k + gap * k
			let yc = y + ph * j + gap * j

			if (r === 0) {
				beginShape()
				vertex(xc + (pw / 36) * 1, yc + (ph / 36) * 31)
				vertex(xc + (pw / 36) * 15, yc + (ph / 36) * 2)
				vertex(xc + (pw / 36) * 21, yc + (ph / 36) * 2)
				vertex(xc + (pw / 36) * 35, yc + (ph / 36) * 31)
				vertex(xc + (pw / 36) * 30, yc + (ph / 36) * 34)
				vertex(xc + (pw / 36) * 18, yc + (ph / 36) * 10)
				vertex(xc + (pw / 36) * 6, yc + (ph / 36) * 34)
				endShape()
			} else if (r === 1) {
				beginShape()
				vertex(xc + (pw / 36) * 5, yc + (ph / 36) * 1)
				vertex(xc + (pw / 36) * 34, yc + (ph / 36) * 15)
				vertex(xc + (pw / 36) * 34, yc + (ph / 36) * 21)
				vertex(xc + (pw / 36) * 5, yc + (ph / 36) * 35)
				vertex(xc + (pw / 36) * 2, yc + (ph / 36) * 30)
				vertex(xc + (pw / 36) * 26, yc + (ph / 36) * 18)
				vertex(xc + (pw / 36) * 2, yc + (ph / 36) * 7)
				endShape()
			} else if (r === 2) {
				beginShape()
				vertex(xc + (pw / 36) * 1, yc + (ph / 36) * 5)
				vertex(xc + (pw / 36) * 6, yc + (ph / 36) * 2)
				vertex(xc + (pw / 36) * 18, yc + (ph / 36) * 26)
				vertex(xc + (pw / 36) * 30, yc + (ph / 36) * 2)
				vertex(xc + (pw / 36) * 35, yc + (ph / 36) * 5)
				vertex(xc + (pw / 36) * 21, yc + (ph / 36) * 34)
				vertex(xc + (pw / 36) * 15, yc + (ph / 36) * 34)
				endShape()
			} else {
				beginShape()
				vertex(xc + (pw / 36) * 31, yc + (ph / 36) * 1)
				vertex(xc + (pw / 36) * 34, yc + (ph / 36) * 6)
				vertex(xc + (pw / 36) * 10, yc + (ph / 36) * 18)
				vertex(xc + (pw / 36) * 34, yc + (ph / 36) * 30)
				vertex(xc + (pw / 36) * 31, yc + (ph / 36) * 35)
				vertex(xc + (pw / 36) * 2, yc + (ph / 36) * 21)
				vertex(xc + (pw / 36) * 2, yc + (ph / 36) * 15)
				endShape()
			}
		}
	}
}

const HSBToRGB = (h, s, b) => {
	s /= 100
	b /= 100
	const k = n => (n + h / 60) % 6
	const f = n => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)))
	return [255 * f(5), 255 * f(3), 255 * f(1)]
}

function addGrain(amount) {
	loadPixels()

	for (let i = 0; i < width * pixelDensity() * (height * pixelDensity()) * 4; i += 4) {
		let noise = map(random(), 0, 1, -amount, amount)
		pixels[i] = pixels[i] + noise
		pixels[i + 1] = pixels[i + 1] + noise
		pixels[i + 2] = pixels[i + 2] + noise
		pixels[i + 3] = pixels[i + 3] + noise
	}

	updatePixels()
}

// Rarity
function rarity(r0, r1, r2, r3) {
	let rare = 0.08
	let uncommon = 0.15
	let common = 0.45

	let value = fxrand()
	if (value <= rare) {
		return r0
	} else if (value <= uncommon) {
		return r1
	} else if (value <= common) {
		return r2
	} else {
		return r3
	}
}
