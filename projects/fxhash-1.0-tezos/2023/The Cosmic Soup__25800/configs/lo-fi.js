const colorPalette = {
    name: "Infrarred",
    colors: [
        { hex: "#0e272f", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#00606f", alpha: 0.4, },
        { hex: "#c4cbc4", alpha: 0.24, },
        { hex: "#af8271", alpha: 0.34, },
        { hex: "#5a1f37", alpha: 0.34, },
        { hex: "#ff765d", alpha: 0.4, },
        { hex: "#000000", alpha: 0.25, },
    ],
}

export default [
    {
        active: true,
        chance: 2.5,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Low",
            // "Low", 
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#000000" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous", 
            ],            palette: colorPalette,
            loops: 0.618,
        },
    },
]