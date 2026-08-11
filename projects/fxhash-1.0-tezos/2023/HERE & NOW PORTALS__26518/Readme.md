The 'Portal' is your gateway to 'The Passage' created by HERE & NOW. This interactive minting project seeks to transform the traditional minting experience into something truly unique and unexpected.

Each 'Portal' gives you access and 1x reserve for all future 'The Passage' experiences both virtual and IRL.

For more information, visit hereandnow.events or join the discord, and join us in redefining what it means to mint.

See LICENCE.md for licence details.

TECHNOLOGY :::::::::

This token is designed using a custom-built raymarching engine, built in a way that allows me to pass in chunks of GLSL code as determined by the params and features.

The geometry is generated using what's called a KIFS (Kaleidoscopic Iterated Function System) fractal, which involves taking the space, folding it, offseting it, drawing in it, and repeating. By doing this, we can create some *very* complex appearing geometry using some relatively simple rules.

Finally, this is an intense simulation and requires a somewhat powerful GPU to properly be enjoyed.

PARAMS :::::::::::::

Firstly, DON'T BE INTIMIDATED! There are a lot of params in this project, but mostly designed to allow tweaking, rather than radically affecting the outcome. In addition, there are 3 boolean overrides that allow you to ensure that various property sets are goverened fully by the random number generator (RNG). Finally, I'm providing a random seed that allows the preview to match the mint exactly.

Random seed
This is a replacement for the hash in RNG. Use it to generate a seed for YOUR token.

Geometry size 1-3
Each geometry size corresponds to a different component of the size of the geomtry depenting on the type selected. Play around with these as you please, some selections will result in very large geometry, but there's a LOT of nuance in here.

Geometry type
This select field determines the type of geometry drawn within our KIFS folds.

Environment color
The color of the environment. This will change the colour of the background (in the distance) and the fog.

Object color
Modifies the base colour of the geometry. Mid-level greys will work best here, but you can get some very exotic outcomes with some small variations here.

Light color
The color of the light source.

Fresnel color
This color corresponds to the Fresnel shading, more colloquially this sort of shading is called "rim lighting"

Gamma
The gamma provides different values for the gamma colour correction values.  This value will dramatically affect the general color balance in the piece, safe values are around the mid-gray area.

Fold angle 1-2
This will modify the angles that the algorithms fold the xy / xz geometry by before drawing.

Offset 1-3
These values determine how far the algorithm translates the space, after folding, before drawing geometry into it. These values will change the position of the objects within the folds.

Modulo A-B
These select fields detemine how the algorithm draws new pieces of geometry against old. PLay around with them.

Light intensity
The intensity of the light source.

Light attenuation
How quickly the light fades, away from the source.

Light distance
How far from the camera the light appears.

Fresnel intensity
How intence the Fresnel shading appears.

CONTROLS :::::::::::

Mouse - Click and drag to move the camera around in the space.
Q/E - Roll the camera.
R/F - Change the speed of the camera.
SPACE - Stop the camera form moving.
O - Output a still picture without DOF.
P - Outptu a still picture with DOF.

URL PARAMS :::::::::

&still=true
This will just render a still image.

&dpr=X
Where X is a number. Will allow you to render the token to a higher or lower resolution

&fullscreen=true
Allows you to render the token at the screen resolution of your browser.

&width=X &height=Y
Allows you to set the specific dimensions of the token.

&dof=true
Turns fake depth of field on.

&doflenngth=X
Changes the length at with the DOF is calculated.

&steps=X
Allows you to explicitly set the number of steps the raymarcher can use.
