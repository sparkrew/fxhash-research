const colorPalette = {
    name: "Orange",
    colors: [
        { hex: "#eeede5", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#0c0c0c", alpha: 0.3, },
    ],
}

export default [
    {
        active: false,
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
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Medium",
            "Low", 
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Orange", color: "#ff502d" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous",
            ],
            palette: colorPalette,
            loops: 2,
        },
    },
]