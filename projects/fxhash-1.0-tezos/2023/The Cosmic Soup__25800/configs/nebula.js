const colorPalette = {
    name: "Nébula",
    colors: [
        { hex: "#f8b22e", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#FF0049", alpha: 0.48, },
        { hex: "#00D0F6", alpha: 0.48, },
        { hex: "#fb8515", alpha: 0.48, },
        { hex: "#1324A0", alpha: 0.4, },
        { hex: "#ecd119", alpha: 0.2, },
    ],
}

export default [
    {
        active: true,
        chance: 3.7,

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
                { label: "Void", color: "#080a1d" },
            ],
            mode: [  
                "Mono", 
                // "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.2,
        },
    },
]