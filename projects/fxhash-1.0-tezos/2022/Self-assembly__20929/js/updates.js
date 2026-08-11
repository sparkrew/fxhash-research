let timeNow;
let animation = true;
let animationProgress = 0.5;
let rollBlocker;

const toggleAnimation = () => {
    animation =! animation;
    if (animation) {
        timeThen = new Date().getTime() - timeNow;
        update();
    }
}

const maxIteration = 25;
const globalDelay = 0.13;
const delay = (1 - 2 * globalDelay) / maxIteration / 3;
const period = 1 - 2 * globalDelay - maxIteration * delay;
const cycle = 120 * maxIteration / (1 - globalDelay * 2);
const cycle2 = 2 * cycle;
const rotationDelay = .25 - globalDelay/2;
const PI2 = Math.PI/2;

const update = () => {
    if (animation) {
        timeNow = new Date().getTime() - timeThen;
        const p = Math.floor(Math.max(0, timeNow/cycle + .5))%8;
        groupZ.p1.copy(offsets[p]);
        let k = Math.max(0, Math.floor(timeNow/cycle2 - rotationDelay));
        groupX.rotation.x = (k + easeInOutQuint(sequence(timeNow, cycle2, 0, globalDelay, rotationDelay))) * PI2;
        groupY.rotation.y = (k + easeInOutQuint(sequence(timeNow, cycle2, 0.5, globalDelay, rotationDelay))) * PI2;
        k = sequence(timeNow, cycle, 0, globalDelay * 2, rotationDelay * 2);
        const disassembled = k > .9 || k < 0.1;
        if (SHADOWS) primLight.castShadow = renderer.shadowMap.enabled = disassembled;
        const linearProgress = ((timeNow%cycle)/cycle + .5) % 1;
        assembly = linearProgress < .5 ? linearProgress * 2 : 2 - 2 * linearProgress;
        updateBoxes(groupZ, assembly, timeNow, disassembled);
        if (goldenBlock) goldenBlock.updateReflection = disassembled;
    }
    renderer.render( scene, camera );
    if (animation) requestAnimationFrame(update);
};

const updateBoxes = (object, assembly, timeNow) => {
    let start = globalDelay + delay * object.iteration;
    if (assembly >= start && object.iteration !== undefined) {
        const moveTime = Math.min(1, Math.max(0, (assembly - start) / period));
        object.update(easeInOutQuint(moveTime));
    }
    if (object.roll) {
        start = .5 - globalDelay - object.rollDelay;
        const rollTime = (.5 + object.rollCount * globalDelay - start)/3;
        const roll = sequence(timeNow, 3 * cycle, (object.rollPass + start) / 3, rollTime, .5/3);
        const angle = spin(roll) * Math.PI * object.rollDirection * object.rollCount;
        object.rotation.set(angle * object.rollAxis.x, angle * object.rollAxis.y, angle * object.rollAxis.z);
    }
    object.children.forEach(child => {
        updateBoxes(child, assembly, timeNow);
    })
}