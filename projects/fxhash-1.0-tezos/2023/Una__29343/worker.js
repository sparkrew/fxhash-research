self.importScripts("wasm_exec.js");



if (!WebAssembly.instantiateStreaming) { // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new self.Go();
let mod, inst;
let result;
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
    .then((result) => {
        mod = result.module;
        inst = result.instance;
        go.run(inst);
        // console.log("WASM binary Loaded");
        postMessage({
            type: "ready",
        });
    })
    .catch((err) => {
        console.error(err);
    });


self.onmessage = async (msg) => {
    // console.log("Message received: " + msg.data.call);
    // console.log(self)
    switch (msg.data.type) {
        case "call":
            // debugger;
            // console.log("Message received: " + msg);
            args = msg.data.args || [];
            await self[msg.data.func](...args);
            // console.log("Stop Rendering");
            break;
        case "set":
            self[msg.data.prop] = msg.data.value;
            break;
        default:
            console.error("Unavailable message type!");
    }
};

function updateDisplayImage(buf) {
    // console.log("worker updateDisplayImage()");
    let blob = new Blob([buf], {type: 'png'});
    postMessage({
        type: "updateDisplayImage",
        displayImage: blob,
    });
}

function updateHighResImage(buf, filename) {
    // console.log("worker updateHighResImage()");
    let blob = new Blob([buf], {type: 'png'});
    console.log("Bytes received" + blob);
    postMessage({
        type: "updateHighResImage",
        displayImage: blob,
        filename: filename
    });
}

function trackProgress(progress) {
    postMessage({
        progress: progress,
    });
}

