class CapsuleObstacle {
    constructor(x1, y1, x2, y2, width, bounceColor, fillColor) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.width = width;
        this.halfWidth = width / 2;
        this.bounceColor = bounceColor;
        this.fillColor = fillColor;
        this.bax = this.x2 - this.x1;
        this.bay = this.y2 - this.y1;
        this.lengthSq = this.bax * this.bax + this.bay * this.bay;
        this.transparent = false;
    }

    draw(gr) {
        if (this.transparent) {
            return;
        }
        gr.fill(this.fillColor);
        gr.noStroke();
        gr.circle(this.x1, this.y1, this.width);
        gr.circle(this.x2, this.y2, this.width);

        let dx = this.x2 - this.x1;
        let dy = this.y2 - this.y1;

        const l = Math.sqrt(dx * dx + dy * dy);
        dx = dx / l;
        dy = dy / l;

        const p1x1 = this.x1 + dy * this.halfWidth;
        const p1y1 = this.y1 - dx * this.halfWidth;

        const p1x2 = this.x2 + dy * this.halfWidth;
        const p1y2 = this.y2 - dx * this.halfWidth;

        const p2x1 = this.x1 - dy * this.halfWidth;
        const p2y1 = this.y1 + dx * this.halfWidth;

        const p2x2 = this.x2 - dy * this.halfWidth;
        const p2y2 = this.y2 + dx * this.halfWidth;

        gr.beginShape();
        gr.vertex(p1x1, p1y1);
        gr.vertex(p1x2, p1y2);
        gr.vertex(p2x2, p2y2);
        gr.vertex(p2x1, p2y1);
        gr.endShape(CLOSE);
    }

    hit(physCircle, x, y, g) {
        physCircle.color = this.bounceColor;
    }

    hitTest(circl) {}

    getDist(px, py) {
        const pax = px - this.x1;
        const pay = py - this.y1;

        const h = constrain(
            (pax * this.bax + pay * this.bay) / this.lengthSq,
            0,
            1
        );

        const rx = pax - this.bax * h;
        const ry = pay - this.bay * h;

        return Math.sqrt(rx * rx + ry * ry) - this.halfWidth;
    }
}
