class PRand {
	constructor(seed){
		const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
		var seed_int = hashCode(String(seed));
		this.S = Uint32Array.from([0, 1, 2, 3].map(i => seed_int+(i * 8 + 2) ));
	}

	R(){
		var t1 = this.S[3];
		var t2 = this.S[0];
		this.S[3] = this.S[2];
		this.S[2] = this.S[1];
		this.S[1] = this.S[0];
		t1 ^= t1 << 11;
		this.S[0] ^= (t1 ^ t1 >>> 8) ^ (t2 >>> 19);
		return( this.S[0] / 2 ** 32);
	}

	R_lim(min, max){
		return min+(max-min)*this.R();
	}

	R_lim_int(min,max){
		return int(this.R_lim(min,max+1));
	}
}