function linearGradientFill(x1, y1, x2, y2, color1, color2) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
}

function radialGradientFill(x1, y1, r1, x2, y2, r2, color1, color2) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
    gradient.addColorStop(0.5, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
}