const colorPalette = {
    name: "Cities",
    colors: [
        { hex: "#0bafb1", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#0d4c5d", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#54a086", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#d3f5d9", alpha: 0.2, weight: 1 },  // Showing defaults
        { hex: "#e2b210", alpha: 0.24, weight: 1 },  // Showing defaults
        { hex: "#ff7f02", alpha: 0.26, weight: 1 },  // Showing defaults
        { hex: "#d92904", alpha: 0.32, weight: 1 },  // Showing defaults
        { hex: "#d87e87", alpha: 0.32, weight: 1 },  // Showing defaults
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
                { label: "Void", color: "#000204" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 0.3,
            gradientSpread: 0.3,
        },
    },
]