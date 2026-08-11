function sign(x) {
    return x >= 0 ? 1 : 0;
}

function shuffleArray(d) {
    for (let c = d.length - 1; c > 0; c--) {
        const b = Math.floor(Math.random() * (c + 1));
        const a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}
