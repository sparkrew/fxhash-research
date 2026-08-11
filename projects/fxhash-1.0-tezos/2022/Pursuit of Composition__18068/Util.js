//sinの計算値配列
function createSinArr(startAng, endAng) {
	let sinArr = [];
	for (let i = startAng; i < endAng; i += 1) {
		sinArr.push(sin(radians(i)));
	}
	return sinArr;
}

//cosの計算値配列
function createCosArr(startAng, endAng) {
	let cosArr = [];
	for (let i = startAng; i < endAng; i += 1) {
		cosArr.push(cos(radians(i)));
	}
	return cosArr;
}

//randomLowとrandomMaxの範囲内でnと重複しない値を取得
function nonDuplicate(n, randomLow, randomMax) {
  let numList = [];
  numList.push(n);
  while (numList.length < 2) {
    let num = int(random(randomLow, randomMax));
    if (numList[0] != num) {
      numList.push(num);
    }
  }
  return numList[1];
}