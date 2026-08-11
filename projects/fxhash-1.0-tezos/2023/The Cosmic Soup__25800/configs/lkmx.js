const colorPalette = {
    name: "LKMX",
    colors: [
        { hex: "#00D0F6", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#FF0049", alpha: 0.4, },
        { hex: "#1324A0", alpha: 0.4, },
        { hex: "#d3d1ba", alpha: 0.05, },
    ],
}

export default [
    {
        active: false,
        chance: 0.7,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "Low",  shapes: 32, iterations: 500 },
        ],

        density: [
            // { label: "High", value: 1.3 },
            // { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.6 },
        ],

        energy: [
            "High",
            // "Medium",
            // "Low", 
        ],
        
        particles: { min: 0, max: 3000 },

        gravity: 1.4,
        
        color: {
            backgrounds: [
                { label: "Void", color: "#0B0E29" },
            ],
            mode: [  
                // "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.3,
        },
    },
]