const colorPalette = {
    name: "Rot-Blau-Gelb",
    colors: [
        { hex: "#070707", alpha: 0.3, },
        { hex: "#32b3d7", alpha: 0.4, },  // Showing defaults
        { hex: "#eba000", alpha: 0.4, },
        { hex: "#b2171e", alpha: 0.4, },
        { hex: "#976d38", alpha: 0.3, },
        { hex: "#afaf97", alpha: 0.3, },
        { hex: "#004575", alpha: 0.3, },
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
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 32, iterations: 650 },
        ],

        density: [
            { label: "High", value: 2 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.7 },
        ],

        energy: [
            "High", 
            "Low",
        ],
        
        particles: { min: 250, max: 3000 },
        
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
            gradientSpread: 0.55,
        },
    },
]