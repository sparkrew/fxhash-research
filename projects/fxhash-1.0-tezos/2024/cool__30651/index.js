
    var f = new FontFace('BlockZone', 'url(./BlockZone.ttf)');

	var canvas = document.getElementById('cool');
	var ctx = canvas.getContext('2d');

	var font = "BlockZone"; 

	var text = ["0","▓","▒","░","Æ","☻","☺","◘","◙","♫","♪","◄","►","▼","↕","⌂","╬","╠","╟","╤","╢","╣","╔","╤","╖","╦","╩","║","╝","▌","▀","▄","█","[","{","¶","Ω","}","∞","~","ß","≈","*","°","#","♀","♂","☼","π","Σ","&","@","∞","♣","♦","δ","α"];
	var text1 = ["cool","▓","▒","░","Æ","☻","☺","◘","◙","♫","♪","◄","►","▼","↕","⌂","╬","╠","╟","╤","╢","╣","╔","╤","╖","╦","╩","║","╝","▌","▀","▄","█","[","{","¶","Ω","}","∞","~","ß","≈","*","°","#","♀","♂","☼","π","Σ","&","@","∞","♣","♦","δ","α"];

	var text_1 = text[Math.floor($fx.rand() * 57)], text_2 = text[Math.floor($fx.rand() * 57)], text_3 = text[Math.floor($fx.rand() * 57)], text_4 = text1[Math.floor($fx.rand() * 57)], text_5 = text[Math.floor($fx.rand() * 57)], text_6 = text[Math.floor($fx.rand() * 57)], text_7 = text[Math.floor($fx.rand() * 57)], text_8 = text[Math.floor($fx.rand() * 57)];

	var size1 = Math.floor($fx.rand() * 80) + 340, size3 = Math.floor($fx.rand() * 140) + 460, size4 = Math.floor($fx.rand() * 110) + 460, size5 = Math.floor($fx.rand() * 140) + 460, size6 = Math.floor($fx.rand() * 90) + 2800;

	var positions = { eye1: { x: 680, y: 860 }, eye2: { x: 1120, y: 860 }, nose: { x: 900, y: 1000 }, teeth: { x: 900, y: 1260 }, left: { x: 20, y: 1300 }, top: { x: 900, y: 420 }, right: { x: 1780, y: 1300 }, big: { x: 1000, y: 1760 } };
	
	var text_load = [text_1 + text_2 + text_7 + text_8 + text_4 + text_3 + text_5 + text_6];

	f.load().then(function() {
    ctx.beginPath();
    ctx.rect(0, 0, 1800, 1800);
    ctx.fillStyle = "#000000"; //background
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffff";

    ctx.font = size3 + "px '" + font + "'"; ctx.textAlign = "left"; ctx.strokeText(text_3, positions.left.x, positions.left.y); //Left
    ctx.font = size4 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_4, positions.top.x, positions.top.y); //Top
    ctx.font = size5 + "px '" + font + "'"; ctx.textAlign = "right"; ctx.strokeText(text_5, positions.right.x, positions.right.y); //Right
    ctx.font = size6 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_6, positions.big.x, positions.big.y); //big

    ctx.font = size1 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_1, positions.eye1.x, positions.eye1.y); //eye1
    ctx.font = size1 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_2, positions.eye2.x, positions.eye2.y); //eye2
    ctx.font = size1 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_7, positions.nose.x, positions.nose.y); //nose
    ctx.font = size1 + "px '" + font + "'"; ctx.textAlign = "center"; ctx.strokeText(text_8, positions.teeth.x, positions.teeth.y); //teeth
	
	}).catch(function(error) {
    console.error('Font loading error:', error);
	});
	
	
	const downloadButton = document.getElementById("download-button");
	
    downloadButton.addEventListener("click", function() {
    const link = document.createElement("a");
    link.download =text_load +  ".png";
    link.href = canvas.toDataURL();
    link.click();
    });
    
	let buttonVisible = false;
	canvas.addEventListener("click", function() {
  	buttonVisible = !buttonVisible;
  	downloadButton.style.display = buttonVisible ? "block" : "none";
	});
	

	$fx.features({
	"eye 1"			: text_1,
	"eye 2"			: text_2,
	"nose"			: text_7,
	"teeth"			: text_8,
	"top"			: text_4,
	"left"			: text_3,
	"right"			: text_5,
	"big"			: text_6,
	})
	