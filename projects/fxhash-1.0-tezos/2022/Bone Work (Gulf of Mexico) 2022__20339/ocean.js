var waterVSrc = `
precision highp float;

// Attributes
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

// Uniforms
uniform mat4 worldViewProjection;
uniform float time;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vTangent;
varying vec2 vUV;

void main(void)
{
	vec3 p = position;
    //vec4 pWorld = world * vec4(p, 1.);

    vNormal = normalize(normal);
	vTangent = vec3(1.,0.,0.);//normalize(b_calc);
	vPosition = p;
	vUV = uv;

    gl_Position = worldViewProjection * vec4(p, 1.);
}

`;

var waterFSrc = `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vTangent;
varying vec2 vUV;

uniform sampler2D normalSampler;
uniform samplerCube envCubemapSampler;

uniform mat4 world;
uniform float time;
const float SPEED_SCALE = 1.;
float NORMAL_EFFECT[3] = float[3](0.1, 0.1, 0.05);
float NORMAL_SPEED[2] = float[2](0.03, 0.025);
float NORMAL_TILING[2] = float[2](300., 300.);
const float SPEC_EXPONENT = 10.;
const float SPEC_INTENSITY = 1.;

uniform vec3 cameraPosition;
uniform vec3 sunDirWorld;
uniform vec4 texRotations[2];

const float fresnel_bias = 0.0;
const float fresnel_exp = 5.;


struct TANGENT_FRAME
{
	vec3 normal;
	vec3 tangent;
	vec3 binormal;
};

struct NORMAL_MAPS
{
	vec3 normalsFromNM[3];
	float normalEffects[3];
};

vec3 calcNormal(TANGENT_FRAME tanFr, NORMAL_MAPS nm)
{
	vec3 ret = vec3(0.0, 0.0, 0.0);
	for(int i=0;i<3;i++)
	{
		ret += (tanFr.tangent * nm.normalsFromNM[i].x + tanFr.binormal * nm.normalsFromNM[i].y) * nm.normalEffects[i];
	}
	return normalize(ret + tanFr.normal);
}

vec2 rotateUV(vec2 uv, int idx)
{
    return vec2(texRotations[idx].x * uv.x + texRotations[idx].y * uv.y,
        texRotations[idx].z * uv.x + texRotations[idx].w * uv.y);
}

NORMAL_MAPS getNormal(vec2 uv, TANGENT_FRAME tanFr)
{
	float timeNM = SPEED_SCALE * time;
    vec2 off = vec2(0.,1.);
	
	vec3 nn = texture2D(normalSampler, rotateUV(uv.xy, 0)*NORMAL_TILING[0] + off*(timeNM*NORMAL_SPEED[0])).rgb - vec3(0.5, 0.5, 0.5);
    vec3 nn2 = texture2D(normalSampler, rotateUV(uv.xy, 1)*NORMAL_TILING[1] + off*(timeNM*NORMAL_SPEED[1])).rgb - vec3(0.5, 0.5, 0.5);

    NORMAL_MAPS ret;
	ret.normalsFromNM[0] = nn;
	ret.normalsFromNM[1] = nn2;
	ret.normalsFromNM[2] = nn;
	ret.normalEffects[0] = NORMAL_EFFECT[0];
	ret.normalEffects[1] = NORMAL_EFFECT[1];
	ret.normalEffects[2] = 0.;//NORMAL_EFFECT[2];
	return ret;
}

float saturate(float v)
{
	return clamp(v, 0.0, 1.0);
}

void main()
{

	// World values
	vec3 vPositionW = vec3(world * vec4(vPosition, 1.0));
	vec3 vNormalW = normalize(vec3(world * vec4(vNormal, 0.0)));
	vec3 viewDirectionW = normalize(vPositionW-cameraPosition);
	vec3 vTangentW = normalize(vec3(world * vec4(vTangent, 0.0)));
	
	TANGENT_FRAME tanFr;
	tanFr.normal = vNormalW;
	tanFr.tangent = vTangentW;
	tanFr.binormal = normalize(cross(vNormalW, vTangentW));
	
	NORMAL_MAPS normalMaps = getNormal(vUV, tanFr);
	vec3 normalW = calcNormal(tanFr, normalMaps);
    //normalW = vec3(0.,1.,0.);

    vec3 lightVectorW = normalize(-sunDirWorld);

	// diffuse
	float ndl = max(0., dot(normalW, lightVectorW));
	
	// Specular
	vec3 angleW = normalize(-viewDirectionW + lightVectorW);
	float specComp = max(0., dot(normalW, angleW));
	specComp = pow(specComp, SPEC_EXPONENT) * SPEC_INTENSITY;    

    //float debugf = ndl;
    vec3 dirReflW = reflect(viewDirectionW, normalW);
    dirReflW.y -= 0.005;
    vec4 overWaterCol = textureCube(envCubemapSampler, dirReflW * vec3(1.,-1.,1.));
    vec4 col = overWaterCol;
    col.w = 1.;

    float fresnel = 1.001 - clamp(dot(-viewDirectionW, normalW), 0.0, 1.0);
	fresnel = pow(fresnel, fresnel_exp);
	fresnel = 1.-saturate((fresnel+fresnel_bias)/(1.0+fresnel_bias));
	float debugf = saturate(dirReflW.y*15.);

    //float darkener = (fresnel + 0.1);
    //col.xyz *= pow(darkener,2.)*0.4;
    float darkener = mix(0.95, 0.2, fresnel);
    col.xyz *= darkener;

    //gl_FragColor = vec4(debugf, debugf, debugf, 1.);
    //gl_FragColor = vec4(1.,0.,0.,1.);
    //gl_FragColor = pow(col, vec4(0.5,0.5,0.5,1.0));
    gl_FragColor = col;//*vec4(0.9, 0.8, 0.8, 1.);
}


`;

var OceanGeo = undefined;
async function loadOceanGeo(scene)
{
    let importResult = await BABYLON.SceneLoader.ImportMeshAsync("", "", "./assets/Disc.glb", scene, undefined, ".glb");
    OceanGeo = importResult.meshes[0].getChildMeshes(true)[0];
}

class Ocean
{
    constructor(scene)
    {
        //this.water = BABYLON.MeshBuilder.CreateGround("water_surface", { width: 4000, height: 4000, subdivisions: 4 }, scene);
        this.water = OceanGeo;
        this.water.scaling = new BABYLON.Vector3(1500 * SKYBOX_SCALING,1500 * SKYBOX_SCALING,1500 * SKYBOX_SCALING);
        addVS(waterVSrc, "ocean");
        addFS(waterFSrc, "ocean");
        let definesString = "#define USE_NORMAL_MAPS";

        this.shadMat = new BABYLON.ShaderMaterial("ocean_shader", scene, {
            vertex: "ocean",
            fragment: "ocean",
            },
            {
                attributes: ["position", "normal", "uv"],
                uniforms: ["world", "worldView", "worldViewProjection", "view", "projection","texRotations"],
                samplers: ["envCubemapSampler", "normalSampler"],
                defines: [definesString]
            });

        
        let normalMap = new BABYLON.Texture("./assets/textures_waterbump.png", scene);
        this.shadMat.setTexture("normalSampler", normalMap);  

        let texRotAngles = [0, 130];
        let texRotVectors = [];
        for(let i=0;i<texRotAngles.length;i++)
        {
            let an_rad = texRotAngles[i]*Math.PI/180;
            texRotVectors.push(Math.cos(an_rad));
            texRotVectors.push(Math.sin(an_rad));
            texRotVectors.push(-Math.sin(an_rad));            
            texRotVectors.push(Math.cos(an_rad));
        }
        this.shadMat.setArray4("texRotations", texRotVectors);

        this.water.material = this.shadMat;
        //this.water.renderingGroupId = 0;
    }

    setEnvCubemap(envCubeMap)
    {
        this.shadMat.setTexture("envCubemapSampler", envCubeMap);
    }

    update(camPos, sunDir, timer)
    {
        this.shadMat.setFloat("time", timer.runtime);
        this.shadMat.setVector3("cameraPosition", camPos);
        this.shadMat.setVector3("sunDirWorld", sunDir);        
    }
}
