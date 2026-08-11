function setup(){
frameRate(1);

}

function draw(){
  createCanvas(400,400);
  randomSeed(fxrand() * 100000)
background('black');


fill(random(220),random(20),random(60))
ellipse(100,100,50,50)

fill(random(30),random(144),random(255))
ellipse(50,50,25,25)

fill(random(34),random(139),random(34))
ellipse(290,290,55,55)

fill(random(219),random(112),random(147))
ellipse(340,340,30,30)

fill(random(255),random(69),random(0))
ellipse(291,106,55,55)

fill(random(153),random(102),random(153))
ellipse(350,50,25,25)

fill(random(51),random(255),random(255))
ellipse(110,290,53,55)

fill(random(255),random(51),random(255))
ellipse(60,340,30,30)

fill(random(75),random(0),random(130));
ellipse(200, 200, 110, 110);
strokeWeight(5)
line(0,0,400,400)
line(400,0,0,400)

triangle(200,110,90,0,300,0)
triangle(110,200,0,300,0,97)
triangle(200,285,300,400,90,400)
triangle(290,200,400,97,400,300)

strokeWeight(5)
line(0,0,400,400)
line(400,0,0,400)
fill('black');
ellipse(200,200,60,60)
triangle(200,50,100,0,290,0)
triangle(50,200,0,290,0,107)
triangle(200,345,290,400,100,400)
triangle(350,200,400,107,400,290)
}