var glitchText = 10
var rotateXValue = 0
var rotateYValue = 0
var cameraX = 0
var cameraY = 0
var ko = 1

var col = rnd(0, 400)
var col1 = rnd(0, 400)



var vx = rnd(0, 70)
var vy = rnd(-45, 45)

var rectangles = [];
ellipsew = 660
ellipseh = 360

var sc = rnd(-5 * 55, 5 * 55)
var scy = rnd(-2 * 60, 2 * 60)


var xt = rnd(-380, -50)
var yt = rnd(-120, 120)


var x1t = rnd(-380, -50)
var y1t = rnd(-120, 120)


var x11t = rnd(-380, -50)
var y11t = rnd(-120, 120)


var x21t = rnd(-380, -50)
var y21t = rnd(-120, 120)

var ss = rnd(-60, 80)

var variation = rnd(0, 140)

var cl

function mousePressed() {
  cl = true;
}

function setup() {
  createCanvas(1600, 1600, WEBGL);
  angleMode(DEGREES)
  generateRectangles();
}

function draw() {








  background(255);
  ambientLight(250, 250, 250);
  directionalLight(80, 80, 80, 0, 0, -1);



  if (variation < 100) {
    var bb = 20
  }
  if (variation > 100) {
    var bb = 10
  }

  translate(0, 0, -ss * bb)


  normalMaterial();

  if (cl == true) {
    if (keyIsDown(87)) {
      cameraX += bb * ko;
      cameraY += 0;
    }
    if (keyIsDown(83)) {
      cameraX -= bb * ko;
      cameraY -= 0;
    }
    if (keyIsDown(65)) {
      cameraX -= 0;
      cameraY -= bb * ko;
    }
    if (keyIsDown(68)) {
      cameraX -= 0;
      cameraY -= -bb * ko;
    }


    translate(-cameraY, (cameraY + cameraX) / 20, cameraX)

    rotateX(rotateXValue)




    rotate(-rotateYValue)
  } else {
    rotateX(vx)
    rotate(vy)
    rotate(frameCount / 2)
  }
  var s = 0
  stroke(s)
  fill(s)

  strokeWeight(0)

  if (variation > 0 & variation < 100) {
    push()
    translate(0, 0, -140)
    fill("#3D0C11")
    box(800 * 2.8, 600 * 2.8, 300)
    pop()

    push()
    fill("#004225")
    translate(0, 0, 12)
    for (p = 0; p < 20; p++) {
      translate(0, 0, -2)
      ellipsoid(500, 500, 2)
    }
    pop()


    stroke(180)
  }

  if (variation > 100 & variation < 200) {
    push()
    translate(0, 0, -150)
    fill("#3D0C11")
    box(800 * 1.8, 600 * 1.8, 300)
    pop()
    stroke(180)
  }





  if (variation < 100) {
    if (col < 100) {
      var zm1 = "#136d15"
      var zm2 = "#41980a"
      var st1 = "#DAFFFB"
      var st2 = "#04364A"
      var pp1 = "#265073"
      var pp2 = "#AF2655"
      var nm1 = "#EA906C"
      var nm2 = "#B31312"
    }

    if (col > 100 & col < 200) {
      var zm1 = "#79155B"
      var zm2 = "#C23373"
      var st1 = "#EBE76C"
      var st2 = "#ED7B7B"
      var pp1 = "#F3FDE8"
      var pp2 = "#EBE76C"
      var nm1 = "#F3FDE8"
      var nm2 = "#B31312"
    }
    if (col > 200 & col < 300) {
      var zm1 = "#65451F"
      var zm2 = "#765827"
      var st1 = "#FFE5AD"
      var st2 = "#3E001F"
      var pp1 = "#F3FDE8"
      var pp2 = "#EBE76C"
      var nm1 = "#F3FDE8"
      var nm2 = "#3E001F"
    }
    if (col > 300 & col < 400) {
      var zm1 = "#4C4B16"
      var zm2 = "#898121"
      var st1 = "#F7F1E5"
      var st2 = "#4C4B16"
      var pp1 = "#F3FDE8"
      var pp2 = "#E7B10A"
      var nm1 = "#F3FDE8"
      var nm2 = "#3E001F"
    }







    var soccer = 1
    if (soccer < 100) {
      if (variation < 100) {

        push()
        stroke(0)
        translate(-7 * 55 - 55 / 2, 0, 10)

        for (i = 0; i < 14; i++) {
          if (i % 2 == 0) {
            fill(zm1)
          } else {
            fill(zm2)
          }
          strokeWeight(0)
          translate(55, 0, 0)
          box(55, 60 * 6, 5)
        }
        pop()



        var o = 1
        for (d = 0; d < 2; d++) {
          push()
          rotate(180 * d)
          if (o < 100) {
            push()

            translate(-6.5 * 55 - 5, 0, 4 * 8 - 2)
            fill(255)
            strokeWeight(3)
            stroke(255)

            push()
            translate(0, 4 * 7, -8)
            box(3, 3, 4 * 8)
            pop()
            push()
            translate(0, -4 * 7, -8)
            box(3, 3, 4 * 8)
            pop()
            push()
            translate(4 * 8, -4 * 7, 0)
            box(3, 3, 6 * 8)
            pop()
            push()
            translate(4 * 8, 4 * 7, 0)
            box(3, 3, 6 * 8)
            pop()

            noFill()

            beginShape()
            vertex(0, 4 * 7, 2 * 8 / 2)
            vertex(0, -4 * 7, 2 * 8 / 2)

            vertex(4 * 8, -4 * 7, 6 * 8 / 2)
            vertex(4 * 8, 4 * 7, 6 * 8 / 2)

            vertex(0, 4 * 7, 2 * 8 / 2)
            endShape()

            pop()
          }
          pop()

          push()
          rotate(180 * d)
          translate(-55 * 6 + 110 / 4, 0, 12)
          noFill()
          strokeWeight(3)
          stroke(255)
          box(110 / 2, 60 * 2, 2)
          push()
          translate(110 / 4, 0, 0)
          box(110 / 1, 60 * 3, 2)
          pop()
          pop()
          push()
          rotate(180 * d)
          translate(-55 * 4, 0, 13)
          strokeWeight(4)
          stroke(255)
          noFill()
          arc(0, 0, 55, 60, -90, 90)
          pop()
        }

        push()
        translate(0, 0, 12)
        noFill()
        strokeWeight(3)
        stroke(255)
        push()
        translate(-110 * 3 / 2, 0, 0)
        box(110 * 6 / 2, 60 * 5.9, 3)
        pop()
        push()
        translate(110 * 3 / 2, 0, 0)
        box(110 * 6 / 2, 60 * 5.9, 3)
        pop()
        pop()

        push()
        translate(0, 0, 14)
        strokeWeight(3)
        noFill()
        stroke(255)
        circle(0, 0, 20 * 6)
        fill(255)
        circle(0, 0, 1 * 6)
        pop()


        push()
        translate(-8 * 55, 0, 0)
        fill(255)
        for (p = 0; p < 123; p++) {
          translate(8 * 55, 0, -15)
          rotate(3)
          translate(-8 * 55, 0, 15)
          push()
          for (i = 0; i < 10; i++) {
            translate(-25, 0, 25)
            strokeWeight(8.5)
            fill(st1)
            stroke(st2)
            box(25, 60 * 6, 20)
          }
          pop()
        }
        pop()



        for (let r of rectangles) {
          push()
          if (r.w > 12.75) {
            var as = pp1
          } else {
            var as = pp2
          }





          stroke(as)
          fill(as)

          push()
          rotate(r.h)

          rectMode(CENTER)
          fill(255)
          translate(0, 0, 15)

          fill(0)
          push()
          beginShape()
          strokeWeight(3)
          vertex(r.x - r.w / 2, r.y + r.h / 2)
          vertex(r.x, r.y, r.h / 2)
          endShape()
          beginShape()
          strokeWeight(3)
          vertex(r.x + r.w / 2, r.y - r.h / 2)
          vertex(r.x, r.y, r.h / 2)
          endShape()



          beginShape()
          strokeWeight(3)
          vertex(r.x, r.y, r.h / 2)
          vertex(r.x, r.y, r.h * 1.5)
          endShape()
          pop()



          push()
          translate(0, 0, r.h * 3 / 4)
          beginShape()
          strokeWeight(3)
          vertex(r.x - r.w / 2, r.y + r.h / 2)
          vertex(r.x, r.y, r.h / 2)
          endShape()
          beginShape()
          strokeWeight(3)
          vertex(r.x + r.w / 2, r.y - r.h / 2)
          vertex(r.x, r.y, r.h / 2)
          endShape()
          pop()

          push()
          fill(as)
          translate(r.x, r.y, r.h * 1.5 + r.w / 4)
          ellipsoid(r.w / 4)

          pop()

          pop()
          pop()
        }







        push()

        translate(0, 0, 15)
        var x2 = 6 * 55
        var y2 = 0
        var w2 = 15
        var h2 = 15
        if (x2 > 40) {
          var as = pp1
        } else {
          var as = pp2
        }
        stroke(as)
        fill(as)
        beginShape()
        strokeWeight(3)
        vertex(x2 - w2 / 2, y2 + h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        beginShape()
        strokeWeight(3)
        vertex(x2 + w2 / 2, y2 - h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()


        stroke(as)
        fill(as)
        beginShape()
        strokeWeight(3)
        vertex(x2, y2, h2 / 2)
        vertex(x2, y2, h2 * 1.5)
        endShape()
        pop()



        push()
        stroke(as)
        fill(as)
        translate(0, 0, h2 * 7 / 4)
        beginShape()
        strokeWeight(3)
        vertex(x2 - w2 / 2, y2 + h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        beginShape()
        strokeWeight(3)
        vertex(x2 + w2 / 2, y2 - h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        pop()

        push()
        translate(x2, y2, h2 * 1.5 + w2)
        stroke(as)
        fill(as)
        ellipsoid(w2 / 4)

        pop()



        push()
        translate(0, 0, 15)
        var x2 = -6 * 55
        var y2 = 0
        var w2 = 15
        var h2 = 15
        if (x2 > 40) {
          var as = pp1
        } else {
          var as = pp2
        }
        stroke(as)
        fill(as)
        beginShape()
        strokeWeight(3)
        vertex(x2 - w2 / 2, y2 + h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        beginShape()
        strokeWeight(3)
        vertex(x2 + w2 / 2, y2 - h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()

        stroke(as)
        fill(as)

        beginShape()
        strokeWeight(3)
        vertex(x2, y2, h2 / 2)
        vertex(x2, y2, h2 * 1.5)
        endShape()
        pop()



        push()
        stroke(as)
        fill(as)
        translate(0, 0, h2 * 7 / 4)
        beginShape()
        strokeWeight(3)
        vertex(x2 - w2 / 2, y2 + h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        beginShape()
        strokeWeight(3)
        vertex(x2 + w2 / 2, y2 - h2 / 2)
        vertex(x2, y2, h2 / 2)
        endShape()
        pop()

        push()
        stroke(as)
        fill(as)
        translate(x2, y2, h2 * 1.5 + w2)
        ellipsoid(w2 / 4)

        pop()






        push()
        fill(30)
        translate(sc, scy, 5 + 12)
        ellipsoid(5)
        pop()






        push()
        for (i = 0; i < 6; i++) {
          rotate(190)
          push()
          translate(-3 * 55, -5 * 60, 20 + 7)
          noFill()

          strokeWeight(2)
          push()
          stroke(255)

          translate(0, 5, 0)

          strokeWeight(2)
          box(55, 30, 50)
          rectMode(CENTER)
          push()
          fill(nm1)
          translate(0, 0, 50 / 2)
          rect(0, 0, 55, 30)
          pop()
          pop()
          push()
          fill(nm2)
          translate(0, 25, 0)
          strokeWeight(0)
          box(55 / 1.2, 30 / 2, 40 / 8)
          pop()

          push()
          fill(nm2)
          translate(0, 16, 10)
          strokeWeight(0)
          box(55 / 1.2, 30 / 10, 20)
          pop()
          pop()
        }
        pop()

      }
    }

  }









  if (variation > 100) {
    if (col1 < 100) {
      var zm = "#B2533E"
      var tr1 = "#F5E8B7"
      var tn = "#FFFAD7"
      var st1 = 200
    }
    if (col1 > 100 & col1 < 200) {
      var zm = "#164B60"
      var tr1 = "#DAFFFB"
      var tn = "#E1ECC8"
      var st1 = "#3AA6B9"
    }
    if (col1 > 200 & col1 < 300) {
      var zm = "#17594A"
      var tr1 = "#8EAC50"
      var tn = "#C4D7B2"
      var st1 = "#D3D04F"
    }

    if (col1 > 300 & col1 < 400) {
      var zm = "#116D6E"
      var tr1 = "#ECF8F9"
      var tn = "#ECF8F9"
      var st1 = "#569DAA"
    }

    translate(0, 0, 15)
    fill(zm)
    noStroke()
    box(800, 400, 10)

    push()
    strokeWeight(6)
    stroke(255)
    box(800 / 4, 400 / 1.4, 19)
    pop()

    push()
    strokeWeight(6)
    stroke(255)
    box(800 / 1.1, 400 / 1.1, 11)
    push()
    translate(0, 0, 0)
    box(800 / 1.1, 400 / 1.4, 11.5)

    box(800 / 1.1, 400 / 100, 11.5)
    pop()
    pop()

    push()
    translate(0, -400 / 2, 50)
    fill(tr1)
    box(12, 12, 100)
    pop()
    push()
    translate(0, 400 / 2, 50)
    fill(tr1)
    box(12, 12, 100)
    pop()



    push()
    translate(0, 0, 50)
    fill(tr1)
    box(12, 400, 50)
    pop()

    push()
    for (p = 0; p < 2; p++) {
      rotate(180 * p)
      push()
      fill(st1)
      translate(-410 + 20, 0, -20)
      for (i = 0; i < 5; i++) {
        translate(-50 / 2, 0, 60 / 2)
        box(70 / 2, 450 + 55 * i, 80 / 2)
      }
      pop()
    }
    pop()

    push()
    for (p = 0; p < 2; p++) {
      rotate(180 * p)
      push()
      translate(0, -400 / 2, -20)
      fill(st1)
      for (i = 0; i < 5; i++) {
        translate(0, -50 / 2, 60 / 2)
        box(850 + 55 * i, 70 / 2, 80 / 2)
      }
      pop()
    }
    pop()









    push()
    translate(0, 0, -9)
    push()

    translate(0, 0, 15)
    var x2 = -xt
    var y2 = yt
    var w2 = 25
    var h2 = 23.5
    var as = tn
    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()


    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2, y2, h2 / 2)
    vertex(x2, y2, h2 * 1.5)
    endShape()
    pop()



    push()
    stroke(as)
    fill(as)
    translate(0, 0, h2 * 7 / 4)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    pop()

    push()
    translate(x2, y2, h2 * 1.5 + w2)
    stroke(as)
    fill(as)
    ellipsoid(w2 / 4)

    pop()
    pop()









    push()
    translate(0, 0, -9)
    push()

    translate(0, 0, 15)
    var x2 = x1t
    var y2 = y1t
    var w2 = 25
    var h2 = 23.5
    var as = tn
    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()


    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2, y2, h2 / 2)
    vertex(x2, y2, h2 * 1.5)
    endShape()
    pop()



    push()
    stroke(as)
    fill(as)
    translate(0, 0, h2 * 7 / 4)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    pop()

    push()
    translate(x2, y2, h2 * 1.5 + w2)
    stroke(as)
    fill(as)
    ellipsoid(w2 / 4)

    pop()
    pop()









    push()
    translate(0, 0, -9)
    push()

    translate(0, 0, 15)
    var x2 = x11t
    var y2 = y11t
    var w2 = 25
    var h2 = 23.5
    var as = tn
    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()


    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2, y2, h2 / 2)
    vertex(x2, y2, h2 * 1.5)
    endShape()
    pop()



    push()
    stroke(as)
    fill(as)
    translate(0, 0, h2 * 7 / 4)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    pop()

    push()
    translate(x2, y2, h2 * 1.5 + w2)
    stroke(as)
    fill(as)
    ellipsoid(w2 / 4)

    pop()
    pop()









    push()
    translate(0, 0, -9)
    push()

    translate(0, 0, 15)
    var x2 = -x21t
    var y2 = -y21t
    var w2 = 25
    var h2 = 23.5
    var as = tn
    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()


    stroke(as)
    fill(as)
    beginShape()
    strokeWeight(3)
    vertex(x2, y2, h2 / 2)
    vertex(x2, y2, h2 * 1.5)
    endShape()
    pop()



    push()
    stroke(as)
    fill(as)
    translate(0, 0, h2 * 7 / 4)
    beginShape()
    strokeWeight(3)
    vertex(x2 - w2 / 2, y2 + h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    beginShape()
    strokeWeight(3)
    vertex(x2 + w2 / 2, y2 - h2 / 2)
    vertex(x2, y2, h2 / 2)
    endShape()
    pop()

    push()
    translate(x2, y2, h2 * 1.5 + w2)
    stroke(as)
    fill(as)
    ellipsoid(w2 / 4)

    pop()
    pop()

  }









  if (variation > 0 & variation < 100) {
    push()
    translate(0, 0, 300)
    fill(245, 232, 183, 120)
    box(800 * 2.5, 600 * 2.5, 590)
    pop()
  }
  if (variation > 100 & variation < 200) {
    push()
    translate(0, 0, 300)
    fill(245, 232, 183, 120)
    box(800 * 1.5, 600 * 1.5, 600)
    pop()
  }



  push()
  rotateX(-rotateXValue)

  rotateX(-40)
  rectMode(CENTER)
  fill(220, 0, 0, 10)

  translate(-cameraY, -(cameraY + cameraX) / 20, -cameraX)
  translate(0, 0, 1200)

  pop()


}

function rnd(min, max) {
  return $fx.rand() * (max - min) + min;
}

function mouseMoved() {

  rotateXValue = map(mouseY, 0, height, -90, 90);
  rotateYValue = map(mouseX, 0, width, 40, -40);
}



function generateRectangles() {
  let maxAttempts = 20;

  for (let i = 0; i < maxAttempts; i++) {

    let w = rnd(8, 18);
    let h = rnd(8, 18);


    let x = rnd(-ellipsew / 2 + w, ellipsew / 2 - w);
    let y = rnd(-ellipseh / 4 + h, ellipseh / 4 - h);







    let overlapping = false;
    for (let rect of rectangles) {
      if (!(x + w / 2 < rect.x - rect.w / 2 ||
          x - w / 2 > rect.x + rect.w / 2 ||
          y + h / 2 < rect.y - rect.h / 2 ||
          y - h / 2 > rect.y + rect.h / 2)) {
        overlapping = true;
        break;
      }
    }


    if (!overlapping) {
      rectangles.push({
        x,
        y,
        w,
        h
      });
    }

  }
}
