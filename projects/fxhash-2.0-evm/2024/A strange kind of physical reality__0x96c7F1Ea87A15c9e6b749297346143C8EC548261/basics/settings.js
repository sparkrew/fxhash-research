function settings(){

  noiseSeed(rand(9999));

  sx = {
    p: wcx(pl),
    center: {x: sz.nw * .5, y: sz.nh * .5},
  }

  // Loose flow lines
  sx.fl = {
    num: op.fl.num, 
    res: op.fl.res,
    pointGap: 5,
    size: 2,
    flDiff: op.fl.lineDiff,

    maxAlpha: 30,
    numRepeats: () => int(rand(op.fl.numRepeats.min, op.fl.numRepeats.max)),

    repeatRes: op.fl.repeatRes, // Along path
    zInc: op.fl.zInc,  // per repeat
    dInc: 2.4,

    maxPoints: () => int(rand(op.fl.maxPoints.min, op.fl.maxPoints.max)),
  }

  sx.fl.angleGap = 360 / sx.fl.num;


  // Background ribbon lines
  sx.l = {
    num: ecx([3, 3, 3, 5, 8, 20]),
    margin: -100,
    dotGap: 1,

    alpha: 4,

    lineDiff: 0.001,
    waveRes: ecx([0.001, 0.003]),
    waveDistance: 600,
    

    angleLineDiff: 0.002,
    angleRes: ecx([0.001, 0.005]),

    angleRes: 0,

    lengthLineDiff: 0.0001,
    lengthRes: 0.001,
  }

  sx.l.gap = (sz.nw - sx.l.margin)  / sx.l.num;

  sx.l.length = {
    mid: sx.l.gap * 1.4,
    adj: sx.l.gap * 0.2
  }

  // Form (constellation)
  sx.f = {
    pointGap: 1,

    points: { // wavy points (not flow)
      angleRes: wcx([[0.001, 1], [0.004, 9], [0.008, 1]]),
      maxDist: wcx([[100, 1], [300, 5]]),
      alpha: 20 // for wavy shapes 
    },

    ribbons: {
      angleRes: op.rl.angleRes,
      angleAdj: op.rl.angleAdj,
      lengthRes: op.rl.lengthRes,
      maxLength: op.rl.maxLength,
      alpha: op.rl.alpha,
    },

    flow: {
      num: () => rand(op.df.num.min, op.df.num.max),
      dInc: () => op.df.dInc,
      jump: op.df.jump,
      maxAlpha: 90,
      size: 1.2,
      
      angleRes: op.df.angleRes, // difference along connection
      zInc: op.df.zInc,  // difference from one iteration to the next
    }
  }


  if (op.shape == "constellation"){
    sx.c = {
      num: 1,
      size: {
        min: wcx([[100, 20], [360, 1]]),
        max: wcx([[400, 1], [450, 1]]),
      },
    }

    sx.c.numNodes = ecx([15, 25, 30, 40]);
  }
  else if (op.shape == "verticalwaves"){
    sx.c = {
      num: ecx([3, 4, 5]),
      margin: 30,
      similarity: 0.1
    }

    sx.c.gap = (sz.nw - sx.c.margin) / sx.c.num;
    sx.c.jitterRes = 0.01;
    sx.c.jitterAmt = sx.c.gap*1;

    sx.c.numNodes = ecx([5, 8, 10]);

    sx.c.yPos = op.shapePos;
  }

  else if (op.shape == "horizontalwaves"){
    sx.c = {
      num: ecx([3, 4, 5]),
      margin: 10,
      similarity: ecx([0, 0.1, 3])
    }

    sx.c.gap = (sz.nh - sx.c.margin) / sx.c.num;
    sx.c.jitterRes = 0.01;
    sx.c.jitterAmt = sx.c.gap*1;

    sx.c.numNodes = ecx([5, 8, 10]);

    sx.c.xPos = op.shapePos;
  }

  sx.c.numConnections = () => int(rand(2, 5));


  sx.example = {
    func: () => rand(0, 1),
    wcx: wcx([ [0, 0], [0.3, 3], [0.5, 3], [1, 1] ]),
    ecx: ecx([0, 10]),

    set: op.exampleSet,
  };

}


function logData(){
  console.log("loaded in: " + nf(loadTime / 1000, 0, 3) + " seconds");
  console.log(sx);
  console.log(op);

  console.log(op.shape)
  console.log("dotted flow - ", op.df.name);
  console.log("ribbon lines - ", op.rl.name);
  console.log("wavy shapes - ", op.fl.name);
  console.log("num nodes", sx.c.numNodes)
  console.log("palette", sx.p.n)
  console.log("flow hue adj", sx.p.flowHueAdj)
  console.log("color layout", op.colorChoosing)
  
}

