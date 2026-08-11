const colorPalette = {
    name: "Party",
    colors: [
        { hex: "#0014bb", alpha: 0.42, weight: 1 },  // Showing defaults
        { hex: "#f3e800", alpha: 0.42, },
        { hex: "#e794b2", alpha: 0.42, },
        { hex: "#4ff19c", alpha: 0.42, },
        { hex: "#c1115e", alpha: 0.42, },
        { hex: "#fea700", alpha: 0.42, },
        { hex: "#1c1c1c", alpha: 0.42, },
        { hex: "#2e1be4", alpha: 0.42, },
    ],
}

export default [
    {
        active: true,
        chance: 0.4,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 32, iterations: 650 },
        ],

        density: [
            { label: "High", value: 1.4 },
            { label: "Medium", value: 1.7 },
            { label: "Low", value: 2.2 },
        ],

        energy: [
            "High", 
            "Low",
        ],
        
        particles: { min: 0, max: 3000 },
        
        glitchChance: 0.5,

        color: {
            backgrounds: [
                { label: "Blue", color: "#0366a9" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous",
            ],
            palette: colorPalette,
            loops: 1,
            gradientSpread: 0.382,
        },
    },
]