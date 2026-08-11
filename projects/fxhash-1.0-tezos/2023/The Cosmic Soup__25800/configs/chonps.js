const colorPalette = {
    name: "C H O N P S",
    colors: [
        { hex: "#2f150d", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#be3b26", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#f0dffb", alpha: 0.15, weight: 1 },  // Showing defaults
        { hex: "#82cef7", alpha: 0.24, weight: 1 },  // Showing defaults
        { hex: "#29c9e9", alpha: 0.26, weight: 1 },  // Showing defaults
        { hex: "#1db58a", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#1cd3b9", alpha: 0.32, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 3,

        mode: [
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 350 },
            // { label: "Low",  shapes: 32, iterations: 500 },
        ],

        density: [
            // { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High",
            "Low", 
        ],
        
        particles: { min: 1000, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#000204" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 0.3,
            gradientSpread: 0.3,
        },
    },
]