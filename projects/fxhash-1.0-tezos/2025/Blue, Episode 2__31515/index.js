const NUMBER_OF_COLORS = 32;
const NUMBER_OF_ITERATIONS_AT_TIME = 500;
const FIELD_SIZE = 1024;

let speed = [];
let cell_size = 1;
let start_points = [];
let field = [];
let next_field = [];
let next = [];
let cell_colors = [];


function make_iteration() {
    let next_cells = [];
    for (let n = 0; n < NUMBER_OF_COLORS; n++) {
        for (let k = 0; k < speed[n]; k++) {
            if (next[n].length > 0) {
                let r = random_integer(next[n].length);
                let cx = next[n][r].x;
                let cy = next[n][r].y;
                field[cx][cy] = n;
                for (let i = r + 1; i < next[n].length; i++) {
                    next[n][i - 1] = next[n][i];
                }
                next[n].length--;
                let neighbours = get_neighbours(cx, cy);
                for (let i = 0; i < neighbours.length; i++) {
                    let nx = neighbours[i].x;
                    let ny = neighbours[i].y;
                    if (next_field[nx][ny].processed) {
                        continue;
                    }
                    next_field[nx][ny].colors.push(n);
                    if (next_field[nx][ny].colors.length === 1) {
                        next_cells.push(neighbours[i]);
                    }
                }
            }
        }
    }
    for (const cell of next_cells) {
        let possible_colors = next_field[cell.x][cell.y].colors;
        if (possible_colors.length === 1) {
            next[possible_colors[0]].push(cell);
        } else {
            next[possible_colors[random_integer(possible_colors.length)]].push(cell);
        }
        next_field[cell.x][cell.y].processed = true;
    }
}

function make_iterations(n) {
    for (let i = 0; i < n; i++) {
        make_iteration();
    }
}

function setup() {
    createCanvas(FIELD_SIZE, FIELD_SIZE).id('board');
    let colorBlue = color('blue')
    let colorRoyalBlue = color('royalblue')
    for (let i = 0; i < NUMBER_OF_COLORS; i++) {
        cell_colors.push(lerpColor(colorBlue, colorRoyalBlue, (i + 1) / NUMBER_OF_COLORS));
    }
    let setx = new Set();
    let sety = new Set();
    start_points = [];
    for (let i = 0; i < NUMBER_OF_COLORS; i++) {
        cell_colors.push(color(random_integer(255), random_integer(255), random_integer(255)));
        let cx = random_integer_except(FIELD_SIZE, setx);
        setx.add(cx - 1);
        setx.add(cx);
        setx.add(cx + 1);
        let cy = random_integer_except(FIELD_SIZE, sety);
        setx.add(cy - 1);
        setx.add(cy);
        setx.add(cy + 1);
        start_points.push({x: cx, y: cy});
    }
    for (let i = 0; i < FIELD_SIZE; i++) {
        field[i] = [];
        next_field[i] = [];
        for (let j = 0; j < FIELD_SIZE; j++) {
            field[i][j] = -1;
            next_field[i][j] = {processed: false, colors: []};
        }
    }
    for (let i = 0; i < NUMBER_OF_COLORS; i++) {
        speed[i] = random_integer(4) + 1;
        field[start_points[i].x][start_points[i].y] = i;
        next_field[start_points[i].x][start_points[i].y].processed = true;
        next[i] = get_neighbours(start_points[i].x, start_points[i].y);
        for (const p of next[i]) {
            next_field[p.x][p.y].processed = true;
        }
    }
}

function draw() {
    background('blue');
    if (cell_size === 1) {
        for (let i = 0; i < FIELD_SIZE; i++) {
            for (let j = 0; j < FIELD_SIZE; j++) {
                if (field[i][j] >= 0) {
                    stroke(cell_colors[field[i][j]]);
                    point(i, j);
                }
            }
        }
    } else {
        for (let i = 0; i < FIELD_SIZE; i++) {
            for (let j = 0; j < FIELD_SIZE; j++) {
                if (field[i][j] >= 0) {
                    let c = cell_colors[field[i][j]];
                    stroke(c);
                    fill(c);
                    square(i * cell_size, j * cell_size, cell_size);
                }
            }
        }
    }
    make_iterations(NUMBER_OF_ITERATIONS_AT_TIME);
}

function get_neighbours(cx, cy) {
    let neighbours = [];
    for (const p of [{x: cx - 1, y: cy - 1}, {x: cx - 1, y: cy}, {x: cx - 1, y: cy + 1},
        {x: cx, y: cy - 1}, {x: cx, y: cy + 1}, {x: cx + 1, y: cy - 1}, {x: cx + 1, y: cy},
        {x: cx + 1, y: cy + 1}]) {

        if ((p.x >= 0) && (p.y >= 0) && (p.x < FIELD_SIZE) && (p.y < FIELD_SIZE)) {
            neighbours.push(p);
        }
    }
    return neighbours;
}

function random_integer(x) {
    return Math.floor($fx.rand() * x);
}

function random_integer_except(x, set) {
    let r = random_integer(x);
    if (! (set.has(x))) {
        return r;
    }
    if ($fx.rand() >= 0.5) {
        while ((set.has(r)) && (r < x)) {
            r++;
        }
        if (r >= x) {
            while (set.has(r)) {
                r--;
            }
        }
    } else {
        while (set.has(r) && (r >= 0)) {
            r--;
        }
        if (r < 0) {
            while (set.has(r)) {
                r++;
            }
        }
    }
    return r;
}
