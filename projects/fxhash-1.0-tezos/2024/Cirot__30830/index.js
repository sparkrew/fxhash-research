//Copyrighted by AItezoart. Do not use without permission.
document.addEventListener('DOMContentLoaded', function() {

    var canvas = document.getElementById("AItezoart");
    var ctx = canvas.getContext("2d");
    canvas.width = 2000;
    canvas.height = 2000;

    var x = 0; 
    var y = 0; 
    var initialDiameter = Math.floor(5 * $fx.rand()) * 5 + 5; 
    var circleTransparency = 1; 
    var shadowColor = "black"; 
    var shadowTransparency = 0.5; 
    var borderColor = "red"; 
    var borderWidth = 2; 
    var borderTransparency = 1; 
    var numCircles = 10; 

    console.log("initialDiameter = ", initialDiameter);

    function drawCircle(context, x, y, diameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency) {

        context.beginPath();
        context.arc(x, y, diameter / 2, 0, 2 * Math.PI);
        context.closePath();
    
        context.fillStyle = circleColor;
        context.globalAlpha = circleTransparency;
        context.fill();
    
     
        context.shadowColor = shadowColor;
        context.shadowBlur = 10;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
    
     
        context.beginPath();
        context.arc(x, y, diameter / 2, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    
      
        context.shadowColor = 'rgba(0,0,0,0)';
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    
     
        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;
        context.globalAlpha = borderTransparency;
    
    
        context.stroke();
    }

    function drawConcentricCircles(context, x, y, initialDiameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency, numCircles) {
        var diameter = initialDiameter;
        for (var i = 0; i < numCircles; i++) {
            drawCircle(context, x, y, diameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency);
            diameter *= 0.9; 
        }
    }

    function drawAnimatedCircle(xCoord, yCoord, diameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency) {
        var i = 0;
        var interval = setInterval(function() {
            if (i >= numCircles) {
                clearInterval(interval);
            } else {
                drawCircle(ctx, xCoord, yCoord, diameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency);
                diameter *= 0.9;
                i++;
            }
        }, 100); 
    }

    for (var i = 0; i < canvas.width / initialDiameter; i++) {
        var yCoord = y + i * initialDiameter * 2;
        for (var j = 0; j < canvas.width / initialDiameter; j++) {
            var xCoord = x + j * initialDiameter * 2;
            if (Math.random() * 10 > 3) {
                var circleColor = "red";
                var borderColor = "red";
                drawAnimatedCircle(xCoord, yCoord, initialDiameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency);
            } else {
                var circleColor = "white";
                var borderColor = "black";
                drawAnimatedCircle(xCoord, yCoord, initialDiameter, circleColor, circleTransparency, shadowColor, shadowTransparency, borderColor, borderWidth, borderTransparency);
            }
        }
    }
    $fx.preview ();

    console.log($fx.rand());
    console.log(5*$fx.rand());
    console.log(Math.floor(5*$fx.rand()));
    
    var rarity=Math.floor(10*$fx.rand());
    
    console.log("Rarity = ", rarity);
    window.$fxhashFeatures = {
     "Rarity":  rarity
    }
    
    
});
