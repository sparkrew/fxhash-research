const ratio = 3 / 1.5;
const prefix = 'Astral Projections';
const features = {};
let resizeTmr = null;
let thumbnailTaken = false;
const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());
let forceDownloaded = false;
const animated = false;
let nextFrame = null;


//MY CONSTANTS BELOW
// GRID COLUMN/ROW CONSTANTS
const cols = Math.floor($fx.rand() * (50 - 10 + 1)) + 10; // Random number between 10 and 50
const rows = Math.floor($fx.rand() * (20 - 10 + 1)) + 10; // Random number between 10 and 40

//GRID CONSTANTS
const lineStyles = ['dashed1', 'dashed2', 'dotted']; // Grid line styles
let gridStyle = 'solid'; // Default gridline style

const neonColorPalettes = [
    '#39FF14',  // Neon Green
    '#FF073A',  // Neon Red
    '#00FFFF',  // Neon Cyan
    '#FF00FF',  // Neon Magenta
    '#FFFF00',  // Neon Yellow
    '#FF6347',  // Neon Tomato
    '#8A2BE2',  // Neon Blue Violet
    '#7FFF00',  // Neon Chartreuse
    '#FF1493',  // Neon Deep Pink
    '#00BFFF',  // Neon Deep Sky Blue
];

// Assign a random color from the palette
const randomIndex = Math.floor($fx.rand() * neonColorPalettes.length);
const randomGridColor = neonColorPalettes[randomIndex];
const artist = 'dreamingdigitally';

// FEATURES BELOW
const setup = () => {


/*  const backgroundColours = ['#f9f9fb', '#e5dfea', '#EDD8DF', '#eef8fe'];
  const backgroundNames = ['Serena', 'Lavender', 'Seashell', 'Arizona sky'];
  const backgroundIndex = Math.floor($fx.rand() * backgroundColours.length);
  const foregroundColours = ['#f5a04e', '#931a1e', '#fad2db', '#f2e73d', '#14b9dc', '#d65a9c', '#f2f8ef', '#395370'];
  const lineColours = [];

  features.backgroundColour = backgroundColours[backgroundIndex];
  features.lineColours = lineColours;

*/
  const readableFeaturesObj = {};
  readableFeaturesObj['Columns'] = cols, //randomColor; //[backgroundIndex];
  readableFeaturesObj['Rows'] = rows,
  readableFeaturesObj['Grid Colour'] = randomGridColor;
  readableFeaturesObj['Background Colour'] = 'Black';
  readableFeaturesObj['Artist'] = 'dreamingdigitally';

  $fx.features(readableFeaturesObj);
  console.table(readableFeaturesObj);
};

setup();

const drawCanvas = async () => {
    window.cancelAnimationFrame(nextFrame);

  //  const backgroundColor = 'pink';
    const canvas = document.getElementById('target');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
  //  ctx.fillStyle = 'yellow'; //features.backgroundColour;
    ctx.fillRect(0, 0, w, h);
    ctx.lineWidth = h / 1;
    ctx.strokeStyle = "black";
    canvas.style.backgroundColor = 'black';


//---------------------------- NEW CODE -------------------------------------

// Calculate grid cell size
const gridWidth = canvas.width / cols;
const gridHeight = canvas.height / rows;

function drawGrid() {
  //  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Randomly select a gridline style for all lines
    gridStyle = lineStyles[Math.floor($fx.rand() * lineStyles.length)];

    // Set the line style globally
    switch (gridStyle) {
        case 'dashed1':
            ctx.setLineDash([2,2]); // Solid line
            ctx.strokeStyle = randomGridColor; // Default grid color
            break;
        case 'dashed2':
            ctx.setLineDash([5, 5]); // Dashed line
            ctx.strokeStyle = randomGridColor;
            break;
        case 'dotted':
            ctx.setLineDash([2, 2]); // Dotted line
            ctx.strokeStyle = randomGridColor;
            break;
    }

    // Draw the grid
    for (let i = 0; i <= cols; i++) {
        const x = i * gridWidth;
        for (let j = 0; j <= rows; j++) {
            const y = j * gridHeight;

            // Draw vertical lines
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw horizontal lines
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
}



//---- HORIZONTAL AND VERTICAL LINES
// Function to randomly select a cell (assuming you have a grid setup)
function getRandomCell() {
  //  const cols = 10; // example number of columns
  //  const rows = 10; // example number of rows
    const selectedCol = Math.floor($fx.rand() * cols);
    const selectedRow = Math.floor($fx.rand() * rows);
    return { col: selectedCol, row: selectedRow };
}

// Function to draw animated random vertical lines
function drawAnimatedVerticalLines(cell) {
    const numLines = Math.floor($fx.rand() * 50) + 1; // Random number of lines (1-50)
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const cellWidth = canvas.width / 10; // Example cell width based on 10 columns
    const cellHeight = canvas.height / 10; // Example cell height based on 10 rows

    const startX = cell.col * cellWidth; // Left boundary of the selected cell
    const endX = (cell.col + 1) * cellWidth; // Right boundary of the selected cell

    // Store lines' state for animation
    let lines = [];

    // Generate random lines with their initial position, direction, color, and thickness
    for (let i = 0; i < numLines; i++) {
        const randomX = Math.floor($fx.rand() * (endX - startX) + startX); // Random X within the cell
        const randomThickness = Math.floor($fx.rand() * 10 + 1); // Random thickness (1-10)
        const randomColor = `hsl(${Math.floor($fx.rand() * 360)}, 100%, 50%)`; // Random color (hue)
        const direction = Math.floor($fx.rand() > 0.5) ? 1 : -1; // Random direction (down or up)

        // Create initial line data
        lines.push({
            x: randomX,
            y: direction === 1 ? 0 : canvas.height, // Start from top or bottom
            direction: direction, // Direction of movement
            thickness: randomThickness,
            color: randomColor,
        });
    }

    // Function to animate the lines
    function animateLines() {
  //      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Update each line's position and draw it
        lines.forEach(line => {
            line.y += (line.direction * 5); // Move lines (5px per frame, adjust for speed)

            // If a line moves past the canvas bounds, reset it
            if (line.y > canvas.height || line.y < 0) {
                line.y = line.direction === 1 ? 0 : canvas.height;
            }

            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x, line.y + (line.direction === 1 ? canvas.height : -canvas.height));
            ctx.strokeStyle = line.color;
            ctx.lineWidth = line.thickness;
            ctx.stroke();
        });

        // Continue animation
        requestAnimationFrame(animateLines);
    }

    // Trigger the animation
    animateLines();

    // Clear the canvas after 1-3 seconds
    setTimeout(() => {
        lines = []; // Clear the lines' state
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    }, Math.floor($fx.rand() * (2000) + 1000)); // Clear after a random time (1-3 seconds)
}

// Function to trigger the random vertical line animation every 1-3 seconds
function triggerRandomVerticalLines() {
    setInterval(() => {
        const randomCell = getRandomCell(); // Get a random cell
        drawAnimatedVerticalLines(randomCell); // Draw the animated vertical lines
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, Math.floor($fx.rand() * (5000) + 5000)); // Trigger every 5-10 seconds

}
triggerRandomVerticalLines();

// Function to draw animated random horizontal lines
function drawAnimatedHorizontalLines(cell) {
    const numLines = Math.floor($fx.rand() * 50) + 1; // Random number of lines (1-50)
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const cellWidth = canvas.width / 10; // Example cell width based on 10 columns
    const cellHeight = canvas.height / 10; // Example cell height based on 10 rows

    const startY = cell.row * cellHeight; // Top boundary of the selected cell
    const endY = (cell.row + 1) * cellHeight; // Bottom boundary of the selected cell

    // Store lines' state for animation
    let lines = [];

    // Generate random lines with their initial position, direction, color, and thickness
    for (let i = 0; i < numLines; i++) {
        const randomY = Math.floor($fx.rand() * (endY - startY)) + startY; // Random Y within the cell
        const randomThickness = Math.floor($fx.rand() * 10) + 1; // Random thickness (1-10)
        const randomColor = `hsl(${Math.floor($fx.rand() * 360)}, 100%, 50%)`; // Random color (hue)
        const direction = Math.floor($fx.rand() > 0.5) ? 1 : -1; // Random direction (left to right or right to left)

        // Create initial line data
        lines.push({
            x: direction === 1 ? 0 : canvas.width, // Start from left or right
            y: randomY, // Random Y position for the line
            direction: direction, // Direction of movement
            thickness: randomThickness,
            color: randomColor,
        });
    }

    // Function to animate the lines
    function animateLines() {
    //    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Update each line's position and draw it
        lines.forEach(line => {
            line.x += (line.direction * 5); // Move lines (5px per frame, adjust for speed)

            // If a line moves past the canvas bounds, reset it
            if (line.x > canvas.width || line.x < 0) {
                line.x = line.direction === 1 ? 0 : canvas.width;
            }

            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + (line.direction === 1 ? canvas.width : -canvas.width), line.y);
            ctx.strokeStyle = line.color;
            ctx.lineWidth = line.thickness;
            ctx.stroke();
        });

        // Continue animation
        requestAnimationFrame(animateLines);
    }

    // Trigger the animation
    animateLines();

    // Clear the canvas after 1-3 seconds
    setTimeout(() => {
        lines = []; // Clear the lines' state
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    }, Math.floor($fx.rand() * (2000) + 1000)); // Clear after a random time (1-3 seconds)
}

// Function to trigger the random horizontal line animation every 1-3 seconds
function triggerRandomHorizontalLines() {
    setInterval(() => {
        const randomCell = getRandomCell(); // Get a random cell
        drawAnimatedHorizontalLines(randomCell); // Draw the animated horizontal lines
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, Math.floor($fx.rand() * (5000) + 5000)); // Trigger every 5-10 seconds

}
triggerRandomHorizontalLines();

//--------------------- BACKGROUND FUNCTIONS ------------------

function animateDiagonalLines() {
  console.log("Diagonal Background Running");
    // Store active diagonal line animations
    const diagonalLineAnimations = [];

    // Add a new diagonal line animation
    function createDiagonalLineAnimation() {
        const lineCount = Math.floor($fx.rand() * 291) + 10; // Between 10 and 300 lines
        const lineColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        const duration = Math.floor($fx.rand() * 5000) + 1000; // Between 10 and 30 seconds
        let color;

        if (lineColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
        } else if (lineColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        const startSide = Math.floor($fx.rand() > 0.5) ? 'left' : 'top'; // Random starting side
        const lineGap = Math.floor($fx.rand() * 100) + 5; // Random gap between lines
        const lineWidth = Math.floor($fx.rand() * 3) + 1; // Random line width
        const sparkleFrequency = Math.floor($fx.rand() * 200) + 50; // How often sparkles change
        const sparkleSize = Math.floor($fx.rand() * 2) + 0.1; // Size of sparkles

        // Diagonal line animation properties
        diagonalLineAnimations.push({
            startSide,
            lineCount,
            lineGap,
            lineWidth,
            sparkleFrequency,
            sparkleSize,
            duration,
            startTime: performance.now(),
            color,
        });
    }

    // Render the diagonal line animations
    function drawDiagonalLines(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for smooth animation
        drawGrid();
        diagonalLineAnimations.forEach((animation, index) => {
            const elapsed = timestamp - animation.startTime;

            if (elapsed > animation.duration) {
                diagonalLineAnimations.splice(index, 1); // Remove animation after duration ends
                return;
            }

            const progress = elapsed / animation.duration;

            for (let i = 0; i < animation.lineCount; i++) {
                const offset = i * animation.lineGap - canvas.height * progress;
                const xStart = animation.startSide === 'left' ? offset : 0;
                const yStart = animation.startSide === 'left' ? 0 : offset;
                const xEnd = animation.startSide === 'left' ? offset + canvas.height : canvas.width;
                const yEnd = animation.startSide === 'left' ? canvas.height : offset + canvas.width;

                ctx.beginPath();
                ctx.moveTo(xStart, yStart);
                ctx.lineTo(xEnd, yEnd);
                ctx.lineWidth = animation.lineWidth;
                ctx.strokeStyle = animation.color();
                ctx.stroke();

                // Add sparkle effect
                if (Math.floor(elapsed / animation.sparkleFrequency) % 2 === 0) {
                    const sparkleX = xStart + (xEnd - xStart) * Math.floor($fx.rand());
                    const sparkleY = yStart + (yEnd - yStart) * Math.floor($fx.rand());
                    ctx.beginPath();
                    ctx.arc(sparkleX, sparkleY, animation.sparkleSize, 0, Math.PI * 2);
                    ctx.fillStyle = animation.color();
                    ctx.fill();
                }
            }
        });

        requestAnimationFrame(drawDiagonalLines);
    }

    // Randomly create new diagonal line animations
    function randomDiagonalLineCreator() {
        if (Math.random() > 0.7) createDiagonalLineAnimation(); // 30% chance to create a new animation
        setTimeout(randomDiagonalLineCreator, Math.floor($fx.rand() * 2000)); // Random interval between 0-2 seconds
    }

    // Start the animation
    requestAnimationFrame(drawDiagonalLines);
    randomDiagonalLineCreator();
}

function animatePixelSparkles() {

    console.log("Sparkle Background Running");
    // Store active sparkle animations
    const sparkleAnimations = [];

    // Add a new sparkle animation
    function createSparkleAnimation() {
        const sparkleCount = Math.floor($fx.rand() * 491) + 10; // Between 10 and 500 sparkles
        const sparkleColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        const duration = Math.floor($fx.rand() * 5000) + 1000; // Between 10 and 15 seconds
        const sparkles = [];
        let color;

        if (sparkleColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
        } else if (sparkleColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        for (let i = 0; i < sparkleCount; i++) {
            sparkles.push({
                x: Math.floor($fx.rand() * canvas.width),
                y: Math.floor($fx.rand() * canvas.height),
                size: Math.floor($fx.rand() * 3) + 1, // Random size between 1 and 4 pixels
                shimmerFrequency: Math.floor($fx.rand() * 200) + 50, // How often the sparkle changes
                color: color(),
            });
        }

        sparkleAnimations.push({
            sparkles,
            duration,
            startTime: performance.now(),
        });
    }

    // Render the sparkle animations
    function drawSparkles(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for smooth animation

        sparkleAnimations.forEach((animation, index) => {
            const elapsed = timestamp - animation.startTime;

            if (elapsed > animation.duration) {
                sparkleAnimations.splice(index, 1); // Remove animation after duration ends
                return;
            }

            animation.sparkles.forEach((sparkle) => {
                // Shimmer effect by randomly changing opacity
                const opacity = Math.floor($fx.rand() * 0.5) + 0.5;

                ctx.globalAlpha = opacity; // Set opacity for shimmer
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
                ctx.fillStyle = sparkle.color;
                ctx.fill();
                ctx.globalAlpha = 1.0; // Reset opacity
            });
        });

        requestAnimationFrame(drawSparkles);
        drawGrid();
    }

    // Randomly create new sparkle animations
    function randomSparkleCreator() {
      console.log('sparkles running');
        if (Math.floor($fx.rand() > 0.2)) createSparkleAnimation(); // 30% chance to create a new animation
        setTimeout(randomSparkleCreator, Math.floor($fx.rand() * 5000) +2000); // Random interval between 0-2 seconds
    }

    // Start the animation
    requestAnimationFrame(drawSparkles);
    randomSparkleCreator();
}


//--------------------- FOREGROUND FUNCTIONS ------------------


function animateSpirals() {
    // Store active spirals
    const spirals = [];

    // Add a new spiral to the animation
    function createSpiral() {
        const centerX = Math.floor($fx.rand() * canvas.width);
        const centerY = Math.floor($fx.rand() * canvas.height);
        const lineCount = Math.floor($fx.rand() * 100) + 20; // Between 1 and 100 lines
        const spiralColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        let color;

        if (spiralColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        } else if (spiralColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        // Spiral properties
        spirals.push({
            x: centerX,
            y: centerY,
            radius: 0,
            angle: 0,
            lineCount,
            lineWidth: Math.floor($fx.rand() * 3) + 1, // Between 1 and 4
            duration: Math.floor($fx.rand() * 4000) + 1000, // Between 1 and 5 seconds
            startTime: performance.now(),
            color,
        });
    }

    // Render the spirals
    function drawSpirals(timestamp) {
  //      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for smooth animation
    console.log("Spiral Function Running");
        spirals.forEach((spiral, index) => {
            const elapsed = timestamp - spiral.startTime;

            if (elapsed > spiral.duration) {
                spirals.splice(index, 1); // Remove spirals after duration ends
                return;
            }

            const progress = elapsed / spiral.duration;
            const radiusStep = Math.min(progress * 10, 5); // Radius expands with time
            const angleStep = Math.PI / 2 * progress; // Angle changes for spiral motion

            for (let i = 0; i < spiral.lineCount; i++) {
                const angle = spiral.angle + angleStep * i / spiral.lineCount;
                const radius = spiral.radius + radiusStep * (i / spiral.lineCount);

                ctx.beginPath();
                ctx.moveTo(spiral.x, spiral.y);
                ctx.lineTo(
                    spiral.x + Math.cos(angle) * radius,
                    spiral.y + Math.sin(angle) * radius
                );
                ctx.strokeStyle = spiral.color();
                ctx.lineWidth = spiral.lineWidth;
                ctx.stroke();
            }

            spiral.radius += Math.floor($fx.rand() * 10) + 1;
            spiral.angle += 0.1; //Math.floor($fx.rand() * 10) + 0.1; //0.1; // Rotate spiral
        });

        requestAnimationFrame(drawSpirals);
    }

    // Randomly create new spirals
    function randomSpiralCreator() {
        if (Math.random() > 0.5) createSpiral(); // 50% chance to create a spiral
        setTimeout(randomSpiralCreator, Math.floor($fx.rand() * 5000) + 1000); // Random interval between 0-10 seconds
    }

    requestAnimationFrame(drawSpirals);
    randomSpiralCreator();
}

function animateSquares() {
    // Store active square animations
    const squareAnimations = [];

    // Add a new square animation
    function createSquareAnimation() {
        const centerX = Math.floor($fx.rand() * canvas.width);
        const centerY = Math.floor($fx.rand() * canvas.height);
        const squareCount = Math.floor($fx.rand() * 10) + 1; // Between 10 and 100 squares
        const squareColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        const zoomIn = Math.floor($fx.rand() > 0.5); // Determine zoom direction
        let color;

        if (squareColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
        } else if (squareColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        // Square animation properties
        squareAnimations.push({
            x: centerX,
            y: centerY,
            zoomIn,
            squareCount,
            maxSize: Math.floor($fx.rand() * 200) + 100, // Max size of largest square
            duration: Math.floor($fx.rand() * 3000) + 3000, // Between 3 and 6 seconds
            startTime: performance.now(),
            color,
        });
    }

    // Render the square animations
    function drawSquares(timestamp) {
      //  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for smooth animation
    console.log("Square Function Running");
        squareAnimations.forEach((animation, index) => {
            const elapsed = timestamp - animation.startTime;

            if (elapsed > animation.duration) {
                squareAnimations.splice(index, 1); // Remove animation after duration ends
                return;
            }

            const progress = elapsed / animation.duration;
            const baseSize = animation.zoomIn
                ? animation.maxSize * (1 - progress)
                : animation.maxSize * progress;

            for (let i = 0; i < animation.squareCount; i++) {
                const size = baseSize * (1 - i / animation.squareCount);

                ctx.beginPath();
                ctx.rect(
                    animation.x - size / 2,
                    animation.y - size / 2,
                    size,
                    size
                );
                ctx.fillStyle = animation.color();
                ctx.fill();
                ctx.lineWidth = 1;
              //  ctx.strokeStyle = '#000'; // Add subtle border for visibility
                ctx.stroke();
            }
        });

        requestAnimationFrame(drawSquares);
    }

    // Randomly create new square animations
    function randomSquareCreator() {
        if (Math.random() > 0.8) createSquareAnimation(); // 20% chance to create a new animation
        setTimeout(randomSquareCreator, Math.floor($fx.rand() * 2000)); // Random interval between 0-2 seconds
    }

    // Start the animation
    requestAnimationFrame(drawSquares);
    randomSquareCreator();
}

function animateCircles() {
    // Store active circle animations
    const circleAnimations = [];

    // Add a new circle animation
    function createCircleAnimation() {
        const centerX = Math.floor($fx.rand() * canvas.width);
        const centerY = Math.floor($fx.rand() * canvas.height);
        const circleCount = Math.floor($fx.rand() * 91) + 10; // Between 10 and 100 circles
        const circleColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        const zoomIn = Math.floor($fx.rand() > 0.5); // Determine zoom direction
        let color;

        if (circleColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
        } else if (circleColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        // Circle animation properties
        circleAnimations.push({
            x: centerX,
            y: centerY,
            zoomIn,
            circleCount,
            maxSize: Math.floor($fx.rand() * 200) + 100, // Max size of the largest circle
            duration: Math.floor($fx.rand() * 3000) + 100, // Between 3 and 6 seconds
            startTime: performance.now(),
            color,
        });
    }

    // Render the circle animations
    function drawCircles(timestamp) {
    //    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for smooth animation

        circleAnimations.forEach((animation, index) => {
            const elapsed = timestamp - animation.startTime;

            if (elapsed > animation.duration) {
                circleAnimations.splice(index, 1); // Remove animation after duration ends
                return;
            }

            const progress = elapsed / animation.duration;
            const baseSize = animation.zoomIn
                ? animation.maxSize * (1 - progress)
                : animation.maxSize * progress;

            for (let i = 0; i < animation.circleCount; i++) {
                const radius = baseSize * (1 - i / animation.circleCount);

                ctx.beginPath();
                ctx.arc(animation.x, animation.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = animation.color();
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#000'; // Add subtle border for visibility
                ctx.stroke();
            }
        });

        requestAnimationFrame(drawCircles);
    }

    // Randomly create new circle animations
    function randomCircleCreator() {
      console.log("Circle Function Running");
        if (Math.floor($fx.rand() > 0.8)) createCircleAnimation(); // 20% chance to create a new animation
        setTimeout(randomCircleCreator, Math.floor($fx.rand() * 2000)+100); // Random interval between 0-2 seconds
    }

    // Start the animation
    requestAnimationFrame(drawCircles);
    randomCircleCreator();
}

function animateTriangles() {

  console.log("Triangle Function Running");
    // Store active triangle chains
    const triangleChains = [];

    // Add a new triangle chain
    function createTriangleChain() {
        const startX = Math.floor($fx.rand() * canvas.width);
        const startY = Math.floor($fx.rand() * canvas.height);
        const triangleCount = Math.floor($fx.rand() * 50) + 1; // Between 1 and 100 triangles
        const triangleColorMode = Math.floor($fx.rand() * 3); // Random, black & white, or single hue
        let color;

        if (triangleColorMode === 0) {
            // Random colors
            color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
        } else if (triangleColorMode === 1) {
            // Black and white
            color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
        } else {
            // Single hue
            const hue = Math.floor($fx.rand() * 360);
            color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
        }

        // Triangle chain properties
        triangleChains.push({
            x: startX,
            y: startY,
            triangles: [],
            triangleCount,
            lineWidth: 2, //Math.random() * 2 + 1, // Between 1 and 3
            duration: Math.floor($fx.rand() * 3000) + 1000, // Between 3 and 6 seconds
            startTime: performance.now(),
            color,
            colorMode: triangleColorMode, // Store the color mode
            lastColorChangeTime: performance.now(), // Track the last color change time
            colorChangeInterval: Math.floor($fx.rand() * 10000) + 5000, // Change color every 2-5 seconds
        });
    }

    // Render the triangle chains
    function drawTriangles(timestamp) {
        triangleChains.forEach((chain, index) => {
            const elapsed = timestamp - chain.startTime;

            if (elapsed > chain.duration) {
                triangleChains.splice(index, 1); // Remove chains after duration ends
                return;
            }

            const progress = elapsed / chain.duration;
            const maxTriangles = Math.floor($fx.rand()*(progress * chain.triangleCount));

            if (chain.triangles.length < maxTriangles) {
                // Add a new triangle
                const lastTriangle = chain.triangles[chain.triangles.length - 1];
                const baseX = lastTriangle ? lastTriangle.x2 : chain.x;
                const baseY = lastTriangle ? lastTriangle.y2 : chain.y;
                const height = Math.floor($fx.rand() * canvas.height/10) + canvas.height/100; // Random height
                const width = Math.floor($fx.rand() * canvas.width/10) + canvas.width/100; // Random width
                const angle = Math.floor($fx.rand() * Math.PI) * 2; // Random direction

                chain.triangles.push({
                    x1: baseX,
                    y1: baseY,
                    x2: baseX + Math.cos(angle) * width,
                    y2: baseY + Math.sin(angle) * width,
                    x3: baseX + Math.cos(angle) * width - Math.sin(angle) * height,
                    y3: baseY + Math.sin(angle) * width + Math.cos(angle) * height,
                });
            }

            // Change color at regular intervals
            if (timestamp - chain.lastColorChangeTime > chain.colorChangeInterval) {
                // Update the color change time and reset the color
                chain.lastColorChangeTime = timestamp;
                if ((Math.floor($fx.rand() > 0.8)) && chain.colorMode === 0) {
                    // Random colors
                    chain.color = () => `rgb(${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)}, ${Math.floor($fx.rand() * 255)})`;
                } else if (chain.colorMode === 1) {
                    // Black and white
                    chain.color = () => Math.floor($fx.rand() > 0.5) ? '#000' : '#fff';
                } else {
                    // Single hue
                    const hue = Math.floor($fx.rand() * 360);
                    chain.color = () => `hsl(${hue}, ${Math.floor($fx.rand() * 100)}%, ${Math.floor($fx.rand() * 100)}%)`;
                }
            }

            // Draw triangles
            chain.triangles.forEach(triangle => {
                ctx.beginPath();
                ctx.moveTo(triangle.x1, triangle.y1);
                ctx.lineTo(triangle.x2, triangle.y2);
                ctx.lineTo(triangle.x3, triangle.y3);
                ctx.closePath();
                ctx.fillStyle = chain.color();
                ctx.fill();
                ctx.lineWidth = chain.lineWidth;
                ctx.strokeStyle = chain.color();
                ctx.stroke();
            });
        });

        requestAnimationFrame(drawTriangles);
    }

    // Randomly create new triangle chains
    function randomTriangleCreator() {
        if (Math.floor($fx.rand() > 0.8)) createTriangleChain(); // 20% chance to create a chain
        setTimeout(randomTriangleCreator, Math.floor($fx.rand() * 200) + 100); // Random interval between 0-2 seconds
    }

    // Start the animation
    requestAnimationFrame(drawTriangles);
    randomTriangleCreator();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

//-------------------------------------------




function getRandomFunction(functionsArray) {
    if (Array.isArray(functionsArray) && functionsArray.length > 0) {
        const randomIndex = Math.floor($fx.rand() * functionsArray.length);
        return functionsArray[randomIndex];
    } else {
        console.error("Functions array is empty or invalid");
        return defaultFallbackFunction; // Use a known safe function
    }
}

// Function to execute every 5 seconds
function runThis() {

  // Array of functions for background and foreground
  const backgroundFunctions = [animatePixelSparkles];
  const foregroundFunctions = [animateTriangles, animateDiagonalLines, animateCircles, animateSquares, animateSpirals];

//   Variables to hold selected functions
  let selectedBackFunction = null;
  let selectedForeFunction = null;

    // Select functions only the first time
    if (!selectedBackFunction || !selectedForeFunction) {
        selectedBackFunction = getRandomFunction(backgroundFunctions);
        selectedForeFunction = getRandomFunction(foregroundFunctions);
//    }

    // Execute the selected functions
    selectedBackFunction();
    selectedForeFunction();
}
}

animatePixelSparkles();
// Initial execution to select functions and run them
runThis();

// Execute `runThis` every 10 seconds
setInterval(runThis, 10000);


//KEEP BELOW ---------------------------------------------------------------------------
    if (!thumbnailTaken) {
        $fx.preview();
        thumbnailTaken = true;
    }
};

//-------------- initialization code stuff below: ----------------------------------------------------------

const init = async () => {
  window.addEventListener('resize', async () => {
    clearTimeout(resizeTmr);
    resizeTmr = setTimeout(async () => {
      await layoutCanvas();
    }, 100);
  });
    await layoutCanvas();

};

const layoutCanvas = async (windowObj = window, urlParamsObj = urlParams) => {
  windowObj.cancelAnimationFrame(nextFrame);

  const { innerWidth: wWidth, innerHeight: wHeight, devicePixelRatio = 1 } = windowObj;
  let dpr = devicePixelRatio;
  let cWidth = wWidth;
  let cHeight = cWidth / ratio;

  if (cHeight > wHeight) {
    cHeight = wHeight;
    cWidth = wHeight * ratio;
  }

  const canvases = document.getElementsByTagName('canvas');
  Array.from(canvases).forEach(canvas => canvas.remove());

  let targetHeight = cHeight;
  let targetWidth = targetHeight * ratio;

  if ('forceWidth' in urlParams) {
    targetWidth = parseInt(urlParams.forceWidth);
    targetHeight = Math.floor(targetWidth / ratio);
    dpr = 1;
  }


  const canvas = document.createElement('canvas');
  canvas.id = 'target';
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  document.body.appendChild(canvas);

  canvas.style.position = 'absolute';
  canvas.style.width = `${cWidth}px`;
  canvas.style.height = `${cHeight}px`;
  canvas.style.left = `${(wWidth - cWidth) / 2}px`;
  canvas.style.top = `${(wHeight - cHeight) / 2}px`;

  drawCanvas();
};

const autoDownloadCanvas = async () => {
  const canvas = document.getElementById('target');
  const element = document.createElement('a');
  const filename = 'forceId' in urlParams
    ? `${prefix}_${urlParams.forceId.toString().padStart(4, '0')}_${$fx.hash}`
    : `${prefix}_${$fx.hash}`;
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);

  const imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  element.setAttribute('href', window.URL.createObjectURL(imageBlob));
  element.click();
  document.body.removeChild(element);
};

document.addEventListener('DOMContentLoaded', init);
