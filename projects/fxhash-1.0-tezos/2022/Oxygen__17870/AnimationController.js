class AnimationController {
    constructor(name = "") {
        this.animations = Array();
        this.stepCount = 0;
        this.parallel = false;
        this.currentStep = 0;
        this.name = name;
    }

    step() {
        this.stepCount = this.stepCount + 1;
        let allCompleted;

        if (this.parallel) {
            allCompleted = true;
            for (let i = 0; i < this.animations.length; i++) {
                const [stage, delay] = this.animations[i];

                if (delay < this.stepCount) {
                    if (!stage.step()) {
                        allCompleted = false;
                    }
                } else {
                    allCompleted = false;
                }
            }
        } else {
            allCompleted = false;
            let isStageReady = false;

            if (this.currentStep < this.animations.length) {
                const [stage, delay] = this.animations[this.currentStep];
                isStageReady = stage.step();

                if (isStageReady) {
                    this.currentStep = this.currentStep + 1;
                    if (this.currentStep == this.animations.length) {
                        allCompleted = true;
                    }
                }
            } else {
                allCompleted = true;
            }
        }

        return allCompleted;
    }

    push(stage, delay = 0) {
        this.animations.push([stage, delay]);
    }
}
