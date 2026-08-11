const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d')

canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;

resize();
window.onresize = resize;

function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio
    canvas.height = window.innerHeight * window.devicePixelRatio
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
}

function noise(ctx) {
    const w = ctx.canvas.width,
        h = ctx.canvas.height,
        iData = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(iData.data.buffer),
        len = buffer32.length
    let i = 0
    for (; i < len; i++)
        if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
    ctx.putImageData(iData, 0, 0);
}

(function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
})();

function play() {
    $(".neon").each(function () {
        $(this)
            .get(0)
            .style.setProperty("--width", Math.floor(fxrand() * 24));
        $(this)
            .get(0)
            .style.setProperty("--height", Math.floor(fxrand() * 12));
        $(this)
            .get(0)
            .style.setProperty(
                "--angle",
                Math.floor(fxrand() * 5) * 90 + "deg"
            );
        $("#wrap")
            .get(0)
            .style.setProperty(
                "--angle",
                Math.floor(fxrand() * 5) * 90 + "deg"
            );
    });
}

play();
