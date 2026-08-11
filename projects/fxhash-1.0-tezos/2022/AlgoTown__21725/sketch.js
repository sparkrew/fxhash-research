var canvasSize;
var ratio;
var scaleset;
var colorset,dis;
var colorsets=[
  [
  [46, 30, 94],
  [34, 21, 76],
  [19, 48, 76],
  [10, 49, 66],
  [185, 14, 65]
  ],
  [
  [214, 32, 42],
  [185, 8, 56],
  [30, 34, 98],
  [30, 29, 85],
  [30, 6, 65]
  ],
  [
  [28, 45, 95],
  [22, 31, 75],
  [16, 98, 25],
  [16, 70, 85],
  [0, 98, 15]
  ],
  [
  [46, 20, 94],
  [44, 14, 72],
  [359, 44, 84],
  [97, 21, 56],
  [214, 5, 26]
  ] 
]
    
var vertexs=[
[-10,-10],
[0,-20],
[10, -10],
[10,10],
[-10,10]
];
var dis;

function setup() {
  canvasSize=min(windowWidth,windowHeight);
  ratio=canvasSize/800;
  scaleset=fxrand()+1;  
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB,360,100,100);
  colorset=colorsets[floor(fxrand()*colorsets.length)];
  dis=floor(fxrand()*20)+2;
  console.log(fxhash);

  
  background(colorset[4]);

}

function draw() {
    translate(canvasSize/2,canvasSize/2);
    scale(scaleset);
    strokeWeight(3*ratio);

    noLoop();
    for( var k=0;k<16;k++){
      for (var j = 0; j < 40; j ++) {
          push();
          var x=((j+1)/41-0.5)*canvasSize;
          var y=((k+1)/16-0.5)*canvasSize;
        
          translate(x, y);
          var coloridx=floor(fxrand()*4);
          fill(colorset[coloridx]);
          if((j+k)%dis!=0){ 
            beginShape();
            var housebuilding = -fxrand() * 30*ratio;
            for (var i = 0; i < vertexs.length; i++) {
                var h = 0;
                var building = 0;
                if (i >= 0 && i <= 2) {
                    building = housebuilding;
                } else {
                    building = 0;
                };
                if (i == 1) {
                    h = (fxrand() * 20 - 10)*ratio;
                }
                vertex(vertexs[i][0]*ratio , vertexs[i][1]*ratio + h +building);
            }  
            endShape(CLOSE);
          }
          pop();
      }
    }

    
}
