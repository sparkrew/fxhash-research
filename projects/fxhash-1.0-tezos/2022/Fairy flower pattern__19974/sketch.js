let cW //canvas width
let cH //canvas height
let photo //photo use to save
let bnum //number of ball
//flower color
let bgColor = [ "#2A3756", "#DCEDA2", "#FFFFFF", "#688FBC", "#918DA4", "#F8F6EF", "#768EB8", "#1D2129" ]
let pat12Color = [ [ "#CDCFFF", "#B8FFFF", "#E6B2FF", "#FAB0B5", "#535AAF" ], [ "#8DDD4E", "#F7FFD6", "#33953A", "#15897B", "#006256" ],
								   [ "#FFB8A2", "#FF9877", "#F47750", "#F3521F", "#F12215" ], [ "#DFFAB7", "#F9FFE6", "#E0E1DD", "#B4C1D6", "#7B8CA6" ],
								   [ "#FCFFF2", "#E6CFEC", "#F0B1D7", "#CB95DA", "#BCE3E1" ] ]
let pat34Color = [ [ [ "#F4B0A9", "#E05A82", "#C2435A", "#DE87B6", "#C70C4F" ], [ "#FFB8A2", "#FF9877", "#F47750", "#DD3B09", "#B72B00" ],
								     [ "#5FB8AD", "#B6CF53", "#459E4B", "#15897B", "#006256" ], [ "#ACCACA", "#81BADB", "#8C8FDA", "#9564D3", "#743ABD" ],
								     [ "#FFE923", "#F3D97E", "#CFB867", "#BC9F3A", "#BF8A39" ] ],
								   [ [ "#FCFFF2", "#E6CFEC", "#F0B1D7", "#DA89BA", "#BB3B89" ], [ "#E0E1DD", "#B4C1D6", "#FAEAD1", "#D8C4A7", "#AE8E5E" ],
								     [ "#F9FFFE", "#C2DFD8", "#96F5F0", "#99AAEB", "#2E829C" ], [ "#CDCFFF", "#B8FFFF", "#B2B6FF", "#FF8A91", "#535AFF" ],
								     [ "#DDDDC4", "#EDE0D2", "#D6B39F", "#E1CBCB", "#8E6F5D" ] ],
									 [ [ "#A2A4B4", "#8E93B6", "#A1A9F3", "#BFC3E4", "#26307D" ], [ "#DDDDC4", "#EDE0D2", "#72626E", "#E1CBCB", "#814037" ],
										 [ "#A0A383", "#A09C74", "#C5C784", "#CCD6A7", "#7C4A34" ], [ "#D69D9B", "#D2B790", "#C1C28E", "#AACA9D", "#3E6683" ],
										 [ "#526D9F", "#404A80", "#6A8A94", "#8CCDE1", "#7B3A46" ] ] ]
let leafColor = [ [ [ "#43885A", "#B0D0BB" ],[ "#675846", "#E0D7CC" ] ],
								  [ [ "#D1EFF1", "#A0B4CB" ],[ "#D1EFF1", "#A0B4CB" ] ],
								  [ [ "#6B7485", "#434B59" ],[ "#6B7485", "#434B59" ] ] ]
let ranC
//pattern
let pattern
let patSize

function setup() {
	//平均分布0~0.3 隨機分布0.3~0.45 橢圓分布0.45~0.65 蒲公英0.65~0.85 梅花0.85~1
	pattern = fxrand()
	bnum = 10
	if(windowWidth>=800){
	//桌機
		patSize = int(fxrand()*400+150)
	} else {
		//手機平板
		patSize = int(fxrand()*200+150)
	}
	
	if(windowWidth<windowHeight){
		createCanvas(windowWidth, windowWidth)
		cW = windowWidth
		cH = windowWidth
	} else {
		createCanvas(windowHeight, windowHeight)
		cW = windowHeight
		cH = windowHeight
	}
	
	if(pattern<0.3){
		//平均分布 跟隨螢幕
		cW = windowWidth
		cH = windowHeight
		photo = createCanvas(windowWidth, windowHeight)
		
	} else if (pattern<0.45){
		//隨機分布 正方形
		photo = createCanvas(cW, cH)
		
	}else if (pattern<0.85){
		//橢圓分布 & 蒲公英 400*520
		cW = windowWidth
		cH = cW*13/10
		for(;cH>windowHeight;cW--){
			cH = cW*13/10
		}
		photo = createCanvas(cW, cH)
		
	} else {
		//梅花 正方形
		photo = createCanvas(cW, cH)
		
	}
	
	if(pattern<0.65){
		ranC = int(fxrand()*8)
	} else {
		ranC = int(fxrand()*3)+5
	}
	
	background( color(bgColor[ranC]) )
	ellipseMode(CENTER)
	
	//print(pattern+", "+ranC)
}

function draw() {
	background( color(bgColor[ranC]) )
	
	if(pattern<0.3){
		//平均分布 30%
		let bgLineColor = color("#FFFFFF" )
		let flowerType = fxrand()
		if( flowerType<0.5 ){
			//隨機花型 50%
			if(ranC<=4){
				bgLineColor = color( pat12Color[ranC][int(fxrand()*5)] )
				if(pattern<0.1){ drawBG1(bgLineColor) } else if(pattern<0.2) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){
							flowerType = fxrand()
							if(flowerType<0.7){
								flower(x,y,patSize,pat12Color[ranC],true)
							} else {
								flower2(x,y,patSize,pat12Color[ranC],true)
							}		
						}
					} else {
						for(var z=0; z<windowHeight; z+=patSize){
							flowerType = fxrand()
							if(flowerType<0.7){
								flower(x,z,patSize,pat12Color[ranC],true)
							} else {
								flower2(x,z,patSize,pat12Color[ranC],true)
							}			
						}
					}
				}
			} else {
				bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
				if(pattern<0.2){ drawBG1(bgLineColor) } else if(pattern<0.4) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){
							flowerType = fxrand()
							if(flowerType<0.7){
								flower(x,y,patSize,pat34Color[ranC-5][int(fxrand()*5)],true)
							} else {
								flower2(x,y,patSize,pat34Color[ranC-5][int(fxrand()*5)],true)
							}			
						}
					} else {
						for(var z=0; z<windowHeight; z+=patSize){
							flowerType = fxrand()
							if(flowerType<0.7){
								flower(x,z,patSize,pat34Color[ranC-5][int(fxrand()*5)],true)
							} else {
								flower2(x,z,patSize,pat34Color[ranC-5][int(fxrand()*5)],true)
							}			
						}
					}
				}
			}
		} else if (flowerType<0.9) {
			//全部flower1 40%
			if(ranC<=4){
				bgLineColor = color( pat12Color[ranC][int(fxrand()*5)] )
				if(pattern<0.1){ drawBG1(bgLineColor) } else if(pattern<0.2) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){ flower(x,y,patSize,pat12Color[ranC],true) }
					} else {
						for(var z=0; z<windowHeight; z+=patSize){ flower(x,z,patSize,pat12Color[ranC],true) }
					}
				}
			} else {
				bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
				if(pattern<0.2){ drawBG1(bgLineColor) } else if(pattern<0.4) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){ flower(x,y,patSize,pat34Color[ranC-5][int(fxrand()*5)],true) }
					} else {
						for(var z=0; z<windowHeight; z+=patSize){ flower(x,z,patSize,pat34Color[ranC-5][int(fxrand()*5)],true) }
					}
				}
			}
		} else {
			//全部flower2 20%
			if(ranC<=4){
				bgLineColor = color( pat12Color[ranC][int(fxrand()*5)] )
				if(pattern<0.1){ drawBG1(bgLineColor) } else if(pattern<0.2) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){ flower2(x,y,patSize,pat12Color[ranC],true) }
					} else {
						for(var z=0; z<windowHeight; z+=patSize){ flower2(x,z,patSize,pat12Color[ranC],true) }
					}
				}
			} else {
				bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
				if(pattern<0.2){ drawBG1(bgLineColor) } else if(pattern<0.4) { drawBG2(bgLineColor) }
				for(var x=-patSize/4; x<windowWidth; x+=patSize){
					// noprotect
					if( (x+patSize/4)%(patSize*2) == 0 ){
						for(var y=-patSize/2; y<windowHeight; y+=patSize){ flower2(x,y,patSize,pat34Color[ranC-5][int(fxrand()*5)],true) }
					} else {
						for(var z=0; z<windowHeight; z+=patSize){ flower2(x,z,patSize,pat34Color[ranC-5][int(fxrand()*5)],true) }
					}
				}
			}
		}	
		
	} else if (pattern<0.45) {
		//隨機分布 15%
		let fx=0
		let fy=0
		let fs=0
		let fdir=0
		let fnum=int( fxrand()*20+7 )
		let patColor
		let flowerType=0
		if(ranC<=4){
			patColor = pat12Color[ranC]
		} else {
			patColor = pat34Color[ranC-5][int(fxrand()*5)]
		}
		for(var i=0; i<=fnum; i++){
			fx= (fxrand()*400-26)*cW/400
			fy= (fxrand()*520-26)*cH/520
			fs= (fxrand()*146*i/fnum+54)*cW/400
			fdir=fxrand()
			flowerType=fxrand()
			if(ranC>4){
				patColor = pat34Color[ranC-5][int(fxrand()*5)]
			}
			flowerType = fxrand()
			if(flowerType<0.8){
				flower(fx,fy,fs,patColor,false)	
			} else {
				flower2(fx,fy,fs,patColor,false)	
			}	
		}
		
	}else if(pattern<0.65){
		//橢圓分布 20%
		// background(color(bgColor[ranC]))
		// fill(255,255,255,0.5)
		// noStroke()
		// for(var w=180*cW/400; w<cW*1.5; w+=5*cW/400){
		// 	fill(255,255,255,0.5)
		// 	ellipse(cW/2,cH/2, w,w/400*520)
		// }

		if(ranC<=4){
			let curColor = pat12Color[ranC]
			if(fxrand()<0.7){
				flower(130*cW/400,190*cH/520,140*cW/400,curColor,true)
			} else {
				flower2(130*cW/400,190*cH/520,140*cW/400,curColor,true)
			}	

			flower(160*cW/400,65*cH/520,80*cW/400,curColor,false)
			flower(160*cW/400,375*cH/520,80*cW/400,curColor,false)

			flower(38*cW/400,224*cH/520,72*cW/400,curColor,false)
			flower(290*cW/400,224*cH/520,72*cW/400,curColor,false)

			flower(54*cW/400,114*cH/520,76*cW/400,curColor,false)
			flower(270*cW/400,114*cH/520,76*cW/400,curColor,false)
			flower(64*cW/400,330*cH/520,76*cW/400,curColor,false)
			flower(270*cW/400,330*cH/520,76*cW/400,curColor,false)

			flower(82*cW/400,22*cH/520,60*cW/400,curColor,false)
			flower(258*cW/400,22*cH/520,60*cW/400,curColor,false)
			flower(370*cW/400,156*cH/520,60*cW/400,curColor,false)
			flower(370*cW/400,304*cH/520,60*cW/400,curColor,false)
			flower(258*cW/400,438*cH/520,60*cW/400,curColor,false)
			flower(82*cW/400,438*cH/520,60*cW/400,curColor,false)
			flower(-30*cW/400,304*cH/520,60*cW/400,curColor,false)
			flower(-30*cW/400,156*cH/520,60*cW/400,curColor,false)

			flower(170*cW/400,-30*cH/520,54*cW/400,curColor,false)
			flower(346*cW/400,60*cH/520,54*cW/400,curColor,false)
			flower(346*cW/400,406*cH/520,54*cW/400,curColor,false)
			flower(0*cW/400,406*cH/520,54*cW/400,curColor,false)
			flower(0*cW/400,60*cH/520,54*cW/400,curColor,false)
			flower(170*cW/400,490*cH/520,54*cW/400,curColor,false)
		} else {
			if(fxrand()<0.7){
				flower(130*cW/400,190*cH/520,140*cW/400,pat34Color[ranC-5][int(fxrand()*5)],true)
			} else {
				flower2(130*cW/400,190*cH/520,140*cW/400,pat34Color[ranC-5][int(fxrand()*5)],true)
			}	
			flower(160*cW/400,65*cH/520,80*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(160*cW/400,375*cH/520,80*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)

			flower(38*cW/400,224*cH/520,72*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(290*cW/400,224*cH/520,72*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)

			flower(54*cW/400,114*cH/520,76*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(270*cW/400,114*cH/520,76*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(64*cW/400,330*cH/520,76*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(270*cW/400,330*cH/520,76*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)

			flower(82*cW/400,22*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(258*cW/400,22*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(370*cW/400,156*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(370*cW/400,304*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(258*cW/400,438*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(82*cW/400,438*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(-30*cW/400,304*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(-30*cW/400,156*cH/520,60*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)

			flower(170*cW/400,-30*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(346*cW/400,60*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(346*cW/400,406*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(0*cW/400,406*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(0*cW/400,60*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
			flower(170*cW/400,490*cH/520,54*cW/400,pat34Color[ranC-5][int(fxrand()*5)],false)
		}
		
	} else if(pattern<0.85) {
		//蒲公英 20%
		let flip = fxrand()
		push()
		if(flip<0.2){
			translate(cW/2,cH/2)
			rotate(PI)
			translate(-cW/2,-cH/2)
		} 
		let bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
		drawBG3( bgLineColor )
		push()
		if(flip<0.15){
			translate(cW/2,cH/2)
			rotate(PI)
			translate(-cW/2,-cH/2)
		}
		let ranFrameColor = int(fxrand()*2)
		let ffColor = color( leafColor[ranC-5][ranFrameColor][0] )
		let ftColor = color( leafColor[ranC-5][ranFrameColor][1] )
		let fs=180*cW/400
		let fx=cW/2-fs/2
		let fy=(fxrand()*90+80)*cH/520
		let flowerType=fxrand()
		let fdir=fxrand()
		let fnum=int( fxrand()*12+5 )
		if(fdir<0.5){
			//vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha)
			vine3( fx+fs*0.8,cH,-PI/2,cH-fy-fs/2,12*cH/520,300,ffColor,ftColor,10)
		} else {
			vine4( fx+fs*0.2,cH,-PI/2,cH-fy-fs/2,12*cH/520,300,ffColor,ftColor,10)
		}
		flower(fx,fy,fs,pat34Color[ranC-5][int(fxrand()*5)],false)
		for(var i=0; i<=fnum; i++){
			fx= (fxrand()*340-30)*cW/400
			fy= (fxrand()*225+224)*cH/520
			fs= (fxrand()*22+54)*cW/400
			fdir=fxrand()
			flowerType=fxrand()
			//vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha)
			if(fdir<0.5){
				vine3( fx+fs,cH,-PI/2,cH-fy-fs/2,12*fs/140,300,ffColor,ftColor,10)
			} else {
				vine4( fx,cH,-PI/2,cH-fy-fs/2,12*fs/140,300,ffColor,ftColor,10)
			}
			if(flowerType<0.8){
				flower(fx,fy,fs,pat34Color[ranC-5][int(fxrand()*5)],false)
			} else {
				flower2(fx,fy,fs,pat34Color[ranC-5][int(fxrand()*5)],false)
			}
		}
		bgLineColor = color(leafColor[ranC-5][1][1])
		bgLineColor.setAlpha(255)
		noStroke()
		fill(bgLineColor)
		rect(0,0,cW,8*cH/520)
		rect(cW-8*cW/400,0,8*cW/400,cH)
		rect(0,cH-8*cH/520,cW,8*cH/520)
		rect(0,0,8*cW/400,cH)
		pop()
		
	} else {
		//梅花 15%
		let bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
		drawBG3( bgLineColor )
		let flip = fxrand()
		push()
		translate(cW/2,cH/2)
		scale(0.9)
		translate(-cW/2,-cH/2)
		if(flip<0.25){
			translate(cW/2,cH/2)
			rotate(PI/2)
			translate(-cW/2,-cH/2)
		} else if (flip<0.5){
			translate(cW/2,cH/2)
			rotate(PI)
			translate(-cW/2,-cH/2)
		} else if (flip<0.75){
			translate(cW/2,cH/2)
			rotate(-PI/2)
			translate(-cW/2,-cH/2)
		}
		let ranFrameColor = int(fxrand()*2)
		let ffColor = color( leafColor[ranC-5][ranFrameColor][0] )
		let ftColor = color( leafColor[ranC-5][ranFrameColor][1] )
		//vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha)
		vine2( -10*cW/400,0,PI*6.5/16,cW*3/4.5,20*cW/400,300,ffColor,ftColor,30)
		
		let fs= (fxrand()*22+64)*cW/400
		let fx= (fxrand()*48+132)*cW/400-fs/2
		let fy= (fxrand()*40+44)*cH/400-fs/2
		let curColor = int(fxrand()*5)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		fs= (fxrand()*12+64)*cW/400
		fx= (fxrand()*25+185)*cW/400-fs/2
		fy= (fxrand()*60+146)*cH/400-fs/2
		curColor = int(fxrand()*5)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		fs= (fxrand()*12+64)*cW/400
		fx= (fxrand()*60+220)*cW/400-fs/2
		fy= (fxrand()*46+240)*cH/400-fs/2
		curColor = int(fxrand()*5)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)	
		fs= (fxrand()*30+100)*cW/400
		fx= (fxrand()*30+76)*cW/400-fs/2
		fy= (fxrand()*24+300)*cH/400-fs/2
		curColor = int(fxrand()*5)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)	
		fs= (fxrand()*30+100)*cW/400
		fx= (fxrand()*30+350)*cW/400-fs/2
		fy= (fxrand()*90+130)*cH/400-fs/2
		curColor = int(fxrand()*5)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)
		flower(fx,fy,fs,pat34Color[ranC-5][curColor],false)	
		pop()
		bgLineColor = color(leafColor[ranC-5][int(fxrand()*2)][0])
		bgLineColor = color(leafColor[ranC-5][1][1])
		bgLineColor.setAlpha(255)
		noStroke()
		fill(bgLineColor)
		rect(0,0,cW,8*cH/400)
		rect(cW-8*cW/400,0,8*cW/400,cH)
		rect(0,cH-8*cH/400,cW,8*cH/400)
		rect(0,0,8*cW/400,cH)
	}
	
	noLoop()
}

function drawBG1( c ){
	//draw BG
	c.setAlpha(30)
	strokeWeight(1.5*patSize/200)
	stroke(c)
	noFill()
	for(var x=patSize/4-patSize; x<windowWidth; x+=patSize){
		// noprotect
		if( (x-patSize/4)%(patSize*2) == 0 ){
			for(var y=0; y<windowHeight; y+=patSize){
				for(var k=1; k<100; k+=2){
					line( x+k*patSize/100,y+k*patSize/200, x+k*patSize/100,y+patSize-k*patSize/200)
				}
				for(var k=1; k<50; k+=2){
					line( x+k*patSize/48,y-k*patSize/96, x+patSize,y-k*patSize/98)
					line( x+k*patSize/48,y+k*patSize/96, x+patSize,y+k*patSize/98)
				}
				//triangle( x,y, x,y+patSize, x+patSize,y+patSize/2 )
			}
		} else {
			for(var y=-patSize/2; y<windowHeight; y+=patSize){
				for(var k=1; k<100; k+=2){
					line( x+k*patSize/100,y+k*patSize/200, x+k*patSize/100,y+patSize-k*patSize/200)
				}
				for(var k=1; k<50; k+=2){
					line( x+k*patSize/48,y-k*patSize/96, x+patSize,y-k*patSize/98)
					line( x+k*patSize/48,y+k*patSize/96, x+patSize,y+k*patSize/98)
				}
				//triangle( x,z, x,z+patSize, x+patSize,z+patSize/2 )
			}
		}
	}
}

function drawBG2( c ){
	//draw BG
	c.setAlpha(20)
	strokeWeight(1.5*patSize/200)
	stroke(c)
	noFill()
	for(var x=patSize/4-patSize; x<windowWidth; x+=patSize){
		// noprotect
		if( (x-patSize/4)%(patSize*2) == 0 ){
			for(var y=0; y<windowHeight; y+=patSize){
				for(var k=1; k<100; k+=2){
					line( x+k*patSize/100,y+k*patSize/200, x+k*patSize/100,y+patSize-k*patSize/200)
				}
				for(var k=1; k<50; k+=2){
					line( x+k*patSize/48,y-k*patSize/96+patSize/2, x+patSize,y-k*patSize/98+patSize/2)
					line( x+k*patSize/48,y+k*patSize/96+patSize/2, x+patSize,y+k*patSize/98+patSize/2)
				}
				//triangle( x,y, x,y+patSize, x+patSize,y+patSize/2 )
			}
		} else {
			for(var y=-patSize/2; y<windowHeight; y+=patSize){
				for(var k=1; k<100; k+=2){
					line( x+k*patSize/100,y+k*patSize/200, x+k*patSize/100,y+patSize-k*patSize/200)
				}
				for(var k=1; k<50; k+=2){
					line( x+k*patSize/48,y-k*patSize/96+patSize/2, x+patSize,y-k*patSize/98+patSize/2)
					line( x+k*patSize/48,y+k*patSize/96+patSize/2, x+patSize,y+k*patSize/98+patSize/2)
				}
				//triangle( x,z, x,z+patSize, x+patSize,z+patSize/2 )
			}
		}
	}
}

function drawBG3( c ){
	//draw BG
	c.setAlpha(12)
	fill(c)
	noStroke()
	let cX = fxrand()*cW
	let cY = fxrand()*cH
	let size = fxrand()*2*cW/400
	for(var i=0; i<100000; i++){
		c.setAlpha(fxrand()*30+7)
		fill(c)
		cX = fxrand()*cW
		cY = fxrand()*cH
		size = fxrand()*cW/400
		circle(cX,cY,size)
	}
}

function vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha){
	push()
	translate( x,y )
	rotate(r)
	translate( distance,0 )
	let curColor = fromColor
	let fork = int( fxrand()*Vtimes*20/150+Vtimes*40/150 )
	for(var i=0; i<Vtimes; i++){
		if(i==fork){
			push()
			let ccColor = curColor
			let ffColor = curColor
			translate(-distance,0)
			rotate(-10)
			translate( distance,0 )
			for(var j=0; j<Vtimes; j++){
				ccColor = lerpColor( ffColor,toColor,j/(Vtimes) )
				ccColor.setAlpha(Valpha*1.5)
				strokeWeight(size/8)
				stroke(ccColor)
				noFill()
				circle(-distance,0,size)
				scale(0.99)
				rotate(-0.08)
			}
			pop()
		}
		curColor = lerpColor(fromColor,toColor,i/Vtimes)
		curColor.setAlpha(Valpha)
		strokeWeight(size/8)
		stroke(curColor)
		noFill()
		circle(-distance,0,size)
		scale(0.99)
		rotate(0.038)
	}
	pop()
}

function vine2( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha){
	push()
	translate( x,y )
	rotate(r)
	translate( distance,0 )
	let curColor = fromColor
	curColor.setAlpha(Valpha)
	noStroke()
	fill(curColor)
	let fork = int( Vtimes*35/150 )
	for(var i=0; i<Vtimes; i++){
		if(i%60 == 0){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
				beginShape()
				curveVertex(-distance-size,0)
				curveVertex(-distance-size,0)
				curveVertex(-distance-size*3/2-size,ly)
				curveVertex(-distance-size*6/2-size,0)
				curveVertex(-distance-size*6/2-size,0)
				endShape()
			}
		} else if(i%60==30){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
				beginShape()
				curveVertex(-distance+size,0)
				curveVertex(-distance+size,0)
				curveVertex(-distance+size*3/2+size,ly)
				curveVertex(-distance+size*6/2+size,0)
				curveVertex(-distance+size*6/2+size,0)
				endShape()
			}
		}
		if(i==fork){
			push()
			let ccColor = curColor
			let ffColor = curColor
			translate(-distance,0)
			rotate(-10)
			translate( distance,0 )
			for(var j=0; j<Vtimes; j++){
				if(j%60 == 0){
					curColor = toColor			
					curColor.setAlpha(255)
					strokeWeight(size/16)
					stroke(curColor)
					noFill()
					for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
						beginShape()
						curveVertex(-distance-size,0)
						curveVertex(-distance-size,0)
						curveVertex(-distance-size*3/2-size,ly)
						curveVertex(-distance-size*6/2-size,0)
						curveVertex(-distance-size*6/2-size,0)
						endShape()
					}
				} else if(j%60==30){
					curColor = toColor			
					curColor.setAlpha(255)
					strokeWeight(size/16)
					stroke(curColor)
					noFill()
					for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
						beginShape()
						curveVertex(-distance+size,0)
						curveVertex(-distance+size,0)
						curveVertex(-distance+size*3/2+size,ly)
						curveVertex(-distance+size*6/2+size,0)
						curveVertex(-distance+size*6/2+size,0)
						endShape()
					}
				}
				if(j>0){
					ccColor = lerpColor( ffColor,toColor,j/(Vtimes) )
					ccColor.setAlpha(Valpha*1.5)
					strokeWeight(size/5)
					stroke(ccColor)
					noFill()
					line(-distance+size/2,0,-distance-size/2,0)
					circle(-distance,0,size)
				}
				scale(0.99)
				rotate(-0.05)
			}
			pop()
		}
		curColor = lerpColor(fromColor,toColor,i/Vtimes)
		curColor.setAlpha(Valpha)
		strokeWeight(size/6)
		stroke(curColor)
		noFill()
		line(-distance+size/2,0,-distance-size/2,0)
		circle(-distance,0,size)
		
		scale(0.99)
		rotate(0.025)
	}
	pop()
}

function vine3( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha){
	push()
	translate( x,y )
	rotate(r)
	translate( distance,0 )
	let curColor = fromColor
	curColor.setAlpha(Valpha)
	noStroke()
	fill(curColor)
	for(var i=0; i<Vtimes; i++){
		if(i%100 == 0){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var lx=-distance-size/1.25; lx<=-distance+size/1.25; lx+=size/8){
				beginShape()
				curveVertex(-distance,-size/2)
				curveVertex(-distance,-size/2)
				curveVertex(lx,-size*4/2)
				curveVertex(-distance,-size*7/2)
				curveVertex(-distance,-size*7/2)
				endShape()
			}
		} else if(i%100==50){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
				beginShape()
				curveVertex(-distance+size,0)
				curveVertex(-distance+size,0)
				curveVertex(-distance+size*3/2+size,ly)
				curveVertex(-distance+size*6/2+size,0)
				curveVertex(-distance+size*6/2+size,0)
				endShape()
			}
		}
		curColor = lerpColor(fromColor,toColor,i/Vtimes)
		curColor.setAlpha(Valpha)
		noStroke()
		fill(curColor)
		circle(-distance,0,size)
		
		curColor.setAlpha(Valpha*2)
		strokeWeight(size/4)
		stroke(curColor)
		noFill()
		line(-distance+size/2,0,-distance-size/2,0)	
		
		scale(0.995)
		rotate(0.003)
	}
	pop()
}

function vine4( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha){
	push()
	translate( x,y )
	rotate(r)
	translate( distance,0 )
	let curColor = fromColor
	curColor.setAlpha(Valpha)
	noStroke()
	fill(curColor)
	for(var i=0; i<Vtimes; i++){
		if(i%100 == 0){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var ly=-size/1.25; ly<=size/1.25; ly+=size/8){
				beginShape()
				curveVertex(-distance+size,0)
				curveVertex(-distance+size,0)
				curveVertex(-distance+size*3/2+size,ly)
				curveVertex(-distance+size*6/2+size,0)
				curveVertex(-distance+size*6/2+size,0)
				endShape()
			}
		} else if(i%100==50){
			curColor = toColor			
			curColor.setAlpha(255)
			strokeWeight(size/16)
			stroke(curColor)
			noFill()
			for(var lx=-distance-size/1.25; lx<=-distance+size/1.25; lx+=size/8){
				beginShape()
				curveVertex(-distance,size/2)
				curveVertex(-distance,size/2)
				curveVertex(lx,size*4/2)
				curveVertex(-distance,size*7/2)
				curveVertex(-distance,size*7/2)
				endShape()
			}
		}
		curColor = lerpColor(fromColor,toColor,i/Vtimes)
		curColor.setAlpha(Valpha)
		noStroke()
		fill(curColor)
		circle(-distance,0,size)
		
		curColor.setAlpha(Valpha*2)
		strokeWeight(size/4)
		stroke(curColor)
		noFill()
		line(-distance+size/2,0,-distance-size/2,0)	
		
		scale(0.995)
		rotate(-0.003)
	}
	pop()
}

function flower( x,y,fs,fc,hasVine ){
	push()
	translate(fs/2+x, fs/2+y)
	let his//history position
	let cpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //current position
	let ranA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//random angle
	let spe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//初速度
	let	dir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//direction
	his = [ [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0] ]
	spe[0] = fxrand()*fs/140+fs/140
	for(var i=0; i<bnum; i++){
		cpos[i] = 1
		ranA[i] = (fxrand()*2-1)*PI-1
		if(i!=0){ spe[i] = spe[i-1]*1.1 }
		dir[i] = true
	}
	
	let rotateNum = 432
	let rotateAng = 1080/rotateNum
	for(var i=0; i<rotateNum; i++){
		for(var j=0; j<bnum; j++){
			rotate(rotateAng)
			push()
			rotate(ranA[j])
			if(spe[j]<fs/100){
				dir[j] = false
				spe[j] = fs/100
			} else if(cpos[j]<0){
				cpos[j] = 0
				dir[j] = true
				spe[j] = fxrand()*fs/20+fs/20
			}
			if(dir[j]==false){
				cpos[j] -= spe[j]
				spe[j] = spe[j]*1.1
			} else {
				cpos[j] += spe[j]
				spe[j] = spe[j]/1.1
			}
			his[j].push(cpos[j])			
			pop()
		}
	}
	
	if(hasVine==true){
		let ranVine = fxrand()
		let angle = fxrand()*2*PI
		if( ranVine<0.3 ){
			//vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha)
		// 	vine( 0,0,angle,fs*6/18,60*fs/1000,150,color(fc[int(fxrand()*4)]),color(fc[int(fxrand()*4)]),30)
		// } else if ( ranVine<0.3){
			//vine( x,y,r,distance,size,Vtimes,fromColor,toColor,Valpha)
			vine( 0,0,angle,fs*6/18,60*fs/1000,150,color(fc[int(fxrand()*4)]),color(fc[int(fxrand()*4)]),20)
			angle += PI + (fxrand()*2-1)*2*PI/9
			vine( 0,0,angle,fs*6/18,60*fs/1000,150,color(fc[int(fxrand()*4)]),color(fc[int(fxrand()*4)]),20)
		}
	}
	
	let shade = fxrand()*0.5+0.75
	for(var j=0; j<bnum; j++){
		rotate(ranA[j])
		for(var i=1; i<rotateNum; i++){
			rotate(PI/72)
			strokeWeight(12*(bnum-j)*0.2*fs/1000)
			curColor = color( fc[int(j/2)] )
			curColor.setAlpha(8*shade)
			stroke(curColor)
			//stroke(c[ranC][int(j/2)][0],c[ranC][int(j/2)][1],c[ranC][int(j/2)][2],10*shade)
			line(his[j][i]/1.5,0,0,0)
			strokeWeight(1.5*fs/1000)
			curColor.setAlpha(20*shade)
			stroke(curColor)
			//stroke(c[ranC][int(j/2)][0],c[ranC][int(j/2)][1],c[ranC][int(j/2)][2],25*shade)
			line(his[j][i]/1.5,0,0,0)	
		}
		rotate(-ranA[j])
	}
	pop()
}

function flower2( x,y,fs,fc,hasVine ){
	push()
	translate(fs/2+x, fs/2+y)
	scale(0.6)
	let his//history position
	let cpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //current position
	let ranA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//random angle
	let spe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//初速度
	let	dir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//direction
	his = [ [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0] ]
	spe[0] = fxrand()*fs/140+fs/140
	for(var i=0; i<bnum; i++){
		cpos[i] = 1
		ranA[i] = (fxrand()*2-1)*PI-1
		if(i!=0){ spe[i] = spe[i-1]*1.1 }
		dir[i] = true
	}
	
	let rotateNum = 432
	let rotateAng = 1080/rotateNum
	for(var i=0; i<rotateNum; i++){
		for(var j=0; j<bnum; j++){
			rotate(rotateAng)
			push()
			rotate(ranA[j])
			if(spe[j]<fs/100){
				dir[j] = false
				spe[j] = fs/100
			} else if(cpos[j]<0){
				cpos[j] = 0
				dir[j] = true
				spe[j] = fxrand()*fs/20+fs/20
			}
			if(dir[j]==false){
				cpos[j] -= spe[j]
				spe[j] = spe[j]*1.1
			} else {
				cpos[j] += spe[j]
				spe[j] = spe[j]/1.1
			}
			his[j].push(cpos[j])			
			pop()
		}
	}
	for(var j=0; j<bnum/2; j++){
			rotate(ranA[j])
			for(var i=1; i<rotateNum; i++){
				rotate(PI/72)
				strokeWeight(1.5*fs/500)
				curColor = color( fc[int(j/2)] )
				
				noStroke()
				curColor.setAlpha(50)
				fill(curColor)
				circle(his[j][i],0,fs/100)
				circle(his[j][i],0,fs/150)
				circle(his[j][i],0,fs/200)
				
				noStroke()
				curColor.setAlpha(10)
				fill(curColor)
				circle(his[j][i],0,fs/10)
				
				strokeWeight(1.5*fs/500)
				curColor.setAlpha(50)
				stroke(curColor)
				line(0,0,his[j][i],0)
				
			}
			rotate(-ranA[j])
		}
	pop()
}

function keyTyped() {
  if (key === 's') {
    saveCanvas(photo, 'DryFlowersPattern', 'png')
  }
}