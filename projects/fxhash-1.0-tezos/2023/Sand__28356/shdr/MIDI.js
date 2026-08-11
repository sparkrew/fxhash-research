export function MIDI(){
	let MIDI = [...Array(64)].fill(0)
	MIDI.MIDIAccess = null
	let midi = null; // global MIDIAccess object
	function onMIDISuccess(midiAccess) {
		console.log("MIDI ready!");
		MIDI.MIDIAccess = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
		listInputsAndOutputs(midiAccess);
		startLoggingMIDIInput(midiAccess, 0);
	}

	function onMIDIFailure(msg) {
		console.error(`Failed to get MIDI access - ${msg}`);
	}
	
	navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

	function listInputsAndOutputs(midiAccess) {
		for (const entry of midiAccess.inputs) {
			const input = entry[1];
			console.log(
				`Input port [type:'${input.type}']` +
				` id:'${input.id}'` +
				` manufacturer:'${input.manufacturer}'` +
				` name:'${input.name}'` +
				` version:'${input.version}'`
			);
		}
		for (const entry of midiAccess.outputs) {
			const output = entry[1];
			console.log(
				`Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`
			);
		}
	}

	function onMIDIMessage(event) {
		let action = event.data[0]
		let knob = event.data[1]
		let value = event.data[2]/127
		console.log(`MIDI ${action} ${knob} ${value}`)
		if(action == 176) {
			MIDI[knob] = value
		}	
	}

	function startLoggingMIDIInput(midiAccess, indexOfPort) {
		midiAccess.inputs.forEach((entry) => {
			entry.onmidimessage = onMIDIMessage;
		});
	}

	return MIDI
}
