const colorPalette = {
    name: "Mycelium",
    colors: [
        { hex: "#aaa560", alpha: 0.25, weight: 1 },  // Showing defaults
        { hex: "#1a5b52", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#ac9aca", alpha: 0.2, },
        { hex: "#6e589a", alpha: 0.2, },
        { hex: "#7c9e80", alpha: 0.15, },
        { hex: "#92cdb7", alpha: 0.35, weight: 1 },  // Showing defaults e8cd3c
        { hex: "#e8cd3c", alpha: 0.2, weight: 1 },  // Showing defaults 
        { hex: "#d69d71", alpha: 0.15, },
    ],
}

export default [
    {
        active: true,
        chance: 0.5,

        mode: [ 
            "Poster", 
            "Cinematic",
        ],

        mass: [ 
            // { label: "High", shapes: 40, iterations: 400 },
            { label: "Low",  shapes: 27, iterations: 550 },
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
        
        particles: { min: 500, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#000200" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.382,
        },
    },
]