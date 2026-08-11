class PositionerAxis
{
    constructor(Coral_Height)
    {
        this.coralBoxRotQuart = BABYLON.Quaternion.FromEulerAngles(fxrand()*300, fxrand()*300, fxrand()*300);
        this.box_scale_major = 1 + fxrand() * 2.5;
        this.box_scale_minor = 0.25 + 0.5 * fxrand();
        this.coral_uniform_distrib = fxrand() * fxrand();
        this.height = Coral_Height;    
    }

    samplePosClustered(box_scale)
    {
        let min1_pl1 = (fxrand()-0.5)*2;
        let sign = Math.sign(min1_pl1);
        let val = sign == 0 ? 0 : sign * Math.pow(Math.abs(min1_pl1), 0.5);
        return val * box_scale/2;
    }

    samplePosUniform(box_scale)
    {
        return (fxrand()-0.5)*box_scale;
    }

    samplePos(box_scale)
    {
        return this.samplePosUniform(box_scale) * this.coral_uniform_distrib + (1-this.coral_uniform_distrib) * this.samplePosClustered(box_scale);
    }

    sampleVector()
    {
        let pos = new BABYLON.Vector3(this.samplePos(this.box_scale_minor), this.samplePos(this.box_scale_minor), this.samplePos(this.box_scale_major));
        pos.rotateByQuaternionToRef(this.coralBoxRotQuart, pos);
        pos.y += this.height;
        return pos;        
    }
}

class PositionerConvex
{
    constructor(Coral_Height)
    {
        this.points = [];
        this.n_points = fxrand_int(3, 6);
        this.box_size = 2 + fxrand();
        this.clustering = 2.5 + fxrand()*3;
        this.center = new BABYLON.Vector3(0,0,0);
        this.height = Coral_Height;

        while(this.points.length < this.n_points)
        {
            let newPoint = new BABYLON.Vector3((fxrand()-0.5)*this.box_size, (fxrand()-0.5)*this.box_size, (fxrand()-0.5)*this.box_size);
            let keepPoint = true;
            for(let i=0;i<this.points.length;i++)
            {
                let existPoint = this.points[i];
                let dPoints = new BABYLON.Vector3(newPoint.x - existPoint.x, newPoint.y - existPoint.y, newPoint.z - existPoint.z);
                if(dPoints.length() < 0.5)
                {
                    keepPoint = false;
                }
            }

            if(keepPoint)
            {
                this.points.push(newPoint);
                this.center.x += newPoint.x;
                this.center.y += newPoint.y;
                this.center.z += newPoint.z;
            }
        }
        
        this.center.x /= this.n_points;
        this.center.y /= this.n_points;
        this.center.z /= this.n_points;
    }

    sampleVector()
    {
        let weights = [];
        let sumWeights = 0;
        for(let i=0;i<this.points.length;i++)
        {
            let w = Math.pow(fxrand(), this.clustering);
            weights.push(w);
            sumWeights += w;            
        }
        
        let ret = new BABYLON.Vector3(0,0,0);
        for(let i=0;i<this.points.length;i++)
        {
            ret.x += this.points[i].x * weights[i] / sumWeights;
            ret.y += this.points[i].y * weights[i] / sumWeights;
            ret.z += this.points[i].z * weights[i] / sumWeights;
        }
        ret.x -= this.center.x;
        ret.y += this.height - this.center.y;
        ret.z -= this.center.z;
        return ret;
    }
}
