function loadPage(ISHIGHRES, ISNOISE, ANIMATE = true) {
    //util randint func
    function randint(min, max, bias = 1) { return Math.floor($fx.rand() ** bias * (max - min) + min) }

    //view properties
    const SCALE = ISHIGHRES ? 4 : 2;
    const STRETCH = 1.6;

    const WIDTH = SCALE * 1000;
    const HEIGHT = SCALE * 1000;


    const ZOOM = randint(1, 7, 2.5) / 2 + 0.2
    let zoomVal = Math.ceil(ZOOM - 0.2)
    let FLOWERNUM = randint(zoomVal, zoomVal ** 3 + zoomVal * 4, 1.1)

    //main canvas in DOM
    let mainCanvas = document.getElementById("mainCanvas")
    let mainCtx = mainCanvas.getContext("2d")
    mainCanvas.width = WIDTH; mainCanvas.height = HEIGHT;

    mainCtx.scale(1/ZOOM, 1/(ZOOM * STRETCH))


    let colChoice = $fx.rand()
    //select colour palette
    if (1 == 1) {
        if (colChoice < 0.23) {        //cream
            mainCtx.strokeStyle = "#44440066"
            mainCtx.fillStyle = "#ffddaa"
        }

        else if (colChoice < 0.3) { //yellow on black
            mainCtx.fillStyle = "#000000"
            mainCtx.strokeStyle = "#eeaa0066"
        }
        else if (colChoice < 0.36) { //white on black
            mainCtx.fillStyle = "#000000"
            mainCtx.strokeStyle = "#eeeeee66"
        }
        else if (colChoice < 0.43) {  //red on black
            mainCtx.fillStyle = "#000000"
            mainCtx.strokeStyle = "#cc333366"
        }
        else if (colChoice < 0.51) { //black on red
            mainCtx.strokeStyle = "#11111166"
            mainCtx.fillStyle = "#aa3333"
        }
        else if (colChoice < 0.57) { //w on red
            mainCtx.strokeStyle = "#eeeeee66"
            mainCtx.fillStyle = "#aa3333"
        }
        else if (colChoice < 0.63) { //b on red
            mainCtx.strokeStyle = "#22225566"
            mainCtx.fillStyle = "#aa3333"
        }
        else if (colChoice < 0.73) { //white on cyan
            mainCtx.fillStyle = "#116666"
            mainCtx.strokeStyle = "#eeeeee66"
        }
        else if (colChoice < 0.78) { //black on cyan
            mainCtx.fillStyle = "#116666"
            mainCtx.strokeStyle = "#11111166"
        }
        else if (colChoice < 0.88) { //yellow on yellow
            mainCtx.fillStyle = "#666600"
            mainCtx.strokeStyle = "#cccc0066"
        }
        else if (colChoice < 0.98) { //yellow on purple
            mainCtx.strokeStyle = "#ddcc0066"
            mainCtx.fillStyle = "#550055"
        }
        else { //green on black
            mainCtx.strokeStyle = "#00ff0066"
            mainCtx.fillStyle = "#000000"
        }
    }



    class Flower {
        
        constructor(jump, density, petals, len, pos) {
            this.petals = petals;
            this.headMode = false;
            this.prog = 0;
            this.len = len;

            this.jump = jump;
            this.density = density;

            this.pos = {x: pos.x, y: pos.y + this.jump * this.len / this.density};

            this.rot = ($fx.rand() - 0.5) * 0.01;
            this.size = Math.floor($fx.rand() * 250 + 85);

            this.headMul = 0.5;

            this.swayRate = $fx.rand() * 1 + 0.5
            this.swayFactor = ($fx.rand() - 0.5) * 4 * SCALE * density ** 2
            this.swayOff = ($fx.rand() - 0.5) * 1.5;

            this.noise = jump * 3   / ZOOM
            this.headNoiseMul = 2
        }
        


        noisyCircle(ctx, radius, noise) {

            //last rot angle
            let last = 0
            
            for (let i = 0; i < this.petals; i++) {
                let between = last + Math.PI / this.petals
                let next = last + Math.PI * 2 / this.petals
        
                let from = [radius * Math.sin(last), radius * Math.cos(last)]
                
                let tween = [(noise + radius * Math.SQRT2) * Math.sin(between), (noise + radius * Math.SQRT2) * Math.cos(between)]
                
                let to = [radius * Math.sin(next), radius * Math.cos(next)]
        
                ctx.bezierCurveTo(from[0], from[1], tween[0], tween[1], to[0], to[1]);
        
                last = next
            }
        }


        draw(ctx) {

            let isFinished = false;


            ctx.beginPath();
            ctx.save();


            //drawing flower head
            if (this.headMode) {

                //drawing bezel
                if(this.prog < 20) {

                    this.pos.y -= this.jump
                    this.pos.x += Math.sin(this.len * this.density * this.swayRate / 50 + this.swayOff) * 1 * this.swayFactor
                    ctx.translate(this.pos.x, this.pos.y);
                    ctx.translate($fx.rand() * this.noise, $fx.rand() * this.noise)

                    this.prog += this.density * 0.7;


                    let x = this.prog / 20
                    ctx.arc(
                        0, 
                        0, 
                        10 * SCALE + x ** 2 * SCALE * 24, 
                        0, Math.PI * 2, false
                    )
                    ctx.stroke()
                }

                //drawing petals
                else if (this.prog < 60) {

                    this.pos.y -= this.jump * this.headMul
                    this.pos.x += Math.sin(this.len * this.density * this.swayRate / 50 + this.swayOff) * 1 * this.swayFactor
                    ctx.translate(this.pos.x, this.pos.y);

                    this.prog += this.density * this.headMul;
                
                    let x = (this.prog - 20) * 5 / 50
                    let sig = 1 / (1 + Math.exp(-x)) - 0.5 
                    let radius = 10 * SCALE + SCALE * 20 + sig * this.size * SCALE

                    ctx.translate($fx.rand() * this.noise * this.headNoiseMul, $fx.rand() * this.noise * this.headNoiseMul)
                    ctx.rotate(this.prog * this.rot)

                    this.noisyCircle(ctx, radius, x * ($fx.rand() * 10 + 15) * SCALE)
                    
                    ctx.stroke();

                    ctx.beginPath()
                    
                    //drawing bud
                    if (this.prog < 35) {
                        ctx.arc(0, 0, Math.sin(x * 1.3 + 1) * 40 * SCALE, 0, Math.PI * 2, false)
                        ctx.stroke()
                    }
                }

                else isFinished = true;
            }

            else { //drawing stem
                this.pos.y -= this.jump
                this.pos.x += Math.sin(this.len * this.density * this.swayRate / 50 + this.swayOff) * 1 * this.swayFactor
                ctx.translate(this.pos.x, this.pos.y);
                ctx.translate($fx.rand() * this.noise, $fx.rand() * this.noise)

                mainCtx.rotate(this.len / 10)
                mainCtx.arc(0, 0, 8 * SCALE, 0, Math.PI * 2, false)
                ctx.stroke()
                
                this.len -= this.density;
                if (this.len <= 0) this.headMode = true;
            }

            ctx.restore()
            
            return isFinished
        }
    }


    let flowers = [];

    let height = 500 * ZOOM;
    let density = 0.3 * ZOOM

    mainCtx.lineWidth = density * 1.35 * SCALE

    let canvas_jump = SCALE * 3 * density;

    mainCtx.fillRect(0, 0, WIDTH * ZOOM, HEIGHT * ZOOM * STRETCH)

    //place flowers
    for (let i = 0; i < FLOWERNUM; i++) {
        flowers.push(new Flower(
            canvas_jump, density,
            Math.floor(($fx.rand() * 5)**2) + 3, 
            height,
            {
                x: $fx.rand() * (ZOOM <= 3 ? 500 : 600) * ZOOM * SCALE + (ZOOM > 3 ? $fx.rand()*300 + 50 : 250) * ZOOM * SCALE,
                y: $fx.rand() * 650 * ZOOM * SCALE * STRETCH + (300) * SCALE * ZOOM * STRETCH
            }) )
    }


    let frame = 0;
    function main() {
        frame += 1;

        let total = 0;
        
        mainCtx.translate(Math.sin(frame / 100) * 0.1, 0)
        flowers.forEach((flower) => {
            if(flower.draw(mainCtx)) total ++;
        })


        if (total == flowers.length) {
            FINISH();
            return;
        }


        if(frame % 5 == 0) {
            if (ANIMATE) requestAnimationFrame(main);
            else main();
        }
        else {
            main();
        }
    }

    main()

    function FINISH() {
      
        if (ISNOISE) {
            const imgData = mainCtx.getImageData(0, 0, WIDTH, HEIGHT);
            const data = imgData.data;

            for(let i = 0; i < data.length; i += 4) {
                let val = $fx.rand() * 70 - 35
                data[i] += val;
                data[i + 1] += val;
                data[i + 2] += val;
                data[i + 3];
            }

            mainCtx.putImageData(imgData, 0, 0);
        }

        $fx.preview()
        console.log("Generation Complete")
    }
}

let isHighRes = false; let isNoise = true; 

console.log("Generating...")
loadPage(isHighRes, isNoise)

document.addEventListener("keypress", (e) => {
    if (e.key == "f") {
        isHighRes = !isHighRes;

        $fx.rand = sfc32(...fxhashTrunc.match(new RegExp(".{" + ((fxhash.length / 4) | 0) + "}", "g")).map((h) => b58dec(h)))

        let freshCanv = document.createElement("canvas");
        freshCanv.id = "mainCanvas"
        document.getElementById("mainCanvas").replaceWith(freshCanv)

        console.log("Generating...")
        loadPage(isHighRes, isNoise, false)
    }
    else if (e.key == "g") {
        isNoise = !isNoise;

        $fx.rand = sfc32(...fxhashTrunc.match(new RegExp(".{" + ((fxhash.length / 4) | 0) + "}", "g")).map((h) => b58dec(h)))

        let freshCanv = document.createElement("canvas");
        freshCanv.id = "mainCanvas"
        document.getElementById("mainCanvas").replaceWith(freshCanv)

        console.log("Generating...")
        loadPage(isHighRes, isNoise, false)
    }
});
//paraALBA