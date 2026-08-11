class CircleObstacle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.transparent = false;
        this.radialMode = "none";
    }

    getDist(px, py) {
        return (
            Math.sqrt(
                (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y)
            ) - this.radius
        );
    }

    draw(g) {
        if (this.transparent) return;
        g.fill(this.color);
        g.noStroke();
        g.circle(this.x, this.y, this.radius * 2);
    }

    hit(c, hx, hy, g) {
        const dx = hx - this.x;
        const dy = hy - this.y;
        const dist = sqrt(dx * dx + dy * dy);

        g.strokeWeight((1 * P_WIDTH) / 1000);
        g.stroke(
            "rgba(" +
                red(c.color) +
                "," +
                green(c.color) +
                "," +
                blue(c.color) +
                "," +
                RADIAL_OPACITY +
                ")"
        );

        if (this.radialMode == "kettle") {
            g.line(
                this.x + (dx / dist) * this.radius * 0.8,
                this.y + (dy / dist) * this.radius * 0.8,
                this.x + (dx / dist) * this.radius,
                this.y + (dy / dist) * this.radius
            );
            g.line(
                this.x - (dx / dist) * this.radius * 0.8,
                this.y - (dy / dist) * this.radius * 0.8,
                this.x - (dx / dist) * this.radius * 0.2,
                this.y - (dy / dist) * this.radius * 0.2
            );
            g.line(
                this.x + (dx / dist) * this.radius * 0.2,
                this.y + (dy / dist) * this.radius * 0.2,
                this.x,
                this.y
            );
        } else if (this.radialMode == "cone") {
            g.line(
                this.x + (dx / dist) * this.radius,
                this.y + (dy / dist) * this.radius,
                this.x,
                this.y
            );
        } else if (this.radialMode == "dumbCone") {
            g.line(
                this.x + (dx / dist) * this.radius,
                this.y + (dy / dist) * this.radius,
                this.x + (dx / dist) * this.radius * 0.2,
                this.y + (dy / dist) * this.radius * 0.2
            );
        } else if (this.radialMode == "lowCone") {
            g.line(
                this.x + (dx / dist) * this.radius,
                this.y + (dy / dist) * this.radius,
                this.x + (dx / dist) * this.radius * 0.8,
                this.y + (dy / dist) * this.radius * 0.8
            );
        }

        c.color = this.color;
    }
}
