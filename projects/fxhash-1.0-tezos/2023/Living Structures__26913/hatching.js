function cubicB(p0, p1, p2, p3, t) {
    let v1 = quadraticB(p0, p1, p2, t);
    let v2 = quadraticB(p1, p2, p3, t);

    let x = lerp(v1.x, v2.x, t);
    let y = lerp(v1.y, v2.y, t);

    return createVector(x, y);
}

function quadraticB(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);

    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    return createVector(x, y);
}

function hatchQuadratic(x0, y0, cx, cy, x1, y1, thick, gap, off, col) {
    buff.noStroke();
    buff.fill(col);

    let p0 = createVector(x0, y0);
    let c = createVector(cx, cy);
    let p1 = createVector(x1, y1);

    let length = dist(x0, y0, x1, y1);
    let step = gap / length;

    for (let t = 0; t < 1; t += step) {
        let v = quadraticB(p0, c, p1, t);

        let xOff = random(-off, off);
        let yOff = random(-off, off);
        buff.rect(v.x + xOff, v.y + yOff, thick, thick);
    }
}

function hatchCubic(x0, y0, cx0, cy0, cx1, cy1, x1, y1, thick, gap, off, col) {
    buff.noStroke();
    buff.fill(col);
    let p0 = createVector(x0, y0);
    let c0 = createVector(cx0, cy0);
    let c1 = createVector(cx1, cy1);
    let p1 = createVector(x1, y1);

    let length = dist(x0, y0, x1, y1);
    let step = gap / length;
    for (let t = 0; t < 1; t += step) {
        let v = cubicB(p0, c0, c1, p1, t);

        v.x -= thick / 2;
        v.y -= thick / 2;

        let xOff = random(-off, off);
        let yOff = random(-off, off);
        buff.rect(v.x + xOff, v.y + yOff, thick, thick);
    }
}

function hatchLine(x0, y0, x1, y1, thick, gap, off, col) {
    buff.noStroke();
    buff.fill(col);
    let length = dist(x0, y0, x1, y1);
    let dx = x1 - x0;
    let dy = y1 - y0;
    let step = gap / length;
    for (let i = 0; i < 1; i += step) {
        let x = x0 + i * dx - thick / 2;
        let y = y0 + i * dy - thick / 2;
        let xOff = random(-off, off);
        let yOff = random(-off, off);
        buff.rect(x + xOff, y + yOff, thick, thick);
    }
}

function hatch(
    rectangle,
    spacing,
    angle,
    angleVariation,
    thick,
    col,
    hatchType = "line",
    curvature = 0
) {
    if (hatchType == "fill") {
        buff.noStroke();
        buff.fill(col);
        buff.rect(
            rectangle.min.x,
            rectangle.min.y,
            rectangle.min.x + rectangle.w,
            rectangle.min.y + rectangle.h
        );
    } else {
        //вычисляем диагональ прямоугольника (максимальную длину и ширину штриховки)
        let diag = sqrt(rectangle.w * rectangle.w + rectangle.h * rectangle.h);

        //вычисляем количество штрихов, поделив ширину на промежуток между штрихами
        let number = floor(diag / spacing) + 1;

        push();
        buff.translate(rectangle.center.x, rectangle.center.y);
        buff.rotate(radians(angle));
        //отступаем на половину штриховки вниз
        let y = -(number * spacing) / 2;
        for (let i = 0; i < number; i++) {
            buff.rotate(radians(random(-angleVariation, angleVariation)));
            switch (hatchType) {
                case "line":
                    hatchLine(
                        -diag / 2,
                        y,
                        diag / 2,
                        y,
                        thick,
                        options.pointGap,
                        options.pointShift,
                        col
                    );
                    break;
                case "quadratic":
                    hatchQuadratic(
                        -diag / 2,
                        y,
                        0,
                        y + curvature,
                        diag / 2,
                        y,
                        thick,
                        options.pointGap,
                        options.pointShift,
                        col
                    );
                    break;
                case "cubic":
                    hatchCubic(
                        -diag / 2,
                        y,
                        0,
                        y - curvature,
                        0,
                        y + curvature,
                        diag / 2,
                        y,
                        thick,
                        options.pointGap,
                        options.pointShift,
                        col
                    );
                    break;
            }
            y += spacing; //рисуем линию и добавляем промежуток
        }

        pop();
    }
}

function clippedHatch(
    rectangle,
    spacing,
    angle,
    angleVariation,
    thickness,
    col,
    hatchType = "line",
    curvature = 0,
    clipped = true
) {
    let hShift = options.hatchingShift;
    let hBorder = options.hatchingBorder;
    buff.push();
    buff.stroke(col);
    buff.strokeWeight(1);
    let ctx = buff.drawingContext;
    let path = new Path2D();
    path.rect(
        rectangle.min.x + hBorder + random(-hShift, hShift),
        rectangle.min.y + hBorder + random(-hShift, hShift),
        rectangle.w - hBorder + random(-hShift, hShift),
        rectangle.h - hBorder + random(-hShift, hShift)
    );

    if (clipped) {
        ctx.clip(path);
    }

    hatch(
        rectangle,
        spacing,
        angle,
        angleVariation,
        thickness,
        col,
        hatchType,
        curvature
    );
    ctx.restore();
    buff.pop();
}
