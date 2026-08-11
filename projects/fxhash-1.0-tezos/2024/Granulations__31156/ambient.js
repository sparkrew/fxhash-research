import * as Tone from "tone";



let lastNoteTime = 0;

const MIN_TIME_BETWEEN_NOTES = .2; 

// AMBIENT MELODY - AIRPORT

// to control for grincage
const limiter = new Tone.Limiter(-6).toDestination();
const gain = new Tone.Gain(0.5);

// Create a convolver
const convolver = new Tone.Convolver({
    url: "/sample/AirportTerminal.ogg", // Replace with your actual file path
    wet: 0.5 // Adjust this to control the mix of dry/wet signal
}).connect(limiter);

gain.connect(convolver);

// polyphonic synth to imitate choir voices
const polySynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.8,
        decay: 0.2,
        sustain: 1,
        release: 0.8
    },
    volume: -22,
    maxPolyphony: 12
}).connect(gain);

// the sample library: Db Major 7th chord with added 9th (i transformed the flat notes into their equivalent sharps)
// Define the original notes
const notes = [
    { note: 'G#', octave: 4 },
    { note: 'C#', octave: 5 },
    { note: 'F', octave: 4 },
    { note: 'A#', octave: 5 },
    { note: 'D#', octave: 5 },
    { note: 'G#', octave: 5 },
    { note: 'C', octave: 5 },
    { note: 'F#', octave: 4 },
    { note: 'C#', octave: 6 },
    { note: 'F', octave: 5 },
    { note: 'A#', octave: 4 },
    { note: 'C#', octave: 4 },
    { note: 'F#', octave: 5 },
    { note: 'F', octave: 6 }
];

// Function to shuffle an array
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor($fx.rand() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Shuffle the notes
const shuffledNotes = shuffleArray(notes);

function startLoop(noteObj, loopLengthSeconds, delaySeconds) {
    const noteWithOctave = `${noteObj.note}${noteObj.octave}`;
    
    const loop = new Tone.Loop(time => {
        polySynth.triggerAttackRelease(noteWithOctave, "4n", time);
    }, loopLengthSeconds).start(delaySeconds);
    
    return loop;
}

let activeLoops = [];

function startAllLoops() {
    Tone.start().then(() => {
        activeLoops.forEach(loop => loop.stop());
        activeLoops = [];

        shuffledNotes.forEach((noteObj, index) => {
            const loopLength = 20 + (index * $fx.rand() ); //.7
            const delay = index * 2;
            
            const loop = startLoop(noteObj, loopLength, delay);
            activeLoops.push(loop);
        });

        // Start the Tone.js transport
        Tone.Transport.start();
    });
}

// BASE - DISCREET
// you can set a loop to only repeat a specific number of times, or add some randomness by only having the loop trigger at a given probability. Most importantly though, the loop API lets us do precise timing.

// to control for grincage
const limiter2 = new Tone.Limiter(-8).toDestination();
const gain2 = new Tone.Gain(0.5);

function makeSynth() {
    let envelope = {
        attack: 0.1,
        release: 4,
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 150,
        octaves: 1.5,
        attack: 0,
        decay: 0,
        release: 1000
    };

    return new Tone.DuoSynth({
        harmonicity: 1,
        voice0: {
            oscillator: { type: 'triangle' },
            envelope,
            filterEnvelope
        },
        voice1: {
            oscillator: { type: 'sine' },
            envelope,
            filterEnvelope
        },
        volume: -32,
        vibratoRate: 0.5,
        vibratoAmount: 0.1
    });
}

gain2.connect(limiter2);


function startAllDscreetLoops() {
    let leftSynth = makeSynth();
    let rightSynth = makeSynth();

    let leftPanner = new Tone.Panner(-0.5).toDestination();
    let rightPanner = new Tone.Panner(0.5).toDestination();
    let echo = new Tone.FeedbackDelay('16n', 0.2);
    let delay = new Tone.FeedbackDelay(6.0, 0.5); // Create a feedback delay with 6 seconds delay time and 0.5 feedback

    // Create a main mix bus
    let mainMix = new Tone.Gain(1).toDestination();

    // Create a recorder to capture the synths' output
    let recorder = new Tone.Recorder();

    leftSynth.connect(leftPanner);
    rightSynth.connect(rightPanner);
    leftPanner.connect(echo);
    rightPanner.connect(echo);
    echo.toDestination();
    echo.connect(delay);
    delay.connect(mainMix);

    // Connect the synths to the recorder
    leftSynth.connect(recorder);
    rightSynth.connect(recorder);

    // Start recording
    recorder.start();

    new Tone.Loop(time => {
        leftSynth.triggerAttackRelease('G#4', '1n + 2n', time);
        leftSynth.setNote('C#5', '+2n');
      
        // Trigger F4 after 6 measures and hold for two 1/4 notes.
        leftSynth.triggerAttackRelease('F4', '0:2', '+6:0');
      
        // Trigger A#5 after 11 measures + a two 1/4 notes, and hold for two 1/4 notes.
        leftSynth.triggerAttackRelease('A#5', '0:2', '+11:2');
      
        // Trigger D#5 after 19 measures and hold for 2 measures.
        // Switch to G#5, C5, G#5 after delay of a 1/4 note + two 1/16 notes each.
        leftSynth.triggerAttackRelease('D#5', '2:0', '+19:0');
        leftSynth.setNote('G#5', '+19:1:2');
        leftSynth.setNote('C5', '+19:3:0');
        leftSynth.setNote('G#5', '+19:4:2');
    }, '34m').start();
      
    new Tone.Loop(time => {
        // Trigger F#4 after 5 measures and hold for 1 full measure + two 1/4 notes
        rightSynth.triggerAttackRelease('F#4', '1:2', '+5:0');
        // Switch to C#6 after one more measure
        rightSynth.setNote('C#6', '+6:0');
      
        // Trigger F5 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
        rightSynth.triggerAttackRelease('F5', '1m', '+11:2:2');
        // Switch to A#4 after a 1/2 note more
        rightSynth.setNote('A#4', '+12:0:2');
      
        // Trigger C#4 after 23 measures + two 1/4 notes. Hold for a half note.
        rightSynth.triggerAttackRelease('C#4', '0:2', '+23:2');
    }, '37m').start();
    
    let granularEffect, granularGain;

    Tone.Transport.scheduleOnce(() => {
        recorder.stop().then(async (recordedBlob) => {

            try {
                // Convert Blob to ArrayBuffer
                const arrayBuffer = await recordedBlob.arrayBuffer();
                
                // Create an AudioBuffer from the ArrayBuffer
                const audioContext = Tone.getContext().rawContext;
                const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
                // Create the granular effect using the AudioBuffer
                granularEffect = new Tone.GrainPlayer({
                    url: audioBuffer,
                    grainSize: 0.9, //  sets the size of each grain in seconds. A value of 0.1 means each grain is 100 milliseconds long. Smaller grains (like 0.01-0.1) tend to create a smoother sound, while larger grains (0.1-1) can create more textured or rhythmic effects.
                    overlap: 0.005, // determines how much the grains overlap each other. A value of 0.05 means each grain will overlap with the next one by 5% of its duration. More overlap can create a denser, smoother sound, while less overlap can create more rhythmic or granular effects.
                    playbackRate: 3, //  controls the speed at which the grains are played back. A value of 1 is normal speed, 0.5 would be half speed, 2 would be double speed, etc. This can dramatically change the character of the sound.
                    detune: 0, // detunes the playback rate by the given amount in cents (100 cents = 1 semitone). It can be used to create slight pitch variations.
                    loop: true // will loop continuously through the audio buffer.
                }).toDestination();
    
                granularGain = new Tone.Gain(0.5);
                granularEffect.connect(granularGain);
                granularGain.connect(mainMix);
    
                // Start the granular effect
                granularEffect.start();

            } catch (error) {
                console.error('Error creating or starting granular effect:', error);
            }
        }).catch(error => {
            console.error('Error stopping recorder:', error);
        });
    }, '+10');

    Tone.Transport.start();

}


// RANDOM NOTE WITH RANDOM BOUNCE
let randomNotesEnabled = false;

const limiter3 = new Tone.Limiter(-3).toDestination();
const gain3 = new Tone.Gain(0.8);

//gain.connect(convolver2);
gain3.connect(limiter3);

let envelope = {
        attack: 0.1,
        release: 4,
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 150,
        octaves: 1.5,
        attack: 0,
        decay: 0,
        release: 1000
    };

const randomNoteSynth = new Tone.DuoSynth({
    harmonicity: 1,
    voice0: {
        oscillator: { type: 'triangle' },
        envelope,
        filterEnvelope
    },
    voice1: {
        oscillator: { type: 'sine' },
        envelope,
        filterEnvelope
    },
    volume: -32,
    vibratoRate: 0.5,
    vibratoAmount: 0.2
}).connect(gain3);

let granularEffect, granularGain;
let isRecording = false;
let recorder;

export function playRandomNote() {
    if (!randomNotesEnabled) {
        return;
    }

    const currentTime = Tone.now();
    if (currentTime - lastNoteTime < MIN_TIME_BETWEEN_NOTES) {
        return;
    }

    // Check the current audio context state
    if (Tone.context.state !== 'running') {
        Tone.context.resume().then(() => {
            playRandomNoteInternal(currentTime);
        });
    } else {
        playRandomNoteInternal(currentTime);
    }
}

async function playRandomNoteInternal(currentTime) {
    lastNoteTime = currentTime;
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    const noteWithOctave = `${randomNote.note}${randomNote.octave}`;

    // Create a recorder if not already created
    if (!recorder) {
        recorder = new Tone.Recorder();
        randomNoteSynth.connect(recorder);
    }

    // Start recording if not already recording
    if (!isRecording) {
        recorder.start();
        isRecording = true;
    }

    try {
        await Tone.start();
        randomNoteSynth.triggerAttackRelease(noteWithOctave, "8n", currentTime);
    } catch (error) {
        console.error("Error playing note:", error);
    }

    // Schedule the creation of the granular effect after a short delay
    Tone.Transport.scheduleOnce(async () => {
        if (isRecording) {
            isRecording = false;

            try {
                const recordedBlob = await recorder.stop();

                // Convert Blob to ArrayBuffer
                const arrayBuffer = await recordedBlob.arrayBuffer();

                // Check if the ArrayBuffer is empty
                if (arrayBuffer.byteLength === 0) {
                    console.warn('ArrayBuffer is empty. Skipping granular effect creation.');
                    return;
                }

                // Create an AudioBuffer from the ArrayBuffer
                const audioContext = Tone.getContext().rawContext;

                // Additional error handling for decodeAudioData
                const audioBuffer = await new Promise((resolve, reject) => {
                    audioContext.decodeAudioData(arrayBuffer, resolve, (error) => {
                        console.error('Error decoding audio data:', error);
                        reject(error);
                    });
                });

                // Ensure the buffer is loaded and ready before creating the GrainPlayer
                await new Promise((resolve, reject) => {
                    const grainPlayer = new Tone.GrainPlayer({
                        grainSize: 0.1, // Adjusted grain size for smoother sound
                        overlap: 0.1, // Adjusted overlap for smoother transition
                        playbackRate: 1, // Normal playback rate to start with
                        detune: 0, // No detuning
                        loop: true,
                        onload: resolve,
                        onerror: reject
                    }).toDestination();

                    grainPlayer.buffer = audioBuffer;

                    granularEffect = grainPlayer;
                });

                granularGain = new Tone.Gain(0.8);
                granularEffect.connect(granularGain);
                granularGain.connect(Tone.getDestination());

                // Start the granular effect
                granularEffect.start();
            } catch (error) {
                console.error('Error creating or starting granular effect:', error);
            }
        }
    }, '+1');
}




// PLAY SOUNDS
export function stopSound() {
    activeLoops.forEach(loop => loop.stop());
    activeLoops = [];
    randomNotesEnabled = false;

    Tone.Transport.stop();
    Tone.Transport.cancel();
    
    // Stop all audio processing
    Tone.getDestination().mute = true;
    
    if (granularEffect) {
        granularEffect.stop();
    }
    
    if (randomNoteSynth) {
        randomNoteSynth.triggerRelease();
    }
}

export function playSound() {

    // Start audio context if it's not running
    Tone.start().then(() => {
        // Ensure the audio context is running
        if (Tone.context.state !== 'running') {
            return Tone.context.resume();
        }
    }).then(() => {
        // Unmute the destination
        Tone.getDestination().mute = false;
        
        startAllLoops();
        startAllDscreetLoops();
        randomNotesEnabled = true;
    }).catch(err => {
        console.error("Error starting Tone.js:", err);
    });
}


export function initAudioAndPlay() {
    Tone.start().then(() => {
      console.log("Audio is ready");
      playSound();
    }).catch(e => console.error("Error starting audio:", e));
  }