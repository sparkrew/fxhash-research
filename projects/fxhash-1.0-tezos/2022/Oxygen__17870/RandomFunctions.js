function createRandomFunctionTree(randO) {
    const nodeCreators = {
        /*  noise: function createLogAbsNode(level) {
      return {
        expr: function() { return "noise(" + this.params[0].expr() + "," + this.params[1].expr() + ")"; },
        params: [createRandomNode(level+1),createRandomNode(level+1)]
      };
    },

    */

        logabs: function createLogAbsNode(level) {
            return {
                name: "logabs",
                expr: function () {
                    return "log(abs(" + this.params[0].expr() + ")+1)";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        /* fracAbs: function createFracAbsNode(level) {
      return {
        name: "fracAbs",
        expr: function() { return "abs(" + this.params[0].expr() + ") - floor(abs(" + this.params[0].expr()+ "))"; },
        params: [createRandomNode(level+1)]
      };
    }, */

        sign: function createSignNode(level) {
            return {
                name: "sign",
                expr: function () {
                    return "sign(" + this.params[0].expr() + ")";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },
        /*
    cube: function createCubeNode(level) {
      return {
        name: "cube",
        expr: function() { return "pow(" + this.params[0].expr() + ",3.0)"; },
        params: [createRandomNode(level+1)]
      };
    },
    */
        square: function createSquareNode(level) {
            return {
                name: "square",
                expr: function () {
                    return "pow(" + this.params[0].expr() + ",2.0)";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        exp: function createExpNode(level) {
            return {
                name: "exp",
                expr: function () {
                    return "exp(" + this.params[0].expr() + ")";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        abs: function createAbsNode(level) {
            return {
                name: "abs",
                expr: function () {
                    return "abs(" + this.params[0].expr() + ")";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        sin: function createSinNode(level) {
            return {
                name: "sin",
                expr: function () {
                    return "sin(" + this.params[0].expr() + ")";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        cos: function createSinNode(level) {
            return {
                name: "cos",
                expr: function () {
                    return "cos(" + this.params[0].expr() + ")";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        sqrtabs: function createSinNode(level) {
            return {
                name: "sqrtabs",
                expr: function () {
                    return "sqrt(abs(" + this.params[0].expr() + "))";
                },
                params: [createRandomNode(level + 1, false)],
            };
        },

        add2: function createAdd2Node(level) {
            return {
                name: "add2",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "+" +
                        this.params[1].expr() +
                        ")"
                    );
                },
                params: [
                    createRandomNode(level + 1, true),
                    createRandomNode(level + 1, false),
                ],
            };
        },

        subleft: function createSubtractNode(level) {
            return {
                name: "sub",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "-" +
                        this.params[1].expr() +
                        ")"
                    );
                },
                params: [
                    createRandomNode(level + 1, true),
                    createRandomNode(level + 1, false),
                ],
            };
        },

        subright: function createSubtractNode(level) {
            return {
                name: "sub",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "-" +
                        this.params[1].expr() +
                        ")"
                    );
                },
                params: [
                    createRandomNode(level + 1, false),
                    createRandomNode(level + 1, true),
                ],
            };
        },

        mul: function createMultiply2Node(level) {
            return {
                name: "mul",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "*" +
                        this.params[1].expr() +
                        ")"
                    );
                },
                params: [
                    createRandomNode(level + 1, true),
                    createRandomNode(level + 1, false),
                ],
            };
        },

        divabsleft: function createDivAbsNode(level) {
            return {
                name: "divabs",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "/ (abs(" +
                        this.params[1].expr() +
                        ")+0.0001))"
                    );
                },
                params: [
                    createRandomNode(level + 1, true),
                    createRandomNode(level + 1, false),
                ],
            };
        },

        divabsright: function createDivAbsNode(level) {
            return {
                name: "divabs",
                expr: function () {
                    return (
                        "(" +
                        this.params[0].expr() +
                        "/ (abs(" +
                        this.params[1].expr() +
                        ")+0.0001))"
                    );
                },
                params: [
                    createRandomNode(level + 1, false),
                    createRandomNode(level + 1, true),
                ],
            };
        },

        const: function createConstNode(level) {
            return {
                name: "x",
                expr: function () {
                    return "" + this.params[0];
                },
                params: [randO.next()],
            };
        },

        x: function createXNode(level) {
            return {
                name: "x",
                expr: function () {
                    return "(x)";
                },
                params: [],
            };
        },

        y: function createYNode(level) {
            return {
                name: "y",
                expr: function () {
                    return "(y)";
                },
                params: [],
            };
        },

        eucldist: function createAdd2Node(level) {
            return {
                name: "eucldist",
                expr: function () {
                    return "(sqrt(x*x+y*y))";
                },
                params: [],
            };
        },

        /*,

    sintime: function createPowNode(level) {
      return {
        expr: function() { return "(sin(iTime/50.0))"; },
        params: []
      };
    }
  */
    };

    const MAXLEVEL = 12;

    function createRandomNode(level, allowConstants) {
        if (level == 0) {
            return nodeCreators.abs(1);
        }

        let nodeNames = Object.keys(nodeCreators);

        if (level < MAXLEVEL / 2) {
            nodeNames = nodeNames.filter((value) => value !== "x");
            nodeNames = nodeNames.filter((value) => value !== "y");
            nodeNames = nodeNames.filter((value) => value !== "const");
            nodeNames = nodeNames.filter((value) => value !== "eucldist");
        } else if (level >= MAXLEVEL) {
            nodeNames = ["x", "y"];
        }

        if (!allowConstants) {
            nodeNames = nodeNames.filter((value) => value !== "const");
        }

        const i = Math.floor(randO.next() * nodeNames.length);
        return nodeCreators[nodeNames[i]](level);
    }

    return createRandomNode(0, false);
}
