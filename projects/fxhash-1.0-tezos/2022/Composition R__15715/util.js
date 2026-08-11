function choose(arr){
	return arr[Math.floor(fxrand() * arr.length)];
}

function mapRange(x, a, b, c, d){
    return ((x - a) / (b - a)) * (d - c) + c;
}

function fxRange(min, max){
    return min + (fxrand() * (max - min));
}

function fxInt(min, max){
    return Math.floor(fxRange(min, max))
}

function fxGauss(mu, sigma){
    let u1, u2, s;
    do{
    u1 = fxrand() * 2 - 1;
    u2 = fxrand() * 2 - 1;
    s = u1 * u1 + u2 * u2;
    }while(s === 0 || s >=1);
    //console.log(`${u1} ${u2} ${s}`)
    return sigma * (u1 * Math.sqrt(-2 * Math.log(s) / s)) + mu;
}

function lerp(a, b, pct){
    return a.add(b.subtract(a).mult(pct));
}