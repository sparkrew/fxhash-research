const colorPalette = {
    name: "Glitch",
    colors: [
        { hex: "#00ffff", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#ffff55", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#ff0016", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#00ff00", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#ff0072", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#ffffff", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#0000ff", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#ff8125", alpha: 0.3, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 0.1,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 32, iterations: 650 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            // "Medium",
            // "Low", 
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#444444" },
            ],
            mode: [  "Discreet" ],
            palette: colorPalette,
            loops: 1.618,
        },

        glitchChance: 1,
    },
]