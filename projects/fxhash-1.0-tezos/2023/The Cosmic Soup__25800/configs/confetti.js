const colorPalette = {
    name: "Tutti",
    colors: [
        { hex: "#efb702", alpha: 0.44, weight: 1 },  // Showing defaults
        { hex: "#0c7e45", alpha: 0.44, weight: 1 },  // Showing defaults
        { hex: "#5ec5ee", alpha: 0.44, weight: 1 },  // Showing defaults
        { hex: "#f7bab6", alpha: 0.44, weight: 1 },  // Showing defaults
        { hex: "#d7312e", alpha: 0.44, weight: 1 },  // Showing defaults
        { hex: "#2c52a0", alpha: 0.44, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 2,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
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
                { label: "Void", color: "#070707" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous"
            ],
            palette: colorPalette,
            loops: 1,
            gradientSpread: 0.382,
        },
    },
]