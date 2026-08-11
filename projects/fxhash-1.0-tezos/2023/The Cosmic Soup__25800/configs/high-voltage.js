const colorPalette = {
    name: "High Voltage",
    colors: [
        { hex: "#f7cc03", alpha: 0.2, },
        { hex: "#070707", alpha: 0.2, },
        { hex: "#ce0002", alpha: 0.2, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 0.3,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 20, iterations: 650 },
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
                { label: "Void", color: "#070707" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous",
            ],
            palette: colorPalette,
            loops: 1.618,
        },
    },
]