const colors = [
    
    { 
        name: "Dark Matter",
        background: "#f9f7f0", 
        palette: [
            "rgba(0, 0, 0, 0.24)",
        ],
        colorIs: "absent",
        n: 2,
        complexity: 20,
        minParticles: 2000,
        
        totalPasses: 800,
        accentsThreshold: 800,
        
        //active: true,
    },
    
    { 
        name: "Infrarred",
        background: "#d4484b", 
        palette: [
            "rgba(241, 233, 163, 0.1)",
        ],
        colorIs: "absent",
        n: 2,
        complexity: 27,
        // minParticles: 1500,
        
        totalPasses: 500,
        accentsThreshold: 550,
        
        // active: true,
    },
    
    { 
        name: "Mustard",
        background: "#e7ab19", 
        palette: [
            "rgba(43, 29, 1, 0.24)",
            // "rgba(254, 247, 203, 0.1)",
        ],
        colorIs: "absent",
        n: 2,
        complexity: 27,
        // minParticles: 2000,
        
        totalPasses: 500,
        accentsThreshold: 550,
        
        // active: true,
    },

    { 
        name: "Green",
        background: "#60a83d", 
        palette: [
            "rgba(253, 253, 231, 0.15)",
            "rgba(170,136,83,0.1)",
            "rgba(240, 165, 160, 0.1)",
            "rgba( 36,  80,  15, 0.2)",
            "rgba(112, 170, 84, 0.1)",
            "rgba(240, 150, 66, 0.1)",
        ],
        n: 20,
        colorIs: "matter",
        
        totalPasses: 800,
        accentsThreshold: 900,
        
        // active: true,
    },

    {
        name: "Santiago",
        background: "#eee5a5",
        palette: [
            "rgba(132, 232, 217, 0.5)",
            "rgba(40, 139, 0, 0.5)",
            "rgba(243, 167, 85, 0.5)",
            "rgba(183, 108, 27, 0.5)",
            "rgba(206, 69, 135, 0.5)",
            "rgba(244, 218, 0, 0.5)",
            "rgba(215, 48, 3, 0.5)",
            "rgba(38, 68, 202, 0.25)",
            "rgba(3, 18, 31, 0.14)",
        ],
        // colorIs: "time",
        totalPasses: 600,
        accentsThreshold: 598,
        n: 17,
        active: false,
    },
    
    { 
        name: "Elements",
        background: "#0c0c0c", 
        // background: "#d1f0eb", 
        palette: [ 
            "rgba(75,195,222,0.3)",
            "rgba(239,177,0,0.3)",
            "rgba(12,12,12,0.2)", 
            "rgba(211,11,26,0.3)",
            "rgba(202,205,184,0.2)",
            "rgba(170,136,83,0.2)",
            "rgba(0,98,143,0.2)",
        ], 
        minNoiseRange: 2000,
        maxNoiseRange: 10000,
        n: 34,    // Time period
        complexity: 32,
        totalPasses: 650,
        minParticles: 0,

        active: true,
    },
    
    // { 
    //     name: "Cosmos",
    //     background: "#000000", 
    //     palette: [
    //         "rgba(29, 109, 163, 0.06)",
    //         "rgba(195, 192, 213, 0.08)",
    //         "rgba(77, 106, 150, 0.06)",
    //         "rgba(146, 106, 140, 0.06)",
    //         "rgba(50, 41, 118, 0.04)",
    //         "rgba(1, 1, 1, 0.06)", 
    //     ], 
    //     active: true,
    //     totalPasses: 850,
    //     accentsThreshold: 847,
    //     complexity: 17,
    //     n: 120,
    // },
    
    { 
        name: "Low-Fi",
        background: "#000000", 
        palette: [
            "rgba(3, 18, 31, 0.14)",
            "rgba(0, 70, 93, 0.14)",
            "rgba(185, 174, 189, 0.1)",
            "rgba(170, 97, 92, 0.14)",
            "rgba(110, 24, 24, 0.14)",
            "rgba(244, 87, 73, 0.21)",
            "rgba(1,1,1,0.2)", 
            
        ], 
        // active: true,
        complexity: 16,
        n: 12,
    },
    
    // { 
    //     notes: "Discard maybe",
    //     name: "Nebula",
    //     background: "#000000", 
    //     palette: [
    //         "rgba(66, 187, 159, 0.08)",
    //         "rgba(78, 123, 157, 0.08)",
    //         "rgba(53, 54, 124, 0.08)",
    //         "rgba(0, 0, 0, 0.08)", 
    //         "rgba(163, 35, 144, 0.07)",
    //         "rgba(233, 0, 120, 0.06)",
    //         "rgba(255, 0, 96, 0.07)",
    //         "rgba(255, 114, 109, 0.08)",
    //         "rgba(255, 195, 70, 0.08)",
    //     ], 
    //     colorIs: "matter",
    //     // active: true,
    //     complexity: 32,
    //     n: 16,
    // },
    
    // { 
    //     name: "Ions",
    //     background: "#000000", 
    //     palette: [
    //         "rgba(0, 233, 160, 0.06)",
    //         "rgba(0, 163, 161, 0.06)",
    //         "rgba(0, 164, 154, 0.06)",
    //         "rgba(3,41,43,0.1)", 
    //         "rgba(15, 178, 188, 0.06)",
    //         "rgba(0, 124, 133, 0.06)",
    //         "rgba(0, 124, 133, 0.06)",
            
    //     ], 
    //     timeIs: "matter",
    //     complexity: 32,
    //     n: 12,
    //     minRange: 1000,
    //     maxRange: 10000,
    //     active: true,
    // },
    
    
    // { 
    //     name: "Neon",
    //     background: "#000000", 
    //     palette: [
    //         "rgba(146, 0, 113, 0.1)",
    //         "rgba(0, 231, 171, 0.06)",
    //         "rgba(255, 186, 0, 0.1)",
    //         "rgba(0, 239, 253, 0.08)",
    //         "rgba(178, 125, 239, 0.1)",
    //         "rgba(183, 178, 149, 0.1)",
    //     ], 
    //     active: true,
    //     complexity: 17,
    //     n: 20,
    //     accentsThreshold: 648,
    //     colorIs: "matter",
    // },
    
    
    // Starry night
    { 
        notes: "This theme gets me consistent good outputs",
        name: "Starry night",
        background: "#000000", 
        palette: [
            "rgba(120, 206, 201, 0.14)",
            "rgba(4, 119, 191, 0.14)",
            "rgba(4, 157, 217, 0.14)",
            "rgba(4, 104, 191, 0.1)",
            "rgba(255, 195, 35, 0.13)",
            "rgba(252, 247, 167, 0.15)",
            "rgba(10, 39, 64, 0.1)",
        ], 
        totalPasses: 500,
        accentsThreshold: 490,
        n: 17,

        minRange: 30000,
        maxRange: 80000,

        // active: true,
    },

    { 
        name: "Biological matter",
        background: "#000000", 
        palette: [
            "rgba(117, 202, 137, 0.14)",
            "rgba(10, 189, 139, 0.14)",
            "rgba(11, 216, 133, 0.14)",
            "rgba(0, 180, 136, 0.1)",
            "rgba(251, 42, 35, 0.13)",
            "rgba(251, 183, 162, 0.15)",
            "rgba(22, 32, 12, 0.1)",
        ], 
        totalPasses: 500,
        accentsThreshold: 490,
        n: 15,
        colorIs: "matter",
    },
    
    { 
        name: "Quarks",
        background: "#000000", 
        palette: [
            "rgba(0, 182, 84, 0.05)",
            "rgba(165, 210, 148, 0.07)",
            "rgba(255, 231, 205, 0.07)",
            "rgba(255, 163, 172, 0.07)",
            "rgba(255, 0, 128, 0.05)",
            "rgba(186, 133, 110, 0.05)",
            "rgba(0, 112, 204, 0.1)",
        ], 
        n: 12,
        complexity: 23,
    },
    
    { 
        name: "Confetti",
        background: "#000000", 
        palette: [
            "rgba(239, 183, 2, 0.14)",
            "rgba(71, 172, 240, 0.14)",
            "rgba(53, 143, 73, 0.14)",
            "rgba(255, 155, 155, 0.14)",
            "rgba(246, 64, 0, 0.14)",
            "rgba(170, 136, 83, 0.14)",
            "rgba(1,1,1,0.1)", 
        ], 
        active: false,
        n: 30,   // Clock tick length
        complexity: 26,
        // minParticles: 1500,
        totalPasses: 650,
        accentsThreshold: 645,
    },
    
    // { 
    //     name: "Cells",
    //     background: "#000000", 
    //     palette: [
    //         "rgba(97,90,9,0.07)", 
    //         "rgba(27,20,64,0.07)", 
    //         "rgba(225,183,169,0.1)", 
    //         "rgba(54,111,70,0.15)", 
    //         "rgba(200,97,62,0.15)", 
    //         "rgba(180,10,0,0.15)", 
    //         "rgba(181,152,183,0.08)", 
    //         "rgba(137,178,160,0.15)", 
    //         "rgba(225,82,36,0.15)", 
    //         "rgba(212,38,0,0.15)", 
    //         "rgba(234,194,184,0.15)", 
    //     ],
    //     complexity: 17,
    //     n: 50,
    //     minParticles: 1500,
    //     maxParticles: 3000,
    //     totalPasses: 600,
    //     accentsThreshold: 600,
    //     colorIs: "time",
    //     active: false,
    // },
            
            // Threads
            // { 
    //     b: "#000000", 
    //     c: [
    //         "rgba(38,37,35,0.21)", 
    //         "rgba(165,143,60,0.14)", 
    //         "rgba(167,85,63,0.14)", 
    //         "rgba(48, 70, 84, 0.21)",
    //         "rgba(146, 58, 46, 0.21)",
    //         "rgba(38, 75, 67, 0.21)",
    //         "rgba(191, 143, 143, 0.12)",
    //         "rgba(143, 143, 143, 0.1)",
    //         "rgba(179, 159, 90, 0.05)",
    //         "rgba(144, 82, 95, 0.11)",
    //         "rgba(76, 88, 80, 0.1)",
    //     ],
    //     n: 13,
    //
    // },

    // Cells


    
    // { 
    //     b: "#000000", 
    //     c: [
    //         "rgba(67, 165, 168, 0.9)",
    //         "rgba(252, 228, 187, 0.2)", 
    //         "rgba(246, 184, 17, 0.9)", 
    //         "#f9653e", 
    //         "rgba(230, 38, 40, 0.5)", 
    //         "#86252c", 
    //         "#6f5a79", 
    //         "#62c490", 
    //         "#fc6f46",
    //     ], n: 21 },

    // { b: "#000000", c: [ "#064663", "#12CAD6", "#bebeaa", "#ffc323", "rgba(242, 5, 5, 0.84)" ], n: 21 },
    // { b: "#000000", c: ["#4B3869", "#63B4B8", "#F20505", "#FFF5C0"], n: 3},
	
	
    // { b: "#000000", c: [ "#00a1c6", "#efb100", "#d1000f", "#bebeaa", "#aa8853", "#00628f", "#000000"], n: 17 },
    // { b: "#000000", c: ["#006dc0", "#bebeaa", "#f9653e", "#eddb00", "#358f49", "#F20505"], n: 3},

	
	// { 
    //     b: "#000000", 
    //     c: [
    //         "rgba(163, 112, 39, 0.3)",
    //         "rgba(217, 133, 69, 0.4)", 
    //         "rgba(230, 127, 86, 0.5)", 
    //         "rgba(230, 152, 140, 0.6)", 
    //         "rgba(242, 211, , 0.7)", 
    //     ], n: 21 
    // },
	
    
    // { b: "#000000", c: ["#FFB830", "#358f49", "#A9E4D7", "rgba(230, 38, 40, 0.3)"], n: 20}
    // ["#3DB2FF", "#FFEDDA", "#FFB830", "#FF2442"],
    // ["#D9042B", "#F2055C", "#74BF04", "#A66F0A", "#F26430"],

];

export default colors;