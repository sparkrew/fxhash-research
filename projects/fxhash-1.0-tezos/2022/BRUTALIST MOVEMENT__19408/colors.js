// © 2022 Gábor Réthi (cloudnoise) <cloudnoise@gmail.com>

const colors = {
	"black"		: {
		"name"	: "Black",
		"color" : "#000000"
	},
	"white"		: {
		"name"	: "White",
		"color" : "#ffffff"
	},
	"blue"		: {
		"name"	: "Blue",
		"color" : "#0000ff"
	},
	"red"		: {
		"name"	: "Red",
		"color" : "#ff0000"
	},
	"yellow"	: {
		"name"	: "Deep Lemon",
		"color" : "#eec51b"
	},
	"green"	: {
		"name"	: "Hippie Green",
		"color" : "#3b7e4a"
	},
	"fblack"	: {
		"name"	: "Thunder",
		"color" : "#222022"
	},
	"fred"	: {
		"name"	: "Flame Pea",
		"color" : "#e15d3f"
	},
	"fblue"	: {
		"name"	: "Steel Blue",
		"color" : "#5a86ba"
	},
	"fyellow"	: {
		"name"	: "Straw",
		"color" : "#d0dc71"
	},
	"fpurple"	: {
		"name"	: "Purple Haze",
		"color" : "#40318d"
	},
	"c64lblue"	: {
		"name"	: "Neptune",
		"color" : "#79bfc7"
	},
	"c64blue"	: {
		"name"	: "Blueberry",
		"color" : "#3e31a2"
	},
	"c64mblue"	: {
		"name"	: "Moody Blue",
		"color" : "#7c70da"
	},
	"c64purple"	: {
		"name"	: "Deep Lavender",
		"color" : "#8d47b3"
	},
	"noirdgray"	: {
		"name"	: "Vampire Grey",
		"color" : "#4f4f4f"
	},
	"noirlgray"	: {
		"name"	: "Gunsmoke",
		"color" : "#898989"
	},
	"macskyblue"	: {
		"name"	: "Cerulean",
		"color" : "#00ace8"
	},
	"macpurple"	: {
		"name"	: "Indigo",
		"color" : "#4800a4"
	},
	"macpink"	: {
		"name"	: "Deep Pink",
		"color" : "#f00884"
	},
	"macorange"	: {
		"name"	: "Blaze Orange",
		"color" : "#ff6404"
	}
}


const palettes = [
	{
		"name" : "Signature",
		"sets" : [
			{
				"sky" 		: colors.blue,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.red
			},
			{
				"sky" 		: colors.black,
				"sun" 		: colors.white,
				"shadow"	: colors.blue,
				"window"	: colors.red
			},
			{
				"sky" 		: colors.red,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.blue
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.red,
				"shadow"	: colors.black,
				"window"	: colors.blue
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.blue,
				"shadow"	: colors.black,
				"window"	: colors.red
			},
			{
				"sky" 		: colors.blue,
				"sun" 		: colors.red,
				"shadow"	: colors.black,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.blue,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.red
			}
		]
	},
	{
		"name" : "Signature Plus",
		"sets" : [
			{
				"sky" 		: colors.yellow,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.red
			},
			{
				"sky" 		: colors.yellow,
				"sun" 		: colors.red,
				"shadow"	: colors.black,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.yellow,
				"sun" 		: colors.blue,
				"shadow"	: colors.black,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.blue,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.yellow
			},
			{
				"sky" 		: colors.red,
				"sun" 		: colors.yellow,
				"shadow"	: colors.black,
				"window"	: colors.blue
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.yellow,
				"shadow"	: colors.black,
				"window"	: colors.blue
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.red,
				"shadow"	: colors.black,
				"window"	: colors.yellow
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.blue,
				"shadow"	: colors.black,
				"window"	: colors.yellow
			}
		]
	},
	{
		"name" : "Comodo",
		"sets" : [
			{
				"sky" 		: colors.c64mblue,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.c64blue
			},
			{
				"sky" 		: colors.c64mblue,
				"sun" 		: colors.white,
				"shadow"	: colors.c64blue,
				"window"	: colors.c64lblue
			},
			{
				"sky" 		: colors.c64blue,
				"sun" 		: colors.c64mblue,
				"shadow"	: colors.black,
				"window"	: colors.white
			}
		]
	},
	{
		"name" : "Cloud Noir",
		"sets" : [
			{
				"sky" 		: colors.black,
				"sun" 		: colors.noirlgray,
				"shadow"	: colors.noirdgray,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.black,
				"sun" 		: colors.white,
				"shadow"	: colors.noirdgray,
				"window"	: colors.noirlgray
			},
			{
				"sky" 		: colors.noirlgray,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.noirdgray
			},
			{
				"sky" 		: colors.noirlgray,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.noirdgray
			},
			{
				"sky" 		: colors.noirdgray,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.noirlgray
			}
		]
	},
	{
		"name" : "Tosh Two",
		"sets" : [
			{
				"sky" 		: colors.macpink,
				"sun" 		: colors.white,
				"shadow"	: colors.black,
				"window"	: colors.macskyblue
			},
			{
				"sky" 		: colors.macpink,
				"sun" 		: colors.macskyblue,
				"shadow"	: colors.black,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.macorange,
				"sun" 		: colors.white,
				"shadow"	: colors.macpurple,
				"window"	: colors.macskyblue
			},
			{
				"sky" 		: colors.macorange,
				"sun" 		: colors.macskyblue,
				"shadow"	: colors.black,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.macskyblue,
				"sun" 		: colors.white,
				"shadow"	: colors.macpurple,
				"window"	: colors.macpink
			},
			{
				"sky" 		: colors.black,
				"sun" 		: colors.macskyblue,
				"shadow"	: colors.macpurple,
				"window"	: colors.macpink
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.macskyblue,
				"shadow"	: colors.macpurple,
				"window"	: colors.macorange
			},
			{
				"sky" 		: colors.red,
				"sun" 		: colors.macskyblue,
				"shadow"	: colors.macpurple,
				"window"	: colors.white
			}
		]
	},
	{
		"name" : "Station",
		"sets" : [
			{
				"sky" 		: colors.fblack,
				"sun" 		: colors.white,
				"shadow"	: colors.fblue,
				"window"	: colors.fred
			},
			{
				"sky" 		: colors.fblue,
				"sun" 		: colors.fred,
				"shadow"	: colors.fblack,
				"window"	: colors.white
			},
			{
				"sky" 		: colors.white,
				"sun" 		: colors.fred,
				"shadow"	: colors.fblack,
				"window"	: colors.fblue
			}
			
		]
	}
];

