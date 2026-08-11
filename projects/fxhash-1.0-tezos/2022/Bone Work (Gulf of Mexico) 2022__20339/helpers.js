function rayPlaneIntersection(pc, pd1, pd2, ray)
{
    let point1 = new BABYLON.Vector3(pc.x + pd1.x, pc.y + pd1.y, pc.z + pd1.z);
    let point2 = new BABYLON.Vector3(pc.x + pd2.x, pc.y + pd2.y, pc.z + pd2.z);
    let plane = BABYLON.Plane.FromPoints(pc, point1, point2);

    let intTest = ray.intersectsPlane(plane);
    let ret = BABYLON.Vector3.Zero();
    if(intTest != null)
    {
        ret.x = ray.origin.x + ray.direction.x * intTest;
        ret.y = ray.origin.y + ray.direction.y * intTest;
        ret.z = ray.origin.z + ray.direction.z * intTest;
    }
    return ret;
}

function lerp(a, b, w)
{
    return a*(1-w) + b*w;
}

var addFS = (src, pre) => BABYLON.Effect.ShadersStore[pre + "FragmentShader"] = src;
var addVS = (src, pre) => BABYLON.Effect.ShadersStore[pre + "VertexShader"] = src;

function fxrand_int(min_incl, max_incl)
{
    fl = fxrand() * (max_incl+0.99 - min_incl) + min_incl;
    return Math.floor(fl);
}
