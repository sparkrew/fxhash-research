const colorPalette = {
    name: "Ice And Fire",
    colors: [
        { hex: "#222b41", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#3b69b5", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#d3f5d9", alpha: 0.2, weight: 1 },  // Showing defaults
        { hex: "#f5e074", alpha: 0.24, weight: 1 },  // Showing defaults
        { hex: "#e7a22b", alpha: 0.26, weight: 1 },  // Showing defaults
        { hex: "#b53e1f", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#d44c1b", alpha: 0.32, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 4,

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
                // "Continuous",
            ],
            palette: colorPalette,
            loops: 0.3,
            gradientSpread: 0.3,
        },
    },
]