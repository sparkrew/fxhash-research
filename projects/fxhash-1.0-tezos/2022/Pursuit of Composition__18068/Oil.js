//色の作成
function createColorShadow(c, shadeRate, lightRate) {
	let colShadowArr = [];
	let r = red(c); //赤
	let g = green(c); //緑
	let b = blue(c); //青
	let shade = shadeRate; //描いた後にできる影の濃さ(0に近いと濃い)
	let light = lightRate;
	let cb = color(r * shade, g * shade, b * shade); //影の色
	let cw = color(r * light, g * light, b * light); //光が当たった時の色
	colShadowArr.push(c);
	colShadowArr.push(cb);
	colShadowArr.push(cw);
	return colShadowArr;
}

//点
function oilPoint(colShadowArr, sw, mi, r_n, change) {
	for (let i = 0; i <= int(mi); i += 0.1) {
		let mapCW = map(i, 0, mi, 0.5, 1);
		let mapCB = map(i, 0, mi, 0.2, 2);
		let rn = random(-r_n, r_n);
		let lerpC = lerpColor(colShadowArr[2], colShadowArr[0], mapCW);
		let lerpC2 = lerpColor(colShadowArr[1], colShadowArr[0], mapCB);
		strokeWeight(random(sw));
		stroke(lerpC);
		if (change == 0) {
			point(i, rn);
		} else {
			point(rn, i);
		}
		strokeWeight(random(sw));
		stroke(lerpC2);
		if (change == 0) {
			point(-i, (2 * rn));
		} else {
			point((2 * rn), -i);
		}
	}
}

//oilEllipseオーバーライド(円の中心に向かってグラデーションをかける)(0,2,1)
function oilEllipse(r) {
	let c1 = palette[nonDuplicate(1, 0, 3)]
	let c2 = palette[nonDuplicate(2, 0, 3)]
	let c3 = palette[nonDuplicate(2, 0, 3)]

  for (let j = 0; j<r; j+=3) {
    let mapj = map(j, 0, r, -1, 10);
    let mapj2 = map(j, 0, r, -1, 5);
    let mapj3 = map(j, 0, r, -3, 4);
    let mapj4 = map(j, 0, r, -5, 4);
    let mapj5 = map(j, 0, r, -5, 2);
		let l_c1 = lerpColor(palette[1], c1, mapj);
    let l_c2 = lerpColor(l_c1, c1, mapj2);
    let l_c3 = lerpColor(l_c2, c2, mapj3);
    let l_c4 = lerpColor(l_c3, c3, mapj4);
    let l_c5 = lerpColor(l_c4, palette[2], mapj5);
    for (let i = 0; i<360; i+=1) {
      let cosx = (r-j)*sincosArr[0][i];
      let siny = (r-j)*sincosArr[1][i];
      let colShadowArr = createColorShadow(l_c5, random(0.1, 0.5), random(1.6, 2));
      push();
      translate(cosx+random(-2, 2), siny+random(-2, 2));
      rotate(radians(i*2));
      oilPoint(colShadowArr, random(0.5, 1.5), random(2,6), 1, int(random(0,2)));
      pop();
    }
  }
}

function oilRect(w, h, margin, increment) {
	let c = palette[int(random(0, 3))];
	let cBW = palette[3];
	let probability = int(random(0, 4));
	//背景は少し粗めの方が味があって良い(好みの値random(0, 15))
  
	if (probability < 2) {
	  for (let i = margin; i<h-margin; i+=increment) {
		for (let j = margin; j<w-margin; j+=increment) {
		  let mapi;
		  let l_c;
		  if (probability == 0) {
			mapi = map(i, margin, h-margin, 0, 3);
			l_c = lerpColor(cBW, c, mapi);
		  } else {
			mapi = map(j, margin, w-margin, 0, 3);
			l_c = lerpColor(cBW, c, mapi);
		  }
		  let l_cShadowArr = createColorShadow(l_c, random(0, 0.4), random(1.6, 2));
		  push();
		  translate(j, i);
		  oilPoint(l_cShadowArr, random(1, 3), random(1, 4), 1, int(random(0, 2)));
		  pop();
		}
	  }
	} else {
	  //背景は少し粗めの方が味があって良い(好みの値random(0, 15))
	  for (let i = h-margin; i>margin; i-=increment) {
		for (let j = w-margin; j>margin; j-=increment) {
			let mapi;
			let l_c;
		  if (probability == 2) {
			mapi = map(i, margin, h-margin, 0, 3);
			l_c = lerpColor(cBW, c, mapi);
		  } else {
			mapi = map(j, margin, w-margin, 0, 3);
			l_c = lerpColor(cBW, c, mapi);
		  }
		  let l_cShadowArr = createColorShadow(l_c, random(0, 0.4), random(1.6, 2));
		  push();
		  translate(w-j, h-i);
		  oilPoint(l_cShadowArr, random(1, 3), random(1, 4), 1, int(random(0, 2)));
		  pop();
		}
	  }
	}
  }
  