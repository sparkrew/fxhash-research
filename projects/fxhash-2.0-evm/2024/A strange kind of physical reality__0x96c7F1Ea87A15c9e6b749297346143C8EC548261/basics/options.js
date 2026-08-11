let op = {};


function options(){
  op.shape = ecx(["constellation", "horizontalwaves", "verticalwaves"]);

  if (op.shape == "verticalwaves"){
    op.shapePos = wcx([
      [{name: "center", min: 0, max: sz.nh}, 1],
      [{name: "below", min: sz.nh * 0.25, max: sz.nh}, 8],
      [{name: "above", min: 0, max: sz.nh * 0.75}, 4],
    ])
  }
  if (op.shape == "constellation"){
    op.shapePos = wcx([
      [{name: "center", x: sz.nw * 0.5, y: sz.nh * 0.5}, 1],
      [{name: "below", x: sz.nw * 0.5, y: sz.nh * 0.62}, 3],
      [{name: "above", x: sz.nw * 0.5, y: sz.nh * 0.38}, 15],
    ])
  }
  if (op.shape == "horizontalwaves"){
    op.shapePos = wcx([
      [{name: "center", min: -sz.nw*0.1, max: sz.nw*1.1}, 1],
    ])
  }

  if (op.shapePos.name == "center" ) op.looseFlowCenter = {x: sz.nw * .5, y: sz.nh * .5};
  else if (op.shapePos.name == "above") op.looseFlowCenter = {x: sz.nw * .5, y: sz.nh * .75};
  else if (op.shapePos.name == "below") op.looseFlowCenter = {x: sz.nw * .5, y: sz.nh * .25};
  
  if (op.shape == "constellation" && op.shapePos.name == "center" ) {
    op.looseFlowMax = 900;
  }
  else op.looseFlowMax = 500;

  op.drawWavyShapes = wcx([[true, 3], [false, 1]]);
  

  op.colorChoosing = wcx([["random", 4]]);

  op.colorChoosingRes = 0.001;

  op.rl = wcx([
    [{
      name: "smooth",
      angleRes: 0.003,
      angleAdj: 130,
      lengthRes: 0.005,
      maxLength: 350,
      alpha: 40
    }, 5],
    [{
      name: "leaves",
      angleRes: 0.0001,
      angleAdj: 100,
      lengthRes: 0.01,
      maxLength: 700,
      alpha: 10
    }, 1],
    [{
      name: "curvy",
      angleRes: 0.003,
      angleAdj: 300,
      lengthRes: 0.001,
      maxLength: 400,
      alpha: 30
    }, 2]
  ])

  op.fl = wcx([
    [{
      name: "curvy",
      num: wcx([[3, 1], [6, 3], [8, 4], [15, 4] ]), 
      res: 0.001,
      lineDiff: 0.001,
      numRepeats: {
        min: 45,
        max: 50
      },
      repeatRes: 0.003,
      zInc: 0.006,
      maxPoints: {
        min: 30,
        max: 80
      }
    }, 5],
    [{
      name: "straight",
      num: wcx([[15, 4], [35, 4] ]), 
      res: 0.00003,
      lineDiff: 0.001,
      numRepeats: {
        min: 45,
        max: 50
      },
      repeatRes: 0.001, // Along path
      zInc: 0.006,  // per repeat
      maxPoints: {
        min: 30,
        max: 90
      }
    }, 1],   
    [{
      name: "straight smooth",
      num: wcx([[15, 4], [35, 4] ]), 
      res: 0.00008,
      lineDiff: 0.001,
      numRepeats: {
        min: 45,
        max: 50
      },
      repeatRes: 0.001, // Along path
      zInc: 0.001,  // per repeat
      maxPoints: {
        min: 30,
        max: 90
      }
    }, 1],  
    [{
      name: "wisps",
      num: wcx([[5, 4],[7, 4], [15, 4], [35, 4] ]), 
      res: 0.008,
      lineDiff: 0.001,
      numRepeats: {
        min: 23,
        max: 100
      },
      repeatRes: 0.004, // Along path
      zInc: 0.001,  // per repeat
      maxPoints: {
        min: 30,
        max: 90
      }
    }, 3],    
    [{
      name: "wide curves",
      num: wcx([[5, 4],[10, 4] ]), 
      res: 0.003,
      lineDiff: 0.0001,
      numRepeats: {
        min: 70,
        max: 100
      },
      repeatRes: 0.006, // Along path
      zInc: 0.003,  // per repeat
      maxPoints: {
        min: 30,
        max: 90
      }
    }, 2],   
  ])

  op.df = wcx([
    [{
      name: "flow",
      num: {
        min: 100,
        max: 150,
      },
      jump: 3,
      angleRes: 0.001,
      zInc: 0.003,
      dInc: 1, 
    }, 5],
    [{
      name: "scratch",
      num: {
        min: 200,
        max: 300,
      },
      jump: 10,
      angleRes: 0.001,
      zInc: 0.003,
      dInc: 1, 
    }, 1],
    [{
      name: "smooth",
      num: {
        min: 150,
        max: 200,
      },
      jump: 3,
      angleRes: 0.001,
      zInc: 0.001,
      dInc: 1, 
    }, 2],
    [{
      name: "detached",
      num: {
        min: 100,
        max: 160,
      },
      jump: 2,
      angleRes: 0.0006,
      zInc: 0.004,
      dInc: 1.4, 
    }, 2]
  ])
}
