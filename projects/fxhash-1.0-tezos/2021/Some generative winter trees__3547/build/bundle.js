(function () {
    'use strict';

    const { sin, cos } = Math;
    function lineEnd(x, y, angle, length) {
        return [x + cos(angle) * length, y + sin(angle) * length];
    }
    function randChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    function weightedChoice(arr) {
        const step = 1 / arr
            .map(({ weight }) => weight)
            .reduce((acc, cur) => acc + cur);
        const rand = Math.random();
        let sum = 0;
        let i = 0;
        while (sum < rand) {
            sum += step * arr[i].weight;
            i++;
        }
        return arr[i - 1].value;
    }
    const values = [
        { weight: 3, value: 'a' },
        { weight: 1, value: 'b' }
    ];
    const results = {
        a: 0,
        b: 0
    };
    for (let i = 0; i < 1000; i++) {
        results[weightedChoice(values)]++;
    }

    window.$fxhashFeatures = {
        "white core of flower": Math.random() > 0.8
    };
    const sMult = 2;
    const liana = () => new LianaBase();
    const cLeaf = randChoice([
        // liana,
        (d) => new Leaf(d - 1),
        (d) => new VertLeaf(d - 1),
        (d) => new RoundLeaf(d - 1),
    ]);
    const cFlowerBase = randChoice([
        (d) => new FlowerBase(d - 1),
    ]);
    function genGradient(colors) {
        return (x1, y1, x2, y2) => {
            const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
            for (const [i, col] of colors.entries()) {
                gradient.addColorStop(i / colors.length, col);
            }
            return gradient;
        };
    }
    const randNoGreen = () => `rgb(${Math.random() * 255}, ${Math.random() * 20 + 20}, ${Math.random() * 255})`;
    const colPetal = randChoice([
        // genGradient([`rgb(50 50 200)`, `rgb(255 150 200)`]),
        genGradient([randNoGreen(), randNoGreen()]),
        // genGradient([
        //   `hsla(${Math.random() * 360}, 100%, 25%, 75%)`,
        //   `hsla(${Math.random() * 360}, 100%, 50%, 75%)`,
        //   `hsla(${Math.random() * 360}, 100%, 50%, 75%)`
        // ])
    ]);
    const colLeaf = randChoice([
        // genGradient([`rgb(${Math.random() * 50 + 150} 30 0 / 75%)`, `rgb(${Math.random() * 50 + 150} 20 0 / 75%)`]),
        // genGradient([`rgb(0 ${Math.random() * 50 + 150} 0 / 75%)`, `rgb(0 ${Math.random() * 50 + 180} 0 / 75%)`]),
        // genGradient([`rgb(150 ${Math.random() * 50 + 150} 100 / 75%)`, `rgb(100 ${Math.random() * 50 + 180} 100 / 75%)`]),
        // genGradient([`rgb(50 ${Math.random() * 150 + 50} 75 / 75%)`, `rgb(50 ${Math.random() * 50 + 50} 75 / 75%)`]),
        // genGradient([`white`, `crimson`]),
        genGradient([`hsla(${Math.random() * 360}, 100%, 25%, 75%)`, `hsla(${Math.random() * 360}, 100%, 75%, 75%)`]),
        // genGradient([
        //   `hsla(${Math.random() * 360}, 100%, 25%, 75%)`,
        //   `hsla(${Math.random() * 360}, 100%, 50%, 75%)`,
        //   `hsla(${Math.random() * 360}, 100%, 50%, 75%)`
        // ])
    ]);
    const colBranch = randChoice([
        genGradient([`rgb(${Math.random() * 50 + 150} 30 0 / 75%)`, `rgb(${Math.random() * 50 + 150} 20 0 / 75%)`]),
        genGradient([`rgb(0 ${Math.random() * 50 + 100} 0 / 75%)`, `rgb(0 ${Math.random() * 50 + 120} 0 / 75%)`]),
        genGradient([`rgb(100 ${Math.random() * 100 + 100} 100 / 75%)`, `rgb(100 ${Math.random() * 100 + 130} 100 / 75%)`]),
        genGradient([`rgb(50 ${Math.random() * 150 + 50} 75 / 75%)`, `rgb(50 ${Math.random() * 50 + 50} 75 / 75%)`]),
        genGradient([`black`, `rgb(50 50 50)`]),
    ]);
    const colTrunk = randChoice([
        // genGradient([`rgb(75 50 50)`, `rgb(100 75 50)`]),
        // genGradient([
        //   `rgb(${Math.random() * 40 + 120} ${Math.random() * 40 + 120} ${Math.random() * 40 + 120})`,
        //   `rgb(${Math.random() * 50 + 150} ${Math.random() * 50 + 150} ${Math.random() * 50 + 150})`,
        // ]),
        genGradient([
            `rgb(${Math.random() * 20 + 20} ${Math.random() * 20 + 20} ${Math.random() * 20 + 20})`,
            `rgb(${Math.random() * 20 + 40} ${Math.random() * 20 + 30} ${Math.random() * 20 + 30})`
        ]),
    ]);
    const colFlowerBase = window.$fxhashFeatures['white core of flower'] ? "white" : randChoice(['coral', 'black', 'orange', 'violet']);
    const wTrunk = randChoice([
        5,
        20,
        40
    ]) * sMult;
    const dBranch = randChoice([
        Math.PI * Math.random() / 4,
        Math.PI * 2 * Math.random() / 4
    ]);
    const amPetals = randChoice([
        Math.round(Math.random() * 10) + 1,
    ]);
    const rFlowerBase = (Math.random() * 20 + 1) * sMult;
    const lenPetals = (Math.random() * 50 + 10) * sMult;
    const wPetals = (Math.random() * 5 + 10) * sMult;
    const lenTrunk = randChoice([20, 60, 80]) * sMult;
    const lenBranch = 100 * sMult - lenTrunk;
    const lenLeaf = (Math.random() * 40 + 40) * sMult;
    const distPetals = randChoice([
        Math.random() * Math.PI * 1.5,
        Math.PI * 2
    ]);
    function flatTree(tree) {
        const elems = [tree];
        for (const child of tree.children) {
            elems.push(...flatTree(child));
        }
        return elems;
    }
    class Petals {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(_d) { }
        draw(ctx, x, y, angle) {
            const start = lineEnd(x, y, angle, rFlowerBase);
            const end = lineEnd(x, y, angle, rFlowerBase + lenPetals);
            ctx.lineWidth = wPetals;
            ctx.lineCap = 'butt';
            // const gradient = ctx.createLinearGradient(x, y, ...end);
            // gradient.addColorStop(0, `rgb(50 50 200)`);
            // gradient.addColorStop(1, `rgb(255 150 200)`);
            ctx.strokeStyle = colPetal(x, y, ...end);
            drawLine(ctx, ...start, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI * 2);
        }
    }
    class FlowerBase {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(d) {
            for (let i = 0; i < amPetals; i++) {
                const elem = new Petals(d - 1);
                this.children.push(elem);
            }
        }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, Math.random() * Math.PI * 2, rFlowerBase);
            if (end[0] < border || end[0] > canvas.width - border)
                return null;
            ctx.fillStyle = colFlowerBase;
            ctx.beginPath();
            ctx.arc(...end, rFlowerBase, 0, Math.PI * 2);
            ctx.fill();
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, distPetals);
        }
    }
    class Liana {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(d) {
            if (d <= 0)
                return;
            const elem = new Liana(d - Math.random() * 2);
            this.children.push(elem);
        }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), lenLeaf - 30 * sMult);
            const start2 = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), this.d * 3 * sMult - 10 * sMult);
            const end2 = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), lenLeaf + this.d * 3 * sMult - 10 * sMult);
            ctx.lineWidth = this.d * sMult * 2;
            ctx.strokeStyle = colLeaf(...start2, ...end2);
            ctx.lineCap = 'round';
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    class LianaBase {
        constructor() {
            this.children = [];
            this.d = 5;
            this.grow(this.d);
        }
        grow(d) {
            if (d <= 0)
                return;
            const elem = new Liana(d - 1);
            this.children.push(elem);
        }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), lenLeaf / 2 - 30 * sMult);
            const start2 = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), this.d * 3 * sMult - 10 * sMult);
            const end2 = lineEnd(x, y, Math.PI / 2 + (Math.random() - 0.5), lenLeaf / 2 + this.d * 3 * sMult - 10 * sMult);
            ctx.lineWidth = this.d * sMult * 2;
            ctx.strokeStyle = colLeaf(...start2, ...end2);
            ctx.lineCap = 'round';
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    class RoundLeaf {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(_d) { }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, Math.random() * Math.PI * 2, lenLeaf / 4);
            const end2 = lineEnd(x, y, Math.random() * Math.PI * 2, lenLeaf);
            if (end[0] < border || end[0] > canvas.width - border)
                return null;
            ctx.fillStyle = colLeaf(x, y, ...end2);
            ctx.beginPath();
            ctx.arc(...end, lenLeaf / 4, 0, Math.PI * 2);
            ctx.fill();
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    class VertLeaf {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(_d) { }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, -Math.PI / 2 + (Math.random() - 0.5), lenLeaf + Math.random() * 50 * sMult + 20 * sMult);
            if (end[0] < border || end[0] > canvas.width - border)
                return null;
            ctx.lineWidth = 5 * sMult;
            ctx.strokeStyle = colLeaf(x, y, ...end);
            ctx.lineCap = 'butt';
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    class Leaf {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(_d) { }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, angle + (Math.random() - 0.5), lenLeaf + Math.random() * 5 * sMult);
            if (end[0] < border || end[0] > canvas.width - border)
                return null;
            ctx.lineWidth = 30 * sMult;
            ctx.strokeStyle = colLeaf(x, y, ...end);
            ctx.lineCap = 'butt';
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    class Branch {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(d) {
            if (d <= 0) {
                this.children.push(cLeaf(d));
                return;
            }
            for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
                let canProduceFlower = this.children.every(child => !(child instanceof FlowerBase));
                const elem = Math.random() > 0.5
                    ? new Branch(d - 1)
                    : Math.random() < 0.25 && d < 5 && canProduceFlower
                        ? cFlowerBase(d)
                        : cLeaf(d);
                this.children.push(elem);
            }
        }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, angle + (Math.random() - 0.5) * 0.5, lenBranch + this.d * sMult + Math.random() * 10 * sMult);
            if (end[0] < border || end[0] > canvas.width - border)
                return null;
            ctx.lineWidth = this.d * sMult + 2 * sMult;
            ctx.lineCap = 'round';
            ctx.strokeStyle = colBranch(x, y, ...end);
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, dBranch);
        }
    }
    class Trunk {
        constructor(d) {
            this.d = d;
            this.children = [];
            this.grow(d);
        }
        grow(d) {
            if (d <= 0)
                return;
            for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
                const elem = Math.random() > 0.5
                    ? new Branch(d - 1)
                    : new Trunk(d - 1);
                this.children.push(elem);
            }
        }
        draw(ctx, x, y, angle) {
            const end = lineEnd(x, y, angle + (Math.random() - 0.5) * 0.5, lenTrunk + this.d + Math.random() * 10 * sMult);
            if (end[0] < 20 || end[0] > canvas.width - 20)
                return null;
            ctx.lineWidth = this.d * 4 * sMult + wTrunk;
            ctx.lineCap = 'round';
            ctx.strokeStyle = colTrunk(x, y, ...end);
            drawLine(ctx, x, y, ...end);
            return end;
        }
        drawWithChildren(ctx, x, y, angle) {
            drawWithChildren(this, ctx, x, y, angle, Math.PI / 4);
        }
    }
    function drawWithChildren(treeElem, ctx, x, y, angle, maxAngle) {
        const end = treeElem.draw(ctx, x, y, angle);
        if (!end)
            return;
        const calcAngle = getAngle(maxAngle, treeElem.children.length);
        treeElem.children.forEach((child, i) => {
            child.drawWithChildren(ctx, ...end, calcAngle(i) + angle);
        });
    }
    function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    function getAngle(maxAngle, amount) {
        if (amount === 1)
            return () => 0;
        if (Math.PI * 2 === maxAngle)
            return (i) => i * (maxAngle / amount) + (amount === 2 ? Math.PI / 2 : 0);
        return (i) => (i * maxAngle) / (amount - 1) - maxAngle / 2;
    }
    function makeTree(x, y, depth) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = bgColor;
        // ctx.fillRect(border, border, canvas.width - border * 2, canvas.height - border * 2);
        bgDraw(ctx);
        tree = new Trunk(depth);
        for (let i = 0; i < 100; i++) {
            drawSnowflake();
        }
        tree.drawWithChildren(ctx, x, y, -Math.PI * 0.5);
        for (let i = 0; i < 100; i++) {
            drawSnowflake();
        }
    }
    function drawSnowflake() {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * sMult * 2 + sMult * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.filter = `blur(${Math.random() * 10})px`;
        ctx.fill();
        ctx.filter = `none`;
    }
    const canvas = document.querySelector("canvas");
    canvas.width = 1024 * sMult;
    canvas.height = 1024 * sMult;
    const ctx = canvas.getContext("2d");
    const minElements = cLeaf === liana ? 1000 : 400;
    const border = 80 * sMult;
    const grad = ctx.createLinearGradient(0, border, 0, canvas.height - border);
    grad.addColorStop(0, `hsl(${Math.random() * 360}, 45%, 10%)`);
    grad.addColorStop(1, `hsl(${Math.random() * 360}, 45%, 0%)`);
    const bgColor = randChoice([
        grad,
        'black',
    ]);
    window.$fxhashFeatures['round background'] = Math.random() > 0.66;
    const bgDraw = window.$fxhashFeatures['round background']
        ? (ctx) => {
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2 - border, 0, Math.PI * 2);
            ctx.fillStyle = bgColor;
            ctx.fill();
        }
        : (ctx) => {
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = bgColor;
            ctx.fillRect(border, border, canvas.width - border * 2, canvas.height - border * 2);
        };
    // const bgDraw: (ctx: CanvasRenderingContext2D) => void = randChoice([
    //   (ctx) => ctx.fillRect(border, border, canvas.width - border * 2, canvas.height - border * 2),
    //   (ctx) => {
    //     ctx.beginPath();
    //     ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2 - border, 0, Math.PI * 2);
    //     ctx.fill();
    //   },
    // ]);
    let tree = new Trunk(10);
    while (flatTree(tree).length < minElements) {
        tree = new Trunk(10);
    }
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, `hsl(${Math.random() * 360}, 50%, 85%)`);
    bgGradient.addColorStop(1, `hsl(${Math.random() * 360}, 50%, 85%)`);
    bgDraw(ctx);
    for (let i = 0; i < 100; i++) {
        drawSnowflake();
    }
    tree.drawWithChildren(ctx, canvas.width / 2, canvas.height - 75 * sMult, -Math.PI * 0.5);
    for (let i = 0; i < 100; i++) {
        drawSnowflake();
    }
    canvas.addEventListener('click', () => {
        makeTree(canvas.width / 2, canvas.height - 75 * sMult, 10);
    });

})();
