$fx.params([
    {
        id: "canvas_width",
        name: "Canvas Width",
        type: "number",
        options: {
            min: 800,
            max: 800,
            step: 1,
            default: 800
        }
    },
    {
        id: "canvas_height",
        name: "Canvas Height",
        type: "number",
        options: {
            min: 800,
            max: 800,
            step: 1,
            default: 800
        }
    },
    {
        id: "num_circles",
        name: "Number of Circles",
        type: "number",
        options: {
            min: 10,
            max: 30,
            step: 1,
            default: 10
        }
    }
]);

// Function to generate the pattern
function generatePattern() {
    const canvasWidth = $fx.getParam("canvas_width");
    const canvasHeight = $fx.getParam("canvas_height");
    let numCircles = $fx.getParam("num_circles");

    // Adjust numCircles if it exceeds the maximum or falls below the minimum
    numCircles = Math.max(10, Math.min(numCircles, 30));

    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f0f0'; // Milky background
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < numCircles; i++) {
        const radius = $fx.rand() * 50 + 20; // Random circle radius
        const x = $fx.rand() * (canvasWidth - radius * 2) + radius; // Random x position ensuring circle stays within canvas
        const y = $fx.rand() * (canvasHeight - radius * 2) + radius; // Random y position ensuring circle stays within canvas
        const color = '#' + Math.floor($fx.rand() * 16777215).toString(16); // Random color

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

// Generate pattern initially and on parameter update
$fx.on("params:update", () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before generating new pattern
    generatePattern();
});

// Initial pattern generation
generatePattern();

document.body.style.margin = 0;
document.body.style.padding = 0;
