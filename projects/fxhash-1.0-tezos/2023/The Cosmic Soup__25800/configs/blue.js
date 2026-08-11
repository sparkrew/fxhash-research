const colorPalette = {
    name: "Indigo",
    colors: [
        { hex: "#f0f6e2", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#aed4dd", alpha: 0.34, },
        { hex: "#377ea8", alpha: 0.37, },
        { hex: "#1c647c", alpha: 0.39, },
        { hex: "#003162", alpha: 0.4, },
        { hex: "#001331", alpha: 0.4, },
    ],
}

export default [
    {
        active: true,
        chance: 0.7,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            // { label: "Low",  shapes: 40, iterations: 650 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Low",
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Indigo", color: "#005978" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous", 
            ],            
            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.3,
        },
    },
]