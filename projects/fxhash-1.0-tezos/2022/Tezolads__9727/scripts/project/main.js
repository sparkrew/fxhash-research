
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.globalVars.Background = window.background1;
	runtime.globalVars.Body = window.body1;
	runtime.globalVars.Pants = window.pants1;
	runtime.globalVars.Head = window.head1;
	runtime.globalVars.Equipment = window.equipment1;
	runtime.globalVars.LeftArm = window.leftarm1;
	runtime.globalVars.LeftLeg = window.leftleg1;
	runtime.globalVars.RightArm = window.rightarm1;
	runtime.globalVars.RightLeg = window.rightleg1;
	runtime.globalVars.Pet = window.pet1;
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
