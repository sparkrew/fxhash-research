
let colors1 = "c06262-c3b969-ece336-36ec73-c4b212-7e78f2".split("-").map(a=>"#"+a)
let colors2 = "d2bc14-14d283-b43714-d21489-1499d2-14d29c-b43714-406eed-406eed".split("-").map(a=>"#"+a)
// let colors
let TShade;

function preload(){
	TShade = new p5.Shader(this.renderer,vert,frag)
	colors = random([colors1,colors2])
}
let canLyr1,canLyr2

function setup() { 

	createCanvas(1400,1400,WEBGL);
		let seed=floor(999999*fxrand());
randomSeed(seed);
noiseSeed(seed);
	canLyr1= createGraphics(width,height)
	canLyr2 = createGraphics(width,height) 
	canLyr1.background(20) 
	canLyr1.noStroke()
	canLyr1.rectMode(CENTER)
	canLyr2.rectMode(CENTER)
	canLyr1.push()
	canLyr2.push()
	pixelDensity(2)
  
	for(var x=0;x<width+1;x+=1){
		for(var y=0;y<height+0.1;y+=6){
          strokeWeight(1.01)
			canLyr1.rotate(sin(x)/50)
			canLyr2.rotate(0.02)
			
			canLyr1.fill(colors[int(x/250+y/510)%colors.length])
			canLyr1.ellipse(x,y,60,10)

			canLyr2.stroke(255)
			canLyr2.strokeWeight(2)
			canLyr2.noFill()
			if (random()<0.5){
				canLyr1.push()
				canLyr1.fill(colors[int(x/330+y/500)%colors.length])
				canLyr1.translate(x,y)
				canLyr1.scale(random(2))
				canLyr1.ellipse(10,0,20,1000)
				canLyr1.pop()
			}
			canLyr1.push()
			for(var o=0;o<5;o++){
				canLyr1.rotate(0.5)
					canLyr1.rect(x,y,2,5)
			}
			canLyr1.pop()
			canLyr1.fill(colors[int(x/550+y/500)%colors.length])
			
// 			canLyr2.push()
// 			canLyr2.stroke(150,1)
// 			canLyr2.translate(width/2,height/2)
// 			for(var k=0;k<200;k++){
// 			canLyr2.line(noise(x/50,(k-1)/50-1)*100+5*(k-1),noise(y/50,50,(k-1)/50)*100-5*(k-1),
// 											noise(x/50,(k)/50-1)*100+5*(k),noise(y/50,50,(k)/50)*100-5*(k))
// 			}
			
// 			canLyr2.pop()
		}
	} 
	canLyr1.pop()
	canLyr2.pop()
	for(var i=0;i<2;i++){
		canLyr1.ellipse(random(width),random(height),random(30),random(120))
		canLyr1.fill(255,0.2)
		canLyr1.rect(width/2,height/2-i*150,width,i*120)
	}
	for(var i=0;i<50;i++){
		canLyr2.noFill()
		canLyr2.stroke(255)
		canLyr2.circle(random(width),random(height),random(100))
		canLyr2.fill(255,0.2)
		canLyr2.rect(width/2,height/2-i*100,width,i*100)
	}
	

	
}

function draw() {
	clear(0,0,width,height)

	shader(TShade)
	TShade.setUniform('u_resolution',[width/200,height/210])
	// TShade.setUniform('u_time',millis()/100)
	// TShade.setUniform('u_mouse',[mouseX/width,mouseY/height])
	TShade.setUniform('u_tex',canLyr1)
	TShade.setUniform('u_tex2',canLyr2)

	rect(-width/2,-height/2,width,height) 
  const u = random(100);
  const v = random(100);  
  const w = random(150);
  
  for (let angle = 0; angle < random(730, 290); angle+=random(0,1)) {
    push();
    strokeWeight(1.01)
    translate(cos(angle)*angle, sin(angle)*angle, tan(angle*angle)*angle);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    // 
    pointLight(255, 255, 255, 0, 0, 0);
    pointLight(255, 255, 255, -cos(angle)*u, -sin(angle)*v, cos(angle)*w);
    box(sin(cos(angle)*340)*u, cos(cos(angle)*130)*v, sin(cos(angle)*130)*w);
    pop();
  }
  	noLoop()
}