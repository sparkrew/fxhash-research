const isLocalHost = () => location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.origin === 'file://';
const getDevicePixelRatio = () => { return window.devicePixelRatio ? window.devicePixelRatio : 1;};
const getViewport = () => {
    let viewPortWidth;
    let viewPortHeight;
    if (typeof window.innerWidth != "undefined") {
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;
    }
    else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth;
        viewPortHeight = document.documentElement.clientHeight;
    }
    else {
        viewPortWidth = document.getElementsByTagName("body")[0].clientWidth;
        viewPortHeight = document.getElementsByTagName("body")[0].clientHeight;
    }
    return [viewPortWidth, viewPortHeight];
};
const toRadians = Math.PI / 180;
const initControl = object3d => {
    const previousMousePosition = { x: 0, y: 0 };
    ['touchstart', 'mousedown'].forEach( eventType => {
        document.addEventListener(eventType, e => {
            if (eventType === 'touchstart') {
                const touch = e.touches[0] || e.changedTouches[0];
                previousMousePosition.x = touch.pageX;
                previousMousePosition.y = touch.pageY;
                document.addEventListener('touchmove', onTouchMove);
            } else {
                previousMousePosition.x = e.pageX;
                previousMousePosition.y = e.pageY;
                document.addEventListener('mousemove', onMouseMove);
            }
        })
    });
    ['touchend', 'mouseup'].forEach( eventType => {
        document.addEventListener(eventType, e => {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('mousemove', onMouseMove);
        })
    })
    const onTouchMove = e => {
        const touch = e.touches[0] || e.changedTouches[0];
        rotateObject(touch.pageX, touch.pageY);
    }
    const onMouseMove = e => {
        rotateObject(e.pageX, e.pageY);
    }
    const rotateObject = (x, y) => {
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians * (y - previousMousePosition.y) * .3,
                toRadians * (x - previousMousePosition.x) * .3,
                0,
                'XYZ'
            ));
        object3d.quaternion.multiplyQuaternions(deltaRotationQuaternion, object3d.quaternion);
        previousMousePosition.x = x;
        previousMousePosition.y = y;
        if (!animation) requestAnimationFrame(update);
    }
}
const EIOB_C1 = 1.70158;
const EIOB_C2 = EIOB_C1 * 1.525;
const easeInOutBack = x => {
    return x < 0.5 ? (Math.pow(2 * x, 2) * ((EIOB_C2 + 1) * 2 * x - EIOB_C2)) / 2 : (Math.pow(2 * x - 2, 2) * ((EIOB_C2 + 1) * (x * 2 - 2) + EIOB_C2) + 2) / 2;
}
const easeInOutSine = x => {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}

const easeInOutCubic = x => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const easeInOutQuint = x => {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

const spin = x => {
    return x < 0.5 ? easeInOutQuint(x) : easeInOutBack(x);
}

const saveCanvas = (canvas, name) =>  {
    fileName = name || 'image-name';
    const canvasImage = canvas.toDataURL('image/png');
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = fileName + '.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };
    xhr.open('GET', canvasImage);
    xhr.send();
}

const sequence = (time, cycle, start, duration, delay) => {
    return Math.max(0, Math.min(1, (((time - delay * cycle)%cycle)/cycle - start)/duration));
}