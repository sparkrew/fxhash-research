var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var colores = Math.ceil($fx.rand() * 12);
var lienzo = Math.ceil($fx.rand() * 2);
var tiposdecolinas =Math.ceil($fx.rand() * 5);
var aves = Math.ceil($fx.rand() * 5);

var variatoncasa =Math.ceil($fx.rand() * 3)
var tiposdecasa= Math.ceil($fx.rand() * 5)
var colinacolor1
var colinacolor2
var colinacolor3

//CARACTERISTICA CASA
var distanciacasa
var xcasa
var ycasa
var xmax
var xmin
var ymax
var ymin

var xmax2
var xmin2
var ymax2
var ymin2

var radiohumo1
var radiohumo2
/// 
var montañacolor
var iniciomontaña
var iniciomontaña2
var finalmontaña
var finalmontaña2
var xm
var xm2
var ym
var ym2
var iniciomontaña3
var finalmontaña3
var xm3
var ym3

var widthfinal
var heightfinal
var xtree4
var sizetree4


var yluna
// variacion canvas 2000 x 2300
switch (lienzo) {
case 1:
		widthfinal = 2600
		heightfinal = 2300
		sizetree4=230
		break
	case 2:
		widthfinal = 3000
		heightfinal = 2300
		sizetree4=250
break

}
canvas.width = widthfinal
canvas.height = heightfinal
var width = canvas.width
var height = canvas.height

switch (colores) {
	case 1:
		colorsky0 = "#6666ff"
		colorluna = "#ffb3b3"
		colorsky1 = "#eac8ea"
		colorhojas1 = "rgba(255,255,255,0.4)"
		colorhojas2 = "rgba(255, 153, 204,0.4)"
		hojas1 = "rgba(255,255,255,0.4)"
		hojas2 = "rgba(255, 153, 204,0.5)"
		grassColor = '#5c8a8a'
		grassColor2 = '#d0c0ae'
		colormontaña = "#ecd8c6"
		colormontaña2 = "#c7b39e"
		colinacolor1 = "#e6ccb3"
		colinacolor2 = "#c7b39e"//"#e6ccb3"
		colinacolor3 = "#d1e0e0"
		coloresferas="#ff80bf"
		break
	case 2:
		colorsky0 = "#84a3e1"
		colorsky1 = "#d9e5f2"
		colorhojas1 = "rgba(255, 255, 225,0.6)"
		colorhojas2 = "#ff9999"
		hojas1 = "rgba(255, 255, 225,0.6)"
		hojas2 = "rgba(255, 153, 153,0.5)"
		grassColor = '#5c8a8a'
		grassColor2 = '#d0c0ae'
		colorluna = "#ffccee"
		colormontaña2 = "#ffcccc"//"#d0bfae"//
		colormontaña = "white"
		colinacolor1 = "#c1d0f0"
		colinacolor2 = "#ffcccc"
		colinacolor3 = "white"
		coloresferas="#ff80bf"
		break
	case 3:
		colorsky0 = "#9999ff"
		colorsky1 = "#9999ff"
		colormontaña = "#e6b3ff"
		colormontaña2 = "white"
		grassColor = 'white';
		grassColor2 = '#a3c2c2';
		colorluna = "#ffb3ec"
		colorhojas1 = "rgba(128, 128, 255,0.5)"
		colorhojas2 = "rgb(255, 153, 255)"
		hojas1 = "rgba(204, 102, 255,0.5"
		hojas2 = "rgba(249, 246, 236,0.5)"
		colinacolor1 = "#e6b3ff"
		colinacolor2 = "#c4c3ef"
		colinacolor3 = "white"
		coloresferas="#ff80bf"
		break
	case 4:
		colorsky0 = "#bd80ff"
		colorsky1 = "#e5ccff"
		colormontaña = "#e8dcc9"
		colormontaña2 = "#b8bca9"
		grassColor = 'white';
		grassColor2 = '#728b5b';
		colorluna = "#ffe5cc"
		colorhojas1 = "#88906f"
		colorhojas2 = "rgba(255, 255, 255,0.6)"
		hojas1 = "rgba(136, 144, 111,0.5)"
		hojas2 = "rgba(255, 255, 255,0.5)"
		colinacolor1 = "#ccbdab"
		colinacolor2 = "#acb09b"
		colinacolor3 = "#ced3c5"
	coloresferas="#9933ff"
		break
	case 5:
		colorsky1 = "#c6d9eb"
		colormontaña = "white"
		colormontaña2 = "#ffe6cc"
		colorsky0 = "#8eb3d7"
		grassColor = 'white';
		grassColor2 = '#aabd99';
		colorluna = "#ffcccc"
		colorhojas1 = "rgba(64, 128, 191,0.6)"
		colorhojas2 = "rgba(255, 255, 255,0.6)"
		hojas1 = "rgba(102, 153, 204,0.5)"
		hojas2 = "rgba(255, 255, 255,0.5)"
		colinacolor1 = "#ffe6cc"
		colinacolor2 = "white"
		colinacolor3 = "#ffcce6"
	coloresferas="#ff6666"
		break
	case 6:
		colorsky0 = "#80e5ff"
		colorsky1 = "#b3f0ff"
		colormontaña = "#ede4c5"
		colormontaña2 = "white"
		grassColor = '#85adad'
		grassColor2 = '#d9cabf'
		colorluna = "#ffb3d9"
		colorhojas1 = "rgba(120, 84, 99,0.5)"
		colorhojas2 = "rgba(213, 195, 202,0.5)"
		hojas1 = "rgba(120, 84, 99,0.5)"
		hojas2 = "rgba(213, 195, 202,0.5)"
		colinacolor1 = colormontaña2
		colinacolor2 = "#ede4c5"
		colinacolor3 = "#d7cac1"
	coloresferas="#ff6699"
		break
	case 7:
		colorsky0 = "#66b3ff"
		colorsky1 = "#ffb3ff"
		colormontaña = "white"
		colormontaña2 = "#c2c2d6"
		grassColor = 'white'
		grassColor2 = '#bea38e'
		colorluna = "#ffccff"
		colorhojas1 = "rgb(153, 0, 153)"
		colorhojas2 = "rgba(255, 221, 204,0.5)"
		hojas1 = "rgba(113, 65, 104,0.5)"
		hojas2 = "rgba(255, 238, 230,0.5)"
		colinacolor1 = colormontaña2
		colinacolor2 = colormontaña
		colinacolor3 = "#d0aeca"
	coloresferas="#c6538c"
		break
	case 8:
		colorsky0 = "#ffb3b3"
		colorsky1 = "#a6c5d9"
		colormontaña = "#fff2e6"
		colormontaña2 = "#c2c2d6"
		grassColor = 'white'
		grassColor2 = '#bea38e'
		colorluna = "#ffb3d9"
		colorhojas1 = "rgba(255, 102, 179,0.5)"
		colorhojas2 = "rgba(255, 221, 204,0.5)"
		hojas1 = "rgba(255, 128, 191,0.5)"
		hojas2 = "rgba(255, 221, 204,0.5)"
		colinacolor1 = colormontaña2
		colinacolor2 = colormontaña
		colinacolor3 = "white"
	coloresferas="#ff4da6"
		break
	case 9:
		colorsky0 = "#79a6d2"//
		colorsky1 = "#9fbfdf"
		colormontaña = "#ffd1b3"
		colormontaña2 = "#c6d9ec"
		grassColor = 'white'
		grassColor2 = '#ffe6cc'
		colorluna = "#ffb3e6"
		colorhojas1 = "rgba(255, 133, 51,0.6)"
		colorhojas2 = "rgba(255, 221, 204,0.6)"
		hojas1 = "rgba(255, 133, 51,0.3)"
		hojas2 = "rgba(255, 255, 255,0.5)"
		colinacolor1 = colormontaña2
		colinacolor2 = colormontaña
		colinacolor3 = "white"
		coloresferas="#ff4dff"
		break
	case 10:
		colorsky0 = "#dda1dd"//
		colorsky1 = "#b3cce6"
		colormontaña = "#c9beb6"
		colormontaña2 = "#f2f2f2"
		grassColor = 'white'
		grassColor2 = '#a99189'
		colorluna = "#ffcce6"
		colorhojas1 = "rgba(119, 51, 255,0.5)"
		colorhojas2 = "rgba(255, 221, 204,0.5)"
	 	hojas1="rgb(164, 119, 212)"
		hojas2="rgba(255, 221, 204,0.5)"
		colortronco4 = "#3d3129"
		colinacolor1 = "#e4d3f8"
		colinacolor2 = "#bcada9"
		colinacolor3 = "white"
		coloresferas="#9966ff"
		break
	case 11:
		colinacolor1 = "#ead9c8"
		colinacolor2 = "#c6c3ef"
		colinacolor3 = "white"
		colorsky0 = "#8080ff"//
		colorsky1 = "#e698ac"
		colormontaña = "#f2e6d9"
		colormontaña2 = "#c6c3ef"
		grassColor = 'white'
		grassColor2 = "#998089"
		colorluna = "#ffb3d9"
		colorhojas1 = "#79a6d2"
		colorhojas2 = "rgba(255, 255, 255,0.5)"
		hojas1="rgba(127, 102, 108,0.5)"
		hojas2="rgba(255, 255, 255,0.5)"
		coloresferas="#9966ff"
		break
	case 12:
		colorsky0 = "#79a4d2"
		colorsky1 = "#dda1dd"
		colormontaña = "#a9acbc"
		colormontaña2 = "#dcdcbc"
		grassColor = 'white'
		grassColor2 = '#98a180'
		colorluna = "#ffcce6"
		colorhojas1 = "rgba(255, 153, 206,0.6)"
		colorhojas2 = "rgba(255, 243, 230,0.6)"
		colinacolor1 = "#dcdcbc"
		colinacolor2 = "#b8bac7"
		colinacolor3 = "#c4beba"
		coloresferas="#ff4d4d"
		hojas1 = "rgba(255, 153, 206,0.5)"
		hojas2 = "rgba(255, 243, 230,0.5)"
		break
}

var colormar
switch (colores) {
	case 1:
		colormar = "#715841"
		colorsombra = "#c7bcb8"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a6938c"
		colortecho = "#bea78e"
		colorpared = "#ecd8c6"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#90786f"
		colorchimenea = "gray"
		colormitad0 = "#e7d5c3"
		colormitad1 = "#f8f2ed"
		montañacolor = colorpuerta
		colortree1="white"
		colortree2="#9966ff"
		break
	case 2:
		colortree1="#0099cc"
		colortree2="white"
		colormar = "#715841"
		colorsombra = "#bcaea9"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a19191"
		colortecho = "#a19191"
		colorpared = "#fff5e6"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#b9acac"
		colorchimenea = "gray"
		colormitad0 = "#e6cbb3"
		colormitad1 = "#f2ead9"
		montañacolor = colorpuerta
		break
	case 3:
		colortree1="white"
		colortree2="#7094db"
		colormar = "#8b735e"
		colorsombra = "#bcaea9"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#b0a29b"
		colortecho = "#b3b3ff"
		colorpared = "#f9efe9"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#a5958d"
		colorchimenea = "gray"
		colormitad0 = "#bcada9"
		colormitad1 = "#ede5de"
		montañacolor = colorpuerta
		break
	case 4:
		colortree1="#ffffcc"
		colortree2="white"
		colormar = "#715841"
		colorsombra = "#bcada9"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a7938b"
		colortecho = "#c1b2a4"
		colorpared = "#e3d9c6"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#9c857c"
		colorchimenea = "gray"
		colormitad0 = "#bcaea9"
		colormitad1 = "#ece5df"
		montañacolor = colorpuerta
		break
	case 5:
		colortree1="#ffaa80"
		colortree2="white"
		colormar = "#715841"
		colorsombra = "#cbbeb3"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#b7a695"
		colortecho = "white"
		colorpared = "#ebd9c6"
		colorventanaabajo = "#ffd699"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#ac9986"
		colorchimenea = "#b7a695"
		colormitad0 = "#ebd9c6"
		colormitad1 = "#f2e6d9"
		montañacolor = colorpuerta
		break
	case 6:
		colortree1="#ff66cc"
		colortree2="white"
		colormar = "#8b735e"
		colorsombra = "#c8bbb6"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a48e96"
		colortecho = "#a48e96"
		colorpared = "#f2e6d9"
		colorventanaabajo = "#ffd699"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#998089"
		colorchimenea = "gray"
		colormitad0 = "#ece6d1"
		colormitad1 = "#f6f2ef"
		montañacolor = colorpuerta
		break
	case 7:
		colortree1="#ff66b3"
		colortree2="white"
		colormar = "#8b735e"
		colorsombra = "#c8bbb6"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a48e96"
		colortecho = "#a48e96"
		colorpared = "#f8ece0"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#998089"
		colorchimenea = "gray"
		colormitad0 = "#ebd9c6"
		colormitad1 = "#f6f2ef"
		montañacolor = colorpuerta
		break
	case 8:
		colortree1="#8080ff"
		colortree2="#d24dff"
		colormar = "#8b735e"
		colorsombra = "#d5c9c3"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#f8dad3"
		colortecho = "#f8dad3"
		colorpared = "white"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#f5c7bd"
		colorchimenea = "gray"
		colormitad0 = "#ebd9c6"
		colormitad1 = "#f6f2ef"
		montañacolor = "#91786e"
		break
	case 9:
		colortree1="#0099cc"
		colortree2="white"
		colormar = "#8b735e"
		colorsombra = "#c8bbb6"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#b09f9b"
		colortecho = "#b9cddf"
		colorpared = "white"
		colorventanaabajo = "#ffd699"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#a5918d"
		colorchimenea = "gray"
		colormitad0 = "#c7bbb8"
		colormitad1 = "#f6f2ef"
		montañacolor = colorpuerta
		break
	case 10:
		colortree1="white"
		colortree2="white"
		colormar = "#8b735e"
		colorsombra = "#c8bbb6"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#b09f9b"
		colortecho = "#d8c5ec"
		colorpared = "#fff5e6"
		colorventanaabajo = "#ffe0b3"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#a5918d"
		colorchimenea = "gray"
		colormitad0 = "#c7bbb8"
		colormitad1 = "#f6f2ef"
		montañacolor = colorpuerta
		break
	case 11:
		colortree1="white"
		colortree2="white"
		colormar = "#89715d"
		colorsombra = "#c8bbb6"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#a48e96"
		colortecho = "#998089 "
		colorpared = "#e3d9ce"
		colorventanaabajo = "#ffeb99"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#8e717c"
		colorchimenea = "gray"
		colormitad0 = "#bcada9"
		colormitad1 = "#d5cbc3"
		montañacolor = colorpuerta
		break
	case 12:
		colortree1="#caca9b"
		colortree2="white"
		colormar = "#8b735e"
		colorsombra = "#c4c0ba"
		lineasdelacasa = "#2f251e"
		colorpuerta = "#ada59f"
		colortecho = "#ada59f"
		colorpared = "#eeeedd"
		colorventanaabajo = "#ffe6b3"
		colorvigacostado = colorpuerta
		colorbordepuerta = "#958b83"
		colorchimenea = "gray"
		colormitad0 = "#bcada9"
		colormitad1 = "#ede5de"
		montañacolor = "#8d6f58"
		break
}

$fx.features({
	"Color Palette": "" + colores,
	"House":"" + tiposdecasa,
	"Canvas": lienzo,
	"Hills": "Type" + " " + tiposdecolinas,
	"Bird":"Type" + " "+ aves

})

console.log($fx.getFeatures())
var sombramontaña = colorluna
var colorladrillo=colorpuerta
var colortronco4 = "#3d3129"
var colortronco3 = "#4d3d33"
var colortronco2 = "#4d3d33"


var ochenta = widthfinal / 31.25
var cincuenta = widthfinal / 50
var cien = widthfinal / 25
var cientocin = widthfinal / 16.66
var docien = widthfinal / 12.5

var quiñientos = widthfinal / 5
var seiscien = widthfinal / 4.16
var setecien = widthfinal / 3.125
var trecien = widthfinal / 8
var cuatrocien = widthfinal / 6.25
var minxtree2=widthfinal-cien
var minluna = width - cuatrocien

var xluna = Math.floor(($fx.rand() * (minluna - cuatrocien)) + cuatrocien)
var yluna = Math.floor(($fx.rand() * (1800 - 1600)) + 1600)
var lunasize =250
function luna() {

	ctx.beginPath()
	ctx.fillStyle = colorluna
	ctx.arc(xluna, yluna, lunasize, 0, 2 * Math.PI)
	ctx.fill()
}
////// CARACTERISTICAS DE MONTAÑA
var alturagradiente
var minmontaña
var maxmontaña
var sizecasa1
var sizecasa2
var sizecasa3
var sizecasa4
var sizecasa5

switch (lienzo) {
	case 1:
		alturagradiente = 2000
		maxmontaña = 1850
		minmontaña = 1700
		break
	case 2:
		alturagradiente = 2000
		maxmontaña = 1800
		minmontaña = 1600
		break
}
// DEFINIR TAMAÑOS DE CASA Y ALTURA EJE Y
var alturacasa1
var alturacasa2
var alturacasa3
var alturacasa4
var alturacasa5
switch (lienzo) {
	case 1:
		sizecasa1 = 200
		sizecasa2 = 210
		sizecasa3 = 110
		sizecasa4 = 200
		sizecasa5 = 160

		alturacasa1 = height -350
		alturacasa2 = height - 280
		alturacasa3 = height - 390
		alturacasa4 = height - 350
		alturacasa5 = height - 350
		break
	case 2:
		sizecasa1 = 220
		sizecasa2 = 218
		sizecasa3 = 120
		sizecasa4 = 220
		sizecasa5 = 180

		alturacasa1 = height -355
		alturacasa2 = height - 300
		alturacasa3 = height - 400
		alturacasa4 = height - 380
		alturacasa5 = height - 400
		break
}

//DEFINIR POSICION DE LA CASA
if(lienzo==1){
	switch (variatoncasa) {
		case 1:
		xcasa = 1200
		xtree4=600  
	break
		case 2:
		xcasa = 700
		xtree4=1900 
	break
		case 3:
		xcasa = docien
		xtree4=1500 
		break
	}
}
if(lienzo==2){
	switch (variatoncasa) {
		case 1:
		xcasa = 1600  
		xtree4=700
	break
		case 2:
		xcasa = 900
		xtree4=600
	break
		case 3:
		xcasa = 300
		xtree4=2000
		break
	}
}


  // Dibuja el mensaje de "Cargando..."
 
var grd = ctx.createLinearGradient(0, 0, 0, height);
grd.addColorStop(0, colorsky0);
grd.addColorStop(1, colorsky1);

var grd2 = ctx.createLinearGradient(0, alturagradiente, 0, height);
grd2.addColorStop(0, colormitad1);
grd2.addColorStop(1, colormitad0);

ctx.fillStyle = grd
ctx.fillRect(0, 0, width, height)
luna()
drawnoisesky()

////////// TIPOS DE COLINAS
var altura10 = heightfinal / 230
var altura20 = heightfinal / 115
var altura50 = heightfinal / 46
var altura100 = heightfinal / 23
var altura200 = heightfinal / 11.25
var altura300 = heightfinal / 7.66
var altura400 = heightfinal / 5.75
var altura500 = heightfinal / 4.6

/// montañas
function montaña1() {
	// Configuración de la montaña

	var mountainEndY = height;

	// Dibujar la montaña
	ctx.beginPath();
	ctx.moveTo(0, iniciomontaña);
	ctx.quadraticCurveTo(xm, ym, width, finalmontaña);
	ctx.lineTo(width, height);
	ctx.lineTo(0, mountainEndY);
	ctx.closePath();
	ctx.fillStyle = colinacolor1;
	ctx.fill();
}
function montaña2() {
	// Configuración de la montaña

	var mountainEndY = height;

	// Dibujar la montaña
	ctx.beginPath();
	ctx.moveTo(0, iniciomontaña2);
	ctx.quadraticCurveTo(xm2, ym2, width, finalmontaña2);
	ctx.lineTo(width, height);
	ctx.lineTo(0, mountainEndY);
	ctx.closePath();
	ctx.fillStyle = colinacolor2;
	ctx.fill();
}
function montaña3() {
	// Configuración de la montaña

	var mountainEndY = height;

	// Dibujar la montaña
	ctx.beginPath();
	ctx.moveTo(0, iniciomontaña3);
	ctx.quadraticCurveTo(xm3, ym3, width, finalmontaña3);
	ctx.lineTo(width, height);
	ctx.lineTo(0, mountainEndY);
	ctx.closePath();
	ctx.fillStyle = colinacolor3;
	ctx.fill();
}

/// DIBUJAR MONTAÑAS
if (lienzo == 1) {

	switch (tiposdecolinas) {
		case 1:
			iniciomontaña = 1900
			finalmontaña = alturagradiente +350
			xm = widthfinal / 2.77
			ym = 1570 //1400 
			iniciomontaña2 = alturagradiente+600
			finalmontaña2 = alturagradiente-100 
			xm2 = width / 2
			ym2 = 1550 //1500 
			montaña1()
			montaña2()
			break
		case 2:
			iniciomontaña = 1950
			finalmontaña = alturagradiente +350
			xm = widthfinal / 2.77
			ym = 1600 //1400 
			iniciomontaña2 = alturagradiente+700
			finalmontaña2 = alturagradiente-100 
			xm2 = width / 2
			ym2 = 1550 //1500 
			iniciomontaña3 = 2000 //1750 
			finalmontaña3 = alturagradiente+100
			xm3 = width / 2
			ym3 = 1500 //1400 
			montaña3()
			montaña1()
			montaña2()
			break
		case 3:
			iniciomontaña = 1850//1800
			finalmontaña = alturagradiente+200
			xm = widthfinal / 3.125 //800
			ym = 1650 //1500 
			iniciomontaña3 = alturagradiente //1700
			finalmontaña3 = alturagradiente//2800
			xm3 = width / 2
			ym3 = 1550 //1600 
			montaña3()
			montaña1()
			break
		case 4:
			drawMountain(0, alturagradiente - altura100, width, altura500, alturagradiente - altura300, colormontaña)
			drawMountain(0, alturagradiente - altura100, width, altura400, alturagradiente - altura100, colormontaña2)
			break
			case 5:
				cordillera()
			break	
		
			iniciomontaña = 2100//1900 
			finalmontaña = alturagradiente - altura100
			xm = widthfinal / 3.125 //800
			ym = 1450//1400 
			iniciomontaña2 = heightfinal / 1.210526315789474 //1900 
			finalmontaña2 = alturagradiente//2300
			xm2 = widthfinal / 2.083// 1200
			ym2 = heightfinal / 1.483870967741935 //1550 
			iniciomontaña3 = 1800 //1700
			finalmontaña3 = alturagradiente + altura100//2800
			xm3 = width / 2
			ym3 = 1500 //1500 
			montaña1()
			montaña3()
			montaña2()

			break
	
	}
}
if (lienzo == 2) {

	switch (tiposdecolinas) {
		case 1:
			iniciomontaña = 1900
			finalmontaña = alturagradiente +300
			xm = widthfinal / 2.77
			ym = 1500 //1400 
			iniciomontaña2 = alturagradiente+500
			finalmontaña2 = alturagradiente-100 
			xm2 = width / 2
			ym2 = 1500 //1500 
			montaña1()
			montaña2()
			break
		case 2:
			iniciomontaña = 1900
			finalmontaña = alturagradiente +300
			xm = widthfinal / 2.77
			ym = 1500 //1400 
			iniciomontaña2 = alturagradiente+700
			finalmontaña2 = alturagradiente-100 
			xm2 = width / 2
			ym2 = 1500 //1500 
			iniciomontaña3 = 2000 //1750 
			finalmontaña3 = alturagradiente+100
			xm3 = width / 2
			ym3 = 1450 //1400 
			montaña3()
			montaña1()
			montaña2()
			break
		case 3:
			iniciomontaña = 1800//1800
			finalmontaña = alturagradiente+200
			xm = widthfinal / 3.125 //800
			ym = 1600 //1500 
			iniciomontaña3 = alturagradiente //1700
			finalmontaña3 = alturagradiente//2800
			xm3 = width / 2
			ym3 = 1500 //1600 
			montaña3()
			montaña1()
	
			break
		case 4:
			drawMountain(0, alturagradiente - altura100, width, altura500, alturagradiente - altura300, colormontaña)
			drawMountain(0, alturagradiente - altura100, width, altura400, alturagradiente - altura100, colormontaña2)
			break
		case 5:cordillera()
			break
		
	}
}

ctx.fillStyle = grd2
ctx.fillRect(0, alturagradiente, width, height)

function drawBranch2(startX, startY, length, angle, branchWidth) {
	var endX = startX + length * Math.cos(angle);
	var endY = startY - length * Math.sin(angle);


	ctx.beginPath();
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.strokeStyle = colortronco2
	ctx.lineWidth = 0.5;
	ctx.stroke();

	if (length < 10) {
		var colorsnum = [colorhojas1, colorhojas2]
		var colorfinal = colorsnum[Math.floor($fx.rand() * colorsnum.length)]
			; // Color verde oscuro

		// Función para dibujar una hoja
		function drawLeaf(x, y, isHorizontal) {
			ctx.beginPath();
			ctx.fillStyle = colorfinal;
			ctx.shadowBlur = 0;

			if (isHorizontal) {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 2, y - 2, x - 4, y);
				ctx.quadraticCurveTo(x - 2, y + 2, x, y);
			} else {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 2, y - 2, x, y - 4);
				ctx.quadraticCurveTo(x + 2, y - 2, x, y);
			}

			ctx.closePath();
			ctx.fill();
		}


		// Dibujar hojas en la copa
		for (var i = 0; i < 3; i++) {

			drawLeaf(endX, endY, true);
			drawLeaf(endX, endY, false);
		}
		return;
	}

	var nextBranches = 3
	var angleRange = Math.PI / 6;
	if (length === startX) {
		angleRange = Math.PI / 6;
	}


	for (var i = 0; i < nextBranches; i++) {

		var newLength = length * (0.6 + $fx.rand() * 0.2);
		var newAngle = angle - angleRange / 2 + $fx.rand() * angleRange;
		var newBranchWidth = branchWidth * 0.5;


		drawBranch2(endX, endY, newLength, newAngle, newBranchWidth);
	}


}
function drawBranch3(startX, startY, length, angle, branchWidth) {
	var endX = startX + length * Math.cos(angle);
	var endY = startY - length * Math.sin(angle);


	ctx.beginPath();
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.moveTo(startX, startY);
	ctx.quadraticCurveTo(endX, endY,endX,endY);

	ctx.strokeStyle = colortronco3
	ctx.lineWidth = 0.5;
	ctx.stroke();



	if (length < 10) {
		var colorsnum = [colortree1, colortree2]
		var colorfinal = colorsnum[Math.floor($fx.rand() * colorsnum.length)]
			; // Color verde oscuro

		// Función para dibujar una hoja
		function drawLeaf(x, y, isHorizontal) {
			ctx.beginPath();
			ctx.fillStyle = colorfinal;
			ctx.shadowBlur = 0;

			if (isHorizontal) {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 2, y - 2, x - 2, y);
				ctx.quadraticCurveTo(x - 2, y + 2, x, y);
			} else {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 2, y - 2, x, y - 2);
				ctx.quadraticCurveTo(x + 2, y - 2, x, y);
			}

			ctx.closePath();
			ctx.fill();
		}


		// Dibujar hojas en la copa
		for (var i = 0; i < 5; i++) {

			drawLeaf(endX, endY, true);
			drawLeaf(endX, endY, false);
		}
		return;
	}
	var nextBranches = 3
	var angleRange = Math.PI / 5;
	if (length === startX) {
		angleRange = Math.PI / 5;
	}


	for (var i = 0; i < nextBranches; i++) {

		var newLength = length * (0.6 + $fx.rand() * 0.2);
		var newAngle = angle - angleRange / 2 + $fx.rand() * angleRange;
		var newBranchWidth = branchWidth * 0.5;

		drawBranch3(endX, endY, newLength, newAngle, newBranchWidth);
	}


}
function drawBranch4(startX, startY, length, angle, branchWidth) {
	var endX = startX + length * Math.cos(angle);
	var endY = startY - length * Math.sin(angle);


	ctx.beginPath();
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.strokeStyle = colortronco4
	ctx.lineWidth = 3;
	ctx.stroke();



	if (length < 10) {
		var colorsnum = [hojas1, hojas2]
		var colorfinal = colorsnum[Math.floor($fx.rand() * colorsnum.length)]
			; // Color verde oscuro

		// Función para dibujar una hoja
		function drawLeaf(x, y, isHorizontal) {
			ctx.beginPath();
			ctx.fillStyle = colorfinal;
			ctx.shadowBlur = 0;

			if (isHorizontal) {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 18, y - 18, x - 23, y);
				ctx.quadraticCurveTo(x - 18, y + 18, x, y);
			} else {
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x - 18, y - 18, x, y - 23);
				ctx.quadraticCurveTo(x + 18, y - 18, x, y);
			}

			ctx.closePath();
			ctx.fill();
		}


		// Dibujar hojas en la copa
		for (var i = 0; i < 3; i++) {

			drawLeaf(endX, endY, true);
			drawLeaf(endX, endY, false);
		}
		return;
	}

	var nextBranches = 3
	var angleRange = Math.PI / 3.5;
	if (length === startX) {
		angleRange = Math.PI / 4;
	}


	for (var i = 0; i < nextBranches; i++) {

		var newLength = length * (0.6 + $fx.rand() * 0.2);
		var newAngle = angle - angleRange / 2 + $fx.rand() * angleRange;
		var newBranchWidth = branchWidth * 0.5;


		drawBranch4(endX, endY, newLength, newAngle, newBranchWidth);
	}


}
function casa1(ctx, location, scale) {
	ctx.beginPath();
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.lineWidth = 0.1;
	ctx.strokeStyle = "yellow"
	ctx.shadowBlur = 0
	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa

	ctx.fillStyle = colorpared        //PAREDES
	ctx.lineWidth = 0.012
	ctx.shadowBlur = 0
	ctx.moveTo(+1.05, -0.9)
	ctx.lineTo(+0.7, -0.1);
	ctx.lineTo(+0.7, +0.7);
	ctx.lineTo(+1.45, +0.855);
	ctx.lineTo(+1.45, -0)
	ctx.lineTo(+1.05, -0.9)
	ctx.fill()
	ctx.stroke()

	ctx.beginPath();
	ctx.fillStyle = colorpared;
	ctx.lineCap = "round"
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.02
	ctx.shadowBlur = 0
	ctx.moveTo(+1.46, +0.85);/////////PARED COSTADO
	ctx.lineTo(+3.8, +0.82);
	ctx.lineTo(+3.8, +0.02);
	ctx.lineTo(+1.46, +0.058);
	ctx.lineTo(+1.46, +0.85);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle ="#e0cfb8"     // LINEA ANCHA DEBAJO DE PARED
	ctx.lineWidth = 0.015
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.moveTo(+1.99, 0.846);
	ctx.lineTo(+1.466, 0.855);
	ctx.lineTo(+1.466, 0.792);
	ctx.lineTo(+1.99, 0.786)
	ctx.lineTo(+1.99, 0.846);
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = "#e0cfb8"     // LINEA ANCHA DEBAJO DE PARED
	ctx.lineWidth = 0.012
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.moveTo(+1.44, 0.79);
	ctx.lineTo(0.71, 0.64)
	ctx.lineTo(0.71, 0.7)
	ctx.lineTo(1.44, 0.85)
	ctx.lineTo(+1.44, 0.79);
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = "#e0cfb8"     // LINEA ANCHA DEBAJO DE PARED
	ctx.lineWidth = 0.015
	ctx.shadowBlur = 0
	ctx.moveTo(+2.37, 0.78)
	ctx.lineTo(+3.8, 0.765);
	ctx.lineTo(+3.8, 0.82)
	ctx.lineTo(+2.37, 0.84)
	ctx.lineTo(+2.37, 0.78)
	ctx.stroke()
	ctx.fill()


	ctx.beginPath();
	ctx.lineCap = "round"
	ctx.lineJoin = "round"      //VIGA COSTADO TECHO
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = "#404040"
	ctx.lineWidth = 0.02
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.moveTo(+0.7, -0.02);
	ctx.lineTo(+1.1, -0.83)
	ctx.lineTo(+1.05, -0.89)
	ctx.lineTo(+0.6, -0.02)
	ctx.lineTo(+0.7, -0.02);
	ctx.stroke()
	ctx.fill()


	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colortecho
	ctx.lineWidth = 0.012
	ctx.shadowBlur = 0
	ctx.moveTo(+1.38, +0.05);
	ctx.lineTo(+1.05, -0.9);
	ctx.lineTo(+3.4, -0.9);
	ctx.lineTo(+4, +0.05);
	ctx.lineTo(+1.38, +0.05);
	ctx.fill()
	ctx.stroke();


	ctx.beginPath();
	ctx.lineWidth = 0.011
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorpuerta
	ctx.shadowColor = colorventanaabajo
	ctx.shadowBlur = 0  /////////VENTANA  COSTADO CUADRO GRANDE
	ctx.moveTo(0.9, +0.15)
	ctx.lineTo(0.9, +0.5)
	ctx.lineTo(1.2, +0.56)
	ctx.lineTo(1.2, +0.19)
	ctx.lineTo(0.9, +0.15)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.fillStyle = colorventanaabajo
	ctx.strokeStyle = lineasdelacasa  ///CUADRO POR DENTRO
	ctx.moveTo(0.934, +0.19)
	ctx.lineTo(0.934, +0.475)
	ctx.lineTo(1.165, +0.52)
	ctx.lineTo(1.165, +0.22)
	ctx.lineTo(0.934, +0.19)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.lineCap = "butt"
	ctx.lineWidth = 0.02
	ctx.shadowBlur = 0
	ctx.strokeStyle = "#262626"  /// BORDE COSTADO
	ctx.moveTo(0.942, +0.19)
	ctx.lineTo(0.942, +0.48)
	ctx.stroke()


	ctx.beginPath();
	ctx.lineCap = "butt"
	ctx.lineWidth = 0.015
	ctx.shadowBlur = 0
	ctx.strokeStyle = "#262626"  // LINEA VERTICAL VENTANA
	ctx.moveTo(1.06, +0.2)
	ctx.lineTo(1.06, +0.5)
	ctx.stroke()

	ctx.beginPath();
	ctx.lineCap = "butt"
	ctx.strokeStyle = "#262626"  // LINEA HORIZONTAL VENTANA
	ctx.moveTo(0.93, +0.335)
	ctx.lineTo(1.171, +0.375)
	ctx.stroke()


	ctx.beginPath();

	ctx.beginPath()
	ctx.lineWidth = 0.011
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorladrillo
	ctx.shadowColor = colorventanaabajo
	ctx.moveTo(2.79, +0.19)                  //CUADRO GRANDE VEBNTANA FRENTE
	ctx.lineTo(3.46, +0.19)
	ctx.lineTo(3.46, +0.55)
	ctx.lineTo(2.79, +0.55)
	ctx.lineTo(2.79, +0.19)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.011
	ctx.lineJoin = "round"
	ctx.lineCap = "round"                           //CUADRO POR DENTRO 
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorventanaabajo
	ctx.moveTo(2.825, +0.23)
	ctx.lineTo(3.425, +0.23)
	ctx.lineTo(3.425, +0.52)
	ctx.lineTo(2.825, +0.52)
	ctx.lineTo(2.825, +0.23)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.03
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"                           //BORDE VENTANA
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(3.415, +0.225)
	ctx.lineTo(3.415, +0.522)
	ctx.stroke()


	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"                           //LINEA VERTICAL VENTNA
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(3.12, +0.225)
	ctx.lineTo(3.12, +0.522)
	ctx.stroke()

	ctx.beginPath()                          //LINEA HORIZONTAL VENTNA        
	ctx.moveTo(2.825, +0.38)
	ctx.lineTo(3.41, +0.38)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.011
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2, +0.85)                        //PUERTA CUADRO GRANDE
	ctx.lineTo(2, +0.19)
	ctx.lineTo(2.36, +0.19)
	ctx.lineTo(2.36, +0.85)
	ctx.lineTo(2, +0.85)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.fillStyle = colorpuerta
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.035, +0.843)                        //PUERTA CUADRO POD DENTRO
	ctx.lineTo(2.035, +0.23)
	ctx.lineTo(2.33, +0.23)
	ctx.lineTo(2.33, +0.84)
	ctx.lineTo(2.035, +0.84)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.018
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.325, +0.84)                        //BORDE PUERTA
	ctx.lineTo(2.325, +0.22)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.lineWidth = 0.03
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.04, +0.5)                        //PICAPORTE PUERTA
	ctx.lineTo(2.09, +0.5)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineCap = "round"
	ctx.lineJoin = "butt"
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorchimenea
	ctx.shadowBlur = 0             //CHIMENEAAAA
	ctx.lineWidth = 0.02
	ctx.moveTo(2.8, -0.8)
	ctx.lineTo(2.93, -0.8)
	ctx.lineTo(2.93, -1.3)
	ctx.lineTo(2.8, -1.3)
	ctx.lineTo(2.8, -0.8)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorchimenea
	ctx.strokeStyle = lineasdelacasa
	ctx.shadowBlur = 0             //CHIMENEAAAA
	ctx.lineWidth = 0.02
	ctx.moveTo(2.8, -0.8)
	ctx.lineTo(2.7, -0.9)
	ctx.lineTo(2.7, -1.3)
	ctx.lineTo(2.8, -1.3)
	ctx.lineTo(2.8, -0.8)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.01
	ctx.fillStyle = colorpuerta
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.02, +0.85)                        //ESCALONES
	ctx.lineTo(2.07, +0.89)
	ctx.lineTo(2.4, +0.89)
	ctx.lineTo(2.35, +0.85)
	ctx.lineTo(2.02, +0.85)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.moveTo(2.07, +0.89)
	ctx.lineTo(2.07, +0.92)
	ctx.lineTo(2.4, +0.92)
	ctx.lineTo(2.4, +0.89)
	ctx.lineTo(2.07, +0.89)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.lineWidth = 0.01
	ctx.moveTo(2.02, +0.85)                        //ESCALONES
	ctx.lineTo(2.07, +0.89)
	ctx.lineTo(2.07, +0.92)
	ctx.lineTo(2.02, +0.88)
	ctx.lineTo(2.02, +0.85)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"//lineasdelacasa
	ctx.lineWidth = 0.007
	ctx.moveTo(0.71, +0.3)
	ctx.lineTo(0.8, +0.32)
	ctx.lineTo(0.8, +0.37)
	ctx.lineTo(0.71, +0.35)
	ctx.lineTo(0.71, +0.3)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(0.71, +0.361)
	ctx.lineTo(0.76, +0.373)
	ctx.lineTo(0.76, +0.42)
	ctx.lineTo(0.71, +0.405)
	ctx.lineTo(0.71, +0.361)
	ctx.stroke()
	ctx.fill()


	ctx.beginPath() ////// LADRILLOS
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"
	ctx.lineWidth = 0.007
	ctx.rect(+1.464, 0.2, 0.15, 0.05)
	ctx.rect(+1.624, 0.2, 0.15, 0.05)
	ctx.rect(+1.55, 0.26, 0.15, 0.05)
	//
	ctx.rect(+3.645, 0.7, 0.15, 0.05)
	ctx.rect(+3.485, 0.7, 0.15, 0.05)
	ctx.rect(+3.57, 0.639, 0.15, 0.05)
	ctx.stroke()
	ctx.fill()


	ctx.restore();
}
function casa4(ctx, location, scale) {
	ctx.beginPath();
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.lineWidth = 0.1;
	ctx.strokeStyle = "yellow"
	ctx.shadowBlur = 0

	ctx.beginPath();
	ctx.lineCap = "round"
	ctx.lineJoin = "round"      //VIGA COSTADO TECHO
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = "#404040"
	ctx.lineWidth = 0.02
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.moveTo(+0.44, -0);
	ctx.lineTo(+0.93, -0.99)
	ctx.lineTo(+0.89, -1.09)
	ctx.lineTo(+0.35, -0)
	ctx.lineTo(+0.45, -0);
	ctx.stroke()
	ctx.fill()



	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorpared         //PAREDES
	ctx.lineWidth = 0.015
	ctx.shadowBlur = 0
	ctx.moveTo(+0.94, -0.99)
	ctx.lineTo(+0.45, +0);
	ctx.lineTo(+0.45, +0.75);
	ctx.lineTo(+1.45, +0.82);
	ctx.lineTo(+1.45, -0)
	ctx.lineTo(+0.95, -0.99)
	ctx.fill()
	ctx.stroke()


	ctx.beginPath();
	ctx.fillStyle = colorpared;
	ctx.lineCap = "round"
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.03
	ctx.shadowBlur = 0
	ctx.moveTo(+1.46, +0.81);/////////PARED COSTADO
	ctx.lineTo(+3.8, +0.75);
	ctx.lineTo(+3.8, +0.02);
	ctx.lineTo(+1.46, +0.058);
	ctx.lineTo(+1.46, +0.81);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colortecho
	ctx.lineWidth = 0.03
	ctx.shadowBlur = 0
	ctx.moveTo(+1.37, +0.07);
	ctx.lineTo(+0.9, -1.1);
	ctx.lineTo(+3.4, -1.1);
	ctx.lineTo(+4, +0.03);
	ctx.lineTo(+1.37, +0.07);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath(),
		ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = .011,     //DETALLE TECHO  LINEAS
		ctx.moveTo(1, -0.9),
		ctx.lineTo(1.55, -0.9),
		ctx.moveTo(1.7, -0.9),
		ctx.lineTo(2.4, -0.9),
		ctx.moveTo(3, -0.9),
		ctx.lineTo(3.5, -0.9),
		///////////
		//////////
		ctx.moveTo(1.18, -0.55),
		ctx.lineTo(2, -0.56),
		ctx.moveTo(2.2, -0.56),
		ctx.lineTo(3.2, -0.565),
		ctx.moveTo(3.4, -0.565),
		ctx.lineTo(3.69, -0.568),

		//////////
		ctx.moveTo(1.35, -0.2),
		ctx.lineTo(1.8, -0.204),
		ctx.moveTo(2, -0.204),
		ctx.lineTo(2.4, -0.207),
		ctx.moveTo(2.6, -0.21),
		ctx.lineTo(3.6, -0.22),
		ctx.moveTo(3.8, -0.22),
		ctx.lineTo(3.88, -0.222),
		ctx.stroke()
	///////////////////////////////////
	ctx.beginPath();
	ctx.lineWidth = 0.01
	ctx.fillStyle=colorladrillo
	ctx.strokeStyle = lineasdelacasa        ////// VENTANA ARRIBA DE PUERTA
	ctx.moveTo(0.73, -0.05)
	ctx.lineTo(1.1, -0.03)      //CUADRO POR DENTRO
	ctx.lineTo(1.1, -0.4)
	ctx.lineTo(0.73, -0.42)
	ctx.lineTo(0.73, -0.05)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.lineWidth = 0.01
	ctx.fillStyle = colorventanaabajo
	ctx.strokeStyle = lineasdelacasa        ////// VENTANA ARRIBA DE PUERTA
	ctx.moveTo(0.76, -0.08)
	ctx.lineTo(1.07, -0.06)      //CUADRO POR DENTRO
	ctx.lineTo(1.07, -0.37)
	ctx.lineTo(0.76, -0.39)
	ctx.lineTo(0.76, -0.08)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"
	ctx.lineWidth = 0.02
	ctx.strokeStyle = lineasdelacasa        ////// BORDE
	ctx.moveTo(0.765, -0.08)
	ctx.lineTo(0.765, -0.39)
	ctx.stroke()

	ctx.beginPath();
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"
	ctx.lineWidth = 0.02
	ctx.strokeStyle = lineasdelacasa        ////// LINEA VERTICAL
	ctx.moveTo(0.925, -0.07)
	ctx.lineTo(0.925, -0.385)
	ctx.stroke()

	ctx.beginPath();
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"
	ctx.lineWidth = 0.02
	ctx.strokeStyle = lineasdelacasa        ////// LINEA HORIZONTAL
	ctx.moveTo(0.76, -0.23)
	ctx.lineTo(1.07, -0.21)
	ctx.stroke()
	/////////////////////
	ctx.beginPath();
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.lineWidth = 0.015
	ctx.fillStyle = colorbordepuerta
	ctx.strokeStyle = lineasdelacasa     ////// PUERTA
	ctx.moveTo(0.73, +0.21)                 /////CUADRO GRANDE POR FUERA
	ctx.lineTo(0.73, +0.765)
	ctx.lineTo(1.09, +0.79)
	ctx.lineTo(1.09, +0.23)
	ctx.lineTo(0.73, +0.21)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.lineWidth = 0.015
	ctx.fillStyle = colorpuerta
	ctx.strokeStyle = lineasdelacasa         ////// CUADRO POR DENTRO
	ctx.moveTo(0.76, +0.255)
	ctx.lineTo(0.76, +0.76)
	ctx.lineTo(1.05, +0.78)
	ctx.lineTo(1.05, +0.27)
	ctx.lineTo(0.76, +0.254)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath();
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.lineWidth = 0.025
	ctx.strokeStyle = lineasdelacasa          ////// BORDE PUERTA
	ctx.moveTo(0.772, +0.252)
	ctx.lineTo(0.772, +0.77)
	ctx.stroke()

	ctx.beginPath();
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 0
	ctx.lineWidth = 0.03
	ctx.strokeStyle = lineasdelacasa          ////// PICAPORTE
	ctx.moveTo(0.78, +0.5)
	ctx.lineTo(0.83, +0.5)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.01
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorladrillo
	ctx.shadowColor = colorventanaabajo
	ctx.moveTo(2.25, +0.191)                  //CUADRO GRANDE VEBNTANA FRENTE
	ctx.lineTo(3., +0.18)
	ctx.lineTo(3., +0.55)
	ctx.lineTo(2.25, +0.561)
	ctx.lineTo(2.25, +0.191)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.015
	ctx.lineJoin = "round"
	ctx.lineCap = "round"                           //CUADRO POR DENTRO 
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorventanaabajo
	ctx.moveTo(2.285, +0.225)
	ctx.lineTo(2.965, +0.215)
	ctx.lineTo(2.965, +0.515)
	ctx.lineTo(2.285, +0.525)
	ctx.lineTo(2.285, +0.225)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"                           //BORDE VENTANA
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.955, +0.21)
	ctx.lineTo(2.955, +0.52)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.025
	ctx.lineJoin = "butt"
	ctx.lineCap = "butt"                           //LINEA VERTICAL VENTNA
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(2.62, +0.21)
	ctx.lineTo(2.62, +0.52)
	ctx.stroke()

	ctx.beginPath()                          //LINEA HORIZONTAL VENTNA        
	ctx.moveTo(2.28, +0.38)
	ctx.lineTo(2.96, +0.37)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineCap = "round"
	ctx.lineJoin = "butt"
	ctx.strokeStyle = lineasdelacasa
	ctx.fillStyle = colorchimenea
	ctx.shadowBlur = 0             //CHIMENEAAAA
	ctx.lineWidth = 0.02
	ctx.moveTo(2.8, -0.8)
	ctx.lineTo(2.95, -0.8)
	ctx.lineTo(2.95, -1.3)
	ctx.lineTo(2.8, -1.3)
	ctx.lineTo(2.8, -0.8)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorchimenea
	ctx.strokeStyle = lineasdelacasa
	ctx.shadowBlur = 0             //CHIMENEAAAA
	ctx.lineWidth = 0.02
	ctx.moveTo(2.8, -0.8)
	ctx.lineTo(2.7, -0.9)
	ctx.lineTo(2.7, -1.3)
	ctx.lineTo(2.8, -1.3)
	ctx.lineTo(2.8, -0.8)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.lineWidth = 0.011
	ctx.fillStyle = colorpuerta
	ctx.strokeStyle = lineasdelacasa     ////// ESCALONES
	ctx.moveTo(0.75, +0.77)
	ctx.lineTo(0.62, +0.82)
	ctx.lineTo(0.94, +0.84)
	ctx.lineTo(1.05, +0.79)
	ctx.lineTo(0.75, +0.77)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(0.94, +0.84)
	ctx.lineTo(0.62, +0.82)
	ctx.lineTo(0.62, +0.84)
	ctx.lineTo(0.94, +0.86)
	ctx.lineTo(0.94, +0.84)
	ctx.lineTo(1.05, +0.79)
	ctx.lineTo(1.05, +0.81)
	ctx.lineTo(0.94, +0.86)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.008
	ctx.moveTo(0.94, +0.86)
	ctx.lineTo(0.94, +0.84)
	ctx.stroke()

	///////// LINEAS DEBAJO PARED
	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.01
	ctx.moveTo(0.46, +0.695)
	ctx.lineTo(0.719, +0.713)
	ctx.lineTo(0.719, +0.765)
	ctx.lineTo(0.46, +0.745)
	ctx.lineTo(0.46, +0.695)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.01
	ctx.moveTo(1.099, +0.735)
	ctx.lineTo(1.442, +0.76)
	ctx.lineTo(1.442, +0.815)
	ctx.lineTo(1.099, +0.79)
	ctx.lineTo(1.099, +0.735)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.01
	ctx.moveTo(1.459, +0.76)
	ctx.lineTo(3.8, +0.7)
	ctx.lineTo(3.8, +0.755)
	ctx.lineTo(1.459, +0.813)
	ctx.lineTo(1.459, +0.76)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"//lineasdelacasa
	ctx.lineWidth = 0.007
	ctx.moveTo(1.35, +0.3)
	ctx.lineTo(1.44, +0.305)
	ctx.lineTo(1.44, +0.352)
	ctx.lineTo(1.35, +0.345)
	ctx.lineTo(1.35, +0.3)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(1.3, +0.355)
	ctx.lineTo(1.44, +0.365)
	ctx.lineTo(1.44, +0.415)
	ctx.lineTo(1.3, +0.405)
	ctx.lineTo(1.3, +0.365)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath() ////// LADRILLOS
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"
	ctx.lineWidth = 0.007
	ctx.rect(+1.835, 0.2, 0.15, 0.05)
	ctx.rect(+2, 0.2, 0.15, 0.05)
	ctx.rect(+1.92, 0.265, 0.15, 0.05)
	//
	ctx.rect(+3.38, 0.435, 0.15, 0.05)
	ctx.rect(+3.3, 0.5, 0.15, 0.05)
	ctx.rect(+3.465, 0.5, 0.15, 0.05)
	ctx.stroke()
	ctx.fill()

	ctx.restore();
}
function casa2(ctx, e, a) {
	ctx.beginPath();
	ctx.save();
	ctx.translate(e[0], e[1]);
	ctx.scale(a, a);
	ctx.beginPath();
	ctx.strokeStyle = "#262626";
	ctx.lineJoin = "round";
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "none";
	ctx.fillStyle = colorpared;
	ctx.lineWidth = .013;
	ctx.moveTo(1.02, -.4);
	ctx.lineTo(1.02, .3);
	ctx.lineTo(3.02, .4);
	ctx.lineTo(3.02, -.3);
	ctx.lineTo(1.02, -.4);
	ctx.moveTo(3.02, .4);
	ctx.lineTo(4.2, .3);
	ctx.lineTo(4.2, -.45);
	ctx.lineTo(3.65, -1.2);
	ctx.lineTo(3.02, -.3);
	ctx.fill();

	ctx.stroke();
	ctx.beginPath()
	ctx.lineWidth = 0.01
	ctx.lineJoin = "round"
	ctx.fillStyle=colorladrillo     //VENTANA COSTADO
	ctx.strokeStyle = "#262626"
	ctx.moveTo(1.7, .06)
	ctx.lineTo(1.7, -.3)
	ctx.lineTo(2.4, -.27) ///CUADRO GRANDE POR FUERA
	ctx.lineTo(2.4, .095)
	ctx.lineTo(1.6925, .06)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.fillStyle = colorventanaabajo
	ctx.strokeStyle = "#262626"
	ctx.moveTo(1.75, .03)
	ctx.lineTo(1.75, -.255)   ///CUADRO POR DENTRO
	ctx.lineTo(2.36, -.231)
	ctx.lineTo(2.36, .058)
	ctx.lineTo(1.745, .03)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.025
	ctx.lineJoin = "round"
	ctx.strokeStyle = "#262626"   //LINEA VERTICAL
	ctx.moveTo(2.055, .046)
	ctx.lineTo(2.055, -.245)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.025
	ctx.lineJoin = "round"
	ctx.strokeStyle = "#262626"   //LINEA HORIZONTAL
	ctx.moveTo(1.75, -0.11)
	ctx.lineTo(2.36, -0.081)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.03
	ctx.lineJoin = "round"
	ctx.strokeStyle = "#262626"   //BORDE VENTANA
	ctx.moveTo(1.762, .032)
	ctx.lineTo(1.762, -.256)
	ctx.stroke()

	ctx.beginPath();
	ctx.strokeStyle = "#262626";
	ctx.lineCap = "round";
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "none";
	ctx.lineWidth = .03;
	ctx.fillStyle = "#333333";   //VIGA COSTADO TECHO
	ctx.moveTo(4.18, -.4);
	ctx.lineTo(4.25, -.4);
	ctx.lineTo(3.69, -1.195);
	ctx.lineTo(3.65, -1.15);
	ctx.lineTo(4.18, -0.4);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 0.015
	ctx.strokeStyle = "#262626";
	ctx.lineCap = "round";
	ctx.fillStyle = colortecho;    //TECHO
	ctx.moveTo(3.07, -.3);
	ctx.lineTo(.9, -.4);
	ctx.lineTo(1.6, -1.25);
	ctx.lineTo(3.7, -1.2);
	ctx.lineTo(3.07, -.3);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#e8dbc9"  /// linea debajo de casa
	ctx.lineWidth = 0.015
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+3.025, 0.33);
	ctx.lineTo(+4.194, 0.235);
	ctx.lineTo(+4.194, 0.3);
	ctx.lineTo(+3.025, 0.4);
	ctx.lineTo(+3.025, 0.33);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();
	ctx.lineWidth = .015;
	ctx.fillStyle = colorpuerta;
	ctx.strokeStyle = "#262626";
	ctx.moveTo(3.5, .35);
	ctx.lineTo(3.5, -.3);    //PUERTA PRINCIPAL
	ctx.lineTo(3.81, -.315);
	ctx.lineTo(3.81, .33);
	ctx.lineTo(3.5, .355);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.lineWidth = .011;
	ctx.moveTo(3.52, .35);
	ctx.lineTo(3.52, -.28);    //PUERTA PRINCIPAL
	ctx.lineTo(3.79, -.295);
	ctx.lineTo(3.79, .33);
	ctx.lineTo(3.52, .35);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineCap = "butt"
	ctx.lineWidth = .02;     //BORDE NEGRO PUERTA
	ctx.moveTo(3.78, .33);
	ctx.lineTo(3.78, -.295);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "round"
	ctx.lineWidth = 0.03;      //PICAPORTE
	ctx.moveTo(3.53, +0.01);
	ctx.lineTo(3.55, +0.01);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#262626";
	ctx.shadowColor = "black";
	ctx.fillStyle = colorchimenea;
	ctx.lineWidth = .02;
	ctx.shadowBlur = 0;
	ctx.moveTo(+1.9, -1.5);
	ctx.lineTo(+1.9, -1.17);
	ctx.lineTo(+2, -1.17);
	ctx.lineTo(+2, -1.5);
	ctx.lineTo(+1.9, -1.5);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(+2, -1.17);
	ctx.lineTo(+2.07, -1.25);
	ctx.lineTo(+2.07, -1.5);
	ctx.lineTo(+2, -1.5);
	ctx.lineTo(+2, -1.17);
	ctx.stroke();
	ctx.fill();

	/////// LINEA DEBAJO PARED
	ctx.beginPath();
	ctx.fillStyle = "#e8dbc9"
	ctx.lineWidth = 0.015
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+1.025, 0.23);
	ctx.lineTo(+3.013, 0.33);
	ctx.lineTo(+3.013, 0.4);
	ctx.lineTo(+1.025, 0.3);
	ctx.lineTo(+1.025, 0.23);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();     // ESCALONES
	ctx.fillStyle = colorpuerta
	ctx.lineWidth = 0.015
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+3.8, 0.34);
	ctx.lineTo(+3.52, 0.36);
	ctx.lineTo(+3.65, 0.4);
	ctx.lineTo(+3.91, 0.37);
	ctx.lineTo(+3.8, 0.34);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();     // ESCALONES
	ctx.fillStyle = colorpuerta
	ctx.lineWidth = 0.011
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+3.5, 0.36);
	ctx.lineTo(+3.5, 0.375);
	ctx.lineTo(+3.65, 0.42);
	ctx.lineTo(+3.91, 0.388);
	ctx.lineTo(+3.91, 0.37);
	ctx.lineTo(+3.65, 0.4);
	ctx.lineTo(+3.5, 0.36);
	ctx.stroke();
	ctx.fill()

	ctx.beginPath();
	ctx.fillStyle = colorbordepuerta
	ctx.lineWidth = 0.007
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+3.65, 0.42);
	ctx.lineTo(+3.65, 0.4);
	ctx.stroke()

	ctx.beginPath()
	ctx.fillStyle = "#e0cfb8" ///////LADRILLOS
	ctx.strokeStyle = "gray"//lineasdelacasa
	ctx.lineWidth = 0.007
	ctx.moveTo(1.03, -0.1)
	ctx.lineTo(1.14, -0.095)
	ctx.lineTo(1.14, -0.05)
	ctx.lineTo(1.03, -0.055)
	ctx.lineTo(1.03, -0.1)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(1.15, -0.095)
	ctx.lineTo(1.26, -0.09)
	ctx.lineTo(1.26, -0.043)
	ctx.lineTo(1.15, -0.048)
	ctx.lineTo(1.15, -0.095)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(1.09, -0.04)
	ctx.lineTo(1.2, -0.035)
	ctx.lineTo(1.2, +0.01)
	ctx.lineTo(1.09, 0.005)
	ctx.lineTo(1.09, -0.04)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(3.03, -0.25)
	ctx.lineTo(3.14, -0.26)
	ctx.lineTo(3.14, -0.21)
	ctx.lineTo(3.03, -0.2)
	ctx.lineTo(3.03, -0.25)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(3.03, -0.189)
	ctx.lineTo(3.1, -0.195)
	ctx.lineTo(3.1, -0.146)
	ctx.lineTo(3.03, -0.14)
	ctx.lineTo(3.03, -0.19)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(4.1, 0.05)
	ctx.lineTo(4.19, 0.04)
	ctx.lineTo(4.19, 0.085)
	ctx.lineTo(4.1, 0.095)
	ctx.lineTo(4.1, 0.05)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(4.14, 0.035)
	ctx.lineTo(4.19, 0.03)
	ctx.lineTo(4.19, -0.01)
	ctx.lineTo(4.14, -0.006)
	ctx.lineTo(4.14, 0.035)
	ctx.stroke()
	ctx.fill()
	ctx.restore();
}
function casa5(ctx, e, a) {
	ctx.beginPath(),
		ctx.save(),
		ctx.translate(e[0], e[1]),
		ctx.scale(a, a),
		ctx.beginPath(),
		ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.strokeStyle = "#262626",
		ctx.shadowOffsetX = 0,
		ctx.shadowOffsetY = 0,
		ctx.shadowBlur = 0,
		ctx.fillStyle = colorpared,
		ctx.lineWidth = .02,
		ctx.moveTo(1.1, 1),
		ctx.lineTo(4.9, 1),  /// PARED
		ctx.lineTo(4.9, -0.3),
		ctx.lineTo(1.1, -0.3),
		ctx.lineTo(1.1, 1),
		ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineCap = "butt"
	ctx.lineJoin = "butt"
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = lineasdelacasa,
		ctx.lineWidth = 0.01,
		ctx.rect(1.1, 0.9, 1.6, 0.1),
		ctx.rect(3.3, 0.9, 1.6, 0.1),
		ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.strokeStyle = "#262626",
		ctx.lineWidth = .02,
		ctx.fillStyle = colortecho
	ctx.lineCap = "round"
	ctx.lineJoin = "round" //TECHOO
	ctx.moveTo(1, -0.3),
		ctx.lineTo(1.5, -1.2),
		ctx.lineTo(4.5, -1.2),
		ctx.lineTo(5, -0.3),
		ctx.lineTo(1, -0.3),
		ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = "gray"
	ctx.lineCap = "round"
	ctx.lineJoin = "round" //CHIMENEA
	ctx.moveTo(1.8, -1.5)
	ctx.lineTo(1.6, -1.5)
	ctx.lineTo(1.6, -1),
		ctx.lineTo(1.8, -1)
	ctx.lineTo(1.8, -1.5)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta        /// PUERTAA
	ctx.moveTo(2.7, 1)
	ctx.lineTo(2.7, -0)
	ctx.lineTo(3.3, -0)
	ctx.lineTo(3.3, 1)
	ctx.lineTo(2.7, 1)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorpuerta        /// cuadro dentro
	ctx.moveTo(2.75, 1)
	ctx.lineTo(2.75, 0.05)
	ctx.lineTo(3.25, 0.05)
	ctx.lineTo(3.25, 1)
	ctx.lineTo(2.75, 1)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.lineWidth = 0.02
	ctx.moveTo(2.85, 0.3)
	ctx.lineTo(2.85, 0.6)
	ctx.lineTo(3.15, 0.6)
	ctx.lineTo(3.15, 0.3)
	ctx.quadraticCurveTo(3, 0.05, 2.85, 0.3)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = colorpuerta
	ctx.lineWidth = 0.02
	ctx.moveTo(2.88, 0.3)
	ctx.lineTo(2.88, 0.57)
	ctx.lineTo(3.12, 0.57)
	ctx.lineTo(3.12, 0.3)
	ctx.quadraticCurveTo(3, 0.11, 2.88, 0.3)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.03
	ctx.moveTo(2.76, 0.55)
	ctx.lineTo(2.81, 0.55)
	ctx.stroke()

	ctx.beginPath()
	ctx.strokeStyle = lineasdelacasa
	ctx.lineWidth = 0.01
	ctx.rect(2.85, 0.66, 0.12, 0.3)
	ctx.rect(2.87, 0.68, 0.08, 0.26)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.01
	ctx.rect(3.03, 0.66, 0.12, 0.3)
	ctx.rect(3.05, 0.68, 0.08, 0.26)
	ctx.stroke()
	/// VENTANAS 
	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.lineWidth = 0.02
	ctx.rect(1.4, 0, 1, 0.5)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.fillStyle = colorventanaabajo   ///VENTANA IZQUIERDA
	ctx.rect(1.45, 0.05, 0.9, 0.4)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.fillStyle = colorbordepuerta
	ctx.rect(3.6, 0, 1, 0.5)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.02
	ctx.fillStyle = colorventanaabajo    //// VENTANA DERECHA
	ctx.rect(3.65, 0.05, 0.9, 0.4)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.fillStyle = lineasdelacasa          // LINEA VERTICAL
	ctx.rect(1.888, 0.05, 0.02, 0.4)
	ctx.rect(4.09, 0.05, 0.02, 0.4)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()           // LINEA HORIZONTAL
	ctx.rect(1.45, 0.24, 0.9, 0.02)
	ctx.rect(3.65, 0.24, 0.9, 0.02)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.01
	ctx.fillStyle = colorpuerta     ///DETALLES PISO/ESCALON
	ctx.lineTo(2.7, 1)
	ctx.lineTo(2.65, 1.1)
	ctx.lineTo(3.35, 1.1)
	ctx.lineTo(3.3, 1)
	ctx.lineTo(2.7, 1)

	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorbordepuerta
	ctx.moveTo(2.65, 1.1)
	ctx.lineTo(2.65, 1.15)
	ctx.lineTo(3.35, 1.15)
	ctx.lineTo(3.35, 1.1)
	ctx.lineTo(2.65, 1.1)
	ctx.stroke()
	ctx.fill()


	///LADRILLOS 
	ctx.beginPath()
	ctx.fillStyle="#e0cfb8"
	ctx.rect(1.11,-0.25,0.18,0.07)
	ctx.rect(1.11,-0.162,0.11,0.07)

	ctx.rect(4,0.7,0.18,0.07)
	ctx.rect(4.195,0.7,0.18,0.07)
	ctx.rect(4.1,0.785,0.18,0.07)
	ctx.stroke()
	ctx.fill()

	ctx.restore()
}
function casa3(ctx, location2, scale2) {
	ctx.beginPath(),
		ctx.save(),
		ctx.translate(location2[0], location2[1]),
		ctx.scale(scale2, scale2),
		ctx.beginPath(),
		ctx.strokeStyle = "#262626",
		ctx.lineJoin = "round",
		ctx.shadowOffsetX = 0,
		ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "none";
	ctx.fillStyle = colorpared;
	ctx.lineWidth = .07;
	ctx.moveTo(6.7, .1);
	ctx.lineTo(7.52, -1.17);
	ctx.lineTo(8, .1);
	ctx.lineTo(8, 1.65);
	ctx.lineTo(6.7, 1.7);
	ctx.lineTo(6.7, .1);
	ctx.moveTo(6.7, 1.7);
	ctx.lineTo(1.7, 1.7);
	ctx.lineTo(1.7, .1);
	ctx.lineTo(3.2, .1);
	ctx.lineTo(3.4, -.12);
	ctx.lineTo(5.1, -.12);
	ctx.lineTo(4.85, .1);
	ctx.lineTo(6.7, .1);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.fillStyle = colorvigacostado;   //VIGA COSTADO
	ctx.lineWidth = .03;
	ctx.moveTo(8.15, .13);
	ctx.lineTo(7.61, -1.3);
	ctx.lineTo(7.5, -1.3);
	ctx.moveTo(8.15, .13);
	ctx.lineTo(8, .13);
	ctx.lineTo(7.5, -1.3);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();    /// MARCO VENTANA REDONDA
	ctx.lineWidth = .02;
	ctx.fillStyle=colorladrillo
	ctx.strokeStyle = "#262626";
	ctx.rect(7.16, -.64, .33, .4);
	ctx.stroke();
	ctx.fill()
	ctx.shadowOffsetY = 0;

	ctx.beginPath();
	ctx.strokeStyle = "#262626";
	ctx.shadowColor = "black";
	ctx.lineJoin = "round";               //TECHO 
	ctx.fillStyle = colortecho;
	ctx.lineWidth = 0.05;
	ctx.shadowBlur = 0;
	ctx.moveTo(1.45, .1);
	ctx.lineTo(2.6, -1.3);
	ctx.lineTo(7.6, -1.3);
	ctx.lineTo(6.7, .1);
	ctx.lineTo(4.85, .1);
	ctx.lineTo(5.1, -.03);
	ctx.lineTo(3.5, -.03);
	ctx.lineTo(3.2, .1);
	ctx.lineTo(1.45, .1);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = .015;     //DETALLE TECHO  LINEAS
	ctx.moveTo(2.5, -1.2);
	ctx.lineTo(2.7, -1.2);
	ctx.moveTo(2.85, -1.2);
	ctx.lineTo(3.05, -1.2);
	ctx.moveTo(3.2, -1.2);
	ctx.lineTo(3.5, -1.2);
	ctx.moveTo(3.7, -1.2);
	ctx.lineTo(3.8, -1.2);
	ctx.moveTo(4, -1.2);
	ctx.lineTo(4.2, -1.2);
	ctx.moveTo(4.4, -1.2);
	ctx.lineTo(4.5, -1.2);
	ctx.moveTo(4.7, -1.2);
	ctx.lineTo(5, -1.2);
	ctx.moveTo(5.2, -1.2);
	ctx.lineTo(5.4, -1.2);
	ctx.moveTo(5.6, -1.2);
	ctx.lineTo(5.7, -1.2);
	ctx.moveTo(5.9, -1.2);
	ctx.lineTo(6, -1.2);
	ctx.moveTo(6.2, -1.2);
	ctx.lineTo(6.4, -1.2);
	ctx.moveTo(6.6, -1.2);
	ctx.lineTo(6.8, -1.2);
	ctx.moveTo(7, -1.2);
	ctx.lineTo(7.2, -1.2);
	ctx.moveTo(7.4, -1.2);
	ctx.lineTo(7.55, -1.2);
	ctx.moveTo(2.35, -1);
	ctx.lineTo(2.5, -1);
	ctx.moveTo(2.7, -1);
	ctx.lineTo(2.9, -1);
	ctx.moveTo(3, -1);
	ctx.lineTo(3.4, -1);
	ctx.moveTo(3.6, -1);
	ctx.lineTo(3.8, -1);
	ctx.moveTo(4, -1);
	ctx.lineTo(4.1, -1);
	ctx.moveTo(4.3, -1);
	ctx.lineTo(4.6, -1);
	ctx.moveTo(4.8, -1);
	ctx.lineTo(4.9, -1);
	ctx.moveTo(5.1, -1);
	ctx.lineTo(5.3, -1);
	ctx.moveTo(5.5, -1);
	ctx.lineTo(5.8, -1);
	ctx.moveTo(6, -1);
	ctx.lineTo(6.2, -1);
	ctx.moveTo(6.4, -1);
	ctx.lineTo(6.5, -1);
	ctx.moveTo(6.7, -1);
	ctx.lineTo(7, -1);
	ctx.moveTo(7.2, -1);
	ctx.lineTo(7.4, -1);
	ctx.moveTo(2.18, -.8);
	ctx.lineTo(2.3, -.8);
	ctx.moveTo(2.5, -.8);
	ctx.lineTo(2.8, -.8);
	ctx.moveTo(3, -.8);
	ctx.lineTo(3.2, -.8);
	ctx.moveTo(3.4, -.8);
	ctx.lineTo(3.6, -.8);
	ctx.moveTo(3.8, -.8);
	ctx.lineTo(4, -.8);
	ctx.moveTo(4.3, -.8);
	ctx.lineTo(4.6, -.8);
	ctx.moveTo(4.8, -.8);
	ctx.lineTo(5.1, -.8);
	ctx.moveTo(5.3, -.8);
	ctx.lineTo(5.5, -.8);
	ctx.moveTo(5.7, -.8);
	ctx.lineTo(5.9, -.8);
	ctx.moveTo(6.1, -.8);
	ctx.lineTo(6.5, -.8);
	ctx.moveTo(6.7, -.8);
	ctx.lineTo(7, -.8);
	ctx.moveTo(7.2, -.8);
	ctx.lineTo(7.3, -.8);
	ctx.moveTo(2, -.6);
	ctx.lineTo(2.3, -.6);
	ctx.moveTo(2.5, -.6);
	ctx.lineTo(2.8, -.6);
	ctx.moveTo(3, -.6);
	ctx.lineTo(3.2, -.6);
	ctx.moveTo(3.4, -.6);
	ctx.lineTo(3.5, -.6);
	ctx.moveTo(3.7, -.6);
	ctx.lineTo(3.8, -.6);
	ctx.moveTo(4, -.6);
	ctx.lineTo(4.2, -.6);
	ctx.moveTo(4.4, -.6);
	ctx.lineTo(4.7, -.6);
	ctx.moveTo(4.9, -.6);
	ctx.lineTo(5.2, -.6);
	ctx.moveTo(5.4, -.6);
	ctx.lineTo(5.7, -.6);
	ctx.moveTo(5.9, -.6);
	ctx.lineTo(6, -.6);
	ctx.moveTo(6.2, -.6);
	ctx.lineTo(6.3, -.6);
	ctx.moveTo(6.5, -.6);
	ctx.lineTo(6.8, -.6);
	ctx.moveTo(7, -.6);
	ctx.lineTo(7.15, -.6);
	ctx.moveTo(1.85, -.4);
	ctx.lineTo(2, -.4);
	ctx.moveTo(2.2, -.4);
	ctx.lineTo(2.3, -.4);
	ctx.moveTo(2.5, -.4);
	ctx.lineTo(2.6, -.4);
	ctx.moveTo(2.8, -.4);
	ctx.lineTo(3, -.4);
	ctx.moveTo(3.2, -.4);
	ctx.lineTo(3.3, -.4);
	ctx.moveTo(3.5, -.4);
	ctx.lineTo(3.7, -.4);
	ctx.moveTo(3.9, -.4);
	ctx.lineTo(4, -.4);
	ctx.moveTo(4.2, -.4);
	ctx.lineTo(4.4, -.4);
	ctx.moveTo(4.6, -.4);
	ctx.lineTo(4.8, -.4);
	ctx.moveTo(5, -.4);
	ctx.lineTo(5.2, -.4);
	ctx.moveTo(5.4, -.4);
	ctx.lineTo(5.5, -.4);
	ctx.moveTo(5.7, -.4);
	ctx.lineTo(6, -.4);
	ctx.moveTo(6.2, -.4);
	ctx.lineTo(6.4, -.4);
	ctx.moveTo(6.6, -.4);
	ctx.lineTo(6.7, -.4);
	ctx.moveTo(6.9, -.4);
	ctx.lineTo(7.03, -.4);
	ctx.moveTo(1.7, -.2);
	ctx.lineTo(2, -.2);
	ctx.moveTo(2.2, -.2);
	ctx.lineTo(2.4, -.2);
	ctx.moveTo(2.5, -.2);
	ctx.lineTo(2.7, -.2);
	ctx.moveTo(2.9, -.2);
	ctx.lineTo(3, -.2);
	ctx.moveTo(3.2, -.2);
	ctx.lineTo(3.5, -.2);
	ctx.moveTo(3.7, -.2);
	ctx.lineTo(3.8, -.2);
	ctx.moveTo(4, -.2);
	ctx.lineTo(4.2, -.2);
	ctx.moveTo(4.4, -.2);
	ctx.lineTo(4.6, -.2);
	ctx.moveTo(4.8, -.2);
	ctx.lineTo(5, -.2);
	ctx.moveTo(5.2, -.2);
	ctx.lineTo(5.4, -.2);
	ctx.moveTo(5.6, -.2);
	ctx.lineTo(5.7, -.2);
	ctx.moveTo(5.9, -.2);
	ctx.lineTo(6.1, -.2);
	ctx.moveTo(6.3, -.2);
	ctx.lineTo(6.5, -.2);
	ctx.moveTo(6.7, -.2);
	ctx.lineTo(6.9, -.2);
	ctx.moveTo(1.53, -0);
	ctx.lineTo(1.8, -0);
	ctx.moveTo(2, -0);
	ctx.lineTo(2.3, -0);
	ctx.moveTo(2.5, -0);
	ctx.lineTo(2.6, -0);
	ctx.moveTo(2.8, -0);
	ctx.lineTo(2.9, -0);
	ctx.moveTo(3.1, -0);
	ctx.lineTo(3.3, -0);
	ctx.moveTo(5, -0);
	ctx.lineTo(5.2, -0);
	ctx.moveTo(5.3, -0);
	ctx.lineTo(5.5, -0);
	ctx.moveTo(5.7, -0);
	ctx.lineTo(5.9, -0);
	ctx.moveTo(6.1, -0);
	ctx.lineTo(6.2, -0);
	ctx.moveTo(6.4, -0);
	ctx.lineTo(6.55, -0);
	ctx.moveTo(6.75, -0);
	ctx.lineTo(6.77, -0);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = colorladrillo; //// MARCO VENTANA LADO DE PUERTA 
	ctx.lineWidth = .02;
	ctx.lineJoin = "round";
	ctx.rect(4.5, .2, .4, .8);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = colorventanaabajo;
	ctx.rect(4.57, .27, .28, .66);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = .021;
	ctx.moveTo(4.57, .49);       //detalle ventana lado puerta
	ctx.lineTo(4.9, .49);
	ctx.moveTo(4.57, .72);
	ctx.lineTo(4.9, .72);
	ctx.moveTo(4.74, .27);
	ctx.lineTo(4.74, .925);
	ctx.stroke()
	ctx.beginPath()
	ctx.lineWidth=0.025
	ctx.moveTo(4.57, .27);
	ctx.lineTo(4.57, .925);
	ctx.stroke();

	ctx.beginPath()     //BORDE DE PUERTA
	ctx.fillStyle = colorbordepuerta;
	ctx.lineWidth = .03;
	ctx.lineJoin = "round";
	ctx.rect(3.7, .27, .04, 1.1);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();   //PUERTA
	ctx.fillStyle = colorpuerta;
	ctx.lineWidth = .02;
	ctx.moveTo(3.77, .3);
	ctx.lineTo(3.77, 1.4);
	ctx.lineTo(4.2, 1.4);
	ctx.lineTo(4.2, .3);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(3.6155, .2);
	ctx.lineTo(4.28, .2);
	ctx.lineTo(4.28, 1.4);        ///detalle puerta , marco
	ctx.moveTo(3.613, .2);
	ctx.lineTo(3.613, 1.4);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "round";     ///PICAPORTE Y DETALLE ARRIBA PUERTA
	ctx.lineWidth = .05;
	ctx.lineJoin = "round";
	ctx.moveTo(3.79, .8);
	ctx.lineTo(3.85, .8);
	ctx.stroke();  //picaporte

	ctx.beginPath();
	ctx.lineCap = "butt";
	ctx.lineJoin = "butt";
	ctx.moveTo(3.75, .28);  // detalle arriba
	ctx.lineTo(4.21, .28);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#262626";
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.moveTo(1.775, 1.5);   //LINEA SUELO RECORRE TODA LA CASA
	ctx.lineTo(3.25, 1.5);
	ctx.lineTo(3.6, 1.4);
	ctx.lineTo(4.82, 1.4);
	ctx.moveTo(4.9, 1.5);
	ctx.lineTo(6.6, 1.5);
	ctx.moveTo(6.8, 1.5);
	ctx.lineTo(8, 1.47);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = colorventanaabajo;         //marco dentro ventana arriba
	ctx.beginPath();
	ctx.lineWidth = .015;
	ctx.rect(7.2, -.6, .25, .32);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle=colorladrillo
	ctx.lineWidth = .02;
	ctx.moveTo(7.2, -.44);
	ctx.lineTo(7.44, -.44);
	///detalles ventana arriba
	ctx.moveTo(7.32, -.6);
	ctx.lineTo(7.32, -.28);

	ctx.moveTo(7.44, -.6);
	ctx.lineTo(7.44, -.28);
	ctx.stroke();
	
	ctx.beginPath(); // VENTANAS COSTADO CUADRO GRANDE
	ctx.strokeStyle=lineasdelacasa
	ctx.fillStyle=colorladrillo
	ctx.rect(6.95, .35, .35, .6);
	ctx.stroke();
	ctx.fill()
	ctx.beginPath()
	ctx.strokeStyle=lineasdelacasa
	ctx.rect(7.45, .35, .35, .6);
	ctx.stroke();
	ctx.fill()

	

	ctx.beginPath();
	ctx.strokeStyle=lineasdelacasa
	ctx.lineJoin = "round";    //VENTANAS 2 COSTADO
	ctx.fillStyle = colorventanaabajo;
	ctx.lineWidth = .02;
	ctx.rect(7, .4, .25, .5);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath()
	ctx.fillStyle = colorventanaabajo;
	ctx.rect(7.5, .4, .25, .5);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.strokeStyle=lineasdelacasa
	ctx.moveTo(7.74, .4);
	ctx.lineTo(7.74, .9);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(7.24, .4);
	ctx.lineTo(7.24, .9);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(7.115, .4);
	ctx.lineTo(7.115, .9);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(7., .55);
	ctx.lineTo(7.24, .55);
	ctx.moveTo(7, .75);
	ctx.lineTo(7.24, .75);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(7.615, .4);
	ctx.lineTo(7.615, .9);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(7.51, .55);
	ctx.lineTo(7.72, .55);
	ctx.moveTo(7.51, .75);
	ctx.lineTo(7.72, .75);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle=lineasdelacasa
	ctx.lineCap = "round";
	ctx.lineJoin = "round";  //VENTANAS FRENTE 
	ctx.fillStyle = colorladrillo;
	ctx.lineWidth = .02;
	ctx.beginPath()
	ctx.rect(5.321, .335, .85, .53);
	ctx.stroke();
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorventanaabajo
	ctx.rect(5.4, .4, .7, .4);
	ctx.stroke();
	ctx.fill();
	

	ctx.beginPath();
	ctx.lineWidth = 0.03;
	ctx.lineCap = "butt";
	ctx.moveTo(5.41, .4);
	ctx.lineTo(5.41, .8);
	ctx.moveTo(5.75, .4);
	ctx.lineTo(5.75, .8);
	ctx.moveTo(5.4, .6);
	ctx.lineTo(6.1, .6);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.lineWidth = .02;
	ctx.beginPath()
	ctx.fillStyle = colorladrillo
	ctx.rect(2.021, .335, .85, .53);
	ctx.stroke();
	ctx.fill()
	ctx.beginPath()
	ctx.fillStyle = colorventanaabajo;
	ctx.rect(2.1, .4, .7, .4);
	ctx.stroke();
	ctx.fill();
	

	ctx.beginPath();
	ctx.lineCap = "butt";
	ctx.lineJoin = "round";
	ctx.lineWidth = .03;
	ctx.moveTo(2.11, .4);
	ctx.lineTo(2.11, .8);
	ctx.moveTo(2.45, .4);
	ctx.lineTo(2.45, .8);
	ctx.moveTo(2.1, .6);
	ctx.lineTo(2.8, .6);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.fillStyle = colorpared;
	ctx.lineWidth = .03;
	ctx.moveTo(3.2, .12);
	ctx.lineTo(3.2, 1.7);         //PALOS FRENTE
	ctx.moveTo(3.25, .1);
	ctx.lineTo(3.25, 1.7);
	ctx.moveTo(1.765, .12);
	ctx.lineTo(1.765, 1.7);
	ctx.moveTo(4.85, .12);
	ctx.lineTo(4.85, 1.7);
	ctx.moveTo(4.9, .12);
	ctx.lineTo(4.9, 1.7);
	ctx.moveTo(6.63, .12);
	ctx.lineTo(6.63, 1.7);
	ctx.moveTo(6.7, .12);
	ctx.lineTo(6.7, 1.7);
	ctx.moveTo(6.77, .03);
	ctx.lineTo(6.77, 1.7);
	ctx.moveTo(8.07, .15);
	ctx.lineTo(8.07, 1.66);
	ctx.moveTo(8.06, 1.66);
	ctx.lineTo(8, 1.66);
	ctx.stroke();
	ctx.beginPath();
	ctx.fillStyle = colorchimenea;
	ctx.lineWidth = .03;
	ctx.shadowBlur = 0;
	ctx.moveTo(2.8 + 3.5, -.9);
	ctx.lineTo(2.8 + 3.5, -1.6);
	ctx.lineTo(3 + 3.5, -1.6);
	ctx.lineTo(3 + 3.5, -.9);
	ctx.lineTo(2.8 + 3.5, -.9);
	ctx.fill();
	ctx.moveTo(3 + 3.5, -.9);
	ctx.lineTo(3.1 + 3.5, -1);
	ctx.lineTo(3.1 + 3.5, -1.6);
	ctx.lineTo(2.8 + 3.5, -1.6);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath(); // DETALLE PISO CASA
	ctx.lineWidth = .01;
	ctx.lineJoin = "round";
	ctx.moveTo(3.4, 1.5);
	ctx.lineTo(3.5, 1.5);
	ctx.moveTo(3.6, 1.5);
	ctx.lineTo(3.9, 1.5);
	ctx.moveTo(4, 1.5);
	ctx.lineTo(4.3, 1.5);
	ctx.moveTo(4.7, 1.5);
	ctx.lineTo(4.9, 1.5);
	ctx.moveTo(4.5, 1.5);
	ctx.lineTo(4.6, 1.5);
	ctx.moveTo(4.5, 1.6);
	ctx.lineTo(4.7, 1.6);
	ctx.moveTo(4, 1.6);
	ctx.lineTo(4.4, 1.6);
	ctx.moveTo(3.5, 1.6);
	ctx.lineTo(3.8, 1.6);
	ctx.moveTo(3.2, 1.6);
	ctx.lineTo(3, 1.6);
	ctx.moveTo(2.8, 1.6);
	ctx.lineTo(2.9, 1.6);
	ctx.moveTo(2.7, 1.6);
	ctx.lineTo(2.4, 1.6);
	ctx.moveTo(2.3, 1.6);
	ctx.lineTo(2.2, 1.6);
	ctx.moveTo(2.1, 1.6);
	ctx.lineTo(1.8, 1.6);
	ctx.moveTo(4.9, 1.6);
	ctx.lineTo(5.2, 1.6);
	ctx.moveTo(5.3, 1.6);
	ctx.lineTo(5.4, 1.6);
	ctx.moveTo(5.5, 1.6);
	ctx.lineTo(5.7, 1.6);
	ctx.moveTo(5.8, 1.6);
	ctx.lineTo(6.1, 1.6);
	ctx.moveTo(6.2, 1.6);
	ctx.lineTo(6.25, 1.6);
	ctx.moveTo(6.3, 1.6);
	ctx.lineTo(6.5, 1.6);
	ctx.moveTo(6.8, 1.595);
	ctx.lineTo(7, 1.59);
	ctx.moveTo(7.1, 1.59);
	ctx.lineTo(7.2, 1.59);
	ctx.moveTo(7.3, 1.58);
	ctx.lineTo(7.6, 1.57);
	ctx.moveTo(7.7, 1.57);
	ctx.lineTo(7.9, 1.57);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = .02;
	ctx.fillStyle = colorpuerta; // ESCALONES
	ctx.moveTo(3.24, 1.73);
	ctx.lineTo(3.19, 1.77);
	ctx.lineTo(4.8, 1.77);
	ctx.lineTo(4.85, 1.73);
	ctx.lineTo(3.24, 1.73);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = colorbordepuerta;
	ctx.moveTo(3.19, 1.77);
	ctx.lineTo(3.19, 1.92);
	ctx.lineTo(4.8, 1.92);
	ctx.lineTo(4.8, 1.77);
	ctx.lineTo(3.19, 1.77);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = colorpuerta;
	ctx.moveTo(3.19, 1.92);
	ctx.lineTo(3.14, 1.97);
	ctx.lineTo(4.75, 1.97);
	ctx.lineTo(4.8, 1.92);
	ctx.lineTo(3.19, 1.92);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = colorbordepuerta;
	ctx.moveTo(3.14, 1.97);
	ctx.lineTo(3.14, 2.12);
	ctx.lineTo(4.75, 2.12);
	ctx.lineTo(4.75, 1.97);
	ctx.lineTo(3.14, 1.97);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(4.76, 2.12);
	ctx.lineTo(4.85, 1.94);
	ctx.lineTo(4.85, 1.74);
	ctx.lineTo(4.8, 1.77);
	ctx.lineTo(4.8, 1.92);
	ctx.lineTo(4.75, 1.97);
	ctx.lineTo(4.75, 2.12);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 0.007
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"
	ctx.moveTo(7.79, 0.15);
	ctx.lineTo(7.99, 0.15);
	ctx.lineTo(7.99, 0.23);
	ctx.lineTo(7.79, 0.23);
	ctx.lineTo(7.79, 0.15);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(7.89, 0.245);
	ctx.lineTo(7.99, 0.245);
	ctx.lineTo(7.99, 0.32);
	ctx.lineTo(7.89, 0.32);
	ctx.lineTo(7.89, 0.245);
	ctx.stroke()
	ctx.fill()

	ctx.beginPath() ////// LADRILLOS
	ctx.fillStyle = "#e0cfb8"
	ctx.strokeStyle = "gray"
	ctx.lineWidth = 0.007
	ctx.rect(+2, 1, 0.2, 0.07)
	ctx.rect(+2.214, 1, 0.2, 0.07)
	ctx.rect(+2.1, 1.084, 0.2, 0.07)
	ctx.rect(+6.29, 1.215, 0.2, 0.07)
	ctx.rect(+6.185, 1.3, 0.2, 0.07)
	ctx.rect(+6.4, 1.3, 0.2, 0.07)
	ctx.stroke()
	ctx.fill()


	ctx.restore()

}
function piedra(ctx, location, scale) {
	ctx.beginPath();
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.lineWidth = 0.1;
	ctx.beginPath()
	ctx.shadowOffsetX = 0,
		ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.fillStyle = "gray"
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+5, +2)
	ctx.quadraticCurveTo(5.5, 3, 5.1, 5.2)
	ctx.quadraticCurveTo(3, 5.5, 1, 5.2)
	ctx.lineTo(0.5, 4.5)
	ctx.lineTo(0.55, 4)
	ctx.lineTo(1, 3)
	ctx.lineTo(2, 2)
	ctx.lineTo(3, 1.5)
	ctx.lineTo(4, 1.5)
	ctx.lineTo(5, 2)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(+5, +3)
	ctx.lineTo(6, 3.4)
	ctx.lineTo(6.5, 4)
	ctx.lineTo(7.1, 5)
	ctx.lineTo(7.1, 5.5)
	ctx.lineTo(6.5, 6)
	ctx.quadraticCurveTo(6, 6.1, 4, 6)
	ctx.lineTo(3, 5)
	ctx.lineTo(2.8, 4.5)
	ctx.lineTo(3, 4)
	ctx.lineTo(4, 3)
	ctx.lineTo(+5, +3)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(+3, +6)
	ctx.lineTo(+3.2, 6.1)
	ctx.lineTo(+3.5, 6.3)
	ctx.lineTo(+3.5, 6.5)
	ctx.lineTo(+3.4, 6.6)
	ctx.lineTo(+3.1, 6.7)
	ctx.lineTo(+3, 6.7)
	ctx.lineTo(+2.5, 6.6)
	ctx.lineTo(+2.5, 6.4)
	ctx.lineTo(+2.8, 6.1)
	ctx.lineTo(+3, 6)
	ctx.stroke()
	ctx.fill()

	ctx.restore()
}

function piedra2(ctx, location, scale) {
	ctx.beginPath();
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.lineWidth = 0.1;
	ctx.beginPath()
	ctx.shadowOffsetX = 0,
		ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.fillStyle = "#8c8c8c"
	ctx.strokeStyle = lineasdelacasa
	ctx.moveTo(+5, +2)
	ctx.quadraticCurveTo(5.5, 3, 5.1, 5.2)
	ctx.quadraticCurveTo(3, 5.5, 1, 5.2)
	ctx.lineTo(0.5, 4.5)
	ctx.lineTo(0.55, 4)
	ctx.lineTo(1, 3)
	ctx.lineTo(2, 2)
	ctx.lineTo(3, 1.5)
	ctx.lineTo(4, 1.5)
	ctx.lineTo(5, 2)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(+5, +3)
	ctx.lineTo(6, 3.4)
	ctx.lineTo(6.5, 4)
	ctx.lineTo(7.1, 5)
	ctx.lineTo(7.1, 5.5)
	ctx.lineTo(6.5, 6)
	ctx.quadraticCurveTo(6, 6.1, 4, 6)
	ctx.lineTo(3, 5)
	ctx.lineTo(2.8, 4.5)
	ctx.lineTo(3, 4)
	ctx.lineTo(4, 3)
	ctx.lineTo(+5, +3)
	ctx.stroke()
	ctx.fill()

	ctx.restore()
}
var startAngle = Math.PI / 2;
function mar(color) {
	var count = 60000
	ctx.lineWidth = 0.03;
	var menos = -width / 30

	for (var i = 0; i < count; i++) {
		var x = Math.floor(($fx.rand() * (width - menos)) + menos),
			y = Math.floor(($fx.rand() * (height - alturagradiente)) + alturagradiente);

		var value = getValue(x, y);

		ctx.save();
		ctx.translate(x, y);
		render(value);
		ctx.restore();
	}

	function getValue(x, y) {
		return (Math.sin(x * 0.002) + Math.sin(y * 0.002)) * Math.PI * 0;
	}

	function render(value) {
		ctx.rotate(value);
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 0;
		ctx.shadowColor = "none";
		ctx.beginPath();
		ctx.strokeStyle = color
		ctx.moveTo(0, 0);
		ctx.lineTo($fx.rand() * width / 45.45 + width / 45.45, 1);
		ctx.stroke();
	}
}
function drawMountain(x, y, width, height, curveAmount, color) {
	// Calcular los puntos de control de las curvas
	var controlPoint1X = x + width / 4;
	var controlPoint1Y = y - height / 2;
	var controlPoint2X = x + width / 2;
	var controlPoint2Y = y + height / 2;
	var controlPoint3X = x + (3 * width) / 4;
	var controlPoint3Y = 200

	// Dibujar la montaña
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, curveAmount, x + width, y);
	ctx.lineTo(x + width, y + height);
	ctx.lineTo(x, y + height);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}
function nieve(x, y, radio) {

	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.shadowColor = "white";
	ctx.shadowBlur = radio + 2;
	ctx.arc(x, y, radio, 0, 2 * Math.PI);

	ctx.fill();
	ctx.closePath();
}
function drawFlake(x, y, size) {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.shadowBlur = size + 2
	ctx.shadowColor = "white"

	// Dibujo del copo de nieve
	ctx.moveTo(x, y - size);
	ctx.lineTo(x + size, y);
	ctx.lineTo(x, y + size);
	ctx.lineTo(x - size, y);
	ctx.closePath();

	// Rotamos y dibujamos el copo de nieve en cinco posiciones diferentes
	for (let angle = 0; angle < 360; angle += 72) {
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(angle * Math.PI / 180);
		ctx.fill();
		ctx.restore();
	}
}
function nieve2() {
	// Generar copos de nieve
	for (let i = 0; i < 1000; i++) {
		const x = $fx.rand() * canvas.width;
		const y = $fx.rand() * canvas.height;
		const size = $fx.rand() * 5 + 2;
		drawFlake(x, y, size);
	}
}
// Generar NIEVE
function generarNieve() {
	for (var i = 0; i < 800; i++) {
		var x = $fx.rand() * canvas.width;
		var y = $fx.rand() * canvas.height;
		var radio = $fx.rand() * 3 + 1;
		nieve(x, y, radio);
	}
}

var alturacasa = heightfinal / 1.15
////// DEFINIR POSICION DE HUMO
/// LIENZO 2
/// CASA 1
function humocasa1lienzo2() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 575
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
		case 2:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 575
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
		case 1:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 570
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
	}
}
/// CASA 2
function humocasa2lienzo2() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 450
			xmin = xcasa + 400
			ymax = 1640
			ymin = 1550

			xmax2 = xcasa + 430
			xmin2 = xcasa + 410
			ymax2 = 1700
			ymin2 = 1640
			radiohumo1 = 12
			radiohumo2 = 4
			break
		case 2:
			xmax = xcasa + 450
			xmin = xcasa + 400
			ymax = 1640
			ymin = 1550

			xmax2 = xcasa + 430
			xmin2 = xcasa + 410
			ymax2 = 1700
			ymin2 = 1640
			radiohumo1 = 12
			radiohumo2 = 4

			break
		case 1:
			xmax = xcasa + 450
			xmin = xcasa + 400
			ymax = 1640
			ymin = 1550

			xmax2 = xcasa + 430
			xmin2 = xcasa + 410
			ymax2 = 1700
			ymin2 = 1640
			radiohumo1 = 12
			radiohumo2 = 4

			break
	}
}
///CASA 3
function humocasa3lienzo2() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 730
			xmin = xcasa + 690
			ymax = 1690
			ymin = 1610
			xmax2 = xcasa + 720
			xmin2 = xcasa + 705
			ymax2 = 1728
			ymin2 = 1690
			radiohumo1 = 11
			radiohumo2 = 3
		break
		case 2:
			xmax = xcasa + 730
			xmin = xcasa + 690
			ymax = 1690
			ymin = 1610
			xmax2 = xcasa + 720
			xmin2 = xcasa + 705
			ymax2 = 1728
			ymin2 = 1690
			radiohumo1 = 11
			radiohumo2 = 3
		break
		case 1:
			xmax = xcasa + 730
			xmin = xcasa + 690
			ymax = 1690
			ymin = 1610
			xmax2 = xcasa + 720
			xmin2 = xcasa + 705
			ymax2 = 1728
			ymin2 = 1690
			radiohumo1 = 11
			radiohumo2 = 3
		break
	}}
//////CASA 4
function humocasa4lienzo2() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 575
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
		case 2:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 575
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
		case 1:
			xmax = xcasa + 590
			xmin = xcasa + 535
			ymax = 1620
			ymin = 1550

			xmax2 = xcasa + 570
			xmin2 = xcasa + 555
			ymax2 = 1680
			ymin2 = 1620

			radiohumo1 = 12
			radiohumo2 = 4

			break
	}
}
/// CASA 5
function humocasa5lienzo2() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 300
			xmin = xcasa + 250
			ymax = 1650
			ymin = 1590
			xmax2 = xcasa + 285
			xmin2 = xcasa + 262
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 4
			break
		case 2:
			xmax = xcasa + 300
			xmin = xcasa + 250
			ymax = 1650
			ymin = 1590
			xmax2 = xcasa + 285
			xmin2 = xcasa + 262
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 4
			break
		case 1:
			xmax = xcasa + 300
			xmin = xcasa + 250
			ymax = 1650
			ymin = 1590
			xmax2 = xcasa + 285
			xmin2 = xcasa + 262
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 4
			break
	}
}

//lienzo 3
// CASA 1
function humocasa1lienzo3() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1600
			ymin = 1500

			xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1650
			ymin2 = 1600

			radiohumo1 = 14
			radiohumo2 = 6

			break
		case 2:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1600
			ymin = 1500

			xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1650
			ymin2 = 1600

			radiohumo1 = 14
			radiohumo2 = 6

			break
		case 1:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1600
			ymin = 1500

			xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1650
			ymin2 = 1600

			radiohumo1 = 14
			radiohumo2 = 6

			break
	}
}
////CASA 2
function humocasa2lienzo3() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 450
			xmin = xcasa + 410
			ymax = 1600
			ymin = 1530

			xmax2 = xcasa + 430
			xmin2 = xcasa + 428
			ymax2 = 1660
			ymin2 = 1600
			radiohumo1 = 12
			radiohumo2 = 6
			break
		case 2:
			xmax = xcasa + 450
			xmin = xcasa + 410
			ymax = 1600
			ymin = 1530

			xmax2 = xcasa + 430
			xmin2 = xcasa + 428
			ymax2 = 1660
			ymin2 = 1600
			radiohumo1 = 12
			radiohumo2 = 6

			break
		case 1:
			xmax = xcasa + 450
			xmin = xcasa + 410
			ymax = 1600
			ymin = 1530

			xmax2 = xcasa + 430
			xmin2 = xcasa + 428
			ymax2 = 1660
			ymin2 = 1600
			radiohumo1 = 12
			radiohumo2 = 6

			break
	}
}
//CASA 3
function humocasa3lienzo3() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 800
			xmin = xcasa + 750
			ymax = 1650
			ymin = 1550
			xmax2 = xcasa + 785
			xmin2 = xcasa + 765
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 6
		break
		case 2:
			xmax = xcasa + 800
			xmin = xcasa + 750
			ymax = 1650
			ymin = 1550
			xmax2 = xcasa + 785
			xmin2 = xcasa + 765
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 6
		break
		case 1:
			xmax = xcasa + 800
			xmin = xcasa + 750
			ymax = 1650
			ymin = 1550
			xmax2 = xcasa + 785
			xmin2 = xcasa + 765
			ymax2 = 1700
			ymin2 = 1650
			radiohumo1 = 12
			radiohumo2 = 6
		break
	}
}
// CASA 4
function humocasa4lienzo3() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1550
			ymin = 1470
xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1625
			ymin2 = 1550

			radiohumo1 = 14
			radiohumo2 = 8
break
		case 2:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1550
			ymin = 1470
xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1625
			ymin2 = 1550

			radiohumo1 = 14
			radiohumo2 = 8
			break
		case 1:
			xmax = xcasa + 645
			xmin = xcasa + 595
			ymax = 1550
			ymin = 1470

			xmax2 = xcasa + 625
			xmin2 = xcasa + 615
			ymax2 = 1625
			ymin2 = 1550

			radiohumo1 = 14
			radiohumo2 = 8
break
	}
}
//CASA 5
function humocasa5lienzo3() {
	switch (variatoncasa) {
		case 3:
			xmax = xcasa + 340
			xmin = xcasa + 280
			ymax = 1580
			ymin = 1500
			xmax2 = xcasa + 322
			xmin2 = xcasa + 298
			ymax2 = 1630
			ymin2 = 1580
			radiohumo1 = 12
			radiohumo2 = 4
		break
		case 2:
			xmax = xcasa + 340
			xmin = xcasa + 280
			ymax = 1580
			ymin = 1500
			xmax2 = xcasa + 322
			xmin2 = xcasa + 298
			ymax2 = 1630
			ymin2 = 1580
			radiohumo1 = 12
			radiohumo2 = 4
			break
		case 1:
			xmax = xcasa + 340
			xmin = xcasa + 280
			ymax = 1580
			ymin = 1500
			xmax2 = xcasa + 322
			xmin2 = xcasa + 298
			ymax2 = 1630
			ymin2 = 1580
			radiohumo1 = 12
			radiohumo2 = 4
break
	}
}
// lienzo 2
if (lienzo == 1) {
	switch (tiposdecasa) {
		case 1:
			humocasa1lienzo2()
			break
		case 2:
			humocasa2lienzo2()
			break
		case 3:
			humocasa3lienzo2()
			break
		case 4:
			humocasa4lienzo2()
			break
		case 5:
			humocasa5lienzo2()
			break
	}
}
//lienzo 3
if (lienzo == 2) {
	switch (tiposdecasa) {
		case 1:
			humocasa1lienzo3()
			break
		case 2:
			humocasa2lienzo3()
			break
		case 3:
			humocasa3lienzo3()
			break
		case 4:
			humocasa4lienzo3()
			break
		case 5:
			humocasa5lienzo3()
			break
	}
}
// HUMO
function generarhumo(x,y) {
	for (var i = 0; i < 80; i++) {
		var x = Math.floor(($fx.rand() * (xmax - xmin)) + xmin)
		var y = Math.floor(($fx.rand() * (ymax - ymin)) + ymin)
		var radio = $fx.rand() * radiohumo1 + radiohumo2
		humo(x, y, radio);
	}
}
function generarhumo2(x,y) {
	for (var i = 0; i < 30; i++) {
		var x = Math.floor(($fx.rand() * (xmax2 - xmin2)) + xmin2)
		var y = Math.floor(($fx.rand() * (ymax2 - ymin2)) + ymin2)
		var radio = $fx.rand() * radiohumo1 + radiohumo2
		humo(x, y, radio);
	}
}
function humo(x,y,radio) {
	var gradiente = ctx.createRadialGradient(x, y, 0, x, y, radio);
	gradiente.addColorStop(0, "rgba(191, 191, 191,0.1)");
	gradiente.addColorStop(1, "rgba(179, 179, 179,0.1)");

	ctx.beginPath();
	ctx.arc(x, y, radio, 0, 2 * Math.PI);
	ctx.fillStyle = gradiente;
	ctx.shadowColor = "#4d4d4d";
	ctx.shadowBlur = radio;
	ctx.fill();
	ctx.closePath();
}
// Dibujar las nubes iniciales
function drawsky(x, y, isHorizontal, color) {
	ctx.beginPath();
	ctx.fillStyle = color
	ctx.lineWidth = 0.2
	ctx.strokeStyle = "gray";
	ctx.shadowBlur = 0;

	if (isHorizontal) {
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(x - 50, y - 50, x - 45, y);
		ctx.quadraticCurveTo(x - 50, y + 50, x, y);
	} else {
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(x - 50, y - 50, x, y - 45);
		ctx.quadraticCurveTo(x + 50, y - 50, x, y);
	}

	ctx.closePath();
	ctx.fill()

}
// Densidad de la hierba (número de tallos)
function drawnoisesky() {
	for (var i = 0; i <= 3000; i++) {
		var colorsnum = ["rgba(255, 255, 255,0.1)", "rgba(255, 255, 255,0.1)"]
		var colorfinal = colorsnum[Math.floor($fx.rand() * colorsnum.length)]

		drawsky($fx.rand() * width, $fx.rand() * height, true, colorfinal);
		drawsky($fx.rand() * width, $fx.rand() * height, false, colorfinal);
	}
}
//////SOMBRA DE CASA
if (lienzo == 1) {
	anchosombra = 1700
	alturacespedmax = 80
	alturacespedmin = 50
	switch (tiposdecasa) {
		case 5:
			xsombracasa = xcasa + 425//350
			grassY = height - 165 //145;
			break
		case 4:
			xsombracasa = xcasa + 370
			grassY = height - 175//160;
			break
		case 3:
			xsombracasa = xcasa + 480//370
			grassY = height - 185//190
			break
		case 2:
			xsombracasa = xcasa + 500//350
			grassY = height - 190 //145;
			break
		case 1:
			xsombracasa = xcasa + 400
			grassY = height - 170//160;
			break
	}
}

if (lienzo == 2) {
	anchosombra = 2000
	alturacespedmax = 80
	alturacespedmin = 80
	switch (tiposdecasa) {
		case 5:

			xsombracasa = xcasa + 550//350
			grassY = height - 200 //145;
			break
		case 4:
			xsombracasa = xcasa + 480
			grassY = height - 180//160
			break
		case 3:
			xsombracasa = xcasa + 590//370
			grassY = height - 175//190
			break
		case 2:
			xsombracasa = xcasa + 580//350
			grassY = height - 200 //145;
			break
		case 1:
			xsombracasa = xcasa + 500
			grassY = height - 155//160;
			break
	}
}
//LIENZO 3
var grassDensity2 = widthfinal / 1.33
var grassSpacing = widthfinal / 6666.6//0.3// width / (grassDensity - 1);
//dibujar sombra casa

for (var i = 0; i < grassDensity2; i++) {
	var anchocesped = Math.ceil($fx.rand() * grassSpacing);
	var colorsnum2 = [grassColor2, grassColor]
	var colorfinalgrass = colorsnum2[Math.floor($fx.rand() * colorsnum2.length)]
	var grassHeight = Math.floor(($fx.rand() * (alturacespedmax - alturacespedmin)) + alturacespedmin)
	var grassX = i * grassSpacing;

	cespedcasa(xsombracasa, grassY);
}
mar(colormar)

/// DIBUJAR CASA
switch (tiposdecasa) {
	case 1:
		casa1(ctx, [xcasa, alturacasa1], sizecasa1)
		break
	case 2:
		casa2(ctx, [xcasa, alturacasa2], sizecasa2)
		break
	case 3:
		casa3(ctx, [xcasa, alturacasa3], sizecasa3)
		break
	case 4:
		casa4(ctx, [xcasa, alturacasa4], sizecasa4)
		break
	case 5:
		casa5(ctx, [xcasa, alturacasa5], sizecasa5)
		break
}
piedra(ctx, [300, 2120], 7)
piedra2(ctx, [1300, 2150], 5)

function cespedcasa(x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);

	var controlX = x + ($fx.rand() - widthfinal / 6000) * anchosombra//1500; // Control X aleatorio para la curva
	var controlY = y - grassHeight / 8; // Control Y para la curva

	var endX = x; // Extremo X de la curva (misma posición que el inicio)
	var endY = y - grassHeight; // Extremo Y de la curva

	ctx.quadraticCurveTo(controlX, controlY, endX, endY);
	ctx.lineWidth = anchocesped
	ctx.lineCap = "butt"
	ctx.shadowColor = colorsombra
	ctx.shadowBlur = 2
	ctx.strokeStyle = colorsombra;
	ctx.stroke();
}
generarhumo()
generarhumo2()

var colorave = "#4d4d4d"
function ave1(ctx, location, scale) {
	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);



	ctx.beginPath()
	ctx.strokeStyle = colorave;
	ctx.fillStyle = colorave // ALA ARRIBA
	ctx.lineWidth = 0.03;
	ctx.moveTo(+1, +1);
	ctx.quadraticCurveTo(+3, +2, +3.5, +5);
	ctx.moveTo(+3.5, +5)
	ctx.lineTo(+2, +5);
	ctx.quadraticCurveTo(+2, +3, +1, +1);
	ctx.stroke();
	ctx.closePath()
	ctx.fill()


	ctx.beginPath()
	ctx.shadowBlur = 0   //CUERPO AVE
	ctx.moveTo(-1.5, +5);
	ctx.quadraticCurveTo(+6, +4, +6, +5)
	ctx.moveTo(+6, +5);
	ctx.quadraticCurveTo(2, +6.2, -1.5, +5)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.shadowBlur = 0
	ctx.strokeStyle = colorave   //ALA ATRAS
	ctx.moveTo(2, +3.9);
	ctx.lineTo(2, +4.8)
	ctx.moveTo(2, +3.9);
	ctx.quadraticCurveTo(-1, +1, 2, +4.8)
	ctx.stroke()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.16 // PLUMAS
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.strokeStyle = colorave  //ALA ATRAS
	ctx.moveTo(0.3, +0.9);
	ctx.lineTo(1.3, +1.3)

	ctx.moveTo(0.7, +1.2);
	ctx.lineTo(1.3, +1.5)

	ctx.moveTo(0.9, +1.5);
	ctx.lineTo(1.5, +1.7)

	ctx.moveTo(1, +1.7);
	ctx.lineTo(1.6, +1.9)

	ctx.moveTo(1.1, +1.9);
	ctx.lineTo(1.6, +2.1)

	ctx.moveTo(1.2, +2.1);
	ctx.lineTo(1.6, +2.3)

	ctx.moveTo(1.3, +2.2);
	ctx.lineTo(1.7, +2.5)
	ctx.moveTo(1.3, +2.4);
	ctx.lineTo(1.7, +2.7)

	ctx.moveTo(1.4, +2.7);
	ctx.lineTo(1.8, +3)
	ctx.moveTo(1.5, +3);
	ctx.lineTo(1.8, +3.2)
	ctx.moveTo(1.6, +3.2);
	ctx.lineTo(2, +3.5)
	ctx.moveTo(1.7, +3.4);
	ctx.lineTo(2.1, +3.6)
	ctx.moveTo(1.8, +3.6);
	ctx.lineTo(2.2, +3.8)



	ctx.moveTo(-1, +5);  //PLUMAS COLA
	ctx.lineTo(-2.8, +5)
	ctx.moveTo(-1, +5.1);
	ctx.lineTo(-2.2, +5.1)
	ctx.moveTo(-0.4, +5.2);
	ctx.lineTo(-1.5, +5.2)
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.15
	ctx.strokeStyle = colorave
	ctx.moveTo(0.1, +2.5);
	ctx.lineTo(0.6, +2.8)
	ctx.moveTo(0.4, +2.85);
	ctx.lineTo(0.7, +3)

	ctx.moveTo(0.6, +3.1);
	ctx.lineTo(0.9, +3.2)
	ctx.moveTo(0.7, +3.3);
	ctx.lineTo(1, +3.4)
	ctx.moveTo(0.9, +3.5);
	ctx.lineTo(1.1, +3.6)

	ctx.moveTo(1, +3.7);
	ctx.lineTo(1.3, +3.8)
	ctx.moveTo(1.1, +3.9);
	ctx.lineTo(1.5, +4.1)
	ctx.moveTo(1.2, +4.1);
	ctx.lineTo(1.8, +4.4)
	ctx.moveTo(1.3, +4.3);
	ctx.lineTo(2, +4.5)
	ctx.moveTo(1.4, +4.5);
	ctx.lineTo(2.1, +4.6)
	ctx.moveTo(1.5, +4.6);
	ctx.lineTo(2.2, +4.7)

	ctx.stroke()

	ctx.restore()
}

function ave2(ctx, location, scale) {
	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);

	ctx.strokeStyle = colorave;
	ctx.fillStyle = colorave // ALA ARRIBA
	ctx.lineWidth = 0.03;
	ctx.moveTo(-1, +1);
	ctx.quadraticCurveTo(3, +2, +3.5, +5);
	ctx.moveTo(+3.5, +5)
	ctx.lineTo(+2, +5);
	ctx.quadraticCurveTo(+2, +3, -1, +1);
	ctx.stroke();
	ctx.closePath()
	ctx.fill()




	ctx.beginPath()    //CUERPO AVE
	ctx.moveTo(-1.5, +5);
	ctx.quadraticCurveTo(+6, +4, +6, +5)
	ctx.moveTo(+6, +5);
	ctx.quadraticCurveTo(2, +6.5, -1.5, +5)
	ctx.stroke()
	ctx.fill()


	ctx.beginPath() // ALA 
	ctx.moveTo(+3, +2);
	ctx.quadraticCurveTo(+5, +2.5, +4.4, +5);
	ctx.moveTo(+4.4, +5)
	ctx.lineTo(+3, +5);
	ctx.quadraticCurveTo(+4, +3, +3, +2);

	ctx.stroke();
	ctx.closePath()
	ctx.fill()

	ctx.beginPath() // DETALLES DE ALA
	ctx.strokeStyle = colorave
	ctx.lineWidth = 0.08
	ctx.lineCap = "round"
	ctx.lineJoin = "round"
	ctx.moveTo(+3.4, +3);
	ctx.lineTo(+3.5, +3.2);
	ctx.moveTo(+3.4, +3.2);
	ctx.lineTo(+3.5, +3.3);
	ctx.moveTo(+3.4, +3.3);
	ctx.lineTo(+3.5, +3.4);
	ctx.moveTo(+3.4, +3.4);
	ctx.lineTo(+3.5, +3.5);
	ctx.moveTo(+3.4, +3.5);
	ctx.lineTo(+3.5, +3.6);
	ctx.moveTo(+3.4, +3.6);
	ctx.lineTo(+3.5, +3.7);
	ctx.moveTo(+3.4, +3.7);
	ctx.lineTo(+3.5, +3.8);
	ctx.moveTo(+3.4, +3.8);
	ctx.lineTo(+3.5, +3.9);
	ctx.moveTo(+3.2, +2);
	ctx.lineTo(+3.5, +2.2);
	ctx.moveTo(+3, +2);
	ctx.lineTo(+3.4, +2.2);
	ctx.moveTo(+3.2, +2.5);
	ctx.lineTo(+3.4, +2.7);
	ctx.moveTo(+3.3, +2.7);
	ctx.lineTo(+3.5, +3);
	ctx.stroke()

	ctx.beginPath()
	ctx.lineWidth = 0.2
	ctx.strokeStyle = colorave
	ctx.moveTo(-0.5, +1.1); // ALA ATRAS
	ctx.lineTo(+0.01, +1.5);

	ctx.moveTo(-1, +1.1);
	ctx.lineTo(+0.01, +1.4);

	ctx.moveTo(-0.8, +1.3);
	ctx.lineTo(+0.01, +1.7);

	ctx.moveTo(-0.5, +1.6);
	ctx.lineTo(+0.4, +2);

	ctx.moveTo(+0.1, +2.1);
	ctx.lineTo(+0.7, +2.3);

	ctx.moveTo(+0.4, +2.4);
	ctx.lineTo(+1, +2.6);
	ctx.moveTo(+0.6, +2.7);
	ctx.lineTo(+1.3, +2.9);



	ctx.moveTo(+1, +3);
	ctx.lineTo(+1.4, +3.2);
	ctx.moveTo(+1.1, +3.3);
	ctx.lineTo(+1.6, +3.4);
	ctx.moveTo(+1.2, +3.5);
	ctx.lineTo(+1.6, +3.6);
	ctx.moveTo(+1.4, +3.6);
	ctx.lineTo(+1.7, +3.7);
	ctx.moveTo(+1.5, +3.8);
	ctx.lineTo(+1.9, +4);
	ctx.moveTo(+1.7, +4.1);
	ctx.lineTo(+1.9, +4.2);

	ctx.moveTo(-1, +5);
	ctx.lineTo(-2.7, +5);
	ctx.moveTo(-1, +5.1);
	ctx.lineTo(-2.3, +5.1);
	ctx.moveTo(-0.5, +5.2);
	ctx.lineTo(-1.6, +5.2);
	ctx.stroke()


	ctx.restore()
}
function ave3(ctx, location, scale) {
	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.strokeStyle = colorave;
	ctx.fillStyle = colorave // ALA ARRIBA
	ctx.lineWidth = 0.1;
	ctx.moveTo(-1, +3);
	ctx.quadraticCurveTo(2, +2, +2, +1);
	ctx.quadraticCurveTo(3, 0.01, +9, -0.5);
	ctx.lineTo(+3.3, +2.2)

	ctx.quadraticCurveTo(3, 3, +1, +4);

	ctx.quadraticCurveTo(1, 4.3, +3.5, +5);

	ctx.quadraticCurveTo(3, 6.4, +1, +6.5);

	ctx.quadraticCurveTo(0.5, 5, -0.5, +4.7);

	ctx.quadraticCurveTo(-1, 5, -4, +5.5);
	ctx.lineTo(-8, +10)
	ctx.quadraticCurveTo(-7, 5, -5.2, +4.4);
	ctx.quadraticCurveTo(-3, +4, -2, +3.5);
	ctx.lineTo(-3, +3.2)
	ctx.quadraticCurveTo(-2, +2, -1, +3);
	ctx.stroke()
	ctx.closePath()
	ctx.fill()

	ctx.beginPath()
	ctx.lineWidth = 0.15
	ctx.strokeStyle = colorave
	ctx.moveTo(-7.75, +9)
	ctx.lineTo(-8.2, +10.8)
	ctx.moveTo(-7.7, +9)
	ctx.lineTo(-7.95, +10.5)
	ctx.moveTo(-7.5, +9)
	ctx.lineTo(-7.75, +10.2)
	ctx.moveTo(-7.1, +8)
	ctx.lineTo(-7.6, +9.9)
	ctx.moveTo(-6.5, +8)
	ctx.lineTo(-7.4, +9.6)
	ctx.moveTo(-6.3, +8)
	ctx.lineTo(-7, +9.3)
	ctx.moveTo(-3.5, +5.4)
	ctx.lineTo(-4.2, +5.7)

	ctx.moveTo(1.1, +4)
	ctx.lineTo(1.6, +4.5)

	ctx.moveTo(-0.8, +4.7)
	ctx.lineTo(0.5, +5.2)

	ctx.moveTo(+11, -0.7)
	ctx.lineTo(+8, -0.4)
	ctx.moveTo(+10.5, -0.5)
	ctx.lineTo(+8, -0.3)
	ctx.moveTo(+10, -0.4)
	ctx.lineTo(+8, -0.2)
	ctx.moveTo(+10, -0.2)
	ctx.lineTo(+8, -0.1)
	ctx.moveTo(+7, 0.3)
	ctx.lineTo(+9, -0.1)
	ctx.moveTo(+6, 0.9)
	ctx.lineTo(+8, 0.2)
	ctx.stroke()

	ctx.restore()
}
function ave4(ctx, location, scale) {
	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.strokeStyle = colorave;
	ctx.fillStyle = colorave // Alas
	ctx.lineWidth = 0.1;
	ctx.moveTo(1, +5);
	ctx.quadraticCurveTo(-1, +4, -1, +1);
	ctx.quadraticCurveTo(-2.5, 1, -3.3, +1.5);
	ctx.quadraticCurveTo(-3, +5, -1.5, +6);
	ctx.lineTo(-4, +6)
	ctx.quadraticCurveTo(-5, +7, -3.5, +8.5);
	ctx.lineTo(0, +7.5)
	ctx.quadraticCurveTo(2, +9, 3.5, +9)
	ctx.quadraticCurveTo(7, +9, 7, +8)
	ctx.quadraticCurveTo(5, +8, 2.5, +5.8)
	ctx.lineTo(3.8, 5.8)
	ctx.quadraticCurveTo(3, +4.5, 1, +5)
	ctx.lineTo(1, +5);
	ctx.stroke()
	ctx.fill()


	ctx.beginPath()    ////// PLUMAS ALA ARRIBA
	ctx.lineWidth = 0.3
	ctx.moveTo(-1.1, 1);
	ctx.lineTo(-1, -0.6);
	ctx.moveTo(-1.2, 1);
	ctx.lineTo(-1.5, -0.8);
	ctx.moveTo(-1.4, 1);
	ctx.lineTo(-1.9, -0.8);
	ctx.moveTo(-1.7, 1);
	ctx.lineTo(-2.3, -0.7);
	ctx.moveTo(-2, 1);
	ctx.lineTo(-2.8, -0.4);
	ctx.moveTo(-2.3, 1);
	ctx.lineTo(-3.1, -0.1);
	ctx.moveTo(-2.5, 1);
	ctx.lineTo(-3.3, +0.5);
	ctx.moveTo(-2.7, 1.2);
	ctx.lineTo(-3.4, +1);
	ctx.moveTo(-2.8, 1.4);
	ctx.lineTo(-3.5, +1.4);
	ctx.moveTo(-2.8, 1.7);
	ctx.lineTo(-3.5, +1.7);
	ctx.moveTo(-2.8, 2);
	ctx.lineTo(-3.5, +2);
	ctx.moveTo(-2.8, 2.3);
	ctx.lineTo(-3.5, +2.3);
	ctx.moveTo(-2.8, 2.6);
	ctx.lineTo(-3.5, +2.6);
	ctx.moveTo(-2.8, 2.9);
	ctx.lineTo(-3.4, +2.9);
	ctx.moveTo(-2.8, 3.2);
	ctx.lineTo(-3.3, +3.2);
	ctx.moveTo(-2.8, 3.5);
	ctx.lineTo(-3.2, +3.5);
	ctx.moveTo(-2.8, 3.8);
	ctx.lineTo(-3.1, +3.8);
	ctx.moveTo(-2.8, 4.1);
	ctx.lineTo(-3, +4.1);
	ctx.moveTo(-2.7, 4.4);
	ctx.lineTo(-2.8, +4.4);
	ctx.moveTo(-2, 4.7);
	ctx.lineTo(-2.6, +4.7);
	ctx.moveTo(-2, 5);
	ctx.lineTo(-2.4, +5);
	ctx.moveTo(-2, 5.3);
	ctx.lineTo(-2.2, +5.3);
	ctx.stroke()

	ctx.beginPath()    ////// PLUMAS ALA ABAJO
	ctx.lineWidth = 0.3
	ctx.moveTo(+2.1, + 8.5);
	ctx.lineTo(+2.1, +8.7)
	ctx.moveTo(+2.4, + 8.5);
	ctx.lineTo(+2.4, +8.8)
	ctx.moveTo(+2.7, + 9);
	ctx.lineTo(+2.8, +9)
	ctx.moveTo(+3, + 9);
	ctx.lineTo(+3, +9.1)
	ctx.moveTo(+3.2, + 9);
	ctx.lineTo(+3.3, +9.2)
	ctx.moveTo(+3.4, + 9);
	ctx.lineTo(+3.7, +9.3)
	ctx.moveTo(+3.5, + 9);
	ctx.lineTo(+4, +9.1)
	ctx.moveTo(+3.8, + 9);
	ctx.lineTo(+4.4, +9.4)
	ctx.moveTo(+4.1, + 9);
	ctx.lineTo(+5, +9.4)
	ctx.moveTo(+4.5, + 9);
	ctx.lineTo(+6.5, +9.1)
	ctx.moveTo(+4.5, + 9);
	ctx.lineTo(+5.7, +9.3)
	ctx.moveTo(+7, + 8.2);
	ctx.lineTo(+8.7, +8.1)
	ctx.moveTo(+6, + 8.3);
	ctx.lineTo(+8, +8.4)
	ctx.moveTo(+6, + 8.6);
	ctx.lineTo(+7.5, +8.6)
	ctx.moveTo(+5, +8.8);
	ctx.lineTo(+7.1, 8.9)
	//ctx.moveTo(2.7, 5.05)
	//ctx.lineTo(+2.9, 5.05)

	ctx.moveTo(2.3, 5.9)
	ctx.lineTo(+2.6, 5.9)

	ctx.moveTo(-1.5, 5.9)
	ctx.lineTo(-1.6, 5.9)

	ctx.moveTo(-0.2, 7.4)
	ctx.lineTo(0.2, 7.5)

	//////////PLUMAS COLA
	ctx.moveTo(-4, 6.1)
	ctx.lineTo(-4.5, 6)

	ctx.moveTo(-4, 6.3)
	ctx.lineTo(-4.7, 6.3)

	ctx.moveTo(-4, 6.6)
	ctx.lineTo(-4.8, 6.6)

	ctx.moveTo(-4, 6.9)
	ctx.lineTo(-4.9, 6.9)

	ctx.moveTo(-4, 7.2)
	ctx.lineTo(-5, 7.2)
	ctx.moveTo(-4, 7.5)
	ctx.lineTo(-4.8, 7.5)
	ctx.moveTo(-4, 7.8)
	ctx.lineTo(-4.6, 7.8)

	ctx.moveTo(-3.5, 8.1)
	ctx.lineTo(-4.4, 8.1)
	ctx.moveTo(-3.5, 8.3)
	ctx.lineTo(-4, 8.4)

	ctx.moveTo(-3.5, 8.4)
	ctx.lineTo(-3.8, 8.5)

	ctx.stroke()



	ctx.restore()
}
function ave5(ctx, location, scale) {
	ctx.beginPath();
	ctx.shadowBlur = 0
	ctx.shadowOffsetX = 0
	ctx.shadowOffsetY = 0
	ctx.save();
	ctx.translate(location[0], location[1]);
	ctx.scale(scale, scale);

	ctx.beginPath()
	ctx.lineJoin = "round"
	ctx.lineCap = "round"
	ctx.strokeStyle = colorave;
	ctx.fillStyle = colorave // Alas
	ctx.lineWidth = 0.1;
	ctx.moveTo(1, +7);
	ctx.quadraticCurveTo(1, +3, +6, +1);
	ctx.quadraticCurveTo(4, +4, +4, +8);
	ctx.lineTo(+7, +9)
	ctx.quadraticCurveTo(7, +10, +6, +11);
	ctx.lineTo(+4, +10)
	ctx.quadraticCurveTo(1, +10, -0.5, +8.8)
	ctx.quadraticCurveTo(-2, +7, -4, +7)
	ctx.lineTo(-3.5, +6.8)
	ctx.quadraticCurveTo(-3, +5.7, -2, +6)
	ctx.quadraticCurveTo(-1, +7, 1, +7)
	ctx.fill()

	/// PLUMAS ALA
	ctx.beginPath()
	ctx.lineWidth = 0.3
	ctx.moveTo(5, +1.5);
	ctx.lineTo(6.3, +1);
	ctx.moveTo(5, +1.5);
	ctx.lineTo(6.3, +1.3)
	ctx.moveTo(5, +1.7);
	ctx.lineTo(6.1, +1.5)
	ctx.moveTo(4.5, +1.9);
	ctx.lineTo(5.9, +1.8)
	ctx.moveTo(4.5, +2.1);
	ctx.lineTo(5.7, +2.1)
	ctx.moveTo(4.5, +2.4);
	ctx.lineTo(5.4, +2.4)
	ctx.moveTo(4.5, +2.7);
	ctx.lineTo(5.2, +2.7)
	ctx.moveTo(4, +3);
	ctx.lineTo(5, +3)
	ctx.moveTo(4, +3.3);
	ctx.lineTo(4.8, +3.3)
	ctx.moveTo(4, +3.6);
	ctx.lineTo(4.7, +3.6)
	ctx.moveTo(3, +3.9);
	ctx.lineTo(4.6, +3.9)
	ctx.moveTo(3, +4.1);
	ctx.lineTo(4.5, +4.1)
	ctx.moveTo(3, +4.4);
	ctx.lineTo(4.35, +4.4)

	/// PLUMAS ALA
	ctx.moveTo(6, +9);
	ctx.lineTo(8, +9)
	ctx.moveTo(6, +9);
	ctx.lineTo(7.8, +9.3)
	ctx.moveTo(6, +9.2);
	ctx.lineTo(7.6, +9.6)
	ctx.moveTo(6, +9.4);
	ctx.lineTo(7.4, +9.9)
	ctx.moveTo(6, +9.9);
	ctx.lineTo(7.2, +10.1)
	ctx.moveTo(6, +10.2);
	ctx.lineTo(7, +10.3)
	ctx.moveTo(6, +10.5);
	ctx.lineTo(6.7, +10.6)
	ctx.moveTo(6, +10.6);
	ctx.lineTo(6.5, +10.8)
	ctx.moveTo(6, +10.8);
	ctx.lineTo(6.1, +10.9)
	ctx.stroke()
	ctx.restore()
}


var xave = Math.floor(($fx.rand() * (widthfinal / 1.33 - widthfinal / 4)) + widthfinal / 4)
var yave = heightfinal / 3.83

switch (aves) {
	case 1:
		ave1(ctx, [xave, yave], 8)
		break
	case 2:
		ave2(ctx, [xave, yave], 8)
		break
	case 3:
		ave3(ctx, [xave, yave], 6)
		break
	case 4:
		ave4(ctx, [1000, yave], 6)
		break
	case 5:
		ave5(ctx, [xave, yave], 5)
		break
}


function cordillera(){
ctx.lineCap="round"
ctx.lineJoin="round"
ctx.strokeStyle = "#737373";
ctx.lineWidth = 3;
ctx.fillStyle="#af9998"
ctx.beginPath();  // MONTAÑA 1
ctx.moveTo(0, alturagradiente);
ctx.lineTo(widthfinal/25, heightfinal/1.210)
ctx.lineTo(widthfinal/20.83, heightfinal/1.213)
ctx.lineTo(widthfinal/10, heightfinal/1.352)
ctx.lineTo(widthfinal/9.25, heightfinal/1.360)
ctx.lineTo(widthfinal/7.142, heightfinal/1.4375)
ctx.lineTo(widthfinal/7.042, heightfinal/1.4375)
ctx.lineTo(widthfinal/6.25, heightfinal/1.39)
ctx.lineTo(widthfinal/6.097, heightfinal/1.39)
ctx.lineTo(widthfinal/5.55, heightfinal/1.352)
ctx.lineTo(widthfinal/5, heightfinal/1.314)
ctx.lineTo(widthfinal/4.16, heightfinal/1.256)
ctx.lineTo(widthfinal/3.846, heightfinal/1.223)
ctx.lineTo(widthfinal/3.424, heightfinal/1.191)
ctx.lineTo(widthfinal/3.048, alturagradiente)
ctx.stroke()
ctx.fill()

ctx.beginPath();
ctx.strokeStyle = "#595959";
ctx.lineWidth = 1;
ctx.moveTo(widthfinal/21,heightfinal/ 1.213  )
ctx.lineTo(widthfinal/23.80,heightfinal/ 1.204  )
ctx.moveTo(widthfinal/6.25,heightfinal/  1.391 )
ctx.lineTo(widthfinal/6.00,heightfinal/ 1.377 )
ctx.moveTo(widthfinal/7.1,heightfinal/  1.4375 )
ctx.lineTo(widthfinal/7.2,heightfinal/ 1.419  )
ctx.lineTo(widthfinal/6.94,heightfinal/ 1.385  )
ctx.lineTo(widthfinal/6.94,heightfinal/ 1.369  )
ctx.lineTo(widthfinal/7.35,heightfinal/ 1.352  )
ctx.lineTo(widthfinal/7.57,heightfinal/ 1.314  )
ctx.lineTo(widthfinal/7.35,heightfinal/ 1.277  )
ctx.lineTo(widthfinal/7.14,heightfinal/ 1.243  )
ctx.lineTo(widthfinal/6.94,heightfinal/  1.210 )
ctx.lineTo(widthfinal/6.75,heightfinal/  1.197 )
ctx.lineTo(widthfinal/6.41,heightfinal/1.185   )
ctx.lineTo(widthfinal/6.25,heightfinal/ 1.173  )
ctx.lineTo(widthfinal/5.95,alturagradiente )
ctx.moveTo(widthfinal/10,heightfinal/   1.352  )
ctx.lineTo(widthfinal/10.20,heightfinal/   1.337)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=3; 
ctx.strokeStyle = "#737373";
ctx.fillStyle="#a5958d" // MONTAÑA 1 DETRAS
ctx.moveTo(widthfinal/5, alturagradiente);
ctx.lineTo(widthfinal/4.166,1900)
ctx.lineTo(widthfinal/4.032,heightfinal/1.213 )
ctx.lineTo(widthfinal/3.84,heightfinal/1.256 )
ctx.lineTo(widthfinal/3.7,heightfinal/1.277 )
ctx.lineTo(widthfinal/3.57,heightfinal/1.314 )
ctx.lineTo(widthfinal/3.472,heightfinal/1.321 )
ctx.lineTo(widthfinal/3.28,heightfinal/1.352 )
ctx.lineTo(widthfinal/3.24,heightfinal/1.352 )
ctx.lineTo(widthfinal/3.125,heightfinal/1.329 )
ctx.lineTo(widthfinal/3.04,heightfinal/1.306 )
ctx.lineTo(widthfinal/2.94,heightfinal/1.277 )
ctx.lineTo(widthfinal/2.77,heightfinal/1.243 )
ctx.lineTo(widthfinal/2.63,heightfinal/1.223 )
ctx.lineTo(widthfinal/2.57,heightfinal/1.210 )
ctx.lineTo(widthfinal/2.45 ,heightfinal/1.179 )
ctx.lineTo(widthfinal/2.38 ,alturagradiente )
ctx.stroke()
ctx.fill()

ctx.beginPath(); 
ctx.lineWidth=1
ctx.strokeStyle = "#595959";
ctx.moveTo(widthfinal/4.04  ,heightfinal/1.213  )
ctx.lineTo(widthfinal/4.16  ,heightfinal/1.20  )
ctx.moveTo(widthfinal/3.48  ,heightfinal/ 1.32 )
ctx.lineTo(widthfinal/3.56  ,heightfinal/ 1.30 )
ctx.moveTo(widthfinal/3.28  ,heightfinal/ 1.352 )
ctx.lineTo(widthfinal/3.24  ,heightfinal/ 1.33 )
ctx.lineTo(widthfinal/3.22  ,heightfinal/1.31  )
ctx.lineTo(widthfinal/3.20  ,heightfinal/ 1.29 )
ctx.lineTo(widthfinal/3.14 ,heightfinal/ 1.27 )
ctx.lineTo(widthfinal/3.15  ,heightfinal/1.23  )
ctx.lineTo(widthfinal/ 3.23  ,heightfinal/1.210  )
ctx.lineTo(widthfinal/3.28   ,heightfinal/1.19  )
ctx.lineTo(widthfinal/ 3.33 ,heightfinal/1.17  )
ctx.lineTo(widthfinal/ 3.45 ,alturagradiente)
ctx.stroke()




ctx.beginPath(); 
ctx.lineWidth=3
ctx.strokeStyle = "#737373";
ctx.fillStyle="#af9998" // MONTAÑA 2 DETRAS
ctx.moveTo(widthfinal/1.67  , alturagradiente);
ctx.lineTo(widthfinal/ 1.58 ,heightfinal/1.210 )
ctx.lineTo(widthfinal/ 1.5 ,heightfinal/1.27)
ctx.lineTo(widthfinal/1.49  ,heightfinal/1.280)

ctx.lineTo(widthfinal/ 1.465 ,heightfinal/1.31 )
ctx.lineTo(widthfinal/ 1.44 ,heightfinal/ 1.33)
ctx.lineTo(widthfinal/ 1.43 ,heightfinal/ 1.33)
ctx.lineTo(widthfinal/ 1.40 ,heightfinal/ 1.30)
ctx.lineTo(widthfinal/ 1.38 ,heightfinal/1.280)
ctx.lineTo(widthfinal/ 1.381 ,heightfinal/1.280)
ctx.lineTo(widthfinal/  1.35,heightfinal/1.25)
ctx.lineTo(widthfinal/ 1.32 ,heightfinal/1.23)
ctx.lineTo(widthfinal/1.31  ,heightfinal/1.22)
ctx.lineTo(widthfinal/ 1.28 ,heightfinal/1.210 )
ctx.lineTo(widthfinal/1.25  ,heightfinal/1.17)
ctx.lineTo(widthfinal/ 1.23 ,alturagradiente)
ctx.stroke()
ctx.fill()

ctx.beginPath(); 
ctx.lineWidth=1
ctx.strokeStyle = "#595959";
ctx.moveTo(widthfinal/1.435  ,heightfinal/ 1.33);
ctx.lineTo(widthfinal/1.436  ,heightfinal/1.31 )
ctx.lineTo(widthfinal/1.428  ,heightfinal/1.29)
ctx.lineTo(widthfinal/1.424  ,heightfinal/1.270)
ctx.lineTo(widthfinal/1.436  ,heightfinal/1.24)
ctx.lineTo(widthfinal/ 1.440 ,heightfinal/1.22)
ctx.lineTo(widthfinal/1.445  ,heightfinal/1.204)
ctx.lineTo(widthfinal/1.457  ,heightfinal/1.17)
ctx.lineTo(widthfinal/1.47  ,alturagradiente)
ctx.stroke()

ctx.beginPath(); 
ctx.strokeStyle = "#737373";
ctx.fillStyle="#a5958d" // MONTAÑA 3
ctx.lineWidth = 3;
ctx.moveTo(widthfinal/ 1.44 , alturagradiente);
ctx.lineTo(widthfinal/ 1.36 ,heightfinal/1.210 )
ctx.lineTo(widthfinal/ 1.35 ,heightfinal/1.22)
ctx.lineTo(widthfinal/ 1.32,heightfinal/1.24)
ctx.lineTo(widthfinal/ 1.3,heightfinal/1.25)
ctx.lineTo(widthfinal/ 1.28 ,heightfinal/1.27)
ctx.lineTo(widthfinal/ 1.24 ,heightfinal/1.35  )
ctx.lineTo(widthfinal/ 1.23,heightfinal/1.369)
ctx.lineTo(widthfinal/ 1.224,heightfinal/ 1.39 )
ctx.lineTo(widthfinal/ 1.20,heightfinal/1.4375)
ctx.lineTo(widthfinal/ 1.199 ,heightfinal/1.4375)
ctx.lineTo(widthfinal/ 1.190,heightfinal/1.424)
ctx.lineTo(widthfinal/ 1.17 ,heightfinal/ 1.39 )
ctx.lineTo(widthfinal/ 1.155 ,heightfinal/1.369)
ctx.lineTo(widthfinal/ 1.13,heightfinal/1.32)
ctx.lineTo(widthfinal/ 1.115,heightfinal/1.31 )
ctx.lineTo(widthfinal/ 1.09 ,heightfinal/1.27)
ctx.lineTo(widthfinal/ 1.07,heightfinal/1.25)
ctx.lineTo(widthfinal/ 1.05,heightfinal/1.210 )
ctx.lineTo(widthfinal,alturagradiente)
ctx.stroke()
ctx.fill()

ctx.beginPath();
ctx.strokeStyle = "#595959";
ctx.lineWidth = 1;
ctx.moveTo(widthfinal/ 1.351  ,heightfinal/1.22)
ctx.lineTo(widthfinal/ 1.358  ,heightfinal/1.210 )
ctx.moveTo(widthfinal/ 1.28  ,heightfinal/1.27)
ctx.lineTo(widthfinal/ 1.292  ,heightfinal/1.25)

ctx.moveTo(widthfinal/  1.20 ,heightfinal/1.435 )
ctx.lineTo(widthfinal/ 1.199  ,heightfinal/1.41)
ctx.lineTo(widthfinal/ 1.195  ,heightfinal/ 1.39 )
ctx.lineTo(widthfinal/  1.204   ,heightfinal/1.369)
ctx.lineTo(widthfinal/ 1.207  ,heightfinal/1.32)
ctx.lineTo(widthfinal/   1.201  ,heightfinal/1.29)
ctx.lineTo(widthfinal/   1.204,heightfinal/1.27)
ctx.lineTo(widthfinal/   1.207,heightfinal/1.24)
ctx.lineTo(widthfinal/  1.213 ,heightfinal/1.210 )
ctx.lineTo(widthfinal/  1.219 ,heightfinal/1.17)
ctx.lineTo(widthfinal/  1.230 ,alturagradiente)
ctx.moveTo(widthfinal/ 1.05  ,heightfinal/1.210 )
ctx.lineTo(widthfinal/ 1.04  ,heightfinal/1.19)
ctx.moveTo(widthfinal/  1.13 ,heightfinal/1.32)
ctx.lineTo(widthfinal/  1.125 ,heightfinal/1.31 )
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "#737373";
ctx.fillStyle="#9a877e"  // MONTAÑA 2
ctx.lineWidth = 3;
ctx.moveTo(widthfinal/2.94 , alturagradiente);
ctx.lineTo(widthfinal/2.47  ,heightfinal/1.21 )
ctx.lineTo(widthfinal/2.46 ,heightfinal/1.213)
ctx.lineTo(widthfinal/2.33  ,heightfinal/1.24)
ctx.lineTo(widthfinal/2.083  ,heightfinal/1.35 )
ctx.lineTo(widthfinal/ 2.032 ,heightfinal/1.36 )
ctx.lineTo(widthfinal/1.908  ,heightfinal/1.43 )
ctx.lineTo(widthfinal/1.901  ,heightfinal/ 1.43)
ctx.lineTo(widthfinal/1.78  ,heightfinal/ 1.39)
ctx.lineTo(widthfinal/ 1.779 ,heightfinal/ 1.39 )
ctx.lineTo(widthfinal/ 1.72 ,heightfinal/1.35  )
ctx.lineTo(widthfinal/ 1.66 ,heightfinal/1.31 )
ctx.lineTo(widthfinal/1.58  ,heightfinal/1.25)
ctx.lineTo(widthfinal/ 1.52 ,heightfinal/1.22)
ctx.lineTo(widthfinal/ 1.47 ,heightfinal/1.19 )
ctx.lineTo(widthfinal/ 1.39 ,alturagradiente)
ctx.stroke()
ctx.fill()

ctx.beginPath();
ctx.strokeStyle = "#595959";
ctx.lineWidth = 1;
ctx.moveTo(widthfinal/2.034 ,heightfinal/1.36)
ctx.lineTo(widthfinal/ 2.083 ,heightfinal/ 1.33)
ctx.moveTo(widthfinal/ 1.905 ,heightfinal/1.43 )
ctx.lineTo(widthfinal/  1.90,heightfinal/1.41)
ctx.lineTo(widthfinal/ 1.87,heightfinal/ 1.39 )
ctx.lineTo(widthfinal/ 1.851 ,heightfinal/1.35  )
ctx.lineTo(widthfinal/ 1.84,heightfinal/1.32)
ctx.lineTo(widthfinal/ 1.83,heightfinal/1.29)
ctx.lineTo(widthfinal/1.83,heightfinal/1.27)
ctx.lineTo(widthfinal/1.85 ,heightfinal/1.24)
ctx.lineTo(widthfinal/ 1.86,heightfinal/1.22)
ctx.lineTo(widthfinal/1.88,heightfinal/1.21)
ctx.lineTo(widthfinal/1.92 ,heightfinal/1.17)
ctx.lineTo(widthfinal/ 1.91 ,alturagradiente)
ctx.moveTo(widthfinal/ 1.78,heightfinal/1.39)
ctx.lineTo(widthfinal/1.76 ,heightfinal/1.37)
ctx.moveTo(widthfinal/ 1.52,heightfinal/1.22)
ctx.lineTo(widthfinal/ 1.50,heightfinal/1.204)
ctx.stroke()


}
function drawGrass2(x, y, height) {
	ctx.strokeStyle = '#39ac73'; // Color del césped (verde)
	ctx.lineWidth = 1; // Ancho de línea

	ctx.beginPath();
	ctx.moveTo(x, y);

	// Calcular los puntos de control para la curva cuadrática
	const controlX = x + $fx.rand() * 20 - 10; // Variación aleatoria en la posición X
	const controlY = y - height / 2; // Control Y en el medio de la línea

	// Punto final de la curva
	const endX = x;
	const endY = y - height;

	// Dibujar la curva cuadrática
	ctx.quadraticCurveTo(controlX, controlY, endX, endY);
	ctx.stroke();

	// Agregar una esfera al azar en la punta de algunas hierbas
	// Cambia el valor para controlar la cantidad de esferas
		const sphereRadius = $fx.rand()*4+1; // Radio de la esfera
		ctx.fillStyle = coloresferas; // Color de la esfera (puedes cambiarlo)
		ctx.beginPath();
		ctx.strokeStyle ="gray"
		ctx.arc(endX, endY, sphereRadius, 0, Math.PI * 2);
		ctx.stroke()
		ctx.fill();
	
}

//
for(i=0; i<=6;i++){
	var xtree2=Math.floor(($fx.rand() * (minxtree2 - cien)) + cien)
	drawBranch2(xtree2, height, 40, startAngle)
}

// Configuración de las hierbas
const numGrass = 50; // Número de hierbas
const maxHeight = 100; // Altura máxima de las hierbas
const minHeight = 50; // Altura mínima de las hierbas

// Dibujar múltiples líneas de hierba con curva cuadrática y esferas al azar
for (let i = 0; i < numGrass; i++) {
	const x = $fx.rand() * width// Posición horizontal aleatoria
	const y = canvas.height; // Comienza desde la parte inferior del canvas
	const height = $fx.rand() * (maxHeight - minHeight) + minHeight; // Altura aleatoria

	drawGrass2(x, y, height);
}
drawBranch4(xtree4,height,sizetree4,startAngle)
setTimeout(function () {
	function drawGrass(x, y) {
		ctx.beginPath();
		ctx.lineCap = "butt"
		ctx.shadowColor = "none"
		ctx.shadowOffsetX = 0
		ctx.shadowOffsetY = 0
		ctx.shadowBlur = 0
		ctx.moveTo(x, y);

		var controlX = x + ($fx.rand() - 0.5) * 100; // Control X aleatorio para la curva
		var controlY = y - grassHeight / 2; // Control Y para la curva

		var endX = x; // Extremo X de la curva (misma posición que el inicio)
		var endY = y - grassHeight; // Extremo Y de la curva

		ctx.quadraticCurveTo(controlX, controlY, endX, endY);
		ctx.lineWidth = anchocesped

		ctx.strokeStyle = colorfinalgrass;
		ctx.stroke();
	}
	var grassDensity = 1500;
	var grassSpacing = 2// width / (grassDensity - 1);
	for (var i = 0; i < grassDensity; i++) {
		var anchocesped = Math.ceil($fx.rand() * 2);
		var colorsnum2 = [grassColor2, grassColor]
		var colorfinalgrass = colorsnum2[Math.floor($fx.rand() * colorsnum2.length)]
		var grassHeight = Math.floor(($fx.rand() * (100 - 50)) + 50)
		var grassX = i * grassSpacing;
		var grassY = height;
		drawGrass(grassX, grassY);
	}
	
	
	for (let i = 0; i < numGrass; i++) {
	const x = $fx.rand() * width // Posición horizontal aleatoria
	const y = canvas.height; // Comienza desde la parte inferior del canvas
	const height = $fx.rand() * (maxHeight - minHeight) + minHeight; // Altura aleatoria

	drawGrass2(x, y, height);
	
}
for(i=0; i<=6;i++){
	var xtree3=Math.floor(($fx.rand() * (minxtree2 - cien)) + cien)
	var xarbol3=Math.floor(($fx.rand() * (minxtree2 - cien)) + cien)
	drawBranch2(xtree3, heightfinal, 40, startAngle)
	drawBranch3(xarbol3, heightfinal, 40, startAngle)
}
for(i=0; i<=10;i++){
var xarbol3=Math.floor(($fx.rand() * (minxtree2 - cien)) + cien)
	drawBranch3(xarbol3, heightfinal, 40, startAngle)
}

	generarNieve()
	nieve2()
	patronfondo()
	;

	// Añadir ruido para un toque vintage adicional

	marco()

}, 500)


function patronfondo() {
	ctx.globalAlpha = 0.09
	var patternSize = 20;
	var patternCanvas = document.createElement("canvas");
	patternCanvas.width = patternSize;
	patternCanvas.height = patternSize;
	var patternCtx = patternCanvas.getContext("2d");
	patternCtx.fillStyle = "#ede6d6";
	patternCtx.fillRect(0, 0, patternSize, patternSize);
	patternCtx.fillStyle = "#d3c3aa";
	patternCtx.fillRect(0, 0, patternSize / 2, patternSize / 2);
	patternCtx.fillStyle = "#eae1cc";
	patternCtx.fillRect(patternSize / 2, patternSize / 2, patternSize / 2, patternSize / 2);
	var pattern = ctx.createPattern(patternCanvas, "repeat");
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, width, height);

	// Aplicar efecto de envejecimiento
	ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
	ctx.fillRect(0, 0, width, height);


}

function marco() {
	ctx.beginPath()
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0
	ctx.shadowBlur = 5
	ctx.globalAlpha = 1;
	ctx.strokeStyle = "white"
	ctx.lineWidth = 50
	ctx.shadowBlur = 0
	ctx.moveTo(0, 0)
	ctx.lineTo(0, height)
	ctx.lineTo(width, height)
	ctx.lineTo(width, 0)
	ctx.lineTo(0, 0)
	ctx.stroke()

}

var download = function () {
	var img = document.createElement('a')
	img.download = 'First-Snow-In-La-Invernada.png';
	img.href = document.getElementById('canvas').toDataURL()
	img.click()
}

document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	if (code === 'KeyS') {
		this.download();
	}
}, false);

