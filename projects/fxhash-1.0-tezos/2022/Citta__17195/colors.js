let transmitterStyles = ["Circular","Chatra","Galactic","Elliptic"];

let gradientPalettes = [
    {
        top: ["#cafa0a","#fa8a0a","#fa0a52"],
        right : ["#eb059e","#e14aff","#454444"],
        left : ["#05ebdb","#0546eb","#bd05eb"],
    },
    {
        top: ["#d21a","#facc0a","#aa0a52"],
        right : ["#aa22cd","#e14aff","#4a4"],
        left : ["#05e","#05aaab","#bd0500"],
    }
]

let domainPalettes = [{top:{hue1:40,hue2:40,satMin:9,satMax:40,brightMin:100,brightMax:100},
                       right:{hue1:20,hue2:40,satMin:80,satMax:40,brightMin:60,brightMax:20},
                       left: {hue1:20,hue2:40,satMin:100,satMax:100,brightMin:60,brightMax:100},
                       triangle:{top:220,right:200,left:200,sat:80,bri:20},
                       name:"TerraCota"},
                       {top:{hue1:255,hue2:10,satMin:50,satMax:20,brightMin:50,brightMax:100},
                       right:{hue1:125,hue2:200,satMin:100,satMax:10,brightMin:10,brightMax:60},
                       left: {hue1:125,hue2:200,satMin:60,satMax:40,brightMin:40,brightMax:100},
                       triangle:{top:60,right:60,left:20,sat:-20,bri:-10},
                       name:"Steel"},
                       
                       {top:{hue1:300,hue2:340,satMin:40,satMax:80,brightMin:10,brightMax:100},
                       right:{hue1:300,hue2:340,satMin:80,satMax:40,brightMin:60,brightMax:20},
                       left: {hue1:300,hue2:340,satMin:60,satMax:40,brightMin:60,brightMax:100},
                       triangle:{top:60,right:190,left:190,sat:20,bri:10},
                       name:"Stellar Pink"},
                       {top:{hue1:200,hue2:240,satMin:40,satMax:80,brightMin:10,brightMax:100},
                       right:{hue1:200,hue2:240,satMin:80,satMax:40,brightMin:60,brightMax:20},
                       left: {hue1:200,hue2:240,satMin:60,satMax:40,brightMin:60,brightMax:100},
                       triangle:{top:60,right:20,left:20,sat:-20,bri:-20},
                       name:"Quartz"},
                       {top:{hue1:0,hue2:360,satMin:0,satMax:100,brightMin:100,brightMax:10},
                       right:{hue1:0,hue2:360,satMin:100,satMax:10,brightMin:10,brightMax:60},
                       left: {hue1:0,hue2:360,satMin:60,satMax:40,brightMin:40,brightMax:100},
                       triangle:{top:60,right:60,left:20,sat:-20,bri:-10},
                       name:"Rainbow"},
                     ]

let monoDomainPalettes = [ {top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:80,brightMax:30},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:40,brightMax:0},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:80,brightMax:20},
triangle:{top:60,right:0,left:0,sat:-60,bri:-10},
name:"Mono1"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:45,left:45,sat:-60,bri:-40},
name:"Mono2"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:125,left:125,sat:-60,bri:-40},
name:"Mono3"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:165,left:165,sat:-60,bri:-40},
name:"Mono4"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:225,left:225,sat:-60,bri:-40},
name:"Mono5"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:285,left:285,sat:-60,bri:-40},
name:"Mono6"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:285,left:285,sat:100,bri:100},
name:"Mono7"},
{top:{hue1:255,hue2:10,satMin:0,satMax:0,brightMin:30,brightMax:80},
right:{hue1:125,hue2:200,satMin:0,satMax:0,brightMin:0,brightMax:40},
left: {hue1:125,hue2:200,satMin:0,satMax:0,brightMin:20,brightMax:80},
triangle:{top:60,right:285,left:285,sat:100,bri:-100},
name:"Mono8"}

]



let DepthMaskColors = [
    {c1:[20,100,80,0.01,0.1],c2:[170,100,80,0.01,0.7],c3:[200,100,100,0.01,1]},
    {c1:[120,100,80,0.01,0.1],c2:[260,100,80,0.01,0.4],c3:[260,100,100,0.01,1]}
]

let DepthColors = [
    { name:"Radioactive",c1:[33,100,10,0.1],c2:[120,100,100,0.5],c3:[50,100,90,1]},
    { name:"Spectral",c1:[150,100,100,0.1],c2:[10,100,100,0.5],c3:[50,100,90,1]},
    { name:"Ultraviolet",c1:[250,100,50,0.1],c2:[300,100,100,0.9],c3:[100,100,90,1]},
    { name:"Electromagnetic",c1:[200,100,50,0.1],c2:[190,100,100,0.9],c3:[260,10,90,1]},
    { name:"Infrared",c1:[0,100,100,0.1],c2:[0,100,100,0.9],c3:[330,100,90,1]},
    { name:"Solar",c1:[45,100,100,0.1],c2:[50,100,100,0.9],c3:[45,100,90,1]},
    { name:"White Noise",c1:[45,0,100,0.1],c2:[50,0,100,0.9],c3:[45,0,90,1]},
]

let AntennaColors = [
    {name:"Orange",c1:[0,100,100,0.1],c2:[10,100,100,0.5],c3:[10,100,90,1]},
    {name:"Teal",c1:[150,100,100,0.1],c2:[160,100,100,0.5],c3:[120,100,90,1]},
    {name:"Pink",c1:[250,10,100,0.5],c2:[300,100,100,0.9],c3:[250,100,90,1]},
    {name:"Green",c1:[40,100,50,0.1],c2:[90,100,100,0.9],c3:[90,10,90,1]},
    {name:"Purple",c1:[250,10,100,0.5],c2:[250,100,100,0.9],c3:[250,100,90,1]},
    {name:"White",c1:[300,0,100,0.5],c2:[220,0,100,0.9],c3:[250,0,90,1]},
]

let radialDepthMaskColors = [
    {c1:[220,100,100,0.1],c2: [270,100,100,0.5], c3:[320,100,100,1] },
    {c1:[220,10,100,0.1],c2: [220,100,100,0.4], c3:[80,70,97,1] }
]

let RadialGradientPosSettings = [{
    opacity: 0.08,
    x1: 600,
    y1: 800,
    firstSize: 1950,
    x2: 600,
    y2: 800,
    secondSize: 100,
    circlePosX: 300,
    circlePosY: 700
  },
  {
    opacity: 0.005,
    x1: 400,
    y1: 100,
    firstSize: 1900,
    x2: 400,
    y2: 100,
    secondSize: 300,
    circlePosX: 800,
    circlePosY: 300
  },
  {
    opacity: 0.05,
    x1: 800,
    y1: 800,
    firstSize: 1900,
    x2: 800,
    y2: 800,
    secondSize: 400,
    circlePosX: 800,
    circlePosY: 800
  }
  ]

//original
                    // let domainPalettes = [{top:{hue1:60,hue2:300,satMin:10,satMax:50,brightMin:70,brightMax:70},
                    //     right:{hue1:60,hue2:300,satMin:0,satMax:0,brightMin:40,brightMax:26},
                    //     left: {hue1:60,hue2:300,satMin:0,satMax:0,brightMin:20,brightMax:100}},
                    //     {top:{hue1:25,hue2:55,satMin:60,satMax:40,brightMin:90,brightMax:100},
                    //     right:{hue1:20,hue2:50,satMin:100,satMax:100,brightMin:20,brightMax:60},
                    //     left: {hue1:0,hue2:0,satMin:60,satMax:60,brightMin:40,brightMax:100}}
                    //  ]